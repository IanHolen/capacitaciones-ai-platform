// Contenido educativo del Curso 10: Crea tu propio asistente de IA
// 8 lecciones — Nivel Avanzado, español LATAM, con acentos y ñ

export const c10leccion1 = `## ¿Qué son los Custom GPTs y Claude Projects?

Hasta ahora usaste herramientas de IA como ChatGPT o Claude haciendo preguntas una por una. Pero hay algo mucho más poderoso: **crear tu propio asistente personalizado** que ya sabe quién eres, qué necesitas y cómo quieres que te responda.

### Custom GPTs (ChatGPT)

Un **Custom GPT** es una versión personalizada de ChatGPT que tú mismo configuras. Le puedes dar:

- **Instrucciones específicas**: "Eres un asistente de nutrición que responde en español, de forma breve y con emojis"
- **Documentos de referencia**: Subes un PDF con tu menú semanal, tus restricciones alimentarias, etc.
- **Acciones**: Puede conectarse a otras herramientas (calendario, emails, bases de datos)

Es como crear tu propio empleado digital que ya viene entrenado con la información que le diste.

### Claude Projects

**Claude Projects** funciona de manera similar pero con un enfoque diferente:

- Creas un "Proyecto" donde agrupas conversaciones relacionadas
- Le subes documentos que Claude puede consultar durante la conversación
- Defines "instrucciones del proyecto" que se aplican a todas las conversaciones dentro de ese proyecto

### ¿Cuál es la diferencia?

| Característica | Custom GPTs | Claude Projects |
|---|---|---|
| Plataforma | ChatGPT (OpenAI) | Claude (Anthropic) |
| Documentos | Sí, se suben al GPT | Sí, se agregan al proyecto |
| Instrucciones | System prompt personalizado | Instrucciones del proyecto |
| Compartir | Se puede publicar y compartir | Solo dentro de tu cuenta |
| Costo | Requiere ChatGPT Plus ($20/mes) | Plan gratuito limitado, Pro para más |
| Ideal para | Asistentes reutilizables | Proyectos con mucha documentación |

### ¿Para qué sirve tener un asistente propio?

Imagínate estos escenarios:

- **Un asistente para tu negocio** que conoce tus productos, precios y políticas de devolución
- **Un tutor personal** que sabe tu nivel de inglés y adapta las lecciones
- **Un asistente legal** que tiene cargados los contratos de tu empresa
- **Un chef personal** que conoce tus alergias y preferencias alimentarias

La ventaja es que no tienes que repetir toda tu información cada vez que inicias una conversación.

### Requisitos

- Para Custom GPTs: cuenta ChatGPT Plus ($20/mes) o Team/Enterprise
- Para Claude Projects: cuenta gratuita (limitada) o Pro ($20/mes)
- Los documentos deben estar en formatos comunes: PDF, TXT, DOCX, CSV

### Para llevar

- Custom GPTs y Claude Projects te permiten crear asistentes personalizados
- Les puedes dar instrucciones, documentos y personalidad
- Eliminan la necesidad de repetir contexto en cada conversación
- Son el primer paso hacia construir soluciones de IA para tu negocio`;

