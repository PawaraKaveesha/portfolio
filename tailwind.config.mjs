/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#080B12',
          surface: '#101522',
          card: '#131A29',
          elevated: '#182236',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(66, 133, 255, 0.3)',
          text: '#F5F7FA',
          muted: '#929BAD',
          blue: '#4285FF',
          'blue-glow': '#4285FF',
          orange: '#FF8A35',
          'orange-glow': '#FF8A35',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(66, 133, 255, 0.35)',
        'glow-orange': '0 0 25px -5px rgba(255, 138, 53, 0.35)',
        'glow-combined': '0 0 35px -8px rgba(66, 133, 255, 0.25), 0 0 35px -8px rgba(255, 138, 53, 0.25)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
