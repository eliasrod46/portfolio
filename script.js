// Portfolio Hacker/Coding - JavaScript
document.addEventListener("DOMContentLoaded", function () {
  initMatrixBackground();
  initTerminalNavigation();
  initTypingAnimations();
  initSkillBars();
  initContactForm();
  initCursorEffect();
  initThemeToggle();
  initLanguageToggle();
  initGlitchEffects();
});

// Sistema de traducción
const translations = {
  en: {
    "terminal.title": "elias@hacker:~$",
    "terminal.whoami": "Elías Rodríguez",
    "terminal.subtitle": "Backend Developer & Code Hacker",
    "terminal.about":
      "Passionate backend developer with 3+ years of experience creating robust and scalable solutions. Specialized in Node.js, Python, and modern web technologies. I transform complex business logic into efficient code that drives real-world applications.",
    "terminal.nav.projects": "projects/",
    "terminal.nav.contact": "contact.sh",
    "terminal.nav.about": "about.txt",
    "terminal.projects.title": "cd projects/ && ls -la",
    "terminal.contact.title": "./contact.sh",
    "terminal.about.title": "cat about.txt",
    "terminal.form.title": "Send Message",
    "terminal.form.name": "Name:",
    "terminal.form.email": "Email:",
    "terminal.form.subject": "Subject:",
    "terminal.form.message": "Message:",
    "terminal.form.send": "Send",
  },
  es: {
    "terminal.title": "elias@hacker:~$",
    "terminal.whoami": "Elías Rodríguez",
    "terminal.subtitle": "Desarrollador Backend & Hacker de Código",
    "terminal.about":
      "Desarrollador backend apasionado con más de 3 años de experiencia creando soluciones robustas y escalables. Especializado en Node.js, Python y tecnologías web modernas. Transformo lógica de negocio compleja en código eficiente que impulsa aplicaciones del mundo real.",
    "terminal.nav.projects": "proyectos/",
    "terminal.nav.contact": "contacto.sh",
    "terminal.nav.about": "sobre_mi.txt",
    "terminal.projects.title": "cd proyectos/ && ls -la",
    "terminal.contact.title": "./contacto.sh",
    "terminal.about.title": "cat sobre_mi.txt",
    "terminal.form.title": "Enviar Mensaje",
    "terminal.form.name": "Nombre:",
    "terminal.form.email": "Email:",
    "terminal.form.subject": "Asunto:",
    "terminal.form.message": "Mensaje:",
    "terminal.form.send": "Enviar",
  },
};

let currentLanguage = "es";

// Función para traducir texto
function translateText() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Matrix Background Effect
function initMatrixBackground() {
  const matrixBg = document.getElementById("matrixBg");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "-1";
  canvas.style.opacity = "0.1";

  matrixBg.appendChild(canvas);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");

  const font_size = 10;
  const columns = canvas.width / font_size;

  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 35);
}

// Terminal Navigation
function initTerminalNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const terminalSections = document.querySelectorAll(".terminal-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Hide all sections
        terminalSections.forEach((section) => {
          section.classList.remove("active");
        });

        // Show target section
        targetSection.classList.add("active");

        // Add typing effect to new section
        addTypingEffect(targetSection);
      }
    });
  });
}

// Typing Animations
function initTypingAnimations() {
  const typingElements = document.querySelectorAll(".typing-text");

  typingElements.forEach((element) => {
    const text = element.getAttribute("data-text");
    element.textContent = "";
    element.style.borderRight = "2px solid var(--accent-green)";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          element.style.borderRight = "none";
        }, 1000);
      }
    };

    setTimeout(typeWriter, 1000);
  });
}

// Skill Bars Animation
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
          }, 500);

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

// Contact Form
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
      showTerminalNotification("Message sent successfully!", "success");
      form.reset();
    } else {
      showTerminalNotification("Please fill in all fields correctly.", "error");
    }
  });
}

// Form Validation
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

