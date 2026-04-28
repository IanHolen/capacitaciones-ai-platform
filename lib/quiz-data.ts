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

export const curso4Quiz: QuizQuestion[] = [
  {
    question: "¿Cuál de estos asistentes de IA fue creado por Anthropic?",
    options: ["ChatGPT", "Gemini", "Claude", "Perplexity"],
    correctIndex: 2,
    explanation: "Claude fue creado por Anthropic, una empresa fundada por ex-investigadores de OpenAI.",
  },
  {
    question: "¿Cuál es la ventaja más destacada de Claude frente a los otros asistentes?",
    options: [
      "Acceso a Gmail y Google Drive",
      "Puede leer y analizar documentos de hasta 200 páginas de una sola vez",
      "Tiene el modo voz más avanzado",
      "Genera imágenes con inteligencia artificial",
    ],
    correctIndex: 1,
    explanation: "Claude puede procesar documentos de hasta 200 páginas de una vez, ideal para contratos, manuales e informes extensos.",
  },
  {
    question: "¿Qué son los 'Artifacts' en Claude?",
    options: [
      "Versiones especializadas de Claude para tareas concretas",
      "Archivos adjuntos que se suben al chat",
      "Un panel separado donde Claude organiza contenido extenso sin mezclarlo con el chat",
      "Las conversaciones guardadas en favoritos",
    ],
    correctIndex: 2,
    explanation: "Los Artifacts son un panel lateral derecho donde Claude coloca contenido largo como informes, tablas o planes, separado del chat.",
  },
  {
    question: "¿Qué función exclusiva de Gemini permite verificar sus propias respuestas contra internet?",
    options: [
      "El botón de Gems",
      "El botón 'G' (Verificar con Google)",
      "El modo de extensiones",
      "El panel de Artifacts",
    ],
    correctIndex: 1,
    explanation: "El botón 'G' verifica la respuesta de Gemini contra fuentes web: las partes en verde están respaldadas y las en naranja son dudosas.",
  },
  {
    question: "¿Cuándo se recomienda usar Perplexity en lugar de ChatGPT o Claude?",
    options: [
      "Para escribir cartas formales y correos",
      "Para analizar un contrato extenso",
      "Para buscar información actualizada de internet con fuentes verificables",
      "Para tener una conversación fluida por voz",
    ],
    correctIndex: 2,
    explanation: "Perplexity busca en internet en tiempo real y presenta respuestas organizadas con fuentes, ideal para noticias, precios actuales o información reciente.",
  },
  {
    question: "¿Cuál es el 'kit de inicio' recomendado para alguien que está empezando con la IA?",
    options: ["Claude y Gemini", "ChatGPT y Perplexity", "Gemini y Perplexity", "Solo Claude es suficiente"],
    correctIndex: 1,
    explanation: "ChatGPT cubre el 80% de las tareas cotidianas y Perplexity se encarga de las búsquedas con información actual.",
  },
  {
    question: "¿Cuál asistente tiene el modo voz más avanzado y natural?",
    options: ["Claude", "Perplexity", "Gemini", "ChatGPT"],
    correctIndex: 3,
    explanation: "ChatGPT tiene un modo voz avanzado que permite conversaciones fluidas, posibilidad de interrumpir y respuestas con voces muy humanas.",
  },
  {
    question: "¿Qué ventaja tiene Gemini sobre los demás asistentes gratuitos?",
    options: [
      "Puede leer documentos de hasta 200 páginas",
      "Tiene el mejor modo voz del mercado",
      "Está integrado con Gmail, Google Drive, Maps y YouTube",
      "Es el único que funciona sin conexión a internet",
    ],
    correctIndex: 2,
    explanation: "La gran ventaja de Gemini es su integración con todo el ecosistema de Google mediante extensiones.",
  },
  {
    question: "Si necesitas resumir un contrato de 80 páginas, ¿qué herramienta deberías usar?",
    options: ["Perplexity", "Gemini", "ChatGPT básico", "Claude"],
    correctIndex: 3,
    explanation: "Claude es la mejor opción para documentos largos porque puede procesar hasta 200 páginas de una sola vez.",
  },
  {
    question: "¿Cuál es la diferencia clave entre los 'GPTs' de ChatGPT y los 'Gems' de Gemini?",
    options: [
      "Los GPTs son de pago y los Gems son gratuitos",
      "Ambos son versiones especializadas del asistente pero en plataformas diferentes",
      "Los GPTs generan imágenes y los Gems no",
      "Los Gems tienen acceso a internet y los GPTs no",
    ],
    correctIndex: 1,
    explanation: "Tanto los GPTs como los Gems son versiones del asistente configuradas para tareas específicas; la diferencia es que pertenecen a plataformas distintas.",
  },
];

