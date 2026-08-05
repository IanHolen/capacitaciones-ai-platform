// AI Immersion Talks — contenido de las 20 sesiones (10 semanas, 2 por semana).
// Bloque 1 con contenido completo; bloques 2 a 5 en esqueleto (título, orden y objetivo).
//
// Material neutro: no contiene información de ninguna empresa en particular.
// No reproduce texto de los cursos existentes de la plataforma: donde el material ya
// existe aquí dentro, la lección APUNTA al curso correspondiente en vez de copiarlo.

import type { QuizQuestion } from "./cursos-data";

// ---------------------------------------------------------------------------
// BLOQUE 1 — Empezar de cero
// ---------------------------------------------------------------------------

export const im1 = `### No vamos a explicar nada todavía

Vamos a usarla, y en veinte minutos hablamos de qué pasó.

Abre la herramienta. Vas a ver una caja de texto. Escribe en ella como le escribirías a un compañero que acaba de entrar a la empresa: alguien despierto, que lee rápido, que no conoce tu trabajo todavía y al que le puedes preguntar lo que sea sin quedar mal.

**Escribe una sola cosa, y que sea tuya.** No un ejemplo del manual: algo de tu semana.

### Tres formas de arrancar

Por si la caja en blanco intimida:

> Explícame en palabras simples qué significa esto: [pega un párrafo que hayas leído en el trabajo y no te haya quedado claro]

> Tengo que escribir un correo para pedir [lo que sea] a [quién]. Escríbeme un primer borrador.

> Esta lista está desordenada. Ordénala por [lo que necesites]: [pega la lista]

Ahora lee la respuesta. Puede estar bien, puede estar a medias, puede estar mal. Las tres cosas son información útil y en las próximas semanas vas a aprender a distinguirlas.

**Lo importante de este primer momento es una sola cosa: no hay una manera correcta de escribirle.** No existe un comando. No hay una sintaxis. Si te entendió, estuvo bien escrito.

### Qué acaba de pasar

Lo que acabas de usar es un programa que aprendió a escribir leyendo una cantidad enorme de texto. Cuando le escribes, va armando la respuesta palabra por palabra según lo que encaja con lo que le pediste.

Eso explica de golpe tres cosas que vas a notar:

**Te entiende aunque escribas mal.** No busca palabras clave: entiende la intención. Puedes escribirle con faltas, a medias, en dos idiomas mezclados. Va a entender.

**Nunca contesta exactamente igual dos veces.** Si le preguntas lo mismo mañana, la respuesta va a ser parecida pero no idéntica. No está roto: no busca una respuesta guardada, la arma cada vez.

**A veces dice algo falso con toda seguridad.** Ésta es la importante y la vamos a trabajar entera en la sesión 8. Por ahora quédate con esto: **el tono de seguridad no es señal de nada.** Suena igual de convencido cuando acierta que cuando se equivoca.

### Y tres cosas que NO es

Cada una de éstas hace que alguien la use mal:

- **No es un buscador.** No te trae la página donde está la respuesta: te la escribe. Si necesitas la fuente, tienes que pedirla, y aun así verificarla.
- **No sabe nada de tu empresa** salvo lo que tú le pegues en la conversación. No está conectada a tus sistemas. No ve tus archivos. No sabe quiénes son tus clientes.
- **No es un experto.** Es alguien que leyó muchísimo y responde rápido. El criterio sobre si la respuesta sirve sigue siendo tuyo, y va a seguir siéndolo las diez semanas.

### Lo que te llevas hoy

Una cosa tuya, escrita por ti, con una respuesta que leíste. Mañana, cuando te trabes en algo que ya escribiste veinte veces, acuérdate de que esa caja está ahí.`;

