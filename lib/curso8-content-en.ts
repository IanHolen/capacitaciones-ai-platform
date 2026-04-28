// English content for Course 8: Working with Documents and Images

export const c8leccion1 = `## Uploading PDFs and Analyzing Them with AI

One of the most useful capabilities of modern AI tools is the ability to **upload files** -- especially PDFs -- and ask the model to analyze, summarize, search for information, or answer questions about their content.

If you've been using ChatGPT, Claude, or Gemini to ask text-based questions, this is the next level: instead of copying and pasting fragments, you give it the entire document and let the AI do the heavy lifting.

### How to Upload Files on Each Platform

**ChatGPT (Plus/Team/Enterprise)**
- Click the paperclip icon in the message bar
- Select the PDF file from your computer
- Wait for it to load and then write your prompt
- You can also drag and drop the file directly into the conversation

**Claude (Pro/Team)**
- Click the paperclip icon in the message bar
- Select one or more files (Claude allows uploading up to 5 files at once)
- Files appear as attachments before you send your message
- Claude supports PDFs of up to ~150 pages depending on text density

**Gemini (Advanced)**
- Click the "+" icon or the paperclip in the message bar
- Upload your PDF file
- Gemini can process lengthy documents thanks to its large context window

### What Can AI Do with a PDF?

AI can:
- **Summarize** the entire document or specific sections
- **Answer questions** about the content ("What is the contract's expiration date?")
- **Extract specific information** (amounts, names, dates, clauses)
- **Compare** sections within the same document
- **Translate** the content to another language
- **Explain** technical or legal terms in simple language
- **Reorganize** information into another format (table, list, executive summary)

### What Can It NOT Do Well?

- **Low-quality scanned PDFs**: If the PDF is a blurry image of a document, the AI may have trouble reading the text
- **Documents with heavy graphic design**: Complex layouts with columns, overlapping tables, or infographics can confuse the model
- **Password-protected PDFs**: AI cannot open encrypted files
- **Extremely long documents**: Each model has a limit. If your PDF has 500 pages, you'll probably need to split it up

### Practical Limits You Should Know

| Platform | Maximum size | Recommended pages | Formats |
|---|---|---|---|
| ChatGPT | ~512 MB | Up to ~100 pages | PDF, DOCX, TXT, CSV, PPTX |
| Claude | ~30 MB | Up to ~150 pages | PDF, DOCX, TXT, CSV, RTF |
| Gemini | ~100 MB | Up to ~1500 pages | PDF, DOCX, TXT |

*These limits change frequently. Always check the official up-to-date documentation.*

### Practical Prompts to Copy and Paste

**General summary:**
\`\`\`
Read this PDF document and give me a summary of no more than 300 words
with the most important points.
\`\`\`

**Clause search:**
\`\`\`
Review this contract and find all clauses related to
penalties, fines, or breach of contract. List each one with the
clause number and a summary in plain language.
\`\`\`

**Data extraction:**
\`\`\`
From this financial report, extract the following data and present them
in a table: total revenue, total expenses, net income,
and period covered.
\`\`\`

**Specific questions:**
\`\`\`
According to this document, what are the client's obligations?
List them in numbered format.
\`\`\`

**Simplification:**
\`\`\`
Explain this legal document as if you were explaining it
to someone with no legal background. Use simple language
and everyday examples.
\`\`\`

### Privacy Considerations

Before uploading any document, think about:

1. **Does it contain confidential information?** Contracts with client data, internal company documents, sensitive financial information -- all of this could be processed and stored by the AI provider.

2. **Does your company allow it?** Many organizations have policies about what information can be shared with external AI tools. Check first.

3. **Can you anonymize it?** If you need to analyze a contract but don't want to share real names, you can replace them before uploading the document.

4. **Use the available privacy options:** ChatGPT has the option to "not use my data for training" in settings. Claude does not use Pro plan conversations to train its models.

### Takeaways

- Uploading PDFs to AI saves you hours of manual reading and analysis
- Each platform has its own size and page limits
- Analysis quality depends on PDF quality (selectable text > scanned image)
- Always verify the extracted information -- AI can make mistakes
- Think twice before uploading documents with sensitive information`;

