"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../ui/button/Button";
import { initiatePhoneCall } from "@/lib/utils/initiatePhoneCall";
import { MdOutlinePhone } from "react-icons/md";
import { motion } from "framer-motion";

type Props = {
  color: "primary" | "gradient" | "accent" | "white";
  phoneNumber: string;
  className?: string;
};

const ButtonCall = ({ color, phoneNumber, className }: Props) => {
  const [text, setText] = useState("Call me");

  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef?.current) {
      buttonRef.current.addEventListener("mouseenter", () => {
        setText(phoneNumber);
      });
      buttonRef.current.addEventListener("mouseleave", () => {
        setText("Call me");
      });
    }
  }, [phoneNumber]);

  return (
    <div ref={buttonRef}>
      <Button
        color={color}
        className={`w-full p-4 ${className}`}
        onClick={() => initiatePhoneCall(phoneNumber)}
      >
        <MdOutlinePhone className="text-lg text-white" />
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

export default ButtonCall;
