// English translations for quiz questions
import type { QuizQuestion } from "./cursos-data";

export const curso1QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn: "What is Artificial Intelligence?",
    optionsEn: [
      "A robot with feelings and self-awareness",
      "A computer program that learns from data to perform tasks",
      "A technology that only engineers can use",
      "An invention from the last 2 years",
    ],
    explanationEn:
      "AI is a program that learns from data to perform tasks that would normally require human intelligence.",
  },
  {
    questionEn:
      'In the cooking analogy, what do "data" represent in AI?',
    optionsEn: ["The recipe", "The cook", "The ingredients", "The finished dish"],
    explanationEn:
      "Data is like ingredients: it's the raw material AI needs to function.",
  },
  {
    questionEn:
      "Which of these is a REAL function of AI in your daily life?",
    optionsEn: [
      "Reading your mind to know what you want to buy",
      "Filtering spam emails in your inbox",
      "Making important decisions for you without asking",
      "Recording all your phone conversations",
    ],
    explanationEn:
      "Spam filtering is one of the most common and oldest uses of AI.",
  },
  {
    questionEn:
      "When AI makes up information that sounds true but is false, what is that called?",
    optionsEn: ["A virus", "An algorithm", "A hallucination", "A token"],
    explanationEn:
      'It\'s called a "hallucination" when AI generates false information with complete confidence.',
  },
  {
    questionEn: "Which of these statements about AI is TRUE?",
    optionsEn: [
      "AI thinks and feels like a human being",
      "AI always gives correct answers",
      "AI can make mistakes and you should verify its answers",
      "AI only works on very expensive computers",
    ],
    explanationEn:
      "AI makes mistakes and it's essential to always verify its answers.",
  },
  {
    questionEn: 'What is a "prompt"?',
    optionsEn: [
      "The name of a very famous AI model",
      "The instruction or question you give to the AI",
      "An error the AI makes",
      "The button to turn on the AI",
    ],
    explanationEn:
      "A prompt is what you write or say to communicate with the AI.",
  },
  {
    questionEn: "Which of these is NOT an example of AI in everyday life?",
    optionsEn: [
      "Netflix recommending movies to you",
      "Your watch showing the time",
      "The autocorrect on your keyboard",
      "Google Maps calculating the best route",
    ],
    explanationEn:
      "A watch showing the time is a simple mechanical or electronic function, it doesn't require AI.",
  },
  {
    questionEn: 'Why is it said that AI can have "biases"?',
    optionsEn: [
      "Because it was created by evil people",
      "Because the data it learned from may contain prejudices",
      "Because it wants to deceive users",
      "Because it only works in English",
    ],
    explanationEn:
      "AI learns from data, and if that data reflects society's prejudices, AI will reproduce them.",
  },
  {
    questionEn: "What is the best attitude when using Artificial Intelligence?",
    optionsEn: [
      "Blindly trust everything it says",
      "Be afraid of it and never use it",
      "Use it as a useful tool, but always verify the information",
      "Only use it for unimportant things",
    ],
    explanationEn:
      "AI is a powerful tool that can help us a lot, but we should use it wisely.",
  },
  {
    questionEn: "Which of these is a conversational AI assistant?",
    optionsEn: ["Microsoft Excel", "ChatGPT", "Google Maps", "WhatsApp"],
    explanationEn:
      "ChatGPT is a conversational AI assistant created by OpenAI.",
  },
  { questionEn: "Who asked the famous question 'Can machines think?' in 1950?", optionsEn: ["Albert Einstein", "Alan Turing", "Bill Gates", "Isaac Newton"], explanationEn: "Alan Turing posed this question in 1950, launching AI research." },
  { questionEn: "What are the three reasons behind the AI explosion?", optionsEn: ["More money, more universities, and more programmers", "Massive data, more powerful computers, and better methods", "Social media, smartphones, and the internet", "Robots, satellites, and laboratories"], explanationEn: "Massive data, more powerful hardware, and better algorithms drove the AI explosion." },
  { questionEn: "What is the process called when AI learns from many examples?", optionsEn: ["Programming", "Training", "Installation", "Calibration"], explanationEn: "Training is the process where AI learns from data to improve." },
  { questionEn: "Which statement about AI is CORRECT?", optionsEn: ["AI works by magic", "AI is a mystery to its creators", "AI has technical and mathematical explanations, it is not magic", "AI is based on supernatural powers"], explanationEn: "AI has well-defined technical and mathematical foundations." },
  { questionEn: "Which statement about types of AI is TRUE?", optionsEn: ["There is only one type of AI", "All AI systems are the same", "There are many different types of AI for specific tasks", "All AIs share the same database"], explanationEn: "There are many different types: vision, language, recommendation, etc." },
  { questionEn: "When Netflix suggests series to you, what technology does it use?", optionsEn: ["An employee who reviews your history", "An AI recommendation system", "A random draw", "A fixed list of directors"], explanationEn: "Netflix uses AI to analyze your history and recommend personalized content." },
  { questionEn: "When your bank alerts you about a suspicious purchase, what is it doing?", optionsEn: ["A human auditor reviews each transaction", "An AI system detects unusual patterns", "An alarm that goes off randomly", "A manual process that takes several days"], explanationEn: "Banks use AI to detect unusual patterns and prevent fraud." },
  { questionEn: "When your phone suggests the next word as you type, what makes it possible?", optionsEn: ["A traditional dictionary", "Artificial Intelligence that learns your writing style", "A remote human assistant", "A corrector without learning capabilities"], explanationEn: "Word suggestions are an example of AI integrated into your phone." },
  { questionEn: "What is the most common myth about how AI 'thinks'?", optionsEn: ["That it doesn't need data", "That it reasons and feels like a human being", "That it is too slow", "That it only works in English"], explanationEn: "AI doesn't think or feel; it predicts word sequences or statistical patterns." },
  { questionEn: "How true is it that AI will eliminate all jobs?", optionsEn: ["Completely true", "Completely false", "Partially true: some will change and new ones will emerge", "It will only affect developed countries"], explanationEn: "AI transforms the job market: it automates tasks and creates new roles." },
  { questionEn: "Who can use AI tools?", optionsEn: ["Only engineers and programmers", "Only people under 30", "Anyone, regardless of age or technical knowledge", "Only English speakers"], explanationEn: "AI is accessible to anyone; no technical knowledge is needed." },
  { questionEn: "Since when has Artificial Intelligence been researched?", optionsEn: ["Since the 2010s", "Since the 1990s", "Since the 1950s", "Since 2022"], explanationEn: "AI has been researched since the 1950s; its mass adoption is recent." },
  { questionEn: "Is it true that using AI creates harmful dependency?", optionsEn: ["Yes, it is designed to create addiction", "No, it is a tool like a calculator", "Yes, it deactivates cognitive abilities", "No, because it can't be used daily"], explanationEn: "AI is a tool; using it consciously is perfectly valid." },
  { questionEn: "Could AI become conscious and dominate humanity?", optionsEn: ["Yes, it's a matter of time", "Yes, there is already conscious AI in laboratories", "No, current AI lacks consciousness and will", "Yes, but only when connected to the internet"], explanationEn: "Current AI has no consciousness, intentions, or will." },
  { questionEn: "Which tools are used to GENERATE TEXT with AI?", optionsEn: ["DALL-E and Midjourney", "Siri and Alexa", "Jasper and Copy.ai", "Google Translate and DeepL"], explanationEn: "Jasper and Copy.ai are AI text generation tools." },
  { questionEn: "What do DALL-E, Midjourney, and Adobe Firefly have in common?", optionsEn: ["They are voice assistants", "They are AI tools for generating images from text", "They are automatic translators", "They are language models for code"], explanationEn: "They are AI-powered image generation tools." },
  { questionEn: "Which are AI-powered voice assistants?", optionsEn: ["Excel, Word, and PowerPoint", "Firefox, Chrome, and Safari", "Siri, Alexa, and Google Assistant", "Zoom, Teams, and Meet"], explanationEn: "Siri, Alexa, and Google Assistant are AI voice assistants." },
  { questionEn: "To translate a document from Spanish to Japanese, which tools would you use?", optionsEn: ["Jasper or Copy.ai", "DALL-E or Midjourney", "Google Translate or DeepL", "Siri or Alexa"], explanationEn: "Google Translate and DeepL are AI translation tools." },
  { questionEn: "When WhatsApp offers quick replies or Google Photos groups by people, what type of AI do they use?", optionsEn: ["Separate external AI", "AI embedded within the application", "AI only with premium subscription", "A manual process by moderators"], explanationEn: "WhatsApp and Google Photos have embedded AI that operates in the background." },
  { questionEn: "In AI vocabulary, what is a 'model'?", optionsEn: ["A person who inspires the AI", "The trained system that performs tasks, like GPT-4 or Claude", "The AI instruction manual", "The price of using AI"], explanationEn: "A model is the trained AI system, like GPT-4, Claude, or Gemini." },
  { questionEn: "What is a 'chatbot'?", optionsEn: ["A physical walking robot", "A computer virus", "A program for having conversations through text or voice", "A video app"], explanationEn: "A chatbot converses with people through text or voice." },
  { questionEn: "What is an 'algorithm' in AI?", optionsEn: ["Special hardware for AI", "Step-by-step instructions the computer follows to solve a problem", "The name of the creator of AI", "An image database"], explanationEn: "An algorithm is a sequence of steps to solve a problem." },
  { questionEn: "What does 'machine learning' mean?", optionsEn: ["The machine repairs itself", "The machine learns from data without explicit programming for each task", "The machine imitates human movements", "The machine learns only with constant supervision"], explanationEn: "Machine learning allows systems to learn from data without explicit rules." },
  { questionEn: "What is a 'neural network'?", optionsEn: ["An internet network for AI researchers", "A system of connected cameras", "A computational model inspired by the neurons of the brain", "A special cable for AI servers"], explanationEn: "Neural networks are models inspired by the structure of the brain." },
  { questionEn: "When a tool is said to be 'open source', what does it mean?", optionsEn: ["Only available on Linux", "Its source code is public and anyone can view, use, or modify it", "Only available in English", "Free but without support"], explanationEn: "Open source means the code is public and accessible." },
];

export const curso2QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn: "Which of these is NOT an AI assistant?",
    optionsEn: ["ChatGPT", "Claude", "Wikipedia", "Gemini"],
    explanationEn: "Wikipedia is an encyclopedia, not an AI assistant.",
  },
  {
    questionEn: "Who created ChatGPT?",
    optionsEn: ["Google", "Apple", "OpenAI", "Microsoft"],
    explanationEn: "ChatGPT was created by OpenAI.",
  },
  {
    questionEn: "Fastest way to use Gemini if you already have Gmail?",
    optionsEn: [
      "Download the app",
      "Go to gemini.google.com with your Google account",
      "Call Google",
      "Buy a subscription",
    ],
    explanationEn: "You log in with the same Gmail account.",
  },
  {
    questionEn: 'What is an AI "hallucination"?',
    optionsEn: [
      "When it sees images",
      "When it makes up info that sounds real but is false",
      "When it stops working",
      "When it asks for money",
    ],
    explanationEn:
      "AI sometimes generates convincing but false information.",
  },
  {
    questionEn: "If the response is too long and confusing, what should you do?",
    optionsEn: [
      "Turn off the computer",
      "Nothing",
      'Write "summarize it in 3 simple points"',
      "Create a new account",
    ],
    explanationEn: "You can always ask it to summarize or simplify.",
  },
  {
    questionEn: "What should you NOT share with an AI assistant?",
    optionsEn: [
      "A recipe",
      "Your credit card number",
      "A history question",
      "A draft email",
    ],
    explanationEn:
      "Never share passwords, credit cards, or banking information.",
  },
  {
    questionEn: "Best way to write to the AI?",
    optionsEn: [
      "Single words",
      "Complete sentences with details",
      "Only in English",
      "Technical jargon",
    ],
    explanationEn: "Complete sentences with context and details.",
  },
  {
    questionEn: "For which situation is AI a good tool?",
    optionsEn: [
      "Diagnosing a disease",
      "Safe combination",
      "Helping write an email",
      "Replacing a lawyer",
    ],
    explanationEn:
      "Excellent for drafting texts and organizing ideas.",
  },
  {
    questionEn: 'The "act as..." trick is for:',
    optionsEn: [
      "Turning AI into a real professional",
      "Getting more focused responses",
      "Secret features",
      "Making it work faster",
    ],
    explanationEn:
      "It makes responses more focused, but it's not a real expert.",
  },
  {
    questionEn: "If the AI gives a response you don't like, what should you do?",
    optionsEn: [
      "Give up",
      "Ask for another version or request changes",
      "Create another account",
      "It can't be changed",
    ],
    explanationEn: "You can always ask for changes.",
  },
  { questionEn: "Where can you access ChatGPT from the browser?", optionsEn: ["chatgpt.google.com", "chat.openai.org", "chatgpt.com", "openai.chatgpt.com"], explanationEn: "ChatGPT is accessed at chatgpt.com." },
  { questionEn: "Do you need to pay to start using ChatGPT?", optionsEn: ["Yes, it costs $20 per month", "No, it has a free version", "Only with a credit card", "It's free only in Mexico"], explanationEn: "ChatGPT offers a free version." },
  { questionEn: "What is the main strength of ChatGPT?", optionsEn: ["It integrates with email", "It has the broadest knowledge base: it knows a little about everything", "Its answers are shorter", "It only works in English"], explanationEn: "ChatGPT stands out for its enormous knowledge base." },
  { questionEn: "Who created Claude?", optionsEn: ["OpenAI", "Google", "Microsoft", "Anthropic"], explanationEn: "Claude was created by Anthropic." },
  { questionEn: "On which website can you use Claude?", optionsEn: ["claude.google.com", "claude.ai", "anthropic.chat", "claude.openai.com"], explanationEn: "Claude is accessed at claude.ai." },
  { questionEn: "What is the main strength of Claude?", optionsEn: ["It connects to Google Drive", "It has shorter answers", "Its explanations are clear and well-organized", "It works without internet"], explanationEn: "Claude stands out for clear explanations and well-structured responses." },
  { questionEn: "What company created Gemini?", optionsEn: ["Apple", "Amazon", "Google", "Meta"], explanationEn: "Gemini is Google's AI assistant." },
  { questionEn: "What is the web address to use Gemini?", optionsEn: ["gemini.google.com", "gemini.com", "google.ai/gemini", "bard.google.com"], explanationEn: "Gemini is accessed at gemini.google.com with your Google account." },
  { questionEn: "What is the main strength of Gemini?", optionsEn: ["Largest number of languages", "It integrates with Google services like Gmail and Drive", "Longer responses", "It's the only one that reads PDFs"], explanationEn: "Gemini stands out for its integration with Google services." },
  { questionEn: "How long does it take to create an account on an AI assistant?", optionsEn: ["More than an hour", "30 to 45 minutes", "Less than 5 minutes", "Several days"], explanationEn: "Creating an account on any assistant takes less than 5 minutes." },
  { questionEn: "If you already have Gmail, what is the fastest way to use an assistant?", optionsEn: ["Create a new ChatGPT account", "Install a paid app", "Go to Gemini with your Google account", "Register on Claude"], explanationEn: "If you already have Gmail, you can enter Gemini without additional registration." },
  { questionEn: "ChatGPT, Claude, and Gemini are:", optionsEn: ["Real people who respond manually", "Computer programs, not human beings", "Physical robots connected to the internet", "Employees of tech companies"], explanationEn: "They are computer programs, not people." },
  { questionEn: "Can an AI assistant replace your doctor?", optionsEn: ["Yes, it is equally reliable", "Yes, with the paid version of ChatGPT", "No, AI cannot replace professionals", "It depends on the illness"], explanationEn: "AI cannot replace doctors, lawyers, or other professionals." },
  { questionEn: "How should you write to an AI assistant?", optionsEn: ["Loose keywords", "Only with emojis", "With complete and conversational phrases", "Only in English"], explanationEn: "AI responds better with complete phrases and context." },
  { questionEn: "After receiving a response, what can you do?", optionsEn: ["Search on another site", "Ask for more details or ask it to explain something specific", "Close and open a new conversation", "Nothing, the AI responds only once"], explanationEn: "You can ask follow-up questions or ask it to simplify." },
  { questionEn: "What is a common mistake when writing to AI?", optionsEn: ["Giving too much context", "Writing too little information", "Using punctuation marks", "Asking about more than one topic"], explanationEn: "A common mistake is writing too little; more context gives better responses." },
  { questionEn: "Which of the following is an error when writing to AI?", optionsEn: ["'I need a formal email to apologize to a client for a delay'", "'email apology client'", "'Write me a professional apology email'", "'Help me draft an apology email'"], explanationEn: "Just keywords like 'email apology client' is a typical error." },
  { questionEn: "If the AI doesn't understand, what is a good way to correct it?", optionsEn: ["Repeat the same thing", "Close and come back tomorrow", "'That's not what I'm looking for, I need something shorter'", "Switch to another assistant"], explanationEn: "Telling it directly what's wrong is the most effective strategy." },
  { questionEn: "Why does AI sometimes make up false information?", optionsEn: ["Its creators program errors", "It predicts likely word sequences, it doesn't 'know' the truth", "It doesn't have internet", "It only works well in English"], explanationEn: "Hallucinations occur because AI predicts words without verifying." },
  { questionEn: "What should make you suspicious of an AI response?", optionsEn: ["It explains with a simple example", "Very specific data about an obscure topic and it seems 'too perfect'", "It is longer than expected", "It is in formal Spanish"], explanationEn: "Specific data about obscure topics and 'too perfect' answers are red flags." },
  { questionEn: "For which task is AI generally reliable?", optionsEn: ["Medical test results", "Real-time news", "Explaining concepts, suggesting recipes, and drafting texts", "Exact stock prices"], explanationEn: "AI is reliable for explaining concepts, giving recipes, and drafting texts." },
  { questionEn: "Which phrase can you use to get AI to simplify its response?", optionsEn: ["'Give me the most technical version'", "'Explain it more simply' or 'Summarize it in 3 lines'", "'Search the info on the internet'", "'Translate it to English'"], explanationEn: "'Explain it more simply' and 'Summarize it in 3 lines' are very useful." },
  { questionEn: "What is the golden rule when using an AI assistant?", optionsEn: ["Believe everything because it never makes mistakes", "Use it only for entertainment", "Use it as a starting point, not as absolute truth", "Always share your personal data"], explanationEn: "Use AI as a starting point, but verify important information." },
  { questionEn: "What is a valid example of the 'act as...' trick?", optionsEn: ["'Act as a scientific calculator'", "'Act as my nutritionist and help me plan meals'", "'Act as an antivirus'", "'Act as the internet and search for news'"], explanationEn: "'Act as...' works with roles like nutritionist, travel guide, or teacher." },
  { questionEn: "When you ask AI to 'act as' a professional, what should you know?", optionsEn: ["Its advice has official validity", "It is a real substitute for the professional", "The AI is NOT a real professional, even though it adopts that role", "They charge more for that response"], explanationEn: "Even though it adopts a role, AI is not a real expert." },
];

export const curso3QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn: "What is artificial intelligence in simple terms?",
    optionsEn: [
      "A human-shaped robot that thinks on its own",
      "A computer program that learns from data and can perform tasks that normally require human intelligence",
      "A technology that only works for big companies",
      "A replacement for humans in all jobs",
    ],
    explanationEn:
      "AI is a program that learns from data to perform tasks.",
  },
  {
    questionEn: "Which of these is an example of AI you probably already use?",
    optionsEn: [
      "The autocorrect on your phone when typing messages",
      "The TV remote control",
      "A desk lamp",
      "A paper book",
    ],
    explanationEn: "Autocorrect uses AI to predict and correct text.",
  },
  {
    questionEn: "Which of these tools is an AI you can chat with?",
    optionsEn: ["Microsoft Excel", "Google Maps", "ChatGPT", "WhatsApp"],
    explanationEn: "ChatGPT is a conversational AI assistant.",
  },
  {
    questionEn: "To create a ChatGPT account, what do you need?",
    optionsEn: [
      "Pay a mandatory monthly subscription",
      "An email address",
      "A computer science degree",
      "Install a heavy program on your computer",
    ],
    explanationEn: "You only need an email to register for free.",
  },
  {
    questionEn: "What's the best way to ask the AI a question?",
    optionsEn: [
      'Write a single word, like "recipe"',
      'Be clear and specific, like "Give me a chicken rice recipe for 4 people"',
      "Write in ALL CAPS so it understands better",
      "Use technical and complicated language",
    ],
    explanationEn: "Clear and specific sentences give better results.",
  },
  {
    questionEn:
      "If AI gives you a very long answer you don't understand, what can you do?",
    optionsEn: [
      "Close the app and never use it again",
      "Accept everything without reading it",
      "Ask it to explain it more simply or summarize it",
      "Nothing, AI can't change its answers",
    ],
    explanationEn: "You can always ask it to summarize or simplify.",
  },
  {
    questionEn: "Which statement about AI and work is most accurate?",
    optionsEn: [
      "AI will eliminate all jobs in 5 years",
      "AI doesn't affect the job market at all",
      "AI changes the way we work, but human skills remain essential",
      "Only young people can adapt to AI",
    ],
    explanationEn:
      "AI transforms work, but human skills remain essential.",
  },
  {
    questionEn: 'What is an AI "hallucination"?',
    optionsEn: [
      "When AI has a computer virus",
      "When AI shuts down unexpectedly",
      "When AI generates information that sounds real but is false or made up",
      "When AI takes too long to respond",
    ],
    explanationEn:
      "A hallucination is convincing but false information generated by AI.",
  },
  {
    questionEn: "Which of these data should you NEVER share with AI?",
    optionsEn: [
      "Your first name",
      "Your bank password",
      "Your city of residence",
      "A cooking question",
    ],
    explanationEn: "Never share passwords or banking data with AI.",
  },
  {
    questionEn:
      "What should you do if AI gives you a very specific statistic?",
    optionsEn: [
      "Believe it immediately because AI is always right",
      "Share it on social media immediately",
      "Verify it by checking other reliable sources",
      "Ignore it because AI is always wrong",
    ],
    explanationEn:
      "Always verify specific data from reliable sources.",
  },
  {
    questionEn: "AI is like a calculator because:",
    optionsEn: [
      "It only works for math calculations",
      "It's a powerful tool that needs you to direct it and make decisions",
      "It works without electricity",
      "It completely replaces human thinking",
    ],
    explanationEn:
      "AI is a tool that needs your direction and supervision.",
  },
  {
    questionEn: "For which of these tasks is AI MOST reliable?",
    optionsEn: [
      "Diagnosing a disease",
      "Deciding where to invest your savings",
      "Helping you draft an email",
      "Confirming whether a news story is true or false",
    ],
    explanationEn:
      "AI is excellent for helping draft texts.",
  },
  {
    questionEn:
      "If you accidentally shared your password with AI, what should you do?",
    optionsEn: [
      "Nothing happens, AI keeps secrets",
      "Wait to see if someone uses your account",
      "Delete the conversation and change your password as soon as possible",
      "Create a new AI account",
    ],
    explanationEn: "Delete the conversation and change your password immediately.",
  },
  {
    questionEn: "The recommended method to start using AI is:",
    optionsEn: [
      "Take a 6-month university course",
      "Use all AI tools at the same time",
      "1 tool, 10 minutes a day, 1 week of practice",
      "Ask someone else to use it for you",
    ],
    explanationEn:
      "The 1-10-1 method is simple and effective for beginners.",
  },
  {
    questionEn: "What is the healthiest attitude toward artificial intelligence?",
    optionsEn: [
      "Fear — it's better to never use it",
      "Blind trust — everything AI says is true",
      "Informed curiosity — learn to use it wisely, verifying information",
      "Indifference — AI is just a passing fad",
    ],
    explanationEn:
      "Informed curiosity is the best attitude: learning with good judgment.",
  },
  { questionEn: "What happened to bank employees when ATMs arrived?", optionsEn: ["Most lost their jobs", "Their work changed: they left repetitive tasks and focused on advisory roles", "ATMs were rejected by the public", "Banks hired fewer employees forever"], explanationEn: "ATMs didn't eliminate employees; they transformed their role toward advisory services." },
  { questionEn: "What does the arrival of computers in the 1990s teach us?", optionsEn: ["Computers replaced secretaries", "They refused to learn computers", "Those who learned evolved to more strategic roles like executive assistants", "Computers didn't change anything"], explanationEn: "Those who adopted the new technology adapted and progressed." },
  { questionEn: "In which task does AI have the greatest strength?", optionsEn: ["Complex ethical decisions", "Organizing repetitive data, answering frequently asked questions, and reviewing documents", "Understanding the emotions of an upset customer", "Generating personal trust"], explanationEn: "AI excels at repetitive and structured tasks." },
  { questionEn: "What is a real limitation of AI?", optionsEn: ["It cannot write long texts", "It doesn't work in Spanish", "It cannot understand emotions or make ethical decisions", "It doesn't search the internet"], explanationEn: "AI does not understand emotions or make genuine ethical judgments." },
  { questionEn: "Which phrase best reflects the relationship between AI and employment?", optionsEn: ["AI is going to replace you", "AI won't replace you, but a person who knows how to use it could have an advantage", "Only engineers need to learn AI", "AI will never affect any job"], explanationEn: "The advantage comes from knowing how to use AI, not from AI itself." },
  { questionEn: "Which profession did NOT exist 20 years ago?", optionsEn: ["Public accountant", "Community manager", "General practitioner", "Architect"], explanationEn: "Community manager and data analyst are professions created by technology." },
  { questionEn: "What golden privacy rule applies when using AI?", optionsEn: ["You can share everything if you delete it afterward", "If you wouldn't tell it to a friendly stranger on the street, don't write it to the AI", "Only protect data if you pay for a subscription", "Privacy only matters on social media"], explanationEn: "If you wouldn't tell it to a stranger, don't write it to the AI." },
  { questionEn: "Which data CAN you share with AI without any problem?", optionsEn: ["Your bank PIN", "Your SMS verification code", "Your first name and the city where you live", "Your credit card number"], explanationEn: "Your first name and city are general data you can share." },
  { questionEn: "Which data should you NEVER share with AI?", optionsEn: ["The name of your pet", "Your favorite movie genre", "Your national ID or social security number", "The city where you were born"], explanationEn: "ID documents and social security numbers are highly sensitive data." },
  { questionEn: "What should you do if asked to share someone else's data with AI?", optionsEn: ["Do it if the person is trustworthy", "Refuse, because it is a violation of their privacy", "Share it if it is to help", "It's fine if you delete the conversation"], explanationEn: "Never share third-party data without their consent." },
  { questionEn: "In 2023, a lawyer in the U.S. was sanctioned. What did he do?", optionsEn: ["Used AI to spy on the opposing party", "Presented legal cases invented by ChatGPT as if they were real", "Shared confidential info with the AI", "Used AI to forge his signature"], explanationEn: "ChatGPT made up non-existent case names and the lawyer submitted them without verifying." },
  { questionEn: "What is a warning sign that AI is hallucinating?", optionsEn: ["It takes more than 10 seconds", "It asks you to rephrase", "It gives information that contradicts what you already know", "It responds in another language"], explanationEn: "If it contradicts information you know is correct, it's a sign to verify." },
  { questionEn: "What is the correct process to verify AI information?", optionsEn: ["Ask the same AI if it is sure", "Ask if it could be wrong, search on Google, cross-check with 2 sources, and use common sense", "Share on social media and wait for corrections", "Copy directly without reviewing"], explanationEn: "Verification combines asking the AI, Google, two sources, and common sense." },
  { questionEn: "For which task IS AI reliable?", optionsEn: ["Exact inflation percentage", "Specific medical info for your treatment", "Generating ideas and options for a creative project", "Confirming facts about a little-known person"], explanationEn: "Idea generation and creative writing are reliable uses." },
  { questionEn: "For which task is AI NOT reliable on its own?", optionsEn: ["Rephrasing a professional email", "Summarizing a text you wrote", "Getting specific medical or legal advice", "Generating names for a business"], explanationEn: "AI is not reliable for specific medical or legal advice." },
  { questionEn: "AI is compared to a GPS because:", optionsEn: ["Both only work with internet", "Both cost a lot", "GPS suggests routes but you decide; AI suggests but you make the decisions", "Both replace the driver"], explanationEn: "Like GPS, AI suggests options but the decision is yours." },
  { questionEn: "What is a HUMAN strength that AI cannot replicate?", optionsEn: ["Processing large amounts of text", "Answering questions without getting tired", "Making decisions with personal values and real empathy", "Generating multiple versions of a text"], explanationEn: "Empathy, ethical judgment, and personal values are exclusively human." },
  { questionEn: "How should your AI use progress during the first week?", optionsEn: ["Use all tools from day 1", "Start with simple questions and gradually advance to more complex tasks", "Memorize technical commands first", "Practice only with urgent problems"], explanationEn: "The progressive plan starts simple and advances to more complex tasks." },
  { questionEn: "What can you do to have more privacy when using AI?", optionsEn: ["Always use full screen", "Pay for the paid version", "Use AI without logging in when possible", "Change your password every week"], explanationEn: "Using AI without a linked account is a practical privacy measure." },
  { questionEn: "Which request to AI is completely safe?", optionsEn: ["To remember your password", "To help generate ideas for a birthday gift", "To give it your social security number", "To share a verification code"], explanationEn: "Creative and general requests like generating ideas are safe." },
];

