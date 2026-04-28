import type { QuizQuestion } from "./cursos-data";

function mergeEnglish(
  esQuestions: QuizQuestion[],
  enPartials: Partial<QuizQuestion>[],
): QuizQuestion[] {
  return esQuestions.map((q, i) => ({
    ...q,
    ...(enPartials[i] ?? {}),
  }));
}

// ─── Curso 10: Crea tu propio asistente de IA ───────────────────────────────

export const curso10Quiz: QuizQuestion[] = mergeEnglish(
  [
    {
      question: "Qué es un Custom GPT?",
      options: [
        "Una versión más cara de ChatGPT",
        "Una versión personalizada de ChatGPT con instrucciones y documentos propios",
        "Un programa que hay que instalar en la computadora",
        "Un robot físico que usa IA",
      ],
      correctIndex: 1,
      explanation:
        "Un Custom GPT es una versión personalizada que tú configuras con instrucciones, documentos y comportamiento específico.",
    },
    {
      question: "Cuál es la parte más importante de un Custom GPT?",
      options: [
        "El nombre",
        "La imagen de perfil",
        "Las instrucciones (system prompt)",
        "La cantidad de documentos",
      ],
      correctIndex: 2,
      explanation:
        "Las instrucciones definen cómo se comporta tu asistente y son el factor que más impacta en la calidad de las respuestas.",
    },
    {
      question: "Qué formato de documento NO se puede subir a un Custom GPT?",
      options: ["PDF", "CSV", "Archivos de video .mp4", "TXT"],
      correctIndex: 2,
      explanation:
        "Los archivos de video no se soportan. Se pueden subir PDFs, CSVs, TXT, DOCX, imágenes y otros formatos de texto.",
    },
    {
      question: "Qué significa RAG?",
      options: [
        "Rapid Automatic Generation",
        "Retrieval-Augmented Generation",
        "Random Answer Generator",
        "Real Artificial General intelligence",
      ],
      correctIndex: 1,
      explanation:
        "RAG significa Retrieval-Augmented Generation: buscar información relevante antes de generar la respuesta.",
    },
    {
      question:
        "Cuál es la ventaja principal de RAG sobre documentos estáticos?",
      options: [
        "Es más barato",
        "Permite acceder a información actualizada",
        "No requiere internet",
        "Funciona sin IA",
      ],
      correctIndex: 1,
      explanation:
        "RAG permite que el asistente acceda a datos actualizados en tiempo real, mientras que los documentos estáticos solo reflejan la información del momento en que fueron subidos.",
    },
    {
      question: "Qué debes hacer PRIMERO al probar tu asistente?",
      options: [
        "Publicarlo en la tienda",
        "Compartirlo con miles de personas",
        "Probarlo con preguntas esperadas (camino feliz)",
        "Borrar todas las instrucciones",
      ],
      correctIndex: 2,
      explanation:
        "Primero prueba con las preguntas que esperas que hagan tus usuarios para verificar que las respuestas básicas funcionan bien.",
    },
    {
      question:
        "Si tu asistente inventa información que no tiene, qué debes hacer?",
      options: [
        'Agregar más documentos y una instrucción de "si no sabes, di que no sabes"',
        "Reiniciar la computadora",
        "Cambiar el nombre del GPT",
        "No se puede arreglar",
      ],
      correctIndex: 0,
      explanation:
        "La combinación de más documentos de referencia y una instrucción explícita de reconocer limitaciones es la mejor solución.",
    },
    {
      question: "Cuál dato NUNCA debes subir como documento a tu asistente?",
      options: [
        "Tu catálogo de productos",
        "Preguntas frecuentes",
        "Contraseñas y datos bancarios de clientes",
        "Políticas de la empresa",
      ],
      correctIndex: 2,
      explanation:
        "Nunca subas información sensible como contraseñas, datos bancarios o información personal de terceros.",
    },
    {
      question: "Qué es un embedding en el contexto de RAG?",
      options: [
        "Un archivo adjunto",
        "Una representación numérica del texto que permite búsqueda por significado",
        "Una imagen insertada en el documento",
        "Un enlace a otro documento",
      ],
      correctIndex: 1,
      explanation:
        "Los embeddings convierten texto en números que representan su significado, permitiendo buscar por concepto además de por palabras exactas.",
    },
    {
      question: "Cuál es el ciclo correcto para mejorar un asistente?",
      options: [
        "Crear → Publicar → Olvidarse",
        "Probar → Identificar problemas → Ajustar instrucciones → Probar de nuevo",
        "Copiar instrucciones de otro GPT → Publicar",
        "Subir más documentos sin probar",
      ],
      correctIndex: 1,
      explanation:
        "El ciclo de mejora continua (probar, identificar, ajustar, repetir) es la forma correcta de mantener un asistente de calidad.",
    },
  ],
  [
    {
      questionEn: "What is a Custom GPT?",
      optionsEn: [
        "A more expensive version of ChatGPT",
        "A personalized version of ChatGPT with your own instructions and documents",
        "A program you have to install on your computer",
        "A physical robot that uses AI",
      ],
      explanationEn:
        "A Custom GPT is a personalized version that you configure with specific instructions, documents, and behavior.",
    },
    {
      questionEn: "What is the most important part of a Custom GPT?",
      optionsEn: [
        "The name",
        "The profile picture",
        "The instructions (system prompt)",
        "The number of documents",
      ],
      explanationEn:
        "The instructions define how your assistant behaves and are the factor that most impacts the quality of responses.",
    },
    {
      questionEn:
        "Which document format CANNOT be uploaded to a Custom GPT?",
      optionsEn: ["PDF", "CSV", "Video files .mp4", "TXT"],
      explanationEn:
        "Video files are not supported. You can upload PDFs, CSVs, TXT, DOCX, images, and other text formats.",
    },
    {
      questionEn: "What does RAG stand for?",
      optionsEn: [
        "Rapid Automatic Generation",
        "Retrieval-Augmented Generation",
        "Random Answer Generator",
        "Real Artificial General intelligence",
      ],
      explanationEn:
        "RAG stands for Retrieval-Augmented Generation: retrieving relevant information before generating the response.",
    },
    {
      questionEn:
        "What is the main advantage of RAG over static documents?",
      optionsEn: [
        "It is cheaper",
        "It allows access to updated information",
        "It does not require internet",
        "It works without AI",
      ],
      explanationEn:
        "RAG allows the assistant to access updated data in real time, while static documents only reflect the information from when they were uploaded.",
    },
    {
      questionEn: "What should you do FIRST when testing your assistant?",
      optionsEn: [
        "Publish it to the store",
        "Share it with thousands of people",
        "Test it with expected questions (happy path)",
        "Delete all instructions",
      ],
      explanationEn:
        "First test with the questions you expect your users to ask to verify that basic responses work well.",
    },
    {
      questionEn:
        "If your assistant makes up information it doesn't have, what should you do?",
      optionsEn: [
        "Add more documents and an instruction saying \"if you don't know, say you don't know\"",
        "Restart the computer",
        "Change the GPT's name",
        "It cannot be fixed",
      ],
      explanationEn:
        "The combination of more reference documents and an explicit instruction to acknowledge limitations is the best solution.",
    },
    {
      questionEn:
        "Which data should you NEVER upload as a document to your assistant?",
      optionsEn: [
        "Your product catalog",
        "Frequently asked questions",
        "Passwords and client banking data",
        "Company policies",
      ],
      explanationEn:
        "Never upload sensitive information such as passwords, banking data, or personal information of third parties.",
    },
    {
      questionEn: "What is an embedding in the context of RAG?",
      optionsEn: [
        "An attached file",
        "A numerical representation of text that enables search by meaning",
        "An image inserted in the document",
        "A link to another document",
      ],
      explanationEn:
        "Embeddings convert text into numbers that represent its meaning, allowing search by concept in addition to exact words.",
    },
    {
      questionEn: "What is the correct cycle to improve an assistant?",
      optionsEn: [
        "Create → Publish → Forget about it",
        "Test → Identify problems → Adjust instructions → Test again",
        "Copy instructions from another GPT → Publish",
        "Upload more documents without testing",
      ],
      explanationEn:
        "The continuous improvement cycle (test, identify, adjust, repeat) is the correct way to maintain a quality assistant.",
    },
  ],
);

