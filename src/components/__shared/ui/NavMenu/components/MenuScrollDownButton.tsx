import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

type Props = {
  isInViewport: boolean;
  hide: boolean;
  onClick: () => void;
  className?: string;
};

const MenuScrollDownButton = (props: Props) => {
  return (
    <div
      className={cn(
        "hidden bottom-5 text-accent-100 cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1 lg:block",
        props.className
      )}
      onClick={props.onClick}
      style={{
        visibility: props.hide || props.isInViewport ? "hidden" : "visible",
      }}
    >
      <FaChevronDown className="text-3xl shrink-0" />
    </div>
  );
};

export default MenuScrollDownButton;
