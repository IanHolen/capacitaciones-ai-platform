import type { QuizQuestion } from "./cursos-data";
import {
  curso1QuizEn,
  curso2QuizEn,
  curso3QuizEn,
  curso7QuizEn,
  curso8QuizEn,
  curso9QuizEn,
  curso10QuizEn,
  curso11QuizEn,
  curso12QuizEn,
} from "./quiz-data-en";

// Placeholder empty arrays for courses without English translations yet
const emptyEnPartials: Partial<QuizQuestion>[] = [];

function mergeEnglish(
  esQuestions: QuizQuestion[],
  enPartials: Partial<QuizQuestion>[],
): QuizQuestion[] {
  return esQuestions.map((q, i) => ({
    ...q,
    ...(enPartials[i] ?? {}),
  }));
}

export const curso1Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "Qué es la Inteligencia Artificial?",
    options: [
      "Un robot con sentimientos y conciencia propia",
      "Un programa de computadora que aprende de datos para realizar tareas",
      "Una tecnología que solo pueden usar los ingenieros",
      "Un invento de los últimos 2 años",
    ],
    correctIndex: 1,
    explanation:
      "La IA es un programa que aprende de datos para realizar tareas que normalmente requerirían inteligencia humana.",
  },
  {
    question:
      'En la analogia de la cocina, que representan los "datos" en la IA?',
    options: ["La receta", "El cocinero", "Los ingredientes", "El plato terminado"],
    correctIndex: 2,
    explanation:
      "Los datos son como los ingredientes: son la materia prima que la IA necesita para funcionar.",
  },
  {
    question:
      "Cuál de estas es una funcion REAL de la IA en tu vida diaria?",
    options: [
      "Leer tu mente para saber que quieres comprar",
      "Filtrar los correos de spam en tu email",
      "Tomar decisiones importantes por ti sin consultarte",
      "Grabar todas tus conversaciones telefonicas",
    ],
    correctIndex: 1,
    explanation:
      "El filtro de spam es uno de los usos más comunes y antiguos de la IA.",
  },
  {
    question:
      "Cuando la IA inventa información que suena verdadera pero es falsa, cómo se llama eso?",
    options: ["Un virus", "Un algoritmo", "Una alucinación", "Un token"],
    correctIndex: 2,
    explanation:
      'Se llama "alucinación" cuando la IA genera informacion falsa con total confianza.',
  },
  {
    question: "Cuál de estas afirmaciones sobre la IA es VERDADERA?",
    options: [
      "La IA piensa y siente como un ser humano",
      "La IA siempre da respuestas correctas",
      "La IA puede equivocarse y hay que verificar sus respuestas",
      "La IA solo funciona en computadoras muy costosas",
    ],
    correctIndex: 2,
    explanation:
      "La IA se equivoca y es fundamental verificar siempre sus respuestas.",
  },
  {
    question: 'Que es un "prompt"?',
    options: [
      "El nombre de un modelo de IA muy famoso",
      "La instrucción o pregunta que tú le das a la IA",
      "Un error que comete la IA",
      "El boton para encender la IA",
    ],
    correctIndex: 1,
    explanation:
      "Un prompt es lo que tú escribes o dices para comunicarte con la IA.",
  },
  {
    question: "Cuál de estos NO es un ejemplo de IA en la vida cotidiana?",
    options: [
      "Netflix recomendandote películas",
      "Tu reloj mostrando la hora",
      "El autocorrector de tu teclado",
      "Google Maps calculando la mejor ruta",
    ],
    correctIndex: 1,
    explanation:
      "Un reloj mostrando la hora es una funcion mecánica o electrónica simple, no requiere IA.",
  },
  {
    question: 'Por que se dice que la IA puede tener "sesgos"?',
    options: [
      "Porque fue creada por personas malvadas",
      "Porque los datos con los que aprendio pueden tener prejuicios",
      "Porque quiere engañar a los usuarios",
      "Porque solo funciona en ingles",
    ],
    correctIndex: 1,
    explanation:
      "La IA aprende de datos, y si esos datos reflejan prejuicios de la sociedad, la IA va a reproducirlos.",
  },
  {
    question: "Cuál es la mejor actitud al usar Inteligencia Artificial?",
    options: [
      "Confiar ciegamente en todo lo que dice",
      "Tenerle miedo y no usarla nunca",
      "Usarla como herramienta útil, pero siempre verificando la información",
      "Usarla solo para cosas poco importantes",
    ],
    correctIndex: 2,
    explanation:
      "La IA es una herramienta poderosa que puede ayudarnos mucho, pero debemos usarla con criterio.",
  },
  {
    question: "Cuál de estos es un asistente conversacional de IA?",
    options: ["Microsoft Excel", "ChatGPT", "Google Maps", "WhatsApp"],
    correctIndex: 1,
    explanation:
      "ChatGPT es un asistente conversacional de IA creado por OpenAI.",
  },
  { question: "¿Quién hizo la famosa pregunta '¿Pueden pensar las máquinas?' en 1950?", options: ["Albert Einstein", "Alan Turing", "Bill Gates", "Isaac Newton"], correctIndex: 1, explanation: "Alan Turing planteó esta pregunta en 1950, iniciando la investigación en IA." },
  { question: "¿Cuáles son las tres razones de la explosión de la IA?", options: ["Más dinero, más universidades y más programadores", "Datos masivos, computadoras más potentes y mejores métodos", "Redes sociales, smartphones e internet", "Robots, satélites y laboratorios"], correctIndex: 1, explanation: "Datos masivos, hardware más poderoso y mejores algoritmos impulsaron la IA." },
  { question: "¿Cómo se llama el proceso en que la IA aprende de muchos ejemplos?", options: ["Programación", "Entrenamiento", "Instalación", "Calibración"], correctIndex: 1, explanation: "El entrenamiento es el proceso en que la IA aprende de datos para mejorar." },
  { question: "¿Cuál afirmación sobre la IA es CORRECTA?", options: ["La IA funciona por magia", "La IA es un misterio para sus creadores", "La IA tiene explicaciones técnicas y matemáticas, no es magia", "La IA se basa en poderes sobrenaturales"], correctIndex: 2, explanation: "La IA tiene fundamentos técnicos y matemáticos bien definidos." },
  { question: "¿Cuál afirmación sobre los tipos de IA es VERDADERA?", options: ["Existe un solo tipo de IA", "Todos los sistemas de IA son iguales", "Hay muchos tipos distintos de IA para tareas específicas", "Todas las IA comparten la misma base de datos"], correctIndex: 2, explanation: "Existen muchos tipos diferentes: de visión, de lenguaje, de recomendación, etc." },
  { question: "Cuando Netflix te sugiere series, ¿qué tecnología usa?", options: ["Un empleado que revisa tu historial", "Un sistema de IA de recomendación", "Un sorteo aleatorio", "Una lista fija de directores"], correctIndex: 1, explanation: "Netflix usa IA para analizar tu historial y recomendar contenido personalizado." },
  { question: "Cuando tu banco te avisa de una compra sospechosa, ¿qué está haciendo?", options: ["Un auditor humano revisa cada transacción", "Un sistema de IA detecta patrones inusuales", "Una alarma que suena al azar", "Un proceso manual de varios días"], correctIndex: 1, explanation: "Los bancos usan IA para detectar patrones inusuales y prevenir fraudes." },
  { question: "Cuando tu teléfono sugiere la siguiente palabra al escribir, ¿qué lo hace posible?", options: ["Un diccionario tradicional", "Inteligencia Artificial que aprende tu forma de escribir", "Un asistente humano remoto", "Un corrector sin aprendizaje"], correctIndex: 1, explanation: "Las sugerencias de palabras son un ejemplo de IA integrada en tu teléfono." },
  { question: "¿Cuál es el mito más común sobre cómo 'piensa' la IA?", options: ["Que no necesita datos", "Que razona y siente como un ser humano", "Que es demasiado lenta", "Que solo funciona en inglés"], correctIndex: 1, explanation: "La IA no piensa ni siente; predice secuencias de palabras o patrones estadísticos." },
  { question: "¿Qué tan cierto es que la IA eliminará todos los empleos?", options: ["Completamente verdadero", "Completamente falso", "Parcialmente cierto: algunos cambiarán y surgirán nuevos", "Solo afectará países desarrollados"], correctIndex: 2, explanation: "La IA transforma el mercado laboral: automatiza tareas y crea nuevos roles." },
  { question: "¿Quiénes pueden usar herramientas de IA?", options: ["Solo ingenieros y programadores", "Solo menores de 30 años", "Cualquier persona, sin importar edad ni conocimientos técnicos", "Solo quienes hablan inglés"], correctIndex: 2, explanation: "La IA es accesible para cualquier persona; no se necesitan conocimientos técnicos." },
  { question: "¿Desde cuándo se investiga la Inteligencia Artificial?", options: ["Desde los 2010", "Desde los 1990", "Desde los años 1950", "Desde 2022"], correctIndex: 2, explanation: "La IA se investiga desde los años 1950; su adopción masiva es reciente." },
  { question: "¿Es verdad que usar IA genera dependencia perjudicial?", options: ["Sí, está diseñada para crear adicción", "No, es una herramienta como la calculadora", "Sí, desactiva capacidades cognitivas", "No, porque no se puede usar a diario"], correctIndex: 1, explanation: "La IA es una herramienta; usarla de forma consciente es válido." },
  { question: "¿Podría la IA volverse consciente y dominar a la humanidad?", options: ["Sí, es cuestión de tiempo", "Sí, ya hay IA consciente en laboratorios", "No, la IA actual carece de conciencia y voluntad", "Sí, pero solo conectada a internet"], correctIndex: 2, explanation: "La IA actual no tiene conciencia, intenciones ni voluntad." },
  { question: "¿Cuáles herramientas se usan para GENERAR TEXTO con IA?", options: ["DALL-E y Midjourney", "Siri y Alexa", "Jasper y Copy.ai", "Google Translate y DeepL"], correctIndex: 2, explanation: "Jasper y Copy.ai son herramientas de generación de texto con IA." },
  { question: "¿Qué tienen en común DALL-E, Midjourney y Adobe Firefly?", options: ["Son asistentes de voz", "Son herramientas de IA para generar imágenes a partir de texto", "Son traductores automáticos", "Son modelos de lenguaje para código"], correctIndex: 1, explanation: "Son herramientas de generación de imágenes mediante IA." },
  { question: "¿Cuáles son asistentes de voz impulsados por IA?", options: ["Excel, Word y PowerPoint", "Firefox, Chrome y Safari", "Siri, Alexa y Google Assistant", "Zoom, Teams y Meet"], correctIndex: 2, explanation: "Siri, Alexa y Google Assistant son asistentes de voz con IA." },
  { question: "Para traducir un documento del español al japonés, ¿qué herramientas usarías?", options: ["Jasper o Copy.ai", "DALL-E o Midjourney", "Google Translate o DeepL", "Siri o Alexa"], correctIndex: 2, explanation: "Google Translate y DeepL son herramientas de traducción con IA." },
  { question: "Cuando WhatsApp ofrece respuestas rápidas o Google Fotos agrupa por personas, ¿qué tipo de IA usan?", options: ["IA externa por separado", "IA embebida dentro de la aplicación", "IA solo con suscripción premium", "Un proceso manual de moderadores"], correctIndex: 1, explanation: "WhatsApp y Google Fotos tienen IA embebida que opera en segundo plano." },
  { question: "En vocabulario de IA, ¿qué es un 'modelo'?", options: ["Una persona que inspira la IA", "El sistema entrenado que realiza tareas, como GPT-4 o Claude", "El manual de instrucciones de la IA", "El precio de usar la IA"], correctIndex: 1, explanation: "Un modelo es el sistema de IA ya entrenado, como GPT-4, Claude o Gemini." },
  { question: "¿Qué es un 'chatbot'?", options: ["Un robot físico que camina", "Un virus informático", "Un programa para mantener conversaciones mediante texto o voz", "Una app de videos"], correctIndex: 2, explanation: "Un chatbot conversa con personas mediante texto o voz." },
  { question: "¿Qué es un 'algoritmo' en IA?", options: ["Hardware especial para IA", "Instrucciones paso a paso que la computadora sigue para resolver un problema", "El nombre del creador de la IA", "Una base de datos de imágenes"], correctIndex: 1, explanation: "Un algoritmo es una secuencia de pasos para resolver un problema." },
  { question: "¿Qué significa 'machine learning'?", options: ["La máquina se repara sola", "La máquina aprende de datos sin programación explícita para cada tarea", "La máquina imita movimientos humanos", "La máquina aprende solo con supervisión constante"], correctIndex: 1, explanation: "El machine learning permite que los sistemas aprendan de datos sin reglas explícitas." },
  { question: "¿Qué es una 'red neuronal'?", options: ["Red de internet para investigadores de IA", "Sistema de cámaras conectadas", "Modelo computacional inspirado en las neuronas del cerebro", "Cable especial para servidores de IA"], correctIndex: 2, explanation: "Las redes neuronales son modelos inspirados en la estructura del cerebro." },
  { question: "Cuando se dice que una herramienta es 'open source', ¿qué significa?", options: ["Solo disponible en Linux", "Su código fuente es público y cualquiera puede verlo, usarlo o modificarlo", "Solo disponible en inglés", "Sin costo pero sin soporte"], correctIndex: 1, explanation: "Open source significa que el código es público y accesible." },
], curso1QuizEn);

export const curso2Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "Cuál de estos NO es un asistente de IA?",
    options: ["ChatGPT", "Claude", "Wikipedia", "Gemini"],
    correctIndex: 2,
    explanation: "Wikipedia es una enciclopedia, no un asistente de IA.",
  },
  {
    question: "Quién creó ChatGPT?",
    options: ["Google", "Apple", "OpenAI", "Microsoft"],
    correctIndex: 2,
    explanation: "ChatGPT fue creado por OpenAI.",
  },
  {
    question: "Forma más rápida de usar Gemini si ya tienes Gmail?",
    options: [
      "Descargar app",
      "Ir a gemini.google.com con tu cuenta Google",
      "Llamar a Google",
      "Comprar suscripción",
    ],
    correctIndex: 1,
    explanation: "Entras con la misma cuenta de Gmail.",
  },
  {
    question: 'Que es una "alucinación" de la IA?',
    options: [
      "Cuando ve imágenes",
      "Cuando inventa info que suena real pero es falsa",
      "Cuando deja de funcionar",
      "Cuando pide dinero",
    ],
    correctIndex: 1,
    explanation:
      "La IA a veces genera información convincente pero falsa.",
  },
  {
    question: "Si la respuesta es muy larga y confusa, que hacer?",
    options: [
      "Apagar computadora",
      "Nada",
      'Escribir "resumelo en 3 puntos simples"',
      "Crear cuenta nueva",
    ],
    correctIndex: 2,
    explanation: "Siempre puedes pedir que resuma o simplifique.",
  },
  {
    question: "Qué NO debes compartir con un asistente de IA?",
    options: [
      "Receta",
      "Número de tarjeta de crédito",
      "Pregunta de historia",
      "Borrador de correo",
    ],
    correctIndex: 1,
    explanation:
      "Nunca compartas contraseñas, tarjetas ni datos bancarios.",
  },
  {
    question: "Mejor forma de escribirle a la IA?",
    options: [
      "Palabras sueltas",
      "Oraciones completas con detalles",
      "Solo en ingles",
      "Palabras técnicas",
    ],
    correctIndex: 1,
    explanation: "Oraciones completas con contexto y detalles.",
  },
  {
    question: "Para que situación la IA es buena herramienta?",
    options: [
      "Diagnosticar enfermedad",
      "Combinacion de caja fuerte",
      "Ayudar a escribir correo",
      "Reemplazar abogado",
    ],
    correctIndex: 2,
    explanation:
      "Excelente para redactar textos y organizar ideas.",
  },
  {
    question: 'El truco "actua como..." sirve para:',
    options: [
      "Convertir IA en profesional real",
      "Obtener respuestas más enfocadas",
      "Funciones secretas",
      "Que funcione más rápido",
    ],
    correctIndex: 1,
    explanation:
      "Hace respuestas más enfocadas, pero no es un experto real.",
  },
  {
    question: "Si la IA da respuesta que no te gusta, que hacer?",
    options: [
      "Rendirte",
      "Pedir otra versión o que la cambie",
      "Crear otra cuenta",
      "No se puede cambiar",
    ],
    correctIndex: 1,
    explanation: "Siempre puedes pedir cambios.",
  },
  { question: "¿Dónde puedes acceder a ChatGPT desde el navegador?", options: ["chatgpt.google.com", "chat.openai.org", "chatgpt.com", "openai.chatgpt.com"], correctIndex: 2, explanation: "ChatGPT se accede en chatgpt.com." },
  { question: "¿Necesitas pagar para empezar a usar ChatGPT?", options: ["Sí, cuesta $20 al mes", "No, tiene una versión gratuita", "Solo con tarjeta de crédito", "Es gratuito solo en México"], correctIndex: 1, explanation: "ChatGPT ofrece una versión gratuita." },
  { question: "¿Cuál es la fortaleza principal de ChatGPT?", options: ["Se integra con correo electrónico", "Tiene la base de conocimiento más amplia: sabe un poco de todo", "Sus respuestas son más cortas", "Solo funciona en inglés"], correctIndex: 1, explanation: "ChatGPT destaca por su enorme base de conocimiento." },
  { question: "¿Quién creó Claude?", options: ["OpenAI", "Google", "Microsoft", "Anthropic"], correctIndex: 3, explanation: "Claude fue creado por Anthropic." },
  { question: "¿En qué sitio web puedes usar Claude?", options: ["claude.google.com", "claude.ai", "anthropic.chat", "claude.openai.com"], correctIndex: 1, explanation: "Claude se accede en claude.ai." },
  { question: "¿Cuál es la fortaleza principal de Claude?", options: ["Se conecta a Google Drive", "Tiene respuestas más cortas", "Sus explicaciones son claras y bien organizadas", "Funciona sin internet"], correctIndex: 2, explanation: "Claude destaca por explicaciones claras y respuestas bien estructuradas." },
  { question: "¿Qué empresa creó Gemini?", options: ["Apple", "Amazon", "Google", "Meta"], correctIndex: 2, explanation: "Gemini es el asistente de IA de Google." },
  { question: "¿Cuál es la dirección web para usar Gemini?", options: ["gemini.google.com", "gemini.com", "google.ai/gemini", "bard.google.com"], correctIndex: 0, explanation: "Gemini se accede en gemini.google.com con tu cuenta de Google." },
  { question: "¿Cuál es la fortaleza principal de Gemini?", options: ["Mayor número de idiomas", "Se integra con servicios de Google como Gmail y Drive", "Respuestas más largas", "Es el único que lee PDFs"], correctIndex: 1, explanation: "Gemini destaca por su integración con servicios de Google." },
  { question: "¿Cuánto tiempo tarda crear una cuenta en un asistente de IA?", options: ["Más de una hora", "30 a 45 minutos", "Menos de 5 minutos", "Varios días"], correctIndex: 2, explanation: "Crear una cuenta en cualquier asistente tarda menos de 5 minutos." },
  { question: "Si ya tienes Gmail, ¿cuál es la forma más rápida de usar un asistente?", options: ["Crear cuenta nueva en ChatGPT", "Instalar una app de pago", "Entrar a Gemini con tu cuenta de Google", "Registrarse en Claude"], correctIndex: 2, explanation: "Si ya tienes Gmail, puedes entrar a Gemini sin registro adicional." },
  { question: "ChatGPT, Claude y Gemini son:", options: ["Personas reales que responden manualmente", "Programas de computadora, no seres humanos", "Robots físicos conectados a internet", "Empleados de empresas tecnológicas"], correctIndex: 1, explanation: "Son programas de computadora, no personas." },
  { question: "¿Puede un asistente de IA reemplazar a tu médico?", options: ["Sí, es igual de confiable", "Sí, con ChatGPT versión de pago", "No, la IA no puede reemplazar a profesionales", "Depende de la enfermedad"], correctIndex: 2, explanation: "La IA no puede reemplazar a médicos, abogados ni otros profesionales." },
  { question: "¿Cómo debes escribirle a un asistente de IA?", options: ["Palabras clave sueltas", "Solo con emojis", "Con frases completas y conversacionales", "Solo en inglés"], correctIndex: 2, explanation: "La IA responde mejor con frases completas y contexto." },
  { question: "Después de recibir una respuesta, ¿qué puedes hacer?", options: ["Buscar en otro sitio", "Pedir más detalles o que explique algo específico", "Cerrar y abrir nueva conversación", "Nada, la IA responde una vez"], correctIndex: 1, explanation: "Puedes hacer preguntas de seguimiento o pedir que simplifique." },
  { question: "¿Cuál es un error frecuente al escribirle a la IA?", options: ["Dar demasiado contexto", "Escribir muy poca información", "Usar signos de puntuación", "Preguntar más de un tema"], correctIndex: 1, explanation: "Un error común es escribir poco; más contexto da mejor respuesta." },
  { question: "¿Cuál de los siguientes es un error al escribirle a la IA?", options: ["'Necesito un correo formal para disculparme con un cliente por un retraso'", "'correo disculpa cliente'", "'Escríbeme un correo de disculpa profesional'", "'Ayúdame a redactar un correo de disculpa'"], correctIndex: 1, explanation: "Solo palabras clave como 'correo disculpa cliente' es un error típico." },
  { question: "Si la IA no entiende, ¿cuál es una buena forma de corregirlo?", options: ["Repetir lo mismo", "Cerrar y volver mañana", "'Eso no es lo que busco, necesito algo más corto'", "Cambiar de asistente"], correctIndex: 2, explanation: "Decirle directamente qué está mal es la estrategia más efectiva." },
  { question: "¿Por qué la IA a veces inventa información falsa?", options: ["Sus creadores programan errores", "Predice secuencias de palabras probables, no 'sabe' la verdad", "No tiene internet", "Solo funciona bien en inglés"], correctIndex: 1, explanation: "Las alucinaciones ocurren porque la IA predice palabras sin verificar." },
  { question: "¿Qué debería hacerte sospechar de una respuesta de la IA?", options: ["Explica con un ejemplo sencillo", "Datos muy específicos sobre un tema poco conocido y parece 'demasiado perfecta'", "Es más larga de lo esperado", "Está en español formal"], correctIndex: 1, explanation: "Datos específicos sobre temas oscuros y respuestas 'demasiado perfectas' son señales de alerta." },
  { question: "¿En cuál tarea la IA es generalmente confiable?", options: ["Resultados de análisis médicos", "Noticias en tiempo real", "Explicar conceptos, sugerir recetas y redactar textos", "Precio exacto de acciones"], correctIndex: 2, explanation: "La IA es confiable para explicar conceptos, dar recetas y redactar textos." },
  { question: "¿Cuál frase puedes usar para que la IA simplifique su respuesta?", options: ["'Dame la versión más técnica'", "'Explícalo más simple' o 'Resúmelo en 3 líneas'", "'Busca la info en internet'", "'Tradúcelo al inglés'"], correctIndex: 1, explanation: "'Explícalo más simple' y 'Resúmelo en 3 líneas' son muy útiles." },
  { question: "¿Cuál es la regla de oro al usar un asistente de IA?", options: ["Creer todo porque no se equivoca", "Usarla solo para entretenimiento", "Usarla como punto de partida, no como verdad absoluta", "Compartir siempre tus datos personales"], correctIndex: 2, explanation: "Usa la IA como punto de partida, pero verifica la información importante." },
  { question: "¿Cuál es un ejemplo válido del truco 'actúa como...'?", options: ["'Actúa como calculadora científica'", "'Actúa como mi nutriólogo y ayúdame a planear comidas'", "'Actúa como antivirus'", "'Actúa como internet y búscame noticias'"], correctIndex: 1, explanation: "'Actúa como...' funciona con roles como nutriólogo, guía de viajes o maestro." },
  { question: "Cuando le pides a la IA que 'actúe como' un profesional, ¿qué debes saber?", options: ["Sus consejos tienen validez oficial", "Es un sustituto real del profesional", "La IA NO es un profesional real, aunque adopte ese rol", "Cobran más por esa respuesta"], correctIndex: 2, explanation: "Aunque adopte un rol, la IA no es un experto real." },
], curso2QuizEn);

