import { cn } from "@nextui-org/system";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  link: string;
  active: boolean;
}
const NavButton = ({ active = false, icon, text, link }: Props) => {
  return (
    <Link href={link}>
      <button
        className={cn(
          "itemns-center flex w-full gap-4 rounded-xl p-4 font-bold shadow-md transition-all duration-200 hover:bg-slate-900 hover:text-white",
          `${active ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`,
        )}
      >
        {icon}
        <p>{text}</p>
      </button>
    </Link>
  );
};

export default NavButton;
