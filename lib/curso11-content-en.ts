// English content for Course 11: Automate with AI
// 7 lessons — Advanced Level

export const c11leccion1 = `## What Is Automation and Why Does It Matter?

Imagine that every day you do the same thing: you check your email, copy the data from new orders into a spreadsheet, send a confirmation message to the customer, and update your inventory. Each step is simple, but together they eat up 2 hours of your day.

**Automation is having a machine do those steps for you.**

### Automation Before and After AI

**Before AI**, automation was rigid:
- If X happens → do Y
- "If an email arrives with the word 'order' → move it to the 'Orders' folder"
- It only worked with exact rules, with no understanding of context

**With AI**, automation becomes intelligent:
- "If an email arrives from a customer → the AI reads the content, extracts the order data, classifies the priority, and drafts a personalized response"
- It understands context, handles variations, and makes simple decisions

### Why Does It Matter?

| Without Automation | With Automation |
|---|---|
| 2 hours copying data | 0 minutes — it does it on its own |
| Human errors from fatigue | Consistent accuracy |
| You can only process X per day | No practical limit |
| Your time is worth more | You focus on what matters |

### The Three Levels of Automation

**Level 1: Simple Automation (No AI)**
- Fixed rules: if A happens, do B
- Example: "When an email arrives, send an automatic reply"

**Level 2: AI-Powered Automation (What We're Going to Learn)**
- The AI processes, classifies, and decides
- Example: "When an email arrives, the AI reads it, extracts the data, and depending on the type of inquiry, responds or escalates it"

**Level 3: Autonomous Agents (Pro Level)**
- The AI plans, executes multiple steps, and self-corrects
- Example: "The AI monitors your sales, detects trends, and automatically generates reports with recommendations"

### Tools We're Going to Explore

- **Zapier**: The most well-known and easy to use
- **Make** (formerly Integromat): More powerful and visual
- **n8n**: Free and open source

### Do I Need to Know How to Code?

**No.** All of these tools are **no-code**. They work with visual blocks you connect by dragging and dropping, like a flowchart.

### Key Takeaways

- Automation frees you from repetitive tasks
- With AI, automation understands context and makes decisions
- You don't need to code — there are visual tools
- Start by automating one task you do every day`;

export const c11leccion2 = `## Zapier + AI: Your First Automated Flow

**Zapier** is the most popular automation tool in the world. It connects more than 6,000 applications to each other, and now includes built-in AI.

### Zapier Basic Concepts

- **Zap**: An automated flow (a sequence of steps)
- **Trigger**: The event that starts the flow ("When a new email arrives...")
- **Action**: What happens next ("...extract the data with AI and save it to a spreadsheet")

### Your First Zap with AI: Summarize Long Emails

Let's create a flow that:
1. Detects when a new email arrives in Gmail
2. Uses AI to summarize it in 3 sentences
3. Sends the summary to a Slack channel (or your WhatsApp/Telegram)

**Step 1: Create a Zapier Account**
- Go to **zapier.com** and sign up (there's a free plan)
- Confirm your email

**Step 2: Create a New Zap**
- Click **"Create"** → **"New Zap"**

**Step 3: Configure the Trigger**
- Search for **"Gmail"**
- Choose **"New Email"** (new email received)
- Connect your Gmail account
- Choose the folder to monitor (Inbox, for example)
- Test the trigger — Zapier will pull a sample email

**Step 4: Add the AI Action**
- Click **"+"** to add a step
- Search for **"ChatGPT"** or **"AI by Zapier"**
- If you choose "AI by Zapier" (easier):
  - Model: GPT-4o-mini (fast and affordable)
  - Prompt: "Summarize the following email in exactly 3 sentences in English: {{Body}}"
  - {{Body}} is the email content from the previous step

**Step 5: Send the Summary**
- Add another step with **"Slack"** (or **"Email by Zapier"**)
- Configure: "Send message to #summaries channel"
- Message: "📧 New email from {{From}}: {{summary from previous step}}"

**Step 6: Turn On the Zap**
- Click **"Publish"**
- The Zap starts running automatically

### Free Plan vs Paid

| Feature | Free | Starter ($19/mo) |
|---|---|---|
| Active Zaps | 5 | 20 |
| Tasks per month | 100 | 750 |
| Steps per Zap | 2 | Multiple |
| Built-in AI | Limited | Full |

### Other Useful Zaps with AI

- **Classify customer feedback**: Receive reviews → AI classifies as positive/negative/neutral → Save in a spreadsheet
- **Generate form responses**: New form submission → AI generates personalized response → Send by email
- **Translate content**: New blog post → AI translates to another language → Publish on translated blog

### Key Takeaways

- Zapier connects thousands of apps with no code needed
- "AI by Zapier" lets you add AI to any flow
- Start with a simple 3-step flow
- The free plan is enough to experiment`;

