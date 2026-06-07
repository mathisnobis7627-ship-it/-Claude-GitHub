// ===== Petits Pétales — interactions =====

// Année courante dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

toggle.addEventListener('click', () => {
  const open = navList.classList.toggle('is-open');
  toggle.classList.toggle('is-active', open);
  toggle.setAttribute('aria-expanded', String(open));
});

// Fermer le menu après un clic sur un lien
navList.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Animation d'apparition au défilement
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

// Formulaire de contact (démo front : pas d'envoi réel)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    form.reportValidity();
    return;
  }

  note.hidden = false;
  form.querySelector('button[type="submit"]').textContent = 'Demande envoyée ✓';
  form.reset();

  setTimeout(() => {
    note.hidden = true;
    form.querySelector('button[type="submit"]').textContent = 'Envoyer ma demande';
  }, 5000);
});
