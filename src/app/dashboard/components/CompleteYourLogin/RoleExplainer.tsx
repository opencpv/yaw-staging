import { cn } from "@/lib/utils";
import { FormikValues, useFormikContext } from "formik";
import React from "react";
import { motion } from "framer-motion";

const RoleExplainer = () => {
  const { values } = useFormikContext<FormikValues>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={values.role}
      className={cn("rounded-lg bg-success-bg p-5 text-lg text-success", {
        hidden: !values.role,
      })}
    >
      {values.role === "Renter"
        ? "Renter Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        : "Lister Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, libero?"}
    </motion.div>
  );
};

export default RoleExplainer;
