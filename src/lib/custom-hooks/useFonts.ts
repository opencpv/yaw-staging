import { Inter, Open_Sans } from "next/font/google";

export const useFonts = () => {
  const openSans = Open_Sans({
    weight: "400" || "600",
    subsets: ["latin"],
    variable: "--font-open-sans",
  });

  return { openSans };
};
