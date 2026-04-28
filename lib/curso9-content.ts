// Contenido educativo del Curso 9: Flujos de trabajo con IA
// 7 lecciones — Nivel Intermedio, español LATAM, con acentos y ñ

export const c9leccion1 = `## Prompt chaining: dividir en pasos

### El problema del prompt gigante

Cuando ya tienes experiencia usando IA, es tentador escribir un solo prompt enorme que intente resolver todo de una vez. Algo como:

*"Investiga sobre energía solar en México, haz un resumen ejecutivo, redacta un informe de 2000 palabras con introducción, desarrollo y conclusión, agrega datos estadísticos y después crea 3 publicaciones para LinkedIn."*

El resultado suele ser... mediocre. La IA intenta hacer todo al mismo tiempo y ninguna parte queda realmente bien. Es como pedirle a alguien que cocine, limpie, haga las compras y pague las cuentas — todo en simultáneo.

### ¿Qué es el prompt chaining?

**Prompt chaining** (encadenamiento de prompts) es una técnica donde divides una tarea compleja en pasos secuenciales. Cada paso produce un resultado que alimenta al siguiente.

En vez de un solo prompt que hace todo, usas una **cadena** de prompts donde:

1. El **paso 1** produce un resultado intermedio
2. Ese resultado se convierte en **entrada del paso 2**
3. El paso 2 produce otro resultado que alimenta el **paso 3**
4. Y así sucesivamente

### ¿Por qué funciona mejor?

- **Foco**: Cada prompt tiene un solo objetivo claro
- **Calidad**: La IA puede dedicar toda su capacidad a una tarea específica
- **Control**: Puedes revisar y ajustar cada paso antes de continuar
- **Depuración**: Si algo sale mal, sabes exactamente dónde falló
- **Reutilización**: Puedes reusar pasos individuales en otros flujos

### Ejemplo práctico: de investigación a informe

Veamos cómo transformar ese prompt gigante en una cadena efectiva.

**Paso 1 — Investigación:**
\`\`\`
Actúa como un investigador especializado en energías renovables.
Investiga el estado actual de la energía solar en México.
Lista los 8-10 datos más relevantes, incluyendo:
- Capacidad instalada actual
- Principales proyectos en curso
- Marco regulatorio
- Comparación con otros países de la región
Cita fuentes cuando sea posible.
\`\`\`

**Paso 2 — Estructura** (usas la respuesta del paso 1 como contexto):
\`\`\`
Basándote en la siguiente investigación:
[pegas el resultado del paso 1]

Crea un esquema detallado para un informe ejecutivo con:
- Título propuesto
- 5-6 secciones principales con subtítulos
- Puntos clave a cubrir en cada sección
- Orden lógico de presentación
\`\`\`

**Paso 3 — Redacción** (usas el esquema del paso 2):
\`\`\`
Usando el siguiente esquema:
[pegas el resultado del paso 2]

Y estos datos de investigación:
[pegas el resultado del paso 1]

Redacta el informe completo. Usa un tono profesional pero accesible.
Extensión: aproximadamente 2000 palabras.
Incluye datos concretos y estadísticas.
\`\`\`

**Paso 4 — Revisión:**
\`\`\`
Revisa el siguiente informe como un editor profesional:
[pegas el resultado del paso 3]

Verifica:
- Coherencia entre secciones
- Que no haya datos contradictorios
- Claridad de la redacción
- Que la conclusión cierre adecuadamente

Propón mejoras concretas con el texto corregido.
\`\`\`

**Paso 5 — Contenido derivado:**
\`\`\`
Basándote en este informe:
[pegas el resultado del paso 4]

Crea 3 publicaciones para LinkedIn:
- Cada una de 150-200 palabras
- Enfocadas en un aspecto diferente del informe
- Con un gancho inicial que capture la atención
- Con un llamado a la acción al final
\`\`\`

### Plantilla para diseñar tu propia cadena

Antes de empezar cualquier tarea compleja, completa esta plantilla:

| Paso | Objetivo | Input | Output esperado |
|------|----------|-------|-----------------|
| 1 | ¿Qué quieres lograr? | ¿Qué información inicial tienes? | ¿Qué resultado necesitas? |
| 2 | ... | Resultado del paso 1 + ... | ... |
| 3 | ... | Resultado del paso 2 + ... | ... |

### ¿Cuándo usar chaining vs. un solo prompt?

**Usa un solo prompt cuando:**
- La tarea es simple y directa
- No necesitas revisar pasos intermedios
- El resultado es corto (un párrafo, una lista, una respuesta puntual)

**Usa chaining cuando:**
- La tarea tiene múltiples etapas distintas
- Necesitas control de calidad en cada paso
- El resultado final es largo o complejo
- Diferentes pasos requieren diferentes "roles" de la IA
- Quieres poder reutilizar pasos individuales

### Consejos avanzados

1. **Guarda los resultados intermedios**: Cópialos en un documento aparte. Si un paso falla, no tienes que volver a empezar desde cero.

2. **Ajusta sobre la marcha**: Si el paso 2 no te convence, puedes pedir una variación antes de pasar al paso 3.

3. **Mezcla modelos**: Puedes usar un modelo para investigar (Claude, por ejemplo) y otro para redactar (ChatGPT), aprovechando las fortalezas de cada uno.

4. **Automatiza con herramientas**: Si repites la misma cadena frecuentemente, herramientas como Zapier, Make o incluso un simple script pueden encadenar los pasos automáticamente.

### Para llevar

- El prompt chaining divide tareas complejas en pasos manejables
- Cada paso produce un resultado que alimenta al siguiente
- Te da más control, mejor calidad y la capacidad de depurar errores
- Úsalo siempre que la tarea tenga más de una etapa claramente diferente`;

