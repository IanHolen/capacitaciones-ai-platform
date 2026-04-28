import type { QuizQuestion } from "./cursos-data";

export const curso10Quiz: QuizQuestion[] = [
  {
    question: "¿Qué es un Custom GPT?",
    options: [
      "Una versión más cara de ChatGPT que requiere hardware especial",
      "Una versión personalizada de ChatGPT configurada con instrucciones y documentos propios",
      "Un programa que se instala en la computadora",
      "Un robot físico que usa inteligencia artificial",
    ],
    correctIndex: 1,
    explanation: "Un Custom GPT es una versión personalizada de ChatGPT que tú mismo configuras con instrucciones específicas, documentos de referencia y comportamiento definido.",
  },
  {
    question: "¿Cuál es la diferencia principal entre Custom GPTs y Claude Projects en cuanto a compartir?",
    options: [
      "Claude Projects se puede publicar en una tienda pública; Custom GPTs no",
      "Custom GPTs se pueden publicar y compartir públicamente; Claude Projects solo están disponibles dentro de tu cuenta",
      "Ambos se pueden compartir exactamente de la misma manera",
      "Ninguno de los dos permite compartir con otras personas",
    ],
    correctIndex: 1,
    explanation: "Custom GPTs permiten publicar en la tienda de GPTs de OpenAI o compartir por enlace. Claude Projects actualmente son privados.",
  },
  {
    question: "Al crear un Custom GPT, ¿cuál es la parte más importante de la configuración?",
    options: ["El nombre del GPT", "La imagen de perfil", "Las instrucciones (system prompt)", "La cantidad de documentos subidos"],
    correctIndex: 2,
    explanation: "Las instrucciones son el alma del asistente. Definen exactamente cómo piensa, responde y se comporta.",
  },
  {
    question: "¿Qué es RAG en el contexto de asistentes de IA?",
    options: [
      "Un tipo de modelo de IA más avanzado que GPT-4",
      "Una técnica que combina búsqueda de información actualizada con generación de respuestas",
      "Un formato de documento compatible con Custom GPTs",
      "El nombre del sistema de pagos de OpenAI",
    ],
    correctIndex: 1,
    explanation: "RAG (Retrieval-Augmented Generation) combina buscar información relevante con generar respuesta basada en lo encontrado.",
  },
  {
    question: "¿Qué sección de las instrucciones define quién es el asistente y en qué se especializa?",
    options: ["Audiencia", "Identidad", "Manejo de errores", "Lo que NUNCA debe hacer"],
    correctIndex: 1,
    explanation: "La sección 'Identidad' es la primera parte de la plantilla y define quién es el asistente y su especialización.",
  },
  {
    question: "¿Cuál es la mejor práctica al organizar documentos para subir a tu asistente?",
    options: [
      "Poner toda la información en un único documento gigante",
      "Un documento por tema con títulos claros y secciones numeradas",
      "Mezclar todos los temas en orden aleatorio",
      "Solo subir documentos escaneados en formato de imagen",
    ],
    correctIndex: 1,
    explanation: "Un documento por tema con títulos claros ayuda a la IA a buscar y citar la información correctamente.",
  },
  {
    question: "Al probar tu asistente, ¿qué son los 'casos límite'?",
    options: [
      "Las preguntas más comunes que harán los usuarios",
      "Preguntas difíciles, ambiguas o inesperadas como intentos de hacerle inventar datos",
      "Pruebas que solo los desarrolladores avanzados pueden realizar",
      "El número máximo de conversaciones del asistente",
    ],
    correctIndex: 1,
    explanation: "Los casos límite son preguntas difíciles o inesperadas que van más allá del uso normal.",
  },
  {
    question: "¿Qué dato NUNCA debes subir como documento a tu Custom GPT?",
    options: [
      "Tu catálogo de productos",
      "Las preguntas frecuentes de tu empresa",
      "Contraseñas y datos bancarios de clientes",
      "Las políticas de devolución de tu negocio",
    ],
    correctIndex: 2,
    explanation: "Nunca debes subir información sensible como contraseñas, datos bancarios o información personal de terceros.",
  },
  {
    question: "¿Qué tipo de archivo NO se puede subir a un Custom GPT?",
    options: ["PDF", "CSV", "Archivo de video .mp4", "TXT"],
    correctIndex: 2,
    explanation: "Los archivos de video no son soportados. Se pueden subir PDFs, CSVs, TXT, DOCX e imágenes.",
  },
  {
    question: "¿Cuál es el ciclo correcto para mejorar un asistente de IA continuamente?",
    options: [
      "Crear, publicar y olvidarse",
      "Probar, identificar problemas, ajustar instrucciones y probar de nuevo",
      "Copiar instrucciones de otro GPT y publicar directamente",
      "Subir más documentos sin necesidad de probar",
    ],
    correctIndex: 1,
    explanation: "El ciclo de mejora continua (probar, identificar, ajustar, probar) es la forma correcta de mantener un asistente de calidad.",
  },
];

