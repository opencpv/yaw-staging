import React from "react";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { FaChevronLeft } from "react-icons/fa6";

type Props = {
  className?: string;
};

const ButtonMenu = ({ className }: Props) => {
  const setToggle = useMenuStore((state) => state.setToggle);

  return (
    <div
      onClick={() => setToggle(true)}
      className={cn(
        "group mb-5 grid h-10 w-10 place-items-center rounded-full p-2 transition-all hover:scale-105 hover:bg-slate-50/70",
        className,
      )}
    >
      <FaChevronLeft className="text-white group-hover:text-neutral-600" />
    </div>
  );
};

export default ButtonMenu;
