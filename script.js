function sendMessage() {

    const input =
    document.getElementById("userInput");

    const pregunta =
    input.value.trim();

    if (!pregunta) return;

    const messages =
    document.getElementById("messages");

    messages.innerHTML += `
    <div class="message user">
        ${pregunta}
    </div>
    `;

    let respuesta =
    generateResponse(pregunta.toLowerCase());

    messages.innerHTML += `
    <div class="message bot">
        ${respuesta}
    </div>
    `;

    input.value = "";

    messages.scrollTop =
    messages.scrollHeight;
}

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
        question.includes("evaluaciones")
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

    // RESPUESTA GENERAL

    return "Puedo ayudarte con información sobre el sílabo, temas por semana, prácticas, laboratorios, exámenes, tareas y evaluación del curso de Física General. ¿Qué te gustaría consultar?";
}