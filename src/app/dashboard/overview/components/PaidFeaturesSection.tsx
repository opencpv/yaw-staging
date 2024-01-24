import React from "react";
import FeatureExplainer from "./FeatureExplainer";
import { UserRole } from "../../types";

type Props = {
  className?: string;
  type: UserRole;
};

const PaidFeaturesSection = (props: Props) => {
  return (
    <div className={`space-y-8 ${props.className}`}>
      <FeatureExplainer href="" title="Be My Agent" locked={false} />
      {props.type !== "Property manager" && (
        <FeatureExplainer href="" title="Be The First To Know" locked={false} />
      )}
    </div>
  );
};

export default PaidFeaturesSection;
