import Image from "next/image";
import React, { ChangeEvent, FormEvent } from "react";

type Props = {
  messageContent: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MessageSendArea = ({ onSubmit, messageContent, onChange }: Props) => {
  return (
    <div className="sticky bottom-0 w-full py-5 bg-white">
      <form action="" onSubmit={onSubmit} className="flex items-center gap-4">
        <input
          type="text"
          className="w-full p-3 border rounded-md text-neutral-800 placeholder:text-sm"
          placeholder="Type your message"
          value={messageContent}
          onChange={onChange}
        />
        <button type="submit">
          <Image
            src="/assets/icons/messages/send-btn.svg"
            alt="send"
            width={30}
            height={30}
          />
        </button>
      </form>
    </div>
  );
};

export default MessageSendArea;
