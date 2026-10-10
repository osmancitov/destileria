/* Destilería Osmancito v18 */
/* 260621_i.js */
/* Drawer unificado: ⚙ flotante, panel con herramientas y TOC dinámico desde h1 */

(function () {
  'use strict';

  /* ── Barra de progreso ─────────────────────────────────── */
  function initProgreso() {
    var barra = document.createElement('div');
    barra.id = 'barra-progreso';
    document.body.prepend(barra);

    function actualizar() {
      var scroll = window.scrollY || document.documentElement.scrollTop;
      var alto = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.width = (alto > 0 ? (scroll / alto) * 100 : 0).toFixed(2) + '%';
    }

    window.addEventListener('scroll', actualizar, { passive: true });
    actualizar();
  }

  /* ── Drawer ────────────────────────────────────────────── */
  function initDrawer() {

    /* Overlay */
    var overlay = document.createElement('div');
    overlay.id = 'do-overlay';
    document.body.appendChild(overlay);

    /* Drawer */
    var drawer = document.createElement('div');
    drawer.id = 'do-drawer';

    /* Herramientas */
    var herramientas = document.createElement('div');
    herramientas.id = 'do-herramientas';

    /* Botón tema */
    var modoClaro = false;
    var btnTema = document.createElement('button');
    btnTema.className = 'do-btn';
    btnTema.textContent = '☀';

    btnTema.addEventListener('click', function () {
      modoClaro = !modoClaro;
      document.body.classList.toggle('modo-claro', modoClaro);
      btnTema.textContent = modoClaro ? '☽' : '☀';
      try { localStorage.setItem('do-tema', modoClaro ? 'claro' : 'oscuro'); } catch(e) {}
    });

    try {
      if (localStorage.getItem('do-tema') === 'claro') {
        modoClaro = true;
        document.body.classList.add('modo-claro');
        btnTema.textContent = '☽';
      }
    } catch(e) {}

    /* Botón fuente */
    var fuentes = ['fuente-uno', 'fuente-dos', 'fuente-tres', 'fuente-cuatro', 'fuente-cinco'];
    var fuenteIdx = 0;
    var btnFuente = document.createElement('button');
    btnFuente.className = 'do-btn';
    btnFuente.textContent = 'Aa';

    btnFuente.addEventListener('click', function () {
      document.body.classList.remove(fuentes[fuenteIdx]);
      fuenteIdx = (fuenteIdx + 1) % fuentes.length;
      document.body.classList.add(fuentes[fuenteIdx]);
      try { localStorage.setItem('do-fuente', fuenteIdx); } catch(e) {}
    });

    try {
      var guardado = parseInt(localStorage.getItem('do-fuente'));
      if (!isNaN(guardado) && guardado > 0) {
        fuenteIdx = guardado;
        document.body.classList.add(fuentes[fuenteIdx]);
      }
    } catch(e) {}

    /* Botón tamaño */
    var tamanos       = ['100%', '90%', '80%'];
    var tamanoLabels  = ['A',    'A−',  'A--' ];
    var tamanoIdx = 0;
    var btnTamano = document.createElement('button');
    btnTamano.className = 'do-btn';
    btnTamano.textContent = tamanoLabels[tamanoIdx];

    function aplicarTamano(idx) {
      document.documentElement.style.fontSize = tamanos[idx];
      btnTamano.textContent = tamanoLabels[idx];
    }

    btnTamano.addEventListener('click', function () {
      tamanoIdx = (tamanoIdx + 1) % tamanos.length;
      aplicarTamano(tamanoIdx);
      try { localStorage.setItem('do-tamano', tamanoIdx); } catch(e) {}
    });

    try {
      var guardadoTamano = parseInt(localStorage.getItem('do-tamano'));
      if (!isNaN(guardadoTamano) && guardadoTamano > 0) {
        tamanoIdx = guardadoTamano;
        aplicarTamano(tamanoIdx);
      }
    } catch(e) {}

    herramientas.appendChild(btnTema);
    herramientas.appendChild(btnFuente);
    herramientas.appendChild(btnTamano);

    /* TOC dinámico */
    var tocEl = document.createElement('nav');
    tocEl.id = 'do-toc';

    var encabezados = document.querySelectorAll('h1');
    encabezados.forEach(function (h, i) {
      if (!h.id) {
        h.id = 'seccion-' + i + '-' + h.textContent.trim()
          .toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
      }
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.trim();
      a.addEventListener('click', function () { cerrar(); });
      tocEl.appendChild(a);
    });

    drawer.appendChild(herramientas);
    drawer.appendChild(tocEl);
    document.body.appendChild(drawer);

    /* Trigger ⚙ */
    var trigger = document.createElement('button');
    trigger.id = 'do-trigger';
    trigger.textContent = '⚙';
    trigger.setAttribute('aria-label', 'Abrir panel');
    document.body.appendChild(trigger);

    /* Abrir / cerrar */
    function abrir() {
      drawer.classList.add('abierto');
      overlay.classList.add('activo');
    }

    function cerrar() {
      drawer.classList.remove('abierto');
      overlay.classList.remove('activo');
    }

    trigger.addEventListener('click', function () {
      drawer.classList.contains('abierto') ? cerrar() : abrir();
    });

    overlay.addEventListener('click', cerrar);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrar();
    });

    /* TOC activo por scroll */
    var enlaces = tocEl.querySelectorAll('a');
    if (encabezados.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            enlaces.forEach(function (a) { a.classList.remove('activo'); });
            var activo = tocEl.querySelector('a[href="#' + id + '"]');
            if (activo) activo.classList.add('activo');
          }
        });
      }, { rootMargin: '-10% 0px -80% 0px' });

      encabezados.forEach(function (h) { observer.observe(h); });
    }
  }

  /* ── Inicialización ────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initProgreso();
      initDrawer();
    });
  } else {
    initProgreso();
    initDrawer();
  }

})();
