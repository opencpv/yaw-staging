import React from "react";
import { Spinner as NextUISpinner } from "@nextui-org/react";

type Props = {
  color?:
    | "current"
    | "white"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
};

const Spinner = ({ color }: Props) => {
  return (
    <div className="flex items-center justify-center h-40">
      <NextUISpinner
        color={color ? color : "success"}
        classNames={{
          circle2: "text-primary-500",
          circle1: "text-primary-500",
        }}
      />
    </div>
  );
};

export default Spinner;
