// Contenido educativo del Curso 12: Introducción a las APIs de IA
// 7 lecciones — Nivel Avanzado, español LATAM, con acentos y ñ

export const c12leccion1 = `## ¿Qué es una API? (explicado simple)

Hasta ahora usaste IA a través de interfaces web — chatgpt.com, claude.ai, gemini.google.com. Pero detrás de esas páginas web existe algo más poderoso: la **API**.

### La analogía del restaurante

Imagina que vas a un restaurante:
- **Tú** (el cliente) quieres comer algo
- **La cocina** tiene todo lo necesario para preparar la comida
- **El mozo** es quien lleva tu pedido a la cocina y te trae el plato

**La API es el mozo.** Es el intermediario que lleva tus pedidos (preguntas) al sistema de IA (la cocina) y te trae las respuestas (el plato).

### ¿Por qué usar una API en vez de la web?

| Característica | Interfaz web | API |
|---|---|---|
| Facilidad | Muy fácil | Requiere configuración |
| Personalización | Limitada | Total |
| Automatización | Manual | Completamente automática |
| Volumen | Uno por uno | Miles por minuto |
| Integración | No | Se integra con cualquier sistema |
| Costo | Plan mensual fijo | Pagas por uso |

### ¿Cuándo necesitas una API?

- Quieres que tu app o sitio web use IA
- Necesitas procesar muchos datos automáticamente
- Quieres personalizar completamente la experiencia
- Quieres integrar IA en herramientas que ya tienes

### ¿Cómo funciona técnicamente?

Sin entrar en código (todavía), así es el flujo:

1. **Tu programa** manda una solicitud a la API: "Resume este texto en 2 oraciones"
2. **La API** recibe la solicitud y se la pasa al modelo de IA
3. **El modelo** procesa y genera la respuesta
4. **La API** te devuelve la respuesta: "Este texto habla sobre..."

Todo esto pasa en segundos, automáticamente, sin que nadie tenga que abrir un chat.

### Las APIs más importantes

| Proveedor | API | Modelo destacado | Ideal para |
|---|---|---|---|
| OpenAI | api.openai.com | GPT-4o, GPT-4o-mini | Uso general, texto, imagen |
| Google | generativelanguage.googleapis.com | Gemini Flash, Flash-Lite | Económico, rápido |
| Groq | api.groq.com | Llama 3.1, Mixtral | Velocidad extrema |
| Anthropic | api.anthropic.com | Claude Sonnet, Opus | Análisis profundo, código |

### Términos que vas a necesitar

- **Request** (solicitud): Lo que le mandas a la API
- **Response** (respuesta): Lo que la API te devuelve
- **Endpoint**: La dirección web de la API (como una URL)
- **API Key**: Tu llave de acceso (como un password)
- **Rate limit**: El máximo de solicitudes que puedes hacer por minuto
- **Token**: Unidad de texto que procesa la IA (1 token ≈ 0.75 palabras)

### Para llevar

- Una API es un intermediario que permite a tu programa usar IA
- Es más flexible y potente que la interfaz web
- Pagas por uso en vez de un plan mensual fijo
- Es el camino para integrar IA en tus propios proyectos`;

export const c12leccion2 = `## API Keys: qué son y cómo protegerlas

Una **API Key** es como la llave de tu casa digital. Sin ella, no puedes acceder a la API. Con ella, cualquiera puede usar tu cuenta y gastar tu crédito.

### ¿Qué es una API Key?

Es un código largo y único que te identifica ante el servicio de IA. Se ve algo así:

\`\`\`
sk-proj-abc123def456ghi789jkl012mno345pqr678
\`\`\`

Cada vez que tu programa hace una solicitud a la API, incluye esta llave para que el servicio sepa que eres tú (y te cobre a ti).

### Cómo obtener tu API Key

**OpenAI (GPT-4, GPT-4o-mini):**
1. Ve a **platform.openai.com**
2. Crea una cuenta o inicia sesión
3. Ve a **API Keys** en el menú
4. Haz clic en **"Create new secret key"**
5. Copia la llave inmediatamente (solo se muestra una vez)
6. Agrega crédito (mínimo $5 para empezar)

**Google Gemini:**
1. Ve a **aistudio.google.com**
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Get API Key"**
4. Selecciona o crea un proyecto de Google Cloud
5. Copia tu API Key
6. Tiene un tier gratuito generoso (1,500 requests/día para Flash)

**Groq:**
1. Ve a **console.groq.com**
2. Crea una cuenta
3. Ve a **API Keys**
4. Crea una nueva llave
5. Copia la llave
6. Plan gratuito con 14,400 requests/día

### Reglas de oro para proteger tu API Key

**1. NUNCA la compartas públicamente**
- No la pongas en código que se suba a GitHub
- No la pegues en un chat o foro
- No la envíes por email sin encriptar

**2. Usa variables de entorno**
En vez de poner la llave directamente en el código:

❌ Mal:
\`\`\`
api_key = "sk-proj-abc123..."
\`\`\`

✅ Bien (archivo .env):
\`\`\`
OPENAI_API_KEY=sk-proj-abc123...
\`\`\`

Y en tu código lees la variable de entorno.

**3. Configura límites de gasto**
- OpenAI: Settings → Billing → Usage limits
- Google: Console → Quotas
- Establece un límite mensual (ej: $10) para evitar sorpresas

**4. Rota las llaves periódicamente**
- Cada 3-6 meses, crea una nueva llave y elimina la vieja
- Si sospechas que se filtró, cámbiala inmediatamente

**5. Usa llaves diferentes para cada proyecto**
- Una llave para pruebas, otra para producción
- Si una se compromete, no afecta todo

### ¿Qué pasa si alguien roba tu API Key?

- Puede hacer solicitudes a la API y tú pagas
- En el peor caso, puede acumular miles de dólares en cargos
- Por eso es crucial configurar límites de gasto

### Para llevar

- La API Key es tu credencial de acceso — tratala como una contraseña
- Nunca la pongas directamente en código visible
- Siempre configura límites de gasto
- Gemini y Groq ofrecen tiers gratuitos generosos para empezar`;

