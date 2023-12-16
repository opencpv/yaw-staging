"use client";
import React from "react";
import Button from "../../ui/button/Button";

type Props = {
  color: "primary" | "gradient" | "accent" | "white";
  phoneNumber: string;
  className?: string;
};

const ButtonCall = ({ color, phoneNumber, className }: Props) => {
  const handlePhoneCall = () => {
    location.href = `tel:${phoneNumber}`;
  };

  return (
    <Button
      color={color}
      className={`p-4 w-full ${className}`}
      onClick={handlePhoneCall}
    >
      Call me
    </Button>
  );
};

export default ButtonCall;
