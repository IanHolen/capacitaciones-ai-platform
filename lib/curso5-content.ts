// Contenido educativo del Curso 5: Prompts efectivos
// 7 lecciones — Nivel Básico, español LATAM

export const c5leccion1 = `
## Anatomía de un buen prompt

Un **prompt** es simplemente el mensaje que le escribes a la IA. Pero no todos los mensajes funcionan igual: algunos dan resultados increíbles y otros dan respuestas vagas o inútiles. La diferencia casi siempre está en cómo está escrito el prompt.

En esta lección aprendes una fórmula simple que transforma cualquier prompt mediocre en uno excelente.

---

### La fórmula de los 4 elementos

Un buen prompt tiene hasta cuatro ingredientes:

**ROL + TAREA + CONTEXTO + FORMATO**

No siempre necesitas los cuatro. Pero cuantos más incluyas, mejor va a ser el resultado.

---

### Los 4 ingredientes explicados

**1. ROL — ¿Quién es la IA en esta conversación?**

Dile a la IA qué tipo de experto o personaje quieres que sea. Esto enfoca completamente su manera de responder.

Ejemplos:
- *"Eres un médico general..."*
- *"Eres una maestra de primaria muy paciente..."*
- *"Eres un abogado especialista en inquilinos..."*
- *"Eres un chef de cocina italiana..."*

**2. TAREA — ¿Qué quieres que haga exactamente?**

Describe la acción concreta que necesitas. Usa verbos claros: explica, escribe, resume, haz una lista, compara, crea, traduce.

Ejemplos:
- *"...explícame en palabras simples..."*
- *"...escribe un mail formal..."*
- *"...haz una lista de 5 opciones..."*

**3. CONTEXTO — ¿Cuál es la situación?**

Da información relevante sobre tu situación particular. Cuanto más contexto, más personalizada la respuesta.

Ejemplos:
- *"...para alguien de 68 años sin experiencia médica..."*
- *"...mi hijo tiene 8 años y le cuesta leer..."*
- *"...tengo que mandar esto al banco antes del viernes..."*

**4. FORMATO — ¿Cómo quieres la respuesta?**

Especifica cómo quieres que esté organizada la respuesta.

Ejemplos:
- *"...en una lista con puntos."*
- *"...en menos de 100 palabras."*
- *"...con un título, tres párrafos y una conclusión."*
- *"...como si me lo explicaras a mí que soy principiante."*

---

### De malo a excelente: ejemplos reales

**Ejemplo 1 — Sobre salud:**

❌ Malo: *"¿Qué es la presión alta?"*

⚠️ Regular: *"Explícame qué es la presión alta de forma simple."*

✅ Excelente: *"Eres un médico de cabecera amable. Explícame qué es la presión alta, cuáles son sus síntomas y qué puedo hacer en casa para bajarla. Háblame como si fuera un paciente de 70 años sin conocimientos médicos. Usa lenguaje simple y haz una lista con los puntos más importantes."*

---

**Ejemplo 2 — Sobre comunicación:**

❌ Malo: *"Escribe un mail."*

⚠️ Regular: *"Escribe un mail pidiendo un turno médico."*

✅ Excelente: *"Eres una asistente administrativa. Escríbeme un mail formal pidiendo turno con el cardiólogo Dr. Rodríguez. Necesito una cita para la semana que viene. El mail debe sonar educado y profesional, con saludo, cuerpo y despedida. Máximo 5 líneas."*

---

**Ejemplo 3 — Para aprender algo:**

❌ Malo: *"¿Cómo funciona internet?"*

⚠️ Regular: *"Explícame cómo funciona internet de forma sencilla."*

✅ Excelente: *"Eres una maestra que le explica tecnología a adultos mayores. Explícame cómo funciona internet usando una analogía con algo de la vida cotidiana. Que sea muy visual y fácil de entender. Sin términos técnicos."*

---

### Una regla de oro

> **Cuanto más claro seas tú, más útil es la respuesta.**

La IA no adivina lo que tienes en la cabeza. Si le das poco, recibes poco. Si le das mucho, recibes exactamente lo que necesitas.

---

### Resumen

La fórmula **ROL + TAREA + CONTEXTO + FORMATO** es la base de un prompt efectivo. No necesitas usarlos todos siempre, pero incorporarlos gradualmente mejora drásticamente la calidad de las respuestas. En la próxima lección profundizamos en el ingrediente del CONTEXTO.
`;

