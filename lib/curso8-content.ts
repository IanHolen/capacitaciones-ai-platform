// Contenido educativo del Curso 8: Trabaja con documentos e imágenes
// 6 lecciones — Nivel Intermedio, español LATAM, con acentos y ñ

export const c8leccion1 = `## Subir PDFs y analizarlos con IA

Una de las capacidades más útiles de las herramientas de IA modernas es la posibilidad de **subir archivos** — especialmente PDFs — y pedirle al modelo que los analice, resuma, busque información o responda preguntas sobre su contenido.

Si ya vienes usando ChatGPT, Claude o Gemini para hacer preguntas de texto, esto es el siguiente nivel: en vez de copiar y pegar fragmentos, le das el documento entero y dejás que la IA haga el trabajo pesado.

### Cómo subir archivos en cada plataforma

**ChatGPT (Plus/Team/Enterprise)**
- Haz clic en el ícono de clip (📎) en la barra de mensajes
- Selecciona el archivo PDF desde tu computadora
- Espera a que se cargue y después escribe tu prompt
- También puedes arrastrar y soltar el archivo directamente en la conversación

**Claude (Pro/Team)**
- Haz clic en el ícono de clip en la barra de mensajes
- Selecciona uno o más archivos (Claude permite subir hasta 5 archivos a la vez)
- Los archivos aparecen como adjuntos antes de enviar tu mensaje
- Claude soporta PDFs de hasta ~150 páginas dependiendo de la densidad del texto

**Gemini (Advanced)**
- Haz clic en el ícono "+" o el clip en la barra de mensajes
- Sube tu archivo PDF
- Gemini puede procesar documentos extensos gracias a su ventana de contexto grande

### ¿Qué puede hacer la IA con un PDF?

La IA puede:
- **Resumir** el documento completo o secciones específicas
- **Responder preguntas** sobre el contenido ("¿Cuál es la fecha de vencimiento del contrato?")
- **Extraer información** específica (montos, nombres, fechas, cláusulas)
- **Comparar** secciones dentro del mismo documento
- **Traducir** el contenido a otro idioma
- **Explicar** términos técnicos o legales en lenguaje simple
- **Reorganizar** la información en otro formato (tabla, lista, resumen ejecutivo)

### ¿Qué NO puede hacer bien?

- **PDFs escaneados de baja calidad**: Si el PDF es una imagen borrosa de un documento, la IA puede tener problemas para leer el texto
- **Documentos con mucho diseño gráfico**: Layouts complejos con columnas, tablas superpuestas o infografías pueden confundir al modelo
- **PDFs protegidos con contraseña**: La IA no puede abrir archivos encriptados
- **Documentos extremadamente largos**: Cada modelo tiene un límite. Si tu PDF tiene 500 páginas, probablemente tengas que dividirlo

### Límites prácticos que debes conocer

| Plataforma | Tamaño máximo | Páginas recomendadas | Formatos |
|---|---|---|---|
| ChatGPT | ~512 MB | Hasta ~100 págs. | PDF, DOCX, TXT, CSV, PPTX |
| Claude | ~30 MB | Hasta ~150 págs. | PDF, DOCX, TXT, CSV, RTF |
| Gemini | ~100 MB | Hasta ~1500 págs. | PDF, DOCX, TXT |

*Estos límites cambian frecuentemente. Siempre verifica la documentación oficial actualizada.*

### Prompts prácticos para copiar y pegar

**Resumen general:**
\`\`\`
Lee este documento PDF y haceme un resumen de máximo 300 palabras
con los puntos más importantes.
\`\`\`

**Búsqueda de cláusulas:**
\`\`\`
Revisa este contrato y encuentra todas las cláusulas relacionadas con
penalidades, multas o incumplimiento. Lista cada una con el número
de cláusula y un resumen en lenguaje simple.
\`\`\`

**Extracción de datos:**
\`\`\`
De este informe financiero, extrae los siguientes datos y presentalos
en una tabla: ingresos totales, gastos totales, resultado neto,
y período cubierto.
\`\`\`

**Preguntas específicas:**
\`\`\`
Según este documento, ¿cuáles son las obligaciones del cliente?
Listálas de forma numerada.
\`\`\`

**Simplificación:**
\`\`\`
Explicame este documento legal como si le estuvieras explicando
a alguien que no tiene formación jurídica. Usa lenguaje simple
y ejemplos cotidianos.
\`\`\`

### Consideraciones de privacidad

Antes de subir cualquier documento, piensa:

1. **¿Contiene información confidencial?** Contratos con datos de clientes, documentos internos de la empresa, información financiera sensible — todo esto podría ser procesado y almacenado por el proveedor de IA.

2. **¿Tu empresa lo permite?** Muchas organizaciones tienen políticas sobre qué información se puede compartir con herramientas de IA externas. Consulta antes.

3. **¿Puedes anonimizar?** Si necesitas analizar un contrato pero no quieres compartir los nombres reales, puedes reemplazarlos antes de subir el documento.

4. **Usa las opciones de privacidad disponibles:** ChatGPT tiene la opción de "no usar mis datos para entrenamiento" en la configuración. Claude no usa las conversaciones del plan Pro para entrenar sus modelos.

### Para llevar

- Subir PDFs a la IA te ahorra horas de lectura y análisis manual
- Cada plataforma tiene sus propios límites de tamaño y páginas
- La calidad del análisis depende de la calidad del PDF (texto seleccionable > imagen escaneada)
- Siempre verifica la información extraída — la IA puede cometer errores
- Piensa dos veces antes de subir documentos con información sensible`;