export const curso3Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "Qué es la inteligencia artificial en términos simples?",
    options: [
      "Un robot con forma humana que piensa solo",
      "Un programa de computadora que aprende de datos y puede realizar tareas que normalmente requieren inteligencia humana",
      "Una tecnología que solo sirve para empresas grandes",
      "Un reemplazo para los seres humanos en todos los trabajos",
    ],
    correctIndex: 1,
    explanation:
      "La IA es un programa que aprende de datos para realizar tareas.",
  },
  {
    question: "Cuál de estos es un ejemplo de IA que probablemente ya usas?",
    options: [
      "El autocorrector del celular al escribir mensajes",
      "El control remoto de la television",
      "Una lampara de escritorio",
      "Un libro de papel",
    ],
    correctIndex: 0,
    explanation: "El autocorrector usa IA para predecir y corregir texto.",
  },
  {
    question: "Cuál de estas herramientas es una IA con la que puedes conversar?",
    options: ["Microsoft Excel", "Google Maps", "ChatGPT", "WhatsApp"],
    correctIndex: 2,
    explanation: "ChatGPT es un asistente conversacional de IA.",
  },
  {
    question: "Para crear una cuenta en ChatGPT, que necesitas?",
    options: [
      "Pagar una suscripción mensual obligatoria",
      "Un correo electrónico",
      "Un título universitario en computación",
      "Instalar un programa pesado en tu computadora",
    ],
    correctIndex: 1,
    explanation: "Solo necesitas un correo electrónico para registrarte gratis.",
  },
  {
    question: "Cuál es la mejor forma de hacerle una pregunta a la IA?",
    options: [
      'Escribir una sola palabra, como "receta"',
      'Ser claro y especifico, como "Dame una receta de arroz con pollo para 4 personas"',
      "Escribir en mayusculas para que entienda mejor",
      "Usar lenguaje técnico y complicado",
    ],
    correctIndex: 1,
    explanation: "Oraciones claras y especificas dan mejores resultados.",
  },
  {
    question:
      "Si la IA te da una respuesta muy larga y no la entiendes, que puedes hacer?",
    options: [
      "Cerrar la aplicación y no volver a usarla",
      "Aceptar todo lo que dice sin leerlo",
      "Pedirle que lo explique más simple o que lo resuma",
      "Nada, la IA no puede cambiar sus respuestas",
    ],
    correctIndex: 2,
    explanation: "Siempre puedes pedir que resuma o simplifique.",
  },
  {
    question: "Cual afirmacion sobre la IA y el trabajo es la más acertada?",
    options: [
      "La IA va a eliminar todos los trabajos en 5 años",
      "La IA no afecta en nada el mundo laboral",
      "La IA cambia la forma en que trabajamos, pero las habilidades humanas siguen siendo esenciales",
      "Solo los jovenes pueden adaptarse a la IA",
    ],
    correctIndex: 2,
    explanation:
      "La IA transforma el trabajo, pero las habilidades humanas siguen siendo esenciales.",
  },
  {
    question: 'Que es una "alucinación" de la IA?',
    options: [
      "Cuando la IA tiene un virus informático",
      "Cuando la IA se apaga inesperadamente",
      "Cuando la IA genera información que suena real pero es falsa o inventada",
      "Cuando la IA tarda mucho en responder",
    ],
    correctIndex: 2,
    explanation:
      "Una alucinación es información convincente pero falsa generada por la IA.",
  },
  {
    question: "Cuál de estos datos NUNCA debes compartir con una IA?",
    options: [
      "Tu nombre de pila",
      "Tu contraseña del banco",
      "Tu ciudad de residencia",
      "Una pregunta sobre cocina",
    ],
    correctIndex: 1,
    explanation: "Nunca compartas contraseñas ni datos bancarios con la IA.",
  },
  {
    question:
      "Qué debes hacer si la IA te da un dato estadistico muy específico?",
    options: [
      "Creerlo inmediatamente porque la IA siempre tiene razón",
      "Compartirlo en redes sociales de inmediato",
      "Verificarlo buscando en otras fuentes confiables",
      "Ignorarlo porque la IA siempre se equivoca",
    ],
    correctIndex: 2,
    explanation:
      "Siempre verifica datos específicos en fuentes confiables.",
  },
  {
    question: "La IA es como una calculadora porque:",
    options: [
      "Solo sirve para hacer cálculos matematicos",
      "Es una herramienta poderosa que necesita que tu la dirijas y tomes las decisiones",
      "Funciona sin electricidad",
      "Reemplaza completamente el pensamiento humano",
    ],
    correctIndex: 1,
    explanation:
      "La IA es una herramienta que necesita tu dirección y supervision.",
  },
  {
    question: "Para cual de estas tareas es MAS confiable la IA?",
    options: [
      "Diagnosticar una enfermedad",
      "Decidir en que invertir tus ahorros",
      "Ayudarte a redactar un correo electrónico",
      "Confirmar si una noticia es verdadera o falsa",
    ],
    correctIndex: 2,
    explanation:
      "La IA es excelente para ayudar a redactar textos.",
  },
  {
    question:
      "Si compartiste accidentalmente tu contraseña con la IA, que deberias hacer?",
    options: [
      "No pasa nada, la IA guarda secretos",
      "Esperar a ver si alguien usa tu cuenta",
      "Borrar la conversación y cambiar tu contraseña lo antes posible",
      "Crear una nueva cuenta de IA",
    ],
    correctIndex: 2,
    explanation: "Borra la conversación y cambia tu contraseña inmediatamente.",
  },
  {
    question: "El método recomendado para empezar a usar IA es:",
    options: [
      "Tomar un curso universitario de 6 meses",
      "Usar todas las herramientas de IA al mismo tiempo",
      "1 herramienta, 10 minutos al día, 1 semana de práctica",
      "Pedirle a otra persona que la use por ti",
    ],
    correctIndex: 2,
    explanation:
      "El método 1-10-1 es simple y efectivo para principiantes.",
  },
  {
    question: "Cuál es la actitud más saludable frente a la inteligencia artificial?",
    options: [
      "Miedo — es mejor no usarla nunca",
      "Confianza ciega — todo lo que dice la IA es verdad",
      "Curiosidad informada — aprender a usarla con criterio, verificando la información",
      "Indiferencia — la IA es solo una moda pasajera",
    ],
    correctIndex: 2,
    explanation:
      "La curiosidad informada es la mejor actitud: aprender con criterio.",
  },
  { question: "¿Qué pasó con los empleados bancarios cuando llegaron los cajeros automáticos?", options: ["La mayoría perdió su trabajo", "Su trabajo cambió: dejaron tareas repetitivas y se enfocaron en asesoría", "Los cajeros fueron rechazados por el público", "Los bancos contrataron menos empleados para siempre"], correctIndex: 1, explanation: "Los cajeros automáticos no eliminaron empleados; transformaron su rol hacia asesoría." },
  { question: "¿Qué nos enseña la llegada de las computadoras en los años 90?", options: ["Las computadoras reemplazaron a las secretarias", "Se negaron a aprender computadoras", "Quienes aprendieron evolucionaron a roles más estratégicos como asistentes ejecutivos", "Las computadoras no cambiaron nada"], correctIndex: 2, explanation: "Quienes adoptaron la nueva tecnología se adaptaron y progresaron." },
  { question: "¿En cuál tarea tiene mayor fortaleza la IA?", options: ["Decisiones éticas complejas", "Organizar datos repetitivos, responder preguntas frecuentes y revisar documentos", "Entender emociones de un cliente molesto", "Generar confianza personal"], correctIndex: 1, explanation: "La IA brilla en tareas repetitivas y estructuradas." },
  { question: "¿Cuál es una limitación real de la IA?", options: ["No puede escribir textos largos", "No trabaja en español", "No puede entender emociones ni tomar decisiones éticas", "No busca en internet"], correctIndex: 2, explanation: "La IA no comprende emociones ni hace juicios éticos genuinos." },
  { question: "¿Cuál frase refleja mejor la relación entre IA y empleo?", options: ["La IA va a reemplazarte", "La IA no va a reemplazarte, pero una persona que sepa usarla podría tener ventaja", "Solo los ingenieros necesitan aprender IA", "La IA nunca afectará ningún trabajo"], correctIndex: 1, explanation: "La ventaja la da saber usar la IA, no la IA por sí sola." },
  { question: "¿Cuál profesión NO existía hace 20 años?", options: ["Contador público", "Community manager", "Médico general", "Arquitecto"], correctIndex: 1, explanation: "Community manager y analista de datos son profesiones creadas por la tecnología." },
  { question: "¿Qué regla de oro de privacidad aplica al usar IA?", options: ["Puedes compartir todo si borras después", "Si no se lo dirías a un extraño amable en la calle, no se lo escribas a la IA", "Solo cuida datos si pagas suscripción", "La privacidad solo importa en redes sociales"], correctIndex: 1, explanation: "Si no se lo dirías a un desconocido, no se lo escribas a la IA." },
  { question: "¿Cuál dato SÍ puedes compartir con la IA sin problema?", options: ["Tu PIN bancario", "Tu código de verificación SMS", "Tu nombre de pila y la ciudad donde vives", "El número de tu tarjeta de crédito"], correctIndex: 2, explanation: "El nombre de pila y la ciudad son datos generales que puedes compartir." },
  { question: "¿Cuál dato NUNCA debes compartir con una IA?", options: ["El nombre de tu mascota", "Tu género de películas favorito", "Tu número de documento de identidad o seguro social", "La ciudad donde naciste"], correctIndex: 2, explanation: "Documentos de identidad y seguridad social son datos altamente sensibles." },
  { question: "¿Qué hacer si te piden compartir datos de otra persona con la IA?", options: ["Hacerlo si es de confianza", "Negarte, porque es violación a su privacidad", "Compartirlos si es para ayudar", "Está bien si borras la conversación"], correctIndex: 1, explanation: "Nunca compartas datos de terceros sin su consentimiento." },
  { question: "En 2023, un abogado en EE.UU. fue sancionado. ¿Qué hizo?", options: ["Usó IA para espiar a la parte contraria", "Presentó casos legales inventados por ChatGPT como si fueran reales", "Compartió info confidencial con la IA", "Usó IA para falsificar su firma"], correctIndex: 1, explanation: "ChatGPT inventó nombres de casos inexistentes y el abogado los presentó sin verificar." },
  { question: "¿Cuál es una señal de alerta de que la IA está alucinando?", options: ["Tarda más de 10 segundos", "Te pide reformular", "Da información que contradice lo que ya sabes", "Responde en otro idioma"], correctIndex: 2, explanation: "Si contradice información que sabes correcta, es señal de verificar." },
  { question: "¿Cuál es el proceso correcto para verificar información de la IA?", options: ["Preguntar a la misma IA si está segura", "Preguntar si podría estar equivocada, buscar en Google, cruzar con 2 fuentes y sentido común", "Compartir en redes y esperar corrección", "Copiar directamente sin revisar"], correctIndex: 1, explanation: "La verificación combina preguntar a la IA, Google, dos fuentes y sentido común." },
  { question: "¿Para cuál tarea ES confiable la IA?", options: ["Porcentaje exacto de inflación", "Info médica específica para tu tratamiento", "Generar ideas y opciones para un proyecto creativo", "Confirmar hechos sobre persona poco conocida"], correctIndex: 2, explanation: "Generación de ideas y redacción creativa son usos confiables." },
  { question: "¿Para cuál tarea NO es confiable solo la IA?", options: ["Reformular un correo profesional", "Resumir un texto que tú escribiste", "Obtener asesoría médica o legal específica", "Generar nombres para un negocio"], correctIndex: 2, explanation: "La IA no es confiable para asesoría médica o legal específica." },
  { question: "La IA se compara con un GPS porque:", options: ["Ambos solo con internet", "Ambos cuestan mucho", "El GPS sugiere rutas pero tú decides; la IA sugiere pero tú tomas las decisiones", "Ambos reemplazan al conductor"], correctIndex: 2, explanation: "Como el GPS, la IA sugiere opciones pero la decisión es tuya." },
  { question: "¿Cuál es una FORTALEZA humana que la IA no puede replicar?", options: ["Procesar grandes cantidades de texto", "Responder preguntas sin cansarse", "Tomar decisiones con valores personales y empatía real", "Generar múltiples versiones de un texto"], correctIndex: 2, explanation: "La empatía, juicio ético y valores personales son exclusivamente humanos." },
  { question: "¿Cómo debería progresar tu uso de IA durante la primera semana?", options: ["Usar todas las herramientas desde el día 1", "Empezar con preguntas sencillas y avanzar gradualmente a tareas más complejas", "Memorizar comandos técnicos primero", "Practicar solo con problemas urgentes"], correctIndex: 1, explanation: "El plan progresivo empieza simple y avanza a tareas más complejas." },
  { question: "¿Qué puedes hacer para tener más privacidad al usar IA?", options: ["Siempre pantalla completa", "Pagar la versión de pago", "Usar la IA sin iniciar sesión cuando sea posible", "Cambiar contraseña cada semana"], correctIndex: 2, explanation: "Usar sin cuenta vinculada es una medida práctica de privacidad." },
  { question: "¿Cuál solicitud a la IA es completamente segura?", options: ["Que recuerde tu contraseña", "Que ayude a generar ideas para un regalo de cumpleaños", "Que le des tu número de seguridad social", "Compartir un código de verificación"], correctIndex: 1, explanation: "Las solicitudes creativas y generales como generar ideas son seguras." },
], curso3QuizEn);

// ─── CURSO 4: Herramientas de IA: ChatGPT, Claude, Gemini y Perplexity ──────
export const curso4Quiz: QuizQuestion[] = mergeEnglish([
  { question: "¿Qué empresa creó ChatGPT?", options: ["Google", "Microsoft", "OpenAI", "Anthropic"], correctIndex: 2, explanation: "ChatGPT fue creado por OpenAI." },
  { question: "¿Cuál es el modelo de IA que utiliza ChatGPT actualmente?", options: ["GPT-3", "GPT-4o", "Gemini Ultra", "Claude 3"], correctIndex: 1, explanation: "ChatGPT utiliza el modelo GPT-4o." },
  { question: "¿Quién creó el asistente de IA Claude?", options: ["OpenAI", "Google", "Meta", "Anthropic"], correctIndex: 3, explanation: "Claude fue creado por Anthropic, empresa fundada por ex-investigadores de OpenAI." },
  { question: "¿Por quiénes fue fundada Anthropic?", options: ["Ex-empleados de Google", "Ex-investigadores de OpenAI", "Ex-ingenieros de Microsoft", "Ex-científicos de Meta"], correctIndex: 1, explanation: "Anthropic fue fundada por ex-investigadores de OpenAI." },
  { question: "¿Cuántas páginas de documento puede procesar Claude aproximadamente?", options: ["50 páginas", "100 páginas", "200 páginas", "500 páginas"], correctIndex: 2, explanation: "Claude puede procesar documentos de hasta 200 páginas." },
  { question: "¿Cómo se llama la función de Claude que muestra contenido extenso en un panel separado?", options: ["Canvas", "Artifacts", "Workspace", "Documents"], correctIndex: 1, explanation: "Artifacts es la función de Claude que abre un panel lateral para contenido largo." },
  { question: "¿Qué empresa desarrolló Gemini?", options: ["Microsoft", "Apple", "Amazon", "Google"], correctIndex: 3, explanation: "Gemini fue desarrollado por Google." },
  { question: "¿Qué significa el color verde en 'Verificar con Google' de Gemini?", options: ["Información parcialmente correcta", "Información verificada con fuentes", "Información cuestionable", "No pudo verificarse"], correctIndex: 1, explanation: "El verde indica que la información fue verificada con fuentes confiables." },
  { question: "¿Qué indica el color naranja en 'Verificar con Google' de Gemini?", options: ["Información verificada", "Completamente falsa", "Cuestionable o no se pudo confirmar", "La conexión falló"], correctIndex: 2, explanation: "El naranja señala que la información es cuestionable o no se pudo confirmar." },
  { question: "¿Cuál es una extensión disponible en Gemini?", options: ["@Twitter", "@LinkedIn", "@Gmail", "@Outlook"], correctIndex: 2, explanation: "Gemini tiene extensiones para @Gmail, @Drive, @Maps y @YouTube." },
  { question: "¿Qué son los 'Gems' en Gemini?", options: ["Créditos virtuales", "Versiones especializadas preconfiguradas de Gemini", "Archivos en Google Drive", "Atajos de respuesta"], correctIndex: 1, explanation: "Los Gems son versiones preconfiguradas de Gemini para tareas específicas." },
  { question: "¿Qué herramienta usa ChatGPT para generar imágenes?", options: ["MidJourney", "Stable Diffusion", "DALL-E", "Google Image"], correctIndex: 2, explanation: "ChatGPT utiliza DALL-E de OpenAI para generar imágenes." },
  { question: "¿Qué sistema usa Gemini para generar imágenes?", options: ["DALL-E", "Adobe Firefly", "Stable Diffusion", "Google Image"], correctIndex: 3, explanation: "Gemini utiliza Google Image para crear imágenes." },
  { question: "¿Qué distingue a Perplexity de otros asistentes?", options: ["Genera imágenes de alta calidad", "Combina búsqueda en internet con IA y cita fuentes numeradas", "Tiene la memoria más avanzada", "Procesa más de 500 páginas"], correctIndex: 1, explanation: "Perplexity combina búsqueda en internet con IA y muestra fuentes numeradas." },
  { question: "¿Cómo presenta Perplexity sus fuentes?", options: ["Enlaces al final", "Fuentes numeradas integradas en la respuesta", "Panel lateral", "Solo menciona el dominio"], correctIndex: 1, explanation: "Perplexity muestra fuentes numeradas directamente en la respuesta." },
  { question: "¿Qué es la función 'Focus' en Perplexity?", options: ["Modo de concentración", "Filtro que limita la búsqueda a fuentes específicas como Academic, YouTube o Reddit", "Función para guardar respuestas", "Modo de voz mejorado"], correctIndex: 1, explanation: "Focus permite filtrar búsquedas por tipo de fuente: Web, Academic, YouTube, Reddit o News." },
  { question: "¿Cuál NO es una fuente en el Focus de Perplexity?", options: ["Academic", "Reddit", "Instagram", "YouTube"], correctIndex: 2, explanation: "Instagram no es una opción en el Focus de Perplexity." },
  { question: "¿Qué son las 'Collections' en Perplexity?", options: ["Imágenes generadas", "Grupos temáticos para organizar búsquedas", "Listas de contactos", "Versiones del historial"], correctIndex: 1, explanation: "Las Collections permiten organizar búsquedas temáticamente." },
  { question: "¿Cuál es una limitación de Perplexity?", options: ["No busca en internet", "No tiene fuentes académicas", "No analiza archivos ni genera imágenes", "No funciona en móviles"], correctIndex: 2, explanation: "Perplexity no analiza archivos, no genera imágenes ni crea contenido creativo extenso." },
  { question: "¿Cuál capacidad NO tiene Perplexity?", options: ["Búsqueda en tiempo real", "Citar fuentes numeradas", "Memoria de conversaciones anteriores", "Filtrar por fuente académica"], correctIndex: 2, explanation: "Perplexity no tiene memoria; cada sesión empieza desde cero." },
  { question: "¿Cómo se adjuntan archivos en ChatGPT?", options: ["Botón de micrófono", "Ícono de clip", "Arrastrando al centro", "Desde configuración"], correctIndex: 1, explanation: "Se usa el ícono de clip para adjuntar archivos." },
  { question: "¿Para qué sirve el ícono ↺ en ChatGPT?", options: ["Volver al inicio", "Regenerar la respuesta anterior", "Traducir", "Guardar en favoritos"], correctIndex: 1, explanation: "El ícono ↺ regenera la respuesta anterior." },
  { question: "¿Cuál asistente tiene el modo de voz más natural?", options: ["Claude", "Gemini", "Perplexity", "ChatGPT"], correctIndex: 3, explanation: "ChatGPT tiene el modo de voz más natural y humano." },
  { question: "¿Qué limitación tiene Claude en su versión gratuita respecto a internet?", options: ["Solo busca en Wikipedia", "No tiene acceso a internet", "Solo sitios educativos", "Necesita permiso para navegar"], correctIndex: 1, explanation: "En su versión gratuita, Claude no tiene acceso a internet." },
  { question: "¿Qué es 'Projects' en Claude?", options: ["Galería de plantillas", "Espacio de trabajo con instrucciones permanentes", "Función para compartir conversaciones", "Modo de colaboración"], correctIndex: 1, explanation: "Projects en Claude es un espacio de trabajo con instrucciones permanentes." },
  { question: "¿Cuál es una característica de Claude cuando no sabe algo?", options: ["Inventa una respuesta", "Busca en internet", "Admite su incertidumbre y se niega a inventar", "Redirige a Google"], correctIndex: 2, explanation: "Claude admite cuando no está seguro y prefiere reconocer incertidumbre." },
  { question: "¿En qué sistemas operativos móviles están las apps de estos asistentes?", options: ["Solo iOS", "Solo Android", "Android e iOS", "Solo Samsung"], correctIndex: 2, explanation: "Las apps están disponibles en Android e iOS." },
  { question: "¿Cómo se activa el modo de voz?", options: ["Diciendo 'Hey AI'", "Tocando el ícono de micrófono", "Agitando el teléfono", "Desde configuración"], correctIndex: 1, explanation: "Se activa tocando el ícono de micrófono." },
  { question: "¿Cuál asistente NO responde en voz?", options: ["ChatGPT", "Gemini", "Claude", "Todos responden en voz"], correctIndex: 2, explanation: "Claude no responde en voz; sus respuestas son siempre en texto." },
  { question: "¿Para qué se recomienda usar Perplexity?", options: ["Analizar documentos", "Obtener información actual con fuentes verificables", "Generar imágenes", "Redactar textos largos"], correctIndex: 1, explanation: "Perplexity es ideal para información actual con fuentes citadas." },
  { question: "¿Cuál es el 'kit inicial' para cubrir el 80% de las tareas con IA?", options: ["Claude y Gemini", "ChatGPT y Perplexity", "Perplexity y Claude", "ChatGPT y Gemini"], correctIndex: 1, explanation: "ChatGPT y Perplexity cubren aproximadamente el 80% de las necesidades." },
  { question: "¿Cuál es la estrategia de 'doble verificación'?", options: ["Preguntar dos veces a ChatGPT", "Perplexity para fuentes, luego ChatGPT/Claude para profundizar", "Buscar en Google", "Dos versiones del mismo asistente"], correctIndex: 1, explanation: "Perplexity para fuentes, luego ChatGPT o Claude para profundizar." },
  { question: "¿En qué temas es especialmente importante la doble verificación?", options: ["Recetas de cocina", "Salud, asuntos legales y finanzas", "Viajes y turismo", "Entretenimiento"], correctIndex: 1, explanation: "Para salud, legales y finanzas siempre se debe usar doble verificación." },
  { question: "¿Cuál es el primer mensaje recomendado al empezar con un asistente?", options: ["Pedirle creatividad", "Presentarte con nombre, edad, país y nivel tecnológico", "Preguntarle sus capacidades", "Pedirle respuestas cortas"], correctIndex: 1, explanation: "Presentarte ayuda al asistente a adaptar su lenguaje a tu perfil." },
  { question: "¿Cuál sería el 'kit avanzado' de asistentes de IA?", options: ["ChatGPT, Perplexity, Gemini y Copilot", "ChatGPT, Perplexity, Claude y Gemini", "Claude, Gemini, Midjourney y Perplexity", "ChatGPT, Claude, Bing y Siri"], correctIndex: 1, explanation: "El kit avanzado incluye ChatGPT, Perplexity, Claude y Gemini." },
], emptyEnPartials);

// ─── CURSO 5: Prompts Efectivos ─────────────────────────────────────────────
export const curso5Quiz: QuizQuestion[] = mergeEnglish([
  { question: "¿Cuál es la fórmula de cuatro elementos para un prompt efectivo?", options: ["IDEA + ACCIÓN + DATOS + RESULTADO", "ROL + TAREA + CONTEXTO + FORMATO", "TEMA + PREGUNTA + DETALLE + LONGITUD", "EXPERTO + INSTRUCCIÓN + EJEMPLO + SALIDA"], correctIndex: 1, explanation: "La fórmula es ROL + TAREA + CONTEXTO + FORMATO." },
  { question: "¿Para qué sirve el elemento ROL en un prompt?", options: ["Indicar el formato", "Dar contexto", "Decirle a la IA qué tipo de experto debe ser", "Limitar la longitud"], correctIndex: 2, explanation: "El ROL le indica a la IA qué tipo de experto adoptar." },
  { question: "¿Cuál es un ejemplo correcto del elemento TAREA?", options: ["Como si fueras un chef", "Para personas mayores de 50", "En forma de lista", "Explica los beneficios de la meditación"], correctIndex: 3, explanation: "La TAREA es la acción concreta: explica, escribe, resume, compara, crea, traduce." },
  { question: "¿Cuál de estas palabras NO es un ejemplo de TAREA?", options: ["Resume", "Compara", "Formal", "Traduce"], correctIndex: 2, explanation: "'Formal' describe un tono, no una acción." },
  { question: "¿Qué proporciona el CONTEXTO?", options: ["El tipo de experto", "La acción específica", "Información relevante sobre la situación", "La estructura visual"], correctIndex: 2, explanation: "El CONTEXTO provee información sobre la situación." },
  { question: "¿Qué controla el FORMATO?", options: ["El idioma", "Cómo se organiza y presenta la respuesta", "La velocidad de respuesta", "El nivel de dificultad"], correctIndex: 1, explanation: "El FORMATO especifica cómo organizar la respuesta: lista, párrafos, tabla." },
  { question: "¿Los cuatro elementos son obligatorios?", options: ["Sí, siempre", "No, son opcionales, pero usar más da mejores resultados", "Solo TAREA y CONTEXTO son obligatorios", "Solo ROL y FORMATO son opcionales"], correctIndex: 1, explanation: "Son opcionales, pero entre más incluyas, más precisa será la respuesta." },
  { question: "¿Cuántas categorías de contexto existen?", options: ["Tres", "Cuatro", "Cinco: personal, situacional, destinatario, restricciones y estilo/tono", "Seis"], correctIndex: 2, explanation: "Cinco: Personal, Situacional, Destinatario, Restricciones y Estilo/Tono." },
  { question: "¿Qué incluye el contexto PERSONAL?", options: ["Para quién va el resultado", "Las limitaciones", "Edad, profesión y nivel de experiencia del usuario", "El tono deseado"], correctIndex: 2, explanation: "El contexto personal incluye tu edad, profesión y nivel de experiencia." },
  { question: "¿Para qué sirve la técnica 'Imagina que...'?", options: ["Pedir respuestas ficticias", "Agregar contexto de forma rápida y natural", "Cambiar el formato", "Corregir errores"], correctIndex: 1, explanation: "'Imagina que...' agrega contexto rápidamente." },
  { question: "¿Cuándo hay demasiado contexto?", options: ["Más de dos categorías", "Más de una oración", "Tres o cuatro párrafos antes de la pregunta", "Más largo que la tarea"], correctIndex: 2, explanation: "3-4 párrafos antes de la pregunta es excesivo." },
  { question: "¿Qué criterio usas para decidir si incluir contexto?", options: ["Incluirlo si es verdadero", "Solo si cambia la respuesta de la IA", "Si hace el prompt más largo", "Solo si la IA lo pide"], correctIndex: 1, explanation: "Solo incluye contexto que cambie la respuesta." },
  { question: "¿Cuáles son las seis formas de ser específico?", options: ["Tema exacto, números, nivel de detalle, tipo de resultado, audiencia y límite de longitud", "ROL, TAREA, CONTEXTO, FORMATO, TONO y EJEMPLOS", "Claridad, brevedad, precisión, contexto, formato y corrección", "Personal, situacional, destinatario, restricciones, estilo y objetivo"], correctIndex: 0, explanation: "Tema exacto, números, nivel de detalle, tipo de resultado, audiencia y límite de longitud." },
  { question: "¿En qué consiste la 'prueba de otra persona'?", options: ["Pedir a alguien más que escriba el prompt", "Verificar si otra persona entendería tu prompt sin explicación adicional", "Que otra persona lea la respuesta", "Que un colega califique el prompt"], correctIndex: 1, explanation: "Si otra persona no entendería tu prompt, le falta claridad." },
  { question: "¿Cuándo es válida la vaguedad intencional?", options: ["Sin tiempo suficiente", "Para brainstorming o inspiración creativa", "Cuando la IA conoce tu historial", "Tema técnico"], correctIndex: 1, explanation: "Válida para brainstorming o inspiración." },
  { question: "¿Cuántas iteraciones puedes hacer?", options: ["Máximo tres", "Depende de la suscripción", "Ilimitadas", "Cinco por sesión"], correctIndex: 2, explanation: "No hay límite de iteraciones." },
  { question: "¿Cuál es la frase mágica para acortar una respuesta?", options: ["'Sé más breve'", "'Resúmelo a la mitad'", "'Quita la mitad'", "'Acorta esta respuesta'"], correctIndex: 1, explanation: "'Resúmelo a la mitad' es la frase mágica para acortar." },
  { question: "¿Qué frase simplifica el lenguaje?", options: ["'Explícalo de nuevo'", "'Hazlo menos complicado'", "'Usa palabras más simples'", "'Reduce el nivel técnico'"], correctIndex: 2, explanation: "'Usa palabras más simples' le indica evitar tecnicismos." },
  { question: "¿Qué frase enriquece con ejemplos?", options: ["'Dame más información'", "'Agrégale ejemplos concretos'", "'Amplía cada punto'", "'Incluye referencias'"], correctIndex: 1, explanation: "'Agrégale ejemplos concretos' expande con ilustraciones prácticas." },
  { question: "¿Cuál es la frase más poderosa para refinar?", options: ["'Mejora esta respuesta'", "'Inténtalo de nuevo'", "'Hazlo otra vez pero [cambio específico]'", "'Vuélvelo a hacer'"], correctIndex: 2, explanation: "'Hazlo otra vez pero...' mantiene lo bueno y modifica lo necesario." },
  { question: "¿Cómo corriges un error específico?", options: ["'Está mal, intenta de nuevo'", "'Cometiste un error: [describe]. Corrígelo'", "'Revisa y arregla'", "'Empieza desde cero'"], correctIndex: 1, explanation: "Ser específico permite corregir sin perder el resto." },
  { question: "¿Por qué NO empezar desde cero cada vez?", options: ["La IA pierde contexto", "Es más eficiente construir sobre lo existente", "Cuesta más tokens", "La IA solo recuerda en la misma sesión"], correctIndex: 1, explanation: "Es más eficiente refinar lo existente." },
  { question: "¿Cuál es el proceso para mejorar un prompt deficiente?", options: ["Simplificar → acortar → eliminar", "Identificar info faltante → agregar contexto → especificar formato → agregar rol", "Corregir ortografía → cambiar tono → añadir ejemplos", "Definir tema → escribir preguntas → filtrar"], correctIndex: 1, explanation: "Identificar info faltante → agregar contexto → especificar formato → agregar rol." },
  { question: "¿La habilidad de escribir buenos prompts se puede aprender?", options: ["Es innata", "Solo para personas técnicas", "Se aprende con práctica", "Depende del tipo de IA"], correctIndex: 2, explanation: "Mejorar prompts es una habilidad aprendible con práctica." },
  { question: "¿Qué significa 'ser específico no significa ser complejo'?", options: ["Prompts cortos siempre mejores", "La especificidad se logra con claridad, no más palabras", "Prompts simples dan respuestas complejas", "No es necesario usar todos los elementos"], correctIndex: 1, explanation: "Ser específico es ser claro y preciso, no complicado." },
  { question: "¿Qué frase convierte una respuesta en lista?", options: ["'Divide en puntos'", "'Ponlo en forma de lista'", "'Enumera cada idea'", "'Organiza en viñetas'"], correctIndex: 1, explanation: "'Ponlo en forma de lista' cambia el formato a lista." },
  { question: "¿Cuándo usas 'Arma una tabla'?", options: ["Para comparar elementos visualmente", "Demasiado texto", "Ventajas y desventajas", "Acortar respuesta"], correctIndex: 0, explanation: "'Arma una tabla' es útil para comparar elementos." },
  { question: "¿Qué pregunta responde el contexto de DESTINATARIO?", options: ["¿Cuánto tiempo tienes?", "¿Qué tono quieres?", "¿Quién va a leer o usar el resultado?", "¿Cuál es tu experiencia?"], correctIndex: 2, explanation: "El destinatario responde '¿quién va a leer o usar el resultado?'." },
  { question: "¿Qué representan las RESTRICCIONES?", options: ["Temas prohibidos", "Limitaciones o requisitos que debe cumplir la respuesta", "Número máximo de palabras", "Errores a evitar"], correctIndex: 1, explanation: "Las restricciones son limitaciones o requisitos específicos." },
  { question: "¿Qué actitud tener ante una respuesta mediocre?", options: ["Aceptarla si es aproximada", "Reiniciar la conversación", "Nunca aceptarla; siempre refinar", "Cambiar de herramienta"], correctIndex: 2, explanation: "Nunca aceptes respuestas mediocres; refina hasta obtener lo que necesitas." },
  { question: "¿Qué ocurre cuando eres más claro en tu prompt?", options: ["La IA tarda más", "La respuesta es más larga", "La respuesta es más útil", "La IA pide menos info"], correctIndex: 2, explanation: "Cuanto más claro seas, más útil es la respuesta." },
  { question: "¿Para qué sirve el ESTILO/TONO?", options: ["Indicar el largo", "Especificar formato visual", "Decirle a la IA cómo debe sonar la respuesta", "Identificar destinatario"], correctIndex: 2, explanation: "El estilo/tono indica cómo quieres que suene: formal, casual, cálido, técnico." },
  { question: "¿Cuál es una categoría de plantillas de prompts?", options: ["Entretenimiento", "Tareas laborales", "Investigación académica", "Programación"], correctIndex: 1, explanation: "Las categorías incluyen: comunicación personal, tareas laborales, salud, aprendizaje y organización." },
  { question: "¿Qué representa el contexto SITUACIONAL?", options: ["Nombre y ocupación", "Qué está pasando y por qué necesitas la información", "Formato de respuesta", "A quién entregarás el resultado"], correctIndex: 1, explanation: "Describe qué ocurre y por qué necesitas ayuda." },
  { question: "¿Cómo funciona la conversación iterativa?", options: ["Un prompt perfecto y aceptar la primera respuesta", "Preguntas → IA responde → especificas cambios → mejora → repites", "Una pregunta por sesión", "Todas las variantes al mismo tiempo"], correctIndex: 1, explanation: "Es un ciclo de refinamiento continuo." },
], emptyEnPartials);

