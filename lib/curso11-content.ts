// Contenido educativo del Curso 11: Automatiza con IA
// 7 lecciones — Nivel Avanzado, español LATAM, con acentos y ñ

export const c11leccion1 = `## ¿Qué es la automatización y por qué importa?

Imagina que todos los días haces lo mismo: revisas tu email, copias los datos de los nuevos pedidos a una planilla, mandas un mensaje de confirmación al cliente y actualizas tu inventario. Cada paso es simple, pero juntos te consumen 2 horas diarias.

**La automatización es hacer que una máquina haga esos pasos por ti.**

### La automatización antes y después de la IA

**Antes de la IA**, la automatización era rígida:
- Si pasa X → hacer Y
- "Si llega un email con la palabra 'pedido' → moverlo a la carpeta 'Pedidos'"
- Solo funcionaba con reglas exactas, sin entender contexto

**Con IA**, la automatización se vuelve inteligente:
- "Si llega un email de un cliente → la IA lee el contenido, extrae los datos del pedido, clasifica la prioridad y redacta una respuesta personalizada"
- Entiende contexto, maneja variaciones y toma decisiones simples

### ¿Por qué importa?

| Sin automatización | Con automatización |
|---|---|
| 2 horas copiando datos | 0 minutos — se hace solo |
| Errores humanos por cansancio | Precisión consistente |
| Solo puedes procesar X por día | Sin límite práctico |
| Tu tiempo vale más | Te enfocas en lo que importa |

### Los tres niveles de automatización

**Nivel 1: Automatización simple (sin IA)**
- Reglas fijas: si pasa A, haz B
- Ejemplo: "Cuando llega un email, manda una respuesta automática"

**Nivel 2: Automatización con IA (lo que vamos a aprender)**
- La IA procesa, clasifica y decide
- Ejemplo: "Cuando llega un email, la IA lo lee, extrae los datos, y según el tipo de consulta, responde o lo escala"

**Nivel 3: Agentes autónomos (nivel Pro)**
- La IA planifica, ejecuta múltiples pasos y se autocorrige
- Ejemplo: "La IA monitorea tus ventas, detecta tendencias, y genera reportes automáticos con recomendaciones"

### Herramientas que vamos a explorar

- **Zapier**: La más conocida y fácil de usar
- **Make** (ex Integromat): Más potente y visual
- **n8n**: Gratuita y de código abierto

### ¿Necesito saber programar?

**No.** Todas estas herramientas son **no-code** (sin código). Funcionan con bloques visuales que conectas arrastrando y soltando, como un diagrama de flujo.

### Para llevar

- La automatización te libera de tareas repetitivas
- Con IA, la automatización entiende contexto y toma decisiones
- No necesitas programar — hay herramientas visuales
- Empieza automatizando una tarea que haces todos los días`;

export const c11leccion2 = `## Zapier + IA: tu primer flujo automatizado

**Zapier** es la herramienta de automatización más popular del mundo. Conecta más de 6,000 aplicaciones entre sí, y ahora incluye IA integrada.

### Conceptos básicos de Zapier

- **Zap**: Un flujo automatizado (una secuencia de pasos)
- **Trigger**: El evento que inicia el flujo ("Cuando llega un email nuevo...")
- **Action**: Lo que pasa después ("...extraer los datos con IA y guardarlos en una planilla")

### Tu primer Zap con IA: Resumir emails largos

Vamos a crear un flujo que:
1. Detecta cuando llega un email nuevo a Gmail
2. Usa IA para resumirlo en 3 oraciones
3. Envía el resumen a un canal de Slack (o a tu WhatsApp/Telegram)

**Paso 1: Crear cuenta en Zapier**
- Ve a **zapier.com** y regístrate (hay plan gratuito)
- Confirma tu email

**Paso 2: Crear un nuevo Zap**
- Haz clic en **"Create"** → **"New Zap"**

**Paso 3: Configurar el Trigger**
- Busca **"Gmail"**
- Elige **"New Email"** (nuevo email recibido)
- Conecta tu cuenta de Gmail
- Elige la carpeta a monitorear (Inbox, por ejemplo)
- Prueba el trigger — Zapier va a traer un email de ejemplo

**Paso 4: Agregar la acción de IA**
- Haz clic en **"+"** para agregar un paso
- Busca **"ChatGPT"** o **"AI by Zapier"**
- Si eliges "AI by Zapier" (más fácil):
  - Modelo: GPT-4o-mini (rápido y económico)
  - Prompt: "Resume el siguiente email en exactamente 3 oraciones en español: {{Body}}"
  - {{Body}} es el contenido del email del paso anterior

**Paso 5: Enviar el resumen**
- Agrega otro paso con **"Slack"** (o **"Email by Zapier"**)
- Configura: "Enviar mensaje al canal #resúmenes"
- Mensaje: "📧 Nuevo email de {{From}}: {{resumen del paso anterior}}"

**Paso 6: Encender el Zap**
- Haz clic en **"Publish"**
- El Zap empieza a funcionar automáticamente

### Plan gratuito vs pago

| Característica | Gratis | Starter ($19/mes) |
|---|---|---|
| Zaps activos | 5 | 20 |
| Tareas por mes | 100 | 750 |
| Pasos por Zap | 2 | Múltiples |
| IA integrada | Limitado | Completo |

### Otros Zaps útiles con IA

- **Clasificar feedback de clientes**: Recibir reseñas → IA clasifica como positiva/negativa/neutral → Guardar en una planilla
- **Generar respuestas a formularios**: Nuevo formulario → IA genera respuesta personalizada → Enviar por email
- **Traducir contenido**: Nuevo post de blog → IA traduce al inglés → Publicar en blog en inglés

### Para llevar

- Zapier conecta miles de apps sin necesidad de código
- "AI by Zapier" permite agregar IA a cualquier flujo
- Empieza con un flujo simple de 3 pasos
- El plan gratuito es suficiente para experimentar`;