export const curso11Quiz: QuizQuestion[] = [
  {
    question: "¿Cuál es la diferencia entre automatización tradicional y automatización con IA?",
    options: [
      "No hay diferencia, son exactamente lo mismo",
      "La automatización tradicional usa reglas fijas; la automatización con IA entiende contexto y toma decisiones simples",
      "La automatización con IA es más lenta que la tradicional",
      "La automatización tradicional requiere programación; la IA no necesita instrucciones",
    ],
    correctIndex: 1,
    explanation: "La automatización tradicional funciona con reglas exactas. Con IA, entiende contexto, maneja variaciones y toma decisiones simples.",
  },
  {
    question: "En Zapier, ¿qué es un 'Trigger'?",
    options: [
      "El nombre del flujo automatizado",
      "El evento que inicia la automatización, como recibir un nuevo email",
      "El resultado final del flujo",
      "Un error que ocurre en el sistema",
    ],
    correctIndex: 1,
    explanation: "El Trigger es el evento que dispara el flujo automatizado, como 'Cuando llega un email nuevo'.",
  },
  {
    question: "¿Cuántas aplicaciones conecta Zapier aproximadamente?",
    options: ["100 aplicaciones", "500 aplicaciones", "Más de 6,000 aplicaciones", "Solo las de Google y Microsoft"],
    correctIndex: 2,
    explanation: "Zapier conecta más de 6,000 aplicaciones e incluye IA integrada con 'AI by Zapier'.",
  },
  {
    question: "¿Cuál es la ventaja principal de Make sobre Zapier en su plan gratuito?",
    options: [
      "Make es completamente gratis sin ningún límite",
      "Make ofrece 1,000 operaciones por mes frente a las 100 tareas de Zapier",
      "Make solo funciona con Google Workspace",
      "Make no tiene interfaz visual",
    ],
    correctIndex: 1,
    explanation: "Make ofrece 1,000 operaciones por mes en su plan gratuito, comparado con las 100 tareas de Zapier.",
  },
  {
    question: "¿Cuál es una ventaja específica de n8n frente a Zapier y Make?",
    options: [
      "n8n tiene más integraciones que Zapier",
      "n8n es completamente gratis si lo instalas en tu propio servidor",
      "n8n es más fácil de usar que Zapier",
      "n8n solo funciona con email",
    ],
    correctIndex: 1,
    explanation: "n8n es de código abierto y si lo instalas en tu propio servidor es completamente gratuito sin límites.",
  },
  {
    question: "¿Qué es el 'vibe coding'?",
    options: [
      "Programar mientras escuchas música",
      "Crear aplicaciones describiendo en lenguaje natural lo que quieres, y la IA genera el código",
      "Un estilo de diseño web moderno",
      "Una marca de laptops para programadores",
    ],
    correctIndex: 1,
    explanation: "Vibe coding es crear apps describiendo en lenguaje natural lo que quieres construir, y la IA genera el código completo.",
  },
  {
    question: "¿Cuál de estas es una herramienta de vibe coding?",
    options: ["Microsoft Excel", "Bolt.new", "Gmail", "Zapier"],
    correctIndex: 1,
    explanation: "Bolt.new permite crear aplicaciones web completas a partir de una descripción en lenguaje natural.",
  },
  {
    question: "¿Por qué se recomienda empezar con borradores al automatizar respuestas de email?",
    options: [
      "Porque los borradores son más económicos",
      "Porque permite revisar la calidad antes de confiar en el envío directo",
      "Porque Gmail no permite el envío automático",
      "Porque los borradores se envían más rápido",
    ],
    correctIndex: 1,
    explanation: "Empezar con borradores permite revisar que la IA genere respuestas correctas antes de activar el envío automático.",
  },
  {
    question: "Un reporte semanal automático bien configurado debe incluir:",
    options: [
      "Solo el total de ventas",
      "Resumen ejecutivo, métricas clave, comparación con período anterior y recomendaciones",
      "Solo los nombres de los vendedores",
      "Solo gráficos sin texto explicativo",
    ],
    correctIndex: 1,
    explanation: "Un reporte completo incluye resumen ejecutivo, métricas, comparación con la semana anterior y recomendaciones de la IA.",
  },
  {
    question: "¿Cuál es el primer paso para empezar con automatización?",
    options: [
      "Automatizar todos los procesos simultáneamente",
      "Identificar una tarea repetitiva diaria y automatizarla primero",
      "Comprar el plan más caro de todas las herramientas",
      "Aprender a programar desde cero",
    ],
    correctIndex: 1,
    explanation: "Empieza con una sola tarea repetitiva diaria. Una vez que funciona, puedes expandir gradualmente.",
  },
];

