import type { QuizQuestion } from "./cursos-data";
import {
  curso1QuizEn,
  curso2QuizEn,
  curso3QuizEn,
  curso7QuizEn,
  curso8QuizEn,
  curso9QuizEn,
} from "./quiz-data-en";

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
], curso3QuizEn);

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
], curso9QuizEn);
