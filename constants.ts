
import { Project, SkillCategory, Education, SocialLink } from './types';

export const PORTFOLIO_OWNER = "Eduardo Solano";
export const JOB_TITLE = "Aspiring Machine Learning Engineer";
export const SHORT_BIO = "Passionate developer eager to contribute to innovative projects and grow within a professional development team";
export const LONG_BIO = `I am a motivated and detail-oriented developer who enjoys solving problems and bringing ideas to life through technology. My interests lie in both frontend and backend development, where I can combine creativity with logic to build meaningful applications.

My journey in technology began with a curiosity for how digital systems work, which gradually evolved into a commitment to pursue software engineering. Over time, I have gained experience in designing websites, coding applications, and learning the principles of modern development.

Looking ahead, I aim to grow as a professional by embracing challenges, improving my technical skills, and contributing solutions that make a real difference for users and businesses alike.`;

// Added SYSTEM_INSTRUCTION for Gemini Chat Assistant
export const SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Eduardo Solano's professional portfolio. 
Eduardo is a Software Engineer who specializes in building accessible, pixel-perfect, and performant web experiences.
He is currently studying Bachelor of Science in Information Technology at University of Cebu - Banilad Campus and an Applied Degree in Software Engineering at Lithan Academy Singapore.
His technical skills include HTML, CSS, JavaScript, Java, Python, MySQL, PHP, and various machine learning frameworks like TensorFlow and PyTorch.
He has worked on projects like Dobu Martial Arts, Enomy Finance, Jumpstart, and Meals on Wheels.
Answer questions about his skills, education, and projects based on the information provided in this portfolio. 
Be concise, friendly, and helpful. If you don't know something, suggest the user contact Eduardo directly via the contact form.`;

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
      "Communication", "Teamwork", "Problem Solving", "Adaptability", 
      "Time Management", "Creativity", "Critical Thinking"
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
    description: "A modern website for a martial arts academy, focused on showcasing training programs, instructors and membership details in a clean and professional layout. Built with HTML, CSS and JavaScript to ensure responsiveness and interactivity and usability.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/img/Dobu.png",
    demoUrl: "https://d34th-se.github.io/DobuMartialArts/",
    repoUrl: "https://github.com/D34TH-SE/DobuMartialArts",
  },
  {
    id: 2,
    title: "Enomy Finance",
    description: "A finance management system that allows user to track expenses, set budgets and manage accounts securely. It also provides currency conversion via API, Investment planning tools and calculators for estimating returns. Developed using Java, Spring MVC and MySQL.",
    tags: ["HTML", "CSS", "JavaScript", "Java", "Spring MVC", "MySQL"],
    imageUrl: "/img/Enomy.png",
    demoUrl: "https://github.com/D34TH-SE/Enomy",
    repoUrl: "https://github.com/D34TH-SE/Enomy",
  },
  {
    id: 3,
    title: "Jumpstart",
    description: "An e-commerce fashion retail platform built in Jumpstart, featuring a responsive shopping experience, brand identity design and an integrated AI-powered chatbot for customer support. Technologies used include HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/img/Jumpstart.png",
    demoUrl: "https://github.com/D34TH-SE/CPL-Project",
    repoUrl: "https://github.com/D34TH-SE/CPL-Project",
  },
  {
    id: 4,
    title: "Meals on Wheels",
    description: "A food delivery platform that simplifies the ordering process with real-time delivery tracking and a user-friendly interface. Built using TypeScript, JavaScript, PHP, CSS and React for dynamic and scalable solution.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "React JS"],
    imageUrl: "/img/MealsOnWheels.png",
    demoUrl: "https://github.com/D34TH-SE/meals-on-wheels",
    repoUrl: "https://github.com/D34TH-SE/meals-on-wheels",
  },
];