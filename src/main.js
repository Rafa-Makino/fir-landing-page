import './style.css';

// --- Carousel ---
const track = document.getElementById('track');
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

btnAvancar.addEventListener('click', () => {
  track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
});

btnVoltar.addEventListener('click', () => {
  track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
});

// --- Mobile Menu ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('ativo');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('ativo');
  });
});