export const c5leccion2 = `
## Dar contexto

De todos los ingredientes de un buen prompt, el **contexto** es el que más impacto tiene en la calidad de la respuesta. Cuando la IA sabe quién eres, cuál es tu situación y para qué necesitas la información, puede darte una respuesta que realmente se adapta a ti.

---

### ¿Por qué el contexto importa tanto?

Imagina que le preguntas a un médico: *"¿Puedo tomar ibuprofeno?"*

Sin contexto, el médico no puede responder bien. Necesita saber:
- ¿Cuántos años tienes?
- ¿Tomas otros medicamentos?
- ¿Para qué lo necesitas?
- ¿Tienes alguna condición médica?

Con la IA pasa exactamente lo mismo. El contexto convierte una respuesta genérica en una respuesta personalizada.

---

### Los 5 tipos de contexto más útiles

**1. Contexto personal**
Quién eres, tu edad, tu profesión, tu nivel de experiencia.

*Ejemplos: "Tengo 72 años", "soy jubilada", "no sé nada de tecnología", "soy maestra de primaria".*

**2. Contexto de la situación**
Qué está pasando, para qué necesitas la información.

*Ejemplos: "Tengo que hablar con mi médico mañana", "mi nieto me preguntó esto", "voy de vacaciones la semana que viene".*

**3. Contexto del destinatario**
Si estás creando algo para otra persona, descríbela.

*Ejemplos: "Es para mi hijo de 10 años", "lo voy a mandar a mi jefe", "es para publicar en Facebook".*

**4. Contexto de restricciones**
Limitaciones o requisitos específicos.

*Ejemplos: "Sin lactosa", "que no cueste más de $500", "en máximo 3 párrafos", "sin palabras técnicas".*

**5. Contexto de estilo o tono**
Cómo quieres que suene el resultado.

*Ejemplos: "Que sea divertido", "formal y serio", "cariñoso y cercano", "simple como para un niño".*

---

### El truco de "imagina que..."

Una de las formas más poderosas de dar contexto es usar esta frase al principio de tu prompt:

**"Imagina que..."**

Ejemplos:
- *"Imagina que soy una persona de 65 años que nunca usó una computadora. Explícame cómo crear un correo electrónico."*
- *"Imagina que le estás explicando esto a tu abuela. ¿Cómo describirías qué es la inteligencia artificial?"*
- *"Imagina que eres mi nutricionista personal. Hazme un menú de una semana que sea sano, simple de cocinar y sin mariscos."*

---

### Antes y después con contexto

**Sin contexto:**
*"Dame ideas para un regalo."*

Con esta pregunta, la IA no sabe para quién es el regalo, cuánto quieres gastar, si es para un cumpleaños, ni cuándo lo necesitas. La respuesta va a ser muy genérica.

**Con contexto:**
*"Dame 5 ideas de regalo para mi nieta de 12 años que le encanta leer y dibujar. El presupuesto es de unos $2000 pesos mexicanos y lo necesito para su cumpleaños la semana que viene."*

Esta pregunta va a dar resultados específicos, útiles y accionables.

---

### ¿Cuánto contexto es demasiado?

El contexto ayuda, pero hay un límite. Si tu mensaje tiene más de 3-4 párrafos antes de llegar a la pregunta real, probablemente estás dando demasiado contexto innecesario.

**Regla práctica:** incluye el contexto que cambia la respuesta. Si la IA puede responder igual sin cierta información, no es necesario incluirla.

---

### Consejo práctico

Elige una pregunta que le hayas hecho antes a la IA y obtuviste una respuesta muy general. Vuelve a hacerla, pero esta vez agrega:
- Tu edad y situación.
- Para qué necesitas la información.
- Quién va a leer o usar el resultado.

Compara los dos resultados y nota la diferencia.

---

### Resumen

El contexto transforma respuestas genéricas en respuestas personalizadas. Los 5 tipos de contexto más útiles son: **personal**, **de la situación**, **del destinatario**, **de restricciones** y **de estilo**. El truco de *"imagina que..."* es una forma rápida y efectiva de dar contexto rico en pocas palabras.
`;