export const c10leccion2 = `## Crear tu primer Custom GPT paso a paso

Vamos a crear un Custom GPT desde cero. Al terminar esta lección vas a tener tu propio asistente funcionando.

### Paso 1: Acceder al creador de GPTs

1. Entra a **chatgpt.com** e inicia sesión
2. En el menú lateral izquierdo, busca **"Explore GPTs"** o **"GPTs"**
3. Haz clic en **"Create"** (Crear) en la esquina superior derecha
4. Se abre el editor con dos pestañas: **"Create"** y **"Configure"**

### Paso 2: La pestaña "Create" (modo fácil)

El modo Create te permite configurar tu GPT conversando con ChatGPT. Simplemente describe lo que quieres:

> "Quiero un asistente que me ayude a redactar emails profesionales en español. Debe ser formal pero no frío, y siempre ofrecer 2 versiones: una corta y una detallada."

ChatGPT te va a hacer preguntas para refinar tu GPT:
- ¿Cómo se llama?
- ¿Qué tono debe tener?
- ¿Hay algo que NO debe hacer?

### Paso 3: La pestaña "Configure" (modo detallado)

Acá tienes control total:

**Nombre**: El nombre de tu GPT (ej: "Asistente de Emails Profesionales")

**Descripción**: Una frase corta que explica qué hace

**Instrucciones**: El corazón de tu GPT. Acá escribes exactamente cómo debe comportarse:

\`\`\`
Eres un asistente de redacción de emails profesionales en español.

REGLAS:
- Siempre ofrece 2 versiones: corta (máximo 3 oraciones) y detallada
- Usa español latinoamericano formal
- Nunca incluyas información que el usuario no proporcionó
- Si falta contexto, pregunta antes de redactar
- Termina siempre preguntando: "¿Quieres que ajuste algo?"

FORMATO:
**Versión corta:**
[email breve]

**Versión detallada:**
[email completo]
\`\`\`

**Conversation starters**: Frases de ejemplo que aparecen cuando alguien abre tu GPT:
- "Necesito rechazar una reunión de forma educada"
- "Ayudame a pedir un aumento de sueldo"
- "Quiero reclamar un servicio defectuoso"

**Knowledge**: Acá subes documentos (lo vemos en la Lección 4)

**Capabilities**: Puedes habilitar navegación web, generación de imágenes, y ejecución de código

### Paso 4: Probar tu GPT

En el panel derecho hay una vista previa en tiempo real. Prueba con diferentes preguntas y ajusta las instrucciones hasta que estés satisfecho.

### Paso 5: Guardar

Haz clic en **"Save"** y elige:
- **Only me**: Solo tú puedes usarlo
- **Anyone with a link**: Cualquiera con el enlace
- **Everyone**: Publicado en la tienda de GPTs

### Ejemplo completo

Vamos a crear un GPT llamado **"Mi Nutricionista IA"**:

- **Nombre**: Mi Nutricionista IA
- **Descripción**: Asistente de alimentación saludable personalizado
- **Instrucciones**: "Eres un nutricionista amigable. Respondes en español LATAM. Siempre preguntas por alergias antes de recomendar. Usas listas con emojis. No reemplazas a un profesional real — siempre aclaras eso."

### Para llevar

- Crear un Custom GPT toma menos de 15 minutos
- El modo "Create" es más fácil; el modo "Configure" da más control
- Las instrucciones son la parte más importante — dedícales tiempo
- Siempre prueba tu GPT antes de compartirlo`;

export const c10leccion3 = `## Configurar instrucciones personalizadas

Las instrucciones son el alma de tu asistente. Son las reglas que definen cómo piensa, responde y se comporta. Unas buenas instrucciones hacen la diferencia entre un asistente mediocre y uno excelente.

### La estructura de buenas instrucciones

Usa esta plantilla como base:

\`\`\`
## Identidad
Eres [quién es], especializado en [qué hace].

## Audiencia
Tu usuario típico es [descripción del usuario].

## Reglas de comportamiento
- [Regla 1]
- [Regla 2]
- [Regla 3]

## Formato de respuesta
[Cómo debe estructurar las respuestas]

## Lo que NUNCA debe hacer
- [Restricción 1]
- [Restricción 2]

## Manejo de errores
Cuando no sepas algo, di: "[frase específica]"
\`\`\`

### Ejemplo real: Asistente de atención al cliente

\`\`\`
## Identidad
Eres el asistente virtual de "Café Don Pedro", una cafetería artesanal en Ciudad de México.

## Audiencia
Clientes que quieren hacer pedidos, preguntar por el menú o resolver dudas sobre entregas.

## Reglas
- Siempre saluda de forma cálida
- Responde solo sobre nuestros productos y servicios
- Si preguntan algo fuera de tu alcance, di: "Para eso te recomiendo contactar a nuestro equipo en info@cafedonpedro.com"
- Los precios son en pesos mexicanos
- Horario de atención: lunes a sábado de 8 a 20hs

## Formato
- Respuestas cortas (máximo 4 oraciones)
- Usa viñetas para listar opciones
- Termina con una pregunta: "¿Te puedo ayudar con algo más?"

## NUNCA
- Inventar productos que no tenemos
- Dar información sobre la competencia
- Ofrecer descuentos que no existen
- Procesar pagos directamente

## Cuando no sepas
"No tengo esa información disponible. ¿Quieres que te pase con nuestro equipo?"
\`\`\`

### Técnicas avanzadas de instrucciones

**1. Cadena de pensamiento forzada**
> "Antes de responder, piensa paso a paso: 1) ¿Qué está pidiendo el usuario? 2) ¿Tengo la información necesaria? 3) ¿Mi respuesta es precisa?"

**2. Ejemplos incluidos (few-shot)**
> "Ejemplo de buena respuesta: 'Nuestro café de especialidad tiene notas de chocolate y nuez. ¿Prefieres en grano o molido?'"

**3. Variables dinámicas**
> "Si el usuario menciona su nombre, úsalo en las respuestas. Si dice 'Soy María', responde 'María, te cuento que...'"

**4. Tono calibrado**
> "Tono: profesional pero cercano. Como un barista amigable que conoce su oficio. Evita ser robótico o excesivamente formal."

### Errores comunes en instrucciones

| Error | Ejemplo | Corrección |
|---|---|---|
| Muy vago | "Sé amable" | "Usa un tono cálido, incluye el nombre del cliente, y termina con una pregunta" |
| Contradictorio | "Sé breve" + "Explica todo en detalle" | Define cuándo ser breve y cuándo ser detallado |
| Sin límites | "Responde todo" | "Responde solo sobre [tema]. Para lo demás, redirige a [recurso]" |
| Sin formato | (nada) | "Usa viñetas, negrita para conceptos clave, y párrafos cortos" |

### Para llevar

- Las instrucciones bien escritas son la clave de un buen asistente
- Usa la plantilla de 6 secciones como base
- Incluye ejemplos concretos y restricciones claras
- Itera: prueba, detecta fallos, y ajusta las instrucciones`;

