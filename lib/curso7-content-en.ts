// English content for Course 7: Prompt Engineering: The Art of Asking

export const c7leccion1 = `## The 5 Core Prompting Techniques

You already use tools like ChatGPT, Claude, or Gemini. You know how to ask questions and get answers. But you've probably noticed that sometimes the AI gives you generic, vague answers, or ones that have nothing to do with what you need. The problem is almost never the AI -- **the problem is how we ask**.

Prompt engineering is exactly that: the art of crafting clear instructions to get useful answers. And it comes down to 5 fundamental techniques that we'll cover in this lesson.

---

### 1. Be Specific

Specificity is the difference between a generic answer and a useful one.

**Vague prompt:**
> "Tell me about marketing"

**Specific prompt:**
> "Give me 5 digital marketing strategies for an artisan bakery in Buenos Aires that wants to attract customers aged 25-40 through Instagram. Include an estimated monthly budget for each strategy."

The first version gives you a generic marketing essay. The second gives you an actionable plan. The key: include **who, what, why, and what constraints**.

---

### 2. Give Context

The AI knows nothing about your situation unless you tell it. Context is the framework that allows it to personalize the answer.

**Without context:**
> "Help me write an email"

**With context:**
> "I'm the manager of a team of 8 people at a tech company. I need to write an email to the team announcing that we're switching our project management tool from Trello to Jira. Some team members are resistant to change. The tone should be empathetic but firm."

The more relevant context you provide, the better the answer will be. You don't have to tell your entire life story -- just whatever is relevant to the task.

---

### 3. Use Examples

Showing the AI what you want is more effective than explaining it. This is called **few-shot prompting** (we'll go deeper into it in the next lesson).

**Without examples:**
> "Classify these comments as positive or negative"

**With an example:**
> "Classify these comments as positive or negative. Example:
> - 'I loved the product' -> Positive
> - 'Terrible customer service' -> Negative
>
> Now classify these:
> - 'It arrived quickly and well packaged'
> - 'I don't recommend it at all'"

The example establishes the format and criteria. The AI understands exactly what to do.

---

### 4. Assign a Role

When you tell the AI "act as..." you activate a different response mode. It's like hiring a specialist instead of asking a generalist.

**Without a role:**
> "Explain what an LLC is"

**With a role:**
> "Act as an accountant specializing in small businesses. Explain what a U.S. LLC is, comparing it to local business structures. Use simple language and give me the pros and cons of each."

The role changes the vocabulary, depth, and focus of the response.

---

### 5. Iterate

A perfect prompt on the first try almost never happens. The best results come from **progressively refining**.

**First attempt:**
> "Write a product description for athletic shoes"

**Iteration 1:**
> "Make it shorter, 3 sentences maximum"

**Iteration 2:**
> "Add a sense of urgency and a call-to-action"

**Iteration 3:**
> "Change the tone to more youthful and use emojis"

Each iteration brings you closer to the ideal result. Don't clear the conversation -- use the accumulated context.

---

### Combining All 5 Techniques

A prompt that uses all 5 techniques together might look like this:

> "Act as a senior copywriter with 10 years of experience in ecommerce. [ROLE]
>
> I need to write a product description for my online sportswear store. The product is a dry-fit running t-shirt, priced at $29.99, targeted at amateur runners aged 30-50. [CONTEXT + SPECIFICITY]
>
> Example of the style I'm looking for:
> 'The ThermoRun jacket hugs you without weighing you down. Designed for those 6AM mornings where everything says stay in bed, except you.' [EXAMPLE]
>
> Give me 3 different versions of 2-3 sentences each."

After seeing the 3 versions, you iterate on the one you like most.

---

### Summary

| Technique | Ask Yourself |
|---|---|
| Specificity | Did I tell it exactly what I want? |
| Context | Does it know who I am and what I need it for? |
| Examples | Did I show it how I want the answer? |
| Role | Did I assign it a perspective or specialty? |
| Iteration | Did I refine, or did I settle for the first result? |

These 5 techniques are the foundation. In the upcoming lessons, we'll dive deeper into each one.`;

