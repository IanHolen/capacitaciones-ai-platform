// Contenido educativo del Curso 5: Prompts efectivos
// 7 lecciones — Nivel Básico, español LATAM

export const c5leccion1 = `
## Anatomía de un buen prompt

Un **prompt** es simplemente el mensaje que le escribís a la IA. Pero no todos los mensajes funcionan igual: algunos dan resultados increíbles y otros dan respuestas vagas o inútiles. La diferencia casi siempre está en cómo está escrito el prompt.

En esta lección aprendés una fórmula simple que transforma cualquier prompt mediocre en uno excelente.

---

### La fórmula de los 4 elementos

Un buen prompt tiene hasta cuatro ingredientes:

**ROL + TAREA + CONTEXTO + FORMATO**

No siempre necesitás los cuatro. Pero cuantos más incluyas, mejor va a ser el resultado.

---

### Los 4 ingredientes explicados

**1. ROL — ¿Quién es la IA en esta conversación?**

Decile a la IA qué tipo de experto o personaje querés que sea. Esto enfoca completamente su manera de responder.

Ejemplos:
- *"Sos un médico general..."*
- *"Sos una maestra de primaria muy paciente..."*
- *"Sos un abogado especialista en inquilinos..."*
- *"Sos un chef de cocina italiana..."*

**2. TAREA — ¿Qué querés que haga exactamente?**

Describí la acción concreta que necesitás. Usá verbos claros: explicá, escribí, resumí, hacé una lista, comparé, creá, traducí.

Ejemplos:
- *"...explicame en palabras simples..."*
- *"...escribí un mail formal..."*
- *"...hacé una lista de 5 opciones..."*

**3. CONTEXTO — ¿Cuál es la situación?**

Dá información relevante sobre tu situación particular. Cuanto más contexto, más personalizada la respuesta.

Ejemplos:
- *"...para alguien de 68 años sin experiencia médica..."*
- *"...mi hijo tiene 8 años y le cuesta leer..."*
- *"...tengo que mandar esto al banco antes del viernes..."*

**4. FORMATO — ¿Cómo querés la respuesta?**

Especificá cómo querés que esté organizada la respuesta.

Ejemplos:
- *"...en una lista con puntos."*
- *"...en menos de 100 palabras."*
- *"...con un título, tres párrafos y una conclusión."*
- *"...como si me lo explicaras a mí que soy principiante."*

---

### De malo a excelente: ejemplos reales

**Ejemplo 1 — Sobre salud:**

❌ Malo: *"¿Qué es la presión alta?"*

⚠️ Regular: *"Explicame qué es la presión alta de forma simple."*

✅ Excelente: *"Sos un médico de cabecera amable. Explicame qué es la presión alta, cuáles son sus síntomas y qué puedo hacer en casa para bajarla. Hablame como si fuera un paciente de 70 años sin conocimientos médicos. Usá lenguaje simple y hacé una lista con los puntos más importantes."*

---

**Ejemplo 2 — Sobre comunicación:**

❌ Malo: *"Escribí un mail."*

⚠️ Regular: *"Escribí un mail pidiendo un turno médico."*

✅ Excelente: *"Sos una asistente administrativa. Escribime un mail formal pidiendo turno con el cardiólogo Dr. Rodríguez. Necesito una cita para la semana que viene. El mail debe sonar educado y profesional, con saludo, cuerpo y despedida. Máximo 5 líneas."*

---

**Ejemplo 3 — Para aprender algo:**

❌ Malo: *"¿Cómo funciona internet?"*

⚠️ Regular: *"Explicame cómo funciona internet de forma sencilla."*

✅ Excelente: *"Sos una maestra que le explica tecnología a adultos mayores. Explicame cómo funciona internet usando una analogía con algo de la vida cotidiana. Que sea muy visual y fácil de entender. Sin términos técnicos."*

---

### Una regla de oro

> **Cuanto más claro seas vos, más útil es la respuesta.**

La IA no adivina lo que tenés en la cabeza. Si le das poco, recibís poco. Si le das mucho, recibís exactamente lo que necesitás.

---

### Resumen

La fórmula **ROL + TAREA + CONTEXTO + FORMATO** es la base de un prompt efectivo. No necesitás usarlos todos siempre, pero incorporarlos gradualmente mejora drásticamente la calidad de las respuestas. En la próxima lección profundizamos en el ingrediente del CONTEXTO.
`;

