// document.addEventListener("DOMContentLoaded", function () {
//     const pdfFrame = document.querySelector(".pdf-container iframe");

//     if (!pdfFrame) return; // Exit if no iframe found

//     // Function to set dimensions based on screen size
//     function resizePDF() {
//         if (window.matchMedia("(max-width: 480px)").matches) {
//             // Small mobile
//             pdfFrame.style.width = "100%";
//             pdfFrame.style.height = "50vh"; // Half the viewport height
//         } 
//         else if (window.matchMedia("(max-width: 768px)").matches) {
//             // Mobile / small tablet
//             pdfFrame.style.width = "100%";
//             pdfFrame.style.height = "60vh";
//         } 
//         else if (window.matchMedia("(max-width: 1024px)").matches) {
//             // Large tablet
//             pdfFrame.style.width = "100%";
//             pdfFrame.style.height = "70vh";
//         } 
//         else {
//             // Desktop
//             pdfFrame.style.width = "120%";
//             pdfFrame.style.height = "100vh"; // Almost full height under sidebar
//         }
//     }

//     // Initial check
//     resizePDF();

//     // Run on window resize
//     window.addEventListener("resize", resizePDF);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".pdf-container");
//   if (!container) return;

//   const pdfFrame = container.querySelector("iframe");
//   if (!pdfFrame) return;

//   // Keep the original source (without any hash)
//   const originalSrc = pdfFrame.src.split('#')[0];

//   // Simple aspect-ratio sizing (optional)
//   function resizePDF() {
//     const aspectRatio = 1.414; // A4 portrait; change to 1.3 for Letter
//     pdfFrame.style.width = "100%";
//     const width = container.clientWidth || pdfFrame.clientWidth;
//     pdfFrame.style.height = Math.round(width * aspectRatio) + "px";
//   }
//   resizePDF();
//   window.addEventListener("resize", resizePDF);

//   // Zoom UI: percent zooms and a Fit-Width action
//   const zoomLevels = [50, 75, 90, 100, 125, 150, 200];
//   let currentIndex = zoomLevels.indexOf(100);
//   if (currentIndex === -1) currentIndex = 3;

//   const toolbar = document.createElement("div");
//   toolbar.className = "pdf-toolbar";
//   toolbar.innerHTML = `
//     <button class="zoom-out" aria-label="Zoom out">−</button>
//     <button class="zoom-reset" aria-label="Reset zoom">${zoomLevels[currentIndex]}%</button>
//     <button class="zoom-in" aria-label="Zoom in">+</button>
//     <button class="fit-width" aria-label="Fit width">Fit width</button>
//   `;
//   container.insertBefore(toolbar, pdfFrame);

//   function setPdfHash(val) {
//     // val can be a number (e.g. 100) or a string like 'page-width'
//     pdfFrame.src = originalSrc + "#zoom=" + val;
//   }
//   function updateResetLabel() {
//     toolbar.querySelector(".zoom-reset").textContent = `${zoomLevels[currentIndex]}%`;
//   }

//   toolbar.querySelector(".zoom-out").addEventListener("click", () => {
//     if (currentIndex > 0) currentIndex--;
//     updateResetLabel();
//     setPdfHash(zoomLevels[currentIndex]);
//   });
//   toolbar.querySelector(".zoom-in").addEventListener("click", () => {
//     if (currentIndex < zoomLevels.length - 1) currentIndex++;
//     updateResetLabel();
//     setPdfHash(zoomLevels[currentIndex]);
//   });
//   toolbar.querySelector(".zoom-reset").addEventListener("click", () => {
//     currentIndex = zoomLevels.indexOf(100);
//     updateResetLabel();
//     setPdfHash(zoomLevels[currentIndex]);
//   });
//   toolbar.querySelector(".fit-width").addEventListener("click", () => {
//     setPdfHash("page-width");
//   });
// });



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
