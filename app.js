// LLM Models Database
const models = [
  {
    name: "GPT-5",
    provider: "OpenAI",
    release_date: "Aug 2025",
    context_length: "272K",
    speed_rating: "Fast",
    core_strengths: "Complex reasoning, agentic workflows, low hallucination",
    ideal_use_cases: "Enterprise AI, complex agents, mission-critical",
    limitations: "Very expensive, high latency for reasoning",
    pricing: "$1.25 / $10.00",
    multimodal: "Text, Image, Audio, Video",
    fine_tuning: "Limited",
    target_users: "Enterprises, Researchers",
    tags: ["Best for Research", "Enterprise Grade", "Multimodal", "Long Context", "Fast Speed"],
    ease_of_use_score: 3.0,
    performance_score: 5.0,
    cost_efficiency_score: 3.0
  },
  {
    name: "GPT-4.1",
    provider: "OpenAI",
    release_date: "Apr 2025",
    context_length: "1M",
    speed_rating: "Medium",
    core_strengths: "General purpose, long context, problem solving",
    ideal_use_cases: "General AI, code, analysis, research",
    limitations: "Moderate cost, slower than mini variants",
    pricing: "$2.00 / $8.00",
    multimodal: "Text, Image",
    fine_tuning: "Yes",
    target_users: "Developers, Businesses",
    tags: ["Best for Coding", "Multimodal", "Long Context"],
    ease_of_use_score: 3.0,
    performance_score: 5.0,
    cost_efficiency_score: 3.0
  },
  {
    name: "GPT-4.1 Mini",
    provider: "OpenAI",
    release_date: "Apr 2025",
    context_length: "1M",
    speed_rating: "Very Fast",
    core_strengths: "Cost-efficient, fast, balanced performance",
    ideal_use_cases: "Cost-conscious apps, chatbots, automation",
    limitations: "Less capable than full model",
    pricing: "$0.40 / $1.60",
    multimodal: "Text, Image",
    fine_tuning: "Yes",
    target_users: "Developers, Startups",
    tags: ["Multimodal", "Long Context", "Fast Speed", "Budget Friendly"],
    ease_of_use_score: 3.5,
    performance_score: 5.0,
    cost_efficiency_score: 4.5
  },
  {
    name: "Claude 4 Opus",
    provider: "Anthropic",
    release_date: "May 2025",
    context_length: "200K",
    speed_rating: "Medium",
    core_strengths: "World-class coding, agent workflows, complex tasks",
    ideal_use_cases: "Professional coding, AI agents, automation",
    limitations: "Most expensive model available",
    pricing: "$15.00 / $75.00",
    multimodal: "Text, Image, Code",
    fine_tuning: "Enterprise only",
    target_users: "Enterprises, Professional Developers",
    tags: ["Best for Coding", "Best for Research", "Enterprise Grade", "Multimodal", "Long Context"],
    ease_of_use_score: 3.0,
    performance_score: 5.0,
    cost_efficiency_score: 2.0
  },
  {
    name: "Claude 4 Sonnet",
    provider: "Anthropic",
    release_date: "May 2025",
    context_length: "200K",
    speed_rating: "Fast",
    core_strengths: "Superior coding/reasoning, cost-effective",
    ideal_use_cases: "Enterprise coding, analysis, workflows",
    limitations: "Higher cost than competitors",
    pricing: "$3.00 / $15.00",
    multimodal: "Text, Image",
    fine_tuning: "Enterprise only",
    target_users: "Businesses, Developers",
    tags: ["Best for Coding", "Best for Research", "Multimodal", "Long Context", "Fast Speed"],
    ease_of_use_score: 3.0,
    performance_score: 5.0,
    cost_efficiency_score: 3.0
  },
  {
    name: "Gemini 2.5 Pro",
    provider: "Google DeepMind",
    release_date: "Jun 2025",
    context_length: "1M",
    speed_rating: "Medium",
    core_strengths: "Massive context, multimodal, research",
    ideal_use_cases: "Research, long documents, video analysis",
    limitations: "Expensive for long contexts, latency",
    pricing: "$1.25 / $10.00",
    multimodal: "Text, Image, Audio, Video",
    fine_tuning: "Yes",
    target_users: "Researchers, Enterprises",
    tags: ["Best for Research", "Enterprise Grade", "Multimodal", "Long Context"],
    ease_of_use_score: 3.0,
    performance_score: 5.0,
    cost_efficiency_score: 3.0
  },
  {
    name: "Grok 4",
    provider: "xAI",
    release_date: "Jul 2025",
    context_length: "256K",
    speed_rating: "Fast",
    core_strengths: "Real-time data, visual reasoning",
    ideal_use_cases: "Real-time info, current events, X integration",
    limitations: "X Premium required, biased data source",
    pricing: "$3.00 / $15.00",
    multimodal: "Text, Image, Video",
    fine_tuning: "Limited",
    target_users: "X Users, Real-time Apps",
    tags: ["Multimodal", "Long Context", "Fast Speed"],
    ease_of_use_score: 3.0,
    performance_score: 5.0,
    cost_efficiency_score: 3.0
  },
  {
    name: "DeepSeek-R1",
    provider: "DeepSeek AI",
    release_date: "Jan 2025",
    context_length: "128K",
    speed_rating: "Fast",
    core_strengths: "Math, coding, reasoning, open-source",
    ideal_use_cases: "Math research, coding, open deployment",
    limitations: "Requires technical setup for local use",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Researchers, Developers, Academics",
    tags: ["Best for Coding", "Best for Research", "Free Access", "Fast Speed", "Budget Friendly", "Open Source"],
    ease_of_use_score: 3.0,
    performance_score: 4.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Llama 4 Maverick",
    provider: "Meta",
    release_date: "Apr 2025",
    context_length: "1M",
    speed_rating: "Fast",
    core_strengths: "STEM excellence, reasoning, open-source",
    ideal_use_cases: "Scientific research, STEM applications",
    limitations: "Requires significant resources",
    pricing: "Free (Open Source)",
    multimodal: "Text, Image",
    fine_tuning: "Full (Open)",
    target_users: "Researchers, Scientists",
    tags: ["Best for Research", "Free Access", "Multimodal", "Long Context", "Fast Speed", "Budget Friendly", "Open Source"],
    ease_of_use_score: 2.5,
    performance_score: 4.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Llama 4 Scout",
    provider: "Meta",
    release_date: "Apr 2025",
    context_length: "10M",
    speed_rating: "Medium",
    core_strengths: "Ultra-long context, document analysis",
    ideal_use_cases: "Legal, research, massive document analysis",
    limitations: "Extremely slow, resource-intensive",
    pricing: "Free (Open Source)",
    multimodal: "Text, Image",
    fine_tuning: "Full (Open)",
    target_users: "Legal, Research Firms",
    tags: ["Free Access", "Multimodal", "Long Context", "Budget Friendly", "Open Source"],
    ease_of_use_score: 2.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Qwen 3.5-Turbo",
    provider: "Alibaba",
    release_date: "Mar 2025",
    context_length: "128K",
    speed_rating: "Very Fast",
    core_strengths: "Multilingual, cost-effective, fast inference",
    ideal_use_cases: "Global applications, multilingual content",
    limitations: "Limited multimodal, regional availability",
    pricing: "$0.60 / $2.40",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "Global Developers, Businesses",
    tags: ["Fast Speed", "Budget Friendly"],
    ease_of_use_score: 4.0,
    performance_score: 4.0,
    cost_efficiency_score: 4.5
  },
  {
    name: "Phi-4",
    provider: "Microsoft",
    release_date: "Dec 2024",
    context_length: "16K",
    speed_rating: "Very Fast",
    core_strengths: "Compact, efficient, mobile-friendly",
    ideal_use_cases: "Edge computing, mobile apps, embedded",
    limitations: "Limited context, narrow capabilities",
    pricing: "$0.15 / $0.60",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "Mobile Developers, Edge Computing",
    tags: ["Fast Speed", "Budget Friendly"],
    ease_of_use_score: 4.5,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "PaLM 3",
    provider: "Google DeepMind",
    release_date: "Feb 2025",
    context_length: "32K",
    speed_rating: "Fast",
    core_strengths: "Reasoning, mathematics, code generation",
    ideal_use_cases: "Scientific computing, education, research",
    limitations: "Limited multimodal, shorter context",
    pricing: "$0.75 / $3.00",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "Researchers, Educators",
    tags: ["Best for Research", "Fast Speed", "Budget Friendly"],
    ease_of_use_score: 3.5,
    performance_score: 4.0,
    cost_efficiency_score: 4.0
  },
  {
    name: "Claude 3.5 Haiku",
    provider: "Anthropic",
    release_date: "Jan 2025",
    context_length: "200K",
    speed_rating: "Very Fast",
    core_strengths: "Ultra-fast, cost-efficient, lightweight",
    ideal_use_cases: "Real-time chat, high-volume processing",
    limitations: "Less capable than larger models",
    pricing: "$0.25 / $1.25",
    multimodal: "Text only",
    fine_tuning: "No",
    target_users: "High-volume Apps, Startups",
    tags: ["Fast Speed", "Budget Friendly", "Long Context"],
    ease_of_use_score: 4.5,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Mistral Large 3",
    provider: "Mistral AI",
    release_date: "May 2025",
    context_length: "128K",
    speed_rating: "Fast",
    core_strengths: "European privacy, multilingual, coding",
    ideal_use_cases: "EU compliance, multilingual apps, privacy",
    limitations: "Higher cost, limited availability",
    pricing: "$2.00 / $8.00",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "European Businesses, Privacy-focused",
    tags: ["Best for Coding", "Fast Speed", "Enterprise Grade"],
    ease_of_use_score: 3.0,
    performance_score: 4.5,
    cost_efficiency_score: 3.5
  },
  {
    name: "Cohere Command R+",
    provider: "Cohere",
    release_date: "Mar 2025",
    context_length: "128K",
    speed_rating: "Fast",
    core_strengths: "Enterprise RAG, retrieval-augmented generation",
    ideal_use_cases: "Enterprise search, document Q&A, RAG",
    limitations: "Specialized use case, higher complexity",
    pricing: "$3.00 / $15.00",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "Enterprise, RAG Applications",
    tags: ["Enterprise Grade", "Best for Research"],
    ease_of_use_score: 2.5,
    performance_score: 4.5,
    cost_efficiency_score: 3.0
  },
  {
    name: "GPT-4o Mini",
    provider: "OpenAI",
    release_date: "Jul 2024",
    context_length: "128K",
    speed_rating: "Very Fast",
    core_strengths: "Multimodal, fast, cost-effective",
    ideal_use_cases: "Multimodal apps, vision tasks, chatbots",
    limitations: "Less capable than full GPT-4",
    pricing: "$0.15 / $0.60",
    multimodal: "Text, Image",
    fine_tuning: "Yes",
    target_users: "Developers, Startups",
    tags: ["Multimodal", "Fast Speed", "Budget Friendly", "Best for Beginners"],
    ease_of_use_score: 4.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Gemini 1.5 Flash",
    provider: "Google DeepMind",
    release_date: "May 2024",
    context_length: "1M",
    speed_rating: "Very Fast",
    core_strengths: "Ultra-fast, long context, multimodal",
    ideal_use_cases: "Real-time processing, video analysis",
    limitations: "Less capable than Pro version",
    pricing: "$0.075 / $0.30",
    multimodal: "Text, Image, Audio, Video",
    fine_tuning: "Limited",
    target_users: "Real-time Apps, Developers",
    tags: ["Multimodal", "Long Context", "Fast Speed", "Budget Friendly"],
    ease_of_use_score: 4.0,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Llama 3.3 70B",
    provider: "Meta",
    release_date: "Dec 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Open-source, strong performance, customizable",
    ideal_use_cases: "Self-hosted, custom fine-tuning",
    limitations: "Requires significant compute resources",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Researchers, Self-hosted",
    tags: ["Free Access", "Open Source", "Budget Friendly"],
    ease_of_use_score: 2.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Yi-Lightning",
    provider: "01.AI",
    release_date: "Nov 2024",
    context_length: "16K",
    speed_rating: "Very Fast",
    core_strengths: "Ultra-fast inference, Chinese-English bilingual",
    ideal_use_cases: "Real-time chat, Chinese applications",
    limitations: "Limited context, regional focus",
    pricing: "Free (Limited) / $0.99/M",
    multimodal: "Text only",
    fine_tuning: "Limited",
    target_users: "Chinese Market, Real-time Apps",
    tags: ["Free Access", "Fast Speed", "Budget Friendly"],
    ease_of_use_score: 4.0,
    performance_score: 3.5,
    cost_efficiency_score: 4.5
  },
  {
    name: "Nova Pro",
    provider: "Amazon",
    release_date: "Dec 2024",
    context_length: "300K",
    speed_rating: "Fast",
    core_strengths: "AWS integration, multimodal, enterprise",
    ideal_use_cases: "AWS workloads, enterprise applications",
    limitations: "AWS ecosystem lock-in, limited availability",
    pricing: "$0.80 / $3.20",
    multimodal: "Text, Image",
    fine_tuning: "Yes",
    target_users: "AWS Users, Enterprises",
    tags: ["Enterprise Grade", "Multimodal", "Long Context", "Fast Speed"],
    ease_of_use_score: 3.5,
    performance_score: 4.0,
    cost_efficiency_score: 4.0
  },
  {
    name: "Nova Lite",
    provider: "Amazon",
    release_date: "Dec 2024",
    context_length: "300K",
    speed_rating: "Very Fast",
    core_strengths: "Cost-effective, fast, AWS native",
    ideal_use_cases: "Cost-conscious AWS workloads",
    limitations: "AWS ecosystem only, limited capabilities",
    pricing: "$0.06 / $0.24",
    multimodal: "Text, Image",
    fine_tuning: "Limited",
    target_users: "AWS Developers, Cost-conscious",
    tags: ["Multimodal", "Long Context", "Fast Speed", "Budget Friendly"],
    ease_of_use_score: 4.0,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Nova Micro",
    provider: "Amazon",
    release_date: "Dec 2024",
    context_length: "128K",
    speed_rating: "Very Fast",
    core_strengths: "Ultra-low cost, lightning fast",
    ideal_use_cases: "High-volume, simple tasks",
    limitations: "Very basic capabilities, AWS only",
    pricing: "$0.035 / $0.14",
    multimodal: "Text only",
    fine_tuning: "No",
    target_users: "High-volume Apps, AWS Budget Users",
    tags: ["Fast Speed", "Budget Friendly"],
    ease_of_use_score: 4.5,
    performance_score: 2.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "DeepSeek-V3",
    provider: "DeepSeek AI",
    release_date: "Dec 2024",
    context_length: "64K",
    speed_rating: "Fast",
    core_strengths: "Open-source, strong coding, math reasoning",
    ideal_use_cases: "Code generation, mathematical research",
    limitations: "Shorter context, requires setup",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Researchers, Developers",
    tags: ["Best for Coding", "Best for Research", "Free Access", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 4.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Mixtral 8x22B",
    provider: "Mistral AI",
    release_date: "Apr 2024",
    context_length: "65K",
    speed_rating: "Medium",
    core_strengths: "Mixture of experts, multilingual, open",
    ideal_use_cases: "Multilingual apps, European deployment",
    limitations: "Resource intensive, complex deployment",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "European Developers, Multilingual Apps",
    tags: ["Free Access", "Open Source", "Budget Friendly"],
    ease_of_use_score: 2.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Command R",
    provider: "Cohere",
    release_date: "Mar 2024",
    context_length: "128K",
    speed_rating: "Fast",
    core_strengths: "Enterprise RAG, multilingual, tool use",
    ideal_use_cases: "Enterprise search, multilingual RAG",
    limitations: "Enterprise focus, learning curve",
    pricing: "$0.50 / $1.50",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "Enterprise, RAG Developers",
    tags: ["Enterprise Grade", "Fast Speed", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 4.0,
    cost_efficiency_score: 4.0
  },
  {
    name: "Llama 3.2 90B Vision",
    provider: "Meta",
    release_date: "Sep 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Open multimodal, vision tasks, customizable",
    ideal_use_cases: "Vision AI, image analysis, open deployment",
    limitations: "Large model size, compute requirements",
    pricing: "Free (Open Source)",
    multimodal: "Text, Image",
    fine_tuning: "Full (Open)",
    target_users: "Vision AI Developers, Researchers",
    tags: ["Free Access", "Multimodal", "Open Source", "Budget Friendly"],
    ease_of_use_score: 2.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Llama 3.2 11B Vision",
    provider: "Meta",
    release_date: "Sep 2024",
    context_length: "128K",
    speed_rating: "Fast",
    core_strengths: "Smaller multimodal, efficient, open",
    ideal_use_cases: "Edge vision AI, mobile multimodal",
    limitations: "Less capable than larger versions",
    pricing: "Free (Open Source)",
    multimodal: "Text, Image",
    fine_tuning: "Full (Open)",
    target_users: "Mobile Developers, Edge Computing",
    tags: ["Free Access", "Multimodal", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.5,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Llama 3.2 3B",
    provider: "Meta",
    release_date: "Sep 2024",
    context_length: "128K",
    speed_rating: "Very Fast",
    core_strengths: "Lightweight, fast, mobile-optimized",
    ideal_use_cases: "Mobile apps, edge deployment, IoT",
    limitations: "Limited capabilities, narrow use cases",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Mobile Developers, IoT",
    tags: ["Free Access", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 4.0,
    performance_score: 3.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Llama 3.2 1B",
    provider: "Meta",
    release_date: "Sep 2024",
    context_length: "128K",
    speed_rating: "Very Fast",
    core_strengths: "Ultra-lightweight, minimal resources",
    ideal_use_cases: "Embedded systems, ultra-low power",
    limitations: "Very limited capabilities",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Embedded Systems, Ultra-low Power",
    tags: ["Free Access", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 4.5,
    performance_score: 2.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Qwen2.5-Coder-32B",
    provider: "Alibaba",
    release_date: "Nov 2024",
    context_length: "32K",
    speed_rating: "Fast",
    core_strengths: "Specialized coding, multiple languages",
    ideal_use_cases: "Code generation, programming assistance",
    limitations: "Coding-focused, limited general use",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Developers, Coding Assistants",
    tags: ["Best for Coding", "Free Access", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Nemotron-70B",
    provider: "NVIDIA",
    release_date: "Oct 2024",
    context_length: "32K",
    speed_rating: "Fast",
    core_strengths: "NVIDIA optimized, enterprise inference",
    ideal_use_cases: "NVIDIA infrastructure, enterprise",
    limitations: "NVIDIA ecosystem, limited availability",
    pricing: "Free (Research) / Contact Sales",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "NVIDIA Users, Enterprise",
    tags: ["Enterprise Grade", "Fast Speed"],
    ease_of_use_score: 3.0,
    performance_score: 4.5,
    cost_efficiency_score: 3.5
  },
  {
    name: "Hermes 3",
    provider: "Nous Research",
    release_date: "Aug 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Uncensored, versatile, fine-tuned",
    ideal_use_cases: "Creative writing, unrestricted use",
    limitations: "Potentially unsafe outputs, bias",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Researchers, Creative Users",
    tags: ["Free Access", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Ministral 8B",
    provider: "Mistral AI",
    release_date: "Oct 2024",
    context_length: "128K",
    speed_rating: "Very Fast",
    core_strengths: "Edge deployment, efficiency, privacy",
    ideal_use_cases: "Edge computing, on-device inference",
    limitations: "Smaller capabilities, niche use",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Edge Developers, Privacy-focused",
    tags: ["Free Access", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.5,
    performance_score: 3.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Pixtral 12B",
    provider: "Mistral AI",
    release_date: "Sep 2024",
    context_length: "128K",
    speed_rating: "Fast",
    core_strengths: "Open multimodal, vision understanding",
    ideal_use_cases: "Vision tasks, image analysis, privacy",
    limitations: "Early stage, limited training",
    pricing: "Free (Open Source)",
    multimodal: "Text, Image",
    fine_tuning: "Full (Open)",
    target_users: "Vision Developers, Privacy-focused",
    tags: ["Free Access", "Multimodal", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Jamba 1.5 Large",
    provider: "AI21 Labs",
    release_date: "Aug 2024",
    context_length: "256K",
    speed_rating: "Medium",
    core_strengths: "Long context, hybrid architecture",
    ideal_use_cases: "Long document analysis, research",
    limitations: "Complex architecture, limited adoption",
    pricing: "$2.00 / $8.00",
    multimodal: "Text only",
    fine_tuning: "Limited",
    target_users: "Researchers, Long Context Apps",
    tags: ["Long Context", "Best for Research"],
    ease_of_use_score: 2.5,
    performance_score: 4.0,
    cost_efficiency_score: 3.0
  },
  {
    name: "Jamba 1.5 Mini",
    provider: "AI21 Labs",
    release_date: "Aug 2024",
    context_length: "256K",
    speed_rating: "Fast",
    core_strengths: "Cost-effective long context",
    ideal_use_cases: "Budget long context processing",
    limitations: "Less capable than large version",
    pricing: "$0.20 / $0.40",
    multimodal: "Text only",
    fine_tuning: "Limited",
    target_users: "Budget-conscious, Long Context",
    tags: ["Long Context", "Fast Speed", "Budget Friendly"],
    ease_of_use_score: 3.5,
    performance_score: 3.5,
    cost_efficiency_score: 4.5
  },
  {
    name: "Granite 3.0 8B",
    provider: "IBM",
    release_date: "Oct 2024",
    context_length: "128K",
    speed_rating: "Fast",
    core_strengths: "Enterprise-ready, IBM ecosystem",
    ideal_use_cases: "IBM cloud, enterprise applications",
    limitations: "IBM ecosystem lock-in, limited reach",
    pricing: "Free (Open Source) / Enterprise licensing",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "IBM Customers, Enterprise",
    tags: ["Free Access", "Enterprise Grade", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 3.5,
    cost_efficiency_score: 4.5
  },
  {
    name: "OLMo 2 13B",
    provider: "Allen Institute",
    release_date: "Nov 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Fully open research, transparency",
    ideal_use_cases: "Academic research, transparency studies",
    limitations: "Academic focus, limited commercial use",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Academic Researchers",
    tags: ["Best for Research", "Free Access", "Open Source", "Budget Friendly"],
    ease_of_use_score: 2.5,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Falcon 3 10B",
    provider: "TII",
    release_date: "Dec 2024",
    context_length: "32K",
    speed_rating: "Fast",
    core_strengths: "Multilingual, efficient training",
    ideal_use_cases: "Multilingual applications, research",
    limitations: "Limited ecosystem, newer model",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Researchers, Multilingual Apps",
    tags: ["Free Access", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Dolphin 3.0",
    provider: "Cognitive Computations",
    release_date: "Oct 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Uncensored, instruction-following",
    ideal_use_cases: "Creative tasks, unrestricted use",
    limitations: "Potentially inappropriate outputs",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Creative Users, Researchers",
    tags: ["Free Access", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 3.5,
    cost_efficiency_score: 5.0
  },
  {
    name: "Aya-Expanse 32B",
    provider: "Cohere For AI",
    release_date: "Oct 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Massively multilingual, 23 languages",
    ideal_use_cases: "Global applications, multilingual support",
    limitations: "Specialized focus, resource intensive",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Global Developers, Multilingual Apps",
    tags: ["Free Access", "Open Source", "Budget Friendly"],
    ease_of_use_score: 3.0,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "SmolLM2 1.7B",
    provider: "Hugging Face",
    release_date: "Nov 2024",
    context_length: "8K",
    speed_rating: "Very Fast",
    core_strengths: "Ultra-compact, mobile-optimized",
    ideal_use_cases: "Mobile apps, IoT, edge devices",
    limitations: "Very limited capabilities, short context",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Mobile/IoT Developers",
    tags: ["Free Access", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 4.5,
    performance_score: 2.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "InternLM3 8B",
    provider: "Shanghai AI Lab",
    release_date: "Dec 2024",
    context_length: "1M",
    speed_rating: "Fast",
    core_strengths: "Long context, multilingual, reasoning",
    ideal_use_cases: "Research, long document processing",
    limitations: "Academic focus, limited commercial",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Researchers, Academic Use",
    tags: ["Best for Research", "Free Access", "Long Context", "Fast Speed", "Open Source", "Budget Friendly"],
    ease_of_use_score: 2.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "Marco-o1",
    provider: "Alibaba",
    release_date: "Dec 2024",
    context_length: "32K",
    speed_rating: "Slow",
    core_strengths: "Reasoning chains, step-by-step thinking",
    ideal_use_cases: "Complex reasoning, mathematical problems",
    limitations: "Very slow, reasoning overhead",
    pricing: "Free (Research)",
    multimodal: "Text only",
    fine_tuning: "Limited",
    target_users: "Researchers, Complex Reasoning",
    tags: ["Best for Research", "Free Access", "Budget Friendly"],
    ease_of_use_score: 2.0,
    performance_score: 4.5,
    cost_efficiency_score: 4.0
  },
  {
    name: "Athene-V2-Chat",
    provider: "Nexusflow",
    release_date: "Nov 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Conversational AI, dialogue optimization",
    ideal_use_cases: "Chatbots, conversational interfaces",
    limitations: "Conversation-focused, limited availability",
    pricing: "Free (Research) / API pricing",
    multimodal: "Text only",
    fine_tuning: "Limited",
    target_users: "Chatbot Developers",
    tags: ["Free Access", "Best for Beginners", "Budget Friendly"],
    ease_of_use_score: 4.0,
    performance_score: 3.5,
    cost_efficiency_score: 4.5
  },
  {
    name: "Tulu 3 70B",
    provider: "Allen Institute",
    release_date: "Nov 2024",
    context_length: "128K",
    speed_rating: "Medium",
    core_strengths: "Instruction-following, research-grade",
    ideal_use_cases: "Academic research, instruction tasks",
    limitations: "Academic focus, compute requirements",
    pricing: "Free (Open Source)",
    multimodal: "Text only",
    fine_tuning: "Full (Open)",
    target_users: "Academic Researchers",
    tags: ["Best for Research", "Free Access", "Open Source", "Budget Friendly"],
    ease_of_use_score: 2.5,
    performance_score: 4.0,
    cost_efficiency_score: 5.0
  },
  {
    name: "SteerLM 2.0",
    provider: "NVIDIA",
    release_date: "Oct 2024",
    context_length: "32K",
    speed_rating: "Fast",
    core_strengths: "Controllable generation, attribute steering",
    ideal_use_cases: "Controlled text generation, customization",
    limitations: "NVIDIA ecosystem, complex setup",
    pricing: "Free (Research) / Enterprise",
    multimodal: "Text only",
    fine_tuning: "Yes",
    target_users: "NVIDIA Users, Advanced Developers",
    tags: ["Fast Speed"],
    ease_of_use_score: 2.0,
    performance_score: 4.0,
    cost_efficiency_score: 3.5
  }
];

// Global variables
let filteredModels = [...models];
let selectedModelsForComparison = [];
let currentView = 'cards';

// DOM elements
const modelsGrid = document.getElementById('models-grid');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const resultsCount = document.getElementById('results-count');
const resetFiltersBtn = document.getElementById('reset-filters');
const modal = document.getElementById('model-modal');
const modalClose = document.getElementById('modal-close');
const comparisonModal = document.getElementById('comparison-modal');
const comparisonClose = document.getElementById('comparison-close');
const cardsViewBtn = document.getElementById('cards-view-btn');
const statsViewBtn = document.getElementById('stats-view-btn');
const modelsView = document.getElementById('models-view');
const statsView = document.getElementById('stats-view');
const backToTopBtn = document.getElementById('back-to-top');

// Initialize the dashboard
function init() {
    updateStats();
    renderModels();
    setupEventListeners();
    updateResultsCount();
}

// Update statistics in header
function updateStats() {
    const providers = [...new Set(models.map(m => m.provider))].length;
    const openSource = models.filter(m => m.tags.includes('Open Source')).length;
    const enterprise = models.filter(m => m.tags.includes('Enterprise Grade')).length;
    
    document.getElementById('total-models').textContent = models.length;
    document.getElementById('total-providers').textContent = providers;
    document.getElementById('open-source-models').textContent = openSource;
    document.getElementById('enterprise-models').textContent = enterprise;
}

// Render model cards
function renderModels() {
    if (filteredModels.length === 0) {
        modelsGrid.innerHTML = `
            <div class="no-results">
                <h3>No models found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }

    modelsGrid.innerHTML = filteredModels.map(model => createModelCard(model)).join('');
}

// Create individual model card
function createModelCard(model) {
    const multimodalIcons = getMultimodalIcons(model.multimodal);
    const tags = model.tags.slice(0, 3); // Show first 3 tags
    
    return `
        <div class="model-card" data-model="${model.name}">
            <div class="model-header">
                <div>
                    <h3 class="model-name">${model.name}</h3>
                    <div class="model-provider">
                        <div class="provider-icon">${model.provider.charAt(0)}</div>
                        <span>${model.provider}</span>
                    </div>
                </div>
            </div>
            
            <div class="model-badges">
                <span class="badge badge-release">${model.release_date}</span>
                <span class="badge badge-context">${model.context_length}</span>
                <span class="badge badge-speed ${model.speed_rating.toLowerCase().replace(' ', '-')}">${model.speed_rating}</span>
            </div>
            
            <div class="model-pricing">${model.pricing}</div>
            
            <div class="model-tags">
                ${tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
                ${model.tags.length > 3 ? `<span class="tag-pill">+${model.tags.length - 3} more</span>` : ''}
            </div>
            
            <div class="model-ratings">
                <div class="rating-item">
                    <span class="rating-label">Ease of Use</span>
                    <div class="stars">${generateStars(model.ease_of_use_score)}</div>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Performance</span>
                    <div class="stars">${generateStars(model.performance_score)}</div>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Cost Efficiency</span>
                    <div class="stars">${generateStars(model.cost_efficiency_score)}</div>
                </div>
            </div>
            
            <div class="model-strengths">${model.core_strengths}</div>
            
            <div class="multimodal-icons">
                ${multimodalIcons}
            </div>
            
            <div class="model-actions">
                <button class="btn btn-primary" onclick="showModelDetails('${model.name}')">View Details</button>
                <button class="btn btn-secondary" onclick="toggleComparison('${model.name}')" id="compare-${model.name.replace(/\s+/g, '-')}">Compare</button>
            </div>
        </div>
    `;
}

// Generate star ratings
function generateStars(score) {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 >= 0.5;
    const totalStars = 5;
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
        stars += '<i class="fas fa-star star empty"></i>';
    }
    
    return stars;
}

// Get multimodal capability icons
function getMultimodalIcons(capabilities) {
    const icons = {
        'Text': '<i class="fas fa-font" title="Text"></i>',
        'Image': '<i class="fas fa-image" title="Image"></i>',
        'Audio': '<i class="fas fa-volume-up" title="Audio"></i>',
        'Video': '<i class="fas fa-video" title="Video"></i>',
        'Code': '<i class="fas fa-code" title="Code"></i>'
    };
    
    return capabilities.split(', ').map(cap => 
        `<div class="multimodal-icon">${icons[cap.trim()] || '<i class="fas fa-question"></i>'}</div>`
    ).join('');
}

// Show model details in modal
function showModelDetails(modelName) {
    const model = models.find(m => m.name === modelName);
    if (!model) return;
    
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = model.name;
    
    modalBody.innerHTML = `
        <div class="modal-detail-grid">
            <div class="detail-section">
                <h3>Basic Information</h3>
                <div class="detail-item">
                    <span class="detail-label">Provider:</span>
                    <span class="detail-value">${model.provider}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Release Date:</span>
                    <span class="detail-value">${model.release_date}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Context Length:</span>
                    <span class="detail-value">${model.context_length}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Speed Rating:</span>
                    <span class="detail-value">${model.speed_rating}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Pricing (Input/Output per 1M tokens):</span>
                    <span class="detail-value">${model.pricing}</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Capabilities</h3>
                <div class="detail-item">
                    <span class="detail-label">Core Strengths:</span>
                    <span class="detail-value">${model.core_strengths}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Multimodal:</span>
                    <span class="detail-value">${model.multimodal}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Fine-tuning:</span>
                    <span class="detail-value">${model.fine_tuning}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Target Users:</span>
                    <span class="detail-value">${model.target_users}</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Use Cases &amp; Limitations</h3>
                <div class="detail-item">
                    <span class="detail-label">Ideal Use Cases:</span>
                    <span class="detail-value">${model.ideal_use_cases}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Limitations:</span>
                    <span class="detail-value">${model.limitations}</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Ratings</h3>
                <div class="detail-item">
                    <span class="detail-label">Ease of Use:</span>
                    <div class="stars">${generateStars(model.ease_of_use_score)} (${model.ease_of_use_score}/5)</div>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Performance:</span>
                    <div class="stars">${generateStars(model.performance_score)} (${model.performance_score}/5)</div>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Cost Efficiency:</span>
                    <div class="stars">${generateStars(model.cost_efficiency_score)} (${model.cost_efficiency_score}/5)</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Tags</h3>
            <div class="model-tags">
                ${model.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Toggle model for comparison
function toggleComparison(modelName) {
    const index = selectedModelsForComparison.indexOf(modelName);
    const button = document.getElementById(`compare-${modelName.replace(/\s+/g, '-')}`);
    
    if (index > -1) {
        selectedModelsForComparison.splice(index, 1);
        button.textContent = 'Compare';
        button.classList.remove('btn-primary');
        button.classList.add('btn-secondary');
    } else {
        if (selectedModelsForComparison.length >= 3) {
            alert('You can compare up to 3 models at once.');
            return;
        }
        selectedModelsForComparison.push(modelName);
        button.textContent = 'Remove';
        button.classList.remove('btn-secondary');
        button.classList.add('btn-primary');
    }
    
    if (selectedModelsForComparison.length >= 2) {
        showComparisonButton();
    } else {
        hideComparisonButton();
    }
}

// Show floating comparison button
function showComparisonButton() {
    let existingBtn = document.getElementById('floating-compare-btn');
    if (existingBtn) {
        existingBtn.textContent = `Compare ${selectedModelsForComparison.length} Models`;
        return;
    }
    
    const floatingBtn = document.createElement('button');
    floatingBtn.id = 'floating-compare-btn';
    floatingBtn.className = 'btn btn-primary';
    floatingBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        z-index: 1000;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    floatingBtn.textContent = `Compare ${selectedModelsForComparison.length} Models`;
    floatingBtn.onclick = showComparison;
    document.body.appendChild(floatingBtn);
}

// Hide floating comparison button
function hideComparisonButton() {
    const existingBtn = document.getElementById('floating-compare-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
}

// Show comparison modal
function showComparison() {
    if (selectedModelsForComparison.length < 2) return;
    
    const selectedModels = selectedModelsForComparison.map(name => 
        models.find(m => m.name === name)
    ).filter(Boolean);
    
    const comparisonBody = document.getElementById('comparison-body');
    
    const comparisonTable = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Feature</th>
                    ${selectedModels.map(model => `<th>${model.name}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Provider</strong></td>
                    ${selectedModels.map(model => `<td>${model.provider}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Release Date</strong></td>
                    ${selectedModels.map(model => `<td>${model.release_date}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Context Length</strong></td>
                    ${selectedModels.map(model => `<td>${model.context_length}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Speed Rating</strong></td>
                    ${selectedModels.map(model => `<td>${model.speed_rating}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Pricing</strong></td>
                    ${selectedModels.map(model => `<td>${model.pricing}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Multimodal</strong></td>
                    ${selectedModels.map(model => `<td>${model.multimodal}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Fine-tuning</strong></td>
                    ${selectedModels.map(model => `<td>${model.fine_tuning}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Ease of Use</strong></td>
                    ${selectedModels.map(model => `<td>${generateStars(model.ease_of_use_score)} (${model.ease_of_use_score}/5)</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Performance</strong></td>
                    ${selectedModels.map(model => `<td>${generateStars(model.performance_score)} (${model.performance_score}/5)</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Cost Efficiency</strong></td>
                    ${selectedModels.map(model => `<td>${generateStars(model.cost_efficiency_score)} (${model.cost_efficiency_score}/5)</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Core Strengths</strong></td>
                    ${selectedModels.map(model => `<td>${model.core_strengths}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Ideal Use Cases</strong></td>
                    ${selectedModels.map(model => `<td>${model.ideal_use_cases}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Limitations</strong></td>
                    ${selectedModels.map(model => `<td>${model.limitations}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Target Users</strong></td>
                    ${selectedModels.map(model => `<td>${model.target_users}</td>`).join('')}
                </tr>
            </tbody>
        </table>
    `;
    
    comparisonBody.innerHTML = comparisonTable;
    comparisonModal.style.display = 'block';
}

// Apply filters
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTags = Array.from(document.querySelectorAll('.tag-filter input:checked')).map(cb => cb.value);
    const selectedProviders = Array.from(document.querySelectorAll('.provider-filter input:checked')).map(cb => cb.value);
    const selectedSpeed = document.querySelector('input[name="speed"]:checked').value;
    
    filteredModels = models.filter(model => {
        // Search filter
        const matchesSearch = !searchTerm || 
            model.name.toLowerCase().includes(searchTerm) ||
            model.provider.toLowerCase().includes(searchTerm) ||
            model.core_strengths.toLowerCase().includes(searchTerm) ||
            model.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Tag filter
        const matchesTags = selectedTags.length === 0 || 
            selectedTags.some(tag => model.tags.includes(tag));
        
        // Provider filter
        const matchesProvider = selectedProviders.length === 0 || 
            selectedProviders.includes(model.provider);
        
        // Speed filter
        const matchesSpeed = selectedSpeed === 'all' || model.speed_rating === selectedSpeed;
        
        return matchesSearch && matchesTags && matchesProvider && matchesSpeed;
    });
    
    applySorting();
    renderModels();
    updateResultsCount();
}

// Apply sorting
function applySorting() {
    const sortBy = sortSelect.value;
    
    filteredModels.sort((a, b) => {
        switch (sortBy) {
            case 'performance-desc':
                return b.performance_score - a.performance_score;
            case 'cost-desc':
                return b.cost_efficiency_score - a.cost_efficiency_score;
            case 'newest':
                return new Date(b.release_date) - new Date(a.release_date);
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'price-asc':
                const aPrice = parseFloat(a.pricing.replace(/[^\d.]/g, '')) || 0;
                const bPrice = parseFloat(b.pricing.replace(/[^\d.]/g, '')) || 0;
                return aPrice - bPrice;
            default:
                return 0;
        }
    });
}

// Update results count
function updateResultsCount() {
    resultsCount.textContent = `${filteredModels.length} models found`;
}

// Reset all filters
function resetFilters() {
    searchInput.value = '';
    document.querySelectorAll('.tag-filter input, .provider-filter input').forEach(cb => cb.checked = false);
    document.querySelector('input[name="speed"][value="all"]').checked = true;
    sortSelect.value = 'performance-desc';
    
    selectedModelsForComparison = [];
    hideComparisonButton();
    
    applyFilters();
}

// Toggle between views
function toggleView(view) {
    currentView = view;
    
    if (view === 'cards') {
        cardsViewBtn.classList.add('active');
        statsViewBtn.classList.remove('active');
        modelsView.style.display = 'block';
        statsView.style.display = 'none';
    } else {
        statsViewBtn.classList.add('active');
        cardsViewBtn.classList.remove('active');
        modelsView.style.display = 'none';
        statsView.style.display = 'block';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search input with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(applyFilters, 300);
    });
    
    // Sort select
    sortSelect.addEventListener('change', () => {
        applySorting();
        renderModels();
    });
    
    // Filter checkboxes and radios
    document.addEventListener('change', (e) => {
        if (e.target.matches('.tag-filter input, .provider-filter input, input[name="speed"]')) {
            applyFilters();
        }
    });
    
    // Reset filters
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    // View toggle buttons
    cardsViewBtn.addEventListener('click', () => toggleView('cards'));
    statsViewBtn.addEventListener('click', () => toggleView('stats'));
    
    // Modal close
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    comparisonClose.addEventListener('click', () => {
        comparisonModal.style.display = 'none';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
        if (e.target === comparisonModal) {
            comparisonModal.style.display = 'none';
        }
    });
    
    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Make functions available globally
window.showModelDetails = showModelDetails;
window.toggleComparison = toggleComparison;
window.showComparison = showComparison;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);