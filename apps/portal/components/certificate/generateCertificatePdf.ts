import { PDFDocument, PDFFont, PDFPage, rgb, StandardFonts, degrees } from "pdf-lib";
import QRCode from "qrcode";
import type { CertificateInfo, RegistrationData } from "@/lib/types";
import { BASE_PATH } from "@/lib/basePath";

const ORANGE = rgb(1, 0.337, 0.094); // #ff5618 — laranja oficial ATLASGR
const ORANGE_SOFT = rgb(1, 0.62, 0.42);
const GRAPHITE = rgb(0.13, 0.14, 0.16);
const MUTED = rgb(0.42, 0.44, 0.47);
const HAIRLINE = rgb(0.82, 0.83, 0.85);
const MARK_RATIO = 2514 / 1717; // largura / altura do atlas-mark.png

function centerText(
  page: PDFPage,
  text: string,
  y: number,
  font: PDFFont,
  size: number,
  color = GRAPHITE,
  pageWidth: number
) {
  const w = font.widthOfTextAtSize(text, size);
  page.drawText(text, { x: (pageWidth - w) / 2, y, size, font, color });
  return w;
}

function checkGlyph(page: PDFPage, x: number, y: number, size = 7) {
  page.drawRectangle({ x, y, width: size, height: size, color: ORANGE, borderColor: ORANGE, borderWidth: 0 });
  page.drawLine({ start: { x: x + 1.4, y: y + size * 0.5 }, end: { x: x + size * 0.42, y: y + 1.6 }, thickness: 1, color: rgb(1, 1, 1) });
  page.drawLine({ start: { x: x + size * 0.42, y: y + 1.6 }, end: { x: x + size - 1.2, y: y + size - 1.2 }, thickness: 1, color: rgb(1, 1, 1) });
}

