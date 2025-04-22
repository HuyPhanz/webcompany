import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,ts}' // Ensure Tailwind scans your Angular templates
  ],
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: []
};

export default config;