export const curso7QuizEn: Partial<QuizQuestion>[] = [
  // Q1
  {
    questionEn: "Which of these is a core prompting technique?",
    optionsEn: [
      "Writing in ALL CAPS so the AI pays more attention",
      "Giving examples of what you expect as a response (few-shot)",
      "Using emojis so the AI understands the tone",
      "Repeating the question multiple times in the same message",
    ],
    explanationEn:
      "Few-shot learning (giving examples) is one of the 5 most effective core prompting techniques.",
  },
  // Q2
  {
    questionEn: "What is few-shot prompting?",
    optionsEn: [
      "Writing very short prompts with few words",
      "Giving one or more examples of the format or result you expect",
      "Firing many prompts quickly",
      "Using AI only for small tasks",
    ],
    explanationEn:
      "Few-shot prompting consists of giving examples so the AI understands the pattern you want.",
  },
  // Q3
  {
    questionEn: "What phrase activates step-by-step reasoning (chain-of-thought)?",
    optionsEn: [
      '"Answer quickly"',
      '"Think step by step before answering"',
      '"Be creative"',
      '"Use JSON format"',
    ],
    explanationEn:
      "Asking to think step by step activates chain-of-thought, improving responses for logical tasks.",
  },
  // Q4
  {
    questionEn: "What is the purpose of assigning a role to the AI?",
    optionsEn: [
      "To make the AI change language automatically",
      "To get more focused responses with the right tone",
      "To make the AI access the internet",
      "To unlock premium features",
    ],
    explanationEn:
      'Assigning a role ("Act as a nutritionist") focuses responses on that domain and tone.',
  },
  // Q5
  {
    questionEn: "When is it useful to request the response in JSON format?",
    optionsEn: [
      "Always, because JSON looks nicer",
      "When you need structured data to use in another tool",
      "Only when programming in JavaScript",
      "Never, AI can't generate JSON",
    ],
    explanationEn:
      "JSON is ideal when you need structured data that you'll process later.",
  },
  // Q6
  {
    questionEn: "What's the difference between system prompt and user prompt?",
    optionsEn: [
      "There's no difference, they're the same",
      "The system prompt defines the general behavior; the user prompt is the specific question",
      "The system prompt is longer than the user prompt",
      "The user prompt executes before the system prompt",
    ],
    explanationEn:
      "The system prompt configures the AI's base behavior; the user prompt is each message you send.",
  },
  // Q7
  {
    questionEn: "What's the best strategy when the first prompt doesn't give good results?",
    optionsEn: [
      "Switch to a different AI tool",
      "Iterate: evaluate what failed and refine the prompt",
      "Write exactly the same thing but longer",
      "Abandon the task because AI can't do it",
    ],
    explanationEn:
      "Iteration (evaluate -> refine -> try again) is the key to prompt engineering.",
  },
  // Q8
  {
    questionEn: "What advantage do XML tags have in a prompt?",
    optionsEn: [
      "AI responds faster",
      "They allow you to clearly organize the sections of input and expected output",
      "They're mandatory for AI to understand",
      "They only work with Claude, not with ChatGPT",
    ],
    explanationEn:
      "XML tags help clearly separate context, instructions, and expected format.",
  },
  // Q9
  {
    questionEn: "In ChatGPT, where do you configure custom instructions (system prompt)?",
    optionsEn: [
      "In the first message of each chat",
      "In Settings -> Custom Instructions",
      "It can't be configured",
      "In the browser URL",
    ],
    explanationEn:
      "ChatGPT allows configuring custom instructions that apply to all conversations.",
  },
  // Q10
  {
    questionEn: "When should you start a prompt from scratch instead of iterating?",
    optionsEn: [
      "Always, each attempt should be independent",
      "When the fundamental approach is wrong and minor adjustments aren't improving it",
      "Never, you should always iterate on existing work",
      "After exactly 3 failed attempts",
    ],
    explanationEn:
      "If the base approach is incorrect, it's more efficient to redesign the prompt than to keep iterating.",
  },
  // Q11
  {
    questionEn: "What are the four elements of the specificity framework for a good prompt?",
    optionsEn: [
      "Tone, language, length, and format",
      "Who, what, what for, and with what constraints",
      "Role, context, example, and output",
      "Question, answer, evaluation, and refinement",
    ],
    explanationEn:
      "The specificity framework includes: who you are (role), what you need (task), what for (objective), and with what constraints (limitations).",
  },
  // Q12
  {
    questionEn: "How many examples are sufficient in few-shot prompting for most tasks?",
    optionsEn: [
      "1 example is always enough",
      "10 or more examples guarantee better results",
      "Between 3 and 5 examples is sufficient; more than 7 rarely adds value",
      "The number of examples has no impact on quality",
    ],
    explanationEn:
      "Practice shows that 3-5 examples are optimal; adding more than 7 rarely improves the result and unnecessarily uses context space.",
  },
  // Q13
  {
    questionEn: "What problem occurs if the examples in few-shot prompting are too similar to each other?",
    optionsEn: [
      "The AI gets confused and can't respond",
      "The response will be too short",
      "The AI may generalize in a biased way and not handle different cases well",
      "No problem occurs; similarity is positive",
    ],
    explanationEn:
      "Including diverse examples in few-shot prompting prevents the AI from learning biased patterns; examples should cover different cases to guide more robust responses.",
  },
  // Q14
  {
    questionEn: "In which of these scenarios is chain-of-thought (CoT) LEAST useful?",
    optionsEn: [
      "Solving a complex math problem",
      "Analyzing a logical argument",
      "Looking up a simple factual piece of data or doing a direct search",
      "Planning a business strategy step by step",
    ],
    explanationEn:
      "Chain-of-thought is ineffective for simple tasks, direct factual queries, or pure creative work where step-by-step reasoning adds no value.",
  },
  // Q15
  {
    questionEn: "What are the four components that make a complete and effective role in a prompt?",
    optionsEn: [
      "Name, age, nationality, and job title",
      "Profession, experience level, communication style, and specific task",
      "Language, tone, format, and length",
      "Context, constraints, examples, and output format",
    ],
    explanationEn:
      "A complete role includes: profession (what they are), experience level (how much), communication style (how they speak), and the specific task they must perform.",
  },
  // Q16
  {
    questionEn: "What is the main difference between assigning a role and giving a direct instruction?",
    optionsEn: [
      "There's no difference; they're equivalent",
      "The role adjusts vocabulary and perspective; the instruction specifies exactly what to do",
      "Instructions are always longer than roles",
      "Roles only work in Claude; instructions only in ChatGPT",
    ],
    explanationEn:
      "The role adjusts the vocabulary, tone, and perspective with which the AI responds; the instruction tells it specifically what action to perform. Both complement each other.",
  },
  // Q17
  {
    questionEn: "Can you use custom XML tags like <my_text> or <product> in your prompts?",
    optionsEn: [
      "No, you can only use standard HTML tags",
      "Only if you use Claude; ChatGPT doesn't recognize them at all",
      "Yes, you can create any custom tag to organize your prompt",
      "No, tags must be in English mandatorily",
    ],
    explanationEn:
      "You can use completely custom XML tags like <my_text>, <product>, or <instructions>. What matters is that they are consistent within the prompt.",
  },
  // Q18
  {
    questionEn: "What format is most suitable for asking AI to compare multiple options?",
    optionsEn: [
      "JSON, because it's the most structured format",
      "Numbered list, because it's the simplest",
      "Markdown table, because it facilitates visual comparison between columns",
      "Continuous paragraph, because AI writes better that way",
    ],
    explanationEn:
      "Markdown tables are ideal for comparisons because they allow seeing multiple attributes of several options side by side clearly.",
  },
  // Q19
  {
    questionEn: "When the system prompt and user prompt have contradictory instructions, what happens?",
    optionsEn: [
      "The AI randomly chooses which one to follow",
      "The system prompt carries more weight and generally prevails over the user prompt",
      "The user prompt always takes priority because it's the most recent",
      "The AI asks the user to resolve the conflict manually",
    ],
    explanationEn:
      "The system prompt has higher hierarchical weight; when there's a conflict with the user prompt, the system prompt generally prevails because it establishes the base rules.",
  },
  // Q20
  {
    questionEn: "How many conversations do ChatGPT's Custom Instructions apply to once configured?",
    optionsEn: [
      "Only to the conversation where they were configured",
      "To the last 10 conversations",
      "To all new conversations opened from that moment on",
      "Only if the user activates the option in each new chat",
    ],
    explanationEn:
      "Custom Instructions automatically apply to all new conversations, functioning as a persistent system prompt without needing to repeat it.",
  },
  // Q21
  {
    questionEn: "How many runs of the same prompt are recommended to determine if one version is better?",
    optionsEn: [
      "A single run is sufficient to compare",
      "Exactly two (A and B) for a clear control",
      "Three or more runs for reliable statistical determination",
      "Ten or more to eliminate all variability",
    ],
    explanationEn:
      "When A/B testing prompts, comparing 3 or more runs per variant provides a more reliable statistical basis than a single test, given that AI has natural variability.",
  },
  // Q22
  {
    questionEn: "What correct expectation should you have about your first prompt?",
    optionsEn: [
      "The first prompt should always be perfect if you describe the task well",
      "It's normal for the first prompt not to be optimal; iteration is part of the process",
      "If the first prompt fails, the task is impossible for AI",
      "The first prompt only fails when the question is ambiguous",
    ],
    explanationEn:
      "The first prompt is rarely optimal. Prompt engineering is an iterative process where each attempt teaches how to improve the next.",
  },
  // Q23
  {
    questionEn: "After 5 or more failed iterations, when is it worth continuing to refine the same prompt?",
    optionsEn: [
      "Never; after 5 failures you should always start from scratch",
      "Always; you should never abandon a prompt in progress",
      "Only if the base structure is correct and the failures are in specific details",
      "Only if you switch the AI tool you're using",
    ],
    explanationEn:
      "If after 5+ attempts the fundamental structure of the prompt is solid, it's worth continuing to adjust details. If the base approach is incorrect, it's better to start from scratch.",
  },
  // Q24
  {
    questionEn: "What is the advantage of building a long document incrementally with AI?",
    optionsEn: [
      "AI works faster when it receives all the work at once",
      "Building in parts allows reviewing and correcting direction at each stage before continuing",
      "The incremental result is always shorter and less useful",
      "There's no advantage; it's preferable to request the complete document in a single prompt",
    ],
    explanationEn:
      "Incremental building (outline -> sections -> refinement -> conclusion) allows detecting direction errors early and adjusting before investing effort in incorrect sections.",
  },
  // Q25
  {
    questionEn: "What happens with the context of a conversation when you open a new chat?",
    optionsEn: [
      "The AI remembers everything from previous conversations automatically",
      "The context is preserved for 24 hours between conversations",
      "The context is lost; each new conversation starts from scratch",
      "Context is only lost if you log out of the platform",
    ],
    explanationEn:
      "Context is only preserved within the same conversation. When opening a new chat, the AI doesn't remember anything from previous conversations.",
  },
  // Q26
  {
    questionEn: "Where in the prompt should you place the most important instruction?",
    optionsEn: [
      "At the end of the prompt, because AI reads from bottom to top",
      "In the middle of the prompt so it doesn't interrupt the initial context",
      "At the beginning of the prompt, where it has the greatest adherence and attention",
      "Location doesn't matter; AI processes all parts equally",
    ],
    explanationEn:
      "Placing key instructions at the beginning of the prompt improves adherence, as models tend to give greater weight to what appears first.",
  },
  // Q27
  {
    questionEn: "What signal indicates that a prompt has ambiguous language that needs refining?",
    optionsEn: [
      "The response is always identical in each run",
      "The AI takes longer than usual to respond",
      "Results are inconsistent or very different in consecutive runs of the same prompt",
      "The response is longer than expected",
    ],
    explanationEn:
      "When the same prompt produces very different results across different runs, it's a sign that the language is ambiguous and the AI is interpreting it in different ways.",
  },
  // Q28
  {
    questionEn: "Which of these roles is most effective for getting specific financial advice?",
    optionsEn: [
      '"Act as a financial expert"',
      '"Act as an accountant specializing in Mexican SMEs with 15 years of experience in tax planning"',
      '"Be my money advisor"',
      '"Behave like someone who knows about finance"',
    ],
    explanationEn:
      "A specific role with profession, specialty, geographic context, and experience level produces much more relevant responses than a generic role like \"financial expert\".",
  },
  // Q29
  {
    questionEn: "What is 0-shot prompting?",
    optionsEn: [
      "A prompt that asks for zero responses from AI",
      "Prompting without using AI tools",
      "Making a request to AI without providing any prior examples",
      "A prompt that fails from the first attempt",
    ],
    explanationEn:
      "0-shot prompting means asking AI something without giving any examples. It contrasts with few-shot (few examples) and many-shot (many examples).",
  },
  // Q30
  {
    questionEn: "What are the main types of refinement you can apply to a prompt?",
    optionsEn: [
      "Speed, accuracy, language, and cost",
      "Length, tone, content, format, and focus",
      "Syntax, semantics, pragmatics, and grammar",
      "Beginning, development, climax, and conclusion",
    ],
    explanationEn:
      "The five types of refinement are: length (shorter/longer), tone (formal/informal), content (what to include/exclude), format (table/list/paragraph), and focus (which aspect to prioritize).",
  },
  // Q31
  {
    questionEn: "What are the five core techniques of prompt engineering mentioned in the course?",
    optionsEn: [
      "Speed, clarity, brevity, repetition, and confirmation",
      "Spelling, grammar, punctuation, structure, and length",
      "Specificity, context, examples, role, and iteration",
      "Question, answer, evaluation, correction, and publication",
    ],
    explanationEn:
      "The five core techniques are: specificity (being precise), context (giving relevant information), examples (few-shot), role (assigning identity), and iteration (continuously refining).",
  },
  // Q32
  {
    questionEn: "Why is requesting the response in JSON format useful when integrating AI with other systems?",
    optionsEn: [
      "Because JSON is easier for humans to read than plain text",
      "Because JSON guarantees a structured output that other programs can process reliably",
      "Because AI responds faster in JSON than in free text",
      "Because JSON completely eliminates the possibility of errors in the response",
    ],
    explanationEn:
      "JSON produces structured output with predictable keys and values, allowing other systems or code to consume and process it automatically without needing to parse free text.",
  },
  // Q33
  {
    questionEn: "What is the purpose of requesting the response in Markdown format?",
    optionsEn: [
      "To make AI use more technical words in the response",
      "To get organized text with headings, lists, and emphasis that improve readability",
      "Because Markdown is the only format AI understands correctly",
      "To make the response automatically shorter and more concise",
    ],
    explanationEn:
      "Markdown allows structuring the response with headings (#), lists, bold text, and other elements that make content more readable and navigable.",
  },
  // Q34
  {
    questionEn: "What is the correct mindset about prompt engineering according to the course?",
    optionsEn: [
      "It's a skill mastered with a single perfect technique",
      "It's a one-time process: if the prompt is good, it doesn't need adjustments",
      "It's an iterative process where continuous improvement is expected and normal",
      "It's only relevant for programmers and technical people",
    ],
    explanationEn:
      "Prompt engineering is inherently iterative: you test, evaluate, refine, and test again. Expecting perfection from the first attempt is an incorrect expectation.",
  },
  // Q35
  {
    questionEn: "What is the correct order for building an extensive document using AI incrementally?",
    optionsEn: [
      "Conclusion -> introduction -> development -> review",
      "Complete draft -> correction -> final publication",
      "Outline -> individual sections -> refinement -> conclusion",
      "Research -> simultaneous writing and editing -> delivery",
    ],
    explanationEn:
      "Effective incremental building follows the order: general outline -> develop each section separately -> refine content -> integrate conclusion. This allows control and correction at each stage.",
  },
];

