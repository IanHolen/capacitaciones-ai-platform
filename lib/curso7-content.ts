// Contenido educativo del Curso 7: Prompt Engineering: el arte de preguntar
// 8 lecciones — Nivel Intermedio, español LATAM, con acentos y ñ

export const c7leccion1 = `## Las 5 técnicas core de prompting

Ya usás herramientas como ChatGPT, Claude o Gemini. Sabés hacer preguntas y obtener respuestas. Pero probablemente notaste que a veces la IA te da respuestas genéricas, vagas o que no tienen nada que ver con lo que necesitás. El problema casi nunca es la IA — **el problema es cómo le preguntamos**.

Prompt engineering es exactamente eso: el arte de formular instrucciones claras para obtener respuestas útiles. Y se reduce a 5 técnicas fundamentales que vamos a ver en esta lección.

---

### 1. Sé específico

La especificidad es la diferencia entre una respuesta genérica y una respuesta útil.

**Prompt vago:**
> "Decime sobre marketing"

**Prompt específico:**
> "Dame 5 estrategias de marketing digital para una panadería artesanal en Buenos Aires que quiere atraer clientes de 25-40 años a través de Instagram. Incluí presupuesto estimado mensual para cada estrategia."

La primera versión te da un ensayo genérico de marketing. La segunda te da un plan accionable. La clave: incluí **quién, qué, para qué, con qué restricciones**.

---

### 2. Dá contexto

La IA no sabe nada sobre tu situación a menos que se lo digas. El contexto es el marco que le permite personalizar la respuesta.

**Sin contexto:**
> "Ayudame a escribir un email"

**Con contexto:**
> "Soy gerente de un equipo de 8 personas en una empresa de tecnología. Necesito escribir un email al equipo anunciando que vamos a cambiar la herramienta de gestión de proyectos de Trello a Jira. Algunos miembros del equipo están resistentes al cambio. El tono debe ser empático pero firme."

Mientras más contexto relevante des, mejor será la respuesta. No tenés que contar tu vida entera — pero sí lo que sea relevante para la tarea.

---

### 3. Usá ejemplos

Mostrarle a la IA lo que querés es más efectivo que explicarlo. Esto se llama **few-shot prompting** (lo vamos a profundizar en la próxima lección).

**Sin ejemplos:**
> "Clasificá estos comentarios como positivos o negativos"

**Con ejemplo:**
> "Clasificá estos comentarios como positivos o negativos. Ejemplo:
> - 'Me encantó el producto' → Positivo
> - 'Pésima atención' → Negativo
>
> Ahora clasificá estos:
> - 'Llegó rápido y bien empaquetado'
> - 'No lo recomiendo para nada'"

El ejemplo establece el formato y el criterio. La IA entiende exactamente qué hacer.

---

### 4. Asigná un rol

Cuando le decís a la IA "actuá como..." activás un modo de respuesta diferente. Es como contratar a un especialista en vez de preguntarle a un generalista.

**Sin rol:**
> "Explicame qué es una LLC"

**Con rol:**
> "Actuá como un contador especializado en pymes de Argentina. Explicame qué es una LLC de Estados Unidos comparándola con una SAS argentina. Usá lenguaje simple y dame pros y contras de cada una."

El rol cambia el vocabulario, la profundidad y el enfoque de la respuesta.

---

### 5. Iterá

El prompt perfecto en el primer intento casi no existe. Los mejores resultados vienen de **refinar** progresivamente.

**Primer intento:**
> "Escribí una descripción de producto para zapatillas deportivas"

**Iteración 1:**
> "Hacelo más corto, máximo 3 oraciones"

**Iteración 2:**
> "Agregale un sentido de urgencia y un call-to-action"

**Iteración 3:**
> "Cambiá el tono a más juvenil y usá emojis"

Cada iteración te acerca más al resultado ideal. No borres la conversación — usá el contexto acumulado.

---

### Combinando las 5 técnicas

Un prompt que usa las 5 técnicas juntas podría verse así:

> "Actuá como un redactor publicitario senior con 10 años de experiencia en ecommerce. [ROL]
>
> Necesito escribir la descripción de un producto para mi tienda online de ropa deportiva. El producto es una remera de running de tela dry-fit, precio $15.000 ARS, dirigida a corredores amateur de 30-50 años. [CONTEXTO + ESPECIFICIDAD]
>
> Ejemplo del estilo que busco:
> 'La campera ThermoRun te abraza sin pesarte. Diseñada para esos 6AM donde todo dice quedate en la cama, menos vos.' [EJEMPLO]
>
> Dame 3 versiones diferentes de 2-3 oraciones cada una."

Después de ver las 3 versiones, iterás sobre la que más te guste.

---

### Resumen

| Técnica | Preguntate |
|---|---|
| Especificidad | ¿Le dije exactamente qué quiero? |
| Contexto | ¿Sabe quién soy y para qué lo necesito? |
| Ejemplos | ¿Le mostré cómo quiero la respuesta? |
| Rol | ¿Le asigné una perspectiva o especialidad? |
| Iteración | ¿Refiné o me conformé con el primer resultado? |

Estas 5 técnicas son la base. En las próximas lecciones vamos a profundizar cada una.`;