export const c7leccion2 = `## Few-Shot Learning: Teaching with Examples

If you had to explain to someone how you want them to classify emails, what would be clearer: giving them an abstract definition or showing them 3 already-classified emails? Exactly. Examples are the universal language, and AI works the same way.

**Few-shot prompting** is the technique of including examples in your prompt so the AI understands exactly what format, tone, criteria, or style you want. It's one of the most powerful and most underused techniques.

---

### 0-shot vs 1-shot vs few-shot

**Zero-shot (0 examples):**
> "Classify the following text by sentiment"

The AI interprets "sentiment" however it sees fit. Maybe it gives you "positive/negative," maybe "happy/sad/angry," maybe it writes a whole paragraph.

**One-shot (1 example):**
> "Classify the following text by sentiment.
> Example: 'The service was excellent' -> Positive
>
> Text: 'I'm never going back to that place'"

Already better. The AI understands you want one word: Positive or Negative.

**Few-shot (3+ examples):**
> "Classify the following text by sentiment.
>
> Examples:
> - 'The service was excellent' -> Positive
> - 'They took 2 hours to bring the food' -> Negative
> - 'The food was fine, nothing special' -> Neutral
>
> Text: 'I'm never going back to that place'"

Now the AI knows there are 3 categories (Positive, Negative, Neutral), understands the threshold for each, and responds with a single word.

**General rule:** 3 to 5 examples are usually enough. More than 7 rarely adds value and wastes tokens unnecessarily.

---

### Practical Example 1: Consistent Formatting

Suppose you want to convert messy data into a specific format:

> "Convert the following data to the indicated format.
>
> Examples:
> - Input: 'john doe, 35 years old, new york' -> Output: 'Name: John Doe | Age: 35 | City: New York'
> - Input: 'maria gomez, 28 years old, bogota' -> Output: 'Name: Maria Gomez | Age: 28 | City: Bogota'
> - Input: 'carlos ruiz, 42 years old, santiago' -> Output: 'Name: Carlos Ruiz | Age: 42 | City: Santiago'
>
> Now convert these:
> - 'ana martinez, 31 years old, lima'
> - 'roberto silva, 55 years old, montevideo'"

The AI will respect the exact format, including capitalization and separators.

---

### Practical Example 2: Writing Tone

If you want the AI to write in your particular style:

> "Write Instagram posts for my coffee shop following this style:
>
> Examples from my previous posts:
> - 'Monday without coffee? Not in this universe. Stop by for your 8am cortado'
> - 'New: dulce de leche brownie. Yes, you read that right. No, you're not dreaming.'
> - 'Rain + book + our hot chocolate = the perfect afternoon'
>
> Now write 3 new posts announcing that we've added vegan options to the menu."

The examples convey your tone (informal, humorous, direct) to the AI much better than saying "write in an informal and fun way."

---

### Practical Example 3: Data Extraction

For extracting structured information from free text:

> "Extract key data from each restaurant review.
>
> Examples:
> - Review: 'I went on Saturday with my partner, we ordered the seafood pasta and the risotto. Everything was delicious, but they took 40 minutes to bring the food. The waiter was very friendly.'
>   -> Day: Saturday | Companions: partner | Dishes: seafood pasta, risotto | Food quality: excellent | Wait time: 40 min | Service: good
>
> - Review: 'I had lunch alone on a Tuesday, I ordered the chicken parmesan. It was cold. The waitress didn't even come by to ask if everything was okay.'
>   -> Day: Tuesday | Companions: alone | Dishes: chicken parmesan | Food quality: poor | Wait time: not mentioned | Service: poor
>
> Now extract data from this review:
> 'We went with friends on Friday night. We ordered appetizers and some pizzas. The appetizers were incredible, the pizzas were fine. The place was packed and we waited about an hour, but the atmosphere was great.'"

---

### Template for Building Few-Shot Prompts

Use this structure as a base:

\`\`\`
[Clear instruction of what you want it to do]

Examples:
- Input: [example 1 input] -> Output: [example 1 output]
- Input: [example 2 input] -> Output: [example 2 output]
- Input: [example 3 input] -> Output: [example 3 output]

Now process the following:
[your actual input]
\`\`\`

---

### Advanced Tips

1. **Include edge cases** in your examples. If there's an ambiguous or difficult case, show it so the AI knows how to handle it.
2. **Vary your examples.** Don't put 3 examples of the same type -- show the diversity of cases it might encounter.
3. **Stay consistent.** If in example 1 you use "->" as a separator, don't use ":" in example 2.
4. **Order matters.** Put the most representative example first and the edge case last.

---

### Summary

- Few-shot = giving the AI concrete examples to guide its response
- 3-5 well-chosen examples are more effective than paragraphs of instructions
- Works especially well for: classification, formatting, data extraction, and tone matching
- Use the template: instruction + examples + actual input`;