export const c11leccion3 = `## Make/n8n: alternativas potentes

Zapier es genial para empezar, pero tiene limitaciones en su plan gratuito. Existen alternativas que ofrecen más potencia y flexibilidad.

### Make (antes Integromat)

**Make** es una plataforma de automatización visual más potente que Zapier, con un enfoque en flujos complejos.

**Ventajas sobre Zapier:**
- Interfaz visual con diagrama de flujo real (puedes ver las conexiones)
- Más operaciones en el plan gratuito (1,000/mes vs 100 en Zapier)
- Lógica condicional más avanzada (si/entonces con múltiples ramas)
- Mejor manejo de errores

**Cómo funciona:**
1. Ve a **make.com** y crea una cuenta
2. Crea un nuevo "Scenario" (equivalente a un Zap)
3. Arrastra módulos al canvas y conéctalos visualmente
4. Cada módulo es una app o acción

**Ejemplo: Procesar facturas automáticamente**
1. **Watch emails** (Gmail) — detecta emails con adjuntos
2. **Download attachment** — descarga el PDF de la factura
3. **Analyze with AI** (OpenAI) — "Extrae de esta factura: proveedor, monto, fecha, concepto"
4. **Add row** (Google Sheets) — guarda los datos en una planilla
5. **Send notification** (Slack) — "Nueva factura procesada: $X de Proveedor Y"

### n8n: la opción gratuita y de código abierto

**n8n** (se pronuncia "n-eight-n") es una herramienta de automatización de código abierto. Eso significa que es **completamente gratuita** si la instalas en tu propio servidor.

**Ventajas:**
- Gratis sin límites de ejecuciones
- Código abierto — puedes ver y modificar el código
- Se ejecuta en tu propio servidor — tus datos no salen de tu infraestructura
- Muy potente para flujos complejos con IA

**Opción cloud:**
- n8n también ofrece un servicio cloud (n8n.io) con plan gratuito limitado
- Si no quieres instalar nada, es una buena opción para empezar

**Cuándo elegir n8n:**
- Necesitas procesar muchos datos sin costo por ejecución
- Te preocupa la privacidad (los datos se quedan en tu servidor)
- Quieres máxima flexibilidad

### Comparación de las tres herramientas

| Característica | Zapier | Make | n8n |
|---|---|---|---|
| Facilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Plan gratuito | 100 tareas/mes | 1,000 ops/mes | Ilimitado (self-hosted) |
| Integración IA | Excelente | Muy buena | Muy buena |
| Visual | Lineal | Diagrama de flujo | Diagrama de flujo |
| Ideal para | Principiantes | Usuarios intermedios | Técnicos y equipos |

### ¿Cuál elegir?

- **¿Empezando?** → Zapier (más fácil)
- **¿Necesitas más potencia?** → Make (mejor relación precio/funcionalidad)
- **¿Técnico o presupuesto limitado?** → n8n (gratis, máxima flexibilidad)

### Para llevar

- Zapier no es la única opción — Make y n8n son alternativas potentes
- Make ofrece más operaciones gratis y flujos más visuales
- n8n es gratuito y ideal si te preocupa la privacidad
- Empieza con la que te resulte más cómoda y cambia si necesitas más`;

