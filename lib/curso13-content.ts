// Contenido educativo Curso 13: Programación con IA: de cero a tu primera app
// Nivel 5 Pro — 10 lecciones para aspirantes a ingenieros de IA

export const leccion1 = `
# Lección 1: Python básico para IA

## Introducción

Python es el lenguaje dominante en inteligencia artificial y machine learning. No es casualidad: su sintaxis clara, su ecosistema de librerías y su comunidad masiva lo hacen ideal para trabajar con APIs de IA. En esta lección vas a aprender lo mínimo necesario de Python para empezar a construir aplicaciones con inteligencia artificial.

No asumimos que nunca hayas programado antes — sí asumimos que sabés qué es una variable, qué es una función y qué es un loop, aunque sea de manera conceptual. Lo que vamos a hacer es darte las herramientas concretas en Python.

## Variables y tipos de datos

En Python, no necesitás declarar el tipo de una variable. Python lo infiere automáticamente:

\`\`\`python
# Strings (cadenas de texto)
nombre = "Claude"
modelo = 'gpt-4'

# Números enteros y decimales
temperatura = 0.7
max_tokens = 1500
intentos = 3

# Booleanos
usar_streaming = True
debug_mode = False

# None (equivalente a null)
respuesta = None
\`\`\`

Podés verificar el tipo de cualquier variable con \`type()\`:

\`\`\`python
print(type(nombre))       # <class 'str'>
print(type(temperatura))  # <class 'float'>
print(type(max_tokens))   # <class 'int'>
print(type(usar_streaming))  # <class 'bool'>
\`\`\`

### F-strings: tu mejor amigo

Para construir strings dinámicos (algo que harás constantemente con prompts de IA), usá f-strings:

\`\`\`python
usuario = "María"
tema = "machine learning"
prompt = f"Hola {usuario}, explicame qué es {tema} en términos simples."
print(prompt)
# Output: Hola María, explicame qué es machine learning en términos simples.
\`\`\`

Para prompts multilínea, usá triple comillas:

\`\`\`python
system_prompt = f"""Eres un asistente experto en {tema}.
Responde siempre en español.
Nivel de detalle: intermedio.
Usuario actual: {usuario}"""
\`\`\`

## Listas

Las listas son colecciones ordenadas. Las vas a usar constantemente para manejar historial de conversaciones con modelos de IA:

\`\`\`python
# Lista simple
modelos = ["gpt-4", "claude-3", "gemini-pro"]

# Acceder por índice (empieza en 0)
print(modelos[0])   # gpt-4
print(modelos[-1])  # gemini-pro (último elemento)

# Agregar elementos
modelos.append("llama-3")

# Longitud
print(len(modelos))  # 4

# Iterar
for modelo in modelos:
    print(f"Modelo disponible: {modelo}")

# List comprehension (muy Pythonic)
modelos_grandes = [m for m in modelos if "gpt" in m or "claude" in m]
\`\`\`

### Listas de diccionarios: el formato de mensajes de IA

Este patrón es FUNDAMENTAL porque todas las APIs de IA usan listas de diccionarios para los mensajes:

\`\`\`python
mensajes = [
    {"role": "system", "content": "Eres un asistente útil."},
    {"role": "user", "content": "¿Qué es Python?"},
    {"role": "assistant", "content": "Python es un lenguaje de programación..."},
    {"role": "user", "content": "¿Y para qué se usa en IA?"}
]
\`\`\`

## Diccionarios

Los diccionarios son pares clave-valor. Son el equivalente de JSON en Python y los usás para configuraciones, respuestas de APIs, etc.:

\`\`\`python
config = {
    "model": "gpt-4",
    "temperature": 0.7,
    "max_tokens": 1000,
    "stream": True
}

# Acceder a valores
print(config["model"])        # gpt-4
print(config.get("model"))    # gpt-4 (más seguro, no tira error si no existe)
print(config.get("top_p", 1.0))  # 1.0 (valor por defecto)

# Modificar
config["temperature"] = 0.9

# Agregar nueva clave
config["top_p"] = 0.95

# Iterar
for clave, valor in config.items():
    print(f"{clave}: {valor}")
\`\`\`

## Funciones

Las funciones encapsulan lógica reutilizable. Cuando trabajes con APIs de IA, vas a crear funciones para hacer llamadas, procesar respuestas, etc.:

\`\`\`python
def crear_prompt(usuario: str, tema: str) -> str:
    """Crea un prompt personalizado para el usuario."""
    return f"Hola {usuario}, explicame sobre {tema} de forma clara y concisa."

# Usar la función
mi_prompt = crear_prompt("Carlos", "redes neuronales")
print(mi_prompt)
\`\`\`

### Funciones con valores por defecto

\`\`\`python
def configurar_modelo(
    modelo: str = "gpt-4",
    temperatura: float = 0.7,
    max_tokens: int = 1000
) -> dict:
    """Retorna un diccionario de configuración para la API."""
    return {
        "model": modelo,
        "temperature": temperatura,
        "max_tokens": max_tokens
    }

# Usar con defaults
config_default = configurar_modelo()

# Usar con parámetros específicos
config_creativa = configurar_modelo(temperatura=0.95, max_tokens=2000)
\`\`\`

### Funciones async (las vas a necesitar para streaming)

\`\`\`python
import asyncio

async def obtener_respuesta(prompt: str) -> str:
    """Simula una llamada async a una API de IA."""
    # En la práctica, acá iría la llamada real a la API
    await asyncio.sleep(1)  # Simula latencia de red
    return f"Respuesta a: {prompt}"

# Ejecutar
async def main():
    respuesta = await obtener_respuesta("¿Qué es la IA?")
    print(respuesta)

asyncio.run(main())
\`\`\`

## Condicionales y loops

\`\`\`python
# Condicionales
modelo = "gpt-4"

if modelo.startswith("gpt"):
    print("Usando OpenAI")
elif modelo.startswith("claude"):
    print("Usando Anthropic")
else:
    print("Modelo no reconocido")

# Loop for
for i in range(5):
    print(f"Intento {i + 1}")

# Loop while (útil para reintentos)
intentos = 0
max_intentos = 3
exito = False

while intentos < max_intentos and not exito:
    intentos += 1
    print(f"Intento {intentos}...")
    # Simular: en la práctica acá irían las llamadas a la API
    if intentos == 2:
        exito = True
        print("¡Éxito!")
\`\`\`

## Manejo de errores con try/except

Esto es CRÍTICO cuando trabajás con APIs externas, porque las llamadas pueden fallar:

\`\`\`python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: división por cero")
except Exception as e:
    print(f"Error inesperado: {e}")
finally:
    print("Esto se ejecuta siempre")

# Patrón real con APIs de IA
def llamar_api_seguro(prompt: str) -> str:
    try:
        # Acá iría la llamada real
        respuesta = "Respuesta simulada"
        return respuesta
    except ConnectionError:
        return "Error: no se pudo conectar a la API"
    except TimeoutError:
        return "Error: la API tardó demasiado en responder"
    except Exception as e:
        return f"Error inesperado: {str(e)}"
\`\`\`

## Imports y módulos

\`\`\`python
# Importar un módulo completo
import os
import json

# Importar algo específico
from datetime import datetime
from pathlib import Path

# Importar con alias
import numpy as np

# Acceder a variables de entorno (para API keys)
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("Falta la variable OPENAI_API_KEY")
\`\`\`

## Resumen

Con estas bases de Python ya tenés lo necesario para empezar a trabajar con APIs de inteligencia artificial. Los conceptos clave que vas a usar constantemente son: f-strings para construir prompts, listas de diccionarios para mensajes, funciones async para streaming, y try/except para manejar errores de red. En la próxima lección vamos a instalar tu entorno de desarrollo completo.
`;

export const leccion2 = `
# Lección 2: Instalar tu entorno de desarrollo

## Introducción

Antes de escribir una sola línea de código con APIs de IA, necesitás un entorno de desarrollo correctamente configurado. Un entorno mal configurado es la causa número uno de frustración en principiantes. En esta lección vamos a instalar y configurar todo paso a paso: VS Code, Python, pip, entornos virtuales y manejo de variables de entorno.

## Paso 1: Instalar Python 3.11+

### En macOS

La forma más limpia es usando Homebrew:

\`\`\`bash
# Instalar Homebrew (si no lo tenés)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Python
brew install python@3.12

# Verificar instalación
python3 --version
# Python 3.12.x
\`\`\`

### En Windows

1. Andá a [python.org/downloads](https://python.org/downloads)
2. Descargá Python 3.12.x
3. **IMPORTANTE**: Marcá la casilla "Add Python to PATH" durante la instalación
4. Verificá en PowerShell:

\`\`\`powershell
python --version
# Python 3.12.x
\`\`\`

### En Linux (Ubuntu/Debian)

\`\`\`bash
sudo apt update
sudo apt install python3.12 python3.12-venv python3-pip
python3 --version
\`\`\`

## Paso 2: Instalar VS Code

1. Descargá VS Code desde [code.visualstudio.com](https://code.visualstudio.com)
2. Instalalo siguiendo las instrucciones de tu sistema operativo

### Extensiones esenciales

Abrí VS Code y andá a la pestaña de extensiones (Ctrl+Shift+X o Cmd+Shift+X en Mac). Instalá estas extensiones:

- **Python** (Microsoft) — Soporte completo para Python: intellisense, debugging, linting
- **Pylance** (Microsoft) — Análisis de tipos avanzado para Python
- **Python Debugger** (Microsoft) — Herramientas de depuración
- **Even Better TOML** — Para archivos de configuración
- **dotENV** — Syntax highlighting para archivos .env

### Configurar VS Code para Python

Abrí la configuración de VS Code (Ctrl+, o Cmd+,) y agregá estas configuraciones en \`settings.json\`:

\`\`\`json
{
    "python.defaultInterpreterPath": "python3",
    "editor.formatOnSave": true,
    "python.analysis.typeCheckingMode": "basic",
    "[python]": {
        "editor.defaultFormatter": "ms-python.black-formatter",
        "editor.tabSize": 4
    }
}
\`\`\`

## Paso 3: Crear tu proyecto

\`\`\`bash
# Crear la carpeta del proyecto
mkdir mi-proyecto-ia
cd mi-proyecto-ia

# Abrir en VS Code
code .
\`\`\`

## Paso 4: Entornos virtuales (venv)

Un entorno virtual es una instalación aislada de Python para tu proyecto. ¿Por qué importa? Porque cada proyecto puede necesitar diferentes versiones de las mismas librerías. Sin entornos virtuales, los proyectos se pisan entre sí.

\`\`\`bash
# Crear un entorno virtual llamado "venv"
python3 -m venv venv

# Activar el entorno virtual
# En macOS/Linux:
source venv/bin/activate

# En Windows (PowerShell):
.\\venv\\Scripts\\Activate.ps1

# En Windows (cmd):
venv\\Scripts\\activate.bat
\`\`\`

Cuando el entorno virtual está activo, vas a ver \`(venv)\` al principio de tu terminal:

\`\`\`
(venv) usuario@computadora:~/mi-proyecto-ia$
\`\`\`

### Verificar que funciona

\`\`\`bash
# Ver qué Python se está usando (debe apuntar a tu venv)
which python    # macOS/Linux
where python    # Windows

# Ver paquetes instalados (debería estar casi vacío)
pip list
\`\`\`

### Desactivar el entorno

\`\`\`bash
deactivate
\`\`\`

**REGLA DE ORO**: Siempre activá tu entorno virtual antes de trabajar en tu proyecto. Siempre.

## Paso 5: Instalar paquetes con pip

Con el entorno virtual activo, instalá los paquetes que vamos a usar en el curso:

\`\`\`bash
# Paquetes esenciales para el curso
pip install openai          # API de OpenAI (GPT-4, embeddings)
pip install anthropic       # API de Anthropic (Claude)
pip install google-generativeai  # API de Google (Gemini)
pip install python-dotenv   # Cargar variables de entorno desde .env
pip install chromadb        # Base de datos vectorial local
pip install numpy           # Operaciones matemáticas (para embeddings)
pip install httpx           # Cliente HTTP moderno

# Verificar que se instalaron
pip list
\`\`\`

### Guardar dependencias en requirements.txt

\`\`\`bash
# Generar el archivo de dependencias
pip freeze > requirements.txt

# En el futuro, cualquiera puede recrear tu entorno con:
pip install -r requirements.txt
\`\`\`

Tu \`requirements.txt\` va a verse algo así:

\`\`\`
openai==1.52.0
anthropic==0.39.0
google-generativeai==0.8.3
python-dotenv==1.0.1
chromadb==0.5.17
numpy==2.1.3
httpx==0.27.2
\`\`\`

## Paso 6: Variables de entorno y archivos .env

**NUNCA** pongas API keys directamente en tu código. Siempre usalas como variables de entorno. La forma más práctica es con archivos \`.env\`.

### Crear el archivo .env

Creá un archivo llamado \`.env\` en la raíz de tu proyecto:

\`\`\`bash
# .env
OPENAI_API_KEY=sk-proj-tu-clave-de-openai-aqui
ANTHROPIC_API_KEY=sk-ant-tu-clave-de-anthropic-aqui
GOOGLE_API_KEY=tu-clave-de-google-aqui
\`\`\`

### Crear .gitignore

**CRÍTICO**: Creá un archivo \`.gitignore\` para que tu API key nunca se suba a Git:

\`\`\`bash
# .gitignore
.env
venv/
__pycache__/
*.pyc
.DS_Store
\`\`\`

### Usar python-dotenv para cargar las variables

\`\`\`python
# config.py
import os
from dotenv import load_dotenv

# Cargar variables del archivo .env
load_dotenv()

# Acceder a las API keys
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Validar que existan
if not OPENAI_API_KEY:
    raise ValueError("❌ Falta OPENAI_API_KEY en el archivo .env")

print("✅ Variables de entorno cargadas correctamente")
\`\`\`

### Probar que todo funciona

\`\`\`python
# test_setup.py
import os
from dotenv import load_dotenv

load_dotenv()

print("=== Verificación del entorno ===")
print(f"Python: funcionando")

# Verificar paquetes
try:
    import openai
    print(f"OpenAI SDK: v{openai.__version__}")
except ImportError:
    print("OpenAI SDK: NO INSTALADO")

try:
    import anthropic
    print(f"Anthropic SDK: v{anthropic.__version__}")
except ImportError:
    print("Anthropic SDK: NO INSTALADO")

try:
    import google.generativeai as genai
    print("Google Generative AI: instalado")
except ImportError:
    print("Google Generative AI: NO INSTALADO")

# Verificar API keys (solo muestra los primeros caracteres)
for key_name in ["OPENAI_API_KEY", "ANTHROPIC_API_KEY", "GOOGLE_API_KEY"]:
    key = os.getenv(key_name)
    if key:
        print(f"{key_name}: {key[:8]}...{key[-4:]}")
    else:
        print(f"{key_name}: NO CONFIGURADA")

print("=== Verificación completa ===")
\`\`\`

Ejecutalo con:

\`\`\`bash
python test_setup.py
\`\`\`

## Estructura final del proyecto

Así debería verse tu proyecto al finalizar esta lección:

\`\`\`
mi-proyecto-ia/
├── venv/                 # Entorno virtual (NO subir a Git)
├── .env                  # API keys (NO subir a Git)
├── .gitignore            # Archivos a ignorar en Git
├── requirements.txt      # Dependencias del proyecto
├── config.py             # Carga de variables de entorno
└── test_setup.py         # Script de verificación
\`\`\`

## Problemas comunes

| Problema | Solución |
|----------|----------|
| \`python: command not found\` | Usá \`python3\` en vez de \`python\` |
| \`pip: command not found\` | Usá \`pip3\` o \`python3 -m pip\` |
| Paquete no se encuentra después de instalarlo | ¿Activaste el venv? |
| \`.env\` no se carga | Verificá que \`load_dotenv()\` se ejecute antes de \`os.getenv()\` |
| Error de permisos al instalar | Nunca uses \`sudo pip\`. Usá venv |

## Resumen

Tu entorno de desarrollo está listo. Tenés Python 3.12, VS Code configurado, un entorno virtual aislado, los SDKs de las tres principales APIs de IA instalados, y tus API keys guardadas de forma segura en un archivo \`.env\`. En la próxima lección vamos a escribir tu primer script que se conecta a la API de OpenAI.
`;

