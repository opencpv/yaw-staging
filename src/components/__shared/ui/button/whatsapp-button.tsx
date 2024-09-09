"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from ".";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  phone: string;
  iconPosition?: "left" | "right";
} & ButtonProps;

const WhatsAppButton = ({
  color,
  className,
  phone,
  iconPosition = "left",
  ...props
}: Props) => {
  const [text, setText] = useState("WhatsApp");

  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef?.current) {
      buttonRef.current.addEventListener("mouseenter", () => {
        setText(phone);
      });
      buttonRef.current.addEventListener("mouseleave", () => {
        setText("WhatsApp");
      });
    }
  }, [phone]);

  const handleSendWhatsAppMsg = () => {
    const href = `https://wa.me/${phone}`;
    window.open(href, "_blank");
  };

  return (
    <div ref={buttonRef} className="flex w-full justify-center">
      <Button
        color={color}
        className={cn(className)}
        onClick={handleSendWhatsAppMsg}
        {...props}
      >
        {iconPosition === "left" && <FaWhatsapp className="shrink-0 text-lg" />}
        <motion.span
          key={text}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="truncate"
        >
          {text}
        </motion.span>
        {iconPosition === "right" && (
          <FaWhatsapp className="shrink-0 text-lg" />
        )}
      </Button>
    </div>
  );
};

export default WhatsAppButton;
