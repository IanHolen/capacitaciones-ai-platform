import {
  leccion1,
  leccion2,
  leccion3,
  leccion4,
  leccion5,
  leccion6,
} from "./curso1-content";
import {
  c2leccion1,
  c2leccion2,
  c2leccion3,
  c2leccion4,
  c2leccion5,
  c2leccion6,
  c2leccion7,
} from "./curso2-content";
import {
  c3leccion1,
  c3leccion2,
  c3leccion3,
  c3leccion4,
  c3leccion5,
  c3leccion6,
} from "./curso3-content";
import { curso1Quiz, curso2Quiz, curso3Quiz } from "./quiz-data";

export type Nivel = "intro" | "basico" | "intermedio" | "avanzado" | "pro";

export const nivelConfig: Record<
  Nivel,
  { label: string; color: string; bg: string }
> = {
  intro: { label: "Introducción", color: "#16A34A", bg: "#F0FDF4" },
  basico: { label: "Básico", color: "#1E40AF", bg: "#EFF6FF" },
  intermedio: { label: "Intermedio", color: "#7C3AED", bg: "#F5F3FF" },
  avanzado: { label: "Avanzado", color: "#EA580C", bg: "#FFF7ED" },
  pro: { label: "Pro", color: "#CA8A04", bg: "#FEFCE8" },
};

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Leccion {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  contenido: string;
  tieneVideo: boolean;
  tieneQuiz: boolean;
  quizQuestions?: QuizQuestion[];
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
        titulo: "Que es la Inteligencia Artificial",
        descripcion: "Descubri que es la IA con una analogia simple: cocinar.",
        duracion: "20 min",
        contenido: leccion1,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "que-es-ia-2",
        titulo: "La IA en tu vida diaria",
        descripcion: "Descubri donde se esconde la IA en tu dia a dia.",
        duracion: "20 min",
        contenido: leccion2,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "que-es-ia-3",
        titulo: "Mitos vs. Realidades de la IA",
        descripcion: "Separamos la ficcion de la realidad sobre la IA.",
        duracion: "20 min",
        contenido: leccion3,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "que-es-ia-4",
        titulo: "Tipos de Inteligencia Artificial",
        descripcion: "Conoce los diferentes tipos de IA que existen hoy.",
        duracion: "20 min",
        contenido: leccion4,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "que-es-ia-5",
        titulo: "Vocabulario esencial de la IA",
        descripcion:
          "Los 18 terminos que necesitas conocer, con analogias cotidianas.",
        duracion: "25 min",
        contenido: leccion5,
        tieneVideo: false,
        tieneQuiz: false,
      },
      {
        id: "que-es-ia-6",
        titulo: "Quiz: Cuanto aprendiste sobre IA?",
        descripcion: "Pon a prueba lo que aprendiste con 10 preguntas.",
        duracion: "15 min",
        contenido: leccion6,
        tieneVideo: false,
        tieneQuiz: true,
        quizQuestions: curso1Quiz,
      },
    ],
  },
  {
    id: "primera-conversacion-ia",
    titulo: "Tu primera conversacion con IA",
    descripcion:
      "Curso practico donde vas a usar ChatGPT, Claude o Gemini por primera vez. Paso a paso, sin miedo.",
    nivel: "intro",
    duracion: "2 horas",
    lecciones: [
      {
        id: "conv-ia-1",
        titulo: "Que es ChatGPT, Claude y Gemini?",
        descripcion:
          "Conoce los tres asistentes de IA mas populares y sus diferencias.",
        duracion: "15 min",
        contenido: c2leccion1,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "conv-ia-2",
        titulo: "Crear tu cuenta paso a paso",
        descripcion: "Guia paso a paso para crear tu cuenta gratis.",
        duracion: "10 min",
        contenido: c2leccion2,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "conv-ia-3",
        titulo: "Tu primera pregunta",
        descripcion:
          "5 ejemplos de preguntas para romper el hielo con la IA.",
        duracion: "15 min",
        contenido: c2leccion3,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "conv-ia-4",
        titulo: "Entendiendo las respuestas de la IA",
        descripcion:
          "Aprende a detectar alucinaciones y mejorar las respuestas.",
        duracion: "20 min",
        contenido: c2leccion4,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "conv-ia-5",
        titulo: "5 cosas utiles que puedes hacer HOY",
        descripcion:
          "Correos, recetas, resumenes, traducciones y viajes con prompts copiables.",
        duracion: "20 min",
        contenido: c2leccion5,
        tieneVideo: false,
        tieneQuiz: false,
      },
      {
        id: "conv-ia-6",
        titulo: "Ejercicio practico: 3 preguntas guiadas",
        descripcion: "Practica real paso a paso con tu asistente de IA.",
        duracion: "15 min",
        contenido: c2leccion6,
        tieneVideo: false,
        tieneQuiz: false,
      },
      {
        id: "conv-ia-7",
        titulo: "Quiz: Cuanto aprendiste?",
        descripcion: "10 preguntas para medir tu progreso.",
        duracion: "10 min",
        contenido: c2leccion7,
        tieneVideo: false,
        tieneQuiz: true,
        quizQuestions: curso2Quiz,
      },
    ],
  },
  {
    id: "ia-sin-miedo",
    titulo: "IA sin miedo",
    descripcion:
      "Abordamos los miedos mas comunes sobre la IA con honestidad y te damos un plan personal para empezar.",
    nivel: "intro",
    duracion: "2 horas",
    lecciones: [
      {
        id: "sin-miedo-1",
        titulo: "La IA me quita el trabajo?",
        descripcion:
          "La verdad sobre como la IA cambia (no elimina) los trabajos.",
        duracion: "20 min",
        contenido: c3leccion1,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "sin-miedo-2",
        titulo: "Privacidad: que puedo y que NO debo compartir",
        descripcion:
          "Lista clara de lo que si y lo que nunca debes compartir con la IA.",
        duracion: "20 min",
        contenido: c3leccion2,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "sin-miedo-3",
        titulo: "La IA se equivoca? Si, y asi te proteges",
        descripcion:
          "Alucinaciones explicadas con ejemplos reales y como verificar.",
        duracion: "20 min",
        contenido: c3leccion3,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "sin-miedo-4",
        titulo: "La IA es una herramienta, no un reemplazo",
        descripcion:
          "Cuando usar IA y cuando consultar a un profesional humano.",
        duracion: "20 min",
        contenido: c3leccion4,
        tieneVideo: true,
        tieneQuiz: false,
      },
      {
        id: "sin-miedo-5",
        titulo: "Tu plan personal para empezar con IA",
        descripcion:
          "1 herramienta, 10 minutos, 1 semana. Tu plan de accion.",
        duracion: "15 min",
        contenido: c3leccion5,
        tieneVideo: false,
        tieneQuiz: false,
      },
      {
        id: "sin-miedo-6",
        titulo: "Quiz final del Nivel Introduccion",
        descripcion:
          "15 preguntas cubriendo los 3 cursos del nivel introductorio.",
        duracion: "20 min",
        contenido: c3leccion6,
        tieneVideo: false,
        tieneQuiz: true,
        quizQuestions: curso3Quiz,
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
        descripcion:
          "Como escribir instrucciones claras para mejores resultados.",
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
        descripcion:
          "Como asignarle un rol a la IA para mejores respuestas.",
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
  leccionId: string,
): { curso: Curso; leccion: Leccion; index: number } | undefined {
  const curso = getCurso(cursoId);
  if (!curso) return undefined;
  const index = curso.lecciones.findIndex((l) => l.id === leccionId);
  if (index === -1) return undefined;
  return { curso, leccion: curso.lecciones[index], index };
}
