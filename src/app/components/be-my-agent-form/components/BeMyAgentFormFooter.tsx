import React from "react";
import { NavigationButton } from "./BeMyAgentForm";
import { cn } from "@/lib/utils";
import { views as BeMyAgentViews } from "./BeMyAgentForm";
import { beMyAgentProcessStore } from "@/store/dashboard/beMyAgentProcessStore";
import Button from "@/components/__shared/ui/button/Button";

type Props = {};

const BeMyAgentFormFooter = (props: Props) => {
  const { activeSlide, setActiveSlide, lastSlide, firstSlide, onClose } =
    beMyAgentProcessStore();

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }

    if (firstSlide) {
      onClose();
    }
  };

  const handleForward = () => {
    if (activeSlide < BeMyAgentViews.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <section className="ml-auto grid grid-cols-2 items-center gap-2 max-sm:w-full xs:justify-end">
      <Button
        color={!firstSlide ? "accent" : undefined}
        variant={!firstSlide ? "outline" : "default"}
        className={cn(
          "col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
          {
            "bg-primary-200/80 text-white hover:bg-primary-200": firstSlide,
            invisible: lastSlide,
          },
        )}
        onClick={handleBack}
      >
        {firstSlide ? "Cancel" : "Back"}
      </Button>
      <Button
        color="accent"
        className="col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]"
        onClick={handleForward}
      >
        {lastSlide
          ? "Proceed to pay"
          : activeSlide === BeMyAgentViews.length - 2 // last but one
            ? "Summary"
            : "Continue"}
      </Button>
    </section>
  );
};

export default BeMyAgentFormFooter;