export const c8leccion2 = `## Resumir documentos largos

Uno de los usos más poderosos de la IA es tomar un documento de 50, 100 o 200 páginas y obtener un resumen claro en segundos. Pero no todos los resúmenes son iguales, y saber **cómo pedir** el resumen correcto hace toda la diferencia.

### El problema con "Resumime esto"

Si le dices a la IA simplemente "resume este documento", vas a obtener un resumen genérico que probablemente no sea exactamente lo que necesitas. Es como ir a un restaurante y decir "traéme algo de comer" — técnicamente te van a traer comida, pero quizás no lo que querías.

La clave esta en ser específico sobre:
- **Qué quieres saber** (todo el documento o solo una parte)
- **Qué extensión** quieres (un párrafo, media página, una página)
- **Para quién** es el resumen (para ti, tu jefe, un cliente)
- **En qué formato** lo necesitas (párrafo, bullets, tabla)

### Técnica 1: Resumen con extensión controlada

\`\`\`
Resume este documento en exactamente 5 bullet points.
Cada punto debe tener máximo 2 oraciones.
\`\`\`

\`\`\`
Haz un resumen ejecutivo de este informe en máximo 200 palabras.
Incluye: contexto, hallazgos principales y recomendaciones.
\`\`\`

\`\`\`
Resume este artículo en una sola oración que capture la idea central.
\`\`\`

### Técnica 2: Resumen con enfoque específico

En vez de resumir todo, pide que se enfoque en lo que te importa:

\`\`\`
Lee este contrato y resume únicamente las obligaciones del proveedor.
Ignora las cláusulas de pago y jurisdicción.
\`\`\`

\`\`\`
De este informe anual, resume solo la sección de riesgos y desafíos
identificados por la empresa. Omite los datos financieros.
\`\`\`

\`\`\`
Resume este paper académico enfocándote en: metodología utilizada,
resultados principales y limitaciones del estudio.
\`\`\`

### Técnica 3: Resumen progresivo (resumen de resúmenes)

Cuando un documento es **demasiado largo** para procesarlo de una sola vez, puedes usar la técnica de resumen progresivo:

**Paso 1:** Divide el documento en secciones (capítulos, partes, etc.)

**Paso 2:** Pide un resumen de cada sección:
\`\`\`
Resume el capítulo 1 de este documento en 3-4 bullet points.
\`\`\`

**Paso 3:** Una vez que tienes todos los resúmenes parciales, pide un resumen del resumen:
\`\`\`
A continuación te doy resúmenes de los 8 capítulos de un informe.
Crea un resumen ejecutivo unificado de máximo 500 palabras que
integre los puntos más importantes de todos los capítulos.

[Pega los resúmenes parciales]
\`\`\`

Esta técnica funciona especialmente bien para:
- Libros completos
- Informes anuales extensos
- Tesis o trabajos de investigación
- Documentación técnica de productos

### Técnica 4: Resumen comparativo

Si tienes dos o más documentos sobre el mismo tema:

\`\`\`
Te voy a dar dos artículos sobre el mismo tema. Necesito que:
1. Resumes cada artículo en 3 puntos clave
2. Identifica en qué coinciden
3. Identifica en qué se contradicen
4. Dime cuál tiene argumentos más sólidos y por qué
\`\`\`

### Plantillas de resumen por tipo de documento

**Para contratos:**
\`\`\`
Resume este contrato usando la siguiente estructura:
- Partes involucradas
- Objeto del contrato
- Duración y plazos
- Obligaciones de cada parte
- Penalidades por incumplimiento
- Condiciones de rescisión
\`\`\`

**Para informes y reportes:**
\`\`\`
Crea un resumen ejecutivo de este informe con:
- Objetivo del informe (1 oración)
- Hallazgos principales (3-5 bullets)
- Datos clave con números
- Recomendaciones
- Próximos pasos sugeridos
\`\`\`

**Para artículos académicos:**
\`\`\`
Resume este paper usando la estructura:
- Pregunta de investigación
- Metodología en lenguaje simple
- Resultados principales
- Limitaciones del estudio
- Implicaciones prácticas
\`\`\`

**Para artículos periodísticos:**
\`\`\`
Resume esta noticia respondiendo:
- ¿Qué pasó?
- ¿Quiénes están involucrados?
- ¿Cuándo y dónde?
- ¿Por qué es importante?
- ¿Qué se espera que pase después?
\`\`\`

### Errores comunes al resumir

1. **No dar contexto sobre el propósito**: No es lo mismo un resumen para una reunión de directorio que uno para estudio personal. Dile a la IA para qué lo necesitas.

2. **Confiar ciegamente en el resumen**: La IA puede omitir detalles importantes o malinterpretar matices. Si el documento es crítico (un contrato, un diagnóstico médico), usa el resumen como guía pero lee las partes clave tú mismo.

3. **No pedir que cite las fuentes**: Si necesitas verificar, pedile que indique en qué página o sección encontró cada punto.

\`\`\`
Resume este documento e indica entre paréntesis el número de página
donde se encuentra cada punto mencionado.
\`\`\`

4. **Resumir sin especificar idioma**: Si el documento esta en un idioma y quieres el resumen en otro, acláralo:

\`\`\`
Este documento esta en inglés. Necesito un resumen en español
de máximo 10 bullet points.
\`\`\`

### Para llevar

- Siempre especifica extensión, formato y enfoque del resumen
- Usa la técnica progresiva para documentos que exceden el límite de la IA
- Adapta la plantilla de resumen al tipo de documento
- Pide que cite las páginas o secciones si necesitas verificar
- Un buen resumen con IA te ahorra horas, pero no reemplaza la lectura de las partes críticas`;

