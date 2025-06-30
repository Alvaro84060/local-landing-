const slides = document.querySelectorAll('.testimonial-slide');
const btnNext = document.querySelector('.slider-btn.next');
const btnPrev = document.querySelector('.slider-btn.prev');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

btnNext.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
btnPrev.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide cada 8 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 8000);

// Mostrar slide inicial
showSlide(currentSlide);
