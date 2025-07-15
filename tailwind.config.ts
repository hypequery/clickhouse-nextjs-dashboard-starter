import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/shadcn-ui/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5',   // indigo-600
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
        },
        kpi: {
          DEFAULT: '#10b981', // emerald-500
        },
        chart: {
          DEFAULT: '#f59e42', // orange-400
        },
        code: {
          DEFAULT: '#334155', // slate-700
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config; 