// ─── Curso 11: Automatiza con IA ────────────────────────────────────────────

export const curso11Quiz: QuizQuestion[] = mergeEnglish(
  [
    {
      question: "Qué es la automatización con IA?",
      options: [
        "Hacer que los robots reemplacen a todos los humanos",
        "Usar IA para realizar tareas repetitivas de forma inteligente sin intervención manual",
        "Programar en un lenguaje de computadora",
        "Usar el celular más rápido",
      ],
      correctIndex: 1,
      explanation:
        "La automatización con IA permite que tareas repetitivas se realicen de forma inteligente, entendiendo contexto y tomando decisiones simples.",
    },
    {
      question: 'En Zapier, qué es un "Trigger"?',
      options: [
        "El nombre del flujo",
        "El evento que inicia la automatización",
        "El resultado final",
        "Un error en el sistema",
      ],
      correctIndex: 1,
      explanation:
        "El Trigger es el evento que dispara el flujo, como recibir un nuevo email o un formulario completado.",
    },
    {
      question: "Cuál es la ventaja principal de Make sobre Zapier?",
      options: [
        "Es más bonito",
        "Tiene más operaciones gratuitas y permite flujos más complejos",
        "Solo funciona en español",
        "No necesita internet",
      ],
      correctIndex: 1,
      explanation:
        "Make ofrece 1,000 operaciones gratis (vs 100 en Zapier) y tiene una interfaz visual de diagrama de flujo más potente.",
    },
    {
      question: "Qué es n8n?",
      options: [
        "Un nuevo modelo de IA",
        "Una herramienta de automatización gratuita y de código abierto",
        "Un lenguaje de programación",
        "Un servicio de email",
      ],
      correctIndex: 1,
      explanation:
        "n8n es una herramienta de automatización open source que puedes usar gratis instalándola en tu propio servidor.",
    },
    {
      question:
        "Al automatizar respuestas de email, cuál es la mejor práctica para empezar?",
      options: [
        "Activar el envío automático inmediatamente",
        "Configurar las respuestas como borrador para revisarlas antes de enviar",
        "Responder todos los emails con la misma respuesta genérica",
        "Dejar de leer emails por completo",
      ],
      correctIndex: 1,
      explanation:
        "Empezar con borradores permite revisar la calidad de las respuestas automáticas antes de confiar en el envío directo.",
    },
    {
      question: 'Qué es "vibe coding"?',
      options: [
        "Programar mientras escuchas música",
        "Crear aplicaciones describiendo lo que quieres en lenguaje natural",
        "Un estilo de diseño web",
        "Una marca de computadoras",
      ],
      correctIndex: 1,
      explanation:
        "Vibe coding es describir en español (o cualquier idioma) lo que quieres que haga una aplicación, y la IA genera el código.",
    },
    {
      question: "Cuál de estas herramientas es para vibe coding?",
      options: ["Microsoft Excel", "Bolt.new", "Gmail", "Spotify"],
      correctIndex: 1,
      explanation:
        "Bolt.new permite crear aplicaciones web completas desde una descripción en lenguaje natural.",
    },
    {
      question:
        "Un reporte semanal automático de ventas típicamente incluye:",
      options: [
        "Solo un número total",
        "Resumen, métricas clave, comparación con período anterior y recomendaciones",
        "Una foto del equipo",
        "Solo los nombres de los vendedores",
      ],
      correctIndex: 1,
      explanation:
        "Un reporte automático bien configurado incluye resumen ejecutivo, métricas, comparaciones y recomendaciones accionables.",
    },
    {
      question:
        "Por qué es importante supervisar las automatizaciones de email?",
      options: [
        "Porque son ilegales",
        "Porque la IA puede generar respuestas incorrectas o inapropiadas",
        "Porque ocupan mucha memoria",
        "Porque son muy lentas",
      ],
      correctIndex: 1,
      explanation:
        "La IA puede cometer errores o generar respuestas inadecuadas, por lo que es crucial supervisar especialmente al inicio.",
    },
    {
      question:
        "Cuál es el primer paso recomendado para empezar con automatización?",
      options: [
        "Automatizar todos los procesos de la empresa al mismo tiempo",
        "Identificar una tarea repetitiva que haces todos los días y automatizarla",
        "Comprar el plan más caro de todas las herramientas",
        "Aprender a programar desde cero",
      ],
      correctIndex: 1,
      explanation:
        "Empieza con una sola tarea repetitiva. Una vez que funciona bien, expande a otras tareas.",
    },
  ],
  [
    {
      questionEn: "What is AI automation?",
      optionsEn: [
        "Having robots replace all humans",
        "Using AI to perform repetitive tasks intelligently without manual intervention",
        "Programming in a computer language",
        "Using your phone faster",
      ],
      explanationEn:
        "AI automation allows repetitive tasks to be performed intelligently, understanding context and making simple decisions.",
    },
    {
      questionEn: 'In Zapier, what is a "Trigger"?',
      optionsEn: [
        "The name of the flow",
        "The event that starts the automation",
        "The final result",
        "A system error",
      ],
      explanationEn:
        "The Trigger is the event that fires the flow, such as receiving a new email or a completed form.",
    },
    {
      questionEn: "What is the main advantage of Make over Zapier?",
      optionsEn: [
        "It is prettier",
        "It has more free operations and allows more complex flows",
        "It only works in Spanish",
        "It does not need internet",
      ],
      explanationEn:
        "Make offers 1,000 free operations (vs 100 in Zapier) and has a more powerful visual flowchart interface.",
    },
    {
      questionEn: "What is n8n?",
      optionsEn: [
        "A new AI model",
        "A free and open-source automation tool",
        "A programming language",
        "An email service",
      ],
      explanationEn:
        "n8n is an open source automation tool you can use for free by installing it on your own server.",
    },
    {
      questionEn:
        "When automating email responses, what is the best practice to start?",
      optionsEn: [
        "Activate automatic sending immediately",
        "Set up responses as drafts to review them before sending",
        "Reply to all emails with the same generic response",
        "Stop reading emails entirely",
      ],
      explanationEn:
        "Starting with drafts allows you to review the quality of automatic responses before trusting direct sending.",
    },
    {
      questionEn: 'What is "vibe coding"?',
      optionsEn: [
        "Programming while listening to music",
        "Creating applications by describing what you want in natural language",
        "A web design style",
        "A computer brand",
      ],
      explanationEn:
        "Vibe coding is describing in plain language what you want an application to do, and AI generates the code.",
    },
    {
      questionEn: "Which of these tools is for vibe coding?",
      optionsEn: ["Microsoft Excel", "Bolt.new", "Gmail", "Spotify"],
      explanationEn:
        "Bolt.new allows you to create complete web applications from a natural language description.",
    },
    {
      questionEn:
        "An automatic weekly sales report typically includes:",
      optionsEn: [
        "Just a total number",
        "Summary, key metrics, comparison with previous period, and recommendations",
        "A team photo",
        "Just the names of the salespeople",
      ],
      explanationEn:
        "A well-configured automatic report includes an executive summary, metrics, comparisons, and actionable recommendations.",
    },
    {
      questionEn:
        "Why is it important to supervise email automations?",
      optionsEn: [
        "Because they are illegal",
        "Because AI can generate incorrect or inappropriate responses",
        "Because they take up a lot of memory",
        "Because they are very slow",
      ],
      explanationEn:
        "AI can make errors or generate inadequate responses, so it is crucial to supervise especially at the beginning.",
    },
    {
      questionEn:
        "What is the first recommended step to start with automation?",
      optionsEn: [
        "Automate all company processes at the same time",
        "Identify a repetitive task you do every day and automate it",
        "Buy the most expensive plan for all tools",
        "Learn to program from scratch",
      ],
      explanationEn:
        "Start with a single repetitive task. Once it works well, expand to other tasks.",
    },
  ],
);

