"use client";
import React, { useState } from "react";
import { Button, ButtonProps } from ".";
import { initiatePhoneCall } from "@/lib/utils/initiatePhoneCall";
import { MdOutlinePhone } from "react-icons/md";
import { cn } from "@/lib/utils";

type Props = {
  phone: string;
  iconPosition?: "left" | "right";
} & ButtonProps;

const CallButton = ({
  variant,
  phone,
  className,
  iconPosition = "left",
  ...props
}: Props) => {
  const [text, setText] = useState("Call me");

  const handleMouseEnter = () => {
    setText(phone);
  };

  const handleMouseLeaeve = () => {
    setText("Call me");
  };

  return (
    <Button
      variant={variant}
      size="full"
      className={cn(className)}
      onClick={() => initiatePhoneCall(phone)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaeve}
      {...props}
    >
      {iconPosition === "left" && (
        <MdOutlinePhone className="shrink-0 text-lg" />
      )}
      <span key={text} className="truncate">
        {text}
      </span>
      {iconPosition === "right" && (
        <MdOutlinePhone className="shrink-0 text-lg" />
      )}
    </Button>
  );
};

export default CallButton;