export const c9leccion2 = `## Memoria y proyectos en ChatGPT/Claude

### El problema de la memoria

¿Te pasó alguna vez que le explicaste a la IA quién eres, qué haces y qué necesitas... y al abrir una nueva conversación tuviste que explicar todo de nuevo? Eso es porque, por defecto, **cada conversación de IA empieza desde cero**.

Es como si cada vez que fueras al médico tuvieras que contar toda tu historia clínica desde el nacimiento. Frustrante, ¿no?

Por suerte, las principales herramientas de IA ya tienen formas de "recordar" información entre conversaciones. Veamos cómo funciona cada una.

### Cómo funciona la memoria en ChatGPT

ChatGPT tiene dos mecanismos principales de memoria:

**1. Memoria automática**

ChatGPT puede recordar datos que mencionas en las conversaciones. Por ejemplo, si le dices *"soy profesor de historia en una escuela secundaria"*, puede recordar eso para futuras conversaciones.

Puedes gestionar esta memoria desde **Configuración → Personalización → Memoria**:
- Ver todo lo que ChatGPT recuerda de ti
- Borrar memorias específicas
- Desactivar la memoria completamente

**2. Instrucciones personalizadas (Custom Instructions)**

Este es el recurso más poderoso. Vas a **Configuración → Personalización → Instrucciones personalizadas** y completas dos campos:

*"¿Qué te gustaría que ChatGPT supiera de ti?"*
\`\`\`
Soy gerente de marketing de una empresa mediana de tecnología
en Ciudad de México. Manejo un equipo de 5 personas. Mi audiencia
principal son empresas B2B del sector financiero. Prefiero
comunicaciones formales pero no rígidas.
\`\`\`

*"¿Cómo te gustaría que ChatGPT respondiera?"*
\`\`\`
Responde en español mexicano. Sé conciso — prefiero respuestas
de 2-3 párrafos máximo salvo que pida más detalle. Usa bullet
points cuando sea posible. Si necesitas más contexto para
responder bien, pregúntame antes de asumir.
\`\`\`

Estas instrucciones se aplican automáticamente a **todas** tus conversaciones nuevas.

### Claude Projects: contexto organizado

Claude de Anthropic tiene un enfoque diferente con **Projects** (Proyectos). Un proyecto es un espacio de trabajo donde agrupas:

**Instrucciones del proyecto:**
Son como las instrucciones personalizadas de ChatGPT, pero específicas para un tema. Por ejemplo, puedes tener:
- Un proyecto "Marketing" con instrucciones para tono de marca
- Un proyecto "Análisis de datos" con instrucciones para formato de reportes
- Un proyecto "Personal" con instrucciones más informales

\`\`\`
Ejemplo de instrucciones de proyecto:

Eres mi asistente para el proyecto de lanzamiento del producto XYZ.
El público objetivo es: empresas de logística medianas (50-500 empleados)
en México, Colombia y Chile.
Nuestro tono de marca es: profesional, innovador, directo.
El lanzamiento es el 15 de julio.
Toda comunicación debe incluir el slogan "Logística inteligente".
\`\`\`

**Documentos de contexto:**
Puedes subir archivos que Claude puede consultar durante las conversaciones del proyecto:
- PDFs de informes anteriores
- Documentos de marca
- Hojas de cálculo con datos
- Textos de referencia

La ventaja es que no tienes que pegar estos documentos en cada conversación. Claude los tiene disponibles automáticamente.

### Gemini: extensiones y contexto

Google Gemini maneja el contexto de una forma distinta:

- **Extensiones**: Gemini puede conectarse a tus servicios de Google (Gmail, Drive, Maps, YouTube, etc.) y acceder a esa información durante la conversación
- **Gems**: Puedes crear versiones personalizadas de Gemini con instrucciones específicas, similar a los Custom GPTs

Por ejemplo, puedes pedirle a Gemini: *"Busca en mi Gmail los últimos correos sobre el proyecto Aurora y resúmelos"* — y lo hace directamente porque tiene acceso a tu Gmail.

### Buenas prácticas para mantener contexto

**1. Sé explícito al inicio de cada conversación compleja:**
\`\`\`
Estamos trabajando en [proyecto X]. Ya completamos [pasos A y B].
Ahora necesito que me ayudes con [paso C].
Contexto relevante: [datos clave]
\`\`\`

**2. Usa resúmenes de conversaciones anteriores:**

Antes de cerrar una conversación larga, pídele a la IA:
\`\`\`
Resume esta conversación en un párrafo. Incluye:
- Qué tema trabajamos
- Qué decisiones tomamos
- Qué queda pendiente
Voy a usar este resumen para retomar en una próxima sesión.
\`\`\`

Copia ese resumen y úsalo como inicio de la siguiente conversación.

**3. Crea un "documento de contexto" maestro:**

Mantén un archivo con la información que siempre necesitas darle a la IA:
- Tu rol y responsabilidades
- Tu industria y audiencia
- Preferencias de formato y tono
- Datos que usas frecuentemente

Pégalo al inicio de conversaciones importantes o súbelo como documento de proyecto.

### ¿Cuándo empezar una nueva conversación?

**Empieza una conversación nueva cuando:**
- Cambias completamente de tema
- La conversación actual se volvió muy larga (más de 30-40 mensajes)
- La IA empieza a "olvidar" cosas que dijiste antes
- Quieres un enfoque fresco sin sesgos de la conversación anterior

**Sigue en la misma conversación cuando:**
- Estás iterando sobre un mismo documento o idea
- Necesitas que la IA recuerde decisiones tomadas antes
- Estás en medio de un flujo de prompt chaining

### Para llevar

- Cada herramienta tiene su forma de mantener contexto entre sesiones
- Las instrucciones personalizadas de ChatGPT aplican a todas las conversaciones
- Claude Projects es ideal para agrupar conversaciones por tema con documentos compartidos
- Gemini se conecta directamente a tus servicios de Google
- Siempre haz un resumen antes de cerrar una conversación larga`;

