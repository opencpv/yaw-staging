"use client";
import React from "react";
import Button from "../../ui/button/Button";
import { initiatePhoneCall } from "@/lib/utils/initiatePhoneCall";

type Props = {
  color: "primary" | "gradient" | "accent" | "white";
  phoneNumber: string;
  className?: string;
};

const ButtonCall = ({ color, phoneNumber, className }: Props) => {
  return (
    <Button
      color={color}
      className={`p-4 w-full ${className}`}
      onClick={() => initiatePhoneCall(phoneNumber)}
    >
      Call me
    </Button>
  );
};

export default ButtonCall;
