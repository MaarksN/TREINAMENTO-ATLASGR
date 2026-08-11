import { PDFDocument, PDFFont, PDFPage, rgb, StandardFonts, degrees } from "pdf-lib";
import QRCode from "qrcode";
import type { CertificateInfo, RegistrationData } from "@/lib/types";
import { BASE_PATH } from "@/lib/basePath";

// Premium Dark Mode Colors
const ORANGE = rgb(1, 0.337, 0.094); // #ff5618
const ORANGE_GLOW = rgb(1, 0.513, 0.278); // Lighter orange for accents
const BACKGROUND = rgb(0.075, 0.078, 0.09); // #131417
const SURFACE = rgb(0.11, 0.117, 0.133); // #1c1e22
const TEXT_PRIMARY = rgb(0.95, 0.95, 0.95);
const TEXT_SECONDARY = rgb(0.6, 0.62, 0.65);
const BORDER_COLOR = rgb(0.17, 0.18, 0.2);

const MARK_RATIO = 2514 / 1717; // width / height of atlas-mark.png

function centerText(
  page: PDFPage,
  text: string,
  y: number,
  font: PDFFont,
  size: number,
  color = TEXT_PRIMARY,
  pageWidth: number
) {
  // Rough estimate for letter spacing if needed, pdf-lib doesn't support native tracking
  const w = font.widthOfTextAtSize(text, size);
  page.drawText(text, { x: (pageWidth - w) / 2, y, size, font, color });
  return w;
}

function checkGlyph(page: PDFPage, x: number, y: number, size = 7) {
  page.drawRectangle({ x, y, width: size, height: size, color: ORANGE_GLOW, borderColor: ORANGE, borderWidth: 0 });
  page.drawLine({ start: { x: x + 1.4, y: y + size * 0.5 }, end: { x: x + size * 0.42, y: y + 1.6 }, thickness: 1, color: BACKGROUND });
  page.drawLine({ start: { x: x + size * 0.42, y: y + 1.6 }, end: { x: x + size - 1.2, y: y + size - 1.2 }, thickness: 1, color: BACKGROUND });
}

