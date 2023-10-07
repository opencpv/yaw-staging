import React from "react";

type Props = {};

const MessageBubble = (props: Props) => {
  return (
    <div className="flex flex-col max-w-xs gap-1 p-3 pb-1 bg-neutral-100 text-neutral-800 rounded-2xl">
      <p>Lorem ipsum dolor sit amet.</p>
      <small className="text-sm text-end">11:00 am</small>
    </div>
  );
};

export default MessageBubble;
