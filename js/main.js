// About values
const values = [
  { name: 'Innovación', desc: 'Buscamos constantemente nuevas formas de resolver problemas complejos.' },
  { name: 'Seguridad', desc: 'Protegemos la integridad de tus datos y la de tus usuarios con los más altos estándares.' },
  { name: 'Escalabilidad', desc: 'Construimos sistemas que crecen al mismo ritmo que tus ambiciones.' },
  { name: 'Eficiencia', desc: 'Optimizamos recursos para entregar resultados de alta calidad en tiempos récord.' },
];

function renderAboutValues() {
  const valuesList = document.getElementById('about-values-list');
  if (!valuesList) return;
  valuesList.innerHTML = '';
  values.forEach(v => {
  aboutValues.forEach(v => {
    item.className = 'about-value-item';
    item.innerHTML = `
      <svg class="about-value-icon" fill="none" stroke="currentColor" width="20" height="20">
        <circle cx="10" cy="10" r="9" stroke="#10b981" stroke-width="2"/>
        <polyline points="7 10 10 13 13 7" stroke="#10b981" stroke-width="2" fill="none"/>
      </svg>
      <div>
        <span class="about-value-name">${v.name}</span>
        <p class="about-value-desc">${v.desc}</p>
      </div>
    `;
    valuesList.appendChild(item);
  });
});

document.addEventListener('DOMContentLoaded', renderAboutValues);

  renderAboutValues();
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Puedes agregar aquí lógica para enviar el formulario por AJAX o mostrar un mensaje
      alert('¡Mensaje enviado! Nos pondremos en contacto pronto.');
      form.reset();
    });
  }
});

