// English content for Course 13: Programming with AI: From Zero to Your First App
// Level 5 Pro — 10 lessons for aspiring AI engineers

export const leccion1 = `
# Lesson 1: Basic Python for AI

## Introduction

Python is the dominant language in artificial intelligence and machine learning. This is no coincidence: its clean syntax, its library ecosystem, and its massive community make it ideal for working with AI APIs. In this lesson you'll learn the minimum Python you need to start building applications with artificial intelligence.

We don't assume you've never programmed before — we do assume you know what a variable is, what a function is, and what a loop is, even if only conceptually. What we're going to do is give you the concrete tools in Python.

## Variables and data types

In Python, you don't need to declare a variable's type. Python infers it automatically:

\`\`\`python
# Strings
nombre = "Claude"
modelo = 'gpt-4'

# Integer and decimal numbers
temperatura = 0.7
max_tokens = 1500
intentos = 3

# Booleans
usar_streaming = True
debug_mode = False

# None (equivalent to null)
respuesta = None
\`\`\`

You can check the type of any variable with \`type()\`:

\`\`\`python
print(type(nombre))       # <class 'str'>
print(type(temperatura))  # <class 'float'>
print(type(max_tokens))   # <class 'int'>
print(type(usar_streaming))  # <class 'bool'>
\`\`\`

### F-strings: your best friend

To build dynamic strings (something you'll do constantly with AI prompts), use f-strings:

\`\`\`python
usuario = "Maria"
tema = "machine learning"
prompt = f"Hi {usuario}, explain to me what {tema} is in simple terms."
print(prompt)
# Output: Hi Maria, explain to me what machine learning is in simple terms.
\`\`\`

For multiline prompts, use triple quotes:

\`\`\`python
system_prompt = f"""You are an expert assistant in {tema}.
Always respond in English.
Level of detail: intermediate.
Current user: {usuario}"""
\`\`\`

## Lists

Lists are ordered collections. You'll use them constantly to manage conversation history with AI models:

\`\`\`python
# Simple list
modelos = ["gpt-4", "claude-3", "gemini-pro"]

# Access by index (starts at 0)
print(modelos[0])   # gpt-4
print(modelos[-1])  # gemini-pro (last element)

# Add elements
modelos.append("llama-3")

# Length
print(len(modelos))  # 4

# Iterate
for modelo in modelos:
    print(f"Available model: {modelo}")

# List comprehension (very Pythonic)
modelos_grandes = [m for m in modelos if "gpt" in m or "claude" in m]
\`\`\`

### Lists of dictionaries: the AI message format

This pattern is FUNDAMENTAL because all AI APIs use lists of dictionaries for messages:

\`\`\`python
mensajes = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is Python?"},
    {"role": "assistant", "content": "Python is a programming language..."},
    {"role": "user", "content": "And what is it used for in AI?"}
]
\`\`\`

## Dictionaries

Dictionaries are key-value pairs. They are the Python equivalent of JSON and you'll use them for configurations, API responses, etc.:

\`\`\`python
config = {
    "model": "gpt-4",
    "temperature": 0.7,
    "max_tokens": 1000,
    "stream": True
}

# Access values
print(config["model"])        # gpt-4
print(config.get("model"))    # gpt-4 (safer, doesn't throw error if key doesn't exist)
print(config.get("top_p", 1.0))  # 1.0 (default value)

# Modify
config["temperature"] = 0.9

# Add new key
config["top_p"] = 0.95

# Iterate
for clave, valor in config.items():
    print(f"{clave}: {valor}")
\`\`\`

## Functions

Functions encapsulate reusable logic. When working with AI APIs, you'll create functions to make calls, process responses, etc.:

\`\`\`python
def crear_prompt(usuario: str, tema: str) -> str:
    """Creates a personalized prompt for the user."""
    return f"Hi {usuario}, explain {tema} to me clearly and concisely."

# Use the function
mi_prompt = crear_prompt("Carlos", "neural networks")
print(mi_prompt)
\`\`\`

### Functions with default values

\`\`\`python
def configurar_modelo(
    modelo: str = "gpt-4",
    temperatura: float = 0.7,
    max_tokens: int = 1000
) -> dict:
    """Returns a configuration dictionary for the API."""
    return {
        "model": modelo,
        "temperature": temperatura,
        "max_tokens": max_tokens
    }

# Use with defaults
config_default = configurar_modelo()

# Use with specific parameters
config_creativa = configurar_modelo(temperatura=0.95, max_tokens=2000)
\`\`\`

### Async functions (you'll need these for streaming)

\`\`\`python
import asyncio

async def obtener_respuesta(prompt: str) -> str:
    """Simulates an async call to an AI API."""
    # In practice, this is where the real API call would go
    await asyncio.sleep(1)  # Simulates network latency
    return f"Response to: {prompt}"

# Run
async def main():
    respuesta = await obtener_respuesta("What is AI?")
    print(respuesta)

asyncio.run(main())
\`\`\`

## Conditionals and loops

\`\`\`python
# Conditionals
modelo = "gpt-4"

if modelo.startswith("gpt"):
    print("Using OpenAI")
elif modelo.startswith("claude"):
    print("Using Anthropic")
else:
    print("Unrecognized model")

# For loop
for i in range(5):
    print(f"Attempt {i + 1}")

# While loop (useful for retries)
intentos = 0
max_intentos = 3
exito = False

while intentos < max_intentos and not exito:
    intentos += 1
    print(f"Attempt {intentos}...")
    # Simulate: in practice API calls would go here
    if intentos == 2:
        exito = True
        print("Success!")
\`\`\`

## Error handling with try/except

This is CRITICAL when working with external APIs, because calls can fail:

\`\`\`python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: division by zero")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("This always runs")

# Real pattern with AI APIs
def llamar_api_seguro(prompt: str) -> str:
    try:
        # The real call would go here
        respuesta = "Simulated response"
        return respuesta
    except ConnectionError:
        return "Error: could not connect to the API"
    except TimeoutError:
        return "Error: the API took too long to respond"
    except Exception as e:
        return f"Unexpected error: {str(e)}"
\`\`\`

## Imports and modules

\`\`\`python
# Import a complete module
import os
import json

# Import something specific
from datetime import datetime
from pathlib import Path

# Import with alias
import numpy as np

# Access environment variables (for API keys)
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("Missing OPENAI_API_KEY variable")
\`\`\`

## Summary

With these Python basics you already have what you need to start working with artificial intelligence APIs. The key concepts you'll use constantly are: f-strings for building prompts, lists of dictionaries for messages, async functions for streaming, and try/except for handling network errors. In the next lesson we'll set up your complete development environment.
`;

