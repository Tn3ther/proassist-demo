// ============================================
// ProAssist — Enhanced JavaScript
// ============================================

// --- DOM Ready ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();
  initHamburgerMenu();
  initSidebarToggle();
  initChatInput();
});

// ============================
// NAVBAR (scroll glassmorphism)
// ============================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ============================
// SCROLL ANIMATIONS (reveal)
// ============================
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
}

// ============================
// HAMBURGER MENU (mobile nav)
// ============================
function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

// ============================
// SIDEBAR TOGGLE (mobile chat)
// ============================
function initSidebarToggle() {
  const toggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("chatSidebar");
  if (!toggle || !sidebar) return;

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      sidebar.classList.remove("open");
    }
  });
}

// ============================
// CHAT INPUT (Enter key)
// ============================
function initChatInput() {
  const input = document.getElementById("userInput");
  if (!input) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
}

// ============================
// SEND MESSAGE (with typing)
// ============================
function sendMessage() {
  const input = document.getElementById("userInput");
  const pregunta = input.value.trim();

  if (!pregunta) return;

  const messages = document.getElementById("messages");

  // Hide suggestions after first user message
  const suggestions = document.getElementById("suggestions");
  if (suggestions) {
    suggestions.style.display = "none";
  }

  // Add user message
  addMessage(pregunta, "user");

  // Clear input
  input.value = "";

  // Show typing indicator
  const typingEl = showTypingIndicator();

  // Simulate response delay
  const delay = 800 + Math.random() * 600;

  setTimeout(() => {
    // Remove typing indicator
    typingEl.remove();

    // Generate and add bot response
    const respuesta = generateResponse(pregunta.toLowerCase());
    addMessage(respuesta, "bot");
  }, delay);
}

// ============================
// SEND SUGGESTION (chip click)
// ============================
function sendSuggestion(text) {
  const input = document.getElementById("userInput");
  input.value = text;
  sendMessage();
}

// ============================
// ADD MESSAGE (helper)
// ============================
function addMessage(text, sender) {
  const messages = document.getElementById("messages");

  const avatar = sender === "bot" ? "🤖" : "👤";

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-bubble">${text}</div>
  `;

  messages.appendChild(messageDiv);

  // Smooth scroll to bottom
  messages.scrollTo({
    top: messages.scrollHeight,
    behavior: "smooth",
  });
}

// ============================
// TYPING INDICATOR
// ============================
function showTypingIndicator() {
  const messages = document.getElementById("messages");

  const typing = document.createElement("div");
  typing.className = "typing-indicator";
  typing.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="typing-dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  `;

  messages.appendChild(typing);

  messages.scrollTo({
    top: messages.scrollHeight,
    behavior: "smooth",
  });

  return typing;
}

