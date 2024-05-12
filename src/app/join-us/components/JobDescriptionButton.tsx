"use client";
import React, { useState } from "react";
import { useAppStore } from "@/store/dashboard/AppStore";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  description: any;
  onClick: any;
};
export default function JobDescriptionButton({ description, onClick }: Props) {
  const [animation, setAnimation] = useState(false);

  const { user } = useAppStore();

  return (
    <Button color="accent" onClick={onClick} className="w-fit">
      Job Description
    </Button>
  );
}
