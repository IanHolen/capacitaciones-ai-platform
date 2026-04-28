// English content for Course 10: Create Your Own AI Assistant
// 8 lessons — Advanced Level

export const c10leccion1 = `## What Are Custom GPTs and Claude Projects?

So far you've been using AI tools like ChatGPT or Claude by asking questions one at a time. But there's something much more powerful: **creating your own personalized assistant** that already knows who you are, what you need, and how you want it to respond.

### Custom GPTs (ChatGPT)

A **Custom GPT** is a personalized version of ChatGPT that you configure yourself. You can give it:

- **Specific instructions**: "You are a nutrition assistant that responds in English, briefly and with emojis"
- **Reference documents**: Upload a PDF with your weekly menu, your dietary restrictions, etc.
- **Actions**: It can connect to other tools (calendar, emails, databases)

It's like creating your own digital employee that comes pre-trained with the information you gave it.

### Claude Projects

**Claude Projects** works similarly but with a different approach:

- You create a "Project" where you group related conversations
- You upload documents that Claude can reference during the conversation
- You define "project instructions" that apply to all conversations within that project

### What's the Difference?

| Feature | Custom GPTs | Claude Projects |
|---|---|---|
| Platform | ChatGPT (OpenAI) | Claude (Anthropic) |
| Documents | Yes, uploaded to the GPT | Yes, added to the project |
| Instructions | Custom system prompt | Project instructions |
| Sharing | Can be published and shared | Only within your account |
| Cost | Requires ChatGPT Plus ($20/mo) | Limited free plan, Pro for more |
| Ideal for | Reusable assistants | Projects with lots of documentation |

### Why Would You Want Your Own Assistant?

Imagine these scenarios:

- **A business assistant** that knows your products, prices, and return policies
- **A personal tutor** that knows your English level and adapts the lessons
- **A legal assistant** that has your company's contracts loaded
- **A personal chef** that knows your allergies and food preferences

The advantage is that you don't have to repeat all your information every time you start a conversation.

### Requirements

- For Custom GPTs: ChatGPT Plus account ($20/mo) or Team/Enterprise
- For Claude Projects: free account (limited) or Pro ($20/mo)
- Documents must be in common formats: PDF, TXT, DOCX, CSV

### Key Takeaways

- Custom GPTs and Claude Projects let you create personalized assistants
- You can give them instructions, documents, and personality
- They eliminate the need to repeat context in every conversation
- They're the first step toward building AI solutions for your business`;

export const c10leccion2 = `## Create Your First Custom GPT Step by Step

Let's create a Custom GPT from scratch. By the end of this lesson, you'll have your own assistant up and running.

### Step 1: Access the GPT Creator

1. Go to **chatgpt.com** and sign in
2. In the left sidebar, look for **"Explore GPTs"** or **"GPTs"**
3. Click on **"Create"** in the upper right corner
4. The editor opens with two tabs: **"Create"** and **"Configure"**

### Step 2: The "Create" Tab (Easy Mode)

The Create mode lets you configure your GPT by chatting with ChatGPT. Simply describe what you want:

> "I want an assistant that helps me write professional emails in English. It should be formal but not cold, and always offer 2 versions: a short one and a detailed one."

ChatGPT will ask you questions to refine your GPT:
- What's its name?
- What tone should it have?
- Is there anything it should NOT do?

### Step 3: The "Configure" Tab (Detailed Mode)

Here you have full control:

**Name**: Your GPT's name (e.g., "Professional Email Assistant")

**Description**: A short phrase explaining what it does

**Instructions**: The heart of your GPT. Here you write exactly how it should behave:

\`\`\`
You are a professional email writing assistant.

RULES:
- Always offer 2 versions: short (maximum 3 sentences) and detailed
- Use professional but friendly English
- Never include information the user didn't provide
- If context is missing, ask before writing
- Always end by asking: "Would you like me to adjust anything?"

FORMAT:
**Short version:**
[brief email]

**Detailed version:**
[complete email]
\`\`\`

**Conversation starters**: Example phrases that appear when someone opens your GPT:
- "I need to politely decline a meeting"
- "Help me ask for a raise"
- "I want to complain about a defective service"

**Knowledge**: This is where you upload documents (we'll cover this in Lesson 4)

**Capabilities**: You can enable web browsing, image generation, and code execution

### Step 4: Test Your GPT

On the right panel, there's a real-time preview. Try different questions and adjust the instructions until you're satisfied.

### Step 5: Save

Click **"Save"** and choose:
- **Only me**: Only you can use it
- **Anyone with a link**: Anyone with the link
- **Everyone**: Published in the GPT store

### Complete Example

Let's create a GPT called **"My AI Nutritionist"**:

- **Name**: My AI Nutritionist
- **Description**: Personalized healthy eating assistant
- **Instructions**: "You are a friendly nutritionist. You respond in English. You always ask about allergies before making recommendations. You use lists with emojis. You don't replace a real professional — always clarify that."

### Key Takeaways

- Creating a Custom GPT takes less than 15 minutes
- The "Create" mode is easier; the "Configure" mode gives more control
- Instructions are the most important part — spend time on them
- Always test your GPT before sharing it`;

