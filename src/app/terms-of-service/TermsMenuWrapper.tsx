"use client";
import React from "react";
import TermsMenu from "./components/NavMenu.tsx/components";
import { useTermsMenuStore } from "./components/NavMenu.tsx/components/useTermsMenuStore";

type Props = {
  children: React.ReactNode;
  data: any
};

const TermsMenuWrapper = ({ children, data }: Props) => {
  const termsMenutoggle = useTermsMenuStore((state) => state.termsMenuToggle);
  return (
    <>
      <TermsMenu isOpen={termsMenutoggle} data={data}  layout />
      {children}
    </>
  );
};

export default TermsMenuWrapper;