export const c9leccion3 = `## Tokens y ventanas de contexto

### ¿Qué es un token?

Cada vez que le escribes algo a una IA, tu texto no se procesa como palabras completas. Se descompone en pedazos más pequeños llamados **tokens**.

Un token es una unidad de texto que el modelo procesa. Puede ser:
- Una palabra completa: "hola" = 1 token
- Parte de una palabra: "inteligencia" = 3-4 tokens (algo como "intel" + "igen" + "cia")
- Un signo de puntuación: "." = 1 token
- Un espacio: generalmente se agrupa con la palabra siguiente

**Regla práctica para español:**
> 1 palabra ≈ 1.5 tokens en promedio (el español usa más tokens que el inglés por sus palabras más largas)

Esto significa que un texto de 1000 palabras en español consume aproximadamente 1500 tokens.

### Ejemplos concretos

Veamos cuántos tokens usan diferentes textos:

| Texto | Palabras aprox. | Tokens aprox. |
|-------|----------------|---------------|
| Un mensaje corto de chat | 20 | 30 |
| Un email profesional | 150 | 225 |
| Una página de un documento | 300 | 450 |
| Un informe de 5 páginas | 1,500 | 2,250 |
| Una novela corta | 50,000 | 75,000 |

### ¿Qué es la ventana de contexto?

La **ventana de contexto** (context window) es la cantidad máxima de tokens que un modelo puede procesar en una sola conversación. Incluye **todo**: tu prompt, la respuesta de la IA, y todo el historial de la conversación.

Piensa en la ventana de contexto como la **memoria de trabajo** de la IA. Es como un escritorio: si es pequeño, solo puedes tener unos pocos papeles a la vez. Si es grande, puedes tener muchos documentos abiertos al mismo tiempo.

### Límites por modelo (2025)

| Modelo | Ventana de contexto | Equivalente aproximado |
|--------|--------------------|-----------------------|
| GPT-4o | 128,000 tokens | ~85,000 palabras (~300 páginas) |
| GPT-4o mini | 128,000 tokens | ~85,000 palabras |
| Claude 3.5 Sonnet | 200,000 tokens | ~133,000 palabras (~470 páginas) |
| Claude 3 Opus | 200,000 tokens | ~133,000 palabras |
| Gemini 1.5 Pro | 1,000,000 tokens | ~666,000 palabras (~2,300 páginas) |
| Gemini 2.0 Flash | 1,000,000 tokens | ~666,000 palabras |

Estos números cambian frecuentemente a medida que los modelos se actualizan, pero te dan una idea de las magnitudes.

### ¿Cómo estimar tu uso de tokens?

**Método rápido:**
1. Cuenta las palabras de tu texto (la mayoría de editores de texto lo hacen)
2. Multiplica por 1.5 para español
3. Ese es tu consumo aproximado de tokens

**Método preciso:**
- OpenAI tiene un tokenizador online: [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)
- Para Claude, la estimación es similar (usa un tokenizador parecido)

**Ejemplo práctico:**

Si tienes una conversación con ChatGPT donde:
- Tu instrucción personalizada tiene 200 palabras (~300 tokens)
- Tu prompt tiene 500 palabras (~750 tokens)
- La respuesta de ChatGPT tiene 800 palabras (~1,200 tokens)
- Y llevas 10 intercambios similares...

El consumo total sería aproximadamente: 300 + (750 + 1,200) × 10 = **19,800 tokens**

Con una ventana de 128,000 tokens, todavía te queda mucho espacio. Pero si pegaste un documento de 50 páginas al inicio, la cosa cambia rápidamente.

### ¿Qué pasa cuando excedes la ventana de contexto?

Cuando la conversación supera el límite de tokens, diferentes modelos reaccionan de diferentes formas:

1. **Truncamiento**: El modelo "olvida" los mensajes más antiguos de la conversación. Es como si las primeras páginas de un libro se borraran a medida que agregas páginas nuevas al final.

2. **Error**: Algunos modelos simplemente rechazan el mensaje si excede el límite.

3. **Degradación gradual**: El modelo puede empezar a ser menos preciso o coherente con la información que queda al borde de su ventana.

**Señales de que estás llegando al límite:**
- La IA "olvida" instrucciones que le diste al principio
- Las respuestas se vuelven genéricas o repetitivas
- La IA contradice algo que dijo antes en la misma conversación
- Recibes un mensaje de error sobre la longitud

### Estrategias para trabajar dentro de los límites

**1. Resume antes de seguir:**

Cuando una conversación se extiende, pídele a la IA:
\`\`\`
Resume todo lo que hemos discutido hasta ahora en los puntos
más importantes. Voy a empezar una nueva conversación con
este resumen como contexto.
\`\`\`

**2. Divide documentos largos en chunks (fragmentos):**

En vez de pegar un documento de 100 páginas, divídelo:
\`\`\`
Voy a darte un documento en partes. Espera a que te diga
"listo" antes de hacer el análisis.

Parte 1 de 5:
[texto de las primeras 20 páginas]
\`\`\`

**3. Prioriza lo que incluyes:**

No pegues todo. Pregúntate:
- ¿La IA realmente necesita todo este texto?
- ¿Puedo darle un resumen en vez del documento completo?
- ¿Puedo extraer solo las secciones relevantes?

**4. Usa archivos adjuntos cuando sea posible:**

Tanto ChatGPT como Claude permiten subir archivos. El procesamiento de archivos adjuntos a veces es más eficiente que pegar texto directamente en el chat.

**5. Empieza conversaciones nuevas estratégicamente:**

No tengas miedo de empezar de nuevo. Una conversación fresca con un buen resumen de contexto suele funcionar mejor que una conversación agotada de 50 mensajes.

### Una nota sobre costos

Si usas la API (interfaz de programación) de estos modelos, el costo se calcula por tokens:

- **Tokens de entrada** (lo que tú escribes): un precio
- **Tokens de salida** (lo que la IA responde): generalmente 2-4 veces más caro

Para la mayoría de los usuarios que usan ChatGPT Plus, Claude Pro o Gemini Advanced con su suscripción mensual, esto no es una preocupación directa. Pero es bueno entender que internamente hay un costo por cada token, lo cual explica por qué los planes gratuitos tienen límites de uso.

### Para llevar

- Los tokens son las unidades básicas que procesan los modelos de IA
- En español, 1 palabra ≈ 1.5 tokens aproximadamente
- La ventana de contexto es el límite total de tokens por conversación
- Cuando excedes el límite, la IA pierde información del inicio de la conversación
- Usa resúmenes, fragmentos y priorización para maximizar tu ventana de contexto
- Gemini tiene la ventana más grande, pero para la mayoría de tareas 128K-200K es suficiente`;