export const c8leccion3 = `## Analizar imágenes con IA

Las herramientas de IA modernas no solo leen texto — también pueden **ver**. ChatGPT, Claude y Gemini tienen capacidades de visión que les permiten analizar fotografías, capturas de pantalla, gráficos, diagramas y mucho más.

Esta capacidad se conoce como **visión por computadora** o **modelos multimodales** (porque procesan múltiples tipos de datos: texto e imágenes).

### Cómo subir imágenes en cada plataforma

**ChatGPT (Plus/Team/Enterprise)**
- Haz clic en el ícono de clip y selecciona una imagen
- Formatos soportados: PNG, JPG, GIF, WEBP
- También puedes pegar una imagen directamente desde el portapapeles (Ctrl+V / Cmd+V)

**Claude (Pro/Team)**
- Haz clic en el ícono de clip y selecciona la imagen
- Formatos soportados: PNG, JPG, GIF, WEBP
- Puedes subir múltiples imágenes en un solo mensaje

**Gemini (Advanced)**
- Sube imágenes directamente o toma fotos desde el celular
- Gemini tiene integración nativa con Google Lens
- Formatos soportados: PNG, JPG, WEBP

### ¿Qué puede "ver" la IA?

**Con mucha precisión:**
- Texto impreso en imágenes (carteles, etiquetas, capturas de pantalla)
- Objetos comunes (personas, animales, vehículos, alimentos)
- Gráficos y charts (barras, líneas, tortas)
- Colores, formas y composición general
- Diagramas de flujo y organigramas
- Capturas de pantalla de interfaces y apps
- Tablas y datos estructurados en imágenes
- Código de programación en screenshots

**Con precisión moderada:**
- Texto manuscrito (depende mucho de la legibilidad)
- Texto pequeño o borroso
- Logos y marcas conocidas
- Emociones faciales generales
- Planos y mapas simples

**Con dificultad o imprecisión:**
- Texto en idiomas con caracteres complejos en baja resolución
- Relaciones espaciales muy precisas ("¿qué objeto esta exactamente 3 cm a la izquierda?")
- Conteo exacto de objetos numerosos ("¿cuántas personas hay en esta multitud?")
- Detección de manipulaciones o ediciones en fotos
- Identificación de personas específicas (por razones éticas, los modelos no identifican personas)

### Prompts prácticos para análisis de imágenes

**Descripción general:**
\`\`\`
Describe esta imagen en detalle. Incluye: qué se ve,
dónde parece estar tomada, y cualquier texto visible.
\`\`\`

**Análisis de gráficos:**
\`\`\`
Analiza este gráfico y dime:
1. ¿Qué tipo de gráfico es?
2. ¿Qué datos muestra?
3. ¿Cuál es la tendencia principal?
4. ¿Hay algo inusual o destacable?
5. Extrae los valores aproximados en una tabla.
\`\`\`

**Lectura de recibos y tickets:**
\`\`\`
Lee este recibo/ticket y extrae la siguiente información en formato
de tabla: fecha, comercio, lista de items con precios individuales,
subtotal, impuestos y total.
\`\`\`

**Análisis de capturas de pantalla:**
\`\`\`
Mira esta captura de pantalla y dime:
- ¿De qué aplicación o sitio web se trata?
- ¿Qué esta mostrando?
- ¿Hay errores visibles?
- ¿Qué acciones están disponibles?
\`\`\`

**Accesibilidad (alt text):**
\`\`\`
Genera un texto alternativo (alt text) para esta imagen,
apto para lectores de pantalla. Debe ser descriptivo pero conciso,
máximo 2 oraciones.
\`\`\`

**Análisis de diseño:**
\`\`\`
Analiza esta imagen como si fueras un diseñador gráfico. Comenta sobre:
- Composición y layout
- Paleta de colores utilizada
- Tipografía visible
- Jerarquía visual
- Posibles mejoras
\`\`\`

**Comparación de imágenes:**
\`\`\`
Te muestro dos imágenes. Necesito que:
1. Describás cada una brevemente
2. Listes las diferencias que encuentras
3. Listes las similitudes
\`\`\`

### Casos de uso prácticos

**1. Analizar dashboards y reportes visuales**
Tienes una captura de pantalla de un dashboard de ventas y necesitas un análisis rápido:
\`\`\`
Analiza este dashboard de ventas. Identifica:
- Las métricas principales y sus valores
- Tendencias positivas y negativas
- Cualquier dato que parezca preocupante
Presenta tu análisis como si fuera para una reunión de 5 minutos.
\`\`\`

**2. Traducir texto de imágenes**
Sacaste una foto de un menú en otro idioma:
\`\`\`
Lee el texto de esta imagen, identifica el idioma,
y tradúcelo al español. Mantén el formato original.
\`\`\`

**3. Entender diagramas técnicos**
Te pasaron un diagrama de flujo o un diagrama de arquitectura:
\`\`\`
Explicame este diagrama paso a paso, como si yo no tuviera
conocimiento técnico. ¿Qué proceso describe? ¿Cuáles son
los puntos de decisión?
\`\`\`

**4. Analizar fotos para accesibilidad**
Si trabajás en contenido web y necesitas descripciones:
\`\`\`
Para cada una de estas imágenes, genera:
1. Alt text corto (máximo 125 caracteres)
2. Descripción larga para contexto adicional
3. Sugerencia de caption para redes sociales
\`\`\`

### Consejos para mejores resultados

1. **Sube imágenes de buena resolución**: Cuanto más clara la imagen, mejor el análisis
2. **Recorta lo innecesario**: Si solo necesitas analizar una parte de la imagen, recortala antes de subirla
3. **Sé específico en tu prompt**: "Analiza esta imagen" es vago. "Lee el texto de la etiqueta y lista los ingredientes" es preciso
4. **Combina texto e imagen**: Puedes dar contexto adicional. "Esta es una factura de mi proveedor de internet. Extrae el monto total y la fecha de vencimiento."
5. **Verifica datos numéricos**: La IA puede leer mal números en imágenes. Si los datos son críticos, verifica manualmente

### Para llevar

- ChatGPT, Claude y Gemini pueden analizar imágenes con notable precisión
- Funcionan mejor con texto impreso claro, gráficos y capturas de pantalla
- Tienen limitaciones con texto muy pequeño, manuscrito y conteo de objetos
- Combina siempre la imagen con un prompt específico para obtener mejores resultados
- Verifica la información extraída, especialmente datos numéricos`;

