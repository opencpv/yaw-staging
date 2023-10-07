"use client";
import React, { useMemo } from "react";
import MessageBubble from "../../components/messages/MessageBubble";
import BlockUserPopOver from "../../components/messages/BlockUserPopOver";

const Messages = ({ params }: { params: { chat: string } }) => {
  const {chat} = params
  let contactName = useMemo(() => {   // Algorithm for getting contact name
    let nameSplit = chat.split("-")
    let nameSplitCapitalized = nameSplit.map((name) => (
      name.slice(0, 1).toUpperCase() + name.slice(1)
    ))
    if (nameSplitCapitalized.length >= 2){
      return nameSplitCapitalized.join(" ")
    }
    return nameSplitCapitalized.join(" ")
  }, [chat])

  return (
    <>
      <div className="relative flex items-center justify-between p-4 text-white rounded-xl bg-primary-400">
        <h2 className="text-xl">{contactName}</h2>
        <BlockUserPopOver />
      </div>

      <div className="h-[40vh] lg:h-[70vh] flex flex-col  mt-5 space-y-5 w-full overflow-y-scroll hidden-scrollbar">
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <div className="flex flex-col self-end w-full max-w-xs gap-1 p-3 pb-1 bg-neutral-100 text-neutral-800 rounded-2xl">
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          <small className="text-sm text-end">11:00 am</small>
        </div>
        <MessageBubble />
        <MessageBubble />
      </div>
    </>
  );
};

export default Messages;