export const c11leccion3 = `## Make/n8n: Powerful Alternatives

Zapier is great for getting started, but it has limitations on its free plan. There are alternatives that offer more power and flexibility.

### Make (Formerly Integromat)

**Make** is a visual automation platform more powerful than Zapier, with a focus on complex flows.

**Advantages over Zapier:**
- Visual interface with an actual flowchart diagram (you can see the connections)
- More operations on the free plan (1,000/month vs 100 in Zapier)
- More advanced conditional logic (if/then with multiple branches)
- Better error handling

**How It Works:**
1. Go to **make.com** and create an account
2. Create a new "Scenario" (equivalent to a Zap)
3. Drag modules onto the canvas and connect them visually
4. Each module is an app or action

**Example: Automatically Process Invoices**
1. **Watch emails** (Gmail) — detects emails with attachments
2. **Download attachment** — downloads the invoice PDF
3. **Analyze with AI** (OpenAI) — "Extract from this invoice: vendor, amount, date, description"
4. **Add row** (Google Sheets) — saves the data in a spreadsheet
5. **Send notification** (Slack) — "New invoice processed: $X from Vendor Y"

### n8n: The Free and Open Source Option

**n8n** (pronounced "n-eight-n") is an open source automation tool. That means it's **completely free** if you install it on your own server.

**Advantages:**
- Free with no execution limits
- Open source — you can see and modify the code
- Runs on your own server — your data never leaves your infrastructure
- Very powerful for complex flows with AI

**Cloud Option:**
- n8n also offers a cloud service (n8n.io) with a limited free plan
- If you don't want to install anything, it's a good option to get started

**When to Choose n8n:**
- You need to process a lot of data without per-execution costs
- You're concerned about privacy (data stays on your server)
- You want maximum flexibility

### Comparison of All Three Tools

| Feature | Zapier | Make | n8n |
|---|---|---|---|
| Ease of use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Free plan | 100 tasks/month | 1,000 ops/month | Unlimited (self-hosted) |
| AI integration | Excellent | Very good | Very good |
| Visual | Linear | Flowchart | Flowchart |
| Ideal for | Beginners | Intermediate users | Technical users and teams |

### Which One Should You Choose?

- **Just getting started?** → Zapier (easiest)
- **Need more power?** → Make (best value for features)
- **Technical or limited budget?** → n8n (free, maximum flexibility)

### Key Takeaways

- Zapier isn't the only option — Make and n8n are powerful alternatives
- Make offers more free operations and more visual flows
- n8n is free and ideal if you're concerned about privacy
- Start with whichever feels most comfortable and switch if you need more`;

export const c11leccion4 = `## Automating Emails and Responses

Email is one of the most time-consuming tasks. AI can help you automate a large part of the work: classifying, responding, summarizing, and organizing.

### Scenario 1: Automatic Email Classification

**Problem**: You receive 50+ emails a day and waste time classifying them manually.

**Solution with Zapier/Make:**
1. Trigger: New email in Gmail
2. AI analyzes the content and classifies it into categories:
   - Urgent / Normal / Can wait
   - Sales / Support / Information / Spam
3. Action: Move to the corresponding folder + add label
4. If urgent: send notification to Slack/WhatsApp

**Prompt for the AI:**
> "Classify this email into one of these categories: URGENT, SALES, SUPPORT, INFO, SPAM. Reply ONLY with the category, no explanation. Email: {{body}}"

### Scenario 2: Intelligent Automatic Responses

**Problem**: 70% of the emails you receive have similar answers.

**Solution:**
1. Trigger: New email
2. AI determines if it can respond automatically
3. If yes: generates the response and sends it (or saves it as a draft for your approval)
4. If no: notifies you to respond manually

**Important**: Start by putting responses in **draft** mode to review them before sending. Once you're confident the AI responds well, you can enable automatic sending.

### Scenario 3: Daily Email Summary

**Problem**: You arrive at the office with 30 unread emails and don't know where to start.

**Solution:**
1. Trigger: Every day at 7:00 AM
2. Collect all emails from the last 12 hours
3. AI generates an executive summary:
   - 3 most urgent emails
   - Main topics
   - Required actions
4. Send summary to your WhatsApp or Slack

### Security Considerations

- **Never automate** emails containing sensitive financial or medical information
- **Start with drafts**, not direct sending
- **Periodically review** automatic responses
- **Inform your team** that you use automation

### Specific Tools for Email + AI

| Tool | What It Does | Price |
|---|---|---|
| **Zapier + Gmail** | Complete automation | From free |
| **Superhuman** | Email with built-in AI | $30/mo |
| **Shortwave** | Gmail with AI summaries | Free + premium |
| **Spark** | Smart email | Free + premium |

### Key Takeaways

- Automatic classification saves you time from day one
- Start with drafts before automating sends
- The daily summary gives you an overview without opening each email
- Always supervise email automations`;

