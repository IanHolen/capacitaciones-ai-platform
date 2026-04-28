// English content for Course 12: Introduction to AI APIs
// 7 lessons — Advanced Level

export const c12leccion1 = `## What Is an API? (Explained Simply)

So far you've used AI through web interfaces — chatgpt.com, claude.ai, gemini.google.com. But behind those web pages lies something more powerful: the **API**.

### The Restaurant Analogy

Imagine you go to a restaurant:
- **You** (the customer) want to eat something
- **The kitchen** has everything needed to prepare the food
- **The waiter** is the one who takes your order to the kitchen and brings you the dish

**The API is the waiter.** It's the intermediary that carries your requests (questions) to the AI system (the kitchen) and brings you the responses (the dish).

### Why Use an API Instead of the Web?

| Feature | Web Interface | API |
|---|---|---|
| Ease of use | Very easy | Requires setup |
| Customization | Limited | Total |
| Automation | Manual | Fully automatic |
| Volume | One at a time | Thousands per minute |
| Integration | No | Integrates with any system |
| Cost | Fixed monthly plan | Pay per use |

### When Do You Need an API?

- You want your app or website to use AI
- You need to process lots of data automatically
- You want to fully customize the experience
- You want to integrate AI into tools you already have

### How Does It Work Technically?

Without getting into code (yet), here's the flow:

1. **Your program** sends a request to the API: "Summarize this text in 2 sentences"
2. **The API** receives the request and passes it to the AI model
3. **The model** processes and generates the response
4. **The API** returns the response to you: "This text is about..."

All of this happens in seconds, automatically, without anyone having to open a chat.

### The Most Important APIs

| Provider | API | Top Model | Ideal For |
|---|---|---|---|
| OpenAI | api.openai.com | GPT-4o, GPT-4o-mini | General use, text, image |
| Google | generativelanguage.googleapis.com | Gemini Flash, Flash-Lite | Affordable, fast |
| Groq | api.groq.com | Llama 3.1, Mixtral | Extreme speed |
| Anthropic | api.anthropic.com | Claude Sonnet, Opus | Deep analysis, code |

### Terms You'll Need to Know

- **Request**: What you send to the API
- **Response**: What the API sends back to you
- **Endpoint**: The web address of the API (like a URL)
- **API Key**: Your access key (like a password)
- **Rate limit**: The maximum number of requests you can make per minute
- **Token**: A unit of text the AI processes (1 token ≈ 0.75 words)

### Key Takeaways

- An API is an intermediary that allows your program to use AI
- It's more flexible and powerful than the web interface
- You pay per use instead of a fixed monthly plan
- It's the path to integrating AI into your own projects`;

export const c12leccion2 = `## API Keys: What They Are and How to Protect Them

An **API Key** is like the key to your digital house. Without it, you can't access the API. With it, anyone can use your account and spend your credit.

### What Is an API Key?

It's a long, unique code that identifies you to the AI service. It looks something like this:

\`\`\`
sk-proj-abc123def456ghi789jkl012mno345pqr678
\`\`\`

Every time your program makes a request to the API, it includes this key so the service knows it's you (and charges you).

### How to Get Your API Key

**OpenAI (GPT-4, GPT-4o-mini):**
1. Go to **platform.openai.com**
2. Create an account or sign in
3. Go to **API Keys** in the menu
4. Click **"Create new secret key"**
5. Copy the key immediately (it's only shown once)
6. Add credit (minimum $5 to start)

**Google Gemini:**
1. Go to **aistudio.google.com**
2. Sign in with your Google account
3. Click **"Get API Key"**
4. Select or create a Google Cloud project
5. Copy your API Key
6. It has a generous free tier (1,500 requests/day for Flash)

**Groq:**
1. Go to **console.groq.com**
2. Create an account
3. Go to **API Keys**
4. Create a new key
5. Copy the key
6. Free plan with 14,400 requests/day

### Golden Rules for Protecting Your API Key

**1. NEVER share it publicly**
- Don't put it in code that gets uploaded to GitHub
- Don't paste it in a chat or forum
- Don't send it via unencrypted email

**2. Use environment variables**
Instead of putting the key directly in the code:

❌ Bad:
\`\`\`
api_key = "sk-proj-abc123..."
\`\`\`

✅ Good (.env file):
\`\`\`
OPENAI_API_KEY=sk-proj-abc123...
\`\`\`

And in your code, you read the environment variable.

**3. Set spending limits**
- OpenAI: Settings → Billing → Usage limits
- Google: Console → Quotas
- Set a monthly limit (e.g., $10) to avoid surprises

**4. Rotate keys periodically**
- Every 3-6 months, create a new key and delete the old one
- If you suspect it was leaked, change it immediately

**5. Use different keys for each project**
- One key for testing, another for production
- If one is compromised, it doesn't affect everything

### What Happens If Someone Steals Your API Key?

- They can make requests to the API and you pay for them
- In the worst case, they can rack up thousands of dollars in charges
- That's why it's crucial to set spending limits

### Key Takeaways

- Your API Key is your access credential — treat it like a password
- Never put it directly in visible code
- Always set spending limits
- Gemini and Groq offer generous free tiers to get started`;

