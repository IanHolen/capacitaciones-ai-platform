// English content for Course 9: AI Workflows

export const c9leccion1 = `## Prompt Chaining: Breaking It Down into Steps

### The Problem with the Giant Prompt

When you already have experience using AI, it's tempting to write one massive prompt that tries to solve everything at once. Something like:

*"Research solar energy in Argentina, write an executive summary, draft a 2000-word report with introduction, body, and conclusion, add statistical data, and then create 3 LinkedIn posts."*

The result is usually... mediocre. The AI tries to do everything at the same time and no part ends up really good. It's like asking someone to cook, clean, do the shopping, and pay the bills -- all simultaneously.

### What Is Prompt Chaining?

**Prompt chaining** is a technique where you divide a complex task into sequential steps. Each step produces a result that feeds into the next.

Instead of a single prompt that does everything, you use a **chain** of prompts where:

1. **Step 1** produces an intermediate result
2. That result becomes the **input for step 2**
3. Step 2 produces another result that feeds **step 3**
4. And so on

### Why Does It Work Better?

- **Focus**: Each prompt has a single clear objective
- **Quality**: The AI can dedicate all its capacity to one specific task
- **Control**: You can review and adjust each step before continuing
- **Debugging**: If something goes wrong, you know exactly where it failed
- **Reusability**: You can reuse individual steps in other workflows

### Practical Example: From Research to Report

Let's see how to transform that giant prompt into an effective chain.

**Step 1 -- Research:**
\`\`\`
Act as a researcher specializing in renewable energy.
Research the current state of solar energy in Argentina.
List the 8-10 most relevant data points, including:
- Current installed capacity
- Major ongoing projects
- Regulatory framework
- Comparison with other countries in the region
Cite sources when possible.
\`\`\`

**Step 2 -- Structure** (use the step 1 response as context):
\`\`\`
Based on the following research:
[paste step 1 result]

Create a detailed outline for an executive report with:
- Proposed title
- 5-6 main sections with subtitles
- Key points to cover in each section
- Logical order of presentation
\`\`\`

**Step 3 -- Writing** (use the step 2 outline):
\`\`\`
Using the following outline:
[paste step 2 result]

And this research data:
[paste step 1 result]

Write the complete report. Use a professional but accessible tone.
Length: approximately 2000 words.
Include concrete data and statistics.
\`\`\`

**Step 4 -- Review:**
\`\`\`
Review the following report as a professional editor:
[paste step 3 result]

Check:
- Coherence between sections
- That there are no contradictory data
- Clarity of writing
- That the conclusion wraps up properly

Suggest concrete improvements with the corrected text.
\`\`\`

**Step 5 -- Derivative content:**
\`\`\`
Based on this report:
[paste step 4 result]

Create 3 LinkedIn posts:
- Each one 150-200 words
- Focused on a different aspect of the report
- With an opening hook that captures attention
- With a call to action at the end
\`\`\`

### Template for Designing Your Own Chain

Before starting any complex task, fill out this template:

| Step | Objective | Input | Expected output |
|------|----------|-------|-----------------|
| 1 | What do you want to achieve? | What initial information do you have? | What result do you need? |
| 2 | ... | Result from step 1 + ... | ... |
| 3 | ... | Result from step 2 + ... | ... |

### When to Use Chaining vs. a Single Prompt

**Use a single prompt when:**
- The task is simple and straightforward
- You don't need to review intermediate steps
- The result is short (a paragraph, a list, a specific answer)

**Use chaining when:**
- The task has multiple distinct stages
- You need quality control at each step
- The final result is long or complex
- Different steps require different "roles" from the AI
- You want to be able to reuse individual steps

### Advanced Tips

1. **Save intermediate results**: Copy them into a separate document. If a step fails, you don't have to start over from scratch.

2. **Adjust along the way**: If step 2 doesn't convince you, you can ask for a variation before moving to step 3.

3. **Mix models**: You can use one model for research (Claude, for example) and another for writing (ChatGPT), leveraging each one's strengths.

4. **Automate with tools**: If you repeat the same chain frequently, tools like Zapier, Make, or even a simple script can chain the steps automatically.

### Takeaways

- Prompt chaining breaks complex tasks into manageable steps
- Each step produces a result that feeds the next one
- It gives you more control, better quality, and the ability to debug errors
- Use it whenever the task has more than one clearly different stage`;