export const c5leccion2 = `
## Dar contexto

De todos los ingredientes de un buen prompt, el **contexto** es el que más impacto tiene en la calidad de la respuesta. Cuando la IA sabe quién sos, cuál es tu situación y para qué necesitás la información, puede darte una respuesta que realmente se adapta a vos.

---

### ¿Por qué el contexto importa tanto?

Imaginá que le preguntás a un médico: *"¿Puedo tomar ibuprofeno?"*

Sin contexto, el médico no puede responder bien. Necesita saber:
- ¿Cuántos años tenés?
- ¿Tomás otros medicamentos?
- ¿Para qué lo necesitás?
- ¿Tenés alguna condición médica?

Con la IA pasa exactamente lo mismo. El contexto convierte una respuesta genérica en una respuesta personalizada.

---

### Los 5 tipos de contexto más útiles

**1. Contexto personal**
Quién sos, tu edad, tu profesión, tu nivel de experiencia.

*Ejemplos: "Tengo 72 años", "soy jubilada", "no sé nada de tecnología", "soy maestra de primaria".*

**2. Contexto de la situación**
Qué está pasando, para qué necesitás la información.

*Ejemplos: "Tengo que hablar con mi médico mañana", "mi nieto me preguntó esto", "voy de vacaciones la semana que viene".*

**3. Contexto del destinatario**
Si estás creando algo para otra persona, describila.

*Ejemplos: "Es para mi hijo de 10 años", "lo voy a mandar a mi jefe", "es para publicar en Facebook".*

**4. Contexto de restricciones**
Limitaciones o requisitos específicos.

*Ejemplos: "Sin lactosa", "que no cueste más de $500", "en máximo 3 párrafos", "sin palabras técnicas".*

**5. Contexto de estilo o tono**
Cómo querés que suene el resultado.

*Ejemplos: "Que sea divertido", "formal y serio", "cariñoso y cercano", "simple como para un niño".*

---

### El truco de "imaginá que..."

Una de las formas más poderosas de dar contexto es usar esta frase al principio de tu prompt:

**"Imaginá que..."**

Ejemplos:
- *"Imaginá que soy una persona de 65 años que nunca usó una computadora. Explicame cómo crear un correo electrónico."*
- *"Imaginá que le estás explicando esto a tu abuela. ¿Cómo describirías qué es la inteligencia artificial?"*
- *"Imaginá que sos mi nutricionista personal. Haceme un menú de una semana que sea sano, simple de cocinar y sin mariscos."*

---

### Antes y después con contexto

**Sin contexto:**
*"Dame ideas para un regalo."*

Con esta pregunta, la IA no sabe para quién es el regalo, cuánto querés gastar, si es para un cumpleaños, ni cuándo lo necesitás. La respuesta va a ser muy genérica.

**Con contexto:**
*"Dame 5 ideas de regalo para mi nieta de 12 años que le encanta leer y dibujar. El presupuesto es de unos $2000 pesos argentinos y lo necesito para su cumpleaños la semana que viene."*

Esta pregunta va a dar resultados específicos, útiles y accionables.

---

### ¿Cuánto contexto es demasiado?

El contexto ayuda, pero hay un límite. Si tu mensaje tiene más de 3-4 párrafos antes de llegar a la pregunta real, probablemente estás dando demasiado contexto innecesario.

**Regla práctica:** incluí el contexto que cambia la respuesta. Si la IA puede responder igual sin cierta información, no es necesario incluirla.

---

### Consejo práctico

Elegí una pregunta que le hayas hecho antes a la IA y obtuviste una respuesta muy general. Volvé a hacerla, pero esta vez agregá:
- Tu edad y situación.
- Para qué necesitás la información.
- Quién va a leer o usar el resultado.

Comparé los dos resultados y notá la diferencia.

---

### Resumen

El contexto transforma respuestas genéricas en respuestas personalizadas. Los 5 tipos de contexto más útiles son: **personal**, **de la situación**, **del destinatario**, **de restricciones** y **de estilo**. El truco de *"imaginá que..."* es una forma rápida y efectiva de dar contexto rico en pocas palabras.
`;