export const c9leccion4 = `## Evaluaciones: ¿cómo saber si un prompt es bueno?

### El problema que nadie habla

Ya sabes escribir prompts. Ya sabes encadenarlos. Pero hay una pregunta que muchos usuarios de IA ignoran: **¿cómo sabes si tu prompt realmente funciona bien?**

Que la IA te devuelva una respuesta no significa que sea una buena respuesta. Y que la respuesta te "suene" bien no significa que sea precisa, completa o consistente.

Evaluar tus prompts es lo que separa a alguien que "usa IA" de alguien que **usa IA de forma profesional**.

### Evaluación manual: rúbricas y checklists

La forma más simple de evaluar un prompt es crear una **rúbrica** — una lista de criterios con puntajes.

**Ejemplo de rúbrica para un prompt de redacción:**

| Criterio | 1 (Malo) | 3 (Aceptable) | 5 (Excelente) |
|----------|----------|----------------|----------------|
| Precisión | Datos incorrectos | Mayormente correcto | Totalmente preciso |
| Completitud | Falta información clave | Cubre lo básico | Cubre todo lo pedido |
| Tono | No coincide con lo pedido | Cercano al tono deseado | Exactamente el tono pedido |
| Formato | No respeta el formato | Formato parcial | Formato perfecto |
| Utilidad | No se puede usar así | Necesita edición menor | Listo para usar |

Después de cada respuesta de la IA, puntúa cada criterio y suma. Si el total es menor a 15 (de 25 posibles), tu prompt necesita ajustes.

### Test de consistencia: ejecuta el mismo prompt 3+ veces

Este es uno de los tests más reveladores y más fáciles de hacer.

**Procedimiento:**
1. Toma tu prompt exacto
2. Ejecútalo en 3 conversaciones nuevas diferentes
3. Compara las 3 respuestas

**¿Qué buscas?**
- **Las 3 respuestas son similares**: Tu prompt es específico y consistente. Bien.
- **Las 3 respuestas son completamente diferentes**: Tu prompt es demasiado vago. La IA está adivinando qué quieres.
- **2 son similares y 1 es diferente**: Tu prompt es mayormente bueno pero tiene alguna ambigüedad.

**Ejemplo práctico:**

Prompt vago:
\`\`\`
Escribe algo sobre marketing digital.
\`\`\`
→ Resultado: 3 textos completamente distintos en tema, tono, longitud y enfoque.

Prompt específico:
\`\`\`
Escribe un párrafo de 100 palabras explicando qué es el email
marketing para un dueño de pyme que nunca lo usó. Tono:
profesional pero amigable. Incluye una estadística relevante.
\`\`\`
→ Resultado: 3 textos con la misma estructura, tono y tipo de contenido (aunque con variaciones naturales en la redacción exacta).

### Test A/B: comparar dos versiones

Tienes un prompt que funciona bien, pero ¿podría ser mejor? Prueba una variación:

**Versión A (tu prompt actual):**
\`\`\`
Resume este artículo en 3 bullet points.
\`\`\`

**Versión B (variación):**
\`\`\`
Eres un editor senior de una revista de negocios. Resume este
artículo en exactamente 3 bullet points. Cada bullet debe
tener máximo 20 palabras y capturar una idea principal
diferente. Comienza cada bullet con un verbo de acción.
\`\`\`

Ejecuta ambas versiones con el mismo input 3 veces cada una. Evalúa con tu rúbrica. El que tenga mejor puntaje promedio es tu ganador.

### Métricas clave para evaluar

Dependiendo del tipo de tarea, prioriza diferentes métricas:

**Para tareas de información/investigación:**
- **Precisión**: ¿Los datos son correctos y verificables?
- **Completitud**: ¿Cubrió todos los aspectos pedidos?
- **Actualidad**: ¿La información es reciente y relevante?

**Para tareas de redacción/creación:**
- **Tono**: ¿Coincide con lo que pediste?
- **Estructura**: ¿Sigue el formato indicado?
- **Originalidad**: ¿No es genérico ni repetitivo?
- **Usabilidad**: ¿Puedes usarlo tal cual o necesita mucha edición?

**Para tareas de análisis:**
- **Profundidad**: ¿Va más allá de lo superficial?
- **Lógica**: ¿Las conclusiones siguen de las premisas?
- **Perspectiva**: ¿Consideró múltiples ángulos?

### Construye tu propio framework de evaluación

Aquí tienes un sistema simple que puedes adoptar hoy:

**Paso 1 — Define tus criterios** (elige 3-5 de la lista anterior, según tu tarea)

**Paso 2 — Crea tu escala** (1-5 es lo más práctico)

**Paso 3 — Testea:**
\`\`\`
Para cada prompt que quieras evaluar:
1. Ejecútalo 3 veces en conversaciones nuevas
2. Puntúa cada respuesta con tu rúbrica
3. Calcula el promedio
4. Si el promedio es < 3, reescribe el prompt
5. Si el promedio es 3-4, ajusta detalles
6. Si el promedio es > 4, guárdalo en tu biblioteca
\`\`\`

**Paso 4 — Registra resultados en una tabla simple:**

| Prompt | Versión | Run 1 | Run 2 | Run 3 | Promedio | Notas |
|--------|---------|-------|-------|-------|----------|-------|
| Resumen de artículo | A | 3.2 | 3.5 | 3.0 | 3.23 | Falta estructura |
| Resumen de artículo | B | 4.5 | 4.2 | 4.8 | 4.50 | Mucho mejor |

### Modos de falla comunes y cómo diagnosticarlos

**1. "La IA alucina" (inventa datos falsos)**
- **Causa probable**: El prompt pide información muy específica sin dar fuentes
- **Solución**: Agrega "Si no estás seguro de un dato, indícalo" o proporciona fuentes de referencia

**2. "Las respuestas son demasiado genéricas"**
- **Causa probable**: Falta contexto o especificidad en el prompt
- **Solución**: Agrega rol, audiencia, formato, ejemplos

**3. "No sigue el formato que pedí"**
- **Causa probable**: Las instrucciones de formato están al final o son ambiguas
- **Solución**: Pon las instrucciones de formato al principio y sé explícito. Incluye un ejemplo del formato deseado.

**4. "A veces funciona bien y a veces no"**
- **Causa probable**: El prompt tiene ambigüedades que la IA interpreta diferente cada vez
- **Solución**: Haz el test de consistencia. Identifica qué parte varía y hazla más específica.

**5. "La respuesta es demasiado larga/corta"**
- **Causa probable**: No especificaste la extensión deseada
- **Solución**: Indica palabras, párrafos o bullet points esperados

### Para llevar

- Evaluar tus prompts es tan importante como escribirlos
- Usa rúbricas para hacer evaluaciones objetivas, no solo "me gustó" o "no me gustó"
- El test de consistencia (3 runs) revela si tu prompt es lo suficientemente específico
- El test A/B te ayuda a mejorar prompts iterativamente
- Diagnostica problemas comunes con las soluciones de esta lección
- Un framework simple de evaluación te ahorra tiempo a largo plazo`;