export const c7leccion2 = `## Few-shot learning: enseñar con ejemplos

Si tuvieras que explicarle a alguien cómo querés que clasifique emails, ¿qué es más claro: darle una definición abstracta o mostrarle 3 emails ya clasificados? Exactamente. Los ejemplos son el lenguaje universal, y la IA funciona igual.

**Few-shot prompting** es la técnica de incluir ejemplos en tu prompt para que la IA entienda exactamente qué formato, tono, criterio o estilo querés. Es una de las técnicas más poderosas y más subutilizadas.

---

### 0-shot vs 1-shot vs few-shot

**Zero-shot (0 ejemplos):**
> "Clasificá el siguiente texto según su sentimiento"

La IA interpreta "sentimiento" como le parece. Tal vez te da "positivo/negativo", tal vez te da "alegre/triste/enojado", tal vez te escribe un párrafo.

**One-shot (1 ejemplo):**
> "Clasificá el siguiente texto según su sentimiento.
> Ejemplo: 'El servicio fue excelente' → Positivo
>
> Texto: 'Nunca más vuelvo a ese lugar'"

Ya mejor. La IA entiende que querés una palabra: Positivo o Negativo.

**Few-shot (3+ ejemplos):**
> "Clasificá el siguiente texto según su sentimiento.
>
> Ejemplos:
> - 'El servicio fue excelente' → Positivo
> - 'Tardaron 2 horas en traer la comida' → Negativo
> - 'La comida estaba bien, nada especial' → Neutro
>
> Texto: 'Nunca más vuelvo a ese lugar'"

Ahora la IA sabe que hay 3 categorías (Positivo, Negativo, Neutro), entiende el nivel de cada una y responde con una sola palabra.

**Regla general:** 3 a 5 ejemplos suelen ser suficientes. Más de 7 rara vez agrega valor y consume tokens innecesariamente.

---

### Ejemplo práctico 1: Formateo consistente

Supongamos que querés convertir datos desordenados a un formato específico:

> "Convertí los siguientes datos al formato indicado.
>
> Ejemplos:
> - Input: 'juan perez, 35 años, buenos aires' → Output: 'Nombre: Juan Pérez | Edad: 35 | Ciudad: Buenos Aires'
> - Input: 'maria gomez, 28 años, medellin' → Output: 'Nombre: María Gómez | Edad: 28 | Ciudad: Medellín'
> - Input: 'carlos ruiz, 42 años, santiago' → Output: 'Nombre: Carlos Ruiz | Edad: 42 | Ciudad: Santiago'
>
> Ahora convertí estos:
> - 'ana martinez, 31 años, lima'
> - 'roberto silva, 55 años, montevideo'"

La IA va a respetar el formato exacto, incluyendo las mayúsculas, los acentos y los separadores.

---

### Ejemplo práctico 2: Tono de escritura

Si querés que la IA escriba con tu estilo particular:

> "Escribí publicaciones para Instagram de mi cafetería siguiendo este estilo:
>
> Ejemplos de mis publicaciones anteriores:
> - 'Lunes sin café? No en este universo. Pasá por tu cortado de las 8am ☕'
> - 'Nuevo: brownie de dulce de leche. Sí, leíste bien. No, no estás soñando.'
> - 'Lluvia + libro + nuestro chocolate caliente = la tarde perfecta 🌧️'
>
> Ahora escribí 3 publicaciones nuevas para anunciar que agregamos opciones veganas al menú."

Los ejemplos le transmiten a la IA tu tono (informal, con humor, directo) mucho mejor que decir "escribí de forma informal y divertida".

---

### Ejemplo práctico 3: Extracción de datos

Para extraer información estructurada de texto libre:

> "Extraé los datos clave de cada reseña de restaurante.
>
> Ejemplos:
> - Reseña: 'Fui el sábado con mi pareja, pedimos la pasta con mariscos y el risotto. Todo riquísimo, pero tardaron 40 minutos en traer la comida. El mozo fue muy amable.'
>   → Día: sábado | Acompañantes: pareja | Platos: pasta con mariscos, risotto | Calidad comida: excelente | Tiempo de espera: 40 min | Atención: buena
>
> - Reseña: 'Almorcé solo un martes, pedí la milanesa napolitana. Estaba fría. La moza ni se acercó a preguntar si estaba todo bien.'
>   → Día: martes | Acompañantes: solo | Platos: milanesa napolitana | Calidad comida: mala | Tiempo de espera: no mencionado | Atención: mala
>
> Ahora extraé los datos de esta reseña:
> 'Fuimos con amigos el viernes por la noche. Pedimos una picada y unas pizzas. La picada estaba increíble, las pizzas estaban bien. El lugar estaba lleno y tardamos como una hora, pero el ambiente estaba genial.'"

---

### Template para construir prompts few-shot

Usá esta estructura como base:

\`\`\`
[Instrucción clara de lo que querés que haga]

Ejemplos:
- Input: [ejemplo 1 de entrada] → Output: [ejemplo 1 de salida]
- Input: [ejemplo 2 de entrada] → Output: [ejemplo 2 de salida]
- Input: [ejemplo 3 de entrada] → Output: [ejemplo 3 de salida]

Ahora procesá lo siguiente:
[tu input real]
\`\`\`

---

### Tips avanzados

1. **Incluí casos borde** en tus ejemplos. Si hay un caso ambiguo o difícil, mostralo para que la IA sepa cómo manejarlo.
2. **Variá los ejemplos.** No pongas 3 ejemplos del mismo tipo — mostrá la diversidad de casos que puede encontrar.
3. **Mantené la consistencia.** Si en el ejemplo 1 usás "→" como separador, no uses ":" en el ejemplo 2.
4. **El orden importa.** Poné el ejemplo más representativo primero y el caso borde último.

---

### Resumen

- Few-shot = darle ejemplos concretos a la IA para guiar su respuesta
- 3-5 ejemplos bien elegidos son más efectivos que párrafos de instrucciones
- Funciona especialmente bien para: clasificación, formateo, extracción de datos y matching de tono
- Usá el template: instrucción + ejemplos + input real`;

