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
// BLOQUES 2 a 5 — plan de clase completo por sesión (2026-08-05).
// Cada sesión trae: para qué es, cómo corre, el ejercicio con arranques,
// cómo se verifica y qué se lleva la persona. La regla de todo el programa:
// se trabaja con material PROPIO, nunca con datos de cliente ni de tarjeta
// (sesión 3). El contenido puede profundizarse después sin tocar el plan.
// ---------------------------------------------------------------------------

// ── BLOQUE 2 · Tu trabajo, con la herramienta ──────────────────────────────

export const im5 = `### Hoy no hay ejemplos: hay tu documento

Hasta ahora escribiste cosas sueltas en la caja. Hoy traes un documento real —un manual, un procedimiento, una minuta larga, lo que uses de verdad— y trabajas sobre él. **Si tu documento tiene datos de cliente o de tarjeta, no es para hoy: elige otro.** Ésa es la regla de la sesión 3 y no se negocia.

### Cómo corre la sesión

Primeros diez minutos: eliges el documento y lo subes (o pegas el pedazo que importa). El resto de la hora es tuyo, con tres rondas guiadas.

**Ronda 1 — Pregúntale lo que le preguntarías a quien lo escribió:**

> Según este documento, ¿qué tengo que hacer si [la situación que siempre te genera duda]?

> ¿Qué dice este documento sobre [el tema]? Cítame la parte exacta.

**Ronda 2 — Pídele lo que nunca tienes tiempo de hacer:**

> Resume este documento en diez puntos para alguien que entra mañana al puesto.

> Haz una lista de todas las fechas límite / obligaciones / pasos que aparecen aquí.

**Ronda 3 — Ponlo a prueba.** Pregúntale algo cuya respuesta TÚ ya sabes. Compara.

### Cómo sabes que salió bien

La ronda 3 es la vara: si en lo que tú dominas contestó bien, las otras respuestas merecen confianza provisional — y verificación, como todo. Si contestó mal, encontraste el límite del documento o de la pregunta, y eso también es aprendizaje.

### Lo que te llevas

Una respuesta útil sacada de un documento tuyo, y la costumbre de citar: "dime dónde lo dice" convierte una respuesta bonita en una respuesta comprobable.`;

export const im6 = `### La lista desordenada que todos tenemos

Todos tenemos una: nombres pegados de un correo, pendientes anotados en tres formatos distintos, un pedazo de Excel que se pegó mal. Hoy la conviertes en una tabla con la que se puede trabajar. Trae la tuya. **Sin datos de cliente ni de tarjeta** — si tu lista los tiene, cámbiales el nombre antes de empezar (en la sesión 3 aprendiste cómo).

### El ejercicio

Pega tu lista tal cual está — no la limpies antes, ése es el punto — y pide la tabla:

> Convierte esto en una tabla con columnas [las que necesites]. Si algún dato no aparece, deja la celda vacía y márcala.

Mira lo que devuelve. Casi siempre hace falta una segunda vuelta:

> La columna [X] quedó mezclada con [Y]. Sepáralas. Y ordena por [criterio].

**La instrucción clave de hoy es "deja la celda vacía y márcala".** Sin ella, la herramienta tiende a rellenar huecos con cosas que suenan razonables — y una tabla con datos inventados es peor que una lista desordenada.

### Cómo sabes que salió bien

Cuenta las filas de tu lista original. Cuenta las de la tabla. ¿Coinciden? Elige tres filas al azar y compáralas dato por dato con el original. Si las tres están bien, la tabla pasa. Si una está mal, se lo dices y lo corrige — y vuelves a muestrear.

### Lo que te llevas

Tu propia lista, ordenada y comprobada — y el hábito de contar filas antes de confiar en una tabla que no armaste tú.`;

