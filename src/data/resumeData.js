// ============================================================
//  Resume Data — Nattasit Janwiset
// ============================================================

export const personalInfo = {
  name: 'Nattasit Janwiset',
  title: 'Software Developer',
  roles: [
    'Software Developer',
    'Backend Engineer',
    '.NET & C# Developer',
    'PHP (Laravel) Developer',
    'Cloud & AI Solutions',
  ],
  tagline: '5+ years building secure, high-concurrency enterprise backends & automated workflows.',
  bio: 'Software Developer with 5+ years of experience in advanced troubleshooting and complex system logic. Proven background in managing environments with Docker/WSL, automated backups, and enterprise reporting. Dedicated to delivering reliable solutions using Cloud and AI.',
  location: 'Bangkok, Thailand',
  email: 'nattasit.work@gmail.com',
  phone: '',
  github: '',
  linkedin: '',
  website: 'https://cv.nprojectx.com',
  cvFile: '/nattasit-janwiset-cv.pdf',
  availability: 'Open to Opportunities',
  languages: [
    { name: 'Thai', level: 'Native (เจ้าของภาษา)' },
    { name: 'English', level: 'Basic (ระดับพื้นฐาน)' },
  ],
};

export const experiences = [
  {
    id: 1,
    company: 'Bangkok Expressway and Metro PCL',
    role: 'Software Developer',
    period: '2023 — Present',
    location: 'Bangkok, Thailand',
    type: 'Full-time',
    description: [
      'Developed secure, standardized public APIs with end-to-end encryption for external partner integrations.',
      'Built an end-to-end dispatch web app for couriers, streamlining workflows from job assignment to proof-of-delivery (e-POD) sign-off.',
      'Engineered automated CI/CD pipelines and applied OWASP standards to detect and patch system vulnerabilities.',
      'Designed scalable backend architectures optimized for high-concurrency workloads and large active user bases.',
      'Executed secure database migrations across servers, ensuring zero data loss and minimal system downtime.',
      'Automated enterprise workflows using n8n, substantially reducing manual processing time and boosting team efficiency.',
    ],
    stack: [
      'C#',
      '.NET Core',
      'PHP (Laravel)',
      'Docker',
      'GitLab CI/CD',
      'OWASP',
      'n8n',
      'SQL Server',
      'Database Migration',
    ],
  },
  {
    id: 2,
    company: '101 GLOBAL Co., Ltd.',
    role: 'PHP Developer',
    period: '2021 — 2023',
    location: 'Bangkok, Thailand',
    type: 'Full-time',
    description: [
      'Developed core modules for the OTOP Big Data web platform using PHP and MySQL, including secure user authentication, dynamic training content, and administrative summary reporting.',
      'Conducted hands-on technical training sessions for district officers across Thailand to drive seamless nationwide system adoption.',
      'Built a web-based loan risk assessment system for Government Savings Bank (GSB) with PHP and Oracle, enabling multi-factor risk calculations and custom reporting outputs.',
    ],
    stack: [
      'PHP',
      'Laravel',
      'MySQL',
      'Oracle',
      'Crystal Reports',
      'Jasper Report',
      'Apache',
    ],
  },
];

export const education = [
  {
    id: 1,
    institution: 'Chandrakasem Rajabhat University',
    degree: "Bachelor of Science",
    field: 'Computer Science',
    period: '2017 — 2021',
    location: 'Bangkok, Thailand',
    highlights: [
      'Bachelor of Science in Computer Science',
      'Strong foundation in software engineering, complex system logic, and database architecture',
    ],
  },
];

export const skills = {
  'Frameworks & Languages': [
    { name: 'PHP (Laravel)', level: 95 },
    { name: 'C# (.NET Core / Framework)', level: 92 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML / CSS', level: 90 },
    { name: 'SQL', level: 95 },
  ],
  'Databases': [
    { name: 'SQL Server', level: 92 },
    { name: 'MySQL', level: 90 },
    { name: 'Oracle', level: 88 },
  ],
  'DevOps & Tools': [
    { name: 'Docker', level: 88 },
    { name: 'Git (GitLab)', level: 90 },
    { name: 'CI/CD Pipelines', level: 88 },
    { name: 'Docker / WSL', level: 86 },
    { name: 'Linux', level: 82 },
  ],
  'Data & Automation': [
    { name: 'Database Migration', level: 95 },
    { name: 'n8n Workflow Automation', level: 92 },
    { name: 'Automated Backups', level: 90 },
    { name: 'Public API Integrations', level: 94 },
  ],
  'Reporting': [
    { name: 'Crystal Reports', level: 92 },
    { name: 'Jasper Report', level: 90 },
    { name: 'Summary & Audit Reporting', level: 88 },
  ],
  'Core Competencies': [
    { name: 'Advanced Debugging', level: 96 },
    { name: 'Problem-Solving', level: 95 },
    { name: 'OWASP Security Standards', level: 92 },
    { name: 'End-to-End Encryption', level: 90 },
    { name: 'High-Concurrency Systems', level: 92 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Courier Dispatch & e-POD Web Platform',
    description:
      'Built an end-to-end courier dispatch web app for Bangkok Expressway and Metro PCL, streamlining logistics workflows from real-time job assignments to electronic proof-of-delivery (e-POD) sign-off.',
    stack: ['C#', '.NET Core', 'SQL Server', 'Docker', 'Web APIs', 'e-POD'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'GSB Loan Risk Assessment System',
    description:
      'Engineered a web-based loan risk evaluation platform for Government Savings Bank (GSB) with PHP and Oracle, powering multi-factor risk calculations and custom analytical reporting.',
    stack: ['PHP', 'Oracle', 'Crystal Reports', 'Jasper Report', 'Laravel'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'OTOP Big Data Platform Core Modules',
    description:
      'Developed core architecture for Thailand nationwide OTOP Big Data web platform, featuring secure authentication, dynamic curriculum delivery, and executive summary reports.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Apache', 'Reporting'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: 'BEM Public APIs & Integration Engine',
    description:
      'Designed high-concurrency public APIs with end-to-end encryption for external partner integrations, automated CI/CD pipelines, and OWASP security vulnerability remediation.',
    stack: ['C#', '.NET', 'OWASP', 'GitLab CI', 'Docker', 'Encryption'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Enterprise Workflow Automation via n8n',
    description:
      'Orchestrated automated enterprise business workflows utilizing n8n, eliminating manual data processing bottlenecks and dramatically accelerating cross-team operational efficiency.',
    stack: ['n8n', 'API Webhooks', 'Docker', 'Automated Backups', 'Workflow CI'],
    github: null,
    demo: null,
    featured: false,
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Advanced AI Engineering for IT & Developer Teams',
    issuer: 'IRIS Consulting',
    date: '2026',
    credential: 'IRIS-AI-ENG-2026',
    url: '#',
    logo: '/iris-logo.png',
  },
  {
    id: 2,
    name: 'Architecting on AWS',
    issuer: 'ERT Training Center',
    date: '2026',
    credential: 'ERT-AWS-ARCH-2026',
    url: '#',
    logo: '/ert-logo.png',
  },
];

export const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '2', label: 'Enterprise Organizations' },
  { value: '100%', label: 'Zero-Loss DB Migration' },
  { value: '24/7', label: 'High-Concurrency Scale' },
];
