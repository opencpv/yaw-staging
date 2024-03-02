import React from "react";
import Progress from "../../Progress";
import Button from "@/components/__shared/ui/button/Button";
import { beMyAgentStepsStore } from "@/store/dashboard/beMyAgentStepsStore";
import { useFormikContext } from "formik";
import { BeMyAgentFormType } from "./types";
import { useLocalStorage } from "@uidotdev/usehooks";

type Props = {
  onClose: () => void;
};

const BeMyAgentHeader = ({ onClose }: Props) => {
  const { values } = useFormikContext();

  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  const {
    progressValue,
    firstSlide,
    lastSlide,
    shouldShowMotivationMessage,
    setShouldShowMotivationMessage,
  } = beMyAgentStepsStore();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4 className="font-semibold">Be My Agent</h4>
        <Button
          color="white"
          greenHover
          radius="full"
          className="border px-5"
          onClick={() => {
            onClose();
            setAgentFormData(values as any);
          }}
        >
          Save & Exit
        </Button>
      </div>

      <div className="mt-0 w-full">
        <Progress
          value={progressValue as number}
          firstSlide={firstSlide}
          lastSlide={lastSlide}
          shouldShowMotivationMessage={shouldShowMotivationMessage}
          setShouldShowMotivationMessage={setShouldShowMotivationMessage}
        />
      </div>
    </section>
  );
};

export default BeMyAgentHeader;