export const im7 = `### El reporte que rehaces cada semana

Hay un reporte —o un resumen, o un correo de estado— que armas a mano cada semana con los mismos pasos. Hoy lo haces una vez más, pero acompañado, y midiendo cuánto tiempo te toma de verdad.

### Cómo corre la sesión

**Primero, cinco minutos sin herramienta:** escribe los pasos de tu reporte como receta. De dónde sacas cada dato, qué calculas, qué formato lleva, a quién le llega. Esa receta vale más que el reporte: es la primera vez que tu proceso está escrito.

**Después, la herramienta entra en dos partes:**

> Éste es el formato de mi reporte semanal: [pega uno viejo, sin datos sensibles]. Éstos son los datos de esta semana: [pega los datos]. Ármalo con el mismo formato.

Lee el resultado con lupa la primera vez. Ajusta lo que salió distinto:

> El apartado [X] va siempre en ese orden. Los totales van al final. Vuelve a armarlo.

### Cómo sabes que salió bien

Los números del reporte armado tienen que ser LOS TUYOS: la herramienta ordena y redacta, pero cada cifra vino de lo que tú pegaste. Verifica los totales a mano una vez. Si cuadran, tienes el molde.

### Lo que te llevas

El reporte de esta semana hecho, tu receta escrita, y un dato que nadie tenía: cuántos minutos cuesta a mano. Ese número vuelve en la sesión 14.`;

export const im8 = `### Dónde se equivoca y cómo lo agarras

Ésta es la sesión más importante del bloque. En la sesión 1 te dijimos que el tono de seguridad no es señal de nada. Hoy lo compruebas con tus propias manos: vas a hacer que se equivoque, verlo, y armar tu manera de agarrarlo.

### Primera parte — provócalo

Pídele algo donde el error sea fácil de ver:

> ¿Cuántas letras tiene la palabra [una palabra larga]? Lístalas una por una.

> Suma esta columna de números: [pega quince números]. Dame el total y muéstrame la cuenta.

> ¿Qué dice el documento que te pegué sobre [algo que NO está en el documento]?

La tercera es la trampa importante: cuando le preguntas por algo que no está, la versión mala de la herramienta lo inventa. Mira si te lo inventa o si te dice "eso no aparece".

### Segunda parte — arma tu comprobación

Para cada tipo de trabajo que hiciste en las sesiones 5, 6 y 7, escribe UNA comprobación que puedas correr siempre:

- **Documento** → "cítame la parte exacta donde lo dice" y ve a mirarla.
- **Tabla** → contar filas + muestrear tres al azar.
- **Reporte** → verificar los totales a mano una vez.

### La regla que te llevas

**Confiar sin verificar no es usar la herramienta: es firmarle un cheque en blanco.** La verificación no es desconfianza — es exactamente lo que haces con un compañero nuevo las primeras semanas. Con el tiempo sabes qué le puedes delegar con los ojos cerrados y qué revisas siempre. Aquí es igual, con una diferencia: la herramienta nunca se ofende.`;

// ── BLOQUE 3 · Juntar, moldear, mirar ──────────────────────────────────────

export const im9 = `### La respuesta que hoy exige dos pantallas

Hay preguntas que nadie contesta rápido porque la información vive partida: la mitad en un sistema, la mitad en otro. Hoy juntas las dos mitades en un solo lugar y respondes una de esas preguntas. **Exporta o copia sólo lo que la regla de la sesión 3 permite** — si el cruce necesita datos de cliente, usa nombres cambiados o cantidades sin nombres.

### El ejercicio

Elige una pregunta tuya que hoy exija abrir dos pantallas. Copia de cada sistema el pedazo relevante:

> Éstos son mis datos de [sistema A]: [pega]. Éstos los de [sistema B]: [pega]. Crúzalos por [el campo común] y dime [tu pregunta].

Casi siempre el campo común viene sucio — nombres escritos distinto, códigos con y sin guiones. Ahí va la segunda instrucción:

> Estos dos campos son la misma cosa escrita distinto: [ejemplos]. Únelos de todas formas y márcame los que no pudiste emparejar.

**"Márcame los que no pudiste emparejar" es la frase de hoy.** Los no-emparejados son donde viven los errores.

### Cómo sabes que salió bien

Toma dos casos emparejados y verifícalos a mano contra los dos sistemas. Y mira la lista de no-emparejados: ¿tiene sentido que hayan quedado fuera? Si te empareja el 100% de golpe con datos sucios, sospecha.

### Lo que te llevas

Una respuesta que antes costaba dos pantallas y media hora — y la técnica del campo común sucio, que es el 80% de todo cruce real.`;