export const c5leccion3 = `
## Ser específico vs. ser vago

Uno de los errores más comunes al usar IA es hacer preguntas demasiado vagas. Cuando el prompt es impreciso, la respuesta también lo es. En esta lección aprendés a ser específico de manera natural y sin complicarte.

---

### ¿Por qué la especificidad importa?

La inteligencia artificial intenta cumplir exactamente lo que le pedís. Si pedís algo vago, tiene que adivinar, y muchas veces adivina mal o da una respuesta demasiado amplia para ser útil.

Es como ir a la farmacia y decir: *"Deme algo para el dolor."* El farmacéutico te va a preguntar: ¿dónde duele?, ¿hace cuánto?, ¿tomás otros medicamentos? La IA no siempre hace esas preguntas; simplemente responde lo más genérico posible.

---

### 6 formas de ser más específico

**1. Especificá el tema exacto**
En vez de: *"Hablame de salud."*
Mejor: *"Hablame de los beneficios de caminar 30 minutos diarios para personas mayores de 60 años."*

**2. Incluí números cuando sea relevante**
En vez de: *"Dame ideas de regalos."*
Mejor: *"Dame 5 ideas de regalos de menos de $1000 pesos para una mujer de 70 años."*

**3. Especificá el nivel de detalle**
En vez de: *"Explicame el tema."*
Mejor: *"Explicamelo en 3 puntos simples, sin términos técnicos."*

**4. Nombrá el tipo de resultado que querés**
En vez de: *"Ayudame con esto."*
Mejor: *"Escribime un mail / hacé una lista / creá un plan / resumí este texto."*

**5. Definí el destinatario**
En vez de: *"Escribí algo sobre alimentación."*
Mejor: *"Escribí un consejo de alimentación para compartir con mis amigos en el grupo de WhatsApp."*

**6. Ponele un límite de extensión**
En vez de: *"Contame sobre los beneficios del yoga."*
Mejor: *"Contame 3 beneficios del yoga en menos de 5 oraciones."*

---

### Tabla de transformaciones: de vago a específico

| Prompt vago | Prompt específico |
|---|---|
| "¿Qué como?" | "¿Qué puedo comer si tengo diabetes tipo 2 y me gusta la comida argentina?" |
| "Escribí algo motivador" | "Escribí un mensaje motivador corto para alguien que empieza a hacer ejercicio a los 65 años" |
| "Contame de historia" | "Contame en 3 párrafos simples cómo llegó el tango a ser famoso en Europa" |
| "Ayudame con mi mail" | "Revisá este mail y hacelo más formal y conciso, máximo 5 líneas" |
| "Dame una receta" | "Dame una receta fácil con pollo, papa y zanahoria para 2 personas, sin usar horno" |
| "¿Cómo mejoro mi memoria?" | "Dame 4 hábitos cotidianos respaldados por la ciencia para mejorar la memoria en adultos mayores" |
| "Habla de tecnología" | "Explicame qué es el WiFi como si tuvieras que explicárselo a alguien de 80 años" |
| "Dame un consejo" | "Dame un consejo para dormir mejor cuando me despierto a las 3 de la mañana y no puedo volver a dormirme" |
| "Haceme un plan" | "Haceme un plan de 4 semanas para empezar a caminar, comenzando de cero, 20 minutos por día" |
| "Explica eso" | "Explicame qué es el colesterol malo y qué alimentos debo evitar, en palabras simples" |

---

### La prueba de "otra persona"

Después de escribir tu prompt, antes de enviarlo, hacete esta pregunta:

> *"Si otra persona leyera esto sin saber nada de mi situación, ¿podría responderlo bien?"*

Si la respuesta es "no" o "tal vez", agregá más detalles. Si la respuesta es "sí", el prompt probablemente está bien.

---

### ¿Hay momentos para ser vago intencionalmente?

Sí. Si querés **inspirarte** o explorar ideas sin dirección, un prompt más abierto puede ser útil. Por ejemplo:

*"Dame 10 ideas creativas para usar en un taller de adultos mayores."*

Este prompt es amplio a propósito porque querés variedad. Pero si ya sabés lo que querés, sé específico.

---

### Consejo práctico

Tomá esta pregunta vaga: *"¿Cómo estoy bien de salud?"*

Reescribila siendo específico:
- ¿A qué aspecto de la salud te referís?
- ¿Cuántos años tenés?
- ¿Tenés alguna condición médica?
- ¿Qué tipo de respuesta querés (consejos, lista de chequeo, preguntas para el médico)?

---

### Resumen

Ser específico no significa complicarse: significa decir claramente lo que necesitás. Las 6 claves son: **tema exacto, números, nivel de detalle, tipo de resultado, destinatario y extensión**. La prueba de "otra persona" es una forma rápida de saber si tu prompt está suficientemente claro.
`;

