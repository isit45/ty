let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function mostrarSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  const slideWidth = slides[0].offsetWidth + 80; // Largura do slide + margin-right
  const containerWidth = document.querySelector(".carrossel-container").offsetWidth;
  const offset = -slideIndex * slideWidth + (containerWidth - slideWidth) / 2;
  document.querySelector(".slides").style.transform = `translateX(${offset}px)`;
  // Reseta flips ao mudar slide
  slides.forEach(slide => {
    const inner = slide.querySelector('.flip-inner');
    if (inner) inner.classList.remove('flipped');
  });
  // Corrige visibilidade dos slides
  slides.forEach((slide, index) => {
    slide.style.opacity = index === slideIndex ? '1' : '0';
    slide.style.pointerEvents = index === slideIndex ? 'auto' : 'none';
  });
}

prev.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarSlide(slideIndex - 1);
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarSlide(slideIndex + 1);
});

// Flip on Click
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
}, 5000);

// MENU HAMBÚRGUER
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