export const c7leccion3 = `## Chain-of-thought: pensar paso a paso

¿Alguna vez le pediste algo complejo a la IA y te dio una respuesta que suena convincente pero está mal? Probablemente la IA "saltó" directamente a la conclusión sin pensar los pasos intermedios. Exactamente como cuando alguien responde una pregunta de matemáticas de memoria en vez de hacer la cuenta.

**Chain-of-thought (CoT)** es una técnica que le pide a la IA que muestre su razonamiento paso a paso antes de dar la respuesta final. Y es sorprendentemente efectiva.

---

### Por qué funciona

Los modelos de lenguaje procesan tokens de forma secuencial. Cuando le pedís que "piense paso a paso", lo que realmente pasa es que cada paso intermedio se convierte en contexto para el siguiente. Esto le permite:

- Descomponer problemas complejos en partes manejables
- Detectar sus propios errores a mitad de camino
- Considerar más variables antes de concluir
- Dar respuestas más precisas en tareas de lógica y cálculo

---

### La frase mágica

Agregar alguna de estas instrucciones puede mejorar dramáticamente los resultados:

- **"Pensá paso a paso"**
- **"Antes de responder, razoná cada parte del problema"**
- **"Mostrá tu proceso de razonamiento"**
- **"Explicá cómo llegás a la conclusión"**

Veamos la diferencia en la práctica.

---

### Ejemplo 1: Problema matemático

**Sin chain-of-thought:**
> "Un local vende remeras a $5.000 cada una. Tiene un descuento del 20% por compras de más de 3 unidades. Si compro 5 remeras, cuánto pago?"

La IA podría responder "$20.000" (aplicando mal el descuento) o dar la respuesta correcta sin que puedas verificar si el razonamiento es correcto.

**Con chain-of-thought:**
> "Un local vende remeras a $5.000 cada una. Tiene un descuento del 20% por compras de más de 3 unidades. Si compro 5 remeras, cuánto pago? Pensá paso a paso."

Respuesta típica:
1. Precio por remera: $5.000
2. Cantidad: 5 remeras
3. Precio sin descuento: 5 × $5.000 = $25.000
4. Como compro más de 3, aplica el 20% de descuento
5. Descuento: $25.000 × 0.20 = $5.000
6. Precio final: $25.000 - $5.000 = **$20.000**

Ahora podés verificar cada paso y detectar si hay un error.

---

### Ejemplo 2: Razonamiento lógico

**Sin CoT:**
> "En una empresa, todos los gerentes hablan inglés. Algunos gerentes hablan francés. María habla francés e inglés. ¿Es María gerente?"

La IA podría decir "Sí" erróneamente.

**Con CoT:**
> "En una empresa, todos los gerentes hablan inglés. Algunos gerentes hablan francés. María habla francés e inglés. ¿Es María gerente? Razoná paso a paso antes de responder."

Respuesta típica:
1. Todos los gerentes hablan inglés → ser gerente implica hablar inglés
2. Pero hablar inglés no implica ser gerente (puede haber otros empleados que hablen inglés)
3. Algunos gerentes hablan francés → es posible pero no obligatorio
4. María habla francés e inglés → cumple las condiciones necesarias pero no suficientes
5. **Conclusión: No podemos afirmar que María sea gerente.** Hablar inglés es necesario para ser gerente, pero no suficiente. María podría ser gerente o podría no serlo — no tenemos suficiente información.

---

### Ejemplo 3: Toma de decisiones

**Sin CoT:**
> "Tengo $500.000 ARS ahorrados. Debería invertir en un plazo fijo o en dólar MEP?"

La IA te da una recomendación directa que puede no considerar tu situación.

**Con CoT:**
> "Tengo $500.000 ARS ahorrados. Estoy considerando invertir en un plazo fijo o en dólar MEP. Antes de darme una recomendación, analizá los factores clave paso a paso: riesgo, rendimiento esperado, horizonte temporal, e inflación actual."

Esto fuerza a la IA a construir un análisis completo antes de concluir, y te permite evaluar si consideró los factores que te importan.

---

### Variaciones avanzadas de CoT

**Chain-of-thought con estructura:**
> "Resolvé este problema siguiendo estos pasos:
> 1. Identificá los datos del problema
> 2. Determiná qué fórmula o método aplica
> 3. Resolvé paso a paso
> 4. Verificá el resultado
> 5. Dá la respuesta final"

**Chain-of-thought inverso:**
> "La respuesta a este problema de logística es que necesitamos 3 camiones. Verificá si es correcto pensando paso a paso desde el inicio."

Esto es útil para validar respuestas que ya tenés.

**Auto-corrección:**
> "Resolvé el problema paso a paso. Después revisá tu propio razonamiento y corregí cualquier error antes de dar la respuesta final."

---

### Cuándo usar y cuándo NO usar CoT

**Usá CoT cuando:**
- Hay cálculos matemáticos involucrados
- El problema requiere lógica multi-paso
- Necesitás tomar una decisión con múltiples variables
- Querés verificar el razonamiento de la IA
- La tarea involucra comparaciones complejas

**NO hace falta CoT cuando:**
- La tarea es simple y directa ("Traducí esta frase al inglés")
- Querés respuestas creativas (poemas, historias)
- Pedís información factual simple ("¿Cuál es la capital de Perú?")
- Necesitás velocidad y las respuestas largas te molestan

---

### Resumen

- Chain-of-thought = pedirle a la IA que razone paso a paso
- Mejora significativamente los resultados en lógica, matemáticas y decisiones
- "Pensá paso a paso" es la instrucción más simple y efectiva
- Te permite verificar el razonamiento y detectar errores
- No lo uses para tareas simples donde agrega ruido innecesario`;

