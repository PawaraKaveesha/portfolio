export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string; // Editable timeframe
  type: 'Media Production' | 'IT Support' | 'Web Engineering' | 'Entrepreneurship';
  accent: 'blue' | 'orange' | 'cyan';
  summary: string;
  highlights: string[];
  skills: string[];
  link?: string;
  linkLabel?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'channel-19',
    role: 'Media Production & Content Specialist',
    organization: 'Channel 19',
    location: 'Sri Lanka',
    period: 'Practical Engagement',
    type: 'Media Production',
    accent: 'orange',
    summary:
      'Hands-on involvement in professional studio media production, post-production video editing, digital broadcasting pipelines, and audiovisual workflows.',
    highlights: [
      'Assembled and cut fast-turnaround video content for YouTube and digital distribution',
      'Assisted with timeline pacing, multicam syncing, and sound balance optimization',
      'Coordinated visual graphics and lower thirds matching broadcast style guidelines',
      'Gained practical familiarity with high-pressure digital media turnaround workflows',
    ],
    skills: ['Adobe Premiere Pro', 'Video Editing', 'Post-Production', 'Broadcasting Workflows'],
    link: 'https://www.youtube.com/@Channel19lk',
    linkLabel: 'View Channel 19',
  },
  {
    id: 'computerage',
    role: 'IT Technician',
    organization: 'Computerage (Pvt) Ltd',
    location: 'Kandy, Sri Lanka',
    period: 'Technical Support Experience',
    type: 'IT Support',
    accent: 'blue',
    summary:
      'Hands-on hardware troubleshooting, custom PC system assembly, component diagnostics, and technical client support at an established technology retail enterprise.',
    highlights: [
      'Diagnosed and resolved hardware malfunctions, component failures, and OS boot issues',
      'Assembled custom desktop rigs for professional computing, design workstations, and gaming',
      'Provided clear technical explanations and configuration guidance to end-users and clients',
      'Performed BIOS configurations, driver installations, and system health benchmarks',
    ],
    skills: ['Hardware Diagnostics', 'PC Assembly', 'System Troubleshooting', 'Client Support'],
    link: 'https://www.computerage.lk/',
    linkLabel: 'Visit Computerage',
  },
  {
    id: 'orenda-web',
    role: 'Full-Stack Web Developer',
    organization: 'Orenda Eco Lodge & Spa',
    location: 'Galle / Remote, Sri Lanka',
    period: 'Project Development',
    type: 'Web Engineering',
    accent: 'blue',
    summary:
      'Engineered and deployed a complete digital presence and reservation inquiry system for a luxury boutique resort in Galle.',
    highlights: [
      'Developed responsive user interface in React + Vite deployed statically on Cloudflare Pages',
      'Constructed modular Express.js backend on Render with PostgreSQL persistence',
      'Integrated secure JWT administrative auth and Cloudinary asset pipelines',
      'Configured CORS, rate limiting, and environmental variables across production tiers',
    ],
    skills: ['React', 'Express.js', 'PostgreSQL', 'Cloudflare Pages', 'Render'],
    link: 'https://orenda-final-prod.onrender.com/',
    linkLabel: 'Visit Live Resort Website',
  },
  {
    id: 'simpleclix',
    role: 'Founder & Initiative Lead',
    organization: 'Simpleclix',
    location: 'Sri Lanka',
    period: 'Initiative Lead',
    type: 'Entrepreneurship',
    accent: 'orange',
    summary:
      'Founded an entrepreneurial digital initiative delivering modern web development, performance optimization, and creative digital marketing for emerging brands.',
    highlights: [
      'Crafted custom performance-oriented websites leveraging Astro and modern CSS',
      'Collaborated directly with small business owners on digital branding and visibility',
      'Synthesized technical engineering with content strategy to drive meaningful online reach',
    ],
    skills: ['Astro', 'TypeScript', 'Digital Strategy', 'Client Collaboration'],
    link: 'https://github.com/PawaraKaveesha/Simpleclix',
    linkLabel: 'Simpleclix Repository',
  },
];
