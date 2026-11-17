export type MediaCategory =
  | 'All'
  | 'Video Production'
  | 'Content Creation'
  | 'Event Media'
  | 'Graphic Design'
  | 'Social Media'
  | 'Creative Direction';

export type MediaPlatform = 'YouTube' | 'TikTok' | 'Facebook' | 'Event' | 'Creative';

export interface MediaItem {
  id: string;
  title: string;
  channelOrProject: string;
  platform: MediaPlatform;
  category: MediaCategory;
  // EDITABLE CONTRIBUTION FIELD: Specify your exact role (e.g., Editor, Camera Operator, Content Creator, Production Team)
  contribution: string;
  description: string;
  link: string;
  thumbnail: string;
  videoId?: string; // YouTube video ID for modal preview if available
  featured?: boolean;
  tags: string[];
}

export const mediaItems: MediaItem[] = [
  {
    id: 'channel-19',
    title: 'Channel 19 — Media Production & Digital Broadcasts',
    channelOrProject: 'Channel 19 LK',
    platform: 'YouTube',
    category: 'Video Production',
    contribution: 'Video Editing & Production Team Member (Editable)',
    description:
      'Involvement in professional video editing, technical post-production, timeline pacing, audio mastering, and content assembly for Channel 19 digital broadcasts.',
    link: 'https://www.youtube.com/@Channel19lk',
    videoId: '13SHfgPhpr8',
    thumbnail: 'https://img.youtube.com/vi/13SHfgPhpr8/hqdefault.jpg',
    featured: true,
    tags: ['Video Editing', 'Premiere Pro', 'Post-Production', 'Broadcasting'],
  },
  {
    id: 'rundown-podcast',
    title: 'Rundown Podcast — Studio Discussion & Video Series',
    channelOrProject: 'Rundown Podcast',
    platform: 'YouTube',
    category: 'Content Creation',
    contribution: 'Post-Production Editor & Visual Layout (Editable)',
    description:
      'Long-form podcast post-production, multi-camera synchronization, graphic overlays, and visual packaging for dynamic YouTube conversational series.',
    link: 'https://www.youtube.com/channel/UCJEBTDn3yornnqi7ii0v6_Q',
    videoId: 'KIDcuAgbmZ8',
    thumbnail: 'https://img.youtube.com/vi/KIDcuAgbmZ8/hqdefault.jpg',
    featured: true,
    tags: ['Podcast Production', 'Multi-Cam Editing', 'Audio Sync', 'Motion Titles'],
  },
  {
    id: 'medan-methana',
    title: 'Me Dan Methana — Current Affairs & Media Reporting',
    channelOrProject: 'Me Dan Methana (මේ දැන් මෙතන)',
    platform: 'YouTube',
    category: 'Video Production',
    contribution: 'Video Editor & Digital Media Specialist (Editable)',
    description:
      'Rapid turnaround news reporting, on-location video assembly, b-roll sequencing, and subtitle integration for fast-paced current affairs coverage.',
    link: 'https://www.youtube.com/@medanmethana',
    videoId: '7NebAr0vjkc',
    thumbnail: 'https://img.youtube.com/vi/7NebAr0vjkc/hqdefault.jpg',
    featured: true,
    tags: ['News Production', 'Rapid Turnaround', 'Editorial Pacing', 'Color Grade'],
  },
  {
    id: 'medialk-talks',
    title: 'MediaLK Talks — In-Depth Interviews & Dialogues',
    channelOrProject: 'MediaLK Talks',
    platform: 'YouTube',
    category: 'Creative Direction',
    contribution: 'Editorial & Production Contributor (Editable)',
    description:
      'Production workflows for in-depth personality interviews, lighting setup assistance, narrative cutdowns, and social media promotional teasers.',
    link: 'https://www.youtube.com/channel/UCxE1rQZ4Kjb3u1S_aCpp6Uw',
    videoId: 'w7anl8AdeTE',
    thumbnail: 'https://img.youtube.com/vi/w7anl8AdeTE/hqdefault.jpg',
    featured: true,
    tags: ['Interview Format', 'Creative Direction', 'Audio Post', 'Social Teasers'],
  },
  {
    id: 'medialk-main',
    title: 'MediaLK Sri Lanka — Main Media Stream',
    channelOrProject: 'MediaLK',
    platform: 'YouTube',
    category: 'Content Creation',
    contribution: 'Content Assembly & Digital Workflow Contributor (Editable)',
    description:
      'Digital content production, thumbnail concept design, digital distribution pipelines, and visual branding alignment across video series.',
    link: 'https://www.youtube.com/@medialksrilanka',
    videoId: 'LpGEmXWTL6s',
    thumbnail: 'https://img.youtube.com/vi/LpGEmXWTL6s/hqdefault.jpg',
    featured: false,
    tags: ['Media Production', 'Thumbnail Design', 'Channel Packaging'],
  },
  {
    id: 'techhttp-lk',
    title: 'Tech HTTP LK — Tech Tutorials & Short-Form Insights',
    channelOrProject: 'Tech HTTP LK',
    platform: 'TikTok',
    category: 'Social Media',
    contribution: 'Creator & Editor (Editable)',
    description:
      'High-velocity short-form tech explainers, tips, and hardware insights optimized for mobile vertical consumption and high audience engagement.',
    link: 'https://www.tiktok.com/@techhttp_lk?lang=en',
    thumbnail: '/images/media/techhttp-thumb.svg',
    featured: true,
    tags: ['Short-Form Video', 'Tech Education', 'Vertical 9:16', 'TikTok Creator'],
  },
  {
    id: 'live-and-let-live',
    title: 'Live and Let Live Foundation — Community Outreach Media',
    channelOrProject: 'Live and Let Live Foundation',
    platform: 'Facebook',
    category: 'Event Media',
    contribution: 'Media Coverage & Creative Contributor (Editable)',
    description:
      'Visual documentation, social graphic designs, and community impact video edits capturing foundation initiatives and charity outreach.',
    link: 'https://www.facebook.com/liveandletlivefoundation',
    thumbnail: '/images/media/live-and-let-live-thumb.svg',
    featured: false,
    tags: ['Community Media', 'Social Documentation', 'Event Storytelling'],
  },
  {
    id: 'gihan-mangala-medura',
    title: 'Gihan Mangala Medura — Brand Media Showcase',
    channelOrProject: 'Gihan Mangala Medura',
    platform: 'Facebook',
    category: 'Graphic Design',
    contribution: 'Visual Branding & Social Media Content Contributor (Editable)',
    description:
      'Promotional artwork, commercial visual assets, photo retouching, and branded social media campaign collateral.',
    link: 'https://www.facebook.com/gihanmangalamedura.lk',
    thumbnail: '/images/media/gihan-mangala-thumb.svg',
    featured: false,
    tags: ['Brand Graphics', 'Social Media Campaign', 'Photoshop Design'],
  },
];