export const curso5Quiz: QuizQuestion[] = [
  {
    question: "¿Cuáles son los 4 ingredientes de la fórmula para un buen prompt?",
    options: [
      "Pregunta, Respuesta, Verificación y Formato",
      "ROL, TAREA, CONTEXTO y FORMATO",
      "Tema, Idioma, Extensión y Tono",
      "Inicio, Desarrollo, Cierre y Revisión",
    ],
    correctIndex: 1,
    explanation: "La fórmula es ROL + TAREA + CONTEXTO + FORMATO. Cuantos más incluyas, mejor será el resultado.",
  },
  {
    question: "¿Qué hace el ingrediente ROL en un prompt?",
    options: [
      "Define cuántas palabras debe tener la respuesta",
      "Le indica a la IA desde qué perspectiva o expertise debe responder",
      "Configura el idioma de la conversación",
      "Determina la velocidad de la respuesta",
    ],
    correctIndex: 1,
    explanation: "Al decirle 'eres un médico' o 'eres una maestra', la IA ajusta su vocabulario, tono y nivel de detalle.",
  },
  {
    question: "¿Cuál es el truco de 'otra persona' para evaluar un prompt?",
    options: [
      "Pedirle a otra persona que escriba el prompt por ti",
      "Preguntarte si alguien sin conocer tu situación podría responder bien ese prompt",
      "Compartir el prompt con un amigo antes de enviarlo",
      "Escribir el prompt dos veces para comparar versiones",
    ],
    correctIndex: 1,
    explanation: "Si otra persona leyera tu prompt sin saber nada de tu situación, ¿podría responderlo bien? Si no, falta contexto.",
  },
  {
    question: "¿Cuál es la frase más útil para pedir un cambio específico en la respuesta anterior?",
    options: [
      "'No me gustó, empieza de cero'",
      "'Cámbialo todo'",
      "'Hazlo otra vez pero [cambio específico]'",
      "'Escribe algo diferente'",
    ],
    correctIndex: 2,
    explanation: "'Hazlo otra vez pero...' indica a la IA que mantenga lo esencial y aplique solo el cambio específico.",
  },
  {
    question: "¿Cuántas veces puedes pedirle ajustes a la IA dentro de una misma conversación?",
    options: ["Máximo 3 veces", "Solo una vez por sesión", "Sin límite", "Solo en la versión de pago"],
    correctIndex: 2,
    explanation: "Puedes iterar sin límite. La IA no se cansa ni se ofende, y cada ajuste te acerca más al resultado ideal.",
  },
  {
    question: "¿Qué tipo de contexto corresponde a 'sin fritos, bajo en sal y sin azúcar añadida'?",
    options: ["Contexto personal", "Contexto de la situación", "Contexto del destinatario", "Contexto de restricciones"],
    correctIndex: 3,
    explanation: "El contexto de restricciones incluye limitaciones o requisitos específicos como restricciones alimentarias, presupuesto o extensión.",
  },
  {
    question: "¿Cuál de estos es un ejemplo de 'contexto del destinatario'?",
    options: [
      "'Explícame en menos de 100 palabras'",
      "'Soy jubilada y tengo 68 años'",
      "'Lo voy a publicar en el grupo de WhatsApp de mis amigas'",
      "'Sin términos técnicos'",
    ],
    correctIndex: 2,
    explanation: "El contexto del destinatario describe a la persona que va a leer o usar el resultado.",
  },
  {
    question: "¿En qué situación puede ser útil hacer un prompt vago intencionalmente?",
    options: [
      "Nunca, siempre hay que ser específico",
      "Cuando quieres explorar ideas o buscar inspiración sin dirección fija",
      "Cuando usas la versión gratuita del asistente",
      "Cuando el tema es de salud",
    ],
    correctIndex: 1,
    explanation: "Un prompt más abierto puede ser útil para brainstorming. Para tareas concretas, siempre es mejor ser específico.",
  },
  {
    question: "En el proceso de iteración con la IA, ¿cuál es el orden correcto?",
    options: [
      "Aceptar → pedir → verificar → mejorar",
      "Pedir → recibir respuesta → indicar ajuste → recibir versión mejorada",
      "Planificar → escribir → publicar → corregir",
      "Buscar → copiar → pegar → editar",
    ],
    correctIndex: 1,
    explanation: "La iteración sigue el ciclo: pides, la IA responde, dices qué cambiar, la IA mejora. Puedes repetir sin límite.",
  },
  {
    question: "¿Cuál de estas frases pide correctamente que se simplifique una respuesta?",
    options: [
      "'No lo entiendo'",
      "'Está mal'",
      "'Usa palabras más simples, como si me hablaras a mí que no soy experto'",
      "'Menos palabras'",
    ],
    correctIndex: 2,
    explanation: "Esta opción es específica y da contexto: qué quieres (palabras simples) y por qué (no eres experto).",
  },
];