export const leccion2 = `
# Lesson 2: Setting Up Your Development Environment

## Introduction

Before writing a single line of code with AI APIs, you need a properly configured development environment. A poorly configured environment is the number one cause of frustration for beginners. In this lesson we'll install and configure everything step by step: VS Code, Python, pip, virtual environments, and environment variable management.

## Step 1: Install Python 3.11+

### On macOS

The cleanest way is using Homebrew:

\`\`\`bash
# Install Homebrew (if you don't have it)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python
brew install python@3.12

# Verify installation
python3 --version
# Python 3.12.x
\`\`\`

### On Windows

1. Go to [python.org/downloads](https://python.org/downloads)
2. Download Python 3.12.x
3. **IMPORTANT**: Check the box "Add Python to PATH" during installation
4. Verify in PowerShell:

\`\`\`powershell
python --version
# Python 3.12.x
\`\`\`

### On Linux (Ubuntu/Debian)

\`\`\`bash
sudo apt update
sudo apt install python3.12 python3.12-venv python3-pip
python3 --version
\`\`\`

## Step 2: Install VS Code

1. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com)
2. Install it following your operating system's instructions

### Essential extensions

Open VS Code and go to the Extensions tab (Ctrl+Shift+X or Cmd+Shift+X on Mac). Install these extensions:

- **Python** (Microsoft) — Full Python support: intellisense, debugging, linting
- **Pylance** (Microsoft) — Advanced type analysis for Python
- **Python Debugger** (Microsoft) — Debugging tools
- **Even Better TOML** — For configuration files
- **dotENV** — Syntax highlighting for .env files

### Configure VS Code for Python

Open VS Code settings (Ctrl+, or Cmd+,) and add these settings to \`settings.json\`:

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

## Step 3: Create your project

\`\`\`bash
# Create the project folder
mkdir mi-proyecto-ia
cd mi-proyecto-ia

# Open in VS Code
code .
\`\`\`

## Step 4: Virtual environments (venv)

A virtual environment is an isolated Python installation for your project. Why does it matter? Because each project may need different versions of the same libraries. Without virtual environments, projects step on each other.

\`\`\`bash
# Create a virtual environment called "venv"
python3 -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate

# On Windows (PowerShell):
.\\venv\\Scripts\\Activate.ps1

# On Windows (cmd):
venv\\Scripts\\activate.bat
\`\`\`

When the virtual environment is active, you'll see \`(venv)\` at the beginning of your terminal:

\`\`\`
(venv) user@computer:~/mi-proyecto-ia$
\`\`\`

### Verify it works

\`\`\`bash
# See which Python is being used (should point to your venv)
which python    # macOS/Linux
where python    # Windows

# See installed packages (should be nearly empty)
pip list
\`\`\`

### Deactivate the environment

\`\`\`bash
deactivate
\`\`\`

**GOLDEN RULE**: Always activate your virtual environment before working on your project. Always.

## Step 5: Install packages with pip

With the virtual environment active, install the packages we'll use in the course:

\`\`\`bash
# Essential packages for the course
pip install openai          # OpenAI API (GPT-4, embeddings)
pip install anthropic       # Anthropic API (Claude)
pip install google-generativeai  # Google API (Gemini)
pip install python-dotenv   # Load environment variables from .env
pip install chromadb        # Local vector database
pip install numpy           # Math operations (for embeddings)
pip install httpx           # Modern HTTP client

# Verify they were installed
pip list
\`\`\`

### Save dependencies in requirements.txt

\`\`\`bash
# Generate the dependencies file
pip freeze > requirements.txt

# In the future, anyone can recreate your environment with:
pip install -r requirements.txt
\`\`\`

Your \`requirements.txt\` will look something like this:

\`\`\`
openai==1.52.0
anthropic==0.39.0
google-generativeai==0.8.3
python-dotenv==1.0.1
chromadb==0.5.17
numpy==2.1.3
httpx==0.27.2
\`\`\`

## Step 6: Environment variables and .env files

**NEVER** put API keys directly in your code. Always use them as environment variables. The most practical way is with \`.env\` files.

### Create the .env file

Create a file called \`.env\` in the root of your project:

\`\`\`bash
# .env
OPENAI_API_KEY=sk-proj-your-openai-key-here
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key-here
GOOGLE_API_KEY=your-google-key-here
\`\`\`

### Create .gitignore

**CRITICAL**: Create a \`.gitignore\` file so your API key never gets uploaded to Git:

\`\`\`bash
# .gitignore
.env
venv/
__pycache__/
*.pyc
.DS_Store
\`\`\`

### Use python-dotenv to load variables

\`\`\`python
# config.py
import os
from dotenv import load_dotenv

# Load variables from the .env file
load_dotenv()

# Access API keys
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Validate they exist
if not OPENAI_API_KEY:
    raise ValueError("Missing OPENAI_API_KEY in .env file")

print("Environment variables loaded successfully")
\`\`\`

### Test that everything works

\`\`\`python
# test_setup.py
import os
from dotenv import load_dotenv

load_dotenv()

print("=== Environment Verification ===")
print(f"Python: working")

# Verify packages
try:
    import openai
    print(f"OpenAI SDK: v{openai.__version__}")
except ImportError:
    print("OpenAI SDK: NOT INSTALLED")

try:
    import anthropic
    print(f"Anthropic SDK: v{anthropic.__version__}")
except ImportError:
    print("Anthropic SDK: NOT INSTALLED")

try:
    import google.generativeai as genai
    print("Google Generative AI: installed")
except ImportError:
    print("Google Generative AI: NOT INSTALLED")

# Verify API keys (only shows first characters)
for key_name in ["OPENAI_API_KEY", "ANTHROPIC_API_KEY", "GOOGLE_API_KEY"]:
    key = os.getenv(key_name)
    if key:
        print(f"{key_name}: {key[:8]}...{key[-4:]}")
    else:
        print(f"{key_name}: NOT CONFIGURED")

print("=== Verification complete ===")
\`\`\`

Run it with:

\`\`\`bash
python test_setup.py
\`\`\`

## Final project structure

Your project should look like this at the end of this lesson:

\`\`\`
mi-proyecto-ia/
├── venv/                 # Virtual environment (DO NOT upload to Git)
├── .env                  # API keys (DO NOT upload to Git)
├── .gitignore            # Files to ignore in Git
├── requirements.txt      # Project dependencies
├── config.py             # Environment variable loading
└── test_setup.py         # Verification script
\`\`\`

## Common problems

| Problem | Solution |
|---------|----------|
| \`python: command not found\` | Use \`python3\` instead of \`python\` |
| \`pip: command not found\` | Use \`pip3\` or \`python3 -m pip\` |
| Package not found after installing | Did you activate the venv? |
| \`.env\` doesn't load | Verify that \`load_dotenv()\` runs before \`os.getenv()\` |
| Permission errors when installing | Never use \`sudo pip\`. Use venv |

## Summary

Your development environment is ready. You have Python 3.12, VS Code configured, an isolated virtual environment, the SDKs for the three main AI APIs installed, and your API keys stored safely in a \`.env\` file. In the next lesson we'll write your first script that connects to the OpenAI API.
`;

export const leccion3 = `
# Lesson 3: Your First Script with the OpenAI API

## Introduction

The time has come to write code that actually talks to an artificial intelligence model. In this lesson you'll connect to the OpenAI API, send a prompt to GPT-4, and receive a response. By the end you'll have a complete, functional script that you can adapt for any use case.

## Step 1: Get your OpenAI API key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account or log in
3. Navigate to **API Keys** (Settings > API Keys)
4. Click on **"Create new secret key"**
5. Give it a descriptive name (for example: "ai-course-local")
6. **Copy the key immediately** — it won't be shown again
7. Paste it in your \`.env\` file:

\`\`\`bash
OPENAI_API_KEY=sk-proj-abc123...your-key-here
\`\`\`

### About billing

OpenAI charges by usage (tokens). For this course, total spending should be less than $2 USD. You can set a monthly spending limit in the Billing section. GPT-4o-mini is significantly cheaper than GPT-4o for practice.

## Step 2: Understand the API structure

The OpenAI chat API works with the concept of **messages**. Each conversation is a list of messages with roles:

- **system**: Instructions for the model (personality, rules, format)
- **user**: What the user says
- **assistant**: What the model responds

\`\`\`python
mensajes = [
    {"role": "system", "content": "You are a Python expert."},
    {"role": "user", "content": "What is a list comprehension?"}
]
\`\`\`

## Step 3: Your first basic script

\`\`\`python
# 01_openai_basico.py
import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()

# Create the OpenAI client
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

# Define the messages
mensajes = [
    {
        "role": "system",
        "content": "You are a technology expert assistant. You respond clearly and concisely."
    },
    {
        "role": "user",
        "content": "What is an API and what is it used for? Explain it to me in 3 sentences."
    }
]

# Make the API call
respuesta = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=mensajes,
    temperature=0.7,
    max_tokens=500
)

# Extract and display the response
texto_respuesta = respuesta.choices[0].message.content
print(texto_respuesta)
\`\`\`

Run it:

\`\`\`bash
python 01_openai_basico.py
\`\`\`

## Step 4: Understand the complete response

The API response is not just text. It comes with very useful metadata:

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
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Tell me a fun fact about Python."}
    ],
    temperature=0.7,
    max_tokens=300
)

# Explore the complete response
print("=== Complete response ===")
print(f"ID: {respuesta.id}")
print(f"Model used: {respuesta.model}")
print(f"Input tokens: {respuesta.usage.prompt_tokens}")
print(f"Output tokens: {respuesta.usage.completion_tokens}")
print(f"Total tokens: {respuesta.usage.total_tokens}")
print(f"Stop reason: {respuesta.choices[0].finish_reason}")
print(f"\\nResponse:\\n{respuesta.choices[0].message.content}")
\`\`\`

### About tokens

Tokens are the units that models use to process text. A general rule: **1 token is roughly 4 characters in English** and slightly less in Spanish. The API charges per token, so it's important to understand how many you use.

## Step 5: Key API parameters

\`\`\`python
# 03_openai_parametros.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_respuesta(
    prompt: str,
    system_prompt: str = "You are a helpful assistant.",
    modelo: str = "gpt-4o-mini",
    temperatura: float = 0.7,
    max_tokens: int = 500,
    top_p: float = 1.0
) -> str:
    """
    Generates a response using the OpenAI API.

    Parameters:
    - prompt: What the user asks
    - system_prompt: Instructions for the model
    - modelo: gpt-4o, gpt-4o-mini, gpt-4-turbo, etc.
    - temperatura: 0.0 = deterministic, 1.0 = creative, 2.0 = maximum chaos
    - max_tokens: Token limit in the response
    - top_p: Nucleus sampling (alternative to temperature)
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

# Example 1: Precise response (low temperature)
print("=== Temperature 0.0 (precise) ===")
print(generar_respuesta(
    "What is the capital of Argentina?",
    temperatura=0.0
))

# Example 2: Creative response (high temperature)
print("\\n=== Temperature 1.2 (creative) ===")
print(generar_respuesta(
    "Invent a name for an AI startup",
    temperatura=1.2
))

# Example 3: With custom system prompt
print("\\n=== With custom system prompt ===")
print(generar_respuesta(
    "What should I have for dinner?",
    system_prompt="You are an Argentine chef. Respond with humor and suggest typical dishes.",
    temperatura=0.8
))
\`\`\`

## Step 6: Robust error handling

External APIs can fail. Your code has to be prepared:

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
    """Calls the API with automatic retries using exponential backoff."""

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
            print(f"Rate limit reached. Waiting {espera}s... (attempt {intento + 1})")
            time.sleep(espera)

        except APIConnectionError:
            print(f"Connection error. Retrying... (attempt {intento + 1})")
            time.sleep(espera_base)

        except APIError as e:
            print(f"API error: {e}")
            if e.status_code and e.status_code >= 500:
                time.sleep(espera_base)
                continue
            raise

        except Exception as e:
            print(f"Unexpected error: {e}")
            raise

    raise Exception(f"Failed after {max_reintentos} attempts")

# Use the function
mensajes = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is exponential backoff?"}
]

resultado = llamar_api_con_reintentos(mensajes)
print(resultado)
\`\`\`

## Step 7: Multi-turn conversation

To maintain a conversation, you simply keep adding messages to the list:

\`\`\`python
# 05_openai_conversacion.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def chatear():
    """Interactive chat with GPT-4."""
    mensajes = [
        {"role": "system", "content": "You are a friendly programming tutor. Respond concisely."}
    ]

    print("Chat with GPT-4 (type 'exit' to quit)")
    print("-" * 50)

    while True:
        # Read user input
        user_input = input("\\nYou: ")

        if user_input.lower() in ["exit", "quit"]:
            print("Goodbye!")
            break

        # Add user message
        mensajes.append({"role": "user", "content": user_input})

        # Call the API
        respuesta = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=mensajes,
            temperature=0.7,
            max_tokens=500
        )

        texto = respuesta.choices[0].message.content

        # Add assistant response to history
        mensajes.append({"role": "assistant", "content": texto})

        print(f"\\nGPT: {texto}")

if __name__ == "__main__":
    chatear()
\`\`\`

## Available models and when to use each

| Model | Speed | Cost | Recommended use |
|-------|-------|------|-----------------|
| gpt-4o | Fast | Medium | Production, complex tasks |
| gpt-4o-mini | Very fast | Low | Development, simple tasks |
| gpt-4-turbo | Medium | High | Long context, deep analysis |
| o1 / o3 | Slow | High | Complex reasoning, mathematics |

## Summary

You now know how to connect to the OpenAI API, send messages, configure parameters, handle errors with retries, and maintain multi-turn conversations. The message list with roles pattern is universal — you'll see it in all AI APIs. In the next lesson, we'll do the same but with the Anthropic (Claude) API.
`;

