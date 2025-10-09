// Portfolio Minimalista - JavaScript
document.addEventListener("DOMContentLoaded", function () {
  initThemeToggle();
  initLanguageToggle();
  initMobileMenu();
  initSmoothScrolling();
  initSkillBars();
  initContactForm();
  initAnimations();
});

// Sistema de traducción
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, I'm",
    "hero.subtitle_line1": "Backend Developer",
    "hero.subtitle_line2": "Problem Solver",
    "hero.description":
      "I create <span class='highlight'>robust and scalable solutions</span> that drive business growth. Specialized in backend development with solid frontend experience, I transform complex ideas into <span class='highlight'>efficient applications</span>.",
    "hero.view_projects": "View Projects",
    "hero.contact_me": "Contact Me",
    "about.title": "About Me",
    "about.subtitle":
      "Get to know more about my journey and passion for development",
    "about.description1":
      "I'm a passionate web developer with a solid background in backend development. My main focus is creating robust, scalable, and efficient applications that solve real-world problems.",
    "about.description2":
      "Although my specialty is backend, I also have significant experience in frontend technologies, which allows me to understand the complete web development landscape and create more integrated solutions.",
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
    "hero.greeting": "Hola, soy",
    "hero.subtitle_line1": "Desarrollador Backend",
    "hero.subtitle_line2": "Solucionador de Problemas",
    "hero.description":
      "Creo <span class='highlight'>soluciones robustas y escalables</span> que impulsan el crecimiento empresarial. Especializado en desarrollo backend con experiencia sólida en tecnologías frontend, transformo ideas complejas en <span class='highlight'>aplicaciones eficientes</span>.",
    "hero.view_projects": "Ver Proyectos",
    "hero.contact_me": "Contactarme",
    "about.title": "Sobre Mí",
    "about.subtitle":
      "Conoce más sobre mi trayectoria y pasión por el desarrollo",
    "about.description1":
      "Soy un desarrollador web apasionado con una sólida formación en desarrollo backend. Mi enfoque principal está en crear aplicaciones robustas, escalables y eficientes que resuelvan problemas reales.",
    "about.description2":
      "Aunque mi especialidad es el backend, también tengo experiencia significativa en tecnologías frontend, lo que me permite entender el panorama completo del desarrollo web y crear soluciones más integradas.",
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

let currentLanguage = "en";

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

// Toggle de idioma
function initLanguageToggle() {
  const languageToggle = document.getElementById("languageToggle");
  const langText = languageToggle.querySelector(".lang-text");

  // Cargar idioma guardado
  const savedLanguage = localStorage.getItem("portfolio-language") || "en";
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

// Toggle de tema
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Cargar tema guardado
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  body.className = savedTheme === "dark" ? "dark-theme" : "light-theme";
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", function () {
    const isDark = body.classList.contains("dark-theme");
    body.className = isDark ? "light-theme" : "dark-theme";
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
    function (entries) {
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
    success: "#10b981",
    error: "#ef4444",
    info: "#3b82f6",
  };

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-card);
    border: 1px solid ${colors[type]};
    border-radius: var(--border-radius);
    padding: 12px 16px;
    color: var(--text-primary);
    font-weight: 500;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-lg);
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
    ".section, .hero-content, .code-block"
  );

  const observer = new IntersectionObserver(
    function (entries) {
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

// Efectos de hover para proyectos
function initProjectHoverEffects() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    // Efecto de entrada del mouse
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
      this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
      this.style.borderColor = "var(--accent-primary)";

      // Animar iconos de tecnología
      const techTags = this.querySelectorAll(".tech-tag");
      techTags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.transform = "translateY(-2px)";
        }, index * 50);
      });

      // Animar enlaces
      const projectLinks = this.querySelectorAll(".project-link");
      projectLinks.forEach((link, index) => {
        setTimeout(() => {
          link.style.transform = "translateY(-2px)";
        }, index * 100);
      });
    });

    // Efecto de salida del mouse
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "var(--shadow-sm)";
      this.style.borderColor = "var(--border-color)";

      // Resetear animaciones
      const techTags = this.querySelectorAll(".tech-tag");
      techTags.forEach((tag) => {
        tag.style.transform = "translateY(0)";
      });

      const projectLinks = this.querySelectorAll(".project-link");
      projectLinks.forEach((link) => {
        link.style.transform = "translateY(0)";
      });
    });

    // Efecto de click para feedback visual
    card.addEventListener("mousedown", function () {
      this.style.transform = "translateY(-6px) scale(1.01)";
    });

    card.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });
  });
}

// Cambiar navbar al hacer scroll
function initScrollNavbar() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.background = "rgba(10, 10, 10, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.background = "var(--bg-primary)";
      header.style.backdropFilter = "blur(10px)";
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
