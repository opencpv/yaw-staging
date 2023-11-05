import React from "react";
import Button from "../../components/Button";
import { FaIceCream } from "react-icons/fa";

type Props = {
  label: string;
  icon: React.ReactNode;
  className?: string;
};

const ActionMain = ({ label, icon, className }: Props) => {
  return (
    <Button
      className={`flex items-center justify-start gap-3 p-8 py-12 bg-white border-0 shadow-large w-[22rem] ${className}`}
    >
      <div className="flex items-center justify-center p-4 text-xl rounded-full text-accent-50 bg-[#F1F1F1]">
        {icon}
      </div>
      <p className="font-[500] text-lg capitalize">{label}</p>
    </Button>
  );
};

export default ActionMain;
