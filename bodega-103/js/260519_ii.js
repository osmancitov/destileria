/* Destilería Osmancito v17 — 260519_ii.js */
/* Sistema Lightbox */

document.addEventListener('DOMContentLoaded', function(){
	/* Se ejecuta cuando el documento HTML inicial ha sido completamente cargado y analizado, lo que permite interactuar de forma segura con el Modelo de Objetos del Documento (DOM). */



(function(){
  var overlay = document.getElementById('lb-overlay');
  var lbImg   = document.getElementById('lb-img');

  document.querySelectorAll('.img-container img').forEach(function(img){
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      overlay.classList.add('activo');
      document.body.style.overflow = 'hidden';
    });
  });

  overlay.addEventListener('click', function(e){
    if(e.target === overlay){
      overlay.classList.remove('activo');
      document.body.style.overflow = '';
      lbImg.src = '';
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      overlay.classList.remove('activo');
      document.body.style.overflow = '';
      lbImg.src = '';
    }
  });
})();

});