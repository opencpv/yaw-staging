import React from "react";
import {
  Tooltip as NextUITooltip,
  Popover,
  PopoverContent,
  PopoverTrigger,
  cn,
} from "@nextui-org/react";

type Props = {
  content: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: any) => void;
};

const Tooltip = ({ children, content, className, onClick }: Props) => {
  return (
    <>
      <div className="hidden md:block" onClick={onClick}>
        <NextUITooltip
          classNames={{
            base: [
              cn(
                "z-[30] bg-[#fefefe] cursor-pointer p-5 rounded-full",
                className,
              ),
            ],
          }}
          content={content}
          closeDelay={200}
        >
          <button>{children}</button>
        </NextUITooltip>
      </div>

      <div className="md:hidden" onClick={onClick}>
        <Popover style={{ zIndex: "30" }} placement="top">
          <PopoverTrigger className="h-fit w-fit">
            <button className="h-fit w-fit">{children}</button>
          </PopoverTrigger>
          <PopoverContent
            className={cn(
              "cursor-pointer rounded-full bg-[#fefefe] p-5",
              className,
            )}
          >
            {content}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Tooltip;
