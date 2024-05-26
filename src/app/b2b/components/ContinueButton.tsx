"use client";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { useFormStatus } from "react-dom";

type Props = {};

const ContinueButton = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color="primary"
      className="h-[52px] w-full max-w-full"
      isLoading={pending}
    >
      Proceed
    </Button>
  );
};

export default ContinueButton;
