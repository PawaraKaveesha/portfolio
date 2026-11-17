export type SkillStatus = 'practical' | 'learning';

export interface SkillItem {
  name: string;
  status: SkillStatus;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: 'blue' | 'orange' | 'cyan';
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Development',
    description: 'Languages and client/server application frameworks used for software development and scripting.',
    icon: 'Code2',
    accent: 'blue',
    skills: [
      { name: 'Python', status: 'practical', highlight: true },
      { name: 'JavaScript', status: 'practical', highlight: true },
      { name: 'TypeScript', status: 'practical', highlight: true },
      { name: 'HTML5 & CSS3', status: 'practical' },
      { name: 'React', status: 'practical', highlight: true },
      { name: 'Java', status: 'practical' },
      { name: 'C#', status: 'practical' },
      { name: 'Flutter', status: 'learning' },
    ],
  },
  {
    id: 'networking',
    title: 'Computer Networks',
    description: 'Core network engineering foundations, protocols, configuration, and troubleshooting.',
    icon: 'Network',
    accent: 'blue',
    skills: [
      { name: 'TCP/IP Protocol Suite', status: 'practical', highlight: true },
      { name: 'OSI Reference Model', status: 'practical' },
      { name: 'Routing & Switching', status: 'practical', highlight: true },
      { name: 'VLANs & Subnetting', status: 'practical' },
      { name: 'Network Troubleshooting', status: 'practical' },
      { name: 'Cisco Networking', status: 'practical' },
      { name: 'Cisco Packet Tracer', status: 'practical' },
      { name: 'Linux Networking', status: 'learning', highlight: true },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Analysis',
    description: 'Security auditing tools, packet inspection, cryptographic assessment, and security automation.',
    icon: 'ShieldCheck',
    accent: 'blue',
    skills: [
      { name: 'Network Security', status: 'practical', highlight: true },
      { name: 'Ethical Hacking Fundamentals', status: 'practical' },
      { name: 'Nmap Port Scanning', status: 'practical', highlight: true },
      { name: 'Wireshark Packet Analysis', status: 'practical', highlight: true },
      { name: 'OpenVAS / Greenbone', status: 'learning' },
      { name: 'Linux Security Utilities', status: 'practical' },
      { name: 'Security Automation', status: 'learning', highlight: true },
    ],
  },
  {
    id: 'devops-tools',
    title: 'DevOps & Infrastructure Tools',
    description: 'Version control, system administration, and deployment platforms.',
    icon: 'Terminal',
    accent: 'cyan',
    skills: [
      { name: 'Git & GitHub Workflows', status: 'practical', highlight: true },
      { name: 'Linux / Ubuntu Environments', status: 'practical', highlight: true },
      { name: 'REST APIs & Integration', status: 'practical' },
      { name: 'Cloudflare Pages / DNS', status: 'practical' },
      { name: 'Docker Fundamentals', status: 'learning', highlight: true },
    ],
  },
  {
    id: 'backend-databases',
    title: 'Backend & Databases',
    description: 'Database engines, ORMs, and backend service development.',
    icon: 'Database',
    accent: 'cyan',
    skills: [
      { name: 'PostgreSQL', status: 'practical', highlight: true },
      { name: 'MySQL', status: 'practical' },
      { name: 'SQLite', status: 'practical' },
      { name: 'MongoDB', status: 'practical' },
      { name: 'Node.js / Express', status: 'practical', highlight: true },
      { name: 'Flask', status: 'learning' },
      { name: 'Spring Boot', status: 'learning' },
      { name: 'Firebase', status: 'learning' },
    ],
  },
  {
    id: 'creative-media',
    title: 'Creative Media & Direction',
    description: 'Industry-standard post-production, video editing, motion graphics, and visual design suites.',
    icon: 'Film',
    accent: 'orange',
    skills: [
      { name: 'Adobe Premiere Pro', status: 'practical', highlight: true },
      { name: 'Adobe Photoshop', status: 'practical', highlight: true },
      { name: 'DaVinci Resolve', status: 'practical', highlight: true },
      { name: 'Adobe After Effects', status: 'learning', highlight: true },
      { name: 'CapCut', status: 'practical' },
      { name: 'Canva', status: 'practical' },
      { name: 'CorelDRAW', status: 'practical' },
    ],
  },
];
