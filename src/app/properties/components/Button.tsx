import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline";
  borderColor?: string;
};

const Button = ({ className, children, borderColor, variant }: Props) => {
  if (variant === "outline") {
    return (
      <button
        className={`p-4 text-center w-60 font-[600] rounded-xl border ${className}`}
        style={{ borderColor: borderColor ? borderColor : "" }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`p-4 text-center w-60 font-[600] bg-gradient-to-r rounded-xl from-[#21A19F] to-[#1EA9A6A1] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