export const c5leccion3 = `
## Ser específico vs. ser vago

Uno de los errores más comunes al usar IA es hacer preguntas demasiado vagas. Cuando el prompt es impreciso, la respuesta también lo es. En esta lección aprendes a ser específico de manera natural y sin complicarte.

---

### ¿Por qué la especificidad importa?

La inteligencia artificial intenta cumplir exactamente lo que le pides. Si pides algo vago, tiene que adivinar, y muchas veces adivina mal o da una respuesta demasiado amplia para ser útil.

Es como ir a la farmacia y decir: *"Deme algo para el dolor."* El farmacéutico te va a preguntar: ¿dónde duele?, ¿hace cuánto?, ¿tomas otros medicamentos? La IA no siempre hace esas preguntas; simplemente responde lo más genérico posible.

---

### 6 formas de ser más específico

**1. Especifica el tema exacto**
En vez de: *"Háblame de salud."*
Mejor: *"Háblame de los beneficios de caminar 30 minutos diarios para personas mayores de 60 años."*

**2. Incluye números cuando sea relevante**
En vez de: *"Dame ideas de regalos."*
Mejor: *"Dame 5 ideas de regalos de menos de $1000 pesos para una mujer de 70 años."*

**3. Especifica el nivel de detalle**
En vez de: *"Explícame el tema."*
Mejor: *"Explícamelo en 3 puntos simples, sin términos técnicos."*

**4. Nombra el tipo de resultado que quieres**
En vez de: *"Ayúdame con esto."*
Mejor: *"Escríbeme un mail / haz una lista / crea un plan / resume este texto."*

**5. Define el destinatario**
En vez de: *"Escribe algo sobre alimentación."*
Mejor: *"Escribe un consejo de alimentación para compartir con mis amigos en el grupo de WhatsApp."*

**6. Ponele un límite de extensión**
En vez de: *"Cuéntame sobre los beneficios del yoga."*
Mejor: *"Cuéntame 3 beneficios del yoga en menos de 5 oraciones."*

---

### Tabla de transformaciones: de vago a específico

| Prompt vago | Prompt específico |
|---|---|
| "¿Qué como?" | "¿Qué puedo comer si tengo diabetes tipo 2 y me gusta la comida mexicana?" |
| "Escribe algo motivador" | "Escribe un mensaje motivador corto para alguien que empieza a hacer ejercicio a los 65 años" |
| "Cuéntame de historia" | "Cuéntame en 3 párrafos simples cómo llegó el tango a ser famoso en Europa" |
| "Ayúdame con mi mail" | "Revisa este mail y hazlo más formal y conciso, máximo 5 líneas" |
| "Dame una receta" | "Dame una receta fácil con pollo, papa y zanahoria para 2 personas, sin usar horno" |
| "¿Cómo mejoro mi memoria?" | "Dame 4 hábitos cotidianos respaldados por la ciencia para mejorar la memoria en adultos mayores" |
| "Habla de tecnología" | "Explícame qué es el WiFi como si tuvieras que explicárselo a alguien de 80 años" |
| "Dame un consejo" | "Dame un consejo para dormir mejor cuando me despierto a las 3 de la mañana y no puedo volver a dormirme" |
| "Hazme un plan" | "Hazme un plan de 4 semanas para empezar a caminar, comenzando de cero, 20 minutos por día" |
| "Explica eso" | "Explícame qué es el colesterol malo y qué alimentos debo evitar, en palabras simples" |

---

### La prueba de "otra persona"

Después de escribir tu prompt, antes de enviarlo, hazte esta pregunta:

> *"Si otra persona leyera esto sin saber nada de mi situación, ¿podría responderlo bien?"*

Si la respuesta es "no" o "tal vez", agrega más detalles. Si la respuesta es "sí", el prompt probablemente está bien.

---

### ¿Hay momentos para ser vago intencionalmente?

Sí. Si quieres **inspirarte** o explorar ideas sin dirección, un prompt más abierto puede ser útil. Por ejemplo:

*"Dame 10 ideas creativas para usar en un taller de adultos mayores."*

Este prompt es amplio a propósito porque quieres variedad. Pero si ya sabes lo que quieres, sé específico.

---

### Consejo práctico

Toma esta pregunta vaga: *"¿Cómo estoy bien de salud?"*

Reescríbela siendo específico:
- ¿A qué aspecto de la salud te refieres?
- ¿Cuántos años tienes?
- ¿Tienes alguna condición médica?
- ¿Qué tipo de respuesta quieres (consejos, lista de chequeo, preguntas para el médico)?

---

### Resumen

Ser específico no significa complicarse: significa decir claramente lo que necesitas. Las 6 claves son: **tema exacto, números, nivel de detalle, tipo de resultado, destinatario y extensión**. La prueba de "otra persona" es una forma rápida de saber si tu prompt está suficientemente claro.
`;