export const c10leccion4 = `## Subir documentos como base de conocimiento

Tu asistente es tan bueno como la información que tiene. Al subirle documentos, le das acceso a datos específicos que no tiene por defecto — como tu catálogo de productos, tus procedimientos internos o tu historial de clientes.

### ¿Cómo funciona?

Cuando subes un documento a tu Custom GPT o Claude Project, la IA puede:

1. **Buscar información** dentro del documento cuando le haces una pregunta
2. **Citar** partes relevantes del documento en sus respuestas
3. **Combinar** información de múltiples documentos
4. **Resumir** secciones específicas

### Formatos soportados

| Formato | Custom GPTs | Claude Projects |
|---|---|---|
| PDF | ✅ | ✅ |
| TXT | ✅ | ✅ |
| DOCX | ✅ | ✅ |
| CSV | ✅ | ✅ |
| Imágenes | ✅ (con visión) | ✅ |
| HTML | ✅ | ✅ |
| JSON | ✅ | ✅ |

### Paso a paso: subir documentos en Custom GPTs

1. Abre tu GPT en modo edición (Configure)
2. Busca la sección **"Knowledge"**
3. Haz clic en **"Upload files"**
4. Selecciona tus archivos (máximo 20 archivos, 512MB en total)
5. Guarda los cambios

### Paso a paso: subir documentos en Claude Projects

1. Ve a **claude.ai** y abre tu proyecto
2. En el panel lateral, busca **"Project knowledge"**
3. Haz clic en **"Add content"**
4. Puedes subir archivos o pegar texto directamente
5. El contenido queda disponible para todas las conversaciones del proyecto

### Buenas prácticas para documentos

**1. Organiza la información**
- Un documento por tema es mejor que un documento gigante
- Usa títulos claros y secciones numeradas
- Incluye un índice si el documento es largo

**2. Formatos limpios**
- PDFs con texto seleccionable (no escaneados)
- CSVs con encabezados claros en la primera fila
- Texto sin formato raro o caracteres especiales

**3. Actualización**
- Revisa tus documentos periódicamente
- Si los precios cambian, actualiza el catálogo
- Elimina documentos obsoletos

### Ejemplo práctico: Asistente de soporte técnico

Documentos que subirías:

1. **FAQ.pdf** — Preguntas frecuentes y sus respuestas
2. **manual-producto.pdf** — Manual completo del producto
3. **troubleshooting.csv** — Tabla de problemas comunes y soluciones
4. **politicas-devolucion.txt** — Políticas de garantía y devolución

Con estos 4 documentos, tu asistente puede resolver el 80% de las consultas de soporte sin intervención humana.

### Limitaciones importantes

- La IA no "memoriza" los documentos — los busca cada vez que los necesita
- Documentos muy largos pueden no procesarse completamente
- La información sensible (datos de clientes, contraseñas) NO debe subirse
- Los documentos no se actualizan solos — tú tienes que reemplazarlos

### Para llevar

- Los documentos convierten a tu asistente en un experto en tu dominio
- Usa formatos limpios y organizados
- Separa la información por temas en archivos distintos
- Nunca subas información sensible o confidencial
- Actualiza los documentos cuando cambie la información`;