export const c7leccion4 = `## Asignar roles y personas

Cuando le decís a la IA "Actuá como un nutricionista", no es solo un truco divertido — estás activando un cambio real en cómo el modelo genera respuestas. El rol funciona como un filtro que ajusta vocabulario, profundidad, enfoque y hasta el formato de la respuesta.

---

### Por qué funcionan los roles

Los modelos de lenguaje fueron entrenados con millones de textos escritos por diferentes tipos de profesionales. Cuando le asignás un rol, estás diciéndole: "de todo lo que sabés, respondé desde esta perspectiva específica". Es la diferencia entre preguntarle algo a un generalista vs a un especialista.

**Sin rol:**
> "Cómo puedo mejorar mi CV?"

Te da consejos genéricos que encontrarías en cualquier artículo de internet.

**Con rol:**
> "Actuá como una reclutadora senior de empresas de tecnología con 15 años de experiencia. Revisá este CV y decime: qué sacarías, qué agregarías, y qué cambiarías en el formato. Sé directa y específica."

Te da feedback accionable desde la perspectiva de alguien que realmente lee CVs todo el día.

---

### La anatomía de un buen rol

Un rol efectivo tiene 3 componentes:

1. **Quién es**: profesión, especialidad, nivel de experiencia
2. **Cómo se comunica**: tono, nivel técnico, estilo
3. **Qué hace**: su tarea específica en este contexto

**Template:**
> "Actuá como [profesión] con [años/tipo de experiencia] especializado en [área]. Tu estilo es [tono]. Tu tarea es [lo que necesitás que haga]."

---

### 5 roles prácticos que podés usar hoy

**1. Tutor paciente**
> "Actuá como un profesor de matemáticas de secundaria con 20 años de experiencia. Sos conocido por explicar conceptos difíciles de forma simple, usando analogías cotidianas. Nunca hacés sentir tonto al alumno. Explicame qué son los logaritmos."

**2. Nutricionista personalizado**
> "Actuá como una nutricionista deportiva. Tengo 35 años, peso 80kg, mido 1.75m, entreno crossfit 4 veces por semana y quiero bajar grasa sin perder músculo. Diseñame un plan de alimentación para un día. Incluí macros estimados."

**3. Editor implacable**
> "Actuá como un editor senior de una revista de negocios. Tu trabajo es hacer que los textos sean claros, concisos y sin relleno. Tomá este borrador y mejoralo: eliminá redundancias, fortalecé los argumentos débiles y señalá dónde falta evidencia."

**4. Traductor con contexto cultural**
> "Actuá como un traductor profesional inglés-español con experiencia en localización para mercado argentino. No hagas traducciones literales — adaptá modismos, unidades de medida y referencias culturales. Traducí el siguiente texto."

**5. Asesor de carrera**
> "Actuá como un coach de carrera especializado en transiciones profesionales. Tengo 40 años, 15 años de experiencia en contabilidad, y quiero mudarme al mundo de datos/analytics. Dame un plan realista de 6 meses para hacer esa transición, considerando que tengo que seguir trabajando."

---

### System prompts para asignar roles

En ChatGPT (Custom Instructions) y Claude (System Prompt en proyectos), podés definir un rol que persista en toda la conversación:

**Ejemplo de system prompt para un asistente de escritura:**
> "Sos un editor y escritor profesional con especialidad en contenido digital para audiencias latinoamericanas. Tu estilo es claro, directo y sin relleno. Siempre sugerís mejoras concretas, no abstractas. Cuando el usuario te pide que escribas algo, das 2 opciones con tonos diferentes para que pueda elegir. Usás español rioplatense."

**Ejemplo de system prompt para un asistente de código:**
> "Sos un desarrollador senior fullstack con 10 años de experiencia en React, Node.js y PostgreSQL. Cuando te piden código, primero explicás el enfoque en 2-3 oraciones, después mostrás el código con comentarios claros. Si el código del usuario tiene errores, los señalás de forma constructiva. Siempre sugerís buenas prácticas."

---

### Combinando roles con otras técnicas

Los roles se potencian enormemente cuando los combinás con lo que ya aprendimos:

**Rol + Few-shot:**
> "Actuá como un community manager de una marca de ropa urbana. Acá van ejemplos de respuestas que diste antes a comentarios en Instagram:
> - 'Me encanta esta remera!' → '¡Gracias! 🔥 Te va a quedar increíble, mandanos foto cuando te llegue!'
> - 'Cuánto sale?' → 'Te mandamos por DM toda la info! 📩'
> - 'Tarda mucho el envío' → 'Disculpá la demora 🙏 Mandanos un DM con tu número de pedido y lo rastreamos al toque'
>
> Ahora respondé estos comentarios nuevos..."

**Rol + Chain-of-thought:**
> "Actuá como un médico clínico experimentado. Un paciente te describe estos síntomas: dolor de cabeza frecuente, fatiga constante, mareos al levantarse. Antes de dar un posible diagnóstico, pensá paso a paso: qué preguntas harías, qué causas descartarías primero, y por qué."

---

### Errores comunes al asignar roles

1. **Rol demasiado vago:** "Actuá como un experto" — ¿experto en qué?
2. **Rol contradictorio:** "Actuá como un abogado pero respondé de forma super informal y con chistes" — puede funcionar, pero diluye la expertise.
3. **No darle la tarea:** Asignás el rol pero después hacés una pregunta genérica. El rol sin tarea específica no agrega mucho.
4. **Olvidar el contexto:** "Actuá como nutricionista" sin decir nada sobre vos. El rol necesita saber para quién trabaja.

---

### Resumen

- Los roles cambian vocabulario, profundidad y enfoque de la respuesta
- Un buen rol incluye: quién es, cómo se comunica y qué tarea tiene
- Funcionan como system prompts para conversaciones persistentes
- Se potencian combinándolos con few-shot y chain-of-thought
- Cuanto más específico el rol, mejores los resultados`;