// ─── Curso 12: Introducción a las APIs de IA ────────────────────────────────

export const curso12Quiz: QuizQuestion[] = mergeEnglish(
  [
    {
      question: "Qué es una API en el contexto de IA?",
      options: [
        "Una página web para chatear con IA",
        "Un intermediario que permite a tu programa comunicarse con un servicio de IA",
        "Un tipo de inteligencia artificial",
        "Una aplicación para celular",
      ],
      correctIndex: 1,
      explanation:
        "La API es el intermediario que permite que tu código envíe solicitudes al modelo de IA y reciba respuestas.",
    },
    {
      question: "Qué es una API Key?",
      options: [
        "Un teclado especial para programadores",
        "Una credencial única que te identifica ante el servicio de IA",
        "El nombre de un modelo de IA",
        "Un tipo de archivo",
      ],
      correctIndex: 1,
      explanation:
        "La API Key es tu credencial de acceso — como una contraseña que identifica tu cuenta ante el servicio.",
    },
    {
      question: "Dónde debe estar tu API Key en una aplicación web?",
      options: [
        "En el código del frontend (visible al usuario)",
        "En el código del servidor (backend), nunca visible al usuario",
        "En el nombre de dominio",
        "En el título de la página",
      ],
      correctIndex: 1,
      explanation:
        "La API Key siempre debe estar en el servidor. Si está en el frontend, cualquiera puede verla y usarla.",
    },
    {
      question: "Cuál es la ventaja principal de Groq sobre otros proveedores?",
      options: [
        "Es más inteligente",
        "Es extremadamente rápido gracias a su hardware especializado",
        "Es el único gratuito",
        "Solo funciona en español",
      ],
      correctIndex: 1,
      explanation:
        "Groq usa hardware LPU especializado que permite respuestas en milisegundos, mucho más rápido que otros proveedores.",
    },
    {
      question:
        'Qué significa que Gemini y Groq son "OpenAI-compatible"?',
      options: [
        "Que son de la misma empresa",
        "Que puedes usar el mismo código cambiando solo la URL y la API Key",
        "Que son idénticos a ChatGPT",
        "Que necesitas una cuenta de OpenAI",
      ],
      correctIndex: 1,
      explanation:
        "El formato OpenAI-compatible permite reutilizar el mismo código — solo cambias la URL base y la API Key para cambiar de proveedor.",
    },
    {
      question:
        "Aproximadamente, cuánto cuesta un chatbot con 100 conversaciones diarias usando Gemini Flash-Lite?",
      options: [
        "$500 al mes",
        "$50 al mes",
        "Menos de $1 al mes",
        "Es imposible de calcular",
      ],
      correctIndex: 2,
      explanation:
        "Con Gemini Flash-Lite, 100 conversaciones diarias cuestan aproximadamente $0.60 al mes — y las primeras 1,500 diarias son gratis.",
    },
    {
      question: "Cuál es la mejor estrategia para reducir costos de API?",
      options: [
        "Usar siempre el modelo más caro para mejor calidad",
        "Elegir el modelo adecuado para cada tarea y optimizar los prompts",
        "No usar caché nunca",
        "Hacer la misma pregunta muchas veces para verificar",
      ],
      correctIndex: 1,
      explanation:
        "Elegir el modelo correcto (no siempre el más caro) y escribir prompts eficientes son las formas más efectivas de reducir costos.",
    },
    {
      question: 'Qué es un "token" en el contexto de APIs de IA?',
      options: [
        "Una moneda digital",
        "La unidad de texto que procesa la IA, aproximadamente 0.75 palabras",
        "Un tipo de API Key",
        "Un archivo de configuración",
      ],
      correctIndex: 1,
      explanation:
        "Un token es la unidad mínima de texto que la IA procesa. En español, 1 token equivale a aproximadamente 0.75 palabras.",
    },
    {
      question:
        "Cuál es la forma más rápida de poner un chatbot en tu página web?",
      options: [
        "Contratar un equipo de 10 programadores",
        "Usar un widget sin código como Chatbase",
        "Reescribir toda tu página web",
        "Instalar una aplicación de escritorio",
      ],
      correctIndex: 1,
      explanation:
        "Widgets como Chatbase permiten agregar un chatbot a tu web copiando y pegando unas líneas de código, sin programar.",
    },
    {
      question:
        "Si tu API Key se filtra accidentalmente, qué debes hacer?",
      options: [
        "Esperar a ver si alguien la usa",
        "Revocar la llave inmediatamente y crear una nueva",
        "No pasa nada, las API Keys no son importantes",
        "Cambiar el nombre de tu proyecto",
      ],
      correctIndex: 1,
      explanation:
        "Si una API Key se filtra, debes revocarla inmediatamente desde el panel del proveedor y generar una nueva.",
    },
  ],
  [
    {
      questionEn: "What is an API in the context of AI?",
      optionsEn: [
        "A web page to chat with AI",
        "An intermediary that allows your program to communicate with an AI service",
        "A type of artificial intelligence",
        "A mobile application",
      ],
      explanationEn:
        "The API is the intermediary that allows your code to send requests to the AI model and receive responses.",
    },
    {
      questionEn: "What is an API Key?",
      optionsEn: [
        "A special keyboard for programmers",
        "A unique credential that identifies you to the AI service",
        "The name of an AI model",
        "A type of file",
      ],
      explanationEn:
        "The API Key is your access credential — like a password that identifies your account to the service.",
    },
    {
      questionEn: "Where should your API Key be in a web application?",
      optionsEn: [
        "In the frontend code (visible to the user)",
        "In the server code (backend), never visible to the user",
        "In the domain name",
        "In the page title",
      ],
      explanationEn:
        "The API Key should always be on the server. If it is in the frontend, anyone can see and use it.",
    },
    {
      questionEn:
        "What is the main advantage of Groq over other providers?",
      optionsEn: [
        "It is smarter",
        "It is extremely fast thanks to its specialized hardware",
        "It is the only free one",
        "It only works in Spanish",
      ],
      explanationEn:
        "Groq uses specialized LPU hardware that enables responses in milliseconds, much faster than other providers.",
    },
    {
      questionEn:
        'What does it mean that Gemini and Groq are "OpenAI-compatible"?',
      optionsEn: [
        "That they are from the same company",
        "That you can use the same code by only changing the URL and API Key",
        "That they are identical to ChatGPT",
        "That you need an OpenAI account",
      ],
      explanationEn:
        "The OpenAI-compatible format allows reusing the same code — you only change the base URL and API Key to switch providers.",
    },
    {
      questionEn:
        "Approximately, how much does a chatbot with 100 daily conversations cost using Gemini Flash-Lite?",
      optionsEn: [
        "$500 per month",
        "$50 per month",
        "Less than $1 per month",
        "It is impossible to calculate",
      ],
      explanationEn:
        "With Gemini Flash-Lite, 100 daily conversations cost approximately $0.60 per month — and the first 1,500 daily are free.",
    },
    {
      questionEn: "What is the best strategy to reduce API costs?",
      optionsEn: [
        "Always use the most expensive model for better quality",
        "Choose the right model for each task and optimize prompts",
        "Never use caching",
        "Ask the same question many times to verify",
      ],
      explanationEn:
        "Choosing the right model (not always the most expensive) and writing efficient prompts are the most effective ways to reduce costs.",
    },
    {
      questionEn: 'What is a "token" in the context of AI APIs?',
      optionsEn: [
        "A digital currency",
        "The unit of text the AI processes, approximately 0.75 words",
        "A type of API Key",
        "A configuration file",
      ],
      explanationEn:
        "A token is the minimum unit of text that AI processes. In Spanish, 1 token equals approximately 0.75 words.",
    },
    {
      questionEn:
        "What is the fastest way to put a chatbot on your website?",
      optionsEn: [
        "Hire a team of 10 programmers",
        "Use a no-code widget like Chatbase",
        "Rewrite your entire website",
        "Install a desktop application",
      ],
      explanationEn:
        "Widgets like Chatbase allow you to add a chatbot to your website by copying and pasting a few lines of code, no programming needed.",
    },
    {
      questionEn:
        "If your API Key is accidentally leaked, what should you do?",
      optionsEn: [
        "Wait to see if someone uses it",
        "Revoke the key immediately and create a new one",
        "It does not matter, API Keys are not important",
        "Change the name of your project",
      ],
      explanationEn:
        "If an API Key is leaked, you should revoke it immediately from the provider's dashboard and generate a new one.",
    },
  ],
);

