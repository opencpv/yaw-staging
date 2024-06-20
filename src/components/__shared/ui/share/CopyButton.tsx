import React from "react";
import { IoIosLink } from "react-icons/io";

const CopyButton = () => {
  const [text, setText] = React.useState("Copy link");

  const handleCopy = () => {
    navigator.clipboard.writeText(location.href);
    setTimeout(() => {
      setText("Copy link");
    }, 4000);
    setText("Copied!");
  };

  return (
    <button className="w-fit text-info" onClick={handleCopy}>
      <span className="flex items-center gap-1 text-sm">
        <IoIosLink size={18} className="shrink-0" />
        <span className="whitespace-nowrap">{text}</span>
      </span>
    </button>
  );
};

export default CopyButton;
