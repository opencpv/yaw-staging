import { cn } from "@/lib/utils";
import { ErrorMessage as FormikErrorMessage } from "formik";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  name?: string;
};

/**
 * Displays an error message under formik inputs
 */
const ErrorMessage: React.FC<Props> = (props) => {
  return (
    <FormikErrorMessage
      name={props.name as string}
      className={cn("text-[13px] text-error-100", props.className)}
      component="p"
    />
  );
};

export default ErrorMessage;