export const c5leccion4 = `
## Pedir correcciones y mejoras

Una de las habilidades más valiosas con la IA es saber **continuar la conversación**. La primera respuesta no siempre es la mejor, y está perfectamente bien — y muy recomendable — pedirle que mejore, ajuste o cambie lo que generó.

---

### La conversación iterativa: el secreto de los mejores resultados

Los usuarios más avanzados no mandan un prompt y aceptan la primera respuesta. En cambio, **van y vienen** con la IA, refinando el resultado hasta que queda exactamente como quieren.

Este proceso se llama **iteración**, y es muy natural:
1. Pedís algo.
2. La IA responde.
3. Vos decís qué está bien y qué querés cambiar.
4. La IA mejora.
5. Repetís hasta estar satisfecho.

No hay límite de veces que podés pedir ajustes dentro de una misma conversación.

---

### Frases mágicas para pedir mejoras

**Para acortar:**
- *"Está muy largo. Resumilo a la mitad."*
- *"Hacé una versión más corta, en máximo 3 oraciones."*
- *"Quedatecon lo esencial y sacá todo lo que no es necesario."*

**Para simplificar:**
- *"Usá palabras más simples, como si me hablaras a mí que no soy experto."*
- *"Explicalo de una manera más fácil de entender."*
- *"Sácale los términos técnicos."*

**Para expandir:**
- *"Me parece bien pero quiero más detalle en la parte de [X]."*
- *"Expandí el segundo punto, que quedó muy corto."*
- *"Agregale ejemplos concretos."*

**Para cambiar el tono:**
- *"Hacelo más formal."*
- *"Que suene más cálido y amigable."*
- *"Cambialo a un tono más serio."*
- *"Que sea más divertido y liviano."*

**Para cambiar el formato:**
- *"Ponelo en forma de lista en vez de párrafos."*
- *"Armalo como una tabla."*
- *"Escribilo como si fuera un mail, con saludo y despedida."*
- *"Organizalo con títulos y subtítulos."*

**Para corregir errores:**
- *"Cometiste un error: [describí el error]. Corregilo."*
- *"Eso no es así. La realidad es [X]. Reescribilo con esa corrección."*
- *"Esta parte no me convence: [citá la parte]. Reescribila."*

**Para explorar alternativas:**
- *"Está bien, pero dame 3 versiones diferentes de esto."*
- *"¿Podés escribir una versión más formal y una más informal?"*
- *"Dameotras opciones para el primer párrafo."*

---

### El truco de "hazlo otra vez pero..."

La frase más poderosa para iterar es:

**"Hacelo otra vez pero [cambio específico]."**

Ejemplos:
- *"Hacelo otra vez pero más corto."*
- *"Hacelo otra vez pero en tono más formal."*
- *"Hacelo otra vez pero explicando también por qué es importante."*
- *"Hacelo otra vez pero como si fuera para un grupo de WhatsApp."*

Esta frase le indica a la IA que mantenga lo esencial pero modifique un elemento específico.

---

### Ejemplo real de iteración

**Mensaje 1:** *"Escribime un mensaje para invitar a mis amigos al cumpleaños de mi marido."*

**Respuesta 1:** La IA escribe un mensaje genérico.

**Mensaje 2:** *"Bien, pero hacelo más divertido y agregá que es sorpresa."*

**Respuesta 2:** La IA lo reescribe con más humor y aclara que es sorpresa.

**Mensaje 3:** *"Perfecto. Ahora acortalo, que para WhatsApp está muy largo."*

**Respuesta 3:** La IA da una versión corta y lista para copiar.

En solo 3 turnos llegaste exactamente al resultado que necesitabas.

---

### Lo que NO tenés que hacer

- **No empezar de cero** cada vez que la respuesta no es perfecta. Mejor pedí el ajuste específico en el mismo chat.
- **No aceptar una respuesta mediocre** sin pedir mejoras. La IA no se ofende ni se cansa.
- **No ser vago al pedir correcciones.** En vez de *"No me gusta"*, decí exactamente qué no te gusta y por qué.

---

### Resumen

La conversación con la IA es un proceso de ida y vuelta. Las frases mágicas (**acortá, simplificá, expandí, cambiá el tono, ponelo en lista, dame alternativas**) te permiten afinar cualquier respuesta. El truco *"hazlo otra vez pero..."* es la herramienta más rápida para pedir un cambio específico.
`;

