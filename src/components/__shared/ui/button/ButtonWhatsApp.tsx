"use client";
import React from "react";
import Button from "../../ui/button/Button";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  color: "primary" | "gradient" | "accent" | "white";
  className?: string;
  phone: string;
};

const ButtonWhatsApp = ({ color, className, phone }: Props) => {
  const handleSendWhatsAppMsg = () => {
    const href = `https://wa.me/${phone}:`;
    window.open(href, "_blank");
  };

  return (
    <Button
      color={color}
      className={`flex w-full items-center gap-2 ${className}`}
      onClick={handleSendWhatsAppMsg}
    >
      <FaWhatsapp className="text-lg text-white" />
      Whatsapp
    </Button>
  );
};

export default ButtonWhatsApp;
