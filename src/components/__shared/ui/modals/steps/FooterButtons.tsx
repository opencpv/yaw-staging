import React from "react";
import { Button } from "../../button/Button";
import { cn } from "@/lib/utils";

type Props = {
  firstSlide: boolean;
  lastSlide: boolean;
  classNames?: {
    forward?: string;
    back?: string;
  };
  onBackward: () => void;
  onForward: () => void;
  isSubmitting?: boolean;
  forwardContent: React.ReactNode;
};

function FooterButtons({
  classNames,
  onBackward,
  onForward,
  firstSlide,
  lastSlide,
  isSubmitting,
  forwardContent,
}: Props) {
  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "max-w-60 flex-1 sm:h-[58px]",
          {
            invisible: firstSlide || lastSlide,
          },
          classNames?.back,
        )}
        onClick={onBackward}
      >
        Back
      </Button>
      <Button
        className={cn("max-w-60 flex-1 sm:h-[58px]", classNames?.forward)}
        onClick={onForward}
        type={lastSlide ? "button" : "submit"}
        isLoading={isSubmitting}
      >
        {forwardContent}
      </Button>
    </>
  );
}

export default FooterButtons;
