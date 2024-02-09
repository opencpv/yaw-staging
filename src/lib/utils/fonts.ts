import { Inter, Open_Sans } from "next/font/google";
import Open_Sans_Local from "next/font/local";
import Montserrat_Local from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans-remote",
});

export const openSansLocal = Open_Sans_Local({
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
});

export const montserratLocal = Montserrat_Local({
  src: [
    {
      path: "../../../public/fonts/montserrat/Montserrat-VariableFont_wght.ttf",
    },
    {
      path: "../../../public/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});
