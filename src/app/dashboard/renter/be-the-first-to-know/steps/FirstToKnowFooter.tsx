import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { views as firstToKnowViews } from "./FirstToKnowForm";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";
import Button from "@/components/__shared/ui/button/Button";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FirstToKnowFormType } from "./types";

type Props = {
  onClose: () => void;
};

const FirstToKnowFooter = ({ onClose }: Props) => {
  const { submitForm, values, resetForm } = useFormikContext();
  const { activeSlide, setActiveSlide, lastSlide, firstSlide } =
    firstToKnowStepsStore();

  const [firstToKnowFormData, setFirstToKnowFormData] =
    useLocalStorage<FirstToKnowFormType>("first-to-know-form");

  useEffect(() => {
    if (lastSlide) {
      setFirstToKnowFormData({
        ...(values as any), // set the values of the form to localStorage (which itself is a copy of initial values + local storage values)
      });
    }
  }, [lastSlide, setFirstToKnowFormData, values, firstToKnowFormData]);

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }

    if (firstSlide) {
      localStorage.removeItem("first-to-know-form");
      resetForm({});
      onClose();
    }
  };

  const handleForward = () => {
    if (activeSlide === firstToKnowViews.length - 2) {
      submitForm(); // tentative
    }
    if (activeSlide < firstToKnowViews.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <section
      className={cn(
        "ml-auto grid grid-cols-2 items-center gap-2 max-sm:w-full xs:justify-end",
        {
          "mr-auto w-full grid-cols-1 xs:justify-start": lastSlide,
        },
      )}
    >
      <Button
        color={!firstSlide ? "accent" : undefined}
        variant={!firstSlide ? "outline" : "default"}
        className={cn(
          "col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
          {
            "bg-primary-200/80 text-white hover:bg-primary-200": firstSlide,
            "w-fit px-14 sm:min-w-0": lastSlide,
          },
        )}
        onClick={handleBack}
      >
        {firstSlide ? "Cancel" : "Back"}
      </Button>
      <Button
        color="accent"
        className={cn(
          "col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
          {
            hidden: lastSlide,
          },
        )}
        onClick={() => {
          handleForward();
        }}
        type="submit"
      >
        {activeSlide === firstToKnowViews.length - 2 // last but one
          ? "Finish"
          : "Continue"}
      </Button>
    </section>
  );
};

export default FirstToKnowFooter;