export const leccion3 = `
# Lección 3: Tu primer script con la API de OpenAI

## Introducción

Llegó el momento de escribir código que realmente habla con un modelo de inteligencia artificial. En esta lección vas a conectarte a la API de OpenAI, enviarle un prompt a GPT-4, y recibir una respuesta. Al final vas a tener un script completo y funcional que podés adaptar para cualquier caso de uso.

## Paso 1: Obtener tu API key de OpenAI

1. Andá a [platform.openai.com](https://platform.openai.com)
2. Creá una cuenta o iniciá sesión
3. Navegá a **API Keys** (Settings > API Keys)
4. Hacé clic en **"Create new secret key"**
5. Dale un nombre descriptivo (por ejemplo: "curso-ia-local")
6. **Copiá la key inmediatamente** — no se vuelve a mostrar
7. Pegala en tu archivo \`.env\`:

\`\`\`bash
OPENAI_API_KEY=sk-proj-abc123...tu-clave-aqui
\`\`\`

### Sobre el billing

OpenAI cobra por uso (tokens). Para este curso, el gasto total debería ser menor a $2 USD. Podés configurar un límite de gasto mensual en la sección de Billing. GPT-4o-mini es significativamente más barato que GPT-4o para practicar.

## Paso 2: Entender la estructura de la API

La API de OpenAI para chat funciona con el concepto de **mensajes**. Cada conversación es una lista de mensajes con roles:

- **system**: Instrucciones para el modelo (personalidad, reglas, formato)
- **user**: Lo que dice el usuario
- **assistant**: Lo que responde el modelo

\`\`\`python
mensajes = [
    {"role": "system", "content": "Eres un experto en Python."},
    {"role": "user", "content": "¿Qué es una lista por comprensión?"}
]
\`\`\`

## Paso 3: Tu primer script básico

\`\`\`python
# 01_openai_basico.py
import os
from dotenv import load_dotenv
from openai import OpenAI

# Cargar variables de entorno
load_dotenv()

# Crear el cliente de OpenAI
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

# Definir los mensajes
mensajes = [
    {
        "role": "system",
        "content": "Eres un asistente experto en tecnología. Respondés en español de Latinoamérica, de forma clara y concisa."
    },
    {
        "role": "user",
        "content": "¿Qué es una API y para qué sirve? Explicámelo en 3 oraciones."
    }
]

# Hacer la llamada a la API
respuesta = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=mensajes,
    temperature=0.7,
    max_tokens=500
)

# Extraer y mostrar la respuesta
texto_respuesta = respuesta.choices[0].message.content
print(texto_respuesta)
\`\`\`

Ejecutalo:

\`\`\`bash
python 01_openai_basico.py
\`\`\`

## Paso 4: Entender la respuesta completa

La respuesta de la API no es solo texto. Viene con metadatos muy útiles:

\`\`\`python
# 02_openai_respuesta_completa.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

respuesta = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Eres un asistente útil."},
        {"role": "user", "content": "Decime un dato curioso sobre Python."}
    ],
    temperature=0.7,
    max_tokens=300
)

# Explorar la respuesta completa
print("=== Respuesta completa ===")
print(f"ID: {respuesta.id}")
print(f"Modelo usado: {respuesta.model}")
print(f"Tokens de entrada: {respuesta.usage.prompt_tokens}")
print(f"Tokens de salida: {respuesta.usage.completion_tokens}")
print(f"Tokens totales: {respuesta.usage.total_tokens}")
print(f"Razón de parada: {respuesta.choices[0].finish_reason}")
print(f"\\nRespuesta:\\n{respuesta.choices[0].message.content}")
\`\`\`

### Sobre los tokens

Los tokens son las unidades que los modelos usan para procesar texto. Una regla general: **1 token ≈ 4 caracteres en inglés** y un poco menos en español. La API cobra por token, así que es importante entender cuántos usás.

## Paso 5: Parámetros clave de la API

\`\`\`python
# 03_openai_parametros.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_respuesta(
    prompt: str,
    system_prompt: str = "Eres un asistente útil.",
    modelo: str = "gpt-4o-mini",
    temperatura: float = 0.7,
    max_tokens: int = 500,
    top_p: float = 1.0
) -> str:
    """
    Genera una respuesta usando la API de OpenAI.

    Parámetros:
    - prompt: Lo que pregunta el usuario
    - system_prompt: Instrucciones para el modelo
    - modelo: gpt-4o, gpt-4o-mini, gpt-4-turbo, etc.
    - temperatura: 0.0 = determinista, 1.0 = creativo, 2.0 = máximo caos
    - max_tokens: Límite de tokens en la respuesta
    - top_p: Nucleus sampling (alternativa a temperatura)
    """
    respuesta = client.chat.completions.create(
        model=modelo,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ],
        temperature=temperatura,
        max_tokens=max_tokens,
        top_p=top_p
    )
    return respuesta.choices[0].message.content

# Ejemplo 1: Respuesta precisa (temperatura baja)
print("=== Temperatura 0.0 (precisa) ===")
print(generar_respuesta(
    "¿Cuál es la capital de Argentina?",
    temperatura=0.0
))

# Ejemplo 2: Respuesta creativa (temperatura alta)
print("\\n=== Temperatura 1.2 (creativa) ===")
print(generar_respuesta(
    "Inventá un nombre para una startup de IA",
    temperatura=1.2
))

# Ejemplo 3: Con system prompt personalizado
print("\\n=== Con system prompt personalizado ===")
print(generar_respuesta(
    "¿Qué debería cenar?",
    system_prompt="Eres un chef argentino. Respondé con humor y sugerí comidas típicas.",
    temperatura=0.8
))
\`\`\`

## Paso 6: Manejo de errores robusto

Las APIs externas pueden fallar. Tu código tiene que estar preparado:

\`\`\`python
# 04_openai_errores.py
import os
import time
from dotenv import load_dotenv
from openai import OpenAI, APIError, RateLimitError, APIConnectionError

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def llamar_api_con_reintentos(
    mensajes: list,
    modelo: str = "gpt-4o-mini",
    max_reintentos: int = 3,
    espera_base: float = 1.0
) -> str:
    """Llama a la API con reintentos automáticos usando backoff exponencial."""

    for intento in range(max_reintentos):
        try:
            respuesta = client.chat.completions.create(
                model=modelo,
                messages=mensajes,
                temperature=0.7,
                max_tokens=500
            )
            return respuesta.choices[0].message.content

        except RateLimitError:
            espera = espera_base * (2 ** intento)
            print(f"Rate limit alcanzado. Esperando {espera}s... (intento {intento + 1})")
            time.sleep(espera)

        except APIConnectionError:
            print(f"Error de conexión. Reintentando... (intento {intento + 1})")
            time.sleep(espera_base)

        except APIError as e:
            print(f"Error de la API: {e}")
            if e.status_code and e.status_code >= 500:
                time.sleep(espera_base)
                continue
            raise

        except Exception as e:
            print(f"Error inesperado: {e}")
            raise

    raise Exception(f"Falló después de {max_reintentos} intentos")

# Usar la función
mensajes = [
    {"role": "system", "content": "Eres un asistente útil."},
    {"role": "user", "content": "¿Qué es el backoff exponencial?"}
]

resultado = llamar_api_con_reintentos(mensajes)
print(resultado)
\`\`\`

## Paso 7: Conversación multi-turno

Para mantener una conversación, simplemente seguís agregando mensajes a la lista:

\`\`\`python
# 05_openai_conversacion.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def chatear():
    """Chat interactivo con GPT-4."""
    mensajes = [
        {"role": "system", "content": "Eres un tutor amigable de programación. Respondé en español, de forma concisa."}
    ]

    print("Chat con GPT-4 (escribí 'salir' para terminar)")
    print("-" * 50)

    while True:
        # Leer input del usuario
        user_input = input("\\nVos: ")

        if user_input.lower() in ["salir", "exit", "quit"]:
            print("¡Hasta luego!")
            break

        # Agregar mensaje del usuario
        mensajes.append({"role": "user", "content": user_input})

        # Llamar a la API
        respuesta = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=mensajes,
            temperature=0.7,
            max_tokens=500
        )

        texto = respuesta.choices[0].message.content

        # Agregar respuesta del asistente al historial
        mensajes.append({"role": "assistant", "content": texto})

        print(f"\\nGPT: {texto}")

if __name__ == "__main__":
    chatear()
\`\`\`

## Modelos disponibles y cuándo usar cada uno

| Modelo | Velocidad | Costo | Uso recomendado |
|--------|-----------|-------|-----------------|
| gpt-4o | Rápido | Medio | Producción, tareas complejas |
| gpt-4o-mini | Muy rápido | Bajo | Desarrollo, tareas simples |
| gpt-4-turbo | Medio | Alto | Contexto largo, análisis profundo |
| o1 / o3 | Lento | Alto | Razonamiento complejo, matemáticas |

## Resumen

Ya sabés conectarte a la API de OpenAI, enviar mensajes, configurar parámetros, manejar errores con reintentos, y mantener conversaciones multi-turno. El patrón de lista de mensajes con roles es universal — lo vas a ver en todas las APIs de IA. En la próxima lección, vamos a hacer lo mismo pero con la API de Anthropic (Claude).
`;