// ─── Curso 13: Python para IA ───────────────────────────────────────────────

export const curso13Quiz: QuizQuestion[] = mergeEnglish(
  [
    {
      question:
        "Cuál es la forma correcta de crear un f-string multilínea en Python para un prompt de IA?",
      options: [
        'prompt = f"Hola {nombre}. \\n Tema: {tema}"',
        'prompt = f"""Hola {nombre}. Tema: {tema}"""',
        'prompt = "Hola " + nombre + ". Tema: " + tema',
        'prompt = format("Hola {}, Tema: {}", nombre, tema)',
      ],
      correctIndex: 1,
      explanation:
        'Las triple comillas (f"""...""") permiten crear f-strings multilínea manteniendo el formato y la interpolación de variables, lo cual es ideal para prompts de IA complejos.',
    },
    {
      question:
        "Por qué es importante usar entornos virtuales (venv) en Python?",
      options: [
        "Porque Python no funciona sin un entorno virtual",
        "Porque hace que el código se ejecute más rápido",
        "Porque aísla las dependencias de cada proyecto evitando conflictos entre versiones",
        "Porque es un requisito de seguridad de las APIs de IA",
      ],
      correctIndex: 2,
      explanation:
        "Los entornos virtuales crean instalaciones aisladas de Python. Sin ellos, diferentes proyectos podrían requerir versiones incompatibles de las mismas librerías, causando errores difíciles de diagnosticar.",
    },
    {
      question:
        "Cuál es la diferencia principal en cómo se pasa el system prompt entre la API de OpenAI y la de Anthropic?",
      options: [
        "OpenAI no soporta system prompts",
        'En OpenAI va como un mensaje con role "system" en la lista; en Anthropic es un parámetro separado',
        'En Anthropic va como un mensaje con role "system" en la lista; en OpenAI es un parámetro separado',
        "Ambas APIs manejan el system prompt de la misma forma",
      ],
      correctIndex: 1,
      explanation:
        'En OpenAI, el system prompt se incluye como el primer mensaje con {"role": "system", "content": "..."}. En Anthropic, se pasa como el parámetro system="..." directamente en la llamada a messages.create().',
    },
    {
      question:
        "Qué hace el parámetro temperature al generar texto con un modelo de IA?",
      options: [
        "Controla la velocidad de generación del texto",
        "Controla la aleatoriedad/creatividad de la respuesta: valores bajos dan respuestas más predecibles, valores altos más creativas",
        "Controla cuántas respuestas alternativas genera el modelo",
        "Controla el idioma de la respuesta",
      ],
      correctIndex: 1,
      explanation:
        "La temperatura controla la distribución de probabilidad de los tokens. Con temperatura 0.0, el modelo siempre elige el token más probable (determinista). Con temperaturas altas (1.0+), explora opciones menos probables, generando respuestas más variadas y creativas.",
    },
    {
      question:
        "Cuál es la principal ventaja del streaming de respuestas?",
      options: [
        "Reduce el costo de la API",
        "Mejora la calidad de las respuestas del modelo",
        "Reduce la latencia percibida mostrando tokens a medida que se generan",
        "Permite enviar prompts más largos",
      ],
      correctIndex: 2,
      explanation:
        "El streaming no cambia la calidad ni el costo. Su ventaja es que el primer token llega en ~200ms en vez de esperar segundos a que se genere toda la respuesta, lo cual mejora drásticamente la experiencia de usuario.",
    },
    {
      question: "Qué es un embedding en el contexto de IA?",
      options: [
        "Un tipo de base de datos para almacenar textos",
        "Una representación numérica (vector) del significado semántico de un texto",
        "Un algoritmo de compresión de texto",
        "Un formato especial para enviar prompts a la API",
      ],
      correctIndex: 1,
      explanation:
        "Un embedding convierte texto en un vector de números (por ejemplo, 1536 dimensiones) que captura su significado semántico. Textos con significados similares producen vectores cercanos en el espacio vectorial.",
    },
    {
      question:
        "Qué métrica se usa para comparar qué tan similares son dos embeddings?",
      options: [
        "Distancia euclidiana",
        "Correlación de Pearson",
        "Similitud coseno",
        "Desviación estándar",
      ],
      correctIndex: 2,
      explanation:
        "La similitud coseno mide el ángulo entre dos vectores, retornando un valor entre -1 y 1. Un valor de 1.0 indica vectores idénticos en dirección (textos semánticamente iguales), mientras que 0.0 indica que no tienen relación.",
    },
    {
      question:
        "Por qué no se debe poner una API key directamente en el código fuente?",
      options: [
        "Porque hace que el código sea más lento",
        "Porque si el código se sube a un repositorio público, cualquiera podría usar tu API key y generar costos",
        "Porque las APIs no aceptan keys hardcodeadas",
        "Porque Python no permite strings largos en el código",
      ],
      correctIndex: 1,
      explanation:
        "Las API keys son credenciales secretas. Si se incluyen en el código y este se sube a GitHub u otro repositorio, bots automáticos pueden detectarlas en minutos y usarlas, generando costos enormes en tu cuenta. Por eso se usan archivos .env (excluidos de Git con .gitignore).",
    },
    {
      question:
        "Cuál es la principal ventaja de una base de datos vectorial (como Chroma) sobre buscar en una lista normal de embeddings?",
      options: [
        "Las bases de datos vectoriales generan embeddings de mayor calidad",
        "Las bases de datos vectoriales son gratuitas mientras que las listas cuestan dinero",
        "Las bases de datos vectoriales usan índices especiales para buscar vecinos cercanos de forma eficiente, sin comparar contra cada vector",
        "Las bases de datos vectoriales pueden almacenar más tipos de datos",
      ],
      correctIndex: 2,
      explanation:
        "Buscar en una lista requiere calcular la distancia contra cada elemento (O(n)). Las bases vectoriales usan estructuras como HNSW para hacer búsquedas aproximadas en O(log n), lo cual es crucial cuando tienes miles o millones de documentos.",
    },
    {
      question:
        'En un chatbot con memoria, cómo se implementa la "memoria" de la conversación?',
      options: [
        "El modelo de IA guarda internamente el historial de cada usuario",
        "Se envía la lista completa de mensajes previos (user + assistant) en cada llamada a la API",
        "Se usa una base de datos vectorial para guardar cada mensaje",
        'Se usa un prompt especial que dice "recordá lo anterior"',
      ],
      correctIndex: 1,
      explanation:
        "Los modelos de IA no tienen memoria entre llamadas. La \"memoria\" se implementa manteniendo una lista de todos los mensajes previos (tanto del usuario como del asistente) y enviándolos completos en cada nueva llamada a la API.",
    },
  ],
  [
    {
      questionEn:
        "What is the correct way to create a multiline f-string in Python for an AI prompt?",
      optionsEn: [
        'prompt = f"Hello {name}. \\n Topic: {topic}"',
        'prompt = f"""Hello {name}. Topic: {topic}"""',
        'prompt = "Hello " + name + ". Topic: " + topic',
        'prompt = format("Hello {}, Topic: {}", name, topic)',
      ],
      explanationEn:
        'Triple quotes (f"""...""") allow creating multiline f-strings while maintaining formatting and variable interpolation, which is ideal for complex AI prompts.',
    },
    {
      questionEn:
        "Why is it important to use virtual environments (venv) in Python?",
      optionsEn: [
        "Because Python does not work without a virtual environment",
        "Because it makes code run faster",
        "Because it isolates each project's dependencies avoiding version conflicts",
        "Because it is a security requirement of AI APIs",
      ],
      explanationEn:
        "Virtual environments create isolated Python installations. Without them, different projects could require incompatible versions of the same libraries, causing hard-to-diagnose errors.",
    },
    {
      questionEn:
        "What is the main difference in how the system prompt is passed between the OpenAI API and the Anthropic API?",
      optionsEn: [
        "OpenAI does not support system prompts",
        'In OpenAI it goes as a message with role "system" in the list; in Anthropic it is a separate parameter',
        'In Anthropic it goes as a message with role "system" in the list; in OpenAI it is a separate parameter',
        "Both APIs handle the system prompt the same way",
      ],
      explanationEn:
        'In OpenAI, the system prompt is included as the first message with {"role": "system", "content": "..."}. In Anthropic, it is passed as the system="..." parameter directly in the messages.create() call.',
    },
    {
      questionEn:
        "What does the temperature parameter do when generating text with an AI model?",
      optionsEn: [
        "Controls the speed of text generation",
        "Controls the randomness/creativity of the response: low values give more predictable responses, high values more creative",
        "Controls how many alternative responses the model generates",
        "Controls the language of the response",
      ],
      explanationEn:
        "Temperature controls the probability distribution of tokens. With temperature 0.0, the model always picks the most probable token (deterministic). With high temperatures (1.0+), it explores less probable options, generating more varied and creative responses.",
    },
    {
      questionEn:
        "What is the main advantage of response streaming?",
      optionsEn: [
        "Reduces the cost of the API",
        "Improves the quality of the model's responses",
        "Reduces perceived latency by showing tokens as they are generated",
        "Allows sending longer prompts",
      ],
      explanationEn:
        "Streaming does not change quality or cost. Its advantage is that the first token arrives in ~200ms instead of waiting seconds for the entire response to be generated, which drastically improves user experience.",
    },
    {
      questionEn: "What is an embedding in the context of AI?",
      optionsEn: [
        "A type of database for storing texts",
        "A numerical representation (vector) of the semantic meaning of text",
        "A text compression algorithm",
        "A special format for sending prompts to the API",
      ],
      explanationEn:
        "An embedding converts text into a vector of numbers (e.g., 1536 dimensions) that captures its semantic meaning. Texts with similar meanings produce nearby vectors in the vector space.",
    },
    {
      questionEn:
        "What metric is used to compare how similar two embeddings are?",
      optionsEn: [
        "Euclidean distance",
        "Pearson correlation",
        "Cosine similarity",
        "Standard deviation",
      ],
      explanationEn:
        "Cosine similarity measures the angle between two vectors, returning a value between -1 and 1. A value of 1.0 indicates identical directions (semantically equal texts), while 0.0 indicates no relationship.",
    },
    {
      questionEn:
        "Why should you not put an API key directly in the source code?",
      optionsEn: [
        "Because it makes the code slower",
        "Because if the code is uploaded to a public repository, anyone could use your API key and generate costs",
        "APIs do not accept hardcoded keys",
        "Because Python does not allow long strings in the code",
      ],
      explanationEn:
        "API keys are secret credentials. If included in the code and uploaded to GitHub or another repository, automated bots can detect them in minutes and use them, generating enormous costs on your account. That is why .env files (excluded from Git with .gitignore) are used.",
    },
    {
      questionEn:
        "What is the main advantage of a vector database (like Chroma) over searching a normal list of embeddings?",
      optionsEn: [
        "Vector databases generate higher quality embeddings",
        "Vector databases are free while lists cost money",
        "Vector databases use special indexes to search for nearest neighbors efficiently, without comparing against every vector",
        "Vector databases can store more types of data",
      ],
      explanationEn:
        "Searching a list requires calculating the distance against each element (O(n)). Vector databases use structures like HNSW for approximate searches in O(log n), which is crucial when you have thousands or millions of documents.",
    },
    {
      questionEn:
        'In a chatbot with memory, how is the conversation "memory" implemented?',
      optionsEn: [
        "The AI model internally stores each user's history",
        "The complete list of previous messages (user + assistant) is sent in each API call",
        "A vector database is used to save each message",
        'A special prompt is used that says "remember the previous"',
      ],
      explanationEn:
        "AI models have no memory between calls. \"Memory\" is implemented by maintaining a list of all previous messages (both user and assistant) and sending them in full with each new API call.",
    },
  ],
);