export const c7leccion3 = `## Chain-of-Thought: Thinking Step by Step

Have you ever asked the AI something complex and it gave you an answer that sounds convincing but is wrong? The AI probably "jumped" straight to the conclusion without thinking through the intermediate steps. Exactly like when someone answers a math question from memory instead of doing the calculation.

**Chain-of-thought (CoT)** is a technique that asks the AI to show its reasoning step by step before giving the final answer. And it's surprisingly effective.

---

### Why It Works

Language models process tokens sequentially. When you ask it to "think step by step," what actually happens is that each intermediate step becomes context for the next one. This allows it to:

- Break complex problems into manageable parts
- Catch its own mistakes along the way
- Consider more variables before concluding
- Give more accurate answers in logic and calculation tasks

---

### The Magic Phrase

Adding one of these instructions can dramatically improve results:

- **"Think step by step"**
- **"Before answering, reason through each part of the problem"**
- **"Show your reasoning process"**
- **"Explain how you arrive at the conclusion"**

Let's see the difference in practice.

---

### Example 1: Math Problem

**Without chain-of-thought:**
> "A store sells t-shirts for $25 each. There's a 20% discount on purchases of more than 3 units. If I buy 5 t-shirts, how much do I pay?"

The AI might answer "$100" (applying the discount incorrectly) or give the correct answer without letting you verify whether the reasoning is sound.

**With chain-of-thought:**
> "A store sells t-shirts for $25 each. There's a 20% discount on purchases of more than 3 units. If I buy 5 t-shirts, how much do I pay? Think step by step."

Typical response:
1. Price per t-shirt: $25
2. Quantity: 5 t-shirts
3. Price without discount: 5 x $25 = $125
4. Since I'm buying more than 3, the 20% discount applies
5. Discount: $125 x 0.20 = $25
6. Final price: $125 - $25 = **$100**

Now you can verify each step and spot any errors.

---

### Example 2: Logical Reasoning

**Without CoT:**
> "At a company, all managers speak English. Some managers speak French. Maria speaks French and English. Is Maria a manager?"

The AI might incorrectly say "Yes."

**With CoT:**
> "At a company, all managers speak English. Some managers speak French. Maria speaks French and English. Is Maria a manager? Reason step by step before answering."

Typical response:
1. All managers speak English -> being a manager implies speaking English
2. But speaking English doesn't imply being a manager (there could be other employees who speak English)
3. Some managers speak French -> it's possible but not required
4. Maria speaks French and English -> she meets the necessary but not sufficient conditions
5. **Conclusion: We cannot confirm that Maria is a manager.** Speaking English is necessary to be a manager, but not sufficient. Maria could be a manager or might not be -- we don't have enough information.

---

### Example 3: Decision Making

**Without CoT:**
> "I have $10,000 in savings. Should I invest in a fixed-term deposit or in index funds?"

The AI gives you a direct recommendation that may not consider your situation.

**With CoT:**
> "I have $10,000 in savings. I'm considering investing in a fixed-term deposit or in index funds. Before giving me a recommendation, analyze the key factors step by step: risk, expected return, time horizon, and current inflation."

This forces the AI to build a complete analysis before concluding, and lets you evaluate whether it considered the factors that matter to you.

---

### Advanced CoT Variations

**Chain-of-thought with structure:**
> "Solve this problem following these steps:
> 1. Identify the data in the problem
> 2. Determine which formula or method applies
> 3. Solve step by step
> 4. Verify the result
> 5. Give the final answer"

**Reverse chain-of-thought:**
> "The answer to this logistics problem is that we need 3 trucks. Verify if this is correct by thinking step by step from the beginning."

This is useful for validating answers you already have.

**Self-correction:**
> "Solve the problem step by step. Then review your own reasoning and correct any errors before giving the final answer."

---

### When to Use and When NOT to Use CoT

**Use CoT when:**
- There are mathematical calculations involved
- The problem requires multi-step logic
- You need to make a decision with multiple variables
- You want to verify the AI's reasoning
- The task involves complex comparisons

**CoT is NOT needed when:**
- The task is simple and straightforward ("Translate this sentence to Spanish")
- You want creative responses (poems, stories)
- You're asking for simple factual information ("What's the capital of Peru?")
- You need speed and long responses bother you

---

### Summary

- Chain-of-thought = asking the AI to reason step by step
- Significantly improves results in logic, math, and decision-making
- "Think step by step" is the simplest and most effective instruction
- It lets you verify the reasoning and spot errors
- Don't use it for simple tasks where it adds unnecessary noise`;

