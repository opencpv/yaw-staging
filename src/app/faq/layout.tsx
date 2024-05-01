import Survey from "@/components/__shared/ui/survey";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FaqLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Survey />
    </>
  );
};

export default FaqLayout;
