// Contenido educativo Curso 14: RAG y búsqueda inteligente
// Nivel 5 Pro — 8 lecciones para aspirantes a ingenieros de IA

export const leccion1 = `### Qué es RAG y por qué revolucionó la IA

#### El problema fundamental de los LLMs

Los modelos de lenguaje grandes (LLMs) como GPT-4, Claude o Llama son impresionantes. Pueden escribir código, resumir textos, mantener conversaciones complejas y razonar sobre problemas. Pero tienen un problema fundamental que limita su utilidad en aplicaciones reales: **su conocimiento tiene fecha de corte y no conocen tus datos privados**.

Imagina que le preguntas a ChatGPT: "¿Cuáles fueron las ventas del Q3 2025 de mi empresa?" — el modelo no tiene idea. No importa cuán inteligente sea, simplemente no tiene acceso a esa información. Lo mismo ocurre con documentación interna, bases de conocimiento corporativas, manuales técnicos propietarios o cualquier dato que no estuviera en su set de entrenamiento.

Esto genera dos problemas críticos:

1. **Conocimiento desactualizado**: El modelo fue entrenado con datos hasta cierta fecha y no sabe nada posterior.
2. **Alucinaciones**: Cuando el modelo no tiene la información, muchas veces inventa respuestas que suenan convincentes pero son incorrectas.

#### La solución: Retrieval-Augmented Generation (RAG)

RAG es un patrón arquitectónico que resuelve este problema de forma elegante. La idea central es simple pero poderosa: **en lugar de depender solo del conocimiento interno del modelo, le damos contexto relevante recuperado de fuentes externas en tiempo real**.

El término fue introducido por Facebook AI Research (ahora Meta AI) en 2020 en el paper "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks". Desde entonces, se convirtió en el estándar de la industria para construir aplicaciones de IA sobre datos propios.

#### Cómo funciona RAG — Diagrama conceptual

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    PIPELINE RAG                          │
│                                                          │
│  ┌──────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │ Pregunta │───▶│  Búsqueda    │───▶│  Documentos   │  │
│  │ del      │    │  Semántica   │    │  Relevantes   │  │
│  │ Usuario  │    │  (Retrieval) │    │  (Top-K)      │  │
│  └──────────┘    └──────────────┘    └───────┬───────┘  │
│                                              │          │
│                                              ▼          │
│  ┌──────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │ Respuesta│◀───│     LLM      │◀───│   Prompt +    │  │
│  │ Final    │    │  (Generation)│    │   Contexto    │  │
│  └──────────┘    └──────────────┘    └───────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
\`\`\`

**Paso 1 — Retrieval (Recuperación):** Cuando el usuario hace una pregunta, el sistema busca en una base de datos vectorial los fragmentos de documentos más relevantes para esa consulta.

**Paso 2 — Augmentation (Aumentación):** Los fragmentos recuperados se insertan como contexto en el prompt que se envía al LLM.

**Paso 3 — Generation (Generación):** El LLM genera una respuesta basada en el contexto proporcionado, no solo en su conocimiento interno.

#### Por qué RAG y no fine-tuning

Una pregunta natural es: ¿por qué no simplemente re-entrenar el modelo con mis datos? El fine-tuning tiene su lugar, pero RAG ofrece ventajas significativas:

| Aspecto | RAG | Fine-tuning |
|---------|-----|-------------|
| Actualización de datos | Instantánea | Requiere re-entrenar |
| Costo | Bajo | Alto (GPU, tiempo) |
| Trazabilidad | Puedes citar fuentes | No hay trazabilidad |
| Alucinaciones | Reducidas (contexto real) | Persisten |
| Datos privados | Se mantienen separados | Se integran al modelo |
| Tiempo de implementación | Horas/días | Días/semanas |

RAG no reemplaza al fine-tuning completamente — son complementarios. Pero para la mayoría de casos de uso empresariales, RAG es la opción más práctica y efectiva.

#### Casos de uso reales de RAG

**1. Asistentes de soporte técnico:** Empresas como Zendesk y Intercom usan RAG para que sus chatbots respondan con información actualizada de la base de conocimiento. Cuando un cliente pregunta algo, el sistema busca en artículos de ayuda, documentación y tickets previos para dar una respuesta precisa.

**2. Búsqueda legal:** Firmas de abogados implementan RAG sobre su base de jurisprudencia. En lugar de buscar manualmente entre miles de documentos legales, un abogado pregunta en lenguaje natural y obtiene respuestas con citas a los documentos exactos.

**3. Asistentes médicos:** Hospitales y clínicas usan RAG sobre guías clínicas y papers médicos para ayudar a médicos a tomar decisiones informadas. El sistema puede responder "¿Cuál es el tratamiento recomendado para X?" citando las guías específicas.

**4. Documentación técnica:** GitHub Copilot y herramientas similares usan variantes de RAG para entender tu codebase y dar sugerencias contextuales. Notion AI busca en tus propios documentos para responder preguntas.

**5. Investigación académica:** Investigadores usan RAG sobre colecciones de papers para encontrar conexiones entre estudios, resumir el estado del arte de un tema o identificar gaps de investigación.

#### Los componentes clave de un sistema RAG

Para entender RAG a fondo, necesitas conocer estos conceptos fundamentales:

- **Embeddings:** Representaciones numéricas (vectores) de texto que capturan significado semántico. Textos similares tienen embeddings similares.
- **Vector Store:** Base de datos optimizada para almacenar y buscar embeddings de forma eficiente (ej: Pinecone, Weaviate, ChromaDB, FAISS).
- **Chunking:** El proceso de dividir documentos grandes en fragmentos más pequeños y manejables.
- **Similarity Search:** Algoritmo que encuentra los fragmentos más similares a la consulta del usuario, usando distancia coseno u otras métricas.
- **Prompt Template:** La plantilla que combina la pregunta del usuario con el contexto recuperado para enviarlo al LLM.

#### El ecosistema actual

El ecosistema de herramientas para RAG creció enormemente. Frameworks como **LangChain**, **LlamaIndex**, **Haystack** y **Semantic Kernel** facilitan la implementación. Bases de datos vectoriales como **Pinecone**, **Weaviate**, **Qdrant**, **ChromaDB** y **pgvector** (extensión de PostgreSQL) ofrecen almacenamiento y búsqueda eficiente.

En las siguientes lecciones vas a construir tu propio sistema RAG desde cero, entender cada componente en profundidad, y aprender a optimizarlo para obtener respuestas de alta calidad.

#### Conclusión

RAG transformó la forma en que construimos aplicaciones de IA. Pasamos de modelos que solo saben lo que aprendieron en entrenamiento a sistemas que pueden consultar cualquier fuente de conocimiento en tiempo real. Es el puente entre la inteligencia general de los LLMs y los datos específicos de tu dominio.

En la próxima lección, vamos a desmenuzar el pipeline completo: desde un documento crudo hasta una respuesta generada con fuentes citadas.
`;

