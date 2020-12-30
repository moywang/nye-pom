import domtoimage from "dom-to-image";
import { PDFDocument } from "pdf-lib";

import template from "./POM_Template.pdf";

const sharingImages = async (selector: string) => {
  const els = document.querySelectorAll(selector);
  if (els.length === 0) {
    alert("no element found for image conversion!");
    throw new Error("No element found");
  }

  const imgsBuffers: ArrayBuffer[] = await Promise.all(
    Array.from(els).map(async (el) => {
      const dataUrl = await domtoimage.toPng(el, { quality: 100 });
      return await fetch(dataUrl).then((res) => res.arrayBuffer());
    })
  );

  return imgsBuffers;
};

const savePdf = (filename: string, bytes: Uint8Array) => {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "ilovepdf123.pdf";
  link.click();
};

const downloadPOMPdf = async (selector: string, filename: string) => {
  const tmplPdfBytes = await fetch(template).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(tmplPdfBytes);

  const sharingImgs = await sharingImages(selector);
  await Promise.all(
    sharingImgs.map(async (sharingImgBytes) => {
      const sharingImg = await pdfDoc.embedPng(sharingImgBytes);

      const croppedWidth = (sharingImg.width * 3) / 4;
      const croppedHeight = (sharingImg.height * 3) / 4;
      const sharingPage = pdfDoc.addPage([croppedWidth, croppedHeight]);
      sharingPage.drawImage(sharingImg, {
        x: 0,
        y: 0,
        width: croppedWidth,
        height: croppedHeight,
      });
    })
  );

  const pdfBytes = await pdfDoc.save();
  savePdf(filename, pdfBytes);
};

export default downloadPOMPdf;