export const c5leccion4 = `
## Pedir correcciones y mejoras

Una de las habilidades más valiosas con la IA es saber **continuar la conversación**. La primera respuesta no siempre es la mejor, y está perfectamente bien — y muy recomendable — pedirle que mejore, ajuste o cambie lo que generó.

---

### La conversación iterativa: el secreto de los mejores resultados

Los usuarios más avanzados no mandan un prompt y aceptan la primera respuesta. En cambio, **van y vienen** con la IA, refinando el resultado hasta que queda exactamente como quieren.

Este proceso se llama **iteración**, y es muy natural:
1. Pides algo.
2. La IA responde.
3. Tú dices qué está bien y qué quieres cambiar.
4. La IA mejora.
5. Repites hasta estar satisfecho.

No hay límite de veces que puedes pedir ajustes dentro de una misma conversación.

---

### Frases mágicas para pedir mejoras

**Para acortar:**
- *"Está muy largo. Resúmelo a la mitad."*
- *"Haz una versión más corta, en máximo 3 oraciones."*
- *"Quédate con lo esencial y quita todo lo que no es necesario."*

**Para simplificar:**
- *"Usa palabras más simples, como si me hablaras a mí que no soy experto."*
- *"Explícalo de una manera más fácil de entender."*
- *"Quítale los términos técnicos."*

**Para expandir:**
- *"Me parece bien pero quiero más detalle en la parte de [X]."*
- *"Expande el segundo punto, que quedó muy corto."*
- *"Agrégale ejemplos concretos."*

**Para cambiar el tono:**
- *"Hazlo más formal."*
- *"Que suene más cálido y amigable."*
- *"Cámbialo a un tono más serio."*
- *"Que sea más divertido y liviano."*

**Para cambiar el formato:**
- *"Ponlo en forma de lista en vez de párrafos."*
- *"Arma una tabla."*
- *"Escríbelo como si fuera un mail, con saludo y despedida."*
- *"Organízalo con títulos y subtítulos."*

**Para corregir errores:**
- *"Cometiste un error: [describe el error]. Corrígelo."*
- *"Eso no es así. La realidad es [X]. Reescríbelo con esa corrección."*
- *"Esta parte no me convence: [cita la parte]. Reescríbela."*

**Para explorar alternativas:**
- *"Está bien, pero dame 3 versiones diferentes de esto."*
- *"¿Puedes escribir una versión más formal y una más informal?"*
- *"Dame otras opciones para el primer párrafo."*

---

### El truco de "hazlo otra vez pero..."

La frase más poderosa para iterar es:

**"Hazlo otra vez pero [cambio específico]."**

Ejemplos:
- *"Hazlo otra vez pero más corto."*
- *"Hazlo otra vez pero en tono más formal."*
- *"Hazlo otra vez pero explicando también por qué es importante."*
- *"Hazlo otra vez pero como si fuera para un grupo de WhatsApp."*

Esta frase le indica a la IA que mantenga lo esencial pero modifique un elemento específico.

---

### Ejemplo real de iteración

**Mensaje 1:** *"Escríbeme un mensaje para invitar a mis amigos al cumpleaños de mi marido."*

**Respuesta 1:** La IA escribe un mensaje genérico.

**Mensaje 2:** *"Bien, pero hazlo más divertido y agrega que es sorpresa."*

**Respuesta 2:** La IA lo reescribe con más humor y aclara que es sorpresa.

**Mensaje 3:** *"Perfecto. Ahora acórtalo, que para WhatsApp está muy largo."*

**Respuesta 3:** La IA da una versión corta y lista para copiar.

En solo 3 turnos llegaste exactamente al resultado que necesitabas.

---

### Lo que NO tienes que hacer

- **No empezar de cero** cada vez que la respuesta no es perfecta. Mejor pide el ajuste específico en el mismo chat.
- **No aceptar una respuesta mediocre** sin pedir mejoras. La IA no se ofende ni se cansa.
- **No ser vago al pedir correcciones.** En vez de *"No me gusta"*, di exactamente qué no te gusta y por qué.

---

### Resumen

La conversación con la IA es un proceso de ida y vuelta. Las frases mágicas (**acorta, simplifica, expande, cambia el tono, ponlo en lista, dame alternativas**) te permiten afinar cualquier respuesta. El truco *"hazlo otra vez pero..."* es la herramienta más rápida para pedir un cambio específico.
`;

