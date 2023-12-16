"use client";
import React from "react";
import Button from "../../ui/button/Button";

type Props = {
  color: "primary" | "gradient" | "accent" | "white";
  className?: string;
};

const ButtonMessage = ({ color, className }: Props) => {
  const handleSendMessage = () => {
    location.href = `tel:`;
  };

  return (
    <Button
      variant="outline"
      color={color}
      className={`p-4 w-full ${className}`}
      onClick={handleSendMessage}
    >
      Send Message
    </Button>
  );
};

export default ButtonMessage;
