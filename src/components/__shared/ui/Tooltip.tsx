import React, { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOpen(false);
    });
  }, []);

  return (
    <>
      <div className="hidden place-items-center md:grid" onClick={onClick}>
        <NextUITooltip
          classNames={{
            base: [
              cn(
                "z-[30] bg-[#fefefe] focus:outline-none cursor-pointer p-5 max-w-2xl",
                { hidden: !content },
                className,
              ),
            ],
          }}
          content={content}
          delay={300}
          closeDelay={200}
        >
          <button>{children}</button>
        </NextUITooltip>
      </div>

      {/* Popover used as Tooltip on mobile since tooltip works only on hover */}
      <div className="grid place-items-center md:hidden" onClick={onClick}>
        <Popover
          style={{ zIndex: "30" }}
          placement="top"
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          classNames={{
            base: cn("focus:outline-none", {
              hidden: !content,
            }),
          }}
        >
          <PopoverTrigger className="h-fit w-fit">
            <button className="h-fit w-fit">{children}</button>
          </PopoverTrigger>
          <PopoverContent
            className={cn("cursor-pointer bg-[#fefefe] p-5", className)}
            onClick={() => setIsOpen(!isOpen)}
          >
            {content}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Tooltip;
