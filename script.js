// Portfolio Elegant Cyberpunk - JavaScript
document.addEventListener("DOMContentLoaded", function () {
  initThemeToggle();
  initLanguageToggle();
  initMobileMenu();
  initSmoothScrolling();
  initSkillBars();
  initContactForm();
  initAnimations();
  initParticleEffect();
  initTypingEffect();
});

// Sistema de traducción
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Available for work",
    "hero.greeting": "Hello, I'm",
    "hero.subtitle":
      "Backend Developer for teams that need reliable APIs and faster releases",
    "hero.description":
      "I design and build <span class='highlight'>APIs, integrations, and backend systems</span> for startups and digital businesses that need to ship features with confidence. My focus is clear architecture, maintainable code, and <span class='highlight'>faster delivery with fewer production issues</span>.",
    "hero.view_projects": "View Projects",
    "hero.contact_me": "Contact Me",
    "about.title": "About Me",
    "about.subtitle":
      "Get to know more about my journey and passion for development",
    "about.description1":
      "I specialize in backend development for products that need stable growth: well-designed APIs, secure authentication, clean data models, and integrations that keep the business moving.",
    "about.description2":
      "I also work comfortably on the frontend when needed, which helps me collaborate better with product and design teams and deliver complete features from idea to production.",
    "about.years_experience": "Years Experience",
    "about.projects_completed": "Projects Completed",
    "about.technologies": "Technologies",
    "skills.title": "Skills",
    "skills.subtitle": "Technologies and tools I work with",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Tools",
    "projects.title": "Projects",
    "projects.subtitle": "Some of my recent work",
    "projects.ecommerce_desc":
      "API-first backend for e-commerce: JWT auth, payment integration, and inventory workflows designed to reduce checkout friction and simplify operations.",
    "projects.analytics_desc":
      "Real-time analytics platform with automated reporting pipelines and a dashboard that gives teams faster visibility into business decisions.",
    "projects.social_desc":
      "Scalable social backend with real-time messaging, push notifications, and relationship features designed for active user communities.",
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk!",
    "contact.email_label": "Email",
    "contact.phone_label": "Phone",
    "contact.location_label": "Location",
    "contact.placeholder_name": "Your name",
    "contact.placeholder_email": "Your email",
    "contact.placeholder_subject": "Subject",
    "contact.placeholder_message": "Your message",
    "contact.send_message": "Send Message",
  },
  es: {
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para trabajar",
    "hero.greeting": "Hola, soy",
    "hero.subtitle":
      "Desarrollador Backend para equipos que necesitan APIs confiables y lanzar más rápido",
    "hero.description":
      "Diseño y construyo <span class='highlight'>APIs, integraciones y sistemas backend</span> para startups y negocios digitales que necesitan publicar funcionalidades con confianza. Mi enfoque es arquitectura clara, código mantenible y <span class='highlight'>entregas más rápidas con menos errores en producción</span>.",
    "hero.view_projects": "Ver Proyectos",
    "hero.contact_me": "Contactarme",
    "about.title": "Sobre Mí",
    "about.subtitle":
      "Conoce más sobre mi trayectoria y pasión por el desarrollo",
    "about.description1":
      "Me especializo en backend para productos que necesitan crecer sin romperse: APIs bien diseñadas, autenticación segura, modelos de datos limpios e integraciones que acompañan el ritmo del negocio.",
    "about.description2":
      "También trabajo con frontend cuando el proyecto lo requiere; eso me permite colaborar mejor con producto y diseño y entregar funcionalidades completas, desde la idea hasta producción.",
    "about.years_experience": "Años de Experiencia",
    "about.projects_completed": "Proyectos Completados",
    "about.technologies": "Tecnologías",
    "skills.title": "Habilidades",
    "skills.subtitle": "Tecnologías y herramientas con las que trabajo",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Herramientas",
    "projects.title": "Proyectos",
    "projects.subtitle": "Algunos de mis trabajos recientes",
    "projects.ecommerce_desc":
      "Backend API-first para e-commerce: autenticación JWT, integración de pagos y flujos de inventario pensados para reducir fricción de compra y simplificar la operación.",
    "projects.analytics_desc":
      "Plataforma de analítica en tiempo real con pipelines de reportes automáticos y dashboard para dar visibilidad más rápida en decisiones de negocio.",
    "projects.social_desc":
      "Backend escalable para red social con mensajería en tiempo real, notificaciones push y funcionalidades de relación entre usuarios para comunidades activas.",
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos!",
    "contact.email_label": "Correo",
    "contact.phone_label": "Teléfono",
    "contact.location_label": "Ubicación",
    "contact.placeholder_name": "Tu nombre",
    "contact.placeholder_email": "Tu correo",
    "contact.placeholder_subject": "Asunto",
    "contact.placeholder_message": "Tu mensaje",
    "contact.send_message": "Enviar Mensaje",
  },
};

let currentLanguage = "es";

