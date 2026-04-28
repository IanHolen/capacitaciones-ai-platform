// English content for Course 14: RAG and Intelligent Search
// Level 5 Pro — 8 lessons for aspiring AI engineers

export const leccion1 = `### What is RAG and why it revolutionized AI

#### The fundamental problem with LLMs

Large language models (LLMs) like GPT-4, Claude, or Llama are impressive. They can write code, summarize texts, maintain complex conversations, and reason about problems. But they have a fundamental problem that limits their usefulness in real applications: **their knowledge has a cutoff date and they don't know your private data**.

Imagine you ask ChatGPT: "What were my company's Q3 2025 sales?" — the model has no idea. No matter how intelligent it is, it simply doesn't have access to that information. The same applies to internal documentation, corporate knowledge bases, proprietary technical manuals, or any data that wasn't in its training set.

This creates two critical problems:

1. **Outdated knowledge**: The model was trained with data up to a certain date and knows nothing after that.
2. **Hallucinations**: When the model doesn't have the information, it often invents answers that sound convincing but are incorrect.

#### The solution: Retrieval-Augmented Generation (RAG)

RAG is an architectural pattern that solves this problem elegantly. The central idea is simple but powerful: **instead of relying solely on the model's internal knowledge, we provide it with relevant context retrieved from external sources in real time**.

The term was introduced by Facebook AI Research (now Meta AI) in 2020 in the paper "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks". Since then, it has become the industry standard for building AI applications on top of your own data.

#### How RAG works — Conceptual diagram

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    RAG PIPELINE                          │
│                                                          │
│  ┌──────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │ User     │───▶│  Semantic    │───▶│  Relevant     │  │
│  │ Question │    │  Search      │    │  Documents    │  │
│  │          │    │  (Retrieval) │    │  (Top-K)      │  │
│  └──────────┘    └──────────────┘    └───────┬───────┘  │
│                                              │          │
│                                              ▼          │
│  ┌──────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │ Final    │◀───│     LLM      │◀───│   Prompt +    │  │
│  │ Response │    │  (Generation)│    │   Context     │  │
│  └──────────┘    └──────────────┘    └───────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
\`\`\`

**Step 1 — Retrieval:** When the user asks a question, the system searches a vector database for the document fragments most relevant to that query.

**Step 2 — Augmentation:** The retrieved fragments are inserted as context into the prompt sent to the LLM.

**Step 3 — Generation:** The LLM generates a response based on the provided context, not just its internal knowledge.

#### Why RAG and not fine-tuning

A natural question is: why not simply re-train the model with my data? Fine-tuning has its place, but RAG offers significant advantages:

| Aspect | RAG | Fine-tuning |
|--------|-----|-------------|
| Data updates | Instant | Requires re-training |
| Cost | Low | High (GPU, time) |
| Traceability | Can cite sources | No traceability |
| Hallucinations | Reduced (real context) | Persist |
| Private data | Kept separate | Integrated into model |
| Implementation time | Hours/days | Days/weeks |

RAG doesn't completely replace fine-tuning — they're complementary. But for most enterprise use cases, RAG is the most practical and effective option.

#### Real-world RAG use cases

**1. Technical support assistants:** Companies like Zendesk and Intercom use RAG so their chatbots respond with up-to-date information from their knowledge base. When a customer asks something, the system searches help articles, documentation, and previous tickets to give a precise answer.

**2. Legal search:** Law firms implement RAG over their case law database. Instead of manually searching through thousands of legal documents, a lawyer asks in natural language and gets answers with citations to the exact documents.

**3. Medical assistants:** Hospitals and clinics use RAG over clinical guidelines and medical papers to help doctors make informed decisions. The system can answer "What is the recommended treatment for X?" citing the specific guidelines.

**4. Technical documentation:** GitHub Copilot and similar tools use RAG variants to understand your codebase and give contextual suggestions. Notion AI searches your own documents to answer questions.

**5. Academic research:** Researchers use RAG over collections of papers to find connections between studies, summarize the state of the art on a topic, or identify research gaps.

#### Key components of a RAG system

To understand RAG in depth, you need to know these fundamental concepts:

- **Embeddings:** Numerical representations (vectors) of text that capture semantic meaning. Similar texts have similar embeddings.
- **Vector Store:** Database optimized to store and search embeddings efficiently (e.g., Pinecone, Weaviate, ChromaDB, FAISS).
- **Chunking:** The process of dividing large documents into smaller, manageable fragments.
- **Similarity Search:** Algorithm that finds the fragments most similar to the user's query, using cosine distance or other metrics.
- **Prompt Template:** The template that combines the user's question with the retrieved context to send to the LLM.

#### The current ecosystem

The ecosystem of tools for RAG has grown enormously. Frameworks like **LangChain**, **LlamaIndex**, **Haystack**, and **Semantic Kernel** facilitate implementation. Vector databases like **Pinecone**, **Weaviate**, **Qdrant**, **ChromaDB**, and **pgvector** (PostgreSQL extension) offer efficient storage and search.

In the following lessons you'll build your own RAG system from scratch, understand each component in depth, and learn to optimize it for high-quality responses.

#### Conclusion

RAG transformed the way we build AI applications. We went from models that only know what they learned in training to systems that can query any knowledge source in real time. It's the bridge between the general intelligence of LLMs and the specific data of your domain.

In the next lesson, we'll break down the complete pipeline: from a raw document to a generated response with cited sources.
`;