export const im10 = `### Lo que escribes una y otra vez

Hay textos que redactas casi iguales todas las semanas: el correo de seguimiento, la respuesta al proveedor, el aviso interno. Hoy conviertes el más frecuente en una plantilla que se llena sola.

### El ejercicio

Busca tres versiones viejas del mismo texto (tres correos de seguimiento distintos, por ejemplo). Pégalas:

> Estos tres textos son la misma cosa que escribo cada vez. Sácame la plantilla: qué parte es fija y qué partes cambian. Marca las que cambian como [CAMPO].

Revisa la plantilla que te devuelve. Tú sabes qué es fijo de verdad — corrígela. Después pruébala:

> Usa la plantilla con estos datos: [los del caso de esta semana].

Y la prueba de fuego: úsala para un caso RARO, uno que no encaja del todo. Ahí ves si la plantilla aguanta o si le falta un campo.

### Cómo sabes que salió bien

El texto del caso de esta semana salió listo para mandar, con tus palabras y no las de un robot. Si suena a robot, se lo dices: "así no escribo yo — más corto, sin tanta ceremonia" — y la plantilla mejora.

### Lo que te llevas

Tu plantilla, guardada donde la encuentres la próxima vez. En la sesión 17 vas a aprender a dejarla guardada DENTRO de la herramienta para no volver a pegarla.`;

export const im11 = `### Lo largo que nunca lees

A todos nos llega material que habría que leer y no se lee: el contrato de veinte páginas, la norma nueva, el informe del trimestre. Hoy tomas el que tengas pendiente y sales con lo que hay que decidir.

### El ejercicio

Sube o pega el documento. La primera pasada es panorámica:

> Resume esto en una página. Después dime: ¿qué me obliga a hacer algo? ¿qué fechas tiene? ¿qué es distinto a como se hacía antes?

La segunda pasada es la que importa — el interrogatorio:

> Sobre el punto [X]: cítame la parte exacta del documento donde lo dice.

> ¿Hay algo en este documento que contradiga esto: [pega tu procedimiento actual / lo que tú creías]?

**Un resumen sin citas es una opinión.** La diferencia entre "me lo resumió" y "lo puedo usar en una discusión" son las citas — pídelas siempre.

### Cómo sabes que salió bien

Ve a dos de las citas y compruébalas contra el documento. Si las dos existen y dicen lo que el resumen dice que dicen, el resumen es utilizable. Si una no aparece, ya sabes qué hacer: ronda de la sesión 8.

### Lo que te llevas

El documento largo convertido en media página de decisiones con citas — y quince minutos de lectura en vez de dos horas.`;

export const im12 = `### Convertirlo en una imagen

Un número en una tabla convence a quien ya estaba convencido. Una imagen clara le llega a todos. Hoy tomas datos tuyos —los de la tabla de la sesión 6 o el cruce de la 9 sirven— y sales con un gráfico que puedes mandar.

### El ejercicio

> Con estos datos: [pega tu tabla], dime qué tres gráficos contarían mejor la historia, y por qué.

Elige uno. Pide el gráfico. Y ahora viene la parte donde la mayoría se conforma y tú no:

> El título no dice nada: ponle uno que diga la conclusión, no el tema. Ordena las barras de mayor a menor. Quita [lo que sobre].

**Un buen título de gráfico es una oración con verbo.** "Ventas por mes" es un tema; "Las ventas caen desde marzo" es una conclusión. La persona que lo recibe lee el título y ya entendió.

### Cómo sabes que salió bien

Enséñale el gráfico a la persona de al lado cinco segundos y pregúntale qué entendió. Si dice la conclusión, está terminado. Si describe los ejes, le falta título.

Y una verificación que no se salta: los números del gráfico son los de TU tabla. Elige la barra más alta y compárala con el dato original.

### Lo que te llevas

Un gráfico tuyo, con título con verbo, que se puede mandar tal cual.`;

