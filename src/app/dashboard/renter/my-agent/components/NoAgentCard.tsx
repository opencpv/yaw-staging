import React from "react";
import AgentButtons from "./Button";
import BeMyAgentModal from "./steps/BeMyAgentModal";

type Props = {};

const NoAgentCard = (props: Props) => {
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-2xl border bg-shade px-8 py-6">
      <h3 className="leading-none">You have no agent</h3>
      <p className="text-shade-200">Click the button below to get started</p>
      <div className="flex flex-col gap-3 xs:flex-row">
        <BeMyAgentModal
          button="Hire Us Now"
          content="Get Started"
          buttonClassName="max-xs:max-w-full"
        />{" "}
        <AgentButtons
          href="explore"
          content="Explore"
          variant={"explore"}
          className="min-w-[8rem] max-xs:w-full max-xs:max-w-full"
        />
      </div>
    </div>
  );
};

export default NoAgentCard;