export const c5leccion5 = `
## Prompts para diferentes situaciones

En esta lección te damos una colección de prompts listos para copiar y pegar. Guarda los que más te sirvan: van a ahorrarte tiempo y van a darte respuestas mucho mejores desde el primer intento.

---

### Para comunicación personal

**Escribir un mensaje de WhatsApp:**
*"Necesito mandarle un mensaje a [persona] diciéndole que [situación]. Que sea [tono: cálido/formal/corto]. En no más de 3 oraciones."*

**Responder un mail difícil:**
*"Recibí este mail: [pega el mail]. No sé cómo responder. Escríbeme una respuesta que sea amable pero firme, y que aclare [punto específico]."*

**Escribir una felicitación:**
*"Escríbeme un mensaje de felicitación de [cumpleaños/casamiento/nacimiento/jubilación] para [relación: amigo/familiar/colega]. Que sea [cálido y personal/formal/divertido]. Máximo 4 oraciones."*

**Disculparse:**
*"Necesito disculparme con [persona] por [motivo]. Ayúdame a escribir un mensaje sincero que no suene forzado. Que tenga entre 3 y 5 oraciones."*

---

### Para el trabajo y trámites

**Escribir un correo formal:**
*"Escríbeme un correo formal para [institución/empresa] pidiendo [trámite/información/turno]. El tono debe ser respetuoso y profesional. Firmado por [tu nombre]."*

**Resumir un documento:**
*"Resume el siguiente texto en 5 puntos principales, usando lenguaje simple: [pega el texto]."*

**Preparar una reunión:**
*"Voy a reunirme con [persona/empresa] para hablar de [tema]. Ayúdame a preparar 5 preguntas clave que debo hacerles."*

**Escribir un reclamo:**
*"Necesito escribir un reclamo formal a [empresa/institución] por [problema]. Que sea educado pero firme. Incluye una solicitud clara de solución."*

---

### Para salud y bienestar

**Entender un diagnóstico:**
*"Mi médico me dijo que tengo [condición]. Explícame en palabras simples qué significa, cuáles son los síntomas más comunes y qué preguntas debo hacerle en la próxima consulta."*

**Preparar preguntas para el médico:**
*"Voy al médico por [motivo]. Ayúdame a preparar una lista de 5 preguntas importantes para hacerle durante la consulta."*

**Plan de alimentación:**
*"Necesito comer más sano. Tengo [restricciones: sin sal/sin azúcar/sin gluten]. Hazme un menú de 3 días simple, con alimentos fáciles de conseguir en México."*

---

### Para aprender y explorar

**Aprender algo nuevo:**
*"Quiero entender qué es [tema]. Explícamelo paso a paso como si fuera la primera vez que lo escucho, usando ejemplos simples de la vida cotidiana."*

**Comparar opciones:**
*"¿Cuál es la diferencia entre [opción A] y [opción B]? Explícamelo en una tabla simple con pros y contras."*

**Explorar un tema histórico o cultural:**
*"Cuéntame la historia de [tema: el tango / la Patagonia / el mate] de una manera entretenida, en no más de 5 párrafos."*

---

### Para organización personal

**Plan semanal:**
*"Ayúdame a organizar mi semana. Tengo estas actividades: [lista tus actividades]. Hazme un horario distribuido de lunes a viernes, dejando tiempo para descanso."*

**Lista de tareas:**
*"Tengo que [situación: preparar una mudanza / organizar un evento / hacer trámites]. Hazme una lista de todas las tareas en orden de prioridad."*

**Tomar una decisión:**
*"Tengo que decidir entre [opción A] y [opción B]. Los pros de A son [X] y los de B son [Y]. Ayúdame a analizar las dos opciones y sugiere cuál podría ser mejor para mí."*

---

### Consejo para usar estos prompts

Estos prompts funcionan mejor si los **personalizas** antes de enviarlos. Reemplaza las partes entre corchetes [ ] con tu información real y el resultado va a ser mucho más útil.

También puedes combinarlos: por ejemplo, usar el prompt de "entender un diagnóstico" y luego, en el mismo chat, usar el de "preparar preguntas para el médico".

---

### Resumen

Tener una biblioteca de prompts listos te ahorra tiempo y garantiza mejores respuestas. Las categorías más útiles son: **comunicación personal, trabajo y trámites, salud, aprendizaje y organización**. Guarda los que más uses y personalizalos según tu situación.
`;