export const c12leccion3 = `## Your First Call to the Gemini API

Let's make your first call to an AI API. We chose **Google Gemini** because:
- It has a very generous free tier
- Setup is simple
- It's fast and affordable

### Step 1: Get Your Gemini API Key

1. Go to **aistudio.google.com**
2. Sign in with your Google account
3. Click **"Get API Key"** → **"Create API Key"**
4. Copy the key and store it somewhere safe

### Step 2: Your First Call (Without Coding)

Before writing code, you can test the API directly from Google AI Studio:

1. On **aistudio.google.com**, open the **"Freeform prompt"**
2. Type: "Explain what an API is in 3 simple sentences"
3. Click **"Run"**
4. Done! You just made your first call to the Gemini API

### Step 3: First Call with Code (JavaScript)

Create a file called \`my-first-api.js\`:

\`\`\`javascript
// Install the SDK: npm install @google/generative-ai

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

async function main() {
  const result = await model.generateContent(
    "Explain what an API is in 3 simple sentences."
  );
  console.log(result.response.text());
}

main();
\`\`\`

**To run it:**
1. Have Node.js installed
2. Run: \`npm install @google/generative-ai\`
3. Replace "YOUR_API_KEY_HERE" with your actual key
4. Run: \`node my-first-api.js\`

### Step 4: First Call with Python

\`\`\`python
# Install: pip install google-generativeai

import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY_HERE")
model = genai.GenerativeModel("gemini-2.0-flash-lite")

response = model.generate_content(
    "Explain what an API is in 3 simple sentences."
)
print(response.text)
\`\`\`

### Using the OpenAI-Compatible Format

Gemini also supports the OpenAI API format, which means you can use the same code for both:

\`\`\`javascript
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: "YOUR_GEMINI_API_KEY",
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

async function main() {
  const response = await client.chat.completions.create({
    model: "gemini-2.0-flash-lite",
    messages: [
      { role: "user", content: "Explain what an API is in 3 simple sentences." }
    ]
  });
  console.log(response.choices[0].message.content);
}

main();
\`\`\`

### How Much Does It Cost?

Gemini Flash-Lite is extremely affordable:
- **Free**: 1,500 requests per day
- **If you pay**: $0.075 per million input tokens

For reference: 1 million tokens ≈ 750,000 words. You'd have to ask thousands of questions per day to spend more than $1.

### Key Takeaways

- Google AI Studio lets you test the API without code
- The Gemini SDK works with JavaScript and Python
- The OpenAI-compatible format simplifies switching between providers
- The free tier is more than enough for learning and prototyping`;