export const c11leccion4 = `## Automatizar emails y respuestas

El email es una de las tareas que más tiempo consume. La IA puede ayudarte a automatizar gran parte del trabajo: clasificar, responder, resumir y organizar.

### Escenario 1: Clasificación automática de emails

**Problema**: Recibes 50+ emails al día y pierdes tiempo clasificándolos manualmente.

**Solución con Zapier/Make:**
1. Trigger: Nuevo email en Gmail
2. IA analiza el contenido y clasifica en categorías:
   - Urgente / Normal / Puede esperar
   - Venta / Soporte / Información / Spam
3. Acción: Mover a la carpeta correspondiente + etiquetar
4. Si es urgente: enviar notificación a Slack/WhatsApp

**Prompt para la IA:**
> "Clasifica este email en una de estas categorías: URGENTE, VENTA, SOPORTE, INFO, SPAM. Responde SOLO con la categoría, sin explicación. Email: {{body}}"

### Escenario 2: Respuestas automáticas inteligentes

**Problema**: El 70% de los emails que recibes tienen respuestas similares.

**Solución:**
1. Trigger: Nuevo email
2. IA determina si puede responder automáticamente
3. Si sí: genera la respuesta y la envía (o la pone en borrador para tu aprobación)
4. Si no: te notifica para que respondas manualmente

**Importante**: Empieza poniendo las respuestas en **borrador** para revisarlas antes de enviar. Cuando estés seguro de que la IA responde bien, puedes activar el envío automático.

### Escenario 3: Resumen diario de emails

**Problema**: Llegas a la oficina con 30 emails sin leer y no sabes por dónde empezar.

**Solución:**
1. Trigger: Todos los días a las 7:00 AM
2. Recolectar todos los emails de las últimas 12 horas
3. IA genera un resumen ejecutivo:
   - 3 emails más urgentes
   - Temas principales
   - Acciones requeridas
4. Enviar resumen a tu WhatsApp o Slack

### Consideraciones de seguridad

- **Nunca automatices** emails que contengan información financiera o médica sensible
- **Empieza con borradores**, no con envío directo
- **Revisa periódicamente** las respuestas automáticas
- **Informa a tu equipo** que usas automatización

### Herramientas específicas para email + IA

| Herramienta | Qué hace | Precio |
|---|---|---|
| **Zapier + Gmail** | Automatización completa | Desde gratis |
| **Superhuman** | Email con IA integrada | $30/mes |
| **Shortwave** | Gmail con resúmenes IA | Gratis + premium |
| **Spark** | Email inteligente | Gratis + premium |

### Para llevar

- La clasificación automática te ahorra tiempo desde el primer día
- Empieza con borradores antes de automatizar envíos
- El resumen diario te da visión general sin abrir cada email
- Siempre supervisa las automatizaciones de email`;

