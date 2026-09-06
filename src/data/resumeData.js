// ============================================================
//  Resume Placeholder Data
//  แก้ไขข้อมูลส่วนนี้เพื่อใส่ข้อมูลจริงของคุณ
// ============================================================

export const personalInfo = {
  name: 'Alex Naveen',
  title: 'Software Developer',
  roles: [
    'Software Developer',
    'Full Stack Engineer',
    'React Developer',
    'Node.js Engineer',
    'Problem Solver',
  ],
  tagline: 'Building elegant solutions to complex problems.',
  bio: `I'm a passionate software developer with 4+ years of experience building scalable web applications and APIs. I thrive at the intersection of clean code and great user experience — turning complex requirements into elegant, performant solutions.`,
  location: 'Bangkok, Thailand',
  email: 'alex.naveen@email.com',
  phone: '+66 81 234 5678',
  github: 'https://github.com/alexnaveen',
  linkedin: 'https://linkedin.com/in/alexnaveen',
  website: 'https://alexnaveen.dev',
  cvFile: '/alex-naveen-cv.pdf',
  availability: 'Open to opportunities',
};

export const experiences = [
  {
    id: 1,
    company: 'Tech Innovate Co., Ltd.',
    role: 'Senior Software Developer',
    period: 'Jan 2023 — Present',
    location: 'Bangkok, Thailand',
    type: 'Full-time',
    description: [
      'Led development of a microservices-based e-commerce platform serving 200K+ daily users',
      'Architected a real-time notification system using WebSockets and Redis Pub/Sub',
      'Mentored a team of 4 junior developers, improving code quality by 40%',
      'Reduced API response times by 60% through query optimization and caching strategies',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 2,
    company: 'Digital Solutions Agency',
    role: 'Full Stack Developer',
    period: 'Jun 2021 — Dec 2022',
    location: 'Bangkok, Thailand',
    type: 'Full-time',
    description: [
      'Built and maintained 10+ client web applications across fintech, retail, and healthcare sectors',
      'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 70%',
      'Developed RESTful APIs with Express.js and GraphQL endpoints for mobile clients',
      'Integrated third-party payment gateways (Stripe, Omise) into 3 production applications',
    ],
    stack: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'GraphQL', 'GitHub Actions'],
  },
  {
    id: 3,
    company: 'StartupXYZ',
    role: 'Frontend Developer',
    period: 'Mar 2020 — May 2021',
    location: 'Remote',
    type: 'Full-time',
    description: [
      'Developed responsive UI components using React and Material UI',
      'Collaborated with UX designers to implement pixel-perfect interfaces',
      'Improved web vitals scores (LCP, CLS, FID) by 45% through performance optimization',
    ],
    stack: ['React', 'JavaScript', 'SASS', 'Material UI', 'REST API'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'Chulalongkorn University',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    period: '2016 — 2020',
    gpa: '3.72 / 4.00',
    location: 'Bangkok, Thailand',
    highlights: [
      'First Class Honours',
      'Best Senior Project Award — AI-powered Recommendation System',
      'President of Computer Science Club',
    ],
  },
];

export const skills = {
  Frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'Vue.js', level: 75 },
    { name: 'CSS / SASS', level: 90 },
    { name: 'Framer Motion', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Webpack / Vite', level: 78 },
  ],
  Backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 88 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'MongoDB', level: 78 },
    { name: 'GraphQL', level: 75 },
    { name: 'Redis', level: 72 },
    { name: 'Python', level: 70 },
    { name: 'REST API Design', level: 92 },
  ],
  'Cloud & DevOps': [
    { name: 'AWS (EC2, S3, RDS)', level: 75 },
    { name: 'Docker', level: 80 },
    { name: 'GitHub Actions / CI-CD', level: 78 },
    { name: 'Linux', level: 72 },
    { name: 'Nginx', level: 68 },
  ],
  Tools: [
    { name: 'Git', level: 95 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 70 },
    { name: 'Postman', level: 88 },
    { name: 'Jira / Agile', level: 82 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'ShopFlow — E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Handles 200K+ daily active users with 99.9% uptime.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    github: 'https://github.com/alexnaveen/shopflow',
    demo: 'https://shopflow.demo.com',
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: 'DevMetrics — Engineering Dashboard',
    description:
      'Real-time engineering team performance dashboard aggregating data from GitHub, Jira, and CI/CD pipelines. Features custom alerting and ML-based anomaly detection.',
    stack: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB', 'Python', 'Docker'],
    github: 'https://github.com/alexnaveen/devmetrics',
    demo: 'https://devmetrics.demo.com',
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: 'ChatNest — Real-time Messaging App',
    description:
      'End-to-end encrypted messaging app supporting 1-on-1 and group chats, file sharing, and video calls using WebRTC.',
    stack: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'WebRTC'],
    github: 'https://github.com/alexnaveen/chatnest',
    demo: null,
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: 'AIRecipe — Smart Recipe Generator',
    description:
      'AI-powered app that generates personalized recipes based on dietary preferences and available ingredients using OpenAI GPT-4.',
    stack: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/alexnaveen/airecipe',
    demo: 'https://airecipe.vercel.app',
    image: null,
    featured: false,
  },
];

export const certifications = [
  {
    id: 1,
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: 'Nov 2023',
    credential: 'AWS-DEV-2023-XXXX',
    url: '#',
    icon: '☁️',
  },
  {
    id: 2,
    name: 'Meta React Developer Certificate',
    issuer: 'Meta (Coursera)',
    date: 'Mar 2023',
    credential: 'CERT-REACT-2023',
    url: '#',
    icon: '⚛️',
  },
  {
    id: 3,
    name: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    date: 'Aug 2022',
    credential: 'MDB-DEV-2022-XXXX',
    url: '#',
    icon: '🍃',
  },
  {
    id: 4,
    name: 'Docker Certified Associate',
    issuer: 'Docker, Inc.',
    date: 'Jan 2022',
    credential: 'DCA-2022-XXXX',
    url: '#',
    icon: '🐳',
  },
];

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Shipped' },
  { value: '10+', label: 'Happy Clients' },
  { value: '200K+', label: 'Users Reached' },
];
