import React from "react";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  label: string;
  icon: React.ReactNode;
  className?: string;
};

const LargeButton = ({ label, icon, className }: Props) => {
  return (
    <Button
      color="white"
      className={`flex min-h-[5rem] w-fit min-w-fit items-center justify-start gap-3 rounded-xl border-0 p-4 shadow-large min-[200px]:p-8 ${className}`}
    >
      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-50 p-2 text-xs text-accent-50 xxs:flex min-[340px]:p-4 min-[340px]:text-xl">
        {icon}
      </div>
      <h3 className="font-[500]">{label}</h3>
    </Button>
  );
};

export default LargeButton;
