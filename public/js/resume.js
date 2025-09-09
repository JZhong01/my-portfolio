document.addEventListener("DOMContentLoaded", function () {
    const pdfFrame = document.querySelector(".pdf-container iframe");

    if (!pdfFrame) return; // Exit if no iframe found

    // Function to set dimensions based on screen size
    function resizePDF() {
        if (window.matchMedia("(max-width: 480px)").matches) {
            // Small mobile
            pdfFrame.style.width = "100%";
            pdfFrame.style.height = "50vh"; // Half the viewport height
        } 
        else if (window.matchMedia("(max-width: 768px)").matches) {
            // Mobile / small tablet
            pdfFrame.style.width = "100%";
            pdfFrame.style.height = "60vh";
        } 
        else if (window.matchMedia("(max-width: 1024px)").matches) {
            // Large tablet
            pdfFrame.style.width = "100%";
            pdfFrame.style.height = "70vh";
        } 
        else {
            // Desktop
            pdfFrame.style.width = "100%";
            pdfFrame.style.height = "80vh"; // Almost full height under sidebar
        }
    }

    // Initial check
    resizePDF();

    // Run on window resize
    window.addEventListener("resize", resizePDF);
});
