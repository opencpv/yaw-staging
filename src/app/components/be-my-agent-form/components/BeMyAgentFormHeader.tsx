import React from "react";
import Progress from "./Progress";
import Button from "@/components/__shared/ui/button/Button";
import { beMyAgentProcessStore } from "@/store/dashboard/beMyAgentProcessStore";

type Props = {};

const BeMyAgentFormHeader = (props: Props) => {
  const { progressValue, onClose } = beMyAgentProcessStore();

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

export default BeMyAgentFormHeader;
