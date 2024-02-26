import React from "react";
import AgentButtons from "./Button";

type Props = {};

const NoAgentCard = (props: Props) => {
  return (
    <div className="max-w-md space-y-5 rounded-2xl border bg-[#F7F7F7] px-8 py-6 xs:w-[448px]">
      <AgentButtons
        href="agent-explore"
        content="Explore"
        variant={"explore"}
        className="min-w-[8rem]"
      />
      <div className="space-y-0.5">
        <h3>You have no agent</h3>
        <p className="text-shade-200">Click the button below to get started</p>
      </div>
    </div>
  );
};

export default NoAgentCard;