export const c9leccion2 = `## Memory and Projects in ChatGPT/Claude

### The Memory Problem

Have you ever explained to the AI who you are, what you do, and what you need... only to open a new conversation and have to explain everything all over again? That's because, by default, **every AI conversation starts from scratch**.

It's like going to the doctor and having to tell your entire medical history from birth every single time. Frustrating, right?

Fortunately, the main AI tools now have ways to "remember" information between conversations. Let's see how each one works.

### How Memory Works in ChatGPT

ChatGPT has two main memory mechanisms:

**1. Automatic Memory**

ChatGPT can remember details you mention in conversations. For example, if you say *"I'm a history teacher at a high school"*, it can remember that for future conversations.

You can manage this memory from **Settings -> Personalization -> Memory**:
- See everything ChatGPT remembers about you
- Delete specific memories
- Disable memory completely

**2. Custom Instructions**

This is the most powerful feature. Go to **Settings -> Personalization -> Custom Instructions** and fill in two fields:

*"What would you like ChatGPT to know about you?"*
\`\`\`
I'm a marketing manager at a mid-sized tech company
in New York. I manage a team of 5 people. My main audience
is B2B companies in the financial sector. I prefer
communications that are formal but not stiff.
\`\`\`

*"How would you like ChatGPT to respond?"*
\`\`\`
Be concise -- I prefer responses of 2-3 paragraphs max
unless I ask for more detail. Use bullet points when possible.
If you need more context to give a good answer, ask me
before assuming.
\`\`\`

These instructions are automatically applied to **all** your new conversations.

### Claude Projects: Organized Context

Anthropic's Claude has a different approach with **Projects**. A project is a workspace where you group:

**Project instructions:**
These are like ChatGPT's custom instructions, but specific to a topic. For example, you can have:
- A "Marketing" project with brand tone instructions
- A "Data Analysis" project with report format instructions
- A "Personal" project with more informal instructions

\`\`\`
Example project instructions:

You are my assistant for the XYZ product launch project.
The target audience is: mid-sized logistics companies (50-500 employees)
in the US, Canada, and Mexico.
Our brand tone is: professional, innovative, direct.
The launch date is July 15.
All communications must include the slogan "Smart Logistics."
\`\`\`

**Context documents:**
You can upload files that Claude can reference during project conversations:
- PDFs of previous reports
- Brand documents
- Spreadsheets with data
- Reference texts

The advantage is you don't have to paste these documents into every conversation. Claude has them available automatically.

### Gemini: Extensions and Context

Google Gemini handles context differently:

- **Extensions**: Gemini can connect to your Google services (Gmail, Drive, Maps, YouTube, etc.) and access that information during the conversation
- **Gems**: You can create personalized versions of Gemini with specific instructions, similar to Custom GPTs

For example, you can ask Gemini: *"Search my Gmail for the latest emails about the Aurora project and summarize them"* -- and it does it directly because it has access to your Gmail.

### Best Practices for Maintaining Context

**1. Be explicit at the start of every complex conversation:**
\`\`\`
We're working on [project X]. We've already completed [steps A and B].
Now I need your help with [step C].
Relevant context: [key data]
\`\`\`

**2. Use summaries of previous conversations:**

Before closing a long conversation, ask the AI:
\`\`\`
Summarize this conversation in one paragraph. Include:
- What topic we worked on
- What decisions we made
- What's still pending
I'm going to use this summary to pick up where we left off next time.
\`\`\`

Copy that summary and use it as the start of the next conversation.

**3. Create a master "context document":**

Maintain a file with information you always need to give the AI:
- Your role and responsibilities
- Your industry and audience
- Format and tone preferences
- Data you use frequently

Paste it at the start of important conversations or upload it as a project document.

### When to Start a New Conversation

**Start a new conversation when:**
- You're completely changing topics
- The current conversation has gotten very long (more than 30-40 messages)
- The AI starts "forgetting" things you said earlier
- You want a fresh approach without biases from the previous conversation

**Stay in the same conversation when:**
- You're iterating on the same document or idea
- You need the AI to remember decisions made earlier
- You're in the middle of a prompt chaining workflow

### Takeaways

- Each tool has its own way of maintaining context between sessions
- ChatGPT's Custom Instructions apply to all conversations
- Claude Projects is ideal for grouping conversations by topic with shared documents
- Gemini connects directly to your Google services
- Always create a summary before closing a long conversation`;