export const c5leccion6 = `
## Ejercicio: transforma 5 prompts malos en buenos

Este ejercicio es la mejor manera de solidificar todo lo que aprendiste en este curso. Vamos a tomar 5 prompts típicos que usan personas que recién empiezan, analizaremos qué está mal y veremos cómo transformarlos en prompts poderosos.

---

### ¿Cómo hacer el ejercicio?

Para cada prompt malo, primero **intenta mejorarlos tú mismo** antes de leer la versión mejorada. Recuerda aplicar la fórmula: ROL + TAREA + CONTEXTO + FORMATO.

---

### Prompt 1 — Sobre salud

**Prompt original:**
*"¿Qué pasa con el corazón?"*

**¿Qué está mal?**
- No especifica qué aspecto del corazón.
- No hay contexto personal.
- La pregunta podría tener mil respuestas diferentes.

**Versión mejorada:**
*"Eres un cardiólogo que explica temas médicos a personas mayores. Tengo 67 años y me preocupa mi corazón porque tengo la presión alta. Explícame en palabras simples qué riesgos tiene la presión alta para el corazón y qué hábitos de vida me ayudan a cuidarlo. Haz una lista de 5 consejos prácticos."*

**¿Qué mejoró?**
✅ ROL: cardiólogo que explica a mayores.
✅ CONTEXTO: 67 años, presión alta.
✅ TAREA: explicar riesgos + consejos.
✅ FORMATO: lista de 5 consejos.

---

### Prompt 2 — Sobre escritura

**Prompt original:**
*"Escribe algo para mi amiga."*

**¿Qué está mal?**
- ¿Qué tipo de mensaje?
- ¿Para qué ocasión?
- ¿Cuál es el tono?
- ¿Cuánto debe ser largo?

**Versión mejorada:**
*"Escríbeme un mensaje corto para mi amiga Rosa que acaba de perder a su perro. Quiero que sea cariñoso y que la haga sentir acompañada sin sonar exagerado. Máximo 4 oraciones. Usa un tono cálido y cercano."*

**¿Qué mejoró?**
✅ TAREA clara: mensaje de condolencias por mascota.
✅ CONTEXTO: quién es, qué pasó.
✅ FORMATO: máximo 4 oraciones.
✅ TONO especificado: cálido y cercano.

---

### Prompt 3 — Sobre cocina

**Prompt original:**
*"Una receta."*

**¿Qué está mal?**
- ¿Para qué comida?
- ¿Cuántas personas?
- ¿Qué ingredientes tienes?
- ¿Cuánto tiempo dispones?

**Versión mejorada:**
*"Eres un chef que cocina para adultos mayores. Tengo en casa: arroz, pollo, cebolla, zanahoria y ajo. Quiero cocinar para 2 personas. Dame una receta fácil, sin muchos pasos, que no lleve más de 40 minutos de preparación. Que sea sabrosa y saludable."*

**¿Qué mejoró?**
✅ ROL: chef especializado.
✅ CONTEXTO: ingredientes disponibles, cantidad de personas.
✅ RESTRICCIONES: fácil, máximo 40 minutos.
✅ OBJETIVO: sabrosa y saludable.

---

### Prompt 4 — Para aprender tecnología

**Prompt original:**
*"Explícame el WiFi."*

**¿Qué está mal?**
- ¿Qué nivel de explicación?
- ¿Para qué lo necesita saber?
- ¿Qué ya sabe la persona?

**Versión mejorada:**
*"Eres una maestra muy paciente. Explícame qué es el WiFi y cómo funciona, usando una comparación con algo de la vida cotidiana. Soy una persona de 68 años que nunca estudió tecnología. Quiero entenderlo para explicárselo a mis nietos. Usa un lenguaje muy simple, sin términos técnicos, en no más de 4 párrafos cortos."*

**¿Qué mejoró?**
✅ ROL: maestra paciente.
✅ CONTEXTO PERSONAL: 68 años, sin conocimientos técnicos.
✅ CONTEXTO DE USO: para explicar a nietos.
✅ FORMATO: simple, sin tecnicismos, 4 párrafos.

---

### Prompt 5 — Para organización

**Prompt original:**
*"Ayúdame a organizar."*

**¿Qué está mal?**
- ¿Organizar qué?
- ¿En qué plazo?
- ¿Cuáles son las restricciones?

**Versión mejorada:**
*"Necesito organizar una reunión familiar para el cumpleaños de mi madre que cumple 80 años. Van a venir aproximadamente 20 personas, el evento es en mi casa y el presupuesto es limitado. Ayúdame a hacer una lista de tareas organizadas por prioridad y por semana (tengo 3 semanas hasta el evento). Incluye la compra de comida, decoración, invitaciones y entretenimiento."*

**¿Qué mejoró?**
✅ EVENTO específico: cumpleaños de 80 años.
✅ CONTEXTO: 20 personas, en casa, presupuesto limitado.
✅ PLAZO: 3 semanas.
✅ FORMATO: lista organizada por semana.
✅ ÁREAS cubiertos: comida, decoración, invitaciones, entretenimiento.

---

### Reflexión final del ejercicio

Fíjate que en todos los casos la transformación siguió el mismo proceso:
1. Identificar qué información faltaba.
2. Agregar contexto personal y de la situación.
3. Especificar el tipo de resultado y el formato.
4. Opcional: agregar un rol para la IA.

Con práctica, escribir buenos prompts se vuelve natural y rápido.

---

### Resumen

Los 5 prompts malos tenían en común que eran demasiado vagos y sin contexto. Las versiones mejoradas incluyen: **quién eres, qué quieres exactamente, para qué lo necesitas, y cómo quieres la respuesta**. Practicar este tipo de transformaciones es la forma más rápida de mejorar con la IA.
`;