export const im2 = `### De "me contestó" a "me contestó algo que puedo usar"

En la sesión anterior escribiste una línea y te contestó. Ahora vamos a hacer que esa respuesta llegue lista para usar. La diferencia casi nunca está en la herramienta: está en lo que le diste.

Casi todas las respuestas flojas vienen de lo mismo: **la pregunta era clara para ti y no para quien la lee.** Piensa otra vez en el compañero nuevo. Si le dices "hazme el reporte", te va a hacer algo. Probablemente no lo que querías, y no porque sea tonto.

### Las tres cosas que casi siempre faltan

**El contexto.** Para quién es, para qué se va a usar, qué pasó antes.

> Es para el jefe de mi área, que no conoce el detalle operativo y va a decidir con esto.

**Un ejemplo de lo que quieres.** Es lo que más rinde y lo que menos se hace. Si tienes uno anterior que sí sirvió, pégalo y di: "algo así, con este mismo tono y este mismo largo".

**El formato.** ¿Tabla o párrafos? ¿Tres líneas o una página? ¿Para leer o para pegar en un correo? Si no lo pides, te lo van a elegir.

### Y una cuarta, que no es de la primera pregunta sino de la segunda

**Corregir en vez de volver a empezar.** Cuando la respuesta viene a medias, casi todo el mundo borra todo y reescribe la pregunta desde cero. No hace falta. Dile qué estuvo mal:

> Está muy largo, déjalo en la mitad.

> El tono es demasiado formal para esta persona.

> Te faltó lo más importante, que es esto. Vuelve a hacerlo con eso adentro.

La conversación se acumula. Corregir tres veces suele llegar más lejos que escribir la pregunta perfecta de entrada, y es mucho menos trabajo.

### Para practicar por tu cuenta

El curso **Prompts efectivos** de esta misma plataforma trabaja esto en detalle, lección por lección: la anatomía de una buena petición, dar contexto, ser específico y pedir correcciones. **Es el acompañante autoasistido de esta sesión.** Hazlo antes de la próxima; es la mejor media hora que puedes invertir en todo el bloque.

### Lo que te llevas hoy

Toma la petición que escribiste en la sesión 1 y vuelve a hacerla con las tres cosas adentro: para quién es, un ejemplo de lo que quieres, y en qué formato. Compara las dos respuestas.

**Esa diferencia la hiciste tú, no la herramienta.**`;

