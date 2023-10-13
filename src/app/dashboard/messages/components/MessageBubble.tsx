import React from "react";
import style from "../Messages.module.css";

const MessageBubble = ({ body, time }: MessageInterface) => {
  return (
    <div
      className={`${style.messageBubble} flex flex-col self-end max-w-xl gap-1 p-3 pb-1 ml-10 xs:ml-20 bg-primary-300 text-neutral-800 rounded-2xl first:mt-auto`}
    >
      <p>{body}</p>
      <small className="text-sm text-end">{time}</small>
    </div>
  );
};

export default MessageBubble;
