import React from "react";
import FeatureExplainer from "./FeatureExplainer";

type Props = {
  className?: string;
};

const RenterPaidFeatures = (props: Props) => {
  return (
    <div className={`space-y-8 ${props.className}`}>
      <FeatureExplainer href="" title="Be The First To Know" />
      <FeatureExplainer href="" title="Be My Agent" />
    </div>
  );
};

export default RenterPaidFeatures;