export const leccion2 = `### Pipeline completo: documento → chunks → embeddings → búsqueda

#### Visión general del flujo

En esta lección vamos a recorrer cada etapa del pipeline RAG en detalle, con código Python funcional. Al terminar, vas a entender exactamente qué pasa desde que tienes un documento de texto hasta que obtienes una respuesta generada por un LLM con información de ese documento.

\`\`\`
Documento Original
       │
       ▼
┌─────────────┐
│  Carga del  │  ← Leer archivos (PDF, TXT, HTML, etc.)
│  documento  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Chunking   │  ← Dividir en fragmentos manejables
│  (División) │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Embeddings │  ← Convertir texto a vectores numéricos
│  (Vectores) │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Vector     │  ← Almacenar en base de datos vectorial
│  Store      │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Búsqueda   │  ← Encontrar fragmentos relevantes
│  Semántica  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Generación │  ← LLM genera respuesta con contexto
│  (LLM)      │
└─────────────┘
\`\`\`

#### Paso 1: Carga del documento

Todo empieza con un documento. Puede ser un PDF, un archivo de texto, una página web, un CSV o cualquier fuente de información textual. El primer paso es extraer el texto limpio.

\`\`\`python
# Ejemplo simple: cargar un archivo de texto
def cargar_documento(ruta: str) -> str:
    """Carga un documento de texto y retorna su contenido."""
    with open(ruta, 'r', encoding='utf-8') as f:
        contenido = f.read()
    return contenido

texto = cargar_documento("manual_producto.txt")
print(f"Documento cargado: {len(texto)} caracteres")
\`\`\`

Para formatos más complejos como PDF, necesitas librerías especializadas. Lo veremos en detalle en la lección 4.

#### Paso 2: Chunking — El arte de dividir documentos

Este es posiblemente el paso más crítico y subestimado del pipeline. Un mal chunking puede arruinar todo tu sistema RAG, sin importar cuán bueno sea tu modelo de embeddings o tu LLM.

**¿Por qué dividir?** Los LLMs tienen un límite de contexto (ventana de tokens). No puedes meter un documento de 500 páginas en el prompt. Además, los embeddings funcionan mejor con textos más cortos y focalizados.

**Estrategia 1: Chunking por caracteres con overlap**

La más básica pero sorprendentemente efectiva para muchos casos:

\`\`\`python
def chunk_por_caracteres(texto: str, chunk_size: int = 1000, overlap: int = 200) -> list[str]:
    """
    Divide texto en chunks de tamaño fijo con overlap.

    Args:
        texto: El texto completo a dividir
        chunk_size: Tamaño máximo de cada chunk en caracteres
        overlap: Cantidad de caracteres que se solapan entre chunks consecutivos

    Returns:
        Lista de chunks de texto
    """
    chunks = []
    inicio = 0

    while inicio < len(texto):
        fin = inicio + chunk_size
        chunk = texto[inicio:fin]
        chunks.append(chunk)
        inicio = fin - overlap  # Retroceder para crear overlap

    return chunks

# Ejemplo de uso
texto = cargar_documento("manual_producto.txt")
chunks = chunk_por_caracteres(texto, chunk_size=1000, overlap=200)
print(f"Documento dividido en {len(chunks)} chunks")
print(f"Primer chunk: {chunks[0][:100]}...")
\`\`\`

**¿Por qué overlap?** El overlap (solapamiento) asegura que si una idea importante esta en el límite entre dos chunks, no se pierda. Sin overlap, podrías cortar una oración a la mitad y perder contexto crucial.

**Estrategia 2: Chunking por separadores (párrafos, secciones)**

Más inteligente: respeta la estructura natural del documento.

\`\`\`python
def chunk_por_separadores(texto: str, separadores: list[str] = None,
                          chunk_size: int = 1000) -> list[str]:
    """
    Divide texto usando separadores jerárquicos, respetando estructura.
    """
    if separadores is None:
        separadores = ["\\n\\n", "\\n", ". ", " "]

    def dividir_recursivo(texto: str, separadores: list[str]) -> list[str]:
        if not separadores:
            return [texto]

        sep = separadores[0]
        partes = texto.split(sep)

        chunks = []
        chunk_actual = ""

        for parte in partes:
            if len(chunk_actual) + len(parte) + len(sep) <= chunk_size:
                chunk_actual += (sep if chunk_actual else "") + parte
            else:
                if chunk_actual:
                    chunks.append(chunk_actual.strip())
                # Si la parte individual es muy grande, dividir con siguiente separador
                if len(parte) > chunk_size:
                    sub_chunks = dividir_recursivo(parte, separadores[1:])
                    chunks.extend(sub_chunks)
                    chunk_actual = ""
                else:
                    chunk_actual = parte

        if chunk_actual.strip():
            chunks.append(chunk_actual.strip())

        return chunks

    return dividir_recursivo(texto, separadores)

chunks = chunk_por_separadores(texto)
print(f"Chunks creados: {len(chunks)}")
for i, chunk in enumerate(chunks[:3]):
    print(f"\\nChunk {i+1} ({len(chunk)} chars): {chunk[:80]}...")
\`\`\`

**Estrategia 3: Chunking por tokens**

La más precisa, porque los LLMs trabajan con tokens, no caracteres:

\`\`\`python
import tiktoken

def chunk_por_tokens(texto: str, max_tokens: int = 256, overlap_tokens: int = 50,
                     modelo: str = "cl100k_base") -> list[str]:
    """Divide texto en chunks basados en conteo de tokens."""
    encoder = tiktoken.get_encoding(modelo)
    tokens = encoder.encode(texto)

    chunks = []
    inicio = 0

    while inicio < len(tokens):
        fin = min(inicio + max_tokens, len(tokens))
        chunk_tokens = tokens[inicio:fin]
        chunk_texto = encoder.decode(chunk_tokens)
        chunks.append(chunk_texto)
        inicio = fin - overlap_tokens

    return chunks
\`\`\`

**¿Cuál elegir?** Depende de tu caso:
- **Documentos estructurados** (manuales, papers): Chunking por separadores
- **Texto continuo** (transcripciones, conversaciones): Chunking por tokens con overlap
- **Prototipado rápido**: Chunking por caracteres con overlap

#### Paso 3: Generar embeddings

Los embeddings son representaciones vectoriales del texto. Cada chunk se convierte en un vector de números (típicamente 768 o 1536 dimensiones) que captura su significado semántico.

\`\`\`python
from openai import OpenAI

client = OpenAI()  # Usa OPENAI_API_KEY del entorno

def generar_embeddings(textos: list[str], modelo: str = "text-embedding-3-small") -> list[list[float]]:
    """
    Genera embeddings para una lista de textos usando OpenAI.

    Args:
        textos: Lista de strings a convertir en embeddings
        modelo: Modelo de embeddings a usar

    Returns:
        Lista de vectores (cada uno es una lista de floats)
    """
    respuesta = client.embeddings.create(
        input=textos,
        model=modelo
    )

    embeddings = [item.embedding for item in respuesta.data]
    return embeddings

# Generar embeddings para nuestros chunks
embeddings = generar_embeddings(chunks)
print(f"Embeddings generados: {len(embeddings)}")
print(f"Dimensiones por vector: {len(embeddings[0])}")
# Ejemplo: text-embedding-3-small produce vectores de 1536 dimensiones
\`\`\`

**Alternativas open source** para embeddings:
- **sentence-transformers**: Modelos como \`all-MiniLM-L6-v2\` (rápido) o \`all-mpnet-base-v2\` (mejor calidad)
- **Hugging Face**: Modelos como \`BAAI/bge-large-en-v1.5\`
- **Ollama**: Modelos locales como \`nomic-embed-text\`

\`\`\`python
# Alternativa con sentence-transformers (local, gratis)
from sentence_transformers import SentenceTransformer

modelo_local = SentenceTransformer('all-MiniLM-L6-v2')
embeddings_locales = modelo_local.encode(chunks)
print(f"Dimensiones: {embeddings_locales.shape}")  # (n_chunks, 384)
\`\`\`

#### Paso 4: Almacenar en un Vector Store

Necesitas un lugar eficiente para guardar y buscar tus embeddings. Usaremos **ChromaDB** por ser simple y local:

\`\`\`python
import chromadb

# Crear cliente y colección
cliente_chroma = chromadb.Client()
coleccion = cliente_chroma.create_collection(
    name="mis_documentos",
    metadata={"hnsw:space": "cosine"}  # Usar distancia coseno
)

# Agregar chunks con sus embeddings
coleccion.add(
    documents=chunks,
    embeddings=embeddings,
    ids=[f"chunk_{i}" for i in range(len(chunks))],
    metadatas=[{"fuente": "manual_producto.txt", "chunk_index": i} for i in range(len(chunks))]
)

print(f"Almacenados {coleccion.count()} documentos en ChromaDB")
\`\`\`

#### Paso 5: Búsqueda semántica

Ahora viene lo interesante — buscar fragmentos relevantes para una pregunta:

\`\`\`python
def buscar(consulta: str, n_resultados: int = 3) -> dict:
    """Busca los chunks más relevantes para una consulta."""
    resultados = coleccion.query(
        query_texts=[consulta],
        n_results=n_resultados
    )
    return resultados

# Buscar
consulta = "¿Cómo configuro el producto por primera vez?"
resultados = buscar(consulta)

print(f"Consulta: {consulta}\\n")
for i, (doc, dist) in enumerate(zip(resultados['documents'][0], resultados['distances'][0])):
    print(f"Resultado {i+1} (distancia: {dist:.4f}):")
    print(f"  {doc[:150]}...\\n")
\`\`\`

#### Paso 6: Generación con contexto (el paso "G" de RAG)

Finalmente, combinamos los resultados de la búsqueda con la pregunta y se lo enviamos al LLM:

\`\`\`python
def generar_respuesta_rag(consulta: str, n_contextos: int = 3) -> str:
    """Pipeline RAG completo: buscar + generar."""
    # 1. Buscar contexto relevante
    resultados = buscar(consulta, n_resultados=n_contextos)
    contextos = resultados['documents'][0]

    # 2. Construir prompt con contexto
    contexto_combinado = "\\n\\n---\\n\\n".join(contextos)

    prompt = f"""Basándote ÚNICAMENTE en el siguiente contexto, responde la pregunta del usuario.
Si la información no esta en el contexto, di que no tienes suficiente información.

CONTEXTO:
{contexto_combinado}

PREGUNTA: {consulta}

RESPUESTA:"""

    # 3. Generar respuesta con LLM
    respuesta = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Eres un asistente útil que responde basándose solo en el contexto proporcionado."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.2  # Baja temperatura para respuestas más fieles al contexto
    )

    return respuesta.choices[0].message.content

# Usar el pipeline completo
respuesta = generar_respuesta_rag("¿Cómo configuro el producto por primera vez?")
print(respuesta)
\`\`\`

#### Resumen del pipeline

Acabás de ver el pipeline RAG completo en acción. Cada paso es una oportunidad de optimización:

- **Chunking**: Tamaño, overlap, estrategia de división
- **Embeddings**: Modelo, dimensiones, normalización
- **Vector Store**: Índice, métrica de distancia, parámetros de búsqueda
- **Prompt**: Template, instrucciones, formato de contexto
- **LLM**: Modelo, temperatura, max tokens

En la próxima lección, vamos a ver cómo LangChain simplifica todo esto en unas pocas líneas de código.
`;