// ============================
// GENERATE RESPONSE
// (Original logic preserved)
// ============================
function generateResponse(question) {

    // PRESENTACIÓN

    if (
        question.includes("quien es") ||
        question.includes("presentacion") ||
        question.includes("profesor")
    ) {
        return "Mi nombre es Wilson Camacho. Soy Licenciado en Física, Máster en Ciencias Físicas y candidato a Doctor en Ciencias e Ingeniería de la Computación. Los acompañaré durante todo el desarrollo del curso de Física General.";
    }

    // SEMANAS

    if (question.includes("semana 1") || question.includes("vectores")) {
        return "En la semana 1 estudiaremos Análisis Vectorial. Veremos magnitudes escalares y vectoriales, componentes rectangulares, suma de vectores, producto escalar y producto vectorial.";
    }

    if (question.includes("semana 2") || question.includes("mruv") || question.includes("caida libre")) {
        return "En la semana 2 desarrollaremos Cinemática en una dimensión. Revisaremos MRU, MRUV, velocidad, aceleración y caída libre.";
    }

    if (question.includes("semana 3") || question.includes("parabolico")) {
        return "En la semana 3 veremos movimiento parabólico y movimiento circular uniforme. Calcularemos tiempo de vuelo, alcance máximo y aceleración centrípeta.";
    }

    if (question.includes("newton") || question.includes("semana 4")) {
        return "En la semana 4 estudiaremos las Leyes de Newton, diagramas de cuerpo libre, fuerzas de fricción, tensión y fuerza normal.";
    }

    if (question.includes("energia") || question.includes("trabajo")) {
        return "En la semana 6 veremos Trabajo y Energía. Analizaremos energía cinética, energía potencial, conservación de la energía y potencia.";
    }

    if (question.includes("impulso") || question.includes("colisiones")) {
        return "En la semana 7 estudiaremos cantidad de movimiento, impulso, conservación del momento lineal y diferentes tipos de colisiones.";
    }

    if (question.includes("equilibrio") || question.includes("torque")) {
        return "En la semana 8 veremos Estática y Equilibrio. Aprenderemos a calcular torques y analizar cuerpos rígidos en equilibrio.";
    }

    if (question.includes("fluidos") || question.includes("bernoulli")) {
        return "En la semana 9 estudiaremos Mecánica de Fluidos, incluyendo presión, densidad, principio de Pascal, Arquímedes y ecuación de Bernoulli.";
    }

    if (question.includes("termodinamica") || question.includes("calor")) {
        return "En la semana 11 veremos Termodinámica. Estudiaremos temperatura, calor, dilatación térmica y la Primera Ley de la Termodinámica.";
    }

    if (question.includes("electrostatica")) {
        return "En la semana 12 desarrollaremos Electrostática. Revisaremos carga eléctrica, Ley de Coulomb y campo eléctrico.";
    }

    if (question.includes("ohm") || question.includes("circuitos")) {
        return "En la semana 13 estudiaremos circuitos eléctricos, Ley de Ohm, capacitores y Leyes de Kirchhoff.";
    }

    if (question.includes("electromagnetismo")) {
        return "En la semana 14 veremos campos magnéticos, fuerza de Lorentz e inducción electromagnética.";
    }

    if (question.includes("ondas") || question.includes("fibra optica")) {
        return "En la semana 15 estudiaremos ondas, óptica, reflexión, refracción y aplicaciones modernas como la fibra óptica.";
    }

    // EXÁMENES

    if (
        question.includes("parcial 1") ||
        question.includes("primer parcial") ||
        question.includes("examen parcial i")
    ) {
        return "El Examen Parcial I se realiza en la semana 5.";
    }

    if (
        question.includes("parcial 2") ||
        question.includes("segundo parcial") ||
        question.includes("examen parcial ii")
    ) {
        return "El Examen Parcial II se realiza en la semana 10.";
    }

    if (
        question.includes("final") ||
        question.includes("examen final")
    ) {
        return "El Examen Final se realiza en la semana 16.";
    }

    // TAREAS

    if (
        question.includes("tareas") ||
        question.includes("trabajos") ||
        question.includes("evaluaciones") ||
        question.includes("temas")
    ) {
        return "Durante el semestre se desarrollarán prácticas calificadas, controles de lectura, informes de laboratorio, informes académicos, trabajos de investigación y exámenes parciales y final.";
    }

    if (
        question.includes("laboratorio")
    ) {
        return "Los laboratorios incluyen teoría de errores, Segunda Ley de Newton, Principio de Arquímedes, Dilatación de un sólido, Métodos de Polarización y Leyes de Ohm y Kirchhoff.";
    }

    if (
        question.includes("turnitin")
    ) {
        return "El trabajo de investigación formativa debe tener un porcentaje de similitud menor al 20% en Turnitin y no debe incorporar textos generados por IA.";
    }

    // PORCENTAJES

    if (
        question.includes("porcentaje") ||
        question.includes("nota") ||
        question.includes("calificacion")
    ) {
        return "La evaluación considera prácticas calificadas, controles de lectura, informes de laboratorio, informes académicos, trabajo de investigación, exámenes parciales y examen final según la distribución establecida en el sílabo.";
    }

    // SALUDO

    if (
        question.includes("hola") ||
        question.includes("buenas")
    ) {
        return "Hola. Soy el profesor Wilson Camacho. Bienvenido al asistente virtual del curso de Física General. ¿En qué puedo ayudarte?";
    }

    // DESPEDIDA

    if (
        question.includes("gracias")
    ) {
        return "Con gusto. Estoy aquí para ayudarte durante todo el semestre. Te deseo muchos éxitos en el curso.";
    }

    // EXÁMENES (general)

    if (
        question.includes("examen") ||
        question.includes("parcial")
    ) {
        return "Los exámenes del curso son: Examen Parcial I (semana 5), Examen Parcial II (semana 10) y Examen Final (semana 16). ¿Sobre cuál deseas más información?";
    }

    // RESPUESTA GENERAL

    return "Puedo ayudarte con información sobre el sílabo, temas por semana, prácticas, laboratorios, exámenes, tareas y evaluación del curso de Física General. ¿Qué te gustaría consultar?";
}