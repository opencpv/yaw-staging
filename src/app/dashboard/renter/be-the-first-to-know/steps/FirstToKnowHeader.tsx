import React from "react";
import Progress from "@/app/dashboard/components/shared/Progress";
import Button from "@/components/__shared/ui/button/Button";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";
import { useFormikContext } from "formik";
import { FirstToKnowFormType } from "./types";
import { useLocalStorage } from "@uidotdev/usehooks";
import { views as firstToKnowViews } from "./FirstToKnowForm";

type Props = {
  onClose: () => void;
};

const FirstToKnowHeader = ({ onClose }: Props) => {
  const { values } = useFormikContext();

  const [firstToKnowFormData, setFirstToKnowFormData] =
    useLocalStorage<FirstToKnowFormType>("first-to-know-form");

  const {
    progressValue,
    activeSlide,
    lastSlide,
    shouldShowMotivationMessage,
    setShouldShowMotivationMessage,
  } = firstToKnowStepsStore();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4 className="font-semibold">Be The First to Know</h4>
        <Button
          color="white"
          greenHover
          radius="full"
          className="border px-5"
          onClick={() => {
            onClose();
            setFirstToKnowFormData(values as any);
          }}
        >
          Save & Exit
        </Button>
      </div>

      <div className="mt-0 w-full">
        <Progress
          value={progressValue as number}
          firstSlide={activeSlide === 1}
          lastSlide={activeSlide === firstToKnowViews.length - 2} // setting it to last but one because of the success page
          hideDopeMessage={true}
          middleSlide={progressValue >= 40 && progressValue <= 50}
          shouldShowMotivationMessage={shouldShowMotivationMessage}
          setShouldShowMotivationMessage={setShouldShowMotivationMessage}
        />
      </div>
    </section>
  );
};

export default FirstToKnowHeader;