export const leccion3 = `### Implementar RAG con LangChain

#### ¿Por qué LangChain?

En la lección anterior construimos un pipeline RAG desde cero. Fue excelente para entender cada componente, pero en la práctica, usar un framework te ahorra tiempo, reduce errores y te da acceso a un ecosistema de integraciones ya probadas.

**LangChain** es el framework más popular para construir aplicaciones con LLMs. Ofrece abstracciones para cada componente del pipeline RAG y permite cambiar componentes (por ejemplo, de OpenAI a un modelo local) con cambios mínimos de código.

#### Instalación y setup

\`\`\`bash
pip install langchain langchain-openai langchain-community chromadb
pip install tiktoken unstructured  # Dependencias opcionales útiles
\`\`\`

Configura tu API key:

\`\`\`bash
export OPENAI_API_KEY="tu-api-key-aquí"
\`\`\`

#### Document Loaders — Cargar documentos

LangChain tiene más de 160 loaders para distintas fuentes. Cada loader retorna una lista de objetos \`Document\`, que contienen el texto (\`page_content\`) y metadatos (\`metadata\`).

\`\`\`python
from langchain_community.document_loaders import (
    TextLoader,
    DirectoryLoader,
    WebBaseLoader,
    CSVLoader,
    PyPDFLoader
)

# Cargar un archivo de texto
loader_txt = TextLoader("datos/manual.txt", encoding="utf-8")
docs_txt = loader_txt.load()
print(f"Documentos cargados: {len(docs_txt)}")
print(f"Contenido: {docs_txt[0].page_content[:200]}")
print(f"Metadata: {docs_txt[0].metadata}")

# Cargar todos los archivos de un directorio
loader_dir = DirectoryLoader(
    "datos/",
    glob="**/*.txt",
    loader_cls=TextLoader,
    loader_kwargs={"encoding": "utf-8"}
)
docs_dir = loader_dir.load()
print(f"Documentos del directorio: {len(docs_dir)}")

# Cargar una página web
loader_web = WebBaseLoader("https://docs.python.org/3/tutorial/index.html")
docs_web = loader_web.load()
print(f"Contenido web: {docs_web[0].page_content[:200]}")

# Cargar un CSV
loader_csv = CSVLoader("datos/productos.csv")
docs_csv = loader_csv.load()
print(f"Filas CSV como documentos: {len(docs_csv)}")
\`\`\`

#### Text Splitters — Dividir documentos

LangChain ofrece varios text splitters que implementan las estrategias de chunking que vimos:

\`\`\`python
from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
    CharacterTextSplitter,
    TokenTextSplitter
)

# El más recomendado: RecursiveCharacterTextSplitter
# Intenta dividir por: \\n\\n → \\n → espacio → carácter
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,       # Tamaño máximo en caracteres
    chunk_overlap=200,     # Overlap entre chunks
    length_function=len,   # Función para medir longitud
    separators=["\\n\\n", "\\n", ". ", " ", ""]  # Jerarquía de separadores
)

chunks = splitter.split_documents(docs_txt)  # Acepta lista de Document
print(f"Chunks creados: {len(chunks)}")

# Cada chunk mantiene los metadatos del documento original
for i, chunk in enumerate(chunks[:3]):
    print(f"\\nChunk {i+1}:")
    print(f"  Tamaño: {len(chunk.page_content)} chars")
    print(f"  Metadata: {chunk.metadata}")
    print(f"  Contenido: {chunk.page_content[:100]}...")
\`\`\`

**Splitter por tokens** (más preciso para contextos de LLM):

\`\`\`python
splitter_tokens = TokenTextSplitter(
    chunk_size=256,     # Tokens, no caracteres
    chunk_overlap=50
)

chunks_tokens = splitter_tokens.split_documents(docs_txt)
print(f"Chunks por tokens: {len(chunks_tokens)}")
\`\`\`

#### Embeddings — Convertir texto a vectores

\`\`\`python
from langchain_openai import OpenAIEmbeddings
from langchain_community.embeddings import HuggingFaceEmbeddings

# Opción 1: OpenAI (requiere API key, cuesta dinero)
embeddings_openai = OpenAIEmbeddings(
    model="text-embedding-3-small"
)

# Opción 2: HuggingFace (local, gratis)
embeddings_local = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"
)

# Probar que funciona
texto_prueba = "RAG es una técnica para mejorar LLMs"
vector = embeddings_openai.embed_query(texto_prueba)
print(f"Dimensiones del vector: {len(vector)}")
\`\`\`

#### Vector Stores — Almacenar y buscar

LangChain se integra con más de 40 vector stores. Usaremos ChromaDB por simplicidad:

\`\`\`python
from langchain_community.vectorstores import Chroma

# Crear vector store a partir de documentos
# Esto automáticamente: genera embeddings + los almacena
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings_openai,
    collection_name="mi_coleccion",
    persist_directory="./chroma_db"  # Persistir en disco
)

print(f"Documentos en el vector store: {vectorstore._collection.count()}")

# Búsqueda por similitud
resultados = vectorstore.similarity_search(
    "¿Cómo instalar el producto?",
    k=3  # Top 3 resultados
)

for i, doc in enumerate(resultados):
    print(f"\\nResultado {i+1}:")
    print(f"  {doc.page_content[:150]}...")
    print(f"  Fuente: {doc.metadata}")

# Búsqueda con scores de similitud
resultados_con_score = vectorstore.similarity_search_with_score(
    "¿Cómo instalar el producto?",
    k=3
)

for doc, score in resultados_con_score:
    print(f"Score: {score:.4f} — {doc.page_content[:100]}...")
\`\`\`

#### El Retriever — Interfaz unificada de búsqueda

LangChain usa el concepto de **Retriever** como interfaz estándar para cualquier sistema de búsqueda:

\`\`\`python
# Convertir vector store en retriever
retriever = vectorstore.as_retriever(
    search_type="similarity",  # o "mmr" para Maximum Marginal Relevance
    search_kwargs={
        "k": 4  # Cantidad de documentos a recuperar
    }
)

# Usar el retriever
docs_relevantes = retriever.invoke("¿Cuáles son los requisitos del sistema?")
for doc in docs_relevantes:
    print(f"- {doc.page_content[:100]}...")
\`\`\`

**MMR (Maximum Marginal Relevance)** es una técnica que balancea relevancia con diversidad. En lugar de devolver los 4 resultados más similares (que podrían ser redundantes), selecciona resultados que son relevantes pero también diversos entre sí:

\`\`\`python
retriever_mmr = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 4,
        "fetch_k": 20,    # Buscar 20 candidatos
        "lambda_mult": 0.5  # Balance relevancia/diversidad (0=diverso, 1=relevante)
    }
)
\`\`\`

#### RetrievalQA Chain — El pipeline completo en una línea

Ahora conectamos todo con una cadena (chain) de LangChain:

\`\`\`python
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# Configurar el LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.2
)

# Prompt personalizado
template = """Usa el siguiente contexto para responder la pregunta del usuario.
Si no encuentras la respuesta en el contexto, di que no tienes información suficiente.
Responde en español de forma clara y concisa.

Contexto:
{context}

Pregunta: {question}

Respuesta útil:"""

prompt = PromptTemplate(
    template=template,
    input_variables=["context", "question"]
)

# Crear la cadena RAG
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",  # "stuff" = meter todo el contexto junto
    retriever=retriever,
    return_source_documents=True,
    chain_type_kwargs={"prompt": prompt}
)

# Hacer una pregunta
resultado = qa_chain.invoke({"query": "¿Cómo configuro el producto por primera vez?"})

print("Respuesta:", resultado["result"])
print("\\nFuentes:")
for doc in resultado["source_documents"]:
    print(f"  - {doc.metadata.get('source', 'desconocido')}")
\`\`\`

#### Usando LCEL (LangChain Expression Language) — El enfoque moderno

LangChain evolucionó hacia LCEL, un enfoque más composable y flexible:

\`\`\`python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# Función para formatear documentos
def formatear_docs(docs):
    return "\\n\\n".join(doc.page_content for doc in docs)

# Prompt
prompt = ChatPromptTemplate.from_template("""
Basándote en el siguiente contexto, responde la pregunta.
Si no sabes la respuesta basándote en el contexto, di que no tienes información.

Contexto: {context}

Pregunta: {question}

Respuesta:""")

# Cadena con LCEL
rag_chain = (
    {
        "context": retriever | formatear_docs,
        "question": RunnablePassthrough()
    }
    | prompt
    | llm
    | StrOutputParser()
)

# Usar la cadena
respuesta = rag_chain.invoke("¿Qué garantía tiene el producto?")
print(respuesta)
\`\`\`

#### Cargar un vector store persistente

Si ya creaste un vector store, puedes cargarlo sin re-procesar todo:

\`\`\`python
# Cargar vector store existente
vectorstore_existente = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings_openai,
    collection_name="mi_coleccion"
)

# Usarlo directamente
retriever_existente = vectorstore_existente.as_retriever()
\`\`\`

#### Conclusión

LangChain reduce drásticamente la cantidad de código necesario para implementar RAG. Lo que en la lección anterior eran ~100 líneas de código manual, acá se resuelve en ~30 líneas con abstracciones bien diseñadas.

Lo más importante: LangChain te permite **intercambiar componentes** fácilmente. ¿Quieres cambiar de OpenAI a un modelo local? Cambia una línea. ¿De ChromaDB a Pinecone? Dos líneas. Esta modularidad es clave para producción.

En la próxima lección, aplicamos todo esto a un caso de uso concreto: RAG sobre tus propios PDFs.
`;