export const c12leccion4 = `## Using the Groq API for Fast Responses

**Groq** is special for one reason: it's incredibly fast. While other APIs take 2-5 seconds to respond, Groq responds in milliseconds. This makes it ideal for real-time applications.

### Why Is Groq So Fast?

Groq uses specialized hardware called **LPU** (Language Processing Unit) designed specifically for language models. It's like the difference between using a blender for everything vs using a dedicated juicer — the specialized tool is much faster.

### Available Models on Groq

| Model | Speed | Quality | Ideal For |
|---|---|---|---|
| Llama 3.1 8B | Ultra fast | Good | Chat, summaries, classification |
| Llama 3.1 70B | Fast | Very good | Analysis, complex writing |
| Mixtral 8x7B | Very fast | Good | Multilingual, code |

### Groq's Free Plan

- **14,400 requests per day** with Llama 3.1 8B
- **14,400 requests per day** with other models
- No credit card required
- Perfect for learning and prototyping

### Your First Call to Groq

Groq uses the OpenAI-compatible format, so if you already tried the example from the previous lesson, you just change the URL and key:

\`\`\`javascript
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: "YOUR_GROQ_API_KEY",
  baseURL: "https://api.groq.com/openai/v1"
});

async function main() {
  const start = Date.now();

  const response = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: "Respond briefly and clearly." },
      { role: "user", content: "What advantages does an API have over a web interface?" }
    ]
  });

  const elapsed = Date.now() - start;
  console.log(response.choices[0].message.content);
  console.log("Response time:", elapsed, "ms");
}

main();
\`\`\`

You'll see the response arrives in less than 500ms — sometimes less than 200ms.

### When to Use Groq vs Gemini

| Criteria | Groq | Gemini |
|---|---|---|
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Long documents | ❌ (small window) | ⭐⭐⭐⭐⭐ |
| Cost | Generous free tier | Generous free tier |
| Response quality | Good | Very good |
| Ideal for | Real-time chat, classification | Analysis, documents, complex tasks |

### Practical Example: Ultra-Fast Chatbot

With Groq you can create a chatbot that responds so fast it feels like it's typing in real time. Ideal for:

- **Customer support**: Instant responses
- **Educational tutor**: No waits to frustrate the student
- **Sales assistant**: Fast responses = more conversions

### Key Takeaways

- Groq is the fastest available API thanks to its specialized hardware
- 14,400 free requests per day — more than enough to get started
- Uses the OpenAI-compatible format — easy to integrate
- Ideal for real-time applications where speed matters`;

export const c12leccion5 = `## Costs: How Much Does Using APIs Actually Cost?

One of the biggest concerns when using AI APIs is the cost. The good news: **it's much cheaper than you think**. The bad news: if you're not careful, it can scale up.

### How You're Charged

AI APIs charge by **tokens processed**:
- **Input tokens**: What you send to the model
- **Output tokens**: What the model sends back to you
- 1 token ≈ 0.75 words in English

### Real Pricing Table (April 2026)

| Provider | Model | Input (per 1M tokens) | Output (per 1M tokens) |
|---|---|---|---|
| Google | Gemini Flash-Lite | $0.075 | $0.30 |
| Google | Gemini Flash | $0.15 | $0.60 |
| Groq | Llama 3.1 8B | $0.05 | $0.08 |
| OpenAI | GPT-4o-mini | $0.15 | $0.60 |
| OpenAI | GPT-4o | $2.50 | $10.00 |
| Anthropic | Claude Sonnet | $3.00 | $15.00 |

### How Much Is That in Practice?

**Scenario 1: Customer Support Chatbot**
- 100 conversations per day
- Each conversation: ~500 input tokens + 500 output tokens
- Using Gemini Flash-Lite: ~$0.02 per day = **$0.60 per month**

**Scenario 2: Summarizing 50 Documents Per Day**
- Each document: ~2,000 input tokens + 500 output tokens
- Using GPT-4o-mini: ~$0.03 per day = **$0.90 per month**

**Scenario 3: Deep Analysis with a Premium Model**
- 20 analyses per day
- Each analysis: ~3,000 input tokens + 1,000 output tokens
- Using Claude Sonnet: ~$1.20 per day = **$36 per month**

### Free Tiers

| Provider | What You Get for Free |
|---|---|
| Google Gemini | 1,500 requests/day with Flash |
| Groq | 14,400 requests/day |
| OpenAI | $5 initial credit |
| Anthropic | $5 initial credit |

### Strategies to Reduce Costs

**1. Choose the Right Model**
- Don't use GPT-4o for simple tasks — GPT-4o-mini does the same at 1/15th the price
- Gemini Flash-Lite is ideal for classification and short responses

**2. Optimize Your Prompts**
- Shorter prompts = fewer input tokens = lower cost
- Ask for concise responses: "Respond in a maximum of 3 sentences"

**3. Use Caching**
- If many people ask the same question, save the response
- Next time, return the saved response without calling the API

**4. Set Limits**
- Establish a maximum monthly budget
- Set alerts when you reach 80% of the limit

### Key Takeaways

- AI APIs are surprisingly affordable for most use cases
- Start with free tiers — they're more than enough for learning
- Choose the model based on the task, not the most expensive one
- Always set spending limits to avoid surprises`;