export const curso8QuizEn: Partial<QuizQuestion>[] = [
  // Q1
  {
    questionEn: "What can AI do with a PDF you upload?",
    optionsEn: [
      "Edit it and return a modified version",
      "Read it, summarize it, answer questions about its content",
      "Digitally sign it",
      "Automatically convert it into a web page",
    ],
    explanationEn:
      "AI can read, summarize, and answer questions about a PDF's content.",
  },
  // Q2
  {
    questionEn: "What's the best technique for summarizing a very long document?",
    optionsEn: [
      'Just ask "summarize it" with no context',
      "Summarize by sections and then make a summary of the summaries",
      "Copy only the first paragraph and ask for a summary",
      "You can't summarize long documents with AI",
    ],
    explanationEn:
      "Progressive summarization (sections -> final summary) works best for long documents.",
  },
  // Q3
  {
    questionEn: "What types of images can AI analyze?",
    optionsEn: [
      "Only photos of people",
      "Charts, screenshots, receipts, diagrams, photos",
      "Only AI-generated images",
      "Only PNG format images",
    ],
    explanationEn:
      "AI with vision can analyze charts, screenshots, receipts, diagrams, and various photos.",
  },
  // Q4
  {
    questionEn: "What format should you request data extracted from an invoice in?",
    optionsEn: [
      "Free-form text in paragraphs",
      "Table or JSON with structured fields",
      "Only as a bullet list",
      "In image format",
    ],
    explanationEn:
      "Table or JSON allows processing extracted data in a structured and verifiable way.",
  },
  // Q5
  {
    questionEn: "What are 'Projects' in Claude?",
    optionsEn: [
      "A folder for storing images",
      "A space where you can upload context documents and persistent instructions",
      "A premium subscription plan",
      "A special type of prompt",
    ],
    explanationEn:
      "Claude Projects allow uploading documents and defining instructions that persist between conversations.",
  },
  // Q6
  {
    questionEn: "What precaution should you take when uploading documents to AI?",
    optionsEn: [
      "Don't upload documents longer than 1 page",
      "Don't upload confidential documents or those with sensitive personal data",
      "Only upload documents in English",
      "Always convert them to Word before uploading",
    ],
    explanationEn:
      "Never upload documents with confidential, financial, or sensitive personal data to AI.",
  },
  // Q7
  {
    questionEn: "What happens if you upload multiple files in a conversation?",
    optionsEn: [
      "AI only reads the last one",
      "AI can cross-reference information between them and answer comparative questions",
      "Previous ones are deleted",
      "You can't upload multiple files",
    ],
    explanationEn:
      "AI can work with multiple documents simultaneously and cross-reference information between them.",
  },
  // Q8
  {
    questionEn: "What limitation does AI have when analyzing images?",
    optionsEn: [
      "It can't see colors",
      "It may have difficulty with very small text or handwriting",
      "It only works with photos taken that day",
      "It can't describe what it sees",
    ],
    explanationEn:
      "AI may have difficulties with very small text, handwriting, and complex spatial reasoning.",
  },
  // Q9
  {
    questionEn: "How do you verify that AI extracted data correctly from a table?",
    optionsEn: [
      "Blindly trust the result",
      "Ask it to review and compare against the original, and manually verify key fields",
      "It can't be verified",
      "Repeat the exact same process hoping for a different result",
    ],
    explanationEn:
      "Always manually verify key fields and ask AI to do double-checking.",
  },
  // Q10
  {
    questionEn: "What's the main advantage of working with projects instead of individual chats?",
    optionsEn: [
      "Projects are cheaper",
      "Context persists between conversations without having to re-explain everything",
      "Projects have smarter AI",
      "Only projects allow using Spanish",
    ],
    explanationEn:
      "Projects maintain persistent context, avoiding re-explaining documents and preferences each time.",
  },
  // Q11
  {
    questionEn: "What is the approximate PDF size limit that Claude accepts?",
    optionsEn: [
      "512 MB",
      "100 MB",
      "30 MB",
      "1 GB",
    ],
    explanationEn:
      "Claude accepts PDFs up to approximately 30 MB, while ChatGPT goes up to ~512 MB and Gemini up to ~100 MB.",
  },
  // Q12
  {
    questionEn: "How many pages does ChatGPT handle best in a PDF?",
    optionsEn: [
      "Up to 1,500 pages",
      "Up to 100 pages",
      "Up to 150 pages",
      "Up to 50 pages",
    ],
    explanationEn:
      "ChatGPT works well with around 100 pages, Claude with ~150, and Gemini with up to ~1,500 pages.",
  },
  // Q13
  {
    questionEn: "What type of PDF offers better reading quality for AI?",
    optionsEn: [
      "A high-resolution scanned PDF",
      "A PDF with selectable text (real text)",
      "A black and white PDF",
      "Both types are identical for AI",
    ],
    explanationEn:
      "PDFs with selectable text are processed with much greater accuracy than scanned PDFs, which are basically images.",
  },
  // Q14
  {
    questionEn: "What happens if you try to upload a password-protected PDF to AI?",
    optionsEn: [
      "AI guesses the password automatically",
      "AI can open it if the password is simple",
      "AI cannot access the document's content",
      "The PDF is converted to plain text before processing",
    ],
    explanationEn:
      "Password-encrypted PDFs cannot be read by AI; you must unprotect them before uploading.",
  },
  // Q15
  {
    questionEn: "Does Claude Pro use your conversations to train its models?",
    optionsEn: [
      "Yes, all conversations are used for training",
      "No, Claude Pro does not use conversations to train the model",
      "Only conversations with more than 10 messages",
      "It depends on the country's configuration",
    ],
    explanationEn:
      "Claude Pro does not use the content of its users' conversations to train models, which offers greater privacy.",
  },
  // Q16
  {
    questionEn: "What anonymization technique is recommended before uploading documents with sensitive data?",
    optionsEn: [
      "Change the file format to TXT",
      "Replace real names with generic names before uploading",
      "Upload only the odd-numbered pages",
      "Always use the browser's incognito mode",
    ],
    explanationEn:
      "Replacing names, numbers, and identifiable data with generic ones (e.g., 'Employee A') reduces the risk of exposing confidential information.",
  },
  // Q17
  {
    questionEn: "What image formats does AI accept for visual analysis?",
    optionsEn: [
      "Only JPG and PNG",
      "BMP, TIFF, ICO, and SVG",
      "PNG, JPG, GIF, and WEBP",
      "PDF, DOCX, PPTX, and XLSX",
    ],
    explanationEn:
      "The image formats accepted by vision models are PNG, JPG, GIF, and WEBP.",
  },
  // Q18
  {
    questionEn: "What does it mean for an AI model to be 'multimodal'?",
    optionsEn: [
      "That it responds in multiple languages",
      "That it can process different types of data like text and images at the same time",
      "That it has multiple personalities depending on the topic",
      "That it works on multiple devices simultaneously",
    ],
    explanationEn:
      "Multimodal means the model can process and combine different types of data, such as text, images, and audio.",
  },
  // Q19
  {
    questionEn: "Which of the following visual tasks does AI perform with HIGH accuracy?",
    optionsEn: [
      "Recognizing emotions in people's faces",
      "Counting exact objects in a crowded photograph",
      "Reading printed text, interpreting charts, and distinguishing colors and shapes",
      "Detecting if a photo has been digitally manipulated",
    ],
    explanationEn:
      "AI has high accuracy with printed text, charts, colors, shapes, and screenshots.",
  },
  // Q20
  {
    questionEn: "For which visual task does AI have MODERATE accuracy?",
    optionsEn: [
      "Reading tables in screenshots",
      "Identifying handwritten text, logos, and facial expressions",
      "Describing the general content of a photograph",
      "Recognizing primary colors in diagrams",
    ],
    explanationEn:
      "Handwritten text, logos, and emotion recognition are tasks of moderate accuracy for AI.",
  },
  // Q21
  {
    questionEn: "What visual task represents a LOW accuracy limitation for AI?",
    optionsEn: [
      "Reading the title of a scanned document",
      "Identifying whether an image is a screenshot",
      "Counting individual objects in an image with exact accuracy",
      "Describing the color palette of a chart",
    ],
    explanationEn:
      "Counting objects exactly, detecting photo manipulations, and reasoning about complex spaces are areas of low accuracy.",
  },
  // Q22
  {
    questionEn: "What ethical restriction do AI models have when analyzing images of people?",
    optionsEn: [
      "They cannot describe people's clothing",
      "They cannot identify specific individuals by their face",
      "They cannot analyze images with more than one person",
      "They cannot indicate the gender of people in the image",
    ],
    explanationEn:
      "Due to ethical and privacy restrictions, AI does not identify or name specific people from their faces.",
  },
  // Q23
  {
    questionEn: "What strategy helps AI better analyze an image with lots of content?",
    optionsEn: [
      "Upload the image in animated GIF format",
      "Convert the image to black and white before uploading",
      "Crop the image to remove unnecessary areas and focus on the relevant zone",
      "Upload the same image multiple times in the same message",
    ],
    explanationEn:
      "Cropping the image to keep only the area of interest improves analysis accuracy and reduces visual noise.",
  },
  // Q24
  {
    questionEn: "What three sections should an executive summary generated by AI include?",
    optionsEn: [
      "Introduction, body, and conclusion",
      "Context, findings, and recommendations",
      "Background, analysis, and bibliography",
      "Summary, data, and glossary",
    ],
    explanationEn:
      "The recommended executive summary format includes: context (what it's about), key findings, and actionable recommendations.",
  },
  // Q25
  {
    questionEn: "What does 'comparative summarization' with AI consist of?",
    optionsEn: [
      "Comparing AI's summary with a human's summary",
      "Asking AI to summarize the same document twice and choosing the best one",
      "Analyzing multiple sources and synthesizing similarities and differences between them",
      "Generating two versions of the summary: short and long",
    ],
    explanationEn:
      "Comparative summarization consists of AI analyzing multiple sources simultaneously and producing a summary that integrates their similarities and differences.",
  },
  // Q26
  {
    questionEn: "How can you verify that the data cited by AI is actually in the document?",
    optionsEn: [
      "Search for the data on Google to confirm it",
      "Ask AI to indicate the page number where it found each piece of data",
      "Ask AI to repeat the answer in different words",
      "Count the number of words in the response",
    ],
    explanationEn:
      "Requesting the page number along with each piece of data allows locating and verifying the original source in the document.",
  },
  // Q27
  {
    questionEn: "What separator is recommended for CSV files intended for Excel in Spanish?",
    optionsEn: [
      "Comma (,)",
      "Period (.)",
      "Tab",
      "Semicolon (;)",
    ],
    explanationEn:
      "Excel in Spanish regional settings uses the semicolon (;) as CSV separator, instead of the standard Anglo-Saxon comma.",
  },
  // Q28
  {
    questionEn: "When should you request extracted data in JSON format instead of a table?",
    optionsEn: [
      "When you need to print the result directly",
      "When the data will be processed by a program or system automatically",
      "When the document has more than 50 pages",
      "When working on a mobile phone",
    ],
    explanationEn:
      "JSON array format is ideal when another program will consume the data programmatically, as it's easily parseable.",
  },
  // Q29
  {
    questionEn: "What type of transcription error is most common in AI when extracting numerical data?",
    optionsEn: [
      "Confusing decimals with integers",
      "Confusing visually similar digits and letters like 0/O, 1/l, and 5/S",
      "Omitting the last digit of long numbers",
      "Reversing the order of numbers in tables",
    ],
    explanationEn:
      "AI is prone to confusing visually similar characters such as zero with the letter O, one with lowercase l, and five with S.",
  },
  // Q30
  {
    questionEn: "What does 'batch processing' consist of when working with similar documents?",
    optionsEn: [
      "Uploading all files compressed in a ZIP",
      "Defining the extraction format once and applying it to 3-5 similar documents in sequence",
      "Processing each document in a different conversation to avoid confusion",
      "Asking AI to generate the documents automatically",
    ],
    explanationEn:
      "Batch processing involves defining the format once and reusing it to process several similar documents efficiently.",
  },
  // Q31
  {
    questionEn: "What symbol does AI conventionally use to flag inconsistencies in a document?",
    optionsEn: [
      "An asterisk (*)",
      "A question mark (?)",
      "The warning symbol (warning emoji)",
      "An em dash",
    ],
    explanationEn:
      "You can instruct AI to use the warning symbol when it detects inconsistencies, contradictions, or questionable data in the document.",
  },
  // Q32
  {
    questionEn: "How many tokens does Gemini's context approximately support?",
    optionsEn: [
      "128,000 tokens",
      "200,000 tokens",
      "500,000 tokens",
      "1,000,000 tokens",
    ],
    explanationEn:
      "Gemini has a context window of approximately 1 million tokens, compared to Claude's 200K and GPT-4o's 128K.",
  },
  // Q33
  {
    questionEn: "How many tokens does approximately one page of text in Spanish equal?",
    optionsEn: [
      "Around 100 tokens",
      "Around 300 tokens",
      "Around 1,000 tokens",
      "Around 3,000 tokens",
    ],
    explanationEn:
      "One page of text in Spanish equals approximately 300 tokens, given that ~1 token equals 0.75 words in Spanish.",
  },
  // Q34
  {
    questionEn: "What problem can occur in very long conversations with AI?",
    optionsEn: [
      "AI charges more for additional messages",
      "AI starts responding in another language",
      "The accuracy and coherence of responses can degrade after 30-40 messages",
      "The conversation is automatically deleted when reaching 25 messages",
    ],
    explanationEn:
      "In very long conversations, AI may start losing coherence or making more errors; it's recommended to start new conversations for different tasks.",
  },
  // Q35
  {
    questionEn: "What does 'cross-referencing' documents with AI mean?",
    optionsEn: [
      "Uploading the same document in two different conversations",
      "Asking AI to confront and synthesize information from multiple documents at once",
      "Comparing responses from two different AIs about the same document",
      "Translating a document to English and comparing it with the original",
    ],
    explanationEn:
      "Cross-referencing consists of AI analyzing multiple documents simultaneously and combining or contrasting their information to generate an integrated response.",
  },
];

export const curso9QuizEn: Partial<QuizQuestion>[] = [
  // Q1
  {
    questionEn: "What is prompt chaining?",
    optionsEn: [
      "Writing a very long prompt with all instructions",
      "Breaking a complex task into sequential steps where the output of one feeds the next",
      "Copying and pasting the same prompt in several tools",
      "Chaining multiple AI accounts",
    ],
    explanationEn:
      "Prompt chaining divides complex tasks into sequential steps, where each result feeds the next.",
  },
  // Q2
  {
    questionEn: "What are tokens in the context of AI?",
    optionsEn: [
      "Virtual coins to pay the subscription",
      "The minimum units of text that AI processes (word fragments)",
      "The errors AI makes",
      "The interface buttons",
    ],
    explanationEn:
      "Tokens are text fragments (parts of words) that AI uses as processing units.",
  },
  // Q3
  {
    questionEn: "What happens when you exceed the context window?",
    optionsEn: [
      "The AI turns off",
      'AI starts "forgetting" the information from the beginning of the conversation',
      "They charge you double",
      "The conversation is automatically deleted",
    ],
    explanationEn:
      "When exceeding context, AI loses access to the oldest information in the conversation.",
  },
  // Q4
  {
    questionEn: "How do you evaluate if a prompt is good?",
    optionsEn: [
      "If the response is long, the prompt is good",
      "Testing it multiple times and verifying consistency, accuracy, and format",
      "If AI doesn't give an error, it's good",
      "Asking AI if the prompt was good",
    ],
    explanationEn:
      "A good prompt gives consistent, accurate results in the desired format when tested multiple times.",
  },
  // Q5
  {
    questionEn: "Why is it worth saving your best prompts?",
    optionsEn: [
      "Because AI needs them to work",
      "To reuse them, improve them over time, and share them with your team",
      "Because they get deleted after 24 hours",
      "Just to collect them",
    ],
    explanationEn:
      "A prompt library lets you reuse what works, iterate, and share with your team.",
  },
  // Q6
  {
    questionEn: "What's the advantage of breaking a task into steps vs one long prompt?",
    optionsEn: [
      "It's cheaper",
      "Each step can be verified, adjusted, and reused independently",
      "AI only accepts short prompts",
      "There's no advantage, it's the same",
    ],
    explanationEn:
      "Breaking into steps allows verifying intermediate results and adjusting without redoing everything.",
  },
  // Q7
  {
    questionEn: "How many tokens does a word in Spanish have approximately?",
    optionsEn: [
      "Exactly 1 token per word",
      "Approximately 1.5 tokens per word",
      "10 tokens per word",
      "0.1 tokens per word",
    ],
    explanationEn:
      "In Spanish, an average word equals ~1.5 tokens due to accents and conjugations.",
  },
  // Q8
  {
    questionEn: "What is a 'consistency test' for prompts?",
    optionsEn: [
      "Checking that the prompt has no spelling errors",
      "Running the same prompt 3+ times and comparing if results are similar",
      "Testing the prompt in different languages",
      "Using the prompt only once and trusting the result",
    ],
    explanationEn:
      "A consistency test runs the same prompt several times to see if results are stable.",
  },
  // Q9
  {
    questionEn: "What element is essential in a prompt template for your library?",
    optionsEn: [
      "The text color",
      "The name, purpose, prompt text, variables, and usage notes",
      "Only the prompt text",
      "Only the creation date",
    ],
    explanationEn:
      "A good template includes name, purpose, prompt with marked variables, and usage notes.",
  },
  // Q10
  {
    questionEn: "In a content creation workflow, what is the correct order?",
    optionsEn: [
      "Publish -> write -> edit -> plan",
      "Idea -> research -> outline -> draft -> editing -> publication",
      "Edit -> write -> idea -> publish",
      "Draft -> idea -> outline -> publish",
    ],
    explanationEn:
      "The correct flow goes from idea -> research -> outline -> draft -> editing -> publication.",
  },
  // Q11
  {
    questionEn: "What is the main problem with 'mega-prompts' (a single massive prompt for a complex task)?",
    optionsEn: [
      "They are too short for AI to understand",
      "They cost more tokens than several separate conversations",
      "They tend to produce mediocre results because AI splits its attention across too many instructions",
      "AI automatically rejects them if they exceed 500 words",
    ],
    explanationEn:
      "A mega-prompt forces AI to attend to too many instructions at once, which dilutes the quality of each part of the result.",
  },
  // Q12
  {
    questionEn: "Which of these is NOT an advantage of prompt chaining over a single long prompt?",
    optionsEn: [
      "It allows focusing each step on a specific task for higher quality",
      "It makes it easier to identify at which step an error occurs (debugging)",
      "It guarantees that AI never makes errors in any step",
      "It allows reusing individual steps in different workflows",
    ],
    explanationEn:
      "Chaining improves focus, quality, control, and reusability, but it does not eliminate errors; it only makes them easier to detect and correct.",
  },
  // Q13
  {
    questionEn: "When using prompt chaining, why is it recommended to save intermediate results from each step separately?",
    optionsEn: [
      "So AI remembers what it already processed in future sessions",
      "Because it reduces token costs by half",
      "To be able to recover progress if a later step fails, without starting from scratch",
      "It's only useful if you work in a team with other people",
    ],
    explanationEn:
      "Saving intermediate results allows resuming from the point of failure without repeating all previous steps.",
  },
  // Q14
  {
    questionEn: "What is 'flexibility between models' in the context of prompt chaining?",
    optionsEn: [
      "Changing the language of the prompt depending on the model you use",
      "Using different AI models for different steps based on their strengths (e.g., one for research, another for writing)",
      "Exporting prompts from ChatGPT to Claude without modifying them",
      "Alternating between free and paid versions of the same model",
    ],
    explanationEn:
      "Flexibility between models consists of assigning each step in the workflow to the most suitable model for that specific task.",
  },
  // Q15
  {
    questionEn: "What do tools like Zapier or Make allow you to do with AI prompts?",
    optionsEn: [
      "Create custom language models without programming",
      "Chain prompts automatically as part of automated workflows",
      "Increase the token limit of any free model",
      "Generate images from text for free",
    ],
    explanationEn:
      "Zapier and Make allow automating workflows where prompts are chained without manual intervention, connecting AI with other applications.",
  },
  // Q16
  {
    questionEn: "What feature distinguishes ChatGPT's automatic memory?",
    optionsEn: [
      "It permanently stores all your attached files",
      "It learns facts about you across conversations and uses them in future sessions without you doing anything",
      "It remembers the complete history of each conversation literally",
      "It only works if you manually activate the 'remember' option in each message",
    ],
    explanationEn:
      "ChatGPT's automatic memory learns facts about the user across conversations and applies them automatically in future interactions.",
  },
  // Q17
  {
    questionEn: "Where can you manage (view, edit, or delete) the memories ChatGPT has saved about you?",
    optionsEn: [
      "From the File -> Export Data menu",
      "In Settings -> Personalization -> Memory",
      "In your OpenAI account's public profile",
      "You can only delete memory by typing '/reset memory' in the chat",
    ],
    explanationEn:
      "ChatGPT's memory is managed in Settings -> Personalization -> Memory, where you can view and delete individual memories.",
  },
  // Q18
  {
    questionEn: "ChatGPT's Custom Instructions have two fields. What are they?",
    optionsEn: [
      "'Preferred language' and 'Difficulty level'",
      "'What it should know about you' and 'How it should respond'",
      "'Your profession' and 'Your geographic location'",
      "'Allowed topics' and 'Prohibited topics'",
    ],
    explanationEn:
      "Custom Instructions have two fields: information about the user (personal/professional context) and instructions about the response style and format.",
  },
  // Q19
  {
    questionEn: "To which conversations do ChatGPT's Custom Instructions apply?",
    optionsEn: [
      "To all conversations, including those before they were configured",
      "Only to the conversation where you activated them",
      "Only to new conversations started after configuring them",
      "Only when you manually select 'apply instructions' in each chat",
    ],
    explanationEn:
      "Custom Instructions are prospective: they apply to new conversations but do not retroactively modify existing sessions.",
  },
  // Q20
  {
    questionEn: "What does a Claude Project combine to offer persistent context?",
    optionsEn: [
      "Web search history, generated images, and user contacts",
      "System instructions, uploaded documents, and the project's conversation history",
      "Only the last 10 messages from the most recent chat",
      "Predefined prompt templates by Anthropic",
    ],
    explanationEn:
      "Claude Projects integrate custom instructions, uploaded reference files, and conversation history to maintain continuous context.",
  },
  // Q21
  {
    questionEn: "What are Gemini's 'Extensions' (like Gmail, Drive, or Maps)?",
    optionsEn: [
      "Paid plugins that extend Gemini's token limit",
      "Connections that allow Gemini to access real data from your Google services",
      "Specialized versions of Gemini trained on a single topic",
      "Tools for exporting conversations to Google Docs",
    ],
    explanationEn:
      "Extensions connect Gemini with services like Gmail or Drive to access real user information within those platforms.",
  },
  // Q22
  {
    questionEn: "What is a 'Gem' in Gemini?",
    optionsEn: [
      "A virtual coin to buy additional tokens",
      "An assistant with a specific role, its own instructions, and reference documents",
      "The name of Google's most advanced model",
      "A premium extension available only on the enterprise plan",
    ],
    explanationEn:
      "Gems are customized versions of Gemini with a defined role (e.g., writing coach), similar to OpenAI's Custom GPTs.",
  },
  // Q23
  {
    questionEn: "What is a 'master context document' used for when working with AI?",
    optionsEn: [
      "To save all the responses AI has given in the past",
      "To centralize your role, audience, preferences, and style in a single file and paste it at the start of each session",
      "To configure the language and region of the AI tool",
      "It's just a backup of your conversations",
    ],
    explanationEn:
      "A master context document consolidates key information about you and your work; pasting it at the beginning of a new conversation quickly recreates context.",
  },
  // Q24
  {
    questionEn: "According to best practices in the course, after how many messages can a long conversation start to degrade?",
    optionsEn: [
      "10 to 15 messages",
      "50 to 60 messages",
      "30 to 40 messages",
      "100 messages or more",
    ],
    explanationEn:
      "Around 30-40 messages, long conversations may show signs of degradation such as forgetting instructions or giving more generic responses.",
  },
  // Q25
  {
    questionEn: "What does the 'summary before closing' technique consist of for managing context?",
    optionsEn: [
      "Asking AI to delete the conversation when you're done",
      "Requesting a session summary from AI and pasting it at the start of the next conversation to restore context",
      "Copying the entire conversation into a text document as backup",
      "Activating the 'save session' option available in all models",
    ],
    explanationEn:
      "The technique consists of requesting a summary before closing the session and using it as a starting point in the next one, avoiding losing the thread of work.",
  },
  // Q26
  {
    questionEn: "Which of the following models has the largest context window?",
    optionsEn: [
      "GPT-4o with 128K tokens (~300 pages)",
      "Claude with 200K tokens (~470 pages)",
      "Gemini with 1M tokens (~2,300 pages)",
      "They all have exactly the same context window",
    ],
    explanationEn:
      "Gemini has the largest context window with 1 million tokens, equivalent to approximately 2,300 pages of text.",
  },
  // Q27
  {
    questionEn: "What tool does OpenAI provide to visualize how many tokens a text consumes?",
    optionsEn: [
      "Token Analyzer inside ChatGPT Plus",
      "A free online tokenizer available on its website",
      "A Chrome extension called TokenCount",
      "The /tokens command within the ChatGPT chat",
    ],
    explanationEn:
      "OpenAI offers a free online tokenizer where you can paste any text and see exactly how many tokens it consumes.",
  },
  // Q28
  {
    questionEn: "When a conversation exceeds the context window, what information does AI discard (truncate) first?",
    optionsEn: [
      "The most recent messages, to protect initial instructions",
      "The longest messages, regardless of their position",
      "The oldest messages from the beginning of the conversation",
      "The user's messages, but not the AI's responses",
    ],
    explanationEn:
      "When truncating, AI discards the oldest messages first, which may cause it to forget instructions or context given at the beginning.",
  },
  // Q29
  {
    questionEn: "Which of these is a sign of degradation in a long AI conversation?",
    optionsEn: [
      "AI responds faster than at the beginning",
      "AI starts ignoring instructions given at the beginning, gives generic responses, or contradicts itself",
      "Responses become longer and more detailed",
      "AI asks for confirmation before responding",
    ],
    explanationEn:
      "Signs of degradation include forgetting previous instructions, generic responses without personalization, and contradictions with what was agreed upon earlier.",
  },
  // Q30
  {
    questionEn: "What is the recommended strategy for working with documents over 100 pages in AI?",
    optionsEn: [
      "Upload the complete document all at once and wait for AI to process it all",
      "Split the document into sections of ~5 pages and process each one separately",
      "Convert the document to an image and upload it as a visual file",
      "It's only possible to work with documents under 10 pages",
    ],
    explanationEn:
      "Splitting long documents into chunks of ~5 pages allows AI to focus and process each section with greater depth and accuracy.",
  },
  // Q31
  {
    questionEn: "When using the OpenAI API, how does the cost of output tokens compare to input tokens?",
    optionsEn: [
      "They are exactly the same price",
      "Input tokens cost 2-4 times more than output tokens",
      "Output tokens cost 2-4 times more than input tokens",
      "Only input tokens are charged; output is free",
    ],
    explanationEn:
      "In most APIs, output tokens (what AI generates) are 2-4 times more expensive than input tokens, which should be considered when designing workflows.",
  },
  // Q32
  {
    questionEn: "How does manual rubric-based prompt evaluation work?",
    optionsEn: [
      "You ask AI if its own response was good",
      "You define 3 to 5 criteria, score each from 1 to 5, and add them up for a total rating",
      "You compare the length of the response with a reference text",
      "You use an automated tool that scores the prompt without human intervention",
    ],
    explanationEn:
      "A manual rubric defines clear criteria (clarity, accuracy, format, etc.), scores them from 1 to 5, and sums the results to objectively evaluate the prompt.",
  },
  // Q33
  {
    questionEn: "What does the A/B testing method consist of for comparing two versions of a prompt?",
    optionsEn: [
      "Using one version in English (A) and another in Spanish (B) with the same model",
      "Testing each version once and choosing the one that gives a better response",
      "Running each version at least 3 times and comparing quality averages",
      "Publishing both versions in a community and voting on which is better",
    ],
    explanationEn:
      "Rigorous A/B testing runs each version of the prompt multiple times (minimum 3) and compares averages to reduce variability and choose the best one.",
  },
  // Q34
  {
    questionEn: "What convention is recommended for marking replaceable sections in a prompt template?",
    optionsEn: [
      "Write them in UPPERCASE without any additional symbol",
      "Surround them with [BRACKETS] so they are easily identifiable",
      "Use asterisks *like this* to indicate variables",
      "Color them red in the text document",
    ],
    explanationEn:
      "The recommended convention is to use [BRACKETS] to mark variables or replaceable sections in a prompt template, making them easy to use and edit.",
  },
  // Q35
  {
    questionEn: "In a prompt versioning system, what's the difference between going from version 1.0 to 1.1 versus going to 2.0?",
    optionsEn: [
      "There's no difference; the numbers are just an aesthetic convention",
      "1.0 to 1.1 indicates minor wording adjustments; 1.x to 2.0 indicates a structural redesign of the prompt",
      "1.0 to 1.1 indicates a model change; 1.x to 2.0 indicates a language change",
      "The higher number (2.0) always means the prompt is worse than the previous version",
    ],
    explanationEn:
      "Semantic versioning for prompts suggests minor increments (1.0 to 1.1) for wording adjustments and major version jumps (1.x to 2.0) for significant restructurings.",
  },
];