export const leccion4 = `### RAG sobre tus propios PDFs

#### El caso de uso más demandado

Si hay un caso de uso que todos quieren implementar con RAG, es este: **hacer preguntas sobre PDFs**. Contratos legales, papers académicos, manuales técnicos, reportes financieros — la cantidad de conocimiento valioso atrapado en PDFs es enorme.

En esta lección vamos a construir un proyecto práctico completo: un sistema que carga PDFs, los procesa, y permite hacer preguntas en lenguaje natural con respuestas basadas en el contenido de esos documentos.

#### Setup del proyecto

\`\`\`bash
pip install langchain langchain-openai langchain-community chromadb
pip install pypdf pdfplumber  # Extractores de PDF
pip install tiktoken
\`\`\`

Estructura del proyecto:

\`\`\`
rag-pdfs/
├── pdfs/               # Tus archivos PDF
│   ├── manual.pdf
│   └── reporte.pdf
├── chroma_db/          # Base de datos vectorial (se crea automáticamente)
├── cargar_pdfs.py      # Script de procesamiento
└── consultar.py        # Script de consulta
\`\`\`

#### Paso 1: Extraer texto de PDFs

Hay varias librerías para extraer texto de PDFs. Cada una tiene sus fortalezas:

\`\`\`python
# cargar_pdfs.py
import os
from pathlib import Path

# === Opción A: PyPDF (simple, rápido) ===
from langchain_community.document_loaders import PyPDFLoader

def cargar_con_pypdf(ruta_pdf: str):
    """Carga un PDF usando PyPDF. Cada página es un documento."""
    loader = PyPDFLoader(ruta_pdf)
    paginas = loader.load()

    print(f"PDF: {ruta_pdf}")
    print(f"  Páginas cargadas: {len(paginas)}")
    print(f"  Primera página ({len(paginas[0].page_content)} chars):")
    print(f"  {paginas[0].page_content[:200]}...")

    return paginas

# === Opción B: pdfplumber (mejor con tablas y layouts complejos) ===
import pdfplumber
from langchain.schema import Document

def cargar_con_pdfplumber(ruta_pdf: str) -> list[Document]:
    """Carga un PDF usando pdfplumber. Mejor manejo de tablas."""
    documentos = []

    with pdfplumber.open(ruta_pdf) as pdf:
        for i, pagina in enumerate(pdf.pages):
            texto = pagina.extract_text()

            if texto and texto.strip():
                doc = Document(
                    page_content=texto,
                    metadata={
                        "source": ruta_pdf,
                        "page": i + 1,
                        "total_pages": len(pdf.pages)
                    }
                )
                documentos.append(doc)

            # Extraer tablas si las hay
            tablas = pagina.extract_tables()
            for j, tabla in enumerate(tablas):
                texto_tabla = "\\n".join(
                    [" | ".join(str(celda) if celda else "" for celda in fila)
                     for fila in tabla]
                )
                doc_tabla = Document(
                    page_content=f"Tabla (página {i+1}):\\n{texto_tabla}",
                    metadata={
                        "source": ruta_pdf,
                        "page": i + 1,
                        "tipo": "tabla",
                        "tabla_index": j
                    }
                )
                documentos.append(doc_tabla)

    print(f"PDF: {ruta_pdf} — {len(documentos)} documentos extraídos")
    return documentos
\`\`\`

**¿Cuál usar?**
- **PyPDF**: Rápido, simple, funciona bien para PDFs de texto limpio
- **pdfplumber**: Mejor con tablas, columnas y layouts complejos
- **Unstructured** (no mostrado): La más completa, maneja imágenes, OCR y formatos mixtos

#### Paso 2: Cargar todos los PDFs de un directorio

\`\`\`python
def cargar_todos_los_pdfs(directorio: str) -> list[Document]:
    """Carga todos los PDFs de un directorio."""
    todos_los_docs = []
    ruta = Path(directorio)

    archivos_pdf = list(ruta.glob("**/*.pdf"))
    print(f"Encontrados {len(archivos_pdf)} archivos PDF")

    for archivo in archivos_pdf:
        try:
            docs = cargar_con_pypdf(str(archivo))
            todos_los_docs.extend(docs)
        except Exception as e:
            print(f"Error procesando {archivo}: {e}")

    print(f"\\nTotal de documentos cargados: {len(todos_los_docs)}")
    return todos_los_docs

documentos = cargar_todos_los_pdfs("pdfs/")
\`\`\`

#### Paso 3: Chunking inteligente para PDFs

Los PDFs tienen particularidades: encabezados, pies de página, numeración de páginas, etc. Un buen chunking debe manejar esto:

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter
import re

def limpiar_texto_pdf(texto: str) -> str:
    """Limpia artefactos comunes de extracción de PDF."""
    # Remover múltiples espacios
    texto = re.sub(r' +', ' ', texto)
    # Remover líneas vacías excesivas
    texto = re.sub(r'\\n{3,}', '\\n\\n', texto)
    # Remover encabezados/pies de página comunes (ajustar según tus PDFs)
    texto = re.sub(r'Página \\d+ de \\d+', '', texto)
    return texto.strip()

def crear_chunks(documentos: list[Document], chunk_size: int = 800,
                 chunk_overlap: int = 200) -> list[Document]:
    """Crea chunks optimizados para PDFs."""
    # Limpiar textos
    for doc in documentos:
        doc.page_content = limpiar_texto_pdf(doc.page_content)

    # Filtrar documentos vacíos
    documentos = [doc for doc in documentos if len(doc.page_content.strip()) > 50]

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\\n\\n", "\\n", ". ", " "],
        length_function=len
    )

    chunks = splitter.split_documents(documentos)

    # Enriquecer metadata
    for i, chunk in enumerate(chunks):
        chunk.metadata["chunk_id"] = i
        chunk.metadata["chunk_size"] = len(chunk.page_content)

    print(f"Chunks creados: {len(chunks)}")
    print(f"Tamaño promedio: {sum(len(c.page_content) for c in chunks) // len(chunks)} chars")

    return chunks

chunks = crear_chunks(documentos)
\`\`\`

#### Paso 4: Crear el vector store

\`\`\`python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

def crear_vectorstore(chunks: list[Document], persist_dir: str = "./chroma_db"):
    """Crea y persiste un vector store a partir de chunks."""
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

    # Procesar en batches para evitar rate limits
    batch_size = 100
    vectorstore = None

    for i in range(0, len(chunks), batch_size):
        batch = chunks[i:i + batch_size]
        print(f"Procesando batch {i//batch_size + 1}/{(len(chunks)-1)//batch_size + 1}...")

        if vectorstore is None:
            vectorstore = Chroma.from_documents(
                documents=batch,
                embedding=embeddings,
                persist_directory=persist_dir,
                collection_name="pdfs_rag"
            )
        else:
            vectorstore.add_documents(batch)

    print(f"\\nVector store creado con {vectorstore._collection.count()} documentos")
    return vectorstore

vectorstore = crear_vectorstore(chunks)
\`\`\`

#### Paso 5: Sistema de consulta con fuentes citadas

\`\`\`python
# consultar.py
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

def crear_sistema_consulta(persist_dir: str = "./chroma_db"):
    """Crea el sistema de consulta RAG."""

    # Cargar vector store existente
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    vectorstore = Chroma(
        persist_directory=persist_dir,
        embedding_function=embeddings,
        collection_name="pdfs_rag"
    )

    retriever = vectorstore.as_retriever(
        search_type="mmr",
        search_kwargs={"k": 4, "fetch_k": 10}
    )

    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.1)

    prompt = ChatPromptTemplate.from_template("""
Eres un asistente experto que responde preguntas basándose ÚNICAMENTE en el contexto proporcionado.

Instrucciones:
- Responde de forma clara y completa en español
- Cita la fuente (nombre del archivo y página) cuando sea relevante
- Si la información no esta en el contexto, di: "No encontré información sobre esto en los documentos proporcionados."
- No inventes información

Contexto de los documentos:
{context}

Pregunta: {question}

Respuesta detallada con fuentes:""")

    def formatear_docs_con_fuente(docs):
        textos = []
        for doc in docs:
            fuente = doc.metadata.get("source", "desconocido")
            pagina = doc.metadata.get("page", "?")
            textos.append(f"[Fuente: {fuente}, Página: {pagina}]\\n{doc.page_content}")
        return "\\n\\n---\\n\\n".join(textos)

    chain = (
        {
            "context": retriever | formatear_docs_con_fuente,
            "question": RunnablePassthrough()
        }
        | prompt
        | llm
        | StrOutputParser()
    )

    return chain, retriever

# === Interfaz de uso ===
def main():
    print("Cargando sistema RAG...")
    chain, retriever = crear_sistema_consulta()
    print("Sistema listo. Escribe 'salir' para terminar.\\n")

    while True:
        pregunta = input("\\n📄 Tu pregunta: ").strip()
        if pregunta.lower() in ('salir', 'exit', 'quit'):
            break
        if not pregunta:
            continue

        print("\\nBuscando en documentos...")
        respuesta = chain.invoke(pregunta)
        print(f"\\n{respuesta}")

        # Mostrar fuentes
        docs = retriever.invoke(pregunta)
        print("\\n--- Fuentes consultadas ---")
        for doc in docs:
            fuente = doc.metadata.get("source", "?")
            pagina = doc.metadata.get("page", "?")
            print(f"  • {fuente} (pág. {pagina})")

if __name__ == "__main__":
    main()
\`\`\`

#### Ejecutar el proyecto completo

\`\`\`bash
# 1. Coloca tus PDFs en la carpeta pdfs/
mkdir -p pdfs/

# 2. Procesa los PDFs (solo la primera vez)
python cargar_pdfs.py

# 3. Consulta tus documentos
python consultar.py
\`\`\`

#### Tips para mejorar la extracción de PDFs

1. **PDFs escaneados (imágenes):** Necesitas OCR. Usa \`pytesseract\` o \`unstructured\` con el parámetro \`strategy="ocr_only"\`.
2. **PDFs con tablas complejas:** \`pdfplumber\` es mejor que \`PyPDF\` para tablas. Considera \`camelot-py\` para tablas muy complejas.
3. **PDFs con columnas:** Muchos extractores mezclan el texto de las columnas. \`unstructured\` maneja esto mejor.
4. **Metadatos del PDF:** Extrae título, autor y fecha del PDF y agregalos como metadata a tus chunks.

En la próxima lección veremos cómo optimizar la calidad de las respuestas de tu sistema RAG.
`;

