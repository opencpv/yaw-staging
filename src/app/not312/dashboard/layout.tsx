import clsx from "clsx";
import Providers from "@/context/Providers";
import Sidebar from "../components/_shared/SideNave";
import "../../globals.css";
import { montserratLocal } from "@/lib/utils/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Sidebar />
      <section className=" h-[100vh] w-[80vw] overflow-y-clip">
        {children}
      </section>
    </main>
  );
}