export const leccion2 = `### Complete pipeline: document -> chunks -> embeddings -> search

#### Overview of the flow

In this lesson we'll walk through each stage of the RAG pipeline in detail, with functional Python code. By the end, you'll understand exactly what happens from when you have a text document to when you get an LLM-generated response with information from that document.

\`\`\`
Original Document
       │
       ▼
┌─────────────┐
│  Document   │  ← Read files (PDF, TXT, HTML, etc.)
│  Loading    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Chunking   │  ← Split into manageable fragments
│  (Splitting)│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Embeddings │  ← Convert text to numerical vectors
│  (Vectors)  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Vector     │  ← Store in vector database
│  Store      │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Semantic   │  ← Find relevant fragments
│  Search     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Generation │  ← LLM generates response with context
│  (LLM)      │
└─────────────┘
\`\`\`

#### Step 1: Document loading

Everything starts with a document. It can be a PDF, a text file, a web page, a CSV, or any source of textual information. The first step is to extract clean text.

\`\`\`python
# Simple example: load a text file
def cargar_documento(ruta: str) -> str:
    """Loads a text document and returns its content."""
    with open(ruta, 'r', encoding='utf-8') as f:
        contenido = f.read()
    return contenido

texto = cargar_documento("manual_producto.txt")
print(f"Document loaded: {len(texto)} characters")
\`\`\`

For more complex formats like PDF, you need specialized libraries. We'll see that in detail in lesson 4.

#### Step 2: Chunking — The art of splitting documents

This is possibly the most critical and underestimated step of the pipeline. Bad chunking can ruin your entire RAG system, no matter how good your embedding model or LLM is.

**Why split?** LLMs have a context limit (token window). You can't fit a 500-page document into the prompt. Additionally, embeddings work better with shorter, focused texts.

**Strategy 1: Character chunking with overlap**

The most basic but surprisingly effective for many cases:

\`\`\`python
def chunk_por_caracteres(texto: str, chunk_size: int = 1000, overlap: int = 200) -> list[str]:
    """
    Splits text into fixed-size chunks with overlap.

    Args:
        texto: The complete text to split
        chunk_size: Maximum size of each chunk in characters
        overlap: Number of characters that overlap between consecutive chunks

    Returns:
        List of text chunks
    """
    chunks = []
    inicio = 0

    while inicio < len(texto):
        fin = inicio + chunk_size
        chunk = texto[inicio:fin]
        chunks.append(chunk)
        inicio = fin - overlap  # Step back to create overlap

    return chunks

# Usage example
texto = cargar_documento("manual_producto.txt")
chunks = chunk_por_caracteres(texto, chunk_size=1000, overlap=200)
print(f"Document split into {len(chunks)} chunks")
print(f"First chunk: {chunks[0][:100]}...")
\`\`\`

**Why overlap?** The overlap ensures that if an important idea is at the boundary between two chunks, it doesn't get lost. Without overlap, you could cut a sentence in half and lose crucial context.

**Strategy 2: Chunking by separators (paragraphs, sections)**

Smarter: respects the natural structure of the document.

\`\`\`python
def chunk_por_separadores(texto: str, separadores: list[str] = None,
                          chunk_size: int = 1000) -> list[str]:
    """
    Splits text using hierarchical separators, respecting structure.
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
                # If individual part is too large, split with next separator
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
print(f"Chunks created: {len(chunks)}")
for i, chunk in enumerate(chunks[:3]):
    print(f"\\nChunk {i+1} ({len(chunk)} chars): {chunk[:80]}...")
\`\`\`

**Strategy 3: Token-based chunking**

The most precise, because LLMs work with tokens, not characters:

\`\`\`python
import tiktoken

def chunk_por_tokens(texto: str, max_tokens: int = 256, overlap_tokens: int = 50,
                     modelo: str = "cl100k_base") -> list[str]:
    """Splits text into chunks based on token count."""
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

**Which one to choose?** It depends on your case:
- **Structured documents** (manuals, papers): Separator-based chunking
- **Continuous text** (transcripts, conversations): Token chunking with overlap
- **Quick prototyping**: Character chunking with overlap

#### Step 3: Generate embeddings

Embeddings are vector representations of the text. Each chunk is converted into a vector of numbers (typically 768 or 1536 dimensions) that captures its semantic meaning.

\`\`\`python
from openai import OpenAI

client = OpenAI()  # Uses OPENAI_API_KEY from environment

def generar_embeddings(textos: list[str], modelo: str = "text-embedding-3-small") -> list[list[float]]:
    """
    Generates embeddings for a list of texts using OpenAI.

    Args:
        textos: List of strings to convert to embeddings
        modelo: Embedding model to use

    Returns:
        List of vectors (each is a list of floats)
    """
    respuesta = client.embeddings.create(
        input=textos,
        model=modelo
    )

    embeddings = [item.embedding for item in respuesta.data]
    return embeddings

# Generate embeddings for our chunks
embeddings = generar_embeddings(chunks)
print(f"Embeddings generated: {len(embeddings)}")
print(f"Dimensions per vector: {len(embeddings[0])}")
# Example: text-embedding-3-small produces 1536-dimensional vectors
\`\`\`

**Open source alternatives** for embeddings:
- **sentence-transformers**: Models like \`all-MiniLM-L6-v2\` (fast) or \`all-mpnet-base-v2\` (better quality)
- **Hugging Face**: Models like \`BAAI/bge-large-en-v1.5\`
- **Ollama**: Local models like \`nomic-embed-text\`

\`\`\`python
# Alternative with sentence-transformers (local, free)
from sentence_transformers import SentenceTransformer

modelo_local = SentenceTransformer('all-MiniLM-L6-v2')
embeddings_locales = modelo_local.encode(chunks)
print(f"Dimensions: {embeddings_locales.shape}")  # (n_chunks, 384)
\`\`\`

#### Step 4: Store in a Vector Store

You need an efficient place to save and search your embeddings. We'll use **ChromaDB** for its simplicity and local nature:

\`\`\`python
import chromadb

# Create client and collection
cliente_chroma = chromadb.Client()
coleccion = cliente_chroma.create_collection(
    name="my_documents",
    metadata={"hnsw:space": "cosine"}  # Use cosine distance
)

# Add chunks with their embeddings
coleccion.add(
    documents=chunks,
    embeddings=embeddings,
    ids=[f"chunk_{i}" for i in range(len(chunks))],
    metadatas=[{"source": "manual_producto.txt", "chunk_index": i} for i in range(len(chunks))]
)

print(f"Stored {coleccion.count()} documents in ChromaDB")
\`\`\`

#### Step 5: Semantic search

Now comes the interesting part — searching for relevant fragments for a question:

\`\`\`python
def buscar(consulta: str, n_resultados: int = 3) -> dict:
    """Searches for the most relevant chunks for a query."""
    resultados = coleccion.query(
        query_texts=[consulta],
        n_results=n_resultados
    )
    return resultados

# Search
consulta = "How do I set up the product for the first time?"
resultados = buscar(consulta)

print(f"Query: {consulta}\\n")
for i, (doc, dist) in enumerate(zip(resultados['documents'][0], resultados['distances'][0])):
    print(f"Result {i+1} (distance: {dist:.4f}):")
    print(f"  {doc[:150]}...\\n")
\`\`\`

#### Step 6: Generation with context (the "G" in RAG)

Finally, we combine the search results with the question and send it to the LLM:

\`\`\`python
def generar_respuesta_rag(consulta: str, n_contextos: int = 3) -> str:
    """Complete RAG pipeline: search + generate."""
    # 1. Search for relevant context
    resultados = buscar(consulta, n_resultados=n_contextos)
    contextos = resultados['documents'][0]

    # 2. Build prompt with context
    contexto_combinado = "\\n\\n---\\n\\n".join(contextos)

    prompt = f"""Based ONLY on the following context, answer the user's question.
If the information is not in the context, say you don't have enough information.

CONTEXT:
{contexto_combinado}

QUESTION: {consulta}

ANSWER:"""

    # 3. Generate response with LLM
    respuesta = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that answers based only on the provided context."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.2  # Low temperature for responses more faithful to context
    )

    return respuesta.choices[0].message.content

# Use the complete pipeline
respuesta = generar_respuesta_rag("How do I set up the product for the first time?")
print(respuesta)
\`\`\`

#### Pipeline summary

You've just seen the complete RAG pipeline in action. Each step is an optimization opportunity:

- **Chunking**: Size, overlap, splitting strategy
- **Embeddings**: Model, dimensions, normalization
- **Vector Store**: Index, distance metric, search parameters
- **Prompt**: Template, instructions, context format
- **LLM**: Model, temperature, max tokens

In the next lesson, we'll see how LangChain simplifies all of this in just a few lines of code.
`;

