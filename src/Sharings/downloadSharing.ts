import domtoimage from "dom-to-image";
import { PDFDocument } from "pdf-lib";

import template from "./POM_Template.pdf";

const sharingImage = async (selector: string) => {
  const el = document.querySelector(selector);
  if (!el) {
    alert("no element found for image conversion!");
    throw new Error("No element found");
  }

  const dataUrl = await domtoimage.toPng(el, { quality: 100 });

  const sharingImgBytes = await fetch(dataUrl).then((res) => res.arrayBuffer());
  return sharingImgBytes;
};

const savePdf = (filename: string, bytes: Uint8Array) => {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.click();
};

const downloadPOMPdf = async (selector: string, filename: string) => {
  const tmplPdfBytes = await fetch(template).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(tmplPdfBytes);

  const sharingImgBytes = await sharingImage(selector);
  const sharingImg = await pdfDoc.embedPng(sharingImgBytes);

  const sharingPage = pdfDoc.addPage([sharingImg.width, sharingImg.height]);
  sharingPage.drawImage(sharingImg, {
    x: 0,
    y: 0,
    width: sharingImg.width,
    height: sharingImg.height,
  });

  const pdfBytes = await pdfDoc.save();
  savePdf(filename, pdfBytes);
};

export default downloadPOMPdf;