export const c9leccion3 = `## Tokens and Context Windows

### What Is a Token?

Every time you write something to an AI, your text isn't processed as whole words. It gets broken down into smaller pieces called **tokens**.

A token is a unit of text that the model processes. It can be:
- A complete word: "hello" = 1 token
- Part of a word: "intelligence" = 3-4 tokens (something like "intel" + "lig" + "ence")
- A punctuation mark: "." = 1 token
- A space: usually grouped with the following word

**Practical rule for English:**
> 1 word ~ 1.3 tokens on average

This means a text of 1000 words in English consumes approximately 1,300 tokens.

### Concrete Examples

Let's see how many tokens different texts use:

| Text | Approx. words | Approx. tokens |
|------|--------------|----------------|
| A short chat message | 20 | 25 |
| A professional email | 150 | 195 |
| One page of a document | 300 | 390 |
| A 5-page report | 1,500 | 1,950 |
| A short novel | 50,000 | 65,000 |

### What Is the Context Window?

The **context window** is the maximum number of tokens a model can process in a single conversation. It includes **everything**: your prompt, the AI's response, and the entire conversation history.

Think of the context window as the AI's **working memory**. It's like a desk: if it's small, you can only have a few papers at a time. If it's large, you can have many documents open simultaneously.

### Limits by Model (2025)

| Model | Context window | Approximate equivalent |
|-------|---------------|----------------------|
| GPT-4o | 128,000 tokens | ~98,000 words (~350 pages) |
| GPT-4o mini | 128,000 tokens | ~98,000 words |
| Claude 3.5 Sonnet | 200,000 tokens | ~153,000 words (~540 pages) |
| Claude 3 Opus | 200,000 tokens | ~153,000 words |
| Gemini 1.5 Pro | 1,000,000 tokens | ~770,000 words (~2,700 pages) |
| Gemini 2.0 Flash | 1,000,000 tokens | ~770,000 words |

These numbers change frequently as models are updated, but they give you a sense of the magnitudes involved.

### How to Estimate Your Token Usage

**Quick method:**
1. Count the words in your text (most text editors do this)
2. Multiply by 1.3 for English
3. That's your approximate token consumption

**Precise method:**
- OpenAI has an online tokenizer: [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)
- For Claude, the estimate is similar (it uses a comparable tokenizer)

**Practical example:**

If you have a conversation with ChatGPT where:
- Your custom instruction has 200 words (~260 tokens)
- Your prompt has 500 words (~650 tokens)
- ChatGPT's response has 800 words (~1,040 tokens)
- And you've had 10 similar exchanges...

The total consumption would be approximately: 260 + (650 + 1,040) x 10 = **17,160 tokens**

With a 128,000-token window, you still have plenty of room. But if you pasted a 50-page document at the start, things change quickly.

### What Happens When You Exceed the Context Window?

When the conversation exceeds the token limit, different models react in different ways:

1. **Truncation**: The model "forgets" the oldest messages in the conversation. It's as if the first pages of a book were erased as you add new pages at the end.

2. **Error**: Some models simply reject the message if it exceeds the limit.

3. **Gradual degradation**: The model may start being less precise or coherent with information at the edge of its window.

**Signs you're reaching the limit:**
- The AI "forgets" instructions you gave at the beginning
- Responses become generic or repetitive
- The AI contradicts something it said earlier in the same conversation
- You receive an error message about length

### Strategies for Working Within the Limits

**1. Summarize before continuing:**

When a conversation gets long, ask the AI:
\`\`\`
Summarize everything we've discussed so far into the most
important points. I'm going to start a new conversation with
this summary as context.
\`\`\`

**2. Split long documents into chunks:**

Instead of pasting a 100-page document, split it up:
\`\`\`
I'm going to give you a document in parts. Wait until I say
"ready" before doing the analysis.

Part 1 of 5:
[text from the first 20 pages]
\`\`\`

**3. Prioritize what you include:**

Don't paste everything. Ask yourself:
- Does the AI really need all this text?
- Can I give it a summary instead of the full document?
- Can I extract just the relevant sections?

**4. Use file attachments when possible:**

Both ChatGPT and Claude allow file uploads. Processing attached files is sometimes more efficient than pasting text directly into the chat.

**5. Start new conversations strategically:**

Don't be afraid to start fresh. A new conversation with a good context summary usually works better than an exhausted 50-message conversation.

### A Note About Costs

If you use the API (application programming interface) of these models, cost is calculated per token:

- **Input tokens** (what you write): one price
- **Output tokens** (what the AI responds): generally 2-4 times more expensive

For most users who use ChatGPT Plus, Claude Pro, or Gemini Advanced with their monthly subscription, this isn't a direct concern. But it's good to understand that internally there's a cost per token, which explains why free plans have usage limits.

### Takeaways

- Tokens are the basic units that AI models process
- In English, 1 word ~ 1.3 tokens approximately
- The context window is the total token limit per conversation
- When you exceed the limit, the AI loses information from the start of the conversation
- Use summaries, chunks, and prioritization to maximize your context window
- Gemini has the largest window, but for most tasks 128K-200K is sufficient`;

