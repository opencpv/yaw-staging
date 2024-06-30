import React from "react";
import CriterionMatches from "../components/pages/CriterionMatches";

type Props = {
  params: {
    target: string[];
  };
};

const page = (props: Props) => {
  const firstParam = props.params.target[0];
  const id = firstParam.split("-")[1];
  return <CriterionMatches id={id} />;
};

export default page;
