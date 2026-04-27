export type Nivel = "intro" | "basico" | "intermedio" | "avanzado" | "pro";

export const nivelConfig: Record<
  Nivel,
  { label: string; color: string; bg: string }
> = {
  intro: { label: "Introduccion", color: "#16A34A", bg: "#F0FDF4" },
  basico: { label: "Basico", color: "#1E40AF", bg: "#EFF6FF" },
  intermedio: { label: "Intermedio", color: "#7C3AED", bg: "#F5F3FF" },
  avanzado: { label: "Avanzado", color: "#EA580C", bg: "#FFF7ED" },
  pro: { label: "Pro", color: "#CA8A04", bg: "#FEFCE8" },
};

export interface Leccion {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  contenido: string;
  tieneVideo: boolean;
  tieneQuiz: boolean;
}

export interface Curso {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: Nivel;
  lecciones: Leccion[];
  duracion: string;
}

export const cursos: Curso[] = [
  {
    id: "que-es-ia",
    titulo: "Que es la Inteligencia Artificial",
    descripcion:
      "Una introduccion amigable al mundo de la IA. Aprende que es, como funciona y por que es importante para tu vida diaria.",
    nivel: "intro",
    duracion: "2 horas",
    lecciones: [
      {
        id: "que-es-ia-1",
        titulo: "Bienvenida al curso",
        descripcion: "Una introduccion al curso y que vas a aprender.",
        duracion: "10 min",
        contenido:
          "En este curso vas a descubrir que es la Inteligencia Artificial, como funciona y por que esta cambiando el mundo. No necesitas saber programar ni tener conocimientos tecnicos. Vamos paso a paso.",
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "que-es-ia-2",
        titulo: "Que es la IA en palabras simples",
        descripcion: "Explicacion clara y sencilla de que es la IA.",
        duracion: "15 min",
        contenido:
          "La Inteligencia Artificial es la capacidad de las computadoras para aprender de datos y tomar decisiones. Piensa en ella como un asistente muy rapido que puede leer miles de documentos en segundos y darte un resumen.",
        tieneVideo: true,
        tieneQuiz: true,
      },
      {
        id: "que-es-ia-3",
        titulo: "IA en tu vida diaria",
        descripcion: "Ejemplos de IA que ya usas sin darte cuenta.",
        duracion: "15 min",
        contenido:
          "Ya usas IA todos los dias: cuando Netflix te recomienda una pelicula, cuando Google Maps te muestra la mejor ruta, o cuando tu celular reconoce tu cara. La IA esta en todas partes.",
        tieneVideo: true,
        tieneQuiz: true,
      },
      {
        id: "que-es-ia-4",
        titulo: "Tipos de IA",
        descripcion: "Los diferentes tipos de IA que existen hoy.",
        duracion: "20 min",
        contenido:
          "Hay diferentes tipos de IA: la IA que reconoce imagenes, la que entiende texto (como ChatGPT), la que genera musica, y mas. Cada tipo esta entrenada para una tarea especifica.",
        tieneVideo: true,
        tieneQuiz: true,
      },
      {
        id: "que-es-ia-5",
        titulo: "El futuro de la IA",
        descripcion: "Que viene para la IA y como prepararte.",
        duracion: "20 min",
        contenido:
          "La IA va a seguir creciendo y cambiando como trabajamos, estudiamos y vivimos. Lo mejor que podes hacer es aprender a usarla a tu favor. Este curso es el primer paso.",
        tieneVideo: true,
        tieneQuiz: true,
      },
    ],
  },
  {
    id: "chatgpt-desde-cero",
    titulo: "ChatGPT desde cero",
    descripcion:
      "Aprende a usar ChatGPT de forma efectiva. Desde tu primera conversacion hasta prompts avanzados.",
    nivel: "basico",
    duracion: "4 horas",
    lecciones: [
      {
        id: "chatgpt-1",
        titulo: "Que es ChatGPT",
        descripcion: "Introduccion a ChatGPT y como funciona.",
        duracion: "15 min",
        contenido:
          "ChatGPT es un modelo de lenguaje creado por OpenAI que puede mantener conversaciones, responder preguntas, escribir textos y mucho mas. Es como hablar con un asistente muy inteligente.",
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "chatgpt-2",
        titulo: "Tu primera conversacion",
        descripcion: "Como iniciar y mantener una conversacion con ChatGPT.",
        duracion: "20 min",
        contenido:
          "Para empezar, simplemente escribe lo que necesitas. Podes preguntarle cosas, pedirle que escriba textos, que te explique conceptos, o que te ayude a resolver problemas.",
        tieneVideo: true,
        tieneQuiz: true,
      },
      {
        id: "chatgpt-3",
        titulo: "Escribiendo buenos prompts",
        descripcion: "Como escribir instrucciones claras para mejores resultados.",
        duracion: "25 min",
        contenido:
          "Un prompt es la instruccion que le das a ChatGPT. Cuanto mas claro y especifico seas, mejor sera la respuesta. En vez de decir 'escribi sobre perros', proba con 'escribi un parrafo de 5 oraciones sobre los beneficios de tener un perro en casa'.",
        tieneVideo: true,
        tieneQuiz: true,
      },
      {
        id: "chatgpt-4",
        titulo: "Casos de uso practicos",
        descripcion: "Ejemplos reales de como usar ChatGPT en el dia a dia.",
        duracion: "30 min",
        contenido:
          "Podes usar ChatGPT para: resumir textos largos, traducir idiomas, generar ideas para proyectos, escribir emails profesionales, ayudarte a estudiar, y mucho mas.",
        tieneVideo: true,
        tieneQuiz: true,
      },
    ],
  },
  {
    id: "prompts-efectivos",
    titulo: "Prompts efectivos",
    descripcion:
      "Domina el arte de escribir prompts que obtienen los resultados que necesitas. Tecnicas y patrones probados.",
    nivel: "basico",
    duracion: "5 horas",
    lecciones: [
      {
        id: "prompts-1",
        titulo: "Anatomia de un buen prompt",
        descripcion: "Las partes que componen un prompt efectivo.",
        duracion: "20 min",
        contenido:
          "Un buen prompt tiene: contexto (quien sos y que necesitas), instruccion clara (que queres que haga), formato deseado (como queres la respuesta), y restricciones (que evitar).",
        tieneVideo: true,
        tieneQuiz: true,
      },
      {
        id: "prompts-2",
        titulo: "Tecnica de rol",
        descripcion: "Como asignarle un rol a la IA para mejores respuestas.",
        duracion: "25 min",
        contenido:
          "Cuando le decis a la IA 'Actua como un profesor de historia' o 'Sos un experto en marketing', la respuesta cambia completamente. Esta tecnica se llama role prompting y es muy poderosa.",
        tieneVideo: true,
        tieneQuiz: true,
      },
    ],
  },
  {
    id: "ia-para-negocios",
    titulo: "IA para tu negocio",
    descripcion:
      "Como aplicar herramientas de IA para mejorar la productividad de tu empresa o emprendimiento.",
    nivel: "intermedio",
    duracion: "6 horas",
    lecciones: [
      {
        id: "negocios-1",
        titulo: "IA y productividad empresarial",
        descripcion: "Como la IA puede transformar tu negocio.",
        duracion: "20 min",
        contenido:
          "La IA puede automatizar tareas repetitivas, analizar datos de ventas, generar contenido de marketing, atender clientes con chatbots, y mucho mas. Veamos como aplicarla en tu contexto.",
        tieneVideo: true,
        tieneQuiz: true,
      },
    ],
  },
  {
    id: "automatizacion-ia",
    titulo: "Automatizacion con IA",
    descripcion:
      "Crea flujos de trabajo automatizados usando herramientas de IA. Ahorra horas de trabajo repetitivo.",
    nivel: "avanzado",
    duracion: "8 horas",
    lecciones: [
      {
        id: "auto-1",
        titulo: "Introduccion a la automatizacion",
        descripcion: "Que es la automatizacion y por que importa.",
        duracion: "20 min",
        contenido:
          "La automatizacion con IA te permite crear flujos de trabajo que se ejecutan solos. Imagina que cada vez que recibis un email de un cliente, la IA lo clasifica, genera una respuesta y la guarda en tu CRM.",
        tieneVideo: true,
        tieneQuiz: false,
      },
    ],
  },
  {
    id: "agentes-ia",
    titulo: "Agentes de IA",
    descripcion:
      "Construi tus propios agentes de IA. Aprende a disenar, implementar y desplegar agentes autonomos.",
    nivel: "pro",
    duracion: "12 horas",
    lecciones: [
      {
        id: "agentes-1",
        titulo: "Que son los agentes de IA",
        descripcion: "Introduccion a los agentes autonomos.",
        duracion: "25 min",
        contenido:
          "Un agente de IA es un sistema que puede tomar decisiones y ejecutar acciones de forma autonoma. A diferencia de un chatbot, un agente puede usar herramientas, buscar informacion y completar tareas complejas sin intervencion humana.",
        tieneVideo: true,
        tieneQuiz: true,
      },
    ],
  },
];

export function getCurso(cursoId: string): Curso | undefined {
  return cursos.find((c) => c.id === cursoId);
}

export function getLeccion(
  cursoId: string,
  leccionId: string
): { curso: Curso; leccion: Leccion; index: number } | undefined {
  const curso = getCurso(cursoId);
  if (!curso) return undefined;
  const index = curso.lecciones.findIndex((l) => l.id === leccionId);
  if (index === -1) return undefined;
  return { curso, leccion: curso.lecciones[index], index };
}
