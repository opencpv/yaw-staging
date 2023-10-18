import React from "react";

type Props = {
  className?: string;
  title: string;
};

const AdditionalInfoTitle = ({ className, title }: Props) => {
  return (
    <>
      <div
        className={`text-white bg-[#65969F] px-5 py-7 font-[600] rounded-lg w-full capitalize mt-8 ${className}`}
      >
        {title}
      </div>
    </>
  );
};

export default AdditionalInfoTitle;