// Función para traducir texto
function translateText() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage][key]) {
      // Usar innerHTML para elementos que contienen HTML
      if (key.includes("description")) {
        element.innerHTML = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });

  const placeholderElements = document.querySelectorAll(
    "[data-translate-placeholder]"
  );
  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder");
    if (translations[currentLanguage][key]) {
      element.setAttribute("placeholder", translations[currentLanguage][key]);
    }
  });
}

// Toggle de tema
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Cargar tema guardado
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  body.className = savedTheme === "dark" ? "" : "light-theme";
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", function () {
    const isDark = !body.classList.contains("light-theme");
    body.className = isDark ? "light-theme" : "";
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("portfolio-theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("themeToggle");
  const icon = themeToggle.querySelector("i");
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// Toggle de idioma
function initLanguageToggle() {
  const languageToggle = document.getElementById("languageToggle");
  const langText = languageToggle.querySelector(".lang-text");

  // Cargar idioma guardado
  const savedLanguage = localStorage.getItem("portfolio-language") || "es";
  currentLanguage = savedLanguage;
  langText.textContent = currentLanguage.toUpperCase();
  translateText();

  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    langText.textContent = currentLanguage.toUpperCase();
    localStorage.setItem("portfolio-language", currentLanguage);
    translateText();
  });
}

// Menú móvil
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const nav = document.querySelector(".nav");

  mobileMenuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    });
  });
}

// Scroll suave
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 70;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Barras de habilidades animadas
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          const width = skillBar.getAttribute("data-width");

          setTimeout(() => {
            skillBar.style.width = width + "%";
          }, 200);

          observer.unobserve(skillBar);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
}

// Formulario de contacto
function initContactForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    if (validateForm(data)) {
      showNotification("Message sent successfully!", "success");
      form.reset();
    } else {
      showNotification("Please fill in all fields correctly.", "error");
    }
  });
}

// Validación del formulario
function validateForm(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    data.name.trim() !== "" &&
    data.email.trim() !== "" &&
    emailRegex.test(data.email) &&
    data.subject.trim() !== "" &&
    data.message.trim() !== ""
  );
}

// Mostrar notificaciones
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  const colors = {
    success: "#00ff88",
    error: "#ff6b6b",
    info: "#00d4ff",
  };

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-glass);
    border: 1px solid ${colors[type]};
    border-radius: var(--border-radius);
    padding: 12px 16px;
    color: var(--text-primary);
    font-weight: 500;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(10px);
    max-width: 300px;
  `;

  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: ${colors[type]};">●</span>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Animar entrada
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remover después de 4 segundos
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Animaciones al hacer scroll
function initAnimations() {
  const animatedElements = document.querySelectorAll(
    ".section, .hero-content, .project-card, .skill-category"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Efecto de partículas sutil
function initParticleEffect() {
  const particleContainer = document.querySelector(".bg-particles");
  if (!particleContainer) return;

  // Crear partículas flotantes sutiles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--accent-primary);
      border-radius: 50%;
      opacity: 0.3;
      animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;

    particleContainer.appendChild(particle);
  }

  // Agregar animación CSS para las partículas
  const style = document.createElement("style");
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
      50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);
}

// Efecto de escritura en el terminal
function initTypingEffect() {
  const terminalContent = document.querySelector(".terminal-content");
  if (!terminalContent) return;

  const codeLines = terminalContent.querySelectorAll(".code-line");

  codeLines.forEach((line, index) => {
    line.style.opacity = "0";
    line.style.transform = "translateX(-20px)";

    setTimeout(() => {
      line.style.transition = "all 0.5s ease";
      line.style.opacity = "1";
      line.style.transform = "translateX(0)";
    }, index * 500);
  });

  // Animar las barras de habilidades después de que aparezcan
  setTimeout(() => {
    const skillBars = terminalContent.querySelectorAll(".skill-progress");
    skillBars.forEach((bar, index) => {
      const width = bar.getAttribute("data-width");
      setTimeout(() => {
        bar.style.width = width + "%";
      }, index * 200);
    });
  }, 2000);
}

// Efectos de hover para proyectos
function initProjectHoverEffects() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "var(--shadow-glow)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
}

// Cambiar navbar al hacer scroll
function initScrollNavbar() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.background = "rgba(10, 10, 10, 0.95)";
      header.style.backdropFilter = "blur(20px)";
    } else {
      header.style.background = "var(--bg-glass)";
      header.style.backdropFilter = "blur(20px)";
    }
  });
}

// Inicializar efectos adicionales
document.addEventListener("DOMContentLoaded", function () {
  initProjectHoverEffects();
  initScrollNavbar();
});

// Atajos de teclado
document.addEventListener("keydown", function (e) {
  // Ctrl + T para cambiar tema
  if (e.ctrlKey && e.key === "t") {
    e.preventDefault();
    document.getElementById("themeToggle").click();
  }

  // Ctrl + L para cambiar idioma
  if (e.ctrlKey && e.key === "l") {
    e.preventDefault();
    document.getElementById("languageToggle").click();
  }
});

// Manejo de errores
window.addEventListener("error", function (e) {
  console.error("Error en el portfolio:", e.error);
});

// Exportar funciones para uso externo
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    translateText,
    showNotification,
    validateForm,
  };
}
