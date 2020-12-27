import domtoimage from "dom-to-image";

const downloadSharingImage = async (selector: string) => {
  const el = document.querySelector(selector);
  if (!el) {
    alert("no element found for image conversion!");
    return;
  }

  const dataUrl = await domtoimage.toJpeg(el, {
    quality: 0.95,
  });
  var link = document.createElement("a");
  link.download = "20_21_NYE.jpeg";
  link.href = dataUrl;
  link.click();
};

export default downloadSharingImage;