// ─── CURSO 6: IA en tu vida cotidiana ───────────────────────────────────────
export const curso6Quiz: QuizQuestion[] = mergeEnglish([
  { question: "¿Cuáles son los tres enfoques para redactar mensajes con IA?", options: ["Traducir, resumir y corregir", "Escribir desde cero, mejorar uno existente y adaptar el tono", "Dictar, editar y enviar", "Copiar, pegar y reformatear"], correctIndex: 1, explanation: "Escribir desde cero, mejorar un texto existente y adaptar el tono." },
  { question: "¿Qué es INDISPENSABLE especificar al pedir un mensaje a la IA?", options: ["Número de palabras exacto", "Nombre del destinatario", "El tono deseado y el medio de envío", "La hora de envío"], correctIndex: 2, explanation: "Siempre indica el tono y el medio (WhatsApp, correo corporativo)." },
  { question: "¿Cuál tono es apropiado para una carta de queja?", options: ["Informal y relajado", "Sarcástico y agresivo", "Firme pero educado", "Cálido y divertido"], correctIndex: 2, explanation: "Una queja efectiva debe ser firme pero educada." },
  { question: "Si la respuesta no fue lo que necesitabas, ¿qué hacer?", options: ["Conversación nueva", "Aceptar como viene", "Solicitar ajustes en el mismo chat", "Editar manualmente"], correctIndex: 2, explanation: "El refinamiento iterativo aprovecha el contexto previo." },
  { question: "¿Qué NO debes incluir en prompts para redactar mensajes?", options: ["El propósito", "Datos privados como contraseñas", "El tono deseado", "El medio de envío"], correctIndex: 1, explanation: "Nunca incluyas información sensible." },
  { question: "¿Cómo te ayuda la IA a crear recetas con ingredientes limitados?", options: ["Solo recetas estándar", "Le dices qué ingredientes tienes y sugiere recetas", "Solo recetas de restaurantes", "Necesitas fotos"], correctIndex: 1, explanation: "Indica los ingredientes disponibles y la IA generará recetas viables." },
  { question: "Una persona celíaca, ¿qué restricción debe especificar?", options: ["Sin lactosa", "Bajo en sal", "Sin gluten", "Sin azúcar refinada"], correctIndex: 2, explanation: "La enfermedad celíaca requiere dieta sin gluten." },
  { question: "¿Qué restricción es relevante para alguien con hipertensión?", options: ["Sin gluten", "Sin lactosa", "Bajo en sal (sodio)", "Sin proteína animal"], correctIndex: 2, explanation: "Las personas con hipertensión necesitan dieta baja en sal." },
  { question: "¿Qué herramienta se recomienda para info en tiempo real al planear un viaje?", options: ["ChatGPT", "Perplexity", "Un mapa de papel", "Google Translate"], correctIndex: 1, explanation: "Perplexity tiene acceso a información en tiempo real." },
  { question: "¿Cuál es el flujo de trabajo de dos herramientas para planear un viaje?", options: ["Solo ChatGPT", "Perplexity para info actual, luego ChatGPT para itinerario", "Primero ChatGPT, luego Perplexity", "Google Maps y Perplexity"], correctIndex: 1, explanation: "Perplexity para datos actuales, luego ChatGPT para el itinerario personalizado." },
  { question: "¿Cómo debe estructurarse un itinerario de viaje diario?", options: ["Solo listando lugares", "Por actividades de mañana, tarde y noche", "Un solo bloque de texto", "Solo restaurantes"], correctIndex: 1, explanation: "Un buen itinerario organiza actividades en bloques de mañana, tarde y noche." },
  { question: "¿Qué categorías debe incluir una lista de empaque para viaje internacional?", options: ["Solo ropa", "Documentos, ropa, medicamentos, electrónicos y misceláneos", "Solo documentos y medicamentos", "Solo artículos de tocador"], correctIndex: 1, explanation: "Cubre: documentos, ropa, medicamentos, electrónicos y misceláneos." },
  { question: "¿Cuál es la 'regla de oro' del uso educativo de la IA?", options: ["Que resuelva todos los ejercicios", "Usar la IA para enseñar y explicar, no para dar respuestas directas", "Copiar respuestas", "Evitar la IA en educación"], correctIndex: 1, explanation: "La IA debe enseñar a entender, no dar respuestas." },
  { question: "¿Cuál prompt es el enfoque CORRECTO para aprender matemáticas?", options: ["'Resuelve este problema'", "'Dame las respuestas del examen'", "'Explícame paso a paso sin darme la respuesta directa'", "'Haz mi tarea completa'"], correctIndex: 2, explanation: "El enfoque correcto pide explicación sin revelar la respuesta." },
  { question: "¿Qué ventaja tiene la IA como tutor personal?", options: ["Siempre tiene razón", "Disponible 24/7, paciencia infinita y adapta el nivel", "Asiste a clases presenciales", "Cobra menos"], correctIndex: 1, explanation: "La IA está disponible siempre, no se impacienta y adapta sus explicaciones." },
  { question: "¿Qué ejercicios puede generar la IA para practicar?", options: ["Solo opción múltiple", "Dificultad progresiva, comprensión lectora, sopas de letras y problemas aplicados", "Solo de libros de texto", "Solo memorización"], correctIndex: 1, explanation: "La IA genera: dificultad progresiva, comprensión lectora, sopas de letras y más." },
  { question: "¿Cuántas páginas puede procesar Claude?", options: ["10", "50", "Hasta 200 páginas", "Sin límite"], correctIndex: 2, explanation: "Claude procesa hasta 200 páginas en una conversación." },
  { question: "¿Cuál es un tipo de resumen orientado a la acción?", options: ["Lista de datos estadísticos", "Extrae próximos pasos, decisiones y responsables", "Narrativa del documento", "Comparación de dos textos"], correctIndex: 1, explanation: "Extrae elementos accionables: próximos pasos y responsables." },
  { question: "Para resumir un contrato legal con IA, ¿qué precaución es fundamental?", options: ["Compartirlo en redes sociales", "Usarlo como punto de partida, consultar a un profesional", "Confiar completamente", "Pedir que la IA actúe como abogado"], correctIndex: 1, explanation: "Los resúmenes legales son puntos de partida, no reemplazan profesionales." },
  { question: "¿Por qué la traducción con IA es superior a la traducción literal?", options: ["Es más rápida", "Entiende contexto, tono y modismos", "Nunca comete errores", "Traduce más idiomas"], correctIndex: 1, explanation: "La IA comprende contexto y modismos, produciendo traducciones naturales." },
  { question: "¿Cómo se traduce 'It's raining cats and dogs'?", options: ["Está lloviendo gatos y perros", "Los animales salen cuando llueve", "Está lloviendo a cántaros", "Hay una tormenta de mascotas"], correctIndex: 2, explanation: "La traducción correcta del modismo es 'está lloviendo a cántaros'." },
  { question: "¿Cuál es la traducción correcta de 'Break a leg'?", options: ["Rompe una pierna", "Cuidado con las escaleras", "Mucha suerte", "Esfuérzate al máximo"], correctIndex: 2, explanation: "'Break a leg' significa 'mucha suerte'." },
  { question: "¿Para qué documentos es imprescindible un traductor profesional certificado?", options: ["Correos informales", "Menús de restaurantes", "Contratos y documentos oficiales con validez jurídica", "Subtítulos de videos"], correctIndex: 2, explanation: "Los documentos con validez jurídica requieren traductores certificados." },
  { question: "¿Cómo te ayuda la IA con el idioma local al viajar?", options: ["Solo traduce menús", "Te da las 20 frases más útiles con pronunciación fonética", "Solo traduce con internet", "Solo idiomas europeos"], correctIndex: 1, explanation: "La IA genera frases esenciales con pronunciación fonética." },
  { question: "¿Cuál es el método para resumir documentos largos?", options: ["Copiar y pegar todo", "Subir el archivo con el ícono de clip", "Escribir puntos principales manualmente", "Pedirle que lo busque en internet"], correctIndex: 1, explanation: "Para documentos largos, sube el archivo con el ícono de clip (📎)." },
  { question: "¿Qué consideraciones necesita un itinerario para viajeros mayores?", options: ["Más actividades nocturnas", "Ritmo pausado, poco caminar, accesibilidad y descansos", "Solo interiores", "Mismo que para jóvenes"], correctIndex: 1, explanation: "Itinerarios para adultos mayores necesitan distancias cortas y descansos." },
  { question: "Un adulto quiere aprender inglés con 15 minutos al día. ¿Qué pedirle a la IA?", options: ["Traducir textos largos", "Un plan diario de 15 minutos con temas progresivos", "El examen TOEFL completo", "Solo corregir pronunciación"], correctIndex: 1, explanation: "La IA diseña planes de 15 minutos diarios con temas progresivos." },
  { question: "¿Cuántos días abarca una planificación de menú semanal?", options: ["3 días", "5 a 7 días", "Solo fines de semana", "14 días"], correctIndex: 1, explanation: "La planificación semanal estándar cubre de 5 a 7 días." },
  { question: "Al planear una cena para 12-15 personas, ¿qué incluir en el prompt?", options: ["Solo el platillo principal", "Número de invitados, tipo de evento y restricciones dietéticas", "Solo el presupuesto", "La dirección del lugar"], correctIndex: 1, explanation: "Incluye número de personas, tipo de evento y restricciones dietéticas." },
  { question: "¿Cuáles son los cinco tipos de resúmenes?", options: ["Corto, mediano, largo, extenso y completo", "Ejecutivo, viñetas, explicativo, acción y comparativo", "Simple, detallado, técnico, informal y formal", "Resumen, reseña, sinopsis, extracto y abstract"], correctIndex: 1, explanation: "Ejecutivo, viñetas, explicativo, orientado a la acción y comparativo." },
  { question: "¿Qué elementos pre-viaje puede ayudarte a verificar la IA?", options: ["Solo el clima", "Visa, pasaporte, frases del idioma y costumbres culturales", "Solo tipo de cambio", "Solo vuelos y precios"], correctIndex: 1, explanation: "La IA orienta sobre visa, pasaporte, frases útiles y costumbres culturales." },
  { question: "¿Qué diferencia hay entre un WhatsApp y un correo corporativo al redactar con IA?", options: ["El correo debe ser más corto", "WhatsApp admite informalidad; el correo requiere formalidad", "No hay diferencia", "WhatsApp debe ser más largo"], correctIndex: 1, explanation: "WhatsApp permite informalidad; el correo exige estructura formal." },
  { question: "¿Cuál tono sería apropiado para una disculpa sincera?", options: ["Formal y distante", "Firme y directo", "Cálido y genuino, sin excusas", "Técnico y detallado"], correctIndex: 2, explanation: "Una disculpa efectiva debe ser cálida, genuina y sin excusas." },
  { question: "¿Cuál escenario de traducción requiere especial cuidado?", options: ["Mensaje casual a un amigo", "Menú de restaurante", "Contrato legal con validez jurídica", "Receta de cocina"], correctIndex: 2, explanation: "Los documentos legales necesitan traductores certificados, no solo IA." },
  { question: "¿Qué técnica culinaria describe cocinar lentamente en poco líquido?", options: ["Hervir", "Escalfar", "Pochar (estofar)", "Freír"], correctIndex: 2, explanation: "Pochar/estofar implica cocinar a fuego lento en poco líquido." },
], emptyEnPartials);

export const curso7Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Cuál de estas es una técnica core de prompting?",
    options: [
      "Escribir en mayúsculas para que la IA preste más atención",
      "Dar ejemplos de lo que esperas como respuesta (few-shot)",
      "Usar emojis para que la IA entienda el tono",
      "Repetir la pregunta varias veces en el mismo mensaje",
    ],
    correctIndex: 1,
    explanation:
      "Few-shot learning (dar ejemplos) es una de las 5 t��cnicas core de prompting más efectivas.",
  },
  {
    question: "¿Qué es few-shot prompting?",
    options: [
      "Escribir prompts muy cortos de pocas palabras",
      "Dar uno o más ejemplos del formato o resultado que esperas",
      "Disparar muchos prompts rápidamente",
      "Usar la IA solo para tareas pequeñas",
    ],
    correctIndex: 1,
    explanation:
      "Few-shot prompting consiste en dar ejemplos para que la IA entienda el patrón que quieres.",
  },
  {
    question: "¿Qué frase activa el razonamiento paso a paso (chain-of-thought)?",
    options: [
      "\"Responde rápido\"",
      "\"Piensa paso a paso antes de responder\"",
      "\"Sé creativo\"",
      "\"Usa formato JSON\"",
    ],
    correctIndex: 1,
    explanation:
      "Pedir que piense paso a paso activa el chain-of-thought, mejorando respuestas en tareas lógicas.",
  },
  {
    question: "¿Para qué sirve asignar un rol a la IA?",
    options: [
      "Para que la IA cambie de idioma automáticamente",
      "Para obtener respuestas más enfocadas y con el tono adecuado",
      "Para que la IA acceda a internet",
      "Para desbloquear funciones premium",
    ],
    correctIndex: 1,
    explanation:
      "Asignar un rol (\"Actúa como nutricionista\") enfoca las respuestas en ese dominio y tono.",
  },
  {
    question: "¿Cuándo es útil pedir la respuesta en formato JSON?",
    options: [
      "Siempre, porque JSON es más bonito",
      "Cuando necesitas datos estructurados para usar en otra herramienta",
      "Solo cuando programas en JavaScript",
      "Nunca, la IA no puede generar JSON",
    ],
    correctIndex: 1,
    explanation:
      "JSON es ideal cuando necesitas datos estructurados que vas a procesar después.",
  },
  {
    question: "¿Cuál es la diferencia entre system prompt y user prompt?",
    options: [
      "No hay diferencia, son lo mismo",
      "El system prompt define el comportamiento general; el user prompt es la pregunta específica",
      "El system prompt es más largo que el user prompt",
      "El user prompt se ejecuta primero que el system prompt",
    ],
    correctIndex: 1,
    explanation:
      "El system prompt configura el comportamiento base de la IA; el user prompt es cada mensaje que envías.",
  },
  {
    question: "¿Cuál es la mejor estrategia cuando el primer prompt no da buenos resultados?",
    options: [
      "Cambiar a otra herramienta de IA",
      "Iterar: evaluar qué falló y refinar el prompt",
      "Escribir exactamente lo mismo pero más largo",
      "Abandonar la tarea porque la IA no puede",
    ],
    correctIndex: 1,
    explanation:
      "La iteración (evaluar → refinar → volver a probar) es la clave del prompt engineering.",
  },
  {
    question: "¿Qué ventaja tiene usar tags XML en un prompt?",
    options: [
      "La IA responde más rápido",
      "Permite organizar claramente las secciones del input y el output esperado",
      "Es obligatorio para que la IA entienda",
      "Solo funciona con Claude, no con ChatGPT",
    ],
    correctIndex: 1,
    explanation:
      "Las tags XML ayudan a separar contexto, instrucciones y formato esperado de forma clara.",
  },
  {
    question: "En ChatGPT, ¿dónde se configuran las instrucciones personalizadas (system prompt)?",
    options: [
      "En el primer mensaje de cada chat",
      "En Configuración → Instrucciones personalizadas (Custom Instructions)",
      "No se puede configurar",
      "En la URL del navegador",
    ],
    correctIndex: 1,
    explanation:
      "ChatGPT permite configurar instrucciones personalizadas que aplican a todas las conversaciones.",
  },
  {
    question: "¿Cuándo conviene empezar un prompt desde cero en vez de iterar?",
    options: [
      "Siempre, cada intento debe ser independiente",
      "Cuando el enfoque fundamental está equivocado y los ajustes menores no mejoran",
      "Nunca, siempre hay que iterar sobre lo existente",
      "Después de exactamente 3 intentos fallidos",
    ],
    correctIndex: 1,
    explanation:
      "Si el enfoque base es incorrecto, es más eficiente rediseñar el prompt que seguir iterando.",
  },
  {
    question: "¿Cuáles son los cuatro elementos del framework de especificidad para un buen prompt?",
    options: [
      "Tono, idioma, longitud y formato",
      "Quién, qué, para qué y con qué restricciones",
      "Rol, contexto, ejemplo y salida",
      "Pregunta, respuesta, evaluación y refinamiento",
    ],
    correctIndex: 1,
    explanation:
      "El framework de especificidad incluye: quién eres (rol), qué necesitas (tarea), para qué (objetivo) y con qué restricciones (limitaciones).",
  },
  {
    question: "¿Cuántos ejemplos son suficientes en few-shot prompting para la mayoría de tareas?",
    options: [
      "1 ejemplo siempre es suficiente",
      "10 o más ejemplos garantizan mejores resultados",
      "Entre 3 y 5 ejemplos es suficiente; más de 7 raramente agrega valor",
      "El número de ejemplos no tiene impacto en la calidad",
    ],
    correctIndex: 2,
    explanation:
      "La práctica muestra que 3-5 ejemplos son óptimos; agregar más de 7 raramente mejora el resultado y ocupa espacio de contexto innecesariamente.",
  },
  {
    question: "¿Qué problema ocurre si los ejemplos en few-shot prompting son muy similares entre sí?",
    options: [
      "La IA se confunde y no puede responder",
      "La respuesta será demasiado corta",
      "La IA puede generalizar de forma sesgada y no manejar bien casos distintos",
      "No ocurre ningún problema; la similitud es positiva",
    ],
    correctIndex: 2,
    explanation:
      "Incluir ejemplos diversos en few-shot prompting evita que la IA aprenda patrones sesgados; los ejemplos deben cubrir distintos casos para guiar respuestas más robustas.",
  },
  {
    question: "¿En cuál de estos escenarios chain-of-thought (CoT) es MENOS útil?",
    options: [
      "Resolver un problema matemático complejo",
      "Analizar un argumento lógico",
      "Consultar un dato factual simple o hacer una búsqueda directa",
      "Planificar una estrategia de negocio paso a paso",
    ],
    correctIndex: 2,
    explanation:
      "Chain-of-thought es ineficaz para tareas simples, consultas factuales directas o trabajo creativo puro donde el razonamiento paso a paso no agrega valor.",
  },
  {
    question: "¿Cuáles son los cuatro componentes que hacen un rol completo y efectivo en un prompt?",
    options: [
      "Nombre, edad, nacionalidad y cargo",
      "Profesión, nivel de experiencia, estilo de comunicación y tarea específica",
      "Idioma, tono, formato y extensión",
      "Contexto, restricciones, ejemplos y formato de salida",
    ],
    correctIndex: 1,
    explanation:
      "Un rol completo incluye: profesión (qué es), nivel de experiencia (cuánta), estilo de comunicación (cómo habla) y la tarea específica que debe realizar.",
  },
  {
    question: "¿Cuál es la diferencia principal entre asignar un rol y dar una instrucción directa?",
    options: [
      "No hay diferencia; son equivalentes",
      "El rol ajusta el vocabulario y perspectiva; la instrucción especifica exactamente qué hacer",
      "Las instrucciones son siempre más largas que los roles",
      "Los roles solo funcionan en Claude; las instrucciones solo en ChatGPT",
    ],
    correctIndex: 1,
    explanation:
      "El rol ajusta el vocabulario, tono y perspectiva con que la IA responde; la instrucción le dice específicamente qué acción realizar. Ambos se complementan.",
  },
  {
    question: "¿Puedes usar tags XML personalizados como <mi_texto> o <producto> en tus prompts?",
    options: [
      "No, solo se pueden usar tags HTML estándar",
      "Solo si usas Claude; ChatGPT no los reconoce en absoluto",
      "Sí, puedes crear cualquier tag personalizado para organizar tu prompt",
      "No, los tags deben estar en inglés obligatoriamente",
    ],
    correctIndex: 2,
    explanation:
      "Puedes usar tags XML completamente personalizados como <mi_texto>, <producto> o <instrucciones>. Lo importante es que sean consistentes dentro del prompt.",
  },
  {
    question: "¿Qué formato es más adecuado para pedirle a la IA que compare múltiples opciones?",
    options: [
      "JSON, porque es el formato más estructurado",
      "Lista numerada, porque es la más simple",
      "Tabla en Markdown, porque facilita la comparación visual entre columnas",
      "Párrafo continuo, porque la IA escribe mejor así",
    ],
    correctIndex: 2,
    explanation:
      "Las tablas en Markdown son ideales para comparaciones porque permiten ver múltiples atributos de varias opciones lado a lado de forma clara.",
  },
  {
    question: "Cuando el system prompt y el user prompt tienen instrucciones contradictorias, ¿qué ocurre?",
    options: [
      "La IA elige aleatoriamente cuál seguir",
      "El system prompt tiene mayor peso y generalmente prevalece sobre el user prompt",
      "El user prompt siempre tiene prioridad porque es el más reciente",
      "La IA solicita al usuario que resuelva el conflicto manualmente",
    ],
    correctIndex: 1,
    explanation:
      "El system prompt tiene mayor peso jerárquico; cuando hay conflicto con el user prompt, el system prompt generalmente prevalece porque establece las reglas base.",
  },
  {
    question: "¿A cuántas conversaciones aplican las Custom Instructions de ChatGPT una vez configuradas?",
    options: [
      "Solo a la conversación donde se configuraron",
      "A las últimas 10 conversaciones",
      "A todas las conversaciones nuevas que se abran desde ese momento",
      "Solo si el usuario activa la opción en cada chat nuevo",
    ],
    correctIndex: 2,
    explanation:
      "Las Custom Instructions aplican automáticamente a todas las conversaciones nuevas, funcionando como un system prompt persistente sin necesidad de repetirlo.",
  },
  {
    question: "¿Cuántas ejecuciones del mismo prompt se recomiendan para determinar si una versión es mejor?",
    options: [
      "Con una sola ejecución es suficiente para comparar",
      "Exactamente dos (A y B) para tener un control claro",
      "Tres o más ejecuciones para tener determinación estadística confiable",
      "Diez o más para eliminar toda variabilidad",
    ],
    correctIndex: 2,
    explanation:
      "Al hacer A/B testing de prompts, comparar 3 o más ejecuciones por variante da una base estadística más confiable que una sola prueba, dado que la IA tiene variabilidad natural.",
  },
  {
    question: "¿Qué expectativa correcta debes tener sobre tu primer prompt?",
    options: [
      "El primer prompt siempre debe ser perfecto si describes bien la tarea",
      "Es normal que el primer prompt no sea óptimo; la iteración es parte del proceso",
      "Si el primer prompt falla, la tarea es imposible para la IA",
      "El primer prompt solo falla cuando la pregunta es ambigua",
    ],
    correctIndex: 1,
    explanation:
      "El primer prompt raramente es óptimo. Prompt engineering es un proceso iterativo donde cada intento enseña cómo mejorar el siguiente.",
  },
  {
    question: "Después de 5 o más iteraciones fallidas, ¿cuándo vale la pena seguir refinando el mismo prompt?",
    options: [
      "Nunca; después de 5 fallas siempre hay que empezar desde cero",
      "Siempre; nunca se debe abandonar un prompt en construcción",
      "Solo si la estructura base es correcta y los fallos son en detalles específicos",
      "Solo si cambias la herramienta de IA que estás usando",
    ],
    correctIndex: 2,
    explanation:
      "Si tras 5+ intentos la estructura fundamental del prompt es sólida, vale la pena continuar ajustando detalles. Si el enfoque base es incorrecto, es mejor empezar desde cero.",
  },
  {
    question: "¿Cuál es la ventaja de construir un documento largo de forma incremental con la IA?",
    options: [
      "La IA trabaja más rápido cuando recibe todo el trabajo de una sola vez",
      "Construir por partes permite revisar y corregir la dirección en cada etapa antes de continuar",
      "El resultado incremental siempre es más corto y menos útil",
      "No hay ventaja; es preferible pedir el documento completo en un solo prompt",
    ],
    correctIndex: 1,
    explanation:
      "La construcción incremental (outline → secciones → refinamiento → conclusión) permite detectar errores de dirección temprano y ajustar antes de invertir esfuerzo en secciones incorrectas.",
  },
  {
    question: "¿Qué ocurre con el contexto de una conversación cuando abres un chat nuevo?",
    options: [
      "La IA recuerda todo lo de conversaciones anteriores automáticamente",
      "El contexto se preserva por 24 horas entre conversaciones",
      "El contexto se pierde; cada conversación nueva empieza desde cero",
      "Solo se pierde el contexto si cierras sesión en la plataforma",
    ],
    correctIndex: 2,
    explanation:
      "El contexto solo se preserva dentro de la misma conversación. Al abrir un chat nuevo, la IA no recuerda nada de conversaciones anteriores.",
  },
  {
    question: "¿En qué parte del prompt conviene colocar la instrucción más importante?",
    options: [
      "Al final del prompt, porque la IA lee de abajo hacia arriba",
      "En medio del prompt para que no interrumpa el contexto inicial",
      "Al inicio del prompt, donde tiene mayor adherencia y atención",
      "No importa el lugar; la IA procesa todas las partes por igual",
    ],
    correctIndex: 2,
    explanation:
      "Colocar las instrucciones clave al inicio del prompt mejora la adherencia, ya que los modelos tienden a darle mayor peso a lo que aparece primero.",
  },
  {
    question: "¿Qué señal indica que un prompt tiene lenguaje ambiguo que necesita refinarse?",
    options: [
      "La respuesta es siempre idéntica en cada ejecución",
      "La IA tarda más tiempo en responder de lo normal",
      "Los resultados son inconsistentes o muy distintos en ejecuciones consecutivas del mismo prompt",
      "La respuesta es más larga de lo esperado",
    ],
    correctIndex: 2,
    explanation:
      "Cuando el mismo prompt produce resultados muy diferentes en distintas ejecuciones, es señal de que el lenguaje es ambiguo y la IA lo está interpretando de formas distintas.",
  },
  {
    question: "¿Cuál de estos roles es más efectivo para obtener asesoría financiera específica?",
    options: [
      "\"Actúa como experto financiero\"",
      "\"Actúa como contador especializado en pymes de México con 15 años de experiencia en planeación fiscal\"",
      "\"Sé mi asesor de dinero\"",
      "\"Compórtate como alguien que sabe de finanzas\"",
    ],
    correctIndex: 1,
    explanation:
      "Un rol específico con profesión, especialidad, contexto geográfico y nivel de experiencia produce respuestas mucho más relevantes que un rol genérico como \"experto financiero\".",
  },
  {
    question: "¿Qué es el 0-shot prompting?",
    options: [
      "Un prompt que pide cero respuestas a la IA",
      "Hacer prompting sin usar herramientas de IA",
      "Hacer una solicitud a la IA sin proporcionar ningún ejemplo previo",
      "Un prompt que falla desde el primer intento",
    ],
    correctIndex: 2,
    explanation:
      "0-shot prompting significa pedirle algo a la IA sin dar ningún ejemplo. Se contrasta con few-shot (pocos ejemplos) y many-shot (muchos ejemplos).",
  },
  {
    question: "¿Cuáles son los principales tipos de refinamiento que puedes aplicar a un prompt?",
    options: [
      "Velocidad, precisión, idioma y costo",
      "Longitud, tono, contenido, formato y enfoque",
      "Sintaxis, semántica, pragmática y gramática",
      "Inicio, desarrollo, clímax y conclusión",
    ],
    correctIndex: 1,
    explanation:
      "Los cinco tipos de refinamiento son: longitud (más corto/largo), tono (formal/informal), contenido (qué incluir/excluir), formato (tabla/lista/párrafo) y enfoque (qué aspecto priorizar).",
  },
  {
    question: "¿Cuáles son las cinco técnicas core del prompt engineering mencionadas en el curso?",
    options: [
      "Velocidad, claridad, brevedad, repetición y confirmación",
      "Ortografía, gramática, puntuación, estructura y longitud",
      "Especificidad, contexto, ejemplos, rol e iteración",
      "Pregunta, respuesta, evaluación, corrección y publicación",
    ],
    correctIndex: 2,
    explanation:
      "Las cinco técnicas core son: especificidad (ser preciso), contexto (dar información relevante), ejemplos (few-shot), rol (asignar identidad) e iteración (refinar continuamente).",
  },
  {
    question: "¿Por qué pedir la respuesta en formato JSON es útil cuando integras la IA con otros sistemas?",
    options: [
      "Porque JSON es más fácil de leer para humanos que el texto plano",
      "Porque JSON garantiza una salida estructurada que otros programas pueden procesar de forma confiable",
      "Porque la IA responde más rápido en JSON que en texto libre",
      "Porque JSON elimina completamente la posibilidad de errores en la respuesta",
    ],
    correctIndex: 1,
    explanation:
      "JSON produce salida estructurada con claves y valores predecibles, lo que permite que otros sistemas o código la consuman y procesen automáticamente sin necesidad de parsear texto libre.",
  },
  {
    question: "¿Para qué sirve pedir la respuesta en formato Markdown?",
    options: [
      "Para que la IA use más palabras técnicas en la respuesta",
      "Para obtener texto organizado con encabezados, listas y énfasis que mejoran la lectura",
      "Porque Markdown es el único formato que la IA entiende correctamente",
      "Para que la respuesta sea automáticamente más corta y concisa",
    ],
    correctIndex: 1,
    explanation:
      "Markdown permite estructurar la respuesta con encabezados (#), listas, negritas y otros elementos que hacen el contenido más legible y navegable.",
  },
  {
    question: "¿Cuál es la mentalidad correcta sobre el prompt engineering según el curso?",
    options: [
      "Es una habilidad que se domina con una sola técnica perfecta",
      "Es un proceso de una sola vez: si el prompt es bueno, no necesita ajustes",
      "Es un proceso iterativo donde la mejora continua es esperada y normal",
      "Es relevante únicamente para programadores y personas técnicas",
    ],
    correctIndex: 2,
    explanation:
      "El prompt engineering es inherentemente iterativo: se prueba, se evalúa, se refina y se vuelve a probar. Esperar perfección desde el primer intento es una expectativa incorrecta.",
  },
  {
    question: "¿Cuál es el orden correcto para construir un documento extenso usando IA de forma incremental?",
    options: [
      "Conclusión → introducción → desarrollo → revisión",
      "Borrador completo → corrección → publicación final",
      "Esquema → secciones individuales → refinamiento → conclusión",
      "Investigación → escritura y edición simultánea → entrega",
    ],
    correctIndex: 2,
    explanation:
      "La construcción incremental efectiva sigue el orden: esquema general → desarrollar cada sección por separado → refinar contenido → integrar conclusión. Esto permite control y corrección en cada etapa.",
  },
], curso7QuizEn);