// ─── Curso 14: RAG y búsqueda inteligente ───────────────────────────────────

export const curso14Quiz: QuizQuestion[] = mergeEnglish(
  [
    {
      question:
        "Qué problema principal resuelve RAG (Retrieval-Augmented Generation)?",
      options: [
        "Hace que los LLMs generen texto más rápido",
        "Permite que los LLMs accedan a información externa que no estaba en su entrenamiento",
        "Reduce el costo de entrenamiento de modelos de lenguaje",
        "Mejora la gramática de las respuestas generadas",
      ],
      correctIndex: 1,
      explanation:
        "RAG resuelve el problema del conocimiento limitado de los LLMs, permitiéndoles acceder a información actualizada y privada que no formó parte de su entrenamiento, reduciendo así las alucinaciones.",
    },
    {
      question:
        "En el pipeline RAG, cuál es el orden correcto de los pasos?",
      options: [
        "Embeddings → Chunking → Búsqueda → Generación",
        "Chunking → Búsqueda → Embeddings → Generación",
        "Chunking → Embeddings → Búsqueda → Generación",
        "Búsqueda → Chunking → Embeddings → Generación",
      ],
      correctIndex: 2,
      explanation:
        "El pipeline correcto es: primero se dividen los documentos en chunks, luego se generan embeddings (vectores) de cada chunk, después se buscan los chunks más similares a la consulta, y finalmente el LLM genera una respuesta con ese contexto.",
    },
    {
      question:
        'Qué es el "overlap" en una estrategia de chunking?',
      options: [
        "La cantidad de documentos que se procesan en paralelo",
        "La superposición de texto entre chunks consecutivos para no perder contexto en los bordes",
        "El número de veces que se repite la búsqueda",
        "La distancia mínima entre embeddings para considerarlos similares",
      ],
      correctIndex: 1,
      explanation:
        "El overlap es la cantidad de texto que se comparte entre chunks consecutivos. Evita que información importante que cae en el límite entre dos chunks se pierda, asegurando continuidad de contexto.",
    },
    {
      question: "Qué son los embeddings en el contexto de RAG?",
      options: [
        "Fragmentos de texto extraídos de documentos",
        "Instrucciones que se le dan al LLM",
        "Representaciones numéricas (vectores) de texto que capturan su significado semántico",
        "Índices de bases de datos relacionales",
      ],
      correctIndex: 2,
      explanation:
        "Los embeddings son vectores de números (típicamente de 384 a 1536 dimensiones) que representan el significado semántico del texto. Textos con significados similares tendrán embeddings cercanos en el espacio vectorial.",
    },
    {
      question:
        "Cuál es la ventaja principal de RAG sobre fine-tuning para agregar conocimiento específico a un LLM?",
      options: [
        "RAG produce respuestas más largas",
        "RAG permite actualizar la información sin re-entrenar el modelo y ofrece trazabilidad de fuentes",
        "RAG es siempre más preciso que fine-tuning",
        "RAG no necesita ningún tipo de procesamiento previo",
      ],
      correctIndex: 1,
      explanation:
        "RAG permite actualizar datos instantáneamente (solo agregas documentos al índice), cita las fuentes de donde sacó la información, mantiene los datos privados separados del modelo, y es significativamente más barato y rápido que re-entrenar.",
    },
    {
      question:
        "Qué es MMR (Maximum Marginal Relevance) en el contexto de búsqueda?",
      options: [
        "Una métrica para medir la calidad de las respuestas del LLM",
        "Una técnica que balancea relevancia con diversidad en los resultados de búsqueda",
        "Un algoritmo para comprimir embeddings",
        "Un método para fusionar múltiples vector stores",
      ],
      correctIndex: 1,
      explanation:
        "MMR selecciona resultados que son relevantes para la consulta pero también diversos entre sí. Esto evita recuperar múltiples fragmentos redundantes que dicen lo mismo, maximizando la información útil que recibe el LLM.",
    },
    {
      question:
        'Qué mide la métrica "faithfulness" (fidelidad) en la evaluación de RAG?',
      options: [
        "Si los documentos recuperados son relevantes para la pregunta",
        "Si la respuesta generada es consistente con el contexto recuperado (no alucina)",
        "Si el usuario está satisfecho con la respuesta",
        "Si el modelo de embeddings es preciso",
      ],
      correctIndex: 1,
      explanation:
        "Faithfulness mide si las afirmaciones en la respuesta generada están soportadas por el contexto recuperado. Una fidelidad baja indica que el LLM está inventando información que no está en los documentos (alucinando).",
    },
    {
      question:
        "En una estrategia de búsqueda híbrida, qué se combina?",
      options: [
        "Dos modelos LLM diferentes",
        "Búsqueda por keywords (BM25) con búsqueda semántica (vectorial)",
        "Chunks grandes con chunks pequeños",
        "Embeddings de OpenAI con embeddings de Hugging Face",
      ],
      correctIndex: 1,
      explanation:
        "La búsqueda híbrida combina búsqueda por keywords (como BM25, que busca coincidencias exactas de palabras) con búsqueda semántica (vectorial, que entiende significado). Esto es especialmente útil porque la búsqueda semántica puede fallar con términos técnicos o códigos específicos donde la coincidencia exacta es mejor.",
    },
    {
      question: 'Qué es la técnica "parent-child chunking"?',
      options: [
        "Crear chunks para documentos principales y secundarios por separado",
        "Usar chunks pequeños para búsqueda precisa pero recuperar el chunk padre (más grande) para dar más contexto al LLM",
        "Dividir un documento primero por capítulos y luego por párrafos",
        "Indexar tanto el documento original como su resumen",
      ],
      correctIndex: 1,
      explanation:
        "Parent-child chunking crea dos niveles: chunks hijos pequeños que se usan para la búsqueda (porque son más específicos y dan mejor precision de matching), y chunks padres grandes que se envían al LLM (porque proporcionan más contexto para generar respuestas completas).",
    },
    {
      question:
        'Tienes un sistema RAG con alta "answer relevancy" pero baja "faithfulness". Qué está pasando?',
      options: [
        "El sistema no encuentra documentos relevantes",
        "Las respuestas son relevantes para la pregunta pero contienen información inventada que no está en los documentos",
        "El LLM es demasiado lento",
        "Los chunks son demasiado grandes",
      ],
      correctIndex: 1,
      explanation:
        "Alta relevancia con baja fidelidad significa que el LLM entiende qué se le está preguntando y genera respuestas que parecen apropiadas, pero está agregando información que no proviene del contexto recuperado (está alucinando).",
    },
  ],
  [
    {
      questionEn:
        "What main problem does RAG (Retrieval-Augmented Generation) solve?",
      optionsEn: [
        "It makes LLMs generate text faster",
        "It allows LLMs to access external information that was not in their training",
        "It reduces the cost of training language models",
        "It improves the grammar of generated responses",
      ],
      explanationEn:
        "RAG solves the problem of limited LLM knowledge, allowing them to access updated and private information that was not part of their training, thus reducing hallucinations.",
    },
    {
      questionEn:
        "In the RAG pipeline, what is the correct order of steps?",
      optionsEn: [
        "Embeddings → Chunking → Search → Generation",
        "Chunking → Search → Embeddings → Generation",
        "Chunking → Embeddings → Search → Generation",
        "Search → Chunking → Embeddings → Generation",
      ],
      explanationEn:
        "The correct pipeline is: first split documents into chunks, then generate embeddings (vectors) for each chunk, then search for the most similar chunks to the query, and finally the LLM generates a response with that context.",
    },
    {
      questionEn:
        'What is "overlap" in a chunking strategy?',
      optionsEn: [
        "The number of documents processed in parallel",
        "The text overlap between consecutive chunks to avoid losing context at the edges",
        "The number of times the search is repeated",
        "The minimum distance between embeddings to consider them similar",
      ],
      explanationEn:
        "Overlap is the amount of text shared between consecutive chunks. It prevents important information that falls at the boundary between two chunks from being lost, ensuring context continuity.",
    },
    {
      questionEn: "What are embeddings in the context of RAG?",
      optionsEn: [
        "Text fragments extracted from documents",
        "Instructions given to the LLM",
        "Numerical representations (vectors) of text that capture its semantic meaning",
        "Indexes of relational databases",
      ],
      explanationEn:
        "Embeddings are vectors of numbers (typically 384 to 1536 dimensions) that represent the semantic meaning of text. Texts with similar meanings will have nearby embeddings in the vector space.",
    },
    {
      questionEn:
        "What is the main advantage of RAG over fine-tuning for adding specific knowledge to an LLM?",
      optionsEn: [
        "RAG produces longer responses",
        "RAG allows updating information without retraining the model and provides source traceability",
        "RAG is always more accurate than fine-tuning",
        "RAG does not need any prior processing",
      ],
      explanationEn:
        "RAG allows updating data instantly (just add documents to the index), cites the sources where it found the information, keeps private data separate from the model, and is significantly cheaper and faster than retraining.",
    },
    {
      questionEn:
        "What is MMR (Maximum Marginal Relevance) in the context of search?",
      optionsEn: [
        "A metric for measuring the quality of LLM responses",
        "A technique that balances relevance with diversity in search results",
        "An algorithm for compressing embeddings",
        "A method for merging multiple vector stores",
      ],
      explanationEn:
        "MMR selects results that are relevant to the query but also diverse among themselves. This avoids retrieving multiple redundant fragments that say the same thing, maximizing the useful information the LLM receives.",
    },
    {
      questionEn:
        'What does the "faithfulness" metric measure in RAG evaluation?',
      optionsEn: [
        "Whether the retrieved documents are relevant to the question",
        "Whether the generated response is consistent with the retrieved context (not hallucinating)",
        "Whether the user is satisfied with the response",
        "Whether the embedding model is accurate",
      ],
      explanationEn:
        "Faithfulness measures whether the claims in the generated response are supported by the retrieved context. Low faithfulness indicates the LLM is making up information not in the documents (hallucinating).",
    },
    {
      questionEn:
        "In a hybrid search strategy, what is combined?",
      optionsEn: [
        "Two different LLM models",
        "Keyword search (BM25) with semantic search (vector-based)",
        "Large chunks with small chunks",
        "OpenAI embeddings with Hugging Face embeddings",
      ],
      explanationEn:
        "Hybrid search combines keyword search (like BM25, which looks for exact word matches) with semantic search (vector-based, which understands meaning). This is especially useful because semantic search can fail with technical terms or specific codes where exact matching works better.",
    },
    {
      questionEn: 'What is the "parent-child chunking" technique?',
      optionsEn: [
        "Creating chunks for primary and secondary documents separately",
        "Using small chunks for precise search but retrieving the parent chunk (larger) to give more context to the LLM",
        "Splitting a document first by chapters and then by paragraphs",
        "Indexing both the original document and its summary",
      ],
      explanationEn:
        "Parent-child chunking creates two levels: small child chunks used for search (because they are more specific and give better matching precision), and large parent chunks sent to the LLM (because they provide more context for generating complete responses).",
    },
    {
      questionEn:
        'You have a RAG system with high "answer relevancy" but low "faithfulness". What is happening?',
      optionsEn: [
        "The system cannot find relevant documents",
        "The responses are relevant to the question but contain invented information not in the documents",
        "The LLM is too slow",
        "The chunks are too large",
      ],
      explanationEn:
        "High relevancy with low faithfulness means the LLM understands what is being asked and generates responses that seem appropriate, but is adding information not from the retrieved context (hallucinating).",
    },
  ],
);

