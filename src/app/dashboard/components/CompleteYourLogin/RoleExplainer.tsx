import { cn } from "@/lib/utils";
import { FormikValues, useFormikContext } from "formik";
import React from "react";

const RoleExplainer = () => {
  const { values } = useFormikContext<FormikValues>();

  return (
    <div
      className={cn("rounded-lg bg-success-bg p-5 text-sm text-success", {
        hidden: !values.role,
      })}
    >
      {values.role === "Renter"
        ? "Renter Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        : "Lister Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, libero?"}
    </div>
  );
};

export default RoleExplainer;