export const leccion3 = `### Implementing RAG with LangChain

#### Why LangChain?

In the previous lesson we built a RAG pipeline from scratch. It was excellent for understanding each component, but in practice, using a framework saves you time, reduces errors, and gives you access to an ecosystem of already-tested integrations.

**LangChain** is the most popular framework for building LLM applications. It offers abstractions for each component of the RAG pipeline and allows swapping components (for example, from OpenAI to a local model) with minimal code changes.

#### Installation and setup

\`\`\`bash
pip install langchain langchain-openai langchain-community chromadb
pip install tiktoken unstructured  # Useful optional dependencies
\`\`\`

Set up your API key:

\`\`\`bash
export OPENAI_API_KEY="your-api-key-here"
\`\`\`

#### Document Loaders — Loading documents

LangChain has more than 160 loaders for different sources. Each loader returns a list of \`Document\` objects, which contain the text (\`page_content\`) and metadata (\`metadata\`).

\`\`\`python
from langchain_community.document_loaders import (
    TextLoader,
    DirectoryLoader,
    WebBaseLoader,
    CSVLoader,
    PyPDFLoader
)

# Load a text file
loader_txt = TextLoader("data/manual.txt", encoding="utf-8")
docs_txt = loader_txt.load()
print(f"Documents loaded: {len(docs_txt)}")
print(f"Content: {docs_txt[0].page_content[:200]}")
print(f"Metadata: {docs_txt[0].metadata}")

# Load all files from a directory
loader_dir = DirectoryLoader(
    "data/",
    glob="**/*.txt",
    loader_cls=TextLoader,
    loader_kwargs={"encoding": "utf-8"}
)
docs_dir = loader_dir.load()
print(f"Documents from directory: {len(docs_dir)}")

# Load a web page
loader_web = WebBaseLoader("https://docs.python.org/3/tutorial/index.html")
docs_web = loader_web.load()
print(f"Web content: {docs_web[0].page_content[:200]}")

# Load a CSV
loader_csv = CSVLoader("data/products.csv")
docs_csv = loader_csv.load()
print(f"CSV rows as documents: {len(docs_csv)}")
\`\`\`

#### Text Splitters — Splitting documents

LangChain offers several text splitters that implement the chunking strategies we saw:

\`\`\`python
from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
    CharacterTextSplitter,
    TokenTextSplitter
)

# The most recommended: RecursiveCharacterTextSplitter
# Tries to split by: \\n\\n -> \\n -> space -> character
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,       # Maximum size in characters
    chunk_overlap=200,     # Overlap between chunks
    length_function=len,   # Function to measure length
    separators=["\\n\\n", "\\n", ". ", " ", ""]  # Separator hierarchy
)

chunks = splitter.split_documents(docs_txt)  # Accepts list of Document
print(f"Chunks created: {len(chunks)}")

# Each chunk maintains the original document's metadata
for i, chunk in enumerate(chunks[:3]):
    print(f"\\nChunk {i+1}:")
    print(f"  Size: {len(chunk.page_content)} chars")
    print(f"  Metadata: {chunk.metadata}")
    print(f"  Content: {chunk.page_content[:100]}...")
\`\`\`

**Token-based splitter** (more precise for LLM contexts):

\`\`\`python
splitter_tokens = TokenTextSplitter(
    chunk_size=256,     # Tokens, not characters
    chunk_overlap=50
)

chunks_tokens = splitter_tokens.split_documents(docs_txt)
print(f"Token-based chunks: {len(chunks_tokens)}")
\`\`\`

#### Embeddings — Converting text to vectors

\`\`\`python
from langchain_openai import OpenAIEmbeddings
from langchain_community.embeddings import HuggingFaceEmbeddings

# Option 1: OpenAI (requires API key, costs money)
embeddings_openai = OpenAIEmbeddings(
    model="text-embedding-3-small"
)

# Option 2: HuggingFace (local, free)
embeddings_local = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"
)

# Test that it works
texto_prueba = "RAG is a technique for improving LLMs"
vector = embeddings_openai.embed_query(texto_prueba)
print(f"Vector dimensions: {len(vector)}")
\`\`\`

#### Vector Stores — Store and search

LangChain integrates with more than 40 vector stores. We'll use ChromaDB for simplicity:

\`\`\`python
from langchain_community.vectorstores import Chroma

# Create vector store from documents
# This automatically: generates embeddings + stores them
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings_openai,
    collection_name="my_collection",
    persist_directory="./chroma_db"  # Persist to disk
)

print(f"Documents in vector store: {vectorstore._collection.count()}")

# Search by similarity
resultados = vectorstore.similarity_search(
    "How do I install the product?",
    k=3  # Top 3 results
)

for i, doc in enumerate(resultados):
    print(f"\\nResult {i+1}:")
    print(f"  {doc.page_content[:150]}...")
    print(f"  Source: {doc.metadata}")

# Search with similarity scores
resultados_con_score = vectorstore.similarity_search_with_score(
    "How do I install the product?",
    k=3
)

for doc, score in resultados_con_score:
    print(f"Score: {score:.4f} — {doc.page_content[:100]}...")
\`\`\`

#### The Retriever — Unified search interface

LangChain uses the **Retriever** concept as a standard interface for any search system:

\`\`\`python
# Convert vector store to retriever
retriever = vectorstore.as_retriever(
    search_type="similarity",  # or "mmr" for Maximum Marginal Relevance
    search_kwargs={
        "k": 4  # Number of documents to retrieve
    }
)

# Use the retriever
docs_relevantes = retriever.invoke("What are the system requirements?")
for doc in docs_relevantes:
    print(f"- {doc.page_content[:100]}...")
\`\`\`

**MMR (Maximum Marginal Relevance)** is a technique that balances relevance with diversity. Instead of returning the 4 most similar results (which could be redundant), it selects results that are relevant but also diverse from each other:

\`\`\`python
retriever_mmr = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 4,
        "fetch_k": 20,    # Search 20 candidates
        "lambda_mult": 0.5  # Relevance/diversity balance (0=diverse, 1=relevant)
    }
)
\`\`\`

#### RetrievalQA Chain — The complete pipeline in one line

Now we connect everything with a LangChain chain:

\`\`\`python
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# Configure the LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.2
)

# Custom prompt
template = """Use the following context to answer the user's question.
If you don't find the answer in the context, say you don't have enough information.
Respond clearly and concisely.

Context:
{context}

Question: {question}

Helpful answer:"""

prompt = PromptTemplate(
    template=template,
    input_variables=["context", "question"]
)

# Create the RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",  # "stuff" = put all context together
    retriever=retriever,
    return_source_documents=True,
    chain_type_kwargs={"prompt": prompt}
)

# Ask a question
resultado = qa_chain.invoke({"query": "How do I set up the product for the first time?"})

print("Answer:", resultado["result"])
print("\\nSources:")
for doc in resultado["source_documents"]:
    print(f"  - {doc.metadata.get('source', 'unknown')}")
\`\`\`

#### Using LCEL (LangChain Expression Language) — The modern approach

LangChain evolved toward LCEL, a more composable and flexible approach:

\`\`\`python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# Function to format documents
def formatear_docs(docs):
    return "\\n\\n".join(doc.page_content for doc in docs)

# Prompt
prompt = ChatPromptTemplate.from_template("""
Based on the following context, answer the question.
If you don't know the answer based on the context, say you don't have the information.

Context: {context}

Question: {question}

Answer:""")

# Chain with LCEL
rag_chain = (
    {
        "context": retriever | formatear_docs,
        "question": RunnablePassthrough()
    }
    | prompt
    | llm
    | StrOutputParser()
)

# Use the chain
respuesta = rag_chain.invoke("What warranty does the product have?")
print(respuesta)
\`\`\`

#### Load a persistent vector store

If you already created a vector store, you can load it without re-processing everything:

\`\`\`python
# Load existing vector store
vectorstore_existente = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings_openai,
    collection_name="my_collection"
)

# Use it directly
retriever_existente = vectorstore_existente.as_retriever()
\`\`\`

#### Conclusion

LangChain drastically reduces the amount of code needed to implement RAG. What in the previous lesson was ~100 lines of manual code, here is resolved in ~30 lines with well-designed abstractions.

Most importantly: LangChain lets you **swap components** easily. Want to switch from OpenAI to a local model? Change one line. From ChromaDB to Pinecone? Two lines. This modularity is key for production.

In the next lesson, we apply all of this to a concrete use case: RAG on your own PDFs.
`;