export const c11leccion5 = `## Automatizar resúmenes y reportes

Generar reportes es una tarea que consume horas y a menudo es repetitiva. Con IA puedes automatizar la recolección de datos, el análisis y hasta la redacción del reporte.

### Escenario 1: Reporte semanal automático de ventas

**El flujo:**
1. **Trigger**: Todos los lunes a las 8:00 AM
2. **Recolectar datos**: Obtener ventas de la semana desde Google Sheets o tu CRM
3. **Análisis IA**: "Analiza estas ventas de la última semana. Incluye: total vendido, comparación con semana anterior, top 3 productos, tendencia general, y una recomendación."
4. **Formatear**: La IA genera el reporte en formato legible
5. **Distribuir**: Enviar por email al equipo + publicar en Slack

**Prompt para el reporte:**
> "Eres un analista de ventas. Con los siguientes datos de ventas semanales, genera un reporte ejecutivo en español con estas secciones: 1) Resumen (3 líneas), 2) Métricas clave (tabla), 3) Productos destacados, 4) Comparación con semana anterior, 5) Recomendación. Datos: {{datos_ventas}}"

### Escenario 2: Monitoreo de redes sociales

**El flujo:**
1. **Trigger**: Diariamente a las 9:00 AM
2. **Recolectar**: Menciones y comentarios de las últimas 24 horas
3. **Análisis IA**: Clasificar sentimiento (positivo/negativo/neutral)
4. **Reporte**: Resumen con insights
5. **Alerta**: Si hay menciones negativas urgentes, notificar inmediatamente

### Escenario 3: Resumen de reuniones

**El flujo:**
1. **Input**: Grabación o notas de la reunión
2. **Transcripción**: Si es audio, transcribir con Whisper (la IA de OpenAI para voz)
3. **Resumen IA**: "Resume esta reunión: participantes, temas discutidos, decisiones tomadas, próximos pasos con responsables y fechas"
4. **Distribuir**: Enviar a todos los participantes

### Plantilla de reporte con IA

Pídele a la IA que siga esta estructura:

\`\`\`
📊 REPORTE [TIPO] — [FECHA]

## Resumen ejecutivo
[2-3 oraciones]

## Métricas clave
| Métrica | Valor | Cambio |
|---------|-------|--------|

## Hallazgos principales
1. [Hallazgo]
2. [Hallazgo]
3. [Hallazgo]

## Recomendaciones
- [Acción recomendada]

## Próximos pasos
- [ ] [Tarea] — Responsable — Fecha
\`\`\`

### Para llevar

- Los reportes automáticos ahorran horas semanales
- La IA puede analizar datos, detectar tendencias y redactar el reporte
- Empieza con un reporte semanal simple y expande desde ahí
- Siempre revisa el reporte antes de distribuirlo`;

export const c11leccion6 = `## Vibe coding: describir apps en español

**Vibe coding** es un concepto nuevo: en vez de escribir código, le describes a la IA lo que quieres construir y ella lo hace por ti. Es como decirle a un arquitecto "quiero una casa con 3 habitaciones y jardín" en vez de dibujar los planos tú mismo.

### ¿Qué es vibe coding?

Es la práctica de crear aplicaciones describiendo lo que quieres en lenguaje natural (español, inglés, cualquier idioma). La IA genera el código por ti.

**Ejemplo:**
> "Crea una página web con un formulario de contacto que tenga campos para nombre, email y mensaje. Que cuando envíen el formulario, me llegue un email con los datos. Diseño moderno y simple."

Con esas pocas líneas, herramientas como **Bolt.new**, **v0.dev**, **Lovable** o **Claude** pueden generar una página completa y funcional.

### Herramientas de vibe coding

**1. Bolt.new**
- Genera aplicaciones web completas desde una descripción
- Incluye frontend, backend y base de datos
- Puedes descargar el código o publicar directamente

**2. v0.dev (de Vercel)**
- Especializado en interfaces de usuario
- Genera componentes React desde una descripción
- Ideal para prototipos rápidos

**3. Lovable (antes GPT Engineer)**
- Crea aplicaciones completas conversando
- Itera sobre el diseño y funcionalidad en tiempo real
- Publica directamente en la web

**4. Claude / ChatGPT**
- Pídele que genere código para cualquier cosa
- Más flexible pero requiere más guía
- Ideal si ya tienes algo de contexto técnico

### Ejemplo práctico: Dashboard de ventas

Prompt para Bolt.new o similar:

> "Crea un dashboard de ventas con: 1) Gráfico de barras de ventas por mes, 2) Tarjetas con total vendido, número de pedidos y ticket promedio, 3) Tabla con los últimos 10 pedidos, 4) Filtro por fecha. Usa colores azul y blanco. Los datos son de ejemplo."

En menos de 5 minutos tienes un dashboard funcional que puedes personalizar después.

### Consejos para mejores resultados

1. **Sé específico**: "Un botón azul que diga Enviar" es mejor que "un botón"
2. **Describe la experiencia del usuario**: "Cuando el usuario hace clic, aparece un mensaje de confirmación"
3. **Menciona el estilo**: "Diseño minimalista, colores oscuros, tipografía moderna"
4. **Itera**: "Me gusta pero cambia el color del botón a verde y haz la tabla más grande"

### Limitaciones

- Las apps generadas pueden necesitar ajustes
- Para proyectos complejos, eventualmente necesitas entender algo de código
- La IA puede cometer errores de lógica
- No reemplaza a un desarrollador para sistemas críticos

### Para llevar

- Vibe coding permite crear apps describiendo lo que quieres
- Herramientas como Bolt.new, v0.dev y Lovable hacen el trabajo pesado
- Sé específico en tus descripciones para mejores resultados
- Ideal para prototipos, herramientas internas y proyectos personales`;