export const c9leccion5 = `## Construir tu biblioteca personal de prompts

### ¿Por qué guardar tus prompts?

Piensa en cuántas veces hiciste algo como esto:

1. Escribiste un prompt excelente que te dio exactamente lo que necesitabas
2. Cerraste la conversación
3. Dos semanas después necesitaste hacer algo similar
4. No recuerdas qué escribiste exactamente
5. Pasas 20 minutos intentando recrearlo... y nunca queda tan bien

Suena familiar? Le pasa a todo el mundo.

Tus mejores prompts son **activos intelectuales**. Son el resultado de prueba y error. Guardarlos es como guardar una buena receta de cocina: la próxima vez que la necesitas, solo la sacas y la usas.

### Organiza por categorías

El primer paso es definir categorías que tengan sentido para tu vida. Aquí hay una estructura que funciona para la mayoría de las personas:

**Trabajo**
- Emails y comunicaciones
- Informes y documentos
- Análisis de datos
- Presentaciones
- Gestión de proyectos

**Productividad personal**
- Planificación y organización
- Toma de decisiones
- Aprendizaje y estudio

**Creación de contenido**
- Redes sociales
- Blog / artículos
- Guiones de video
- Newsletters

**Análisis e investigación**
- Investigar un tema
- Comparar opciones
- Resumir documentos

### El formato ideal para guardar un prompt

Cada prompt guardado debería tener estos campos:

\`\`\`
📌 NOMBRE: Resumen ejecutivo de artículo
📁 CATEGORÍA: Trabajo > Informes
🎯 PROPÓSITO: Convertir un artículo largo en un resumen ejecutivo
   de 3-5 bullet points para compartir con el equipo

💬 PROMPT:
---
Eres un analista senior de [INDUSTRIA]. Lee el siguiente artículo
y crea un resumen ejecutivo con:
- 3-5 bullet points de máximo 25 palabras cada uno
- Un párrafo de conclusión de 50 palabras máximo
- Una recomendación de acción concreta

Tono: profesional y directo.
Audiencia: directivos que tienen 2 minutos para leer.

Artículo:
[PEGAR ARTÍCULO AQUÍ]
---

🔧 VARIABLES:
- [INDUSTRIA]: Cambiar según el sector (tecnología, finanzas, salud, etc.)
- [PEGAR ARTÍCULO AQUÍ]: El texto a resumir

📝 NOTAS:
- Funciona mejor con artículos de 500-3000 palabras
- Para artículos más largos, dividir en secciones
- Versión 3 — mejorada el 15/03/2025 (se agregó la recomendación
  de acción que faltaba en v2)
- Puntaje promedio en evaluación: 4.3/5

⭐ RATING: ★★★★☆
\`\`\`

### ¿Dónde guardar tus prompts?

Hay varias opciones, cada una con ventajas:

**1. App de Notas (Apple Notes, Google Keep)**
- ✅ Simple, rápido, accesible desde el celular
- ✅ Búsqueda integrada
- ❌ Difícil de organizar si tienes muchos prompts
- 🎯 Ideal para: empezar, menos de 20 prompts

**2. Notion**
- ✅ Base de datos con filtros, categorías y tags
- ✅ Se puede compartir con equipo
- ✅ Templates reutilizables
- ❌ Curva de aprendizaje inicial
- 🎯 Ideal para: usuarios intermedios/avanzados, equipos

Ejemplo de base de datos en Notion:

| Nombre | Categoría | Rating | Última actualización | Tags |
|--------|-----------|--------|---------------------|------|
| Resumen ejecutivo | Trabajo | ★★★★☆ | 15/03/2025 | resumen, artículo |
| Post LinkedIn | Contenido | ★★★★★ | 20/03/2025 | redes, LinkedIn |
| Análisis FODA | Análisis | ★★★☆☆ | 10/02/2025 | estrategia, negocio |

**3. Google Docs**
- ✅ Familiar para la mayoría
- ✅ Fácil de compartir
- ✅ Historial de versiones automático
- ❌ No tiene estructura de base de datos
- 🎯 Ideal para: quienes ya viven en Google Workspace

**4. Planilla de cálculo (Google Sheets / Excel)**
- ✅ Fácil de filtrar y ordenar
- ✅ Se pueden hacer métricas (promedio de ratings, prompts por categoría)
- ❌ No es cómodo para prompts largos
- 🎯 Ideal para: equipos que necesitan un catálogo rápido

### Versionado: controla la evolución de tus prompts

Los prompts mejoran con el tiempo. Es importante llevar un registro:

\`\`\`
Prompt: Email de seguimiento a cliente
Versión 1.0 (01/02/2025): Versión inicial básica
Versión 1.1 (15/02/2025): Agregué tono más empático
Versión 2.0 (01/03/2025): Reestructurado completo con variables
Versión 2.1 (20/03/2025): Ajuste menor en el cierre
\`\`\`

**Tips de versionado:**
- **Cambio menor** (1.0 → 1.1): Ajustes de tono, formato o palabras específicas
- **Cambio mayor** (1.x → 2.0): Reestructuración del prompt, cambio de enfoque
- Siempre guarda la versión anterior (por si la nueva es peor)
- Anota **por qué** hiciste el cambio, no solo qué cambiaste

### Comparte prompts con tu equipo

Si trabajas en equipo, compartir prompts multiplica el valor:

**1. Crea un repositorio compartido:**
- Una carpeta en Google Drive o Notion compartida
- Define un formato estándar (como el que vimos arriba)
- Designa quién puede agregar y quién puede editar

**2. Sesiones de intercambio:**
- Una vez al mes, reúne al equipo 30 minutos
- Cada persona comparte su mejor prompt del mes
- Voten cuáles agregar al repositorio compartido

**3. Documenta el contexto:**
- No alcanza con compartir el texto del prompt
- Explica para qué sirve, cuándo usarlo y cuándo NO usarlo
- Incluye ejemplos de buenos y malos resultados

**Prompt para iniciar tu biblioteca ahora mismo:**
\`\`\`
Ayúdame a crear una plantilla de biblioteca de prompts.
Necesito una estructura en [Notion/Google Sheets/otro] con
las siguientes columnas:
- Nombre del prompt
- Categoría (con estas opciones: Trabajo, Contenido, Análisis,
  Personal, Otro)
- El texto del prompt
- Variables a reemplazar
- Rating (1-5 estrellas)
- Versión actual
- Fecha de última actualización
- Notas

Créame la estructura y 3 ejemplos de prompts completados
para que vea cómo usarla.
\`\`\`

### Para llevar

- Tus mejores prompts son activos que merecen ser guardados y organizados
- Usa un formato estándar: nombre, propósito, prompt, variables, notas
- Elige la herramienta que ya usas (Notas, Notion, Google Docs, planilla)
- Versiona tus prompts y anota por qué cambiaste cada versión
- Compartir prompts con tu equipo multiplica el valor para todos
- Empieza hoy: guarda tus 5 mejores prompts con el formato que aprendiste`;

