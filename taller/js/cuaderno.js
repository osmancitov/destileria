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

    // Índice de navegación: solo capítulos y secciones principales (h1/h2).
    const encabezados = [...destino.querySelectorAll('h1, h2')];
    if (encabezados.length > 1) {
      const indice = document.createElement('nav');
      indice.className = 'indice-cuaderno';
      indice.setAttribute('aria-label', 'Contenido del cuaderno');
      const tituloIndice = document.createElement('p');
      tituloIndice.className = 'indice-cuaderno-titulo';
      tituloIndice.textContent = 'En esta lectura';
      indice.append(tituloIndice);
      const lista = document.createElement('ul');
      encabezados.forEach((encabezado, numero) => {
        const id = `seccion-${numero + 1}`;
        encabezado.id = id;
        const elemento = document.createElement('li');
        if (encabezado.tagName === 'H2') elemento.className = 'indice-cuaderno-h2';
        const enlace = document.createElement('a');
        enlace.href = `#${id}`;
        enlace.textContent = encabezado.textContent;
        elemento.append(enlace);
        lista.append(elemento);
      });
      indice.append(lista);
      destino.insertBefore(indice, destino.firstChild);
    }

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