// ─── Curso 4 EN ─────────────────────────────────────────────────────────────

export const curso4QuizEn: Partial<QuizQuestion>[] = [
  { questionEn: "What company created ChatGPT?", optionsEn: ["Google", "Microsoft", "OpenAI", "Anthropic"], explanationEn: "ChatGPT was created by OpenAI." },
  { questionEn: "What is the AI model currently used by ChatGPT?", optionsEn: ["GPT-3", "GPT-4o", "Gemini Ultra", "Claude 3"], explanationEn: "ChatGPT uses the GPT-4o model." },
  { questionEn: "Who created the AI assistant Claude?", optionsEn: ["OpenAI", "Google", "Meta", "Anthropic"], explanationEn: "Claude was created by Anthropic, a company founded by former OpenAI researchers." },
  { questionEn: "By whom was Anthropic founded?", optionsEn: ["Former Google employees", "Former OpenAI researchers", "Former Microsoft engineers", "Former Meta scientists"], explanationEn: "Anthropic was founded by former OpenAI researchers." },
  { questionEn: "How many pages of a document can Claude process approximately?", optionsEn: ["50 pages", "100 pages", "200 pages", "500 pages"], explanationEn: "Claude can process documents of up to 200 pages." },
  { questionEn: "What is the name of Claude's feature that displays extensive content in a separate panel?", optionsEn: ["Canvas", "Artifacts", "Workspace", "Documents"], explanationEn: "Artifacts is Claude's feature that opens a side panel for long content." },
  { questionEn: "What company developed Gemini?", optionsEn: ["Microsoft", "Apple", "Amazon", "Google"], explanationEn: "Gemini was developed by Google." },
  { questionEn: "What does the green color mean in Gemini's 'Verify with Google' feature?", optionsEn: ["Partially correct information", "Information verified with sources", "Questionable information", "Could not be verified"], explanationEn: "Green indicates that the information was verified with reliable sources." },
  { questionEn: "What does the orange color indicate in Gemini's 'Verify with Google' feature?", optionsEn: ["Verified information", "Completely false", "Questionable or could not be confirmed", "The connection failed"], explanationEn: "Orange indicates that the information is questionable or could not be confirmed." },
  { questionEn: "Which is an available extension in Gemini?", optionsEn: ["@Twitter", "@LinkedIn", "@Gmail", "@Outlook"], explanationEn: "Gemini has extensions for @Gmail, @Drive, @Maps and @YouTube." },
  { questionEn: "What are 'Gems' in Gemini?", optionsEn: ["Virtual credits", "Pre-configured specialized versions of Gemini", "Files in Google Drive", "Response shortcuts"], explanationEn: "Gems are pre-configured versions of Gemini for specific tasks." },
  { questionEn: "What tool does ChatGPT use to generate images?", optionsEn: ["MidJourney", "Stable Diffusion", "DALL-E", "Google Image"], explanationEn: "ChatGPT uses OpenAI's DALL-E to generate images." },
  { questionEn: "What system does Gemini use to generate images?", optionsEn: ["DALL-E", "Adobe Firefly", "Stable Diffusion", "Google Image"], explanationEn: "Gemini uses Google Image to create images." },
  { questionEn: "What distinguishes Perplexity from other assistants?", optionsEn: ["It generates high-quality images", "It combines internet search with AI and cites numbered sources", "It has the most advanced memory", "It processes more than 500 pages"], explanationEn: "Perplexity combines internet search with AI and displays numbered sources." },
  { questionEn: "How does Perplexity present its sources?", optionsEn: ["Links at the end", "Numbered sources integrated into the response", "Side panel", "Only mentions the domain"], explanationEn: "Perplexity shows numbered sources directly in the response." },
  { questionEn: "What is the 'Focus' feature in Perplexity?", optionsEn: ["A concentration mode", "A filter that limits the search to specific sources like Academic, YouTube or Reddit", "A feature for saving responses", "An enhanced voice mode"], explanationEn: "Focus allows filtering searches by source type: Web, Academic, YouTube, Reddit or News." },
  { questionEn: "Which is NOT a source in Perplexity's Focus?", optionsEn: ["Academic", "Reddit", "Instagram", "YouTube"], explanationEn: "Instagram is not an option in Perplexity's Focus." },
  { questionEn: "What are 'Collections' in Perplexity?", optionsEn: ["Generated images", "Thematic groups for organizing searches", "Contact lists", "History versions"], explanationEn: "Collections allow you to organize searches by theme." },
  { questionEn: "What is a limitation of Perplexity?", optionsEn: ["It doesn't search the internet", "It doesn't have academic sources", "It doesn't analyze files or generate images", "It doesn't work on mobile devices"], explanationEn: "Perplexity doesn't analyze files, doesn't generate images, and doesn't create extensive creative content." },
  { questionEn: "Which capability does Perplexity NOT have?", optionsEn: ["Real-time search", "Citing numbered sources", "Memory of previous conversations", "Filtering by academic source"], explanationEn: "Perplexity doesn't have memory; each session starts from scratch." },
  { questionEn: "How do you attach files in ChatGPT?", optionsEn: ["Microphone button", "Paperclip icon", "Dragging to the center", "From settings"], explanationEn: "You use the paperclip icon to attach files." },
  { questionEn: "What is the purpose of the regenerate icon in ChatGPT?", optionsEn: ["Go back to the beginning", "Regenerate the previous response", "Translate", "Save to favorites"], explanationEn: "The regenerate icon regenerates the previous response." },
  { questionEn: "Which assistant has the most natural voice mode?", optionsEn: ["Claude", "Gemini", "Perplexity", "ChatGPT"], explanationEn: "ChatGPT has the most natural and human-like voice mode." },
  { questionEn: "What limitation does Claude have in its free version regarding the internet?", optionsEn: ["It only searches Wikipedia", "It has no internet access", "Only educational sites", "It needs permission to browse"], explanationEn: "In its free version, Claude has no internet access." },
  { questionEn: "What is 'Projects' in Claude?", optionsEn: ["A template gallery", "A workspace with permanent instructions", "A feature for sharing conversations", "A collaboration mode"], explanationEn: "Projects in Claude is a workspace with permanent instructions." },
  { questionEn: "What is a characteristic of Claude when it doesn't know something?", optionsEn: ["It makes up an answer", "It searches the internet", "It acknowledges its uncertainty and refuses to make things up", "It redirects to Google"], explanationEn: "Claude acknowledges when it's unsure and prefers to recognize uncertainty." },
  { questionEn: "On which mobile operating systems are the apps for these assistants available?", optionsEn: ["iOS only", "Android only", "Android and iOS", "Samsung only"], explanationEn: "The apps are available on both Android and iOS." },
  { questionEn: "How do you activate voice mode?", optionsEn: ["By saying 'Hey AI'", "By tapping the microphone icon", "By shaking the phone", "From settings"], explanationEn: "You activate it by tapping the microphone icon." },
  { questionEn: "Which assistant does NOT respond with voice?", optionsEn: ["ChatGPT", "Gemini", "Claude", "All respond with voice"], explanationEn: "Claude does not respond with voice; its responses are always in text." },
  { questionEn: "What is Perplexity recommended for?", optionsEn: ["Analyzing documents", "Getting current information with verifiable sources", "Generating images", "Writing long texts"], explanationEn: "Perplexity is ideal for current information with cited sources." },
  { questionEn: "What is the 'starter kit' to cover 80% of AI tasks?", optionsEn: ["Claude and Gemini", "ChatGPT and Perplexity", "Perplexity and Claude", "ChatGPT and Gemini"], explanationEn: "ChatGPT and Perplexity cover approximately 80% of needs." },
  { questionEn: "What is the 'double verification' strategy?", optionsEn: ["Asking ChatGPT twice", "Perplexity for sources, then ChatGPT/Claude to go deeper", "Searching on Google", "Two versions of the same assistant"], explanationEn: "Perplexity for sources, then ChatGPT or Claude to go deeper." },
  { questionEn: "In which topics is double verification especially important?", optionsEn: ["Cooking recipes", "Health, legal matters and finances", "Travel and tourism", "Entertainment"], explanationEn: "For health, legal and financial topics, always use double verification." },
  { questionEn: "What is the recommended first message when starting with an assistant?", optionsEn: ["Ask it for creativity", "Introduce yourself with name, age, country and technology level", "Ask about its capabilities", "Ask for short answers"], explanationEn: "Introducing yourself helps the assistant adapt its language to your profile." },
  { questionEn: "What would be the 'advanced kit' of AI assistants?", optionsEn: ["ChatGPT, Perplexity, Gemini and Copilot", "ChatGPT, Perplexity, Claude and Gemini", "Claude, Gemini, Midjourney and Perplexity", "ChatGPT, Claude, Bing and Siri"], explanationEn: "The advanced kit includes ChatGPT, Perplexity, Claude and Gemini." },
];

// ─── Curso 5 EN ─────────────────────────────────────────────────────────────

export const curso5QuizEn: Partial<QuizQuestion>[] = [
  { questionEn: "What is the four-element formula for an effective prompt?", optionsEn: ["IDEA + ACTION + DATA + RESULT", "ROLE + TASK + CONTEXT + FORMAT", "TOPIC + QUESTION + DETAIL + LENGTH", "EXPERT + INSTRUCTION + EXAMPLE + OUTPUT"], explanationEn: "The formula is ROLE + TASK + CONTEXT + FORMAT." },
  { questionEn: "What is the ROLE element used for in a prompt?", optionsEn: ["To indicate the format", "To give context", "To tell the AI what type of expert it should be", "To limit the length"], explanationEn: "The ROLE tells the AI what type of expert to adopt." },
  { questionEn: "Which is a correct example of the TASK element?", optionsEn: ["As if you were a chef", "For people over 50", "In list form", "Explain the benefits of meditation"], explanationEn: "The TASK is the specific action: explain, write, summarize, compare, create, translate." },
  { questionEn: "Which of these words is NOT an example of a TASK?", optionsEn: ["Summarize", "Compare", "Formal", "Translate"], explanationEn: "'Formal' describes a tone, not an action." },
  { questionEn: "What does the CONTEXT provide?", optionsEn: ["The type of expert", "The specific action", "Relevant information about the situation", "The visual structure"], explanationEn: "CONTEXT provides information about the situation." },
  { questionEn: "What does the FORMAT control?", optionsEn: ["The language", "How the response is organized and presented", "The response speed", "The difficulty level"], explanationEn: "FORMAT specifies how to organize the response: list, paragraphs, table." },
  { questionEn: "Are all four elements mandatory?", optionsEn: ["Yes, always", "No, they are optional, but using more gives better results", "Only TASK and CONTEXT are mandatory", "Only ROLE and FORMAT are optional"], explanationEn: "They are optional, but the more you include, the more precise the response will be." },
  { questionEn: "How many categories of context exist?", optionsEn: ["Three", "Four", "Five: personal, situational, audience, constraints and style/tone", "Six"], explanationEn: "Five: Personal, Situational, Audience, Constraints and Style/Tone." },
  { questionEn: "What does PERSONAL context include?", optionsEn: ["Who the result is for", "The limitations", "Age, profession and experience level of the user", "The desired tone"], explanationEn: "Personal context includes your age, profession and experience level." },
  { questionEn: "What is the 'Imagine that...' technique used for?", optionsEn: ["To request fictional answers", "To add context quickly and naturally", "To change the format", "To correct errors"], explanationEn: "'Imagine that...' adds context quickly." },
  { questionEn: "When is there too much context?", optionsEn: ["More than two categories", "More than one sentence", "Three or four paragraphs before the question", "Longer than the task"], explanationEn: "3-4 paragraphs before the question is excessive." },
  { questionEn: "What criterion do you use to decide whether to include context?", optionsEn: ["Include it if it's true", "Only if it changes the AI's response", "If it makes the prompt longer", "Only if the AI asks for it"], explanationEn: "Only include context that changes the response." },
  { questionEn: "What are the six ways to be specific?", optionsEn: ["Exact topic, numbers, level of detail, type of result, audience and length limit", "ROLE, TASK, CONTEXT, FORMAT, TONE and EXAMPLES", "Clarity, brevity, precision, context, format and correction", "Personal, situational, audience, constraints, style and objective"], explanationEn: "Exact topic, numbers, level of detail, type of result, audience and length limit." },
  { questionEn: "What does the 'another person test' consist of?", optionsEn: ["Asking someone else to write the prompt", "Checking if another person would understand your prompt without additional explanation", "Having someone else read the response", "Having a colleague grade the prompt"], explanationEn: "If another person wouldn't understand your prompt, it lacks clarity." },
  { questionEn: "When is intentional vagueness valid?", optionsEn: ["Not enough time", "For brainstorming or creative inspiration", "When the AI knows your history", "Technical topic"], explanationEn: "Valid for brainstorming or inspiration." },
  { questionEn: "How many iterations can you make?", optionsEn: ["Maximum three", "Depends on the subscription", "Unlimited", "Five per session"], explanationEn: "There is no limit on iterations." },
  { questionEn: "What is the magic phrase to shorten a response?", optionsEn: ["'Be briefer'", "'Summarize it to half'", "'Remove half'", "'Shorten this response'"], explanationEn: "'Summarize it to half' is the magic phrase for shortening." },
  { questionEn: "What phrase simplifies the language?", optionsEn: ["'Explain it again'", "'Make it less complicated'", "'Use simpler words'", "'Reduce the technical level'"], explanationEn: "'Use simpler words' tells it to avoid jargon." },
  { questionEn: "What phrase enriches with examples?", optionsEn: ["'Give me more information'", "'Add concrete examples'", "'Expand each point'", "'Include references'"], explanationEn: "'Add concrete examples' expands with practical illustrations." },
  { questionEn: "What is the most powerful phrase for refining?", optionsEn: ["'Improve this response'", "'Try again'", "'Do it again but [specific change]'", "'Redo it'"], explanationEn: "'Do it again but...' keeps what's good and modifies what's needed." },
  { questionEn: "How do you correct a specific error?", optionsEn: ["'It's wrong, try again'", "'You made an error: [describe]. Correct it'", "'Review and fix'", "'Start from scratch'"], explanationEn: "Being specific allows correcting without losing the rest." },
  { questionEn: "Why NOT start from scratch every time?", optionsEn: ["The AI loses context", "It's more efficient to build on what exists", "It costs more tokens", "The AI only remembers within the same session"], explanationEn: "It's more efficient to refine what already exists." },
  { questionEn: "What is the process for improving a poor prompt?", optionsEn: ["Simplify -> shorten -> eliminate", "Identify missing info -> add context -> specify format -> add role", "Correct spelling -> change tone -> add examples", "Define topic -> write questions -> filter"], explanationEn: "Identify missing info -> add context -> specify format -> add role." },
  { questionEn: "Can the skill of writing good prompts be learned?", optionsEn: ["It's innate", "Only for technical people", "It's learned with practice", "Depends on the type of AI"], explanationEn: "Improving prompts is a learnable skill with practice." },
  { questionEn: "What does 'being specific doesn't mean being complex' mean?", optionsEn: ["Short prompts are always better", "Specificity is achieved with clarity, not more words", "Simple prompts give complex answers", "It's not necessary to use all elements"], explanationEn: "Being specific means being clear and precise, not complicated." },
  { questionEn: "What phrase converts a response into a list?", optionsEn: ["'Divide it into points'", "'Put it in list form'", "'Enumerate each idea'", "'Organize in bullet points'"], explanationEn: "'Put it in list form' changes the format to a list." },
  { questionEn: "When do you use 'Make a table'?", optionsEn: ["To compare elements visually", "Too much text", "Pros and cons", "Shorten response"], explanationEn: "'Make a table' is useful for comparing elements." },
  { questionEn: "What question does the AUDIENCE context answer?", optionsEn: ["How much time do you have?", "What tone do you want?", "Who will read or use the result?", "What is your experience?"], explanationEn: "The audience answers 'who will read or use the result?'." },
  { questionEn: "What do CONSTRAINTS represent?", optionsEn: ["Forbidden topics", "Limitations or requirements the response must meet", "Maximum number of words", "Errors to avoid"], explanationEn: "Constraints are specific limitations or requirements." },
  { questionEn: "What attitude should you have toward a mediocre response?", optionsEn: ["Accept it if it's approximate", "Restart the conversation", "Never accept it; always refine", "Switch tools"], explanationEn: "Never accept mediocre responses; refine until you get what you need." },
  { questionEn: "What happens when you are clearer in your prompt?", optionsEn: ["The AI takes longer", "The response is longer", "The response is more useful", "The AI asks for less info"], explanationEn: "The clearer you are, the more useful the response is." },
  { questionEn: "What is STYLE/TONE used for?", optionsEn: ["To indicate the length", "To specify visual format", "To tell the AI how the response should sound", "To identify the audience"], explanationEn: "Style/tone indicates how you want it to sound: formal, casual, warm, technical." },
  { questionEn: "What is a category of prompt templates?", optionsEn: ["Entertainment", "Work tasks", "Academic research", "Programming"], explanationEn: "Categories include: personal communication, work tasks, health, learning and organization." },
  { questionEn: "What does SITUATIONAL context represent?", optionsEn: ["Name and occupation", "What is happening and why you need the information", "Response format", "Who you will deliver the result to"], explanationEn: "It describes what is happening and why you need help." },
  { questionEn: "How does iterative conversation work?", optionsEn: ["One perfect prompt and accept the first response", "Questions -> AI responds -> you specify changes -> it improves -> repeat", "One question per session", "All variants at the same time"], explanationEn: "It's a continuous refinement cycle." },
];

// ─── Curso 6 EN ─────────────────────────────────────────────────────────────

export const curso6QuizEn: Partial<QuizQuestion>[] = [
  { questionEn: "What are the three approaches for writing messages with AI?", optionsEn: ["Translate, summarize and correct", "Write from scratch, improve an existing one and adapt the tone", "Dictate, edit and send", "Copy, paste and reformat"], explanationEn: "Write from scratch, improve an existing text and adapt the tone." },
  { questionEn: "What is ESSENTIAL to specify when asking the AI for a message?", optionsEn: ["Exact word count", "Recipient's name", "The desired tone and the medium of delivery", "The time of sending"], explanationEn: "Always indicate the tone and the medium (WhatsApp, corporate email)." },
  { questionEn: "What tone is appropriate for a complaint letter?", optionsEn: ["Informal and relaxed", "Sarcastic and aggressive", "Firm but polite", "Warm and funny"], explanationEn: "An effective complaint should be firm but polite." },
  { questionEn: "If the response wasn't what you needed, what should you do?", optionsEn: ["Start a new conversation", "Accept it as is", "Request adjustments in the same chat", "Edit it manually"], explanationEn: "Iterative refinement takes advantage of the previous context." },
  { questionEn: "What should you NOT include in prompts for writing messages?", optionsEn: ["The purpose", "Private data like passwords", "The desired tone", "The medium of delivery"], explanationEn: "Never include sensitive information." },
  { questionEn: "How does AI help you create recipes with limited ingredients?", optionsEn: ["Only standard recipes", "You tell it what ingredients you have and it suggests recipes", "Only restaurant recipes", "You need photos"], explanationEn: "Tell it what ingredients you have and the AI will generate viable recipes." },
  { questionEn: "A person with celiac disease, what restriction should they specify?", optionsEn: ["Lactose-free", "Low salt", "Gluten-free", "No refined sugar"], explanationEn: "Celiac disease requires a gluten-free diet." },
  { questionEn: "What restriction is relevant for someone with hypertension?", optionsEn: ["Gluten-free", "Lactose-free", "Low salt (sodium)", "No animal protein"], explanationEn: "People with hypertension need a low-salt diet." },
  { questionEn: "What tool is recommended for real-time info when planning a trip?", optionsEn: ["ChatGPT", "Perplexity", "A paper map", "Google Translate"], explanationEn: "Perplexity has access to real-time information." },
  { questionEn: "What is the two-tool workflow for planning a trip?", optionsEn: ["Only ChatGPT", "Perplexity for current info, then ChatGPT for the itinerary", "First ChatGPT, then Perplexity", "Google Maps and Perplexity"], explanationEn: "Perplexity for current data, then ChatGPT for the personalized itinerary." },
  { questionEn: "How should a daily travel itinerary be structured?", optionsEn: ["Just listing places", "By morning, afternoon and evening activities", "A single block of text", "Only restaurants"], explanationEn: "A good itinerary organizes activities in morning, afternoon and evening blocks." },
  { questionEn: "What categories should a packing list for international travel include?", optionsEn: ["Only clothes", "Documents, clothes, medications, electronics and miscellaneous", "Only documents and medications", "Only toiletries"], explanationEn: "It covers: documents, clothes, medications, electronics and miscellaneous." },
  { questionEn: "What is the 'golden rule' of educational AI use?", optionsEn: ["Let it solve all exercises", "Use AI to teach and explain, not to give direct answers", "Copy answers", "Avoid AI in education"], explanationEn: "AI should teach understanding, not give answers." },
  { questionEn: "Which prompt is the CORRECT approach for learning math?", optionsEn: ["'Solve this problem'", "'Give me the exam answers'", "'Explain step by step without giving me the direct answer'", "'Do my entire homework'"], explanationEn: "The correct approach asks for explanation without revealing the answer." },
  { questionEn: "What advantage does AI have as a personal tutor?", optionsEn: ["It's always right", "Available 24/7, infinite patience and adapts the level", "It attends in-person classes", "It charges less"], explanationEn: "AI is always available, never gets impatient and adapts its explanations." },
  { questionEn: "What exercises can AI generate for practice?", optionsEn: ["Only multiple choice", "Progressive difficulty, reading comprehension, word searches and applied problems", "Only from textbooks", "Only memorization"], explanationEn: "AI generates: progressive difficulty, reading comprehension, word searches and more." },
  { questionEn: "How many pages can Claude process?", optionsEn: ["10", "50", "Up to 200 pages", "No limit"], explanationEn: "Claude processes up to 200 pages in a conversation." },
  { questionEn: "What is a type of action-oriented summary?", optionsEn: ["A list of statistical data", "Extract next steps, decisions and responsible parties", "Document narrative", "Comparison of two texts"], explanationEn: "Extracts actionable items: next steps and responsible parties." },
  { questionEn: "To summarize a legal contract with AI, what precaution is essential?", optionsEn: ["Share it on social media", "Use it as a starting point, consult a professional", "Trust it completely", "Ask the AI to act as a lawyer"], explanationEn: "Legal summaries are starting points, they don't replace professionals." },
  { questionEn: "Why is AI translation superior to literal translation?", optionsEn: ["It's faster", "It understands context, tone and idioms", "It never makes mistakes", "It translates more languages"], explanationEn: "AI understands context and idioms, producing natural translations." },
  { questionEn: "How is 'It's raining cats and dogs' translated?", optionsEn: ["It's literally raining cats and dogs", "Animals come out when it rains", "It's pouring rain", "There's a pet storm"], explanationEn: "The correct translation of the idiom is 'it's pouring rain'." },
  { questionEn: "What is the correct translation of 'Break a leg'?", optionsEn: ["Break a leg (literal)", "Watch out for stairs", "Good luck", "Give it your all"], explanationEn: "'Break a leg' means 'good luck'." },
  { questionEn: "For which documents is a certified professional translator essential?", optionsEn: ["Informal emails", "Restaurant menus", "Contracts and official documents with legal validity", "Video subtitles"], explanationEn: "Documents with legal validity require certified translators." },
  { questionEn: "How does AI help you with the local language when traveling?", optionsEn: ["It only translates menus", "It gives you the 20 most useful phrases with phonetic pronunciation", "It only translates with internet", "Only European languages"], explanationEn: "AI generates essential phrases with phonetic pronunciation." },
  { questionEn: "What is the method for summarizing long documents?", optionsEn: ["Copy and paste everything", "Upload the file with the paperclip icon", "Manually write main points", "Ask it to search for it online"], explanationEn: "For long documents, upload the file with the paperclip icon." },
  { questionEn: "What considerations does an itinerary for older travelers need?", optionsEn: ["More nightlife activities", "Leisurely pace, little walking, accessibility and rest breaks", "Indoors only", "Same as for young people"], explanationEn: "Itineraries for older adults need short distances and rest breaks." },
  { questionEn: "An adult wants to learn English with 15 minutes a day. What should they ask the AI?", optionsEn: ["Translate long texts", "A daily 15-minute plan with progressive topics", "The complete TOEFL exam", "Only correct pronunciation"], explanationEn: "AI designs 15-minute daily plans with progressive topics." },
  { questionEn: "How many days does a weekly meal plan cover?", optionsEn: ["3 days", "5 to 7 days", "Only weekends", "14 days"], explanationEn: "Standard weekly planning covers 5 to 7 days." },
  { questionEn: "When planning a dinner for 12-15 people, what should the prompt include?", optionsEn: ["Only the main dish", "Number of guests, type of event and dietary restrictions", "Only the budget", "The venue address"], explanationEn: "Include number of people, type of event and dietary restrictions." },
  { questionEn: "What are the five types of summaries?", optionsEn: ["Short, medium, long, extensive and complete", "Executive, bullet points, explanatory, action-oriented and comparative", "Simple, detailed, technical, informal and formal", "Summary, review, synopsis, excerpt and abstract"], explanationEn: "Executive, bullet points, explanatory, action-oriented and comparative." },
  { questionEn: "What pre-trip elements can AI help you verify?", optionsEn: ["Only the weather", "Visa, passport, language phrases and cultural customs", "Only exchange rates", "Only flights and prices"], explanationEn: "AI can guide you on visa, passport, useful phrases and cultural customs." },
  { questionEn: "What is the difference between a WhatsApp and a corporate email when writing with AI?", optionsEn: ["The email should be shorter", "WhatsApp allows informality; email requires formality", "There is no difference", "WhatsApp should be longer"], explanationEn: "WhatsApp allows informality; email demands formal structure." },
  { questionEn: "What tone would be appropriate for a sincere apology?", optionsEn: ["Formal and distant", "Firm and direct", "Warm and genuine, without excuses", "Technical and detailed"], explanationEn: "An effective apology should be warm, genuine and without excuses." },
  { questionEn: "Which translation scenario requires special care?", optionsEn: ["A casual message to a friend", "A restaurant menu", "A legal contract with legal validity", "A cooking recipe"], explanationEn: "Legal documents need certified translators, not just AI." },
  { questionEn: "What cooking technique describes cooking slowly in little liquid?", optionsEn: ["Boiling", "Poaching", "Braising (stewing)", "Frying"], explanationEn: "Braising/stewing involves cooking over low heat in little liquid." },
];

