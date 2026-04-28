// English metadata for all courses and lessons (titles, descriptions, durations)

interface CourseEnMeta {
  tituloEn: string;
  descripcionEn: string;
  duracionEn: string;
  lecciones: Record<
    string,
    { tituloEn: string; descripcionEn: string; duracionEn?: string }
  >;
}

export const coursesEnMeta: Record<string, CourseEnMeta> = {
  "que-es-ia": {
    tituloEn: "What is Artificial Intelligence",
    descripcionEn:
      "A friendly introduction to the world of AI. Learn what it is, how it works, and why it matters in your daily life.",
    duracionEn: "2 hours",
    lecciones: {
      "que-es-ia-1": {
        tituloEn: "What is Artificial Intelligence",
        descripcionEn: "Discover what AI is with a simple analogy: cooking.",
      },
      "que-es-ia-2": {
        tituloEn: "AI in Your Daily Life",
        descripcionEn: "Discover where AI hides in your everyday routine.",
      },
      "que-es-ia-3": {
        tituloEn: "Myths vs. Realities of AI",
        descripcionEn: "We separate fiction from reality about AI.",
      },
      "que-es-ia-4": {
        tituloEn: "Types of Artificial Intelligence",
        descripcionEn: "Learn about the different types of AI that exist today.",
      },
      "que-es-ia-5": {
        tituloEn: "Essential AI Vocabulary",
        descripcionEn:
          "The 18 terms you need to know, with everyday analogies.",
      },
      "que-es-ia-6": {
        tituloEn: "Quiz: How Much Did You Learn About AI?",
        descripcionEn: "Test what you learned with 10 questions.",
      },
    },
  },
  "primera-conversacion-ia": {
    tituloEn: "Your First Conversation with AI",
    descripcionEn:
      "A hands-on course where you'll use ChatGPT, Claude, or Gemini for the first time. Step by step, no fear.",
    duracionEn: "2 hours",
    lecciones: {
      "conv-ia-1": {
        tituloEn: "What is ChatGPT, Claude, and Gemini?",
        descripcionEn:
          "Meet the three most popular AI assistants and their differences.",
      },
      "conv-ia-2": {
        tituloEn: "Create Your Account Step by Step",
        descripcionEn: "Step-by-step guide to create your free account.",
      },
      "conv-ia-3": {
        tituloEn: "Your First Question",
        descripcionEn: "5 example questions to break the ice with AI.",
      },
      "conv-ia-4": {
        tituloEn: "Understanding AI Responses",
        descripcionEn: "Learn to detect hallucinations and improve responses.",
      },
      "conv-ia-5": {
        tituloEn: "5 Useful Things You Can Do TODAY",
        descripcionEn:
          "Emails, recipes, summaries, translations, and travel with ready-to-use prompts.",
      },
      "conv-ia-6": {
        tituloEn: "Hands-On Exercise: 3 Guided Questions",
        descripcionEn: "Real step-by-step practice with your AI assistant.",
      },
      "conv-ia-7": {
        tituloEn: "Quiz: How Much Did You Learn?",
        descripcionEn: "10 questions to measure your progress.",
      },
    },
  },
  "ia-sin-miedo": {
    tituloEn: "AI Without Fear",
    descripcionEn:
      "We address the most common fears about AI honestly and give you a personal plan to get started.",
    duracionEn: "2 hours",
    lecciones: {
      "sin-miedo-1": {
        tituloEn: "Will AI Take My Job?",
        descripcionEn:
          "The truth about how AI changes (not eliminates) jobs.",
      },
      "sin-miedo-2": {
        tituloEn: "Privacy: What You Can and Should NOT Share",
        descripcionEn:
          "A clear list of what you should and should never share with AI.",
      },
      "sin-miedo-3": {
        tituloEn: "Does AI Make Mistakes? Yes, and Here's How to Protect Yourself",
        descripcionEn:
          "Hallucinations explained with real examples and how to verify.",
      },
      "sin-miedo-4": {
        tituloEn: "AI is a Tool, Not a Replacement",
        descripcionEn:
          "When to use AI and when to consult a human professional.",
      },
      "sin-miedo-5": {
        tituloEn: "Your Personal Plan to Start with AI",
        descripcionEn: "1 tool, 10 minutes, 1 week. Your action plan.",
      },
      "sin-miedo-6": {
        tituloEn: "Final Quiz: Introduction Level",
        descripcionEn:
          "15 questions covering the 3 introductory level courses.",
      },
    },
  },
  "domina-chatgpt-claude-gemini": {
    tituloEn: "Master ChatGPT, Claude, and Gemini",
    descripcionEn:
      "Get to know the differences, interfaces, and features of the three most popular AI assistants in depth.",
    duracionEn: "5 hours",
    lecciones: {
      "dcg-1": {
        tituloEn: "Real Differences Between ChatGPT, Claude, and Gemini",
        descripcionEn: "Deep comparison of the three assistants.",
      },
      "dcg-2": {
        tituloEn: "ChatGPT Interface and Features",
        descripcionEn: "Complete tour of the ChatGPT interface.",
      },
      "dcg-3": {
        tituloEn: "Claude Interface and Features",
        descripcionEn: "Artifacts, Projects, and long documents.",
      },
      "dcg-4": {
        tituloEn: "Gemini Interface and Features",
        descripcionEn: "Google Extensions and verification.",
      },
      "dcg-5": {
        tituloEn: "Mobile Apps and Voice Mode",
        descripcionEn: "Use AI from your phone and with your voice.",
      },
      "dcg-6": {
        tituloEn: "Perplexity: AI-Powered Search Engine",
        descripcionEn: "Searches with verifiable sources.",
      },
      "dcg-7": {
        tituloEn: "When to Use Which Tool",
        descripcionEn: "Practical guide by situation.",
      },
      "dcg-8": {
        tituloEn: "Quiz: Master the Tools",
        descripcionEn: "10 questions about the tools.",
      },
    },
  },
  "prompts-efectivos": {
    tituloEn: "Effective Prompts",
    descripcionEn:
      "Master the art of writing prompts that get exactly the results you need.",
    duracionEn: "5 hours",
    lecciones: {
      "pef-1": {
        tituloEn: "Anatomy of a Good Prompt",
        descripcionEn: "The ROLE + TASK + CONTEXT + FORMAT formula.",
      },
      "pef-2": {
        tituloEn: "Giving Context: The Key",
        descripcionEn: "Transform generic responses into personalized ones.",
      },
      "pef-3": {
        tituloEn: "Being Specific vs. Being Vague",
        descripcionEn: "6 ways to be more specific.",
      },
      "pef-4": {
        tituloEn: "Asking for Corrections and Improvements",
        descripcionEn: "The iterative conversation with AI.",
      },
      "pef-5": {
        tituloEn: "Prompts for Different Situations",
        descripcionEn: "Collection of ready-to-use prompts.",
      },
      "pef-6": {
        tituloEn: "Exercise: Transform 5 Prompts",
        descripcionEn: "Practice: from bad prompt to excellent.",
      },
      "pef-7": {
        tituloEn: "Quiz: Effective Prompts",
        descripcionEn: "10 questions about prompting.",
      },
    },
  },
  "ia-vida-cotidiana": {
    tituloEn: "AI in Your Everyday Life",
    descripcionEn:
      "Use AI to write emails, cook, travel, help with homework, and much more.",
    duracionEn: "5 hours",
    lecciones: {
      "ivc-1": {
        tituloEn: "Writing Emails and Messages",
        descripcionEn: "From scratch, improve existing ones, and adapt tone.",
      },
      "ivc-2": {
        tituloEn: "Recipes and Meal Planning",
        descripcionEn: "Personalized recipes and weekly menus.",
      },
      "ivc-3": {
        tituloEn: "Planning Trips and Itineraries",
        descripcionEn: "Itineraries, budgets, and checklists.",
      },
      "ivc-4": {
        tituloEn: "Helping with Homework",
        descripcionEn: "AI as a tutor, not as a homework doer.",
      },
      "ivc-5": {
        tituloEn: "Summarizing Articles and Documents",
        descripcionEn: "Methods and types of summaries.",
      },
      "ivc-6": {
        tituloEn: "Translating Between Languages",
        descripcionEn: "Translations with context and travel phrases.",
      },
      "ivc-7": {
        tituloEn: "Quiz: AI in Everyday Life",
        descripcionEn: "Closing the Basic Level.",
      },
    },
  },
  "prompt-engineering": {
    tituloEn: "Prompt Engineering: The Art of Asking",
    descripcionEn:
      "Master advanced prompting techniques to get professional results from AI.",
    duracionEn: "6 hours",
    lecciones: {
      "pe-1": {
        tituloEn: "The 5 Core Prompting Techniques",
        descripcionEn: "Fundamentals of prompt engineering.",
      },
      "pe-2": {
        tituloEn: "Few-Shot Learning: Teaching with Examples",
        descripcionEn: "How to give examples to guide AI.",
      },
      "pe-3": {
        tituloEn: "Chain-of-Thought: Thinking Step by Step",
        descripcionEn: "Make AI reason step by step.",
      },
      "pe-4": {
        tituloEn: "Assigning Roles and Personas",
        descripcionEn: "Role prompting for specialized responses.",
      },
      "pe-5": {
        tituloEn: "Using Structure: XML, Markdown, and JSON",
        descripcionEn: "Structured formats for better results.",
      },
      "pe-6": {
        tituloEn: "System Prompts vs User Prompts",
        descripcionEn: "Differences and when to use each one.",
      },
      "pe-7": {
        tituloEn: "Iteration and Refinement",
        descripcionEn: "Improve prompts iteratively.",
      },
      "pe-8": {
        tituloEn: "Quiz: Prompt Engineering",
        descripcionEn: "Put your skills to the test.",
      },
    },
  },
  "documentos-imagenes": {
    tituloEn: "Working with Documents and Images",
    descripcionEn:
      "Learn to analyze PDFs, images, and tables with AI tools.",
    duracionEn: "5 hours",
    lecciones: {
      "di-1": {
        tituloEn: "Upload PDFs and Analyze Them with AI",
        descripcionEn: "PDF document analysis.",
      },
      "di-2": {
        tituloEn: "Summarizing Long Documents",
        descripcionEn: "Techniques for summarizing extensive texts.",
      },
      "di-3": {
        tituloEn: "Analyzing Images with AI",
        descripcionEn: "Computer vision for everyone.",
      },
      "di-4": {
        tituloEn: "Extracting Data from Tables and Invoices",
        descripcionEn: "Automatic data extraction.",
      },
      "di-5": {
        tituloEn: "Projects with Multiple Files",
        descripcionEn: "Working with document sets.",
      },
      "di-6": {
        tituloEn: "Quiz: Documents and Images",
        descripcionEn: "Evaluate what you learned.",
      },
    },
  },
  "flujos-trabajo-ia": {
    tituloEn: "AI Workflows",
    descripcionEn:
      "Create complete workflows combining multiple AI techniques for real projects.",
    duracionEn: "6 hours",
    lecciones: {
      "ft-1": {
        tituloEn: "Prompt Chaining: Breaking into Steps",
        descripcionEn: "Chain prompts for complex tasks.",
      },
      "ft-2": {
        tituloEn: "Memory and Projects in ChatGPT/Claude",
        descripcionEn: "Using memory and projects.",
      },
      "ft-3": {
        tituloEn: "Tokens and Context Windows",
        descripcionEn: "Understanding AI's limits.",
      },
      "ft-4": {
        tituloEn: "Prompt Evaluations",
        descripcionEn: "How to know if a prompt is good.",
      },
      "ft-5": {
        tituloEn: "Your Personal Prompt Library",
        descripcionEn: "Organize and reuse your best prompts.",
      },
      "ft-6": {
        tituloEn: "Project: Complete Workflow",
        descripcionEn: "Integrative practical project.",
      },
      "ft-7": {
        tituloEn: "Final Quiz: Workflows",
        descripcionEn: "Intermediate level assessment.",
      },
    },
  },
  "asistente-ia-propio": {
    tituloEn: "Create Your Own AI Assistant",
    descripcionEn:
      "Build custom assistants with Custom GPTs, Claude Projects, and knowledge bases.",
    duracionEn: "8 hours",
    lecciones: {
      "ap-1": {
        tituloEn: "Custom GPTs and Claude Projects",
        descripcionEn: "What they are and what they're for.",
      },
      "ap-2": {
        tituloEn: "Create Your First Custom GPT",
        descripcionEn: "Step by step from scratch.",
      },
      "ap-3": {
        tituloEn: "Custom Instructions",
        descripcionEn: "Configure your assistant's behavior.",
      },
      "ap-4": {
        tituloEn: "Knowledge Base with Documents",
        descripcionEn: "Upload documents as reference.",
      },
      "ap-5": {
        tituloEn: "Connecting to Real Data (Basic RAG)",
        descripcionEn: "Introduction to RAG.",
      },
      "ap-6": {
        tituloEn: "Test and Improve Your Assistant",
        descripcionEn: "Testing and optimization.",
      },
      "ap-7": {
        tituloEn: "Share Your Assistant",
        descripcionEn: "Publish and distribute.",
      },
      "ap-8": {
        tituloEn: "Quiz: AI Assistants",
        descripcionEn: "Evaluate what you learned.",
      },
    },
  },
  "automatiza-con-ia": {
    tituloEn: "Automate with AI",
    descripcionEn:
      "Create automated workflows with Zapier, Make, n8n, and vibe coding.",
    duracionEn: "7 hours",
    lecciones: {
      "aut-1": {
        tituloEn: "What is Automation",
        descripcionEn: "Fundamentals of automation.",
      },
      "aut-2": {
        tituloEn: "Zapier + AI: Your First Flow",
        descripcionEn: "Automation with Zapier.",
      },
      "aut-3": {
        tituloEn: "Make/n8n: Powerful Alternatives",
        descripcionEn: "Advanced tools.",
      },
      "aut-4": {
        tituloEn: "Automating Emails and Responses",
        descripcionEn: "Email automation with AI.",
      },
      "aut-5": {
        tituloEn: "Automating Summaries and Reports",
        descripcionEn: "Automatic reports.",
      },
      "aut-6": {
        tituloEn: "Vibe Coding: Describe Apps in Plain Language",
        descripcionEn: "Create apps in natural language.",
      },
      "aut-7": {
        tituloEn: "Quiz: Automation with AI",
        descripcionEn: "Evaluate what you learned.",
      },
    },
  },
  "apis-ia": {
    tituloEn: "Introduction to AI APIs",
    descripcionEn:
      "Understand what APIs are, how to use them, and how to embed AI in your projects.",
    duracionEn: "7 hours",
    lecciones: {
      "api-1": {
        tituloEn: "What is an API (Explained Simply)",
        descripcionEn: "API fundamentals.",
      },
      "api-2": {
        tituloEn: "API Keys: What They Are and How to Protect Them",
        descripcionEn: "API key security.",
      },
      "api-3": {
        tituloEn: "Your First Call to the Gemini API",
        descripcionEn: "Hands-on with Gemini API.",
      },
      "api-4": {
        tituloEn: "Groq API for Fast Responses",
        descripcionEn: "Fast AI with Groq.",
      },
      "api-5": {
        tituloEn: "Costs: How Much Do APIs Cost?",
        descripcionEn: "Understanding pricing and tokens.",
      },
      "api-6": {
        tituloEn: "Embed a Chatbot in a Website",
        descripcionEn: "Integrate AI into websites.",
      },
      "api-7": {
        tituloEn: "Quiz: AI APIs",
        descripcionEn: "Evaluate what you learned.",
      },
    },
  },
  "programacion-con-ia": {
    tituloEn: "Programming with AI: From Zero to Your First App",
    descripcionEn:
      "Learn basic Python and build your first application with artificial intelligence.",
    duracionEn: "12 hours",
    lecciones: {
      "prog-1": {
        tituloEn: "Basic Python for AI",
        descripcionEn: "Your first program in Python.",
      },
      "prog-2": {
        tituloEn: "Variables, Lists, and Functions",
        descripcionEn: "Basic Python structures.",
      },
      "prog-3": {
        tituloEn: "Your First App with Streamlit",
        descripcionEn: "Quick web interfaces.",
      },
      "prog-4": {
        tituloEn: "Connecting Python to ChatGPT/Claude",
        descripcionEn: "AI APIs from Python.",
      },
      "prog-5": {
        tituloEn: "Text Processing with Python",
        descripcionEn: "Basic NLP.",
      },
      "prog-6": {
        tituloEn: "Reading and Processing CSV/Excel Files",
        descripcionEn: "Data processing with pandas.",
      },
      "prog-7": {
        tituloEn: "Basic Web Scraping with AI",
        descripcionEn: "Extract data from the web.",
      },
      "prog-8": {
        tituloEn: "Git and GitHub for Your Projects",
        descripcionEn: "Version control.",
      },
      "prog-9": {
        tituloEn: "Deploy: Publish Your App for Free",
        descripcionEn: "Cloud deployment.",
      },
      "prog-10": {
        tituloEn: "Final Project: Complete App",
        descripcionEn: "Build your AI app.",
      },
    },
  },
  "rag-busqueda-inteligente": {
    tituloEn: "RAG and Intelligent Search",
    descripcionEn:
      "Implement Retrieval-Augmented Generation to create search systems over your data.",
    duracionEn: "10 hours",
    lecciones: {
      "rag-1": {
        tituloEn: "What is RAG and Why It Revolutionized AI",
        descripcionEn: "RAG fundamentals.",
      },
      "rag-2": {
        tituloEn: "Pipeline: Document -> Embeddings -> Search",
        descripcionEn: "The complete pipeline.",
      },
      "rag-3": {
        tituloEn: "Implementing RAG with LangChain",
        descripcionEn: "Hands-on with LangChain.",
      },
      "rag-4": {
        tituloEn: "RAG on Your Own PDFs",
        descripcionEn: "Intelligent document search.",
      },
      "rag-5": {
        tituloEn: "Optimizing Response Quality",
        descripcionEn: "Improving RAG accuracy.",
      },
      "rag-6": {
        tituloEn: "RAG Evaluations and Metrics",
        descripcionEn: "Measuring system quality.",
      },
      "rag-7": {
        tituloEn: "Project: Intelligent Search Engine",
        descripcionEn: "Build your document search engine.",
      },
      "rag-8": {
        tituloEn: "Quiz: RAG and Intelligent Search",
        descripcionEn: "Evaluate what you learned.",
      },
    },
  },
  "agentes-ia-deployment": {
    tituloEn: "AI Agents and Deployment",
    descripcionEn:
      "Build autonomous agents with tools, MCP, and deploy them to production.",
    duracionEn: "12 hours",
    lecciones: {
      "ag-1": {
        tituloEn: "What Are AI Agents",
        descripcionEn: "Fundamentals of autonomous agents.",
      },
      "ag-2": {
        tituloEn: "Tool Use and Function Calling",
        descripcionEn: "Giving tools to AI.",
      },
      "ag-3": {
        tituloEn: "MCP: Model Context Protocol",
        descripcionEn: "The model context protocol.",
      },
      "ag-4": {
        tituloEn: "Build an Agent Step by Step",
        descripcionEn: "Your first functional agent.",
      },
      "ag-5": {
        tituloEn: "Deploy on Vercel and HuggingFace",
        descripcionEn: "Cloud deployment.",
      },
      "ag-6": {
        tituloEn: "Costs and Latency Optimization",
        descripcionEn: "Optimize performance and costs.",
      },
      "ag-7": {
        tituloEn: "Security: Prompt Injection and Jailbreaks",
        descripcionEn: "Protect your AI apps.",
      },
      "ag-8": {
        tituloEn: "Quiz: AI Agents",
        descripcionEn: "Evaluate what you learned.",
      },
    },
  },
};