export const c5leccion5 = `
## Prompts para diferentes situaciones

En esta lección te damos una colección de prompts listos para copiar y pegar. Guardá los que más te sirvan: van a ahorrarte tiempo y van a darte respuestas mucho mejores desde el primer intento.

---

### Para comunicación personal

**Escribir un mensaje de WhatsApp:**
*"Necesito mandarle un mensaje a [persona] diciéndole que [situación]. Que sea [tono: cálido/formal/corto]. En no más de 3 oraciones."*

**Responder un mail difícil:**
*"Recibí este mail: [pegá el mail]. No sé cómo responder. Escribime una respuesta que sea amable pero firme, y que aclare [punto específico]."*

**Escribir una felicitación:**
*"Escribime un mensaje de felicitación de [cumpleaños/casamiento/nacimiento/jubilación] para [relación: amigo/familiar/colega]. Que sea [cálido y personal/formal/divertido]. Máximo 4 oraciones."*

**Disculparse:**
*"Necesito disculparme con [persona] por [motivo]. Ayudame a escribir un mensaje sincero que no suene forzado. Que tenga entre 3 y 5 oraciones."*

---

### Para el trabajo y trámites

**Escribir un correo formal:**
*"Escribime un correo formal para [institución/empresa] pidiendo [trámite/información/turno]. El tono debe ser respetuoso y profesional. Firmado por [tu nombre]."*

**Resumir un documento:**
*"Resumí el siguiente texto en 5 puntos principales, usando lenguaje simple: [pegá el texto]."*

**Preparar una reunión:**
*"Voy a reunirme con [persona/empresa] para hablar de [tema]. Ayudame a preparar 5 preguntas clave que debo hacerles."*

**Escribir un reclamo:**
*"Necesito escribir un reclamo formal a [empresa/institución] por [problema]. Que sea educado pero firme. Incluí una solicitud clara de solución."*

---

### Para salud y bienestar

**Entender un diagnóstico:**
*"Mi médico me dijo que tengo [condición]. Explicame en palabras simples qué significa, cuáles son los síntomas más comunes y qué preguntas debo hacerle en la próxima consulta."*

**Preparar preguntas para el médico:**
*"Voy al médico por [motivo]. Ayudame a preparar una lista de 5 preguntas importantes para hacerle durante la consulta."*

**Plan de alimentación:**
*"Necesito comer más sano. Tengo [restricciones: sin sal/sin azúcar/sin gluten]. Haceme un menú de 3 días simple, con alimentos fáciles de conseguir en Argentina."*

---

### Para aprender y explorar

**Aprender algo nuevo:**
*"Quiero entender qué es [tema]. Explicamelo paso a paso como si fuera la primera vez que lo escucho, usando ejemplos simples de la vida cotidiana."*

**Comparar opciones:**
*"¿Cuál es la diferencia entre [opción A] y [opción B]? Explicamelo en una tabla simple con pros y contras."*

**Explorar un tema histórico o cultural:**
*"Contame la historia de [tema: el tango / la Patagonia / el mate] de una manera entretenida, en no más de 5 párrafos."*

---

### Para organización personal

**Plan semanal:**
*"Ayudame a organizar mi semana. Tengo estas actividades: [listá tus actividades]. Haceme un horario distribuido de lunes a viernes, dejando tiempo para descanso."*

**Lista de tareas:**
*"Tengo que [situación: preparar una mudanza / organizar un evento / hacer trámites]. Haceme una lista de todas las tareas en orden de prioridad."*

**Tomar una decisión:**
*"Tengo que decidir entre [opción A] y [opción B]. Los pros de A son [X] y los de B son [Y]. Ayudame a analizar las dos opciones y sugerí cuál podría ser mejor para mí."*

---

### Consejo para usar estos prompts

Estos prompts funcionan mejor si los **personalizás** antes de enviarlos. Reemplazá las partes entre corchetes [ ] con tu información real y el resultado va a ser mucho más útil.

También podés combinarlos: por ejemplo, usar el prompt de "entender un diagnóstico" y luego, en el mismo chat, usar el de "preparar preguntas para el médico".

---

### Resumen

Tener una biblioteca de prompts listos te ahorra tiempo y garantiza mejores respuestas. Las categorías más útiles son: **comunicación personal, trabajo y trámites, salud, aprendizaje y organización**. Guardá los que más uses y personalizalos según tu situación.
`;