export const c9leccion6 = `## Proyecto: crea un flujo de trabajo completo

### Tu desafío

Llegó el momento de integrar todo lo que aprendiste en este curso. Vas a diseñar y ejecutar un **flujo de trabajo completo con IA** — desde la idea inicial hasta el resultado final.

Este no es un ejercicio teórico. Vas a hacer algo real que puedes usar en tu trabajo o vida personal.

### Elige tu escenario

Tienes tres opciones. Elige la que más se parezca a algo que realmente necesitas:

---

**Opción 1: Asistente de investigación**

*Ideal para: analistas, estudiantes, consultores, periodistas*

Flujo: Tema → Fuentes → Resumen → Informe final

Resultado: Un informe de investigación profesional sobre un tema de tu interés.

---

**Opción 2: Creador de contenido**

*Ideal para: marketers, emprendedores, comunicadores, freelancers*

Flujo: Idea → Esquema → Borrador → Edición → Posts para redes

Resultado: Un artículo completo + 3 publicaciones para redes sociales.

---

**Opción 3: Analista de datos**

*Ideal para: gerentes, analistas, dueños de negocio*

Flujo: Datos crudos → Limpieza → Análisis → Visualización → Reporte

Resultado: Un reporte de análisis con conclusiones y recomendaciones.

---

### Walkthrough completo: Opción 2 (Creador de contenido)

Vamos a recorrer paso a paso la Opción 2 para que veas cómo se construye un flujo real. Después puedes adaptar este modelo para cualquier opción.

#### Paso 1: Generar y validar la idea

\`\`\`
Soy [tu rol, ej: gerente de marketing de una fintech en Colombia].
Mi audiencia es [describe tu audiencia, ej: profesionales de
finanzas de 30-50 años en LATAM].

Necesito un artículo para el blog de la empresa. El tema general
es [tu tema, ej: inteligencia artificial en el sector financiero].

Genera 5 ideas de artículos que:
- Sean relevantes para mi audiencia
- Tengan un ángulo original (no lo típico que ya leyeron 100 veces)
- Puedan posicionarse bien en buscadores
- Sean factibles de escribir en 1500-2000 palabras

Para cada idea incluye:
- Título tentativo
- Por qué le importaría a mi audiencia
- 3 puntos clave que cubriría
\`\`\`

**Revisa el resultado.** Elige la idea que más te guste. Si ninguna te convence, pide 5 más o indica qué dirección prefieres.

#### Paso 2: Crear el esquema

\`\`\`
Elegí la idea número [X]: "[título]"

Crea un esquema detallado para este artículo con:
- Título final optimizado para SEO
- Meta descripción (155 caracteres máx.)
- H2 y H3 de cada sección
- Para cada sección: 2-3 puntos que debo cubrir
- Sugerencias de datos/estadísticas a incluir
- Tipo de cierre (CTA, reflexión, pregunta abierta)

El tono debe ser: profesional pero cercano, sin jerga innecesaria.
Extensión objetivo: 1800 palabras.
\`\`\`

**Revisa el esquema.** ¿El orden lógico tiene sentido? ¿Falta alguna sección? Pide ajustes antes de continuar.

#### Paso 3: Escribir el borrador

\`\`\`
Usando el siguiente esquema:
[pega el esquema del paso 2]

Escribe el artículo completo. Sigue estas pautas:
- Extensión: 1800 palabras aproximadamente
- Empieza con un gancho que capture la atención en las primeras
  2 oraciones
- Usa párrafos cortos (3-4 oraciones máximo)
- Incluye al menos 2 ejemplos concretos o casos de uso
- Usa subtítulos (H2/H3) como están en el esquema
- Cierra con [tipo de cierre elegido en el paso 2]
- Tono: [recuerda el tono definido]
\`\`\`

#### Paso 4: Editar y pulir

\`\`\`
Actúa como un editor profesional de contenido digital.
Revisa el siguiente artículo:

[pega el borrador del paso 3]

Evalúa y corrige:
1. GANCHO: ¿Las primeras 2 oraciones capturan la atención?
   Si no, reescríbelas.
2. ESTRUCTURA: ¿El flujo entre secciones es natural?
   Señala transiciones débiles.
3. CLARIDAD: ¿Hay oraciones confusas o demasiado largas?
   Simplifica.
4. DATOS: ¿Los datos mencionados son plausibles? Marca cualquier
   dato que debería verificarse.
5. TONO: ¿Se mantiene consistente en todo el artículo?
6. CIERRE: ¿Es efectivo? ¿Invita a la acción?
7. SEO: ¿El título y los subtítulos incluyen palabras clave
   relevantes?

Dame el artículo corregido completo, no solo los comentarios.
\`\`\`

#### Paso 5: Crear contenido derivado para redes

\`\`\`
Basándote en el siguiente artículo:
[pega el artículo editado del paso 4]

Crea 3 publicaciones para LinkedIn:

POST 1 - El dato impactante:
- Empieza con una estadística o dato sorprendente del artículo
- Desarrolla en 3-4 oraciones cortas
- Cierra con una pregunta para generar comentarios
- 150-200 palabras

POST 2 - La historia/ejemplo:
- Empieza con un caso concreto o ejemplo del artículo
- Conéctalo con una lección más amplia
- Cierra con un consejo práctico
- 150-200 palabras

POST 3 - La opinión:
- Empieza con una afirmación provocadora (pero profesional)
- Argumenta brevemente con puntos del artículo
- Invita al debate: "¿Estás de acuerdo?"
- 150-200 palabras

Para los 3 posts:
- No uses hashtags excesivos (3-5 máximo)
- No uses emojis en exceso
- Incluye un CTA al artículo completo en el último párrafo
\`\`\`

### Plantilla para diseñar tu propio flujo

Ahora que viste un ejemplo completo, usa esta plantilla para diseñar un flujo propio:

\`\`\`
MI FLUJO DE TRABAJO CON IA

Nombre: ________________________________
Objetivo final: ________________________________
Frecuencia de uso: (diario / semanal / mensual / ocasional)

PASOS:

Paso 1: ________________________________
  Input: ¿Qué información necesito tener antes de empezar?
  Prompt: [escribe o referencia el prompt]
  Output: ¿Qué resultado espero?
  Check: ¿Cómo verifico que el resultado es bueno?

Paso 2: ________________________________
  Input: Resultado del paso 1 + ¿algo más?
  Prompt: [escribe o referencia el prompt]
  Output: ¿Qué resultado espero?
  Check: ¿Cómo verifico que el resultado es bueno?

Paso 3: ________________________________
  Input: Resultado del paso 2 + ¿algo más?
  Prompt: [escribe o referencia el prompt]
  Output: ¿Qué resultado espero?
  Check: ¿Cómo verifico que el resultado es bueno?

(Agrega más pasos si los necesitas)

NOTAS:
- Herramientas que voy a usar: (ChatGPT / Claude / Gemini / combinación)
- Tiempo estimado: _____ minutos
- Documentos de contexto necesarios: ________________________________
\`\`\`

### Tips para solucionar problemas

**"El resultado de un paso no sirve como input del siguiente"**
- Verifica que el output del paso anterior tiene el formato correcto
- A veces necesitas un paso intermedio para reformatear

**"El flujo tarda demasiado"**
- ¿Puedes combinar dos pasos en uno sin perder calidad?
- ¿Algún paso se puede hacer en paralelo? (ej: investigación de 2 subtemas al mismo tiempo)

**"La calidad baja en los últimos pasos"**
- Probablemente la conversación se está haciendo muy larga
- Empieza una conversación nueva para los últimos pasos, pasando solo el contexto necesario

**"No sé si mi flujo está bien diseñado"**
Pregúntale a la IA:
\`\`\`
Diseñé el siguiente flujo de trabajo con IA:
[describe tu flujo]

¿Ves algún problema o mejora posible?
¿Falta algún paso importante?
¿Algún paso se podría dividir o combinar?
\`\`\`

### El entregable

Al terminar este proyecto deberías tener:

1. ✅ Un flujo de trabajo de 4-6 pasos documentado
2. ✅ Todos los prompts escritos y probados
3. ✅ Un resultado final concreto (informe, artículo, reporte)
4. ✅ Los prompts guardados en tu biblioteca personal (lección 5)
5. ✅ Notas sobre qué funcionó bien y qué ajustarías

### Para llevar

- Un flujo de trabajo con IA combina prompt chaining, memoria y evaluación
- Siempre revisa el output de cada paso antes de pasar al siguiente
- Documenta tu flujo para poder repetirlo y mejorarlo
- No existe el flujo perfecto al primer intento — iterar es parte del proceso
- Tu flujo completo y documentado es un activo profesional valioso`;

export const c9leccion7 = ``;