export const leccion4 = `
# Lesson 4: Your First Script with the Anthropic (Claude) API

## Introduction

Anthropic is the company behind Claude, one of the most capable language models in the world. Its API has a slightly different design from OpenAI's, but the concepts are the same. In this lesson you'll learn to use the Anthropic API, write functional scripts, and understand the key differences with OpenAI.

## Step 1: Get your Anthropic API key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account or log in
3. Navigate to **API Keys**
4. Click on **"Create Key"**
5. Copy the key and save it in your \`.env\` file:

\`\`\`bash
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
\`\`\`

### About billing

Anthropic also charges by tokens. Claude 3.5 Haiku is the most economical model for practice. Load at least $5 USD in credits to get started.

## Step 2: Key differences between the Anthropic and OpenAI APIs

Before writing code, let's understand the differences:

| Aspect | OpenAI | Anthropic |
|--------|--------|-----------|
| System prompt | Goes inside the message list | Is a separate parameter |
| Limit parameter | \`max_tokens\` (optional) | \`max_tokens\` (required) |
| SDK name | \`openai\` | \`anthropic\` |
| Main models | gpt-4o, gpt-4o-mini | claude-sonnet-4-20250514, claude-3-5-haiku |
| Streaming | Similar | Similar |

The most important difference is that in Anthropic the **system prompt is a separate parameter**, not a message inside the list.

## Step 3: Your first script with Claude

\`\`\`python
# 01_anthropic_basico.py
import os
from dotenv import load_dotenv
import anthropic

# Load environment variables
load_dotenv()

# Create the Anthropic client
client = anthropic.Anthropic(
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

# Make the API call
respuesta = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=500,
    system="You are a technology expert assistant. You respond clearly and concisely.",
    messages=[
        {
            "role": "user",
            "content": "What is an API and what is it used for? Explain it to me in 3 sentences."
        }
    ],
    temperature=0.7
)

# Extract and display the response
texto = respuesta.content[0].text
print(texto)
\`\`\`

Run it:

\`\`\`bash
python 01_anthropic_basico.py
\`\`\`

## Step 4: Explore the complete response

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
    system="You are a helpful assistant.",
    messages=[
        {"role": "user", "content": "Tell me a fun fact about artificial intelligence."}
    ]
)

# Explore the response structure
print("=== Complete response ===")
print(f"ID: {respuesta.id}")
print(f"Model: {respuesta.model}")
print(f"Type: {respuesta.type}")
print(f"Role: {respuesta.role}")
print(f"Stop reason: {respuesta.stop_reason}")
print(f"Input tokens: {respuesta.usage.input_tokens}")
print(f"Output tokens: {respuesta.usage.output_tokens}")
print(f"\\nContent (type): {respuesta.content[0].type}")
print(f"\\nResponse:\\n{respuesta.content[0].text}")
\`\`\`

### Note about content blocks

Anthropic's response uses **content blocks**. Each block has a type (\`text\`, \`tool_use\`, etc.). For simple text responses, you'll always access \`respuesta.content[0].text\`.

## Step 5: Reusable function with error handling

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
    system_prompt: str = "You are a helpful assistant.",
    modelo: str = "claude-sonnet-4-20250514",
    temperatura: float = 0.7,
    max_tokens: int = 1000,
    max_reintentos: int = 3
) -> str:
    """
    Sends a prompt to Claude and returns the response as a string.
    Includes automatic retries for transient errors.
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
            print(f"Rate limit. Waiting {espera}s... (attempt {intento + 1})")
            time.sleep(espera)

        except anthropic.APIConnectionError:
            print(f"Connection error. Retrying... (attempt {intento + 1})")
            time.sleep(1)

        except anthropic.APIStatusError as e:
            print(f"API error: {e.status_code} - {e.message}")
            if e.status_code >= 500:
                time.sleep(1)
                continue
            raise

    raise Exception(f"Failed after {max_reintentos} attempts")

# Usage examples
print("=== Simple question ===")
print(preguntar_a_claude("What is machine learning in one sentence?"))

print("\\n=== With custom system prompt ===")
print(preguntar_a_claude(
    "What should I learn first?",
    system_prompt="You are a tech career mentor. Respond directly and practically.",
    temperatura=0.5
))

print("\\n=== Using Haiku (faster and cheaper) ===")
print(preguntar_a_claude(
    "Summarize what Python is in 2 sentences.",
    modelo="claude-3-5-haiku-20241022",
    max_tokens=200
))
\`\`\`

## Step 6: Multi-turn conversation with Claude

\`\`\`python
# 04_anthropic_conversacion.py
import os
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def chatear_con_claude():
    """Interactive chat with Claude."""
    system_prompt = "You are a friendly programming and AI tutor. Respond concisely and practically."
    mensajes = []

    print("Chat with Claude (type 'exit' to quit)")
    print("-" * 50)

    while True:
        user_input = input("\\nYou: ")

        if user_input.lower() in ["exit", "quit"]:
            print("Goodbye!")
            break

        # Add user message
        mensajes.append({"role": "user", "content": user_input})

        # Call the API
        respuesta = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=500,
            system=system_prompt,
            messages=mensajes,
            temperature=0.7
        )

        texto = respuesta.content[0].text

        # Add response to history
        mensajes.append({"role": "assistant", "content": texto})

        print(f"\\nClaude: {texto}")
        print(f"  [tokens: input={respuesta.usage.input_tokens}, output={respuesta.usage.output_tokens}]")

if __name__ == "__main__":
    chatear_con_claude()
\`\`\`

## Step 7: Direct comparison — the same prompt in OpenAI and Anthropic

\`\`\`python
# 05_comparar_apis.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import anthropic

load_dotenv()

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

prompt = "Explain what a transformer is in deep learning. Maximum 3 sentences."
system = "You are an AI expert. Respond in a technical but accessible way."

# Call to OpenAI
resp_openai = openai_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": system},
        {"role": "user", "content": prompt}
    ],
    temperature=0.5,
    max_tokens=300
)

# Call to Anthropic
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

## Anthropic models

| Model | Speed | Capability | Recommended use |
|-------|-------|------------|-----------------|
| claude-sonnet-4-20250514 | Fast | High | General use, best balance |
| claude-3-5-haiku | Very fast | Medium | Simple tasks, high volume |
| claude-3-opus | Slow | Very high | Deep analysis, complex tasks |

## Summary

You now know how to use both the OpenAI and Anthropic APIs. The main differences are: the system prompt is passed as a separate parameter in Anthropic, \`max_tokens\` is required, and the response uses content blocks. The general pattern is the same: you build a list of messages, call the API, and extract the text from the response. In the next lesson we'll complete the trilogy with Google's Gemini API.
`;