export const c8leccion4 = `## Extraer datos de tablas y facturas

Una de las tareas más tediosas en cualquier trabajo es la **extracción manual de datos**: copiar números de una factura a una planilla, pasar datos de una tabla en PDF a Excel, o transcribir información de un recibo. La IA puede hacer esto en segundos.

### El poder de la extracción estructurada

La clave para extraer datos con IA es pedirle que te devuelva la información en un **formato estructurado** que puedas usar directamente. No le pidas que te "cuente" lo que dice la factura — pedile que te dé los datos en una tabla, CSV o JSON.

### Extracción de facturas y recibos

**Prompt básico para facturas:**
\`\`\`
Analiza esta factura y extrae los siguientes datos en formato de tabla:

| Campo | Valor |
|---|---|
| Número de factura | |
| Fecha de emisión | |
| Fecha de vencimiento | |
| Emisor (nombre y CUIT) | |
| Receptor (nombre y CUIT) | |
| Detalle de items | |
| Subtotal | |
| IVA | |
| Total | |
| Condición de pago | |
\`\`\`

**Prompt para múltiples facturas:**
\`\`\`
Te voy a mostrar 5 facturas. Para cada una extrae:
- Número de factura
- Fecha
- Proveedor
- Monto total
- Concepto principal

Presenta todo en una tabla unificada para que pueda copiarla
a una planilla de Excel.
\`\`\`

**Prompt para recibos de supermercado:**
\`\`\`
Lee este ticket de supermercado y crea una tabla con columnas:
Item | Cantidad | Precio unitario | Precio total

Al final incluye el subtotal, descuentos (si los hay) y total final.
\`\`\`

### Extracción de tablas de PDFs e imágenes

Cuando tienes una tabla en un PDF o captura de pantalla y necesitas los datos en formato utilizable:

**Formato tabla markdown:**
\`\`\`
Extrae la tabla que aparece en este documento y reproducila
en formato markdown, manteniendo todas las filas y columnas.
\`\`\`

**Formato CSV (para importar a Excel/Sheets):**
\`\`\`
Extrae todos los datos de esta tabla y devolvélos en formato CSV.
Usa punto y coma (;) como separador para que funcione bien
en Excel en español. La primera fila debe ser los encabezados.
\`\`\`

**Formato JSON (para uso técnico):**
\`\`\`
Extrae los datos de esta tabla en formato JSON. Cada fila debe ser
un objeto con las columnas como claves. Ejemplo de estructura:
[
  {"columna1": "valor", "columna2": "valor"},
  ...
]
\`\`\`

### Procesamiento de planillas y screenshots de Excel

A veces tienes una captura de pantalla de una planilla de Excel o Google Sheets:

\`\`\`
Mira esta captura de pantalla de una planilla. Necesito que:
1. Extraigas todos los datos visibles en formato de tabla
2. Identifiques las fórmulas que podrían estar en uso
   (basándote en los patrones de datos)
3. Señales cualquier dato que parezca inconsistente
\`\`\`

### Validación y verificación de datos extraídos

Este es un paso **crítico** que muchos se saltan. La IA puede cometer errores al leer números, especialmente:
- Confundir 0 con O, 1 con l, 5 con S
- Invertir dígitos (1234 → 1243)
- Perder decimales o agregar decimales inexistentes
- Malinterpretar formatos de fecha (01/02/2025: ¿enero 2 o febrero 1?)

**Prompt de validación:**
\`\`\`
Revisa los datos que acabas de extraer y haz las siguientes
verificaciones:
1. ¿Los subtotales suman correctamente el total?
2. ¿El IVA corresponde al porcentaje estándar sobre la base?
3. ¿Las cantidades × precios unitarios dan los precios totales?
4. ¿Hay algún dato que te resulte sospechoso o difícil de leer?
Marca con ⚠️ cualquier valor del que no estés seguro.
\`\`\`

**Prompt de doble verificación:**
\`\`\`
Mira de nuevo la imagen original y comparala con la tabla que
extrajiste. ¿Hay alguna diferencia? Lista cualquier corrección
que debas hacer.
\`\`\`

### Procesamiento en lote (batch)

Si necesitas procesar muchos documentos similares, la estrategia es:

**1. Define una plantilla primero:**
\`\`\`
Voy a mostrarte varias facturas de mi proveedor. Para cada una,
extrae los datos usando EXACTAMENTE este formato:

Factura: [número]
Fecha: [dd/mm/aaaa]
Monto: [monto con 2 decimales]
Concepto: [descripción breve]
Estado: [pagada/pendiente si se puede determinar]

Separalos con una línea "---" entre cada factura.
\`\`\`

**2. Procesa en grupos:**
Si tienes muchos documentos, sube de a 3-5 por conversación para evitar que la IA se confunda o pierda precisión.

**3. Pide un resumen consolidado al final:**
\`\`\`
Ahora con todas las facturas que procesamos, crea una tabla resumen
con: número de factura, fecha, proveedor, monto.
Agrega una fila final con el total de todos los montos.
Ordenalo por fecha de la más antigua a la más reciente.
\`\`\`

### Consejos avanzados

**Para facturas con mala calidad de imagen:**
\`\`\`
La calidad de esta imagen no es la mejor. Extrae los datos que puedas
leer con confianza y marca con [?] cualquier valor que no puedas
leer claramente.
\`\`\`

**Para documentos con formato no estándar:**
\`\`\`
Este documento no tiene un formato estándar de factura.
Primero describe qué ves en el documento, y después intenta
extraer los datos equivalentes a: emisor, receptor, fecha,
concepto, monto total.
\`\`\`

**Para convertir a formato contable:**
\`\`\`
Toma los datos de esta factura y convertílos a un asiento contable
con formato: Fecha | Cuenta | Debe | Haber
Usa el Plan de Cuentas estándar mexicano.
\`\`\`

### Para llevar

- Siempre pide los datos en un formato estructurado (tabla, CSV, JSON)
- Usa prompts de validación para verificar que los números extraídos sean correctos
- Marca con símbolos de advertencia los datos de lectura dudosa
- Procesa documentos en lote con una plantilla consistente
- Los datos numéricos son los más propensos a errores — verifica siempre los totales
- Cuanto mejor sea la calidad de la imagen o PDF, mejor sera la extracción`;