export const c12leccion6 = `## Embedding a Chatbot on a Web Page

The final step: putting your AI assistant on your own web page so your customers or users can interact with it directly.

### Option 1: No-Code Widget

The fastest way to get a chatbot on your site:

**Chatbase (chatbase.co)**
1. Create an account
2. Upload your documents or connect your website
3. Customize the appearance (colors, logo, welcome message)
4. Copy the widget code
5. Paste the code before the closing \`</body>\` tag in your HTML

The code looks something like this:
\`\`\`html
<script>
  window.chatbaseConfig = {
    chatbotId: "your-id-here",
  }
</script>
<script src="https://www.chatbase.co/embed.min.js" defer></script>
\`\`\`

**Other no-code options:**
- **CustomGPT.ai**: Similar to Chatbase, with built-in RAG
- **Voiceflow**: For more complex chatbots with conversation flows
- **Botpress**: Open source with visual interface

### Option 2: API + Your Own Interface

If you want full control, you can create your own chat interface and connect it to the API:

**Basic Architecture:**
\`\`\`
User → Your web page → Your server → AI API → Response → User
\`\`\`

**Simplified Example (API Route in Next.js):**
\`\`\`typescript
// app/api/chat/route.ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await client.chat.completions.create({
    model: "gemini-2.0-flash-lite",
    messages: [
      { role: "system", content: "You are the virtual assistant for My Store. Respond briefly and kindly." },
      { role: "user", content: message }
    ]
  });

  return Response.json({
    reply: response.choices[0].message.content
  });
}
\`\`\`

**Important**: The API Key goes on the server (backend), NEVER on the frontend (the code the user sees).

### Option 3: Streaming (Real-Time Response)

Instead of waiting for the entire response to be ready, you can show it word by word (like ChatGPT does):

This requires a bit more setup but greatly improves the user experience. You use the \`stream: true\` parameter in the API call and process the chunks as they arrive.

### Production Considerations

**Security:**
- The API Key ALWAYS goes on the server, never on the frontend
- Validate and sanitize user input
- Implement rate limiting (maximum X requests per user per minute)

**User Experience:**
- Show a "typing..." indicator while the AI responds
- Handle errors gracefully: "Sorry, I couldn't process your request. Could you try again?"
- Add a "New conversation" button

**Legal:**
- Let users know the chat uses AI
- Include a disclaimer: "Responses are generated by AI and may contain errors"
- Comply with your country's privacy regulations

### Key Takeaways

- No-code widgets like Chatbase are the fastest way to get started
- For more control, use the API with your own interface
- The API Key ALWAYS goes on the server, never in the frontend code
- Streaming significantly improves the user experience`;

export const c12leccion7 = ``;