export const c10leccion3 = `## Configuring Custom Instructions

Instructions are the soul of your assistant. They're the rules that define how it thinks, responds, and behaves. Good instructions make the difference between a mediocre assistant and an excellent one.

### The Structure of Good Instructions

Use this template as a starting point:

\`\`\`
## Identity
You are [who it is], specialized in [what it does].

## Audience
Your typical user is [user description].

## Behavior Rules
- [Rule 1]
- [Rule 2]
- [Rule 3]

## Response Format
[How it should structure responses]

## What It Should NEVER Do
- [Restriction 1]
- [Restriction 2]

## Error Handling
When you don't know something, say: "[specific phrase]"
\`\`\`

### Real Example: Customer Service Assistant

\`\`\`
## Identity
You are the virtual assistant for "Cafe Don Pedro", an artisan coffee shop in Buenos Aires.

## Audience
Customers who want to place orders, ask about the menu, or resolve delivery questions.

## Rules
- Always greet warmly
- Only respond about our products and services
- If they ask something outside your scope, say: "For that, I recommend contacting our team at info@cafedonpedro.com"
- Prices are in Argentine pesos
- Business hours: Monday to Saturday from 8 AM to 8 PM

## Format
- Short responses (maximum 4 sentences)
- Use bullet points to list options
- End with a question: "Can I help you with anything else?"

## NEVER
- Make up products we don't have
- Give information about competitors
- Offer discounts that don't exist
- Process payments directly

## When You Don't Know
"I don't have that information available. Would you like me to connect you with our team?"
\`\`\`

### Advanced Instruction Techniques

**1. Forced Chain of Thought**
> "Before responding, think step by step: 1) What is the user asking? 2) Do I have the necessary information? 3) Is my response accurate?"

**2. Included Examples (Few-Shot)**
> "Example of a good response: 'Our specialty coffee has chocolate and walnut notes. Would you prefer whole bean or ground?'"

**3. Dynamic Variables**
> "If the user mentions their name, use it in responses. If they say 'I'm Maria', respond 'Maria, let me tell you...'"

**4. Calibrated Tone**
> "Tone: professional but approachable. Like a friendly barista who knows their craft. Avoid being robotic or overly formal."

### Common Instruction Mistakes

| Mistake | Example | Fix |
|---|---|---|
| Too vague | "Be nice" | "Use a warm tone, include the customer's name, and end with a question" |
| Contradictory | "Be brief" + "Explain everything in detail" | Define when to be brief and when to be detailed |
| No limits | "Answer everything" | "Only answer about [topic]. For everything else, redirect to [resource]" |
| No formatting | (nothing) | "Use bullet points, bold for key concepts, and short paragraphs" |

### Key Takeaways

- Well-written instructions are the key to a good assistant
- Use the 6-section template as a starting point
- Include concrete examples and clear restrictions
- Iterate: test, find issues, and adjust the instructions`;