export const leccion5 = `
# Lesson 5: Your First Script with the Gemini API

## Introduction

Google also has first-rate language models. Gemini (formerly Bard) is Google DeepMind's family of models, and its API is accessible through Google AI Studio. In this lesson you'll learn to connect to Gemini, generate responses, and understand how it compares to OpenAI and Anthropic.

## Step 1: Get your Google API key

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Log in with your Google account
3. Click on **"Get API key"** in the left panel
4. Select **"Create API key in new project"** or choose an existing project
5. Copy the key and save it in your \`.env\` file:

\`\`\`bash
GOOGLE_API_KEY=AIzaSy...your-key-here
\`\`\`

### Cost

The Gemini API has a generous free tier: Gemini 1.5 Flash allows up to 15 requests per minute for free. For practice, you don't need to spend anything.

## Step 2: Differences with OpenAI and Anthropic

| Aspect | OpenAI | Anthropic | Google Gemini |
|--------|--------|-----------|---------------|
| Python SDK | \`openai\` | \`anthropic\` | \`google-generativeai\` |
| System prompt | In messages | Separate parameter | In model configuration |
| Message format | role/content dicts | role/content dicts | Own objects or strings |
| Main method | \`chat.completions.create()\` | \`messages.create()\` | \`generate_content()\` |

Gemini has the most "different" API of the three. It uses an SDK with a more abstract interface.

## Step 3: Your first script with Gemini

\`\`\`python
# 01_gemini_basico.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Configure the API key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Create the model
modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="You are a technology expert assistant. You respond clearly and concisely."
)

# Generate a response
respuesta = modelo.generate_content(
    "What is an API and what is it used for? Explain it to me in 3 sentences."
)

# Display the response
print(respuesta.text)
\`\`\`

Run it:

\`\`\`bash
python 01_gemini_basico.py
\`\`\`

## Step 4: Explore the complete response

\`\`\`python
# 02_gemini_respuesta.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

modelo = genai.GenerativeModel("gemini-1.5-flash")

respuesta = modelo.generate_content(
    "Tell me a fun fact about artificial intelligence."
)

print("=== Complete response ===")
print(f"Text: {respuesta.text}")
print(f"\\nUsage metadata:")
print(f"  Input tokens: {respuesta.usage_metadata.prompt_token_count}")
print(f"  Output tokens: {respuesta.usage_metadata.candidates_token_count}")
print(f"  Total tokens: {respuesta.usage_metadata.total_token_count}")

# Candidate information
candidato = respuesta.candidates[0]
print(f"\\nStop reason: {candidato.finish_reason}")
print(f"Index: {candidato.index}")
\`\`\`

## Step 5: Advanced configuration

\`\`\`python
# 03_gemini_configuracion.py
import os
from dotenv import load_dotenv
import google.generativeai as genai
from google.generativeai.types import GenerationConfig

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Configure generation parameters
config = GenerationConfig(
    temperature=0.7,
    top_p=0.95,
    top_k=40,
    max_output_tokens=500,
)

modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=config,
    system_instruction="You are a Python programming expert."
)

# Use with the configuration
respuesta = modelo.generate_content("What are the 3 most important data structures in Python?")
print(respuesta.text)

# You can also override the configuration per call
config_creativa = GenerationConfig(
    temperature=1.0,
    max_output_tokens=200
)

respuesta_creativa = modelo.generate_content(
    "Invent a name for a programming language of the future.",
    generation_config=config_creativa
)
print(f"\\nCreative response: {respuesta_creativa.text}")
\`\`\`

## Step 6: Multi-turn conversation with Gemini

Gemini has a built-in **chat** concept in the SDK, which simplifies conversations:

\`\`\`python
# 04_gemini_conversacion.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="You are a friendly programming and AI tutor. Respond concisely."
)

# Start a chat
chat = modelo.start_chat(history=[])

def chatear_con_gemini():
    print("Chat with Gemini (type 'exit' to quit)")
    print("-" * 50)

    while True:
        user_input = input("\\nYou: ")

        if user_input.lower() in ["exit", "quit"]:
            print("Goodbye!")
            break

        # Send message (history is managed automatically)
        respuesta = chat.send_message(user_input)

        print(f"\\nGemini: {respuesta.text}")

        # You can see the accumulated history
        print(f"  [messages in history: {len(chat.history)}]")

if __name__ == "__main__":
    chatear_con_gemini()
\`\`\`

Note that \`chat.send_message()\` manages history automatically. You don't need to maintain a list of messages manually like in OpenAI and Anthropic.

## Step 7: Reusable function with error handling

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
    system_prompt: str = "You are a helpful assistant.",
    modelo: str = "gemini-1.5-flash",
    temperatura: float = 0.7,
    max_tokens: int = 1000,
    max_reintentos: int = 3
) -> str:
    """Generates a response with Gemini, with automatic retries."""

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
            print(f"Rate limit. Waiting {espera}s... (attempt {intento + 1})")
            time.sleep(espera)

        except google_exceptions.ServiceUnavailable:
            print(f"Service unavailable. Retrying... (attempt {intento + 1})")
            time.sleep(1)

        except Exception as e:
            print(f"Error: {e}")
            raise

    raise Exception(f"Failed after {max_reintentos} attempts")

# Examples
print("=== Flash (fast and free) ===")
print(preguntar_a_gemini("What is a transformer?"))

print("\\n=== With custom system prompt ===")
print(preguntar_a_gemini(
    "What language should I learn first for AI?",
    system_prompt="You are a tech career mentor. Be direct.",
    temperatura=0.3
))
\`\`\`

## Step 8: Triple comparison — the same prompt in all three APIs

\`\`\`python
# 06_comparar_tres_apis.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import anthropic
import google.generativeai as genai

load_dotenv()

# Configure all three clients
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

prompt = "What is an embedding in AI? Maximum 3 sentences."
system = "You are an AI expert. Respond in a technical but accessible way."

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

## Available Gemini models

| Model | Speed | Cost | Recommended use |
|-------|-------|------|-----------------|
| gemini-1.5-flash | Very fast | Free / Very low | Development, quick tasks |
| gemini-1.5-pro | Medium | Low | General use, complex tasks |
| gemini-2.0-flash | Very fast | Low | Latest generation, multimodal |

## Summary

You now master the three main generative AI APIs: OpenAI, Anthropic, and Google Gemini. The most notable difference with Gemini is its more abstract SDK with \`GenerativeModel\` and \`start_chat()\`, and its generous free tier. In the next lesson we'll learn response streaming, an essential technique for improving user experience.
`;

