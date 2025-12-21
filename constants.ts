import { Project, SkillCategory, Education } from './types';

// Mock imports for local images - You would place your actual images in an /assets or /img folder
// When deploying to Vercel/Netlify, this ensures the build tool processes them correctly.
// Note: In your local environment, ensure these files exist or update the paths.
const DobuImg = { src: '/img/Dobu.png' }; 
const EnomyImg = { src: '/img/Enomy.png' };
const JumpstartImg = { src: '/img/Jumpstart.png' };
const MealsImg = { src: '/img/MealsOnWheels.png' };

export const PORTFOLIO_OWNER = "Eduardo Solano";
export const JOB_TITLE = "Aspiring Software Engineer & Job Candidate";
export const SHORT_BIO = "Currently seeking entry-level opportunities where I can apply my growing technical skill set and contribute to team-driven success.";
export const LONG_BIO = `I am a dedicated student and aspiring software engineer currently looking for my first professional role in the tech industry. My goal is to find a position where I can bridge the gap between my academic learning and real-world application.

I am actively pursuing a Bachelor of Science in Information Technology at the University of Cebu and an Applied Degree in Software Engineering through Lithan Academy. This dual-focus education provides me with a strong theoretical foundation and practical coding experience.

I am a highly motivated individual, characterized by a "can-do" attitude and a commitment to continuous learning. I am looking for a company that values growth, mentorship, and innovative thinking.`;

export const SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Eduardo Solano's professional portfolio. 
Eduardo is a highly motivated Job Candidate and Aspiring Software Engineer.
He is currently seeking opportunities to start his professional career.
He is studying at University of Cebu - Banilad Campus and Lithan Academy Singapore.
His technical skills include HTML, CSS, JavaScript, Java, Python, and Machine Learning.
He has developed several academic and personal projects including Dobu Martial Arts, Enomy Finance, and Jumpstart.
Answer questions specifically about his background, education, and his eagerness to join a professional team.
Suggest the user check his 'Contact' section if they want to discuss a job opening or interview.`;

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Skills",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "Python", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Spring MVC", level: 70 },
      { name: "Axure", level: 65 },
      { name: "Microsoft Copilot", level: 85 },
      { name: "NumPy", level: 75 },
      { name: "Pandas", level: 75 },
      { name: "Scikit Learn", level: 70 },
      { name: "TensorFlow", level: 65 },
      { name: "PyTorch", level: 60 },
      { name: "Keras", level: 60 },
      { name: "XGBoost", level: 60 }
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Effective Communication", "Collaborative Teamwork", "Analytical Problem Solving", "Rapid Adaptability", 
      "Disciplined Time Management", "Creative Thinking", "Critical Evaluation"
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: "University of Cebu - Banilad Campus",
    degree: "Bachelor of Science in Information Technology",
    year: "2024 - Present"
  },
  {
    school: "Lithan Academy Singapore",
    degree: "Applied Degree in Software Engineering",
    year: "2024 - Present"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Dobu Martial Arts",
    description: "A responsive martial arts academy website showcasing membership plans and training schedules. This project highlights my ability to create user-centric frontend designs.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/img/Dobu.png",
    demoUrl: "https://d34th-se.github.io/DobuMartialArts/",
    repoUrl: "https://github.com/D34TH-SE/DobuMartialArts",
  },
  {
    id: 2,
    title: "Enomy Finance",
    description: "A full-stack finance application featuring multi-currency conversion and investment calculators. Built during my studies to master backend logic and database management.",
    tags: ["Java", "Spring MVC", "MySQL"],
    imageUrl: "/img/Enomy.png",
    demoUrl: "https://github.com/D34TH-SE/Enomy",
    repoUrl: "https://github.com/D34TH-SE/Enomy",
  },
  {
    id: 3,
    title: "Jumpstart",
    description: "An e-commerce prototype for fashion retail that incorporates an AI chatbot for customer assistance, demonstrating my interest in integrating AI into web applications.",
    tags: ["HTML", "CSS", "JavaScript", "AI Integration"],
    imageUrl: "/img/Jumpstart.png",
    demoUrl: "https://github.com/D34TH-SE/CPL-Project",
    repoUrl: "https://github.com/D34TH-SE/CPL-Project",
  },
  {
    id: 4,
    title: "Meals on Wheels",
    description: "A dynamic food delivery platform created with React and PHP. It features a scalable architecture and a responsive UI designed for real-time interaction.",
    tags: ["React JS", "TypeScript", "PHP", "Tailwind CSS"],
    imageUrl: "/img/MealsOnWheels.png",
    demoUrl: "https://github.com/D34TH-SE/meals-on-wheels",
    repoUrl: "https://github.com/D34TH-SE/meals-on-wheels",
  },
];