export const c10leccion4 = `## Uploading Documents as a Knowledge Base

Your assistant is only as good as the information it has. By uploading documents, you give it access to specific data it doesn't have by default — like your product catalog, your internal procedures, or your customer history.

### How Does It Work?

When you upload a document to your Custom GPT or Claude Project, the AI can:

1. **Search for information** within the document when you ask a question
2. **Cite** relevant parts of the document in its responses
3. **Combine** information from multiple documents
4. **Summarize** specific sections

### Supported Formats

| Format | Custom GPTs | Claude Projects |
|---|---|---|
| PDF | ✅ | ✅ |
| TXT | ✅ | ✅ |
| DOCX | ✅ | ✅ |
| CSV | ✅ | ✅ |
| Images | ✅ (with vision) | ✅ |
| HTML | ✅ | ✅ |
| JSON | ✅ | ✅ |

### Step by Step: Uploading Documents in Custom GPTs

1. Open your GPT in edit mode (Configure)
2. Find the **"Knowledge"** section
3. Click **"Upload files"**
4. Select your files (maximum 20 files, 512MB total)
5. Save your changes

### Step by Step: Uploading Documents in Claude Projects

1. Go to **claude.ai** and open your project
2. In the side panel, find **"Project knowledge"**
3. Click **"Add content"**
4. You can upload files or paste text directly
5. The content becomes available for all conversations in the project

### Best Practices for Documents

**1. Organize the Information**
- One document per topic is better than one giant document
- Use clear headings and numbered sections
- Include a table of contents if the document is long

**2. Clean Formats**
- PDFs with selectable text (not scanned)
- CSVs with clear headers in the first row
- Text without weird formatting or special characters

**3. Updates**
- Review your documents periodically
- If prices change, update the catalog
- Remove outdated documents

### Practical Example: Tech Support Assistant

Documents you would upload:

1. **FAQ.pdf** — Frequently asked questions and their answers
2. **product-manual.pdf** — Complete product manual
3. **troubleshooting.csv** — Table of common problems and solutions
4. **return-policy.txt** — Warranty and return policies

With these 4 documents, your assistant can handle 80% of support inquiries without human intervention.

### Important Limitations

- The AI doesn't "memorize" the documents — it searches them every time it needs to
- Very long documents may not be fully processed
- Sensitive information (customer data, passwords) should NOT be uploaded
- Documents don't update themselves — you have to replace them

### Key Takeaways

- Documents turn your assistant into a domain expert
- Use clean, organized formats
- Separate information by topic into different files
- Never upload sensitive or confidential information
- Update documents when information changes`;

export const c10leccion5 = `## Connecting Your Assistant to Real Data (Basic RAG)

So far your assistant works with static documents you uploaded. But what happens if you need it to access information that constantly changes? That's where **RAG** (Retrieval-Augmented Generation) comes in.

### What Is RAG?

**RAG** is a technique that combines two things:

1. **Retrieval**: Searching for relevant information in a database
2. **Generation**: Using that information to generate a response

In simple terms: instead of the AI answering from memory, it first looks up the current information and then responds based on what it found.

### Analogy

Imagine a librarian:
- **Without RAG**: They answer from memory. Sometimes they remember correctly, sometimes they make things up.
- **With RAG**: Before answering you, they look up the exact data in the books, and then explain it to you.

### When Do You Need RAG?

- Your information changes frequently (prices, stock, news)
- You have more documents than will fit in a Custom GPT
- You need precise answers based on up-to-date data
- You want to reduce AI "hallucinations"

### Simplified RAG: No-Code Options

You don't need to be a programmer to use RAG. These tools make it accessible:

**1. ChatGPT with Web Search**
- Enable "Browse with Bing" in your Custom GPT
- The GPT searches the internet before responding
- Useful for information that changes (weather, news, prices)

**2. Claude with Large Documents**
- Claude can process up to 200,000 tokens (equivalent to ~150,000 words)
- Upload large documents directly to the project
- Claude automatically searches them when responding

**3. Specialized Tools**
- **CustomGPT.ai**: Creates chatbots with RAG from a URL or documents
- **Chatbase**: Similar, focused on websites
- **Notion AI**: RAG integrated into your Notion workspace

### The Concept of Embeddings (Simplified)

When you use RAG, information is converted into **embeddings** — numerical representations of text that allow searching by meaning, not just exact words.

Example:
- You search: "How much does the coffee cost?"
- The system finds: "Our specialty coffee is priced at $3,500"
- It works because both phrases talk about the same concept, even though they use different words

### Practical Example

You want to create an assistant for your online store that answers product questions:

1. **Export your catalog** to a CSV (name, description, price, stock)
2. **Upload it** to your Custom GPT or RAG tool
3. **Configure the instructions**: "When someone asks about a product, search the catalog and respond with the name, price, and availability"
4. **Result**: A customer asks "Do you have Colombian coffee?" and your assistant responds with real data from your catalog

### Key Takeaways

- RAG allows your assistant to access up-to-date information
- You don't need to code — there are no-code tools available
- It's especially useful when information changes frequently
- It significantly reduces AI hallucinations`;

