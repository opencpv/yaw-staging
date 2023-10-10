import React from "react";
import style from "../../messages/Messages.module.css";

const MessageBubble2 = ({ body, time }: MessageInterface) => {
  return (
    <div
      className={`${style.messageBubble2} flex flex-col max-w-xl gap-1 p-3 pb-1 mr-10 w-fit xs:mr-20 bg-neutral-100 text-neutral-800 rounded-2xl first:mt-auto`}
    >
      <p>{body}</p>
      <small className="text-sm text-end">{time}</small>
    </div>
  );
};

export default MessageBubble2;
