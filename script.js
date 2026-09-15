// Al hacer clic en el botón del hero, baja suavemente hasta la sección de la carta
const btnIrCarta = document.getElementById('btn-ir-carta');
const seccionCarta = document.getElementById('carta');

btnIrCarta.addEventListener('click', () => {
  seccionCarta.scrollIntoView({ behavior: 'smooth' });
});

// Al hacer clic en el sobre, se abre (y si se vuelve a tocar, se cierra)
const sobre = document.getElementById('sobre');

sobre.addEventListener('click', () => {
  sobre.classList.toggle('abierto');
});

// Asegura que los videos de la galería no queden silenciados por defecto
// (por si algún visor externo -Drive, WhatsApp, etc.- les cambia el volumen)
document.querySelectorAll('.galeria video').forEach((video) => {
  video.muted = false;
  video.volume = 1;
});