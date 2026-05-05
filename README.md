# Portfolio Minimalista - Elías Rodríguez

Un portfolio web elegante y minimalista con soporte para tema claro/oscuro y traducción inglés-español, desarrollado para mostrar habilidades en desarrollo web con especialización en backend.

## 🚀 Características

- **Diseño Minimalista**: Interfaz limpia y elegante sin distracciones
- **Tema Claro/Oscuro**: Toggle para cambiar entre modo claro y oscuro
- **Traducción Inglés/Español**: Sistema completo de traducción con persistencia
- **Responsive Design**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones elegantes y efectos de hover
- **Navegación Intuitiva**: Menú móvil con animaciones
- **Formulario Funcional**: Contacto con validación y notificaciones

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables CSS, Grid, Flexbox, tema claro/oscuro
- **JavaScript ES6+**: Sistema de traducción, toggle de tema, animaciones
- **Font Awesome**: Iconografía moderna
- **Google Fonts**: Tipografía Inter para mejor legibilidad

### Características Técnicas

- **Sistema de Temas**: Variables CSS para tema claro y oscuro
- **Traducción Dinámica**: Cambio de idioma sin recargar página
- **LocalStorage**: Persistencia de preferencias de usuario
- **Intersection Observer**: Animaciones basadas en scroll
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Carga rápida y transiciones suaves

## 📁 Estructura del Proyecto

```
Portfolio/
├── index.html          # Página principal con estructura semántica
├── styles.css          # Estilos con tema claro/oscuro
├── script.js           # Sistema de traducción y funcionalidades
├── package.json        # Configuración del proyecto
├── .gitignore         # Archivos a ignorar
└── README.md          # Documentación
```

## 🎨 Secciones del Portfolio

1. **Hero**: Presentación principal con código destacado
2. **About**: Información personal y estadísticas
3. **Skills**: Habilidades técnicas con barras de progreso
4. **Projects**: Portfolio de trabajos destacados
5. **Contact**: Formulario funcional y información de contacto

## 🚀 Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en cualquier navegador moderno
3. **Cambiar tema** usando el botón de luna/sol
4. **Cambiar idioma** usando el botón EN/ES

### Controles del Portfolio

- **Toggle de Tema**: Botón luna/sol en el header
- **Toggle de Idioma**: Botón EN/ES en el header
- **Menú Móvil**: Botón hamburguesa en dispositivos móviles
- **Navegación**: Enlaces suaves entre secciones

### Atajos de Teclado

- **Ctrl + T**: Cambiar tema
- **Ctrl + L**: Cambiar idioma

## 🎨 Personalización

### Cambiar Información Personal

Edita las secciones en `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">
  <span class="greeting" data-translate="hero.greeting">Hello, I'm</span>
  <span class="name">Tu Nombre</span>
</h1>
```

### Agregar Nuevas Traducciones

Modifica el objeto `translations` en `script.js`:

```javascript
const translations = {
  en: {
    "nueva.clave": "New text in English",
  },
  es: {
    "nueva.clave": "Nuevo texto en español",
  },
};
```

### Personalizar Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
  --bg-primary: #0a0a0a; /* Fondo principal */
  --accent-primary: #3b82f6; /* Color primario */
  --accent-secondary: #10b981; /* Color secundario */
  --text-primary: #ffffff; /* Texto principal */
  /* ... más variables */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Navegación completa)
- **Tablet**: 768px - 480px (Menú adaptativo)
- **Mobile**: < 480px (Menú hamburguesa)

## ⚡ Funcionalidades JavaScript

### Sistema de Traducción

- Cambio dinámico de idioma
- Persistencia en localStorage
- Traducción de todos los elementos marcados

### Toggle de Tema

- Cambio entre tema claro y oscuro
- Persistencia de preferencia
- Transiciones suaves

### Animaciones

- Efectos de scroll con Intersection Observer
- Barras de habilidades animadas
- Hover effects en proyectos
- Transiciones suaves entre secciones

### Formulario de Contacto

- Validación en tiempo real
- Notificaciones elegantes
- Prevención de envíos duplicados

## 🌟 Características Destacadas

- **Sin Dependencias Externas**: Solo HTML, CSS y JavaScript vanilla
- **Tema Dual**: Soporte completo para modo claro y oscuro
- **Multilingüe**: Sistema de traducción inglés-español
- **Accesibilidad**: Navegación por teclado y contraste adecuado
- **Performance**: Optimizado para carga rápida
- **Minimalista**: Diseño limpio sin distracciones
- **Persistencia**: Guarda preferencias del usuario

## 🎯 Inspiración

Este portfolio está inspirado en:

- **Diseño Minimalista**: Enfoque en contenido y funcionalidad
- **Modern Web Design**: Tendencias actuales de UX/UI
- **Developer Portfolios**: Mejores prácticas del sector
- **Accessibility**: Estándares de accesibilidad web

## 📞 Soporte

Si tienes preguntas o necesitas ayuda con la personalización, no dudes en contactarme.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ y mucho café por Elías Rodríguez**

_Portfolio Minimalista v3.0 - Diseño elegante con tema dual y traducción_