export const leccion4 = `### RAG on your own PDFs

#### The most demanded use case

If there's one use case everyone wants to implement with RAG, it's this: **asking questions about PDFs**. Legal contracts, academic papers, technical manuals, financial reports — the amount of valuable knowledge trapped in PDFs is enormous.

In this lesson we'll build a complete practical project: a system that loads PDFs, processes them, and allows asking questions in natural language with answers based on the content of those documents.

#### Project setup

\`\`\`bash
pip install langchain langchain-openai langchain-community chromadb
pip install pypdf pdfplumber  # PDF extractors
pip install tiktoken
\`\`\`

Project structure:

\`\`\`
rag-pdfs/
├── pdfs/               # Your PDF files
│   ├── manual.pdf
│   └── report.pdf
├── chroma_db/          # Vector database (created automatically)
├── cargar_pdfs.py      # Processing script
└── consultar.py        # Query script
\`\`\`

#### Step 1: Extract text from PDFs

There are several libraries for extracting text from PDFs. Each has its strengths:

\`\`\`python
# cargar_pdfs.py
import os
from pathlib import Path

# === Option A: PyPDF (simple, fast) ===
from langchain_community.document_loaders import PyPDFLoader

def cargar_con_pypdf(ruta_pdf: str):
    """Loads a PDF using PyPDF. Each page is a document."""
    loader = PyPDFLoader(ruta_pdf)
    paginas = loader.load()

    print(f"PDF: {ruta_pdf}")
    print(f"  Pages loaded: {len(paginas)}")
    print(f"  First page ({len(paginas[0].page_content)} chars):")
    print(f"  {paginas[0].page_content[:200]}...")

    return paginas

# === Option B: pdfplumber (better with tables and complex layouts) ===
import pdfplumber
from langchain.schema import Document

def cargar_con_pdfplumber(ruta_pdf: str) -> list[Document]:
    """Loads a PDF using pdfplumber. Better table handling."""
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

            # Extract tables if present
            tablas = pagina.extract_tables()
            for j, tabla in enumerate(tablas):
                texto_tabla = "\\n".join(
                    [" | ".join(str(celda) if celda else "" for celda in fila)
                     for fila in tabla]
                )
                doc_tabla = Document(
                    page_content=f"Table (page {i+1}):\\n{texto_tabla}",
                    metadata={
                        "source": ruta_pdf,
                        "page": i + 1,
                        "tipo": "table",
                        "tabla_index": j
                    }
                )
                documentos.append(doc_tabla)

    print(f"PDF: {ruta_pdf} — {len(documentos)} documents extracted")
    return documentos
\`\`\`

**Which one to use?**
- **PyPDF**: Fast, simple, works well for clean text PDFs
- **pdfplumber**: Better with tables, columns, and complex layouts
- **Unstructured** (not shown): The most complete, handles images, OCR, and mixed formats

#### Step 2: Load all PDFs from a directory

\`\`\`python
def cargar_todos_los_pdfs(directorio: str) -> list[Document]:
    """Loads all PDFs from a directory."""
    todos_los_docs = []
    ruta = Path(directorio)

    archivos_pdf = list(ruta.glob("**/*.pdf"))
    print(f"Found {len(archivos_pdf)} PDF files")

    for archivo in archivos_pdf:
        try:
            docs = cargar_con_pypdf(str(archivo))
            todos_los_docs.extend(docs)
        except Exception as e:
            print(f"Error processing {archivo}: {e}")

    print(f"\\nTotal documents loaded: {len(todos_los_docs)}")
    return todos_los_docs

documentos = cargar_todos_los_pdfs("pdfs/")
\`\`\`

#### Step 3: Smart chunking for PDFs

PDFs have particularities: headers, footers, page numbering, etc. Good chunking must handle this:

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter
import re

def limpiar_texto_pdf(texto: str) -> str:
    """Cleans common PDF extraction artifacts."""
    # Remove multiple spaces
    texto = re.sub(r' +', ' ', texto)
    # Remove excessive empty lines
    texto = re.sub(r'\\n{3,}', '\\n\\n', texto)
    # Remove common headers/footers (adjust for your PDFs)
    texto = re.sub(r'Page \\d+ of \\d+', '', texto)
    return texto.strip()

def crear_chunks(documentos: list[Document], chunk_size: int = 800,
                 chunk_overlap: int = 200) -> list[Document]:
    """Creates chunks optimized for PDFs."""
    # Clean texts
    for doc in documentos:
        doc.page_content = limpiar_texto_pdf(doc.page_content)

    # Filter empty documents
    documentos = [doc for doc in documentos if len(doc.page_content.strip()) > 50]

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\\n\\n", "\\n", ". ", " "],
        length_function=len
    )

    chunks = splitter.split_documents(documentos)

    # Enrich metadata
    for i, chunk in enumerate(chunks):
        chunk.metadata["chunk_id"] = i
        chunk.metadata["chunk_size"] = len(chunk.page_content)

    print(f"Chunks created: {len(chunks)}")
    print(f"Average size: {sum(len(c.page_content) for c in chunks) // len(chunks)} chars")

    return chunks

chunks = crear_chunks(documentos)
\`\`\`

#### Step 4: Create the vector store

\`\`\`python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

def crear_vectorstore(chunks: list[Document], persist_dir: str = "./chroma_db"):
    """Creates and persists a vector store from chunks."""
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

    # Process in batches to avoid rate limits
    batch_size = 100
    vectorstore = None

    for i in range(0, len(chunks), batch_size):
        batch = chunks[i:i + batch_size]
        print(f"Processing batch {i//batch_size + 1}/{(len(chunks)-1)//batch_size + 1}...")

        if vectorstore is None:
            vectorstore = Chroma.from_documents(
                documents=batch,
                embedding=embeddings,
                persist_directory=persist_dir,
                collection_name="pdfs_rag"
            )
        else:
            vectorstore.add_documents(batch)

    print(f"\\nVector store created with {vectorstore._collection.count()} documents")
    return vectorstore

vectorstore = crear_vectorstore(chunks)
\`\`\`

#### Step 5: Query system with cited sources

\`\`\`python
# consultar.py
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

def crear_sistema_consulta(persist_dir: str = "./chroma_db"):
    """Creates the RAG query system."""

    # Load existing vector store
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
You are an expert assistant that answers questions based ONLY on the provided context.

Instructions:
- Respond clearly and completely
- Cite the source (filename and page) when relevant
- If the information is not in the context, say: "I didn't find information about this in the provided documents."
- Do not invent information

Document context:
{context}

Question: {question}

Detailed answer with sources:""")

    def formatear_docs_con_fuente(docs):
        textos = []
        for doc in docs:
            fuente = doc.metadata.get("source", "unknown")
            pagina = doc.metadata.get("page", "?")
            textos.append(f"[Source: {fuente}, Page: {pagina}]\\n{doc.page_content}")
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

# === Usage interface ===
def main():
    print("Loading RAG system...")
    chain, retriever = crear_sistema_consulta()
    print("System ready. Type 'exit' to quit.\\n")

    while True:
        pregunta = input("\\nYour question: ").strip()
        if pregunta.lower() in ('exit', 'quit'):
            break
        if not pregunta:
            continue

        print("\\nSearching documents...")
        respuesta = chain.invoke(pregunta)
        print(f"\\n{respuesta}")

        # Show sources
        docs = retriever.invoke(pregunta)
        print("\\n--- Sources consulted ---")
        for doc in docs:
            fuente = doc.metadata.get("source", "?")
            pagina = doc.metadata.get("page", "?")
            print(f"  - {fuente} (p. {pagina})")

if __name__ == "__main__":
    main()
\`\`\`

#### Run the complete project

\`\`\`bash
# 1. Place your PDFs in the pdfs/ folder
mkdir -p pdfs/

# 2. Process the PDFs (only the first time)
python cargar_pdfs.py

# 3. Query your documents
python consultar.py
\`\`\`

#### Tips for improving PDF extraction

1. **Scanned PDFs (images):** You need OCR. Use \`pytesseract\` or \`unstructured\` with the \`strategy="ocr_only"\` parameter.
2. **PDFs with complex tables:** \`pdfplumber\` is better than \`PyPDF\` for tables. Consider \`camelot-py\` for very complex tables.
3. **PDFs with columns:** Many extractors mix text from columns. \`unstructured\` handles this better.
4. **PDF metadata:** Extract the PDF's title, author, and date and add them as metadata to your chunks.

In the next lesson we'll see how to optimize the quality of your RAG system's responses.
`;

