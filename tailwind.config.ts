import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-infinite": "infiniteRotate 6s linear infinite",
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        infiniteRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(359.9deg)" },
        },
      },
      fontFamily: {
        georgia: ["Georgia", "serif"],
        brand: ["Brand", "sans-serif"],
        kingstone: ["Kingstone", "sans-serif"],
        "gill-sans": ["Gill Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-illustration": "url('/images/background-illustration.svg')",
        "header-background": "url('/images/background.jpg')",
        "header-background-mobile": "url('/images/header-bg-mobile.jpg')",
      },
      colors: {
        "custom-light": "#F9F9F9",
        "custom-dark": "#232323",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
