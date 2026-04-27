// Contenido educativo del Curso 12: Introducción a las APIs de IA
// 7 lecciones — Nivel Avanzado, español LATAM, con acentos y ñ

export const c12leccion1 = `## ¿Qué es una API? (explicado simple)

Hasta ahora usaste IA a través de interfaces web — chatgpt.com, claude.ai, gemini.google.com. Pero detrás de esas páginas web existe algo más poderoso: la **API**.

### La analogía del restaurante

Imaginá que vas a un restaurante:
- **Vos** (el cliente) querés comer algo
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
| Costo | Plan mensual fijo | Pagás por uso |

### ¿Cuándo necesitás una API?

- Querés que tu app o sitio web use IA
- Necesitás procesar muchos datos automáticamente
- Querés personalizar completamente la experiencia
- Querés integrar IA en herramientas que ya tenés

### ¿Cómo funciona técnicamente?

Sin entrar en código (todavía), así es el flujo:

1. **Tu programa** manda una solicitud a la API: "Resumí este texto en 2 oraciones"
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

- **Request** (solicitud): Lo que le mandás a la API
- **Response** (respuesta): Lo que la API te devuelve
- **Endpoint**: La dirección web de la API (como una URL)
- **API Key**: Tu llave de acceso (como un password)
- **Rate limit**: El máximo de solicitudes que podés hacer por minuto
- **Token**: Unidad de texto que procesa la IA (1 token ≈ 0.75 palabras)

### Para llevar

- Una API es un intermediario que permite a tu programa usar IA
- Es más flexible y potente que la interfaz web
- Pagás por uso en vez de un plan mensual fijo
- Es el camino para integrar IA en tus propios proyectos`;

export const c12leccion2 = `## API Keys: qué son y cómo protegerlas

Una **API Key** es como la llave de tu casa digital. Sin ella, no podés acceder a la API. Con ella, cualquiera puede usar tu cuenta y gastar tu crédito.

### ¿Qué es una API Key?

Es un código largo y único que te identifica ante el servicio de IA. Se ve algo así:

\`\`\`
sk-proj-abc123def456ghi789jkl012mno345pqr678
\`\`\`

Cada vez que tu programa hace una solicitud a la API, incluye esta llave para que el servicio sepa que sos vos (y te cobre a vos).

### Cómo obtener tu API Key

**OpenAI (GPT-4, GPT-4o-mini):**
1. Andá a **platform.openai.com**
2. Creá una cuenta o iniciá sesión
3. Andá a **API Keys** en el menú
4. Hacé clic en **"Create new secret key"**
5. Copiá la llave inmediatamente (solo se muestra una vez)
6. Agregá crédito (mínimo $5 para empezar)

**Google Gemini:**
1. Andá a **aistudio.google.com**
2. Iniciá sesión con tu cuenta de Google
3. Hacé clic en **"Get API Key"**
4. Seleccioná o creá un proyecto de Google Cloud
5. Copiá tu API Key
6. Tiene un tier gratuito generoso (1,500 requests/día para Flash)

**Groq:**
1. Andá a **console.groq.com**
2. Creá una cuenta
3. Andá a **API Keys**
4. Creá una nueva llave
5. Copiá la llave
6. Plan gratuito con 14,400 requests/día

### Reglas de oro para proteger tu API Key

**1. NUNCA la compartas públicamente**
- No la pongas en código que se suba a GitHub
- No la pegues en un chat o foro
- No la envíes por email sin encriptar

**2. Usá variables de entorno**
En vez de poner la llave directamente en el código:

❌ Mal:
\`\`\`
api_key = "sk-proj-abc123..."
\`\`\`

✅ Bien (archivo .env):
\`\`\`
OPENAI_API_KEY=sk-proj-abc123...
\`\`\`

Y en tu código leés la variable de entorno.

**3. Configurá límites de gasto**
- OpenAI: Settings → Billing → Usage limits
- Google: Console → Quotas
- Establecé un límite mensual (ej: $10) para evitar sorpresas

**4. Rotá las llaves periódicamente**
- Cada 3-6 meses, creá una nueva llave y eliminá la vieja
- Si sospechás que se filtró, cambiala inmediatamente

**5. Usá llaves diferentes para cada proyecto**
- Una llave para pruebas, otra para producción
- Si una se compromete, no afecta todo

### ¿Qué pasa si alguien roba tu API Key?

- Puede hacer solicitudes a la API y vos pagás
- En el peor caso, puede acumular miles de dólares en cargos
- Por eso es crucial configurar límites de gasto

### Para llevar

- La API Key es tu credencial de acceso — tratala como una contraseña
- Nunca la pongas directamente en código visible
- Siempre configurá límites de gasto
- Gemini y Groq ofrecen tiers gratuitos generosos para empezar`;