export const curso12Quiz: QuizQuestion[] = [
  {
    question: "Usando la analogía del restaurante, ¿qué representa la API de IA?",
    options: [
      "El cliente que hace el pedido",
      "La cocina donde se prepara la comida",
      "El mozo que lleva el pedido a la cocina y trae la respuesta",
      "El menú con las opciones disponibles",
    ],
    correctIndex: 2,
    explanation: "La API es como el mozo: lleva tus solicitudes al sistema de IA y te devuelve las respuestas.",
  },
  {
    question: "¿Qué es una API Key?",
    options: [
      "Un teclado especial para programadores",
      "Una credencial única que te identifica ante el servicio de IA",
      "El nombre técnico de un modelo de IA",
      "Un tipo de archivo de configuración",
    ],
    correctIndex: 1,
    explanation: "La API Key es tu credencial de acceso. Cada solicitud incluye esta llave para que el servicio sepa que eres tú.",
  },
  {
    question: "¿Dónde debe estar siempre tu API Key en una aplicación web?",
    options: [
      "En el código del frontend",
      "En el código del servidor (backend), nunca visible al usuario final",
      "En el nombre del dominio",
      "En el título de la página HTML",
    ],
    correctIndex: 1,
    explanation: "La API Key SIEMPRE va en el servidor. Si está en el frontend, cualquier usuario podría verla.",
  },
  {
    question: "¿Por qué Groq es tan rápido comparado con otras APIs de IA?",
    options: [
      "Porque usa modelos menos avanzados",
      "Porque usa hardware especializado llamado LPU diseñado para modelos de lenguaje",
      "Porque limita la longitud de las respuestas",
      "Porque no tiene plan gratuito",
    ],
    correctIndex: 1,
    explanation: "Groq usa LPU (Language Processing Unit), hardware especializado para modelos de lenguaje, mucho más rápido que GPUs generales.",
  },
  {
    question: "¿Qué significa que una API sea 'OpenAI-compatible'?",
    options: [
      "Que pertenece a OpenAI",
      "Que puedes usar el mismo código cambiando solo la URL base y la API Key",
      "Que es idéntica a ChatGPT",
      "Que necesitas una cuenta de OpenAI para usarla",
    ],
    correctIndex: 1,
    explanation: "El formato OpenAI-compatible permite reutilizar el mismo código cambiando solo la URL base y la API Key.",
  },
  {
    question: "¿Cuántas requests gratuitas por día ofrece Groq?",
    options: ["100", "1,500", "14,400", "Groq no tiene plan gratuito"],
    correctIndex: 2,
    explanation: "Groq ofrece 14,400 requests por día de forma gratuita sin necesidad de tarjeta de crédito.",
  },
  {
    question: "¿Qué es un 'token' en el contexto de APIs de IA?",
    options: [
      "Una moneda digital para pagar servicios de IA",
      "La unidad mínima de texto que la IA procesa, aproximadamente 0.75 palabras en español",
      "Un tipo especial de API Key",
      "Un archivo de configuración del modelo",
    ],
    correctIndex: 1,
    explanation: "Un token es la unidad mínima de texto que la IA procesa. En español, 1 token equivale a aproximadamente 0.75 palabras.",
  },
  {
    question: "¿Cuál es la forma más rápida de agregar un chatbot a tu página web sin programar?",
    options: [
      "Contratar un equipo de programadores",
      "Usar un widget sin código como Chatbase copiando unas líneas de HTML",
      "Reescribir toda la página web",
      "Instalar una aplicación de escritorio especial",
    ],
    correctIndex: 1,
    explanation: "Widgets como Chatbase permiten agregar un chatbot copiando un pequeño fragmento de JavaScript.",
  },
  {
    question: "¿Cuánto cuesta aproximadamente un chatbot con 100 conversaciones diarias usando Gemini Flash-Lite?",
    options: ["$500 al mes", "$50 al mes", "Menos de $1 al mes", "Es imposible calcularlo"],
    correctIndex: 2,
    explanation: "Con Gemini Flash-Lite, 100 conversaciones diarias cuestan aproximadamente $0.60 al mes.",
  },
  {
    question: "Si tu API Key se filtra, ¿qué debes hacer?",
    options: [
      "Esperar a ver si alguien la usa",
      "Revocarla inmediatamente y crear una nueva",
      "No pasa nada, no es información sensible",
      "Cambiar solo el nombre del proyecto",
    ],
    correctIndex: 1,
    explanation: "Si una API Key se filtra, hay que revocarla inmediatamente. Alguien podría acumular miles de dólares en cargos.",
  },
];

