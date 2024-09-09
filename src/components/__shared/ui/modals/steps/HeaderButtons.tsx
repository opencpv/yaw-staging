import React from "react";
import { Button } from "../../button";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";

type Props = {
  onSaveAndExit: () => void;
  onCancel: () => void;
  lastSlide: boolean;
  isPending: boolean;
  cancelBreakpoint?: "xsm" | "ssm";
};

function HeaderButtons({
  onCancel,
  onSaveAndExit,
  cancelBreakpoint = "xsm",
  lastSlide,
  isPending,
}: Props) {
  return (
    <span className="flex items-center gap-3">
      {/* For very small screens */}
      <Button
        size={"icon"}
        color="white"
        radius="full"
        variant={"outline"}
        className={cn("border-neutral-300", {
          "xsm:hidden": cancelBreakpoint === "xsm",
          "ssm:hidden": cancelBreakpoint === "ssm",
        })}
        onClick={onCancel}
      >
        <LiaTimesSolid />
      </Button>
      <Button
        color="white"
        radius="full"
        size={"sm"}
        variant={"outline"}
        className={cn("border-neutral-300", {
          "max-xsm:hidden": cancelBreakpoint === "xsm",
          "max-ssm:hidden": cancelBreakpoint === "ssm",
        })}
        onClick={onCancel}
      >
        {lastSlide ? "Exit" : "Cancel"}
      </Button>
      <Button
        color="white"
        radius="full"
        size={"sm"}
        variant={"outline"}
        className={cn("border-neutral-300 xxs:whitespace-nowrap", {
          hidden: lastSlide,
        })}
        isLoading={isPending}
        onClick={onSaveAndExit}
      >
        Save & Exit
      </Button>
    </span>
  );
}

export default HeaderButtons;
