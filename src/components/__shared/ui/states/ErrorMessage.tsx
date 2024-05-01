import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  error?: string;
};

const ErrorMessage: React.FC<Props> = (props) => {
  return (
    <div
      className={cn(
        "text-[13px] text-error-100",
        {
          hidden: !props.error,
        },
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export default ErrorMessage;
