export type ProjectCategory = 
  | 'All'
  | 'Cybersecurity'
  | 'Web Development'
  | 'Software Engineering'
  | 'Python Development'
  | 'Digital Solutions';

export type ProjectStatus = 'In Progress' | 'Production' | 'Academic' | 'Prototype' | 'Research';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  statusBadge: string;
  featured: boolean;
  accent: 'blue' | 'orange' | 'cyan';
  shortDescription: string;
  fullOverview: string;
  keyFeatures: string[];
  technologies: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'network-security-automation',
    name: 'Network Security Automation Platform',
    subtitle: 'Final-Year Academic Engineering Project',
    category: 'Cybersecurity',
    status: 'In Progress',
    statusBadge: 'Under Development',
    featured: true,
    accent: 'blue',
    shortDescription:
      'Approved final-year academic project developing a modular software prototype to automate routine network security assessments, vulnerability scans, and actionable security reporting.',
    fullOverview:
      'This project represents my core final-year academic work for the BSc (Hons) Computer Networks degree at NSBM / University of Plymouth. The goal is to develop a working prototype that assists network administrators and security analysts by automating repetitive security assessment workflows. It systematically queries target endpoints, checks protocol configurations, and produces structured security insights to mitigate configuration oversights. Development is actively ongoing.',
    keyFeatures: [
      'Automated routine security checks for subnet endpoints',
      'Integration with security auditing utilities and python socket scanners',
      'Actionable reporting format highlighting discovered network exposures',
      'Modular Python architecture designed for expandable check modules',
    ],
    technologies: ['Python', 'Network Security', 'Linux Networking', 'Socket API', 'Nmap Scripting', 'Bash'],
    role: 'Lead Researcher & Developer (Final-Year Academic Project)',
    image: '/images/projects/security-automation.svg',
  },
  {
    id: 'orenda-villa',
    name: 'Orenda Villa Resort Web Platform',
    subtitle: 'Full-Stack Hospitality Management Application',
    category: 'Web Development',
    status: 'Production',
    statusBadge: 'Deployed Live',
    featured: true,
    accent: 'orange',
    shortDescription:
      'Production-grade full-stack web platform for Orenda Eco Lodge & Spa in Galle, featuring room showcases, direct inquiry workflows, and secure administrative controls.',
    fullOverview:
      'A complete custom-engineered web solution designed and deployed for Orenda Eco Lodge & Spa. The system comprises a responsive React + Vite frontend served over Cloudflare Pages, paired with an Express.js REST API on Render backed by a managed PostgreSQL/Neon database. Implemented secure JWT-based admin authentication, bcrypt password hashing, CORS protection, Winston logging, and Cloudinary image handling for villa assets.',
    keyFeatures: [
      'Interactive villa, room suites, and amenities showcase with dynamic gallery',
      'Direct guest inquiry processing endpoint with server-side validation',
      'JWT-authenticated admin dashboard for managing site content and guest inquiries',
      'Hardened Express backend with Helmet security headers and rate limiting',
    ],
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Cloudflare Pages', 'Render', 'JWT'],
    role: 'Full-Stack Developer (Design, Backend API, Frontend & Deployment)',
    githubUrl: 'https://github.com/PawaraKaveesha/Orenda_final_prod',
    liveUrl: 'https://orenda-final-prod.onrender.com/',
    image: '/images/projects/orenda-villa.svg',
  },
  {
    id: 'hashing-technology-analysis',
    name: 'Cryptography Login & Hash Evaluation',
    subtitle: 'Security Architectures & Cryptographic Research',
    category: 'Cybersecurity',
    status: 'Academic',
    statusBadge: 'Academic Research',
    featured: true,
    accent: 'blue',
    shortDescription:
      'Practical evaluation of cryptographic hash algorithms (SHA-256 with salt), examining collision resistance, execution performance, and secure password storage architectures.',
    fullOverview:
      'Developed as part of the Security Architectures & Cryptography module. The project couples experimental cryptographic evaluation with a functional implementation. Features a Python and SQLite backend demonstration alongside a full-stack React and Express login architecture that securely validates credentials using salted SHA-256 hashing. Accompanied by a detailed security analysis documenting hashing mechanics, salt entropy, and defensive design against rainbow table attacks.',
    keyFeatures: [
      'Comparative evaluation of cryptographic hash algorithms and salt entropy',
      'Python SQLite implementation demonstrating salted hash verification',
      'Full-stack React & Express login architecture with secure credential exchange',
      'Comprehensive security report on modern authentication security practices',
    ],
    technologies: ['Python', 'Cryptography', 'SHA-256', 'SQLite', 'Node.js', 'React', 'Security Auditing'],
    role: 'Researcher & Developer (Academic Cryptography Module)',
    githubUrl: 'https://github.com/PawaraKaveesha/Hashing_technology_analysis',
    image: '/images/projects/hashing-analysis.svg',
  },
  {
    id: 'teamflow',
    name: 'Teamflow — Student Task Collaboration',
    subtitle: 'TypeScript Collaborative Task Management',
    category: 'Software Engineering',
    status: 'Prototype',
    statusBadge: 'Repository Prototype',
    featured: false,
    accent: 'blue',
    shortDescription:
      'Interactive team task collaboration and project management tool created for students to organize coursework deliverables and team milestones.',
    fullOverview:
      'Teamflow is a clean, modern task management tool engineered specifically for student team collaboration. Built with TypeScript and React, the interface emphasizes intuitive task boards, state tracking, and team responsibility assignment without unnecessary enterprise complexity.',
    keyFeatures: [
      'Type-safe application architecture using TypeScript',
      'Kanban-style task organization for project milestones',
      'Clean modern interface optimized for desktop and mobile devices',
    ],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'State Management'],
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/PawaraKaveesha/Teamflow',
    image: '/images/projects/teamflow.svg',
  },
  {
    id: 'simpleclix',
    name: 'Simpleclix Digital Platform',
    subtitle: 'Digital Solutions & Web Initiatives',
    category: 'Digital Solutions',
    status: 'Production',
    statusBadge: 'Digital Initiative',
    featured: true,
    accent: 'orange',
    shortDescription:
      'Digital solutions initiative exploring modern web development, business digital transformation, and content strategy for emerging brands.',
    fullOverview:
      'Simpleclix is a digital solutions and web development initiative founded to bridge technical execution with online branding. Focused on crafting responsive, high-performance web presences using Astro and modern web standards while assisting small businesses with practical digital marketing strategy and creative collaboration.',
    keyFeatures: [
      'Modern, performance-focused web development utilizing Astro framework',
      'Integrated digital strategy combining technical web performance with content',
      'Client-first delivery model tailored for emerging organizations',
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Digital Marketing', 'Creative Strategy'],
    role: 'Founder & Initiative Lead',
    githubUrl: 'https://github.com/PawaraKaveesha/Simpleclix',
    image: '/images/projects/simpleclix.svg',
  },
  {
    id: 'techie',
    name: 'Techie — Technical Support System',
    subtitle: 'PC Repair Management Application Concept',
    category: 'Software Engineering',
    status: 'Prototype',
    statusBadge: 'Desktop Concept',
    featured: false,
    accent: 'blue',
    shortDescription:
      'PC repair workflow and customer support tracking application concept designed for small-scale computer repair workshops and IT support centers.',
    fullOverview:
      'A software application concept conceived to streamline operations in computer repair shops and IT service desks. Explores ticketing, repair tracking, hardware diagnostic logs, and customer status updates using C# and Windows Forms with relational database integration.',
    keyFeatures: [
      'Repair ticket management and status progression tracking',
      'Hardware diagnostics recording and parts replacement logs',
      'Customer contact and equipment intake records',
    ],
    technologies: ['C#', '.NET', 'Windows Forms', 'Relational Databases', 'IT Support Workflows'],
    role: 'Software Developer',
    githubUrl: 'https://github.com/PawaraKaveesha/Techie',
    image: '/images/projects/techie.svg',
  },
  {
    id: 'password-strength-checker',
    name: 'Password Strength & Entropy Checker',
    subtitle: 'Python Security Utility',
    category: 'Python Development',
    status: 'Prototype',
    statusBadge: 'Python Utility',
    featured: false,
    accent: 'blue',
    shortDescription:
      'Lightweight Python security utility that evaluates password resilience against complexity heuristics, length standards, and character variety requirements.',
    fullOverview:
      'A focused Python security tool that parses user input against security rules (length, uppercase, lowercase, numbers, special characters) to evaluate password resistance against basic brute-force attacks and encourage stronger credential habits.',
    keyFeatures: [
      'Regex-based character set validation and length verification',
      'Immediate terminal feedback on password strength classification',
      'Educational feedback explaining missing security criteria',
    ],
    technologies: ['Python', 'Regular Expressions', 'Cybersecurity Fundamentals'],
    role: 'Developer',
    githubUrl: 'https://github.com/PawaraKaveesha/Password_strength_checker',
    image: '/images/projects/password-checker.svg',
  },
  {
    id: 'e-banking-system',
    name: 'E-Banking System Architecture',
    subtitle: 'Enterprise Banking Backend Exploration',
    category: 'Software Engineering',
    status: 'Academic',
    statusBadge: 'Architecture Exploration',
    featured: false,
    accent: 'blue',
    shortDescription:
      'Architectural software project exploring secure financial transactions, account management, and database persistence in enterprise Java.',
    fullOverview:
      'An academic exploration of enterprise banking architecture, examining secure account balances, transactional atomicity, and relational data modeling with Java, Spring Boot, Hibernate ORM, and PostgreSQL concepts.',
    keyFeatures: [
      'Multi-tiered enterprise service architecture design',
      'Transactional integrity principles and account schema design',
      'Relational persistence mapping for banking entities',
    ],
    technologies: ['Java', 'Spring Boot Concepts', 'Hibernate ORM', 'PostgreSQL', 'OOP'],
    role: 'Student Developer',
    githubUrl: 'https://github.com/PawaraKaveesha/e_banking_system',
    image: '/images/projects/ebanking.svg',
  },
];
