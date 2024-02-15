import React from "react";
import FeatureExplainer from "./FeatureExplainer";
import { UserRole } from "../../../types";

type Props = {
  className?: string;
  type: UserRole;
};

const PaidFeaturesSection = (props: Props) => {
  return (
    <div
      className={`flex flex-wrap justify-between gap-x-40 gap-y-8 xl:space-y-8 ${props.className}`}
    >
      <FeatureExplainer
        href="my-agent/agent-explore"
        title="Be My Agent"
        locked={false}
      />
      {props.type !== "lister" && (
        <FeatureExplainer
          href="be-the-first-to-know"
          title="Get Notified"
          locked={false}
        />
      )}
    </div>
  );
};

export default PaidFeaturesSection;