export const leccion5 = `### Optimizar calidad de respuestas

#### El desafío real: de "funciona" a "funciona bien"

Construir un RAG básico es relativamente fácil. Hacer que produzca respuestas de alta calidad de forma consistente es un desafío completamente diferente. En esta lección vamos a explorar técnicas avanzadas de optimización que pueden mejorar dramáticamente la calidad de tu sistema.

Hay cinco áreas clave de optimización:
1. Chunking óptimo
2. Metadata enrichment
3. Re-ranking
4. Hybrid search
5. Prompt engineering para RAG

#### 1. Chunking óptimo — No existe un tamaño universal

El tamaño del chunk tiene un impacto enorme en la calidad. Chunks muy grandes diluyen la información relevante; chunks muy pequeños pierden contexto.

**Regla general:**
- **256-512 tokens**: Bueno para preguntas factuales cortas ("¿Cuál es el precio?")
- **512-1024 tokens**: Balance general, funciona para la mayoría de casos
- **1024-2048 tokens**: Mejor para preguntas que requieren razonamiento o contexto amplio

**Técnica avanzada: Parent-Child Chunking**

Creas chunks pequeños para la búsqueda (más precisa) pero recuperás el chunk padre (más contexto) para enviarlo al LLM:

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document

def crear_chunks_parent_child(documentos: list[Document]):
    """
    Crea un sistema de chunking jerárquico parent-child.
    - Parents: chunks grandes para dar contexto al LLM
    - Children: chunks pequeños para búsqueda precisa
    """
    # Splitter para chunks padres (grandes)
    parent_splitter = RecursiveCharacterTextSplitter(
        chunk_size=2000,
        chunk_overlap=200
    )

    # Splitter para chunks hijos (pequeños, para búsqueda)
    child_splitter = RecursiveCharacterTextSplitter(
        chunk_size=400,
        chunk_overlap=50
    )

    parents = parent_splitter.split_documents(documentos)

    # Para cada padre, crear hijos que referencian al padre
    all_children = []
    parent_map = {}  # child_id -> parent

    for i, parent in enumerate(parents):
        parent.metadata["parent_id"] = f"parent_{i}"
        children = child_splitter.split_documents([parent])

        for j, child in enumerate(children):
            child_id = f"child_{i}_{j}"
            child.metadata["child_id"] = child_id
            child.metadata["parent_id"] = f"parent_{i}"
            all_children.append(child)
            parent_map[child_id] = parent

    return all_children, parent_map, parents

# Uso: buscas entre children, pero devuelves el parent al LLM
children, parent_map, parents = crear_chunks_parent_child(documentos)

# Al buscar, recuperás el parent:
def buscar_con_parent(query, vectorstore, parent_map, k=3):
    """Busca children pero retorna parents para contexto completo."""
    child_results = vectorstore.similarity_search(query, k=k)

    # Recuperar parents únicos
    parent_ids_vistos = set()
    parent_docs = []
    for child in child_results:
        pid = child.metadata.get("parent_id")
        if pid and pid not in parent_ids_vistos:
            parent_ids_vistos.add(pid)
            parent_docs.append(parent_map[child.metadata["child_id"]])

    return parent_docs
\`\`\`

#### 2. Metadata Enrichment — Contexto adicional

Agregar metadata rica a tus chunks mejora tanto la búsqueda como la generación:

\`\`\`python
from langchain_openai import ChatOpenAI
import json

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def enriquecer_chunk(chunk: Document) -> Document:
    """Agrega metadata generada por LLM al chunk."""

    prompt = f"""Analiza el siguiente texto y genera metadata en formato JSON:
- "resumen": resumen de 1 oración
- "temas": lista de 3-5 temas principales
- "tipo": tipo de contenido (definición, procedimiento, ejemplo, tabla, etc.)
- "entidades": personas, organizaciones, productos mencionados

Texto:
{chunk.page_content[:1500]}

JSON:"""

    respuesta = llm.invoke(prompt)

    try:
        metadata_extra = json.loads(respuesta.content)
        chunk.metadata.update(metadata_extra)
    except json.JSONDecodeError:
        pass  # Si falla el parsing, mantener metadata original

    return chunk

# Enriquecer chunks (costoso, hacerlo una sola vez)
chunks_enriquecidos = [enriquecer_chunk(chunk) for chunk in chunks[:5]]  # Demo con 5
\`\`\`

**Metadata útil para filtrar búsquedas:**

\`\`\`python
# Filtrar por metadata en ChromaDB
resultados = vectorstore.similarity_search(
    "procedimiento de instalación",
    k=5,
    filter={"tipo": "procedimiento"}  # Solo buscar en procedimientos
)
\`\`\`

#### 3. Re-ranking — Segunda pasada de relevancia

La búsqueda vectorial es buena pero no perfecta. Un re-ranker puede reordenar los resultados para mejorar la precisión:

\`\`\`python
# Opción A: Re-ranking con Cross-Encoder (local)
from sentence_transformers import CrossEncoder

reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

def rerank_resultados(query: str, documentos: list[Document], top_k: int = 3) -> list[Document]:
    """Re-rankea documentos usando un Cross-Encoder."""
    # Crear pares (query, documento) para el cross-encoder
    pares = [(query, doc.page_content) for doc in documentos]

    # Obtener scores
    scores = reranker.predict(pares)

    # Ordenar por score descendente
    docs_con_score = list(zip(documentos, scores))
    docs_con_score.sort(key=lambda x: x[1], reverse=True)

    # Retornar top_k
    return [doc for doc, score in docs_con_score[:top_k]]

# Uso en el pipeline
def rag_con_reranking(query: str, vectorstore, top_k_busqueda=10, top_k_final=3):
    """RAG con re-ranking para mayor precisión."""
    # Paso 1: Buscar más resultados de los necesarios
    candidatos = vectorstore.similarity_search(query, k=top_k_busqueda)

    # Paso 2: Re-rankear y quedarse con los mejores
    mejores = rerank_resultados(query, candidatos, top_k=top_k_final)

    return mejores
\`\`\`

\`\`\`python
# Opción B: Re-ranking con Cohere (API, muy preciso)
# pip install cohere
import cohere

co = cohere.Client("tu-cohere-api-key")

def rerank_con_cohere(query: str, documentos: list[Document], top_k: int = 3):
    """Re-ranking usando Cohere Rerank API."""
    textos = [doc.page_content for doc in documentos]

    resultados = co.rerank(
        query=query,
        documents=textos,
        top_n=top_k,
        model="rerank-english-v3.0"
    )

    docs_reranked = [documentos[r.index] for r in resultados.results]
    return docs_reranked
\`\`\`

#### 4. Hybrid Search — Lo mejor de dos mundos

La búsqueda semántica (vectorial) es excelente para entender significado, pero puede fallar con términos exactos, códigos o nombres propios. La búsqueda por keywords (BM25) es el complemento perfecto.

\`\`\`python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

def crear_hybrid_retriever(chunks: list[Document], vectorstore):
    """
    Crea un retriever híbrido que combina búsqueda semántica + keywords.
    """
    # Retriever por keywords (BM25)
    bm25_retriever = BM25Retriever.from_documents(chunks)
    bm25_retriever.k = 5

    # Retriever semántico (vectorial)
    vector_retriever = vectorstore.as_retriever(
        search_kwargs={"k": 5}
    )

    # Combinar ambos con pesos
    ensemble_retriever = EnsembleRetriever(
        retrievers=[bm25_retriever, vector_retriever],
        weights=[0.4, 0.6]  # 40% keywords, 60% semántico
    )

    return ensemble_retriever

hybrid_retriever = crear_hybrid_retriever(chunks, vectorstore)

# Ahora funciona bien tanto para:
# - "error código E-4021" (keyword match)
# - "el sistema no enciende" (semantic match)
\`\`\`

#### 5. Prompt Engineering para RAG

El prompt que usas para la generación impacta enormemente en la calidad:

\`\`\`python
# Prompt básico (malo)
prompt_basico = "Responde usando el contexto: {context}. Pregunta: {question}"

# Prompt optimizado (bueno)
prompt_optimizado = """Eres un asistente experto y preciso. Tu tarea es responder preguntas
basándote EXCLUSIVAMENTE en los fragmentos de documentos proporcionados como contexto.

REGLAS ESTRICTAS:
1. Usa SOLO información del contexto. NO inventes ni agregues información externa.
2. Si la respuesta no esta en el contexto, responde: "No encontré esta información en los documentos disponibles."
3. Cita la fuente específica (documento y página) para cada afirmación importante.
4. Si la información es parcial, indicalo: "Basándome en la información disponible..."
5. Si hay información contradictoria entre fuentes, menciona ambas versiones.

CONTEXTO (fragmentos de documentos relevantes):
{context}

PREGUNTA DEL USUARIO:
{question}

RESPUESTA (con citas de fuente):"""
\`\`\`

**Técnica: Query Transformation**

A veces la pregunta del usuario es vaga o ambigua. Transformarla antes de buscar puede mejorar los resultados:

\`\`\`python
def expandir_query(query: str, llm) -> list[str]:
    """Genera múltiples versiones de la query para buscar más ampliamente."""
    prompt = f"""Genera 3 reformulaciones de la siguiente pregunta para buscar
en una base de documentos. Cada reformulación debe capturar un aspecto diferente
de lo que el usuario podría estar buscando.

Pregunta original: {query}

Reformulaciones (una por línea, sin numerar):"""

    respuesta = llm.invoke(prompt)
    queries = [q.strip() for q in respuesta.content.strip().split("\\n") if q.strip()]
    queries.insert(0, query)  # Incluir la original

    return queries[:4]  # Máximo 4 queries

def rag_con_query_expansion(query, vectorstore, llm, k_per_query=3):
    """Busca con múltiples variantes de la query."""
    queries = expandir_query(query, llm)

    todos_los_docs = []
    docs_vistos = set()

    for q in queries:
        resultados = vectorstore.similarity_search(q, k=k_per_query)
        for doc in resultados:
            doc_id = hash(doc.page_content)
            if doc_id not in docs_vistos:
                docs_vistos.add(doc_id)
                todos_los_docs.append(doc)

    return todos_los_docs
\`\`\`

#### Resumen de optimizaciones

| Técnica | Impacto | Complejidad | Costo |
|---------|---------|-------------|-------|
| Ajustar chunk size | Alto | Bajo | Gratis |
| Parent-child chunking | Alto | Medio | Gratis |
| Metadata enrichment | Medio | Medio | API calls |
| Re-ranking | Alto | Medio | Bajo/gratis |
| Hybrid search | Alto | Medio | Gratis |
| Query expansion | Medio | Bajo | API calls |
| Prompt engineering | Alto | Bajo | Gratis |

La clave es iterar: medir, optimizar, medir de nuevo. En la próxima lección vas a aprender exactamente cómo medir la calidad de tu sistema RAG.
`;

