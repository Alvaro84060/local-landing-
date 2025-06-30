// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Fade in on scroll
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  for (const reveal of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    const answer = button.nextElementSibling;
    if (!expanded) {
      answer.removeAttribute('hidden');
    } else {
      answer.setAttribute('hidden', '');
    }
  });
});

const basePrices = {
  turnover: 99,
  '5star': 149,
  concierge: 199,
};

const extraBedroomPrices = {
  turnover: 25,
  '5star': 35,
  concierge: 50,
};

const extraBathroomPrice = 20; // Podés ajustar este valor

const form = document.getElementById('quote-form');
const quoteResult = document.getElementById('quote-result');

form.addEventListener('submit', e => {
  e.preventDefault();

  const plan = document.getElementById('service-plan').value;
  const bedrooms = parseInt(document.getElementById('bedrooms').value);
  const bathrooms = parseInt(document.getElementById('bathrooms').value);

  if (!plan || !bedrooms || !bathrooms) {
    quoteResult.textContent = '';
    quoteResult.classList.remove('visible');
    return;
  }

  const basePrice = basePrices[plan];
  const bedroomCharge = (bedrooms - 1) * extraBedroomPrices[plan];
  const bathroomCharge = (bathrooms - 1) * extraBathroomPrice; // si querés cobrar solo por baños extra

  const estimate = basePrice + bedroomCharge + bathroomCharge;

  quoteResult.textContent = `Estimated Price: $${estimate}+ AUD`;
  quoteResult.classList.add('visible');
});