export async function generateCertificatePdf(
  registration: RegistrationData,
  cert: CertificateInfo,
  moduleTitles: string[]
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([841.89, 595.28]); // A4 paisagem
  const { width, height } = page.getSize();

  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique);

  let markImage: Awaited<ReturnType<typeof doc.embedPng>> | null = null;
  try {
    const res = await fetch(`${BASE_PATH}/brand/atlas-mark.png`);
    const bytes = new Uint8Array(await res.arrayBuffer());
    markImage = await doc.embedPng(bytes);
  } catch {
    markImage = null;
  }

  // ---------- fundo e molduras ----------
  page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(1, 1, 1) });

  // marca d'água central, sutil, levemente rotacionada
  if (markImage) {
    const wmH = 300;
    const wmW = wmH * MARK_RATIO;
    page.drawImage(markImage, {
      x: (width - wmW) / 2,
      y: (height - wmH) / 2 - 10,
      width: wmW,
      height: wmH,
      opacity: 0.045,
      rotate: degrees(-6),
    });
  }

  page.drawRectangle({ x: 20, y: 20, width: width - 40, height: height - 40, borderColor: HAIRLINE, borderWidth: 1 });
  page.drawRectangle({ x: 30, y: 30, width: width - 60, height: height - 60, borderColor: ORANGE, borderWidth: 1.4 });
  // cantos em destaque
  const cornerLen = 22;
  [
    [30, height - 30],
    [width - 30, height - 30],
    [30, 30],
    [width - 30, 30],
  ].forEach(([cx, cy], i) => {
    const dx = i % 2 === 0 ? 1 : -1;
    const dy = i < 2 ? -1 : 1;
    page.drawLine({ start: { x: cx, y: cy }, end: { x: cx + dx * cornerLen, y: cy }, thickness: 2.6, color: ORANGE });
    page.drawLine({ start: { x: cx, y: cy }, end: { x: cx, y: cy + dy * cornerLen }, thickness: 2.6, color: ORANGE });
  });

  // ---------- cabeçalho ----------
  const headerY = height - 78;
  if (markImage) {
    const markH = 26;
    const markW = markH * MARK_RATIO;
    const wordmark = "ATLASGR";
    const wmWidth = bold.widthOfTextAtSize(wordmark, 21);
    const gap = 10;
    const totalW = markW + gap + wmWidth;
    const startX = (width - totalW) / 2;
    page.drawImage(markImage, { x: startX, y: headerY - markH + 4, width: markW, height: markH });
    page.drawText(wordmark, { x: startX + markW + gap, y: headerY - 16, size: 21, font: bold, color: GRAPHITE });
  } else {
    centerText(page, "ATLASGR", headerY - 16, bold, 21, GRAPHITE, width);
  }
  centerText(page, "PORTAL DE ONBOARDING E TREINAMENTO CORPORATIVO", headerY - 34, regular, 8.5, MUTED, width);

  const ruleW = 70;
  page.drawLine({
    start: { x: (width - ruleW) / 2, y: headerY - 50 },
    end: { x: (width + ruleW) / 2, y: headerY - 50 },
    thickness: 1,
    color: ORANGE_SOFT,
  });

  // ---------- título ----------
  centerText(page, "CERTIFICADO DE CONCLUSÃO", headerY - 92, bold, 27, GRAPHITE, width);
  centerText(page, "Certificamos que", headerY - 122, italic, 12, MUTED, width);
  centerText(page, registration.nomeCompleto.toUpperCase(), headerY - 150, bold, 22, GRAPHITE, width);
  centerText(
    page,
    `CPF ${registration.cpf}   ·   ${registration.cargo}   ·   ${registration.departamento}`,
    headerY - 168,
    regular,
    9.5,
    MUTED,
    width
  );

  const paragraph = `concluiu, com ${Math.round(cert.score)}% de aproveitamento, a trilha de onboarding ATLASGR — incluindo os módulos abaixo e a prova final —, totalizando ${cert.cargaHoraria} minutos de carga horária.`;
  centerText(page, paragraph, headerY - 192, regular, 10.5, GRAPHITE, width);

  // ---------- lista de módulos (duas colunas) ----------
  const listTop = headerY - 222;
  const colGap = 26;
  const colWidth = (width - 140 - colGap) / 2;
  const leftX = 70;
  const rightX = leftX + colWidth + colGap;
  const rowH = 17;
  const perCol = Math.ceil(moduleTitles.length / 2);

  moduleTitles.forEach((title, i) => {
    const col = i < perCol ? 0 : 1;
    const row = i < perCol ? i : i - perCol;
    const x = col === 0 ? leftX : rightX;
    const y = listTop - row * rowH;
    checkGlyph(page, x, y - 6, 7);
    const label = title.length > 58 ? `${title.slice(0, 55)}…` : title;
    page.drawText(label, { x: x + 14, y: y - 6, size: 9.5, font: regular, color: GRAPHITE });
  });

  const listBottom = listTop - (perCol - 1) * rowH - 22;

  page.drawLine({ start: { x: 60, y: listBottom }, end: { x: width - 60, y: listBottom }, thickness: 1, color: HAIRLINE });

  // ---------- rodapé: assinatura | selo | qr ----------
  const footerY = listBottom - 46;
  const sigX = 90;
  page.drawLine({ start: { x: sigX, y: footerY }, end: { x: sigX + 170, y: footerY }, thickness: 1, color: MUTED });
  page.drawText("Diretoria ATLASGR", { x: sigX + 22, y: footerY - 14, size: 10, font: bold, color: GRAPHITE });
  page.drawText("Onboarding & Desenvolvimento Humano", { x: sigX, y: footerY - 27, size: 7.5, font: regular, color: MUTED });

  // selo circular central
  const sealCx = width / 2;
  const sealCy = footerY + 18;
  page.drawCircle({ x: sealCx, y: sealCy, size: 30, borderColor: ORANGE, borderWidth: 1.6, color: rgb(1, 0.97, 0.95) });
  page.drawCircle({ x: sealCx, y: sealCy, size: 24, borderColor: ORANGE_SOFT, borderWidth: 0.8 });
  centerText(page, "APROVADO", sealCy + 4, bold, 7.5, ORANGE, width);
  centerText(page, `${Math.round(cert.score)}%`, sealCy - 9, bold, 11, GRAPHITE, width);

  const qrDataUrl = await QRCode.toDataURL(`ATLASGR-CERT|id=${cert.id}|hash=${cert.hash}`, {
    margin: 0,
    width: 220,
    color: { dark: "#15171a", light: "#ffffff" },
  });
  const qrBytes = Uint8Array.from(atob(qrDataUrl.split(",")[1]), (c) => c.charCodeAt(0));
  const qrImage = await doc.embedPng(qrBytes);
  const qrSize = 64;
  const qrX = width - 90 - qrSize;
  page.drawRectangle({ x: qrX - 6, y: footerY - 6, width: qrSize + 12, height: qrSize + 12, borderColor: HAIRLINE, borderWidth: 1 });
  page.drawImage(qrImage, { x: qrX, y: footerY, width: qrSize, height: qrSize });
  page.drawText("Validação digital", { x: qrX - 6, y: footerY - 20, size: 7.5, font: regular, color: MUTED });

  // ---------- faixa inferior de metadados ----------
  const metaY = 46;
  const issued = new Date(cert.issuedAt);
  const dataStr = issued.toLocaleDateString("pt-BR");
  const horaStr = issued.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  page.drawText(`ID ${cert.id}  ·  Emitido em ${dataStr} às ${horaStr}`, { x: 60, y: metaY, size: 8, font: regular, color: MUTED });
  page.drawText(`SHA-256  ${cert.hash}`, { x: 60, y: metaY - 12, size: 7, font: regular, color: MUTED });
  centerText(
    page,
    "Documento gerado localmente no navegador para fins de demonstração — não possui assinatura digital com validade jurídica.",
    metaY - 12,
    italic,
    7,
    MUTED,
    width
  );

  return doc.save();
}