export const c11leccion7 = `## Quiz: Automatiza con IA

10 preguntas de opción múltiple.

---

### Pregunta 1
**¿Qué es la automatización con IA?**
a) Hacer que los robots reemplacen a todos los humanos
b) Usar IA para realizar tareas repetitivas de forma inteligente sin intervención manual
c) Programar en un lenguaje de computadora
d) Usar el celular más rápido

**Respuesta correcta: b)**
La automatización con IA permite que tareas repetitivas se realicen de forma inteligente, entendiendo contexto y tomando decisiones simples.

---

### Pregunta 2
**En Zapier, ¿qué es un "Trigger"?**
a) El nombre del flujo
b) El evento que inicia la automatización
c) El resultado final
d) Un error en el sistema

**Respuesta correcta: b)**
El Trigger es el evento que dispara el flujo, como recibir un nuevo email o un formulario completado.

---

### Pregunta 3
**¿Cuál es la ventaja principal de Make sobre Zapier?**
a) Es más bonito
b) Tiene más operaciones gratuitas y permite flujos más complejos
c) Solo funciona en español
d) No necesita internet

**Respuesta correcta: b)**
Make ofrece 1,000 operaciones gratis (vs 100 en Zapier) y tiene una interfaz visual de diagrama de flujo más potente.

---

### Pregunta 4
**¿Qué es n8n?**
a) Un nuevo modelo de IA
b) Una herramienta de automatización gratuita y de código abierto
c) Un lenguaje de programación
d) Un servicio de email

**Respuesta correcta: b)**
n8n es una herramienta de automatización open source que puedes usar gratis instalándola en tu propio servidor.

---

### Pregunta 5
**Al automatizar respuestas de email, ¿cuál es la mejor práctica para empezar?**
a) Activar el envío automático inmediatamente
b) Configurar las respuestas como borrador para revisarlas antes de enviar
c) Responder todos los emails con la misma respuesta genérica
d) Dejar de leer emails por completo

**Respuesta correcta: b)**
Empezar con borradores permite revisar la calidad de las respuestas automáticas antes de confiar en el envío directo.

---

### Pregunta 6
**¿Qué es "vibe coding"?**
a) Programar mientras escuchas música
b) Crear aplicaciones describiendo lo que quieres en lenguaje natural
c) Un estilo de diseño web
d) Una marca de computadoras

**Respuesta correcta: b)**
Vibe coding es describir en español (o cualquier idioma) lo que quieres que haga una aplicación, y la IA genera el código.

---

### Pregunta 7
**¿Cuál de estas herramientas es para vibe coding?**
a) Microsoft Excel
b) Bolt.new
c) Gmail
d) Spotify

**Respuesta correcta: b)**
Bolt.new permite crear aplicaciones web completas desde una descripción en lenguaje natural.

---

### Pregunta 8
**Un reporte semanal automático de ventas típicamente incluye:**
a) Solo un número total
b) Resumen, métricas clave, comparación con período anterior y recomendaciones
c) Una foto del equipo
d) Solo los nombres de los vendedores

**Respuesta correcta: b)**
Un reporte automático bien configurado incluye resumen ejecutivo, métricas, comparaciones y recomendaciones accionables.

---

### Pregunta 9
**¿Por qué es importante supervisar las automatizaciones de email?**
a) Porque son ilegales
b) Porque la IA puede generar respuestas incorrectas o inapropiadas
c) Porque ocupan mucha memoria
d) Porque son muy lentas

**Respuesta correcta: b)**
La IA puede cometer errores o generar respuestas inadecuadas, por lo que es crucial supervisar especialmente al inicio.

---

### Pregunta 10
**¿Cuál es el primer paso recomendado para empezar con automatización?**
a) Automatizar todos los procesos de la empresa al mismo tiempo
b) Identificar una tarea repetitiva que haces todos los días y automatizarla
c) Comprar el plan más caro de todas las herramientas
d) Aprender a programar desde cero

**Respuesta correcta: b)**
Empieza con una sola tarea repetitiva. Una vez que funciona bien, expande a otras tareas.

---

### ¿Cómo te fue?

- **8-10 correctas**: Excelente. Estás listo para automatizar tu flujo de trabajo.
- **5-7 correctas**: Bien. Repasa las lecciones donde tuviste dudas.
- **Menos de 5**: Vuelve a leer las lecciones con calma.`;
