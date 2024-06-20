"use client";
import React, { useState } from "react";
import { useAppStore } from "@/store/dashboard/AppStore";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  onClick?: () => void;
};
export default function JobDescriptionButton({ onClick }: Props) {
  const [animation, setAnimation] = useState(false);

  return (
    <Button
      color="accent"
      onClick={onClick}
      className="pointer-events-none w-fit"
      tabIndex={-1}
    >
      Job Description
    </Button>
  );
}
