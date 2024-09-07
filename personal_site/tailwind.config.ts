import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2003FA',
        background: '#FFFFFF',
        accent: '#FF8229',
        text: '#000000',
        dark: '#1E3231',

        navbar: {
          bg: '#FFFFFF',
          indicator: '#2003FA',
          sidebarbg: '#FFFFFF'
        },

        logobg: '#2003FA',
        logofg: '#FFFFFF',

        footer: {
          bg: '#1E3231',
          text: '#FFFFFF',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