export const c5leccion6 = `
## Ejercicio: transformá 5 prompts malos en buenos

Este ejercicio es la mejor manera de solidificar todo lo que aprendiste en este curso. Vamos a tomar 5 prompts típicos que usan personas que recién empiezan, analizaremos qué está mal y veremos cómo transformarlos en prompts poderosos.

---

### ¿Cómo hacer el ejercicio?

Para cada prompt malo, primero **intentá mejorarlos vos mismo** antes de leer la versión mejorada. Recordá aplicar la fórmula: ROL + TAREA + CONTEXTO + FORMATO.

---

### Prompt 1 — Sobre salud

**Prompt original:**
*"¿Qué pasa con el corazón?"*

**¿Qué está mal?**
- No especifica qué aspecto del corazón.
- No hay contexto personal.
- La pregunta podría tener mil respuestas diferentes.

**Versión mejorada:**
*"Sos un cardiólogo que explica temas médicos a personas mayores. Tengo 67 años y me preocupa mi corazón porque tengo la presión alta. Explicame en palabras simples qué riesgos tiene la presión alta para el corazón y qué hábitos de vida me ayudan a cuidarlo. Hacé una lista de 5 consejos prácticos."*

**¿Qué mejoró?**
✅ ROL: cardiólogo que explica a mayores.
✅ CONTEXTO: 67 años, presión alta.
✅ TAREA: explicar riesgos + consejos.
✅ FORMATO: lista de 5 consejos.

---

### Prompt 2 — Sobre escritura

**Prompt original:**
*"Escribí algo para mi amiga."*

**¿Qué está mal?**
- ¿Qué tipo de mensaje?
- ¿Para qué ocasión?
- ¿Cuál es el tono?
- ¿Cuánto debe ser largo?

**Versión mejorada:**
*"Escribime un mensaje corto para mi amiga Rosa que acaba de perder a su perro. Quiero que sea cariñoso y que la haga sentir acompañada sin sonar exagerado. Máximo 4 oraciones. Usá un tono cálido y cercano."*

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
- ¿Qué ingredientes tenés?
- ¿Cuánto tiempo disponés?

**Versión mejorada:**
*"Sos un chef que cocina para adultos mayores. Tengo en casa: arroz, pollo, cebolla, zanahoria y ajo. Quiero cocinar para 2 personas. Dame una receta fácil, sin muchos pasos, que no lleve más de 40 minutos de preparación. Que sea sabrosa y saludable."*

**¿Qué mejoró?**
✅ ROL: chef especializado.
✅ CONTEXTO: ingredientes disponibles, cantidad de personas.
✅ RESTRICCIONES: fácil, máximo 40 minutos.
✅ OBJETIVO: sabrosa y saludable.

---

### Prompt 4 — Para aprender tecnología

**Prompt original:**
*"Explicame el WiFi."*

**¿Qué está mal?**
- ¿Qué nivel de explicación?
- ¿Para qué lo necesita saber?
- ¿Qué ya sabe la persona?

**Versión mejorada:**
*"Sos una maestra muy paciente. Explicame qué es el WiFi y cómo funciona, usando una comparación con algo de la vida cotidiana. Soy una persona de 68 años que nunca estudió tecnología. Quiero entenderlo para explicárselo a mis nietos. Usá un lenguaje muy simple, sin términos técnicos, en no más de 4 párrafos cortos."*

**¿Qué mejoró?**
✅ ROL: maestra paciente.
✅ CONTEXTO PERSONAL: 68 años, sin conocimientos técnicos.
✅ CONTEXTO DE USO: para explicar a nietos.
✅ FORMATO: simple, sin tecnicismos, 4 párrafos.

---

### Prompt 5 — Para organización

**Prompt original:**
*"Ayudame a organizar."*

**¿Qué está mal?**
- ¿Organizar qué?
- ¿En qué plazo?
- ¿Cuáles son las restricciones?

**Versión mejorada:**
*"Necesito organizar una reunión familiar para el cumpleaños de mi madre que cumple 80 años. Van a venir aproximadamente 20 personas, el evento es en mi casa y el presupuesto es limitado. Ayudame a hacer una lista de tareas organizadas por prioridad y por semana (tengo 3 semanas hasta el evento). Incluí la compra de comida, decoración, invitaciones y entretenimiento."*

**¿Qué mejoró?**
✅ EVENTO específico: cumpleaños de 80 años.
✅ CONTEXTO: 20 personas, en casa, presupuesto limitado.
✅ PLAZO: 3 semanas.
✅ FORMATO: lista organizada por semana.
✅ ÁREAS cubiertos: comida, decoración, invitaciones, entretenimiento.

---

### Reflexión final del ejercicio

Fijate que en todos los casos la transformación siguió el mismo proceso:
1. Identificar qué información faltaba.
2. Agregar contexto personal y de la situación.
3. Especificar el tipo de resultado y el formato.
4. Opcional: agregar un rol para la IA.

Con práctica, escribir buenos prompts se vuelve natural y rápido.

---

### Resumen

Los 5 prompts malos tenían en común que eran demasiado vagos y sin contexto. Las versiones mejoradas incluyen: **quién sos, qué querés exactamente, para qué lo necesitás, y cómo querés la respuesta**. Practicar este tipo de transformaciones es la forma más rápida de mejorar con la IA.
`;