export const im3 = `### Esta sesión es obligatoria

Es la única de las veinte que lo es. Quien falte hoy la repone antes de seguir.

No es burocracia: es la única parte del programa donde equivocarse tiene consecuencias afuera de la sala.

**La ponemos hoy porque ya sabes usarla y todavía no pegaste nada de verdad.** Dos semanas más tarde llegaría después del primer error.

### Qué pasa realmente cuando pegas algo

Sin dramatizar y sin minimizar: ese texto **sale de tu empresa y llega a un servidor de otra compañía**. Según la herramienta y según el plan contratado, puede quedar guardado un tiempo, puede que alguien lo revise para mejorar el servicio, y puede que se use para entrenar versiones futuras. Cambia de producto en producto y cambia con el tiempo.

De ahí sale la única regla que necesitas recordar, y resuelve casi todos los casos:

> **Si no lo escribirías en un correo a alguien de afuera de la empresa, no lo pegues ahí.**

No hace falta que te aprendas una lista. Es la misma prudencia que ya tienes, aplicada a una caja nueva.

### Lo que nunca se pega

**Datos que identifican a una persona.** Nombre completo junto con dirección, teléfono, correo personal, número de identificación, fecha de nacimiento. Un nombre suelto rara vez es un problema; un nombre **pegado a otro dato** es lo que identifica.

**Credenciales.** Contraseñas, tokens, llaves de acceso, cadenas de conexión. Nunca, en ninguna forma, ni "sólo para que me ayude a entender el error".

**Lo que la empresa trata como confidencial.** Contratos sin firmar, precios que no son públicos, condiciones con un proveedor, algo bajo acuerdo de confidencialidad, información de una persona del equipo.

**Y una que casi nadie ve venir: las capturas de pantalla.** Una imagen de una pantalla es exactamente igual de sensible que el texto que muestra. Si en la esquina se alcanza a leer el nombre y el correo de un cliente, acabas de pegar el nombre y el correo de un cliente.

### Datos de tarjeta: la línea es absoluta

**Nunca se pega en una herramienta de IA ningún dato de una tarjeta de pago.** Ni el número completo, ni la fecha de vencimiento, ni el código de tres dígitos del reverso, ni el nombre tal como aparece impreso, ni una foto de la tarjeta, ni un fragmento del número "para que me ayude a validar el formato".

Esto no es una política interna que alguien puso por precaución. Los datos de tarjeta están regulados por las reglas de la industria de pagos, que dicen dónde pueden vivir y quién puede tocarlos. **Una herramienta de IA de uso general no es uno de esos lugares.** Pegar un número de tarjeta ahí no es una imprudencia: es sacar un dato regulado de su perímetro.

Ojo con las formas indirectas, que son las que pasan de verdad:

- Una captura de una pantalla de cobro donde se ve el número, aunque sea a medias.
- Un archivo de transacciones que traes para "ver si encuentro el patrón" y que trae una columna con los números.
- Un mensaje de error pegado tal cual, con el dato adentro.
- Un correo de un cliente que mandó su número de tarjeta, que pasa, y que tú reenvías a la herramienta para que te ayude a redactar la respuesta.

**Los últimos cuatro dígitos** son un caso aparte y conviene decirlo: suelen tratarse distinto, precisamente porque no identifican la tarjeta. Aun así, **no lo decides tú**: lo decide la política de tu empresa. Si no la conoces, la respuesta por defecto es no.

### Datos de cliente

Un cliente es una persona, así que aplica todo lo anterior. Pero hay dos cosas propias:

**El volumen cambia la naturaleza del asunto.** El dato de un cliente pegado por error es un incidente. Un archivo con diez mil clientes pegado por comodidad es otra cosa completamente, aun cuando la intención sea idéntica. **Cuando lo que vas a pegar es un archivo entero, para.**

**Y la agregación identifica.** No hace falta el nombre. La ubicación, la fecha, el monto y la hora, juntos, muchas veces alcanzan para saber de quién estamos hablando. Quitar la columna del nombre no anonimiza nada por sí solo.

### Qué hacer en lugar de eso, y funciona igual de bien

Casi todo el trabajo real se puede hacer sin entregar el dato:

**Describe la estructura, no el contenido.**

> Tengo una tabla con fecha, monto, medio de pago y estado. Quiero encontrar las filas donde el estado no corresponde al medio de pago. ¿Cómo lo planteo?

Ahí no hay un solo cliente adentro, y la ayuda que recibes es exactamente la misma.

**Cambia los datos antes de pegarlos.** Reemplaza nombres por Cliente A, Cliente B. Corre las fechas. Redondea los montos. Si lo que buscas es el método, los datos falsos sirven igual.

**Pide la receta, no el resultado.** En vez de pegar el archivo para que te lo procese, pide la fórmula, el paso o el criterio, y aplícalo tú donde el dato ya está.

**Y cuando el dato de verdad tiene que entrar**, ese trabajo no se hace en una herramienta de uso general. Se hace en un sistema aprobado, con un acuerdo firmado y con alguien que lo autorizó. Ésa es exactamente la conversación de la sesión 18.

### Lo que sí puedes pegar, y es casi todo

- Tu propio borrador, tus propias notas, tu propio correo antes de mandarlo.
- Un texto público: una norma, un manual, un artículo, algo de la página de la empresa.
- Un problema descrito **sin los datos**: "tengo una lista de mil pedidos y necesito encontrar los que están duplicados" no lleva ningún pedido adentro.
- Datos **cambiados**: los mismos números con los nombres reemplazados.

Fíjate en lo que dice esa última: casi siempre **puedes pedir la ayuda sin entregar el dato**. Y esto no es una limitación del programa, es la técnica que vas a usar todas las semanas.

### Si ya pegaste algo

Pasa, y lo peor que puedes hacer es callarlo. Avisa a quien corresponda en tu empresa el mismo día. Borrar la conversación **no** garantiza que el dato desaparezca de todos lados, así que borrar y no decir nada es la peor combinación posible.

### Cuando no estés seguro

No adivines y no preguntes en el pasillo. Pregúntale a quien decide esto en tu empresa. La respuesta tarda un día; deshacer una fuga no se puede.

### Lo que te llevas hoy

Dos líneas duras: **ningún dato de tarjeta, nunca**, y **un archivo entero de clientes no se pega, se describe**. Y una técnica que vas a usar todas las semanas: describir la estructura en vez de entregar el contenido.`;

