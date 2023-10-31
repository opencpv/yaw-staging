import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "plane-pattern": "url('/assets/images/13783 1.png')",
        "terms-bg": "url('/assets/images/terms-bg.png')",
        "about-bg": "url('/assets/images/about-bg.png')",
      },
      colors: {
        darkGreenBg: "#073B3A ",
        primary: {
          300: "#E6F6EE",
          400: "#396261",
          500: "#073B3A",
          600: "#063635",
          700: "#131B1A",
          800: "#0B6E4F",
          900: "#273A2F",
        },
        secondary: {
          50: "#F1F1F1",
          200: "#FAFBFB",
          300: "#DFE7E7",
        },
        accent: {
          50: "#DDB771",
          100: "#F1B346",
        },
        warning:{
          400: "#FFB733"
        },
        white: "#fff",
      },
      gridTemplateColumns: {
        "autofit-listing-card": "repeat(auto-fit, minmax(380px, 1fr))",
      },
    },
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
      hd: "1670px",
      fhd: "1920px",
      "2k": "2040px",
      "4k": "3840px",
    },
  },
  plugins: [nextui()],
};
export default config;