export const leccion5 = `### Optimizing response quality

#### The real challenge: from "it works" to "it works well"

Building a basic RAG is relatively easy. Making it produce high-quality responses consistently is a completely different challenge. In this lesson we'll explore advanced optimization techniques that can dramatically improve your system's quality.

There are five key areas of optimization:
1. Optimal chunking
2. Metadata enrichment
3. Re-ranking
4. Hybrid search
5. Prompt engineering for RAG

#### 1. Optimal chunking — There is no universal size

Chunk size has an enormous impact on quality. Chunks that are too large dilute relevant information; chunks that are too small lose context.

**General rule:**
- **256-512 tokens**: Good for short factual questions ("What's the price?")
- **512-1024 tokens**: General balance, works for most cases
- **1024-2048 tokens**: Better for questions requiring reasoning or broad context

**Advanced technique: Parent-Child Chunking**

You create small chunks for search (more precise) but retrieve the parent chunk (more context) to send to the LLM:

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document

def crear_chunks_parent_child(documentos: list[Document]):
    """
    Creates a hierarchical parent-child chunking system.
    - Parents: large chunks to give context to the LLM
    - Children: small chunks for precise search
    """
    # Splitter for parent chunks (large)
    parent_splitter = RecursiveCharacterTextSplitter(
        chunk_size=2000,
        chunk_overlap=200
    )

    # Splitter for child chunks (small, for search)
    child_splitter = RecursiveCharacterTextSplitter(
        chunk_size=400,
        chunk_overlap=50
    )

    parents = parent_splitter.split_documents(documentos)

    # For each parent, create children that reference the parent
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

# Usage: search among children, but return the parent to the LLM
children, parent_map, parents = crear_chunks_parent_child(documentos)

# When searching, retrieve the parent:
def buscar_con_parent(query, vectorstore, parent_map, k=3):
    """Searches children but returns parents for complete context."""
    child_results = vectorstore.similarity_search(query, k=k)

    # Retrieve unique parents
    parent_ids_vistos = set()
    parent_docs = []
    for child in child_results:
        pid = child.metadata.get("parent_id")
        if pid and pid not in parent_ids_vistos:
            parent_ids_vistos.add(pid)
            parent_docs.append(parent_map[child.metadata["child_id"]])

    return parent_docs
\`\`\`

#### 2. Metadata Enrichment — Additional context

Adding rich metadata to your chunks improves both search and generation:

\`\`\`python
from langchain_openai import ChatOpenAI
import json

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def enriquecer_chunk(chunk: Document) -> Document:
    """Adds LLM-generated metadata to the chunk."""

    prompt = f"""Analyze the following text and generate metadata in JSON format:
- "summary": 1-sentence summary
- "topics": list of 3-5 main topics
- "type": content type (definition, procedure, example, table, etc.)
- "entities": people, organizations, products mentioned

Text:
{chunk.page_content[:1500]}

JSON:"""

    respuesta = llm.invoke(prompt)

    try:
        metadata_extra = json.loads(respuesta.content)
        chunk.metadata.update(metadata_extra)
    except json.JSONDecodeError:
        pass  # If parsing fails, keep original metadata

    return chunk

# Enrich chunks (expensive, do it once)
chunks_enriquecidos = [enriquecer_chunk(chunk) for chunk in chunks[:5]]  # Demo with 5
\`\`\`

**Useful metadata for filtering searches:**

\`\`\`python
# Filter by metadata in ChromaDB
resultados = vectorstore.similarity_search(
    "installation procedure",
    k=5,
    filter={"tipo": "procedure"}  # Only search in procedures
)
\`\`\`

#### 3. Re-ranking — Second pass of relevance

Vector search is good but not perfect. A re-ranker can reorder results to improve precision:

\`\`\`python
# Option A: Re-ranking with Cross-Encoder (local)
from sentence_transformers import CrossEncoder

reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

def rerank_resultados(query: str, documentos: list[Document], top_k: int = 3) -> list[Document]:
    """Re-ranks documents using a Cross-Encoder."""
    # Create (query, document) pairs for the cross-encoder
    pares = [(query, doc.page_content) for doc in documentos]

    # Get scores
    scores = reranker.predict(pares)

    # Sort by score descending
    docs_con_score = list(zip(documentos, scores))
    docs_con_score.sort(key=lambda x: x[1], reverse=True)

    # Return top_k
    return [doc for doc, score in docs_con_score[:top_k]]

# Usage in the pipeline
def rag_con_reranking(query: str, vectorstore, top_k_busqueda=10, top_k_final=3):
    """RAG with re-ranking for greater precision."""
    # Step 1: Search for more results than needed
    candidatos = vectorstore.similarity_search(query, k=top_k_busqueda)

    # Step 2: Re-rank and keep the best
    mejores = rerank_resultados(query, candidatos, top_k=top_k_final)

    return mejores
\`\`\`

\`\`\`python
# Option B: Re-ranking with Cohere (API, very precise)
# pip install cohere
import cohere

co = cohere.Client("your-cohere-api-key")

def rerank_con_cohere(query: str, documentos: list[Document], top_k: int = 3):
    """Re-ranking using Cohere Rerank API."""
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

#### 4. Hybrid Search — The best of both worlds

Semantic (vector) search is excellent for understanding meaning, but can fail with exact terms, codes, or proper nouns. Keyword search (BM25) is the perfect complement.

\`\`\`python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

def crear_hybrid_retriever(chunks: list[Document], vectorstore):
    """
    Creates a hybrid retriever combining semantic + keyword search.
    """
    # Keyword retriever (BM25)
    bm25_retriever = BM25Retriever.from_documents(chunks)
    bm25_retriever.k = 5

    # Semantic retriever (vector)
    vector_retriever = vectorstore.as_retriever(
        search_kwargs={"k": 5}
    )

    # Combine both with weights
    ensemble_retriever = EnsembleRetriever(
        retrievers=[bm25_retriever, vector_retriever],
        weights=[0.4, 0.6]  # 40% keywords, 60% semantic
    )

    return ensemble_retriever

hybrid_retriever = crear_hybrid_retriever(chunks, vectorstore)

# Now works well for both:
# - "error code E-4021" (keyword match)
# - "the system won't turn on" (semantic match)
\`\`\`

#### 5. Prompt Engineering for RAG

The prompt you use for generation enormously impacts quality:

\`\`\`python
# Basic prompt (bad)
prompt_basico = "Answer using the context: {context}. Question: {question}"

# Optimized prompt (good)
prompt_optimizado = """You are an expert and precise assistant. Your task is to answer questions
based EXCLUSIVELY on the document fragments provided as context.

STRICT RULES:
1. Use ONLY information from the context. DO NOT invent or add external information.
2. If the answer is not in the context, respond: "I didn't find this information in the available documents."
3. Cite the specific source (document and page) for each important claim.
4. If the information is partial, indicate it: "Based on the available information..."
5. If there is contradictory information between sources, mention both versions.

CONTEXT (relevant document fragments):
{context}

USER QUESTION:
{question}

ANSWER (with source citations):"""
\`\`\`

**Technique: Query Transformation**

Sometimes the user's question is vague or ambiguous. Transforming it before searching can improve results:

\`\`\`python
def expandir_query(query: str, llm) -> list[str]:
    """Generates multiple versions of the query for broader search."""
    prompt = f"""Generate 3 reformulations of the following question to search
in a document database. Each reformulation should capture a different aspect
of what the user might be looking for.

Original question: {query}

Reformulations (one per line, unnumbered):"""

    respuesta = llm.invoke(prompt)
    queries = [q.strip() for q in respuesta.content.strip().split("\\n") if q.strip()]
    queries.insert(0, query)  # Include the original

    return queries[:4]  # Maximum 4 queries

def rag_con_query_expansion(query, vectorstore, llm, k_per_query=3):
    """Searches with multiple query variants."""
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

#### Optimization summary

| Technique | Impact | Complexity | Cost |
|-----------|--------|------------|------|
| Adjust chunk size | High | Low | Free |
| Parent-child chunking | High | Medium | Free |
| Metadata enrichment | Medium | Medium | API calls |
| Re-ranking | High | Medium | Low/free |
| Hybrid search | High | Medium | Free |
| Query expansion | Medium | Low | API calls |
| Prompt engineering | High | Low | Free |

The key is to iterate: measure, optimize, measure again. In the next lesson you'll learn exactly how to measure the quality of your RAG system.
`;

