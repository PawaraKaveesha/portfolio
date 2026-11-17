export interface Education {
  degree: string;
  field: string;
  institution: string;
  affiliation: string;
  status: string;
  period: string;
  location: string;
  description: string;
  coreModules: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: 'Completed' | 'In Progress' | 'Continuous Learning';
  statusBadge: string;
  dateOrPeriod: string;
  credentialUrl?: string; // Add credential URL when available
  credentialId?: string;  // Add verification ID when available
  description: string;
  skills: string[];
}

export const educationData: Education = {
  degree: 'BSc (Hons) Computer Networks',
  field: 'Computer Networks & Systems Engineering',
  institution: 'NSBM Green University',
  affiliation: 'Affiliated with University of Plymouth, United Kingdom',
  status: 'Final-Year Undergraduate',
  period: 'Final Year',
  location: 'Homagama, Sri Lanka',
  description:
    'Comprehensive curriculum spanning network architecture, routing protocols, cybersecurity principles, cryptography, network security automation, distributed systems, and modern software development.',
  coreModules: [
    'Network Routing & Switching',
    'Security Architectures & Cryptography',
    'Network Design & Infrastructure',
    'Linux System Administration',
    'Distributed Systems & Cloud Principles',
    'Final-Year Engineering Project',
  ],
};

export const certifications: Certification[] = [
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google (Coursera)',
    status: 'In Progress',
    statusBadge: 'In Progress',
    dateOrPeriod: 'Ongoing Studies',
    credentialUrl: '', // Add verification URL when completed
    description:
      'Rigorous industry-aligned curriculum covering SIEM tools, IDS/IPS, Python security automation, Linux command-line analysis, network packet inspection, and incident response frameworks.',
    skills: ['Cybersecurity', 'Python Automation', 'SIEM & Log Analysis', 'Network Packet Analysis'],
  },
  {
    id: 'networking-foundations',
    title: 'Computer Networking & Routing Fundamentals',
    issuer: 'Academic & Laboratory Curriculum',
    status: 'Completed',
    statusBadge: 'Academic Curriculum',
    dateOrPeriod: 'Undergraduate Program',
    credentialUrl: '',
    description:
      'In-depth practical laboratory configuration of Cisco routers, switches, IPv4/IPv6 subnetting, RIP/OSPF dynamic routing, VLAN segmentation, and ACL security policies.',
    skills: ['Cisco Packet Tracer', 'OSPF/RIP', 'VLANs', 'ACLs', 'Subnetting'],
  },
  {
    id: 'google-genai',
    title: 'Google Generative AI Learning Path',
    issuer: 'Google Cloud Skills Boost',
    status: 'In Progress',
    statusBadge: 'In Progress',
    dateOrPeriod: 'Self-Paced Exploration',
    credentialUrl: '',
    description:
      'Exploration of Large Language Models (LLMs), prompt engineering fundamentals, responsible AI principles, and integration of AI APIs into modern software applications.',
    skills: ['Generative AI', 'LLM Architectures', 'Prompt Engineering', 'API Integration'],
  },
  {
    id: 'ethical-hacking-fundamentals',
    title: 'Cybersecurity & Ethical Hacking Practical Training',
    issuer: 'Independent & Module Labs',
    status: 'Continuous Learning',
    statusBadge: 'Hands-on Labs',
    dateOrPeriod: 'Active Practice',
    credentialUrl: '',
    description:
      'Hands-on vulnerability scanning using Nmap and OpenVAS/Greenbone, Wireshark traffic inspection, and implementation of defense-in-depth principles on virtualized test networks.',
    skills: ['Nmap', 'Wireshark', 'Vulnerability Assessment', 'Linux Security'],
  },
];