export const c7leccion4 = `## Assigning Roles and Personas

When you tell the AI "Act as a nutritionist," it's not just a fun trick -- you're activating a real change in how the model generates responses. The role works as a filter that adjusts vocabulary, depth, focus, and even the format of the response.

---

### Why Roles Work

Language models were trained on millions of texts written by different types of professionals. When you assign a role, you're saying: "of everything you know, respond from this specific perspective." It's the difference between asking something to a generalist vs. a specialist.

**Without a role:**
> "How can I improve my resume?"

You get generic advice you'd find in any internet article.

**With a role:**
> "Act as a senior recruiter at tech companies with 15 years of experience. Review this resume and tell me: what you'd remove, what you'd add, and what you'd change in the format. Be direct and specific."

You get actionable feedback from the perspective of someone who actually reads resumes all day.

---

### The Anatomy of a Good Role

An effective role has 3 components:

1. **Who they are**: profession, specialty, level of experience
2. **How they communicate**: tone, technical level, style
3. **What they do**: their specific task in this context

**Template:**
> "Act as a [profession] with [years/type of experience] specializing in [area]. Your style is [tone]. Your task is [what you need it to do]."

---

### 5 Practical Roles You Can Use Today

**1. Patient Tutor**
> "Act as a high school math teacher with 20 years of experience. You're known for explaining difficult concepts simply, using everyday analogies. You never make the student feel stupid. Explain logarithms to me."

**2. Personalized Nutritionist**
> "Act as a sports nutritionist. I'm 35 years old, weigh 180 lbs, am 5'9", do crossfit 4 times a week, and want to lose fat without losing muscle. Design a one-day meal plan for me. Include estimated macros."

**3. Ruthless Editor**
> "Act as a senior editor at a business magazine. Your job is to make texts clear, concise, and filler-free. Take this draft and improve it: eliminate redundancies, strengthen weak arguments, and point out where evidence is lacking."

**4. Culturally-Aware Translator**
> "Act as a professional English-Spanish translator with experience in localization for the Latin American market. Don't do literal translations -- adapt idioms, units of measurement, and cultural references. Translate the following text."

**5. Career Advisor**
> "Act as a career coach specializing in professional transitions. I'm 40 years old, have 15 years of experience in accounting, and want to move into data/analytics. Give me a realistic 6-month plan to make that transition, considering that I need to keep working."

---

### System Prompts for Assigning Roles

In ChatGPT (Custom Instructions) and Claude (System Prompt in projects), you can define a role that persists throughout the entire conversation:

**Example system prompt for a writing assistant:**
> "You are a professional editor and writer specializing in digital content for Latin American audiences. Your style is clear, direct, and filler-free. You always suggest concrete improvements, not abstract ones. When the user asks you to write something, you give 2 options with different tones so they can choose. You use casual but professional English."

**Example system prompt for a coding assistant:**
> "You are a senior fullstack developer with 10 years of experience in React, Node.js, and PostgreSQL. When asked for code, you first explain the approach in 2-3 sentences, then show the code with clear comments. If the user's code has bugs, you point them out constructively. You always suggest best practices."

---

### Combining Roles with Other Techniques

Roles become enormously more powerful when you combine them with what we've already learned:

**Role + Few-shot:**
> "Act as a community manager for an urban clothing brand. Here are examples of responses you've given before to Instagram comments:
> - 'I love this t-shirt!' -> 'Thanks! You're gonna look amazing in it, send us a pic when it arrives!'
> - 'How much?' -> 'We'll DM you all the info!'
> - 'Shipping takes too long' -> 'So sorry about that! DM us your order number and we'll track it right away'
>
> Now respond to these new comments..."

**Role + Chain-of-thought:**
> "Act as an experienced clinical physician. A patient describes these symptoms: frequent headaches, constant fatigue, dizziness when standing up. Before giving a possible diagnosis, think step by step: what questions would you ask, what causes would you rule out first, and why."

---

### Common Mistakes When Assigning Roles

1. **Role too vague:** "Act as an expert" -- an expert in what?
2. **Contradictory role:** "Act as a lawyer but respond super informally and with jokes" -- it can work, but it dilutes the expertise.
3. **Not giving the task:** You assign the role but then ask a generic question. A role without a specific task doesn't add much.
4. **Forgetting the context:** "Act as a nutritionist" without saying anything about yourself. The role needs to know who it's working for.

---

### Summary

- Roles change the vocabulary, depth, and focus of the response
- A good role includes: who they are, how they communicate, and what task they have
- They work as system prompts for persistent conversations
- They become more powerful when combined with few-shot and chain-of-thought
- The more specific the role, the better the results`;