export const leccion6 = `### Evaluations and RAG metrics

#### How do you know if your RAG works well?

You built your RAG system, asked some test questions, and the answers "look good." But that's not enough. You need quantitative metrics to know how well your system works and, more importantly, to measure whether your optimizations actually improve things.

Evaluating a RAG system is more complex than evaluating a traditional ML model because you have **two independent components** to evaluate:
1. **Retrieval**: Were the correct documents retrieved?
2. **Generation**: Is the generated response faithful to the context and does it answer the question?

#### The fundamental metrics

**1. Faithfulness**

Measures whether the generated response is consistent with the retrieved context. A response with high faithfulness doesn't contain information that isn't in the retrieved documents (doesn't hallucinate).

\`\`\`
Faithfulness = (Claims supported by context) / (Total claims in the response)
\`\`\`

**Example:**
- Context: "Product X costs $100 and comes in red and blue colors"
- Response: "Product X costs $100, comes in red, blue, and green, and has a 2-year warranty"
- Faithfulness: 2/4 = 0.5 (the claims about green and warranty are not in the context)

**2. Answer Relevancy**

Measures whether the response actually answers the user's question.

**Example:**
- Question: "How much does product X cost?"
- Response A: "Product X costs $100" -> High relevancy
- Response B: "Product X comes in red and blue colors" -> Low relevancy (correct information but doesn't answer the question)

**3. Context Relevancy**

Measures whether the retrieved documents are relevant to the question. If you retrieve irrelevant documents, the LLM has to filter noise and is more likely to generate poor responses.

**4. Context Recall**

Measures what proportion of the information needed to answer was retrieved. If the correct answer requires information from 3 documents but you only retrieved 1, your recall is low.

**5. Answer Correctness**

The final metric: is the answer factually correct? Requires having reference answers (ground truth).

#### Manual evaluation: the starting point

Before using automated frameworks, build a manual evaluation set:

\`\`\`python
# dataset_evaluacion.py

evaluacion_dataset = [
    {
        "pregunta": "What are the system requirements to install the product?",
        "respuesta_esperada": "Windows 10 or higher, 8GB RAM, and 2GB of disk space are required.",
        "contexto_esperado": ["manual.pdf - page 5"],
        "categoria": "factual"
    },
    {
        "pregunta": "How do I set up the WiFi connection?",
        "respuesta_esperada": "Go to Settings > Network > WiFi, select the network, and enter the password.",
        "contexto_esperado": ["manual.pdf - page 12", "manual.pdf - page 13"],
        "categoria": "procedure"
    },
    {
        "pregunta": "What to do if error E-501 appears?",
        "respuesta_esperada": "Restart the device and verify the network connection.",
        "contexto_esperado": ["error_guide.pdf - page 8"],
        "categoria": "troubleshooting"
    },
    # ... more cases (ideally 50-100)
]
\`\`\`

\`\`\`python
# evaluacion_manual.py

from langchain_openai import ChatOpenAI

llm_evaluador = ChatOpenAI(model="gpt-4o", temperature=0)  # Powerful model for evaluation

def evaluar_fidelidad(respuesta: str, contexto: str) -> dict:
    """Evaluates the faithfulness of a response with respect to the context."""
    prompt = f"""Evaluate the faithfulness of the following response with respect to the given context.

Context:
{contexto}

Response to evaluate:
{respuesta}

Instructions:
1. Identify each factual claim in the response
2. Verify if each claim is supported by the context
3. Return a JSON with:
   - "claims": list of claims found
   - "supported": number of claims supported by the context
   - "total": total number of claims
   - "score": supported/total (0 to 1)
   - "hallucinations": list of unsupported claims

JSON:"""

    resultado = llm_evaluador.invoke(prompt)
    import json
    try:
        return json.loads(resultado.content)
    except:
        return {"score": 0, "error": "Could not parse evaluation"}


def evaluar_relevancia(pregunta: str, respuesta: str) -> dict:
    """Evaluates if the response is relevant to the question."""
    prompt = f"""Evaluate if the following response is relevant and useful for the question.

Question: {pregunta}
Response: {respuesta}

Return a JSON with:
- "score": from 0 to 1 (1 = perfectly relevant)
- "explanation": why you gave that score
- "answers_question": true/false

JSON:"""

    resultado = llm_evaluador.invoke(prompt)
    import json
    try:
        return json.loads(resultado.content)
    except:
        return {"score": 0, "error": "Could not parse"}
\`\`\`

#### RAGAS: Automated evaluation framework

**RAGAS** (Retrieval Augmented Generation Assessment) is the most popular framework for automatically evaluating RAG systems:

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

# Prepare data for RAGAS
# You need to run your RAG pipeline and save the results
def preparar_datos_ragas(dataset_eval, rag_chain, retriever):
    """Runs the RAG and prepares data in RAGAS format."""
    preguntas = []
    respuestas = []
    contextos = []
    ground_truths = []

    for item in dataset_eval:
        pregunta = item["pregunta"]

        # Run RAG
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

# Prepare and evaluate
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
# Example output:
# {
#     'faithfulness': 0.85,
#     'answer_relevancy': 0.92,
#     'context_precision': 0.78,
#     'context_recall': 0.81,
#     'answer_correctness': 0.87
# }
\`\`\`

#### Evaluating retrieval separately

It's crucial to evaluate retrieval independently from generation:

\`\`\`python
def evaluar_retrieval(dataset_eval, retriever, k=5):
    """Evaluates retrieval quality with classic IR metrics."""

    resultados = {
        "hit_rate": [],  # Does at least one relevant document appear?
        "mrr": [],       # Mean Reciprocal Rank
    }

    for item in dataset_eval:
        pregunta = item["pregunta"]
        fuentes_esperadas = item["contexto_esperado"]

        docs = retriever.invoke(pregunta)
        fuentes_recuperadas = [
            f"{doc.metadata.get('source', '')} - page {doc.metadata.get('page', '?')}"
            for doc in docs
        ]

        # Hit rate: At least one relevant document?
        hit = any(
            any(esperada in recuperada for recuperada in fuentes_recuperadas)
            for esperada in fuentes_esperadas
        )
        resultados["hit_rate"].append(1 if hit else 0)

        # MRR: Position of the first relevant result
        rr = 0
        for i, recuperada in enumerate(fuentes_recuperadas):
            if any(esperada in recuperada for esperada in fuentes_esperadas):
                rr = 1 / (i + 1)
                break
        resultados["mrr"].append(rr)

    # Calculate averages
    avg_hit_rate = sum(resultados["hit_rate"]) / len(resultados["hit_rate"])
    avg_mrr = sum(resultados["mrr"]) / len(resultados["mrr"])

    print(f"Hit Rate@{k}: {avg_hit_rate:.2%}")
    print(f"MRR@{k}: {avg_mrr:.4f}")

    return {"hit_rate": avg_hit_rate, "mrr": avg_mrr}

metricas_retrieval = evaluar_retrieval(evaluacion_dataset, retriever)
\`\`\`

#### Continuous evaluation pipeline

In production, you need to evaluate continuously:

\`\`\`python
import json
from datetime import datetime

def ejecutar_evaluacion_completa(rag_chain, retriever, dataset_eval, nombre_experimento: str):
    """Runs a complete evaluation and saves the results."""

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

    # Summary
    avg_fidelidad = sum(r["fidelidad_score"] for r in resultados_detalle) / len(resultados_detalle)
    avg_relevancia = sum(r["relevancia_score"] for r in resultados_detalle) / len(resultados_detalle)

    reporte = {
        "experiment": nombre_experimento,
        "timestamp": timestamp,
        "average_metrics": {
            "faithfulness": round(avg_fidelidad, 4),
            "relevancy": round(avg_relevancia, 4)
        },
        "total_evaluations": len(resultados_detalle),
        "detail": resultados_detalle
    }

    # Save results
    archivo = f"eval_{nombre_experimento}_{timestamp[:10]}.json"
    with open(archivo, "w", encoding="utf-8") as f:
        json.dump(reporte, f, ensure_ascii=False, indent=2)

    print(f"\\nExperiment: {nombre_experimento}")
    print(f"Average faithfulness: {avg_fidelidad:.2%}")
    print(f"Average relevancy: {avg_relevancia:.2%}")
    print(f"Results saved to: {archivo}")

    return reporte

# Compare configurations
reporte_v1 = ejecutar_evaluacion_completa(chain_v1, retriever_v1, dataset, "chunk_500_overlap_100")
reporte_v2 = ejecutar_evaluacion_completa(chain_v2, retriever_v2, dataset, "chunk_800_overlap_200")
\`\`\`

#### What scores are "good"

There's no universal standard, but as a reference:
- **Faithfulness > 0.85**: Your system doesn't hallucinate too much
- **Answer Relevancy > 0.80**: Responses are useful
- **Context Recall > 0.75**: Retrieval finds the needed information
- **Hit Rate > 0.90**: Almost always retrieves at least one relevant document

If your scores are low, lesson 5 gives you the tools to improve them. Evaluate, optimize, evaluate again — that's the cycle.

In the next lesson, you'll integrate everything you've learned into a complete project.
`;

