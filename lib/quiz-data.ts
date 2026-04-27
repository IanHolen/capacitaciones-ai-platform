import type { QuizQuestion } from "./cursos-data";

export const curso1Quiz: QuizQuestion[] = [
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
      "Leer tu mente para saber que queres comprar",
      "Filtrar los correos de spam en tu email",
      "Tomar decisiones importantes por vos sin consultarte",
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
      "La instrucción o pregunta que vos le das a la IA",
      "Un error que comete la IA",
      "El boton para encender la IA",
    ],
    correctIndex: 1,
    explanation:
      "Un prompt es lo que vos escribis o decis para comunicarte con la IA.",
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
];

export const curso2Quiz: QuizQuestion[] = [
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
];

export const curso3Quiz: QuizQuestion[] = [
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
];
