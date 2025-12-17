import { Project, SkillCategory, SocialLink } from './types';

export const PORTFOLIO_OWNER = "Eduardo Solano";
export const JOB_TITLE = "Machine Learning Engineer";
export const SHORT_BIO = "I build accessible, pixel-perfect, and performant web experiences.";
export const LONG_BIO = `I am a motivated and detail-oriented developer who enjoys solving problems and bringing ideas to life through technology. My interests lie in both frontend and backend development, where I can combine creativity with logic to build meaningful applications.

My journey in technology began with a curiosity for how digital systems work, which gradually evolved into a commitment to pursue software engineering. Over time, I have gained experience in designing websites, coding applications, and learning the principles of modern development.

Looking ahead, I aim to grow as a professional by embracing challenges, improving my technical skills, and contributing solutions that make a real difference for users and businesses alike.`;

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Redis", "Docker"],
  },
  {
    category: "AI & Tools",
    skills: ["Gemini API", "Python", "Git", "AWS", "CI/CD", "Figma"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
    tags: ["React", "D3.js", "Node.js"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "A SaaS platform allowing users to generate marketing copy using LLMs.",
    tags: ["TypeScript", "Gemini API", "Next.js"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop functionality and team chat.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    demoUrl: "#",
    repoUrl: "#",
  },
];

export const SYSTEM_INSTRUCTION = `
  You are an AI assistant for ${PORTFOLIO_OWNER}'s portfolio website.
  Your goal is to answer questions about ${PORTFOLIO_OWNER} based on the following information:
  
  Name: ${PORTFOLIO_OWNER}
  Title: ${JOB_TITLE}
  Bio: ${LONG_BIO}
  Skills: ${JSON.stringify(SKILLS)}
  Projects: ${JSON.stringify(PROJECTS.map(p => p.title + ": " + p.description))}
  
  Be professional, concise, and friendly. 
  If asked about contact info, suggest using the contact form on the website.
  Do not hallucinate information not present here.
`;