export async function generateCertificatePdf(
  registration: RegistrationData,
  cert: CertificateInfo,
  moduleTitles: string[]
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([841.89, 595.28]); // A4 Landscape
  const { width, height } = page.getSize();

  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique);
  const display = await doc.embedFont(StandardFonts.TimesRomanBoldItalic); // Serif for premium feel

  let markImage: Awaited<ReturnType<typeof doc.embedPng>> | null = null;
  try {
    const res = await fetch(`${BASE_PATH}/brand/atlas-mark.png`);
    const bytes = new Uint8Array(await res.arrayBuffer());
    markImage = await doc.embedPng(bytes);
  } catch {
    markImage = null;
  }

  // ---------- Premium Dark Background & Borders ----------
  page.drawRectangle({ x: 0, y: 0, width, height, color: BACKGROUND });

  // Subtle center watermark
  if (markImage) {
    const wmH = 350;
    const wmW = wmH * MARK_RATIO;
    page.drawImage(markImage, {
      x: (width - wmW) / 2,
      y: (height - wmH) / 2 - 10,
      width: wmW,
      height: wmH,
      opacity: 0.03, // Very subtle in dark mode
      rotate: degrees(0),
    });
  }

  // Outer and Inner Borders
  page.drawRectangle({ x: 20, y: 20, width: width - 40, height: height - 40, borderColor: BORDER_COLOR, borderWidth: 1 });
  page.drawRectangle({ x: 30, y: 30, width: width - 60, height: height - 60, borderColor: ORANGE, borderWidth: 1.5 });

  // High-tech corner brackets
  const cornerLen = 25;
  [
    [30, height - 30],
    [width - 30, height - 30],
    [30, 30],
    [width - 30, 30],
  ].forEach(([cx, cy], i) => {
    const dx = i % 2 === 0 ? 1 : -1;
    const dy = i < 2 ? -1 : 1;
    page.drawLine({ start: { x: cx, y: cy }, end: { x: cx + dx * cornerLen, y: cy }, thickness: 3, color: ORANGE });
    page.drawLine({ start: { x: cx, y: cy }, end: { x: cx, y: cy + dy * cornerLen }, thickness: 3, color: ORANGE });
  });

  // ---------- Header ----------
  const headerY = height - 85;
  if (markImage) {
    const markH = 28;
    const markW = markH * MARK_RATIO;
    const wordmark = "ATLASGR";
    const wmWidth = bold.widthOfTextAtSize(wordmark, 22);
    const gap = 12;
    const totalW = markW + gap + wmWidth;
    const startX = (width - totalW) / 2;
    page.drawImage(markImage, { x: startX, y: headerY - markH + 4, width: markW, height: markH, opacity: 0.9 });
    page.drawText(wordmark, { x: startX + markW + gap, y: headerY - 18, size: 22, font: bold, color: TEXT_PRIMARY });
  } else {
    centerText(page, "ATLASGR", headerY - 18, bold, 22, TEXT_PRIMARY, width);
  }
  centerText(page, "PORTAL TÁTICO E OPERACIONAL", headerY - 38, regular, 9, ORANGE, width);

  const ruleW = 100;
  page.drawLine({
    start: { x: (width - ruleW) / 2, y: headerY - 55 },
    end: { x: (width + ruleW) / 2, y: headerY - 55 },
    thickness: 1,
    color: BORDER_COLOR,
  });

  // ---------- Title & Details ----------
  centerText(page, "CERTIFICAÇÃO OFICIAL", headerY - 95, display, 32, TEXT_PRIMARY, width);
  centerText(page, "Homologamos que o(a) agente", headerY - 128, italic, 12, TEXT_SECONDARY, width);
  centerText(page, registration.nomeCompleto.toUpperCase(), headerY - 158, bold, 24, ORANGE, width);
  centerText(
    page,
    `ID: ${registration.cpf}   |   PATENTE: ${registration.cargo.toUpperCase()}   |   DIVISÃO: ${registration.departamento.toUpperCase()}`,
    headerY - 180,
    bold,
    9,
    TEXT_SECONDARY,
    width
  );

  const paragraph = `Cumpriu com distinção o treinamento de alta performance ATLASGR. O titular provou domínio operacional e estratégico, atingindo ${Math.round(cert.score)}% de eficácia em ${cert.cargaHoraria} minutos de simulação rigorosa.`;
  centerText(page, paragraph, headerY - 210, regular, 11, TEXT_PRIMARY, width);

  // ---------- Modules List ----------
  const listTop = headerY - 245;
  const colGap = 30;
  const colWidth = (width - 160 - colGap) / 2;
  const leftX = 80;
  const rightX = leftX + colWidth + colGap;
  const rowH = 18;
  const perCol = Math.ceil(moduleTitles.length / 2);

  moduleTitles.forEach((title, i) => {
    const col = i < perCol ? 0 : 1;
    const row = i < perCol ? i : i - perCol;
    const x = col === 0 ? leftX : rightX;
    const y = listTop - row * rowH;
    checkGlyph(page, x, y - 6, 8);
    const label = title.length > 58 ? `${title.slice(0, 55)}…` : title;
    page.drawText(label, { x: x + 16, y: y - 6, size: 10, font: regular, color: TEXT_SECONDARY });
  });

  const listBottom = listTop - (perCol - 1) * rowH - 30;

  page.drawLine({ start: { x: 70, y: listBottom }, end: { x: width - 70, y: listBottom }, thickness: 1, color: BORDER_COLOR });

  // ---------- Footer: Signature, Seal, QR ----------
  const footerY = listBottom - 50;
  const sigX = 100;
  page.drawLine({ start: { x: sigX, y: footerY }, end: { x: sigX + 180, y: footerY }, thickness: 1, color: BORDER_COLOR });
  page.drawText("Comando Tático ATLASGR", { x: sigX + 20, y: footerY - 16, size: 10, font: bold, color: TEXT_PRIMARY });
  page.drawText("Diretoria Operacional", { x: sigX + 45, y: footerY - 28, size: 8, font: regular, color: TEXT_SECONDARY });

  // Digital verification seal
  const sealCx = width / 2;
  const sealCy = footerY + 15;
  page.drawCircle({ x: sealCx, y: sealCy, size: 34, borderColor: ORANGE, borderWidth: 1.5, color: SURFACE });
  page.drawCircle({ x: sealCx, y: sealCy, size: 28, borderColor: BORDER_COLOR, borderWidth: 1 });
  centerText(page, "HOMOLOGADO", sealCy + 5, bold, 7, ORANGE, width);
  centerText(page, `${Math.round(cert.score)}%`, sealCy - 8, display, 12, TEXT_PRIMARY, width);

  // Scannable QR Code
  const qrDataUrl = await QRCode.toDataURL(`ATLASGR-CERT|id=${cert.id}|hash=${cert.hash}`, {
    margin: 1,
    width: 250,
    color: { dark: "#000000", light: "#ffffff" },
  });
  const qrBytes = Uint8Array.from(atob(qrDataUrl.split(",")[1]), (c) => c.charCodeAt(0));
  const qrImage = await doc.embedPng(qrBytes);
  const qrSize = 70;
  const qrX = width - 100 - qrSize;
  page.drawRectangle({ x: qrX - 8, y: footerY - 8, width: qrSize + 16, height: qrSize + 16, borderColor: BORDER_COLOR, borderWidth: 1, color: rgb(1,1,1) });
  page.drawImage(qrImage, { x: qrX, y: footerY, width: qrSize, height: qrSize });
  page.drawText("Escaneie para validar", { x: qrX - 4, y: footerY - 22, size: 8, font: regular, color: TEXT_SECONDARY });

  // ---------- Metadata ----------
  const metaY = 40;
  const issued = new Date(cert.issuedAt);
  const dataStr = issued.toLocaleDateString("pt-BR");
  const horaStr = issued.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  page.drawText(`UUID: ${cert.id}  |  EMITIDO: ${dataStr} ${horaStr}`, { x: 70, y: metaY, size: 8, font: regular, color: TEXT_SECONDARY });
  page.drawText(`ENCRYPTED HASH: ${cert.hash}`, { x: 70, y: metaY - 12, size: 7, font: regular, color: TEXT_SECONDARY });

  centerText(
    page,
    "Este documento é de uso exclusivo interno. Gerado localmente.",
    metaY - 12,
    italic,
    7,
    BORDER_COLOR, // Very subtle
    width
  );

  return doc.save();
}