export const c7leccion5 = `## Using Structure: XML, Markdown, and JSON

One of the most effective ways to improve your prompts is to use **structure**. Just as a well-designed form is easier to fill out than a blank space, a prompt with clear structure produces more organized and consistent responses.

Let's look at three formats you can use both in your inputs (what you send to the AI) and your outputs (what you ask it to return).

---

### Markdown: The Most Natural Format

Markdown is the format you're already using without knowing it: bold text, lists, headings. It's ideal for requesting organized responses.

**Request responses with markdown formatting:**

> "Compare the 3 main ecommerce platforms for SMBs in Latin America. Use this format:
>
> For each platform include:
> - **Name**
> - **Monthly price**
> - **Pros** (bulleted list)
> - **Cons** (bulleted list)
> - **Ideal for** (1 sentence)
>
> At the end, include a summary comparison table."

The AI will return a perfectly organized response with headers, lists, and a table.

**Request specific tables:**

> "Create a comparison table of the ChatGPT, Claude, and Gemini plans with these columns: Plan name, Monthly price, Model included, Message limit, Exclusive features."

Markdown tables are extremely useful for comparisons.

---

### XML Tags: Organizing Complex Input

XML tags are an excellent way to separate sections in your prompt. Claude especially responds very well to this format, but it works with any model.

**Example: reviewing a text with clear instructions**

> \`<instructions>
> Review the following blog article. Evaluate three aspects: clarity, structure, and engagement. For each aspect, give a score from 1 to 10 and specific suggestions for improvement.
> </instructions>
>
> <article>
> [Paste your full article here]
> </article>
>
> <response_format>
> Use this format for each aspect:
> **[Aspect]**: [score]/10
> - What works well: ...
> - What to improve: ...
> - Specific example of improvement: ...
> </response_format>\`

XML tags let the AI know exactly where each section starts and ends. This is especially useful when your prompt has multiple parts.

**Other practical uses of XML:**

> \`<context>
> I own a small travel agency in Colombia. We have 3 employees.
> </context>
>
> <task>
> I need an email template to send to clients who asked about a package but didn't purchase in the last 7 days.
> </task>
>
> <constraints>
> - Maximum 150 words
> - Friendly but not pushy tone
> - Include an incentive (discount or benefit)
> - Don't use the word "deal"
> </constraints>\`

---

### JSON: Structured Output for Data

When you need the AI to return data that you'll use elsewhere (a spreadsheet, a program, another tool), ask for the response in JSON format.

**Example: data extraction**

> "From the following review, extract the data in JSON format:
>
> Review: 'I went to La Esquina restaurant on Friday with 4 friends. We ordered empanadas, a cheese appetizer, and two pizzas. Everything was delicious. We spent $90 total with tip. The only issue is they don't accept credit cards.'
>
> Expected format:
> \`\`\`json
> {
>   "restaurant": "",
>   "day": "",
>   "diners": 0,
>   "dishes": [],
>   "total_spent": 0,
>   "overall_rating": "",
>   "issues": []
> }
> \`\`\`"

AI response:
\`\`\`json
{
  "restaurant": "La Esquina",
  "day": "Friday",
  "diners": 5,
  "dishes": ["empanadas", "cheese appetizer", "pizzas"],
  "total_spent": 90,
  "overall_rating": "very good",
  "issues": ["don't accept credit cards"]
}
\`\`\`

**Example: generating bulk data**

> "Generate a test dataset with 10 fictional customers in JSON format. Each customer has: name, email, age, city (varied cities from Latin America), plan (free/basic/premium), and registration_date (between 2023 and 2024)."

This is especially useful for developers, analysts, or anyone who works with data.

---

### Combining Formats

You can mix formats in the same prompt:

> \`<instructions>
> Analyze the following sales data and generate:
> 1. A summary in markdown with headers and bullets
> 2. A table of the top 5 best-selling products
> 3. The recommendations in JSON format for importing into our system
> </instructions>
>
> <data>
> [sales data here]
> </data>\`

---

### When to Use Each Format

| Format | Ideal for | Example use |
|---|---|---|
| **Markdown** | Human-readable responses | Reports, comparisons, guides |
| **XML tags** | Organizing long prompts with multiple parts | Separating context, instructions, and constraints |
| **JSON** | Structured data for programmatic use | Data extraction, datasets, APIs |
| **Markdown table** | Side-by-side comparisons | Features, pricing, pros/cons |

---

### Final Tips

1. **Show the exact format** you expect. Don't say "in a structured format" -- show an example of the format.
2. **JSON requires precision.** If you want valid JSON, say "return valid JSON, with no additional text before or after."
3. **XML tags don't need to be standard.** You can invent your own tags: \`<my_text>\`, \`<rules>\`, \`<example>\`. What matters is clear separation.
4. **Markdown is the default.** Most models already respond in markdown by default. But being explicit about what type of markdown you want (tables, headers, bullets) improves results.

---

### Summary

- Structure in prompts produces more organized and consistent responses
- Markdown: ideal for readable responses with tables, lists, and headers
- XML tags: perfect for organizing complex prompts with multiple sections
- JSON: essential when you need structured data for use in other systems
- Showing the expected format with an example is the most effective way to get it`;

