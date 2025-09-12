document.addEventListener('DOMContentLoaded', function () {
  const obj = document.querySelector('.pdf-container object');
  if (!obj) return;

  // original base URL (no fragment)
  const base = obj.getAttribute('data-base') || obj.getAttribute('data').split('#')[0];

  function applyZoomForViewport() {
    // customize breakpoints and zooms here
    if (window.matchMedia('(max-width: 480px)').matches) {
      // phone: open zoomed-out so it doesn't look squashed (60% example)
      obj.data = base + '#zoom=60';
    } else {
      // tablet/desktop: fit width like before
      obj.data = base + '#zoom=page-width';
    }
  }

  // initial apply
  applyZoomForViewport();

  // update on resize/orientation change
  window.addEventListener('resize', applyZoomForViewport);
  window.addEventListener('orientationchange', applyZoomForViewport);
});
