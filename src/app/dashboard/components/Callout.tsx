import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Callout = ({ children, className }: Props) => {
  return (
    <div className={`px-5 py-3 bg-[#FEF8ED] text-[#45808B] rounded-xl text-sm ${className}`}>
        {children}
    </div>
  );
};

export default Callout;