// Footer scroll-to-top and year
document.addEventListener('DOMContentLoaded', function() {
  // Año dinámico
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  // Scroll to top
  const topBtn = document.getElementById('footer-top-btn');
  if (topBtn) {
    topBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Hero actions scroll
document.addEventListener('DOMContentLoaded', function() {
  const btnServicios = document.querySelector('.hero-btn-primary');
  if (btnServicios) {
    btnServicios.addEventListener('click', function() {
      const servicios = document.getElementById('servicios');
      if (servicios) {
        servicios.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  const btnContacto = document.querySelector('.hero-btn-secondary');
  if (btnContacto) {
    btnContacto.addEventListener('click', function() {
      const contacto = document.getElementById('contacto');
      if (contacto) {
        contacto.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

// Navbar scroll effect and mobile menu
document.addEventListener('DOMContentLoaded', function() {
  // Scroll effect
  const navbar = document.getElementById('navbar');
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll);

  // Mobile menu
  const menuBtn = document.getElementById('navbar-menu-btn');
  const mobileMenu = document.getElementById('navbar-mobile');
  const closeBtn = document.getElementById('navbar-close-btn');
  if (menuBtn && mobileMenu && closeBtn) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('open');
    });
    closeBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
    });
    // Close menu on link click
    mobileMenu.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
      });
    });
  }
});

// Portfolio projects
const portfolioProjects = [
  {
    title: 'Fintech Dashboard',
    category: 'SaaS / Desarrollo Web',
    desc: 'Plataforma de gestión financiera en tiempo real con integración de APIs bancarias.',
    image: 'https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjBtb2NrdXAlMjB0ZWNofGVufDF8fHx8MTc3MDk1Nzc0OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Nexus AI Interface',
    category: 'Diseño UX/UI / AI',
    desc: 'Interfaz minimalista para motor de búsqueda basado en inteligencia artificial generativa.',
    image: 'https://images.unsplash.com/photo-1515006754768-2fc6d4c12173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBvbiUyMG1vbml0b3IlMjBhYnN0cmFjd29yayIsImludGVudCI6InByb2Zlc3Npb25hbCJ9&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Logistics Pro',
    category: 'Automatización / ERP',
    desc: 'Sistema de control de inventarios y logística automatizada para retail global.',
    image: 'https://images.unsplash.com/photo-1644915009333-535617d3777c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc29mdHdhcmUlMjBkYXNoYm9hcmQlMjBkYXJrJTIwYmx1ZSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDk1Nzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function renderPortfolio() {
  const portfolioList = document.getElementById('portfolio-list');
  if (!portfolioList) return;
  portfolioList.innerHTML = '';
  portfolioProjects.forEach((project, index) => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.innerHTML = `
      <div class="portfolio-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="portfolio-image">
        <div class="portfolio-image-overlay"></div>
        <div class="portfolio-image-link">
          <button class="portfolio-image-link-btn" title="Ver proyecto">
            <!-- ExternalLink SVG -->
            <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M10 6v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" stroke="#fff" stroke-width="2"/><path d="M14 10l-8 8" stroke="#fff" stroke-width="2"/><path d="M6 14v-2a2 2 0 0 1 2-2h2" stroke="#fff" stroke-width="2"/></svg>
          </button>
        </div>
      </div>
      <div class="portfolio-item-content">
        <span class="portfolio-category">${project.category}</span>
        <h4 class="portfolio-item-title">${project.title}</h4>
        <p class="portfolio-item-desc">${project.desc}</p>
      </div>
    `;
    portfolioList.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', renderPortfolio);

// Services list
const servicesList = [
  {
    title: 'Desarrollo de Sistemas Web Personalizados',
    description: 'Arquitecturas robustas y escalables diseñadas a medida para las necesidades específicas de tu negocio.',
    icon: 'monitor',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
  },
  {
    title: 'Diseño UX/UI Profesional',
    description: 'Interfaces intuitivas y estéticas que garantizan una experiencia de usuario fluida y memorable.',
    icon: 'layout',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.1)',
  },
  {
    title: 'Integración de APIs',
    description: 'Conectamos tu ecosistema digital con las mejores herramientas del mercado para una operatividad total.',
    icon: 'share2',
    color: '#6d28d9',
    bg: 'rgba(109,40,217,0.1)',
  },
  {
    title: 'Automatización de Procesos',
    description: 'Optimizamos tus flujos de trabajo reduciendo errores y maximizando la productividad de tu equipo.',
    icon: 'zap',
    color: '#fde047',
    bg: 'rgba(253,224,71,0.1)',
  },
  {
    title: 'Mantenimiento y Soporte Técnico',
    description: 'Garantizamos que tu sistema funcione siempre al 100% con monitoreo constante y actualizaciones periódicas.',
    icon: 'settings',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    title: 'Consultoría TI',
    description: 'Asesoramiento estratégico para ayudarte a elegir las tecnologías adecuadas que impulsarán tu crecimiento.',
    icon: 'shieldCheck',
    color: '#f43f5e',
    bg: 'rgba(244,63,94,0.1)',
  },
];

// SVG icon functions
function getServiceIcon(icon, color) {
  switch (icon) {
    case 'monitor':
      return `<svg width="28" height="28" fill="none" stroke="currentColor" style="color:${color}"><rect x="3" y="4" width="22" height="16" rx="2" stroke-width="2"/><line x1="1" y1="22" x2="27" y2="22" stroke-width="2"/><line x1="14" y1="22" x2="14" y2="26" stroke-width="2"/></svg>`;
    case 'layout':
      return `<svg width="28" height="28" fill="none" stroke="currentColor" style="color:${color}"><rect x="3" y="4" width="22" height="16" rx="2" stroke-width="2"/><line x1="3" y1="10" x2="25" y2="10" stroke-width="2"/><line x1="9" y1="4" x2="9" y2="20" stroke-width="2"/></svg>`;
    case 'share2':
      return `<svg width="28" height="28" fill="none" stroke="currentColor" style="color:${color}"><circle cx="6" cy="18" r="3" stroke-width="2"/><circle cx="22" cy="6" r="3" stroke-width="2"/><circle cx="22" cy="18" r="3" stroke-width="2"/><line x1="9" y1="17" x2="19" y2="7" stroke-width="2"/><line x1="19" y1="17" x2="9" y2="7" stroke-width="2"/></svg>`;
    case 'zap':
      return `<svg width="28" height="28" fill="none" stroke="currentColor" style="color:${color}"><polygon points="13 2 3 14 13 14 11 26 25 10 15 10 17 2" stroke-width="2"/></svg>`;
    case 'settings':
      return `<svg width="28" height="28" fill="none" stroke="currentColor" style="color:${color}"><circle cx="14" cy="14" r="3" stroke-width="2"/><path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.64 5.64l2.83 2.83M19.53 19.53l2.83 2.83M5.64 22.36l2.83-2.83M19.53 8.47l2.83-2.83" stroke-width="2"/></svg>`;
    case 'shieldCheck':
      return `<svg width="28" height="28" fill="none" stroke="currentColor" style="color:${color}"><path d="M14 2l10 4v6c0 7-5 13-10 13S4 19 4 12V6l10-4z" stroke-width="2"/><polyline points="9 14 13 18 19 12" stroke-width="2"/></svg>`;
    default:
      return '';
  }
}

function renderServices() {
  const servicesListDiv = document.getElementById('services-list');
  if (!servicesListDiv) return;
  servicesListDiv.innerHTML = '';
  servicesList.forEach(service => {
    const item = document.createElement('div');
    item.className = 'services-item';
    item.innerHTML = `
      <div class="services-item-icon" style="background:${service.bg};">
        ${getServiceIcon(service.icon, service.color)}
      </div>
      <h4 class="services-item-title">${service.title}</h4>
      <p class="services-item-desc">${service.description}</p>
    `;
    servicesListDiv.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', renderServices);

// Team list
const teamList = [
  {
    name: 'Alex Rivera',
    role: 'CEO / Desarrollador Full Stack',
    desc: 'Arquitecto de software con +10 años de experiencia liderando proyectos escalables.',
    image: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMG9mZmljZXxlbnwxfHx8fDE3NzA5NTc3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Elena Soto',
    role: 'Diseñadora UX/UI',
    desc: 'Especialista en interfaces centradas en el usuario y sistemas de diseño modernos.',
    image: 'https://images.unsplash.com/photo-1676742663664-2da16ddcad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzcwOTU3NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Marco Torres',
    role: 'Backend & Seguridad',
    desc: 'Experto en infraestructura cloud, ciberseguridad y optimización de bases de datos.',
    image: 'https://images.unsplash.com/photo-1644915009333-535617d3777c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc29mdHdhcmUlMjBkYXNoYm9hcmQlMjBkYXJrJTIwYmx1ZSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDk1Nzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

// SVG icon functions
function getTeamIcon(icon) {
  switch (icon) {
    case 'linkedin':
      return `<svg width="20" height="20" fill="none" stroke="currentColor"><rect x="2" y="2" width="16" height="16" rx="2" stroke="#fff" stroke-width="2"/><line x1="8" y1="11" x2="8" y2="17" stroke="#fff" stroke-width="2"/><line x1="12" y1="11" x2="12" y2="17" stroke="#fff" stroke-width="2"/><line x1="8" y1="8" x2="8" y2="8" stroke="#fff" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="8" stroke="#fff" stroke-width="2"/></svg>`;
    case 'twitter':
      return `<svg width="20" height="20" fill="none" stroke="currentColor"><path d="M19 2.5a7.5 7.5 0 0 1-2.14.59A3.75 3.75 0 0 0 18.5 1c-1.37.81-2.87 1.39-4.48 1.72A3.75 3.75 0 0 0 3.75 7.5c0 .29.03.58.08.86A10.7 10.7 0 0 1 2 2.08a3.75 3.75 0 0 0 1.16 5A3.75 3.75 0 0 1 2 7.5v.04A3.75 3.75 0 0 0 5.75 11a3.75 3.75 0 0 1-1.67.07A3.75 3.75 0 0 0 7.5 14c-2.65 2.08-6.25 1.67-8.75-1.25" stroke="#fff" stroke-width="2"/></svg>`;
    case 'github':
      return `<svg width="20" height="20" fill="none" stroke="currentColor"><path d="M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 18 10c0-4.42-3.58-8-8-8z" stroke="#fff" stroke-width="2"/></svg>`;
    default:
      return '';
  }
}

function renderTeam() {
  const teamListDiv = document.getElementById('team-list');
  if (!teamListDiv) return;
  teamListDiv.innerHTML = '';
  teamList.forEach(member => {
    const item = document.createElement('div');
    item.className = 'team-item';
    item.innerHTML = `
      <div class="team-image-wrapper">
        <img src="${member.image}" alt="${member.name}" class="team-image">
        <div class="team-image-overlay"></div>
        <div class="team-social">
          <button class="team-social-btn" title="Linkedin">${getTeamIcon('linkedin')}</button>
          <button class="team-social-btn" title="Twitter">${getTeamIcon('twitter')}</button>
          <button class="team-social-btn" title="Github">${getTeamIcon('github')}</button>
        </div>
      </div>
      <div class="team-item-content">
        <h4 class="team-item-name">${member.name}</h4>
        <p class="team-item-role">${member.role}</p>
        <p class="team-item-desc">${member.desc}</p>
      </div>
    `;
    teamListDiv.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', renderTeam);}