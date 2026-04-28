export const personal = {
  name: "Evie",
  fullName: "Kansinee Khuttiya",
  role: "Computer Engineering Student",
  university: "Assumption University",
  tagline: "Building AI systems with security at the core.",
  about: [
    "I'm a Computer Engineering student at Assumption University with a focus on AI engineering and cybersecurity. I like building intelligent systems — and then figuring out how to break them, before someone else does.",
    "My flagship project, NYXUS, combines a full-stack RAG chatbot with production-grade security: prompt-injection defense, PII redaction, an OWASP Top 10 code scanner, and an append-only audit log. Beyond NYXUS, I work on classical ML, low-level systems with C/C++ and SYCL, and modern web development with Next.js.",
    "I'm currently looking for internships and junior roles in AI Engineering, Security Engineering, or full-stack development.",
  ],
  email: "tarzkkjk@gmail.com",
  github: "https://github.com/evieffvy",
  linkedin: "https://www.linkedin.com/in/kansinee-khuttiya-1402273a2",
  linktree: "https://linktr.ee/evieffvy",
  languages: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Mandarin", level: "Learning · HSK 3" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
  highlights?: string[];
  cover?: string;
};

export const featured: Project = {
  slug: "nyxus",
  title: "NYXUS",
  blurb: "Full-stack RAG chatbot with security-first design",
  description:
    "An end-to-end Retrieval-Augmented Generation chatbot built to demonstrate production-grade engineering across full-stack, AI, and applied security. Users can chat with a Gemini-powered assistant grounded in PDF documents they upload, scan code for OWASP Top 10 vulnerabilities, and review every privileged action through an audit log.",
  highlights: [
    "PII redaction across 10+ pattern classes including Luhn-validated credit cards, before any user input reaches the LLM",
    "Weighted prompt-injection scoring across 7 signal classes (instruction override, role hijack, system-prompt leak, jailbreaks, delimiter smuggling)",
    "OWASP Top 10 code scanner using structured-output Gemini prompts with severity-rated findings and fix recommendations",
    "Append-only audit log of every privileged action: auth, conversation CRUD, document upload, chat send, security scan",
    "Hardened HTTP headers, slowapi rate limiting, CORS allowlists, retry/backoff for transient LLM errors",
    "GitHub Actions CI running pytest, tsc, and prisma validate on every push",
  ],
  tech: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "FastAPI",
    "Python",
    "Postgres",
    "Prisma",
    "NextAuth v5",
    "Google Gemini",
    "Tailwind 4",
    "Vercel",
    "Render",
    "Supabase",
  ],
  repo: "https://github.com/evieffvy/NYXUS",
  demo: "https://nyxus-phi.vercel.app",
  cover: "/projects/chat.png",
};

export const projects: Project[] = [
  {
    slug: "sycl",
    title: "SYCL Parallel Computing",
    blurb: "GPU-accelerated workloads with Intel oneAPI",
    description:
      "Parallel computing experiments using SYCL/oneAPI to offload compute kernels onto Intel GPUs. Explores work-group tuning, USM, and memory model trade-offs.",
    tech: ["C++", "SYCL", "Intel oneAPI", "CMake", "Linux"],
    repo: "https://github.com/evieffvy/sycl_project",
  },
  {
    slug: "stanford-dogs",
    title: "Stanford Dogs CNN",
    blurb: "Dog breed classification via CNN transfer learning",
    description:
      "Fine-tunes a pre-trained CNN on the Stanford Dogs dataset for 120-class breed classification. Covers data augmentation, transfer learning, and evaluation.",
    tech: ["Python", "TensorFlow/Keras", "Transfer Learning", "CNN"],
    repo: "https://github.com/evieffvy/stanford-dogs-cnn",
  },
  {
    slug: "pca-face",
    title: "PCA Face Recognition",
    blurb: "Eigenfaces from scratch",
    description:
      "Implements face recognition using Principal Component Analysis (eigenfaces). Computes the eigen-decomposition manually and projects faces into a low-dimensional subspace for recognition.",
    tech: ["Python", "NumPy", "OpenCV", "PCA"],
    repo: "https://github.com/evieffvy/pca-face-recognition",
  },
  {
    slug: "imdb-sentiment",
    title: "IMDB Sentiment",
    blurb: "Logistic Regression vs Naive Bayes on movie reviews",
    description:
      "Binary sentiment classification on the IMDB reviews dataset. Compares classical ML baselines (Logistic Regression, Naive Bayes) with TF-IDF features.",
    tech: ["Python", "scikit-learn", "NLP", "TF-IDF"],
    repo: "https://github.com/evieffvy/imdb-sentiment",
  },
  {
    slug: "market-apriori",
    title: "Market Basket Apriori",
    blurb: "Association rule mining for retail baskets",
    description:
      "Implements the Apriori algorithm for frequent itemset mining and association rule generation on a market basket dataset. Tunes support and confidence to surface meaningful rules.",
    tech: ["Python", "Apriori", "Pandas"],
    repo: "https://github.com/evieffvy/market-apriori",
  },
  {
    slug: "iris-kmeans",
    title: "Iris K-Means",
    blurb: "Unsupervised clustering with elbow + silhouette",
    description:
      "K-Means clustering on the Iris dataset, including elbow method and silhouette analysis to validate the choice of k.",
    tech: ["Python", "scikit-learn", "K-Means"],
    repo: "https://github.com/evieffvy/iris-kmeans",
  },
  {
    slug: "titanic-id3",
    title: "Titanic ID3",
    blurb: "Decision tree on the Titanic survival dataset",
    description:
      "Decision tree classifier (ID3) implementation predicting Titanic passenger survival, with information-gain splits and entropy calculations.",
    tech: ["Python", "ID3", "Decision Tree"],
    repo: "https://github.com/evieffvy/titanic-id3",
  },
];

export const skills = [
  {
    category: "AI / ML",
    items: [
      "Python",
      "scikit-learn",
      "OpenCV",
      "RAG",
      "LLMs",
      "Embeddings",
      "Vector Search",
      "CNN",
      "Transfer Learning",
      "PCA",
      "K-Means",
      "NLP",
    ],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS"],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Python",
      "Node.js",
      "NextAuth",
      "Prisma",
      "Postgres",
      "SQL",
      "REST APIs",
      "OAuth 2.0",
    ],
  },
  {
    category: "Security",
    items: [
      "OWASP Top 10",
      "Prompt Injection",
      "PII Redaction",
      "Web App Security",
      "Authentication",
      "Rate Limiting",
      "Security Headers",
    ],
  },
  {
    category: "Systems",
    items: ["C", "C++", "SYCL", "Intel oneAPI", "CMake", "Linux", "Bash"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "CI/CD", "Vercel", "Render", "Supabase"],
  },
];

export const education = {
  school: "Assumption University (ABAC)",
  degree: "Bachelor of Engineering · Computer Engineering",
  period: "3rd–4th year",
  location: "Bangkok, Thailand",
};