export const curso6Quiz: QuizQuestion[] = [
  {
    question: "¿Cuáles son las tres formas de usar la IA para escribir correos y mensajes?",
    options: [
      "Dictar, copiar y traducir",
      "Escribir desde cero, mejorar lo que ya escribiste y adaptar el tono",
      "Buscar, resumir y publicar",
      "Crear, guardar y enviar",
    ],
    correctIndex: 1,
    explanation: "Las tres formas son: escribir desde cero, mejorar lo que ya escribiste, y adaptar el tono para diferentes destinatarios.",
  },
  {
    question: "¿Qué prompt describe mejor cómo pedirle una receta a la IA con lo que tienes en casa?",
    options: [
      "'Dame una receta'",
      "'¿Qué puedo cocinar?'",
      "'Tengo arroz, pollo, cebolla y ajo. ¿Qué puedo hacer para 2 personas en menos de 30 minutos sin usar el horno?'",
      "'Ayúdame a cocinar algo rico'",
    ],
    correctIndex: 2,
    explanation: "Este prompt incluye ingredientes, cantidad de personas, tiempo máximo y restricción, dando toda la información necesaria.",
  },
  {
    question: "¿Cuál es la regla de oro para usar la IA con las tareas escolares?",
    options: [
      "Pedirle que haga toda la tarea para ahorrar tiempo",
      "No usar la IA para educación porque confunde",
      "Ayudar a entender el tema, no dar las respuestas directamente",
      "Usarla solo para materias de ciencias",
    ],
    correctIndex: 2,
    explanation: "La IA es más valiosa cuando explica conceptos y crea ejercicios de práctica, sin hacer la tarea en lugar del alumno.",
  },
  {
    question: "¿Cuál es el método más simple para resumir un artículo con la IA?",
    options: [
      "Subir el archivo PDF directamente",
      "Copiar el texto, pegarlo en el chat y pedir el resumen",
      "Escribir el título del artículo y pedir que lo busque",
      "Fotografiar el texto y subirlo como imagen",
    ],
    correctIndex: 1,
    explanation: "El método copy-paste es el más simple: seleccionas el texto, lo copias, lo pegas en el chat con la instrucción.",
  },
  {
    question: "¿Por qué la IA traduce mejor que un diccionario para frases cotidianas?",
    options: [
      "Porque traduce más rápido que cualquier herramienta",
      "Porque entiende el contexto y las expresiones idiomáticas, no solo las palabras",
      "Porque siempre usa un estilo más formal y preciso",
      "Porque puede traducir solo del inglés al español",
    ],
    correctIndex: 1,
    explanation: "La IA entiende expresiones como 'it's raining cats and dogs' en su contexto real, no literalmente.",
  },
  {
    question: "¿Cuál es el mejor flujo para planear un viaje con IA?",
    options: [
      "Usar solo ChatGPT para toda la planificación",
      "Usar Perplexity para información actualizada y ChatGPT para el itinerario personalizado",
      "Usar Claude para el itinerario y Gemini para las traducciones",
      "Buscar todo en Google y luego pedirle a la IA que lo organice",
    ],
    correctIndex: 1,
    explanation: "Perplexity para información actualizada (precios, visa) y ChatGPT para armar el itinerario personalizado.",
  },
  {
    question: "¿Qué tipo de resumen debes pedir cuando quieres saber qué acción tomar?",
    options: ["Resumen ejecutivo", "Resumen en bullets", "Resumen comparativo", "Resumen de acción"],
    correctIndex: 3,
    explanation: "El resumen de acción te dice qué hacer: '¿Cuáles son las 3 cosas concretas que debo hacer según este artículo?'",
  },
  {
    question: "¿Cuándo no es suficiente el resumen de la IA para documentos importantes?",
    options: [
      "Cuando el documento tiene más de 10 páginas",
      "Para asuntos legales o médicos críticos, donde se necesita un profesional",
      "Cuando el texto está en otro idioma",
      "Nunca, la IA siempre resume correctamente",
    ],
    correctIndex: 1,
    explanation: "Para documentos legales o decisiones médicas críticas, el resumen de la IA es un punto de partida, no un reemplazo profesional.",
  },
  {
    question: "Para adaptar el mismo mensaje a diferentes destinatarios, ¿cuál es la forma más eficiente?",
    options: [
      "Crear un prompt nuevo para cada versión",
      "Usar herramientas diferentes para cada destinatario",
      "Pedir las adaptaciones de tono en la misma conversación, una tras otra",
      "Escribir las tres versiones manualmente",
    ],
    correctIndex: 2,
    explanation: "En la misma conversación puedes pedir múltiples adaptaciones: 'Ahora haz una versión formal' y luego 'Ahora una informal'.",
  },
  {
    question: "Según el curso, ¿para cuál de estas situaciones NO es recomendable depender solo de la IA?",
    options: [
      "Escribir un mensaje de cumpleaños",
      "Planificar el menú semanal",
      "Firmar un contrato legal o tomar una decisión médica crítica",
      "Buscar frases útiles antes de un viaje",
    ],
    correctIndex: 2,
    explanation: "Para contratos legales o decisiones médicas críticas siempre se debe consultar a un profesional certificado.",
  },
];