export const curso8Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Qué puede hacer la IA con un PDF que le subes?",
    options: [
      "Editarlo y devolverte una versión modificada",
      "Leerlo, resumirlo, responder preguntas sobre su contenido",
      "Firmarlo digitalmente",
      "Convertirlo en una página web automáticamente",
    ],
    correctIndex: 1,
    explanation:
      "La IA puede leer, resumir y responder preguntas sobre el contenido de un PDF.",
  },
  {
    question: "¿Cuál es la mejor técnica para resumir un documento muy largo?",
    options: [
      "Pedir \"resúmelo\" sin más contexto",
      "Resumir por secciones y luego hacer un resumen de los resúmenes",
      "Copiar solo el primer párrafo y pedir un resumen",
      "No se puede resumir documentos largos con IA",
    ],
    correctIndex: 1,
    explanation:
      "La resumirización progresiva (secciones → resumen final) funciona mejor para documentos extensos.",
  },
  {
    question: "¿Qué tipo de imágenes puede analizar la IA?",
    options: [
      "Solo fotos de personas",
      "Gráficos, capturas de pantalla, recibos, diagramas, fotos",
      "Solo imágenes generadas por IA",
      "Solo imágenes en formato PNG",
    ],
    correctIndex: 1,
    explanation:
      "La IA con visión puede analizar gráficos, screenshots, recibos, diagramas y fotos variadas.",
  },
  {
    question: "¿En qué formato conviene pedir datos extraídos de una factura?",
    options: [
      "Texto libre en párrafos",
      "Tabla o JSON con campos estructurados",
      "Solo como lista de viñetas",
      "En formato de imagen",
    ],
    correctIndex: 1,
    explanation:
      "Tabla o JSON permiten procesar los datos extraídos de forma estructurada y verificable.",
  },
  {
    question: "¿Qué son los 'Proyectos' en Claude?",
    options: [
      "Una carpeta para guardar imágenes",
      "Un espacio donde puedes subir documentos de contexto e instrucciones persistentes",
      "Un plan de suscripción premium",
      "Un tipo de prompt especial",
    ],
    correctIndex: 1,
    explanation:
      "Los Proyectos de Claude permiten subir documentos y definir instrucciones que persisten entre conversaciones.",
  },
  {
    question: "¿Qué precaución debes tener al subir documentos a la IA?",
    options: [
      "No subir documentos de más de 1 página",
      "No subir documentos confidenciales o con datos personales sensibles",
      "Solo subir documentos en inglés",
      "Siempre convertirlos a Word antes de subir",
    ],
    correctIndex: 1,
    explanation:
      "Nunca subas documentos con datos confidenciales, financieros o personales sensibles a la IA.",
  },
  {
    question: "¿Qué pasa si subes múltiples archivos en una conversación?",
    options: [
      "La IA solo lee el último",
      "La IA puede cruzar información entre ellos y responder preguntas comparativas",
      "Se borran los anteriores",
      "No se pueden subir múltiples archivos",
    ],
    correctIndex: 1,
    explanation:
      "La IA puede trabajar con múltiples documentos simultáneamente y cruzar información entre ellos.",
  },
  {
    question: "¿Qué limitación tiene la IA al analizar imágenes?",
    options: [
      "No puede ver colores",
      "Puede tener dificultades con texto muy pequeño o escritura a mano",
      "Solo funciona con fotos tomadas ese día",
      "No puede describir lo que ve",
    ],
    correctIndex: 1,
    explanation:
      "La IA puede tener dificultades con texto muy pequeño, letra manuscrita y razonamiento espacial complejo.",
  },
  {
    question: "¿Cómo verificas que la IA extrajo datos correctamente de una tabla?",
    options: [
      "Confiar ciegamente en el resultado",
      "Pedirle que revise y compare contra el original, y verificar manualmente campos clave",
      "No se puede verificar",
      "Repetir el proceso exacto esperando resultado diferente",
    ],
    correctIndex: 1,
    explanation:
      "Siempre verifica manualmente campos clave y pedile a la IA que haga doble checking.",
  },
  {
    question: "¿Cuál es la ventaja principal de trabajar con proyectos en vez de chats sueltos?",
    options: [
      "Los proyectos son más baratos",
      "El contexto persiste entre conversaciones sin tener que re-explicar todo",
      "Los proyectos tienen IA más inteligente",
      "Solo los proyectos permiten usar español",
    ],
    correctIndex: 1,
    explanation:
      "Los proyectos mantienen contexto persistente, evitando re-explicar documentos y preferencias cada vez.",
  },
  {
    question: "¿Cuál es el límite aproximado de tamaño de PDF que acepta Claude?",
    options: [
      "512 MB",
      "100 MB",
      "30 MB",
      "1 GB",
    ],
    correctIndex: 2,
    explanation:
      "Claude acepta PDFs de hasta aproximadamente 30 MB, mientras que ChatGPT llega a ~512 MB y Gemini a ~100 MB.",
  },
  {
    question: "¿Cuántas páginas maneja mejor ChatGPT en un PDF?",
    options: [
      "Hasta 1,500 páginas",
      "Hasta 100 páginas",
      "Hasta 150 páginas",
      "Hasta 50 páginas",
    ],
    correctIndex: 1,
    explanation:
      "ChatGPT trabaja bien con alrededor de 100 páginas, Claude con ~150 y Gemini con hasta ~1,500 páginas.",
  },
  {
    question: "¿Qué tipo de PDF ofrece mejor calidad de lectura para la IA?",
    options: [
      "Un PDF escaneado en alta resolución",
      "Un PDF con texto seleccionable (texto real)",
      "Un PDF en blanco y negro",
      "Ambos tipos son idénticos para la IA",
    ],
    correctIndex: 1,
    explanation:
      "Los PDFs con texto seleccionable son procesados con mucho mayor precisión que los PDFs escaneados, que son básicamente imágenes.",
  },
  {
    question: "¿Qué sucede si intentas subir un PDF protegido con contraseña a la IA?",
    options: [
      "La IA adivina la contraseña automáticamente",
      "La IA puede abrirlo si la contraseña es sencilla",
      "La IA no puede acceder al contenido del documento",
      "El PDF se convierte a texto plano antes de procesarse",
    ],
    correctIndex: 2,
    explanation:
      "Los PDFs cifrados con contraseña no pueden ser leídos por la IA; debes desprotegerlos antes de subirlos.",
  },
  {
    question: "¿Claude Pro usa tus conversaciones para entrenar sus modelos?",
    options: [
      "Sí, todas las conversaciones se usan para entrenamiento",
      "No, Claude Pro no utiliza las conversaciones para entrenar al modelo",
      "Solo las conversaciones de más de 10 mensajes",
      "Depende de la configuración del país",
    ],
    correctIndex: 1,
    explanation:
      "Claude Pro no utiliza el contenido de las conversaciones de sus usuarios para entrenar modelos, lo que ofrece mayor privacidad.",
  },
  {
    question: "¿Qué técnica de anonimización se recomienda antes de subir documentos con datos sensibles?",
    options: [
      "Cambiar el formato del archivo a TXT",
      "Reemplazar los nombres reales por nombres genéricos antes de subir",
      "Subir solo las páginas impares",
      "Usar siempre el modo incógnito del navegador",
    ],
    correctIndex: 1,
    explanation:
      "Reemplazar nombres, números y datos identificables por genéricos (ej. 'Empleado A') reduce el riesgo de exponer información confidencial.",
  },
  {
    question: "¿Cuáles son los formatos de imagen que acepta la IA para análisis visual?",
    options: [
      "Solo JPG y PNG",
      "BMP, TIFF, ICO y SVG",
      "PNG, JPG, GIF y WEBP",
      "PDF, DOCX, PPTX y XLSX",
    ],
    correctIndex: 2,
    explanation:
      "Los formatos de imagen aceptados por los modelos con visión son PNG, JPG, GIF y WEBP.",
  },
  {
    question: "¿Qué significa que un modelo de IA sea 'multimodal'?",
    options: [
      "Que responde en múltiples idiomas",
      "Que puede procesar diferentes tipos de datos como texto e imágenes a la vez",
      "Que tiene múltiples personalidades según el tema",
      "Que funciona en múltiples dispositivos simultáneamente",
    ],
    correctIndex: 1,
    explanation:
      "Multimodal significa que el modelo puede procesar y combinar distintos tipos de datos, como texto, imágenes y audio.",
  },
  {
    question: "¿Cuál de las siguientes tareas visuales hace la IA con ALTA precisión?",
    options: [
      "Reconocer emociones en rostros de personas",
      "Contar objetos exactos en una fotografía concurrida",
      "Leer texto impreso, interpretar gráficas y distinguir colores y formas",
      "Detectar si una foto ha sido manipulada digitalmente",
    ],
    correctIndex: 2,
    explanation:
      "La IA tiene alta precisión en texto impreso, gráficas, colores, formas y capturas de pantalla.",
  },
  {
    question: "¿Para qué tarea visual la IA tiene precisión MODERADA?",
    options: [
      "Leer tablas en capturas de pantalla",
      "Identificar texto manuscrito, logos y expresiones faciales",
      "Describir el contenido general de una fotografía",
      "Reconocer colores primarios en diagramas",
    ],
    correctIndex: 1,
    explanation:
      "El texto manuscrito, los logos y el reconocimiento de emociones son tareas de precisión moderada para la IA.",
  },
  {
    question: "¿Qué tarea visual representa una limitación de BAJA precisión para la IA?",
    options: [
      "Leer el título de un documento escaneado",
      "Identificar si una imagen es una captura de pantalla",
      "Contar con exactitud objetos individuales en una imagen",
      "Describir la paleta de colores de un gráfico",
    ],
    correctIndex: 2,
    explanation:
      "Contar objetos con exactitud, detectar manipulaciones fotográficas y razonar sobre espacios complejos son áreas de baja precisión.",
  },
  {
    question: "¿Qué restricción ética tienen los modelos de IA al analizar imágenes de personas?",
    options: [
      "No pueden describir la ropa de las personas",
      "No pueden identificar a individuos específicos por su rostro",
      "No pueden analizar imágenes con más de una persona",
      "No pueden indicar el género de las personas en la imagen",
    ],
    correctIndex: 1,
    explanation:
      "Por restricciones éticas y de privacidad, la IA no identifica ni nombra personas específicas a partir de sus rostros.",
  },
  {
    question: "¿Qué estrategia ayuda a que la IA analice mejor una imagen con mucho contenido?",
    options: [
      "Subir la imagen en formato GIF animado",
      "Convertir la imagen a blanco y negro antes de subir",
      "Recortar la imagen para eliminar áreas innecesarias y enfocarse en la zona relevante",
      "Subir la misma imagen varias veces en el mismo mensaje",
    ],
    correctIndex: 2,
    explanation:
      "Recortar la imagen para conservar solo la zona de interés mejora la precisión del análisis y reduce el ruido visual.",
  },
  {
    question: "¿Qué tres secciones debe incluir un resumen ejecutivo generado por IA?",
    options: [
      "Introducción, cuerpo y conclusión",
      "Contexto, hallazgos y recomendaciones",
      "Antecedentes, análisis y bibliografía",
      "Resumen, datos y glosario",
    ],
    correctIndex: 1,
    explanation:
      "El formato de resumen ejecutivo recomendado incluye: contexto (de qué trata), hallazgos clave y recomendaciones accionables.",
  },
  {
    question: "¿En qué consiste la 'resumirización comparativa' con IA?",
    options: [
      "Comparar el resumen de la IA con el resumen de un humano",
      "Pedir a la IA que resuma el mismo documento dos veces y elegir el mejor",
      "Analizar múltiples fuentes y sintetizar similitudes y diferencias entre ellas",
      "Generar dos versiones del resumen: corta y larga",
    ],
    correctIndex: 2,
    explanation:
      "La resumirización comparativa consiste en que la IA analice varias fuentes simultáneamente y produzca un resumen que integre sus similitudes y diferencias.",
  },
  {
    question: "¿Cómo puedes verificar que los datos citados por la IA realmente están en el documento?",
    options: [
      "Buscar el dato en Google para confirmarlo",
      "Pedirle a la IA que indique el número de página donde encontró cada dato",
      "Pedir a la IA que repita la respuesta con otras palabras",
      "Contar el número de palabras en la respuesta",
    ],
    correctIndex: 1,
    explanation:
      "Solicitar el número de página junto con cada dato permite localizar y verificar la fuente original en el documento.",
  },
  {
    question: "¿Qué separador recomienda usar para archivos CSV destinados a Excel en español?",
    options: [
      "Coma (,)",
      "Punto (.)",
      "Tabulador (Tab)",
      "Punto y coma (;)",
    ],
    correctIndex: 3,
    explanation:
      "Excel en configuración regional en español usa el punto y coma (;) como separador de CSV, en lugar de la coma estándar anglosajona.",
  },
  {
    question: "¿Cuándo conviene pedir los datos extraídos en formato JSON en lugar de tabla?",
    options: [
      "Cuando se necesita imprimir el resultado directamente",
      "Cuando los datos serán procesados por un programa o sistema de forma automática",
      "Cuando el documento tiene más de 50 páginas",
      "Cuando se trabaja en un teléfono celular",
    ],
    correctIndex: 1,
    explanation:
      "El formato JSON en arreglo es ideal cuando otro programa consumirá los datos de forma programática, ya que es fácilmente parseable.",
  },
  {
    question: "¿Qué tipo de error de transcripción es más común en la IA al extraer datos numéricos?",
    options: [
      "Confundir decimales con enteros",
      "Confundir dígitos y letras similares como 0↔O, 1↔l y 5↔S",
      "Omitir el último dígito de cantidades largas",
      "Invertir el orden de los números en tablas",
    ],
    correctIndex: 1,
    explanation:
      "La IA es propensa a confundir caracteres visualmente similares como el cero con la letra O, el uno con la l minúscula y el cinco con la S.",
  },
  {
    question: "¿En qué consiste el 'procesamiento por lotes' al trabajar con documentos similares?",
    options: [
      "Subir todos los archivos comprimidos en un ZIP",
      "Definir el formato de extracción una sola vez y aplicarlo a 3-5 documentos similares en secuencia",
      "Procesar cada documento en una conversación distinta para evitar confusiones",
      "Pedir a la IA que genere los documentos automáticamente",
    ],
    correctIndex: 1,
    explanation:
      "El procesamiento por lotes implica definir el formato una vez y reutilizarlo para procesar varios documentos similares de manera eficiente.",
  },
  {
    question: "¿Qué símbolo usa convencionalmente la IA para señalar inconsistencias en un documento?",
    options: [
      "Un asterisco (*)",
      "Un signo de interrogación (?)",
      "El símbolo ⚠️",
      "Un guion largo (—)",
    ],
    correctIndex: 2,
    explanation:
      "Puedes instruir a la IA para que use el símbolo ⚠️ al detectar inconsistencias, contradicciones o datos dudosos en el documento.",
  },
  {
    question: "¿Cuántos tokens admite aproximadamente el contexto de Gemini?",
    options: [
      "128,000 tokens",
      "200,000 tokens",
      "500,000 tokens",
      "1,000,000 tokens",
    ],
    correctIndex: 3,
    explanation:
      "Gemini tiene una ventana de contexto de aproximadamente 1 millón de tokens, frente a los 200K de Claude y 128K de GPT-4o.",
  },
  {
    question: "¿Cuántos tokens equivale aproximadamente una página de texto en español?",
    options: [
      "Alrededor de 100 tokens",
      "Alrededor de 300 tokens",
      "Alrededor de 1,000 tokens",
      "Alrededor de 3,000 tokens",
    ],
    correctIndex: 1,
    explanation:
      "Una página de texto en español equivale a aproximadamente 300 tokens, dado que ~1 token equivale a 0.75 palabras en español.",
  },
  {
    question: "¿Qué problema puede ocurrir en conversaciones muy largas con la IA?",
    options: [
      "La IA cobra más por mensajes adicionales",
      "La IA empieza a responder en otro idioma",
      "La precisión y coherencia de las respuestas puede degradarse después de 30-40 mensajes",
      "La conversación se borra automáticamente al llegar a 25 mensajes",
    ],
    correctIndex: 2,
    explanation:
      "En conversaciones muy largas, la IA puede empezar a perder coherencia o cometer más errores; se recomienda iniciar conversaciones nuevas para tareas distintas.",
  },
  {
    question: "¿Qué significa 'referenciar cruzadamente' documentos con la IA?",
    options: [
      "Subir el mismo documento en dos conversaciones distintas",
      "Pedir a la IA que confronte y sintetice información proveniente de múltiples documentos a la vez",
      "Comparar las respuestas de dos IAs distintas sobre el mismo documento",
      "Traducir un documento al inglés y compararlo con el original",
    ],
    correctIndex: 1,
    explanation:
      "La referenciación cruzada consiste en que la IA analice varios documentos simultáneamente y combine o contraste su información para generar una respuesta integrada.",
  },
], curso8QuizEn);

export const curso9Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Qué es prompt chaining?",
    options: [
      "Escribir un prompt muy largo con todas las instrucciones",
      "Dividir una tarea compleja en pasos secuenciales donde la salida de uno alimenta al siguiente",
      "Copiar y pegar el mismo prompt en varias herramientas",
      "Encadenar varias cuentas de IA",
    ],
    correctIndex: 1,
    explanation:
      "Prompt chaining divide tareas complejas en pasos secuenciales, donde cada resultado alimenta el siguiente.",
  },
  {
    question: "¿Qué son los tokens en el contexto de la IA?",
    options: [
      "Monedas virtuales para pagar la suscripción",
      "Las unidades mínimas de texto que la IA procesa (fragmentos de palabras)",
      "Los errores que comete la IA",
      "Los botones de la interfaz",
    ],
    correctIndex: 1,
    explanation:
      "Los tokens son fragmentos de texto (partes de palabras) que la IA usa como unidad de procesamiento.",
  },
  {
    question: "¿Qué pasa cuando excedes la ventana de contexto?",
    options: [
      "La IA se apaga",
      "La IA empieza a \"olvidar\" la información del inicio de la conversación",
      "Te cobran el doble",
      "La conversación se borra automáticamente",
    ],
    correctIndex: 1,
    explanation:
      "Al exceder el contexto, la IA pierde acceso a la información más antigua de la conversación.",
  },
  {
    question: "¿Cómo evalúas si un prompt es bueno?",
    options: [
      "Si la respuesta es larga, el prompt es bueno",
      "Probándolo múltiples veces y verificando consistencia, precisión y formato",
      "Si la IA no da error, es bueno",
      "Preguntándole a la IA si el prompt estuvo bien",
    ],
    correctIndex: 1,
    explanation:
      "Un buen prompt da resultados consistentes, precisos y en el formato deseado al probarlo varias veces.",
  },
  {
    question: "¿Por qué conviene guardar tus mejores prompts?",
    options: [
      "Porque la IA los necesita para funcionar",
      "Para reutilizarlos, mejorarlos con el tiempo y compartirlos con tu equipo",
      "Porque se borran después de 24 horas",
      "Solo por coleccionarlos",
    ],
    correctIndex: 1,
    explanation:
      "Una biblioteca de prompts te permite reutilizar lo que funciona, iterar y compartir con tu equipo.",
  },
  {
    question: "¿Cuál es la ventaja de dividir una tarea en pasos vs un solo prompt largo?",
    options: [
      "Es más barato",
      "Cada paso se puede verificar, ajustar y reutilizar independientemente",
      "La IA solo acepta prompts cortos",
      "No hay ventaja, es lo mismo",
    ],
    correctIndex: 1,
    explanation:
      "Dividir en pasos permite verificar resultados intermedios y ajustar sin rehacerlo todo.",
  },
  {
    question: "¿Cuántos tokens tiene aproximadamente una palabra en español?",
    options: [
      "Exactamente 1 token por palabra",
      "Aproximadamente 1.5 tokens por palabra",
      "10 tokens por palabra",
      "0.1 tokens por palabra",
    ],
    correctIndex: 1,
    explanation:
      "En español, una palabra promedio equivale a ~1.5 tokens debido a acentos y conjugaciones.",
  },
  {
    question: "¿Qué es un 'test de consistencia' para prompts?",
    options: [
      "Verificar que el prompt no tiene errores de ortografía",
      "Ejecutar el mismo prompt 3+ veces y comparar si los resultados son similares",
      "Probar el prompt en diferentes idiomas",
      "Usar el prompt solo una vez y confiar en el resultado",
    ],
    correctIndex: 1,
    explanation:
      "Un test de consistencia corre el mismo prompt varias veces para ver si los resultados son estables.",
  },
  {
    question: "¿Qué elemento es esencial en una plantilla de prompt para tu biblioteca?",
    options: [
      "El color del texto",
      "El nombre, propósito, texto del prompt, variables y notas de uso",
      "Solo el texto del prompt",
      "La fecha de creación únicamente",
    ],
    correctIndex: 1,
    explanation:
      "Una buena plantilla incluye nombre, propósito, prompt con variables marcadas, y notas de uso.",
  },
  {
    question: "En un flujo de trabajo de creación de contenido, ¿cuál es el orden correcto?",
    options: [
      "Publicar → escribir → editar → planificar",
      "Idea → investigación → esquema → borrador → edición → publicación",
      "Editar → escribir → idea → publicar",
      "Borrador → idea → esquema → publicar",
    ],
    correctIndex: 1,
    explanation:
      "El flujo correcto va de idea → investigación → esquema → borrador → edición → publicación.",
  },
  {
    question: "¿Cuál es el principal problema de los 'mega-prompts' (un solo prompt masivo para una tarea compleja)?",
    options: [
      "Son demasiado cortos para que la IA los entienda",
      "Cuestan más tokens que varias conversaciones separadas",
      "Tienden a producir resultados mediocres porque la IA divide su atención entre muchas instrucciones",
      "La IA los rechaza automáticamente si superan 500 palabras",
    ],
    correctIndex: 2,
    explanation:
      "Un mega-prompt obliga a la IA a atender demasiadas instrucciones a la vez, lo que diluye la calidad de cada parte del resultado.",
  },
  {
    question: "¿Cuál de estas NO es una ventaja del prompt chaining frente a un solo prompt largo?",
    options: [
      "Permite enfocar cada paso en una tarea específica para mayor calidad",
      "Facilita identificar en qué paso ocurre un error (debugging)",
      "Garantiza que la IA nunca cometa errores en ningún paso",
      "Permite reutilizar pasos individuales en diferentes flujos de trabajo",
    ],
    correctIndex: 2,
    explanation:
      "El chaining mejora enfoque, calidad, control y reusabilidad, pero no elimina los errores; solo los hace más fáciles de detectar y corregir.",
  },
  {
    question: "Al usar prompt chaining, ¿por qué es recomendable guardar los resultados intermedios de cada paso por separado?",
    options: [
      "Para que la IA recuerde lo que ya procesó en sesiones futuras",
      "Porque así se reducen los costos de tokens a la mitad",
      "Para poder recuperar el trabajo avanzado si un paso posterior falla, sin empezar desde cero",
      "Solo es útil si trabajas en equipo con otras personas",
    ],
    correctIndex: 2,
    explanation:
      "Guardar resultados intermedios permite retomar desde el punto de fallo sin repetir todos los pasos anteriores.",
  },
  {
    question: "¿Qué es la 'flexibilidad entre modelos' en el contexto del prompt chaining?",
    options: [
      "Cambiar el idioma del prompt según el modelo que uses",
      "Usar distintos modelos de IA para diferentes pasos según sus fortalezas (ej. uno para investigar, otro para redactar)",
      "Exportar prompts de ChatGPT a Claude sin modificarlos",
      "Alternar entre versiones gratuita y de pago del mismo modelo",
    ],
    correctIndex: 1,
    explanation:
      "La flexibilidad entre modelos consiste en asignar cada paso del flujo al modelo más adecuado para esa tarea específica.",
  },
  {
    question: "¿Qué herramientas como Zapier o Make permiten hacer con los prompts de IA?",
    options: [
      "Crear modelos de lenguaje personalizados sin programación",
      "Encadenar prompts automáticamente como parte de flujos de trabajo automatizados",
      "Aumentar el límite de tokens de cualquier modelo gratuito",
      "Generar imágenes a partir de texto de forma gratuita",
    ],
    correctIndex: 1,
    explanation:
      "Zapier y Make permiten automatizar flujos donde los prompts se encadenan sin intervención manual, conectando IA con otras aplicaciones.",
  },
  {
    question: "¿Qué característica distingue la memoria automática de ChatGPT?",
    options: [
      "Almacena todos tus archivos adjuntos permanentemente",
      "Aprende datos sobre ti a lo largo de conversaciones y los usa en sesiones futuras sin que tú hagas nada",
      "Recuerda el historial completo de cada conversación de forma literal",
      "Solo funciona si activas manualmente la opción 'recordar' en cada mensaje",
    ],
    correctIndex: 1,
    explanation:
      "La memoria automática de ChatGPT aprende hechos sobre el usuario entre conversaciones y los aplica de forma automática en interacciones futuras.",
  },
  {
    question: "¿Dónde puedes administrar (ver, editar o eliminar) los recuerdos que ChatGPT ha guardado sobre ti?",
    options: [
      "Desde el menú Archivo → Exportar datos",
      "En la sección Configuración → Personalización → Memoria",
      "En el perfil público de tu cuenta de OpenAI",
      "Solo puedes borrar la memoria escribiendo '/reset memory' en el chat",
    ],
    correctIndex: 1,
    explanation:
      "La memoria de ChatGPT se administra en Configuración → Personalización → Memoria, donde puedes ver y eliminar recuerdos individuales.",
  },
  {
    question: "Las Instrucciones Personalizadas (Custom Instructions) de ChatGPT tienen dos campos. ¿Cuáles son?",
    options: [
      "'Idioma preferido' y 'Nivel de dificultad'",
      "'Qué debe saber sobre ti' y 'Cómo debe responder'",
      "'Tu profesión' y 'Tu ubicación geográfica'",
      "'Temas permitidos' y 'Temas prohibidos'",
    ],
    correctIndex: 1,
    explanation:
      "Las Custom Instructions tienen dos campos: información sobre el usuario (contexto personal/profesional) e instrucciones sobre el estilo y formato de respuesta.",
  },
  {
    question: "¿A qué conversaciones aplican las Instrucciones Personalizadas (Custom Instructions) de ChatGPT?",
    options: [
      "A todas las conversaciones, incluidas las anteriores a su configuración",
      "Solo a la conversación donde las activaste",
      "Únicamente a las conversaciones nuevas iniciadas después de configurarlas",
      "Solo cuando seleccionas manualmente 'aplicar instrucciones' en cada chat",
    ],
    correctIndex: 2,
    explanation:
      "Las Custom Instructions son prospectivas: se aplican a conversaciones nuevas pero no modifican retroactivamente las sesiones ya existentes.",
  },
  {
    question: "¿Qué combina un Proyecto de Claude para ofrecer contexto persistente?",
    options: [
      "Historial de búsqueda web, imágenes generadas y contactos del usuario",
      "Instrucciones del sistema, documentos subidos y el historial de la conversación del proyecto",
      "Solo los últimos 10 mensajes del chat más reciente",
      "Plantillas de prompts predefinidas por Anthropic",
    ],
    correctIndex: 1,
    explanation:
      "Los Proyectos de Claude integran instrucciones personalizadas, archivos de referencia subidos y el historial de conversación para mantener contexto continuo.",
  },
  {
    question: "¿Qué son las 'Extensiones' de Gemini (como Gmail, Drive o Maps)?",
    options: [
      "Plugins de pago que amplían el límite de tokens de Gemini",
      "Conexiones que permiten a Gemini acceder a datos reales de tus servicios de Google",
      "Versiones especializadas de Gemini entrenadas en un solo tema",
      "Herramientas para exportar conversaciones a Google Docs",
    ],
    correctIndex: 1,
    explanation:
      "Las Extensiones conectan a Gemini con servicios como Gmail o Drive para acceder a información real del usuario dentro de esas plataformas.",
  },
  {
    question: "¿Qué es un 'Gem' en Gemini?",
    options: [
      "Una moneda virtual para comprar tokens adicionales",
      "Un asistente con rol específico, instrucciones propias y documentos de referencia",
      "El nombre del modelo más avanzado de Google",
      "Una extensión premium disponible solo en el plan empresarial",
    ],
    correctIndex: 1,
    explanation:
      "Los Gems son versiones personalizadas de Gemini con un rol definido (ej. coach de escritura), similares a los Custom GPTs de OpenAI.",
  },
  {
    question: "¿Para qué sirve un 'documento de contexto maestro' al trabajar con IA?",
    options: [
      "Para guardar todas las respuestas que ha dado la IA en el pasado",
      "Para centralizar en un solo archivo tu rol, audiencia, preferencias y estilo, y pegarlo al inicio de cada sesión",
      "Para configurar el idioma y la región de la herramienta de IA",
      "Es solo una copia de seguridad de tus conversaciones",
    ],
    correctIndex: 1,
    explanation:
      "Un documento de contexto maestro consolida la información clave sobre ti y tu trabajo; al pegarlo al inicio de una conversación nueva, recrea el contexto rápidamente.",
  },
  {
    question: "Según las buenas prácticas del curso, ¿a partir de cuántos mensajes una conversación larga puede empezar a degradarse?",
    options: [
      "10 a 15 mensajes",
      "50 a 60 mensajes",
      "30 a 40 mensajes",
      "100 mensajes o más",
    ],
    correctIndex: 2,
    explanation:
      "Alrededor de los 30-40 mensajes, las conversaciones largas pueden mostrar señales de degradación como olvido de instrucciones o respuestas más genéricas.",
  },
  {
    question: "¿En qué consiste la técnica 'resumen antes de cerrar' para gestionar el contexto?",
    options: [
      "Pedirle a la IA que elimine la conversación cuando termines",
      "Solicitar a la IA un resumen de la sesión y pegarlo al inicio de la próxima conversación para restaurar el contexto",
      "Copiar toda la conversación en un documento de texto como respaldo",
      "Activar la opción de 'guardar sesión' disponible en todos los modelos",
    ],
    correctIndex: 1,
    explanation:
      "La técnica consiste en pedir un resumen antes de cerrar la sesión y usarlo como punto de partida en la siguiente, evitando perder el hilo del trabajo.",
  },
  {
    question: "¿Cuál de los siguientes modelos tiene la ventana de contexto más grande?",
    options: [
      "GPT-4o con 128K tokens (~300 páginas)",
      "Claude con 200K tokens (~470 páginas)",
      "Gemini con 1M tokens (~2,300 páginas)",
      "Todos tienen exactamente la misma ventana de contexto",
    ],
    correctIndex: 2,
    explanation:
      "Gemini tiene la mayor ventana de contexto con 1 millón de tokens, equivalente a aproximadamente 2,300 páginas de texto.",
  },
  {
    question: "¿Qué herramienta proporciona OpenAI para visualizar cuántos tokens consume un texto?",
    options: [
      "Token Analyzer dentro de ChatGPT Plus",
      "Un tokenizador en línea gratuito disponible en su sitio web",
      "Una extensión de Chrome llamada TokenCount",
      "El comando /tokens dentro del chat de ChatGPT",
    ],
    correctIndex: 1,
    explanation:
      "OpenAI ofrece un tokenizador en línea gratuito donde puedes pegar cualquier texto y ver exactamente cuántos tokens consume.",
  },
  {
    question: "Cuando una conversación excede la ventana de contexto, ¿qué información elimina (trunca) la IA primero?",
    options: [
      "Los mensajes más recientes, para proteger las instrucciones iniciales",
      "Los mensajes más largos, independientemente de su posición",
      "Los mensajes más antiguos del inicio de la conversación",
      "Los mensajes del usuario, pero no las respuestas de la IA",
    ],
    correctIndex: 2,
    explanation:
      "Al truncar, la IA descarta los mensajes más antiguos primero, lo que puede hacer que olvide instrucciones o contexto dado al inicio.",
  },
  {
    question: "¿Cuál de estas es una señal de degradación de una conversación larga con IA?",
    options: [
      "La IA responde más rápido que al inicio",
      "La IA empieza a ignorar instrucciones dadas al principio, da respuestas genéricas o se contradice",
      "Las respuestas se vuelven más largas y detalladas",
      "La IA solicita confirmación antes de responder",
    ],
    correctIndex: 1,
    explanation:
      "Señales de degradación incluyen olvidar instrucciones previas, respuestas genéricas sin personalización y contradicciones con lo acordado antes.",
  },
  {
    question: "¿Cuál es la estrategia recomendada para trabajar con documentos de más de 100 páginas en una IA?",
    options: [
      "Subir el documento completo de una sola vez y esperar a que la IA lo procese todo",
      "Dividir el documento en secciones de ~5 páginas y procesar cada una por separado",
      "Convertir el documento a imagen y subirlo como archivo visual",
      "Solo es posible trabajar con documentos de menos de 10 páginas",
    ],
    correctIndex: 1,
    explanation:
      "Dividir documentos extensos en fragmentos de ~5 páginas permite a la IA enfocarse y procesar cada sección con mayor profundidad y precisión.",
  },
  {
    question: "Al usar la API de OpenAI, ¿cómo se compara el costo de los tokens de salida (output) frente a los de entrada (input)?",
    options: [
      "Son exactamente iguales en precio",
      "Los tokens de entrada cuestan 2-4 veces más que los de salida",
      "Los tokens de salida cuestan 2-4 veces más que los de entrada",
      "Solo se cobran los tokens de entrada; la salida es gratuita",
    ],
    correctIndex: 2,
    explanation:
      "En la mayoría de las APIs, los tokens de salida (lo que genera la IA) son 2-4 veces más caros que los de entrada, lo que hay que considerar al diseñar flujos de trabajo.",
  },
  {
    question: "¿Cómo funciona la evaluación de prompts con rúbrica manual?",
    options: [
      "Le preguntas a la IA si su propia respuesta fue buena",
      "Defines entre 3 y 5 criterios, puntúas cada uno del 1 al 5, y sumas para obtener una valoración total",
      "Comparas la longitud de la respuesta con la de un texto de referencia",
      "Usas una herramienta automática que puntúa el prompt sin intervención humana",
    ],
    correctIndex: 1,
    explanation:
      "Una rúbrica manual define criterios claros (claridad, precisión, formato, etc.), los puntúa del 1 al 5 y suma los resultados para evaluar objetivamente el prompt.",
  },
  {
    question: "¿En qué consiste el método de prueba A/B para comparar dos versiones de un prompt?",
    options: [
      "Usar una versión en inglés (A) y otra en español (B) con el mismo modelo",
      "Probar cada versión una sola vez y elegir la que dé mejor respuesta",
      "Ejecutar cada versión al menos 3 veces y comparar los promedios de calidad",
      "Publicar ambas versiones en una comunidad y votar cuál es mejor",
    ],
    correctIndex: 2,
    explanation:
      "El A/B testing riguroso ejecuta cada versión del prompt múltiples veces (mínimo 3) y compara los promedios para reducir la variabilidad y elegir la mejor.",
  },
  {
    question: "¿Qué convención se recomienda para marcar las secciones reemplazables en una plantilla de prompt?",
    options: [
      "Escribirlas en MAYÚSCULAS sin ningún símbolo adicional",
      "Rodearlas con [CORCHETES] para que sean fácilmente identificables",
      "Usar asteriscos *así* para indicar variables",
      "Colorearlas de rojo en el documento de texto",
    ],
    correctIndex: 1,
    explanation:
      "La convención recomendada es usar [CORCHETES] para marcar variables o secciones reemplazables en una plantilla de prompt, facilitando su uso y edición.",
  },
  {
    question: "En un sistema de versionado de prompts, ¿qué diferencia hay entre pasar de la versión 1.0 a la 1.1 versus pasar a la 2.0?",
    options: [
      "No hay diferencia, los números son solo una convención estética",
      "1.0 → 1.1 indica ajustes menores de redacción; 1.x → 2.0 indica un rediseño estructural del prompt",
      "1.0 → 1.1 indica cambio de modelo; 1.x → 2.0 indica cambio de idioma",
      "El número mayor (2.0) siempre significa que el prompt es peor que la versión anterior",
    ],
    correctIndex: 1,
    explanation:
      "El versionado semántico para prompts sugiere incrementos menores (1.0→1.1) para ajustes de redacción y saltos de versión mayor (1.x→2.0) para reestructuraciones significativas.",
  },

], curso9QuizEn);

