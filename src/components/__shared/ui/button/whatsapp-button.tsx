"use client";
import React, { useState } from "react";
import { Button, ButtonProps } from ".";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

type Props = {
  phone: string;
  iconPosition?: "left" | "right";
} & ButtonProps;

const WhatsAppButton = ({
  variant,
  className,
  phone,
  iconPosition = "left",
  ...props
}: Props) => {
  const [text, setText] = useState("WhatsApp");

  const handleMouseEnter = () => {
    setText(phone);
  };

  const handleMouseLeaeve = () => {
    setText("WhatsApp");
  };

  const handleSendWhatsAppMsg = () => {
    const href = `https://wa.me/${phone}`;
    window.open(href, "_blank");
  };

  return (
    <div className="flex w-full justify-center">
      <Button
        variant={variant}
        className={cn(className)}
        onClick={handleSendWhatsAppMsg}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeaeve}
        {...props}
      >
        {iconPosition === "left" && <FaWhatsapp className="shrink-0 text-lg" />}
        <span key={text} className="truncate">
          {text}
        </span>
        {iconPosition === "right" && (
          <FaWhatsapp className="shrink-0 text-lg" />
        )}
      </Button>
    </div>
  );
};

export default WhatsAppButton;