// Terminal Notifications
function showTerminalNotification(message, type = "info") {
  const terminalOutput = document.querySelector(".terminal-output");

  const notificationLine = document.createElement("div");
  notificationLine.className = "terminal-line";

  const colors = {
    success: "#00ff00",
    error: "#ff0044",
    info: "#00aaff",
  };

  notificationLine.innerHTML = `
    <span class="prompt">elias@hacker:~$</span>
    <span class="command" style="color: ${colors[type]}">echo "${message}"</span>
  `;

  terminalOutput.appendChild(notificationLine);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;

  // Remove after 5 seconds
  setTimeout(() => {
    if (terminalOutput.contains(notificationLine)) {
      terminalOutput.removeChild(notificationLine);
    }
  }, 5000);
}

// Cursor Effect
function initCursorEffect() {
  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", function () {
    cursor.style.transform = "scale(0.8)";
  });

  document.addEventListener("mouseup", function () {
    cursor.style.transform = "scale(1)";
  });
}

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {
      document.documentElement.style.setProperty("--text-primary", "#1a1a1a");
      document.documentElement.style.setProperty("--text-secondary", "#333333");
      document.documentElement.style.setProperty("--bg-primary", "#ffffff");
      document.documentElement.style.setProperty("--bg-secondary", "#f8f8f8");
      document.documentElement.style.setProperty("--accent-green", "#00aa00");
    } else {
      document.documentElement.style.setProperty("--text-primary", "#00ff00");
      document.documentElement.style.setProperty("--text-secondary", "#00cc00");
      document.documentElement.style.setProperty("--bg-primary", "#0a0a0a");
      document.documentElement.style.setProperty("--bg-secondary", "#111111");
      document.documentElement.style.setProperty("--accent-green", "#00ff00");
    }
  });
}

// Language Toggle
function initLanguageToggle() {
  const languageToggle = document.getElementById("languageToggle");
  const langText = languageToggle.querySelector(".lang-text");

  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    langText.textContent = currentLanguage.toUpperCase();
    translateText();
  });

  // Initialize with Spanish
  translateText();
}

// Glitch Effects
function initGlitchEffects() {
  const glitchElements = document.querySelectorAll(".glitch-text");

  glitchElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.animation = "glitch 0.3s infinite";
    });

    element.addEventListener("mouseleave", function () {
      this.style.animation = "glitch 2s infinite";
    });
  });
}

// Add Typing Effect to Section
function addTypingEffect(section) {
  const terminalLines = section.querySelectorAll(".terminal-line");

  terminalLines.forEach((line, index) => {
    line.style.opacity = "0";
    line.style.transform = "translateX(-20px)";

    setTimeout(() => {
      line.style.transition = "all 0.5s ease";
      line.style.opacity = "1";
      line.style.transform = "translateX(0)";
    }, index * 200);
  });
}

// Terminal Commands
function executeCommand(command) {
  const terminalOutput = document.querySelector(".terminal-output");

  const commandLine = document.createElement("div");
  commandLine.className = "terminal-line";
  commandLine.innerHTML = `
    <span class="prompt">elias@hacker:~$</span>
    <span class="command">${command}</span>
  `;

  terminalOutput.appendChild(commandLine);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Keyboard Shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl + T for theme toggle
  if (e.ctrlKey && e.key === "t") {
    e.preventDefault();
    document.getElementById("themeToggle").click();
  }

  // Ctrl + L for language toggle
  if (e.ctrlKey && e.key === "l") {
    e.preventDefault();
    document.getElementById("languageToggle").click();
  }

  // Escape to go back to welcome
  if (e.key === "Escape") {
    const terminalSections = document.querySelectorAll(".terminal-section");
    terminalSections.forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById("welcome").classList.add("active");
  }
});

// Project Hover Effects
function initProjectHoverEffects() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "0 0 30px rgba(0, 255, 0, 0.5)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
}

// Initialize project hover effects
document.addEventListener("DOMContentLoaded", function () {
  initProjectHoverEffects();
});

// Error Handling
window.addEventListener("error", function (e) {
  console.error("Error en el portfolio hacker:", e.error);
});

// Export functions for external use
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    translateText,
    showTerminalNotification,
    validateForm,
    executeCommand,
  };
}