export const leccion4 = `
# Lección 4: Tu primer script con la API de Anthropic (Claude)

## Introducción

Anthropic es la empresa detrás de Claude, uno de los modelos de lenguaje más capaces del mundo. Su API tiene un diseño ligeramente diferente al de OpenAI, pero los conceptos son los mismos. En esta lección vas a aprender a usar la API de Anthropic, escribir scripts funcionales y entender las diferencias clave con OpenAI.

## Paso 1: Obtener tu API key de Anthropic

1. Andá a [console.anthropic.com](https://console.anthropic.com)
2. Creá una cuenta o iniciá sesión
3. Navegá a **API Keys**
4. Hacé clic en **"Create Key"**
5. Copiá la key y guardala en tu archivo \`.env\`:

\`\`\`bash
ANTHROPIC_API_KEY=sk-ant-api03-tu-clave-aqui
\`\`\`

### Sobre el billing

Anthropic también cobra por tokens. Claude 3.5 Haiku es el modelo más económico para practicar. Cargá al menos $5 USD de créditos para empezar.

## Paso 2: Diferencias clave entre la API de Anthropic y OpenAI

Antes de escribir código, entendamos las diferencias:

| Aspecto | OpenAI | Anthropic |
|---------|--------|-----------|
| System prompt | Va dentro de la lista de mensajes | Es un parámetro separado |
| Parámetro de límite | \`max_tokens\` (opcional) | \`max_tokens\` (obligatorio) |
| Nombre del SDK | \`openai\` | \`anthropic\` |
| Modelos principales | gpt-4o, gpt-4o-mini | claude-sonnet-4-20250514, claude-3-5-haiku |
| Streaming | Similar | Similar |

La diferencia más importante es que en Anthropic el **system prompt es un parámetro separado**, no un mensaje dentro de la lista.

## Paso 3: Tu primer script con Claude

\`\`\`python
# 01_anthropic_basico.py
import os
from dotenv import load_dotenv
import anthropic

# Cargar variables de entorno
load_dotenv()

# Crear el cliente de Anthropic
client = anthropic.Anthropic(
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

# Hacer la llamada a la API
respuesta = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=500,
    system="Eres un asistente experto en tecnología. Respondés en español de Latinoamérica, de forma clara y concisa.",
    messages=[
        {
            "role": "user",
            "content": "¿Qué es una API y para qué sirve? Explicámelo en 3 oraciones."
        }
    ],
    temperature=0.7
)

# Extraer y mostrar la respuesta
texto = respuesta.content[0].text
print(texto)
\`\`\`

Ejecutalo:

\`\`\`bash
python 01_anthropic_basico.py
\`\`\`

## Paso 4: Explorar la respuesta completa

\`\`\`python
# 02_anthropic_respuesta_completa.py
import os
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

respuesta = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=300,
    system="Eres un asistente útil.",
    messages=[
        {"role": "user", "content": "Decime un dato curioso sobre inteligencia artificial."}
    ]
)

# Explorar la estructura de la respuesta
print("=== Respuesta completa ===")
print(f"ID: {respuesta.id}")
print(f"Modelo: {respuesta.model}")
print(f"Tipo: {respuesta.type}")
print(f"Rol: {respuesta.role}")
print(f"Razón de parada: {respuesta.stop_reason}")
print(f"Tokens de entrada: {respuesta.usage.input_tokens}")
print(f"Tokens de salida: {respuesta.usage.output_tokens}")
print(f"\\nContenido (tipo): {respuesta.content[0].type}")
print(f"\\nRespuesta:\\n{respuesta.content[0].text}")
\`\`\`

### Nota sobre content blocks

La respuesta de Anthropic usa **content blocks**. Cada bloque tiene un tipo (\`text\`, \`tool_use\`, etc.). Para respuestas simples de texto, siempre vas a acceder a \`respuesta.content[0].text\`.

## Paso 5: Función reutilizable con manejo de errores

\`\`\`python
# 03_anthropic_funcion.py
import os
import time
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def preguntar_a_claude(
    prompt: str,
    system_prompt: str = "Eres un asistente útil que responde en español.",
    modelo: str = "claude-sonnet-4-20250514",
    temperatura: float = 0.7,
    max_tokens: int = 1000,
    max_reintentos: int = 3
) -> str:
    """
    Envía un prompt a Claude y retorna la respuesta como string.
    Incluye reintentos automáticos para errores transitorios.
    """
    for intento in range(max_reintentos):
        try:
            respuesta = client.messages.create(
                model=modelo,
                max_tokens=max_tokens,
                system=system_prompt,
                messages=[
                    {"role": "user", "content": prompt}
                ],
                temperature=temperatura
            )
            return respuesta.content[0].text

        except anthropic.RateLimitError:
            espera = 2 ** intento
            print(f"Rate limit. Esperando {espera}s... (intento {intento + 1})")
            time.sleep(espera)

        except anthropic.APIConnectionError:
            print(f"Error de conexión. Reintentando... (intento {intento + 1})")
            time.sleep(1)

        except anthropic.APIStatusError as e:
            print(f"Error de API: {e.status_code} - {e.message}")
            if e.status_code >= 500:
                time.sleep(1)
                continue
            raise

    raise Exception(f"Falló después de {max_reintentos} intentos")

# Ejemplos de uso
print("=== Pregunta simple ===")
print(preguntar_a_claude("¿Qué es machine learning en una oración?"))

print("\\n=== Con system prompt personalizado ===")
print(preguntar_a_claude(
    "¿Qué debería aprender primero?",
    system_prompt="Eres un mentor de carrera en tecnología. Respondé de forma directa y práctica.",
    temperatura=0.5
))

print("\\n=== Usando Haiku (más rápido y barato) ===")
print(preguntar_a_claude(
    "Resumí qué es Python en 2 oraciones.",
    modelo="claude-3-5-haiku-20241022",
    max_tokens=200
))
\`\`\`

## Paso 6: Conversación multi-turno con Claude

\`\`\`python
# 04_anthropic_conversacion.py
import os
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def chatear_con_claude():
    """Chat interactivo con Claude."""
    system_prompt = "Eres un tutor amigable de programación e IA. Respondé en español de forma concisa y práctica."
    mensajes = []

    print("Chat con Claude (escribí 'salir' para terminar)")
    print("-" * 50)

    while True:
        user_input = input("\\nVos: ")

        if user_input.lower() in ["salir", "exit", "quit"]:
            print("¡Hasta luego!")
            break

        # Agregar mensaje del usuario
        mensajes.append({"role": "user", "content": user_input})

        # Llamar a la API
        respuesta = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=500,
            system=system_prompt,
            messages=mensajes,
            temperature=0.7
        )

        texto = respuesta.content[0].text

        # Agregar respuesta al historial
        mensajes.append({"role": "assistant", "content": texto})

        print(f"\\nClaude: {texto}")
        print(f"  [tokens: entrada={respuesta.usage.input_tokens}, salida={respuesta.usage.output_tokens}]")

if __name__ == "__main__":
    chatear_con_claude()
\`\`\`

## Paso 7: Comparación directa — el mismo prompt en OpenAI y Anthropic

\`\`\`python
# 05_comparar_apis.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import anthropic

load_dotenv()

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

prompt = "Explicá qué es un transformer en deep learning. Máximo 3 oraciones."
system = "Eres un experto en IA. Respondé en español de forma técnica pero accesible."

# Llamada a OpenAI
resp_openai = openai_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": system},
        {"role": "user", "content": prompt}
    ],
    temperature=0.5,
    max_tokens=300
)

# Llamada a Anthropic
resp_anthropic = anthropic_client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=300,
    system=system,
    messages=[{"role": "user", "content": prompt}],
    temperature=0.5
)

print("=== GPT-4o-mini ===")
print(resp_openai.choices[0].message.content)
print(f"Tokens: {resp_openai.usage.total_tokens}")

print("\\n=== Claude 3.5 Sonnet ===")
print(resp_anthropic.content[0].text)
print(f"Tokens: {resp_anthropic.usage.input_tokens + resp_anthropic.usage.output_tokens}")
\`\`\`

## Modelos de Anthropic

| Modelo | Velocidad | Capacidad | Uso recomendado |
|--------|-----------|-----------|-----------------|
| claude-sonnet-4-20250514 | Rápido | Alta | Uso general, mejor balance |
| claude-3-5-haiku | Muy rápido | Media | Tareas simples, alto volumen |
| claude-3-opus | Lento | Muy alta | Análisis profundo, tareas complejas |

## Resumen

Ya sabés usar tanto la API de OpenAI como la de Anthropic. Las diferencias principales son: el system prompt se pasa como parámetro separado en Anthropic, \`max_tokens\` es obligatorio, y la respuesta usa content blocks. El patrón general es el mismo: armás una lista de mensajes, llamás a la API, y extraés el texto de la respuesta. En la próxima lección vamos a completar la trilogía con la API de Gemini de Google.
`;

