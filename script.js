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
    "hero.subtitle": "Backend Developer & Problem Solver",
    "hero.description":
      "I create <span class='highlight'>robust and scalable solutions</span> that drive business growth. Specialized in backend development with solid frontend experience, I transform complex ideas into <span class='highlight'>efficient applications</span>.",
    "hero.view_projects": "View Projects",
    "hero.contact_me": "Contact Me",
    "about.title": "About Me",
    "about.subtitle":
      "Get to know more about my journey and passion for development",
    "about.description1":
      "I'm a passionate backend developer with a solid background in creating robust, scalable applications. My main focus is on building efficient systems that solve real-world problems.",
    "about.description2":
      "Although my specialty is backend development, I also have significant experience in frontend technologies, which allows me to understand the complete web development landscape and create more integrated solutions.",
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
      "Complete RESTful API for e-commerce platform with JWT authentication, integrated payments and inventory management.",
    "projects.analytics_desc":
      "Real-time data analytics platform with interactive dashboard and automated reports.",
    "projects.social_desc":
      "Backend for social network with real-time chat, push notifications and friend system.",
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk!",
    "contact.send_message": "Send Message",
  },
  es: {
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para trabajar",
    "hero.greeting": "Hola, soy",
    "hero.subtitle": "Desarrollador Backend & Solucionador de Problemas",
    "hero.description":
      "Creo <span class='highlight'>soluciones robustas y escalables</span> que impulsan el crecimiento empresarial. Especializado en desarrollo backend con experiencia sólida en frontend, transformo ideas complejas en <span class='highlight'>aplicaciones eficientes</span>.",
    "hero.view_projects": "Ver Proyectos",
    "hero.contact_me": "Contactarme",
    "about.title": "Sobre Mí",
    "about.subtitle":
      "Conoce más sobre mi trayectoria y pasión por el desarrollo",
    "about.description1":
      "Soy un desarrollador backend apasionado con una sólida formación en crear aplicaciones robustas y escalables. Mi enfoque principal está en construir sistemas eficientes que resuelvan problemas reales.",
    "about.description2":
      "Aunque mi especialidad es el desarrollo backend, también tengo experiencia significativa en tecnologías frontend, lo que me permite entender el panorama completo del desarrollo web y crear soluciones más integradas.",
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
      "API RESTful completa para plataforma de comercio electrónico con autenticación JWT, pagos integrados y gestión de inventario.",
    "projects.analytics_desc":
      "Plataforma de análisis de datos en tiempo real con dashboard interactivo y reportes automatizados.",
    "projects.social_desc":
      "Backend para red social con funcionalidades de chat en tiempo real, notificaciones push y sistema de amigos.",
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos!",
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
