import { Montserrat, Open_Sans } from "next/font/google";

// define your variable fonts
const montserat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export { montserat, openSans };