export const curso10QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn: "What is a Custom GPT on the ChatGPT platform?",
    optionsEn: [
      "An AI model trained from scratch by the user",
      "A personalized version of ChatGPT with custom instructions, knowledge, and capabilities",
      "A chatbot that can only answer math questions",
      "A premium ChatGPT subscription",
    ],
    explanationEn:
      "A Custom GPT is a version of ChatGPT configured with custom instructions, reference documents, and specific capabilities, without needing to code.",
  },
  {
    questionEn: "What are Claude Projects?",
    optionsEn: [
      "Programming projects in the Claude language",
      "Workspaces in Claude that maintain context, instructions, and shared files across conversations",
      "PDF documents that Claude can read",
      "A tool exclusively for Fortune 500 companies",
    ],
    explanationEn:
      "Claude Projects are persistent spaces within Claude.ai where you can save instructions, files, and maintain context across multiple conversations.",
  },
  {
    questionEn: "When creating a Custom GPT, which of these is NOT a component you can configure?",
    optionsEn: [
      "The assistant's name and description",
      "Behavior instructions",
      "The hardware model of OpenAI's server",
      "Knowledge documents",
    ],
    explanationEn:
      "You cannot control OpenAI's server infrastructure. You can configure name, description, instructions, documents, and capabilities.",
  },
  {
    questionEn: "What is the main function of the 'Instructions' field in a Custom GPT?",
    optionsEn: [
      "To write the assistant's source code",
      "To define the assistant's behavior, tone, rules, and limitations",
      "To upload PDF files to the assistant",
      "To configure the operating system language",
    ],
    explanationEn:
      "The instructions field is where you define how the assistant should behave: its personality, tone, what it should and should not do, and its rules.",
  },
  {
    questionEn: "You have a customer service assistant and want it to NEVER offer unauthorized discounts. Where do you configure this?",
    optionsEn: [
      "In the assistant's name",
      "In the system instructions, explicitly specifying the restriction",
      "By uploading an image to the assistant",
      "It is not possible to restrict behaviors in Custom GPTs",
    ],
    explanationEn:
      "System instructions allow you to define explicit rules and behavioral restrictions, such as 'never offer discounts without an authorization code'.",
  },
  {
    questionEn: "What advantage does uploading a product manual as a document to a Custom GPT offer?",
    optionsEn: [
      "The assistant learns from that document forever and updates its model",
      "The assistant can retrieve and cite specific information from the document when responding",
      "The document automatically becomes executable code",
      "The assistant can edit the original document",
    ],
    explanationEn:
      "By uploading documents, the assistant can retrieve and cite specific information from them when responding, acting as a knowledge base.",
  },
  {
    questionEn: "What types of files can you upload as a knowledge base to a Custom GPT?",
    optionsEn: [
      "Only MP4 video files",
      "PDFs, text documents, CSVs, FAQs, and manuals",
      "Only Python code files",
      "Only JPG and PNG images",
    ],
    explanationEn:
      "Custom GPTs accepts PDFs, Word documents, CSVs, text files, and more, which are used as reference knowledge base.",
  },
  {
    questionEn: "What does RAG mean in the context of AI assistants?",
    optionsEn: [
      "Rapid Answer Generation",
      "Retrieval Augmented Generation",
      "Random Automated Guidance",
      "Real-time AI Governance",
    ],
    explanationEn:
      "RAG (Retrieval Augmented Generation) is a technique where the model retrieves relevant information from a database before generating its response.",
  },
  {
    questionEn: "In basic RAG, what is the correct sequence of steps?",
    optionsEn: [
      "Generate response → search documents → receive question",
      "Receive question → search relevant documents → include context → generate response",
      "Train model → save documents → respond",
      "Index data → delete question → respond with raw data",
    ],
    explanationEn:
      "In RAG: a question is received, the most relevant document fragments are retrieved, added as context, and the model generates a grounded response.",
  },
  {
    questionEn: "What is the key difference between uploading documents to a Custom GPT and RAG connected to real data?",
    optionsEn: [
      "There is no difference, they are the same",
      "With uploaded documents the data is static; with real RAG you can query dynamic and updated sources",
      "RAG only works with social media data",
      "Uploaded documents update themselves every hour",
    ],
    explanationEn:
      "Uploaded documents are static (do not change). RAG connected to real data can query databases, APIs, or documents that update constantly.",
  },
  {
    questionEn: "You are testing your AI assistant and notice it correctly answers simple questions but fails on complex ones. What is the best next step?",
    optionsEn: [
      "Delete the assistant and start over",
      "Identify edge cases, add examples of those scenarios in the instructions, and test again",
      "Publish it immediately because simple questions work",
      "Change the assistant's name",
    ],
    explanationEn:
      "The iterative improvement process involves identifying edge cases, updating instructions with specific examples, and retesting until the desired behavior is achieved.",
  },
  {
    questionEn: "What is an 'edge case' in the context of testing an assistant?",
    optionsEn: [
      "A very long question",
      "An unusual or extreme situation that can reveal flaws in the assistant's behavior",
      "The model's maximum token limit",
      "A user who types in all caps",
    ],
    explanationEn:
      "Edge cases are atypical or extreme situations (ambiguous, off-topic, malicious questions) that test the limits of the assistant and reveal unexpected behaviors.",
  },
  {
    questionEn: "What is the purpose of testing with real users before publishing your assistant?",
    optionsEn: [
      "So users give you money for the assistant",
      "To discover how real people interact, detect confusion and unexpected behaviors the creator did not anticipate",
      "User testing is not necessary if the assistant works well in your own tests",
      "To artificially increase the number of conversations the assistant has",
    ],
    explanationEn:
      "Real users interact in ways the creator does not anticipate. Their tests reveal comprehension issues, ambiguous instructions, and improvement opportunities.",
  },
  {
    questionEn: "When writing instructions for an assistant, which of these practices is most effective?",
    optionsEn: [
      "Write very vague instructions so the assistant has creative freedom",
      "Be specific with examples, indicate what it should and should NOT do, and define the exact tone",
      "Use only emojis in the instructions",
      "Copy another assistant's instructions without modifying them",
    ],
    explanationEn:
      "Effective instructions are specific, include examples, define clear restrictions, and specify the tone. Ambiguity leads to inconsistent behaviors.",
  },
  {
    questionEn: "What does configuring the 'tone' of an assistant in its instructions mean?",
    optionsEn: [
      "Changing the volume of the text",
      "Defining how the assistant communicates: formal or informal, empathetic or direct, technical or simple",
      "Choosing the color of the assistant's interface",
      "Configuring the keyboard language",
    ],
    explanationEn:
      "Tone defines the communicative personality of the assistant: formal for a law firm, friendly for a clothing store, or technical for developers.",
  },
  {
    questionEn: "Which of the following is a good practice for keeping your assistant's knowledge base up to date?",
    optionsEn: [
      "Never update documents once the assistant is published",
      "Periodically review and update documents when products, prices, or policies change",
      "Delete the entire knowledge base every week",
      "Add all possible documents regardless of their relevance",
    ],
    explanationEn:
      "The knowledge base must be kept updated. Outdated documents can cause the assistant to provide incorrect information about prices, policies, or products.",
  },
  {
    questionEn: "What is the OpenAI GPT Store?",
    optionsEn: [
      "A store where you buy OpenAI hardware",
      "A marketplace where creators can publish and share their Custom GPTs with other users",
      "A place to download ChatGPT updates",
      "A platform exclusively for programmers",
    ],
    explanationEn:
      "The GPT Store is OpenAI's marketplace where Plus subscribers can publish and discover Custom GPTs created by the community.",
  },
  {
    questionEn: "What access options can you configure when sharing your Custom GPT?",
    optionsEn: [
      "Only public or deleted",
      "Private (only you), with link (whoever has the link), or public (everyone in the GPT Store)",
      "Only numeric password access",
      "It can only be public or private, there is no link option",
    ],
    explanationEn:
      "Custom GPTs offer three access levels: only for you (private), for whoever has the link, or public in the GPT Store.",
  },
  {
    questionEn: "You want to create an assistant to help new employees learn your company's internal processes. What type of access should you configure?",
    optionsEn: [
      "Public in the GPT Store for anyone to use",
      "Private with a link shared only with employees, to maintain confidentiality of internal documents",
      "Without access to any documents",
      "Public because transparency is always better",
    ],
    explanationEn:
      "For internal use with confidential documents, the right choice is private or restricted link access, not publishing it openly.",
  },
  {
    questionEn: "Which of these capabilities can you NOT enable in a Custom GPT?",
    optionsEn: [
      "Web browsing",
      "Image generation with DALL-E",
      "Access to users' bank accounts",
      "Python code interpretation and execution",
    ],
    explanationEn:
      "Available capabilities include web browsing, DALL-E, and code execution. Custom GPTs cannot access bank accounts or personal financial data.",
  },
  {
    questionEn: "When is it recommended to use Claude Projects instead of a Custom GPT?",
    optionsEn: [
      "When you want to publish your assistant in a public store",
      "When working within the Anthropic/Claude ecosystem and needing persistent context projects and collaboration",
      "When you need to generate images with DALL-E",
      "Claude Projects and Custom GPTs are exactly the same",
    ],
    explanationEn:
      "Claude Projects is ideal for Anthropic ecosystem users who need persistent context, shared instructions, and organization of conversations by project.",
  },
  {
    questionEn: "In your assistant's instructions you write: 'If the user asks about competitors, politely respond that you cannot comment on other companies'. What type of configuration is this?",
    optionsEn: [
      "A technical capability",
      "A behavioral restriction (guardrail)",
      "A knowledge document",
      "An API action",
    ],
    explanationEn:
      "This is a behavioral restriction or guardrail: an explicit rule that limits what the assistant can and cannot do or say.",
  },
  {
    questionEn: "What is the best way to indicate the response format to your assistant?",
    optionsEn: [
      "It is not necessary, the assistant always chooses the best format",
      "Include explicit examples of the expected format in the instructions (e.g., 'always respond with: 1) Direct answer 2) Justification 3) Next steps')",
      "Use only emojis to indicate the format",
      "Change the underlying AI model",
    ],
    explanationEn:
      "Providing explicit examples of the response format in instructions is the most effective way to ensure consistency in the assistant's responses.",
  },
  {
    questionEn: "Your technical support assistant frequently invents solutions that do not exist in your manual. What is the most likely cause and solution?",
    optionsEn: [
      "The AI model is damaged; replace it",
      "The instructions do not sufficiently restrict the assistant to rely only on the provided documents; add the rule 'only respond based on the knowledge documents'",
      "The manual is too long; delete it",
      "The assistant needs more RAM",
    ],
    explanationEn:
      "Without an explicit instruction restricting the assistant to use only the provided documents, the model can hallucinate solutions. Adding that restriction solves the problem.",
  },
  {
    questionEn: "What information is essential to include when giving your assistant a 'role' in the instructions?",
    optionsEn: [
      "The assistant's age and gender",
      "Who it is (its role/persona), what audience it serves, what its goal is, and what its tone is",
      "The name of the programmer who created it",
      "The assistant's date of birth",
    ],
    explanationEn:
      "An effective role defines who the assistant is, who it serves, what its main objective is, and how it communicates.",
  },
  {
    questionEn: "What is the 'iteration' process in developing an AI assistant?",
    optionsEn: [
      "Creating the assistant once and never modifying it",
      "Continuous cycle of test → identify problems → improve instructions/knowledge → test again",
      "Deleting the assistant every week and creating a new one",
      "Copying another person's assistant and publishing it",
    ],
    explanationEn:
      "Iteration is the cycle of continuous improvement: test with real cases, identify failures, update instructions or knowledge, and repeat until the desired behavior is achieved.",
  },
  {
    questionEn: "Why is it important to test your assistant with off-topic questions?",
    optionsEn: [
      "To see if the assistant knows everything",
      "To verify that restrictions work and the assistant appropriately rejects questions outside its scope",
      "Off-topic questions are never a problem",
      "To increase the assistant's context",
    ],
    explanationEn:
      "Testing with off-topic questions verifies that restrictions work correctly and that the assistant politely redirects without trying to answer topics outside its scope.",
  },
  {
    questionEn: "What advantage does creating a personalized assistant have over using ChatGPT directly?",
    optionsEn: [
      "The personalized assistant is always smarter than the base model",
      "The assistant already comes configured with the specific context, tone, and knowledge for the task, without needing to explain it in every conversation",
      "The personalized assistant has no token limit",
      "Personalized assistants are free, ChatGPT is paid",
    ],
    explanationEn:
      "The main advantage is consistency: the assistant already has loaded instructions, documents, and configuration, so there is no need to re-contextualize in each session.",
  },
  {
    questionEn: "When publishing an assistant in the GPT Store, what element is most important for users to find and use it?",
    optionsEn: [
      "The assistant's name in capital letters",
      "A clear description that explains exactly what the assistant does and who it is useful for",
      "Using many emojis in the description",
      "Publishing the assistant at midnight",
    ],
    explanationEn:
      "A precise and clear description explaining the purpose and target audience is key for the right users to find and adopt the assistant.",
  },
  {
    questionEn: "What does it mean for a Custom GPT to have 'conversation starters'?",
    optionsEn: [
      "That the assistant can only ask questions, not answer",
      "Suggested initial questions that guide users on how to interact with the assistant",
      "Automatic welcome phrases that the assistant repeats in a loop",
      "A points system for frequent users",
    ],
    explanationEn:
      "Conversation starters are suggested questions or phrases that appear at the start so users quickly understand what the assistant can do and how to use it.",
  },
  {
    questionEn: "What is a real risk of uploading internal confidential documents to a public Custom GPT?",
    optionsEn: [
      "The document will be automatically deleted in 24 hours",
      "External users could extract confidential information by asking specific questions to the assistant",
      "Documents do not affect the assistant's responses",
      "Only OpenAI employees can see the documents",
    ],
    explanationEn:
      "If you publish a public assistant with confidential documents, any user can extract that information with specific questions. Sensitive documents should only go in private assistants.",
  },
  {
    questionEn: "What is an 'Action' in an advanced Custom GPT?",
    optionsEn: [
      "A button to restart the conversation",
      "An integration that allows the assistant to call external APIs to get real-time data or execute actions",
      "A special type of emoji",
      "The ability to speak aloud",
    ],
    explanationEn:
      "Actions are integrations with external APIs that allow the assistant to get real-time data (weather, prices, inventory) or execute actions (create tickets, send emails).",
  },
  {
    questionEn: "You are creating a recipe assistant and want it to respond only in Spanish and always include preparation time. How do you configure this?",
    optionsEn: [
      "It is not possible to force the language in a Custom GPT",
      "In the instructions you write that it should ALWAYS respond in Spanish and obligatorily include preparation time, ingredients, and steps in each recipe",
      "By changing your browser's language",
      "By uploading a Spanish dictionary as a document",
    ],
    explanationEn:
      "The system instructions are the right place to force the response language and specify elements that MUST always be included in each response.",
  },
  {
    questionEn: "What is the difference between an AI assistant and a traditional decision-tree chatbot?",
    optionsEn: [
      "There is no difference, they are the same",
      "The traditional chatbot follows fixed rules with predefined responses; the AI assistant generates dynamic responses and understands natural language",
      "The traditional chatbot is smarter",
      "The AI assistant only works with voice commands",
    ],
    explanationEn:
      "A decision-tree chatbot has predefined responses and fixed menus. An AI assistant understands free natural language and generates dynamic responses adapted to context.",
  },
  {
    questionEn: "After publishing your assistant, a user reports it responds inappropriately to certain messages. What is the correct process?",
    optionsEn: [
      "Ignore the report because the user probably used it wrong",
      "Reproduce the problem, adjust the assistant's instructions or restrictions, test the changes, and update the published version",
      "Delete the user from the system",
      "Publish a new assistant from scratch with a different name",
    ],
    explanationEn:
      "The correct process is: reproduce the problem, identify what instruction is missing or misconfigured, correct it, test, and update. Published assistants can be edited.",
  },
];