export const leccion6 = `### Evaluaciones y métricas de RAG

#### ¿Cómo sabes si tu RAG funciona bien?

Construiste tu sistema RAG, hiciste algunas preguntas de prueba y las respuestas "se ven bien". Pero eso no alcanza. Necesitas métricas cuantitativas para saber qué tan bien funciona tu sistema y, más importante, para medir si tus optimizaciones realmente mejoran las cosas.

Evaluar un sistema RAG es más complejo que evaluar un modelo de ML tradicional porque tienes **dos componentes independientes** que evaluar:
1. **Retrieval**: ¿Se recuperaron los documentos correctos?
2. **Generation**: ¿La respuesta generada es fiel al contexto y responde la pregunta?

#### Las métricas fundamentales

**1. Faithfulness (Fidelidad)**

Mide si la respuesta generada es consistente con el contexto recuperado. Una respuesta con alta fidelidad no contiene información que no esté en los documentos recuperados (no alucina).

\`\`\`
Fidelidad = (Afirmaciones soportadas por el contexto) / (Total de afirmaciones en la respuesta)
\`\`\`

**Ejemplo:**
- Contexto: "El producto X cuesta $100 y viene en colores rojo y azul"
- Respuesta: "El producto X cuesta $100, viene en rojo, azul y verde, y tiene garantía de 2 años"
- Fidelidad: 2/4 = 0.5 (las afirmaciones sobre verde y garantía no están en el contexto)

**2. Answer Relevancy (Relevancia de la respuesta)**

Mide si la respuesta realmente responde la pregunta del usuario.

**Ejemplo:**
- Pregunta: "¿Cuánto cuesta el producto X?"
- Respuesta A: "El producto X cuesta $100" → Alta relevancia
- Respuesta B: "El producto X viene en colores rojo y azul" → Baja relevancia (información correcta pero no responde la pregunta)

**3. Context Relevancy (Relevancia del contexto)**

Mide si los documentos recuperados son relevantes para la pregunta. Si recuperás documentos irrelevantes, el LLM tiene que filtrar ruido y es más probable que genere respuestas pobres.

**4. Context Recall**

Mide qué proporción de la información necesaria para responder fue recuperada. Si la respuesta correcta requiere información de 3 documentos pero solo recuperaste 1, tu recall es bajo.

**5. Answer Correctness (Corrección)**

La métrica final: ¿la respuesta es factualmente correcta? Requiere tener respuestas de referencia (ground truth).

#### Evaluación manual: el punto de partida

Antes de usar frameworks automáticos, construye un set de evaluación manual:

\`\`\`python
# dataset_evaluacion.py

evaluacion_dataset = [
    {
        "pregunta": "¿Cuáles son los requisitos del sistema para instalar el producto?",
        "respuesta_esperada": "Se requiere Windows 10 o superior, 8GB de RAM y 2GB de espacio en disco.",
        "contexto_esperado": ["manual.pdf - página 5"],
        "categoria": "factual"
    },
    {
        "pregunta": "¿Cómo configuro la conexión WiFi?",
        "respuesta_esperada": "Ir a Configuración > Red > WiFi, seleccionar la red y escribir la contraseña.",
        "contexto_esperado": ["manual.pdf - página 12", "manual.pdf - página 13"],
        "categoria": "procedimiento"
    },
    {
        "pregunta": "¿Qué hacer si aparece el error E-501?",
        "respuesta_esperada": "Reiniciar el dispositivo y verificar la conexión de red.",
        "contexto_esperado": ["guia_errores.pdf - página 8"],
        "categoria": "troubleshooting"
    },
    # ... más casos (idealmente 50-100)
]
\`\`\`

\`\`\`python
# evaluacion_manual.py

from langchain_openai import ChatOpenAI

llm_evaluador = ChatOpenAI(model="gpt-4o", temperature=0)  # Modelo potente para evaluar

def evaluar_fidelidad(respuesta: str, contexto: str) -> dict:
    """Evalúa la fidelidad de una respuesta con respecto al contexto."""
    prompt = f"""Evalúa la fidelidad de la siguiente respuesta con respecto al contexto dado.

Contexto:
{contexto}

Respuesta a evaluar:
{respuesta}

Instrucciones:
1. Identifica cada afirmación factual en la respuesta
2. Verifica si cada afirmación esta soportada por el contexto
3. Devuelve un JSON con:
   - "afirmaciones": lista de afirmaciones encontradas
   - "soportadas": cantidad de afirmaciones soportadas por el contexto
   - "total": cantidad total de afirmaciones
   - "score": soportadas/total (0 a 1)
   - "alucinaciones": lista de afirmaciones no soportadas

JSON:"""

    resultado = llm_evaluador.invoke(prompt)
    import json
    try:
        return json.loads(resultado.content)
    except:
        return {"score": 0, "error": "No se pudo parsear la evaluación"}


def evaluar_relevancia(pregunta: str, respuesta: str) -> dict:
    """Evalúa si la respuesta es relevante para la pregunta."""
    prompt = f"""Evalúa si la siguiente respuesta es relevante y útil para la pregunta.

Pregunta: {pregunta}
Respuesta: {respuesta}

Devuelve un JSON con:
- "score": de 0 a 1 (1 = perfectamente relevante)
- "explicacion": por qué diste ese score
- "responde_pregunta": true/false

JSON:"""

    resultado = llm_evaluador.invoke(prompt)
    import json
    try:
        return json.loads(resultado.content)
    except:
        return {"score": 0, "error": "No se pudo parsear"}
\`\`\`

#### RAGAS: Framework automático de evaluación

**RAGAS** (Retrieval Augmented Generation Assessment) es el framework más popular para evaluar sistemas RAG de forma automática:

\`\`\`bash
pip install ragas
\`\`\`

\`\`\`python
from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall,
    answer_correctness
)
from datasets import Dataset

# Preparar datos para RAGAS
# Necesitas ejecutar tu pipeline RAG y guardar los resultados
def preparar_datos_ragas(dataset_eval, rag_chain, retriever):
    """Ejecuta el RAG y prepara datos en formato RAGAS."""
    preguntas = []
    respuestas = []
    contextos = []
    ground_truths = []

    for item in dataset_eval:
        pregunta = item["pregunta"]

        # Ejecutar RAG
        docs_recuperados = retriever.invoke(pregunta)
        respuesta = rag_chain.invoke(pregunta)

        preguntas.append(pregunta)
        respuestas.append(respuesta)
        contextos.append([doc.page_content for doc in docs_recuperados])
        ground_truths.append(item["respuesta_esperada"])

    return Dataset.from_dict({
        "question": preguntas,
        "answer": respuestas,
        "contexts": contextos,
        "ground_truth": ground_truths
    })

# Preparar y evaluar
dataset_ragas = preparar_datos_ragas(evaluacion_dataset, rag_chain, retriever)

resultado = evaluate(
    dataset_ragas,
    metrics=[
        faithfulness,
        answer_relevancy,
        context_precision,
        context_recall,
        answer_correctness
    ]
)

print(resultado)
# Ejemplo de output:
# {
#     'faithfulness': 0.85,
#     'answer_relevancy': 0.92,
#     'context_precision': 0.78,
#     'context_recall': 0.81,
#     'answer_correctness': 0.87
# }
\`\`\`

#### Evaluación del retrieval por separado

Es crucial evaluar el retrieval independientemente de la generación:

\`\`\`python
def evaluar_retrieval(dataset_eval, retriever, k=5):
    """Evalúa la calidad del retrieval con métricas clásicas de IR."""

    resultados = {
        "hit_rate": [],  # ¿Aparece algún documento relevante?
        "mrr": [],       # Mean Reciprocal Rank
    }

    for item in dataset_eval:
        pregunta = item["pregunta"]
        fuentes_esperadas = item["contexto_esperado"]

        docs = retriever.invoke(pregunta)
        fuentes_recuperadas = [
            f"{doc.metadata.get('source', '')} - página {doc.metadata.get('page', '?')}"
            for doc in docs
        ]

        # Hit rate: ¿Al menos un documento relevante?
        hit = any(
            any(esperada in recuperada for recuperada in fuentes_recuperadas)
            for esperada in fuentes_esperadas
        )
        resultados["hit_rate"].append(1 if hit else 0)

        # MRR: Posición del primer resultado relevante
        rr = 0
        for i, recuperada in enumerate(fuentes_recuperadas):
            if any(esperada in recuperada for esperada in fuentes_esperadas):
                rr = 1 / (i + 1)
                break
        resultados["mrr"].append(rr)

    # Calcular promedios
    avg_hit_rate = sum(resultados["hit_rate"]) / len(resultados["hit_rate"])
    avg_mrr = sum(resultados["mrr"]) / len(resultados["mrr"])

    print(f"Hit Rate@{k}: {avg_hit_rate:.2%}")
    print(f"MRR@{k}: {avg_mrr:.4f}")

    return {"hit_rate": avg_hit_rate, "mrr": avg_mrr}

metricas_retrieval = evaluar_retrieval(evaluacion_dataset, retriever)
\`\`\`

#### Pipeline de evaluación continua

En producción, necesitas evaluar continuamente:

\`\`\`python
import json
from datetime import datetime

def ejecutar_evaluacion_completa(rag_chain, retriever, dataset_eval, nombre_experimento: str):
    """Ejecuta una evaluación completa y guarda los resultados."""

    timestamp = datetime.now().isoformat()
    resultados_detalle = []

    for item in dataset_eval:
        pregunta = item["pregunta"]
        docs = retriever.invoke(pregunta)
        respuesta = rag_chain.invoke(pregunta)
        contexto = "\\n\\n".join([d.page_content for d in docs])

        fidelidad = evaluar_fidelidad(respuesta, contexto)
        relevancia = evaluar_relevancia(pregunta, respuesta)

        resultados_detalle.append({
            "pregunta": pregunta,
            "respuesta": respuesta,
            "fidelidad_score": fidelidad.get("score", 0),
            "relevancia_score": relevancia.get("score", 0),
            "alucinaciones": fidelidad.get("alucinaciones", [])
        })

    # Resumen
    avg_fidelidad = sum(r["fidelidad_score"] for r in resultados_detalle) / len(resultados_detalle)
    avg_relevancia = sum(r["relevancia_score"] for r in resultados_detalle) / len(resultados_detalle)

    reporte = {
        "experimento": nombre_experimento,
        "timestamp": timestamp,
        "metricas_promedio": {
            "fidelidad": round(avg_fidelidad, 4),
            "relevancia": round(avg_relevancia, 4)
        },
        "total_evaluaciones": len(resultados_detalle),
        "detalle": resultados_detalle
    }

    # Guardar resultados
    archivo = f"eval_{nombre_experimento}_{timestamp[:10]}.json"
    with open(archivo, "w", encoding="utf-8") as f:
        json.dump(reporte, f, ensure_ascii=False, indent=2)

    print(f"\\nExperimento: {nombre_experimento}")
    print(f"Fidelidad promedio: {avg_fidelidad:.2%}")
    print(f"Relevancia promedio: {avg_relevancia:.2%}")
    print(f"Resultados guardados en: {archivo}")

    return reporte

# Comparar configuraciones
reporte_v1 = ejecutar_evaluacion_completa(chain_v1, retriever_v1, dataset, "chunk_500_overlap_100")
reporte_v2 = ejecutar_evaluacion_completa(chain_v2, retriever_v2, dataset, "chunk_800_overlap_200")
\`\`\`

#### Qué scores son "buenos"

No hay un estándar universal, pero como referencia:
- **Faithfulness > 0.85**: Tu sistema no alucina demasiado
- **Answer Relevancy > 0.80**: Las respuestas son útiles
- **Context Recall > 0.75**: El retrieval encuentra la información necesaria
- **Hit Rate > 0.90**: Casi siempre recuperás al menos un documento relevante

Si tus scores son bajos, la lección 5 te da las herramientas para mejorarlos. Evalúa, optimiza, evalúa de nuevo — ese es el ciclo.

En la próxima lección, vas a integrar todo lo que aprendiste en un proyecto completo.
`;

