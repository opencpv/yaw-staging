import clsx from "clsx";
import Providers from "@/context/Providers";
import Sidebar from "../components/_shared/SideNave";
import "../../globals.css";
import { montserratLocal } from "@/lib/utils/fonts";
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Sidebar />
      <section className=" min-h-screen w-[80vw] p-8">{children}</section>
    </main>
  );
}