export const c9leccion4 = `## Evaluations: How Do You Know If a Prompt Is Good?

### The Problem Nobody Talks About

You already know how to write prompts. You already know how to chain them. But there's a question that many AI users ignore: **how do you know if your prompt actually works well?**

Just because the AI returns a response doesn't mean it's a good response. And just because the response "sounds" good doesn't mean it's accurate, complete, or consistent.

Evaluating your prompts is what separates someone who "uses AI" from someone who **uses AI professionally**.

### Manual Evaluation: Rubrics and Checklists

The simplest way to evaluate a prompt is to create a **rubric** -- a list of criteria with scores.

**Example rubric for a writing prompt:**

| Criterion | 1 (Poor) | 3 (Acceptable) | 5 (Excellent) |
|----------|----------|----------------|----------------|
| Accuracy | Incorrect data | Mostly correct | Totally accurate |
| Completeness | Missing key info | Covers the basics | Covers everything requested |
| Tone | Doesn't match request | Close to desired tone | Exactly the tone requested |
| Format | Doesn't follow format | Partial format | Perfect format |
| Usability | Can't use as-is | Needs minor editing | Ready to use |

After each AI response, score each criterion and add them up. If the total is less than 15 (out of 25 possible), your prompt needs adjustments.

### Consistency Test: Run the Same Prompt 3+ Times

This is one of the most revealing and easiest tests to run.

**Procedure:**
1. Take your exact prompt
2. Run it in 3 different new conversations
3. Compare the 3 responses

**What are you looking for?**
- **All 3 responses are similar**: Your prompt is specific and consistent. Good.
- **All 3 responses are completely different**: Your prompt is too vague. The AI is guessing what you want.
- **2 are similar and 1 is different**: Your prompt is mostly good but has some ambiguity.

**Practical example:**

Vague prompt:
\`\`\`
Write something about digital marketing.
\`\`\`
-> Result: 3 completely different texts in topic, tone, length, and focus.

Specific prompt:
\`\`\`
Write a 100-word paragraph explaining what email
marketing is for a small business owner who has never used it.
Tone: professional but friendly. Include a relevant statistic.
\`\`\`
-> Result: 3 texts with the same structure, tone, and type of content (though with natural variations in exact wording).

### A/B Test: Compare Two Versions

You have a prompt that works well, but could it be better? Try a variation:

**Version A (your current prompt):**
\`\`\`
Summarize this article in 3 bullet points.
\`\`\`

**Version B (variation):**
\`\`\`
You are a senior editor at a business magazine. Summarize this
article in exactly 3 bullet points. Each bullet must
be 20 words maximum and capture a different main idea.
Start each bullet with an action verb.
\`\`\`

Run both versions with the same input 3 times each. Evaluate with your rubric. The one with the better average score is your winner.

### Key Metrics for Evaluation

Depending on the task type, prioritize different metrics:

**For information/research tasks:**
- **Accuracy**: Are the data correct and verifiable?
- **Completeness**: Did it cover all requested aspects?
- **Timeliness**: Is the information recent and relevant?

**For writing/creation tasks:**
- **Tone**: Does it match what you asked for?
- **Structure**: Does it follow the indicated format?
- **Originality**: Is it not generic or repetitive?
- **Usability**: Can you use it as-is or does it need heavy editing?

**For analysis tasks:**
- **Depth**: Does it go beyond the surface level?
- **Logic**: Do the conclusions follow from the premises?
- **Perspective**: Did it consider multiple angles?

### Build Your Own Evaluation Framework

Here's a simple system you can adopt today:

**Step 1 -- Define your criteria** (choose 3-5 from the list above, based on your task)

**Step 2 -- Create your scale** (1-5 is the most practical)

**Step 3 -- Test:**
\`\`\`
For each prompt you want to evaluate:
1. Run it 3 times in new conversations
2. Score each response with your rubric
3. Calculate the average
4. If the average is < 3, rewrite the prompt
5. If the average is 3-4, adjust details
6. If the average is > 4, save it to your library
\`\`\`

**Step 4 -- Record results in a simple table:**

| Prompt | Version | Run 1 | Run 2 | Run 3 | Average | Notes |
|--------|---------|-------|-------|-------|---------|-------|
| Article summary | A | 3.2 | 3.5 | 3.0 | 3.23 | Lacks structure |
| Article summary | B | 4.5 | 4.2 | 4.8 | 4.50 | Much better |

### Common Failure Modes and How to Diagnose Them

**1. "The AI hallucinates" (invents false data)**
- **Likely cause**: The prompt asks for very specific information without providing sources
- **Solution**: Add "If you're not sure about a piece of data, indicate it" or provide reference sources

**2. "Responses are too generic"**
- **Likely cause**: Missing context or specificity in the prompt
- **Solution**: Add role, audience, format, examples

**3. "It doesn't follow the format I asked for"**
- **Likely cause**: Format instructions are at the end or are ambiguous
- **Solution**: Put format instructions at the beginning and be explicit. Include an example of the desired format.

**4. "Sometimes it works well and sometimes it doesn't"**
- **Likely cause**: The prompt has ambiguities that the AI interprets differently each time
- **Solution**: Run the consistency test. Identify which part varies and make it more specific.

**5. "The response is too long/short"**
- **Likely cause**: You didn't specify the desired length
- **Solution**: Indicate expected words, paragraphs, or bullet points

### Takeaways

- Evaluating your prompts is as important as writing them
- Use rubrics for objective evaluations, not just "I liked it" or "I didn't"
- The consistency test (3 runs) reveals whether your prompt is specific enough
- A/B testing helps you improve prompts iteratively
- Diagnose common problems with the solutions from this lesson
- A simple evaluation framework saves you time in the long run`;

