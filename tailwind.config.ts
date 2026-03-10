import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-vif': '#f97316',
        midnight: '#0f172a',
        light: '#ffffff',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        orange: '0 12px 40px rgba(249, 115, 22, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