// ─── CURSO 10: Crea tu propio asistente de IA ───────────────────────────────
export const curso10Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Qué es un Custom GPT en la plataforma de ChatGPT?",
    options: [
      "Un modelo de IA entrenado desde cero por el usuario",
      "Una versión personalizada de ChatGPT con instrucciones, conocimiento y capacidades propias",
      "Un chatbot que solo puede responder preguntas de matemáticas",
      "Una suscripción premium de ChatGPT",
    ],
    correctIndex: 1,
    explanation:
      "Un Custom GPT es una versión de ChatGPT configurada con instrucciones propias, documentos de referencia y capacidades específicas, sin necesidad de programar.",
  },
  {
    question: "¿Qué son los Claude Projects?",
    options: [
      "Proyectos de programación en el lenguaje Claude",
      "Espacios de trabajo en Claude que mantienen contexto, instrucciones y archivos compartidos entre conversaciones",
      "Documentos PDF que Claude puede leer",
      "Una herramienta exclusiva para empresas Fortune 500",
    ],
    correctIndex: 1,
    explanation:
      "Los Claude Projects son espacios persistentes dentro de Claude.ai donde puedes guardar instrucciones, archivos y mantener contexto entre múltiples conversaciones.",
  },
  {
    question: "Al crear un Custom GPT, ¿cuál de estos NO es un componente que puedes configurar?",
    options: [
      "El nombre y la descripción del asistente",
      "Las instrucciones de comportamiento",
      "El modelo de hardware del servidor de OpenAI",
      "Los documentos de conocimiento",
    ],
    correctIndex: 2,
    explanation:
      "No puedes controlar la infraestructura de servidores de OpenAI. Sí puedes configurar nombre, descripción, instrucciones, documentos y capacidades.",
  },
  {
    question: "¿Cuál es la función principal del campo 'Instrucciones' en un Custom GPT?",
    options: [
      "Escribir el código fuente del asistente",
      "Definir el comportamiento, tono, reglas y limitaciones del asistente",
      "Cargar archivos PDF al asistente",
      "Configurar el idioma del sistema operativo",
    ],
    correctIndex: 1,
    explanation:
      "El campo de instrucciones es donde defines cómo debe comportarse el asistente: su personalidad, tono, qué debe o no debe hacer, y sus reglas.",
  },
  {
    question: "Tienes un asistente de atención al cliente y quieres que NUNCA ofrezca descuentos no autorizados. ¿Dónde configuras esto?",
    options: [
      "En el nombre del asistente",
      "En las instrucciones del sistema, especificando explícitamente la restricción",
      "Subiendo una imagen al asistente",
      "No es posible restringir comportamientos en Custom GPTs",
    ],
    correctIndex: 1,
    explanation:
      "Las instrucciones del sistema permiten definir reglas explícitas y restricciones de comportamiento, como 'nunca ofrecer descuentos sin código de autorización'.",
  },
  {
    question: "¿Qué ventaja ofrece subir un manual de producto como documento a un Custom GPT?",
    options: [
      "El asistente aprende de ese documento para siempre y actualiza su modelo",
      "El asistente puede consultar y citar información específica del documento al responder",
      "El documento se convierte en código ejecutable automáticamente",
      "El asistente puede editar el documento original",
    ],
    correctIndex: 1,
    explanation:
      "Al subir documentos, el asistente puede recuperar y citar información específica de ellos al responder, actuando como una base de conocimiento.",
  },
  {
    question: "¿Qué tipos de archivos puedes subir como base de conocimiento a un Custom GPT?",
    options: [
      "Solo archivos de video MP4",
      "PDFs, documentos de texto, CSVs, FAQs y manuales",
      "Únicamente archivos de código Python",
      "Solo imágenes JPG y PNG",
    ],
    correctIndex: 1,
    explanation:
      "Custom GPTs acepta PDFs, documentos de Word, CSVs, archivos de texto y más, que se usan como base de conocimiento de referencia.",
  },
  {
    question: "¿Qué significa RAG en el contexto de asistentes de IA?",
    options: [
      "Rapid Answer Generation (Generación Rápida de Respuestas)",
      "Retrieval Augmented Generation (Generación Aumentada por Recuperación)",
      "Random Automated Guidance (Guía Automatizada Aleatoria)",
      "Real-time AI Governance (Gobernanza de IA en Tiempo Real)",
    ],
    correctIndex: 1,
    explanation:
      "RAG (Retrieval Augmented Generation) es una técnica donde el modelo recupera información relevante de una base de datos antes de generar su respuesta.",
  },
  {
    question: "En RAG básico, ¿cuál es la secuencia correcta de pasos?",
    options: [
      "Generar respuesta → buscar documentos → recibir pregunta",
      "Recibir pregunta → buscar documentos relevantes → incluir contexto → generar respuesta",
      "Entrenar modelo → guardar documentos → responder",
      "Indexar datos → eliminar pregunta → responder con datos crudos",
    ],
    correctIndex: 1,
    explanation:
      "En RAG: se recibe la pregunta, se recuperan los fragmentos más relevantes de los documentos, se agregan como contexto y el modelo genera una respuesta fundamentada.",
  },
  {
    question: "¿Cuál es la diferencia clave entre subir documentos a un Custom GPT y el RAG conectado a datos reales?",
    options: [
      "No hay ninguna diferencia, son lo mismo",
      "Con documentos subidos los datos son estáticos; con RAG real se pueden consultar fuentes dinámicas y actualizadas",
      "El RAG solo funciona con datos de redes sociales",
      "Los documentos subidos se actualizan solos cada hora",
    ],
    correctIndex: 1,
    explanation:
      "Los documentos subidos son estáticos (no cambian). El RAG conectado a datos reales puede consultar bases de datos, APIs o documentos que se actualizan constantemente.",
  },
  {
    question: "Estás probando tu asistente de IA y notas que responde correctamente preguntas simples pero falla en preguntas complejas. ¿Cuál es el mejor siguiente paso?",
    options: [
      "Eliminar el asistente y empezar de cero",
      "Identificar los casos límite, agregar ejemplos de esos escenarios en las instrucciones y volver a probar",
      "Publicarlo inmediatamente porque las preguntas simples funcionan",
      "Cambiar el nombre del asistente",
    ],
    correctIndex: 1,
    explanation:
      "El proceso de mejora iterativa implica identificar casos límite (edge cases), actualizar las instrucciones con ejemplos específicos y volver a probar hasta lograr el comportamiento deseado.",
  },
  {
    question: "¿Qué es un 'caso límite' (edge case) en el contexto de probar un asistente?",
    options: [
      "Una pregunta muy larga",
      "Una situación inusual o extrema que puede revelar fallos en el comportamiento del asistente",
      "El límite máximo de tokens del modelo",
      "Un usuario que escribe en mayúsculas",
    ],
    correctIndex: 1,
    explanation:
      "Los edge cases son situaciones atípicas o extremas (preguntas ambiguas, fuera de tema, maliciosas) que prueban los límites del asistente y revelan comportamientos inesperados.",
  },
  {
    question: "¿Cuál es el propósito de realizar pruebas con usuarios reales antes de publicar tu asistente?",
    options: [
      "Para que los usuarios te den dinero por el asistente",
      "Para descubrir cómo interactúan personas reales, detectar confusiones y comportamientos inesperados que el creador no anticipó",
      "Las pruebas de usuario no son necesarias si el asistente funciona bien en pruebas propias",
      "Para aumentar el número de conversaciones del asistente artificialmente",
    ],
    correctIndex: 1,
    explanation:
      "Los usuarios reales interactúan de formas que el creador no anticipa. Sus pruebas revelan problemas de comprensión, instrucciones ambiguas y oportunidades de mejora.",
  },
  {
    question: "Al escribir instrucciones para un asistente, ¿cuál de estas prácticas es más efectiva?",
    options: [
      "Escribir instrucciones muy vagas para que el asistente tenga libertad creativa",
      "Ser específico con ejemplos, indicar qué debe y qué NO debe hacer, y definir el tono exacto",
      "Usar solo emojis en las instrucciones",
      "Copiar las instrucciones de otro asistente sin modificarlas",
    ],
    correctIndex: 1,
    explanation:
      "Las instrucciones efectivas son específicas, incluyen ejemplos, definen restricciones claras y especifican el tono. La ambigüedad genera comportamientos inconsistentes.",
  },
  {
    question: "¿Qué significa configurar el 'tono' de un asistente en sus instrucciones?",
    options: [
      "Cambiar el volumen del texto",
      "Definir cómo se comunica el asistente: formal o informal, empático o directo, técnico o simple",
      "Elegir el color de la interfaz del asistente",
      "Configurar el idioma del teclado",
    ],
    correctIndex: 1,
    explanation:
      "El tono define la personalidad comunicativa del asistente: si es formal para un despacho legal, amigable para una tienda de ropa, o técnico para desarrolladores.",
  },
  {
    question: "¿Cuál de las siguientes es una buena práctica para mantener actualizada la base de conocimiento de tu asistente?",
    options: [
      "Nunca actualizar los documentos una vez publicado el asistente",
      "Revisar y actualizar los documentos periódicamente cuando cambien productos, precios o políticas",
      "Borrar toda la base de conocimiento cada semana",
      "Agregar todos los documentos posibles sin importar su relevancia",
    ],
    correctIndex: 1,
    explanation:
      "La base de conocimiento debe mantenerse actualizada. Documentos desactualizados pueden hacer que el asistente brinde información incorrecta sobre precios, políticas o productos.",
  },
  {
    question: "¿Qué es el GPT Store de OpenAI?",
    options: [
      "Una tienda donde compras hardware de OpenAI",
      "Un marketplace donde los creadores pueden publicar y compartir sus Custom GPTs con otros usuarios",
      "Un lugar para descargar actualizaciones de ChatGPT",
      "Una plataforma exclusiva para programadores",
    ],
    correctIndex: 1,
    explanation:
      "El GPT Store es el marketplace de OpenAI donde los usuarios con suscripción Plus pueden publicar y descubrir Custom GPTs creados por la comunidad.",
  },
  {
    question: "¿Qué opciones de acceso puedes configurar al compartir tu Custom GPT?",
    options: [
      "Solo público o eliminado",
      "Privado (solo tú), con enlace (quien tenga el link) o público (todos en el GPT Store)",
      "Solo acceso por contraseña numérica",
      "Solo puede ser público o privado, no hay opción de enlace",
    ],
    correctIndex: 1,
    explanation:
      "Los Custom GPTs ofrecen tres niveles de acceso: solo para ti (privado), para quien tenga el enlace, o público en el GPT Store.",
  },
  {
    question: "Quieres crear un asistente que ayude a nuevos empleados a conocer los procesos internos de tu empresa. ¿Qué tipo de acceso deberías configurar?",
    options: [
      "Público en el GPT Store para que cualquiera lo use",
      "Privado con enlace compartido solo con empleados, para mantener la confidencialidad de los documentos internos",
      "Sin acceso a ningún documento",
      "Público porque la transparencia siempre es mejor",
    ],
    correctIndex: 1,
    explanation:
      "Para uso interno con documentos confidenciales, lo correcto es configurar acceso privado o por enlace restringido, no publicarlo abiertamente.",
  },
  {
    question: "¿Cuál de estas capacidades NO puedes habilitar en un Custom GPT?",
    options: [
      "Búsqueda en internet (web browsing)",
      "Generación de imágenes con DALL-E",
      "Acceso a la cuenta bancaria de los usuarios",
      "Interpretación y ejecución de código Python",
    ],
    correctIndex: 2,
    explanation:
      "Las capacidades disponibles incluyen búsqueda web, DALL-E y ejecución de código. Los Custom GPTs no pueden acceder a cuentas bancarias ni datos financieros personales.",
  },
  {
    question: "¿Cuándo es recomendable usar Claude Projects en lugar de un Custom GPT?",
    options: [
      "Cuando quieres publicar tu asistente en una tienda pública",
      "Cuando trabajas dentro del ecosistema de Anthropic/Claude y necesitas proyectos con contexto persistente y colaboración",
      "Cuando necesitas generar imágenes con DALL-E",
      "Claude Projects y Custom GPTs son exactamente lo mismo",
    ],
    correctIndex: 1,
    explanation:
      "Claude Projects es ideal para usuarios del ecosistema Anthropic que necesitan contexto persistente, instrucciones compartidas y organización de conversaciones por proyecto.",
  },
  {
    question: "En las instrucciones de tu asistente escribes: 'Si el usuario pregunta por la competencia, responde amablemente que no puedes comentar sobre otras empresas'. ¿Qué tipo de configuración es esta?",
    options: [
      "Una capacidad técnica",
      "Una restricción de comportamiento (guardrail)",
      "Un documento de conocimiento",
      "Una acción de API",
    ],
    correctIndex: 1,
    explanation:
      "Esta es una restricción de comportamiento o guardrail: una regla explícita que limita qué puede y qué no puede hacer o decir el asistente.",
  },
  {
    question: "¿Cuál es la mejor manera de indicarle el formato de respuesta a tu asistente?",
    options: [
      "No es necesario, el asistente siempre elige el mejor formato",
      "Incluir en las instrucciones ejemplos explícitos del formato esperado (por ejemplo, 'responde siempre con: 1) Respuesta directa 2) Justificación 3) Próximos pasos')",
      "Usar solo emojis para indicar el formato",
      "Cambiar el modelo de IA subyacente",
    ],
    correctIndex: 1,
    explanation:
      "Proporcionar ejemplos explícitos del formato de respuesta en las instrucciones es la forma más efectiva de garantizar consistencia en las respuestas del asistente.",
  },
  {
    question: "Tu asistente de soporte técnico frecuentemente inventa soluciones que no existen en tu manual. ¿Cuál es la causa más probable y su solución?",
    options: [
      "El modelo de IA está dañado; reemplázalo",
      "Las instrucciones no restringen suficientemente al asistente para basarse solo en los documentos provistos; agrega la regla 'solo responde basándote en los documentos de conocimiento'",
      "El manual es demasiado largo; elimínalo",
      "El asistente necesita más memoria RAM",
    ],
    correctIndex: 1,
    explanation:
      "Sin una instrucción explícita que restrinja al asistente a usar solo los documentos provistos, el modelo puede alucinar soluciones. Agregar esa restricción resuelve el problema.",
  },
  {
    question: "¿Qué información es fundamental incluir al darle un 'rol' a tu asistente en las instrucciones?",
    options: [
      "La edad y el género del asistente",
      "Quién es (su rol/persona), para qué audiencia trabaja, qué objetivo tiene y cuál es su tono",
      "El nombre del programador que lo creó",
      "La fecha de nacimiento del asistente",
    ],
    correctIndex: 1,
    explanation:
      "Un rol efectivo define quién es el asistente, a quién atiende, cuál es su objetivo principal y cómo se comunica.",
  },
  {
    question: "¿Cuál es el proceso de 'iteración' en el desarrollo de un asistente de IA?",
    options: [
      "Crear el asistente una vez y nunca modificarlo",
      "Ciclo continuo de probar → identificar problemas → mejorar instrucciones/conocimiento → volver a probar",
      "Eliminar el asistente cada semana y crear uno nuevo",
      "Copiar el asistente de otra persona y publicarlo",
    ],
    correctIndex: 1,
    explanation:
      "La iteración es el ciclo de mejora continua: probar con casos reales, identificar fallos, actualizar instrucciones o conocimiento, y repetir hasta lograr el comportamiento deseado.",
  },
  {
    question: "¿Por qué es importante probar tu asistente con preguntas fuera de su tema (off-topic)?",
    options: [
      "Para ver si el asistente sabe de todo",
      "Para verificar que las restricciones funcionan y el asistente rechaza apropiadamente preguntas fuera de su alcance",
      "Las preguntas fuera de tema nunca son un problema",
      "Para aumentar el contexto del asistente",
    ],
    correctIndex: 1,
    explanation:
      "Probar con preguntas off-topic verifica que las restricciones funcionen correctamente y que el asistente redirija educadamente sin intentar responder temas que no le corresponden.",
  },
  {
    question: "¿Qué ventaja tiene crear un asistente personalizado frente a usar ChatGPT directamente?",
    options: [
      "El asistente personalizado siempre es más inteligente que el modelo base",
      "El asistente ya viene configurado con el contexto, tono y conocimiento específico para la tarea, sin necesidad de explicarlo en cada conversación",
      "El asistente personalizado no tiene límite de tokens",
      "Los asistentes personalizados son gratuitos, ChatGPT es de pago",
    ],
    correctIndex: 1,
    explanation:
      "La ventaja principal es la consistencia: el asistente ya tiene cargadas las instrucciones, documentos y configuración, por lo que no hay que recontextualizar en cada sesión.",
  },
  {
    question: "Al publicar un asistente en el GPT Store, ¿qué elemento es más importante para que los usuarios lo encuentren y lo usen?",
    options: [
      "El nombre del asistente en mayúsculas",
      "Una descripción clara que explique exactamente qué hace el asistente y para quién es útil",
      "Usar muchos emojis en la descripción",
      "Publicar el asistente a medianoche",
    ],
    correctIndex: 1,
    explanation:
      "Una descripción precisa y clara que explique el propósito y la audiencia objetivo es clave para que los usuarios correctos encuentren y adopten el asistente.",
  },
  {
    question: "¿Qué significa que un Custom GPT tenga 'conversation starters' (iniciadores de conversación)?",
    options: [
      "Que el asistente solo puede hacer preguntas, no responder",
      "Sugerencias de preguntas iniciales que guían al usuario sobre cómo interactuar con el asistente",
      "Frases automáticas de bienvenida que el asistente repite en bucle",
      "Un sistema de puntos para usuarios frecuentes",
    ],
    correctIndex: 1,
    explanation:
      "Los conversation starters son preguntas o frases sugeridas que aparecen al inicio para que los usuarios entiendan rápidamente qué puede hacer el asistente y cómo usarlo.",
  },
  {
    question: "¿Cuál es un riesgo real de subir documentos internos confidenciales a un Custom GPT público?",
    options: [
      "El documento se borrará automáticamente en 24 horas",
      "Usuarios externos podrían extraer información confidencial haciendo preguntas específicas al asistente",
      "Los documentos no afectan las respuestas del asistente",
      "Solo los empleados de OpenAI pueden ver los documentos",
    ],
    correctIndex: 1,
    explanation:
      "Si publicas un asistente público con documentos confidenciales, cualquier usuario puede extraer esa información con preguntas específicas. Los documentos sensibles solo deben ir en asistentes privados.",
  },
  {
    question: "¿Qué es una 'acción' (Action) en un Custom GPT avanzado?",
    options: [
      "Un botón para reiniciar la conversación",
      "Una integración que permite al asistente llamar a APIs externas para obtener datos en tiempo real o ejecutar acciones",
      "Un tipo de emoji especial",
      "La capacidad de hablar en voz alta",
    ],
    correctIndex: 1,
    explanation:
      "Las Actions son integraciones con APIs externas que permiten al asistente obtener datos en tiempo real (clima, precios, inventario) o ejecutar acciones (crear tickets, enviar emails).",
  },
  {
    question: "Estás creando un asistente de recetas y quieres que responda solo en español y siempre incluya tiempo de preparación. ¿Cómo lo configuras?",
    options: [
      "No es posible forzar el idioma en un Custom GPT",
      "En las instrucciones escribes que debe responder SIEMPRE en español e incluir obligatoriamente tiempo de preparación, ingredientes y pasos en cada receta",
      "Cambiando el idioma de tu navegador",
      "Subiendo un diccionario en español como documento",
    ],
    correctIndex: 1,
    explanation:
      "Las instrucciones del sistema son el lugar correcto para forzar el idioma de respuesta y especificar los elementos que SIEMPRE deben incluirse en cada respuesta.",
  },
  {
    question: "¿Cuál es la diferencia entre un asistente de IA y un chatbot tradicional de árbol de decisiones?",
    options: [
      "No hay ninguna diferencia, son lo mismo",
      "El chatbot tradicional sigue reglas fijas con respuestas predefinidas; el asistente de IA genera respuestas dinámicas y comprende lenguaje natural",
      "El chatbot tradicional es más inteligente",
      "El asistente de IA solo funciona con comandos de voz",
    ],
    correctIndex: 1,
    explanation:
      "Un chatbot de árbol de decisiones tiene respuestas predefinidas y menús fijos. Un asistente de IA comprende lenguaje natural libre y genera respuestas dinámicas adaptadas al contexto.",
  },
  {
    question: "Después de publicar tu asistente, un usuario reporta que responde de forma inapropiada ante ciertos mensajes. ¿Cuál es el proceso correcto?",
    options: [
      "Ignorar el reporte porque el usuario probablemente lo usó mal",
      "Reproducir el problema, ajustar las instrucciones o restricciones del asistente, probar los cambios y actualizar la versión publicada",
      "Eliminar al usuario del sistema",
      "Publicar un nuevo asistente desde cero con un nombre diferente",
    ],
    correctIndex: 1,
    explanation:
      "El proceso correcto es: reproducir el problema, identificar qué instrucción falta o está mal configurada, corregirla, probar y actualizar. Los asistentes publicados pueden editarse.",
  },
], curso10QuizEn);;

