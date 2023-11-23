import React from "react";
import Button from "@/components/__shared/Button";

type Props = {
  label: string;
  icon: React.ReactNode;
  className?: string;
};

const ActionMain = ({ label, icon, className }: Props) => {
  return (
    <Button
      className={`flex items-center justify-start gap-3 p-4 bg-white border-0 shadow-large w-full min-[340px]:p-8 min-[340px]:py-12 xs:w-[22rem] xs:min-w-[22rem] ${className}`}
    >
      <div className="flex items-center justify-center p-2 text-xs rounded-full text-accent-50 bg-[#F1F1F1] min-[340px]:p-4 min-[340px]:text-xl">
        {icon}
      </div>
      <p className="font-[500] capitalize min-[340px]:text-lg">{label}</p>
    </Button>
  );
};

export default ActionMain;