export const c9leccion5 = `## Building Your Personal Prompt Library

### Why Save Your Prompts?

Think about how many times you've done something like this:

1. You wrote an excellent prompt that gave you exactly what you needed
2. You closed the conversation
3. Two weeks later you needed to do something similar
4. You can't remember exactly what you wrote
5. You spend 20 minutes trying to recreate it... and it never turns out as good

Sound familiar? It happens to everyone.

Your best prompts are **intellectual assets**. They're the result of trial and error. Saving them is like saving a great cooking recipe: the next time you need it, you just pull it out and use it.

### Organize by Categories

The first step is to define categories that make sense for your life. Here's a structure that works for most people:

**Work**
- Emails and communications
- Reports and documents
- Data analysis
- Presentations
- Project management

**Personal Productivity**
- Planning and organization
- Decision making
- Learning and studying

**Content Creation**
- Social media
- Blog / articles
- Video scripts
- Newsletters

**Analysis and Research**
- Researching a topic
- Comparing options
- Summarizing documents

### The Ideal Format for Saving a Prompt

Each saved prompt should have these fields:

\`\`\`
NAME: Executive article summary
CATEGORY: Work > Reports
PURPOSE: Convert a long article into an executive summary
   of 3-5 bullet points to share with the team

PROMPT:
---
You are a senior analyst in [INDUSTRY]. Read the following article
and create an executive summary with:
- 3-5 bullet points of 25 words maximum each
- A conclusion paragraph of 50 words maximum
- One concrete action recommendation

Tone: professional and direct.
Audience: executives who have 2 minutes to read.

Article:
[PASTE ARTICLE HERE]
---

VARIABLES:
- [INDUSTRY]: Change according to sector (technology, finance, health, etc.)
- [PASTE ARTICLE HERE]: The text to summarize

NOTES:
- Works best with articles of 500-3000 words
- For longer articles, split into sections
- Version 3 -- improved on 03/15/2025 (added the action
  recommendation that was missing in v2)
- Average evaluation score: 4.3/5

RATING: 4/5 stars
\`\`\`

### Where to Save Your Prompts

There are several options, each with advantages:

**1. Notes App (Apple Notes, Google Keep)**
- Simple, fast, accessible from your phone
- Built-in search
- Hard to organize if you have many prompts
- Ideal for: getting started, fewer than 20 prompts

**2. Notion**
- Database with filters, categories, and tags
- Can be shared with team
- Reusable templates
- Initial learning curve
- Ideal for: intermediate/advanced users, teams

Example Notion database:

| Name | Category | Rating | Last updated | Tags |
|------|----------|--------|-------------|------|
| Executive summary | Work | 4/5 | 03/15/2025 | summary, article |
| LinkedIn post | Content | 5/5 | 03/20/2025 | social, LinkedIn |
| SWOT analysis | Analysis | 3/5 | 02/10/2025 | strategy, business |

**3. Google Docs**
- Familiar to most people
- Easy to share
- Automatic version history
- No database structure
- Ideal for: those already living in Google Workspace

**4. Spreadsheet (Google Sheets / Excel)**
- Easy to filter and sort
- Can create metrics (average ratings, prompts per category)
- Not comfortable for long prompts
- Ideal for: teams that need a quick catalog

### Versioning: Track the Evolution of Your Prompts

Prompts improve over time. It's important to keep a record:

\`\`\`
Prompt: Client follow-up email
Version 1.0 (02/01/2025): Initial basic version
Version 1.1 (02/15/2025): Added more empathetic tone
Version 2.0 (03/01/2025): Complete restructure with variables
Version 2.1 (03/20/2025): Minor adjustment to the closing
\`\`\`

**Versioning tips:**
- **Minor change** (1.0 -> 1.1): Tone, format, or specific word adjustments
- **Major change** (1.x -> 2.0): Prompt restructuring, change of approach
- Always save the previous version (in case the new one is worse)
- Note **why** you made the change, not just what you changed

### Share Prompts with Your Team

If you work on a team, sharing prompts multiplies the value:

**1. Create a shared repository:**
- A shared folder in Google Drive or Notion
- Define a standard format (like the one we saw above)
- Designate who can add and who can edit

**2. Exchange sessions:**
- Once a month, gather the team for 30 minutes
- Each person shares their best prompt of the month
- Vote on which ones to add to the shared repository

**3. Document the context:**
- Sharing just the prompt text isn't enough
- Explain what it's for, when to use it, and when NOT to use it
- Include examples of good and bad results

**Prompt to start your library right now:**
\`\`\`
Help me create a prompt library template.
I need a structure in [Notion/Google Sheets/other] with
the following columns:
- Prompt name
- Category (with these options: Work, Content, Analysis,
  Personal, Other)
- The prompt text
- Variables to replace
- Rating (1-5 stars)
- Current version
- Last updated date
- Notes

Create the structure and 3 completed example prompts
so I can see how to use it.
\`\`\`

### Takeaways

- Your best prompts are assets that deserve to be saved and organized
- Use a standard format: name, purpose, prompt, variables, notes
- Choose the tool you already use (Notes, Notion, Google Docs, spreadsheet)
- Version your prompts and note why you changed each version
- Sharing prompts with your team multiplies the value for everyone
- Start today: save your 5 best prompts using the format you learned`;

