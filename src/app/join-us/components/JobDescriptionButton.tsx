"use client";
import React from "react";
import { Button } from "@/components/__shared/ui/button";

type Props = {
  onClick?: () => void;
};
export default function JobDescriptionButton({ onClick }: Props) {
  return (
    <Button
      variant="accent"
      onClick={onClick}
      className="pointer-events-none"
      tabIndex={-1}
    >
      Job Description
    </Button>
  );
}