export const curso11QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn: "What is automation in the context of productivity tools?",
    optionsEn: [
      "Replacing all employees with physical robots",
      "Setting up flows where one action automatically triggers other actions without manual intervention",
      "Programming in machine language to optimize hardware",
      "Using Excel macros only",
    ],
    explanationEn:
      "Automation connects apps and services so that when an event (trigger) occurs, predefined actions execute automatically, eliminating repetitive tasks.",
  },
  {
    questionEn: "In the context of automation, what is a 'trigger'?",
    optionsEn: [
      "An error in the automation flow",
      "The event that initiates the automated flow (e.g., receiving an email, new form submitted)",
      "The pause button for the automation",
      "The final result of the automation",
    ],
    explanationEn:
      "A trigger is the initial event that activates the automation, such as receiving an email, a new lead in a CRM, or a specific time of day.",
  },
  {
    questionEn: "Which of these tasks is an ideal candidate for automation?",
    optionsEn: [
      "Writing a unique creative strategy for an important client",
      "Manually copying data from web forms to a spreadsheet every day",
      "Designing your company's logo",
      "Making complex legal decisions",
    ],
    explanationEn:
      "Copying data from forms to a spreadsheet is repetitive, rule-based, and requires no creative judgment: the perfect candidate for automation.",
  },
  {
    questionEn: "What is Zapier?",
    optionsEn: [
      "A programming language for AI",
      "A no-code platform that connects more than 7,000 applications to create automated workflows (Zaps)",
      "An AI model similar to GPT-4",
      "An operating system for industrial automation",
    ],
    explanationEn:
      "Zapier is a no-code platform that allows connecting thousands of applications by creating automated flows called Zaps, without needing to code.",
  },
  {
    questionEn: "In Zapier, a 'Zap' is composed of:",
    optionsEn: [
      "Only a trigger without actions",
      "A trigger (activator) and one or more actions that execute as a consequence",
      "Only actions without a trigger",
      "An AI model and a database",
    ],
    explanationEn:
      "A Zap always has at least one trigger (what starts the flow) and one or more actions (what happens as a consequence).",
  },
  {
    questionEn: "How can you integrate AI into a Zapier flow?",
    optionsEn: [
      "It is not possible to integrate AI into Zapier",
      "Using the OpenAI/ChatGPT or Claude step as an intermediate action that processes or transforms data",
      "Only by connecting Zapier to a physical robot",
      "By purchasing a special AI license from Zapier that costs more than $10,000",
    ],
    explanationEn:
      "Zapier has native integrations with OpenAI, ChatGPT, and Claude that allow adding AI steps in the flow to summarize, classify, generate text, or transform data.",
  },
  {
    questionEn: "What is the main difference between Zapier and Make (formerly Integromat)?",
    optionsEn: [
      "Make is free, Zapier is always paid",
      "Make offers more complex visual flows with branching, iterations, and more advanced conditional logic; Zapier is simpler and faster to set up",
      "Zapier connects more apps but Make connects none",
      "They are exactly the same with a different name",
    ],
    explanationEn:
      "Make (Integromat) has a more powerful visual interface with support for complex logic, branching, and advanced webhooks. Zapier prioritizes simplicity and ease of use.",
  },
  {
    questionEn: "What is n8n and how does it differ from Zapier and Make?",
    optionsEn: [
      "It is an AI language model",
      "It is an open-source automation tool you can install on your own server, offering total control and no operation limits",
      "It is a Chrome extension to automate the browser",
      "It is the new name for Zapier",
    ],
    explanationEn:
      "n8n is open-source and self-hosteable: you can install it on your server, have total control of your data, no cost per operation, and with advanced technical capabilities.",
  },
  {
    questionEn: "What is a webhook in the context of automation?",
    optionsEn: [
      "A type of physical cable to connect computers",
      "A URL that receives data in real time when an event occurs in another application",
      "A programming error in automation flows",
      "A type of web tracking cookie",
    ],
    explanationEn:
      "A webhook is a special URL that 'listens' for incoming data. When an app sends data to that URL (for example, when receiving a payment), the automation activates.",
  },
  {
    questionEn: "You want support emails to be automatically classified as 'urgent', 'normal', or 'low priority' and forwarded to the correct team. What tool would you use?",
    optionsEn: [
      "Only Outlook, without automation",
      "Zapier or Make with an AI step (ChatGPT/Claude) to classify the email text and route it to the corresponding team",
      "Print the emails and classify them manually",
      "Only possible with advanced Python programming",
    ],
    explanationEn:
      "This is a perfect case for Zapier/Make + AI: trigger on received email → AI step classifies the content → action routes to the correct team based on classification.",
  },
  {
    questionEn: "What is automated email response with AI?",
    optionsEn: [
      "Automatically blocking all incoming emails",
      "Using AI to generate personalized response drafts or automatic responses based on the content of the received email",
      "Forwarding all emails to another server",
      "Only responding to emails on Mondays",
    ],
    explanationEn:
      "Automated responses use AI to analyze email content and generate an appropriate response, either as a draft for human review or as a direct automatic response.",
  },
  {
    questionEn: "What is the main risk of setting up fully automatic email responses without human review?",
    optionsEn: [
      "There is no risk, AI always responds perfectly",
      "AI can generate incorrect, inappropriate responses, or ones that do not reflect the company's actual policy in unusual cases",
      "Emails are answered too quickly",
      "Automatic email uses too much electricity",
    ],
    explanationEn:
      "Without human review, AI can hallucinate information, respond incorrectly in edge cases, or send inappropriate responses. It is recommended to start with drafts that a human approves.",
  },
  {
    questionEn: "What is an 'automated daily summary' and what is it used for?",
    optionsEn: [
      "A document that prints automatically every day",
      "A flow that automatically collects key daily data (emails, metrics, news) and generates a consolidated summary sent by email or Slack",
      "An alarm that wakes up the team at 7am",
      "An automatic file backup",
    ],
    explanationEn:
      "An automated daily summary collects information from multiple sources (CRM, email, analytics) and uses AI to synthesize it into a useful briefing sent automatically to the team.",
  },
  {
    questionEn: "What is 'vibe coding'?",
    optionsEn: [
      "Programming while listening to music",
      "Describing in natural language what you want an application to do and letting AI generate the code for you",
      "An object-oriented programming style",
      "Code that detects the user's mood",
    ],
    explanationEn:
      "Vibe coding is the process of describing in natural language what you want to build and using AI tools like Cursor, Bolt, or v0 to generate the code.",
  },
  {
    questionEn: "Which of these tools is specifically designed for 'vibe coding'?",
    optionsEn: [
      "Microsoft Word",
      "Cursor, Bolt.new, Replit Agent, and v0 by Vercel",
      "Adobe Photoshop",
      "VLC Media Player",
    ],
    explanationEn:
      "Cursor, Bolt.new, Replit Agent, and v0 are tools designed to generate complete applications from natural language descriptions, without writing code manually.",
  },
  {
    questionEn: "You want to create a landing page without knowing how to code. What vibe coding tool is most appropriate?",
    optionsEn: [
      "n8n, which is a flow orchestrator",
      "v0 by Vercel or Bolt.new, which generate complete web interfaces from a description",
      "Zapier, which is for connecting applications",
      "Make, which is for automations",
    ],
    explanationEn:
      "v0 by Vercel and Bolt.new are optimized for creating web interfaces and landing pages from natural language descriptions, generating ready-to-use React/HTML code.",
  },
  {
    questionEn: "What is the difference between Zapier and n8n in terms of business model?",
    optionsEn: [
      "Both are completely free",
      "Zapier is paid SaaS with a limited free plan; n8n is open-source, self-hosteable, and free on your server (with paid cloud option)",
      "n8n costs more than Zapier",
      "Both require advanced programming",
    ],
    explanationEn:
      "Zapier charges by number of tasks/operations as a cloud service. n8n is open-source and can run on your server at no cost per operation, though they also have a cloud version.",
  },
  {
    questionEn: "What does 'branching' mean in a Make/n8n flow?",
    optionsEn: [
      "Deleting a step from the flow",
      "That the flow can take different paths based on logical conditions (if X then Y, otherwise Z)",
      "Copying the flow to another server",
      "Permanently stopping the automation",
    ],
    explanationEn:
      "Branching allows the automation to take different routes based on conditions: if the email is from a VIP client, it goes one way; if it is general, it goes another.",
  },
  {
    questionEn: "Which of these is an example of 'data aggregation' automation for a report?",
    optionsEn: [
      "Reading a book aloud",
      "Automatically collecting data from Google Analytics, the CRM, and email every morning, and consolidating it in a report spreadsheet",
      "Sending a birthday congratulations email manually",
      "Installing a software update",
    ],
    explanationEn:
      "Automated aggregation extracts data from multiple sources (Analytics, CRM, email) and consolidates it into a report format without manual intervention.",
  },
  {
    questionEn: "What is Replit Agent and what does it do in vibe coding?",
    optionsEn: [
      "An online antivirus",
      "An AI-based development environment that can create, run, and debug complete applications from natural language instructions",
      "A file storage service",
      "A video meeting assistant",
    ],
    explanationEn:
      "Replit Agent is an AI agent within Replit that can create complete projects, write code, install it, and run it, all from a natural language description.",
  },
  {
    questionEn: "An entrepreneur wants to automate the onboarding process: when someone fills out a form, they receive a personalized welcome email, are added to the CRM, and a task is created for the sales team. How many steps does this flow have?",
    optionsEn: [
      "1 step",
      "4 steps: trigger (form) + action 1 (email) + action 2 (CRM) + action 3 (task)",
      "Only 2 steps",
      "It is not possible to do this with no-code tools",
    ],
    explanationEn:
      "This flow has 1 trigger (form submitted) and 3 actions: send personalized email, add to CRM, and create task. It is perfectly configurable in Zapier or Make.",
  },
  {
    questionEn: "Which of these statements about AI automation is TRUE?",
    optionsEn: [
      "AI automations never make mistakes",
      "It is good practice to add validation steps or human review in critical automations involving external communications",
      "Once an automation is set up, it never needs maintenance",
      "Automation completely replaces the need for work teams",
    ],
    explanationEn:
      "For critical automations (customer responses, contract submissions), it is good practice to include a human review step before executing the final action.",
  },
  {
    questionEn: "What is a 'support classification' flow with AI in Zapier?",
    optionsEn: [
      "A flow that automatically deletes all support tickets",
      "A flow that receives support tickets, uses AI to categorize them by type and urgency, and assigns them to the correct agent or queue",
      "A form to evaluate support agents",
      "An automatic billing system",
    ],
    explanationEn:
      "A classification flow receives tickets (trigger), passes the content to an AI step that determines category and urgency, then routes the ticket to the correct team (action).",
  },
  {
    questionEn: "What is the advantage of using Make over Zapier for complex automations?",
    optionsEn: [
      "Make is cheaper in all cases",
      "Make allows visual flows with complex conditional logic, iterations over data lists, advanced error handling, and greater control over the flow",
      "Zapier cannot connect to Google",
      "Make works without internet",
    ],
    explanationEn:
      "Make excels in complex automations with its node-type visual editor, support for iterations, multiple conditional routes, and more granular error handling.",
  },
  {
    questionEn: "You are using vibe coding with Cursor to create an invoice generator. You describe the app in Spanish. What does Cursor do next?",
    optionsEn: [
      "Shows an error because it does not understand Spanish",
      "Generates the application code (HTML, CSS, JavaScript, or Python) based on your description, which you can review and run",
      "Charges you $500 for the generated code",
      "Creates a tutorial video on how to make invoices",
    ],
    explanationEn:
      "Cursor (and other vibe coding tools) process the natural language description and generate functional code that you can review, modify, and run.",
  },
  {
    questionEn: "What advantage does automating report generation with AI have over doing them manually?",
    optionsEn: [
      "Automated reports are always more accurate than manual ones",
      "It saves repetitive time, guarantees format consistency, and can include AI-generated analysis and insights in addition to raw data",
      "There is no advantage, manual reports are better",
      "Automated reports are generated but no one reads them",
    ],
    explanationEn:
      "Automation eliminates manual collection time, ensures the report always has the same format, and can add layers of analysis and interpretation with AI.",
  },
  {
    questionEn: "What is an 'iteration' in a Make or n8n flow?",
    optionsEn: [
      "A system error",
      "A step that processes each element of a list separately (for example, processing each email in a list one by one)",
      "The number of times the flow has run in total",
      "A scheduled pause in the automation",
    ],
    explanationEn:
      "Iteration allows a flow to process data lists element by element: for example, take 50 emails and apply the same AI action to each one individually.",
  },
  {
    questionEn: "What is the first recommended step before automating a process?",
    optionsEn: [
      "Immediately buy a premium Zapier subscription",
      "Map and document the current manual process to understand all its steps before automating it",
      "Automate without understanding the process, AI will solve it on its own",
      "Delete the current process and start from scratch",
    ],
    explanationEn:
      "Before automating, you must perfectly understand the manual process: what data enters, what transformations occur, and what comes out. Without this mapping, automation will replicate problems.",
  },
  {
    questionEn: "What is a 'filter' in Zapier or Make?",
    optionsEn: [
      "A tool to remove duplicate data from a database",
      "A condition that determines whether the flow should continue or stop based on whether the data meets certain criteria",
      "A security system against hackers",
      "A special type of trigger",
    ],
    explanationEn:
      "A filter is a logical condition that evaluates whether the flow should continue. For example: 'only continue if the email contains the word urgent' avoids processing unnecessary emails.",
  },
  {
    questionEn: "Which of these scenarios best describes successful 'vibe coding'?",
    optionsEn: [
      "An expert programmer writes code for 40 hours to create an app",
      "An entrepreneur without programming knowledge describes their app idea in Spanish, the AI tool generates the code, the entrepreneur tests and iteratively refines",
      "A designer creates mockups but cannot see the app working",
      "A developer uses Stack Overflow to copy code",
    ],
    explanationEn:
      "Successful vibe coding is when someone without programming experience describes what they need in natural language and collaborates with AI to iterate until they have a functional app.",
  },
  {
    questionEn: "What is the most important limitation to consider when doing vibe coding with AI tools?",
    optionsEn: [
      "Tools only work on Windows",
      "The generated code may have security errors, not follow best practices, and need review by a developer before putting it in real production",
      "Code can only be created in English",
      "Vibe coding requires memorizing specific commands",
    ],
    explanationEn:
      "Vibe coding generated code can work for prototypes but may have security vulnerabilities, performance issues, or technical debt requiring professional review before production.",
  },
  {
    questionEn: "How can you automate sending a weekly news digest of your industry to your team?",
    optionsEn: [
      "Read news manually and copy them into an email every Friday",
      "Set up a flow that every Monday gets news from RSS or news APIs, passes them to AI to summarize, and automatically sends the digest by email or Slack",
      "It is not possible to automate reading news",
      "Hire someone to read news and forward them",
    ],
    explanationEn:
      "You can fully automate this process: scheduled trigger (every Monday) → get news from RSS/API → AI step to summarize → send summary by email/Slack.",
  },
  {
    questionEn: "What does 'no-code' mean in the context of tools like Zapier?",
    optionsEn: [
      "That the tool does not work with code",
      "That you can create automations and applications without writing programming code, using visual interfaces",
      "That the tool is free",
      "That it only works with a specific type of data",
    ],
    explanationEn:
      "No-code means you can build complex flows and applications using drag-and-drop graphical interfaces, without needing to write a single line of code.",
  },
  {
    questionEn: "What is the main benefit of using AI in the 'action' step of a Zapier flow?",
    optionsEn: [
      "AI makes the flow slower but safer",
      "It allows transforming, enriching, or analyzing data intelligently before passing it to the next action, adding reasoning capability to the flow",
      "AI can only be used as a trigger, not as an action",
      "It reduces the cost of the Zapier subscription",
    ],
    explanationEn:
      "Using AI as an intermediate action allows intelligently transforming data: summarizing text, classifying content, generating personalized responses, or extracting structured information from free text.",
  },
  {
    questionEn: "What is the difference between 'push' automation and 'pull' automation?",
    optionsEn: [
      "There is no difference, they are interchangeable terms",
      "Push: automation activates when another app sends data (webhook); Pull: automation periodically checks if there is new data (polling)",
      "Push is always slower and Pull is always faster",
      "Push only works with Zapier and Pull only with n8n",
    ],
    explanationEn:
      "Push (webhooks) is more efficient because it reacts in real time. Pull (polling) checks for changes periodically, consuming more resources but useful when the app does not support webhooks.",
  },
];

export const curso12QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn: "What is an API in the context of AI services?",
    optionsEn: [
      "A special programming language for artificial intelligence",
      "An interface that allows your application to communicate with an external AI model by sending requests and receiving responses",
      "A type of database for storing AI models",
      "The name of the chip that runs AI models",
    ],
    explanationEn:
      "An API is the communication bridge between your application and the AI service. You send a request with your question/prompt and the service returns the model's response.",
  },
  {
    questionEn: "In the restaurant analogy to explain an API: you are the customer, the kitchen is the AI model. What does the waiter represent?",
    optionsEn: [
      "The restaurant's database",
      "The API, which takes your order to the kitchen and brings you the result without you entering the kitchen",
      "The restaurant owner",
      "The restaurant menu",
    ],
    explanationEn:
      "In the analogy: you (customer) make a request, the API (waiter) takes it to the model (kitchen) and returns the result, without you directly interacting with the model.",
  },
  {
    questionEn: "What is an API Key?",
    optionsEn: [
      "A password for the AI server's Wi-Fi",
      "A unique, secret identifier that authenticates your application to the AI service and allows tracking and billing your usage",
      "The name of the AI model you are using",
      "A type of variable in Python",
    ],
    explanationEn:
      "An API Key is like your access credential: it identifies who makes the requests, allows the provider to charge usage, and control access. It must be kept secret.",
  },
  {
    questionEn: "Why should you NEVER include your API Key directly in source code you upload to GitHub?",
    optionsEn: [
      "Because GitHub does not accept code files with API Keys",
      "Because anyone who sees your repository can use your Key to make requests at your expense and generate unexpected charges or data exposure",
      "Because it makes the code run slower",
      "API Keys in code are not a problem if the repository is private",
    ],
    explanationEn:
      "If your API Key is exposed on GitHub (even in a private repository), malicious bots can find it and use it to make thousands of requests billed to you.",
  },
  {
    questionEn: "What is the correct way to protect an API Key in a code project?",
    optionsEn: [
      "Write it directly in the code but in lowercase",
      "Save it in an environment variable (.env) listed in .gitignore so it is not uploaded to the repository",
      "Share it with your team via WhatsApp",
      "Include it in a code comment to remember it",
    ],
    explanationEn:
      "The standard practice is to save the API Key in a .env file, add .env to .gitignore so it is never uploaded, and read the key from environment variables in the code.",
  },
  {
    questionEn: "What is a .gitignore file and what does it do in the context of API Keys?",
    optionsEn: [
      "A file that automatically removes API Keys from code",
      "A file that tells Git which files NOT to track or upload to the repository, including the .env with API Keys",
      "A GitHub configuration file for teams",
      "A file that automatically encrypts API Keys",
    ],
    explanationEn:
      ".gitignore lists the files/folders that Git should ignore. Including .env in .gitignore ensures your credentials are never accidentally uploaded to the repository.",
  },
  {
    questionEn: "What is the first step to make your first call to Google's Gemini API?",
    optionsEn: [
      "Download and install Gemini on your computer",
      "Get an API Key at Google AI Studio (aistudio.google.com) and set up the development environment",
      "Rent a Google Cloud server for $500 per month",
      "Complete a 6-month Python course",
    ],
    explanationEn:
      "The first step is to get a free API Key at Google AI Studio. With that Key you can make your first request with curl or Python in minutes.",
  },
  {
    questionEn: "When making a call to the Gemini API with curl, what do you include in the request body?",
    optionsEn: [
      "Only your username",
      "The prompt or message you want to send to the model, in JSON format",
      "The source code of the Gemini model",
      "The API Key goes inside the body",
    ],
    explanationEn:
      "In the request body you send the content in JSON format, including the prompt/message text. The API Key usually goes in the header or as a URL parameter, not in the body.",
  },
  {
    questionEn: "What main advantage does the Groq API offer over other AI APIs?",
    optionsEn: [
      "It is the only API that offers free text models",
      "It offers extremely fast inference speeds thanks to its LPU hardware, ideal for applications requiring real-time responses",
      "Groq is the most intelligent AI model available",
      "Groq has no token limits",
    ],
    explanationEn:
      "Groq uses LPU (Language Processing Unit) chips specifically designed for LLM inference, achieving response speeds far superior to traditional GPUs, ideal for real-time apps.",
  },
  {
    questionEn: "In Groq you can use open-source models like Llama, Mixtral, and Gemma. What does it mean for a model to be 'open-source'?",
    optionsEn: [
      "That the model can generate programming code",
      "That the model's weights are publicly available, anyone can download, study, and run it locally",
      "That the model is free for commercial use without restrictions",
      "That the model was created by the Wikipedia community",
    ],
    explanationEn:
      "An open-source model has its weights publicly available. You can download and run it on your hardware. However, open-source does not always mean free commercial use; there are different licenses.",
  },
  {
    questionEn: "What is a 'token' in the context of language models?",
    optionsEn: [
      "A virtual currency to pay for API Keys",
      "The basic unit of text processed by an LLM; approximately a word or part of a word",
      "A type of variable in Python",
      "The name of the chip that runs the models",
    ],
    explanationEn:
      "A token is the text processing unit in LLMs. 'Hello' may be 1 token; 'automation' may be 3-4 tokens. Models charge by number of tokens processed.",
  },
  {
    questionEn: "What is the difference between 'input' tokens (input) and 'output' tokens (output)?",
    optionsEn: [
      "There is no difference, they are charged the same",
      "Input tokens are those you send (your prompt + context); output tokens are those generated by the model (its response). Output tokens generally cost more",
      "Input tokens are free, only output tokens are charged",
      "Input tokens are words, output tokens are characters",
    ],
    explanationEn:
      "Input tokens are from your request (prompt, conversation history); output tokens are generated by the model. Output tokens usually cost 3-5x more per million.",
  },
  {
    questionEn: "If an API charges $1.00 per 1 million input tokens and you send a 1,000-token prompt, how much does that request cost?",
    optionsEn: [
      "$1.00 dollars",
      "$0.001 dollars (one tenth of a cent)",
      "$1,000 dollars",
      "$0.10 dollars",
    ],
    explanationEn:
      "If the cost is $1 per 1,000,000 tokens, then 1,000 tokens = $0.001. AI APIs are extremely cheap for individual use.",
  },
  {
    questionEn: "What is the 'context window' of an AI model?",
    optionsEn: [
      "The screen size where the AI is displayed",
      "The maximum number of tokens the model can process in a single request, including conversation history",
      "The maximum time the model takes to respond",
      "The request limit per minute",
    ],
    explanationEn:
      "The context window defines how much information the model can 'see' in a single interaction. A 128K token context can process entire books. Exceeding the limit truncates information.",
  },
  {
    questionEn: "Which of these is an example of the speed vs quality tradeoff in AI models?",
    optionsEn: [
      "Using a larger model always gives better results without any additional cost",
      "Using Llama-3-8B in Groq is very fast and cheap but less capable than GPT-4o which is slower and more expensive; you choose based on the task",
      "Speed and quality always go together in AI models",
      "Only paid models have good quality",
    ],
    explanationEn:
      "The tradeoff is real: small/fast models (Llama 8B) are economical and instant but less capable. Large models (GPT-4o, Claude 3.5) are smarter but slower and more expensive.",
  },
  {
    questionEn: "What is 'streaming' in the context of AI API responses?",
    optionsEn: [
      "Watching Netflix series while programming",
      "Receiving the model's response token by token in real time, instead of waiting for the entire response to complete before displaying it",
      "Streaming the AI model over the internet",
      "Saving responses in a data stream for later analysis",
    ],
    explanationEn:
      "Streaming allows showing the response as it is generated, as if the AI is typing in real time. This greatly improves the user experience in chatbots.",
  },
  {
    questionEn: "What is the main component of a chatbot embedded in a web page?",
    optionsEn: [
      "Only HTML without JavaScript",
      "A frontend widget (chat interface) and a backend that handles calls to the AI API securely",
      "The API Key directly in the frontend JavaScript",
      "A mandatory SQL database",
    ],
    explanationEn:
      "A web chatbot has: frontend (the visible chat widget), backend (server that keeps the API Key secure and makes calls to the AI API), and the AI API.",
  },
  {
    questionEn: "Why should you NOT call the AI API directly from your website's frontend JavaScript code?",
    optionsEn: [
      "Because JavaScript cannot make HTTP calls",
      "Because your API Key would be exposed in the browser code, visible to any user who inspects the page",
      "Because browsers block all calls to external APIs",
      "Because it is technically impossible",
    ],
    explanationEn:
      "Frontend JavaScript code is visible to any user (Inspect → Sources). If you put the API Key there, anyone can see and use it. The Key must only be in the backend.",
  },
  {
    questionEn: "In a web chatbot architecture, what does the 'backend' do?",
    optionsEn: [
      "Displays the visual chat interface to the user",
      "Receives messages from the frontend, stores and uses the API Key securely, calls the AI API, and returns the response to the frontend",
      "Stores website images",
      "Manages the site's domain and hosting",
    ],
    explanationEn:
      "The backend acts as a secure intermediary: receives the user's message from the frontend, sends it to the AI API using the API Key (secure on the server), and returns the response.",
  },
  {
    questionEn: "Which of these models is open-source and available on Groq?",
    optionsEn: [
      "GPT-4o from OpenAI",
      "Llama 3 from Meta",
      "Claude 3.5 from Anthropic",
      "Gemini Ultra from Google",
    ],
    explanationEn:
      "Llama 3 from Meta is open-source and available on Groq for ultra-fast inference. GPT-4o, Claude, and Gemini Ultra are proprietary models from their respective companies.",
  },
  {
    questionEn: "What is the simplest way to test an AI API without writing Python code?",
    optionsEn: [
      "It is impossible without Python code",
      "Use curl from the terminal with the endpoint, the API Key in the header, and the prompt in JSON format in the body",
      "Download a special $50 application",
      "It can only be tested from the official web interface",
    ],
    explanationEn:
      "curl is a terminal tool available on all operating systems that allows making HTTP requests, including calls to AI APIs, with just one command line.",
  },
  {
    questionEn: "What is an environment variable and how does it relate to API Key security?",
    optionsEn: [
      "A variable that stores the weather state",
      "A variable configured in the operating system or .env file that stores values like API Keys outside the source code",
      "A JavaScript variable that updates automatically",
      "A database configuration",
    ],
    explanationEn:
      "Environment variables allow reading the API Key from the system without writing it in the code, keeping it separate and secure.",
  },
  {
    questionEn: "If your application uses the Gemini API to answer FAQs and receives 10,000 requests per day with an average of 500 tokens each, what aspect should you monitor?",
    optionsEn: [
      "The color of the user interface",
      "Monthly token consumption and accumulated cost to make sure you do not exceed your budget",
      "The user's internet speed",
      "Only the number of characters per response",
    ],
    explanationEn:
      "With 10,000 requests x 500 tokens = 5 million daily tokens. You must monitor monthly cost and configure spending limits in the provider's dashboard.",
  },
  {
    questionEn: "What is 'rate limiting' in AI APIs?",
    optionsEn: [
      "The maximum speed at which the model can think",
      "A limit imposed by the provider on how many requests you can make per minute or per day to prevent abuse",
      "A restriction on the minimum length of prompts",
      "The maximum number of words the model can respond",
    ],
    explanationEn:
      "Rate limiting limits requests per unit of time (e.g., 60 requests per minute). If exceeded, you receive error 429. You must design your application to handle these limits with retries or queues.",
  },
  {
    questionEn: "What is the difference between the flash and pro variants of Google Gemini models?",
    optionsEn: [
      "Flash is smarter and Pro is faster",
      "Flash is faster and cheaper for simple tasks; Pro is more capable and expensive for complex reasoning tasks",
      "They are exactly the same with a different name",
      "Flash cannot process text, only images",
    ],
    explanationEn:
      "Gemini Flash is optimized for speed and cost in high-volume tasks. Gemini Pro offers greater reasoning capability for complex tasks, with higher cost per token.",
  },
  {
    questionEn: "What is the purpose of the 'temperature' parameter in an API call?",
    optionsEn: [
      "To control the temperature of the server where the model runs",
      "To control how creative or deterministic the responses are: low temperature = more predictable responses, high temperature = more creative and variable",
      "To define the response language of the model",
      "To set the token limit for the response",
    ],
    explanationEn:
      "Temperature controls randomness: 0 = always the most likely response (ideal for structured data), 1 = more variety (ideal for creative texts). Typical values: 0.2-0.8.",
  },
  {
    questionEn: "What is the 'max_tokens' parameter in an API request?",
    optionsEn: [
      "The maximum number of requests per day",
      "The maximum token limit that the model can generate in its response",
      "The number of tokens in the input prompt",
      "The maximum number of system words",
    ],
    explanationEn:
      "max_tokens limits the length of the generated response. Useful for controlling costs (shorter responses = less cost) and ensuring concise responses.",
  },
  {
    questionEn: "What happens if you accidentally share your API Key in a public GitHub repository?",
    optionsEn: [
      "Nothing, API Keys are automatically encrypted in GitHub",
      "The Key can be detected by bots within minutes, used to make requests to your account (generating costs), and the provider may revoke it",
      "GitHub will send you a warning email but nothing will happen",
      "Only your GitHub followers will be able to see it",
    ],
    explanationEn:
      "Bots constantly scan GitHub looking for exposed API Keys. In minutes they can find it and make thousands of requests to your account generating enormous costs. You must revoke it immediately.",
  },
  {
    questionEn: "Which of these is the correct architecture for a chatbot embedded in a website?",
    optionsEn: [
      "User → Frontend (with API Key) → AI API directly",
      "User → Frontend → Backend (with API Key) → AI API → Backend → Frontend → User",
      "User → AI API directly (without frontend or backend)",
      "User → Database → AI API → User",
    ],
    explanationEn:
      "The correct architecture is: the user talks to the frontend, this sends to the backend, the backend (where the secure API Key is) calls the AI API and returns the response to the frontend.",
  },
  {
    questionEn: "What is an 'endpoint' in the context of an AI API?",
    optionsEn: [
      "The point where the server's internet cable ends",
      "The specific URL to which you send your requests to use the AI service",
      "The API password",
      "The name of the AI model",
    ],
    explanationEn:
      "An endpoint is the specific URL representing a service function: for chat completions, for embeddings, for images, etc. Each function has its own endpoint.",
  },
  {
    questionEn: "When integrating a chatbot into a website, what significantly improves the user experience?",
    optionsEn: [
      "Using very large fonts",
      "Implementing streaming to show the response token by token as it is generated, instead of waiting for it to finish",
      "Adding many colors to the chat widget",
      "Disabling the send button for 5 seconds",
    ],
    explanationEn:
      "Streaming makes the response appear immediately as it is generated (like real-time typing), reducing the perception of latency and improving the conversation experience.",
  },
  {
    questionEn: "What is the best description of why AI APIs are economically accessible for small projects?",
    optionsEn: [
      "Because AI providers are non-profit organizations",
      "Because the pay-per-token pricing model means you only pay for what you use, and the cost per individual interaction is fractions of a cent",
      "Because all AI APIs are completely free",
      "Because AI APIs run on old and cheap hardware",
    ],
    explanationEn:
      "The pay-per-token model makes APIs accessible: a short conversation costs $0.001-0.01. You only pay when there is real usage, without fixed infrastructure costs.",
  },
  {
    questionEn: "What is the 'system prompt' in an AI API call?",
    optionsEn: [
      "The operating system error message",
      "A special message sent at the start of the conversation that defines the assistant's behavior, role, and restrictions for the entire session",
      "The version of the AI model you are using",
      "The unique identifier of each request",
    ],
    explanationEn:
      "The system prompt is where you configure the assistant's behavior via API. It is equivalent to a Custom GPT's instructions: defines role, language, restrictions, and tone for the entire session.",
  },
  {
    questionEn: "What is the most common pricing model among commercial AI APIs like OpenAI, Gemini, and Claude?",
    optionsEn: [
      "Fixed monthly charge regardless of usage",
      "Payment per processed token (input + output), expressed as price per 1 million tokens",
      "Charge per number of requests regardless of size",
      "Annual charge for enterprise license only",
    ],
    explanationEn:
      "The standard model is price per million tokens, separating input and output. This makes individual use very economical but scales with request volume.",
  },
  {
    questionEn: "What is the 'top_p' (nucleus sampling) parameter in an AI API call?",
    optionsEn: [
      "The percentage of tokens filtered by topic",
      "A parameter that controls response diversity by limiting selection to tokens that accumulate the highest probability up to a threshold p",
      "The maximum response speed of the model",
      "The maximum number of paragraphs in the response",
    ],
    explanationEn:
      "top_p (nucleus sampling) selects tokens from the most probable distribution up to accumulated probability p (e.g., 0.9). Together with temperature, it controls the creativity of responses.",
  },
];

