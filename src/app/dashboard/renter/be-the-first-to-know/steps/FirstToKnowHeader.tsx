import React from "react";
import Progress from "@/app/dashboard/components/shared/Progress";
import Button from "@/components/__shared/ui/button/Button";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";
import { useFormikContext } from "formik";
import { FirstToKnowFormType } from "./types";
import { useLocalStorage } from "@uidotdev/usehooks";

type Props = {
  onClose: () => void;
};

const FirstToKnowHeader = ({ onClose }: Props) => {
  const { values } = useFormikContext();

  const [firstToKnowFormData, setFirstToKnowFormData] =
    useLocalStorage<FirstToKnowFormType>("first-to-know-form");

  const { progressValue } = firstToKnowStepsStore();

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
        <Progress value={progressValue as number} />
      </div>
    </section>
  );
};

export default FirstToKnowHeader;