export const c12leccion3 = `## Tu primera llamada a la API de Gemini

Vamos a hacer tu primera llamada a una API de IA. Elegimos **Google Gemini** porque:
- Tiene un tier gratuito muy generoso
- El setup es simple
- Es rápido y económico

### Paso 1: Obtener tu API Key de Gemini

1. Ve a **aistudio.google.com**
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Get API Key"** → **"Create API Key"**
4. Copia la llave y guárdala en un lugar seguro

### Paso 2: Tu primera llamada (sin programar)

Antes de escribir código, puedes probar la API directamente desde Google AI Studio:

1. En **aistudio.google.com**, abre el **"Freeform prompt"**
2. Escribe: "Explica qué es una API en 3 oraciones simples"
3. Haz clic en **"Run"**
4. ¡Listo! Acabas de hacer tu primera llamada a la API de Gemini

### Paso 3: Primera llamada con código (JavaScript)

Crea un archivo \`mi-primera-api.js\`:

\`\`\`javascript
// Instala el SDK: npm install @google/generative-ai

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("TU_API_KEY_ACA");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

async function main() {
  const result = await model.generateContent(
    "Explica qué es una API en 3 oraciones simples, en español."
  );
  console.log(result.response.text());
}

main();
\`\`\`

**Para ejecutarlo:**
1. Ten Node.js instalado
2. Ejecuta: \`npm install @google/generative-ai\`
3. Reemplaza "TU_API_KEY_ACA" con tu llave real
4. Ejecuta: \`node mi-primera-api.js\`

### Paso 4: Primera llamada con Python

\`\`\`python
# Instala: pip install google-generativeai

import google.generativeai as genai

genai.configure(api_key="TU_API_KEY_ACA")
model = genai.GenerativeModel("gemini-2.0-flash-lite")

response = model.generate_content(
    "Explica qué es una API en 3 oraciones simples, en español."
)
print(response.text)
\`\`\`

### Usando el formato OpenAI-compatible

Gemini también soporta el formato de la API de OpenAI, lo que significa que puedes usar el mismo código para ambos:

\`\`\`javascript
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: "TU_GEMINI_API_KEY",
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

async function main() {
  const response = await client.chat.completions.create({
    model: "gemini-2.0-flash-lite",
    messages: [
      { role: "user", content: "Explica qué es una API en 3 oraciones simples." }
    ]
  });
  console.log(response.choices[0].message.content);
}

main();
\`\`\`

### ¿Cuánto cuesta?

Gemini Flash-Lite es extremadamente económico:
- **Gratis**: 1,500 requests por día
- **Si pagas**: $0.075 por millón de tokens de entrada

Para referencia: 1 millón de tokens ≈ 750,000 palabras. Tendrías que hacer miles de preguntas al día para gastar más de $1.

### Para llevar

- Google AI Studio permite probar la API sin código
- El SDK de Gemini funciona con JavaScript y Python
- El formato OpenAI-compatible simplifica el cambio entre proveedores
- El tier gratuito es más que suficiente para aprender y prototipar`;