export const im4 = `### Cinco usos que ya puedes hacer con lo que sabes

Nada de esto es avanzado. Los cinco caben dentro de lo que ya viste, y los cinco están dentro de la línea de la sesión anterior. Sin esa sesión, ninguno de estos cinco es seguro; con ella, los cinco lo son.

**1. Resumir lo largo.** Un documento, un hilo de correo de veinte mensajes, una norma de cuarenta páginas. Pide el resumen **con el uso adentro**: "resúmelo para alguien que sólo tiene que decidir si aprueba o no" trae algo muy distinto a "resúmelo".

**2. Escribir el primer borrador.** No el final: el primero. El costo de arrancar de la hoja en blanco es real y desaparece. Después lo corriges, que es mucho más rápido que escribirlo.

**3. Traducir, y traducir bien.** No sólo el idioma. También del lenguaje técnico al lenguaje de alguien que decide, y del texto de un proveedor a lo que significa para tu área.

**4. Explicarte algo que nunca entendiste del todo.** El párrafo del contrato, el término que todos usan en las reuniones, la fórmula de ese archivo. Puedes preguntar tres veces seguidas sin que nadie se impaciente, y ésta es la que más gente termina usando de las cinco.

**5. Revisar antes de mandar.** Pégale tu propio texto y pídele que te diga qué quedó ambiguo, qué falta y qué se puede malinterpretar. Es la que menos se usa y la que más problemas evita.

### Fíjate en algo antes de irte

**Los cinco son cosas que ya haces.** Ninguno agrega trabajo nuevo; los cinco le quitan tiempo a algo que ya está en tu semana.

Ése es exactamente el tipo de oportunidad que vamos a aprender a encontrar solos en el bloque 4. El bloque 1 te enseña la herramienta. **El bloque 4 es el programa.**

### Para practicar por tu cuenta

Los cursos de uso cotidiano de esta plataforma cubren estos cinco usos con ejercicios paso a paso. **Son el acompañante autoasistido de este bloque**, y quedan disponibles para quien quiera practicar entre sesiones. Esta lección no los repite: te dice cuáles hacer y por qué.

### Lo que te llevas hoy

Elige **uno solo** de los cinco, el que más se parezca a algo que hiciste esta semana, y úsalo mañana en trabajo real.

**Uno usado vale más que cinco anotados.**

### Evaluación del bloque

El cuestionario que sigue cierra el bloque 1. La mitad de las preguntas son de la sesión 3, a propósito: es la única parte del bloque donde equivocarse tiene consecuencias afuera de la sala.`;

export const immersionBloque1Quiz: QuizQuestion[] = [
  {
    question:
      "Pides un resumen y llega demasiado largo y demasiado formal. ¿Qué haces?",
    options: [
      "Vuelves a escribir la petición desde cero.",
      "Le dices qué estuvo mal y pides que lo rehaga sobre lo que ya escribió.",
      "Lo acortas tú a mano.",
      "Pruebas con otra herramienta.",
    ],
    correctIndex: 1,
    explanation:
      "La conversación se acumula. Corregir sobre lo que ya escribió suele llegar más lejos que reescribir la petición perfecta, y es mucho menos trabajo.",
  },
  {
    question: "¿Cuál de estas cuatro cosas mejora más una respuesta floja?",
    options: [
      "Escribir sin faltas de ortografía.",
      "Usar palabras técnicas para que entienda mejor.",
      "Dar un ejemplo de lo que quieres.",
      "Hacer la pregunta más corta.",
    ],
    correctIndex: 2,
    explanation:
      "Dar un ejemplo es lo que más rinde y lo que menos se hace. La ortografía no importa: entiende la intención, no las palabras clave.",
  },
  {
    question: "Responde con mucha seguridad. Eso significa que...",
    options: [
      "está en lo correcto.",
      "encontró una fuente confiable.",
      "nada: suena igual de segura cuando se equivoca.",
      "la pregunta estaba bien hecha.",
    ],
    correctIndex: 2,
    explanation:
      "El tono de seguridad no es señal de nada. Suena igual de convencida cuando acierta que cuando se equivoca, y por eso la verificación se trabaja entera en la sesión 8.",
  },
  {
    question:
      "Necesitas ayuda para entender por qué falla un cobro. Tienes el mensaje de error, que incluye el número de tarjeta del cliente. ¿Qué haces?",
    options: [
      "Lo pegas completo; es un mensaje técnico.",
      "Pegas sólo los últimos cuatro dígitos.",
      "Quitas el número y pegas el resto del error.",
      "Pegas una captura en vez del texto.",
    ],
    correctIndex: 2,
    explanation:
      "Ningún dato de tarjeta entra, y que el texto sea técnico no cambia nada. Los últimos cuatro dígitos suelen tratarse distinto, pero eso lo decide la política de tu empresa, no tú. Y una captura es exactamente igual de sensible que el texto que muestra.",
  },
  {
    question: "¿Cuál de estas cuatro SÍ puedes pegar sin problema?",
    options: [
      "Una captura de tu pantalla donde se ve el listado de clientes.",
      "El archivo de transacciones del mes con los nombres quitados.",
      "La descripción de tu problema sin datos: tengo una lista de pedidos y necesito encontrar los duplicados.",
      "El correo de un cliente para que te ayude a redactar la respuesta.",
    ],
    correctIndex: 2,
    explanation:
      "Describir la estructura sin el contenido consigue la misma ayuda sin entregar un solo dato. Quitar la columna del nombre no anonimiza: la ubicación, la fecha y el monto juntos muchas veces alcanzan para identificar a alguien.",
  },
  {
    question:
      "Te das cuenta de que ayer pegaste datos de clientes. ¿Qué haces?",
    options: [
      "Borras la conversación y sigues.",
      "Nada; ya pasó.",
      "Avisas hoy mismo a quien corresponde en tu empresa.",
      "Esperas a ver si alguien lo nota.",
    ],
    correctIndex: 2,
    explanation:
      "Borrar no garantiza que el dato desaparezca de todos lados, así que borrar y callar es la peor combinación posible. Se avisa el mismo día.",
  },
];

