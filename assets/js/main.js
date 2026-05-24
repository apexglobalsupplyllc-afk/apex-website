// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
  } else {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
  }
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Flavors
const flavors = [
  { name: 'Classic', tag: 'The original', desc: 'Clean, balanced, unmistakably BLU. The signature taste that started it all.', accent: '#3B7BC9', img: 'assets/images/classic.jpg' },
  { name: 'Watermelon', tag: 'Juicy & crisp', desc: 'Cool, fresh, and refreshing. Summer in a can, available year-round.', accent: '#10B981', img: 'assets/images/watermelon.jpg' },
  { name: 'Cranberry', tag: 'Bright & bold', desc: 'Sharp, tart, alive. A sophisticated edge with real energy underneath.', accent: '#DC143C', img: 'assets/images/cranberry.jpg' },
  { name: 'Grape', tag: 'Rich & smooth', desc: 'Deep, full-flavored, unapologetic. A bold pour that holds its own.', accent: '#8B5CF6', img: 'assets/images/grape.jpg' },
  { name: 'BLU Day', tag: 'Mystery flavor', desc: 'Smooth, intriguing, and impossible to place. You taste it. You decide.', accent: '#06B6D4', img: 'assets/images/blu-day.jpg' },
  { name: 'Mojito', tag: 'Mint-citrus refresh', desc: 'Cool mint, bright citrus, sophisticated lift. A grown-up energy moment.', accent: '#84CC16', img: 'assets/images/mojito.jpg' },
  { name: 'Sugar Free', tag: 'Zero sugar, full energy', desc: 'Clean lift. Lighter finish. All the BLU energy, none of the sugar.', accent: '#94A3B8', img: 'assets/images/sugar-free.jpg' },
];

const grid = document.getElementById('flavor-grid');
flavors.forEach((f, i) => {
  const num = String(i + 1).padStart(2, '0');
  grid.insertAdjacentHTML('beforeend', `
    <div class="flavor-card">
      <div class="flavor-card-glow" style="background: radial-gradient(circle at 50% 0%, ${f.accent}22, transparent 70%);"></div>
      <div class="flavor-card-inner">
        <div class="flavor-image">
          <div class="flavor-image-tint" style="background: linear-gradient(135deg, ${f.accent}15, transparent);"></div>
          <img src="${f.img}" alt="BLU ${f.name} can" class="flavor-can-img" loading="lazy">
          <div class="flavor-number">${num}</div>
        </div>
        <div class="flavor-tag-row">
          <div class="flavor-tag-dot" style="background: ${f.accent};"></div>
          <div class="flavor-tag-text">${f.tag}</div>
        </div>
        <h3 class="flavor-name">${f.name}</h3>
        <p class="flavor-desc">${f.desc}</p>
        <a href="#contact" class="flavor-cta"><span>Coming Soon On Amazon</span><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
      </div>
    </div>
  `);
});

// Form submission
async function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const container = document.getElementById('form-container');
  const btn = form.querySelector('[type="submit"]');
  const originalHTML = btn.innerHTML;

  btn.disabled = true;
  btn.innerHTML = 'Sending…';

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form)
    });
    const data = await res.json();
    if (data.success) {
      container.innerHTML = `
        <div class="form-success">
          <div class="form-success-icon">
            <svg class="icon-xl" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <h3 style="font-family: 'Anton', sans-serif; font-size: 1.875rem; text-transform: uppercase; margin-bottom: 0.75rem;">Inquiry received.</h3>
          <p style="color: rgba(255,255,255,0.7); max-width: 28rem;">Thank you. A member of the Apex team will reach out within one business day to discuss next steps.</p>
        </div>
      `;
    } else {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
      alert('Something went wrong. Please try again or email us at contact@apexglobalsupply.co');
    }
  } catch {
    btn.disabled = false;
    btn.innerHTML = originalHTML;
    alert('Something went wrong. Please try again or email us at contact@apexglobalsupply.co');
  }
}

// ===== SCROLL REVEAL ANIMATIONS =====
// Use IntersectionObserver to add 'visible' class when elements enter viewport
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // For groups of siblings, add staggered delays
      const parent = entry.target.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
        const idx = siblings.indexOf(entry.target);
        if (idx > 0 && idx < 8) {
          entry.target.style.transitionDelay = (idx * 0.08) + 's';
        }
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
// Animate number counters when they come into view
const animateCounter = (el, target, decimal = false) => {
  const duration = 1600;
  const startTime = performance.now();
  const startValue = 0;
  const ease = (t) => 1 - Math.pow(1 - t, 3); // ease-out cubic

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = ease(progress);
    const value = startValue + (target - startValue) * eased;
    el.textContent = decimal ? value.toFixed(1) : Math.floor(value);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = decimal ? target.toFixed(1) : target;
    }
  }
  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const isDecimal = el.classList.contains('counter-decimal');
      animateCounter(el, target, isDecimal);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.counter, .counter-decimal').forEach(el => counterObserver.observe(el));

// Re-observe flavor cards after they're inserted (they're built dynamically)
// Add reveal class to each card and stagger them
setTimeout(() => {
  const flavorCards = document.querySelectorAll('.flavor-card');
  flavorCards.forEach((card, i) => {
    card.classList.add('reveal');
    card.style.transitionDelay = (i * 0.08) + 's';
    revealObserver.observe(card);
  });
}, 50);

// Structured data
const ldJson = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Apex Global Supply LLC",
  "description": "Veteran-owned wholesale and distribution partner bringing BLU Energy Drink to East Coast retailers.",
  "email": "contact@apexglobalsupply.co",
  "telephone": "+1-4107050922",
  "areaServed": ["Maryland", "Virginia", "Delaware", "Washington D.C.", "Pennsylvania", "New Jersey"],
  "address": { "@type": "PostalAddress", "addressRegion": "MD", "addressCountry": "US" }
};
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(ldJson);
document.head.appendChild(script);