export const curso13Quiz: QuizQuestion[] = [
  {
    question: "¿Por qué Python es el lenguaje dominante en inteligencia artificial?",
    options: [
      "Porque es el único lenguaje que los modelos de IA pueden entender",
      "Por su sintaxis clara, su ecosistema de librerías y su comunidad masiva",
      "Porque fue inventado específicamente para crear IAs",
      "Porque es el lenguaje más rápido del mundo",
    ],
    correctIndex: 1,
    explanation: "Python domina en IA por su sintaxis clara, un ecosistema masivo de librerías y una comunidad enorme.",
  },
  {
    question: "¿Para qué sirven los f-strings en Python al trabajar con prompts de IA?",
    options: [
      "Para hacer que el código sea más rápido",
      "Para construir strings dinámicos insertando variables dentro del texto del prompt",
      "Para enviar requests HTTP a la API",
      "Para definir el modelo de IA a usar",
    ],
    correctIndex: 1,
    explanation: "Los f-strings permiten construir prompts dinámicos con variables: f'Hola {usuario}, explícame sobre {tema}'.",
  },
  {
    question: "¿Cuál es el formato fundamental que usan TODAS las APIs de IA para manejar mensajes?",
    options: [
      "Una cadena de texto plana con todo el historial",
      "Una lista de diccionarios con claves 'role' y 'content'",
      "Un archivo XML con etiquetas especiales",
      "Un array de números representando tokens",
    ],
    correctIndex: 1,
    explanation: "Todas las APIs de IA usan listas de diccionarios con 'role' (system, user, assistant) y 'content'. Este patrón es universal.",
  },
  {
    question: "¿Qué parámetro de la API controla la creatividad de las respuestas?",
    options: ["max_tokens", "model", "temperature", "top_p"],
    correctIndex: 2,
    explanation: "El parámetro 'temperature' controla la aleatoriedad: 0.0 da respuestas deterministas, valores altos dan más creatividad.",
  },
  {
    question: "¿Cómo accede la API de Anthropic (Claude) a la respuesta de texto en Python?",
    options: [
      "respuesta.choices[0].message.content",
      "respuesta.content[0].text",
      "respuesta.text",
      "respuesta.output.message",
    ],
    correctIndex: 1,
    explanation: "Anthropic usa content blocks: respuesta.content[0].text. Es diferente a OpenAI (choices[0].message.content).",
  },
  {
    question: "¿Por qué se usa python-dotenv y archivos .env para las API Keys?",
    options: [
      "Porque hace que el código corra más rápido",
      "Para evitar poner las API Keys directamente en el código donde cualquiera podría verlas",
      "Porque las APIs solo aceptan claves en formato .env",
      "Para que las API Keys se renueven automáticamente",
    ],
    correctIndex: 1,
    explanation: "Los archivos .env mantienen las claves separadas del código y se excluyen de Git con .gitignore.",
  },
  {
    question: "¿Qué hace el archivo .gitignore en un proyecto de IA?",
    options: [
      "Instala automáticamente las dependencias",
      "Evita que archivos sensibles como .env y venv/ se suban a Git",
      "Configura la conexión con la API de IA",
      "Genera el archivo requirements.txt automáticamente",
    ],
    correctIndex: 1,
    explanation: "El .gitignore especifica qué archivos Git debe ignorar, como .env con API Keys y el entorno virtual.",
  },
  {
    question: "¿Qué es el 'backoff exponencial' en el manejo de errores?",
    options: [
      "Una técnica para reducir costos",
      "Un patrón de reintentos donde el tiempo de espera aumenta progresivamente (1s, 2s, 4s)",
      "El proceso de borrar el historial de conversación",
      "Un algoritmo para comprimir prompts",
    ],
    correctIndex: 1,
    explanation: "El backoff exponencial espera el doble de tiempo entre reintentos: 1s, 2s, 4s, etc. Evita saturar la API.",
  },
  {
    question: "¿Qué rol tiene el mensaje 'system' en la API de OpenAI?",
    options: [
      "Es el mensaje más reciente del usuario",
      "Contiene las instrucciones y personalidad para el modelo en toda la conversación",
      "Registra los errores del sistema",
      "Es la respuesta del modelo de IA",
    ],
    correctIndex: 1,
    explanation: "El mensaje 'system' contiene las instrucciones para el modelo: personalidad, reglas y formato. Se define una vez.",
  },
  {
    question: "¿Cuál paquete de Python se usa para cargar variables de entorno desde .env?",
    options: ["openai", "os", "python-dotenv", "httpx"],
    correctIndex: 2,
    explanation: "python-dotenv carga las variables del archivo .env con load_dotenv(), accesibles luego con os.getenv().",
  },
];

