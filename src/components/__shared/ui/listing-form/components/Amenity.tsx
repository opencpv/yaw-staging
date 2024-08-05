import React from "react";
import { cn } from "@/lib/utils";

type AmenityProp = {
  icon: any;
  name: string;
  n?: string | any;
  selected: boolean;
  className?: string;
  onClick: () => void;
};

const Amenity = ({
  icon,
  name,
  n = 2,
  selected,
  className,
  onClick,
}: AmenityProp) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `fade-in-left flex aspect-video w-full max-w-xs cursor-pointer flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 text-center text-[1rem] !transition-transform hover:!scale-[1.05] hover:bg-slate-200 lg:py-0 lg:text-[1.125rem]`,
        {
          "border border-[#a3a3a3]": selected,
        },
        className,
      )}
      style={{
        boxShadow: selected
          ? "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          : undefined,
        animationDelay: n * 0.1 + "s",
      }}
    >
      {icon}
      {name}
    </button>
  );
};

export default Amenity;