export const c12leccion4 = `## Usar la API de Groq para respuestas rápidas

**Groq** es especial por una razón: es increíblemente rápido. Mientras otras APIs tardan 2-5 segundos en responder, Groq responde en milisegundos. Esto lo hace ideal para aplicaciones en tiempo real.

### ¿Por qué Groq es tan rápido?

Groq usa hardware especializado llamado **LPU** (Language Processing Unit) diseñado específicamente para modelos de lenguaje. Es como la diferencia entre usar una licuadora para todo vs usar un exprimidor de jugos específico — la herramienta especializada es mucho más rápida.

### Modelos disponibles en Groq

| Modelo | Velocidad | Calidad | Ideal para |
|---|---|---|---|
| Llama 3.1 8B | Ultra rápido | Buena | Chat, resúmenes, clasificación |
| Llama 3.1 70B | Rápido | Muy buena | Análisis, redacción compleja |
| Mixtral 8x7B | Muy rápido | Buena | Multiidioma, código |

### Plan gratuito de Groq

- **14,400 requests por día** con Llama 3.1 8B
- **14,400 requests por día** con otros modelos
- Sin tarjeta de crédito requerida
- Perfecto para aprender y prototipar

### Tu primera llamada a Groq

Groq usa el formato OpenAI-compatible, así que si ya probaste el ejemplo de la lección anterior, solo cambias la URL y la key:

\`\`\`javascript
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: "TU_GROQ_API_KEY",
  baseURL: "https://api.groq.com/openai/v1"
});

async function main() {
  const start = Date.now();

  const response = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: "Responde en español LATAM, de forma breve." },
      { role: "user", content: "¿Qué ventajas tiene una API sobre una interfaz web?" }
    ]
  });

  const elapsed = Date.now() - start;
  console.log(response.choices[0].message.content);
  console.log("Tiempo de respuesta:", elapsed, "ms");
}

main();
\`\`\`

Vas a ver que la respuesta llega en menos de 500ms — a veces menos de 200ms.

### Cuándo usar Groq vs Gemini

| Criterio | Groq | Gemini |
|---|---|---|
| Velocidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Documentos largos | ❌ (ventana chica) | ⭐⭐⭐⭐⭐ |
| Costo | Gratis generoso | Gratis generoso |
| Calidad de respuesta | Buena | Muy buena |
| Ideal para | Chat en tiempo real, clasificación | Análisis, documentos, tareas complejas |

### Ejemplo práctico: Chatbot ultra-rápido

Con Groq puedes crear un chatbot que responde tan rápido que parece que está escribiendo en tiempo real. Ideal para:

- **Atención al cliente**: Respuestas instantáneas
- **Tutor educativo**: Sin esperas que frustren al estudiante
- **Asistente de ventas**: Respuestas rápidas = más conversiones

### Para llevar

- Groq es la API más rápida disponible gracias a su hardware especializado
- 14,400 requests gratis por día — más que suficiente para empezar
- Usa el formato OpenAI-compatible — fácil de integrar
- Ideal para aplicaciones en tiempo real donde la velocidad importa`;

export const c12leccion5 = `## Costos: ¿cuánto cuesta realmente usar APIs?

Una de las mayores preocupaciones al usar APIs de IA es el costo. La buena noticia: **es mucho más barato de lo que piensas**. La mala noticia: si no tienes cuidado, puede escalar.

### Cómo se cobra

Las APIs de IA cobran por **tokens procesados**:
- **Tokens de entrada** (input): Lo que tú le mandas al modelo
- **Tokens de salida** (output): Lo que el modelo te responde
- 1 token ≈ 0.75 palabras en español

### Tabla de precios reales (abril 2026)

| Proveedor | Modelo | Input (por 1M tokens) | Output (por 1M tokens) |
|---|---|---|---|
| Google | Gemini Flash-Lite | $0.075 | $0.30 |
| Google | Gemini Flash | $0.15 | $0.60 |
| Groq | Llama 3.1 8B | $0.05 | $0.08 |
| OpenAI | GPT-4o-mini | $0.15 | $0.60 |
| OpenAI | GPT-4o | $2.50 | $10.00 |
| Anthropic | Claude Sonnet | $3.00 | $15.00 |

### ¿Cuánto es eso en la práctica?

**Escenario 1: Chatbot de atención al cliente**
- 100 conversaciones al día
- Cada conversación: ~500 tokens entrada + 500 tokens salida
- Usando Gemini Flash-Lite: ~$0.02 por día = **$0.60 al mes**

**Escenario 2: Resumir 50 documentos al día**
- Cada documento: ~2,000 tokens entrada + 500 tokens salida
- Usando GPT-4o-mini: ~$0.03 por día = **$0.90 al mes**

**Escenario 3: Análisis profundo con modelo premium**
- 20 análisis al día
- Cada análisis: ~3,000 tokens entrada + 1,000 tokens salida
- Usando Claude Sonnet: ~$1.20 por día = **$36 al mes**

### Tiers gratuitos

| Proveedor | Qué te dan gratis |
|---|---|
| Google Gemini | 1,500 requests/día con Flash |
| Groq | 14,400 requests/día |
| OpenAI | $5 de crédito inicial |
| Anthropic | $5 de crédito inicial |

### Estrategias para reducir costos

**1. Elige el modelo correcto**
- No uses GPT-4o para tareas simples — GPT-4o-mini hace lo mismo a 1/15 del precio
- Gemini Flash-Lite es ideal para clasificación y respuestas cortas

**2. Optimiza los prompts**
- Prompts más cortos = menos tokens de entrada = menos costo
- Pide respuestas concisas: "Responde en máximo 3 oraciones"

**3. Usa caché**
- Si muchas personas hacen la misma pregunta, guarda la respuesta
- La próxima vez, devuelve la respuesta guardada sin llamar a la API

**4. Configura límites**
- Establece un presupuesto máximo mensual
- Configura alertas cuando llegues al 80% del límite

### Para llevar

- Las APIs de IA son sorprendentemente económicas para la mayoría de los usos
- Empieza con tiers gratuitos — son más que suficientes para aprender
- Elige el modelo según la tarea, no el más caro
- Siempre configura límites de gasto para evitar sorpresas`;

