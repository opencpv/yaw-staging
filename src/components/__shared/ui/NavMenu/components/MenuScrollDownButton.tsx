import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "../../button";

type Props = {
  isInViewport: boolean;
  hide: boolean;
  onClick: () => void;
  className?: string;
};

const MenuScrollDownButton = (props: Props) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "bottom-5 hidden text-accent-100 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02] lg:block",
        props.className,
      )}
      onClick={props.onClick}
      style={{
        visibility: props.hide || props.isInViewport ? "hidden" : "visible",
      }}
    >
      <FaChevronDown className="shrink-0 text-3xl" />
    </Button>
  );
};

export default MenuScrollDownButton;
