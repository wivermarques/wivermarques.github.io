/* ==========================================================
   OLEONEX - Main JavaScript
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initScrollReveal();
  initMobileMenu();
  initLanguageSwitcher();
  initCounterAnimation();
  initAccordion();
});

/* === HEADER SCROLL === */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* === SCROLL REVEAL === */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* === MOBILE MENU === */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* === LANGUAGE SWITCHER === */
function initLanguageSwitcher() {
  const translations = {
    pt: {
      'nav-home': 'Início',
      'nav-about': 'Sobre',
      'nav-products': 'Produtos',
      'nav-contact': 'Contato',
      'nav-faq': 'FAQ',
      'hero-title': 'Soluções em<br>Oleoquímicos',
      'hero-subtitle': 'Desenvolvemos insumos de alta performance para as indústrias agro, saneantes, cosméticos e pet.',
      'hero-cta': 'Conheça nossos produtos',
      'hero-cta2': 'Fale conosco',
      'about-tag': 'Quem somos',
      'about-title': 'Inovação e qualidade em cada molécula',
      'about-text': 'A Oleonex é especialista em soluções oleoquímicas, desenvolvendo e fornecendo insumos de alto desempenho para diversos segmentos industriais. Com foco em inovação, qualidade e sustentabilidade, atendemos indústrias que exigem performance real em seus processos produtivos.',
      'about-btn': 'Saiba mais sobre nós',
      'stat-1': 'Linhas de produto',
      'stat-2': 'Produtos no portfólio',
      'stat-3': 'Segmentos atendidos',
      'stat-4': 'Compromisso com qualidade',
      'products-tag': 'Nossas linhas',
      'products-title': 'Soluções para cada segmento',
      'products-subtitle': 'Quatro linhas completas de aditivos de alto desempenho desenvolvidos para atender às demandas específicas de cada indústria.',
      'agro-title': 'NEX Agro',
      'agro-desc': 'Aditivos de alto desempenho desenvolvidos para uso industrial no setor agrícola.',
      'saneantes-title': 'NEX Saneantes',
      'saneantes-desc': 'Insumos desenvolvidos para higiene e limpeza profissional de alta performance.',
      'cosmeticos-title': 'NEX Cosméticos',
      'cosmeticos-desc': 'Insumos de alta performance para cuidados pessoais, capilares e corporais.',
      'pet-title': 'NEX Pet',
      'pet-desc': 'Insumos de alta performance para higiene e cuidado animal.',
      'card-btn': 'Ver produtos',
      'feat-tag': 'Por que a Oleonex',
      'feat-title': 'Diferenciais que fazem a diferença',
      'feat-1-title': 'Alta Performance',
      'feat-1-text': 'Insumos desenvolvidos para entregar máxima eficiência em cada aplicação industrial.',
      'feat-2-title': 'Qualidade Garantida',
      'feat-2-text': 'Rigoroso controle de qualidade em todas as etapas de produção e distribuição.',
      'feat-3-title': 'Suporte Técnico',
      'feat-3-text': 'Equipe especializada para auxiliar na escolha e aplicação dos produtos.',
      'feat-4-title': 'Inovação Contínua',
      'feat-4-text': 'Pesquisa constante para desenvolver soluções cada vez mais eficientes.',
      'feat-5-title': 'Sustentabilidade',
      'feat-5-text': 'Compromisso com práticas sustentáveis e responsabilidade ambiental.',
      'feat-6-title': 'Entrega Ágil',
      'feat-6-text': 'Logística eficiente para atender sua demanda com rapidez e confiabilidade.',
      'cta-title': 'Pronto para elevar a performance da sua produção?',
      'cta-text': 'Entre em contato e descubra como nossas soluções oleoquímicas podem transformar seus processos.',
      'cta-btn': 'Fale com um especialista',
      'cta-btn2': 'Ver catálogo de produtos',
      'footer-desc': 'Soluções em oleoquímicos de alta performance para as indústrias agro, saneantes, cosméticos e pet.',
      'footer-links': 'Links rápidos',
      'footer-contact': 'Contato',
      'footer-copy': '© 2026 Oleonex. Todos os direitos reservados.',
    },
    en: {
      'nav-home': 'Home',
      'nav-about': 'About',
      'nav-products': 'Products',
      'nav-contact': 'Contact',
      'nav-faq': 'FAQ',
      'hero-title': 'Oleochemical<br>Solutions',
      'hero-subtitle': 'We develop high-performance inputs for the agro, cleaning, cosmetics and pet industries.',
      'hero-cta': 'Discover our products',
      'hero-cta2': 'Contact us',
      'about-tag': 'About us',
      'about-title': 'Innovation and quality in every molecule',
      'about-text': 'Oleonex specializes in oleochemical solutions, developing and supplying high-performance inputs for various industrial segments. Focused on innovation, quality and sustainability, we serve industries that demand real performance in their production processes.',
      'about-btn': 'Learn more about us',
      'stat-1': 'Product lines',
      'stat-2': 'Products in portfolio',
      'stat-3': 'Served segments',
      'stat-4': 'Commitment to quality',
      'products-tag': 'Our lines',
      'products-title': 'Solutions for every segment',
      'products-subtitle': 'Four complete lines of high-performance additives designed to meet the specific demands of each industry.',
      'agro-title': 'NEX Agro',
      'agro-desc': 'High-performance additives developed for industrial use in the agricultural sector.',
      'saneantes-title': 'NEX Cleaning',
      'saneantes-desc': 'Inputs developed for high-performance professional hygiene and cleaning.',
      'cosmeticos-title': 'NEX Cosmetics',
      'cosmeticos-desc': 'High-performance inputs for personal, hair and body care.',
      'pet-title': 'NEX Pet',
      'pet-desc': 'High-performance inputs for animal hygiene and care.',
      'card-btn': 'View products',
      'feat-tag': 'Why Oleonex',
      'feat-title': 'Differentials that make the difference',
      'feat-1-title': 'High Performance',
      'feat-1-text': 'Inputs developed to deliver maximum efficiency in every industrial application.',
      'feat-2-title': 'Guaranteed Quality',
      'feat-2-text': 'Rigorous quality control at all stages of production and distribution.',
      'feat-3-title': 'Technical Support',
      'feat-3-text': 'Specialized team to assist in the choice and application of products.',
      'feat-4-title': 'Continuous Innovation',
      'feat-4-text': 'Constant research to develop increasingly efficient solutions.',
      'feat-5-title': 'Sustainability',
      'feat-5-text': 'Commitment to sustainable practices and environmental responsibility.',
      'feat-6-title': 'Fast Delivery',
      'feat-6-text': 'Efficient logistics to meet your demand with speed and reliability.',
      'cta-title': 'Ready to elevate your production performance?',
      'cta-text': 'Get in touch and discover how our oleochemical solutions can transform your processes.',
      'cta-btn': 'Talk to a specialist',
      'cta-btn2': 'View product catalog',
      'footer-desc': 'High-performance oleochemical solutions for the agro, cleaning, cosmetics and pet industries.',
      'footer-links': 'Quick links',
      'footer-contact': 'Contact',
      'footer-copy': '© 2026 Oleonex. All rights reserved.',
    },
  };

  let currentLang = 'pt';

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      currentLang = lang;
      document.querySelectorAll('.lang-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Also update other lang switchers (mobile, footer, etc)
      document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach((b) => b.classList.add('active'));

      const t = translations[lang];
      if (!t) return;

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });

      document.documentElement.lang = lang;
    });
  });
}

/* === COUNTER ANIMATION === */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(target * eased);
    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* === ACCORDION === */
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('active');

      // Close all others
      item.parentElement.querySelectorAll('.accordion-item').forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.accordion-body').style.maxHeight = '0';
        }
      });

      // Toggle current
      item.classList.toggle('active');
      body.style.maxHeight = isOpen ? '0' : body.scrollHeight + 'px';
    });
  });
}
