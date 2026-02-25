import './style.css'

const track = document.getElementById('track');
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

// Avança exatamente a largura de um slide
btnAvancar.addEventListener('click', () => {
  track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
});

// Recua exatamente a largura de um slide
btnVoltar.addEventListener('click', () => {
  track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
});