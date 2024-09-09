//import { Open_Sans } from "next/font/google";
//import { Pacifico } from "next/font/google";
import Open_Sans_Local from "next/font/local";
import Pacifico_Local from "next/font/local";

//export const openSans = Open_Sans({
//  subsets: ["latin"],
//  variable: "--font-open-sans",
//  display: "swap",
//  adjustFontFallback: false,
//});

//export const pacifico = Pacifico({
//  subsets: ["latin"],
//  variable: "--font-pacifico",
//  weight: "400",
//  preload: false,
//  display: "swap",
//  adjustFontFallback: false,
//});

export const openSans = Open_Sans_Local({
  src: [
    {
      path: "../../../public/fonts/open_sans/OpenSans-VariableFont_wdth,wght.ttf",
    },
    {
      path: "../../../public/fonts/open_sans/OpenSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-open-sans",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const pacifico = Pacifico_Local({
  src: [
    {
      path: "../../../public/fonts/pacifico/Pacifico-Regular.ttf",
    },
  ],
  variable: "--font-pacifico",
  display: "swap",
  weight: "400",
  adjustFontFallback: false,
  fallback: ["cursive"],
});