export const c10leccion6 = `## Testing and Improving Your Assistant

You've created your assistant, given it instructions, and uploaded documents. Now comes the most important part: **testing it as if you were a real user** and improving it based on what you find.

### The Continuous Improvement Cycle

\`\`\`
Test → Identify Problems → Adjust Instructions → Test Again
\`\`\`

This cycle never truly ends. You'll always find ways to improve your assistant.

### How to Test Effectively

**1. Test the Happy Path**
Ask the questions you expect your users to ask:
- "How much does product X cost?"
- "What are your business hours?"
- "I want to place an order"

**2. Test Edge Cases**
Ask difficult, ambiguous, or unexpected questions:
- "Are you a robot?"
- "Talk to me in French"
- "I want to complain about everything"
- "What's your password?"

**3. Test the Restrictions**
Try to get your assistant to do things it should NOT do:
- Ask for information it doesn't have
- Ask it to talk about competitors
- Ask it to make up data

**4. Test with Real Users**
Ask a friend or colleague to use it without prior instructions. Observe:
- Do they understand how to use it?
- Are the responses useful?
- Do they get frustrated at any point?

### Common Problems and Solutions

| Problem | Likely Cause | Solution |
|---|---|---|
| Responses too long | Missing length limit | Add: "Maximum 4 sentences per response" |
| Makes up information | Insufficient documents | Add more documents + instruction "If you don't know, say you don't know" |
| Ignores instructions | Instructions too long | Simplify and prioritize the most important ones |
| Inconsistent tone | Lack of examples | Add 2-3 examples of ideal responses |
| Doesn't use documents | Poorly formatted documents | Reformat with clear headings and structure |

### Metrics to Evaluate

- **Useful response rate**: How many responses actually solved the question?
- **Escalation rate**: How many times did it have to hand off to a human?
- **Satisfaction**: Were users happy?
- **Accuracy**: Were the responses correct?

### Key Takeaways

- Testing is just as important as creating
- Test the happy path, edge cases, and restrictions
- Get feedback from real users
- Iterate constantly: small tweaks make big differences`;

export const c10leccion7 = `## Sharing Your Assistant with Others

You've got a tested and polished assistant. Now it's time to put it to work for others — your team, your clients, or the whole world.

### Distribution Options in Custom GPTs

**1. Private (Only for You)**
- No one else can access it
- Ideal for personal assistants or works in progress

**2. With a Link (Anyone with a Link)**
- Anyone with the link can use it
- Doesn't appear in the public store
- Ideal for sharing with your team or specific clients

**3. Public (Everyone)**
- Available in OpenAI's GPT store
- Anyone can find and use it
- Ideal if you want exposure

### How to Share

1. Open your GPT in edit mode
2. Click **"Save"**
3. Choose the access level
4. Copy the generated link
5. Share it via email, WhatsApp, or wherever you need

### Distribution in Claude Projects

Claude Projects are currently more private:
- They're only available within your account
- You can share individual conversations via link
- For team use, you need a Team plan

### Embedding Your Assistant on a Website

If you want your assistant available on your web page:

**Option 1: ChatGPT Widget**
- Use tools like **Chatbase** or **CustomGPT.ai**
- They generate HTML code you paste on your site
- The chat appears as a floating widget

**Option 2: API + Custom Interface**
- More work but more control
- We cover this in detail in Course 12

### Important Considerations

**Privacy**
- Does your assistant handle sensitive customer data?
- Does it comply with your country's regulations?
- Do users know they're talking to AI?

**Costs**
- Custom GPTs require each user to have ChatGPT Plus
- API-based solutions have per-use costs
- Calculate costs before launching

**Maintenance**
- Someone needs to update documents periodically
- Instructions need adjustments based on feedback
- Monitor conversations to detect issues

### Case Study: Assistant for a Real Estate Agency

A real estate agency created a Custom GPT with:
- Property catalog updated weekly
- Instructions for qualifying leads (budget, area, property type)
- Available viewing schedules

**Result**: Reduced calls to the sales team by 40% because the assistant handled initial inquiries.

### Key Takeaways

- Choose the right access level for your use case
- Always let users know they're interacting with AI
- Consider privacy, costs, and maintenance before launching
- A well-configured assistant can save hours of human work`;