export const leccion7 = `### Proyecto: buscador inteligente sobre tus documentos

#### Objetivo del proyecto

En esta lección vamos a construir un proyecto integrador completo: un **buscador inteligente por CLI** que permite:
- Cargar documentos de múltiples formatos (TXT, PDF, Markdown)
- Crear un índice vectorial persistente
- Buscar con lenguaje natural
- Generar respuestas con fuentes citadas
- Modo interactivo por terminal

Este proyecto integra todo lo que aprendimos en las lecciones anteriores.

#### Estructura del proyecto

\`\`\`
buscador-inteligente/
├── main.py              # Punto de entrada y CLI
├── indexador.py          # Módulo de carga e indexación
├── buscador.py           # Módulo de búsqueda y generación
├── config.py             # Configuración
├── documentos/           # Carpeta para tus documentos
├── indice/               # Vector store persistente
└── requirements.txt
\`\`\`

#### requirements.txt

\`\`\`
langchain>=0.2.0
langchain-openai>=0.1.0
langchain-community>=0.2.0
chromadb>=0.5.0
pypdf>=4.0.0
tiktoken>=0.7.0
rich>=13.0.0
\`\`\`

#### config.py — Configuración centralizada

\`\`\`python
# config.py
import os
from pathlib import Path

# Directorios
BASE_DIR = Path(__file__).parent
DOCUMENTOS_DIR = BASE_DIR / "documentos"
INDICE_DIR = BASE_DIR / "indice"

# Crear directorios si no existen
DOCUMENTOS_DIR.mkdir(exist_ok=True)
INDICE_DIR.mkdir(exist_ok=True)

# Configuración de chunking
CHUNK_SIZE = 800
CHUNK_OVERLAP = 200

# Configuración de búsqueda
TOP_K_RETRIEVAL = 6       # Documentos a recuperar
TOP_K_FINAL = 4           # Documentos después de re-ranking

# Modelos
EMBEDDING_MODEL = "text-embedding-3-small"
LLM_MODEL = "gpt-4o-mini"
LLM_TEMPERATURE = 0.1

# Collection name
COLLECTION_NAME = "buscador_docs"

# Verificar API key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    print("ADVERTENCIA: OPENAI_API_KEY no esta configurada")
    print("Ejecuta: export OPENAI_API_KEY='tu-key-aqui'")
\`\`\`

#### indexador.py — Carga e indexación de documentos

\`\`\`python
# indexador.py
import time
from pathlib import Path
from langchain_community.document_loaders import (
    TextLoader,
    PyPDFLoader,
    UnstructuredMarkdownLoader
)
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.schema import Document

import config


# Mapa de extensiones a loaders
LOADERS = {
    ".txt": lambda path: TextLoader(path, encoding="utf-8"),
    ".pdf": lambda path: PyPDFLoader(path),
    ".md": lambda path: TextLoader(path, encoding="utf-8"),
}

EXTENSIONES_SOPORTADAS = set(LOADERS.keys())


def descubrir_documentos(directorio: Path) -> list[Path]:
    """Encuentra todos los documentos soportados en el directorio."""
    archivos = []
    for ext in EXTENSIONES_SOPORTADAS:
        archivos.extend(directorio.glob(f"**/*{ext}"))

    archivos.sort(key=lambda x: x.name)
    return archivos


def cargar_documento(ruta: Path) -> list[Document]:
    """Carga un documento individual usando el loader apropiado."""
    extension = ruta.suffix.lower()

    if extension not in LOADERS:
        print(f"  Formato no soportado: {extension}")
        return []

    try:
        loader = LOADERS[extension](str(ruta))
        docs = loader.load()

        # Enriquecer metadata
        for doc in docs:
            doc.metadata["nombre_archivo"] = ruta.name
            doc.metadata["extension"] = extension
            doc.metadata["ruta"] = str(ruta)

        return docs
    except Exception as e:
        print(f"  Error cargando {ruta.name}: {e}")
        return []


def crear_chunks(documentos: list[Document]) -> list[Document]:
    """Divide documentos en chunks optimizados."""
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=config.CHUNK_SIZE,
        chunk_overlap=config.CHUNK_OVERLAP,
        separators=["\\n\\n", "\\n", ". ", " "],
        length_function=len
    )

    chunks = splitter.split_documents(documentos)

    # Filtrar chunks vacíos o muy pequeños
    chunks = [c for c in chunks if len(c.page_content.strip()) > 30]

    # Agregar ID a cada chunk
    for i, chunk in enumerate(chunks):
        chunk.metadata["chunk_id"] = i

    return chunks


def crear_indice(chunks: list[Document]) -> Chroma:
    """Crea el vector store a partir de chunks."""
    embeddings = OpenAIEmbeddings(model=config.EMBEDDING_MODEL)

    # Eliminar índice anterior si existe
    import shutil
    indice_path = str(config.INDICE_DIR)
    if config.INDICE_DIR.exists():
        shutil.rmtree(indice_path)
        config.INDICE_DIR.mkdir(exist_ok=True)

    # Crear en batches
    batch_size = 50
    vectorstore = None

    for i in range(0, len(chunks), batch_size):
        batch = chunks[i:i + batch_size]

        if vectorstore is None:
            vectorstore = Chroma.from_documents(
                documents=batch,
                embedding=embeddings,
                persist_directory=indice_path,
                collection_name=config.COLLECTION_NAME
            )
        else:
            vectorstore.add_documents(batch)

        print(f"  Indexados {min(i + batch_size, len(chunks))}/{len(chunks)} chunks")

    return vectorstore


def indexar_documentos() -> tuple[int, int]:
    """Pipeline completo: descubrir → cargar → chunking → indexar."""
    print("\\n=== INDEXACIÓN DE DOCUMENTOS ===\\n")

    # 1. Descubrir archivos
    archivos = descubrir_documentos(config.DOCUMENTOS_DIR)
    if not archivos:
        print(f"No se encontraron documentos en: {config.DOCUMENTOS_DIR}")
        print(f"Coloca archivos .txt, .pdf o .md en esa carpeta")
        return 0, 0

    print(f"Archivos encontrados: {len(archivos)}")
    for a in archivos:
        print(f"  - {a.name}")

    # 2. Cargar documentos
    print("\\nCargando documentos...")
    todos_los_docs = []
    for archivo in archivos:
        docs = cargar_documento(archivo)
        todos_los_docs.extend(docs)
        print(f"  {archivo.name}: {len(docs)} secciones")

    print(f"Total de secciones cargadas: {len(todos_los_docs)}")

    # 3. Crear chunks
    print("\\nCreando chunks...")
    chunks = crear_chunks(todos_los_docs)
    print(f"Chunks creados: {len(chunks)}")
    print(f"Tamaño promedio: {sum(len(c.page_content) for c in chunks) // max(len(chunks), 1)} chars")

    # 4. Indexar
    print("\\nIndexando (generando embeddings)...")
    inicio = time.time()
    crear_indice(chunks)
    duracion = time.time() - inicio
    print(f"Indexación completada en {duracion:.1f} segundos")

    return len(archivos), len(chunks)
\`\`\`

#### buscador.py — Búsqueda y generación

\`\`\`python
# buscador.py
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain.schema import Document

import config


class BuscadorInteligente:
    """Sistema de búsqueda y respuesta sobre documentos indexados."""

    def __init__(self):
        self.embeddings = OpenAIEmbeddings(model=config.EMBEDDING_MODEL)
        self.llm = ChatOpenAI(
            model=config.LLM_MODEL,
            temperature=config.LLM_TEMPERATURE
        )
        self.vectorstore = None
        self.retriever = None
        self.chain = None

    def cargar_indice(self) -> bool:
        """Carga el índice vectorial persistido."""
        try:
            self.vectorstore = Chroma(
                persist_directory=str(config.INDICE_DIR),
                embedding_function=self.embeddings,
                collection_name=config.COLLECTION_NAME
            )

            count = self.vectorstore._collection.count()
            if count == 0:
                print("El índice esta vacío. Ejecuta primero: python main.py indexar")
                return False

            self.retriever = self.vectorstore.as_retriever(
                search_type="mmr",
                search_kwargs={
                    "k": config.TOP_K_FINAL,
                    "fetch_k": config.TOP_K_RETRIEVAL
                }
            )

            self._crear_chain()
            print(f"Índice cargado: {count} chunks disponibles")
            return True

        except Exception as e:
            print(f"Error cargando índice: {e}")
            return False

    def _crear_chain(self):
        """Crea la cadena RAG."""
        prompt = ChatPromptTemplate.from_template("""Eres un asistente experto que responde preguntas basándose EXCLUSIVAMENTE en los documentos proporcionados.

REGLAS:
1. Usa SOLO información del contexto. NO inventes datos.
2. Si no encuentras la respuesta, di: "No encontré esta información en los documentos indexados."
3. Cita la fuente (nombre de archivo y página si aplica) para cada afirmación importante.
4. Responde en español, de forma clara y estructurada.
5. Si la información es parcial, indicalo.

DOCUMENTOS RECUPERADOS:
{context}

PREGUNTA: {question}

RESPUESTA (con citas):""")

        self.chain = (
            {
                "context": self.retriever | self._formatear_docs,
                "question": RunnablePassthrough()
            }
            | prompt
            | self.llm
            | StrOutputParser()
        )

    @staticmethod
    def _formatear_docs(docs: list[Document]) -> str:
        """Formatea documentos recuperados con metadata."""
        partes = []
        for i, doc in enumerate(docs, 1):
            nombre = doc.metadata.get("nombre_archivo", "desconocido")
            pagina = doc.metadata.get("page", None)

            fuente = f"[{nombre}"
            if pagina is not None:
                fuente += f", pág. {pagina + 1}"
            fuente += "]"

            partes.append(f"--- Fragmento {i} {fuente} ---\\n{doc.page_content}")

        return "\\n\\n".join(partes)

    def buscar(self, pregunta: str) -> dict:
        """Ejecuta una búsqueda completa: retrieval + generación."""
        if not self.chain:
            return {"error": "Índice no cargado"}

        # Recuperar documentos para mostrar fuentes
        docs = self.retriever.invoke(pregunta)

        # Generar respuesta
        respuesta = self.chain.invoke(pregunta)

        # Compilar fuentes
        fuentes = []
        fuentes_vistas = set()
        for doc in docs:
            nombre = doc.metadata.get("nombre_archivo", "desconocido")
            pagina = doc.metadata.get("page", None)

            clave = f"{nombre}-{pagina}"
            if clave not in fuentes_vistas:
                fuentes_vistas.add(clave)
                fuente_info = {"archivo": nombre}
                if pagina is not None:
                    fuente_info["pagina"] = pagina + 1
                fuentes.append(fuente_info)

        return {
            "respuesta": respuesta,
            "fuentes": fuentes,
            "num_fragmentos": len(docs)
        }

    def busqueda_simple(self, pregunta: str, k: int = 5) -> list[dict]:
        """Búsqueda semántica sin generación (solo retrieval)."""
        if not self.vectorstore:
            return []

        resultados = self.vectorstore.similarity_search_with_score(pregunta, k=k)

        return [
            {
                "contenido": doc.page_content[:300],
                "archivo": doc.metadata.get("nombre_archivo", "?"),
                "pagina": doc.metadata.get("page", None),
                "score": round(float(score), 4)
            }
            for doc, score in resultados
        ]
\`\`\`

#### main.py — Interfaz CLI

\`\`\`python
# main.py
import sys
from rich.console import Console
from rich.panel import Panel
from rich.markdown import Markdown
from rich.table import Table

from indexador import indexar_documentos
from buscador import BuscadorInteligente
import config

console = Console()


def comando_indexar():
    """Indexa todos los documentos en la carpeta de documentos."""
    n_archivos, n_chunks = indexar_documentos()
    if n_archivos > 0:
        console.print(f"\\n[green]Indexación exitosa: {n_archivos} archivos, {n_chunks} chunks[/green]")
    else:
        console.print(f"\\n[yellow]Coloca documentos en: {config.DOCUMENTOS_DIR}[/yellow]")


def comando_buscar():
    """Modo interactivo de búsqueda."""
    buscador = BuscadorInteligente()

    if not buscador.cargar_indice():
        console.print("[red]No se pudo cargar el índice. Ejecuta primero: python main.py indexar[/red]")
        return

    console.print(Panel(
        "[bold]Buscador Inteligente de Documentos[/bold]\\n\\n"
        "Escribe tu pregunta en lenguaje natural.\\n"
        "Comandos: 'salir' para terminar, 'buscar' para búsqueda sin generación",
        title="Bienvenido",
        border_style="blue"
    ))

    while True:
        console.print()
        pregunta = console.input("[bold cyan]Tu pregunta:[/bold cyan] ").strip()

        if not pregunta:
            continue

        if pregunta.lower() in ('salir', 'exit', 'quit'):
            console.print("[dim]Hasta luego.[/dim]")
            break

        # Modo búsqueda simple
        if pregunta.lower().startswith("buscar "):
            query = pregunta[7:]
            console.print(f"\\n[dim]Buscando fragmentos para: {query}[/dim]")
            resultados = buscador.busqueda_simple(query)

            table = Table(title="Resultados de búsqueda")
            table.add_column("Archivo", style="cyan")
            table.add_column("Pág.", style="green")
            table.add_column("Score", style="yellow")
            table.add_column("Contenido", max_width=60)

            for r in resultados:
                table.add_row(
                    r["archivo"],
                    str(r["pagina"] or "-"),
                    str(r["score"]),
                    r["contenido"][:100] + "..."
                )

            console.print(table)
            continue

        # Modo RAG completo
        console.print("[dim]Buscando en documentos y generando respuesta...[/dim]\\n")

        try:
            resultado = buscador.buscar(pregunta)

            if "error" in resultado:
                console.print(f"[red]{resultado['error']}[/red]")
                continue

            # Mostrar respuesta
            console.print(Panel(
                Markdown(resultado["respuesta"]),
                title="Respuesta",
                border_style="green"
            ))

            # Mostrar fuentes
            if resultado["fuentes"]:
                console.print("\\n[bold]Fuentes consultadas:[/bold]")
                for fuente in resultado["fuentes"]:
                    pag = f" (pág. {fuente['pagina']})" if fuente.get('pagina') else ""
                    console.print(f"  [cyan]>[/cyan] {fuente['archivo']}{pag}")

        except Exception as e:
            console.print(f"[red]Error: {e}[/red]")


def comando_info():
    """Muestra información del índice actual."""
    from langchain_openai import OpenAIEmbeddings
    from langchain_community.vectorstores import Chroma

    try:
        embeddings = OpenAIEmbeddings(model=config.EMBEDDING_MODEL)
        vs = Chroma(
            persist_directory=str(config.INDICE_DIR),
            embedding_function=embeddings,
            collection_name=config.COLLECTION_NAME
        )
        count = vs._collection.count()

        console.print(f"\\n[bold]Estado del índice:[/bold]")
        console.print(f"  Chunks indexados: {count}")
        console.print(f"  Directorio: {config.INDICE_DIR}")
        console.print(f"  Modelo embeddings: {config.EMBEDDING_MODEL}")
        console.print(f"  Modelo LLM: {config.LLM_MODEL}")
    except Exception:
        console.print("[yellow]No hay índice creado. Ejecuta: python main.py indexar[/yellow]")


def main():
    if len(sys.argv) < 2:
        console.print("\\n[bold]Uso:[/bold]")
        console.print("  python main.py indexar   — Indexar documentos")
        console.print("  python main.py buscar    — Buscar en documentos")
        console.print("  python main.py info      — Información del índice")
        return

    comando = sys.argv[1].lower()

    if comando == "indexar":
        comando_indexar()
    elif comando == "buscar":
        comando_buscar()
    elif comando == "info":
        comando_info()
    else:
        console.print(f"[red]Comando desconocido: {comando}[/red]")
        console.print("Comandos disponibles: indexar, buscar, info")


if __name__ == "__main__":
    main()
\`\`\`

#### Cómo usar el proyecto

\`\`\`bash
# 1. Instalar dependencias
pip install -r requirements.txt

# 2. Configurar API key
export OPENAI_API_KEY="sk-..."

# 3. Agregar documentos
cp mi_manual.pdf documentos/
cp notas_tecnicas.txt documentos/
cp guia_producto.md documentos/

# 4. Indexar
python main.py indexar

# 5. Buscar
python main.py buscar
# > Tu pregunta: ¿Cómo configuro el WiFi?
# > [Respuesta con fuentes citadas]

# 6. Ver info del índice
python main.py info
\`\`\`

#### Extensiones sugeridas

Este proyecto base se puede extender de muchas formas:

1. **Interfaz web** con Streamlit o Gradio
2. **Historial de conversación** para preguntas de seguimiento
3. **Re-ranking** con Cross-Encoder para mayor precisión
4. **Búsqueda híbrida** (BM25 + semántica)
5. **Soporte multi-idioma** con modelos de embeddings multilingües
6. **API REST** con FastAPI para integrarlo en otras aplicaciones
7. **Feedback del usuario** para mejorar el sistema continuamente

Este proyecto demuestra que con ~300 líneas de Python y las herramientas correctas, puedes construir un buscador inteligente sobre tus propios documentos que compite con soluciones comerciales.
`;

