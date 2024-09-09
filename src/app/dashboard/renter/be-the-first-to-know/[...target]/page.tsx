import React from "react";
import CriterionMatches from "../components/pages/CriterionMatches";

type Props = {
  params: {
    target: string[];
  };
};

const page = (props: Props) => {
  return <CriterionMatches params={props.params} />;
};

export default page;