// ---------------------------------------------------------------------------
// BLOQUES 2 a 5 — esqueleto aprobado (título, orden y objetivo).
// El contenido se escribe después de la decisión de idioma.
// ---------------------------------------------------------------------------

const esqueleto = (objetivo: string, seLleva: string) => `### En construcción

Esta sesión tiene definido su lugar en el arco y su objetivo. El contenido se escribe en la siguiente vuelta.

### Objetivo

${objetivo}

### Lo que se lleva la persona

${seLleva}`;

export const im5 = esqueleto(
  "Trabajar sobre un documento propio en vez de un ejemplo: subirlo, preguntarle cosas y sacar lo que sirve.",
  "Una respuesta útil sacada de un documento que trajo la persona.",
);

export const im6 = esqueleto(
  "Convertir una lista desordenada en una tabla limpia con la que se pueda trabajar.",
  "Su propia lista, ordenada.",
);

export const im7 = esqueleto(
  "Rehacer una vez, acompañados, ese reporte que se arma a mano todas las semanas.",
  "El reporte hecho, y la noción de cuánto tiempo ocupa de verdad.",
);

export const im8 = esqueleto(
  "Dónde se equivoca y cómo se agarra. Aprender a verificar en la misma quincena en que se aprende a confiar.",
  "Una comprobación propia que puede correr sobre cualquier respuesta.",
);

export const im9 = esqueleto(
  "Información partida entre dos sistemas, puesta lado a lado para responder una sola pregunta.",
  "Una respuesta que hoy exige abrir dos pantallas.",
);

export const im10 = esqueleto(
  "Lo que se escribe una y otra vez, convertido en una plantilla que se llena sola.",
  "Una plantilla suya, guardada.",
);

export const im11 = esqueleto(
  "Leer lo largo que nunca hay tiempo de leer, y sacar lo que hay que decidir.",
  "El documento largo, resumido para decidir.",
);

export const im12 = esqueleto(
  "Convertirlo en una imagen que otra persona va a leer y entender.",
  "Un gráfico propio que se puede mandar.",
);

export const im13 = esqueleto(
  "Detectar la excepción: qué hay de raro en esta lista.",
  "Una anomalía encontrada en datos propios.",
);

export const im14 = esqueleto(
  "Mapear a dónde se va la semana propia: qué se repite y cuánto cuesta.",
  "El mapa de su propio trabajo repetitivo.",
);

export const im15 = esqueleto(
  "Elegir qué vale la pena automatizar: esfuerzo, impacto y riesgo.",
  "Sus oportunidades, ordenadas por criterio y no por entusiasmo.",
);

export const im16 = esqueleto(
  "Decidir qué NO se automatiza. El criterio es el compañero de la sesión 3.",
  "Una lista corta de cosas que se dejan como están, con el motivo escrito.",
);

export const im17 = esqueleto(
  "De un prompt que se retipea a algo guardado, con nombre, que el equipo puede usar.",
  "Una cosa guardada y nombrada que otra persona puede correr.",
);

export const im18 = esqueleto(
  "Cuando tiene que tocar un sistema real: qué cuesta y quién lo tiene que aprobar.",
  "Saber a quién se le pide permiso antes de construir nada.",
);

export const im19 = esqueleto(
  "Sesión de construcción: cada persona termina una cosa.",
  "Una cosa suya, funcionando.",
);

export const im20 = esqueleto(
  "El mapa del área propia: tres oportunidades, ordenadas, con lo que necesita cada una.",
  "El mapa. Es el resultado real del programa.",
);