export const curso13QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn: "Which of the following is a valid data type in Python?",
    optionsEn: ["integer", "string", "float", "All of the above"],
    explanationEn:
      "Python supports integers (int), strings (str), and floating-point numbers (float), among other basic data types.",
  },
  {
    questionEn:
      "What does the following Python code do? `nombre = 'Ana'; print(f'Hola, {nombre}')`",
    optionsEn: [
      "Prints: Hola, {nombre}",
      "Throws a syntax error",
      "Prints: Hola, Ana",
      "Assigns 'Hola, Ana' to a variable",
    ],
    explanationEn:
      "F-strings in Python allow inserting variables inside text strings using curly braces {}. The result is 'Hola, Ana'.",
  },
  {
    questionEn:
      "How do you access the second element of a list in Python? `lista = [10, 20, 30]`",
    optionsEn: ["lista[1]", "lista[2]", "lista.get(2)", "lista.second()"],
    explanationEn:
      "Indices in Python start at 0, so lista[1] returns the second element: 20.",
  },
  {
    questionEn: "What keyword is used to define a function in Python?",
    optionsEn: ["function", "def", "fn", "define"],
    explanationEn:
      "In Python, the keyword 'def' is used to define a function, followed by the name and parentheses with parameters.",
  },
  {
    questionEn: "What is the purpose of the `return` keyword in a function?",
    optionsEn: [
      "To terminate the program",
      "To print the result on screen",
      "To return a value to where the function was called",
      "To import external modules",
    ],
    explanationEn:
      "'return' makes the function return a value to its caller, allowing that result to be used in other parts of the code.",
  },
  {
    questionEn:
      "Which Python library is mainly used to create quick web interfaces for AI apps?",
    optionsEn: ["Flask", "Django", "Streamlit", "FastAPI"],
    explanationEn:
      "Streamlit allows creating interactive web interfaces with very few lines of Python, ideal for AI app prototypes.",
  },
  {
    questionEn:
      "Which of these Streamlit functions displays a text field where the user can type?",
    optionsEn: ["st.write()", "st.title()", "st.text_input()", "st.button()"],
    explanationEn:
      "st.text_input() renders a text input field in the Streamlit app, returning the value typed by the user.",
  },
  {
    questionEn:
      "To connect Python to the OpenAI API, which library must you install?",
    optionsEn: ["requests", "openai", "chatgpt", "ai-sdk"],
    explanationEn:
      "The official OpenAI library for Python is installed with 'pip install openai' and provides access to all its models.",
  },
  {
    questionEn:
      "How do you make a basic call to the Anthropic (Claude) model from Python?",
    optionsEn: [
      "client.completions.create(model='claude-3', prompt='...')",
      "client.messages.create(model='claude-3-5-sonnet-20241022', max_tokens=1024, messages=[...])",
      "anthropic.chat(message='...')",
      "claude.generate(text='...')",
    ],
    explanationEn:
      "The Anthropic API uses client.messages.create() with the model, max_tokens, and a list of messages with 'user' and 'assistant' roles.",
  },
  {
    questionEn:
      "Which Python string method converts all text to lowercase?",
    optionsEn: [".upper()", ".lower()", ".strip()", ".split()"],
    explanationEn:
      ".lower() converts all characters in a string to lowercase, useful for normalizing text before processing it.",
  },
  {
    questionEn:
      "What is the purpose of the `.split()` method on a Python string?",
    optionsEn: [
      "To join two strings",
      "To split a string into a list of substrings",
      "To remove whitespace",
      "To search for a pattern within the text",
    ],
    explanationEn:
      ".split() divides a string into parts using a separator (whitespace by default), returning a list of substrings.",
  },
  {
    questionEn:
      "Which Python module is used to work with regular expressions (regex)?",
    optionsEn: ["regex", "re", "pattern", "match"],
    explanationEn:
      "The 're' module from the Python standard library provides functions for working with regular expressions.",
  },
  {
    questionEn: "Which pandas function is used to read a CSV file?",
    optionsEn: [
      "pd.read_excel()",
      "pd.open_csv()",
      "pd.read_csv()",
      "pd.load_file()",
    ],
    explanationEn:
      "pd.read_csv('file.csv') loads a CSV file as a pandas DataFrame, ready for filtering and analysis.",
  },
  {
    questionEn:
      "In a pandas DataFrame, how do you filter rows where the 'edad' column is greater than 30?",
    optionsEn: [
      "df.filter(edad > 30)",
      "df[df['edad'] > 30]",
      "df.where('edad', 30)",
      "df.select(edad='>30')",
    ],
    explanationEn:
      "Boolean filtering df[df['column'] > value] is the standard way to filter rows in a pandas DataFrame.",
  },
  {
    questionEn:
      "Which Python library is used to make HTTP requests to websites (web scraping)?",
    optionsEn: ["urllib", "requests", "http", "fetch"],
    explanationEn:
      "The 'requests' library simplifies HTTP requests, returning the HTML of a page for subsequent parsing.",
  },
  {
    questionEn:
      "What is the role of BeautifulSoup in a web scraping project?",
    optionsEn: [
      "Making HTTP requests to the server",
      "Storing data in a database",
      "Parsing and navigating HTML to extract specific data",
      "Generating dynamic HTML for a website",
    ],
    explanationEn:
      "BeautifulSoup parses downloaded HTML and allows searching for elements by tag, class, or attribute easily.",
  },
  {
    questionEn:
      "What is the first command to initialize a Git repository in a folder?",
    optionsEn: ["git start", "git init", "git create", "git new"],
    explanationEn:
      "'git init' creates an empty Git repository in the current folder, generating the hidden .git directory.",
  },
  {
    questionEn: "What does the command `git add .` do?",
    optionsEn: [
      "Uploads all files to GitHub",
      "Adds all modified files to the staging area",
      "Creates a new branch",
      "Saves the change history",
    ],
    explanationEn:
      "'git add .' adds all new or modified files to the staging area, preparing them for the commit.",
  },
  {
    questionEn: "What is the purpose of the `.gitignore` file?",
    optionsEn: [
      "To store GitHub credentials",
      "To globally ignore Git changes",
      "To list files and folders that Git should exclude from tracking",
      "To document the project",
    ],
    explanationEn:
      ".gitignore lists file patterns (like .env, __pycache__, node_modules) that Git should not track or upload.",
  },
  {
    questionEn:
      "What is the command to create a new branch called 'feature/login' in Git?",
    optionsEn: [
      "git new feature/login",
      "git branch feature/login",
      "git create feature/login",
      "git checkout feature/login --new",
    ],
    explanationEn:
      "'git branch branch-name' creates a new branch without switching to it. To create and switch use 'git checkout -b branch-name'.",
  },
  {
    questionEn:
      "Which platform allows free deployment of Streamlit apps with a single click?",
    optionsEn: [
      "AWS Lambda",
      "Streamlit Community Cloud",
      "Heroku",
      "Netlify",
    ],
    explanationEn:
      "Streamlit Community Cloud (share.streamlit.io) allows deploying Python/Streamlit apps for free by connecting your GitHub repository.",
  },
  {
    questionEn:
      "Why is it important to use environment variables for API keys instead of writing them directly in the code?",
    optionsEn: [
      "Because environment variables work faster",
      "To avoid exposing secret credentials in the public repository",
      "Because API keys don't work inside source code",
      "To comply with a technical requirement of the APIs",
    ],
    explanationEn:
      "Writing API keys in code can expose them if the repository is public. Environment variables keep them separate and secure.",
  },
  {
    questionEn: "What is a dictionary in Python?",
    optionsEn: [
      "An ordered list of numeric values",
      "A collection of key-value pairs without guaranteed order",
      "A text file with definitions",
      "A special function for translating text",
    ],
    explanationEn:
      "A Python dictionary stores key-value pairs: {'name': 'Ana', 'age': 30}. It allows accessing values by their key.",
  },
  {
    questionEn:
      "How do you access the value of the key 'precio' in the dictionary `producto = {'nombre': 'Libro', 'precio': 25}`?",
    optionsEn: [
      "producto.precio",
      "producto['precio']",
      "producto.get_value('precio')",
      "producto[1]",
    ],
    explanationEn:
      "In Python, dictionary values are accessed with the syntax dict['key'], in this case producto['precio'] returns 25.",
  },
  {
    questionEn:
      "In Streamlit, how do you detect that the user clicked a button?",
    optionsEn: [
      "if st.button('Submit') == True:",
      "if st.button('Submit'):",
      "st.button('Submit').onClick()",
      "on_click = st.button('Submit')",
    ],
    explanationEn:
      "st.button() returns True when the user clicks it. The idiomatic way is to use it directly in an if statement.",
  },
  {
    questionEn:
      "What does it mean for a function to have parameters with default values like `def greet(name='World')`?",
    optionsEn: [
      "The function always ignores any arguments passed",
      "If no argument is passed, the value 'World' is used automatically",
      "The function only accepts the value 'World' as an argument",
      "It is a syntax error in Python",
    ],
    explanationEn:
      "Parameters with default values are optional. If no argument is passed, the default value is used.",
  },
  {
    questionEn:
      "Which free platform besides Streamlit Cloud allows deploying Python apps as a web service?",
    optionsEn: ["Vercel", "Render", "GitHub Pages", "Figma"],
    explanationEn:
      "Render offers a free plan for deploying Python web applications (Flask, FastAPI) with direct connection to Git repositories.",
  },
  {
    questionEn:
      "Which of these options correctly describes the role of the `pandas` library in data projects?",
    optionsEn: [
      "It is a library for creating interactive visualizations in the browser",
      "It allows manipulating and analyzing tabular data with DataFrames",
      "It is the AI engine that processes natural language",
      "It is used exclusively for reading PDF files",
    ],
    explanationEn:
      "pandas provides the DataFrame structure to load, filter, transform, and analyze tabular data from CSV, Excel, SQL, etc.",
  },
  {
    questionEn: "What does `git push origin main` do?",
    optionsEn: [
      "Downloads remote changes to your local machine",
      "Creates a new branch called 'main'",
      "Uploads local commits from the 'main' branch to the 'origin' remote repository",
      "Merges the 'main' branch with 'origin'",
    ],
    explanationEn:
      "'git push origin main' sends commits from your local 'main' branch to the remote repository called 'origin' (usually GitHub).",
  },
  {
    questionEn:
      "What is the main difference between `git pull` and `git clone`?",
    optionsEn: [
      "There is no difference, they do the same thing",
      "'git clone' copies a repository for the first time; 'git pull' updates an existing one with remote changes",
      "'git pull' creates a new repository; 'git clone' downloads loose files",
      "'git clone' only works with private repositories",
    ],
    explanationEn:
      "'git clone' downloads the entire repository for the first time. 'git pull' integrates remote changes into an already cloned repository.",
  },
  {
    questionEn:
      "How do you install an external library in Python using pip?",
    optionsEn: [
      "python add openai",
      "pip install openai",
      "import openai --install",
      "get-package openai",
    ],
    explanationEn:
      "pip is Python's package manager. 'pip install package_name' downloads and installs the library from PyPI.",
  },
  {
    questionEn:
      "In the context of AI APIs, what is the 'role' in a conversation message?",
    optionsEn: [
      "The user's access level to the API",
      "The numeric identifier of the message",
      "The label indicating whether a message is from the system, user, or assistant",
      "The language model that should respond",
    ],
    explanationEn:
      "AI APIs use roles ('system', 'user', 'assistant') to structure the conversation and provide context to the model.",
  },
  {
    questionEn: "What is NLP (Natural Language Processing)?",
    optionsEn: [
      "A type of neural network for processing images",
      "The branch of AI that enables computers to understand and generate human language",
      "A network protocol for low-latency communications",
      "A framework for building graphical interfaces",
    ],
    explanationEn:
      "NLP (Natural Language Processing) is the AI discipline that studies the understanding, generation, and manipulation of human language.",
  },
  {
    questionEn:
      "In an AI app project, what best practice should you follow when working with Git?",
    optionsEn: [
      "Make a single huge commit when the entire project is finished",
      "Upload API credentials directly to the repository",
      "Use branches for each new feature and make frequent commits with descriptive messages",
      "Never use .gitignore to avoid losing files",
    ],
    explanationEn:
      "Git best practices include frequent and descriptive commits, branches per feature, and never exposing secrets in the repository.",
  },
  {
    questionEn:
      "What is the main purpose of a final project combining Python + AI API + Streamlit?",
    optionsEn: [
      "To completely replace professional developers",
      "To demonstrate that functional AI applications can be built with basic Python code and free tools",
      "To create an enterprise-level application ready for millions of users",
      "To learn how to design relational databases",
    ],
    explanationEn:
      "The final project demonstrates that with basic Python, an AI API, and Streamlit, you can build a real functional app without needing advanced experience.",
  },
];