export const c7leccion5 = `## Usar estructura: XML, markdown y JSON

Una de las formas más efectivas de mejorar tus prompts es usar **estructura**. Así como un formulario bien diseñado es más fácil de llenar que un espacio en blanco, un prompt con estructura clara produce respuestas más organizadas y consistentes.

Vamos a ver tres formatos que podés usar tanto en tus inputs (lo que le mandás a la IA) como en tus outputs (lo que le pedís que devuelva).

---

### Markdown: el formato más natural

Markdown es el formato que ya usás sin saberlo: negritas, listas, encabezados. Es ideal para pedir respuestas organizadas.

**Pedí respuestas con formato markdown:**

> "Compará las 3 principales plataformas de ecommerce para pymes en LATAM. Usá este formato:
>
> Para cada plataforma incluí:
> - **Nombre**
> - **Precio mensual**
> - **Pros** (lista con bullets)
> - **Contras** (lista con bullets)
> - **Ideal para** (1 oración)
>
> Al final incluí una tabla comparativa resumen."

La IA va a devolver una respuesta perfectamente organizada con headers, listas y tabla.

**Pedí tablas específicas:**

> "Creá una tabla comparativa de los planes de ChatGPT, Claude y Gemini con estas columnas: Nombre del plan, Precio mensual, Modelo incluido, Límite de mensajes, Funciones exclusivas."

Las tablas en markdown son extremadamente útiles para comparaciones.

---

### XML tags: organizar input complejo

Las etiquetas XML son una forma excelente de separar secciones en tu prompt. Claude especialmente responde muy bien a este formato, pero funciona con cualquier modelo.

**Ejemplo: revisar un texto con instrucciones claras**

> \`<instrucciones>
> Revisá el siguiente artículo de blog. Evaluá tres aspectos: claridad, estructura y engagement. Para cada aspecto dá una nota del 1 al 10 y sugerencias concretas de mejora.
> </instrucciones>
>
> <articulo>
> [Acá pegás tu artículo completo]
> </articulo>
>
> <formato_respuesta>
> Usá este formato para cada aspecto:
> **[Aspecto]**: [nota]/10
> - Qué funciona bien: ...
> - Qué mejorar: ...
> - Ejemplo concreto de mejora: ...
> </formato_respuesta>\`

Las etiquetas XML hacen que la IA sepa exactamente dónde empieza y termina cada sección. Es especialmente útil cuando tu prompt tiene múltiples partes.

**Otros usos prácticos de XML:**

> \`<contexto>
> Soy dueño de una agencia de viajes pequeña en Colombia. Tenemos 3 empleados.
> </contexto>
>
> <tarea>
> Necesito un template de email para enviar a clientes que preguntaron por un paquete pero no compraron en los últimos 7 días.
> </tarea>
>
> <restricciones>
> - Máximo 150 palabras
> - Tono amigable pero no invasivo
> - Incluir un incentivo (descuento o beneficio)
> - No usar la palabra "oferta"
> </restricciones>\`

---

### JSON: output estructurado para datos

Cuando necesitás que la IA te devuelva datos que después vas a usar en otro lugar (una planilla, un programa, otra herramienta), pedí la respuesta en formato JSON.

**Ejemplo: extracción de datos**

> "De la siguiente reseña, extraé los datos en formato JSON:
>
> Reseña: 'Fui al restaurante La Esquina el viernes con 4 amigos. Pedimos empanadas, una provoleta y dos pizzas. Todo riquísimo. Gastamos $45.000 en total con propina. El único problema es que no aceptan tarjeta.'
>
> Formato esperado:
> \`\`\`json
> {
>   "restaurante": "",
>   "dia": "",
>   "comensales": 0,
>   "platos": [],
>   "gasto_total": 0,
>   "puntuacion_general": "",
>   "problemas": []
> }
> \`\`\`"

Respuesta de la IA:
\`\`\`json
{
  "restaurante": "La Esquina",
  "dia": "viernes",
  "comensales": 5,
  "platos": ["empanadas", "provoleta", "pizzas"],
  "gasto_total": 45000,
  "puntuacion_general": "muy buena",
  "problemas": ["no aceptan tarjeta"]
}
\`\`\`

**Ejemplo: generar datos masivos**

> "Generá un dataset de prueba con 10 clientes ficticios en formato JSON. Cada cliente tiene: nombre, email, edad, ciudad (ciudades de LATAM variadas), plan (free/basic/premium), y fecha_registro (entre 2023 y 2024)."

Esto es especialmente útil para desarrolladores, analistas o cualquiera que trabaje con datos.

---

### Combinando formatos

Podés mezclar formatos en un mismo prompt:

> \`<instrucciones>
> Analizá los siguientes datos de ventas y generá:
> 1. Un resumen en markdown con headers y bullets
> 2. Una tabla de los 5 productos más vendidos
> 3. Las recomendaciones en formato JSON para importar a nuestro sistema
> </instrucciones>
>
> <datos>
> [datos de ventas acá]
> </datos>\`

---

### Cuándo usar cada formato

| Formato | Ideal para | Ejemplo de uso |
|---|---|---|
| **Markdown** | Respuestas legibles para humanos | Informes, comparaciones, guías |
| **XML tags** | Organizar prompts largos con múltiples partes | Separar contexto, instrucciones y restricciones |
| **JSON** | Datos estructurados para uso programático | Extracción de datos, datasets, APIs |
| **Tabla markdown** | Comparaciones lado a lado | Features, precios, pros/contras |

---

### Tips finales

1. **Mostrá el formato exacto** que esperás. No digas "en formato estructurado" — mostrá un ejemplo del formato.
2. **JSON requiere precisión.** Si querés JSON válido, decí "devolvé JSON válido, sin texto adicional antes o después".
3. **Las XML tags no necesitan ser estándar.** Podés inventar tus propias tags: \`<mi_texto>\`, \`<reglas>\`, \`<ejemplo>\`. Lo que importa es la separación clara.
4. **Markdown es el default.** La mayoría de los modelos ya responden en markdown por defecto. Pero ser explícito sobre qué tipo de markdown querés (tablas, headers, bullets) mejora los resultados.

---

### Resumen

- La estructura en los prompts produce respuestas más organizadas y consistentes
- Markdown: ideal para respuestas legibles con tablas, listas y headers
- XML tags: perfecto para organizar prompts complejos con múltiples secciones
- JSON: esencial cuando necesitás datos estructurados para usar en otros sistemas
- Mostrar el formato esperado con un ejemplo es la forma más efectiva de obtenerlo`;