// ─── CURSO 11: Automatiza con IA ─────────────────────────────────────────────
export const curso11Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Qué es la automatización en el contexto de herramientas de productividad?",
    options: [
      "Reemplazar a todos los empleados con robots físicos",
      "Configurar flujos donde una acción desencadena automáticamente otras acciones sin intervención manual",
      "Programar en lenguaje de máquina para optimizar hardware",
      "Usar macros de Excel únicamente",
    ],
    correctIndex: 1,
    explanation:
      "La automatización conecta apps y servicios de modo que cuando ocurre un evento (trigger), se ejecutan acciones predefinidas automáticamente, eliminando tareas repetitivas.",
  },
  {
    question: "En el contexto de automatización, ¿qué es un 'trigger' (disparador)?",
    options: [
      "Un error en el flujo de automatización",
      "El evento que inicia el flujo automatizado (ej. recibir un email, nuevo formulario enviado)",
      "El botón de pausa de la automatización",
      "El resultado final de la automatización",
    ],
    correctIndex: 1,
    explanation:
      "Un trigger es el evento inicial que activa la automatización, como recibir un email, un nuevo lead en un CRM, o una hora específica del día.",
  },
  {
    question: "¿Cuál de estas tareas es un candidato ideal para automatizar?",
    options: [
      "Escribir una estrategia creativa única para un cliente importante",
      "Copiar manualmente datos de formularios web a una hoja de cálculo todos los días",
      "Diseñar el logo de tu empresa",
      "Tomar decisiones legales complejas",
    ],
    correctIndex: 1,
    explanation:
      "Copiar datos de formularios a una hoja de cálculo es repetitivo, basado en reglas y sin juicio creativo necesario: el candidato perfecto para automatización.",
  },
  {
    question: "¿Qué es Zapier?",
    options: [
      "Un lenguaje de programación para IA",
      "Una plataforma no-code que conecta más de 7,000 aplicaciones para crear flujos de trabajo automatizados (Zaps)",
      "Un modelo de IA similar a GPT-4",
      "Un sistema operativo para automatización industrial",
    ],
    correctIndex: 1,
    explanation:
      "Zapier es una plataforma no-code que permite conectar miles de aplicaciones creando flujos automatizados llamados Zaps, sin necesidad de programar.",
  },
  {
    question: "En Zapier, un 'Zap' está compuesto por:",
    options: [
      "Solo un trigger sin acciones",
      "Un trigger (disparador) y una o más acciones que se ejecutan como consecuencia",
      "Solo acciones sin trigger",
      "Un modelo de IA y una base de datos",
    ],
    correctIndex: 1,
    explanation:
      "Un Zap siempre tiene al menos un trigger (lo que inicia el flujo) y una o más acciones (lo que sucede como consecuencia).",
  },
  {
    question: "¿Cómo puedes integrar IA en un flujo de Zapier?",
    options: [
      "No es posible integrar IA en Zapier",
      "Usando el paso de OpenAI/ChatGPT o Claude como una acción intermedia que procesa o transforma datos",
      "Solo conectando Zapier a un robot físico",
      "Comprando una licencia especial de IA de Zapier que cuesta más de $10,000",
    ],
    correctIndex: 1,
    explanation:
      "Zapier tiene integraciones nativas con OpenAI, ChatGPT y Claude que permiten agregar pasos de IA en el flujo para resumir, clasificar, generar texto o transformar datos.",
  },
  {
    question: "¿Cuál es la principal diferencia entre Zapier y Make (antes Integromat)?",
    options: [
      "Make es gratuito, Zapier siempre es de pago",
      "Make ofrece flujos visuales más complejos con ramificaciones, iteraciones y lógica condicional más avanzada; Zapier es más simple y rápido de configurar",
      "Zapier conecta más apps pero Make no conecta ninguna",
      "Son exactamente iguales con diferente nombre",
    ],
    correctIndex: 1,
    explanation:
      "Make (Integromat) tiene una interfaz visual más poderosa con soporte para lógica compleja, ramificaciones y webhooks avanzados. Zapier prioriza la simplicidad y facilidad de uso.",
  },
  {
    question: "¿Qué es n8n y en qué se diferencia de Zapier y Make?",
    options: [
      "Es un modelo de lenguaje de IA",
      "Es una herramienta de automatización de código abierto que puedes instalar en tu propio servidor, ofreciendo control total y sin límites de operaciones",
      "Es una extensión de Chrome para automatizar el navegador",
      "Es el nuevo nombre de Zapier",
    ],
    correctIndex: 1,
    explanation:
      "n8n es open-source y self-hosteable: puedes instalarlo en tu servidor, tienes control total de tus datos, sin costos por operación y con capacidades técnicas avanzadas.",
  },
  {
    question: "¿Qué es un webhook en el contexto de automatización?",
    options: [
      "Un tipo de cable físico para conectar computadoras",
      "Una URL que recibe datos en tiempo real cuando ocurre un evento en otra aplicación",
      "Un error de programación en flujos de automatización",
      "Un tipo de cookie de rastreo web",
    ],
    correctIndex: 1,
    explanation:
      "Un webhook es una URL especial que escucha datos entrantes. Cuando una app envía datos a esa URL (por ejemplo, al recibir un pago), la automatización se activa.",
  },
  {
    question: "Quieres que cuando llegue un email de soporte, la IA lo clasifique automáticamente como 'urgente', 'normal' o 'baja prioridad' y lo reenvíe al equipo correcto. ¿Qué herramienta usarías?",
    options: [
      "Solo Outlook, sin automatización",
      "Zapier o Make con un paso de IA (ChatGPT/Claude) para clasificar el texto del email y enrutarlo al equipo correspondiente",
      "Imprimir los emails y clasificarlos manualmente",
      "Solo es posible con programación avanzada en Python",
    ],
    correctIndex: 1,
    explanation:
      "Este es un caso perfecto para Zapier/Make + IA: trigger en email recibido → paso de IA clasifica el contenido → acción enruta al equipo correcto según la clasificación.",
  },
  {
    question: "¿Qué es la automatización de respuestas de email con IA?",
    options: [
      "Bloquear todos los emails entrantes automáticamente",
      "Usar IA para generar borradores de respuesta personalizados o respuestas automáticas basadas en el contenido del email recibido",
      "Reenviar todos los emails a otro servidor",
      "Solo responder emails los lunes",
    ],
    correctIndex: 1,
    explanation:
      "La automatización de respuestas usa IA para analizar el contenido del email y generar una respuesta apropiada, ya sea como borrador para revisión humana o como respuesta automática directa.",
  },
  {
    question: "¿Cuál es el riesgo principal de configurar respuestas de email completamente automáticas sin revisión humana?",
    options: [
      "No hay ningún riesgo, la IA siempre responde perfectamente",
      "La IA puede generar respuestas incorrectas, inapropiadas o que no reflejen la política real de la empresa en casos inusuales",
      "Los emails se responden demasiado rápido",
      "El email automático gasta mucha electricidad",
    ],
    correctIndex: 1,
    explanation:
      "Sin revisión humana, la IA puede alucinar información, responder incorrectamente en casos edge o enviar respuestas inapropiadas. Se recomienda empezar con borradores que un humano aprueba.",
  },
  {
    question: "¿Qué es un 'resumen diario automatizado' y para qué sirve?",
    options: [
      "Un documento que se imprime automáticamente cada día",
      "Un flujo que recopila automáticamente datos clave del día (emails, métricas, noticias) y genera un resumen consolidado enviado por email o Slack",
      "Una alarma que despierta al equipo a las 7am",
      "Un backup automático de archivos",
    ],
    correctIndex: 1,
    explanation:
      "Un resumen diario automatizado recopila información de múltiples fuentes (CRM, email, analytics) y usa IA para sintetizarla en un briefing útil enviado automáticamente al equipo.",
  },
  {
    question: "¿Qué es el 'vibe coding'?",
    options: [
      "Programar mientras escuchas música",
      "Describir en lenguaje natural lo que quieres que haga una aplicación y dejar que la IA genere el código por ti",
      "Un estilo de programación orientada a objetos",
      "Código que detecta el estado de ánimo del usuario",
    ],
    correctIndex: 1,
    explanation:
      "El vibe coding es el proceso de describir en lenguaje natural lo que quieres construir y usar herramientas de IA como Cursor, Bolt o v0 para que generen el código.",
  },
  {
    question: "¿Cuál de estas herramientas está diseñada específicamente para el 'vibe coding'?",
    options: [
      "Microsoft Word",
      "Cursor, Bolt.new, Replit Agent y v0 de Vercel",
      "Adobe Photoshop",
      "VLC Media Player",
    ],
    correctIndex: 1,
    explanation:
      "Cursor, Bolt.new, Replit Agent y v0 son herramientas diseñadas para generar aplicaciones completas a partir de descripciones en lenguaje natural, sin escribir código manualmente.",
  },
  {
    question: "Quieres crear una landing page sin saber programar. ¿Qué herramienta de vibe coding es más apropiada?",
    options: [
      "n8n, que es un orquestador de flujos",
      "v0 de Vercel o Bolt.new, que generan interfaces web completas a partir de una descripción",
      "Zapier, que es para conectar aplicaciones",
      "Make, que es para automatizaciones",
    ],
    correctIndex: 1,
    explanation:
      "v0 de Vercel y Bolt.new están optimizados para crear interfaces web y landing pages a partir de descripciones en lenguaje natural, generando código React/HTML listo para usar.",
  },
  {
    question: "¿Cuál es la diferencia entre Zapier y n8n en términos de modelo de negocio?",
    options: [
      "Ambas son completamente gratuitas",
      "Zapier es SaaS de pago con plan gratuito limitado; n8n es open-source, auto-hosteable y gratuito en tu servidor (con opción cloud de pago)",
      "n8n cuesta más que Zapier",
      "Ambas requieren programación avanzada",
    ],
    correctIndex: 1,
    explanation:
      "Zapier cobra por el número de tareas/operaciones como servicio en la nube. n8n es open-source y puede correr en tu servidor sin costo por operaciones, aunque tienen también versión cloud.",
  },
  {
    question: "¿Qué significa 'branching' (ramificación) en un flujo de Make/n8n?",
    options: [
      "Eliminar un paso del flujo",
      "Que el flujo puede tomar diferentes caminos según condiciones lógicas (si X entonces Y, sino Z)",
      "Copiar el flujo a otro servidor",
      "Detener la automatización permanentemente",
    ],
    correctIndex: 1,
    explanation:
      "El branching permite que la automatización tome rutas diferentes según condiciones: si el email es de un cliente VIP, va a un camino; si es general, va a otro.",
  },
  {
    question: "¿Cuál de estos es un ejemplo de automatización de 'agregación de datos' para un reporte?",
    options: [
      "Leer un libro en voz alta",
      "Recopilar automáticamente datos de Google Analytics, el CRM y el email cada mañana, y consolidarlos en una hoja de cálculo de reporte",
      "Enviar un email de felicitación de cumpleaños manualmente",
      "Instalar una actualización de software",
    ],
    correctIndex: 1,
    explanation:
      "La agregación automatizada extrae datos de múltiples fuentes (Analytics, CRM, email) y los consolida en un formato de reporte sin intervención manual.",
  },
  {
    question: "¿Qué es Replit Agent y para qué sirve en el vibe coding?",
    options: [
      "Un antivirus online",
      "Un entorno de desarrollo basado en IA que puede crear, ejecutar y depurar aplicaciones completas a partir de instrucciones en lenguaje natural",
      "Un servicio de almacenamiento de archivos",
      "Un asistente de reuniones de video",
    ],
    correctIndex: 1,
    explanation:
      "Replit Agent es un agente de IA dentro de Replit que puede crear proyectos completos, escribir código, instalarlo y ejecutarlo, todo a partir de una descripción en lenguaje natural.",
  },
  {
    question: "Un emprendedor quiere automatizar el proceso de onboarding: cuando alguien llena un formulario, recibe un email de bienvenida personalizado, se agrega al CRM y se crea una tarea para el equipo de ventas. ¿Cuántos pasos tiene este flujo?",
    options: [
      "1 paso",
      "4 pasos: trigger (formulario) + acción 1 (email) + acción 2 (CRM) + acción 3 (tarea)",
      "Solo 2 pasos",
      "No es posible hacer esto con herramientas no-code",
    ],
    correctIndex: 1,
    explanation:
      "Este flujo tiene 1 trigger (formulario enviado) y 3 acciones: enviar email personalizado, agregar al CRM y crear tarea. Es perfectamente configurable en Zapier o Make.",
  },
  {
    question: "¿Cuál de estas afirmaciones sobre la automatización con IA es VERDADERA?",
    options: [
      "Las automatizaciones con IA nunca cometen errores",
      "Es buena práctica agregar pasos de validación o revisión humana en automatizaciones críticas que involucran comunicaciones externas",
      "Una vez configurada una automatización, nunca necesita mantenimiento",
      "La automatización reemplaza completamente la necesidad de tener equipos de trabajo",
    ],
    correctIndex: 1,
    explanation:
      "Para automatizaciones críticas (respuestas a clientes, envíos de contratos), es buena práctica incluir un paso de revisión humana antes de ejecutar la acción final.",
  },
  {
    question: "¿Qué es un flujo de 'clasificación de soporte' con IA en Zapier?",
    options: [
      "Un flujo que elimina todos los tickets de soporte automáticamente",
      "Un flujo que recibe tickets de soporte, usa IA para categorizarlos por tipo y urgencia, y los asigna al agente o cola correcta",
      "Un formulario para evaluar a los agentes de soporte",
      "Un sistema de facturación automática",
    ],
    correctIndex: 1,
    explanation:
      "Un flujo de clasificación recibe tickets (trigger), pasa el contenido a un paso de IA que determina categoría y urgencia, y luego enruta el ticket al equipo correcto (acción).",
  },
  {
    question: "¿Cuál es la ventaja de usar Make sobre Zapier para automatizaciones complejas?",
    options: [
      "Make es más barato en todos los casos",
      "Make permite flujos visuales con lógica condicional compleja, iteraciones sobre listas de datos, manejo de errores avanzado y mayor control sobre el flujo",
      "Zapier no puede conectarse a Google",
      "Make funciona sin internet",
    ],
    correctIndex: 1,
    explanation:
      "Make brilla en automatizaciones complejas por su editor visual tipo nodo, soporte para iteraciones, rutas condicionales múltiples y manejo de errores más granular.",
  },
  {
    question: "Estás usando vibe coding con Cursor para crear un generador de facturas. Le describes la app en español. ¿Qué hace Cursor a continuación?",
    options: [
      "Muestra un error porque no entiende español",
      "Genera el código de la aplicación (HTML, CSS, JavaScript o Python) basándose en tu descripción, que puedes revisar y ejecutar",
      "Te cobra $500 dólares por el código generado",
      "Crea un video tutorial sobre cómo hacer facturas",
    ],
    correctIndex: 1,
    explanation:
      "Cursor (y otras herramientas de vibe coding) procesan la descripción en lenguaje natural y generan código funcional que puedes revisar, modificar y ejecutar.",
  },
  {
    question: "¿Qué ventaja tiene automatizar la generación de reportes con IA frente a hacerlos manualmente?",
    options: [
      "Los reportes automatizados siempre son más precisos que los manuales",
      "Ahorra tiempo repetitivo, garantiza consistencia de formato y puede incluir análisis e insights generados por IA además de los datos crudos",
      "No hay ninguna ventaja, los reportes manuales son mejores",
      "Los reportes automatizados se generan pero nadie los lee",
    ],
    correctIndex: 1,
    explanation:
      "La automatización elimina el tiempo de recopilación manual, garantiza que el reporte siempre tenga el mismo formato y puede añadir capas de análisis e interpretación con IA.",
  },
  {
    question: "¿Qué es una 'iteración' en un flujo de Make o n8n?",
    options: [
      "Un error del sistema",
      "Un paso que procesa cada elemento de una lista por separado (por ejemplo, procesar cada email de una lista uno por uno)",
      "El número de veces que el flujo ha corrido en total",
      "Una pausa programada en la automatización",
    ],
    correctIndex: 1,
    explanation:
      "La iteración permite que un flujo procese listas de datos elemento por elemento: por ejemplo, tomar 50 emails y aplicar la misma acción de IA a cada uno individualmente.",
  },
  {
    question: "¿Cuál es el primer paso recomendado antes de automatizar un proceso?",
    options: [
      "Comprar inmediatamente una suscripción premium de Zapier",
      "Mapear y documentar el proceso actual manualmente para entender todos sus pasos antes de automatizarlo",
      "Automatizar sin entender el proceso, la IA lo resuelve sola",
      "Eliminar el proceso actual y empezar desde cero",
    ],
    correctIndex: 1,
    explanation:
      "Antes de automatizar, debes entender perfectamente el proceso manual: qué datos entran, qué transformaciones ocurren y qué sale. Sin este mapeo, la automatización replicará problemas.",
  },
  {
    question: "¿Qué es un 'filtro' en Zapier o Make?",
    options: [
      "Una herramienta para eliminar datos duplicados de una base de datos",
      "Una condición que determina si el flujo debe continuar o detenerse según si los datos cumplen ciertos criterios",
      "Un sistema de seguridad contra hackers",
      "Un tipo especial de trigger",
    ],
    correctIndex: 1,
    explanation:
      "Un filtro es una condición lógica que evalúa si el flujo debe continuar. Por ejemplo: 'solo continuar si el email contiene la palabra urgente' evita procesar emails innecesarios.",
  },
  {
    question: "¿Cuál de estos escenarios describe mejor el 'vibe coding' exitoso?",
    options: [
      "Un programador experto escribe código durante 40 horas para crear una app",
      "Un emprendedor sin conocimientos de programación describe en español su idea de app, la herramienta de IA genera el código, el emprendedor prueba y refina iterativamente",
      "Un diseñador crea mockups pero no puede ver la app funcionar",
      "Un desarrollador usa Stack Overflow para copiar código",
    ],
    correctIndex: 1,
    explanation:
      "El vibe coding exitoso es cuando alguien sin experiencia en programación describe lo que necesita en lenguaje natural y colabora con la IA para iterar hasta tener una app funcional.",
  },
  {
    question: "¿Cuál es la limitación más importante a considerar al hacer vibe coding con herramientas de IA?",
    options: [
      "Las herramientas solo funcionan en Windows",
      "El código generado puede tener errores de seguridad, no seguir mejores prácticas y necesitar revisión por un desarrollador antes de ponerlo en producción real",
      "Solo se puede crear código en inglés",
      "El vibe coding requiere memorizar comandos específicos",
    ],
    correctIndex: 1,
    explanation:
      "El código generado por vibe coding puede funcionar para prototipos pero puede tener vulnerabilidades de seguridad, problemas de rendimiento o deuda técnica que requiere revisión profesional antes de producción.",
  },
  {
    question: "¿Cómo puedes automatizar el envío de un resumen semanal de noticias del sector a tu equipo?",
    options: [
      "Leer noticias manualmente y copiarlas en un email cada viernes",
      "Configurar un flujo que cada lunes obtiene noticias de RSS o APIs de noticias, las pasa a IA para resumirlas, y envía automáticamente el digest por email o Slack",
      "No es posible automatizar la lectura de noticias",
      "Contratar a alguien para que lea noticias y las reenvíe",
    ],
    correctIndex: 1,
    explanation:
      "Puedes automatizar completamente este proceso: trigger programado (cada lunes) → obtener noticias de RSS/API → paso de IA para resumir → enviar resumen por email/Slack.",
  },
  {
    question: "¿Qué significa 'no-code' en el contexto de herramientas como Zapier?",
    options: [
      "Que la herramienta no funciona con código",
      "Que puedes crear automatizaciones y aplicaciones sin escribir código de programación, usando interfaces visuales",
      "Que la herramienta es gratuita",
      "Que solo funciona con un tipo específico de datos",
    ],
    correctIndex: 1,
    explanation:
      "No-code significa que puedes construir flujos y aplicaciones complejas usando interfaces gráficas de arrastrar y soltar, sin necesidad de escribir una sola línea de código.",
  },
  {
    question: "¿Cuál es el beneficio principal de usar IA en el paso de 'acción' de un flujo de Zapier?",
    options: [
      "La IA hace el flujo más lento pero más seguro",
      "Permite transformar, enriquecer o analizar datos de forma inteligente antes de pasarlos a la siguiente acción, añadiendo capacidad de razonamiento al flujo",
      "La IA solo puede usarse como trigger, no como acción",
      "Reduce el costo de la suscripción de Zapier",
    ],
    correctIndex: 1,
    explanation:
      "Usar IA como acción intermedia permite transformar datos inteligentemente: resumir texto, clasificar contenido, generar respuestas personalizadas o extraer información estructurada de texto libre.",
  },
  {
    question: "¿Cuál es la diferencia entre automatización 'push' y automatización 'pull'?",
    options: [
      "No hay diferencia, son términos intercambiables",
      "Push: la automatización se activa cuando otra app envía datos (webhook); Pull: la automatización consulta periódicamente si hay datos nuevos (polling)",
      "Push es más lento y Pull es más rápido siempre",
      "Push solo funciona con Zapier y Pull solo con n8n",
    ],
    correctIndex: 1,
    explanation:
      "Push (webhooks) es más eficiente porque reacciona en tiempo real. Pull (polling) consulta cada cierto tiempo si hay cambios, consumiendo más recursos pero útil cuando la app no soporta webhooks.",
  },
], curso11QuizEn);

// ─── CURSO 12: Introducción a las APIs de IA ─────────────────────────────────
export const curso12Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Qué es una API en el contexto de los servicios de IA?",
    options: [
      "Un lenguaje de programación especial para inteligencia artificial",
      "Una interfaz que permite que tu aplicación se comunique con un modelo de IA externo enviando solicitudes y recibiendo respuestas",
      "Un tipo de base de datos para almacenar modelos de IA",
      "El nombre del chip que ejecuta los modelos de IA",
    ],
    correctIndex: 1,
    explanation:
      "Una API es el puente de comunicación entre tu aplicación y el servicio de IA. Tú envías una solicitud con tu pregunta/prompt y el servicio devuelve la respuesta del modelo.",
  },
  {
    question: "En la analogía del restaurante para explicar una API: tú eres el cliente, la cocina es el modelo de IA. ¿Qué representa el mesero?",
    options: [
      "La base de datos del restaurante",
      "La API, que lleva tu pedido a la cocina y te trae el resultado sin que entres a la cocina",
      "El propietario del restaurante",
      "El menú del restaurante",
    ],
    correctIndex: 1,
    explanation:
      "En la analogía: tú (cliente) haces una solicitud, la API (mesero) la lleva al modelo (cocina) y te devuelve el resultado, sin que tú interactúes directamente con el modelo.",
  },
  {
    question: "¿Qué es una API Key?",
    options: [
      "Una contraseña para el wi-fi del servidor de IA",
      "Un identificador único y secreto que autentica tu aplicación ante el servicio de IA y permite rastrear y cobrar tu uso",
      "El nombre del modelo de IA que estás usando",
      "Un tipo de variable en Python",
    ],
    correctIndex: 1,
    explanation:
      "Una API Key es como tu credencial de acceso: identifica quién hace las solicitudes, permite al proveedor cobrar el uso y controlar el acceso. Debe mantenerse secreta.",
  },
  {
    question: "¿Por qué NUNCA debes incluir tu API Key directamente en el código fuente que subes a GitHub?",
    options: [
      "Porque GitHub no acepta archivos de código con API Keys",
      "Porque cualquier persona que vea tu repositorio puede usar tu Key para hacer solicitudes a tu costa y generar gastos inesperados o exposición de datos",
      "Porque hace que el código se ejecute más lento",
      "Las API Keys en el código no son un problema si el repositorio es privado",
    ],
    correctIndex: 1,
    explanation:
      "Si tu API Key queda expuesta en GitHub (incluso en repositorio privado), bots maliciosos la pueden encontrar y usarla para hacer miles de solicitudes que te cobran a ti.",
  },
  {
    question: "¿Cuál es la forma correcta de proteger una API Key en un proyecto de código?",
    options: [
      "Escribirla directamente en el código pero en letras minúsculas",
      "Guardarla en una variable de entorno (.env) que esté listada en .gitignore para no subirla al repositorio",
      "Compartirla con tu equipo por WhatsApp",
      "Incluirla en un comentario del código para recordarla",
    ],
    correctIndex: 1,
    explanation:
      "La práctica estándar es guardar la API Key en un archivo .env, agregar .env al .gitignore para que nunca se suba, y leer la clave desde variables de entorno en el código.",
  },
  {
    question: "¿Qué es un archivo .gitignore y para qué sirve en el contexto de API Keys?",
    options: [
      "Un archivo que elimina automáticamente las API Keys del código",
      "Un archivo que le dice a Git qué archivos NO debe rastrear ni subir al repositorio, incluyendo el .env con las API Keys",
      "Un archivo de configuración de GitHub para equipos",
      "Un archivo que encripta las API Keys automáticamente",
    ],
    correctIndex: 1,
    explanation:
      ".gitignore lista los archivos/carpetas que Git debe ignorar. Incluyendo .env en el .gitignore garantizas que tus credenciales nunca se suban accidentalmente al repositorio.",
  },
  {
    question: "¿Cuál es el primer paso para hacer tu primera llamada a la API de Gemini de Google?",
    options: [
      "Descargar e instalar Gemini en tu computadora",
      "Obtener una API Key en Google AI Studio (aistudio.google.com) y configurar el entorno de desarrollo",
      "Contratar un servidor en Google Cloud por $500 mensuales",
      "Completar un curso de Python de 6 meses",
    ],
    correctIndex: 1,
    explanation:
      "El primer paso es obtener una API Key gratuita en Google AI Studio. Con esa Key puedes hacer tu primera solicitud con curl o Python en minutos.",
  },
  {
    question: "Al hacer una llamada a la API de Gemini con curl, ¿qué incluyes en el cuerpo (body) de la solicitud?",
    options: [
      "Solo tu nombre de usuario",
      "El prompt o mensaje que quieres enviar al modelo, en formato JSON",
      "El código fuente del modelo de Gemini",
      "La API Key va dentro del body",
    ],
    correctIndex: 1,
    explanation:
      "En el body de la solicitud envías el contenido en formato JSON, incluyendo el texto del prompt/mensaje. La API Key generalmente va en el header o como parámetro de URL, no en el body.",
  },
  {
    question: "¿Qué ventaja principal ofrece la API de Groq frente a otras APIs de IA?",
    options: [
      "Es la única API que ofrece modelos de texto gratuitos",
      "Ofrece velocidades de inferencia extremadamente rápidas gracias a su hardware LPU, ideal para aplicaciones que requieren respuestas en tiempo real",
      "Groq es el modelo de IA más inteligente disponible",
      "Groq no tiene límites de tokens",
    ],
    correctIndex: 1,
    explanation:
      "Groq usa chips LPU (Language Processing Unit) diseñados específicamente para inferencia de LLMs, logrando velocidades de respuesta muy superiores a GPU tradicionales, ideal para apps en tiempo real.",
  },
  {
    question: "En Groq puedes usar modelos de código abierto como Llama, Mixtral y Gemma. ¿Qué significa que un modelo sea 'de código abierto'?",
    options: [
      "Que el modelo puede generar código de programación",
      "Que los pesos del modelo están disponibles públicamente, cualquiera puede descargarlo, estudiarlo y ejecutarlo localmente",
      "Que el modelo es gratuito para uso comercial sin restricciones",
      "Que el modelo fue creado por la comunidad de Wikipedia",
    ],
    correctIndex: 1,
    explanation:
      "Un modelo open-source tiene sus pesos públicamente disponibles. Puedes descargarlo y ejecutarlo en tu hardware. Sin embargo, open-source no siempre significa uso comercial libre; hay diferentes licencias.",
  },
  {
    question: "¿Qué es un 'token' en el contexto de los modelos de lenguaje?",
    options: [
      "Una moneda virtual para pagar API Keys",
      "La unidad básica de texto que procesa un LLM; aproximadamente una palabra o parte de una palabra",
      "Un tipo de variable en Python",
      "El nombre del chip que ejecuta los modelos",
    ],
    correctIndex: 1,
    explanation:
      "Un token es la unidad de procesamiento de texto en LLMs. 'Hola' puede ser 1 token; 'automatización' puede ser 3-4 tokens. Los modelos cobran por número de tokens procesados.",
  },
  {
    question: "¿Cuál es la diferencia entre tokens de 'input' (entrada) y tokens de 'output' (salida)?",
    options: [
      "No hay diferencia, se cobran igual",
      "Los tokens de input son los que envías (tu prompt + contexto); los de output son los que genera el modelo (su respuesta). Generalmente los de output cuestan más",
      "Los tokens de input son gratis, solo se cobran los de output",
      "Los tokens de input son palabras, los de output son caracteres",
    ],
    correctIndex: 1,
    explanation:
      "Los tokens de input son los de tu solicitud (prompt, historial de conversación); los de output son los generados por el modelo. Los de output suelen costar 3-5x más por millón.",
  },
  {
    question: "Si una API cobra $1.00 por 1 millón de tokens de input y envías un prompt de 1,000 tokens, ¿cuánto cuesta esa solicitud?",
    options: [
      "$1.00 dólares",
      "$0.001 dólares (un décimo de centavo)",
      "$1,000 dólares",
      "$0.10 dólares",
    ],
    correctIndex: 1,
    explanation:
      "Si el costo es $1 por 1,000,000 tokens, entonces 1,000 tokens = $0.001. Las APIs de IA son extremadamente baratas para uso individual.",
  },
  {
    question: "¿Qué es el 'context window' (ventana de contexto) de un modelo de IA?",
    options: [
      "El tamaño de la pantalla donde se muestra la IA",
      "El número máximo de tokens que el modelo puede procesar en una sola solicitud, incluyendo el historial de conversación",
      "El tiempo máximo que tarda el modelo en responder",
      "El límite de solicitudes por minuto",
    ],
    correctIndex: 1,
    explanation:
      "La ventana de contexto define cuánta información puede ver el modelo en una sola interacción. Un contexto de 128K tokens puede procesar libros enteros. Exceder el límite trunca información.",
  },
  {
    question: "¿Cuál de estos es un ejemplo del intercambio entre velocidad y calidad (speed vs quality tradeoff) en modelos de IA?",
    options: [
      "Usar un modelo más grande siempre da mejores resultados sin ningún costo adicional",
      "Usar Llama-3-8B en Groq es muy rápido y barato pero menos capaz que GPT-4o que es más lento y costoso; eliges según la tarea",
      "La velocidad y la calidad siempre van juntas en modelos de IA",
      "Solo los modelos de pago tienen buena calidad",
    ],
    correctIndex: 1,
    explanation:
      "El tradeoff es real: modelos pequeños/rápidos (Llama 8B) son económicos e instantáneos pero menos capaces. Modelos grandes (GPT-4o, Claude 3.5) son más inteligentes pero más lentos y costosos.",
  },
  {
    question: "¿Qué es el 'streaming' en el contexto de las respuestas de APIs de IA?",
    options: [
      "Ver series de Netflix mientras programas",
      "Recibir la respuesta del modelo token por token en tiempo real, en lugar de esperar a que se complete toda la respuesta antes de mostrarla",
      "Transmitir el modelo de IA por internet",
      "Guardar las respuestas en un stream de datos para análisis posterior",
    ],
    correctIndex: 1,
    explanation:
      "El streaming permite mostrar la respuesta mientras se genera, como si la IA estuviera escribiendo en tiempo real. Mejora enormemente la experiencia del usuario en chatbots.",
  },
  {
    question: "¿Cuál es el componente principal de un chatbot embebido en una página web?",
    options: [
      "Solo HTML sin JavaScript",
      "Un widget de frontend (interfaz de chat) y un backend que maneja las llamadas a la API de IA de forma segura",
      "La API Key directamente en el JavaScript del frontend",
      "Una base de datos SQL obligatoria",
    ],
    correctIndex: 1,
    explanation:
      "Un chatbot web tiene: frontend (el widget de chat visible), backend (servidor que guarda la API Key de forma segura y hace las llamadas a la API de IA) y la API de IA.",
  },
  {
    question: "¿Por qué NO debes llamar a la API de IA directamente desde el código JavaScript del frontend de tu sitio web?",
    options: [
      "Porque JavaScript no puede hacer llamadas HTTP",
      "Porque tu API Key quedaría expuesta en el código del navegador, visible para cualquier usuario que inspeccione la página",
      "Porque los navegadores bloquean todas las llamadas a APIs externas",
      "Porque es técnicamente imposible",
    ],
    correctIndex: 1,
    explanation:
      "El código JavaScript del frontend es visible por cualquier usuario. Si pones la API Key ahí, cualquiera puede verla y usarla. La Key debe estar solo en el backend.",
  },
  {
    question: "En una arquitectura de chatbot web, ¿qué hace el 'backend'?",
    options: [
      "Muestra la interfaz visual del chat al usuario",
      "Recibe los mensajes del frontend, guarda y usa la API Key de forma segura, llama a la API de IA y devuelve la respuesta al frontend",
      "Almacena imágenes del sitio web",
      "Gestiona el dominio y el hosting del sitio",
    ],
    correctIndex: 1,
    explanation:
      "El backend actúa como intermediario seguro: recibe el mensaje del usuario desde el frontend, lo envía a la API de IA usando la API Key (que está segura en el servidor) y devuelve la respuesta.",
  },
  {
    question: "¿Cuál de estos modelos es open-source y está disponible en Groq?",
    options: [
      "GPT-4o de OpenAI",
      "Llama 3 de Meta",
      "Claude 3.5 de Anthropic",
      "Gemini Ultra de Google",
    ],
    correctIndex: 1,
    explanation:
      "Llama 3 de Meta es open-source y está disponible en Groq para inferencia ultrarrápida. GPT-4o, Claude y Gemini Ultra son modelos propietarios de sus respectivas empresas.",
  },
  {
    question: "¿Cuál es la forma más simple de probar una API de IA sin escribir código Python?",
    options: [
      "Es imposible sin código Python",
      "Usar curl desde la terminal con el endpoint, la API Key en el header y el prompt en formato JSON en el body",
      "Descargar una aplicación especial de $50",
      "Solo se puede probar desde la interfaz web oficial",
    ],
    correctIndex: 1,
    explanation:
      "curl es una herramienta de terminal disponible en todos los sistemas operativos que permite hacer solicitudes HTTP, incluyendo llamadas a APIs de IA, con solo una línea de comando.",
  },
  {
    question: "¿Qué es una variable de entorno y cómo se relaciona con la seguridad de API Keys?",
    options: [
      "Una variable que almacena el estado del clima",
      "Una variable configurada en el sistema operativo o archivo .env que guarda valores como API Keys fuera del código fuente",
      "Una variable de JavaScript que se actualiza automáticamente",
      "Una configuración de base de datos",
    ],
    correctIndex: 1,
    explanation:
      "Las variables de entorno permiten leer la API Key del sistema sin escribirla en el código, manteniéndola separada y segura.",
  },
  {
    question: "Si tu aplicación usa la API de Gemini para responder preguntas frecuentes y recibes 10,000 solicitudes al día con un promedio de 500 tokens cada una, ¿qué aspecto deberías monitorear?",
    options: [
      "El color de la interfaz de usuario",
      "El consumo mensual de tokens y el costo acumulado para asegurarte de no superar tu presupuesto",
      "La velocidad del internet del usuario",
      "El número de caracteres por respuesta solamente",
    ],
    correctIndex: 1,
    explanation:
      "Con 10,000 solicitudes por 500 tokens = 5 millones de tokens diarios. Debes monitorear el costo mensual y configurar límites de gasto en el dashboard del proveedor.",
  },
  {
    question: "¿Qué es el 'rate limiting' en las APIs de IA?",
    options: [
      "La velocidad máxima a la que el modelo puede pensar",
      "Un límite impuesto por el proveedor sobre cuántas solicitudes puedes hacer por minuto o por día para evitar abusos",
      "Una restricción sobre la longitud mínima de los prompts",
      "El número máximo de palabras que puede responder el modelo",
    ],
    correctIndex: 1,
    explanation:
      "El rate limiting limita las solicitudes por unidad de tiempo (ej. 60 solicitudes por minuto). Si lo superas, recibes error 429. Debes diseñar tu aplicación para manejar estos límites.",
  },
  {
    question: "¿Cuál es la diferencia entre los variantes flash y pro de los modelos de Google Gemini?",
    options: [
      "Flash es más inteligente y Pro es más rápido",
      "Flash es más rápido y económico para tareas simples; Pro es más capaz y costoso para tareas complejas de razonamiento",
      "Son exactamente iguales pero con diferente nombre",
      "Flash no puede procesar texto, solo imágenes",
    ],
    correctIndex: 1,
    explanation:
      "Gemini Flash está optimizado para velocidad y costo en tareas de volumen alto. Gemini Pro ofrece mayor capacidad de razonamiento para tareas complejas, con mayor costo por token.",
  },
  {
    question: "¿Cuál es el propósito del parámetro 'temperature' (temperatura) en una llamada a la API?",
    options: [
      "Controlar la temperatura del servidor donde corre el modelo",
      "Controlar qué tan creativas o deterministas son las respuestas: temperatura baja = respuestas más predecibles, temperatura alta = más creativas y variables",
      "Definir el idioma de respuesta del modelo",
      "Establecer el límite de tokens de la respuesta",
    ],
    correctIndex: 1,
    explanation:
      "La temperatura controla la aleatoriedad: 0 = siempre la respuesta más probable (ideal para datos estructurados), 1 = más variedad (ideal para textos creativos). Valores típicos: 0.2-0.8.",
  },
  {
    question: "¿Qué es el parámetro 'max_tokens' en una solicitud a la API?",
    options: [
      "El número máximo de solicitudes por día",
      "El límite máximo de tokens que puede generar el modelo en su respuesta",
      "El número de tokens en el prompt de entrada",
      "El número máximo de palabras del sistema",
    ],
    correctIndex: 1,
    explanation:
      "max_tokens limita la longitud de la respuesta generada. Útil para controlar costos (respuestas más cortas = menos costo) y garantizar respuestas concisas.",
  },
  {
    question: "¿Qué sucede si compartes accidentalmente tu API Key en un repositorio público de GitHub?",
    options: [
      "Nada, las API Keys están encriptadas automáticamente en GitHub",
      "La Key puede ser detectada por bots en minutos, usada para hacer solicitudes a tu cuenta (generando costos) y el proveedor puede revocarla",
      "GitHub te enviará un correo de advertencia pero no pasará nada",
      "Solo tus seguidores de GitHub podrán verla",
    ],
    correctIndex: 1,
    explanation:
      "Los bots escanean GitHub constantemente buscando API Keys expuesadas. En minutos pueden encontrarla y hacer miles de solicitudes a tu cuenta generando costos enormes. Debes revocarla inmediatamente.",
  },
  {
    question: "¿Cuál de estas es la arquitectura correcta para un chatbot embebido en un sitio web?",
    options: [
      "Usuario → Frontend (con API Key) → API de IA directamente",
      "Usuario → Frontend → Backend (con API Key) → API de IA → Backend → Frontend → Usuario",
      "Usuario → API de IA directamente (sin frontend ni backend)",
      "Usuario → Base de datos → API de IA → Usuario",
    ],
    correctIndex: 1,
    explanation:
      "La arquitectura correcta es: el usuario habla con el frontend, este envía al backend, el backend (donde está la API Key segura) llama a la API de IA y devuelve la respuesta al frontend.",
  },
  {
    question: "¿Qué es un 'endpoint' en el contexto de una API de IA?",
    options: [
      "El punto donde termina el cable de internet del servidor",
      "La URL específica a la que envías tus solicitudes para usar el servicio de IA",
      "La contraseña de la API",
      "El nombre del modelo de IA",
    ],
    correctIndex: 1,
    explanation:
      "Un endpoint es la URL específica que representa una función del servicio: para chat completions, para embeddings, para imágenes, etc. Cada función tiene su propio endpoint.",
  },
  {
    question: "Al integrar un chatbot en un sitio web, ¿qué mejora significativamente la experiencia del usuario?",
    options: [
      "Usar fuentes de letra muy grandes",
      "Implementar streaming para mostrar la respuesta token por token mientras se genera, en lugar de esperar a que termine",
      "Añadir muchos colores al widget de chat",
      "Deshabilitar el botón de enviar durante 5 segundos",
    ],
    correctIndex: 1,
    explanation:
      "El streaming hace que la respuesta aparezca inmediatamente mientras se genera (como escritura en tiempo real), reduciendo la percepción de latencia y mejorando la experiencia de conversación.",
  },
  {
    question: "¿Cuál es la mejor descripción de por qué las APIs de IA son accesibles económicamente para proyectos pequeños?",
    options: [
      "Porque los proveedores de IA son organizaciones sin fines de lucro",
      "Porque el modelo de precios por token significa que solo pagas por lo que usas, y el costo por interacción individual es fracciones de centavo",
      "Porque todas las APIs de IA son completamente gratuitas",
      "Porque las APIs de IA funcionan en hardware antiguo y barato",
    ],
    correctIndex: 1,
    explanation:
      "El modelo pay-per-token hace que las APIs sean accesibles: una conversación corta cuesta $0.001-0.01. Solo pagas cuando hay uso real, sin costos fijos de infraestructura.",
  },
  {
    question: "¿Qué es el 'system prompt' en una llamada a la API de IA?",
    options: [
      "El mensaje de error del sistema operativo",
      "Un mensaje especial enviado al inicio de la conversación que define el comportamiento, rol y restricciones del asistente para toda la sesión",
      "La versión del modelo de IA que estás usando",
      "El identificador único de cada solicitud",
    ],
    correctIndex: 1,
    explanation:
      "El system prompt es donde configuras el comportamiento del asistente vía API. Equivale a las instrucciones de un Custom GPT: define rol, idioma, restricciones y tono para toda la sesión.",
  },
  {
    question: "¿Cuál es el modelo de precios más común entre las APIs de IA comerciales como OpenAI, Gemini y Claude?",
    options: [
      "Cobro mensual fijo independientemente del uso",
      "Pago por token procesado (input + output), expresado como precio por 1 millón de tokens",
      "Cobro por número de solicitudes independientemente del tamaño",
      "Cobro anual por licencia empresarial únicamente",
    ],
    correctIndex: 1,
    explanation:
      "El modelo estándar es precio por millón de tokens, separando input y output. Esto hace el uso individual muy económico pero escala con el volumen de solicitudes.",
  },
  {
    question: "¿Qué es el parámetro 'top_p' (nucleus sampling) en una llamada a la API de IA?",
    options: [
      "El porcentaje de tokens que se filtran por tema",
      "Un parámetro que controla la diversidad de respuestas limitando la selección a los tokens que acumulan la probabilidad más alta hasta un umbral p",
      "La velocidad máxima de respuesta del modelo",
      "El número máximo de párrafos en la respuesta",
    ],
    correctIndex: 1,
    explanation:
      "top_p (nucleus sampling) selecciona tokens de la distribución más probable hasta acumular probabilidad p (ej. 0.9). Junto con temperature, controla la creatividad de las respuestas.",
  },
], curso12QuizEn);