export const c8leccion2 = `## Summarizing Long Documents

One of AI's most powerful uses is taking a 50, 100, or 200-page document and getting a clear summary in seconds. But not all summaries are equal, and knowing **how to ask** for the right summary makes all the difference.

### The Problem with "Summarize This"

If you simply tell the AI "summarize this document," you'll get a generic summary that probably isn't exactly what you need. It's like going to a restaurant and saying "bring me something to eat" -- technically they'll bring you food, but maybe not what you wanted.

The key is to be specific about:
- **What you want to know** (the entire document or just a part)
- **What length** you want (a paragraph, half a page, a full page)
- **Who** the summary is for (for you, your boss, a client)
- **What format** you need it in (paragraph, bullets, table)

### Technique 1: Length-Controlled Summary

\`\`\`
Summarize this document in exactly 5 bullet points.
Each point should be 2 sentences maximum.
\`\`\`

\`\`\`
Write an executive summary of this report in 200 words maximum.
Include: context, main findings, and recommendations.
\`\`\`

\`\`\`
Summarize this article in a single sentence that captures the main idea.
\`\`\`

### Technique 2: Focused Summary

Instead of summarizing everything, ask it to focus on what matters to you:

\`\`\`
Read this contract and summarize only the supplier's obligations.
Ignore the payment and jurisdiction clauses.
\`\`\`

\`\`\`
From this annual report, summarize only the risks and challenges
section identified by the company. Omit the financial data.
\`\`\`

\`\`\`
Summarize this academic paper focusing on: methodology used,
main results, and study limitations.
\`\`\`

### Technique 3: Progressive Summary (Summary of Summaries)

When a document is **too long** to process in one go, you can use the progressive summary technique:

**Step 1:** Split the document into sections (chapters, parts, etc.)

**Step 2:** Ask for a summary of each section:
\`\`\`
Summarize chapter 1 of this document in 3-4 bullet points.
\`\`\`

**Step 3:** Once you have all the partial summaries, ask for a summary of the summary:
\`\`\`
Below are summaries of the 8 chapters of a report.
Create a unified executive summary of 500 words maximum that
integrates the most important points from all chapters.

[Paste the partial summaries]
\`\`\`

This technique works especially well for:
- Complete books
- Extensive annual reports
- Theses or research papers
- Technical product documentation

### Technique 4: Comparative Summary

If you have two or more documents on the same topic:

\`\`\`
I'm going to give you two articles on the same topic. I need you to:
1. Summarize each article in 3 key points
2. Identify where they agree
3. Identify where they contradict each other
4. Tell me which has stronger arguments and why
\`\`\`

### Summary Templates by Document Type

**For contracts:**
\`\`\`
Summarize this contract using the following structure:
- Parties involved
- Subject of the contract
- Duration and deadlines
- Obligations of each party
- Penalties for breach
- Termination conditions
\`\`\`

**For reports:**
\`\`\`
Create an executive summary of this report with:
- Report objective (1 sentence)
- Main findings (3-5 bullets)
- Key data with numbers
- Recommendations
- Suggested next steps
\`\`\`

**For academic articles:**
\`\`\`
Summarize this paper using this structure:
- Research question
- Methodology in simple language
- Main results
- Study limitations
- Practical implications
\`\`\`

**For news articles:**
\`\`\`
Summarize this news story by answering:
- What happened?
- Who is involved?
- When and where?
- Why is it important?
- What is expected to happen next?
\`\`\`

### Common Mistakes When Summarizing

1. **Not providing context about the purpose**: A summary for a board meeting is not the same as one for personal study. Tell the AI what you need it for.

2. **Blindly trusting the summary**: AI can omit important details or misinterpret nuances. If the document is critical (a contract, a medical report), use the summary as a guide but read the key parts yourself.

3. **Not asking it to cite sources**: If you need to verify, ask it to indicate on which page or section it found each point.

\`\`\`
Summarize this document and indicate in parentheses the page number
where each mentioned point can be found.
\`\`\`

4. **Summarizing without specifying language**: If the document is in one language and you want the summary in another, clarify:

\`\`\`
This document is in Spanish. I need a summary in English
of no more than 10 bullet points.
\`\`\`

### Takeaways

- Always specify length, format, and focus of the summary
- Use the progressive technique for documents that exceed the AI's limit
- Adapt the summary template to the document type
- Ask it to cite pages or sections if you need to verify
- A good AI summary saves you hours, but doesn't replace reading the critical parts`;

