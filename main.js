/* =============================================
   MAIN.JS — Agrosetra Resource
   ============================================= */

(function () {
  'use strict';

  // ---- Navbar scroll behaviour ----
  const navbar = document.getElementById('navbar');
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', expanded);
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 100;
      if (window.scrollY >= secTop) current = sec.getAttribute('id');
    });
    allNavLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Intersection Observer — fade-in animation ----
  const animatedEls = document.querySelectorAll(
    '.service-card, .challenge-card, .success-item, .visual-card, .timeline-item'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s`;
    observer.observe(el);
  });

  // Add the 'visible' class styles via JS (avoids needing extra CSS classes)
  document.head.insertAdjacentHTML('beforeend', `<style>
    .service-card.visible, .challenge-card.visible, .success-item.visible,
    .visual-card.visible, .timeline-item.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>`);

  // ---- Contact form ----
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (form && formStatus) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const message = form.message.value.trim();

      // Basic validation
      if (!name || !email || !message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
      }
      if (!isValidEmail(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
      }

      // Simulate submission (no backend — GitHub Pages is static)
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending…';

      setTimeout(() => {
        showStatus('Thank you! We\'ll be in touch shortly.', 'success');
        form.reset();
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fa fa-paper-plane"></i>';
      }, 1400);
    });
  }

  function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className = 'form-status ' + type;
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

})();