// ============================================================
// CURSO 13 — Programación con IA: de cero a tu primera app
// ============================================================
export const curso13Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Cuál de los siguientes es un tipo de dato válido en Python?",
    options: ["integer", "string", "float", "Todas las anteriores"],
    correctIndex: 3,
    explanation: "Python admite enteros (int), cadenas (str) y números de punto flotante (float), entre otros tipos de datos básicos.",
  },
  {
    question: "¿Qué hace el siguiente código en Python? `nombre = 'Ana'; print(f'Hola, {nombre}')`",
    options: [
      "Imprime: Hola, {nombre}",
      "Da un error de sintaxis",
      "Imprime: Hola, Ana",
      "Asigna 'Hola, Ana' a una variable",
    ],
    correctIndex: 2,
    explanation: "Los f-strings en Python permiten insertar variables dentro de cadenas de texto usando llaves {}. El resultado es 'Hola, Ana'.",
  },
  {
    question: "¿Cómo se accede al segundo elemento de una lista en Python? `lista = [10, 20, 30]`",
    options: ["lista[1]", "lista[2]", "lista.get(2)", "lista.second()"],
    correctIndex: 0,
    explanation: "Los índices en Python empiezan en 0, por lo que lista[1] devuelve el segundo elemento: 20.",
  },
  {
    question: "¿Qué palabra clave se usa para definir una función en Python?",
    options: ["function", "def", "fn", "define"],
    correctIndex: 1,
    explanation: "En Python se usa la palabra clave 'def' para definir una función, seguida del nombre y los paréntesis con parámetros.",
  },
  {
    question: "¿Para qué sirve la palabra clave `return` en una función?",
    options: [
      "Para terminar el programa",
      "Para imprimir el resultado en pantalla",
      "Para devolver un valor al lugar donde se llamó la función",
      "Para importar módulos externos",
    ],
    correctIndex: 2,
    explanation: "'return' hace que la función devuelva un valor a quien la llamó, permitiendo usar ese resultado en otras partes del código.",
  },
  {
    question: "¿Qué biblioteca de Python se usa principalmente para crear interfaces web rápidas para apps de IA?",
    options: ["Flask", "Django", "Streamlit", "FastAPI"],
    correctIndex: 2,
    explanation: "Streamlit permite crear interfaces web interactivas con muy pocas líneas de Python, ideal para prototipos de apps de IA.",
  },
  {
    question: "¿Cuál de estas funciones de Streamlit muestra un campo de texto donde el usuario puede escribir?",
    options: ["st.write()", "st.title()", "st.text_input()", "st.button()"],
    correctIndex: 2,
    explanation: "st.text_input() renderiza un campo de entrada de texto en la app Streamlit, devolviendo el valor escrito por el usuario.",
  },
  {
    question: "Para conectar Python a la API de OpenAI, ¿qué biblioteca debes instalar?",
    options: ["requests", "openai", "chatgpt", "ai-sdk"],
    correctIndex: 1,
    explanation: "La biblioteca oficial de OpenAI para Python se instala con 'pip install openai' y provee acceso a todos sus modelos.",
  },
  {
    question: "¿Cómo se hace una llamada básica al modelo de Anthropic (Claude) desde Python?",
    options: [
      "client.completions.create(model='claude-3', prompt='...')",
      "client.messages.create(model='claude-3-5-sonnet-20241022', max_tokens=1024, messages=[...])",
      "anthropic.chat(message='...')",
      "claude.generate(text='...')",
    ],
    correctIndex: 1,
    explanation: "La API de Anthropic usa client.messages.create() con el modelo, max_tokens y una lista de mensajes con roles 'user' y 'assistant'.",
  },
  {
    question: "¿Qué método de cadenas en Python convierte todo el texto a minúsculas?",
    options: [".upper()", ".lower()", ".strip()", ".split()"],
    correctIndex: 1,
    explanation: ".lower() convierte todos los caracteres de una cadena a minúsculas, útil para normalizar texto antes de procesarlo.",
  },
  {
    question: "¿Para qué sirve el método `.split()` en una cadena de Python?",
    options: [
      "Para unir dos cadenas",
      "Para dividir una cadena en una lista de subcadenas",
      "Para eliminar espacios en blanco",
      "Para buscar un patrón dentro del texto",
    ],
    correctIndex: 1,
    explanation: ".split() divide una cadena en partes usando un separador (por defecto espacio), devolviendo una lista de subcadenas.",
  },
  {
    question: "¿Qué módulo de Python se usa para trabajar con expresiones regulares (regex)?",
    options: ["regex", "re", "pattern", "match"],
    correctIndex: 1,
    explanation: "El módulo 're' de la biblioteca estándar de Python provee funciones para trabajar con expresiones regulares.",
  },
  {
    question: "¿Qué función de pandas se usa para leer un archivo CSV?",
    options: ["pd.read_excel()", "pd.open_csv()", "pd.read_csv()", "pd.load_file()"],
    correctIndex: 2,
    explanation: "pd.read_csv('archivo.csv') carga un archivo CSV como un DataFrame de pandas, listo para filtrar y analizar.",
  },
  {
    question: "En un DataFrame de pandas, ¿cómo se filtran filas donde la columna 'edad' es mayor a 30?",
    options: [
      "df.filter(edad > 30)",
      "df[df['edad'] > 30]",
      "df.where('edad', 30)",
      "df.select(edad='>30')",
    ],
    correctIndex: 1,
    explanation: "El filtrado booleano df[df['columna'] > valor] es la forma estándar de filtrar filas en un DataFrame de pandas.",
  },
  {
    question: "¿Qué biblioteca de Python se usa para hacer peticiones HTTP a sitios web (web scraping)?",
    options: ["urllib", "requests", "http", "fetch"],
    correctIndex: 1,
    explanation: "La biblioteca 'requests' simplifica las peticiones HTTP, devolviendo el HTML de una página para luego parsearlo.",
  },
  {
    question: "¿Cuál es el rol de BeautifulSoup en un proyecto de web scraping?",
    options: [
      "Hacer las peticiones HTTP al servidor",
      "Almacenar los datos en una base de datos",
      "Parsear y navegar el HTML para extraer datos específicos",
      "Generar HTML dinámico para una web",
    ],
    correctIndex: 2,
    explanation: "BeautifulSoup parsea el HTML descargado y permite buscar elementos por etiqueta, clase o atributo de forma sencilla.",
  },
  {
    question: "¿Cuál es el primer comando para inicializar un repositorio Git en una carpeta?",
    options: ["git start", "git init", "git create", "git new"],
    correctIndex: 1,
    explanation: "'git init' crea un repositorio Git vacío en la carpeta actual, generando la carpeta oculta .git.",
  },
  {
    question: "¿Qué hace el comando `git add .` ?",
    options: [
      "Sube todos los archivos a GitHub",
      "Agrega todos los archivos modificados al área de staging",
      "Crea una nueva rama",
      "Guarda el historial de cambios",
    ],
    correctIndex: 1,
    explanation: "'git add .' agrega todos los archivos nuevos o modificados al área de staging, preparándolos para el commit.",
  },
  {
    question: "¿Para qué sirve el archivo `.gitignore`?",
    options: [
      "Para guardar las credenciales de GitHub",
      "Para ignorar cambios de Git de forma global",
      "Para listar archivos y carpetas que Git debe excluir del seguimiento",
      "Para documentar el proyecto",
    ],
    correctIndex: 2,
    explanation: ".gitignore lista patrones de archivos (como .env, __pycache__, node_modules) que Git no debe rastrear ni subir.",
  },
  {
    question: "¿Cuál es el comando para crear una nueva rama llamada 'feature/login' en Git?",
    options: [
      "git new feature/login",
      "git branch feature/login",
      "git create feature/login",
      "git checkout feature/login --new",
    ],
    correctIndex: 1,
    explanation: "'git branch nombre-rama' crea una nueva rama sin cambiar a ella. Para crearla y cambiarse se usa 'git checkout -b nombre-rama'.",
  },
  {
    question: "¿Qué plataforma permite hacer deploy gratuito de apps Streamlit con un solo clic?",
    options: ["AWS Lambda", "Streamlit Community Cloud", "Heroku", "Netlify"],
    correctIndex: 1,
    explanation: "Streamlit Community Cloud (share.streamlit.io) permite desplegar apps Python/Streamlit gratuitamente conectando tu repositorio de GitHub.",
  },
  {
    question: "¿Por qué es importante usar variables de entorno para las API keys en lugar de escribirlas directo en el código?",
    options: [
      "Porque las variables de entorno funcionan más rápido",
      "Para evitar exponer credenciales secretas en el repositorio público",
      "Porque las API keys no funcionan dentro del código fuente",
      "Para cumplir con un requisito técnico de las APIs",
    ],
    correctIndex: 1,
    explanation: "Escribir API keys en el código puede exponerlas si el repositorio es público. Las variables de entorno las mantienen separadas y seguras.",
  },
  {
    question: "¿Qué es un diccionario en Python?",
    options: [
      "Una lista ordenada de valores numéricos",
      "Una colección de pares clave-valor sin orden garantizado",
      "Un archivo de texto con definiciones",
      "Una función especial para traducir texto",
    ],
    correctIndex: 1,
    explanation: "Un diccionario en Python almacena pares clave-valor: {'nombre': 'Ana', 'edad': 30}. Permite acceder a valores por su clave.",
  },
  {
    question: "¿Cómo accedes al valor de la clave 'precio' en el diccionario `producto = {'nombre': 'Libro', 'precio': 25}`?",
    options: ["producto.precio", "producto['precio']", "producto.get_value('precio')", "producto[1]"],
    correctIndex: 1,
    explanation: "En Python los valores de un diccionario se acceden con la sintaxis dict['clave'], en este caso producto['precio'] devuelve 25.",
  },
  {
    question: "En Streamlit, ¿cómo se detecta que el usuario hizo clic en un botón?",
    options: [
      "if st.button('Enviar') == True:",
      "if st.button('Enviar'):",
      "st.button('Enviar').onClick()",
      "on_click = st.button('Enviar')",
    ],
    correctIndex: 1,
    explanation: "st.button() devuelve True cuando el usuario hace clic. La forma idiomática es usarlo directamente en un if.",
  },
  {
    question: "¿Qué significa que una función tenga parámetros con valores por defecto como `def saludar(nombre='Mundo')`?",
    options: [
      "La función siempre ignora los argumentos que se pasen",
      "Si no se pasa un argumento, se usa el valor 'Mundo' automáticamente",
      "La función solo acepta el valor 'Mundo' como argumento",
      "Es un error de sintaxis en Python",
    ],
    correctIndex: 1,
    explanation: "Los parámetros con valores por defecto son opcionales. Si no se pasa argumento, se usa el valor predeterminado.",
  },
  {
    question: "¿Qué plataforma gratuita además de Streamlit Cloud permite hacer deploy de apps Python como servicio web?",
    options: ["Vercel", "Render", "GitHub Pages", "Figma"],
    correctIndex: 1,
    explanation: "Render ofrece un plan gratuito para desplegar aplicaciones web Python (Flask, FastAPI) con conexión directa a repositorios Git.",
  },
  {
    question: "¿Cuál de estas opciones describe correctamente el rol de la librería `pandas` en proyectos de datos?",
    options: [
      "Es una librería para crear visualizaciones interactivas en el navegador",
      "Permite manipular y analizar datos tabulares con DataFrames",
      "Es el motor de IA que procesa lenguaje natural",
      "Se usa exclusivamente para leer archivos PDF",
    ],
    correctIndex: 1,
    explanation: "pandas provee la estructura DataFrame para cargar, filtrar, transformar y analizar datos tabulares de CSV, Excel, SQL, etc.",
  },
  {
    question: "¿Qué hace `git push origin main`?",
    options: [
      "Descarga los cambios remotos a tu máquina local",
      "Crea una nueva rama llamada 'main'",
      "Sube los commits locales de la rama 'main' al repositorio remoto 'origin'",
      "Fusiona la rama 'main' con 'origin'",
    ],
    correctIndex: 2,
    explanation: "'git push origin main' envía los commits de tu rama local 'main' al repositorio remoto llamado 'origin' (usualmente GitHub).",
  },
  {
    question: "¿Cuál es la diferencia principal entre `git pull` y `git clone`?",
    options: [
      "No hay diferencia, hacen lo mismo",
      "'git clone' copia un repositorio por primera vez; 'git pull' actualiza uno ya existente con cambios remotos",
      "'git pull' crea un repositorio nuevo; 'git clone' descarga archivos sueltos",
      "'git clone' solo funciona con repositorios privados",
    ],
    correctIndex: 1,
    explanation: "'git clone' descarga todo el repositorio por primera vez. 'git pull' integra los cambios remotos en un repositorio ya clonado.",
  },
  {
    question: "¿Cómo se instala una biblioteca externa en Python usando pip?",
    options: ["python add openai", "pip install openai", "import openai --install", "get-package openai"],
    correctIndex: 1,
    explanation: "pip es el gestor de paquetes de Python. 'pip install nombre_paquete' descarga e instala la librería desde PyPI.",
  },
  {
    question: "En el contexto de APIs de IA, ¿qué es el 'rol' en un mensaje de la conversación?",
    options: [
      "El nivel de acceso del usuario a la API",
      "El identificador numérico del mensaje",
      "La etiqueta que indica si un mensaje es del sistema, del usuario o del asistente",
      "El modelo de lenguaje que debe responder",
    ],
    correctIndex: 2,
    explanation: "Las APIs de IA usan roles ('system', 'user', 'assistant') para estructurar la conversación y dar contexto al modelo.",
  },
  {
    question: "¿Qué es NLP (Procesamiento de Lenguaje Natural)?",
    options: [
      "Un tipo de red neuronal para procesar imágenes",
      "La rama de la IA que permite a las computadoras entender y generar lenguaje humano",
      "Un protocolo de red para comunicaciones de baja latencia",
      "Un framework para construir interfaces gráficas",
    ],
    correctIndex: 1,
    explanation: "NLP (Natural Language Processing) es la disciplina de IA que estudia la comprensión, generación y manipulación del lenguaje humano.",
  },
  {
    question: "En un proyecto de app de IA, ¿qué buena práctica debes seguir al trabajar con Git?",
    options: [
      "Hacer un solo commit enorme al terminar todo el proyecto",
      "Subir directamente las credenciales de la API al repositorio",
      "Usar ramas para cada nueva funcionalidad y hacer commits frecuentes con mensajes descriptivos",
      "Nunca usar .gitignore para no perder archivos",
    ],
    correctIndex: 2,
    explanation: "Las buenas prácticas de Git incluyen commits frecuentes y descriptivos, ramas por funcionalidad y nunca exponer secretos en el repositorio.",
  },
  {
    question: "¿Cuál es el propósito principal de un proyecto final que combine Python + API de IA + Streamlit?",
    options: [
      "Reemplazar completamente a los desarrolladores profesionales",
      "Demostrar que se pueden construir aplicaciones funcionales de IA con código Python básico y herramientas gratuitas",
      "Crear una aplicación de nivel empresarial lista para millones de usuarios",
      "Aprender a diseñar bases de datos relacionales",
    ],
    correctIndex: 1,
    explanation: "El proyecto final demuestra que con Python básico, una API de IA y Streamlit se puede construir una app funcional real, sin necesidad de experiencia avanzada.",
  },
], emptyEnPartials);

// ============================================================
// CURSO 14 — RAG y búsqueda inteligente
// ============================================================
export const curso14Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Qué significa la sigla RAG en el contexto de la inteligencia artificial?",
    options: [
      "Rapid AI Generation",
      "Retrieval-Augmented Generation",
      "Recurrent Attention Graph",
      "Real-time Answer Generator",
    ],
    correctIndex: 1,
    explanation: "RAG significa Retrieval-Augmented Generation: un sistema que recupera información relevante de una base de conocimiento antes de generar una respuesta.",
  },
  {
    question: "¿Cuál es la principal limitación de los LLMs que RAG busca solucionar?",
    options: [
      "Son demasiado lentos para responder",
      "No pueden procesar texto en español",
      "Su conocimiento está limitado a la fecha de entrenamiento y pueden alucinar datos específicos",
      "Solo funcionan con documentos en formato PDF",
    ],
    correctIndex: 2,
    explanation: "Los LLMs tienen un corte de conocimiento y pueden inventar datos específicos (alucinaciones). RAG les permite acceder a información actualizada y verificable.",
  },
  {
    question: "¿Cuál es la diferencia fundamental entre RAG y fine-tuning?",
    options: [
      "RAG es más caro que fine-tuning",
      "RAG recupera información en tiempo real de una base de conocimiento; fine-tuning modifica los pesos del modelo con nuevos datos",
      "Fine-tuning es más rápido de implementar que RAG",
      "RAG solo funciona con modelos de OpenAI",
    ],
    correctIndex: 1,
    explanation: "RAG añade conocimiento externo en tiempo de inferencia sin cambiar el modelo. Fine-tuning actualiza los parámetros del modelo durante entrenamiento.",
  },
  {
    question: "¿Cuál es el orden correcto del pipeline básico de RAG?",
    options: [
      "Embeddings → Documento → Búsqueda → Respuesta",
      "Documento → Chunking → Embeddings → Búsqueda vectorial → LLM → Respuesta",
      "LLM → Documento → Embeddings → Respuesta",
      "Búsqueda → Chunking → LLM → Embeddings",
    ],
    correctIndex: 1,
    explanation: "El pipeline RAG sigue: ingestar documento, dividirlo en chunks, generar embeddings, almacenarlos, buscar por similitud, y pasar los resultados al LLM.",
  },
  {
    question: "¿Qué es un 'chunk' en el contexto de RAG?",
    options: [
      "Un tipo de base de datos vectorial",
      "Un fragmento de texto de tamaño definido obtenido al dividir un documento",
      "El modelo de embeddings utilizado",
      "La respuesta generada por el LLM",
    ],
    correctIndex: 1,
    explanation: "El chunking divide documentos grandes en fragmentos más pequeños (chunks) para que puedan ser indexados y recuperados de forma precisa.",
  },
  {
    question: "¿Qué son los embeddings vectoriales?",
    options: [
      "Palabras clave extraídas de un documento",
      "Representaciones numéricas de texto que capturan su significado semántico en un espacio vectorial",
      "Los índices de posición de palabras en un documento",
      "Archivos de configuración de modelos de lenguaje",
    ],
    correctIndex: 1,
    explanation: "Los embeddings convierten texto en vectores numéricos de alta dimensión donde textos semánticamente similares tienen vectores cercanos.",
  },
  {
    question: "¿Qué tipo de búsqueda realiza una base de datos vectorial?",
    options: [
      "Búsqueda exacta por palabras clave",
      "Búsqueda SQL por campos estructurados",
      "Búsqueda por similitud semántica basada en distancia entre vectores",
      "Búsqueda por fecha de creación del documento",
    ],
    correctIndex: 2,
    explanation: "Las bases de datos vectoriales encuentran los chunks más similares semánticamente a la query usando métricas como coseno o distancia euclidiana.",
  },
  {
    question: "¿Cuál de estos es un ejemplo de base de datos vectorial?",
    options: ["PostgreSQL", "MongoDB", "Chroma", "Redis"],
    correctIndex: 2,
    explanation: "Chroma es una base de datos vectorial de código abierto popular para proyectos RAG. Otras opciones incluyen Pinecone, Weaviate y pgvector.",
  },
  {
    question: "¿Qué framework de Python facilita la construcción de pipelines RAG con componentes listos para usar?",
    options: ["Flask", "Pandas", "LangChain", "Streamlit"],
    correctIndex: 2,
    explanation: "LangChain provee abstracciones (document loaders, text splitters, vector stores, retrieval chains) que simplifican la construcción de sistemas RAG.",
  },
  {
    question: "¿Qué hace un 'document loader' en LangChain?",
    options: [
      "Genera embeddings de los documentos",
      "Carga y convierte documentos de distintos formatos (PDF, web, CSV) en objetos Document",
      "Almacena los vectores en la base de datos",
      "Hace la llamada al LLM final",
    ],
    correctIndex: 1,
    explanation: "Los document loaders de LangChain extraen y normalizan contenido de fuentes diversas (PDFs, URLs, archivos), listos para dividir y vectorizar.",
  },
  {
    question: "¿Para qué sirve un 'text splitter' en el pipeline RAG?",
    options: [
      "Para traducir textos entre idiomas",
      "Para dividir documentos en fragmentos más pequeños respetando límites de oraciones o párrafos",
      "Para eliminar palabras innecesarias del texto",
      "Para comprimir el texto y reducir tokens",
    ],
    correctIndex: 1,
    explanation: "Los text splitters dividen documentos en chunks del tamaño adecuado, con opciones para respetar límites naturales del texto y añadir solapamiento.",
  },
  {
    question: "¿Qué es el 'overlap' (solapamiento) en el chunking de documentos?",
    options: [
      "La superposición de documentos duplicados en la base de datos",
      "La cantidad de tokens compartidos entre chunks consecutivos para no perder contexto en los límites",
      "El error que ocurre cuando dos chunks son idénticos",
      "El porcentaje de embeddings que se recalculan",
    ],
    correctIndex: 1,
    explanation: "El overlap añade tokens del final de un chunk al inicio del siguiente, evitando que información importante quede cortada en los límites.",
  },
  {
    question: "¿Qué biblioteca de Python se usa comúnmente para cargar PDFs en un pipeline RAG?",
    options: ["docx2txt", "PyPDF", "pdfminer", "Tanto PyPDF como pdfminer son opciones válidas"],
    correctIndex: 3,
    explanation: "PyPDF y pdfminer son herramientas populares para extraer texto de PDFs. LangChain también incluye PyPDFLoader que usa PyPDF internamente.",
  },
  {
    question: "¿Qué significa el parámetro 'k' en la recuperación de documentos de un sistema RAG?",
    options: [
      "El tamaño del chunk en tokens",
      "La cantidad de chunks más similares a recuperar para responder la query",
      "La dimensión del vector de embedding",
      "El número de documentos PDF cargados",
    ],
    correctIndex: 1,
    explanation: "El parámetro k en retrieval.invoke() define cuántos chunks relevantes se recuperan de la base vectorial para incluir en el contexto del LLM.",
  },
  {
    question: "¿Qué es el 'reranking' en un sistema RAG avanzado?",
    options: [
      "Reordenar los documentos en la base de datos por fecha",
      "Un paso adicional que reordena los chunks recuperados por relevancia real usando un modelo más preciso",
      "Volver a generar los embeddings cuando cambia el modelo",
      "Clasificar las respuestas del LLM por calidad",
    ],
    correctIndex: 1,
    explanation: "El reranking usa un modelo cross-encoder para reordenar los documentos recuperados por relevancia real, mejorando la precisión antes de llamar al LLM.",
  },
  {
    question: "¿Qué es la 'búsqueda híbrida' (hybrid search) en RAG?",
    options: [
      "Combinar dos LLMs diferentes para generar respuestas",
      "Usar simultáneamente búsqueda semántica por vectores y búsqueda exacta por palabras clave (BM25)",
      "Buscar en múltiples bases de datos vectoriales a la vez",
      "Alternar entre RAG y fine-tuning según la query",
    ],
    correctIndex: 1,
    explanation: "La búsqueda híbrida combina similitud semántica (vectores) con búsqueda léxica (BM25/keywords), aprovechando lo mejor de ambos enfoques.",
  },
  {
    question: "¿Cuál es el impacto del tamaño de chunk en la calidad de RAG?",
    options: [
      "Chunks más grandes siempre dan mejores respuestas",
      "El tamaño no afecta la calidad de las respuestas",
      "Chunks pequeños dan más precisión pero menos contexto; chunks grandes dan más contexto pero menos precisión en la recuperación",
      "Chunks más pequeños siempre son mejores porque usan menos tokens",
    ],
    correctIndex: 2,
    explanation: "Encontrar el tamaño óptimo de chunk es un balance: chunks pequeños (128-256 tokens) son más precisos; chunks grandes (512-1024) preservan más contexto.",
  },
  {
    question: "¿Qué framework de evaluación de RAG permite medir métricas como faithfulness y relevance de forma automática?",
    options: ["LangSmith", "RAGAS", "Weights & Biases", "MLflow"],
    correctIndex: 1,
    explanation: "RAGAS (RAG Assessment) es un framework específico para evaluar sistemas RAG midiendo faithfulness, answer relevancy, context precision y context recall.",
  },
  {
    question: "¿Qué mide la métrica 'faithfulness' (fidelidad) en la evaluación de RAG?",
    options: [
      "Qué tan rápido responde el sistema",
      "Si la respuesta generada está respaldada por los documentos recuperados y no inventa información",
      "La cantidad de documentos que se recuperan",
      "El costo en tokens de cada consulta",
    ],
    correctIndex: 1,
    explanation: "Faithfulness mide si cada afirmación en la respuesta puede ser verificada en los documentos de contexto recuperados, detectando alucinaciones.",
  },
  {
    question: "¿Qué mide la métrica 'context recall' en evaluación de RAG?",
    options: [
      "Cuántos usuarios usaron el sistema",
      "La proporción de información relevante del ground truth que fue recuperada por el sistema",
      "La velocidad de recuperación de documentos",
      "El porcentaje de tokens usados del contexto disponible",
    ],
    correctIndex: 1,
    explanation: "Context recall mide qué fracción de la información necesaria para responder correctamente fue efectivamente recuperada de la base de conocimiento.",
  },
  {
    question: "¿Cuándo es preferible usar RAG en lugar de fine-tuning?",
    options: [
      "Cuando se quiere que el modelo aprenda un nuevo idioma",
      "Cuando se necesita que el modelo tenga acceso a información actualizada, privada o que cambia frecuentemente",
      "Cuando el modelo necesita aprender un estilo de escritura específico",
      "Cuando se trabaja con imágenes en lugar de texto",
    ],
    correctIndex: 1,
    explanation: "RAG es ideal para conocimiento que se actualiza frecuentemente o es privado (documentos internos), ya que no requiere reentrenar el modelo.",
  },
  {
    question: "¿Qué es el 'contexto' en el prompt de un sistema RAG?",
    options: [
      "La historia completa de la conversación",
      "Los chunks de documentos recuperados que se insertan en el prompt para que el LLM base su respuesta",
      "El system prompt que define el rol del asistente",
      "Las instrucciones de formato de la respuesta",
    ],
    correctIndex: 1,
    explanation: "En RAG, el contexto son los fragmentos de documentos relevantes recuperados que se insertan en el prompt, permitiendo al LLM responder con información real.",
  },
  {
    question: "¿Cuál es el desafío principal al hacer RAG sobre múltiples documentos?",
    options: [
      "Los PDFs no pueden convertirse en embeddings",
      "Gestionar correctamente los metadatos para filtrar por fuente, fecha o tipo de documento en la recuperación",
      "Los modelos de embedding solo procesan un documento a la vez",
      "LangChain no soporta múltiples documentos simultáneamente",
    ],
    correctIndex: 1,
    explanation: "Con múltiples documentos, los metadatos (nombre de archivo, fecha, sección) son clave para filtrar y atribuir correctamente las respuestas a sus fuentes.",
  },
  {
    question: "¿Qué es Pinecone en el ecosistema de RAG?",
    options: [
      "Un modelo de lenguaje de código abierto",
      "Una base de datos vectorial gestionada en la nube",
      "Un framework para construir pipelines de RAG",
      "Una herramienta de evaluación de LLMs",
    ],
    correctIndex: 1,
    explanation: "Pinecone es una base de datos vectorial como servicio (gestionada), diseñada para búsqueda semántica a escala con alta disponibilidad.",
  },
  {
    question: "¿Cuál de estos es el chunking recursivo y cuándo se recomienda?",
    options: [
      "Dividir por número fijo de caracteres; siempre recomendado",
      "Dividir intentando respetar párrafos, luego oraciones, luego palabras si es necesario; recomendado para texto con estructura natural",
      "Dividir solo en saltos de línea; recomendado para código fuente",
      "Dividir por temas usando el LLM; recomendado cuando hay tiempo ilimitado",
    ],
    correctIndex: 1,
    explanation: "El RecursiveCharacterTextSplitter de LangChain intenta dividir por separadores naturales (párrafos, oraciones) en cascada, preservando coherencia.",
  },
  {
    question: "¿Por qué el prompt engineering es importante en un sistema RAG?",
    options: [
      "Porque define qué documentos se indexan en la base vectorial",
      "Porque instruye al LLM sobre cómo usar el contexto recuperado para responder con precisión y sin alucinar",
      "Porque controla la velocidad de generación de embeddings",
      "Porque reemplaza la necesidad de evaluar la calidad de las respuestas",
    ],
    correctIndex: 1,
    explanation: "Un buen prompt en RAG incluye instrucciones como 'responde solo basándote en el contexto provisto, si no hay información di que no sabes'.",
  },
  {
    question: "¿Qué significa 'answer relevancy' (relevancia de la respuesta) en RAGAS?",
    options: [
      "Qué tan rápido se genera la respuesta",
      "Qué tan directamente la respuesta generada responde a la pregunta original del usuario",
      "Si la respuesta contiene la cantidad correcta de palabras",
      "El porcentaje de documentos recuperados que se usaron en la respuesta",
    ],
    correctIndex: 1,
    explanation: "Answer relevancy mide si la respuesta del LLM es directamente pertinente a lo que el usuario preguntó, penalizando respuestas vagas o fuera de tema.",
  },
  {
    question: "¿Qué ventaja tiene agregar metadatos a los chunks durante la indexación RAG?",
    options: [
      "Reducir el tamaño de los embeddings generados",
      "Permitir filtrado por fuente, fecha u otro atributo para recuperar solo documentos relevantes",
      "Comprimir los vectores para ahorrar espacio en disco",
      "Evitar la necesidad de chunking",
    ],
    correctIndex: 1,
    explanation: "Los metadatos (ej: {'fuente': 'manual_2024.pdf', 'seccion': 'cap3'}) permiten filtrar la búsqueda y atribuir las respuestas a documentos específicos.",
  },
  {
    question: "En un proyecto de buscador inteligente sobre documentos, ¿qué combinación de herramientas es la más típica?",
    options: [
      "MySQL + TensorFlow + Django",
      "PyPDF + LangChain + Chroma/Pinecone + OpenAI/Anthropic + Streamlit/FastAPI",
      "Excel + NLTK + Flask",
      "Word2Vec + SQLite + React",
    ],
    correctIndex: 1,
    explanation: "El stack moderno de RAG combina: cargador de PDF, LangChain para el pipeline, Chroma/Pinecone como vector DB, un LLM para generar y una interfaz web.",
  },
  {
    question: "¿Cuál es la diferencia entre 'context precision' y 'context recall' en evaluación de RAG?",
    options: [
      "No hay diferencia, miden lo mismo",
      "Context precision mide qué tan relevantes son los chunks recuperados; context recall mide qué fracción de la información necesaria fue recuperada",
      "Context precision mide velocidad; context recall mide exactitud",
      "Context precision es para texto; context recall es para imágenes",
    ],
    correctIndex: 1,
    explanation: "Precision = de los chunks recuperados, ¿cuántos eran realmente útiles? Recall = de toda la información necesaria, ¿cuánta fue recuperada?",
  },
  {
    question: "¿Qué ocurre cuando se hace una query sobre documentos en un sistema RAG bien implementado?",
    options: [
      "El LLM busca directamente en Internet",
      "La query se convierte en embedding, se buscan chunks similares en la base vectorial y se pasan al LLM con la pregunta",
      "El LLM lee todos los documentos completos antes de responder",
      "Se hace fine-tuning automático del modelo con la nueva información",
    ],
    correctIndex: 1,
    explanation: "En RAG: query → embedding → búsqueda semántica → top-k chunks → prompt con contexto → LLM → respuesta basada en documentos reales.",
  },
  {
    question: "¿Por qué la evaluación humana sigue siendo importante incluso cuando se usan métricas automáticas como RAGAS?",
    options: [
      "Porque RAGAS solo funciona en inglés",
      "Porque los juicios humanos capturan calidad subjetiva, coherencia y utilidad real que las métricas automáticas no siempre reflejan fielmente",
      "Porque RAGAS es demasiado caro para proyectos pequeños",
      "Porque las métricas automáticas solo miden velocidad de respuesta",
    ],
    correctIndex: 1,
    explanation: "La evaluación humana complementa las métricas automáticas capturando aspectos como tono, completitud percibida y utilidad práctica para el usuario real.",
  },
  {
    question: "¿Qué problema resuelve la reducción de alucinaciones al usar RAG?",
    options: [
      "Hace que el modelo sea más rápido",
      "Ancla las respuestas a documentos verificables, reduciendo la probabilidad de que el modelo invente información",
      "Permite que el modelo acceda a internet en tiempo real",
      "Elimina la necesidad de un sistema prompt",
    ],
    correctIndex: 1,
    explanation: "Al forzar al LLM a basar sus respuestas en documentos recuperados específicos, RAG reduce significativamente las alucinaciones sobre hechos verificables.",
  },
  {
    question: "¿Qué es la 'ingesta incremental' en un sistema RAG con documentos que se actualizan?",
    options: [
      "Reindexar todos los documentos desde cero cada vez que cambia uno",
      "Procesar solo los documentos nuevos o modificados sin reindexar los que no cambiaron",
      "Dividir los documentos en chunks aún más pequeños para mayor precisión",
      "Usar diferentes modelos de embedding para diferentes tipos de documentos",
    ],
    correctIndex: 1,
    explanation: "La ingesta incremental es eficiente: detecta documentos nuevos o modificados y solo reindexea esos, evitando reindexar toda la colección innecesariamente.",
  },
  {
    question: "En el contexto de RAG, ¿qué es un 'vector store' y cómo se diferencia de una base de datos relacional?",
    options: [
      "Son lo mismo; un vector store es simplemente una tabla SQL con una columna extra",
      "Un vector store almacena embeddings y permite búsqueda por similitud semántica; una BD relacional almacena datos estructurados y permite búsqueda exacta por valores",
      "Un vector store es más lento que una BD relacional para todas las operaciones",
      "Los vector stores solo pueden almacenar documentos en inglés",
    ],
    correctIndex: 1,
    explanation: "Los vector stores están optimizados para búsqueda de vecinos más cercanos (ANN) en espacios de alta dimensión, algo para lo que las BDs relacionales no son adecuadas.",
  },
], emptyEnPartials);

