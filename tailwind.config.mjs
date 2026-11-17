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
          cyan: '#00D4FF',
          emerald: '#10B981',
          amber: '#F59E0B',
          purple: '#A855F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(66, 133, 255, 0.4)',
        'glow-blue-lg': '0 0 45px -8px rgba(66, 133, 255, 0.5)',
        'glow-orange': '0 0 25px -5px rgba(255, 138, 53, 0.4)',
        'glow-orange-lg': '0 0 45px -8px rgba(255, 138, 53, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(0, 212, 255, 0.4)',
        'glow-combined': '0 0 35px -8px rgba(66, 133, 255, 0.25), 0 0 35px -8px rgba(255, 138, 53, 0.25)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.07)',
        'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'mockup-depth': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(66, 133, 255, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'beacon': 'beacon 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        beacon: {
          '0%': { transform: 'scale(1)', opacity: '0.9' },
          '75%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
