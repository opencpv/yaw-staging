import React from "react";

const SideHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <header
      className={
        "rounded-md bg-primary px-2 py-3 text-center text-xl font-[600] capitalize text-white"
      }
    >
      {children}
    </header>
  );
};

export default SideHeader;