export const c12leccion3 = `## Tu primera llamada a la API de Gemini

Vamos a hacer tu primera llamada a una API de IA. Elegimos **Google Gemini** porque:
- Tiene un tier gratuito muy generoso
- El setup es simple
- Es rápido y económico

### Paso 1: Obtener tu API Key de Gemini

1. Andá a **aistudio.google.com**
2. Iniciá sesión con tu cuenta de Google
3. Hacé clic en **"Get API Key"** → **"Create API Key"**
4. Copiá la llave y guardala en un lugar seguro

### Paso 2: Tu primera llamada (sin programar)

Antes de escribir código, podés probar la API directamente desde Google AI Studio:

1. En **aistudio.google.com**, abrí el **"Freeform prompt"**
2. Escribí: "Explicá qué es una API en 3 oraciones simples"
3. Hacé clic en **"Run"**
4. ¡Listo! Acabás de hacer tu primera llamada a la API de Gemini

### Paso 3: Primera llamada con código (JavaScript)

Creá un archivo \`mi-primera-api.js\`:

\`\`\`javascript
// Instalá el SDK: npm install @google/generative-ai

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("TU_API_KEY_ACA");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

async function main() {
  const result = await model.generateContent(
    "Explicá qué es una API en 3 oraciones simples, en español."
  );
  console.log(result.response.text());
}

main();
\`\`\`

**Para ejecutarlo:**
1. Tené Node.js instalado
2. Ejecutá: \`npm install @google/generative-ai\`
3. Reemplazá "TU_API_KEY_ACA" con tu llave real
4. Ejecutá: \`node mi-primera-api.js\`

### Paso 4: Primera llamada con Python

\`\`\`python
# Instalá: pip install google-generativeai

import google.generativeai as genai

genai.configure(api_key="TU_API_KEY_ACA")
model = genai.GenerativeModel("gemini-2.0-flash-lite")

response = model.generate_content(
    "Explicá qué es una API en 3 oraciones simples, en español."
)
print(response.text)
\`\`\`

### Usando el formato OpenAI-compatible

Gemini también soporta el formato de la API de OpenAI, lo que significa que podés usar el mismo código para ambos:

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
      { role: "user", content: "Explicá qué es una API en 3 oraciones simples." }
    ]
  });
  console.log(response.choices[0].message.content);
}

main();
\`\`\`

### ¿Cuánto cuesta?

Gemini Flash-Lite es extremadamente económico:
- **Gratis**: 1,500 requests por día
- **Si pagás**: $0.075 por millón de tokens de entrada

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

Groq usa el formato OpenAI-compatible, así que si ya probaste el ejemplo de la lección anterior, solo cambiás la URL y la key:

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
      { role: "system", content: "Respondé en español LATAM, de forma breve." },
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

Con Groq podés crear un chatbot que responde tan rápido que parece que está escribiendo en tiempo real. Ideal para:

- **Atención al cliente**: Respuestas instantáneas
- **Tutor educativo**: Sin esperas que frustren al estudiante
- **Asistente de ventas**: Respuestas rápidas = más conversiones

### Para llevar

- Groq es la API más rápida disponible gracias a su hardware especializado
- 14,400 requests gratis por día — más que suficiente para empezar
- Usa el formato OpenAI-compatible — fácil de integrar
- Ideal para aplicaciones en tiempo real donde la velocidad importa`;