export const c8leccion5 = `## Proyectos con múltiples archivos

Hasta ahora trabajamos con un documento a la vez. Pero en la vida real, muchas veces necesitas que la IA trabaje con **varios documentos simultáneamente**: comparar contratos, cruzar datos de diferentes reportes, o analizar un conjunto de documentos relacionados.

### El desafío: contexto limitado

Cada modelo de IA tiene un **límite de contexto** — es decir, una cantidad máxima de texto que puede "tener en mente" al mismo tiempo. Piénsalo como la memoria de trabajo: cuantos más documentos le das, menos espacio tiene para razonar sobre ellos.

| Modelo | Ventana de contexto aproximada |
|---|---|
| ChatGPT (GPT-4o) | ~128K tokens (~90 páginas) |
| Claude (Sonnet/Opus) | ~200K tokens (~150 páginas) |
| Gemini (1.5 Pro) | ~1M tokens (~700 páginas) |

*1 token ≈ 0.75 palabras en español. Estos valores son aproximados y cambian con las actualizaciones.*

### Estrategia 1: Subir múltiples archivos en una conversación

La forma más directa es subir varios archivos y pedirle a la IA que los analice en conjunto:

\`\`\`
Te sube 3 archivos:
1. Contrato original (2023)
2. Addendum de modificación (2024)
3. Propuesta de renovación (2025)

Necesito que:
- Listes los cambios principales entre el contrato original y el addendum
- Compares las condiciones del addendum con la propuesta de renovación
- Identifica si hay cláusulas del contrato original que la renovación
  elimina o modifica
\`\`\`

\`\`\`
Te sube el informe de ventas Q1, Q2, Q3 y Q4 del 2025.
Quiero que:
1. Crees una tabla comparativa trimestre a trimestre
2. Identifiques tendencias de crecimiento o caída
3. Señales los productos con mejor y peor desempeño
4. Me des un resumen ejecutivo de todo el año
\`\`\`

### Estrategia 2: Usar ChatGPT Projects

**ChatGPT Projects** te permite organizar conversaciones y archivos bajo un mismo "proyecto":

**Cómo funciona:**
1. En ChatGPT, crea un nuevo Proyecto desde el menú lateral
2. Dale un nombre descriptivo (ej: "Análisis contratos proveedor X")
3. Sube los documentos al proyecto — quedan disponibles para TODAS las conversaciones dentro de ese proyecto
4. Agrega instrucciones del proyecto que se aplican automáticamente

**Instrucciones de proyecto ejemplo:**
\`\`\`
Eres un analista legal especializado en contratos comerciales.
Tienes acceso a los contratos de nuestro proveedor principal.
Siempre que respondas:
- Cita el documento y la cláusula específica
- Usa lenguaje simple, no jerga legal
- Si no estás seguro de algo, indicalo claramente
\`\`\`

**Ventaja:** No necesitas volver a subir los documentos en cada conversación nueva.

### Estrategia 3: Usar Claude Projects

**Claude Projects** funciona de manera similar:

1. En Claude, ve a la sección de "Projects"
2. Crea un nuevo proyecto y sube tus documentos
3. Define las instrucciones del proyecto (Claude las llama "Project Instructions")
4. Todas las conversaciones dentro del proyecto tienen acceso a los documentos

**Ejemplo de instrucciones:**
\`\`\`
Este proyecto contiene los documentos financieros de la empresa
para el año 2025. Cuando analices estos documentos:
- Usa pesos mexicanos como moneda por defecto
- Presenta los números con formato de miles (1.000.000)
- Si hay discrepancias entre documentos, señalalas
- Prioriza la precisión sobre la velocidad
\`\`\`

**Ventaja clave de Claude:** Su ventana de contexto más grande permite trabajar con documentos más extensos antes de perder precisión.

### Estrategia 4: Referencia cruzada entre documentos

Cuando necesitas cruzar información entre archivos:

\`\`\`
Tengo dos documentos:
- Documento A: Lista de empleados con sus salarios
- Documento B: Registro de asistencia del mes

Cruza la información y genera un reporte que muestre:
1. Empleados que tuvieron más de 3 ausencias
2. El costo estimado de las ausencias (salario diario × días ausentes)
3. Empleados que aparecen en un documento pero no en el otro
\`\`\`

\`\`\`
Compara estos dos presupuestos (Proveedor A y Proveedor B) y crea
una tabla comparativa que incluya:
- Items en común y diferencia de precio
- Items que solo ofrece uno de los proveedores
- Total de cada presupuesto
- Tu recomendación basada en precio y completitud
\`\`\`

### Estrategia 5: Organizar investigaciones grandes

Para proyectos de investigación o análisis extensos:

**Paso 1 — Indexa tus documentos:**
\`\`\`
Te voy a subir 10 artículos sobre [tema]. Para cada uno necesito
que anotes:
- Título
- Autor/fuente
- Fecha
- Argumento principal
- Datos clave mencionados

Guarda esta información como un "índice" que vamos a usar después.
\`\`\`

**Paso 2 — Haz preguntas cruzadas:**
\`\`\`
Basándote en el índice que armamos, ¿cuáles de los artículos
coinciden en que [X]? ¿Cuáles se contradicen? ¿Hay algún dato
que aparezca en múltiples fuentes?
\`\`\`

**Paso 3 — Sintetiza:**
\`\`\`
Usando toda la información de los 10 artículos, escribe un informe
de síntesis de 1 página que presente las conclusiones principales,
los puntos de acuerdo y los debates abiertos.
\`\`\`

### Limitaciones que debes conocer

1. **Pérdida de atención**: Cuantos más documentos le das, más probable es que la IA "se olvide" de detalles de alguno. Si notás respuestas imprecisas, recordale: "Revisa específicamente el documento X".

2. **Confusión entre documentos**: Con muchos archivos, la IA puede mezclar información. Siempre pide que cite de qué documento viene cada dato.

3. **Límites de carga**: Cada plataforma tiene un máximo de archivos por mensaje o por proyecto. Verifica los límites actuales.

4. **Formato importa**: Documentos en texto seleccionable (PDF nativo, DOCX) funcionan mucho mejor que documentos escaneados como imagen.

5. **Conversaciones largas pierden contexto**: Si una conversación se vuelve muy larga, la IA puede perder de vista los documentos originales. Mejor empezar una nueva conversación dentro del mismo proyecto.

### Tip profesional: la técnica del "briefing"

Antes de empezar un análisis complejo con múltiples documentos:

\`\`\`
Antes de empezar, confírmame que tienes acceso a los siguientes
documentos y dime brevemente qué contiene cada uno:
1. [nombre archivo 1]
2. [nombre archivo 2]
3. [nombre archivo 3]
\`\`\`

Esto te confirma que la IA cargó todo correctamente y entiende el contenido de cada archivo.

### Para llevar

- Subir múltiples archivos permite análisis cruzados poderosos
- ChatGPT Projects y Claude Projects son ideales para trabajos con muchos documentos
- Define instrucciones de proyecto para no repetir contexto
- Siempre pide que la IA cite de qué documento viene cada dato
- Cuantos más documentos, más importante es ser preciso en los prompts
- Si la conversación se alarga, empieza una nueva dentro del mismo proyecto`;

export const c8leccion6 = `## Quiz: Trabaja con documentos e imágenes

Llegaste a la evaluación final del Curso 8. Este quiz esta diseñado para que repases los conceptos más importantes que vimos a lo largo de las lecciones.

Durante este curso aprendiste a aprovechar una de las capacidades más prácticas de la IA: trabajar directamente con tus documentos e imágenes. Desde subir un PDF y obtener un resumen ejecutivo en segundos, hasta extraer datos de facturas y organizar proyectos complejos con múltiples archivos — estas son habilidades que puedes aplicar desde hoy en tu trabajo diario.

Recuerda los puntos clave: siempre especifica el formato de salida que necesitas, verifica los datos numéricos extraídos por la IA, ten en cuenta la privacidad antes de subir documentos sensibles, y usa las funciones de Proyectos (tanto en ChatGPT como en Claude) para organizar trabajos que involucren múltiples documentos.

¡Éxitos con el quiz! Ya tienes las herramientas para trabajar con documentos e imágenes como un profesional.`;
