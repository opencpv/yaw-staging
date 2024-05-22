import React from "react";
import DetailPage from "../components/pages/DetailPage";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = (props: Props) => {
  return <DetailPage id={parseInt(props.searchParams?.id as string)} />;
};

export default page;