export const c9leccion6 = `## Project: Create a Complete Workflow

### Your Challenge

The time has come to integrate everything you've learned in this course. You're going to design and execute a **complete AI workflow** -- from the initial idea to the final result.

This is not a theoretical exercise. You're going to create something real that you can use in your work or personal life.

### Choose Your Scenario

You have three options. Choose the one that most closely resembles something you actually need:

---

**Option 1: Research Assistant**

*Ideal for: analysts, students, consultants, journalists*

Workflow: Topic -> Sources -> Summary -> Final report

Result: A professional research report on a topic of your interest.

---

**Option 2: Content Creator**

*Ideal for: marketers, entrepreneurs, communicators, freelancers*

Workflow: Idea -> Outline -> Draft -> Editing -> Social media posts

Result: A complete article + 3 social media posts.

---

**Option 3: Data Analyst**

*Ideal for: managers, analysts, business owners*

Workflow: Raw data -> Cleaning -> Analysis -> Visualization -> Report

Result: An analysis report with conclusions and recommendations.

---

### Complete Walkthrough: Option 2 (Content Creator)

Let's walk through Option 2 step by step so you can see how a real workflow is built. Afterward, you can adapt this model for any option.

#### Step 1: Generate and Validate the Idea

\`\`\`
I'm a [your role, e.g., marketing manager at a fintech in Colombia].
My audience is [describe your audience, e.g., finance professionals
aged 30-50 in Latin America].

I need an article for the company blog. The general topic
is [your topic, e.g., artificial intelligence in the financial sector].

Generate 5 article ideas that:
- Are relevant to my audience
- Have an original angle (not the same thing they've read 100 times)
- Can rank well in search engines
- Are feasible to write in 1500-2000 words

For each idea include:
- Tentative title
- Why my audience would care
- 3 key points it would cover
\`\`\`

**Review the result.** Choose the idea you like most. If none convince you, ask for 5 more or indicate which direction you prefer.

#### Step 2: Create the Outline

\`\`\`
I chose idea number [X]: "[title]"

Create a detailed outline for this article with:
- Final title optimized for SEO
- Meta description (155 characters max)
- H2 and H3 for each section
- For each section: 2-3 points to cover
- Suggestions for data/statistics to include
- Type of closing (CTA, reflection, open question)

The tone should be: professional but approachable, without unnecessary jargon.
Target length: 1800 words.
\`\`\`

**Review the outline.** Does the logical order make sense? Is any section missing? Ask for adjustments before continuing.

#### Step 3: Write the Draft

\`\`\`
Using the following outline:
[paste step 2 outline]

Write the complete article. Follow these guidelines:
- Length: approximately 1800 words
- Start with a hook that captures attention in the first
  2 sentences
- Use short paragraphs (3-4 sentences maximum)
- Include at least 2 concrete examples or use cases
- Use subheadings (H2/H3) as in the outline
- Close with [closing type chosen in step 2]
- Tone: [remind it of the defined tone]
\`\`\`

#### Step 4: Edit and Polish

\`\`\`
Act as a professional digital content editor.
Review the following article:

[paste step 3 draft]

Evaluate and correct:
1. HOOK: Do the first 2 sentences capture attention?
   If not, rewrite them.
2. STRUCTURE: Is the flow between sections natural?
   Flag weak transitions.
3. CLARITY: Are there confusing or overly long sentences?
   Simplify.
4. DATA: Are the mentioned data plausible? Flag any
   data that should be verified.
5. TONE: Is it consistent throughout the article?
6. CLOSING: Is it effective? Does it invite action?
7. SEO: Do the title and subheadings include relevant
   keywords?

Give me the complete corrected article, not just comments.
\`\`\`

#### Step 5: Create Derivative Content for Social Media

\`\`\`
Based on the following article:
[paste edited article from step 4]

Create 3 LinkedIn posts:

POST 1 - The impactful data point:
- Start with a surprising statistic or data point from the article
- Develop in 3-4 short sentences
- Close with a question to generate comments
- 150-200 words

POST 2 - The story/example:
- Start with a concrete case or example from the article
- Connect it to a broader lesson
- Close with a practical tip
- 150-200 words

POST 3 - The opinion:
- Start with a provocative statement (but professional)
- Briefly argue with points from the article
- Invite debate: "Do you agree?"
- 150-200 words

For all 3 posts:
- Don't use excessive hashtags (3-5 maximum)
- Don't overuse emojis
- Include a CTA to the full article in the last paragraph
\`\`\`

### Template for Designing Your Own Workflow

Now that you've seen a complete example, use this template to design your own workflow:

\`\`\`
MY AI WORKFLOW

Name: ________________________________
Final objective: ________________________________
Frequency of use: (daily / weekly / monthly / occasional)

STEPS:

Step 1: ________________________________
  Input: What information do I need before starting?
  Prompt: [write or reference the prompt]
  Output: What result do I expect?
  Check: How do I verify the result is good?

Step 2: ________________________________
  Input: Result from step 1 + anything else?
  Prompt: [write or reference the prompt]
  Output: What result do I expect?
  Check: How do I verify the result is good?

Step 3: ________________________________
  Input: Result from step 2 + anything else?
  Prompt: [write or reference the prompt]
  Output: What result do I expect?
  Check: How do I verify the result is good?

(Add more steps if needed)

NOTES:
- Tools I'll use: (ChatGPT / Claude / Gemini / combination)
- Estimated time: _____ minutes
- Context documents needed: ________________________________
\`\`\`

### Tips for Troubleshooting

**"The result from one step doesn't work as input for the next"**
- Verify that the output from the previous step has the correct format
- Sometimes you need an intermediate step to reformat

**"The workflow takes too long"**
- Can you combine two steps into one without losing quality?
- Can any step run in parallel? (e.g., researching 2 subtopics at the same time)

**"Quality drops in the later steps"**
- The conversation is probably getting too long
- Start a new conversation for the later steps, passing only the necessary context

**"I don't know if my workflow is well designed"**
Ask the AI:
\`\`\`
I designed the following AI workflow:
[describe your workflow]

Do you see any problems or possible improvements?
Is any important step missing?
Could any step be split or combined?
\`\`\`

### The Deliverable

When you finish this project you should have:

1. A documented workflow of 4-6 steps
2. All prompts written and tested
3. A concrete final result (report, article, analysis)
4. The prompts saved in your personal library (lesson 5)
5. Notes on what worked well and what you'd adjust

### Takeaways

- An AI workflow combines prompt chaining, memory, and evaluation
- Always review each step's output before moving to the next
- Document your workflow so you can repeat and improve it
- There's no perfect workflow on the first try -- iterating is part of the process
- Your complete, documented workflow is a valuable professional asset`;

export const c9leccion7 = ``;