export const leccion6 = `
# Lesson 6: Response Streaming

## Introduction

When you make a normal call to an AI API, you have to wait for the model to generate the **entire** response before receiving it. This can mean waiting 5, 10, or even 30 seconds staring at a blank screen. **Streaming** solves this: you receive the response token by token, in real time, as the model generates it. It's the difference between seeing a message appear word by word (like in ChatGPT) or waiting an eternity and receiving everything at once.

## Why does streaming matter?

### User experience (UX)

- **Without streaming**: The user waits 8 seconds with no feedback, thinking the app froze
- **With streaming**: The first token appears in ~200ms, the user sees something is happening

### Key metrics

- **Time to First Token (TTFT)**: Time until the first token arrives. With streaming, it's ~200-500ms. Without streaming, it's the total generation time.
- **Perceived latency**: Perceived latency drops dramatically with streaming, even though total time is the same.

### When to use streaming

- **Always** in chat interfaces
- **Always** when the response can be long
- **Not necessary** when you process the response programmatically (for example, data extraction)

## Streaming with OpenAI

### Synchronous version

\`\`\`python
# 01_streaming_openai_sync.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# The key is stream=True
stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain what machine learning is and its 3 main types."}
    ],
    temperature=0.7,
    max_tokens=800,
    stream=True  # This enables streaming
)

# Iterate over the stream chunks
print("GPT: ", end="", flush=True)
respuesta_completa = ""

for chunk in stream:
    # Each chunk has a delta with partial content
    delta = chunk.choices[0].delta
    if delta.content:
        print(delta.content, end="", flush=True)
        respuesta_completa += delta.content

print()  # New line at the end
print(f"\\n[Complete response: {len(respuesta_completa)} characters]")
\`\`\`

### Async version (recommended for production)

\`\`\`python
# 02_streaming_openai_async.py
import os
import asyncio
from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv()
client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

async def stream_openai(prompt: str, system: str = "You are a helpful assistant.") -> str:
    """Streams a response from OpenAI."""

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
    print("=== Async streaming with OpenAI ===\\n")
    resultado = await stream_openai(
        "What are the 5 most used Python libraries in data science?",
        system="You are a senior data scientist."
    )
    print(f"\\n[Total: {len(resultado)} characters]")

asyncio.run(main())
\`\`\`

## Streaming with Anthropic

### Synchronous version

\`\`\`python
# 03_streaming_anthropic_sync.py
import os
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

# Anthropic uses a context manager for streaming
print("Claude: ", end="", flush=True)
respuesta_completa = ""

with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=800,
    system="You are a helpful assistant.",
    messages=[
        {"role": "user", "content": "Explain what machine learning is and its 3 main types."}
    ],
    temperature=0.7
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
        respuesta_completa += text

print()
print(f"\\n[Complete response: {len(respuesta_completa)} characters]")
\`\`\`

### Async version

\`\`\`python
# 04_streaming_anthropic_async.py
import os
import asyncio
from dotenv import load_dotenv
import anthropic

load_dotenv()
client = anthropic.AsyncAnthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

async def stream_claude(prompt: str, system: str = "You are a helpful assistant.") -> str:
    """Streams a response from Claude."""

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
    print("=== Async streaming with Claude ===\\n")
    resultado = await stream_claude(
        "What are the 5 most used Python libraries in data science?"
    )
    print(f"\\n[Total: {len(resultado)} characters]")

asyncio.run(main())
\`\`\`

## Streaming with Gemini

\`\`\`python
# 05_streaming_gemini.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

modelo = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="You are a helpful assistant."
)

# Gemini uses stream=True in generate_content
print("Gemini: ", end="", flush=True)
respuesta_completa = ""

respuesta = modelo.generate_content(
    "Explain what machine learning is and its 3 main types.",
    stream=True
)

for chunk in respuesta:
    if chunk.text:
        print(chunk.text, end="", flush=True)
        respuesta_completa += chunk.text

print()
print(f"\\n[Complete response: {len(respuesta_completa)} characters]")
\`\`\`

## Interactive chat with streaming

This is the most complete example: a chat that supports multiple providers with streaming:

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
    """Generates a response with streaming for any provider."""
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
        # Separate the system prompt
        system = "You are a helpful assistant."
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
    proveedor = input("Choose provider (openai/anthropic): ").strip().lower()
    if proveedor not in ["openai", "anthropic"]:
        proveedor = "openai"

    nombre = "GPT" if proveedor == "openai" else "Claude"

    mensajes = [
        {"role": "system", "content": "You are a programming tutor. Respond concisely."}
    ]

    print(f"\\nChat with {nombre} (streaming) -- type 'exit' to quit")
    print("-" * 50)

    while True:
        user_input = input("\\nYou: ")
        if user_input.lower() in ["exit", "quit"]:
            break

        mensajes.append({"role": "user", "content": user_input})

        print(f"\\n{nombre}: ", end="", flush=True)
        respuesta = stream_respuesta(mensajes, proveedor)

        mensajes.append({"role": "assistant", "content": respuesta})

if __name__ == "__main__":
    main()
\`\`\`

## Important patterns

### Accumulate the complete response

Always accumulate the text during streaming. You'll need it to save in history:

\`\`\`python
respuesta_completa = ""
for chunk in stream:
    if chunk.choices[0].delta.content:
        texto = chunk.choices[0].delta.content
        respuesta_completa += texto
        # Process each chunk (display, send to frontend, etc.)
\`\`\`

### Callback pattern

To separate streaming logic from presentation:

\`\`\`python
from typing import Callable

def generar_con_streaming(
    prompt: str,
    on_token: Callable[[str], None] = print
) -> str:
    """Generates response with streaming, executing on_token for each token."""
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
            on_token(token)  # Customizable callback

    return completa
\`\`\`

## Summary

Streaming transforms the user experience of your AI applications. All three providers support it with similar patterns: OpenAI uses iteration over chunks with \`delta.content\`, Anthropic uses a context manager with \`text_stream\`, and Gemini uses \`stream=True\` in \`generate_content()\`. Always accumulate the complete response during streaming. In the next lesson we'll explore embeddings, one of the most powerful technologies behind AI applications.
`;

export const leccion7 = `
# Lesson 7: Embeddings: What They Are and What They're Used For

## Introduction

Embeddings are one of the most important and least understood technologies in modern AI. They are the foundation of semantic search, recommendation systems, similarity detection, and above all, the RAG (Retrieval-Augmented Generation) pattern that allows language models to access information not in their training data.

In this lesson you'll understand what embeddings are, how they work, and how to generate them with code.

## What is an embedding?

An embedding is a **numerical representation of the meaning** of a text. It converts words, sentences, or entire documents into vectors (lists of numbers) in a high-dimensional space.

### The intuition

Imagine a three-dimensional space (like a room). Now imagine that each word or phrase occupies a point in that space, such that **things that mean something similar are close to each other**:

- "dog" and "cat" would be close (both are pets)
- "dog" and "refrigerator" would be far apart (no semantic relationship)
- "king" and "queen" would be close, and the direction from "king" to "queen" would be similar to the direction from "man" to "woman"

In practice, these spaces don't have 3 dimensions but **1536 or 3072 dimensions** (depending on the model), which gives them an incredible ability to capture semantic nuances.

### What does an embedding look like?

\`\`\`python
# An embedding is simply a list of numbers
embedding_ejemplo = [0.0023, -0.0142, 0.0891, -0.0034, 0.0567, ...]
# It can have 1536 numbers (text-embedding-3-small)
# or 3072 numbers (text-embedding-3-large)
\`\`\`

## What are they used for?

### 1. Semantic search
Instead of searching by exact words (like Google in 2005), you search by **meaning**. "How to cook pasta?" finds results about "noodle recipe" even though they don't share any words.

### 2. RAG (Retrieval-Augmented Generation)
You store your documents as embeddings in a vector database. When a user asks a question, you search for the most relevant documents and pass them to the language model as context. This is what allows a chatbot to "know" your company's information.

### 3. Duplicate detection
If two texts have very similar embeddings, they probably say the same thing even if they use different words.

### 4. Classification
You can classify texts by comparing their embedding against embeddings of predefined categories.

### 5. Clustering
Group similar documents automatically without needing labels.

## Cosine similarity: how similar are two texts?

To compare two embeddings, we use **cosine similarity**. It's a measure that ranges from -1 to 1:

- **1.0**: Identical in meaning
- **0.0**: No relationship
- **-1.0**: Opposite meanings

\`\`\`python
import numpy as np

def similitud_coseno(vec_a: list, vec_b: list) -> float:
    """Calculates cosine similarity between two vectors."""
    a = np.array(vec_a)
    b = np.array(vec_b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Conceptual example
# If embedding_dog and embedding_cat are similar:
# similitud_coseno(embedding_dog, embedding_cat) ~ 0.85
# similitud_coseno(embedding_dog, embedding_refrigerator) ~ 0.15
\`\`\`

## Generate embeddings with OpenAI

\`\`\`python
# 01_embeddings_basico.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import numpy as np

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_embedding(texto: str, modelo: str = "text-embedding-3-small") -> list:
    """Generates an embedding for a given text."""
    respuesta = client.embeddings.create(
        model=modelo,
        input=texto
    )
    return respuesta.data[0].embedding

# Generate embeddings for different texts
textos = [
    "The cat sleeps on the sofa",
    "The feline rests on the couch",
    "Python is a programming language",
    "I like programming in Python",
    "It's very cold outside today"
]

embeddings = {}
for texto in textos:
    embeddings[texto] = generar_embedding(texto)
    print(f"'{texto}' -> vector of {len(embeddings[texto])} dimensions")

# Calculate similarities
print("\\n=== Similarities ===")
def similitud_coseno(a, b):
    a, b = np.array(a), np.array(b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Similar texts
sim = similitud_coseno(embeddings[textos[0]], embeddings[textos[1]])
print(f"'{textos[0]}' vs '{textos[1]}': {sim:.4f}")  # High similarity

# Related texts
sim = similitud_coseno(embeddings[textos[2]], embeddings[textos[3]])
print(f"'{textos[2]}' vs '{textos[3]}': {sim:.4f}")  # Medium-high similarity

# Unrelated texts
sim = similitud_coseno(embeddings[textos[0]], embeddings[textos[2]])
print(f"'{textos[0]}' vs '{textos[2]}': {sim:.4f}")  # Low similarity
\`\`\`

## Simple semantic search

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

# Knowledge base (simulates company documents)
documentos = [
    "The vacation policy grants 15 business days per year for employees with more than 1 year of tenure.",
    "Working hours are Monday to Friday, from 9:00 AM to 6:00 PM, with a one-hour lunch break.",
    "To request an expense reimbursement, fill out form RF-001 and attach receipts.",
    "The company offers training in Python, machine learning, and data science.",
    "Health insurance covers consultations, medications, and hospitalization for the employee and their family.",
    "To work remotely, you need approval from your direct supervisor and a stable connection.",
    "Performance reviews are conducted every 6 months, in June and December.",
    "The career path includes junior, mid-level, senior, and lead positions in each area."
]

# Generate embeddings for all documents
print("Generating embeddings for the knowledge base...")
doc_embeddings = [generar_embedding(doc) for doc in documentos]
print(f"Generated {len(doc_embeddings)} embeddings of {len(doc_embeddings[0])} dimensions each.\\n")

# Search function
def buscar(consulta: str, top_k: int = 3) -> list:
    """Finds the most relevant documents for a query."""
    embedding_consulta = generar_embedding(consulta)

    # Calculate similarity with each document
    resultados = []
    for i, doc_emb in enumerate(doc_embeddings):
        sim = similitud_coseno(embedding_consulta, doc_emb)
        resultados.append((sim, documentos[i]))

    # Sort by similarity descending
    resultados.sort(key=lambda x: x[0], reverse=True)

    return resultados[:top_k]

# Test searches
consultas = [
    "How many vacation days do I get?",
    "Can I work from home?",
    "What courses does the company offer?",
    "How do I get reimbursed for an expense?"
]

for consulta in consultas:
    print(f"Query: {consulta}")
    resultados = buscar(consulta)
    for i, (sim, doc) in enumerate(resultados):
        print(f"  {i+1}. [{sim:.4f}] {doc[:80]}...")
    print()
\`\`\`

## Batch embeddings (multiple texts)

\`\`\`python
# 03_embeddings_batch.py
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generar_embeddings_batch(textos: list[str], modelo: str = "text-embedding-3-small") -> list:
    """Generates embeddings for multiple texts in a single call (more efficient)."""
    respuesta = client.embeddings.create(
        model=modelo,
        input=textos
    )
    return [item.embedding for item in respuesta.data]

# Generate embeddings for 5 texts in a single call
textos = [
    "Artificial intelligence",
    "Machine learning",
    "Deep learning",
    "Neural networks",
    "Natural language processing"
]

embeddings = generar_embeddings_batch(textos)
print(f"Generated {len(embeddings)} embeddings in a single call")
print(f"Dimensions per embedding: {len(embeddings[0])}")
\`\`\`

## OpenAI embedding models

| Model | Dimensions | Cost (per 1M tokens) | Recommended use |
|-------|------------|---------------------|-----------------|
| text-embedding-3-small | 1536 | ~$0.02 | General use, most economical |
| text-embedding-3-large | 3072 | ~$0.13 | Higher precision, critical searches |
| text-embedding-ada-002 | 1536 | ~$0.10 | Legacy, don't use for new projects |

## Practical tips

1. **Normalize your texts** before generating embeddings: remove strange characters, normalize whitespace
2. **Use batch** whenever you can: it's more efficient and cheaper
3. **Save embeddings**: don't regenerate them each time (they're deterministic for the same input)
4. **text-embedding-3-small** is sufficient for 90% of use cases
5. **Chunk size matters**: for long documents, split into chunks of 200-500 tokens

## Summary

Embeddings convert text into numerical vectors that capture semantic meaning. Using cosine similarity, you can compare how similar two texts are regardless of the exact words they use. This is the foundation of semantic search and RAG. In the next lesson we'll learn how to store these embeddings in vector databases for efficient searching at scale.
`;

