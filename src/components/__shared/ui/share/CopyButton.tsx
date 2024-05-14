import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React from "react";
import { PiClipboardText } from "react-icons/pi";

const CopyButton = () => {
  const { onOpen: toastOnOpen } = useToastDisclosure();
  const [text, setText] = React.useState("Copy");
  return (
    <div
      className="rounded-lg border hover:bg-slate-50"
      onClick={() => {
        navigator.clipboard.writeText(location.href);
        setText("Copied!");
        toastOnOpen("Copied to clipboard", "success");
      }}
    >
      <div className="flex w-full cursor-pointer items-center gap-3 p-4">
        <PiClipboardText size={30} />
        <span className="text-neutral-800">{text}</span>
      </div>
    </div>
  );
};

export default CopyButton;