export const leccion7 = `### Project: intelligent search engine over your documents

#### Project objective

In this lesson we'll build a complete integrative project: an **intelligent CLI search engine** that allows:
- Loading documents in multiple formats (TXT, PDF, Markdown)
- Creating a persistent vector index
- Searching with natural language
- Generating responses with cited sources
- Interactive mode via terminal

This project integrates everything we learned in the previous lessons.

#### Project structure

\`\`\`
smart-search/
├── main.py              # Entry point and CLI
├── indexador.py          # Loading and indexing module
├── buscador.py           # Search and generation module
├── config.py             # Configuration
├── documentos/           # Folder for your documents
├── indice/               # Persistent vector store
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

#### config.py — Centralized configuration

\`\`\`python
# config.py
import os
from pathlib import Path

# Directories
BASE_DIR = Path(__file__).parent
DOCUMENTOS_DIR = BASE_DIR / "documentos"
INDICE_DIR = BASE_DIR / "indice"

# Create directories if they don't exist
DOCUMENTOS_DIR.mkdir(exist_ok=True)
INDICE_DIR.mkdir(exist_ok=True)

# Chunking configuration
CHUNK_SIZE = 800
CHUNK_OVERLAP = 200

# Search configuration
TOP_K_RETRIEVAL = 6       # Documents to retrieve
TOP_K_FINAL = 4           # Documents after re-ranking

# Models
EMBEDDING_MODEL = "text-embedding-3-small"
LLM_MODEL = "gpt-4o-mini"
LLM_TEMPERATURE = 0.1

# Collection name
COLLECTION_NAME = "search_docs"

# Verify API key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    print("WARNING: OPENAI_API_KEY is not configured")
    print("Run: export OPENAI_API_KEY='your-key-here'")
\`\`\`

#### indexador.py — Document loading and indexing

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


# Map of extensions to loaders
LOADERS = {
    ".txt": lambda path: TextLoader(path, encoding="utf-8"),
    ".pdf": lambda path: PyPDFLoader(path),
    ".md": lambda path: TextLoader(path, encoding="utf-8"),
}

EXTENSIONES_SOPORTADAS = set(LOADERS.keys())


def descubrir_documentos(directorio: Path) -> list[Path]:
    """Finds all supported documents in the directory."""
    archivos = []
    for ext in EXTENSIONES_SOPORTADAS:
        archivos.extend(directorio.glob(f"**/*{ext}"))

    archivos.sort(key=lambda x: x.name)
    return archivos


def cargar_documento(ruta: Path) -> list[Document]:
    """Loads an individual document using the appropriate loader."""
    extension = ruta.suffix.lower()

    if extension not in LOADERS:
        print(f"  Unsupported format: {extension}")
        return []

    try:
        loader = LOADERS[extension](str(ruta))
        docs = loader.load()

        # Enrich metadata
        for doc in docs:
            doc.metadata["filename"] = ruta.name
            doc.metadata["extension"] = extension
            doc.metadata["path"] = str(ruta)

        return docs
    except Exception as e:
        print(f"  Error loading {ruta.name}: {e}")
        return []


def crear_chunks(documentos: list[Document]) -> list[Document]:
    """Splits documents into optimized chunks."""
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=config.CHUNK_SIZE,
        chunk_overlap=config.CHUNK_OVERLAP,
        separators=["\\n\\n", "\\n", ". ", " "],
        length_function=len
    )

    chunks = splitter.split_documents(documentos)

    # Filter empty or very small chunks
    chunks = [c for c in chunks if len(c.page_content.strip()) > 30]

    # Add ID to each chunk
    for i, chunk in enumerate(chunks):
        chunk.metadata["chunk_id"] = i

    return chunks


def crear_indice(chunks: list[Document]) -> Chroma:
    """Creates the vector store from chunks."""
    embeddings = OpenAIEmbeddings(model=config.EMBEDDING_MODEL)

    # Delete previous index if it exists
    import shutil
    indice_path = str(config.INDICE_DIR)
    if config.INDICE_DIR.exists():
        shutil.rmtree(indice_path)
        config.INDICE_DIR.mkdir(exist_ok=True)

    # Create in batches
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

        print(f"  Indexed {min(i + batch_size, len(chunks))}/{len(chunks)} chunks")

    return vectorstore


def indexar_documentos() -> tuple[int, int]:
    """Complete pipeline: discover -> load -> chunk -> index."""
    print("\\n=== DOCUMENT INDEXING ===\\n")

    # 1. Discover files
    archivos = descubrir_documentos(config.DOCUMENTOS_DIR)
    if not archivos:
        print(f"No documents found in: {config.DOCUMENTOS_DIR}")
        print(f"Place .txt, .pdf, or .md files in that folder")
        return 0, 0

    print(f"Files found: {len(archivos)}")
    for a in archivos:
        print(f"  - {a.name}")

    # 2. Load documents
    print("\\nLoading documents...")
    todos_los_docs = []
    for archivo in archivos:
        docs = cargar_documento(archivo)
        todos_los_docs.extend(docs)
        print(f"  {archivo.name}: {len(docs)} sections")

    print(f"Total sections loaded: {len(todos_los_docs)}")

    # 3. Create chunks
    print("\\nCreating chunks...")
    chunks = crear_chunks(todos_los_docs)
    print(f"Chunks created: {len(chunks)}")
    print(f"Average size: {sum(len(c.page_content) for c in chunks) // max(len(chunks), 1)} chars")

    # 4. Index
    print("\\nIndexing (generating embeddings)...")
    inicio = time.time()
    crear_indice(chunks)
    duracion = time.time() - inicio
    print(f"Indexing completed in {duracion:.1f} seconds")

    return len(archivos), len(chunks)
\`\`\`

#### buscador.py — Search and generation

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
    """Search and answer system over indexed documents."""

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
        """Loads the persisted vector index."""
        try:
            self.vectorstore = Chroma(
                persist_directory=str(config.INDICE_DIR),
                embedding_function=self.embeddings,
                collection_name=config.COLLECTION_NAME
            )

            count = self.vectorstore._collection.count()
            if count == 0:
                print("The index is empty. Run first: python main.py index")
                return False

            self.retriever = self.vectorstore.as_retriever(
                search_type="mmr",
                search_kwargs={
                    "k": config.TOP_K_FINAL,
                    "fetch_k": config.TOP_K_RETRIEVAL
                }
            )

            self._crear_chain()
            print(f"Index loaded: {count} chunks available")
            return True

        except Exception as e:
            print(f"Error loading index: {e}")
            return False

    def _crear_chain(self):
        """Creates the RAG chain."""
        prompt = ChatPromptTemplate.from_template("""You are an expert assistant that answers questions based EXCLUSIVELY on the provided documents.

RULES:
1. Use ONLY information from the context. DO NOT invent data.
2. If you don't find the answer, say: "I didn't find this information in the indexed documents."
3. Cite the source (filename and page if applicable) for each important claim.
4. Respond clearly and in a structured way.
5. If the information is partial, indicate it.

RETRIEVED DOCUMENTS:
{context}

QUESTION: {question}

ANSWER (with citations):""")

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
        """Formats retrieved documents with metadata."""
        partes = []
        for i, doc in enumerate(docs, 1):
            nombre = doc.metadata.get("filename", "unknown")
            pagina = doc.metadata.get("page", None)

            fuente = f"[{nombre}"
            if pagina is not None:
                fuente += f", p. {pagina + 1}"
            fuente += "]"

            partes.append(f"--- Fragment {i} {fuente} ---\\n{doc.page_content}")

        return "\\n\\n".join(partes)

    def buscar(self, pregunta: str) -> dict:
        """Executes a complete search: retrieval + generation."""
        if not self.chain:
            return {"error": "Index not loaded"}

        # Retrieve documents to show sources
        docs = self.retriever.invoke(pregunta)

        # Generate response
        respuesta = self.chain.invoke(pregunta)

        # Compile sources
        fuentes = []
        fuentes_vistas = set()
        for doc in docs:
            nombre = doc.metadata.get("filename", "unknown")
            pagina = doc.metadata.get("page", None)

            clave = f"{nombre}-{pagina}"
            if clave not in fuentes_vistas:
                fuentes_vistas.add(clave)
                fuente_info = {"file": nombre}
                if pagina is not None:
                    fuente_info["page"] = pagina + 1
                fuentes.append(fuente_info)

        return {
            "answer": respuesta,
            "sources": fuentes,
            "num_fragments": len(docs)
        }

    def busqueda_simple(self, pregunta: str, k: int = 5) -> list[dict]:
        """Semantic search without generation (retrieval only)."""
        if not self.vectorstore:
            return []

        resultados = self.vectorstore.similarity_search_with_score(pregunta, k=k)

        return [
            {
                "content": doc.page_content[:300],
                "file": doc.metadata.get("filename", "?"),
                "page": doc.metadata.get("page", None),
                "score": round(float(score), 4)
            }
            for doc, score in resultados
        ]
\`\`\`

#### main.py — CLI interface

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
    """Indexes all documents in the documents folder."""
    n_archivos, n_chunks = indexar_documentos()
    if n_archivos > 0:
        console.print(f"\\n[green]Indexing successful: {n_archivos} files, {n_chunks} chunks[/green]")
    else:
        console.print(f"\\n[yellow]Place documents in: {config.DOCUMENTOS_DIR}[/yellow]")


def comando_buscar():
    """Interactive search mode."""
    buscador = BuscadorInteligente()

    if not buscador.cargar_indice():
        console.print("[red]Could not load index. Run first: python main.py index[/red]")
        return

    console.print(Panel(
        "[bold]Intelligent Document Search[/bold]\\n\\n"
        "Type your question in natural language.\\n"
        "Commands: 'exit' to quit, 'search' for search without generation",
        title="Welcome",
        border_style="blue"
    ))

    while True:
        console.print()
        pregunta = console.input("[bold cyan]Your question:[/bold cyan] ").strip()

        if not pregunta:
            continue

        if pregunta.lower() in ('exit', 'quit'):
            console.print("[dim]Goodbye.[/dim]")
            break

        # Simple search mode
        if pregunta.lower().startswith("search "):
            query = pregunta[7:]
            console.print(f"\\n[dim]Searching fragments for: {query}[/dim]")
            resultados = buscador.busqueda_simple(query)

            table = Table(title="Search results")
            table.add_column("File", style="cyan")
            table.add_column("Page", style="green")
            table.add_column("Score", style="yellow")
            table.add_column("Content", max_width=60)

            for r in resultados:
                table.add_row(
                    r["file"],
                    str(r["page"] or "-"),
                    str(r["score"]),
                    r["content"][:100] + "..."
                )

            console.print(table)
            continue

        # Full RAG mode
        console.print("[dim]Searching documents and generating response...[/dim]\\n")

        try:
            resultado = buscador.buscar(pregunta)

            if "error" in resultado:
                console.print(f"[red]{resultado['error']}[/red]")
                continue

            # Show response
            console.print(Panel(
                Markdown(resultado["answer"]),
                title="Answer",
                border_style="green"
            ))

            # Show sources
            if resultado["sources"]:
                console.print("\\n[bold]Sources consulted:[/bold]")
                for fuente in resultado["sources"]:
                    pag = f" (p. {fuente['page']})" if fuente.get('page') else ""
                    console.print(f"  [cyan]>[/cyan] {fuente['file']}{pag}")

        except Exception as e:
            console.print(f"[red]Error: {e}[/red]")


def comando_info():
    """Shows information about the current index."""
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

        console.print(f"\\n[bold]Index status:[/bold]")
        console.print(f"  Indexed chunks: {count}")
        console.print(f"  Directory: {config.INDICE_DIR}")
        console.print(f"  Embedding model: {config.EMBEDDING_MODEL}")
        console.print(f"  LLM model: {config.LLM_MODEL}")
    except Exception:
        console.print("[yellow]No index created. Run: python main.py index[/yellow]")


def main():
    if len(sys.argv) < 2:
        console.print("\\n[bold]Usage:[/bold]")
        console.print("  python main.py index    — Index documents")
        console.print("  python main.py search   — Search documents")
        console.print("  python main.py info     — Index information")
        return

    comando = sys.argv[1].lower()

    if comando == "index":
        comando_indexar()
    elif comando == "search":
        comando_buscar()
    elif comando == "info":
        comando_info()
    else:
        console.print(f"[red]Unknown command: {comando}[/red]")
        console.print("Available commands: index, search, info")


if __name__ == "__main__":
    main()
\`\`\`

#### How to use the project

\`\`\`bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Configure API key
export OPENAI_API_KEY="sk-..."

# 3. Add documents
cp my_manual.pdf documentos/
cp tech_notes.txt documentos/
cp product_guide.md documentos/

# 4. Index
python main.py index

# 5. Search
python main.py search
# > Your question: How do I configure WiFi?
# > [Answer with cited sources]

# 6. View index info
python main.py info
\`\`\`

#### Suggested extensions

This base project can be extended in many ways:

1. **Web interface** with Streamlit or Gradio
2. **Conversation history** for follow-up questions
3. **Re-ranking** with Cross-Encoder for greater precision
4. **Hybrid search** (BM25 + semantic)
5. **Multi-language support** with multilingual embedding models
6. **REST API** with FastAPI to integrate it into other applications
7. **User feedback** to continuously improve the system

This project demonstrates that with ~300 lines of Python and the right tools, you can build an intelligent search engine over your own documents that competes with commercial solutions.
`;

export const leccion8 = `### Quiz — RAG and intelligent search

Test your understanding of RAG, embeddings, chunking, and evaluation concepts with these 10 questions.`;