export const c12leccion5 = `## Costos: ¿cuánto cuesta realmente usar APIs?

Una de las mayores preocupaciones al usar APIs de IA es el costo. La buena noticia: **es mucho más barato de lo que pensás**. La mala noticia: si no tenés cuidado, puede escalar.

### Cómo se cobra

Las APIs de IA cobran por **tokens procesados**:
- **Tokens de entrada** (input): Lo que vos le mandás al modelo
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

**1. Elegí el modelo correcto**
- No uses GPT-4o para tareas simples — GPT-4o-mini hace lo mismo a 1/15 del precio
- Gemini Flash-Lite es ideal para clasificación y respuestas cortas

**2. Optimizá los prompts**
- Prompts más cortos = menos tokens de entrada = menos costo
- Pedí respuestas concisas: "Respondé en máximo 3 oraciones"

**3. Usá caché**
- Si muchas personas hacen la misma pregunta, guardá la respuesta
- La próxima vez, devolvé la respuesta guardada sin llamar a la API

**4. Configurá límites**
- Establecé un presupuesto máximo mensual
- Configurá alertas cuando llegués al 80% del límite

### Para llevar

- Las APIs de IA son sorprendentemente económicas para la mayoría de los usos
- Empezá con tiers gratuitos — son más que suficientes para aprender
- Elegí el modelo según la tarea, no el más caro
- Siempre configurá límites de gasto para evitar sorpresas`;

export const c12leccion6 = `## Embeber un chatbot en una página web

El paso final: poner tu asistente de IA en tu propia página web para que tus clientes o usuarios puedan interactuar con él directamente.

### Opción 1: Widget sin código

La forma más rápida de tener un chatbot en tu web:

**Chatbase (chatbase.co)**
1. Creá una cuenta
2. Subí tus documentos o conectá tu sitio web
3. Personalizá el aspecto (colores, logo, mensaje de bienvenida)
4. Copiá el código del widget
5. Pegá el código antes del cierre \`</body>\` de tu HTML

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

Si querés control total, podés crear tu propia interfaz de chat y conectarla a la API:

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
      { role: "system", content: "Sos el asistente virtual de Mi Tienda. Respondé en español, de forma breve y amable." },
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

En vez de esperar a que toda la respuesta esté lista, podés mostrarla palabra por palabra (como hace ChatGPT):

Esto requiere un poco más de configuración pero mejora mucho la experiencia del usuario. Usás el parámetro \`stream: true\` en la llamada a la API y procesás los chunks a medida que llegan.

### Consideraciones para producción

**Seguridad:**
- La API Key SIEMPRE va en el servidor, nunca en el frontend
- Validá y limpiá el input del usuario
- Implementá rate limiting (máximo X requests por usuario por minuto)

**Experiencia del usuario:**
- Mostrá un indicador de "escribiendo..." mientras la IA responde
- Manejá errores graciosamente: "Disculpá, no pude procesar tu consulta. ¿Podés intentar de nuevo?"
- Agregá un botón de "Nueva conversación"

**Legal:**
- Avisá que el chat usa IA
- Incluí un disclaimer: "Las respuestas son generadas por IA y pueden contener errores"
- Cumplí con las regulaciones de privacidad de tu país

### Para llevar

- Widgets sin código como Chatbase son la forma más rápida de empezar
- Para más control, usá la API con tu propia interfaz
- La API Key SIEMPRE va en el servidor, nunca en el código del frontend
- Streaming mejora la experiencia del usuario significativamente`;