// ─── Curso 15: Agentes de IA y deployment ───────────────────────────────────

export const curso15Quiz: QuizQuestion[] = mergeEnglish(
  [
    {
      question:
        "Cuál es la principal diferencia entre un chatbot y un agente de IA?",
      options: [
        "El agente usa modelos más grandes",
        "El chatbot no puede entender español",
        "El agente puede observar, razonar y actuar iterativamente usando herramientas",
        "El agente siempre es más rápido que un chatbot",
      ],
      correctIndex: 2,
      explanation:
        "El agente puede observar, razonar y actuar iterativamente usando herramientas. Esta capacidad de iterar en un loop (observe-think-act) y usar herramientas es lo que diferencia fundamentalmente a un agente de un chatbot que solo genera respuestas de texto.",
    },
    {
      question:
        "En el contexto de function calling, qué genera el LLM cuando quiere usar una herramienta?",
      options: [
        "Ejecuta directamente la función en el servidor",
        "Genera una solicitud JSON estructurada con el nombre y parámetros de la herramienta",
        "Envía un email al desarrollador pidiendo que ejecute la función",
        "Modifica el código fuente de la aplicación para agregar la función",
      ],
      correctIndex: 1,
      explanation:
        "El LLM genera una solicitud JSON estructurada. El modelo no ejecuta nada directamente — solo genera texto estructurado que tu código interpreta para ejecutar la herramienta real.",
    },
    {
      question:
        "Cuál es la función principal de MCP (Model Context Protocol)?",
      options: [
        "Reemplazar a todos los LLMs existentes",
        "Estandarizar la conexión entre LLMs y herramientas externas",
        "Encriptar las conversaciones con la IA",
        "Acelerar la velocidad de inferencia de los modelos",
      ],
      correctIndex: 1,
      explanation:
        "MCP es un protocolo abierto que estandariza cómo los LLMs se conectan con herramientas externas, similar a cómo USB estandarizó la conexión de periféricos.",
    },
    {
      question:
        "En la arquitectura MCP, cuáles son los tres primitivos que un server puede exponer?",
      options: [
        "Input, Output, Error",
        "Tools, Resources, Prompts",
        "GET, POST, DELETE",
        "Client, Server, Proxy",
      ],
      correctIndex: 1,
      explanation:
        "MCP define tres primitivos: Tools (funciones ejecutables), Resources (datos read-only), y Prompts (templates de prompts predefinidos).",
    },
    {
      question:
        "En el loop de un agente, qué pasa cuando el LLM responde con una tool call?",
      options: [
        "El agente termina y devuelve la tool call como respuesta final",
        "El sistema ejecuta la herramienta, devuelve el resultado al LLM, y el LLM decide el siguiente paso",
        "El usuario debe aprobar manualmente cada herramienta antes de ejecutarla",
        "La herramienta se ejecuta pero el resultado se descarta",
      ],
      correctIndex: 1,
      explanation:
        "El sistema ejecuta la herramienta solicitada, agrega el resultado al historial de mensajes, y vuelve a llamar al LLM para que decida si necesita más información o puede dar la respuesta final.",
    },
    {
      question:
        "Cuál de estas opciones es la más adecuada para deployar una aplicación de IA de producción con una interfaz web personalizada?",
      options: [
        "Google Colab",
        "HuggingFace Spaces con Gradio",
        "Vercel con Next.js y AI SDK",
        "Jupyter Notebook en un servidor local",
      ],
      correctIndex: 2,
      explanation:
        "Vercel con Next.js y AI SDK es la mejor opción para aplicaciones de producción con UI personalizada. Ofrece streaming nativo, soporte para tool calling, y deployment profesional.",
    },
    {
      question:
        "Si un LLM cobra $3.00 por millón de tokens de input y $15.00 por millón de tokens de output, cuánto cuesta una request con 2,000 tokens de input y 500 tokens de output?",
      options: ["$0.0135", "$17.50", "$0.50", "$3.15"],
      correctIndex: 0,
      explanation:
        "Cálculo: (2,000 / 1,000,000) x $3.00 + (500 / 1,000,000) x $15.00 = $0.006 + $0.0075 = $0.0135.",
    },
    {
      question:
        'Qué es "model routing" como técnica de optimización de costos?',
      options: [
        "Enviar las requests por diferentes rutas de red para mayor velocidad",
        "Usar modelos económicos para tareas simples y modelos potentes para tareas complejas",
        "Rotar entre diferentes API keys para evitar rate limits",
        "Comprimir el modelo para que ocupe menos memoria",
      ],
      correctIndex: 1,
      explanation:
        "Model routing consiste en clasificar la complejidad de cada consulta y enviarla al modelo más apropiado. Las preguntas simples van a modelos baratos (como Haiku), mientras que las tareas complejas van a modelos más capaces (como Sonnet u Opus).",
    },
    {
      question:
        "Qué es prompt injection indirecta y por qué es especialmente peligrosa?",
      options: [
        "Es cuando el usuario escribe muy rápido y el sistema no puede procesar",
        "Es cuando instrucciones maliciosas están ocultas en contenido externo que el modelo procesa (emails, páginas web, documentos)",
        "Es cuando el modelo se inyecta a sí mismo prompts adicionales",
        "Es cuando el servidor recibe demasiadas requests simultáneas",
      ],
      correctIndex: 1,
      explanation:
        "La prompt injection indirecta es cuando las instrucciones maliciosas no vienen del usuario sino de fuentes externas que el modelo lee como contexto. Es más peligrosa que la directa porque el contenido malicioso puede estar oculto en datos aparentemente legítimos.",
    },
    {
      question:
        "Cuál de estas NO es una capa recomendada en una arquitectura de defensa en profundidad para aplicaciones LLM?",
      options: [
        "Input validation para detectar patrones de ataque",
        "Dar al modelo acceso completo a todos los sistemas para que sea más útil",
        "Output filtering para censurar datos sensibles",
        "Rate limiting para prevenir abuso por volumen",
      ],
      correctIndex: 1,
      explanation:
        'Dar acceso completo viola el principio de "mínimo privilegio". La OWASP lista "Excessive Agency" (dar demasiados permisos) como una de las principales vulnerabilidades. Las herramientas deben tener permisos limitados y específicos.',
    },
  ],
  [
    {
      questionEn:
        "What is the main difference between a chatbot and an AI agent?",
      optionsEn: [
        "The agent uses larger models",
        "The chatbot cannot understand Spanish",
        "The agent can observe, reason, and act iteratively using tools",
        "The agent is always faster than a chatbot",
      ],
      explanationEn:
        "The agent can observe, reason, and act iteratively using tools. This ability to iterate in a loop (observe-think-act) and use tools is what fundamentally differentiates an agent from a chatbot that only generates text responses.",
    },
    {
      questionEn:
        "In the context of function calling, what does the LLM generate when it wants to use a tool?",
      optionsEn: [
        "It directly executes the function on the server",
        "It generates a structured JSON request with the tool's name and parameters",
        "It sends an email to the developer asking to execute the function",
        "It modifies the application's source code to add the function",
      ],
      explanationEn:
        "The LLM generates a structured JSON request. The model does not execute anything directly — it only generates structured text that your code interprets to execute the actual tool.",
    },
    {
      questionEn:
        "What is the main function of MCP (Model Context Protocol)?",
      optionsEn: [
        "Replace all existing LLMs",
        "Standardize the connection between LLMs and external tools",
        "Encrypt conversations with AI",
        "Accelerate the inference speed of models",
      ],
      explanationEn:
        "MCP is an open protocol that standardizes how LLMs connect with external tools, similar to how USB standardized peripheral connections.",
    },
    {
      questionEn:
        "In the MCP architecture, what are the three primitives a server can expose?",
      optionsEn: [
        "Input, Output, Error",
        "Tools, Resources, Prompts",
        "GET, POST, DELETE",
        "Client, Server, Proxy",
      ],
      explanationEn:
        "MCP defines three primitives: Tools (executable functions), Resources (read-only data), and Prompts (predefined prompt templates).",
    },
    {
      questionEn:
        "In the agent loop, what happens when the LLM responds with a tool call?",
      optionsEn: [
        "The agent terminates and returns the tool call as the final response",
        "The system executes the tool, returns the result to the LLM, and the LLM decides the next step",
        "The user must manually approve each tool before it is executed",
        "The tool is executed but the result is discarded",
      ],
      explanationEn:
        "The system executes the requested tool, adds the result to the message history, and calls the LLM again to decide if it needs more information or can give the final response.",
    },
    {
      questionEn:
        "Which of these options is most suitable for deploying a production AI application with a custom web interface?",
      optionsEn: [
        "Google Colab",
        "HuggingFace Spaces with Gradio",
        "Vercel with Next.js and AI SDK",
        "Jupyter Notebook on a local server",
      ],
      explanationEn:
        "Vercel with Next.js and AI SDK is the best option for production applications with custom UI. It offers native streaming, tool calling support, and professional deployment.",
    },
    {
      questionEn:
        "If an LLM charges $3.00 per million input tokens and $15.00 per million output tokens, how much does a request with 2,000 input tokens and 500 output tokens cost?",
      optionsEn: ["$0.0135", "$17.50", "$0.50", "$3.15"],
      explanationEn:
        "Calculation: (2,000 / 1,000,000) x $3.00 + (500 / 1,000,000) x $15.00 = $0.006 + $0.0075 = $0.0135.",
    },
    {
      questionEn:
        'What is "model routing" as a cost optimization technique?',
      optionsEn: [
        "Sending requests through different network routes for more speed",
        "Using cheap models for simple tasks and powerful models for complex tasks",
        "Rotating between different API keys to avoid rate limits",
        "Compressing the model to use less memory",
      ],
      explanationEn:
        "Model routing classifies the complexity of each query and sends it to the most appropriate model. Simple questions go to cheap models (like Haiku), while complex tasks go to more capable models (like Sonnet or Opus).",
    },
    {
      questionEn:
        "What is indirect prompt injection and why is it especially dangerous?",
      optionsEn: [
        "When the user types too fast and the system cannot process",
        "When malicious instructions are hidden in external content the model processes (emails, web pages, documents)",
        "When the model injects additional prompts into itself",
        "When the server receives too many simultaneous requests",
      ],
      explanationEn:
        "Indirect prompt injection is when malicious instructions come not from the user but from external sources the model reads as context. It is more dangerous than direct injection because the malicious content can be hidden in apparently legitimate data.",
    },
    {
      questionEn:
        "Which of these is NOT a recommended layer in a defense-in-depth architecture for LLM applications?",
      optionsEn: [
        "Input validation to detect attack patterns",
        "Giving the model full access to all systems to be more useful",
        "Output filtering to censor sensitive data",
        "Rate limiting to prevent volume abuse",
      ],
      explanationEn:
        "Giving full access violates the principle of \"least privilege\". OWASP lists \"Excessive Agency\" (giving too many permissions) as one of the main vulnerabilities. Tools should have limited and specific permissions.",
    },
  ],
);
