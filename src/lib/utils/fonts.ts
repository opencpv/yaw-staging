import { Inter, Open_Sans } from "next/font/google";
import Open_Sans_Local from "next/font/local";
import Montserrat_Local from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const openSans = Open_Sans({ subsets: ["latin"] });

export const openSansLocal = Open_Sans_Local({
  // src: [
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-Light.ttf",
  //         weight: "300",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-Lightitalic.ttf",
  //         weight: "300",
  //         style: "italic",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-Regular.ttf",
  //         weight: "400",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-Italic.ttf",
  //         weight: "400",
  //         style: "italic",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-Medium.ttf",
  //         weight: "500",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-MediumItalic.ttf",
  //         weight: "500",
  //         style: "italic",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-SemiBold.ttf",
  //         weight: "600",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-SemiBoldItalic.ttf",
  //         weight: "600",
  //         style: "italic",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-Bold.ttf",
  //         weight: "700",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-BoldItalic.ttf",
  //         weight: "700",
  //         style: "italic",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-ExtraBold.ttf",
  //         weight: "800",
  //     },
  //     {
  //         path: "../../../public/fonts/open_sans/OpenSans-ExtraBoldItalic.ttf",
  //         weight: "800",
  //         style: "italic",
  //     },
  // ],
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