export const c10leccion5 = `## Conectar tu asistente a datos reales (RAG básico)

Hasta ahora tu asistente trabaja con documentos estáticos que le subiste. Pero, ¿qué pasa si necesitas que acceda a información que cambia constantemente? Para eso existe **RAG** (Retrieval-Augmented Generation).

### ¿Qué es RAG?

**RAG** es una técnica que combina dos cosas:

1. **Retrieval** (Búsqueda): Buscar información relevante en una base de datos
2. **Generation** (Generación): Usar esa información para generar una respuesta

En palabras simples: en vez de que la IA responda de memoria, primero busca la información actualizada y después responde basándose en lo que encontró.

### Analogía

Imagina a un bibliotecario:
- **Sin RAG**: Te responde de memoria. A veces se acuerda bien, a veces inventa.
- **Con RAG**: Antes de responderte, busca en los libros el dato exacto, y después te lo explica.

### ¿Cuándo necesitas RAG?

- Tu información cambia frecuentemente (precios, stock, noticias)
- Tienes más documentos de los que caben en un Custom GPT
- Necesitas respuestas precisas basadas en datos actualizados
- Quieres reducir las "alucinaciones" de la IA

### RAG simplificado: opciones sin código

No necesitas ser programador para usar RAG. Estas herramientas lo hacen accesible:

**1. ChatGPT con búsqueda web**
- Activa "Browse with Bing" en tu Custom GPT
- El GPT busca en internet antes de responder
- Útil para información que cambia (clima, noticias, precios)

**2. Claude con documentos grandes**
- Claude puede procesar hasta 200,000 tokens (equivalente a ~150,000 palabras)
- Sube documentos extensos directamente al proyecto
- Claude los busca automáticamente al responder

**3. Herramientas especializadas**
- **CustomGPT.ai**: Crea chatbots con RAG desde una URL o documentos
- **Chatbase**: Similar, enfocado en sitios web
- **Notion AI**: RAG integrado en tu workspace de Notion

### El concepto de embeddings (simplificado)

Cuando usas RAG, la información se convierte en **embeddings** — representaciones numéricas del texto que permiten buscar por significado, no solo por palabras exactas.

Ejemplo:
- Buscas: "¿Cuánto sale el café?"
- El sistema encuentra: "Nuestro café de especialidad tiene un precio de $3,500"
- Funciona porque ambas frases hablan del mismo concepto, aunque usen palabras diferentes

### Ejemplo práctico

Quieres crear un asistente para tu tienda online que responda preguntas sobre productos:

1. **Exportas tu catálogo** a un CSV (nombre, descripción, precio, stock)
2. **Lo subes** a tu Custom GPT o herramienta de RAG
3. **Configuras las instrucciones**: "Cuando pregunten por un producto, busca en el catálogo y responde con nombre, precio y disponibilidad"
4. **Resultado**: El cliente pregunta "¿Tienen café colombiano?" y tu asistente responde con datos reales de tu catálogo

### Para llevar

- RAG permite que tu asistente acceda a información actualizada
- No necesitas programar — hay herramientas no-code disponibles
- Es especialmente útil cuando la información cambia frecuentemente
- Reduce significativamente las alucinaciones de la IA`;

