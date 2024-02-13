import Image from "next/image";
import React, { ChangeEvent, FormEvent } from "react";

type Props = {
  messageContent: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const MessageSendArea = ({ onSubmit, messageContent, onChange }: Props) => {
  return (
    <div className="sticky bottom-0 w-full bg-white py-5">
      <form action="" onSubmit={onSubmit} className="flex items-center gap-4">
        <textarea
          rows={1}
          className="w-full resize-none rounded-md border p-3 text-neutral-800 placeholder:text-sm"
          placeholder="Type your message"
          value={messageContent}
          onChange={onChange}
        ></textarea>
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