export const leccion8 = `### Quiz — RAG y búsqueda inteligente

Evalúa tu comprensión de los conceptos de RAG, embeddings, chunking y evaluación con estas 10 preguntas.

---

### Pregunta 1

¿Qué problema principal resuelve RAG (Retrieval-Augmented Generation)?

a) Hace que los LLMs generen texto más rápido
b) Permite que los LLMs accedan a información externa que no estaba en su entrenamiento
c) Reduce el costo de entrenamiento de modelos de lenguaje
d) Mejora la gramática de las respuestas generadas

**Respuesta correcta: b)** RAG resuelve el problema del conocimiento limitado de los LLMs, permitiéndoles acceder a información actualizada y privada que no formó parte de su entrenamiento, reduciendo así las alucinaciones.

---

### Pregunta 2

En el pipeline RAG, ¿cuál es el orden correcto de los pasos?

a) Embeddings → Chunking → Búsqueda → Generación
b) Chunking → Búsqueda → Embeddings → Generación
c) Chunking → Embeddings → Búsqueda → Generación
d) Búsqueda → Chunking → Embeddings → Generación

**Respuesta correcta: c)** El pipeline correcto es: primero se dividen los documentos en chunks, luego se generan embeddings (vectores) de cada chunk, después se buscan los chunks más similares a la consulta, y finalmente el LLM genera una respuesta con ese contexto.

---

### Pregunta 3

¿Qué es el "overlap" en una estrategia de chunking?

a) La cantidad de documentos que se procesan en paralelo
b) La superposición de texto entre chunks consecutivos para no perder contexto en los bordes
c) El número de veces que se repite la búsqueda
d) La distancia mínima entre embeddings para considerarlos similares

**Respuesta correcta: b)** El overlap es la cantidad de texto que se comparte entre chunks consecutivos. Evita que información importante que cae en el límite entre dos chunks se pierda, asegurando continuidad de contexto.

---

### Pregunta 4

¿Qué son los embeddings en el contexto de RAG?

a) Fragmentos de texto extraídos de documentos
b) Instrucciones que se le dan al LLM
c) Representaciones numéricas (vectores) de texto que capturan su significado semántico
d) Índices de bases de datos relacionales

**Respuesta correcta: c)** Los embeddings son vectores de números (típicamente de 384 a 1536 dimensiones) que representan el significado semántico del texto. Textos con significados similares tendrán embeddings cercanos en el espacio vectorial.

---

### Pregunta 5

¿Cuál es la ventaja principal de RAG sobre fine-tuning para agregar conocimiento específico a un LLM?

a) RAG produce respuestas más largas
b) RAG permite actualizar la información sin re-entrenar el modelo y ofrece trazabilidad de fuentes
c) RAG es siempre más preciso que fine-tuning
d) RAG no necesita ningún tipo de procesamiento previo

**Respuesta correcta: b)** RAG permite actualizar datos instantáneamente (solo agregas documentos al índice), cita las fuentes de donde sacó la información, mantiene los datos privados separados del modelo, y es significativamente más barato y rápido que re-entrenar.

---

### Pregunta 6

¿Qué es MMR (Maximum Marginal Relevance) en el contexto de búsqueda?

a) Una métrica para medir la calidad de las respuestas del LLM
b) Una técnica que balancea relevancia con diversidad en los resultados de búsqueda
c) Un algoritmo para comprimir embeddings
d) Un método para fusionar múltiples vector stores

**Respuesta correcta: b)** MMR selecciona resultados que son relevantes para la consulta pero también diversos entre sí. Esto evita recuperar múltiples fragmentos redundantes que dicen lo mismo, maximizando la información útil que recibe el LLM.

---

### Pregunta 7

¿Qué mide la métrica "faithfulness" (fidelidad) en la evaluación de RAG?

a) Si los documentos recuperados son relevantes para la pregunta
b) Si la respuesta generada es consistente con el contexto recuperado (no alucina)
c) Si el usuario esta satisfecho con la respuesta
d) Si el modelo de embeddings es preciso

**Respuesta correcta: b)** Faithfulness mide si las afirmaciones en la respuesta generada están soportadas por el contexto recuperado. Una fidelidad baja indica que el LLM esta inventando información que no esta en los documentos (alucinando).

---

### Pregunta 8

En una estrategia de búsqueda híbrida, ¿qué se combina?

a) Dos modelos LLM diferentes
b) Búsqueda por keywords (BM25) con búsqueda semántica (vectorial)
c) Chunks grandes con chunks pequeños
d) Embeddings de OpenAI con embeddings de Hugging Face

**Respuesta correcta: b)** La búsqueda híbrida combina búsqueda por keywords (como BM25, que busca coincidencias exactas de palabras) con búsqueda semántica (vectorial, que entiende significado). Esto es especialmente útil porque la búsqueda semántica puede fallar con términos técnicos o códigos específicos donde la coincidencia exacta es mejor.

---

### Pregunta 9

¿Qué es la técnica "parent-child chunking"?

a) Crear chunks para documentos principales y secundarios por separado
b) Usar chunks pequeños para búsqueda precisa pero recuperar el chunk padre (más grande) para dar más contexto al LLM
c) Dividir un documento primero por capítulos y luego por párrafos
d) Indexar tanto el documento original como su resumen

**Respuesta correcta: b)** Parent-child chunking crea dos niveles: chunks hijos pequeños que se usan para la búsqueda (porque son más específicos y dan mejor precision de matching), y chunks padres grandes que se envían al LLM (porque proporcionan más contexto para generar respuestas completas).

---

### Pregunta 10

Tienes un sistema RAG con alta "answer relevancy" pero baja "faithfulness". ¿Qué esta pasando?

a) El sistema no encuentra documentos relevantes
b) Las respuestas son relevantes para la pregunta pero contienen información inventada que no esta en los documentos
c) El LLM es demasiado lento
d) Los chunks son demasiado grandes

**Respuesta correcta: b)** Alta relevancia con baja fidelidad significa que el LLM entiende qué se le esta preguntando y genera respuestas que parecen apropiadas, pero esta agregando información que no proviene del contexto recuperado (esta alucinando). Soluciones incluyen: mejorar el prompt para que sea más estricto con el contexto, reducir la temperatura del LLM, y mejorar el retrieval para dar mejor contexto.
`;
