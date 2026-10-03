export const scenes = {

    // ========================================
    // INTRODUCCIÓN
    // ========================================

    inicio: {
        type: "intro",

        speaker: "Profesora",

        text: "Antes de comenzar la evaluación, revisaremos brevemente algunos conceptos importantes relacionados con la promoción de la salud y el uso de tecnologías en el ámbito sanitario.",

        background: "sala.png",

        portrait: "profe.png",

        dialogueBox: "dialogue-box.png",

        next: "informacion1"
    },


    // ========================================
    // INFORMACIÓN 1
    // ========================================

    informacion1: {
        type: "info",

        speaker: "",

        text: "Las políticas públicas de promoción de la salud buscan prevenir enfermedades y desarrollar conocimientos, hábitos y participación social para mejorar la salud individual y colectiva.\n\nSegún la Ley General de Salud, NOM-009-SSA2-2013 y Secretaría de Educación Pública.",

        background: "sala.png",

        portrait: null,

        dialogueBox: "pinguino.png",

        next: "informacion2"
    },


    // ========================================
    // INFORMACIÓN 2
    // ========================================

    informacion2: {
        type: "info",

        speaker: "",

        text: "En 2026, la Secretaría de Salud y el IMSS también impulsaron la interoperabilidad del expediente clínico electrónico, buscando facilitar el intercambio seguro de información entre instituciones.",

        background: "sala.png",

        portrait: null,

        dialogueBox: "pinguino.png",

        next: "inicioEvaluacion"
    },


    // ========================================
    // COMIENZO DE LA EVALUACIÓN
    // ========================================

    inicioEvaluacion: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Bien. Vamos a comenzar tu evaluación. Te haré siete preguntas. Lee cada una con atención antes de responder.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "introPregunta1"
    },


    // ========================================
    // PREGUNTA 1
    // DIABETES
    // Correcta: B
    // ========================================

    introPregunta1: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Comencemos con salud pública. Es importante reconocer cuáles son algunos de los principales problemas de salud que afectan a la población mexicana.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "pregunta1"
    },

    pregunta1: {
        type: "question",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "¿Cuál es un problema prioritario de salud en México?",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        answers: [
            {
                text: "Miopía",
                correct: false
            },

            {
                text: "Diabetes",
                correct: true,
                next: "explicacion1"
            },

            {
                text: "Otitis",
                correct: false
            },

            {
                text: "Gastritis",
                correct: false
            }
        ]
    },

    explicacion1: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Correcto. La diabetes es un importante problema de salud pública. Su prevención y control incluyen una alimentación adecuada, actividad física, controles médicos y educación para la salud.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "introPregunta2"
    },


    // ========================================
    // PREGUNTA 2
    // PROMOCIÓN DE LA SALUD
    // Correcta: C
    // ========================================

    introPregunta2: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Ahora pasaremos a la promoción de la salud. La atención sanitaria no consiste solamente en tratar una enfermedad una vez que aparece; también es fundamental prevenirla.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "pregunta2"
    },

    pregunta2: {
        type: "question",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "¿Qué busca principalmente la promoción de la salud?",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        answers: [
            {
                text: "Aumentar hospitalizaciones",
                correct: false
            },

            {
                text: "Sustituir medicamentos",
                correct: false
            },

            {
                text: "Prevenir enfermedades",
                correct: true,
                next: "explicacion2"
            },

            {
                text: "Reducir consultas",
                correct: false
            }
        ]
    },

    explicacion2: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Exacto. La promoción de la salud busca prevenir enfermedades y mejorar la calidad de vida mediante educación, hábitos saludables y una participación activa de las personas en el cuidado de su salud.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "introPregunta3"
    },


    // ========================================
    // PREGUNTA 3
    // NORMA DE SALUD ESCOLAR
    // Correcta: A
    // ========================================

    introPregunta3: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "La promoción de la salud también se desarrolla en las escuelas. Para organizar estas acciones existen normas que establecen lineamientos específicos para la atención y promoción de la salud escolar.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "pregunta3"
    },

    pregunta3: {
        type: "question",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "¿Qué norma aborda la promoción de la salud escolar?",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        answers: [
            {
                text: "NOM-009-SSA2-2013",
                correct: true,
                next: "explicacion3"
            },

            {
                text: "NOM-004-SSA3-2012",
                correct: false
            },

            {
                text: "NOM-019-SSA3-2013",
                correct: false
            },

            {
                text: "NOM-030-SSA2-2009",
                correct: false
            }
        ]
    },

    explicacion3: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Correcto. La NOM-009-SSA2-2013 está relacionada con la promoción de la salud escolar y establece criterios para fomentar acciones de prevención y cuidado de la salud dentro de la comunidad educativa.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "introPregunta4"
    },


    // ========================================
    // PREGUNTA 4
    // SALUD DIGITAL
    // Correcta: D
    // ========================================

    introPregunta4: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "La tecnología tiene una presencia cada vez mayor en los servicios sanitarios. Esto ha dado origen al concepto de salud digital.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "pregunta4"
    },

    pregunta4: {
        type: "question",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "¿Qué es la salud digital?",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        answers: [
            {
                text: "Medicina tradicional",
                correct: false
            },

            {
                text: "Actividad física",
                correct: false
            },

            {
                text: "Alimentación saludable",
                correct: false
            },

            {
                text: "Uso de tecnología en la salud",
                correct: true,
                next: "explicacion4"
            }
        ]
    },

    explicacion4: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Muy bien. La salud digital consiste en utilizar tecnologías digitales para apoyar la atención, prevención, educación, seguimiento y gestión relacionada con la salud.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "introPregunta5"
    },


    // ========================================
    // PREGUNTA 5
    // TELEMEDICINA
    // Correcta: B
    // ========================================

    introPregunta5: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Una de las aplicaciones de la salud digital es la telemedicina. Esta herramienta permite mantener contacto entre pacientes y profesionales aunque no se encuentren físicamente en el mismo lugar.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "pregunta5"
    },

    pregunta5: {
        type: "question",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "¿Qué permite la telemedicina?",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        answers: [
            {
                text: "Eliminar consultas",
                correct: false
            },

            {
                text: "Atención a distancia",
                correct: true,
                next: "explicacion5"
            },

            {
                text: "Sustituir enfermeros",
                correct: false
            },

            {
                text: "Evitar diagnósticos",
                correct: false
            }
        ]
    },

    explicacion5: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Correcto. La telemedicina permite realizar determinadas atenciones y seguimientos a distancia utilizando tecnologías de comunicación, facilitando el acceso de los pacientes a profesionales de la salud.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "introPregunta6"
    },


    // ========================================
    // PREGUNTA 6
    // INTELIGENCIA ARTIFICIAL
    // Correcta: C
    // ========================================

    introPregunta6: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Las herramientas de inteligencia artificial también pueden utilizarse con fines educativos. En salud, pueden servir como apoyo para crear recursos que faciliten el aprendizaje.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "pregunta6"
    },

    pregunta6: {
        type: "question",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "¿Cómo puede apoyar la IA a la educación en salud?",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        answers: [
            {
                text: "Sustituir al personal de salud",
                correct: false
            },

            {
                text: "Prescribir medicamentos",
                correct: false
            },

            {
                text: "Crear materiales y preguntas de estudio",
                correct: true,
                next: "explicacion6"
            },

            {
                text: "Realizar cirugías",
                correct: false
            }
        ]
    },

    explicacion6: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Exacto. La inteligencia artificial puede apoyar la educación en salud mediante la creación de materiales, ejercicios y preguntas de estudio. Es una herramienta de apoyo y no sustituye a los profesionales sanitarios.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "introPregunta7"
    },


    // ========================================
    // PREGUNTA 7
    // TIC, TAC Y TEP
    // Correcta: A
    // ========================================

    introPregunta7: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Llegamos a la última parte de la evaluación. Ahora debes diferenciar TIC, TAC y TEP. Los tres conceptos utilizan tecnología, pero cada uno tiene un propósito diferente.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "pregunta7"
    },

    pregunta7: {
        type: "question",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "¿Cuál relación es correcta?",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        answers: [
            {
                text: "TIC: comunicar / TAC: aprender / TEP: participar",
                correct: true,
                next: "explicacion7"
            },

            {
                text: "TIC: aprender / TAC: participar / TEP: comunicar",
                correct: false
            },

            {
                text: "TIC: participar / TAC: comunicar / TEP: aprender",
                correct: false
            },

            {
                text: "TIC: diagnosticar / TAC: hospitalizar / TEP: prescribir",
                correct: false
            }
        ]
    },

    explicacion7: {
        type: "dialogue",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Muy bien. Las TIC permiten acceder y comunicar información. Las TAC utilizan la tecnología para aprender y generar conocimiento. Las TEP buscan fomentar la participación, colaboración y empoderamiento de las personas.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png",

        next: "final"
    },


    // ========================================
    // FINAL
    // ========================================

    final: {
        type: "ending",

        speaker: "Dr. David Kershenobich Stalnikowitz",

        text: "Has terminado la evaluación. Durante este recorrido repasaste problemas de salud pública, promoción de la salud, salud escolar, salud digital, telemedicina, inteligencia artificial y el uso de TIC, TAC y TEP. Evaluación completada.",

        background: "examen.png",

        portrait: "protagonista.png",

        dialogueBox: "dialogue-box.png"
    }

};