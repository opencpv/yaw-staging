import React from "react";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  label: string;
  icon: React.ReactNode;
  className?: string;
};

const ActionMain = ({ label, icon, className }: Props) => {
  return (
    <Button
      color="white"
      className={`flex min-h-[8rem] w-full items-center justify-start gap-3 border-0 p-4 shadow-large min-[340px]:p-8 xs:w-[27rem] xs:min-w-[22rem] ${className}`}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F1F1F1] p-2 text-xs text-accent-50 min-[340px]:p-4 min-[340px]:text-xl">
        {icon}
      </div>
      <h3 className="font-[500]">{label}</h3>
    </Button>
  );
};

export default ActionMain;
