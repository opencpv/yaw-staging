import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const { violet, blackA, mauve, green } = require("@radix-ui/colors");
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
        "my-search-bg": "url('/assets/images/my-search-bg.png')",
      },
      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
        modalOverlay: "#02020275",
        darkGreenBg: "#073B3A ",
        primary: {
          50: "#B0E3C9",
          100: "#21A19F",
          200: "#45808B",
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
          200: "#AD842A",
          400: "#F5C771",
        },
        warning: {
          400: "#FFB733",
        },
        shade: {
          200: "#8A8A8A",
          300: "#545454",
          50: "#E6E6E6",
        },
        success: {
          100: "#B0E3C9",
        },
        error: {
          50: "#FEF3F2",
        },
        // white: "#fff",
      },
      gridTemplateColumns: {
        "autofit-listing-card": "repeat(auto-fit, minmax(380px, 1fr))",
        "autofit-ad-card": "repeat(1, minmax(200px, 1fr))",
      },
      fontSize: {
        "20": "1.25rem",
        "25": "1.5625rem",
        "31": "1.9375rem",
        "39": "2.4375rem",
      },
    },
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
      hd: "1670px",
      fhd: "1920px",
      "2k": "2040px",
      "4k": "3840px",
      "3xl": "1728px",
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              DEFAULT: "#F1B346",
              foreground: "#FFFFFF",
            },
            primary: {
              DEFAULT: "#21A19F",
              foreground: "#FFFFFF",
            },
            focus: "#F1B346",
          },
        },
        dark: {
          colors: {
            default: {
              DEFAULT: "#F1B346",
              foreground: "#FFFFFF",
            },
            primary: {
              DEFAULT: "#21A19F",
              foreground: "#FFFFFF",
            },
            focus: "#F1B346",
          },
        },
      },
    }),
  ],
};
export default config;