export const c5leccion7 = `
## Quiz: Prompts efectivos

¡Llegaste al final del Curso 5! Es momento de revisar todo lo aprendido con este quiz de 10 preguntas. Leé cada pregunta, pensá tu respuesta y luego leé la explicación.

---

### Pregunta 1

**¿Cuál de estos NO es uno de los 4 ingredientes de la fórmula de un buen prompt?**

A) ROL
B) TAREA
C) VELOCIDAD
D) FORMATO

**Respuesta correcta: C) VELOCIDAD**

*La fórmula es ROL + TAREA + CONTEXTO + FORMATO. La velocidad no es un ingrediente de los prompts. Lo que sí podés especificar es el formato o la extensión de la respuesta.*

---

### Pregunta 2

**¿Cuál de estos prompts es el más efectivo?**

A) "Explicame la diabetes"
B) "¿Qué es la diabetes?"
C) "Sos un médico. Explicame en palabras simples qué es la diabetes tipo 2, sus síntomas principales y qué debo evitar comer. Hablame como si tuvieras 65 años sin conocimientos médicos."
D) "Hablame de enfermedades"

**Respuesta correcta: C)**

*La opción C incluye ROL (médico), TAREA (explicar qué es, síntomas y alimentación), CONTEXTO (65 años, sin conocimientos médicos) y una idea de FORMATO (palabras simples).*

---

### Pregunta 3

**¿Cuál es la frase más útil para pedir una versión modificada de la respuesta anterior?**

A) "No me gustó, empezá de nuevo."
B) "Hazlo otra vez pero más corto."
C) "Escribí algo mejor."
D) "Cambialo todo."

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

*La prueba consiste en preguntarte: "¿Si otra persona leyera esto sin saber nada de mi situación, podría responderlo bien?" Si la respuesta es no, necesitás agregar más contexto o detalle.*

---

### Pregunta 6

**¿Cuántas veces podés pedirle a la IA que mejore o ajuste su respuesta en una misma conversación?**

A) Solo una vez
B) Máximo 3 veces
C) Sin límite
D) Solo si pagas la versión premium

**Respuesta correcta: C) Sin límite**

*Podés iterar todas las veces que necesites dentro de una misma conversación. La IA no se cansa ni se ofende, y cada ajuste te acerca más al resultado que buscás.*

---

### Pregunta 7

**¿Qué hace el ROL en un prompt?**

A) Define el límite de palabras de la respuesta
B) Le indica a la IA desde qué perspectiva o expertise debe responder
C) Le pide a la IA que busque en internet
D) Configura el idioma de la respuesta

**Respuesta correcta: B) Le indica a la IA desde qué perspectiva o expertise debe responder**

*Al decirle "sos un médico" o "sos una maestra", la IA ajusta su vocabulario, tono y nivel de detalle para responder como ese tipo de experto.*

---

### Pregunta 8

**¿Cuál de estos prompts tiene demasiado poco contexto?**

A) "Tengo 68 años, vivo sola, tengo artritis en las rodillas y quiero saber qué ejercicios suaves puedo hacer sin dolor. Dame 5 opciones con instrucciones simples."
B) "Dame ejercicios."
C) "Dame 5 ejercicios suaves para adultos mayores con artritis, con instrucciones paso a paso."
D) "Sos un fisioterapeuta. Recomendame rutina de ejercicios para artritis."

**Respuesta correcta: B) "Dame ejercicios."**

*Este prompt no tiene contexto (¿para quién?, ¿qué tipo?, ¿con qué limitaciones?), no tiene tarea específica ni formato. Es el más vago de los cuatro.*

---

### Pregunta 9

**¿Cuál es la mejor manera de pedir que la IA simplifique una respuesta?**

A) "Está mal, reescribilo."
B) "No lo entiendo."
C) "Usá palabras más simples, como si me hablaras a mí que no soy experto en este tema."
D) "Menos palabras."

**Respuesta correcta: C)**

*Esta opción es específica y da contexto: qué querés (palabras simples) y por qué (no sos experto). Las demás opciones son demasiado vagas o poco informativas.*

---

### Pregunta 10

**¿Cuándo es útil usar un prompt más vago o amplio intencionalmente?**

A) Nunca, siempre hay que ser específico
B) Cuando querés explorar ideas o buscar inspiración sin una dirección fija
C) Cuando usás la versión gratuita
D) Cuando la IA no entiende español

**Respuesta correcta: B) Cuando querés explorar ideas o buscar inspiración sin una dirección fija**

*Un prompt más abierto puede ser útil para brainstorming o cuando querés sorprenderte con variedad de opciones. Pero para tareas concretas, siempre es mejor ser específico.*

---

### ¡Felicitaciones!

Completaste el Curso 5. Ahora sabés:
- La fórmula de 4 ingredientes para un buen prompt (ROL + TAREA + CONTEXTO + FORMATO).
- Cómo dar contexto de 5 tipos diferentes.
- Cómo ser específico para obtener mejores respuestas.
- Cómo iterar y pedir mejoras en una conversación.
- Prompts listos para usar en distintas situaciones de la vida cotidiana.

¡En el próximo curso vas a ver cómo aplicar todo esto en situaciones reales de tu vida diaria!
`;