export const c12leccion7 = `## Quiz: Introducción a las APIs de IA

10 preguntas de opción múltiple.

---

### Pregunta 1
**¿Qué es una API en el contexto de IA?**
a) Una página web para chatear con IA
b) Un intermediario que permite a tu programa comunicarse con un servicio de IA
c) Un tipo de inteligencia artificial
d) Una aplicación para celular

**Respuesta correcta: b)**
La API es el intermediario que permite que tu código envíe solicitudes al modelo de IA y reciba respuestas.

---

### Pregunta 2
**¿Qué es una API Key?**
a) Un teclado especial para programadores
b) Una credencial única que te identifica ante el servicio de IA
c) El nombre de un modelo de IA
d) Un tipo de archivo

**Respuesta correcta: b)**
La API Key es tu credencial de acceso — como una contraseña que identifica tu cuenta ante el servicio.

---

### Pregunta 3
**¿Dónde debe estar tu API Key en una aplicación web?**
a) En el código del frontend (visible al usuario)
b) En el código del servidor (backend), nunca visible al usuario
c) En el nombre de dominio
d) En el título de la página

**Respuesta correcta: b)**
La API Key siempre debe estar en el servidor. Si está en el frontend, cualquiera puede verla y usarla.

---

### Pregunta 4
**¿Cuál es la ventaja principal de Groq sobre otros proveedores?**
a) Es más inteligente
b) Es extremadamente rápido gracias a su hardware especializado
c) Es el único gratuito
d) Solo funciona en español

**Respuesta correcta: b)**
Groq usa hardware LPU especializado que permite respuestas en milisegundos, mucho más rápido que otros proveedores.

---

### Pregunta 5
**¿Qué significa que Gemini y Groq son "OpenAI-compatible"?**
a) Que son de la misma empresa
b) Que podés usar el mismo código cambiando solo la URL y la API Key
c) Que son idénticos a ChatGPT
d) Que necesitás una cuenta de OpenAI

**Respuesta correcta: b)**
El formato OpenAI-compatible permite reutilizar el mismo código — solo cambiás la URL base y la API Key para cambiar de proveedor.

---

### Pregunta 6
**Aproximadamente, ¿cuánto cuesta un chatbot con 100 conversaciones diarias usando Gemini Flash-Lite?**
a) $500 al mes
b) $50 al mes
c) Menos de $1 al mes
d) Es imposible de calcular

**Respuesta correcta: c)**
Con Gemini Flash-Lite, 100 conversaciones diarias cuestan aproximadamente $0.60 al mes — y las primeras 1,500 diarias son gratis.

---

### Pregunta 7
**¿Cuál es la mejor estrategia para reducir costos de API?**
a) Usar siempre el modelo más caro para mejor calidad
b) Elegir el modelo adecuado para cada tarea y optimizar los prompts
c) No usar caché nunca
d) Hacer la misma pregunta muchas veces para verificar

**Respuesta correcta: b)**
Elegir el modelo correcto (no siempre el más caro) y escribir prompts eficientes son las formas más efectivas de reducir costos.

---

### Pregunta 8
**¿Qué es un "token" en el contexto de APIs de IA?**
a) Una moneda digital
b) La unidad de texto que procesa la IA, aproximadamente 0.75 palabras
c) Un tipo de API Key
d) Un archivo de configuración

**Respuesta correcta: b)**
Un token es la unidad mínima de texto que la IA procesa. En español, 1 token equivale a aproximadamente 0.75 palabras.

---

### Pregunta 9
**¿Cuál es la forma más rápida de poner un chatbot en tu página web?**
a) Contratar un equipo de 10 programadores
b) Usar un widget sin código como Chatbase
c) Reescribir toda tu página web
d) Instalar una aplicación de escritorio

**Respuesta correcta: b)**
Widgets como Chatbase permiten agregar un chatbot a tu web copiando y pegando unas líneas de código, sin programar.

---

### Pregunta 10
**Si tu API Key se filtra accidentalmente, ¿qué debés hacer?**
a) Esperar a ver si alguien la usa
b) Revocar la llave inmediatamente y crear una nueva
c) No pasa nada, las API Keys no son importantes
d) Cambiar el nombre de tu proyecto

**Respuesta correcta: b)**
Si una API Key se filtra, debés revocarla inmediatamente desde el panel del proveedor y generar una nueva.

---

### ¿Cómo te fue?

- **8-10 correctas**: Excelente. Estás listo para integrar APIs de IA en tus proyectos.
- **5-7 correctas**: Bien. Repasá las lecciones donde tuviste dudas.
- **Menos de 5**: Volvé a leer las lecciones con calma.

### ¡Felicitaciones por completar el Nivel Avanzado!

Ahora sabés crear asistentes personalizados, automatizar tareas con IA, y usar APIs para integrar IA en tus propios proyectos. En el **Nivel Pro** vas a aprender sobre agentes autónomos, RAG avanzado y arquitectura de sistemas con IA.`;