// ── BLOQUE 4 · Criterio: qué sí, qué no, cuánto vale ───────────────────────

export const im13 = `### Qué hay de raro en esta lista

Hasta ahora le pediste a la herramienta que haga cosas. Hoy le pides algo distinto: que MIRE. Detectar lo raro en un montón de datos es de las cosas que mejor hace — y de las que más verificación piden, porque "raro" es una opinión.

### El ejercicio

Toma una lista tuya con historia: gastos del mes, tiempos de entrega, pedidos, lo que tengas (regla de la sesión 3, como siempre).

> Éstos son [qué son] de [periodo]: [pega]. ¿Qué patrones ves? ¿Qué se sale de lo normal? Para cada cosa rara que encuentres, dime en qué fila está y por qué te parece rara.

La segunda vuelta es donde está el oficio — darle el contexto que no tiene:

> Lo de [X] es normal porque [motivo]. Sabiendo eso, ¿qué más ves?

**La herramienta ve patrones; tú sabes cuáles importan.** Sin tu contexto encuentra rarezas triviales; con tu contexto encuentra las que valen dinero.

### Cómo sabes que salió bien

De las anomalías que te señaló, al menos una te hizo decir "a ver, déjame ver eso". Ve a verla al sistema de verdad. Si resultó real, acabas de encontrar en veinte minutos lo que nadie tenía tiempo de buscar. Si resultó explicable, también sirvió: ahora la explicación está escrita.

### Lo que te llevas

Una anomalía real encontrada en datos tuyos, verificada contra la fuente — y la pregunta "¿qué ves de raro aquí?" incorporada a tu repertorio.`;

export const im14 = `### A dónde se va tu semana

Ésta es la sesión bisagra del programa: deja de mirar tareas sueltas y mira tu semana entera. El resultado es un mapa de qué se repite, cuánto cuesta y qué se podría delegar — a la herramienta o a nadie.

### El ejercicio

Primera parte, sin herramienta, quince minutos: lista todo lo que hiciste la semana pasada que ya habías hecho antes. Al lado de cada cosa: cuántas veces al mes, cuántos minutos cada vez. No lo pienses demasiado — mejor completo que exacto. (El reporte de la sesión 7 ya tiene su número medido: úsalo.)

Segunda parte, con herramienta:

> Ésta es mi lista de tareas repetitivas, con frecuencia y duración: [pega]. Calcula horas al mes de cada una y ordénalas de más a menos tiempo total. Después agrúpalas: ¿cuáles son del mismo tipo de trabajo?

Mira el número de arriba de la lista. Casi siempre sorprende.

### La conversación que sigue

> De las cinco de arriba, ¿cuáles se parecen a cosas que ya hice contigo en estas semanas?

La respuesta es tu borrador de candidatas para la sesión 15. Todavía no decidas nada — hoy sólo se mide.

### Lo que te llevas

El mapa de tu propio trabajo repetitivo, con horas al mes por tarea. Es la materia prima de las dos sesiones que vienen — y probablemente el documento más útil que has escrito sobre tu puesto.`;

export const im15 = `### Qué vale la pena automatizar

Tienes el mapa de la sesión 14. Hoy decides — con criterio y no con entusiasmo — cuáles de esas tareas valen el esfuerzo. La trampa habitual es elegir la más molesta; la correcta es elegir con tres preguntas.

### Las tres preguntas

Para cada candidata del mapa:

1. **¿Cuánto ahorra?** Horas al mes — ya lo mediste.
2. **¿Qué tan igual es cada vez?** Lo idéntico se automatiza fácil; lo que "depende" cuesta el triple.
3. **¿Qué pasa si sale mal una vez?** Un borrador interno que nadie revisó: molestia. Un dato mal mandado a un cliente: problema.

### El ejercicio

> Éstas son mis tareas con horas al mes: [pega el mapa]. Para cada una te digo qué tan igual es cada vez (1-5) y qué tan grave es un error (1-5): [tus notas]. Ordénalas: primero las de mucho ahorro, muy repetitivas y de error barato.

Discute el orden con la herramienta y contigo. Muévelo si tu contexto manda otra cosa — el criterio es tuyo; la cuenta es de ella.

### Cómo sabes que salió bien

Tu top 3 final cumple: ahorra horas de verdad, es casi igual cada vez, y un error se detecta antes de que duela. Si algo del top 3 falla la tercera pregunta, baja de lugar aunque duela.

### Lo que te llevas

Tus oportunidades ordenadas por criterio y no por entusiasmo — el insumo directo de tu proyecto del bloque 5.`;

