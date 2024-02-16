import React from "react";
import {
  Tooltip as NextUITooltip,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

type Props = {
  content: string;
  children: React.ReactNode;
};

const Tooltip = ({ children, content }: Props) => {
  return (
    <>
      <div className="hidden md:block">
        <NextUITooltip
          classNames={{ base: "z-[30] bg-[#fefefe] p-5 rounded-full" }}
          content={content}
          closeDelay={200}
        >
          <button>{children}</button>
        </NextUITooltip>
      </div>

      <div className="md:hidden">
        <Popover style={{ zIndex: "30" }} placement="top">
          <PopoverTrigger className="h-fit w-fit">
            <button className="h-fit w-fit">{children}</button>
          </PopoverTrigger>
          <PopoverContent className="rounded-full bg-[#fefefe] p-5">
            {content}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Tooltip;
