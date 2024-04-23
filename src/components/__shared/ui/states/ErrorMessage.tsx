import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ErrorMessage = (props: Props) => {
  return (
    <p className={cn("text-error-100 text-[13px]", props.className)}>
      {props.children}
    </p>
  );
};

export default ErrorMessage;