export const c10leccion8 = `## Quiz: Create Your Own AI Assistant

10 multiple choice questions. Choose the correct answer.

---

### Question 1
**What is a Custom GPT?**
a) A more expensive version of ChatGPT
b) A personalized version of ChatGPT with your own instructions and documents
c) A program you need to install on your computer
d) A physical robot that uses AI

**Correct answer: b)**
A Custom GPT is a personalized version that you configure with specific instructions, documents, and behavior.

---

### Question 2
**What is the most important part of a Custom GPT?**
a) The name
b) The profile picture
c) The instructions (system prompt)
d) The number of documents

**Correct answer: c)**
The instructions define how your assistant behaves and are the factor that most impacts the quality of responses.

---

### Question 3
**Which document format can NOT be uploaded to a Custom GPT?**
a) PDF
b) CSV
c) Video files (.mp4)
d) TXT

**Correct answer: c)**
Video files are not supported. You can upload PDFs, CSVs, TXT, DOCX, images, and other text formats.

---

### Question 4
**What does RAG stand for?**
a) Rapid Automatic Generation
b) Retrieval-Augmented Generation
c) Random Answer Generator
d) Real Artificial General intelligence

**Correct answer: b)**
RAG stands for Retrieval-Augmented Generation: searching for relevant information before generating a response.

---

### Question 5
**What is the main advantage of RAG over static documents?**
a) It's cheaper
b) It allows access to up-to-date information
c) It doesn't require internet
d) It works without AI

**Correct answer: b)**
RAG allows the assistant to access up-to-date data in real time, while static documents only reflect information from the moment they were uploaded.

---

### Question 6
**What should you do FIRST when testing your assistant?**
a) Publish it in the store
b) Share it with thousands of people
c) Test it with expected questions (happy path)
d) Delete all the instructions

**Correct answer: c)**
First, test with the questions you expect your users to ask to verify that basic responses work well.

---

### Question 7
**If your assistant makes up information it doesn't have, what should you do?**
a) Add more documents and an instruction saying "if you don't know, say you don't know"
b) Restart the computer
c) Change the GPT's name
d) It can't be fixed

**Correct answer: a)**
The combination of more reference documents and an explicit instruction to acknowledge limitations is the best solution.

---

### Question 8
**What data should you NEVER upload as a document to your assistant?**
a) Your product catalog
b) Frequently asked questions
c) Passwords and customers' banking data
d) Company policies

**Correct answer: c)**
Never upload sensitive information like passwords, banking data, or third-party personal information.

---

### Question 9
**What is an embedding in the context of RAG?**
a) A file attachment
b) A numerical representation of text that allows searching by meaning
c) An image inserted in the document
d) A link to another document

**Correct answer: b)**
Embeddings convert text into numbers that represent its meaning, allowing searches by concept in addition to exact words.

---

### Question 10
**What is the correct cycle for improving an assistant?**
a) Create → Publish → Forget about it
b) Test → Identify problems → Adjust instructions → Test again
c) Copy instructions from another GPT → Publish
d) Upload more documents without testing

**Correct answer: b)**
The continuous improvement cycle (test, identify, adjust, repeat) is the correct way to maintain a quality assistant.

---

### How Did You Do?

- **8-10 correct**: Excellent. You're ready to create professional assistants.
- **5-7 correct**: Good. Review the lessons where you had doubts.
- **Less than 5**: Go back and re-read the lessons carefully.`;
