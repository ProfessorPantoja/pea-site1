import defaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#faf5fa',
        surface: '#f0eff2',
        'surface-low': '#f7f3f7',
        card: '#ffffff',
        ink: '#2f2d31',
        'ink-soft': '#645d68',
        rose: '#b35465',
        'rose-deep': '#8f3f4d',
        'rose-soft': '#eb8599',
        sky: '#4e9ede',
        'sky-soft': '#5dbdf0',
        mist: '#d9d2dd',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        body: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(47, 45, 49, 0.08)',
        glow: '0 18px 50px rgba(179, 84, 101, 0.22)',
      },
      backgroundImage: {
        'hero-aura':
          'radial-gradient(circle at top left, rgba(235, 133, 153, 0.22), transparent 32%), radial-gradient(circle at 80% 10%, rgba(93, 189, 240, 0.2), transparent 28%), linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(245, 239, 245, 0.92))',
        'section-aura':
          'radial-gradient(circle at top right, rgba(179, 84, 101, 0.1), transparent 24%), radial-gradient(circle at bottom left, rgba(93, 189, 240, 0.12), transparent 26%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.92)', opacity: '0.22' },
          '70%': { transform: 'scale(1.08)', opacity: '0' },
          '100%': { transform: 'scale(1.12)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'pulse-ring': 'pulseRing 3s ease-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