// ============================================================
// CURSO 15 — Agentes de IA y deployment
// ============================================================
export const curso15Quiz: QuizQuestion[] = mergeEnglish([
  {
    question: "¿Cuál es la diferencia principal entre un chatbot simple y un agente de IA?",
    options: [
      "El chatbot usa más memoria que el agente",
      "El chatbot solo responde texto; el agente puede planificar, usar herramientas y ejecutar acciones en el mundo real",
      "El agente siempre es más lento que el chatbot",
      "El chatbot puede acceder a internet; el agente no",
    ],
    correctIndex: 1,
    explanation: "Un chatbot genera texto. Un agente de IA puede razonar sobre qué hacer, llamar herramientas (buscar, calcular, escribir archivos) y actuar de forma autónoma.",
  },
  {
    question: "¿Qué describe el bucle 'Observe-Think-Act' (Observar-Pensar-Actuar) de un agente de IA?",
    options: [
      "El proceso de entrenamiento de un modelo de lenguaje",
      "El ciclo mediante el cual un agente percibe su entorno, razona sobre qué hacer y ejecuta una acción, repitiendo hasta completar el objetivo",
      "El pipeline de RAG para recuperar documentos",
      "El flujo de datos en una red neuronal",
    ],
    correctIndex: 1,
    explanation: "El loop Observe-Think-Act es el núcleo de un agente: observa el estado actual, planifica la siguiente acción, la ejecuta, y repite hasta lograr el objetivo.",
  },
  {
    question: "¿Qué es el patrón ReAct en el contexto de agentes de IA?",
    options: [
      "Un framework de JavaScript para interfaces reactivas",
      "Una estrategia de prompting que intercala razonamiento (Reasoning) y acción (Acting) para que el agente justifique cada paso",
      "Un método de fine-tuning para modelos de agentes",
      "Una técnica de compresión de respuestas del LLM",
    ],
    correctIndex: 1,
    explanation: "ReAct (Reasoning + Acting) hace que el agente alterne entre pensar en voz alta (Thought) y ejecutar acciones (Action/Observation), mejorando la transparencia y fiabilidad.",
  },
  {
    question: "¿Qué representa el nivel de autonomía L3 en una escala de agentes L1-L5?",
    options: [
      "Un chatbot que solo responde preguntas simples",
      "Un agente que ejecuta tareas de múltiples pasos con supervisión humana ocasional",
      "Un sistema totalmente autónomo sin intervención humana",
      "Un modelo de lenguaje sin capacidad de usar herramientas",
    ],
    correctIndex: 1,
    explanation: "L3 representa agentes semi-autónomos que pueden completar flujos de trabajo complejos pero siguen requiriendo validación humana en decisiones críticas.",
  },
  {
    question: "¿Cómo se define una herramienta (tool) para que un LLM pueda usarla mediante function calling?",
    options: [
      "Como una clase Python con métodos específicos",
      "Como un esquema JSON que describe el nombre, descripción y parámetros de la función",
      "Como un endpoint REST al que el LLM hace peticiones directamente",
      "Como un archivo de texto con instrucciones en lenguaje natural",
    ],
    correctIndex: 1,
    explanation: "Las herramientas para LLMs se definen como JSON schemas con nombre, descripción y los parámetros esperados. El LLM decide cuándo llamarlas y con qué argumentos.",
  },
  {
    question: "¿Qué son las 'parallel tool calls' (llamadas paralelas a herramientas)?",
    options: [
      "Cuando múltiples usuarios llaman la misma herramienta simultáneamente",
      "Cuando el LLM decide ejecutar múltiples herramientas al mismo tiempo en un solo paso de razonamiento",
      "Una forma de cachear las respuestas de las herramientas",
      "Herramientas que corren en servidores distribuidos",
    ],
    correctIndex: 1,
    explanation: "Las parallel tool calls permiten al LLM solicitar varias herramientas en paralelo cuando son independientes entre sí, acelerando la ejecución del agente.",
  },
  {
    question: "¿Qué es el Model Context Protocol (MCP)?",
    options: [
      "Un protocolo de compresión para reducir el tamaño de los prompts",
      "Un estándar abierto que permite a los LLMs conectarse con herramientas, datos y servicios externos de forma uniforme",
      "Una técnica de fine-tuning específica para agentes",
      "Un formato de serialización para mensajes entre agentes",
    ],
    correctIndex: 1,
    explanation: "MCP (de Anthropic) es un protocolo universal que estandariza cómo los modelos de IA se conectan a herramientas externas, datos y recursos, como un 'USB para IA'.",
  },
  {
    question: "En MCP, ¿qué es un 'MCP Server'?",
    options: [
      "El servidor donde se aloja el modelo de lenguaje",
      "Un servicio que expone recursos, herramientas y prompts de un sistema específico para que los LLMs los consuman",
      "La base de datos vectorial usada por el agente",
      "El cliente Python que hace las llamadas al LLM",
    ],
    correctIndex: 1,
    explanation: "Un MCP Server es un programa que expone capacidades (tools, resources, prompts) de un sistema externo (base de datos, APIs, sistema de archivos) a modelos compatibles con MCP.",
  },
  {
    question: "¿Por qué la memoria es importante en la construcción de un agente de IA?",
    options: [
      "Para que el agente consuma menos recursos de CPU",
      "Para que el agente recuerde el estado de tareas previas, contexto del usuario y resultados de acciones anteriores",
      "Para reducir el costo de llamadas a la API del LLM",
      "Porque sin memoria el agente no puede usar herramientas",
    ],
    correctIndex: 1,
    explanation: "La memoria permite a un agente mantener contexto entre pasos y sesiones: qué ha hecho, qué aprendió, y cuál es el estado actual hacia el objetivo.",
  },
  {
    question: "¿Cuál es la ventaja de desplegar una función serverless en Vercel para un agente de IA?",
    options: [
      "Permite entrenar modelos de lenguaje en la nube",
      "Escala automáticamente sin gestionar servidores, con facturación solo por uso",
      "Da acceso gratuito e ilimitado a GPUs",
      "Elimina la necesidad de una API key para el LLM",
    ],
    correctIndex: 1,
    explanation: "Las funciones serverless de Vercel escalan automáticamente, no requieren gestión de infraestructura y el plan gratuito es suficiente para muchos proyectos pequeños.",
  },
  {
    question: "¿Qué son los 'Spaces' de Hugging Face en el contexto de deployment?",
    options: [
      "Repositorios para almacenar modelos de lenguaje privados",
      "Aplicaciones web alojadas gratuitamente que permiten demos interactivas de modelos de IA",
      "Servidores dedicados de GPU para entrenamiento",
      "Una API de embeddings de Hugging Face",
    ],
    correctIndex: 1,
    explanation: "HuggingFace Spaces permite publicar demos de apps de IA (Gradio, Streamlit) de forma gratuita, con soporte para Docker y acceso a GPUs.",
  },
  {
    question: "¿Qué es CI/CD en el contexto de deployment de aplicaciones de IA?",
    options: [
      "Computer Intelligence / Cloud Deployment",
      "Continuous Integration / Continuous Deployment: automatización del proceso de prueba y despliegue de código al hacer push",
      "Code Inspection / Code Distribution",
      "Un protocolo de comunicación entre agentes de IA",
    ],
    correctIndex: 1,
    explanation: "CI/CD automatiza que cada push al repositorio ejecute pruebas (CI) y luego despliegue automáticamente la nueva versión (CD), acelerando el desarrollo.",
  },
  {
    question: "¿Qué técnica de optimización permite que el usuario vea la respuesta mientras se genera, letra por letra?",
    options: [
      "Caching semántico",
      "Streaming de tokens",
      "Model quantization",
      "Batch processing",
    ],
    correctIndex: 1,
    explanation: "El streaming transmite cada token generado al cliente en tiempo real, mejorando la experiencia percibida sin esperar a que se complete toda la respuesta.",
  },
  {
    question: "¿Cómo puede el caching reducir costos y latencia en una aplicación de IA?",
    options: [
      "Reduciendo el tamaño del modelo de lenguaje",
      "Almacenando respuestas a queries frecuentes y reutilizándolas sin llamar al LLM nuevamente",
      "Comprimiendo los tokens antes de enviarlos a la API",
      "Eliminando el historial de conversación para reducir tokens",
    ],
    correctIndex: 1,
    explanation: "El caching semántico guarda las respuestas de queries similares. Al detectar una query parecida a una anterior, devuelve la respuesta cacheada sin llamar al LLM.",
  },
  {
    question: "¿Qué es un 'token budget' (presupuesto de tokens) en optimización de agentes?",
    options: [
      "El límite de usuarios que pueden usar la app al mismo tiempo",
      "Un límite máximo de tokens que el agente puede usar por tarea para controlar costos y latencia",
      "El número de herramientas que un agente puede llamar",
      "El tiempo máximo de respuesta antes de un timeout",
    ],
    correctIndex: 1,
    explanation: "El token budget establece un límite de tokens por ejecución, evitando que el agente entre en loops costosos o use prompts innecesariamente largos.",
  },
  {
    question: "¿Cuál es la estrategia más efectiva para reducir costos seleccionando el modelo adecuado?",
    options: [
      "Siempre usar el modelo más grande disponible para mayor calidad",
      "Usar modelos pequeños y rápidos para tareas simples, reservando modelos grandes solo para tareas complejas",
      "Usar el mismo modelo para todas las tareas del agente",
      "Entrenar un modelo propio en lugar de usar APIs",
    ],
    correctIndex: 1,
    explanation: "Enrutar tareas simples a modelos pequeños (ej: claude-haiku) y complejas a modelos grandes (ej: claude-opus) puede reducir costos en un 80-90% sin sacrificar calidad.",
  },
  {
    question: "¿Qué es un ataque de 'prompt injection' en el contexto de agentes de IA?",
    options: [
      "Un método para inyectar código Python en el runtime del agente",
      "Un ataque donde texto malicioso en los datos del entorno intenta reemplazar las instrucciones originales del agente",
      "Una técnica para mejorar el rendimiento del LLM con prompts especiales",
      "Un error de programación al construir el prompt del sistema",
    ],
    correctIndex: 1,
    explanation: "La prompt injection ocurre cuando datos externos (documentos, páginas web) contienen instrucciones maliciosas que intentan secuestrar el comportamiento del agente.",
  },
  {
    question: "¿Cuál es la diferencia entre prompt injection directa e indirecta?",
    options: [
      "La directa es más peligrosa; la indirecta es inofensiva",
      "La directa viene del usuario en el chat; la indirecta viene de datos externos que el agente procesa (documentos, web, emails)",
      "La directa afecta solo al LLM; la indirecta afecta a las herramientas",
      "No hay diferencia, son el mismo tipo de ataque",
    ],
    correctIndex: 1,
    explanation: "Injection directa: el usuario escribe instrucciones maliciosas. Injection indirecta: un documento o página web visitada por el agente contiene las instrucciones maliciosas.",
  },
  {
    question: "¿Qué es un 'jailbreak' de un modelo de lenguaje?",
    options: [
      "Un método para extraer el código fuente del modelo",
      "Una técnica para eludir las restricciones de seguridad del modelo y hacer que genere contenido no permitido",
      "Un proceso de fine-tuning no autorizado del modelo",
      "Un ataque de denegación de servicio contra la API del LLM",
    ],
    correctIndex: 1,
    explanation: "Los jailbreaks son prompts diseñados para que el modelo ignore sus instrucciones de seguridad, generalmente usando roleplay, encoding o instrucciones contradictorias.",
  },
  {
    question: "¿Cuál de estas es una buena práctica de 'input sanitization' para proteger un agente de IA?",
    options: [
      "Bloquear todas las queries que contengan más de 50 palabras",
      "Validar y filtrar los inputs del usuario antes de pasarlos al LLM, detectando patrones de injection conocidos",
      "Usar el modelo más potente para que detecte ataques automáticamente",
      "No guardar histórico de conversaciones para evitar ataques",
    ],
    correctIndex: 1,
    explanation: "La sanitización de inputs incluye validar longitud, detectar patrones maliciosos conocidos y limpiar caracteres especiales antes de incluir el input en el prompt.",
  },
  {
    question: "¿Qué es una 'guardrail' (barrera de seguridad) en una aplicación de IA?",
    options: [
      "Un límite de tokens por request para controlar costos",
      "Un componente que valida las entradas o salidas del LLM para garantizar que cumplan políticas de seguridad y uso aceptable",
      "Un tipo especial de system prompt para agentes",
      "Un test automático del pipeline de CI/CD",
    ],
    correctIndex: 1,
    explanation: "Las guardrails son capas de validación (pre o post-LLM) que detectan y bloquean contenido dañino, información sensible o comportamientos fuera de política.",
  },
  {
    question: "¿Cuál es el rol del 'system prompt' en la definición de comportamiento de un agente?",
    options: [
      "Define el modelo de LLM que se va a usar",
      "Establece las instrucciones base, personalidad, herramientas disponibles y restricciones de comportamiento del agente",
      "Almacena el histórico de conversaciones del agente",
      "Configura los parámetros de despliegue en Vercel",
    ],
    correctIndex: 1,
    explanation: "El system prompt es la fundación del agente: define su rol, cómo debe comportarse, qué herramientas tiene disponibles y qué límites debe respetar.",
  },
  {
    question: "¿Cuál es el beneficio de usar Docker para desplegar un agente de IA?",
    options: [
      "Docker entrena el modelo de lenguaje más rápido",
      "Garantiza que la aplicación se ejecute de forma idéntica en cualquier entorno, empaquetando todas las dependencias",
      "Reduce el costo de las llamadas a la API del LLM",
      "Permite usar modelos de lenguaje sin conexión a internet",
    ],
    correctIndex: 1,
    explanation: "Docker crea contenedores reproducibles. El mismo contenedor funciona igual en desarrollo, staging y producción, eliminando problemas de 'funciona en mi máquina'.",
  },
  {
    question: "¿Qué es el 'planning' en la construcción de un agente multi-paso?",
    options: [
      "Documentar el código del agente antes de escribirlo",
      "La capacidad del agente de descomponer un objetivo complejo en sub-tareas ordenadas antes de ejecutarlas",
      "Planificar los costos de API antes de lanzar el agente",
      "El módulo que gestiona la memoria a largo plazo del agente",
    ],
    correctIndex: 1,
    explanation: "El planning permite al agente razonar sobre cómo dividir una tarea compleja en pasos manejables y ejecutarlos en el orden correcto para lograr el objetivo.",
  },
  {
    question: "¿Qué mecanismo de manejo de errores es crucial en un agente autónomo?",
    options: [
      "Reiniciar el servidor ante cualquier error",
      "Implementar retry logic con backoff exponencial y límites máximos de reintentos para herramientas que fallan",
      "Ignorar errores menores para no interrumpir el flujo",
      "Mostrar el stack trace completo al usuario final",
    ],
    correctIndex: 1,
    explanation: "Los agentes deben manejar errores de herramientas con reintentos, límites y fallbacks. Sin esto, un error en una herramienta puede atascar al agente indefinidamente.",
  },
  {
    question: "¿Cuál es el desafío principal del deployment de un agente con ejecución larga (long-running)?",
    options: [
      "Los LLMs no pueden ejecutar tareas que tarden más de 30 segundos",
      "Las funciones serverless tienen timeouts cortos, por lo que tareas largas requieren arquitecturas de colas o trabajos en background",
      "Vercel no soporta agentes de IA por términos de servicio",
      "El streaming no funciona en tareas de larga duración",
    ],
    correctIndex: 1,
    explanation: "Las funciones serverless típicamente tienen timeout de 30-60 segundos. Para agentes con ejecución larga se usan colas (ej: Redis Queue) o plataformas de trabajos en background.",
  },
  {
    question: "¿Qué significa que un agente sea 'stateless' (sin estado) y cuáles son sus implicaciones?",
    options: [
      "Que el agente no puede guardar archivos en disco",
      "Que cada invocación es independiente y el agente no recuerda sesiones anteriores sin un sistema de memoria externo",
      "Que el agente no puede llamar herramientas externas",
      "Que el agente no tiene system prompt configurado",
    ],
    correctIndex: 1,
    explanation: "Un agente stateless no recuerda conversaciones anteriores entre sesiones. Para añadir memoria persistente se necesita una base de datos o store externo.",
  },
  {
    question: "¿Cuál es la ventaja de los 'resources' en el protocolo MCP?",
    options: [
      "Permiten al modelo de lenguaje acceder a GPUs adicionales",
      "Exponen datos estructurados (archivos, schemas de DB, resultados de API) que el LLM puede leer directamente como contexto",
      "Son una forma de cachear las respuestas del LLM",
      "Permiten comunicación directa entre dos modelos de lenguaje",
    ],
    correctIndex: 1,
    explanation: "Los MCP resources exponen datos legibles (archivos, consultas a DB, respuestas de APIs) que el LLM puede incluir en su contexto sin necesidad de herramientas adicionales.",
  },
  {
    question: "Al evaluar un agente de IA en producción, ¿qué métricas son más importantes monitorear?",
    options: [
      "Solo el número de usuarios activos por día",
      "Tasa de éxito de tareas, latencia promedio, costo por tarea, tasa de errores y casos de comportamiento inesperado",
      "Únicamente el costo total de la API del LLM",
      "La cantidad de tokens en el system prompt",
    ],
    correctIndex: 1,
    explanation: "Un agente en producción necesita monitoreo completo: ¿completa las tareas?, ¿en cuánto tiempo?, ¿a qué costo?, ¿falla con qué frecuencia?, ¿se comporta de forma inesperada?",
  },
  {
    question: "¿Cuál de estas prácticas mejora la seguridad al desplegar un agente de IA con herramientas poderosas?",
    options: [
      "Dar al agente acceso de administrador completo para que pueda completar cualquier tarea",
      "Aplicar el principio de mínimos privilegios: dar al agente solo los permisos estrictamente necesarios para cada herramienta",
      "No usar herramientas externas para evitar riesgos de seguridad",
      "Guardar las API keys directamente en el código del agente",
    ],
    correctIndex: 1,
    explanation: "El principio de mínimos privilegios limita el daño potencial de un ataque o error del agente. Un agente de lectura no necesita permisos de escritura.",
  },
  {
    question: "¿Qué es un 'MCP prompt' en el contexto del protocolo MCP?",
    options: [
      "El system prompt principal del agente",
      "Una plantilla de prompt predefinida que el servidor MCP expone y el cliente puede invocar con argumentos",
      "Un tipo especial de herramienta que genera texto",
      "El protocolo de autenticación entre cliente MCP y servidor MCP",
    ],
    correctIndex: 1,
    explanation: "Los MCP prompts son plantillas reutilizables expuestas por servidores MCP (ej: 'analizar código', 'resumir documento') que el cliente puede instanciar con parámetros.",
  },
  {
    question: "¿Cuál de estas situaciones describe un caso de uso adecuado para un agente de IA de nivel L4-L5?",
    options: [
      "Responder preguntas frecuentes en un chatbot de soporte con respuestas predefinidas",
      "Gestionar de forma autónoma un pipeline de datos: descarga, limpieza, análisis y generación de reporte, alertando solo si hay anomalías críticas",
      "Autocompletar texto mientras el usuario escribe en un editor",
      "Traducir documentos de un idioma a otro",
    ],
    correctIndex: 1,
    explanation: "Un agente L4-L5 maneja pipelines complejos de múltiples pasos con mínima supervisión humana, tomando decisiones y actuando de forma casi completamente autónoma.",
  },
  {
    question: "¿Qué es el 'function calling' en la API de un LLM como OpenAI o Anthropic?",
    options: [
      "Una forma de ejecutar código Python directamente dentro del modelo",
      "Un mecanismo por el cual el LLM devuelve una llamada estructurada a una función en lugar de texto, indicando qué herramienta usar y con qué parámetros",
      "Una API especial solo disponible en versiones de pago premium",
      "El proceso de fine-tuning con ejemplos de llamadas a funciones",
    ],
    correctIndex: 1,
    explanation: "Function calling permite al LLM responder con un objeto JSON estructurado {nombre_herramienta, argumentos} que el código del agente interpreta y ejecuta.",
  },
  {
    question: "¿Cuál es el riesgo de otorgar a un agente de IA acceso directo a ejecutar comandos de sistema operativo?",
    options: [
      "No hay riesgo si el agente está bien entrenado",
      "Un ataque de prompt injection o un error de razonamiento podría llevar al agente a ejecutar comandos destructivos o maliciosos",
      "El agente se volvería más lento por el overhead del sistema operativo",
      "Los LLMs no pueden generar comandos de sistema operativo",
    ],
    correctIndex: 1,
    explanation: "Acceso sin restricciones al SO es peligroso: un agente comprometido por injection o con razonamiento erróneo podría borrar archivos, escalar privilegios o exfiltrar datos.",
  },
  {
    question: "¿Qué ventaja ofrece un agente multi-herramienta sobre un chatbot con una sola capacidad?",
    options: [
      "El agente multi-herramienta siempre responde más rápido",
      "Puede combinar diferentes capacidades (buscar en web, leer archivos, calcular, escribir código) para resolver tareas complejas que ninguna herramienta individual podría completar",
      "Usa menos tokens por respuesta",
      "No requiere system prompt para funcionar correctamente",
    ],
    correctIndex: 1,
    explanation: "La potencia de los agentes multi-herramienta está en la composición: combinar búsqueda + lectura de archivos + ejecución de código permite resolver problemas que requieren múltiples pasos heterogéneos.",
  },
], emptyEnPartials);