export const leccion5 = `
# Lección 5: Tu primer script con Gemini API

## Introducción

Google también tiene modelos de lenguaje de primera línea. Gemini (antes Bard) es la familia de modelos de Google DeepMind, y su API es accesible a través de Google AI Studio. En esta lección vas a aprender a conectarte a Gemini, generar respuestas, y entender cómo se compara con OpenAI y Anthropic.

## Paso 1: Obtener tu API key de Google

1. Andá a [aistudio.google.com](https://aistudio.google.com)
2. Iniciá sesión con tu cuenta de Google
3. Hacé clic en **"Get API key"** en el panel izquierdo
4. Seleccioná **"Create API key in new project"** o elegí un proyecto existente
5. Copiá la key y guardala en tu archivo \`.env\`:

\`\`\`bash
GOOGLE_API_KEY=AIzaSy...tu-clave-aqui
\`\`\`

### Costo

La API de Gemini tiene una capa gratuita generosa: Gemini 1.5 Flash permite hasta 15 requests por minuto gratis. Para practicar, no necesitás gastar nada.

## Paso 2: Diferencias con OpenAI y Anthropic

| Aspecto | OpenAI | Anthropic | Google Gemini |
|---------|--------|-----------|---------------|
| SDK Python | \`openai\` | \`anthropic\` | \`google-generativeai\` |
| System prompt | En mensajes | Parámetro separado | En configuración del modelo |
| Formato mensajes | role/content dicts | role/content dicts | Objetos propios o strings |
| Método principal | \`chat.completions.create()\` | \`messages.create()\` | \`generate_content()\` |

Gemini tiene la API más "diferente" de las tres. Usa un SDK con una interfaz más abstracta.

## Paso 3: Tu primer script con Gemini

\`\`\`python
# 01_gemini_basico.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

# Cargar variables de entorno
load_dotenv()

# Configurar la API key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Crear el modelo
modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="Eres un asistente experto en tecnología. Respondés en español de Latinoamérica, de forma clara y concisa."
)

# Generar una respuesta
respuesta = modelo.generate_content(
    "¿Qué es una API y para qué sirve? Explicámelo en 3 oraciones."
)

# Mostrar la respuesta
print(respuesta.text)
\`\`\`

Ejecutalo:

\`\`\`bash
python 01_gemini_basico.py
\`\`\`

## Paso 4: Explorar la respuesta completa

\`\`\`python
# 02_gemini_respuesta.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

modelo = genai.GenerativeModel("gemini-1.5-flash")

respuesta = modelo.generate_content(
    "Decime un dato curioso sobre inteligencia artificial."
)

print("=== Respuesta completa ===")
print(f"Texto: {respuesta.text}")
print(f"\\nMetadatos de uso:")
print(f"  Tokens de entrada: {respuesta.usage_metadata.prompt_token_count}")
print(f"  Tokens de salida: {respuesta.usage_metadata.candidates_token_count}")
print(f"  Tokens totales: {respuesta.usage_metadata.total_token_count}")

# Información del candidato
candidato = respuesta.candidates[0]
print(f"\\nRazón de parada: {candidato.finish_reason}")
print(f"Índice: {candidato.index}")
\`\`\`

## Paso 5: Configuración avanzada

\`\`\`python
# 03_gemini_configuracion.py
import os
from dotenv import load_dotenv
import google.generativeai as genai
from google.generativeai.types import GenerationConfig

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Configurar parámetros de generación
config = GenerationConfig(
    temperature=0.7,
    top_p=0.95,
    top_k=40,
    max_output_tokens=500,
)

modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=config,
    system_instruction="Eres un experto en programación Python. Respondé en español."
)

# Usar con la configuración
respuesta = modelo.generate_content("¿Cuáles son las 3 estructuras de datos más importantes en Python?")
print(respuesta.text)

# También podés sobreescribir la configuración por llamada
config_creativa = GenerationConfig(
    temperature=1.0,
    max_output_tokens=200
)

respuesta_creativa = modelo.generate_content(
    "Inventá un nombre para un lenguaje de programación del futuro.",
    generation_config=config_creativa
)
print(f"\\nRespuesta creativa: {respuesta_creativa.text}")
\`\`\`

## Paso 6: Conversación multi-turno con Gemini

Gemini tiene un concepto de **chat** incorporado en el SDK, lo cual simplifica las conversaciones:

\`\`\`python
# 04_gemini_conversacion.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="Eres un tutor amigable de programación e IA. Respondé en español de forma concisa."
)

# Iniciar un chat
chat = modelo.start_chat(history=[])

def chatear_con_gemini():
    print("Chat con Gemini (escribí 'salir' para terminar)")
    print("-" * 50)

    while True:
        user_input = input("\\nVos: ")

        if user_input.lower() in ["salir", "exit", "quit"]:
            print("¡Hasta luego!")
            break

        # Enviar mensaje (el historial se maneja automáticamente)
        respuesta = chat.send_message(user_input)

        print(f"\\nGemini: {respuesta.text}")

        # Podés ver el historial acumulado
        print(f"  [mensajes en historial: {len(chat.history)}]")

if __name__ == "__main__":
    chatear_con_gemini()
\`\`\`

Notá que \`chat.send_message()\` maneja el historial automáticamente. No necesitás mantener una lista de mensajes manualmente como en OpenAI y Anthropic.

## Paso 7: Función reutilizable con manejo de errores

\`\`\`python
# 05_gemini_funcion.py
import os
import time
from dotenv import load_dotenv
import google.generativeai as genai
from google.api_core import exceptions as google_exceptions

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def preguntar_a_gemini(
    prompt: str,
    system_prompt: str = "Eres un asistente útil que responde en español.",
    modelo: str = "gemini-1.5-flash",
    temperatura: float = 0.7,
    max_tokens: int = 1000,
    max_reintentos: int = 3
) -> str:
    """Genera una respuesta con Gemini, con reintentos automáticos."""

    model = genai.GenerativeModel(
        model_name=modelo,
        system_instruction=system_prompt,
        generation_config=genai.GenerationConfig(
            temperature=temperatura,
            max_output_tokens=max_tokens
        )
    )

    for intento in range(max_reintentos):
        try:
            respuesta = model.generate_content(prompt)
            return respuesta.text

        except google_exceptions.ResourceExhausted:
            espera = 2 ** intento
            print(f"Rate limit. Esperando {espera}s... (intento {intento + 1})")
            time.sleep(espera)

        except google_exceptions.ServiceUnavailable:
            print(f"Servicio no disponible. Reintentando... (intento {intento + 1})")
            time.sleep(1)

        except Exception as e:
            print(f"Error: {e}")
            raise

    raise Exception(f"Falló después de {max_reintentos} intentos")

# Ejemplos
print("=== Flash (rápido y gratis) ===")
print(preguntar_a_gemini("¿Qué es un transformer?"))

print("\\n=== Con system prompt personalizado ===")
print(preguntar_a_gemini(
    "¿Qué lenguaje debería aprender primero para IA?",
    system_prompt="Eres un mentor de carrera tech en Latinoamérica. Sé directo.",
    temperatura=0.3
))
\`\`\`

## Paso 8: Comparación triple — el mismo prompt en las tres APIs

\`\`\`python
# 06_comparar_tres_apis.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import anthropic
import google.generativeai as genai

load_dotenv()

# Configurar los tres clientes
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompt = "¿Qué es un embedding en IA? Máximo 3 oraciones."
system = "Eres un experto en IA. Respondé en español de forma técnica pero accesible."

# OpenAI
r1 = openai_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "system", "content": system}, {"role": "user", "content": prompt}],
    max_tokens=300
)

# Anthropic
r2 = anthropic_client.messages.create(
    model="claude-3-5-haiku-20241022",
    max_tokens=300,
    system=system,
    messages=[{"role": "user", "content": prompt}]
)

# Gemini
gemini_model = genai.GenerativeModel("gemini-1.5-flash", system_instruction=system)
r3 = gemini_model.generate_content(prompt)

print("=== GPT-4o-mini ===")
print(r1.choices[0].message.content)

print("\\n=== Claude 3.5 Haiku ===")
print(r2.content[0].text)

print("\\n=== Gemini 1.5 Flash ===")
print(r3.text)
\`\`\`

## Modelos de Gemini disponibles

| Modelo | Velocidad | Costo | Uso recomendado |
|--------|-----------|-------|-----------------|
| gemini-1.5-flash | Muy rápido | Gratis / Muy bajo | Desarrollo, tareas rápidas |
| gemini-1.5-pro | Medio | Bajo | Uso general, tareas complejas |
| gemini-2.0-flash | Muy rápido | Bajo | Última generación, multimodal |

## Resumen

Ya dominás las tres APIs principales de IA generativa: OpenAI, Anthropic y Google Gemini. La diferencia más notable de Gemini es su SDK más abstracto con \`GenerativeModel\` y \`start_chat()\`, y su generosa capa gratuita. En la próxima lección vamos a aprender streaming de respuestas, una técnica esencial para mejorar la experiencia de usuario.
`;

export const leccion6 = `
# Lección 6: Streaming de respuestas

## Introducción

Cuando hacés una llamada normal a una API de IA, tenés que esperar a que el modelo genere **toda** la respuesta antes de recibirla. Esto puede significar esperar 5, 10 o hasta 30 segundos mirando una pantalla en blanco. El **streaming** resuelve esto: recibís la respuesta token por token, en tiempo real, mientras el modelo la genera. Es la diferencia entre ver un mensaje aparecer palabra por palabra (como en ChatGPT) o esperar una eternidad y recibir todo de golpe.

## ¿Por qué importa el streaming?

### Experiencia de usuario (UX)

- **Sin streaming**: El usuario espera 8 segundos sin feedback → piensa que la app se colgó
- **Con streaming**: El primer token aparece en ~200ms → el usuario ve que algo está pasando

### Métricas clave

- **Time to First Token (TTFT)**: Tiempo hasta que llega el primer token. Con streaming, es ~200-500ms. Sin streaming, es el tiempo total de generación.
- **Perceived latency**: La latencia percibida baja drásticamente con streaming, aunque el tiempo total sea el mismo.

### Cuándo usar streaming

- **Siempre** en interfaces de chat
- **Siempre** cuando la respuesta puede ser larga
- **No necesario** cuando procesás la respuesta programáticamente (por ejemplo, extracción de datos)

## Streaming con OpenAI

### Versión síncrona

\`\`\`python
# 01_streaming_openai_sync.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# La clave es stream=True
stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Eres un asistente útil. Respondé en español."},
        {"role": "user", "content": "Explicá qué es el machine learning y sus 3 tipos principales."}
    ],
    temperature=0.7,
    max_tokens=800,
    stream=True  # Esto activa el streaming
)

# Iterar sobre los chunks del stream
print("GPT: ", end="", flush=True)
respuesta_completa = ""

for chunk in stream:
    # Cada chunk tiene un delta con contenido parcial
    delta = chunk.choices[0].delta
    if delta.content:
        print(delta.content, end="", flush=True)
        respuesta_completa += delta.content

print()  # Nueva línea al final
print(f"\\n[Respuesta completa: {len(respuesta_completa)} caracteres]")
\`\`\`

### Versión async (recomendada para producción)

\`\`\`python
# 02_streaming_openai_async.py
import os
import asyncio
from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv()
client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

async def stream_openai(prompt: str, system: str = "Eres un asistente útil.") -> str:
    """Hace streaming de una respuesta de OpenAI."""

    stream = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=800,
        stream=True
    )

    respuesta_completa = ""

    async for chunk in stream:
        delta = chunk.choices[0].delta
        if delta.content:
            print(delta.content, end="", flush=True)
            respuesta_completa += delta.content

    print()
    return respuesta_completa

async def main():
    print("=== Streaming async con OpenAI ===\\n")
    resultado = await stream_openai(
        "¿Cuáles son las 5 librerías de Python más usadas en data science?",
        system="Eres un data scientist senior. Respondé en español."
    )
    print(f"\\n[Total: {len(resultado)} caracteres]")

asyncio.run(main())
\`\`\`

## Streaming con Anthropic

### Versión síncrona

\`\`\`python
# 03_streaming_anthropic_sync.py
import os
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

# Anthropic usa un context manager para streaming
print("Claude: ", end="", flush=True)
respuesta_completa = ""

with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=800,
    system="Eres un asistente útil. Respondé en español.",
    messages=[
        {"role": "user", "content": "Explicá qué es el machine learning y sus 3 tipos principales."}
    ],
    temperature=0.7
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
        respuesta_completa += text

print()
print(f"\\n[Respuesta completa: {len(respuesta_completa)} caracteres]")
\`\`\`

### Versión async

\`\`\`python
# 04_streaming_anthropic_async.py
import os
import asyncio
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.AsyncAnthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

async def stream_claude(prompt: str, system: str = "Eres un asistente útil.") -> str:
    """Hace streaming de una respuesta de Claude."""

    respuesta_completa = ""

    async with client.messages.stream(
        model="claude-sonnet-4-20250514",
        max_tokens=800,
        system=system,
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    ) as stream:
        async for text in stream.text_stream:
            print(text, end="", flush=True)
            respuesta_completa += text

    print()
    return respuesta_completa

async def main():
    print("=== Streaming async con Claude ===\\n")
    resultado = await stream_claude(
        "¿Cuáles son las 5 librerías de Python más usadas en data science?"
    )
    print(f"\\n[Total: {len(resultado)} caracteres]")

asyncio.run(main())
\`\`\`

## Streaming con Gemini

\`\`\`python
# 05_streaming_gemini.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="Eres un asistente útil. Respondé en español."
)

# Gemini usa stream=True en generate_content
print("Gemini: ", end="", flush=True)
respuesta_completa = ""

respuesta = modelo.generate_content(
    "Explicá qué es el machine learning y sus 3 tipos principales.",
    stream=True
)

for chunk in respuesta:
    if chunk.text:
        print(chunk.text, end="", flush=True)
        respuesta_completa += chunk.text

print()
print(f"\\n[Respuesta completa: {len(respuesta_completa)} caracteres]")
\`\`\`

## Chat interactivo con streaming

Este es el ejemplo más completo: un chat que soporta múltiples proveedores con streaming:

\`\`\`python
# 06_chat_streaming.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import anthropic

load_dotenv()

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def stream_respuesta(mensajes: list, proveedor: str = "openai") -> str:
    """Genera una respuesta con streaming para cualquier proveedor."""
    respuesta_completa = ""

    if proveedor == "openai":
        stream = openai_client.chat.completions.create(
            model="gpt-4o-mini",
            messages=mensajes,
            temperature=0.7,
            max_tokens=600,
            stream=True
        )
        for chunk in stream:
            if chunk.choices[0].delta.content:
                texto = chunk.choices[0].delta.content
                print(texto, end="", flush=True)
                respuesta_completa += texto

    elif proveedor == "anthropic":
        # Separar el system prompt
        system = "Eres un asistente útil."
        msgs = []
        for m in mensajes:
            if m["role"] == "system":
                system = m["content"]
            else:
                msgs.append(m)

        with anthropic_client.messages.stream(
            model="claude-sonnet-4-20250514",
            max_tokens=600,
            system=system,
            messages=msgs,
            temperature=0.7
        ) as stream:
            for text in stream.text_stream:
                print(text, end="", flush=True)
                respuesta_completa += text

    print()
    return respuesta_completa

def main():
    proveedor = input("Elegí proveedor (openai/anthropic): ").strip().lower()
    if proveedor not in ["openai", "anthropic"]:
        proveedor = "openai"

    nombre = "GPT" if proveedor == "openai" else "Claude"

    mensajes = [
        {"role": "system", "content": "Eres un tutor de programación. Respondé en español, de forma concisa."}
    ]

    print(f"\\nChat con {nombre} (streaming) — escribí 'salir' para terminar")
    print("-" * 50)

    while True:
        user_input = input("\\nVos: ")
        if user_input.lower() in ["salir", "exit"]:
            break

        mensajes.append({"role": "user", "content": user_input})

        print(f"\\n{nombre}: ", end="", flush=True)
        respuesta = stream_respuesta(mensajes, proveedor)

        mensajes.append({"role": "assistant", "content": respuesta})

if __name__ == "__main__":
    main()
\`\`\`

## Patrones importantes

### Acumular la respuesta completa

Siempre acumulá el texto durante el streaming. Lo vas a necesitar para guardar en historial:

\`\`\`python
respuesta_completa = ""
for chunk in stream:
    if chunk.choices[0].delta.content:
        texto = chunk.choices[0].delta.content
        respuesta_completa += texto
        # Procesar cada chunk (mostrar, enviar a frontend, etc.)
\`\`\`

### Callback pattern

Para separar la lógica de streaming de la presentación:

\`\`\`python
from typing import Callable

def generar_con_streaming(
    prompt: str,
    on_token: Callable[[str], None] = print
) -> str:
    """Genera respuesta con streaming, ejecutando on_token por cada token."""
    stream = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        stream=True
    )

    completa = ""
    for chunk in stream:
        if chunk.choices[0].delta.content:
            token = chunk.choices[0].delta.content
            completa += token
            on_token(token)  # Callback personalizable

    return completa
\`\`\`

## Resumen

El streaming transforma la experiencia de usuario de tus aplicaciones de IA. Los tres proveedores lo soportan con patrones similares: OpenAI usa iteración sobre chunks con \`delta.content\`, Anthropic usa un context manager con \`text_stream\`, y Gemini usa \`stream=True\` en \`generate_content()\`. Siempre acumulá la respuesta completa durante el streaming. En la próxima lección vamos a explorar embeddings, una de las tecnologías más poderosas detrás de las aplicaciones de IA.
`;