export const c5leccion7 = `
## Quiz: Prompts efectivos

¡Llegaste al final del Curso 5! Es momento de revisar todo lo aprendido con este quiz de 10 preguntas. Lee cada pregunta, piensa tu respuesta y luego lee la explicación.

---

### Pregunta 1

**¿Cuál de estos NO es uno de los 4 ingredientes de la fórmula de un buen prompt?**

A) ROL
B) TAREA
C) VELOCIDAD
D) FORMATO

**Respuesta correcta: C) VELOCIDAD**

*La fórmula es ROL + TAREA + CONTEXTO + FORMATO. La velocidad no es un ingrediente de los prompts. Lo que sí puedes especificar es el formato o la extensión de la respuesta.*

---

### Pregunta 2

**¿Cuál de estos prompts es el más efectivo?**

A) "Explícame la diabetes"
B) "¿Qué es la diabetes?"
C) "Eres un médico. Explícame en palabras simples qué es la diabetes tipo 2, sus síntomas principales y qué debo evitar comer. Háblame como si tuvieras 65 años sin conocimientos médicos."
D) "Háblame de enfermedades"

**Respuesta correcta: C)**

*La opción C incluye ROL (médico), TAREA (explicar qué es, síntomas y alimentación), CONTEXTO (65 años, sin conocimientos médicos) y una idea de FORMATO (palabras simples).*

---

### Pregunta 3

**¿Cuál es la frase más útil para pedir una versión modificada de la respuesta anterior?**

A) "No me gustó, empieza de nuevo."
B) "Hazlo otra vez pero más corto."
C) "Escribe algo mejor."
D) "Cámbialo todo."

**Respuesta correcta: B) "Hazlo otra vez pero más corto."**

*Esta frase indica a la IA que mantenga el contenido pero aplique un cambio específico. Es más efectiva que pedir empezar de cero porque conserva el progreso anterior.*

---

### Pregunta 4

**¿Cuál es el tipo de contexto que le dice a la IA quién va a leer o usar el resultado?**

A) Contexto personal
B) Contexto de restricciones
C) Contexto del destinatario
D) Contexto de estilo

**Respuesta correcta: C) Contexto del destinatario**

*El contexto del destinatario describe a la persona que va a leer o usar el resultado, por ejemplo: "es para mi hijo de 10 años" o "lo voy a mandar a mi jefe".*

---

### Pregunta 5

**¿Qué te permite hacer la "prueba de la otra persona" con tu prompt?**

A) Verificar si la respuesta es correcta
B) Saber si tu prompt es lo suficientemente claro
C) Calcular cuánto tiempo tarda la IA en responder
D) Comparar dos respuestas diferentes

**Respuesta correcta: B) Saber si tu prompt es lo suficientemente claro**

*La prueba consiste en preguntarte: "¿Si otra persona leyera esto sin saber nada de mi situación, podría responderlo bien?" Si la respuesta es no, necesitas agregar más contexto o detalle.*

---

### Pregunta 6

**¿Cuántas veces puedes pedirle a la IA que mejore o ajuste su respuesta en una misma conversación?**

A) Solo una vez
B) Máximo 3 veces
C) Sin límite
D) Solo si pagas la versión premium

**Respuesta correcta: C) Sin límite**

*Puedes iterar todas las veces que necesites dentro de una misma conversación. La IA no se cansa ni se ofende, y cada ajuste te acerca más al resultado que buscas.*

---

### Pregunta 7

**¿Qué hace el ROL en un prompt?**

A) Define el límite de palabras de la respuesta
B) Le indica a la IA desde qué perspectiva o expertise debe responder
C) Le pide a la IA que busque en internet
D) Configura el idioma de la respuesta

**Respuesta correcta: B) Le indica a la IA desde qué perspectiva o expertise debe responder**

*Al decirle "eres un médico" o "eres una maestra", la IA ajusta su vocabulario, tono y nivel de detalle para responder como ese tipo de experto.*

---

### Pregunta 8

**¿Cuál de estos prompts tiene demasiado poco contexto?**

A) "Tengo 68 años, vivo sola, tengo artritis en las rodillas y quiero saber qué ejercicios suaves puedo hacer sin dolor. Dame 5 opciones con instrucciones simples."
B) "Dame ejercicios."
C) "Dame 5 ejercicios suaves para adultos mayores con artritis, con instrucciones paso a paso."
D) "Eres un fisioterapeuta. Recomiéndame una rutina de ejercicios para artritis."

**Respuesta correcta: B) "Dame ejercicios."**

*Este prompt no tiene contexto (¿para quién?, ¿qué tipo?, ¿con qué limitaciones?), no tiene tarea específica ni formato. Es el más vago de los cuatro.*

---

### Pregunta 9

**¿Cuál es la mejor manera de pedir que la IA simplifique una respuesta?**

A) "Está mal, reescríbelo."
B) "No lo entiendo."
C) "Usa palabras más simples, como si me hablaras a mí que no soy experto en este tema."
D) "Menos palabras."

**Respuesta correcta: C)**

*Esta opción es específica y da contexto: qué quieres (palabras simples) y por qué (no eres experto). Las demás opciones son demasiado vagas o poco informativas.*

---

### Pregunta 10

**¿Cuándo es útil usar un prompt más vago o amplio intencionalmente?**

A) Nunca, siempre hay que ser específico
B) Cuando quieres explorar ideas o buscar inspiración sin una dirección fija
C) Cuando usas la versión gratuita
D) Cuando la IA no entiende español

**Respuesta correcta: B) Cuando quieres explorar ideas o buscar inspiración sin una dirección fija**

*Un prompt más abierto puede ser útil para brainstorming o cuando quieres sorprenderte con variedad de opciones. Pero para tareas concretas, siempre es mejor ser específico.*

---

### ¡Felicitaciones!

Completaste el Curso 5. Ahora sabes:
- La fórmula de 4 ingredientes para un buen prompt (ROL + TAREA + CONTEXTO + FORMATO).
- Cómo dar contexto de 5 tipos diferentes.
- Cómo ser específico para obtener mejores respuestas.
- Cómo iterar y pedir mejoras en una conversación.
- Prompts listos para usar en distintas situaciones de la vida cotidiana.

¡En el próximo curso vas a ver cómo aplicar todo esto en situaciones reales de tu vida diaria!
`;
