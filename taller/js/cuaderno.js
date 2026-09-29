/* Un cuaderno es un archivo .md en taller/. Ejemplo: cuaderno.html?f=debian-reference.md */
(async () => {
  const destino = document.getElementById('contenido');
  const archivo = new URLSearchParams(location.search).get('f');
  const mostrarError = (mensaje) => {
    destino.replaceChildren();
    const parrafo = document.createElement('p');
    parrafo.textContent = mensaje;
    destino.append(parrafo);
  };

  // Solo nombres de archivo locales, nunca rutas, URLs ni archivos fuera de taller/.
  if (!archivo || !/^[a-z0-9][a-z0-9_-]*\.md$/i.test(archivo)) {
    mostrarError('Cuaderno no válido. Vuelve al Taller y elige un cuaderno.');
    return;
  }
  if (!window.marked || !window.DOMPurify) {
    mostrarError('No se pudo cargar el lector. Revisa la conexión y vuelve a intentarlo.');
    return;
  }

  try {
    const respuesta = await fetch(archivo, { cache: 'no-cache' });
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    const markdown = await respuesta.text();
    const html = marked.parse(markdown, { gfm: true });
    destino.innerHTML = DOMPurify.sanitize(html);
    const titulo = destino.querySelector('h1');
    if (titulo) document.title = `${titulo.textContent} · El Taller · Destilería Osmancito`;
    // Los enlaces de la nota no deben abrir la página del taller sobre sí misma.
    destino.querySelectorAll('a[href]').forEach((enlace) => {
      if (/^https?:\/\//i.test(enlace.href)) {
        enlace.target = '_blank';
        enlace.rel = 'noopener noreferrer';
      }
    });
  } catch (error) {
    mostrarError('No se pudo abrir el cuaderno. Comprueba el enlace o vuelve a intentarlo.');
    console.error('Cuaderno:', error);
  }
})();