export const im16 = `### Qué NO automatizar

La sesión más corta de leer y la más importante de respetar. Ayer elegiste qué sí; hoy escribes qué no — y por qué. El criterio es el compañero de la sesión 3: hay cosas que no se automatizan por datos, otras por riesgo, otras porque el juicio es el trabajo.

### Las cuatro razones para dejar algo como está

1. **Toca datos que no pueden salir** — cliente, tarjeta, nómina. La regla de la sesión 3 no tiene excepciones por conveniencia.
2. **El error es caro y silencioso** — si sale mal, nadie lo nota hasta que dolió. Lo que no tiene verificación natural, no se suelta.
3. **El juicio ES la tarea** — decidir a quién contratar, qué cliente priorizar, cómo dar una mala noticia. La herramienta puede preparar material; la decisión no se delega.
4. **Pasa tan poco que no paga** — automatizar lo trimestral suele costar más que hacerlo.

### El ejercicio

> Éstas son las tareas de mi mapa que NO pienso automatizar: [lista]. Para cada una te digo el motivo. Hazme de abogado del diablo: ¿en cuál me estoy equivocando, en un sentido o en el otro?

La discusión vale más que la lista. A veces te convence de que una era automatizable con salvaguardas; a veces te confirma que tu instinto era correcto. Las dos cosas son criterio ganado.

### Lo que te llevas

Una lista corta de cosas que se quedan como están, con el motivo escrito al lado. Cuando alguien pregunte "¿y por qué esto no?", la respuesta ya existe — y es tuya.`;

// ── BLOQUE 5 · De uso propio a cosa del equipo ─────────────────────────────

export const im17 = `### De un prompt que retipeas a algo guardado

Todo lo que armaste hasta aquí vive en conversaciones sueltas: la plantilla de la 10, la receta de la 7, la comprobación de la 8. Hoy lo conviertes en cosas guardadas, con nombre, que tú — y pronto tu equipo — pueden volver a usar sin reconstruirlas.

### El ejercicio

Elige tu mejor pieza de las semanas anteriores. Primero, endurécela:

> Éste es un prompt que uso mucho: [pega]. Reescríbelo para que cualquiera de mi equipo lo use: separa las instrucciones fijas de los datos que cambian cada vez, y marca los datos como [CAMPO].

Después, guárdala según lo que tu herramienta ofrezca (instrucciones fijas, proyectos, o un simple documento de equipo con los prompts numerados — la forma importa menos que el hábito). Ponle nombre de verdad: "Reporte semanal de [área] v1", no "prompt2".

Y la prueba definitiva: **pásasela a un compañero sin explicarle nada.** Si le funcionó a la primera, está bien guardada. Si te tuvo que preguntar, lo que te preguntó es lo que le falta al texto.

### Cómo sabes que salió bien

Otra persona corrió tu pieza y obtuvo un resultado del mismo nivel que el tuyo. Ésa es la diferencia entre "yo sé usar la herramienta" y "mi equipo tiene una capacidad nueva".

### Lo que te llevas

Una cosa guardada y nombrada que otra persona puede correr — tu primera pieza de infraestructura, aunque todavía no se llame así.`;

