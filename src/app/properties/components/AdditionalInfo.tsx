import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const AdditionalInfo = ({ children, className }: Props) => {
  return (
    <>
      <div className="w-full p-5 mt-2 font-[500] text-sm border rounded-xl text-neutral-800">
        {children}
      </div>
    </>
  );
};

export default AdditionalInfo;
