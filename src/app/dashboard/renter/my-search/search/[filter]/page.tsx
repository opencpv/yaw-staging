import React from "react";
import FilterPage from "../../components/pages/FilterPage";

const page = ({ params }: { params: { filter: string } }) => {
  return <FilterPage filter={params.filter} />;
};

export default page;