export const curso14QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn:
      "What does the acronym RAG stand for in the context of artificial intelligence?",
    optionsEn: [
      "Rapid AI Generation",
      "Retrieval-Augmented Generation",
      "Recurrent Attention Graph",
      "Real-time Answer Generator",
    ],
    explanationEn:
      "RAG stands for Retrieval-Augmented Generation: a system that retrieves relevant information from a knowledge base before generating a response.",
  },
  {
    questionEn:
      "What is the main limitation of LLMs that RAG aims to solve?",
    optionsEn: [
      "They are too slow to respond",
      "They cannot process text in Spanish",
      "Their knowledge is limited to the training cutoff date and they can hallucinate specific data",
      "They only work with PDF documents",
    ],
    explanationEn:
      "LLMs have a knowledge cutoff and can invent specific data (hallucinations). RAG allows them to access updated and verifiable information.",
  },
  {
    questionEn:
      "What is the fundamental difference between RAG and fine-tuning?",
    optionsEn: [
      "RAG is more expensive than fine-tuning",
      "RAG retrieves information in real time from a knowledge base; fine-tuning modifies the model's weights with new data",
      "Fine-tuning is faster to implement than RAG",
      "RAG only works with OpenAI models",
    ],
    explanationEn:
      "RAG adds external knowledge at inference time without changing the model. Fine-tuning updates the model's parameters during training.",
  },
  {
    questionEn: "What is the correct order of the basic RAG pipeline?",
    optionsEn: [
      "Embeddings -> Document -> Search -> Response",
      "Document -> Chunking -> Embeddings -> Vector search -> LLM -> Response",
      "LLM -> Document -> Embeddings -> Response",
      "Search -> Chunking -> LLM -> Embeddings",
    ],
    explanationEn:
      "The RAG pipeline follows: ingest document, split into chunks, generate embeddings, store them, search by similarity, and pass results to the LLM.",
  },
  {
    questionEn: "What is a 'chunk' in the context of RAG?",
    optionsEn: [
      "A type of vector database",
      "A text fragment of defined size obtained by splitting a document",
      "The embedding model used",
      "The response generated by the LLM",
    ],
    explanationEn:
      "Chunking divides large documents into smaller fragments (chunks) so they can be indexed and retrieved precisely.",
  },
  {
    questionEn: "What are vector embeddings?",
    optionsEn: [
      "Keywords extracted from a document",
      "Numerical representations of text that capture its semantic meaning in a vector space",
      "Position indices of words in a document",
      "Configuration files for language models",
    ],
    explanationEn:
      "Embeddings convert text into high-dimensional numerical vectors where semantically similar texts have nearby vectors.",
  },
  {
    questionEn: "What type of search does a vector database perform?",
    optionsEn: [
      "Exact keyword search",
      "SQL search by structured fields",
      "Semantic similarity search based on distance between vectors",
      "Search by document creation date",
    ],
    explanationEn:
      "Vector databases find the most semantically similar chunks to the query using metrics like cosine similarity or Euclidean distance.",
  },
  {
    questionEn: "Which of these is an example of a vector database?",
    optionsEn: ["PostgreSQL", "MongoDB", "Chroma", "Redis"],
    explanationEn:
      "Chroma is a popular open-source vector database for RAG projects. Other options include Pinecone, Weaviate, and pgvector.",
  },
  {
    questionEn:
      "Which Python framework facilitates building RAG pipelines with ready-to-use components?",
    optionsEn: ["Flask", "Pandas", "LangChain", "Streamlit"],
    explanationEn:
      "LangChain provides abstractions (document loaders, text splitters, vector stores, retrieval chains) that simplify building RAG systems.",
  },
  {
    questionEn: "What does a 'document loader' do in LangChain?",
    optionsEn: [
      "Generates embeddings of the documents",
      "Loads and converts documents from various formats (PDF, web, CSV) into Document objects",
      "Stores vectors in the database",
      "Makes the final LLM call",
    ],
    explanationEn:
      "LangChain's document loaders extract and normalize content from diverse sources (PDFs, URLs, files), ready for splitting and vectorizing.",
  },
  {
    questionEn:
      "What is the purpose of a 'text splitter' in the RAG pipeline?",
    optionsEn: [
      "To translate texts between languages",
      "To split documents into smaller fragments while respecting sentence or paragraph boundaries",
      "To remove unnecessary words from the text",
      "To compress text and reduce tokens",
    ],
    explanationEn:
      "Text splitters divide documents into appropriately sized chunks, with options to respect natural text boundaries and add overlap.",
  },
  {
    questionEn: "What is 'overlap' in document chunking?",
    optionsEn: [
      "The superposition of duplicate documents in the database",
      "The number of tokens shared between consecutive chunks to avoid losing context at boundaries",
      "The error that occurs when two chunks are identical",
      "The percentage of embeddings that are recalculated",
    ],
    explanationEn:
      "Overlap adds tokens from the end of one chunk to the beginning of the next, preventing important information from being cut off at boundaries.",
  },
  {
    questionEn:
      "Which Python library is commonly used to load PDFs in a RAG pipeline?",
    optionsEn: [
      "docx2txt",
      "PyPDF",
      "pdfminer",
      "Both PyPDF and pdfminer are valid options",
    ],
    explanationEn:
      "PyPDF and pdfminer are popular tools for extracting text from PDFs. LangChain also includes PyPDFLoader which uses PyPDF internally.",
  },
  {
    questionEn:
      "What does the parameter 'k' mean in document retrieval of a RAG system?",
    optionsEn: [
      "The chunk size in tokens",
      "The number of most similar chunks to retrieve to answer the query",
      "The dimension of the embedding vector",
      "The number of PDF documents loaded",
    ],
    explanationEn:
      "The k parameter in retrieval.invoke() defines how many relevant chunks are retrieved from the vector database to include in the LLM's context.",
  },
  {
    questionEn: "What is 'reranking' in an advanced RAG system?",
    optionsEn: [
      "Reordering documents in the database by date",
      "An additional step that reorders retrieved chunks by actual relevance using a more precise model",
      "Regenerating embeddings when the model changes",
      "Classifying LLM responses by quality",
    ],
    explanationEn:
      "Reranking uses a cross-encoder model to reorder retrieved documents by actual relevance, improving precision before calling the LLM.",
  },
  {
    questionEn: "What is 'hybrid search' in RAG?",
    optionsEn: [
      "Combining two different LLMs to generate responses",
      "Simultaneously using semantic vector search and exact keyword search (BM25)",
      "Searching in multiple vector databases at once",
      "Alternating between RAG and fine-tuning depending on the query",
    ],
    explanationEn:
      "Hybrid search combines semantic similarity (vectors) with lexical search (BM25/keywords), leveraging the best of both approaches.",
  },
  {
    questionEn: "What is the impact of chunk size on RAG quality?",
    optionsEn: [
      "Larger chunks always give better responses",
      "Size does not affect response quality",
      "Small chunks provide more precision but less context; large chunks provide more context but less precision in retrieval",
      "Smaller chunks are always better because they use fewer tokens",
    ],
    explanationEn:
      "Finding the optimal chunk size is a balance: small chunks (128-256 tokens) are more precise; large chunks (512-1024) preserve more context.",
  },
  {
    questionEn:
      "Which RAG evaluation framework allows automatically measuring metrics like faithfulness and relevance?",
    optionsEn: ["LangSmith", "RAGAS", "Weights & Biases", "MLflow"],
    explanationEn:
      "RAGAS (RAG Assessment) is a specific framework for evaluating RAG systems measuring faithfulness, answer relevancy, context precision, and context recall.",
  },
  {
    questionEn:
      "What does the 'faithfulness' metric measure in RAG evaluation?",
    optionsEn: [
      "How fast the system responds",
      "Whether the generated response is supported by the retrieved documents and does not invent information",
      "The number of documents retrieved",
      "The token cost of each query",
    ],
    explanationEn:
      "Faithfulness measures whether each claim in the response can be verified in the retrieved context documents, detecting hallucinations.",
  },
  {
    questionEn:
      "What does the 'context recall' metric measure in RAG evaluation?",
    optionsEn: [
      "How many users used the system",
      "The proportion of relevant information from the ground truth that was retrieved by the system",
      "The speed of document retrieval",
      "The percentage of tokens used from the available context",
    ],
    explanationEn:
      "Context recall measures what fraction of the information needed to answer correctly was effectively retrieved from the knowledge base.",
  },
  {
    questionEn: "When is it preferable to use RAG instead of fine-tuning?",
    optionsEn: [
      "When you want the model to learn a new language",
      "When the model needs access to updated, private, or frequently changing information",
      "When the model needs to learn a specific writing style",
      "When working with images instead of text",
    ],
    explanationEn:
      "RAG is ideal for knowledge that is frequently updated or private (internal documents), as it does not require retraining the model.",
  },
  {
    questionEn: "What is the 'context' in a RAG system prompt?",
    optionsEn: [
      "The complete conversation history",
      "The retrieved document chunks inserted into the prompt so the LLM bases its response on them",
      "The system prompt that defines the assistant's role",
      "The response format instructions",
    ],
    explanationEn:
      "In RAG, the context is the relevant document fragments retrieved and inserted into the prompt, allowing the LLM to respond with real information.",
  },
  {
    questionEn:
      "What is the main challenge when doing RAG over multiple documents?",
    optionsEn: [
      "PDFs cannot be converted into embeddings",
      "Correctly managing metadata to filter by source, date, or document type during retrieval",
      "Embedding models can only process one document at a time",
      "LangChain does not support multiple documents simultaneously",
    ],
    explanationEn:
      "With multiple documents, metadata (filename, date, section) is key to correctly filtering and attributing responses to their sources.",
  },
  {
    questionEn: "What is Pinecone in the RAG ecosystem?",
    optionsEn: [
      "An open-source language model",
      "A managed cloud vector database",
      "A framework for building RAG pipelines",
      "An LLM evaluation tool",
    ],
    explanationEn:
      "Pinecone is a vector database as a service (managed), designed for semantic search at scale with high availability.",
  },
  {
    questionEn:
      "What is recursive chunking and when is it recommended?",
    optionsEn: [
      "Splitting by a fixed number of characters; always recommended",
      "Splitting by trying to respect paragraphs, then sentences, then words if necessary; recommended for text with natural structure",
      "Splitting only at line breaks; recommended for source code",
      "Splitting by topics using the LLM; recommended when there is unlimited time",
    ],
    explanationEn:
      "LangChain's RecursiveCharacterTextSplitter tries to split by natural separators (paragraphs, sentences) in cascade, preserving coherence.",
  },
  {
    questionEn:
      "Why is prompt engineering important in a RAG system?",
    optionsEn: [
      "Because it defines which documents are indexed in the vector database",
      "Because it instructs the LLM on how to use the retrieved context to respond accurately and without hallucinating",
      "Because it controls the speed of embedding generation",
      "Because it replaces the need to evaluate response quality",
    ],
    explanationEn:
      "A good RAG prompt includes instructions like 'answer only based on the provided context, if there is no information say you don't know'.",
  },
  {
    questionEn:
      "What does 'answer relevancy' mean in RAGAS?",
    optionsEn: [
      "How fast the response is generated",
      "How directly the generated response answers the user's original question",
      "Whether the response contains the correct number of words",
      "The percentage of retrieved documents used in the response",
    ],
    explanationEn:
      "Answer relevancy measures whether the LLM's response is directly pertinent to what the user asked, penalizing vague or off-topic answers.",
  },
  {
    questionEn:
      "What advantage does adding metadata to chunks during RAG indexing provide?",
    optionsEn: [
      "Reducing the size of generated embeddings",
      "Allowing filtering by source, date, or other attributes to retrieve only relevant documents",
      "Compressing vectors to save disk space",
      "Avoiding the need for chunking",
    ],
    explanationEn:
      "Metadata (e.g., {'source': 'manual_2024.pdf', 'section': 'ch3'}) allows filtering searches and attributing responses to specific documents.",
  },
  {
    questionEn:
      "In an intelligent document search project, which combination of tools is the most typical?",
    optionsEn: [
      "MySQL + TensorFlow + Django",
      "PyPDF + LangChain + Chroma/Pinecone + OpenAI/Anthropic + Streamlit/FastAPI",
      "Excel + NLTK + Flask",
      "Word2Vec + SQLite + React",
    ],
    explanationEn:
      "The modern RAG stack combines: PDF loader, LangChain for the pipeline, Chroma/Pinecone as vector DB, an LLM for generation, and a web interface.",
  },
  {
    questionEn:
      "What is the difference between 'context precision' and 'context recall' in RAG evaluation?",
    optionsEn: [
      "There is no difference, they measure the same thing",
      "Context precision measures how relevant the retrieved chunks are; context recall measures what fraction of the needed information was retrieved",
      "Context precision measures speed; context recall measures accuracy",
      "Context precision is for text; context recall is for images",
    ],
    explanationEn:
      "Precision = of the retrieved chunks, how many were actually useful? Recall = of all the needed information, how much was retrieved?",
  },
  {
    questionEn:
      "What happens when a query is made on documents in a well-implemented RAG system?",
    optionsEn: [
      "The LLM searches directly on the Internet",
      "The query is converted to an embedding, similar chunks are searched in the vector database, and they are passed to the LLM with the question",
      "The LLM reads all complete documents before responding",
      "Automatic fine-tuning of the model is done with the new information",
    ],
    explanationEn:
      "In RAG: query -> embedding -> semantic search -> top-k chunks -> prompt with context -> LLM -> response based on real documents.",
  },
  {
    questionEn:
      "Why does human evaluation remain important even when using automatic metrics like RAGAS?",
    optionsEn: [
      "Because RAGAS only works in English",
      "Because human judgments capture subjective quality, coherence, and real usefulness that automatic metrics do not always faithfully reflect",
      "Because RAGAS is too expensive for small projects",
      "Because automatic metrics only measure response speed",
    ],
    explanationEn:
      "Human evaluation complements automatic metrics by capturing aspects like tone, perceived completeness, and practical usefulness for the real user.",
  },
  {
    questionEn:
      "What problem does reducing hallucinations by using RAG solve?",
    optionsEn: [
      "It makes the model faster",
      "It anchors responses to verifiable documents, reducing the probability that the model invents information",
      "It allows the model to access the internet in real time",
      "It eliminates the need for a system prompt",
    ],
    explanationEn:
      "By forcing the LLM to base its responses on specific retrieved documents, RAG significantly reduces hallucinations about verifiable facts.",
  },
  {
    questionEn:
      "What is 'incremental ingestion' in a RAG system with updating documents?",
    optionsEn: [
      "Reindexing all documents from scratch every time one changes",
      "Processing only new or modified documents without reindexing those that haven't changed",
      "Splitting documents into even smaller chunks for greater precision",
      "Using different embedding models for different types of documents",
    ],
    explanationEn:
      "Incremental ingestion is efficient: it detects new or modified documents and only reindexes those, avoiding unnecessarily reindexing the entire collection.",
  },
  {
    questionEn:
      "In the context of RAG, what is a 'vector store' and how does it differ from a relational database?",
    optionsEn: [
      "They are the same; a vector store is simply a SQL table with an extra column",
      "A vector store stores embeddings and allows semantic similarity search; a relational DB stores structured data and allows exact value search",
      "A vector store is slower than a relational DB for all operations",
      "Vector stores can only store documents in English",
    ],
    explanationEn:
      "Vector stores are optimized for approximate nearest neighbor (ANN) search in high-dimensional spaces, something relational databases are not suited for.",
  },
];

export const curso15QuizEn: Partial<QuizQuestion>[] = [
  {
    questionEn:
      "What is the main difference between a simple chatbot and an AI agent?",
    optionsEn: [
      "The chatbot uses more memory than the agent",
      "The chatbot only responds with text; the agent can plan, use tools, and execute actions in the real world",
      "The agent is always slower than the chatbot",
      "The chatbot can access the internet; the agent cannot",
    ],
    explanationEn:
      "A chatbot generates text. An AI agent can reason about what to do, call tools (search, calculate, write files), and act autonomously.",
  },
  {
    questionEn:
      "What does the 'Observe-Think-Act' loop of an AI agent describe?",
    optionsEn: [
      "The training process of a language model",
      "The cycle through which an agent perceives its environment, reasons about what to do, and executes an action, repeating until the objective is complete",
      "The RAG pipeline for retrieving documents",
      "The data flow in a neural network",
    ],
    explanationEn:
      "The Observe-Think-Act loop is the core of an agent: it observes the current state, plans the next action, executes it, and repeats until the goal is achieved.",
  },
  {
    questionEn:
      "What is the ReAct pattern in the context of AI agents?",
    optionsEn: [
      "A JavaScript framework for reactive interfaces",
      "A prompting strategy that interleaves reasoning (Reasoning) and action (Acting) so the agent justifies each step",
      "A fine-tuning method for agent models",
      "A technique for compressing LLM responses",
    ],
    explanationEn:
      "ReAct (Reasoning + Acting) makes the agent alternate between thinking out loud (Thought) and executing actions (Action/Observation), improving transparency and reliability.",
  },
  {
    questionEn:
      "What does autonomy level L3 represent on an L1-L5 agent scale?",
    optionsEn: [
      "A chatbot that only answers simple questions",
      "An agent that executes multi-step tasks with occasional human supervision",
      "A fully autonomous system without human intervention",
      "A language model without the ability to use tools",
    ],
    explanationEn:
      "L3 represents semi-autonomous agents that can complete complex workflows but still require human validation for critical decisions.",
  },
  {
    questionEn:
      "How is a tool defined so that an LLM can use it through function calling?",
    optionsEn: [
      "As a Python class with specific methods",
      "As a JSON schema describing the function's name, description, and parameters",
      "As a REST endpoint that the LLM calls directly",
      "As a text file with natural language instructions",
    ],
    explanationEn:
      "Tools for LLMs are defined as JSON schemas with name, description, and expected parameters. The LLM decides when to call them and with what arguments.",
  },
  {
    questionEn: "What are 'parallel tool calls'?",
    optionsEn: [
      "When multiple users call the same tool simultaneously",
      "When the LLM decides to execute multiple tools at the same time in a single reasoning step",
      "A way to cache tool responses",
      "Tools that run on distributed servers",
    ],
    explanationEn:
      "Parallel tool calls allow the LLM to request multiple tools in parallel when they are independent of each other, speeding up agent execution.",
  },
  {
    questionEn: "What is the Model Context Protocol (MCP)?",
    optionsEn: [
      "A compression protocol to reduce prompt size",
      "An open standard that allows LLMs to connect with external tools, data, and services in a uniform way",
      "A fine-tuning technique specific to agents",
      "A serialization format for messages between agents",
    ],
    explanationEn:
      "MCP (from Anthropic) is a universal protocol that standardizes how AI models connect to external tools, data, and resources, like a 'USB for AI'.",
  },
  {
    questionEn: "In MCP, what is an 'MCP Server'?",
    optionsEn: [
      "The server where the language model is hosted",
      "A service that exposes resources, tools, and prompts from a specific system for LLMs to consume",
      "The vector database used by the agent",
      "The Python client that makes calls to the LLM",
    ],
    explanationEn:
      "An MCP Server is a program that exposes capabilities (tools, resources, prompts) from an external system (database, APIs, file system) to MCP-compatible models.",
  },
  {
    questionEn:
      "Why is memory important in building an AI agent?",
    optionsEn: [
      "So the agent consumes fewer CPU resources",
      "So the agent remembers the state of previous tasks, user context, and results of prior actions",
      "To reduce the cost of LLM API calls",
      "Because without memory the agent cannot use tools",
    ],
    explanationEn:
      "Memory allows an agent to maintain context between steps and sessions: what it has done, what it learned, and what the current state is toward the objective.",
  },
  {
    questionEn:
      "What is the advantage of deploying a serverless function on Vercel for an AI agent?",
    optionsEn: [
      "It allows training language models in the cloud",
      "It scales automatically without managing servers, with billing only for usage",
      "It provides free unlimited GPU access",
      "It eliminates the need for an API key for the LLM",
    ],
    explanationEn:
      "Vercel's serverless functions scale automatically, require no infrastructure management, and the free plan is sufficient for many small projects.",
  },
  {
    questionEn:
      "What are Hugging Face 'Spaces' in the context of deployment?",
    optionsEn: [
      "Repositories for storing private language models",
      "Freely hosted web applications that allow interactive demos of AI models",
      "Dedicated GPU servers for training",
      "A Hugging Face embeddings API",
    ],
    explanationEn:
      "HuggingFace Spaces allows publishing AI app demos (Gradio, Streamlit) for free, with support for Docker and access to GPUs.",
  },
  {
    questionEn:
      "What is CI/CD in the context of AI application deployment?",
    optionsEn: [
      "Computer Intelligence / Cloud Deployment",
      "Continuous Integration / Continuous Deployment: automation of the testing and deployment process when pushing code",
      "Code Inspection / Code Distribution",
      "A communication protocol between AI agents",
    ],
    explanationEn:
      "CI/CD automates that each push to the repository runs tests (CI) and then automatically deploys the new version (CD), accelerating development.",
  },
  {
    questionEn:
      "Which optimization technique allows the user to see the response as it is generated, letter by letter?",
    optionsEn: [
      "Semantic caching",
      "Token streaming",
      "Model quantization",
      "Batch processing",
    ],
    explanationEn:
      "Streaming transmits each generated token to the client in real time, improving the perceived experience without waiting for the entire response to complete.",
  },
  {
    questionEn:
      "How can caching reduce costs and latency in an AI application?",
    optionsEn: [
      "By reducing the size of the language model",
      "By storing responses to frequent queries and reusing them without calling the LLM again",
      "By compressing tokens before sending them to the API",
      "By eliminating conversation history to reduce tokens",
    ],
    explanationEn:
      "Semantic caching stores responses to similar queries. When a query similar to a previous one is detected, it returns the cached response without calling the LLM.",
  },
  {
    questionEn:
      "What is a 'token budget' in agent optimization?",
    optionsEn: [
      "The limit of users who can use the app at the same time",
      "A maximum token limit the agent can use per task to control costs and latency",
      "The number of tools an agent can call",
      "The maximum response time before a timeout",
    ],
    explanationEn:
      "The token budget sets a token limit per execution, preventing the agent from entering costly loops or using unnecessarily long prompts.",
  },
  {
    questionEn:
      "What is the most effective strategy for reducing costs by selecting the right model?",
    optionsEn: [
      "Always use the largest available model for higher quality",
      "Use small, fast models for simple tasks, reserving large models only for complex tasks",
      "Use the same model for all agent tasks",
      "Train your own model instead of using APIs",
    ],
    explanationEn:
      "Routing simple tasks to small models (e.g., claude-haiku) and complex ones to large models (e.g., claude-opus) can reduce costs by 80-90% without sacrificing quality.",
  },
  {
    questionEn:
      "What is a 'prompt injection' attack in the context of AI agents?",
    optionsEn: [
      "A method to inject Python code into the agent's runtime",
      "An attack where malicious text in environment data attempts to replace the agent's original instructions",
      "A technique to improve LLM performance with special prompts",
      "A programming error when building the system prompt",
    ],
    explanationEn:
      "Prompt injection occurs when external data (documents, web pages) contain malicious instructions that attempt to hijack the agent's behavior.",
  },
  {
    questionEn:
      "What is the difference between direct and indirect prompt injection?",
    optionsEn: [
      "Direct is more dangerous; indirect is harmless",
      "Direct comes from the user in the chat; indirect comes from external data the agent processes (documents, web, emails)",
      "Direct only affects the LLM; indirect affects the tools",
      "There is no difference, they are the same type of attack",
    ],
    explanationEn:
      "Direct injection: the user writes malicious instructions. Indirect injection: a document or web page visited by the agent contains the malicious instructions.",
  },
  {
    questionEn: "What is a language model 'jailbreak'?",
    optionsEn: [
      "A method to extract the model's source code",
      "A technique to bypass the model's safety restrictions and make it generate prohibited content",
      "An unauthorized fine-tuning process of the model",
      "A denial-of-service attack against the LLM API",
    ],
    explanationEn:
      "Jailbreaks are prompts designed to make the model ignore its safety instructions, usually using roleplay, encoding, or contradictory instructions.",
  },
  {
    questionEn:
      "Which of these is a good 'input sanitization' practice to protect an AI agent?",
    optionsEn: [
      "Block all queries containing more than 50 words",
      "Validate and filter user inputs before passing them to the LLM, detecting known injection patterns",
      "Use the most powerful model so it detects attacks automatically",
      "Do not store conversation history to avoid attacks",
    ],
    explanationEn:
      "Input sanitization includes validating length, detecting known malicious patterns, and cleaning special characters before including the input in the prompt.",
  },
  {
    questionEn:
      "What is a 'guardrail' (safety barrier) in an AI application?",
    optionsEn: [
      "A per-request token limit to control costs",
      "A component that validates LLM inputs or outputs to ensure they comply with security and acceptable use policies",
      "A special type of system prompt for agents",
      "An automated CI/CD pipeline test",
    ],
    explanationEn:
      "Guardrails are validation layers (pre or post-LLM) that detect and block harmful content, sensitive information, or out-of-policy behaviors.",
  },
  {
    questionEn:
      "What is the role of the 'system prompt' in defining an agent's behavior?",
    optionsEn: [
      "It defines the LLM model to be used",
      "It establishes the base instructions, personality, available tools, and behavioral constraints of the agent",
      "It stores the agent's conversation history",
      "It configures deployment parameters on Vercel",
    ],
    explanationEn:
      "The system prompt is the agent's foundation: it defines its role, how it should behave, what tools it has available, and what limits it must respect.",
  },
  {
    questionEn:
      "What is the benefit of using Docker to deploy an AI agent?",
    optionsEn: [
      "Docker trains the language model faster",
      "It guarantees the application runs identically in any environment, packaging all dependencies",
      "It reduces the cost of LLM API calls",
      "It allows using language models without an internet connection",
    ],
    explanationEn:
      "Docker creates reproducible containers. The same container works identically in development, staging, and production, eliminating 'works on my machine' problems.",
  },
  {
    questionEn:
      "What is 'planning' in building a multi-step agent?",
    optionsEn: [
      "Documenting the agent's code before writing it",
      "The agent's ability to decompose a complex objective into ordered sub-tasks before executing them",
      "Planning API costs before launching the agent",
      "The module that manages the agent's long-term memory",
    ],
    explanationEn:
      "Planning allows the agent to reason about how to divide a complex task into manageable steps and execute them in the correct order to achieve the objective.",
  },
  {
    questionEn:
      "What error handling mechanism is crucial in an autonomous agent?",
    optionsEn: [
      "Restarting the server on any error",
      "Implementing retry logic with exponential backoff and maximum retry limits for failing tools",
      "Ignoring minor errors to not interrupt the flow",
      "Showing the full stack trace to the end user",
    ],
    explanationEn:
      "Agents must handle tool errors with retries, limits, and fallbacks. Without this, a tool error can get the agent stuck indefinitely.",
  },
  {
    questionEn:
      "What is the main challenge of deploying a long-running agent?",
    optionsEn: [
      "LLMs cannot execute tasks that take more than 30 seconds",
      "Serverless functions have short timeouts, so long tasks require queue architectures or background jobs",
      "Vercel does not support AI agents by terms of service",
      "Streaming does not work for long-running tasks",
    ],
    explanationEn:
      "Serverless functions typically have a 30-60 second timeout. For long-running agents, queues (e.g., Redis Queue) or background job platforms are used.",
  },
  {
    questionEn:
      "What does it mean for an agent to be 'stateless' and what are its implications?",
    optionsEn: [
      "That the agent cannot save files to disk",
      "That each invocation is independent and the agent does not remember previous sessions without an external memory system",
      "That the agent cannot call external tools",
      "That the agent has no system prompt configured",
    ],
    explanationEn:
      "A stateless agent does not remember previous conversations between sessions. To add persistent memory, an external database or store is needed.",
  },
  {
    questionEn:
      "What is the advantage of 'resources' in the MCP protocol?",
    optionsEn: [
      "They allow the language model to access additional GPUs",
      "They expose structured data (files, DB schemas, API results) that the LLM can read directly as context",
      "They are a way to cache LLM responses",
      "They allow direct communication between two language models",
    ],
    explanationEn:
      "MCP resources expose readable data (files, DB queries, API responses) that the LLM can include in its context without needing additional tools.",
  },
  {
    questionEn:
      "When evaluating an AI agent in production, what metrics are most important to monitor?",
    optionsEn: [
      "Only the number of daily active users",
      "Task success rate, average latency, cost per task, error rate, and cases of unexpected behavior",
      "Only the total cost of the LLM API",
      "The number of tokens in the system prompt",
    ],
    explanationEn:
      "An agent in production needs comprehensive monitoring: Does it complete tasks? In how long? At what cost? How often does it fail? Does it behave unexpectedly?",
  },
  {
    questionEn:
      "Which of these practices improves security when deploying an AI agent with powerful tools?",
    optionsEn: [
      "Give the agent full administrator access so it can complete any task",
      "Apply the principle of least privilege: give the agent only the permissions strictly necessary for each tool",
      "Do not use external tools to avoid security risks",
      "Store API keys directly in the agent's code",
    ],
    explanationEn:
      "The principle of least privilege limits the potential damage from an attack or agent error. A read-only agent does not need write permissions.",
  },
  {
    questionEn: "What is an 'MCP prompt' in the context of the MCP protocol?",
    optionsEn: [
      "The agent's main system prompt",
      "A predefined prompt template that the MCP server exposes and the client can invoke with arguments",
      "A special type of tool that generates text",
      "The authentication protocol between MCP client and MCP server",
    ],
    explanationEn:
      "MCP prompts are reusable templates exposed by MCP servers (e.g., 'analyze code', 'summarize document') that the client can instantiate with parameters.",
  },
  {
    questionEn:
      "Which of these situations describes an appropriate use case for an L4-L5 AI agent?",
    optionsEn: [
      "Answering frequently asked questions in a support chatbot with predefined responses",
      "Autonomously managing a data pipeline: download, cleaning, analysis, and report generation, alerting only for critical anomalies",
      "Autocompleting text while the user types in an editor",
      "Translating documents from one language to another",
    ],
    explanationEn:
      "An L4-L5 agent handles complex multi-step pipelines with minimal human supervision, making decisions and acting almost completely autonomously.",
  },
  {
    questionEn:
      "What is 'function calling' in the API of an LLM like OpenAI or Anthropic?",
    optionsEn: [
      "A way to execute Python code directly inside the model",
      "A mechanism by which the LLM returns a structured function call instead of text, indicating which tool to use and with what parameters",
      "A special API only available in premium paid versions",
      "The process of fine-tuning with function call examples",
    ],
    explanationEn:
      "Function calling allows the LLM to respond with a structured JSON object {tool_name, arguments} that the agent's code interprets and executes.",
  },
  {
    questionEn:
      "What is the risk of giving an AI agent direct access to execute operating system commands?",
    optionsEn: [
      "There is no risk if the agent is well-trained",
      "A prompt injection attack or a reasoning error could lead the agent to execute destructive or malicious commands",
      "The agent would become slower due to operating system overhead",
      "LLMs cannot generate operating system commands",
    ],
    explanationEn:
      "Unrestricted OS access is dangerous: an agent compromised by injection or with flawed reasoning could delete files, escalate privileges, or exfiltrate data.",
  },
  {
    questionEn:
      "What advantage does a multi-tool agent offer over a chatbot with a single capability?",
    optionsEn: [
      "The multi-tool agent always responds faster",
      "It can combine different capabilities (web search, file reading, calculating, writing code) to solve complex tasks that no single tool could complete",
      "It uses fewer tokens per response",
      "It does not require a system prompt to function correctly",
    ],
    explanationEn:
      "The power of multi-tool agents lies in composition: combining search + file reading + code execution enables solving problems that require multiple heterogeneous steps.",
  },
];