export const c7leccion6 = `## System Prompts vs User Prompts

When you use ChatGPT, Claude, or any AI model, there's something happening behind the scenes that most users don't know about: your messages aren't the only thing the model receives. There's another type of instruction, invisible to you, called a **system prompt**.

Understanding this distinction gives you a much greater level of control over the responses.

---

### What Is a System Prompt

A **system prompt** is a set of instructions given to the model *before* you see the conversation. It defines how it should behave, what role it has, what limitations it follows, and what tone it uses.

Think of it as the instructions you give a new employee on their first day: "You're the receptionist, you always greet with a smile, you respond in English, and if they ask about prices, refer them to the sales department."

A **user prompt** is simply your message -- the question or instruction you type in the chat.

---

### How They Interact

When you send a message, the model actually receives something like this:

\`\`\`
[System]: You are a friendly assistant that responds in English.
          You always give concise answers of no more than 3 paragraphs.

[User]: Explain what blockchain is.

[Assistant]: (generates the response following both instructions)
\`\`\`

The system prompt has **priority** over the user prompt. If the system says "respond in English" and the user writes in Spanish, the model will respond in English.

---

### Where to Configure Them on Each Platform

**ChatGPT -- Custom Instructions:**
- Go to Settings -> Custom Instructions
- There are two fields: "What would you like ChatGPT to know about you?" and "How would you like ChatGPT to respond?"
- These instructions apply to ALL your new conversations
- It's basically a permanent system prompt

**ChatGPT -- Custom GPTs:**
- When creating a GPT, the "Instructions" field is the system prompt
- It only applies when you use that specific GPT

**Claude -- System Prompt in Projects:**
- In Claude Pro, you can create Projects with project instructions
- These instructions function as a system prompt for all conversations within that project
- You can also add documents that Claude references

**Gemini:**
- Gemini's "Gems" let you define custom instructions
- They work similarly to Custom GPTs

---

### Creating Effective System Prompts

A good system prompt answers 5 questions:

1. **Who are you?** -> Role and expertise
2. **How do you speak?** -> Tone, language, technical level
3. **What do you do?** -> Main tasks
4. **What do you NOT do?** -> Limitations and restrictions
5. **How do you format?** -> Response structure

---

### Examples of Complete System Prompts

**Personal productivity assistant:**
> "You are my personal productivity assistant. You know my situation: I work as a marketing manager at a mid-sized company, I have meetings constantly, and I struggle to organize my time.
>
> Your style: direct, no filler, action-oriented. Every response ends with a 'next steps' list.
>
> When I ask for help organizing something, use this format:
> - High priority: red
> - Medium priority: yellow
> - Low priority: green
>
> Don't give me generic productivity advice. Be specific to my context."

**Blog writing assistant:**
> "You are a digital content editor and writer specializing in blogs for Latin American SMBs. Your audience is business owners aged 30-50 who aren't marketing experts.
>
> Writing rules:
> - Short sentences (20 words maximum)
> - Paragraphs of 3 sentences maximum
> - Always include subheadings every 2-3 paragraphs
> - Use clear, accessible English
> - Avoid marketing jargon unless you explain it
> - Every article ends with a clear CTA
>
> When I ask you to write something, first propose 3 titles and an outline. Wait for my approval before writing the full article."

**Data analysis assistant:**
> "You are a senior data analyst. When I present data:
> 1. First identify patterns and anomalies
> 2. Then give actionable insights (not obvious observations)
> 3. Always mention the limitations of the analysis
> 4. If the data is insufficient for a conclusion, say so clearly
>
> Response format: use markdown headers, bullets for insights, and tables when relevant.
>
> Never invent data I didn't give you. If you're missing information, ask before assuming."

---

### System Prompt vs First Message

If you don't have access to system prompts (for example, you're using the free version without custom instructions), you can simulate one by sending it as your first message:

> "For this conversation, follow these rules:
> - Act as a personal financial advisor
> - Always respond in English
> - Use tables for comparisons
> - Be direct, no long introductions
>
> Confirm that you understood the rules before we begin."

It's not exactly the same as a real system prompt (it has less "weight" for the model), but it works reasonably well.

---

### Advanced Tips

1. **Test your system prompt** with varied questions. A good system prompt works well with any question within its domain.
2. **Iterate the system prompt.** When the AI doesn't respond as you want, sometimes the problem isn't your question but the system prompt.
3. **Don't make it too long.** A system prompt of 500+ words can cause the model to ignore parts. Keep the most important instructions at the beginning.
4. **Use negative rules.** "Do NOT add medical disclaimers to every response" is clearer than "be direct."

---

### Summary

- System prompt = background instructions that define the model's behavior
- User prompt = your specific message in the conversation
- The system prompt has priority and persists throughout the conversation
- Each platform has its own way to configure it (Custom Instructions, Projects, Gems)
- A good system prompt defines: role, tone, tasks, limitations, and format
- If you don't have access, you can simulate it as a first message`;