export const c12leccion6 = `## Embeber un chatbot en una página web

El paso final: poner tu asistente de IA en tu propia página web para que tus clientes o usuarios puedan interactuar con él directamente.

### Opción 1: Widget sin código

La forma más rápida de tener un chatbot en tu web:

**Chatbase (chatbase.co)**
1. Crea una cuenta
2. Sube tus documentos o conecta tu sitio web
3. Personaliza el aspecto (colores, logo, mensaje de bienvenida)
4. Copia el código del widget
5. Pega el código antes del cierre \`</body>\` de tu HTML

El código se ve algo así:
\`\`\`html
<script>
  window.chatbaseConfig = {
    chatbotId: "tu-id-aqui",
  }
</script>
<script src="https://www.chatbase.co/embed.min.js" defer></script>
\`\`\`

**Otras opciones sin código:**
- **CustomGPT.ai**: Similar a Chatbase, con RAG integrado
- **Voiceflow**: Para chatbots más complejos con flujos de conversación
- **Botpress**: Open source con interfaz visual

### Opción 2: API + tu propia interfaz

Si quieres control total, puedes crear tu propia interfaz de chat y conectarla a la API:

**Arquitectura básica:**
\`\`\`
Usuario → Tu página web → Tu servidor → API de IA → Respuesta → Usuario
\`\`\`

**Ejemplo simplificado (API Route en Next.js):**
\`\`\`typescript
// app/api/chat/route.ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await client.chat.completions.create({
    model: "gemini-2.0-flash-lite",
    messages: [
      { role: "system", content: "Eres el asistente virtual de Mi Tienda. Responde en español, de forma breve y amable." },
      { role: "user", content: message }
    ]
  });

  return Response.json({
    reply: response.choices[0].message.content
  });
}
\`\`\`

**Importante**: La API Key va en el servidor (backend), NUNCA en el frontend (el código que ve el usuario).

### Opción 3: Streaming (respuesta en tiempo real)

En vez de esperar a que toda la respuesta esté lista, puedes mostrarla palabra por palabra (como hace ChatGPT):

Esto requiere un poco más de configuración pero mejora mucho la experiencia del usuario. Usa el parámetro \`stream: true\` en la llamada a la API y procesa los chunks a medida que llegan.

### Consideraciones para producción

**Seguridad:**
- La API Key SIEMPRE va en el servidor, nunca en el frontend
- Valida y limpia el input del usuario
- Implementa rate limiting (máximo X requests por usuario por minuto)

**Experiencia del usuario:**
- Muestra un indicador de "escribiendo..." mientras la IA responde
- Maneja errores graciosamente: "Disculpa, no pude procesar tu consulta. ¿Puedes intentar de nuevo?"
- Agrega un botón de "Nueva conversación"

**Legal:**
- Avisa que el chat usa IA
- Incluye un disclaimer: "Las respuestas son generadas por IA y pueden contener errores"
- Cumple con las regulaciones de privacidad de tu país

### Para llevar

- Widgets sin código como Chatbase son la forma más rápida de empezar
- Para más control, usa la API con tu propia interfaz
- La API Key SIEMPRE va en el servidor, nunca en el código del frontend
- Streaming mejora la experiencia del usuario significativamente`;

export const c12leccion7 = ``;