export const c11leccion5 = `## Automating Summaries and Reports

Generating reports is a task that takes hours and is often repetitive. With AI, you can automate data collection, analysis, and even writing the report.

### Scenario 1: Automatic Weekly Sales Report

**The Flow:**
1. **Trigger**: Every Monday at 8:00 AM
2. **Collect data**: Get the week's sales from Google Sheets or your CRM
3. **AI Analysis**: "Analyze these sales from the past week. Include: total sold, comparison with the previous week, top 3 products, overall trend, and a recommendation."
4. **Format**: The AI generates the report in a readable format
5. **Distribute**: Send by email to the team + post in Slack

**Prompt for the report:**
> "You are a sales analyst. With the following weekly sales data, generate an executive report in English with these sections: 1) Summary (3 lines), 2) Key metrics (table), 3) Top products, 4) Comparison with previous week, 5) Recommendation. Data: {{sales_data}}"

### Scenario 2: Social Media Monitoring

**The Flow:**
1. **Trigger**: Daily at 9:00 AM
2. **Collect**: Mentions and comments from the last 24 hours
3. **AI Analysis**: Classify sentiment (positive/negative/neutral)
4. **Report**: Summary with insights
5. **Alert**: If there are urgent negative mentions, notify immediately

### Scenario 3: Meeting Summaries

**The Flow:**
1. **Input**: Recording or meeting notes
2. **Transcription**: If audio, transcribe with Whisper (OpenAI's voice AI)
3. **AI Summary**: "Summarize this meeting: participants, topics discussed, decisions made, next steps with responsible parties and deadlines"
4. **Distribute**: Send to all participants

### Report Template with AI

Ask the AI to follow this structure:

\`\`\`
📊 [TYPE] REPORT — [DATE]

## Executive Summary
[2-3 sentences]

## Key Metrics
| Metric | Value | Change |
|--------|-------|--------|

## Main Findings
1. [Finding]
2. [Finding]
3. [Finding]

## Recommendations
- [Recommended action]

## Next Steps
- [ ] [Task] — Owner — Date
\`\`\`

### Key Takeaways

- Automated reports save hours every week
- AI can analyze data, detect trends, and write the report
- Start with a simple weekly report and expand from there
- Always review the report before distributing it`;

export const c11leccion6 = `## Vibe Coding: Describing Apps in Plain English

**Vibe coding** is a new concept: instead of writing code, you describe to the AI what you want to build and it does it for you. It's like telling an architect "I want a house with 3 bedrooms and a garden" instead of drawing the blueprints yourself.

### What Is Vibe Coding?

It's the practice of creating applications by describing what you want in natural language (English, Spanish, any language). The AI generates the code for you.

**Example:**
> "Create a web page with a contact form that has fields for name, email, and message. When the form is submitted, I should receive an email with the data. Modern and simple design."

With just those few lines, tools like **Bolt.new**, **v0.dev**, **Lovable**, or **Claude** can generate a complete, functional page.

### Vibe Coding Tools

**1. Bolt.new**
- Generate complete web applications from a description
- Includes frontend, backend, and database
- You can download the code or publish directly

**2. v0.dev (by Vercel)**
- Specialized in user interfaces
- Generates React components from a description
- Ideal for quick prototypes

**3. Lovable (formerly GPT Engineer)**
- Create complete applications through conversation
- Iterate on design and functionality in real time
- Publish directly to the web

**4. Claude / ChatGPT**
- Ask it to generate code for anything
- More flexible but requires more guidance
- Ideal if you already have some technical context

### Practical Example: Sales Dashboard

Prompt for Bolt.new or similar:

> "Create a sales dashboard with: 1) Bar chart of sales by month, 2) Cards showing total sold, number of orders, and average ticket, 3) Table with the last 10 orders, 4) Date filter. Use blue and white colors. Use sample data."

In less than 5 minutes you have a functional dashboard you can customize later.

### Tips for Better Results

1. **Be specific**: "A blue button that says Submit" is better than "a button"
2. **Describe the user experience**: "When the user clicks, a confirmation message appears"
3. **Mention the style**: "Minimalist design, dark colors, modern typography"
4. **Iterate**: "I like it but change the button color to green and make the table bigger"

### Limitations

- Generated apps may need adjustments
- For complex projects, you'll eventually need to understand some code
- The AI can make logic errors
- It doesn't replace a developer for critical systems

### Key Takeaways

- Vibe coding lets you create apps by describing what you want
- Tools like Bolt.new, v0.dev, and Lovable do the heavy lifting
- Be specific in your descriptions for better results
- Ideal for prototypes, internal tools, and personal projects`;

export const c11leccion7 = ``;