export const c8leccion3 = `## Analyzing Images with AI

Modern AI tools don't just read text -- they can also **see**. ChatGPT, Claude, and Gemini have vision capabilities that allow them to analyze photographs, screenshots, charts, diagrams, and much more.

This capability is known as **computer vision** or **multimodal models** (because they process multiple types of data: text and images).

### How to Upload Images on Each Platform

**ChatGPT (Plus/Team/Enterprise)**
- Click the paperclip icon and select an image
- Supported formats: PNG, JPG, GIF, WEBP
- You can also paste an image directly from the clipboard (Ctrl+V / Cmd+V)

**Claude (Pro/Team)**
- Click the paperclip icon and select the image
- Supported formats: PNG, JPG, GIF, WEBP
- You can upload multiple images in a single message

**Gemini (Advanced)**
- Upload images directly or take photos from your phone
- Gemini has native integration with Google Lens
- Supported formats: PNG, JPG, WEBP

### What Can AI "See"?

**With high accuracy:**
- Printed text in images (signs, labels, screenshots)
- Common objects (people, animals, vehicles, food)
- Charts and graphs (bar, line, pie)
- Colors, shapes, and general composition
- Flowcharts and org charts
- Screenshots of interfaces and apps
- Tables and structured data in images
- Programming code in screenshots

**With moderate accuracy:**
- Handwritten text (depends heavily on legibility)
- Small or blurry text
- Well-known logos and brands
- General facial expressions
- Simple blueprints and maps

**With difficulty or imprecision:**
- Text in languages with complex characters at low resolution
- Very precise spatial relationships ("which object is exactly 3 cm to the left?")
- Exact counting of numerous objects ("how many people are in this crowd?")
- Detection of manipulations or edits in photos
- Identification of specific individuals (for ethical reasons, models don't identify people)

### Practical Prompts for Image Analysis

**General description:**
\`\`\`
Describe this image in detail. Include: what you see,
where it appears to have been taken, and any visible text.
\`\`\`

**Chart analysis:**
\`\`\`
Analyze this chart and tell me:
1. What type of chart is it?
2. What data does it show?
3. What is the main trend?
4. Is there anything unusual or noteworthy?
5. Extract the approximate values into a table.
\`\`\`

**Reading receipts and tickets:**
\`\`\`
Read this receipt/ticket and extract the following information in table
format: date, merchant, list of items with individual prices,
subtotal, taxes, and total.
\`\`\`

**Screenshot analysis:**
\`\`\`
Look at this screenshot and tell me:
- What application or website is it?
- What is it showing?
- Are there any visible errors?
- What actions are available?
\`\`\`

**Accessibility (alt text):**
\`\`\`
Generate alternative text (alt text) for this image,
suitable for screen readers. It should be descriptive but concise,
2 sentences maximum.
\`\`\`

**Design analysis:**
\`\`\`
Analyze this image as if you were a graphic designer. Comment on:
- Composition and layout
- Color palette used
- Visible typography
- Visual hierarchy
- Possible improvements
\`\`\`

**Image comparison:**
\`\`\`
I'm showing you two images. I need you to:
1. Briefly describe each one
2. List the differences you find
3. List the similarities
\`\`\`

### Practical Use Cases

**1. Analyzing dashboards and visual reports**
You have a screenshot of a sales dashboard and need a quick analysis:
\`\`\`
Analyze this sales dashboard. Identify:
- The main metrics and their values
- Positive and negative trends
- Any data that looks concerning
Present your analysis as if it were for a 5-minute meeting.
\`\`\`

**2. Translating text from images**
You took a photo of a menu in another language:
\`\`\`
Read the text in this image, identify the language,
and translate it to English. Maintain the original format.
\`\`\`

**3. Understanding technical diagrams**
Someone sent you a flowchart or architecture diagram:
\`\`\`
Explain this diagram to me step by step, as if I had no
technical knowledge. What process does it describe? What are
the decision points?
\`\`\`

**4. Analyzing photos for accessibility**
If you work in web content and need descriptions:
\`\`\`
For each of these images, generate:
1. Short alt text (125 characters maximum)
2. Long description for additional context
3. Caption suggestion for social media
\`\`\`

### Tips for Better Results

1. **Upload high-resolution images**: The clearer the image, the better the analysis
2. **Crop out the unnecessary**: If you only need to analyze part of the image, crop it before uploading
3. **Be specific in your prompt**: "Analyze this image" is vague. "Read the text on the label and list the ingredients" is precise
4. **Combine text and image**: You can provide additional context. "This is an invoice from my internet provider. Extract the total amount and due date."
5. **Verify numerical data**: AI can misread numbers in images. If the data is critical, verify manually

### Takeaways

- ChatGPT, Claude, and Gemini can analyze images with remarkable accuracy
- They work best with clear printed text, charts, and screenshots
- They have limitations with very small text, handwriting, and counting objects
- Always combine the image with a specific prompt for better results
- Verify extracted information, especially numerical data`;