export const leccion7 = `
# Lección 7: Embeddings: qué son y para qué sirven

## Introducción

Los embeddings son una de las tecnologías más importantes y menos comprendidas de la IA moderna. Son la base de la búsqueda semántica, los sistemas de recomendación, la detección de similitud, y sobre todo, del patrón RAG (Retrieval-Augmented Generation) que permite a los modelos de lenguaje acceder a información que no tienen en su entrenamiento.

En esta lección vas a entender qué son los embeddings, cómo funcionan, y cómo generarlos con código.

## ¿Qué es un embedding?

Un embedding es una **representación numérica del significado** de un texto. Convierte palabras, oraciones o documentos enteros en vectores (listas de números) en un espacio de alta dimensionalidad.

### La intuición

Imaginá un espacio tridimensional (como una habitación). Ahora imaginá que cada palabra o frase ocupa un punto en ese espacio, de forma que **las cosas que significan algo parecido están cerca entre sí**:

- "perro" y "gato" estarían cerca (ambos son mascotas)
- "perro" y "refrigerador" estarían lejos (no tienen relación semántica)
- "rey" y "reina" estarían cerca, y la dirección de "rey" a "reina" sería similar a la dirección de "hombre" a "mujer"

En la práctica, estos espacios no tienen 3 dimensiones sino **1536 o 3072 dimensiones** (dependiendo del modelo), lo cual les da una capacidad increíble de capturar matices semánticos.

### ¿Cómo se ve un embedding?

\`\`\`python
# Un embedding es simplemente una lista de números
embedding_ejemplo = [0.0023, -0.0142, 0.0891, -0.0034, 0.0567, ...]
# Puede tener 1536 números (text-embedding-3-small)
# o 3072 números (text-embedding-3-large)
\`\`\`

## ¿Para qué sirven?

### 1. Búsqueda semántica
En vez de buscar por palabras exactas (como Google en 2005), buscás por **significado**. "¿Cómo cocinar pasta?" encuentra resultados sobre "receta de fideos" aunque no compartan ninguna palabra.

### 2. RAG (Retrieval-Augmented Generation)
Guardás tus documentos como embeddings en una base de datos vectorial. Cuando un usuario hace una pregunta, buscás los documentos más relevantes y se los pasás al modelo de lenguaje como contexto. Esto es lo que permite que un chatbot "conozca" información de tu empresa.

### 3. Detección de duplicados
Si dos textos tienen embeddings muy similares, probablemente dicen lo mismo aunque usen palabras diferentes.

### 4. Clasificación
Podés clasificar textos comparando su embedding contra embeddings de categorías predefinidas.

### 5. Clustering
Agrupar documentos similares automáticamente sin necesidad de etiquetas.

## Similitud coseno: ¿qué tan parecidos son dos textos?

Para comparar dos embeddings, usamos la **similitud coseno**. Es una medida que va de -1 a 1:

- **1.0**: Idénticos en significado
- **0.0**: Sin relación
- **-1.0**: Significados opuestos

\`\`\`python
import numpy as np

def similitud_coseno(vec_a: list, vec_b: list) -> float:
    """Calcula la similitud coseno entre dos vectores."""
    a = np.array(vec_a)
    b = np.array(vec_b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Ejemplo conceptual
# Si embedding_perro y embedding_gato son similares:
# similitud_coseno(embedding_perro, embedding_gato) ≈ 0.85
# similitud_coseno(embedding_perro, embedding_refrigerador) ≈ 0.15
\`\`\`

## Generar embeddings con OpenAI

\`\`\`python
# 01_embeddings_basico.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import numpy as np

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_embedding(texto: str, modelo: str = "text-embedding-3-small") -> list:
    """Genera un embedding para un texto dado."""
    respuesta = client.embeddings.create(
        model=modelo,
        input=texto
    )
    return respuesta.data[0].embedding

# Generar embeddings para diferentes textos
textos = [
    "El gato duerme en el sofá",
    "El felino descansa en el sillón",
    "Python es un lenguaje de programación",
    "Me gusta programar en Python",
    "Hoy hace mucho frío afuera"
]

embeddings = {}
for texto in textos:
    embeddings[texto] = generar_embedding(texto)
    print(f"'{texto}' -> vector de {len(embeddings[texto])} dimensiones")

# Calcular similitudes
print("\\n=== Similitudes ===")
def similitud_coseno(a, b):
    a, b = np.array(a), np.array(b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Textos similares
sim = similitud_coseno(embeddings[textos[0]], embeddings[textos[1]])
print(f"'{textos[0]}' vs '{textos[1]}': {sim:.4f}")  # Alta similitud

# Textos relacionados
sim = similitud_coseno(embeddings[textos[2]], embeddings[textos[3]])
print(f"'{textos[2]}' vs '{textos[3]}': {sim:.4f}")  # Similitud media-alta

# Textos sin relación
sim = similitud_coseno(embeddings[textos[0]], embeddings[textos[2]])
print(f"'{textos[0]}' vs '{textos[2]}': {sim:.4f}")  # Baja similitud
\`\`\`

## Búsqueda semántica simple

\`\`\`python
# 02_busqueda_semantica.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import numpy as np

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_embedding(texto: str) -> list:
    resp = client.embeddings.create(model="text-embedding-3-small", input=texto)
    return resp.data[0].embedding

def similitud_coseno(a, b):
    a, b = np.array(a), np.array(b)
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

# Base de conocimiento (simula documentos de una empresa)
documentos = [
    "La política de vacaciones otorga 15 días hábiles al año para empleados con más de 1 año de antigüedad.",
    "El horario laboral es de lunes a viernes, de 9:00 a 18:00, con una hora de almuerzo.",
    "Para solicitar un reembolso de gastos, completá el formulario RF-001 y adjuntá los comprobantes.",
    "La empresa ofrece capacitación en Python, machine learning y data science.",
    "El seguro médico cubre consultas, medicamentos y hospitalización para el titular y su familia.",
    "Para trabajar de forma remota, necesitás la aprobación de tu líder directo y una conexión estable.",
    "Las evaluaciones de desempeño se realizan cada 6 meses, en junio y diciembre.",
    "El plan de carrera incluye posiciones junior, semi-senior, senior y lead en cada área."
]

# Generar embeddings para todos los documentos
print("Generando embeddings para la base de conocimiento...")
doc_embeddings = [generar_embedding(doc) for doc in documentos]
print(f"Generados {len(doc_embeddings)} embeddings de {len(doc_embeddings[0])} dimensiones cada uno.\\n")

# Función de búsqueda
def buscar(consulta: str, top_k: int = 3) -> list:
    """Busca los documentos más relevantes para una consulta."""
    embedding_consulta = generar_embedding(consulta)

    # Calcular similitud con cada documento
    resultados = []
    for i, doc_emb in enumerate(doc_embeddings):
        sim = similitud_coseno(embedding_consulta, doc_emb)
        resultados.append((sim, documentos[i]))

    # Ordenar por similitud descendente
    resultados.sort(key=lambda x: x[0], reverse=True)

    return resultados[:top_k]

# Probar búsquedas
consultas = [
    "¿Cuántos días de vacaciones me corresponden?",
    "¿Puedo trabajar desde casa?",
    "¿Qué cursos ofrece la empresa?",
    "¿Cómo pido que me devuelvan plata de un gasto?"
]

for consulta in consultas:
    print(f"Consulta: {consulta}")
    resultados = buscar(consulta)
    for i, (sim, doc) in enumerate(resultados):
        print(f"  {i+1}. [{sim:.4f}] {doc[:80]}...")
    print()
\`\`\`

## Embeddings en batch (múltiples textos)

\`\`\`python
# 03_embeddings_batch.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_embeddings_batch(textos: list[str], modelo: str = "text-embedding-3-small") -> list:
    """Genera embeddings para múltiples textos en una sola llamada (más eficiente)."""
    respuesta = client.embeddings.create(
        model=modelo,
        input=textos
    )
    return [item.embedding for item in respuesta.data]

# Generar embeddings para 5 textos en una sola llamada
textos = [
    "Inteligencia artificial",
    "Machine learning",
    "Deep learning",
    "Redes neuronales",
    "Procesamiento de lenguaje natural"
]

embeddings = generar_embeddings_batch(textos)
print(f"Generados {len(embeddings)} embeddings en una sola llamada")
print(f"Dimensiones por embedding: {len(embeddings[0])}")
\`\`\`

## Modelos de embeddings de OpenAI

| Modelo | Dimensiones | Costo (por 1M tokens) | Uso recomendado |
|--------|-------------|----------------------|-----------------|
| text-embedding-3-small | 1536 | ~$0.02 | Uso general, más económico |
| text-embedding-3-large | 3072 | ~$0.13 | Mayor precisión, búsquedas críticas |
| text-embedding-ada-002 | 1536 | ~$0.10 | Legacy, no usar para proyectos nuevos |

## Tips prácticos

1. **Normalizá tus textos** antes de generar embeddings: eliminá caracteres extraños, normalizá espacios
2. **Usá batch** siempre que puedas: es más eficiente y más barato
3. **Guardá los embeddings**: no los regeneres cada vez (son determinísticos para el mismo input)
4. **text-embedding-3-small** es suficiente para el 90% de los casos
5. **Chunk size importa**: para documentos largos, dividí en chunks de 200-500 tokens

## Resumen

Los embeddings convierten texto en vectores numéricos que capturan significado semántico. Usando similitud coseno, podés comparar qué tan parecidos son dos textos sin importar las palabras exactas que usen. Esto es la base de la búsqueda semántica y RAG. En la próxima lección vamos a aprender a guardar estos embeddings en bases de datos vectoriales para hacer búsquedas eficientes a escala.
`;

