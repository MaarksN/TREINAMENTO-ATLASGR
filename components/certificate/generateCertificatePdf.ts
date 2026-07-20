import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import QRCode from "qrcode";
import type { CertificateInfo, RegistrationData } from "@/lib/types";

const ORANGE = rgb(1, 0.337, 0.094); // #ff5618 — laranja oficial ATLASGR
const GRAPHITE = rgb(0.149, 0.161, 0.18);
const MUTED = rgb(0.42, 0.44, 0.47);

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

  // Moldura
  page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(1, 1, 1) });
  page.drawRectangle({ x: 24, y: 24, width: width - 48, height: height - 48, borderColor: ORANGE, borderWidth: 2 });
  page.drawRectangle({ x: 0, y: height - 14, width, height: 14, color: ORANGE });
  page.drawRectangle({ x: 0, y: 0, width, height: 14, color: ORANGE });

  page.drawText("ATLASGR", { x: 60, y: height - 70, size: 22, font: bold, color: ORANGE });
  page.drawText("Portal de Onboarding e Treinamento Corporativo", { x: 60, y: height - 90, size: 10, font: regular, color: MUTED });

  page.drawText("CERTIFICADO DE CONCLUSÃO", { x: 60, y: height - 150, size: 28, font: bold, color: GRAPHITE });
  page.drawText("Certificamos que", { x: 60, y: height - 190, size: 12, font: regular, color: MUTED });
  page.drawText(registration.nomeCompleto, { x: 60, y: height - 220, size: 22, font: bold, color: GRAPHITE });
  page.drawText(`CPF: ${registration.cpf}   ·   Cargo: ${registration.cargo}   ·   Departamento: ${registration.departamento}`, {
    x: 60,
    y: height - 242,
    size: 10,
    font: regular,
    color: MUTED,
  });

  const modulesText = `concluiu, com aproveitamento, os seguintes módulos e a prova final da trilha de onboarding ATLASGR:`;
  page.drawText(modulesText, { x: 60, y: height - 275, size: 11, font: regular, color: GRAPHITE });

  moduleTitles.forEach((t, i) => {
    page.drawText(`•  ${t}`, { x: 70, y: height - 295 - i * 16, size: 10, font: regular, color: GRAPHITE });
  });

  const issued = new Date(cert.issuedAt);
  const dataStr = issued.toLocaleDateString("pt-BR");
  const horaStr = issued.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  const infoY = 150;
  page.drawText(`Data: ${dataStr}   Hora: ${horaStr}   Carga horária: ${cert.cargaHoraria} min`, {
    x: 60,
    y: infoY,
    size: 9,
    font: regular,
    color: MUTED,
  });
  page.drawText(`ID do certificado: ${cert.id}`, { x: 60, y: infoY - 16, size: 9, font: regular, color: MUTED });
  page.drawText(`Hash de verificação (SHA-256): ${cert.hash}`, { x: 60, y: infoY - 32, size: 8, font: regular, color: MUTED });
  page.drawText(
    "Este certificado é gerado localmente, no navegador, como parte de um protótipo de demonstração — não possui assinatura digital com validade jurídica.",
    { x: 60, y: infoY - 52, size: 8, font: regular, color: MUTED }
  );

  // QR code
  const qrDataUrl = await QRCode.toDataURL(`ATLASGR-CERT|id=${cert.id}|hash=${cert.hash}`, { margin: 0, width: 200 });
  const qrBytes = Uint8Array.from(atob(qrDataUrl.split(",")[1]), (c) => c.charCodeAt(0));
  const qrImage = await doc.embedPng(qrBytes);
  const qrSize = 110;
  page.drawImage(qrImage, { x: width - qrSize - 70, y: 60, width: qrSize, height: qrSize });
  page.drawText("Validação", { x: width - qrSize - 70, y: 50, size: 8, font: regular, color: MUTED });

  return doc.save();
}
