export const personal = {
  name: "Ophelia Trelawney",
  title: "Frontend Developer | Engineer",
  tagline:
    "6+ years building scalable, accessible, and high-performance web experiences.",
  email: "opheliagt6@gmail.com",
  phone: "+91 7507 829370",
  linkedin: "https://www.linkedin.com/in/ophelia-trelawney/",
  github: "", // Add GitHub URL after uploading the portfolio repo
  summary:
    "Frontend Developer with over 6 years of experience crafting high-performance web interfaces. I specialise in React.js and Vue.js, with a strong foundation in TypeScript and modern JavaScript patterns. I've worked across product companies — from ad-tech at Media.net to e-commerce at Fynd to EdTech at HowNow — delivering everything from POS systems for Reliance retail to government dashboards serving half a million users.",
};

export const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Users Served", value: "500K+" },
  { label: "Sites Delivered", value: "50+" },
  { label: "Tech Stacks", value: "10+" },
];

export const experience = [
  {
    company: "HowNow",
    role: "Software Engineer",
    period: "Sept 2025 – Present",
    location: "Mumbai, India",
    bullets: [
      "Migrating platform from Rails to React with shared components and robust state management",
      "Led system-wide accessibility compliance — screen readers, keyboard navigation, ARIA standards",
      "Managed rewards integration frontend across courses and learning pathways",
      "Led UK Government-specific feature development powering a dashboard for 500K+ users",
      "Implemented 26 third-party integrations across web platform and browser extensions",
    ],
  },
  {
    company: "Fynd",
    role: "Software Development Engineer 1",
    period: "Nov 2022 – Sept 2025",
    location: "Mumbai, India",
    bullets: [
      "Developed and led finance module frontend with 30+ reusable Vue.js components",
      "Built subscription module for seller onboarding using React.js and Node.js",
      "Developed Store OS POS refund interface deployed across Reliance retail outlets",
      "Created automation testing scripts in Node.js using the Mocha framework",
    ],
  },
  {
    company: "Media.net",
    role: "UI Developer Level 2",
    period: "Dec 2018 – April 2022",
    location: "Mumbai, India",
    bullets: [
      "Led job recommendation website development using Vue.js, React.js, and PHP",
      "Delivered 50+ WordPress websites with custom themes for advertising clients",
      "Managed three core projects for advertisement layouts and cross-functional web products",
      "Built internal tooling and a real-time work statistics dashboard for team efficiency",
      "Implemented ReCAPTCHA, tracking, and birthday/anniversary bot automation",
    ],
  },
];

export const skills: Record<string, string[]> = {
  "Frontend & UI": [
    "React.js",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Material-UI",
    "jQuery",
  ],
  "Backend & APIs": [
    "Node.js",
    "Rails",
    "PHP",
    "Python",
    "RESTful APIs",
    "GraphQL",
    "Axios",
  ],
  "State & Build": ["Redux", "Vuex", "Webpack", "Lighthouse"],
  "Databases & Cloud": [
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Docker",
    "Kubernetes",
  ],
  "Testing & DevOps": ["Cypress", "Mocha", "Jest", "Git", "GitHub", "GitLab"],
  "CMS & Hosting": ["WordPress", "Pagely", "Bluehost", "GoDaddy", "Vercel"],
  "Tools & Design": [
    "Figma",
    "Zeplin",
    "BrowserStack",
    "Google Charts",
    "VS Code",
  ],
  "AI & Automation": [
    "Copilot",
    "ChatGPT",
    "Cursor AI",
    "Claude Code",
    "Gemini",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Code Editor App",
    description:
      "Multi-language code editor with real-time execution, syntax highlighting, and OpenAI-powered evaluation. Upload your own PDF to generate custom coding tests.",
    tech: ["React.js", "Node.js", "TypeScript"],
    liveUrl: "", // Add after deploying to Vercel
    codeUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Food Costing App",
    description:
      "Calculate ingredient costs and profit margins for recipes. Designed for restaurant owners and home cooks to manage and optimise food costs effectively.",
    tech: ["React.js", "JavaScript", "CSS"],
    liveUrl: "", // Add after deploying to Vercel
    codeUrl: "",
    featured: true,
    category: "Web App",
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "Interactive quiz app built with Vue.js. Loads questions from JSON, tracks scores, and gives instant visual feedback.",
    tech: ["Vue.js", "JavaScript", "CSS"],
    liveUrl: "/quiz/index.html",
    codeUrl: "",
    featured: false,
    category: "Web App",
  },
  {
    id: 4,
    title: "CRUD Contact Manager",
    description:
      "CRUD contact manager with form validation, inline edit/delete, and localStorage persistence.",
    tech: ["JavaScript", "ES6", "localStorage"],
    liveUrl: "/crud/index.html",
    codeUrl: "",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "React Stopwatch",
    description:
      "Precise stopwatch with millisecond accuracy, start/stop/reset controls, and clean React state management.",
    tech: ["React.js", "JavaScript", "CSS"],
    liveUrl: "/stopwatch/index.html",
    codeUrl: "",
    featured: false,
    category: "UI Component",
  },
  {
    id: 8,
    title: "MahekToday.com",
    description:
      "A fully responsive WordPress website designed and developed with a custom theme, SEO optimisation, and mobile-first layout.",
    tech: ["WordPress", "PHP", "CSS"],
    liveUrl: "https://mahektoday.com",
    codeUrl: "",
    featured: false,
    category: "WordPress",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Xavier Institute of Engineering",
    year: "2018",
    location: "Mumbai, India",
  },
];