export const c8leccion4 = `## Extracting Data from Tables and Invoices

One of the most tedious tasks in any job is **manual data extraction**: copying numbers from an invoice to a spreadsheet, transferring data from a table in a PDF to Excel, or transcribing information from a receipt. AI can do this in seconds.

### The Power of Structured Extraction

The key to extracting data with AI is asking it to return the information in a **structured format** you can use directly. Don't ask it to "tell you" what the invoice says -- ask it to give you the data in a table, CSV, or JSON format.

### Extracting from Invoices and Receipts

**Basic invoice prompt:**
\`\`\`
Analyze this invoice and extract the following data in table format:

| Field | Value |
|---|---|
| Invoice number | |
| Issue date | |
| Due date | |
| Issuer (name and tax ID) | |
| Recipient (name and tax ID) | |
| Line items detail | |
| Subtotal | |
| Tax | |
| Total | |
| Payment terms | |
\`\`\`

**Prompt for multiple invoices:**
\`\`\`
I'm going to show you 5 invoices. For each one extract:
- Invoice number
- Date
- Vendor
- Total amount
- Main item description

Present everything in a unified table so I can copy it
to an Excel spreadsheet.
\`\`\`

**Prompt for grocery receipts:**
\`\`\`
Read this grocery receipt and create a table with columns:
Item | Quantity | Unit price | Total price

At the end include the subtotal, discounts (if any), and final total.
\`\`\`

### Extracting Tables from PDFs and Images

When you have a table in a PDF or screenshot and need the data in a usable format:

**Markdown table format:**
\`\`\`
Extract the table that appears in this document and reproduce it
in markdown format, keeping all rows and columns.
\`\`\`

**CSV format (for importing to Excel/Sheets):**
\`\`\`
Extract all data from this table and return them in CSV format.
Use commas as the separator. The first row should be the headers.
\`\`\`

**JSON format (for technical use):**
\`\`\`
Extract the data from this table in JSON format. Each row should be
an object with the columns as keys. Example structure:
[
  {"column1": "value", "column2": "value"},
  ...
]
\`\`\`

### Processing Spreadsheets and Excel Screenshots

Sometimes you have a screenshot of an Excel or Google Sheets spreadsheet:

\`\`\`
Look at this screenshot of a spreadsheet. I need you to:
1. Extract all visible data in table format
2. Identify the formulas that might be in use
   (based on the data patterns)
3. Flag any data that seems inconsistent
\`\`\`

### Validating and Verifying Extracted Data

This is a **critical** step that many people skip. AI can make mistakes when reading numbers, especially:
- Confusing 0 with O, 1 with l, 5 with S
- Transposing digits (1234 -> 1243)
- Losing decimals or adding nonexistent decimals
- Misinterpreting date formats (01/02/2025: January 2 or February 1?)

**Validation prompt:**
\`\`\`
Review the data you just extracted and perform the following
checks:
1. Do the subtotals correctly add up to the total?
2. Does the tax correspond to the standard percentage on the base?
3. Do quantities x unit prices equal the total prices?
4. Is there any data you find suspicious or hard to read?
Mark with a warning symbol any value you're not sure about.
\`\`\`

**Double-check prompt:**
\`\`\`
Look at the original image again and compare it with the table
you extracted. Are there any differences? List any corrections
you need to make.
\`\`\`

### Batch Processing

If you need to process many similar documents, the strategy is:

**1. Define a template first:**
\`\`\`
I'm going to show you several invoices from my vendor. For each one,
extract the data using EXACTLY this format:

Invoice: [number]
Date: [mm/dd/yyyy]
Amount: [amount with 2 decimals]
Description: [brief description]
Status: [paid/pending if determinable]

Separate them with a "---" line between each invoice.
\`\`\`

**2. Process in groups:**
If you have many documents, upload 3-5 per conversation to avoid the AI getting confused or losing accuracy.

**3. Ask for a consolidated summary at the end:**
\`\`\`
Now with all the invoices we processed, create a summary table
with: invoice number, date, vendor, amount.
Add a final row with the total of all amounts.
Sort by date from oldest to most recent.
\`\`\`

### Advanced Tips

**For invoices with poor image quality:**
\`\`\`
The quality of this image is not the best. Extract the data you can
read with confidence and mark with [?] any value you can't
read clearly.
\`\`\`

**For documents with non-standard format:**
\`\`\`
This document doesn't have a standard invoice format.
First describe what you see in the document, and then try
to extract the equivalent data for: issuer, recipient, date,
description, total amount.
\`\`\`

**For converting to accounting format:**
\`\`\`
Take the data from this invoice and convert them to a journal entry
with the format: Date | Account | Debit | Credit
Use standard chart of accounts categories.
\`\`\`

### Takeaways

- Always ask for data in a structured format (table, CSV, JSON)
- Use validation prompts to verify that extracted numbers are correct
- Mark uncertain data with warning symbols
- Process documents in batches with a consistent template
- Numerical data is most prone to errors -- always verify totals
- The better the quality of the image or PDF, the better the extraction`;