export const leccion8 = `
# Lección 8: Bases de datos vectoriales (Chroma, pgvector)

## Introducción

En la lección anterior generamos embeddings y los buscamos iterando sobre una lista. Eso funciona para 10 o 100 documentos, pero ¿qué pasa cuando tenés 100,000 o 1,000,000? Necesitás una **base de datos vectorial**: una base de datos diseñada específicamente para almacenar vectores y buscar los más similares de forma eficiente.

## ¿Qué es una base de datos vectorial?

Una base de datos vectorial es como una base de datos normal pero optimizada para una operación: **buscar los vectores más cercanos a un vector dado** (lo que se llama "nearest neighbor search" o búsqueda del vecino más cercano).

### ¿Por qué no usar una base de datos normal?

Una base SQL puede guardar vectores, pero buscar por similitud requeriría calcular la distancia contra **cada fila** de la tabla. Eso es O(n). Las bases vectoriales usan estructuras de datos especiales (como HNSW — Hierarchical Navigable Small World) para hacer búsquedas aproximadas en O(log n).

### Opciones populares

| Base de datos | Tipo | Ideal para |
|---------------|------|------------|
| **Chroma** | Embebida (local) | Prototipado, proyectos chicos |
| **pgvector** | Extensión PostgreSQL | Producción, ya usás Postgres |
| **Pinecone** | Cloud (SaaS) | Escala masiva, sin ops |
| **Weaviate** | Self-hosted / Cloud | Búsqueda avanzada |
| **Qdrant** | Self-hosted / Cloud | Alto rendimiento |

En esta lección nos vamos a enfocar en **Chroma** (para empezar rápido localmente) y **pgvector** (para producción).

## ChromaDB: Setup y uso completo

Chroma es la forma más fácil de empezar con bases de datos vectoriales. Se ejecuta localmente, no necesitás instalar un servidor separado, y se integra directamente en tu código Python.

### Instalación

\`\`\`bash
pip install chromadb
\`\`\`

### Tu primera base de datos vectorial

\`\`\`python
# 01_chroma_basico.py
import chromadb

# Crear un cliente de Chroma (en memoria)
client = chromadb.Client()

# Crear una colección (equivalente a una tabla)
coleccion = client.create_collection(
    name="documentos_empresa",
    metadata={"description": "Base de conocimiento de la empresa"}
)

# Agregar documentos
# Chroma genera los embeddings automáticamente usando su modelo por defecto
coleccion.add(
    documents=[
        "La política de vacaciones otorga 15 días hábiles al año para empleados con más de 1 año.",
        "El horario laboral es de lunes a viernes, de 9:00 a 18:00.",
        "Para solicitar reembolso de gastos, completá el formulario RF-001.",
        "La empresa ofrece capacitación en Python, machine learning y data science.",
        "El seguro médico cubre consultas, medicamentos y hospitalización.",
        "Para trabajar remoto, necesitás aprobación de tu líder directo.",
        "Las evaluaciones de desempeño se realizan cada 6 meses.",
        "El plan de carrera incluye posiciones junior, semi-senior, senior y lead."
    ],
    ids=["doc1", "doc2", "doc3", "doc4", "doc5", "doc6", "doc7", "doc8"],
    metadatas=[
        {"categoria": "rrhh", "tipo": "politica"},
        {"categoria": "rrhh", "tipo": "horario"},
        {"categoria": "finanzas", "tipo": "proceso"},
        {"categoria": "capacitacion", "tipo": "oferta"},
        {"categoria": "beneficios", "tipo": "salud"},
        {"categoria": "rrhh", "tipo": "politica"},
        {"categoria": "rrhh", "tipo": "proceso"},
        {"categoria": "rrhh", "tipo": "carrera"}
    ]
)

print(f"Colección '{coleccion.name}' creada con {coleccion.count()} documentos")
\`\`\`

### Buscar documentos

\`\`\`python
# 02_chroma_buscar.py
import chromadb

client = chromadb.Client()

# Crear y poblar la colección
coleccion = client.create_collection(name="docs")
coleccion.add(
    documents=[
        "La política de vacaciones otorga 15 días hábiles al año.",
        "El horario laboral es de lunes a viernes, de 9:00 a 18:00.",
        "Para reembolso de gastos, completá el formulario RF-001.",
        "La empresa ofrece capacitación en Python y machine learning.",
        "El seguro médico cubre consultas y hospitalización.",
        "Para trabajar remoto, necesitás aprobación del líder.",
    ],
    ids=["d1", "d2", "d3", "d4", "d5", "d6"]
)

# Buscar por similitud semántica
resultados = coleccion.query(
    query_texts=["¿Cuántos días de vacaciones tengo?"],
    n_results=3
)

print("=== Resultados de búsqueda ===")
for i, (doc, distancia) in enumerate(zip(
    resultados["documents"][0],
    resultados["distances"][0]
)):
    print(f"{i+1}. [distancia: {distancia:.4f}] {doc}")
\`\`\`

### Persistir datos en disco

\`\`\`python
# 03_chroma_persistente.py
import chromadb

# Crear un cliente persistente (los datos se guardan en disco)
client = chromadb.PersistentClient(path="./mi_chroma_db")

# La primera vez: crear la colección y agregar datos
coleccion = client.get_or_create_collection(name="knowledge_base")

# Solo agregar si está vacía
if coleccion.count() == 0:
    coleccion.add(
        documents=[
            "Python fue creado por Guido van Rossum en 1991.",
            "JavaScript es el lenguaje de la web.",
            "Rust se enfoca en seguridad de memoria sin garbage collector.",
            "Go fue creado por Google para sistemas distribuidos.",
            "TypeScript agrega tipos estáticos a JavaScript."
        ],
        ids=["py", "js", "rust", "go", "ts"]
    )
    print(f"Agregados {coleccion.count()} documentos")
else:
    print(f"Colección ya tiene {coleccion.count()} documentos")

# Buscar
resultados = coleccion.query(
    query_texts=["lenguaje para programación web"],
    n_results=2
)

for doc, dist in zip(resultados["documents"][0], resultados["distances"][0]):
    print(f"[{dist:.4f}] {doc}")
\`\`\`

### Usar embeddings de OpenAI con Chroma

Por defecto, Chroma usa un modelo de embeddings local. Pero podés usar embeddings de OpenAI para mejor calidad:

\`\`\`python
# 04_chroma_openai_embeddings.py
import os
from dotenv import load_dotenv
import chromadb
from chromadb.utils.embedding_functions import OpenAIEmbeddingFunction

load_dotenv()

# Configurar la función de embeddings de OpenAI
openai_ef = OpenAIEmbeddingFunction(
    api_key=os.getenv("OPENAI_API_KEY"),
    model_name="text-embedding-3-small"
)

# Crear cliente y colección con embeddings de OpenAI
client = chromadb.PersistentClient(path="./chroma_openai_db")
coleccion = client.get_or_create_collection(
    name="docs_openai",
    embedding_function=openai_ef
)

if coleccion.count() == 0:
    coleccion.add(
        documents=[
            "Los transformers usan mecanismos de atención para procesar secuencias.",
            "Las redes convolucionales son ideales para procesamiento de imágenes.",
            "El aprendizaje por refuerzo aprende mediante recompensas y penalizaciones.",
            "Los autoencoders comprimen datos a una representación latente.",
            "GANs generan datos nuevos mediante un juego entre generador y discriminador."
        ],
        ids=["t1", "t2", "t3", "t4", "t5"]
    )

resultados = coleccion.query(
    query_texts=["¿Cómo funcionan los modelos de lenguaje como GPT?"],
    n_results=2
)

for doc, dist in zip(resultados["documents"][0], resultados["distances"][0]):
    print(f"[{dist:.4f}] {doc}")
\`\`\`

## pgvector: PostgreSQL como base vectorial

Si ya usás PostgreSQL, pgvector te permite agregar capacidades de búsqueda vectorial sin un servicio adicional.

### Instalación

\`\`\`bash
# Instalar la extensión de PostgreSQL
# En macOS con Homebrew:
brew install pgvector

# Instalar el driver de Python
pip install psycopg2-binary pgvector
\`\`\`

### Configuración en PostgreSQL

\`\`\`sql
-- Activar la extensión
CREATE EXTENSION IF NOT EXISTS vector;

-- Crear tabla con columna vector
CREATE TABLE documentos (
    id SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    categoria VARCHAR(50),
    embedding vector(1536)  -- 1536 dimensiones para text-embedding-3-small
);

-- Crear índice para búsquedas eficientes
CREATE INDEX ON documentos USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
\`\`\`

### Usar pgvector desde Python

\`\`\`python
# 05_pgvector_ejemplo.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import psycopg2
from pgvector.psycopg2 import register_vector

load_dotenv()

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_embedding(texto: str) -> list:
    resp = openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=texto
    )
    return resp.data[0].embedding

# Conectar a PostgreSQL
conn = psycopg2.connect(
    host="localhost",
    database="mi_proyecto_ia",
    user="postgres",
    password=os.getenv("POSTGRES_PASSWORD")
)
register_vector(conn)
cur = conn.cursor()

# Insertar documentos con sus embeddings
documentos = [
    ("Python es ideal para machine learning", "tech"),
    ("El café colombiano es famoso mundialmente", "general"),
    ("TensorFlow es una librería de deep learning", "tech"),
]

for contenido, categoria in documentos:
    embedding = generar_embedding(contenido)
    cur.execute(
        "INSERT INTO documentos (contenido, categoria, embedding) VALUES (%s, %s, %s)",
        (contenido, categoria, embedding)
    )

conn.commit()

# Buscar por similitud
consulta = "¿Qué herramientas se usan para inteligencia artificial?"
embedding_consulta = generar_embedding(consulta)

cur.execute("""
    SELECT contenido, categoria,
           1 - (embedding <=> %s::vector) AS similitud
    FROM documentos
    ORDER BY embedding <=> %s::vector
    LIMIT 3
""", (embedding_consulta, embedding_consulta))

print(f"Consulta: {consulta}")
for contenido, categoria, similitud in cur.fetchall():
    print(f"  [{similitud:.4f}] [{categoria}] {contenido}")

cur.close()
conn.close()
\`\`\`

## Cuándo usar cada una

| Criterio | ChromaDB | pgvector |
|----------|----------|----------|
| Setup | 1 minuto | Requiere PostgreSQL |
| Persistencia | Archivo local | Base de datos |
| Escala | Miles de documentos | Millones |
| Producción | Prototipado | Ideal |
| Ecosistema | Python SDK | SQL + cualquier lenguaje |

## RAG: uniendo todo

La arquitectura RAG (Retrieval-Augmented Generation) combina embeddings + base vectorial + LLM:

\`\`\`python
# 06_rag_simple.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import chromadb

load_dotenv()
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 1. Crear y poblar la base vectorial
chroma_client = chromadb.Client()
coleccion = chroma_client.create_collection(name="rag_demo")
coleccion.add(
    documents=[
        "El plan básico cuesta $10/mes e incluye 100 consultas.",
        "El plan profesional cuesta $50/mes e incluye consultas ilimitadas.",
        "Todos los planes incluyen soporte por email en horario laboral.",
        "El plan enterprise incluye soporte 24/7 y SLA garantizado.",
        "Podés cancelar tu suscripción en cualquier momento sin penalidad."
    ],
    ids=["p1", "p2", "p3", "p4", "p5"]
)

# 2. Función RAG
def responder_con_contexto(pregunta: str) -> str:
    # Buscar documentos relevantes
    resultados = coleccion.query(query_texts=[pregunta], n_results=3)
    contexto = "\\n".join(resultados["documents"][0])

    # Generar respuesta con el LLM usando el contexto
    respuesta = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": f"""Respondé la pregunta del usuario usando SOLO la información del contexto proporcionado.
Si la respuesta no está en el contexto, decí que no tenés esa información.

Contexto:
{contexto}"""
            },
            {"role": "user", "content": pregunta}
        ],
        temperature=0.3,
        max_tokens=300
    )

    return respuesta.choices[0].message.content

# 3. Probar
preguntas = [
    "¿Cuánto cuesta el plan profesional?",
    "¿Puedo cancelar cuando quiera?",
    "¿El plan básico tiene soporte 24/7?"
]

for pregunta in preguntas:
    print(f"Q: {pregunta}")
    print(f"A: {responder_con_contexto(pregunta)}\\n")
\`\`\`

## Resumen

Las bases de datos vectoriales son el componente clave para construir aplicaciones de IA que accedan a información propia. ChromaDB es perfecta para empezar: se instala con pip, se ejecuta en memoria o persistente en disco, y se integra con embeddings de OpenAI. pgvector es la opción para producción si ya usás PostgreSQL. El patrón RAG — buscar contexto relevante y pasárselo al LLM — es la arquitectura más importante en aplicaciones de IA empresarial. En la próxima lección vamos a construir un chatbot completo con memoria.
`;

