document.addEventListener("DOMContentLoaded", function () {
  const pdfObject = document.querySelector(".pdf-container object");
  if (!pdfObject) return;

  function resizePDF() {
    const aspectRatio = 1.414; // A4
    const width = pdfObject.clientWidth;
    pdfObject.style.height = width * aspectRatio + "px";
  }

  resizePDF();
  window.addEventListener("resize", resizePDF);
});