export const c10leccion6 = `## Probar y mejorar tu asistente

Creaste tu asistente, le diste instrucciones y le subiste documentos. Ahora viene la parte más importante: **probarlo como si fueras un usuario real** y mejorarlo basándote en lo que encuentras.

### El ciclo de mejora continua

\`\`\`
Probar → Identificar problemas → Ajustar instrucciones → Probar de nuevo
\`\`\`

Este ciclo nunca termina realmente. Siempre vas a encontrar formas de mejorar tu asistente.

### Cómo probar efectivamente

**1. Prueba el camino feliz**
Haz las preguntas que esperas que hagan tus usuarios:
- "¿Cuánto cuesta el producto X?"
- "¿Cuál es el horario de atención?"
- "Quiero hacer un pedido"

**2. Prueba los casos límite**
Haz preguntas difíciles, ambiguas o inesperadas:
- "¿Eres un robot?"
- "Hablame en inglés"
- "Quiero quejarme de todo"
- "¿Cuál es tu contraseña?"

**3. Prueba las restricciones**
Intenta que tu asistente haga cosas que NO debería:
- Pídele información que no tiene
- Pídele que hable de la competencia
- Pídele que invente datos

**4. Prueba con usuarios reales**
Pídele a un amigo o colega que lo use sin instrucciones previas. Observa:
- ¿Entiende cómo usarlo?
- ¿Las respuestas son útiles?
- ¿Se frustra en algún momento?

### Problemas comunes y soluciones

| Problema | Causa probable | Solución |
|---|---|---|
| Respuestas muy largas | Falta de límite | Agregar: "Máximo 4 oraciones por respuesta" |
| Inventa información | Documentos insuficientes | Agregar más documentos + instrucción "Si no sabes, di que no sabes" |
| Ignora instrucciones | Instrucciones muy largas | Simplificar y priorizar las más importantes |
| Tono inconsistente | Falta de ejemplos | Agregar 2-3 ejemplos de respuestas ideales |
| No usa los documentos | Documentos mal formateados | Reformatear con títulos claros y estructura |

### Métricas para evaluar

- **Tasa de respuestas útiles**: ¿Cuántas respuestas realmente resolvieron la pregunta?
- **Tasa de escalación**: ¿Cuántas veces tuvo que derivar a un humano?
- **Satisfacción**: ¿Los usuarios quedaron conformes?
- **Precisión**: ¿Las respuestas son correctas?

### Para llevar

- Probar es tan importante como crear
- Prueba el camino feliz, los casos límite y las restricciones
- Pide feedback de usuarios reales
- Itera constantemente: pequeños ajustes hacen grandes diferencias`;

export const c10leccion7 = `## Compartir tu asistente con otros

Ya tienes un asistente probado y pulido. Ahora es momento de ponerlo a trabajar para otros — tu equipo, tus clientes o el mundo entero.

### Opciones de distribución en Custom GPTs

**1. Solo para ti (Private)**
- Nadie más puede acceder
- Ideal para asistentes personales o en desarrollo

**2. Con enlace (Anyone with a link)**
- Cualquiera con el link puede usarlo
- No aparece en la tienda pública
- Ideal para compartir con tu equipo o clientes específicos

**3. Público (Everyone)**
- Disponible en la tienda de GPTs de OpenAI
- Cualquiera puede encontrarlo y usarlo
- Ideal si quieres exposición

### Cómo compartir

1. Abre tu GPT en modo edición
2. Haz clic en **"Save"**
3. Elige el nivel de acceso
4. Copia el enlace generado
5. Compártelo por email, WhatsApp, o donde necesites

### Distribución en Claude Projects

Claude Projects actualmente son más privados:
- Solo están disponibles dentro de tu cuenta
- Puedes compartir conversaciones individuales por enlace
- Para uso en equipo, necesitas un plan Team

### Embeber tu asistente en un sitio web

Si quieres que tu asistente esté disponible en tu página web:

**Opción 1: Widget de ChatGPT**
- Usa herramientas como **Chatbase** o **CustomGPT.ai**
- Generan un código HTML que pegas en tu sitio
- El chat aparece como un widget flotante

**Opción 2: API + interfaz personalizada**
- Más trabajo pero más control
- Lo cubrimos en detalle en el Curso 12

### Consideraciones importantes

**Privacidad**
- ¿Tu asistente maneja datos sensibles de clientes?
- ¿Cumple con las regulaciones de tu país?
- ¿Los usuarios saben que están hablando con IA?

**Costos**
- Custom GPTs requieren que cada usuario tenga ChatGPT Plus
- Las soluciones con API tienen costo por uso
- Calcula el costo antes de lanzar

**Mantenimiento**
- Alguien debe actualizar los documentos periódicamente
- Las instrucciones necesitan ajustes según el feedback
- Monitorea las conversaciones para detectar problemas

### Caso de estudio: Asistente para una inmobiliaria

Una inmobiliaria creó un Custom GPT con:
- Catálogo de propiedades actualizado semanalmente
- Instrucciones para calificar leads (presupuesto, zona, tipo de propiedad)
- Horarios de visitas disponibles

**Resultado**: Redujo un 40% las llamadas al equipo de ventas porque el asistente resolvía las consultas iniciales.

### Para llevar

- Elige el nivel de acceso adecuado para tu caso de uso
- Siempre avisá a los usuarios que están interactuando con IA
- Considera privacidad, costos y mantenimiento antes de lanzar
- Un asistente bien configurado puede ahorrar horas de trabajo humano`;