export const leccion8 = `
# Lesson 8: Vector Databases (Chroma, pgvector)

## Introduction

In the previous lesson we generated embeddings and searched them by iterating over a list. That works for 10 or 100 documents, but what happens when you have 100,000 or 1,000,000? You need a **vector database**: a database designed specifically to store vectors and search for the most similar ones efficiently.

## What is a vector database?

A vector database is like a normal database but optimized for one operation: **finding the vectors closest to a given vector** (known as "nearest neighbor search").

### Why not use a normal database?

A SQL database can store vectors, but searching by similarity would require calculating the distance against **every row** in the table. That's O(n). Vector databases use special data structures (like HNSW — Hierarchical Navigable Small World) to do approximate searches in O(log n).

### Popular options

| Database | Type | Ideal for |
|----------|------|-----------|
| **Chroma** | Embedded (local) | Prototyping, small projects |
| **pgvector** | PostgreSQL extension | Production, you already use Postgres |
| **Pinecone** | Cloud (SaaS) | Massive scale, no ops |
| **Weaviate** | Self-hosted / Cloud | Advanced search |
| **Qdrant** | Self-hosted / Cloud | High performance |

In this lesson we'll focus on **Chroma** (to get started quickly locally) and **pgvector** (for production).

## ChromaDB: Complete setup and usage

Chroma is the easiest way to get started with vector databases. It runs locally, you don't need to install a separate server, and it integrates directly into your Python code.

### Installation

\`\`\`bash
pip install chromadb
\`\`\`

### Your first vector database

\`\`\`python
# 01_chroma_basico.py
import chromadb

# Create a Chroma client (in memory)
client = chromadb.Client()

# Create a collection (equivalent to a table)
coleccion = client.create_collection(
    name="company_documents",
    metadata={"description": "Company knowledge base"}
)

# Add documents
# Chroma generates embeddings automatically using its default model
coleccion.add(
    documents=[
        "The vacation policy grants 15 business days per year for employees with more than 1 year.",
        "Working hours are Monday to Friday, from 9:00 AM to 6:00 PM.",
        "To request expense reimbursement, fill out form RF-001.",
        "The company offers training in Python, machine learning, and data science.",
        "Health insurance covers consultations, medications, and hospitalization.",
        "To work remotely, you need approval from your direct supervisor.",
        "Performance reviews are conducted every 6 months.",
        "The career path includes junior, mid-level, senior, and lead positions."
    ],
    ids=["doc1", "doc2", "doc3", "doc4", "doc5", "doc6", "doc7", "doc8"],
    metadatas=[
        {"categoria": "hr", "tipo": "policy"},
        {"categoria": "hr", "tipo": "schedule"},
        {"categoria": "finance", "tipo": "process"},
        {"categoria": "training", "tipo": "offering"},
        {"categoria": "benefits", "tipo": "health"},
        {"categoria": "hr", "tipo": "policy"},
        {"categoria": "hr", "tipo": "process"},
        {"categoria": "hr", "tipo": "career"}
    ]
)

print(f"Collection '{coleccion.name}' created with {coleccion.count()} documents")
\`\`\`

### Search documents

\`\`\`python
# 02_chroma_buscar.py
import chromadb

client = chromadb.Client()

# Create and populate the collection
coleccion = client.create_collection(name="docs")
coleccion.add(
    documents=[
        "The vacation policy grants 15 business days per year.",
        "Working hours are Monday to Friday, from 9:00 AM to 6:00 PM.",
        "For expense reimbursement, fill out form RF-001.",
        "The company offers training in Python and machine learning.",
        "Health insurance covers consultations and hospitalization.",
        "To work remotely, you need approval from your supervisor.",
    ],
    ids=["d1", "d2", "d3", "d4", "d5", "d6"]
)

# Search by semantic similarity
resultados = coleccion.query(
    query_texts=["How many vacation days do I get?"],
    n_results=3
)

print("=== Search results ===")
for i, (doc, distancia) in enumerate(zip(
    resultados["documents"][0],
    resultados["distances"][0]
)):
    print(f"{i+1}. [distance: {distancia:.4f}] {doc}")
\`\`\`

### Persist data to disk

\`\`\`python
# 03_chroma_persistente.py
import chromadb

# Create a persistent client (data is saved to disk)
client = chromadb.PersistentClient(path="./mi_chroma_db")

# First time: create the collection and add data
coleccion = client.get_or_create_collection(name="knowledge_base")

# Only add if empty
if coleccion.count() == 0:
    coleccion.add(
        documents=[
            "Python was created by Guido van Rossum in 1991.",
            "JavaScript is the language of the web.",
            "Rust focuses on memory safety without a garbage collector.",
            "Go was created by Google for distributed systems.",
            "TypeScript adds static types to JavaScript."
        ],
        ids=["py", "js", "rust", "go", "ts"]
    )
    print(f"Added {coleccion.count()} documents")
else:
    print(f"Collection already has {coleccion.count()} documents")

# Search
resultados = coleccion.query(
    query_texts=["language for web programming"],
    n_results=2
)

for doc, dist in zip(resultados["documents"][0], resultados["distances"][0]):
    print(f"[{dist:.4f}] {doc}")
\`\`\`

### Use OpenAI embeddings with Chroma

By default, Chroma uses a local embedding model. But you can use OpenAI embeddings for better quality:

\`\`\`python
# 04_chroma_openai_embeddings.py
import os
from dotenv import load_dotenv
import chromadb
from chromadb.utils.embedding_functions import OpenAIEmbeddingFunction

load_dotenv()

# Configure the OpenAI embedding function
openai_ef = OpenAIEmbeddingFunction(
    api_key=os.getenv("OPENAI_API_KEY"),
    model_name="text-embedding-3-small"
)

# Create client and collection with OpenAI embeddings
client = chromadb.PersistentClient(path="./chroma_openai_db")
coleccion = client.get_or_create_collection(
    name="docs_openai",
    embedding_function=openai_ef
)

if coleccion.count() == 0:
    coleccion.add(
        documents=[
            "Transformers use attention mechanisms to process sequences.",
            "Convolutional networks are ideal for image processing.",
            "Reinforcement learning learns through rewards and penalties.",
            "Autoencoders compress data to a latent representation.",
            "GANs generate new data through a game between generator and discriminator."
        ],
        ids=["t1", "t2", "t3", "t4", "t5"]
    )

resultados = coleccion.query(
    query_texts=["How do language models like GPT work?"],
    n_results=2
)

for doc, dist in zip(resultados["documents"][0], resultados["distances"][0]):
    print(f"[{dist:.4f}] {doc}")
\`\`\`

## pgvector: PostgreSQL as a vector database

If you already use PostgreSQL, pgvector lets you add vector search capabilities without an additional service.

### Installation

\`\`\`bash
# Install the PostgreSQL extension
# On macOS with Homebrew:
brew install pgvector

# Install the Python driver
pip install psycopg2-binary pgvector
\`\`\`

### Configuration in PostgreSQL

\`\`\`sql
-- Enable the extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create table with vector column
CREATE TABLE documentos (
    id SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    categoria VARCHAR(50),
    embedding vector(1536)  -- 1536 dimensions for text-embedding-3-small
);

-- Create index for efficient searches
CREATE INDEX ON documentos USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
\`\`\`

### Use pgvector from Python

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

# Connect to PostgreSQL
conn = psycopg2.connect(
    host="localhost",
    database="mi_proyecto_ia",
    user="postgres",
    password=os.getenv("POSTGRES_PASSWORD")
)
register_vector(conn)
cur = conn.cursor()

# Insert documents with their embeddings
documentos = [
    ("Python is ideal for machine learning", "tech"),
    ("Colombian coffee is famous worldwide", "general"),
    ("TensorFlow is a deep learning library", "tech"),
]

for contenido, categoria in documentos:
    embedding = generar_embedding(contenido)
    cur.execute(
        "INSERT INTO documentos (contenido, categoria, embedding) VALUES (%s, %s, %s)",
        (contenido, categoria, embedding)
    )

conn.commit()

# Search by similarity
consulta = "What tools are used for artificial intelligence?"
embedding_consulta = generar_embedding(consulta)

cur.execute("""
    SELECT contenido, categoria,
           1 - (embedding <=> %s::vector) AS similitud
    FROM documentos
    ORDER BY embedding <=> %s::vector
    LIMIT 3
""", (embedding_consulta, embedding_consulta))

print(f"Query: {consulta}")
for contenido, categoria, similitud in cur.fetchall():
    print(f"  [{similitud:.4f}] [{categoria}] {contenido}")

cur.close()
conn.close()
\`\`\`

## When to use each one

| Criteria | ChromaDB | pgvector |
|----------|----------|----------|
| Setup | 1 minute | Requires PostgreSQL |
| Persistence | Local file | Database |
| Scale | Thousands of documents | Millions |
| Production | Prototyping | Ideal |
| Ecosystem | Python SDK | SQL + any language |

## RAG: putting it all together

The RAG (Retrieval-Augmented Generation) architecture combines embeddings + vector database + LLM:

\`\`\`python
# 06_rag_simple.py
import os
from dotenv import load_dotenv
from openai import OpenAI
import chromadb

load_dotenv()
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 1. Create and populate the vector database
chroma_client = chromadb.Client()
coleccion = chroma_client.create_collection(name="rag_demo")
coleccion.add(
    documents=[
        "The basic plan costs $10/month and includes 100 queries.",
        "The professional plan costs $50/month and includes unlimited queries.",
        "All plans include email support during business hours.",
        "The enterprise plan includes 24/7 support and guaranteed SLA.",
        "You can cancel your subscription at any time without penalty."
    ],
    ids=["p1", "p2", "p3", "p4", "p5"]
)

# 2. RAG function
def responder_con_contexto(pregunta: str) -> str:
    # Search for relevant documents
    resultados = coleccion.query(query_texts=[pregunta], n_results=3)
    contexto = "\\n".join(resultados["documents"][0])

    # Generate response with the LLM using context
    respuesta = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": f"""Answer the user's question using ONLY the information from the provided context.
If the answer is not in the context, say you don't have that information.

Context:
{contexto}"""
            },
            {"role": "user", "content": pregunta}
        ],
        temperature=0.3,
        max_tokens=300
    )

    return respuesta.choices[0].message.content

# 3. Test
preguntas = [
    "How much does the professional plan cost?",
    "Can I cancel whenever I want?",
    "Does the basic plan have 24/7 support?"
]

for pregunta in preguntas:
    print(f"Q: {pregunta}")
    print(f"A: {responder_con_contexto(pregunta)}\\n")
\`\`\`

## Summary

Vector databases are the key component for building AI applications that access your own information. ChromaDB is perfect for getting started: it installs with pip, runs in-memory or persisted to disk, and integrates with OpenAI embeddings. pgvector is the option for production if you already use PostgreSQL. The RAG pattern — searching for relevant context and passing it to the LLM — is the most important architecture in enterprise AI applications. In the next lesson we'll build a complete chatbot with memory.
`;