export const leccion9 = `
# Lección 9: Proyecto — Chatbot con memoria

## Introducción

Es hora de combinar todo lo que aprendimos. Vamos a construir un chatbot de línea de comandos con las siguientes capacidades:

1. **Conversación multi-turno**: Recuerda todo lo que se habló en la sesión actual
2. **System prompt configurable**: Podés cambiar la personalidad del bot
3. **Streaming**: Las respuestas aparecen token por token
4. **Soporte multi-proveedor**: Funciona con OpenAI o Anthropic
5. **Historial de tokens**: Trackea el uso de tokens
6. **Manejo de errores robusto**: Reintentos automáticos

Este es un proyecto real que podés adaptar y extender.

## Arquitectura del proyecto

\`\`\`
chatbot_con_memoria/
├── .env                  # API keys
├── config.py             # Configuración y carga de env vars
├── providers.py          # Abstracción de proveedores (OpenAI, Anthropic)
├── chatbot.py            # Lógica principal del chatbot
└── main.py               # Punto de entrada
\`\`\`

## Paso 1: Configuración (config.py)

\`\`\`python
# config.py
import os
from dotenv import load_dotenv
from dataclasses import dataclass

load_dotenv()

@dataclass
class Config:
    """Configuración del chatbot."""
    openai_api_key: str = ""
    anthropic_api_key: str = ""
    default_provider: str = "openai"
    default_model_openai: str = "gpt-4o-mini"
    default_model_anthropic: str = "claude-sonnet-4-20250514"
    temperature: float = 0.7
    max_tokens: int = 1000
    max_historial: int = 50  # Máximo de mensajes en el historial
    system_prompt: str = (
        "Eres un asistente de IA amigable y útil. "
        "Respondés en español de Latinoamérica, de forma clara y concisa. "
        "Si no sabés algo, lo decís honestamente."
    )

def cargar_config() -> Config:
    """Carga la configuración desde variables de entorno."""
    config = Config(
        openai_api_key=os.getenv("OPENAI_API_KEY", ""),
        anthropic_api_key=os.getenv("ANTHROPIC_API_KEY", ""),
    )

    if not config.openai_api_key and not config.anthropic_api_key:
        raise ValueError(
            "Necesitás configurar al menos una API key en el archivo .env: "
            "OPENAI_API_KEY o ANTHROPIC_API_KEY"
        )

    # Si solo hay una key, usar ese proveedor por defecto
    if config.openai_api_key and not config.anthropic_api_key:
        config.default_provider = "openai"
    elif config.anthropic_api_key and not config.openai_api_key:
        config.default_provider = "anthropic"

    return config
\`\`\`

## Paso 2: Proveedores (providers.py)

\`\`\`python
# providers.py
from typing import Generator
from dataclasses import dataclass
from openai import OpenAI
import anthropic

@dataclass
class TokenUsage:
    """Trackeo de uso de tokens."""
    input_tokens: int = 0
    output_tokens: int = 0

    @property
    def total(self) -> int:
        return self.input_tokens + self.output_tokens


class OpenAIProvider:
    """Proveedor de OpenAI."""

    def __init__(self, api_key: str, model: str = "gpt-4o-mini"):
        self.client = OpenAI(api_key=api_key)
        self.model = model
        self.name = "OpenAI"

    def stream_response(
        self,
        messages: list[dict],
        temperature: float = 0.7,
        max_tokens: int = 1000
    ) -> Generator[str, None, TokenUsage]:
        """Genera respuesta con streaming. Yields tokens, returns usage."""
        stream = self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            temperature=temperature,
            max_tokens=max_tokens,
            stream=True,
            stream_options={"include_usage": True}
        )

        usage = TokenUsage()

        for chunk in stream:
            if chunk.choices and chunk.choices[0].delta.content:
                yield chunk.choices[0].delta.content

            # El último chunk tiene el usage
            if chunk.usage:
                usage.input_tokens = chunk.usage.prompt_tokens
                usage.output_tokens = chunk.usage.completion_tokens

        return usage

    def generate_response(
        self,
        messages: list[dict],
        temperature: float = 0.7,
        max_tokens: int = 1000
    ) -> tuple[str, TokenUsage]:
        """Genera respuesta sin streaming."""
        response = self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            temperature=temperature,
            max_tokens=max_tokens
        )

        usage = TokenUsage(
            input_tokens=response.usage.prompt_tokens,
            output_tokens=response.usage.completion_tokens
        )

        return response.choices[0].message.content, usage


class AnthropicProvider:
    """Proveedor de Anthropic."""

    def __init__(self, api_key: str, model: str = "claude-sonnet-4-20250514"):
        self.client = anthropic.Anthropic(api_key=api_key)
        self.model = model
        self.name = "Anthropic"

    def _extract_system_and_messages(self, messages: list[dict]) -> tuple[str, list[dict]]:
        """Separa el system prompt de los mensajes (requerido por Anthropic)."""
        system = "Eres un asistente útil."
        msgs = []

        for msg in messages:
            if msg["role"] == "system":
                system = msg["content"]
            else:
                msgs.append(msg)

        return system, msgs

    def stream_response(
        self,
        messages: list[dict],
        temperature: float = 0.7,
        max_tokens: int = 1000
    ) -> Generator[str, None, TokenUsage]:
        """Genera respuesta con streaming."""
        system, msgs = self._extract_system_and_messages(messages)

        usage = TokenUsage()

        with self.client.messages.stream(
            model=self.model,
            max_tokens=max_tokens,
            system=system,
            messages=msgs,
            temperature=temperature
        ) as stream:
            for text in stream.text_stream:
                yield text

            # Obtener usage del mensaje final
            final_message = stream.get_final_message()
            usage.input_tokens = final_message.usage.input_tokens
            usage.output_tokens = final_message.usage.output_tokens

        return usage

    def generate_response(
        self,
        messages: list[dict],
        temperature: float = 0.7,
        max_tokens: int = 1000
    ) -> tuple[str, TokenUsage]:
        """Genera respuesta sin streaming."""
        system, msgs = self._extract_system_and_messages(messages)

        response = self.client.messages.create(
            model=self.model,
            max_tokens=max_tokens,
            system=system,
            messages=msgs,
            temperature=temperature
        )

        usage = TokenUsage(
            input_tokens=response.usage.input_tokens,
            output_tokens=response.usage.output_tokens
        )

        return response.content[0].text, usage
\`\`\`

## Paso 3: Chatbot (chatbot.py)

\`\`\`python
# chatbot.py
import time
from dataclasses import dataclass, field
from providers import OpenAIProvider, AnthropicProvider, TokenUsage
from config import Config

@dataclass
class ChatSession:
    """Representa una sesión de chat con historial."""
    system_prompt: str
    messages: list[dict] = field(default_factory=list)
    total_tokens: TokenUsage = field(default_factory=TokenUsage)
    turn_count: int = 0

    def add_user_message(self, content: str):
        """Agrega un mensaje del usuario al historial."""
        self.messages.append({"role": "user", "content": content})

    def add_assistant_message(self, content: str):
        """Agrega un mensaje del asistente al historial."""
        self.messages.append({"role": "assistant", "content": content})
        self.turn_count += 1

    def get_messages_for_api(self) -> list[dict]:
        """Retorna los mensajes formateados para la API (con system prompt)."""
        return [
            {"role": "system", "content": self.system_prompt},
            *self.messages
        ]

    def trim_history(self, max_messages: int):
        """Recorta el historial si excede el máximo, manteniendo los más recientes."""
        if len(self.messages) > max_messages:
            # Siempre mantener al menos los últimos N mensajes
            self.messages = self.messages[-max_messages:]

    def update_tokens(self, usage: TokenUsage):
        """Actualiza el conteo acumulado de tokens."""
        self.total_tokens.input_tokens += usage.input_tokens
        self.total_tokens.output_tokens += usage.output_tokens


class Chatbot:
    """Chatbot con memoria, streaming y soporte multi-proveedor."""

    def __init__(self, config: Config):
        self.config = config
        self.session = ChatSession(system_prompt=config.system_prompt)
        self.provider = self._create_provider(config.default_provider)

    def _create_provider(self, provider_name: str):
        """Crea el proveedor de IA según el nombre."""
        if provider_name == "openai":
            if not self.config.openai_api_key:
                raise ValueError("OPENAI_API_KEY no configurada")
            return OpenAIProvider(
                api_key=self.config.openai_api_key,
                model=self.config.default_model_openai
            )
        elif provider_name == "anthropic":
            if not self.config.anthropic_api_key:
                raise ValueError("ANTHROPIC_API_KEY no configurada")
            return AnthropicProvider(
                api_key=self.config.anthropic_api_key,
                model=self.config.default_model_anthropic
            )
        else:
            raise ValueError(f"Proveedor desconocido: {provider_name}")

    def switch_provider(self, provider_name: str):
        """Cambia el proveedor de IA (mantiene el historial)."""
        self.provider = self._create_provider(provider_name)
        print(f"Cambiado a {self.provider.name} ({self.provider.model})")

    def chat(self, user_input: str) -> str:
        """Procesa un mensaje del usuario y retorna la respuesta con streaming."""
        # Agregar mensaje del usuario
        self.session.add_user_message(user_input)

        # Recortar historial si es muy largo
        self.session.trim_history(self.config.max_historial)

        # Preparar mensajes para la API
        messages = self.session.get_messages_for_api()

        # Generar respuesta con streaming
        respuesta_completa = ""

        try:
            start_time = time.time()

            gen = self.provider.stream_response(
                messages=messages,
                temperature=self.config.temperature,
                max_tokens=self.config.max_tokens
            )

            # Iterar sobre los tokens del stream
            first_token = True
            for token in gen:
                if first_token:
                    ttft = time.time() - start_time
                    first_token = False
                print(token, end="", flush=True)
                respuesta_completa += token

            elapsed = time.time() - start_time
            print()  # Nueva línea

        except StopIteration as e:
            # Capturar el usage que retorna el generador
            if e.value:
                self.session.update_tokens(e.value)
        except Exception as e:
            error_msg = f"\\nError al generar respuesta: {str(e)}"
            print(error_msg)
            respuesta_completa = f"[Error: {str(e)}]"

        # Agregar respuesta al historial
        self.session.add_assistant_message(respuesta_completa)

        return respuesta_completa

    def reset(self):
        """Reinicia la sesión (borra el historial)."""
        self.session = ChatSession(system_prompt=self.config.system_prompt)
        print("Historial borrado. Nueva conversación.")

    def show_stats(self):
        """Muestra estadísticas de la sesión."""
        s = self.session
        print(f"\\n--- Estadísticas ---")
        print(f"Proveedor: {self.provider.name} ({self.provider.model})")
        print(f"Turnos: {s.turn_count}")
        print(f"Mensajes en historial: {len(s.messages)}")
        print(f"Tokens acumulados: {s.total_tokens.total}")
        print(f"  - Entrada: {s.total_tokens.input_tokens}")
        print(f"  - Salida: {s.total_tokens.output_tokens}")
        print(f"-------------------\\n")
\`\`\`

## Paso 4: Punto de entrada (main.py)

\`\`\`python
# main.py
from config import cargar_config
from chatbot import Chatbot

def mostrar_ayuda():
    """Muestra los comandos disponibles."""
    print("""
Comandos disponibles:
  /salir      - Terminar la conversación
  /reset      - Borrar el historial y empezar de nuevo
  /stats      - Ver estadísticas de la sesión
  /openai     - Cambiar a OpenAI
  /anthropic  - Cambiar a Anthropic
  /system     - Cambiar el system prompt
  /ayuda      - Mostrar esta ayuda
""")

def main():
    # Cargar configuración
    try:
        config = cargar_config()
    except ValueError as e:
        print(f"Error de configuración: {e}")
        return

    # Crear el chatbot
    bot = Chatbot(config)

    # Banner de bienvenida
    print("=" * 60)
    print("  Chatbot con Memoria")
    print(f"  Proveedor: {bot.provider.name} ({bot.provider.model})")
    print("  Escribí /ayuda para ver los comandos disponibles")
    print("=" * 60)

    while True:
        try:
            # Leer input del usuario
            user_input = input("\\nVos: ").strip()

            # Ignorar líneas vacías
            if not user_input:
                continue

            # Procesar comandos
            if user_input.startswith("/"):
                comando = user_input.lower().split()[0]

                if comando in ["/salir", "/exit", "/quit"]:
                    bot.show_stats()
                    print("¡Hasta luego!")
                    break

                elif comando == "/reset":
                    bot.reset()
                    continue

                elif comando == "/stats":
                    bot.show_stats()
                    continue

                elif comando == "/openai":
                    try:
                        bot.switch_provider("openai")
                    except ValueError as e:
                        print(f"Error: {e}")
                    continue

                elif comando == "/anthropic":
                    try:
                        bot.switch_provider("anthropic")
                    except ValueError as e:
                        print(f"Error: {e}")
                    continue

                elif comando == "/system":
                    nuevo_system = user_input[len("/system "):].strip()
                    if nuevo_system:
                        bot.session.system_prompt = nuevo_system
                        print(f"System prompt actualizado a: {nuevo_system}")
                    else:
                        print(f"System prompt actual: {bot.session.system_prompt}")
                    continue

                elif comando == "/ayuda":
                    mostrar_ayuda()
                    continue

                else:
                    print(f"Comando desconocido: {comando}. Escribí /ayuda para ver los comandos.")
                    continue

            # Procesar mensaje normal
            print(f"\\n{bot.provider.name}: ", end="", flush=True)
            bot.chat(user_input)

        except KeyboardInterrupt:
            print("\\n\\nInterrumpido.")
            bot.show_stats()
            break
        except Exception as e:
            print(f"\\nError: {e}")
            continue

if __name__ == "__main__":
    main()
\`\`\`

## Cómo ejecutar el proyecto

\`\`\`bash
# 1. Asegurate de tener tu .env con las API keys
cat .env
# OPENAI_API_KEY=sk-proj-...
# ANTHROPIC_API_KEY=sk-ant-...

# 2. Activá tu entorno virtual
source venv/bin/activate

# 3. Ejecutá
python main.py
\`\`\`

## Ejemplo de sesión

\`\`\`
============================================================
  Chatbot con Memoria
  Proveedor: OpenAI (gpt-4o-mini)
  Escribí /ayuda para ver los comandos disponibles
============================================================

Vos: Hola, me llamo Carlos

OpenAI: ¡Hola Carlos! ¿En qué puedo ayudarte hoy?

Vos: ¿Te acordás cómo me llamo?

OpenAI: ¡Por supuesto! Te llamás Carlos. ¿Qué necesitás?

Vos: /anthropic
Cambiado a Anthropic (claude-sonnet-4-20250514)

Vos: ¿Seguís sabiendo mi nombre?

Anthropic: Sí, te llamás Carlos. Aunque acabo de cambiar de modelo,
el historial de nuestra conversación se mantiene.

Vos: /stats
--- Estadísticas ---
Proveedor: Anthropic (claude-sonnet-4-20250514)
Turnos: 3
Mensajes en historial: 6
Tokens acumulados: 847
-------------------

Vos: /salir
¡Hasta luego!
\`\`\`

## Ideas para extender el proyecto

- **Guardar conversaciones en archivo**: Serializar el historial a JSON y cargarlo al iniciar
- **Agregar RAG**: Conectar con ChromaDB para que el bot acceda a documentos
- **Interfaz web**: Usar FastAPI o Flask para crear una API REST
- **Múltiples sesiones**: Permitir al usuario cargar/guardar diferentes conversaciones
- **Resumen automático**: Cuando el historial es muy largo, resumirlo para reducir tokens

## Resumen

Construimos un chatbot completo con memoria, streaming, soporte multi-proveedor y una interfaz de línea de comandos con comandos útiles. La clave de la "memoria" es simplemente mantener una lista de mensajes y enviarla completa en cada llamada a la API. El historial crece con cada turno, por lo que es importante recortarlo cuando se vuelve muy largo. Este proyecto es una base sólida que podés extender para cualquier aplicación conversacional.
`;

