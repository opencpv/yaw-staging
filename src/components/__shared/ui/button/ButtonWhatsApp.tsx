"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../ui/button/Button";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
  color: "primary" | "gradient" | "accent" | "white";
  className?: string;
  phone: string;
};

const ButtonWhatsApp = ({ color, className, phone }: Props) => {
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
    const href = `https://wa.me/${phone}:`;
    window.open(href, "_blank");
  };

  return (
    <div ref={buttonRef}>
      <Button
        color={color}
        className={`flex w-full items-center gap-2 ${className}`}
        onClick={handleSendWhatsAppMsg}
      >
        <FaWhatsapp className="text-lg text-white" />
        <motion.span
          key={text}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {text}
        </motion.span>
      </Button>
    </div>
  );
};

export default ButtonWhatsApp;
