"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  phone: string;
  color?: "primary" | "gradient" | "accent" | "white";
  className?: string;
  iconPosition?: "left" | "right";
};

const WhatsAppButton = ({
  color,
  className,
  phone,
  iconPosition = "left",
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
    <div ref={buttonRef} className="flex justify-center">
      <Button
        color={color}
        className={cn(`flex w-full items-center gap-2`, className)}
        onClick={handleSendWhatsAppMsg}
      >
        {iconPosition === "left" && <FaWhatsapp className="text-lg" />}
        <motion.span
          key={text}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {text}
        </motion.span>
        {iconPosition === "right" && <FaWhatsapp className="text-lg" />}
      </Button>
    </div>
  );
};

export default WhatsAppButton;