export const leccion10 = `
# Lección 10: Quiz final

Evaluá tus conocimientos del curso con estas 10 preguntas de opción múltiple. Cada pregunta tiene una sola respuesta correcta.

---

### Pregunta 1

¿Cuál es la forma correcta de crear un f-string multilínea en Python para un prompt de IA?

a) \`prompt = f"Hola {nombre}. \\n Tema: {tema}"\`
b) \`prompt = f"""Hola {nombre}. Tema: {tema}"""\`
c) \`prompt = "Hola " + nombre + ". Tema: " + tema\`
d) \`prompt = format("Hola {}, Tema: {}", nombre, tema)\`

**Respuesta correcta: b)** — Las triple comillas (\`f"""..."""\`) permiten crear f-strings multilínea manteniendo el formato y la interpolación de variables, lo cual es ideal para prompts de IA complejos.

---

### Pregunta 2

¿Por qué es importante usar entornos virtuales (venv) en Python?

a) Porque Python no funciona sin un entorno virtual
b) Porque hace que el código se ejecute más rápido
c) Porque aísla las dependencias de cada proyecto evitando conflictos entre versiones
d) Porque es un requisito de seguridad de las APIs de IA

**Respuesta correcta: c)** — Los entornos virtuales crean instalaciones aisladas de Python. Sin ellos, diferentes proyectos podrían requerir versiones incompatibles de las mismas librerías, causando errores difíciles de diagnosticar.

---

### Pregunta 3

¿Cuál es la diferencia principal en cómo se pasa el system prompt entre la API de OpenAI y la de Anthropic?

a) OpenAI no soporta system prompts
b) En OpenAI va como un mensaje con role "system" en la lista; en Anthropic es un parámetro separado
c) En Anthropic va como un mensaje con role "system" en la lista; en OpenAI es un parámetro separado
d) Ambas APIs manejan el system prompt de la misma forma

**Respuesta correcta: b)** — En OpenAI, el system prompt se incluye como el primer mensaje con \`{"role": "system", "content": "..."}\`. En Anthropic, se pasa como el parámetro \`system="..."\` directamente en la llamada a \`messages.create()\`.

---

### Pregunta 4

¿Qué hace el parámetro \`temperature\` al generar texto con un modelo de IA?

a) Controla la velocidad de generación del texto
b) Controla la aleatoriedad/creatividad de la respuesta: valores bajos dan respuestas más predecibles, valores altos más creativas
c) Controla cuántas respuestas alternativas genera el modelo
d) Controla el idioma de la respuesta

**Respuesta correcta: b)** — La temperatura controla la distribución de probabilidad de los tokens. Con temperatura 0.0, el modelo siempre elige el token más probable (determinista). Con temperaturas altas (1.0+), explora opciones menos probables, generando respuestas más variadas y creativas.

---

### Pregunta 5

¿Cuál es la principal ventaja del streaming de respuestas?

a) Reduce el costo de la API
b) Mejora la calidad de las respuestas del modelo
c) Reduce la latencia percibida mostrando tokens a medida que se generan
d) Permite enviar prompts más largos

**Respuesta correcta: c)** — El streaming no cambia la calidad ni el costo. Su ventaja es que el primer token llega en ~200ms en vez de esperar segundos a que se genere toda la respuesta, lo cual mejora drásticamente la experiencia de usuario.

---

### Pregunta 6

¿Qué es un embedding en el contexto de IA?

a) Un tipo de base de datos para almacenar textos
b) Una representación numérica (vector) del significado semántico de un texto
c) Un algoritmo de compresión de texto
d) Un formato especial para enviar prompts a la API

**Respuesta correcta: b)** — Un embedding convierte texto en un vector de números (por ejemplo, 1536 dimensiones) que captura su significado semántico. Textos con significados similares producen vectores cercanos en el espacio vectorial.

---

### Pregunta 7

¿Qué métrica se usa para comparar qué tan similares son dos embeddings?

a) Distancia euclidiana
b) Correlación de Pearson
c) Similitud coseno
d) Desviación estándar

**Respuesta correcta: c)** — La similitud coseno mide el ángulo entre dos vectores, retornando un valor entre -1 y 1. Un valor de 1.0 indica vectores idénticos en dirección (textos semánticamente iguales), mientras que 0.0 indica que no tienen relación.

---

### Pregunta 8

¿Por qué no se debe poner una API key directamente en el código fuente?

a) Porque hace que el código sea más lento
b) Porque si el código se sube a un repositorio público, cualquiera podría usar tu API key y generar costos
c) Porque las APIs no aceptan keys hardcodeadas
d) Porque Python no permite strings largos en el código

**Respuesta correcta: b)** — Las API keys son credenciales secretas. Si se incluyen en el código y este se sube a GitHub u otro repositorio, bots automáticos pueden detectarlas en minutos y usarlas, generando costos enormes en tu cuenta. Por eso se usan archivos \`.env\` (excluidos de Git con \`.gitignore\`).

---

### Pregunta 9

¿Cuál es la principal ventaja de una base de datos vectorial (como Chroma) sobre buscar en una lista normal de embeddings?

a) Las bases de datos vectoriales generan embeddings de mayor calidad
b) Las bases de datos vectoriales son gratuitas mientras que las listas cuestan dinero
c) Las bases de datos vectoriales usan índices especiales para buscar vecinos cercanos de forma eficiente, sin comparar contra cada vector
d) Las bases de datos vectoriales pueden almacenar más tipos de datos

**Respuesta correcta: c)** — Buscar en una lista requiere calcular la distancia contra cada elemento (O(n)). Las bases vectoriales usan estructuras como HNSW para hacer búsquedas aproximadas en O(log n), lo cual es crucial cuando tenés miles o millones de documentos.

---

### Pregunta 10

En un chatbot con memoria, ¿cómo se implementa la "memoria" de la conversación?

a) El modelo de IA guarda internamente el historial de cada usuario
b) Se envía la lista completa de mensajes previos (user + assistant) en cada llamada a la API
c) Se usa una base de datos vectorial para guardar cada mensaje
d) Se usa un prompt especial que dice "recordá lo anterior"

**Respuesta correcta: b)** — Los modelos de IA no tienen memoria entre llamadas. La "memoria" se implementa manteniendo una lista de todos los mensajes previos (tanto del usuario como del asistente) y enviándolos completos en cada nueva llamada a la API. Por eso es importante gestionar el tamaño del historial para no exceder el límite de tokens del modelo.
`;