export const im18 = `### Cuando toca un sistema real

Hasta aquí todo pasó en la conversación: pegas, trabajas, copias de vuelta. El siguiente nivel — que la herramienta lea o escriba DIRECTO en un sistema de la empresa — existe, y no es tuyo para activarlo. Hoy aprendes qué implica y a quién se le pide.

### La diferencia que importa

Cuando pegas datos en la conversación, tú eres el filtro: elegiste qué entra y qué no. Cuando una herramienta se conecta a un sistema, el filtro tiene que estar construido — quién puede pedirle qué, qué puede ver, qué puede tocar, y qué queda registrado. Eso es trabajo de sistemas y seguridad, y es TODO el trabajo.

### El ejercicio

Toma tu candidata #1 de la sesión 15 y descríbela como pedido formal:

> Quiero proponer esta automatización: [descríbela]. Ayúdame a escribir el pedido: qué sistema toca, si lee o escribe, qué datos ve, qué puede salir mal, y qué necesitaría revisar el equipo de sistemas antes de decir que sí.

Lo que sale es un documento de una página. Compáralo con lo que hubieras mandado antes del programa ("¿me pueden conectar el chat al inventario?") y nota la diferencia.

### La regla

**Proponer es de todos; conectar es de sistemas.** Un pedido bien escrito con riesgos a la vista se aprueba rápido. Un "conéctame esto" sin más, se rechaza — y con razón.

### Lo que te llevas

Tu candidata #1 escrita como pedido serio, lista para la conversación real con quien aprueba — y saber exactamente a quién se le pide permiso antes de construir nada.`;

export const im19 = `### Sesión de construcción

Hoy no hay tema nuevo. Hoy se termina algo. Cada persona llega con su candidata elegida — la plantilla que faltaba endurecer, el reporte por armar de punta a punta, el cruce que quedó a medias — y sale con ella funcionando.

### Cómo corre la sesión

Los primeros cinco minutos, escribe en una línea qué vas a tener funcionando al final de la hora. En una línea: si no cabe, es más de una cosa — elige una.

El resto es taller. Trabajas en lo tuyo; el facilitador rota. Las reglas de siempre aplican solas a esta altura: material propio, sin datos vedados, verificación antes de dar por buena cualquier salida.

**Si te trabas, el protocolo es el del programa entero:**

1. Dile a la herramienta QUÉ intentabas y QUÉ salió — pídele el diagnóstico antes que la solución.
2. Si no destraba, pregunta al de al lado: ya hay veinte personas en este edificio que usan esto.
3. Si tampoco, el facilitador — para eso rota.

### Cómo sabes que salió bien

La línea que escribiste al principio, cumplida. Corriste tu pieza de punta a punta con datos de esta semana y el resultado es usable sin retoques — o con los retoques anotados para la v2.

### Lo que te llevas

Una cosa tuya, funcionando, construida por ti. No un ejercicio: una pieza que el lunes trabaja contigo.`;

export const im20 = `### El mapa de tu área

Última sesión. Diez semanas atrás escribiste tu primera cosa en una caja de texto; hoy escribes el documento que resume lo que viste desde adentro: las tres mejores oportunidades de tu área, ordenadas, con lo que necesita cada una. Éste es el resultado real del programa.

### El ejercicio

Junta tus piezas: el mapa de horas (14), la lista ordenada (15), la lista de lo que no (16), el pedido formal (18). Con eso:

> Con todo esto: [pega tus piezas], ayúdame a escribir el mapa de oportunidades de mi área. Para cada una de las tres mejores: qué es, cuántas horas al mes ahorra, qué necesita (herramienta, permiso, ayuda de sistemas), y qué riesgo hay que cuidar. Una página, para alguien que decide rápido.

Revísalo como lo que eres ahora: alguien que sabe verificar. ¿Las horas son las medidas o las deseadas? ¿Los riesgos son los reales? ¿Lo que pide sistemas está dicho claro?

### Qué pasa con el mapa

Se presenta. Los mapas de todos los grupos suben juntos y de ahí sale el plan de la siguiente etapa de la empresa con estas herramientas. Tu mapa compite por recursos reales: escríbelo como algo que quieres que gane.

### Lo que te llevas del programa

No es la herramienta — la herramienta va a cambiar de nombre y de precio veinte veces. Es el criterio: sabes pedirle, sabes verificarla, sabes qué delegarle y qué jamás, y sabes escribir la propuesta para que el siguiente paso exista. Eso ya no se te quita.`;
