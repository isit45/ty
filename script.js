// ======= CARROSSEL =======
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slidesContainer = document.querySelector(".slides");
const carrosselContainer = document.querySelector(".carrossel-container");

function mostrarSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  
  const containerWidth = carrosselContainer.offsetWidth;
  const slide = slides[slideIndex];
  const slideWidth = slide.offsetWidth;

  // Centraliza o slide atual
  const offset = -slide.offsetLeft + (containerWidth - slideWidth) / 2;
  slidesContainer.style.transform = `translateX(${offset}px)`;

  // Reseta flips e controla visibilidade
  slides.forEach((s, index) => {
    const inner = s.querySelector('.flip-inner');
    if (inner) inner.classList.remove('flipped');
    s.style.opacity = index === slideIndex ? '1' : '0';
    s.style.pointerEvents = index === slideIndex ? 'auto' : 'none';
  });
}

// Eventos dos controles
prev.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarSlide(slideIndex - 1);
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarSlide(slideIndex + 1);
});

// Flip ao clicar no slide
slides.forEach(slide => {
  slide.addEventListener('click', (e) => {
    if (e.target.classList.contains('prev') || e.target.classList.contains('next')) return;
    const inner = slide.querySelector('.flip-inner');
    if (inner && slide.style.opacity === '1') inner.classList.toggle('flipped');
  });
});

// Auto play
setInterval(() => {
  mostrarSlide(slideIndex + 1);
}, 10000);

// Mostra o slide inicial
mostrarSlide(slideIndex);

// ======= MENU HAMBÚRGUER =======
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