export const curso14Quiz: QuizQuestion[] = [
  {
    question: "¿Cuál es el problema fundamental de los LLMs que RAG resuelve?",
    options: [
      "Que son demasiado lentos",
      "Que su conocimiento tiene fecha de corte y no conocen datos privados",
      "Que solo funcionan en inglés",
      "Que son demasiado costosos",
    ],
    correctIndex: 1,
    explanation: "RAG resuelve el conocimiento desactualizado y la falta de acceso a datos privados de la empresa.",
  },
  {
    question: "¿Qué significa RAG?",
    options: ["Rapid Automatic Generation", "Retrieval-Augmented Generation", "Random Answer Generator", "Real AI Generation"],
    correctIndex: 1,
    explanation: "RAG significa Retrieval-Augmented Generation, introducido por Facebook AI Research (Meta) en 2020.",
  },
  {
    question: "¿Cuáles son los tres pasos del pipeline RAG en orden correcto?",
    options: [
      "Generation, Retrieval, Augmentation",
      "Retrieval, Augmentation, Generation",
      "Augmentation, Generation, Retrieval",
      "Generation, Augmentation, Retrieval",
    ],
    correctIndex: 1,
    explanation: "El pipeline RAG: Retrieval (buscar), Augmentation (insertar como contexto) y Generation (generar respuesta).",
  },
  {
    question: "¿Qué es el 'chunking' en el pipeline RAG?",
    options: [
      "Comprimir imágenes para ahorrar espacio",
      "Dividir documentos grandes en fragmentos más pequeños y manejables",
      "El algoritmo que genera los embeddings",
      "Combinar múltiples respuestas de la IA",
    ],
    correctIndex: 1,
    explanation: "El chunking divide documentos en fragmentos más pequeños porque los LLMs tienen límite de contexto.",
  },
  {
    question: "¿Qué son los 'embeddings' en el contexto de RAG?",
    options: [
      "Archivos adjuntos que se suben a la base de datos",
      "Representaciones numéricas (vectores) de texto que capturan significado semántico",
      "El historial de conversaciones del chatbot",
      "Los metadatos de los documentos",
    ],
    correctIndex: 1,
    explanation: "Los embeddings son vectores numéricos que representan el significado semántico. Textos similares tienen embeddings similares.",
  },
  {
    question: "¿Por qué RAG es preferible al fine-tuning para la mayoría de casos empresariales?",
    options: [
      "Porque RAG produce respuestas de mayor calidad siempre",
      "Porque permite actualización instantánea de datos, trazabilidad de fuentes y menor costo",
      "Porque el fine-tuning requiere programación avanzada",
      "Porque RAG funciona sin internet",
    ],
    correctIndex: 1,
    explanation: "RAG permite actualización instantánea, citar fuentes, menor costo y mantener datos privados separados del modelo.",
  },
  {
    question: "¿Para qué sirve el parámetro 'overlap' en el chunking?",
    options: [
      "Definir el tamaño máximo de cada fragmento",
      "Evitar que se pierda contexto en los límites entre chunks consecutivos",
      "Especificar cuántos chunks se generan",
      "Decidir qué modelo de embeddings usar",
    ],
    correctIndex: 1,
    explanation: "El overlap hace que chunks consecutivos compartan contenido, evitando que una idea quede partida entre dos chunks.",
  },
  {
    question: "¿Qué es ChromaDB en el contexto de RAG?",
    options: [
      "Una librería para leer PDFs",
      "Una base de datos vectorial para almacenar y buscar embeddings",
      "Un modelo de embeddings de código abierto",
      "Un framework de agentes de IA",
    ],
    correctIndex: 1,
    explanation: "ChromaDB es una base de datos vectorial que almacena embeddings y permite buscar fragmentos similares eficientemente.",
  },
  {
    question: "¿Qué ventaja tiene el RecursiveCharacterTextSplitter de LangChain?",
    options: [
      "Es el más rápido de todos los splitters",
      "Divide respetando jerarquías naturales del texto (párrafos, líneas, espacios)",
      "Solo funciona con documentos en inglés",
      "Automáticamente detecta y preserva tablas",
    ],
    correctIndex: 1,
    explanation: "Divide respetando una jerarquía de separadores, produciendo chunks más coherentes y con mejor significado semántico.",
  },
  {
    question: "¿Qué hace 'temperature: 0.2' en el LLM de un pipeline RAG?",
    options: [
      "Hace que el modelo responda más rápido",
      "Produce respuestas más deterministas y fieles al contexto recuperado",
      "Aumenta la cantidad de documentos recuperados",
      "Cambia el idioma de las respuestas",
    ],
    correctIndex: 1,
    explanation: "En RAG se usa temperatura baja para que el modelo se ciña al contexto recuperado sin inventar.",
  },
];