export const c8leccion5 = `## Projects with Multiple Files

So far we've been working with one document at a time. But in real life, you often need the AI to work with **several documents simultaneously**: comparing contracts, cross-referencing data from different reports, or analyzing a set of related documents.

### The Challenge: Limited Context

Each AI model has a **context limit** -- that is, a maximum amount of text it can "keep in mind" at the same time. Think of it as working memory: the more documents you give it, the less room it has to reason about them.

| Model | Approximate context window |
|---|---|
| ChatGPT (GPT-4o) | ~128K tokens (~90 pages) |
| Claude (Sonnet/Opus) | ~200K tokens (~150 pages) |
| Gemini (1.5 Pro) | ~1M tokens (~700 pages) |

*1 token ~ 0.75 words in English. These values are approximate and change with updates.*

### Strategy 1: Upload Multiple Files in One Conversation

The most straightforward approach is to upload several files and ask the AI to analyze them together:

\`\`\`
I've uploaded 3 files:
1. Original contract (2023)
2. Amendment addendum (2024)
3. Renewal proposal (2025)

I need you to:
- List the main changes between the original contract and the addendum
- Compare the addendum conditions with the renewal proposal
- Identify if there are clauses from the original contract that the
  renewal eliminates or modifies
\`\`\`

\`\`\`
I've uploaded the sales reports for Q1, Q2, Q3, and Q4 of 2025.
I want you to:
1. Create a comparative table quarter by quarter
2. Identify growth or decline trends
3. Point out the best and worst performing products
4. Give me an executive summary of the full year
\`\`\`

### Strategy 2: Use ChatGPT Projects

**ChatGPT Projects** lets you organize conversations and files under the same "project":

**How it works:**
1. In ChatGPT, create a new Project from the sidebar menu
2. Give it a descriptive name (e.g., "Vendor X Contract Analysis")
3. Upload documents to the project -- they remain available for ALL conversations within that project
4. Add project instructions that apply automatically

**Example project instructions:**
\`\`\`
You are a legal analyst specializing in commercial contracts.
You have access to our main vendor's contracts.
Whenever you respond:
- Cite the specific document and clause
- Use simple language, not legal jargon
- If you're unsure about something, clearly indicate it
\`\`\`

**Advantage:** You don't need to re-upload documents in each new conversation.

### Strategy 3: Use Claude Projects

**Claude Projects** works in a similar way:

1. In Claude, go to the "Projects" section
2. Create a new project and upload your documents
3. Define the project instructions (Claude calls them "Project Instructions")
4. All conversations within the project have access to the documents

**Example instructions:**
\`\`\`
This project contains the company's financial documents
for 2025. When analyzing these documents:
- Use US dollars as the default currency
- Present numbers with thousands format (1,000,000)
- If there are discrepancies between documents, flag them
- Prioritize accuracy over speed
\`\`\`

**Key advantage of Claude:** Its larger context window allows you to work with more extensive documents before losing precision.

### Strategy 4: Cross-Referencing Between Documents

When you need to cross-reference information between files:

\`\`\`
I have two documents:
- Document A: Employee list with their salaries
- Document B: Attendance record for the month

Cross-reference the information and generate a report that shows:
1. Employees who had more than 3 absences
2. The estimated cost of absences (daily salary x days absent)
3. Employees who appear in one document but not the other
\`\`\`

\`\`\`
Compare these two quotes (Vendor A and Vendor B) and create
a comparison table that includes:
- Items in common and price difference
- Items that only one vendor offers
- Total for each quote
- Your recommendation based on price and completeness
\`\`\`

### Strategy 5: Organizing Large Research Projects

For extensive research or analysis projects:

**Step 1 -- Index your documents:**
\`\`\`
I'm going to upload 10 articles about [topic]. For each one I need
you to note:
- Title
- Author/source
- Date
- Main argument
- Key data mentioned

Save this information as an "index" that we'll use later.
\`\`\`

**Step 2 -- Ask cross-cutting questions:**
\`\`\`
Based on the index we created, which articles
agree that [X]? Which ones contradict each other? Is there any data
that appears in multiple sources?
\`\`\`

**Step 3 -- Synthesize:**
\`\`\`
Using all the information from the 10 articles, write a 1-page
synthesis report that presents the main conclusions,
points of agreement, and open debates.
\`\`\`

### Limitations You Should Know

1. **Attention loss**: The more documents you give it, the more likely the AI will "forget" details from one of them. If you notice imprecise responses, remind it: "Check document X specifically."

2. **Confusion between documents**: With many files, the AI can mix up information. Always ask it to cite which document each piece of data comes from.

3. **Upload limits**: Each platform has a maximum number of files per message or per project. Check the current limits.

4. **Format matters**: Documents with selectable text (native PDF, DOCX) work much better than documents scanned as images.

5. **Long conversations lose context**: If a conversation gets very long, the AI may lose sight of the original documents. Better to start a new conversation within the same project.

### Pro Tip: The "Briefing" Technique

Before starting a complex analysis with multiple documents:

\`\`\`
Before we begin, confirm that you have access to the following
documents and briefly tell me what each one contains:
1. [file name 1]
2. [file name 2]
3. [file name 3]
\`\`\`

This confirms that the AI loaded everything correctly and understands what each file contains.

### Takeaways

- Uploading multiple files enables powerful cross-referencing analysis
- ChatGPT Projects and Claude Projects are ideal for working with many documents
- Define project instructions to avoid repeating context
- Always ask the AI to cite which document each piece of data comes from
- The more documents you use, the more important it is to be precise in your prompts
- If the conversation gets long, start a new one within the same project`;

export const c8leccion6 = ``;
