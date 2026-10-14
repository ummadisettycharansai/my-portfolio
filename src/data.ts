import type { Certification, Project, Experience, SkillCategory } from './types';

export const projects: Project[] = [
  {
    id: 'ai-cloud-cost',
    title: 'AI Cloud Cost Optimizer',
    description: 'AI-powered FinOps platform for real-time AWS EC2/S3 cost monitoring and policy-based alerts.',
    url: 'https://ai-cloud-cost-optimizer.vercel.app/',
    githubUrl: 'https://github.com/ummadisettycharansai/ai-cloud-cost-optimizer',
    tags: ['Python', 'FastAPI', 'React', 'Kafka', 'Docker', 'Kubernetes'],
    type: 'dev',
  },
  {
    id: 'blood-bank',
    title: 'Life Drop Online Blood Bank System',
    description: 'Blood-bank platform for donor registration, live blood-group search, inventory, and hospital requests, designed with role-based access for 100+ users.',
    githubUrl: 'https://github.com/ummadisettycharansai/blood-banking-app',
    tags: ['HTML', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    type: 'dev',
  },
  {
    id: 'mall-ecommerce',
    title: 'M-ALL E-Commerce Platform',
    description: 'Multi-vendor platform with product catalog management, vendor dashboards, and buyer checkout; reusable modules reduced frontend development time by 30%.',
    githubUrl: 'https://github.com/ummadisettycharansai/M-ALL-E-Commerce-Website',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma'],
    type: 'dev',
  },
  {
    id: 'hiver-support-agent',
    title: 'Hiver AI Support Agent',
    description: 'Reproducible AI support workflow that classifies customer intent, retrieves past resolutions, drafts grounded replies, and escalates risky cases to a human.',
    githubUrl: 'https://github.com/ummadisettycharansai/Hiver-Assignment',
    tags: ['Python', 'RAG', 'FAISS', 'LLMs', 'Evaluation'],
    type: 'dev',
  },
  {
    id: 'affordmed-backend-api',
    title: 'Affordmed Backend API',
    description: 'Go backend built with Gin and clean architecture, including authentication, validation, structured logging, and middleware.',
    githubUrl: 'https://github.com/ummadisettycharansai/2303031300047',
    tags: ['Go', 'Gin', 'REST API', 'Clean Architecture'],
    type: 'dev',
  },
  {
    id: 'employee-attendance-api',
    title: 'Employee Attendance & Analytics API',
    description: 'FastAPI service for attendance records and corrections, with MongoDB-backed analytics and API contract tests.',
    githubUrl: 'https://github.com/ummadisettycharansai/employee-attendance-api',
    tags: ['Python', 'FastAPI', 'MongoDB', 'Pytest'],
    type: 'dev',
  },
  {
    id: 'ecommerce-website',
    title: 'Full-Stack E-Commerce Website',
    description: 'Shopping platform with a React and Tailwind interface, product catalog, synchronized cart, admin dashboard, and PostgreSQL-backed Node.js services.',
    githubUrl: 'https://github.com/ummadisettycharansai/E-Commerce-Website',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT'],
    type: 'dev',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Static portfolio site configured for AWS S3 hosting and automated deployment through GitHub Actions.',
    githubUrl: 'https://github.com/ummadisettycharansai/portfolio',
    tags: ['HTML', 'AWS S3', 'GitHub Actions', 'CI/CD'],
    type: 'dev',
  },
  {
    id: 'blood-bank-demo',
    title: 'Online Blood Bank System Demo',
    description: 'A small demo repository identified as an online blood bank system; see the repository for its available details.',
    githubUrl: 'https://github.com/ummadisettycharansai/demo-repo',
    tags: ['Blood Bank', 'Demo'],
    type: 'dev',
  },
  {
    id: 'campus-event',
    title: 'Campus Event Booking App',
    description: 'End-to-end Figma prototype for a campus event discovery and booking experience with intuitive user flows.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    type: 'design',
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery App UI/UX Design',
    description: 'User-researched food-ordering prototype with interactive navigation, high-fidelity wireframes, and a responsive visual system inspired by South Indian cuisine.',
    tags: ['Figma', 'UI/UX', 'Design System'],
    type: 'design',
  },
];

export const experiences: Experience[] = [
  {
    company: 'SparkGenX Innovations Pvt. Ltd.',
    role: 'Full-Stack Developer (Internship)',
    description: 'Developed 3+ full-stack applications and AI-agent workflows, integrating Figma-designed interfaces, REST APIs, and AWS EC2/S3 deployments. Reduced recurring defects by 40% across 4+ Agile sprints through root-cause analysis, regression testing, and iterative QA.',
    period: 'Oct 2025 – Present',
    type: 'work',
  },
  {
    company: 'Unified Mentor',
    role: 'UI/UX Design Intern',
    description: 'Designed user-centred interfaces, built Figma prototypes, and contributed to design systems for real-world products.',
    period: 'Jun 2025 – Jul 2025',
    type: 'work',
  },
];

export const education: Experience[] = [
  {
    company: 'Parul University (PIET)',
    role: 'B.Tech, Computer Science Engineering (Cloud Computing)',
    description: 'Jan 2023 – Jun 2027 (Expected) · Vadodara, Gujarat, India',
    period: 'Jan 2023 – Jun 2027',
    type: 'education',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud-fullstack',
    label: 'CLOUD-NATIVE &',
    sublabel: 'FULL-STACK SYSTEMS',
    color: 'orange',
    icon: 'layers',
    skills: ['Python', 'Go', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Node.js', 'REST APIs', 'Microservices', 'SQL', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'cloud-tools',
    label: 'CLOUD, DEVOPS &',
    sublabel: 'UI/UX DESIGN',
    color: 'lime',
    icon: 'layout',
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS VPC', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Git', 'GitHub', 'Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
  },
];

export const allSkills = [
  'Python', 'Go', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
  'React', 'Node.js', 'REST APIs', 'Microservices',
  'SQL', 'PostgreSQL', 'MySQL',
  'AWS EC2', 'AWS S3', 'AWS IAM', 'AWS VPC',
  'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Git', 'GitHub',
  'Figma', 'Wireframing', 'Interactive Prototyping', 'Design Systems', 'User Research',
  'Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Agile/Scrum',
];

export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services · Training badge',
  },
  {
    name: 'Cloud Computing and Artificial Intelligence with AWS',
    issuer: 'Coursera / Amazon Web Services',
  },
  {
    name: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'AWS Academy · Training badge',
  },
];

export const socialLinks = {
  github: 'https://github.com/ummadisettycharansai',
  linkedin: 'https://www.linkedin.com/in/ummadisettycharansai',
  hackerrank: 'https://hackerrank.com/ummadisettycharansai',
};