export const c10leccion8 = `## Quiz: Crea tu propio asistente de IA

10 preguntas de opción múltiple. Elige la respuesta correcta.

---

### Pregunta 1
**¿Qué es un Custom GPT?**
a) Una versión más cara de ChatGPT
b) Una versión personalizada de ChatGPT con instrucciones y documentos propios
c) Un programa que hay que instalar en la computadora
d) Un robot físico que usa IA

**Respuesta correcta: b)**
Un Custom GPT es una versión personalizada que tú configuras con instrucciones, documentos y comportamiento específico.

---

### Pregunta 2
**¿Cuál es la parte más importante de un Custom GPT?**
a) El nombre
b) La imagen de perfil
c) Las instrucciones (system prompt)
d) La cantidad de documentos

**Respuesta correcta: c)**
Las instrucciones definen cómo se comporta tu asistente y son el factor que más impacta en la calidad de las respuestas.

---

### Pregunta 3
**¿Qué formato de documento NO se puede subir a un Custom GPT?**
a) PDF
b) CSV
c) Archivos de video .mp4
d) TXT

**Respuesta correcta: c)**
Los archivos de video no se soportan. Se pueden subir PDFs, CSVs, TXT, DOCX, imágenes y otros formatos de texto.

---

### Pregunta 4
**¿Qué significa RAG?**
a) Rapid Automatic Generation
b) Retrieval-Augmented Generation
c) Random Answer Generator
d) Real Artificial General intelligence

**Respuesta correcta: b)**
RAG significa Retrieval-Augmented Generation: buscar información relevante antes de generar la respuesta.

---

### Pregunta 5
**¿Cuál es la ventaja principal de RAG sobre documentos estáticos?**
a) Es más barato
b) Permite acceder a información actualizada
c) No requiere internet
d) Funciona sin IA

**Respuesta correcta: b)**
RAG permite que el asistente acceda a datos actualizados en tiempo real, mientras que los documentos estáticos solo reflejan la información del momento en que fueron subidos.

---

### Pregunta 6
**¿Qué debes hacer PRIMERO al probar tu asistente?**
a) Publicarlo en la tienda
b) Compartirlo con miles de personas
c) Probarlo con preguntas esperadas (camino feliz)
d) Borrar todas las instrucciones

**Respuesta correcta: c)**
Primero prueba con las preguntas que esperas que hagan tus usuarios para verificar que las respuestas básicas funcionan bien.

---

### Pregunta 7
**Si tu asistente inventa información que no tiene, ¿qué debes hacer?**
a) Agregar más documentos y una instrucción de "si no sabes, di que no sabes"
b) Reiniciar la computadora
c) Cambiar el nombre del GPT
d) No se puede arreglar

**Respuesta correcta: a)**
La combinación de más documentos de referencia y una instrucción explícita de reconocer limitaciones es la mejor solución.

---

### Pregunta 8
**¿Cuál dato NUNCA debes subir como documento a tu asistente?**
a) Tu catálogo de productos
b) Preguntas frecuentes
c) Contraseñas y datos bancarios de clientes
d) Políticas de la empresa

**Respuesta correcta: c)**
Nunca subas información sensible como contraseñas, datos bancarios o información personal de terceros.

---

### Pregunta 9
**¿Qué es un embedding en el contexto de RAG?**
a) Un archivo adjunto
b) Una representación numérica del texto que permite búsqueda por significado
c) Una imagen insertada en el documento
d) Un enlace a otro documento

**Respuesta correcta: b)**
Los embeddings convierten texto en números que representan su significado, permitiendo buscar por concepto además de por palabras exactas.

---

### Pregunta 10
**¿Cuál es el ciclo correcto para mejorar un asistente?**
a) Crear → Publicar → Olvidarse
b) Probar → Identificar problemas → Ajustar instrucciones → Probar de nuevo
c) Copiar instrucciones de otro GPT → Publicar
d) Subir más documentos sin probar

**Respuesta correcta: b)**
El ciclo de mejora continua (probar, identificar, ajustar, repetir) es la forma correcta de mantener un asistente de calidad.

---

### ¿Cómo te fue?

- **8-10 correctas**: Excelente. Estás listo para crear asistentes profesionales.
- **5-7 correctas**: Bien. Repasa las lecciones donde tuviste dudas.
- **Menos de 5**: Vuelve a leer las lecciones con calma.`;