export const c7leccion6 = `## System prompts vs user prompts

Cuando usás ChatGPT, Claude o cualquier modelo de IA, hay algo que pasa detrás de escena que la mayoría de usuarios no conoce: tus mensajes no son lo único que el modelo recibe. Existe otro tipo de instrucción, invisible para vos, llamada **system prompt**.

Entender esta distinción te da un nivel de control mucho mayor sobre las respuestas.

---

### Qué es un system prompt

Un **system prompt** es un conjunto de instrucciones que se le da al modelo *antes* de que veas la conversación. Define cómo debe comportarse, qué rol tiene, qué limitaciones sigue y qué tono usa.

Pensalo como las instrucciones que le das a un nuevo empleado el primer día: "Sos recepcionista, siempre saludás con una sonrisa, respondés en español, y si te preguntan por precios derivá al departamento de ventas."

Un **user prompt** es simplemente tu mensaje — la pregunta o instrucción que le escribís en el chat.

---

### Cómo interactúan

Cuando mandás un mensaje, el modelo en realidad recibe algo así:

\`\`\`
[System]: Sos un asistente amable que responde en español.
          Siempre das respuestas concisas de máximo 3 párrafos.

[User]: Explicame qué es blockchain.

[Assistant]: (genera la respuesta siguiendo ambas instrucciones)
\`\`\`

El system prompt tiene **prioridad** sobre el user prompt. Si el system dice "respondé en español" y el usuario escribe en inglés, el modelo va a responder en español.

---

### Dónde se configuran en cada plataforma

**ChatGPT — Custom Instructions:**
- Andá a Configuración → Custom Instructions
- Hay dos campos: "What would you like ChatGPT to know about you?" y "How would you like ChatGPT to respond?"
- Estas instrucciones se aplican a TODAS tus conversaciones nuevas
- Es básicamente un system prompt permanente

**ChatGPT — Custom GPTs:**
- Al crear un GPT, el campo "Instructions" es el system prompt
- Solo aplica cuando usás ese GPT específico

**Claude — System Prompt en Projects:**
- En Claude Pro, podés crear Proyectos con instrucciones del proyecto
- Estas instrucciones funcionan como system prompt para todas las conversaciones dentro de ese proyecto
- También podés agregar documentos que Claude consulta

**Gemini:**
- Las "Gems" de Gemini permiten definir instrucciones personalizadas
- Funcionan de forma similar a los Custom GPTs

---

### Creando system prompts efectivos

Un buen system prompt responde 5 preguntas:

1. **¿Quién sos?** → Rol y expertise
2. **¿Cómo hablás?** → Tono, idioma, nivel técnico
3. **¿Qué hacés?** → Tareas principales
4. **¿Qué NO hacés?** → Limitaciones y restricciones
5. **¿Cómo formateás?** → Estructura de las respuestas

---

### Ejemplos de system prompts completos

**Asistente de productividad personal:**
> "Sos mi asistente de productividad personal. Conocés mi situación: trabajo como gerente de marketing en una empresa mediana, tengo reuniones constantemente y me cuesta organizar mi tiempo.
>
> Tu estilo: directo, sin relleno, orientado a acción. Cada respuesta termina con una lista de 'próximos pasos'.
>
> Cuando te pido ayuda para organizar algo, usá el formato:
> - Prioridad alta 🔴
> - Prioridad media 🟡
> - Prioridad baja 🟢
>
> No me des consejos genéricos de productividad. Sé específico a mi contexto."

**Asistente de escritura para blog:**
> "Sos un editor y redactor de contenido digital especializado en blogs para pymes latinoamericanas. Tu audiencia son dueños de negocios de 30-50 años que no son expertos en marketing.
>
> Reglas de escritura:
> - Oraciones cortas (máximo 20 palabras)
> - Párrafos de máximo 3 oraciones
> - Siempre incluí subtítulos cada 2-3 párrafos
> - Usá español neutro latinoamericano (no castellano de España)
> - Evitá jerga de marketing a menos que la expliques
> - Cada artículo termina con un CTA claro
>
> Cuando te pido que escriba algo, primero proponé 3 títulos y un outline. Esperá mi aprobación antes de escribir el artículo completo."

**Asistente para análisis de datos:**
> "Sos un analista de datos senior. Cuando te presento datos:
> 1. Primero identificá patrones y anomalías
> 2. Después dá insights accionables (no observaciones obvias)
> 3. Siempre mencioná las limitaciones del análisis
> 4. Si los datos son insuficientes para una conclusión, decilo claramente
>
> Formato de respuesta: usá headers markdown, bullets para insights, y tablas cuando sea relevante.
>
> Nunca inventés datos que no te di. Si te falta información, preguntá antes de asumir."

---

### System prompt vs primer mensaje

Si no tenés acceso a system prompts (por ejemplo, usás la versión gratuita sin custom instructions), podés simular uno enviándolo como primer mensaje:

> "Para esta conversación, seguí estas reglas:
> - Actuá como un asesor financiero personal
> - Respondé siempre en español rioplatense
> - Usá tablas para comparaciones
> - Sé directo, sin introducciones largas
>
> Confirmame que entendiste las reglas antes de empezar."

No es exactamente igual que un system prompt real (tiene menos "peso" para el modelo), pero funciona razonablemente bien.

---

### Tips avanzados

1. **Testá tu system prompt** con preguntas variadas. Un buen system prompt funciona bien con cualquier pregunta dentro de su dominio.
2. **Iterá el system prompt.** Cuando la IA no responde como querés, a veces el problema no es tu pregunta sino el system prompt.
3. **No lo hagas demasiado largo.** Un system prompt de 500+ palabras puede hacer que el modelo ignore partes. Mantené las instrucciones más importantes al principio.
4. **Usá reglas en negativo.** "NO des disclaimers médicos en cada respuesta" es más claro que "sé directo".

---

### Resumen

- System prompt = instrucciones de fondo que definen el comportamiento del modelo
- User prompt = tu mensaje específico en la conversación
- El system prompt tiene prioridad y persiste en toda la conversación
- Cada plataforma tiene su forma de configurarlo (Custom Instructions, Projects, Gems)
- Un buen system prompt define: rol, tono, tareas, limitaciones y formato
- Si no tenés acceso, podés simularlo como primer mensaje`;

