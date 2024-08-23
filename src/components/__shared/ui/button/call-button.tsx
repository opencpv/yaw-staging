"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "./";
import { initiatePhoneCall } from "@/lib/utils/initiatePhoneCall";
import { MdOutlinePhone } from "react-icons/md";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  phoneNumber: string;
  iconPosition?: "left" | "right";
} & ButtonProps;

const ButtonCall = ({
  color,
  phoneNumber,
  className,
  iconPosition,
  ...props
}: Props) => {
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
    return () => {
      setText("Call me");
    };
  }, [phoneNumber]);

  return (
    <div ref={buttonRef} className="flex w-full justify-center">
      <Button
        color={color}
        size="full"
        className={cn(className)}
        onClick={() => initiatePhoneCall(phoneNumber)}
        {...props}
      >
        {iconPosition === "left" && (
          <MdOutlinePhone className="shrink-0 text-lg" />
        )}
        <motion.span
          key={text}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="truncate"
        >
          {text}
        </motion.span>
        {iconPosition === "right" && (
          <MdOutlinePhone className="shrink-0 text-lg" />
        )}
      </Button>
    </div>
  );
};

export default ButtonCall;