export const leccion9 = `
# Lesson 9: Project — Chatbot with Memory

## Introduction

It's time to combine everything we've learned. We're going to build a command-line chatbot with the following capabilities:

1. **Multi-turn conversation**: Remembers everything discussed in the current session
2. **Configurable system prompt**: You can change the bot's personality
3. **Streaming**: Responses appear token by token
4. **Multi-provider support**: Works with OpenAI or Anthropic
5. **Token tracking**: Tracks token usage
6. **Robust error handling**: Automatic retries

This is a real project that you can adapt and extend.

## Project architecture

\`\`\`
chatbot_con_memoria/
├── .env                  # API keys
├── config.py             # Configuration and env var loading
├── providers.py          # Provider abstraction (OpenAI, Anthropic)
├── chatbot.py            # Main chatbot logic
└── main.py               # Entry point
\`\`\`

## Step 1: Configuration (config.py)

\`\`\`python
# config.py
import os
from dotenv import load_dotenv
from dataclasses import dataclass

load_dotenv()

@dataclass
class Config:
    """Chatbot configuration."""
    openai_api_key: str = ""
    anthropic_api_key: str = ""
    default_provider: str = "openai"
    default_model_openai: str = "gpt-4o-mini"
    default_model_anthropic: str = "claude-sonnet-4-20250514"
    temperature: float = 0.7
    max_tokens: int = 1000
    max_historial: int = 50  # Maximum messages in history
    system_prompt: str = (
        "You are a friendly and helpful AI assistant. "
        "You respond clearly and concisely. "
        "If you don't know something, you say so honestly."
    )

def cargar_config() -> Config:
    """Loads configuration from environment variables."""
    config = Config(
        openai_api_key=os.getenv("OPENAI_API_KEY", ""),
        anthropic_api_key=os.getenv("ANTHROPIC_API_KEY", ""),
    )

    if not config.openai_api_key and not config.anthropic_api_key:
        raise ValueError(
            "You need to configure at least one API key in the .env file: "
            "OPENAI_API_KEY or ANTHROPIC_API_KEY"
        )

    # If there's only one key, use that provider by default
    if config.openai_api_key and not config.anthropic_api_key:
        config.default_provider = "openai"
    elif config.anthropic_api_key and not config.openai_api_key:
        config.default_provider = "anthropic"

    return config
\`\`\`

## Step 2: Providers (providers.py)

\`\`\`python
# providers.py
from typing import Generator
from dataclasses import dataclass
from openai import OpenAI
import anthropic

@dataclass
class TokenUsage:
    """Token usage tracking."""
    input_tokens: int = 0
    output_tokens: int = 0

    @property
    def total(self) -> int:
        return self.input_tokens + self.output_tokens


class OpenAIProvider:
    """OpenAI provider."""

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
        """Generates response with streaming. Yields tokens, returns usage."""
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

            # The last chunk has the usage
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
        """Generates response without streaming."""
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
    """Anthropic provider."""

    def __init__(self, api_key: str, model: str = "claude-sonnet-4-20250514"):
        self.client = anthropic.Anthropic(api_key=api_key)
        self.model = model
        self.name = "Anthropic"

    def _extract_system_and_messages(self, messages: list[dict]) -> tuple[str, list[dict]]:
        """Separates the system prompt from messages (required by Anthropic)."""
        system = "You are a helpful assistant."
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
        """Generates response with streaming."""
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

            # Get usage from the final message
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
        """Generates response without streaming."""
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

## Step 3: Chatbot (chatbot.py)

\`\`\`python
# chatbot.py
import time
from dataclasses import dataclass, field
from providers import OpenAIProvider, AnthropicProvider, TokenUsage
from config import Config

@dataclass
class ChatSession:
    """Represents a chat session with history."""
    system_prompt: str
    messages: list[dict] = field(default_factory=list)
    total_tokens: TokenUsage = field(default_factory=TokenUsage)
    turn_count: int = 0

    def add_user_message(self, content: str):
        """Adds a user message to the history."""
        self.messages.append({"role": "user", "content": content})

    def add_assistant_message(self, content: str):
        """Adds an assistant message to the history."""
        self.messages.append({"role": "assistant", "content": content})
        self.turn_count += 1

    def get_messages_for_api(self) -> list[dict]:
        """Returns messages formatted for the API (with system prompt)."""
        return [
            {"role": "system", "content": self.system_prompt},
            *self.messages
        ]

    def trim_history(self, max_messages: int):
        """Trims the history if it exceeds the maximum, keeping the most recent."""
        if len(self.messages) > max_messages:
            # Always keep at least the last N messages
            self.messages = self.messages[-max_messages:]

    def update_tokens(self, usage: TokenUsage):
        """Updates the accumulated token count."""
        self.total_tokens.input_tokens += usage.input_tokens
        self.total_tokens.output_tokens += usage.output_tokens


class Chatbot:
    """Chatbot with memory, streaming, and multi-provider support."""

    def __init__(self, config: Config):
        self.config = config
        self.session = ChatSession(system_prompt=config.system_prompt)
        self.provider = self._create_provider(config.default_provider)

    def _create_provider(self, provider_name: str):
        """Creates the AI provider by name."""
        if provider_name == "openai":
            if not self.config.openai_api_key:
                raise ValueError("OPENAI_API_KEY not configured")
            return OpenAIProvider(
                api_key=self.config.openai_api_key,
                model=self.config.default_model_openai
            )
        elif provider_name == "anthropic":
            if not self.config.anthropic_api_key:
                raise ValueError("ANTHROPIC_API_KEY not configured")
            return AnthropicProvider(
                api_key=self.config.anthropic_api_key,
                model=self.config.default_model_anthropic
            )
        else:
            raise ValueError(f"Unknown provider: {provider_name}")

    def switch_provider(self, provider_name: str):
        """Switches the AI provider (keeps the history)."""
        self.provider = self._create_provider(provider_name)
        print(f"Switched to {self.provider.name} ({self.provider.model})")

    def chat(self, user_input: str) -> str:
        """Processes a user message and returns the response with streaming."""
        # Add user message
        self.session.add_user_message(user_input)

        # Trim history if too long
        self.session.trim_history(self.config.max_historial)

        # Prepare messages for the API
        messages = self.session.get_messages_for_api()

        # Generate response with streaming
        respuesta_completa = ""

        try:
            start_time = time.time()

            gen = self.provider.stream_response(
                messages=messages,
                temperature=self.config.temperature,
                max_tokens=self.config.max_tokens
            )

            # Iterate over the stream tokens
            first_token = True
            for token in gen:
                if first_token:
                    ttft = time.time() - start_time
                    first_token = False
                print(token, end="", flush=True)
                respuesta_completa += token

            elapsed = time.time() - start_time
            print()  # New line

        except StopIteration as e:
            # Capture the usage returned by the generator
            if e.value:
                self.session.update_tokens(e.value)
        except Exception as e:
            error_msg = f"\\nError generating response: {str(e)}"
            print(error_msg)
            respuesta_completa = f"[Error: {str(e)}]"

        # Add response to history
        self.session.add_assistant_message(respuesta_completa)

        return respuesta_completa

    def reset(self):
        """Resets the session (clears history)."""
        self.session = ChatSession(system_prompt=self.config.system_prompt)
        print("History cleared. New conversation.")

    def show_stats(self):
        """Shows session statistics."""
        s = self.session
        print(f"\\n--- Statistics ---")
        print(f"Provider: {self.provider.name} ({self.provider.model})")
        print(f"Turns: {s.turn_count}")
        print(f"Messages in history: {len(s.messages)}")
        print(f"Accumulated tokens: {s.total_tokens.total}")
        print(f"  - Input: {s.total_tokens.input_tokens}")
        print(f"  - Output: {s.total_tokens.output_tokens}")
        print(f"-------------------\\n")
\`\`\`

## Step 4: Entry point (main.py)

\`\`\`python
# main.py
from config import cargar_config
from chatbot import Chatbot

def mostrar_ayuda():
    """Shows available commands."""
    print("""
Available commands:
  /exit       - End the conversation
  /reset      - Clear history and start over
  /stats      - View session statistics
  /openai     - Switch to OpenAI
  /anthropic  - Switch to Anthropic
  /system     - Change the system prompt
  /help       - Show this help
""")

def main():
    # Load configuration
    try:
        config = cargar_config()
    except ValueError as e:
        print(f"Configuration error: {e}")
        return

    # Create the chatbot
    bot = Chatbot(config)

    # Welcome banner
    print("=" * 60)
    print("  Chatbot with Memory")
    print(f"  Provider: {bot.provider.name} ({bot.provider.model})")
    print("  Type /help to see available commands")
    print("=" * 60)

    while True:
        try:
            # Read user input
            user_input = input("\\nYou: ").strip()

            # Ignore empty lines
            if not user_input:
                continue

            # Process commands
            if user_input.startswith("/"):
                comando = user_input.lower().split()[0]

                if comando in ["/exit", "/quit"]:
                    bot.show_stats()
                    print("Goodbye!")
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
                        print(f"System prompt updated to: {nuevo_system}")
                    else:
                        print(f"Current system prompt: {bot.session.system_prompt}")
                    continue

                elif comando == "/help":
                    mostrar_ayuda()
                    continue

                else:
                    print(f"Unknown command: {comando}. Type /help to see commands.")
                    continue

            # Process normal message
            print(f"\\n{bot.provider.name}: ", end="", flush=True)
            bot.chat(user_input)

        except KeyboardInterrupt:
            print("\\n\\nInterrupted.")
            bot.show_stats()
            break
        except Exception as e:
            print(f"\\nError: {e}")
            continue

if __name__ == "__main__":
    main()
\`\`\`

## How to run the project

\`\`\`bash
# 1. Make sure you have your .env with API keys
cat .env
# OPENAI_API_KEY=sk-proj-...
# ANTHROPIC_API_KEY=sk-ant-...

# 2. Activate your virtual environment
source venv/bin/activate

# 3. Run
python main.py
\`\`\`

## Example session

\`\`\`
============================================================
  Chatbot with Memory
  Provider: OpenAI (gpt-4o-mini)
  Type /help to see available commands
============================================================

You: Hi, my name is Carlos

OpenAI: Hi Carlos! How can I help you today?

You: Do you remember my name?

OpenAI: Of course! Your name is Carlos. What do you need?

You: /anthropic
Switched to Anthropic (claude-sonnet-4-20250514)

You: Do you still know my name?

Anthropic: Yes, your name is Carlos. Although I just switched models,
our conversation history is preserved.

You: /stats
--- Statistics ---
Provider: Anthropic (claude-sonnet-4-20250514)
Turns: 3
Messages in history: 6
Accumulated tokens: 847
-------------------

You: /exit
Goodbye!
\`\`\`

## Ideas for extending the project

- **Save conversations to file**: Serialize the history to JSON and load it on startup
- **Add RAG**: Connect with ChromaDB so the bot can access documents
- **Web interface**: Use FastAPI or Flask to create a REST API
- **Multiple sessions**: Allow the user to load/save different conversations
- **Automatic summarization**: When the history gets too long, summarize it to reduce tokens

## Summary

We built a complete chatbot with memory, streaming, multi-provider support, and a command-line interface with useful commands. The key to "memory" is simply maintaining a list of messages and sending it complete in each API call. The history grows with each turn, so it's important to trim it when it gets too long. This project is a solid foundation you can extend for any conversational application.
`;


export const leccion10 = ``;