export const c7leccion7 = `## Iteration and Refinement

There's an uncomfortable truth in prompt engineering: **the first prompt is almost never the best**. The prompts that generate incredible results aren't born perfect -- they're built through iteration.

If you think AI experts write one prompt and they're done, the reality is that they iterate too. The difference is that they iterate *strategically*.

---

### The Iteration Loop

The process is simple but powerful:

\`\`\`
Prompt -> Response -> Evaluate -> Refine -> Repeat
\`\`\`

1. **Write your first prompt** (it doesn't matter if it's imperfect)
2. **Read the entire response** (not just the first paragraph)
3. **Identify what's wrong** (too long? wrong tone? missing info?)
4. **Refine with specific instructions**
5. **Repeat until you're satisfied**

---

### The Most Useful Refinement Instructions

These are follow-up prompts you can use after any response:

**To adjust length:**
- "Make it shorter, 3 sentences maximum"
- "Expand on point 2, I need more detail"
- "Summarize it in 5 bullets"

**To adjust tone:**
- "Make it more formal / more informal"
- "Use a more empathetic tone"
- "Remove the salesy tone, make it more neutral"
- "Write it as if it were a text message"

**To adjust content:**
- "Add concrete examples"
- "Remove the part about X, it's not relevant"
- "Include data or statistics to back this up"
- "Make it more actionable -- what exactly do I do?"

**To adjust format:**
- "Put this in a table"
- "Organize it with headers and sub-headers"
- "Convert it into a step-by-step list"
- "Number the points in order of priority"

**To adjust focus:**
- "Focus more on [specific aspect]"
- "This is for [audience], adapt the level"
- "Too theoretical, make it more practical"
- "You assumed X, but actually it's Y -- rewrite with that correction"

---

### Complete Iteration Example

Let's see what a real iteration looks like:

**Initial prompt:**
> "Write an email to request time off from my boss"

**Response:** A generic, formal, long email.

**Iteration 1:**
> "Too formal. My boss is pretty relaxed and we're on a first-name basis. Make it more casual but professional."

**Response:** Better tone, but still generic.

**Iteration 2:**
> "Good tone. Now add that: I want to take off from March 15 to 30, I already talked to Laura who will cover for me, and I'll have everything up to date before I leave."

**Response:** Much better, personalized.

**Iteration 3:**
> "Almost perfect. Make it a bit shorter and remove the part where I say 'I hope this is possible' -- we already discussed it verbally and this is just the email formality."

**Final response:** Exactly what was needed.

How many attempts? 4. Was it worth it? Yes, because the result is an email I'd actually use.

---

### A/B Testing Prompts

When you have a task you'll repeat (generating product descriptions, writing follow-up emails, creating posts), it's worth testing variations:

**Version A:**
> "Write a product description for these athletic shoes. Be persuasive and mention the benefits."

**Version B:**
> "Act as a Nike copywriter. Write a 2-sentence description for these shoes that makes someone want to buy them without thinking twice."

Compare the results. Save the prompt that works best as your template.

**Tip:** If you find a prompt that works well, save it in a document or note. Your personal collection of prompts is one of the most valuable assets you can build.

---

### When to Start Over vs Keep Iterating

**Keep iterating when:**
- The overall structure is good but needs adjustments
- The tone is correct but the content needs changes
- You're 2-3 tweaks away from the ideal result
- The AI understood what you want but didn't execute it perfectly

**Start over when:**
- The AI completely misunderstood your intention
- After 5+ iterations you're still unsatisfied
- The conversation got "contaminated" with confusing context
- You want to try a radically different approach

Sometimes a fresh prompt with everything you learned from previous iterations gives better results than continuing to patch.

---

### Advanced Refinement Techniques

**Ask for self-critique:**
> "Review what you just wrote. What would you improve? Then apply those improvements."

**Ask for variations:**
> "Give me 3 versions of this: one formal, one casual, and one with humor."

**Refine by comparison:**
> "From the 3 previous versions, combine the tone of version 2 with the structure of version 1 and the examples of version 3."

**User feedback as context:**
> "I sent this email to 3 people and they said the second paragraph was confusing. Rewrite it to be clearer without changing the rest."

**Refinement with constraints:**
> "Perfect, now adapt this for a LinkedIn post. 200 words maximum. It has to start with a hook that sparks curiosity."

---

### Building on Previous Responses

One of the advantages of chat is that the AI remembers the conversation context. Use this to your advantage:

> **Prompt 1:** "Give me an outline for an article about how to choose a CRM for small businesses"
>
> **Prompt 2:** "Expand section 3 of the outline"
>
> **Prompt 3:** "Now write the introduction, with a hook based on a statistic"
>
> **Prompt 4:** "Too long. Cut it in half"
>
> **Prompt 5:** "Write the conclusion that connects with the intro and ends with a CTA"

This incremental approach (outline -> sections -> refinement) produces much better texts than asking for everything at once.

---

### Summary

- The first prompt is almost never the final one -- iterating is part of the process
- Keep a list of common refinements: length, tone, content, format
- A/B test prompts for repetitive tasks and save the best ones
- If after 5 iterations it's not working, start over
- Build responses incrementally for complex tasks
- Your personal collection of tested prompts is one of your most valuable assets`;

export const c7leccion8 = ``;
