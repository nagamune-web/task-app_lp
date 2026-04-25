// ===== NAV SCROLL EFFECT =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== SCROLL ANIMATIONS =====
const animateOnScroll = (selector, threshold = 0.15) => {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  els.forEach(el => observer.observe(el));
};

// Hero elements animate on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero__content .fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120);
  });
});

animateOnScroll('.reveal');

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== MOCK BAR ANIMATION =====
const animateMockBars = () => {
  const bars = document.querySelectorAll('.mock-bar, .mock-workload__bar');
  bars.forEach(bar => {
    const target = bar.style.width;
    bar.style.width = '0%';
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => { bar.style.transition = 'width 1s ease'; bar.style.width = target; }, 200);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(bar);
  });
};

window.addEventListener('DOMContentLoaded', animateMockBars);

// ===== CTA FORM =====
const form = document.querySelector('.cta__form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('.cta__input');
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.style.borderColor = '#f87171';
      input.focus();
      return;
    }
    const btn = form.querySelector('.btn');
    btn.textContent = '登録完了！';
    btn.style.background = 'linear-gradient(135deg,#34d399,#10b981)';
    btn.style.boxShadow = '0 4px 20px rgba(52,211,153,0.4)';
    input.disabled = true;
    btn.disabled = true;
  });
}