export const c7leccion7 = `## Iteración y refinamiento

Hay una verdad incómoda en el prompt engineering: **el primer prompt casi nunca es el mejor**. Los prompts que generan resultados increíbles no nacen perfectos — se construyen iterando.

Si pensás que los expertos en IA escriben un prompt y listo, la realidad es que ellos también iteran. La diferencia es que iteran de forma *estratégica*.

---

### El loop de iteración

El proceso es simple pero poderoso:

\`\`\`
Prompt → Respuesta → Evaluar → Refinar → Repetir
\`\`\`

1. **Escribí tu primer prompt** (no importa si es imperfecto)
2. **Leé la respuesta completa** (no solo el primer párrafo)
3. **Identificá qué falla** (¿muy largo? ¿tono incorrecto? ¿le falta info?)
4. **Refiná con instrucciones específicas**
5. **Repetí hasta que estés satisfecho**

---

### Las instrucciones de refinamiento más útiles

Estos son prompts de seguimiento que podés usar después de cualquier respuesta:

**Para ajustar longitud:**
- "Hacelo más corto, máximo 3 oraciones"
- "Expandí el punto 2, necesito más detalle"
- "Resumilo en 5 bullets"

**Para ajustar tono:**
- "Hacelo más formal / más informal"
- "Usá un tono más empático"
- "Quitale el tono de vendedor, hacelo más neutral"
- "Escribilo como si fuera un chat de WhatsApp"

**Para ajustar contenido:**
- "Agregá ejemplos concretos"
- "Quitá la parte sobre X, no es relevante"
- "Incluí datos o estadísticas que respalden esto"
- "Hacelo más accionable — qué hago exactamente?"

**Para ajustar formato:**
- "Poné esto en una tabla"
- "Organizalo con headers y sub-headers"
- "Convertilo en una lista paso a paso"
- "Numerá los puntos en orden de prioridad"

**Para ajustar enfoque:**
- "Enfocate más en [aspecto específico]"
- "Esto es para [audiencia], adaptá el nivel"
- "Demasiado teórico, hacelo más práctico"
- "Asumiste X, pero en realidad es Y — reescribí con esa corrección"

---

### Ejemplo completo de iteración

Veamos cómo se ve una iteración real:

**Prompt inicial:**
> "Escribí un email para pedir vacaciones a mi jefe"

**Respuesta:** Un email genérico, formal, largo.

**Iteración 1:**
> "Demasiado formal. Mi jefe es bastante relajado y nos hablamos de vos. Hacelo más casual pero profesional."

**Respuesta:** Mejor tono, pero todavía genérico.

**Iteración 2:**
> "Bien el tono. Ahora agregá que: quiero tomarme del 15 al 30 de marzo, que ya hablé con Laura que me cubre, y que dejo todo al día antes de irme."

**Respuesta:** Mucho mejor, personalizado.

**Iteración 3:**
> "Casi perfecto. Hacelo un poco más corto y sacá la parte donde digo que 'espero que sea posible' — ya lo hablamos verbalmente y es solo la formalidad del email."

**Respuesta final:** Exactamente lo que necesitaba.

¿Cuántos intentos? 4. ¿Valió la pena? Sí, porque el resultado es un email que realmente usaría.

---

### A/B testing de prompts

Cuando tenés una tarea que vas a repetir (generar descripciones de productos, escribir emails de seguimiento, crear publicaciones), vale la pena testear variaciones:

**Versión A:**
> "Escribí una descripción de producto para estas zapatillas deportivas. Sé persuasivo y mencioná los beneficios."

**Versión B:**
> "Actuá como un copywriter de Nike. Escribí una descripción de 2 oraciones para estas zapatillas que haga que alguien quiera comprarlas sin pensarlo dos veces."

Compará los resultados. Guardá el prompt que mejor funcione como tu template.

**Tip:** Si encontrás un prompt que funciona bien, guardalo en un documento o nota. Tu colección personal de prompts es uno de los activos más valiosos que podés construir.

---

### Cuándo empezar de cero vs seguir iterando

**Seguí iterando cuando:**
- La estructura general es buena pero faltan ajustes
- El tono es correcto pero el contenido necesita cambios
- Estás a 2-3 ajustes del resultado ideal
- La IA entendió lo que querés pero no lo ejecutó perfecto

**Empezá de cero cuando:**
- La IA entendió completamente mal tu intención
- Después de 5+ iteraciones seguís insatisfecho
- La conversación se "contaminó" con contexto que confunde
- Querés probar un enfoque radicalmente diferente

A veces un prompt fresco con todo lo que aprendiste de las iteraciones anteriores da mejor resultado que seguir parchando.

---

### Técnicas avanzadas de refinamiento

**Pedir autocrítica:**
> "Revisá lo que acabás de escribir. ¿Qué mejorarías? Después aplicá esas mejoras."

**Pedir variaciones:**
> "Dame 3 versiones de esto: una formal, una casual, y una con humor."

**Refinar por comparación:**
> "De las 3 versiones anteriores, combiná el tono de la versión 2 con la estructura de la versión 1 y los ejemplos de la versión 3."

**Feedback del usuario como contexto:**
> "Envié este email a 3 personas y me dijeron que el segundo párrafo era confuso. Reescribilo para que sea más claro sin cambiar el resto."

**Refinamiento con restricciones:**
> "Perfecto, ahora adaptá esto para un post de LinkedIn. Máximo 200 palabras. Tiene que empezar con un hook que genere curiosidad."

---

### Construyendo sobre respuestas anteriores

Una de las ventajas del chat es que la IA recuerda el contexto de la conversación. Usá esto a tu favor:

> **Prompt 1:** "Dame un outline para un artículo sobre cómo elegir un CRM para pymes"
>
> **Prompt 2:** "Expandí la sección 3 del outline"
>
> **Prompt 3:** "Ahora escribí la introducción, con un hook basado en una estadística"
>
> **Prompt 4:** "Demasiado largo. Reducilo a la mitad"
>
> **Prompt 5:** "Escribí la conclusión que conecte con la intro y termine con un CTA"

Este enfoque incremental (outline → secciones → refinamiento) produce textos mucho mejores que pedir todo de una.

---

### Resumen

- El primer prompt casi nunca es el final — iterar es parte del proceso
- Tené una lista de refinamientos comunes: longitud, tono, contenido, formato
- A/B testeá prompts para tareas repetitivas y guardá los mejores
- Si después de 5 iteraciones no funciona, empezá de cero
- Construí respuestas de forma incremental para tareas complejas
- Tu colección personal de prompts probados es uno de tus activos más valiosos`;