export const curso15Quiz: QuizQuestion[] = [
  {
    question: "¿Cuál es la diferencia fundamental entre un chatbot y un agente de IA?",
    options: [
      "Los chatbots son más inteligentes que los agentes",
      "Un chatbot es reactivo; un agente es proactivo y puede observar, razonar, actuar e iterar",
      "Los agentes solo funcionan con texto",
      "No hay diferencia, son sinónimos",
    ],
    correctIndex: 1,
    explanation: "Un chatbot es reactivo: recibe y responde. Un agente es proactivo: usa herramientas, ejecuta acciones, recuerda e itera.",
  },
  {
    question: "¿Cómo se llama el ciclo central de la arquitectura de los agentes de IA?",
    options: [
      "El loop Request-Response",
      "El loop Observe-Think-Act (Observar-Pensar-Actuar)",
      "El loop Train-Test-Deploy",
      "El loop Input-Process-Output",
    ],
    correctIndex: 1,
    explanation: "El loop Observe-Think-Act es la arquitectura central: observar entorno, pensar qué hacer, actuar, y repetir.",
  },
  {
    question: "¿Cómo hace un LLM para 'ejecutar' una herramienta si solo genera texto?",
    options: [
      "Accede directamente a la herramienta por internet",
      "Genera un JSON describiendo qué herramienta usar; tu código la interpreta y ejecuta",
      "Descarga e instala la herramienta automáticamente",
      "Envía un email al desarrollador",
    ],
    correctIndex: 1,
    explanation: "El LLM genera un JSON con nombre de herramienta y parámetros. Tu código lo interpreta, ejecuta la herramienta y devuelve el resultado.",
  },
  {
    question: "¿Qué es MCP (Model Context Protocol)?",
    options: [
      "Un nuevo modelo de lenguaje de Anthropic",
      "Un estándar abierto para conectar herramientas con LLMs, como un USB para la IA",
      "Un protocolo de seguridad para API Keys",
      "Un formato de archivo para conversaciones",
    ],
    correctIndex: 1,
    explanation: "MCP es un estándar abierto de Anthropic: un protocolo universal para conectar herramientas con LLMs.",
  },
  {
    question: "¿Cuáles son los tres primitivos que un servidor MCP puede exponer?",
    options: [
      "Models, Contexts, Prompts",
      "Tools (herramientas), Resources (recursos) y Prompts (templates)",
      "Functions, Variables y Constants",
      "Inputs, Outputs y Errors",
    ],
    correctIndex: 1,
    explanation: "MCP define tres primitivos: Tools (funciones ejecutables), Resources (datos legibles) y Prompts (templates predefinidos).",
  },
  {
    question: "¿Qué nivel de autonomía tiene un agente con supervisión humana?",
    options: ["L1 - Asistente", "L2 - Tool user", "L3 - Agente guiado", "L4 - Agente autónomo"],
    correctIndex: 2,
    explanation: "L3 - Agente guiado ejecuta planes multi-paso pero con supervisión humana, como GitHub Copilot Workspace.",
  },
  {
    question: "¿Cuántas herramientas se recomienda darle a un agente al empezar?",
    options: [
      "Cuantas más, mejor",
      "Entre 3 y 5 herramientas para no confundir al modelo",
      "Exactamente 10",
      "Solo 1",
    ],
    correctIndex: 1,
    explanation: "Se recomienda 3-5 herramientas bien definidas. Demasiadas confunden al modelo sobre cuál usar.",
  },
  {
    question: "¿Qué transportes soporta MCP?",
    options: [
      "Solo WebSockets",
      "stdio (herramientas locales) y HTTP + SSE (servers remotos)",
      "Solo REST HTTP con polling",
      "Bluetooth y WiFi direct",
    ],
    correctIndex: 1,
    explanation: "MCP soporta stdio (proceso hijo, stdin/stdout) y HTTP + SSE (servers remotos), ambos con JSON-RPC 2.0.",
  },
  {
    question: "¿Por qué es importante definir una 'condición de parada' en un agente?",
    options: [
      "Para ahorrar electricidad",
      "Sin un límite, el agente podría iterar infinitamente sin completar la tarea",
      "Porque los LLMs no pueden generar más de 10 respuestas",
      "Para guardar progreso automáticamente",
    ],
    correctIndex: 1,
    explanation: "Sin condición de parada, un agente podría quedar en un loop infinito. Siempre se debe definir un límite de iteraciones.",
  },
  {
    question: "¿Qué es Claude Code según el curso?",
    options: [
      "Un editor de código gratuito de Anthropic",
      "Un agente de línea de comandos que puede leer codebases, hacer cambios, ejecutar tests y corregir errores",
      "Una versión especial de Claude para programadores",
      "Una extensión de VS Code con IA",
    ],
    correctIndex: 1,
    explanation: "Claude Code es un agente CLI de Anthropic que puede leer codebases, entender la arquitectura, hacer cambios y ejecutar tests.",
  },
];
