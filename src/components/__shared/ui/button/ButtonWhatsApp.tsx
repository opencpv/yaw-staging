"use client";
import React from "react";
import Button from "../../ui/button/Button";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  color: "primary" | "gradient" | "accent" | "white";
  className?: string;
};

const ButtonWhatsApp = ({ color, className }: Props) => {
  const handleSendWhatsAppMsg = () => {
    location.href = `tel:`;
  };

  return (
    <Button
      color={color}
      className={`flex items-center gap-2 w-full ${className}`}
      onClick={handleSendWhatsAppMsg}
    >
      <FaWhatsapp className="text-lg text-white" />
      Whatsapp
    </Button>
  );
};

export default ButtonWhatsApp;
