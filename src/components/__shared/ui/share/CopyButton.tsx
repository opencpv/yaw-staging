import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React from "react";
import { PiClipboardText } from "react-icons/pi";

const CopyButton = () => {
  const { onOpen: toastOnOpen } = useToastDisclosure();
  const [text, setText] = React.useState("Copy");

  return (
    <button
      className="rounded-lg border grid place-items-center col-span-full text-white bg-primary hover:bg-primary/90"
      onClick={() => {
        navigator.clipboard.writeText(location.href);
        setText("Copied!");
        toastOnOpen("Copied to clipboard", "success");
      }}
    >
      <div className="flex items-center gap-3 p-4">
        <PiClipboardText size={30} />
        <span>{text}</span>
      </div>
    </button>
  );
};

export default CopyButton;