export const c7leccion8 = `## Quiz: Prompt Engineering

Llegaste al quiz final del curso "Prompt Engineering: el arte de preguntar". Este es el momento de poner a prueba todo lo que aprendiste a lo largo de las 7 lecciones anteriores.

Durante este curso recorrimos las 5 técnicas fundamentales de prompting, aprendimos a enseñar con ejemplos mediante few-shot learning, descubrimos el poder de pedirle a la IA que razone paso a paso con chain-of-thought, exploramos cómo asignar roles y personas para obtener respuestas especializadas, vimos cómo usar estructura (markdown, XML, JSON) para organizar mejor nuestros prompts y respuestas, entendimos la diferencia entre system prompts y user prompts, y finalmente aprendimos a iterar y refinar para llegar al resultado ideal.

Estas no son técnicas teóricas — son herramientas prácticas que podés aplicar desde hoy en cada conversación con IA. La diferencia entre alguien que "usa IA" y alguien que realmente le saca provecho está precisamente en la calidad de sus prompts.

Respondé las siguientes preguntas para evaluar tu comprensión. No te preocupes si no sacás todo perfecto — lo importante es identificar qué temas vale la pena repasar. Cada pregunta tiene su respuesta explicada para que sigas aprendiendo incluso durante el quiz.`;
