/* Lightbox de la Bodega adaptado a imágenes markdown del Taller. */
document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('lb-overlay');
  var lbImg = document.getElementById('lb-img');
  if (!overlay || !lbImg) return;
  document.addEventListener('click', function (e) {
    var img = e.target.closest('.lectura img, .img-container img');
    if (!img) return;
    e.preventDefault();
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    overlay.classList.add('activo');
    document.body.style.overflow = 'hidden';
  });
  function cerrar(e) {
    if (e && e.type === 'click' && e.target !== overlay) return;
    if (e && e.type === 'keydown' && e.key !== 'Escape') return;
    overlay.classList.remove('activo');
    document.body.style.overflow = '';
    lbImg.removeAttribute('src');
  }
  overlay.addEventListener('click', cerrar);
  document.addEventListener('keydown', cerrar);
});
