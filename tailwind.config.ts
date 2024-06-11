import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Dark-fondo": "#2F122A",
        "Dark-title-session": "#D0907C",
        "Dark-project": "#5AAFD6",
        "Dark-text": "#E8E6E6",
        "Dark-fondo-clip": "#190917ee",
        "Dark-button": "#326EB0",
        "Light-fondo-clip": "#613621ee",
        "Light-Fondo": "#f0efed",
        "light-fondo-section": "#884B2D",
        "light-title": "#884B2D",
        "light-text": "#46474E",
        "sidebar": "#34102e",
        "border-neon": "#822a74"
      },
      spacing: {
        "width-image": "450px",
        "height-image": "270px",
      },
      screens: {
        "ss": "425px",
      },
      boxShadow: {
        "img-project": "6px 5px 15px 1px black",
        "img-project-inv": "-6px 5px 15px 1px black",
      },
      backgroundImage: {
        "Dark-Image": "url('/images/home/image-dark.jpg')",
        "Light-Image": "url('/images/home/image-light.jpg')",
        "fondo": "url('/images/fondo.svg')",
      },
      dropShadow: {
        "text-sombra": "1px 1px 2px rgb(0, 0, 0)",
        "Light-text-sombra": "1px 1px 1px rgb(0, 0, 0)",
        "dark-icon-neon": [
          "1px 1px 10px #822a74",
          "1px 1px 20px #822a74",
        ],
        "light-icon-neon": [
          "1px 1px 10px #884B2D",
          "1px 1px 20px #884B2D",
        ],
        "menu": [
          "-7px 5px 5px #000000",
          "-7px 5px 5px #000000",
          "-7px 5px 5px #000000",
        ],
        "title-shadow": ["6px 6px 4px #000", "6px 6px 4px #000"],

      },
    },
  },
  plugins: [],
};
export default config;
