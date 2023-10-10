"use client";
import React, { HTMLAttributes, useEffect, useMemo, useRef } from "react";
import MessageBubble from "../../components/messages/MessageBubble";
import BlockUserPopOver from "../../components/messages/BlockUserPopOver";
import MessageBubble2 from "../../components/messages/MessageBubble2";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Messages = ({ params }: { params: { chat: string } }) => {
  const router = useRouter();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const { chat } = params;
  let contactName = useMemo(() => {
    // Algorithm for getting contact name
    let nameSplit = chat.split("-");
    let nameSplitCapitalized = nameSplit.map(
      (name) => name.slice(0, 1).toUpperCase() + name.slice(1)
    );
    return nameSplitCapitalized.join(" ");
  }, [chat]);

  // Scrolls to the bottom on mount
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <>
      <div className="sticky top-0 flex items-center justify-between p-4 text-white rounded-xl bg-primary-400">
        <FaLongArrowAltLeft
          onClick={() => router.back()}
          className="inline-flex lg:hidden"
        />
        <h2 className="text-xl">{contactName}</h2>
        <BlockUserPopOver />
      </div>

      <div
        className="flex flex-col w-full h-[70dvh] mt-5 mb-20 sm:mb-0 overflow-y-scroll hidden-scrollbar py-5"
        ref={messageContainerRef}
      >
        <MessageBubble body="Hello" time="9:00 am" />
        <MessageBubble2 body="Hi. Good morning" time="9:30 am" />
        <MessageBubble body="Lorem ipsum dolor sit amet." time="11:41 am" />
        <MessageBubble body="Lorem ipsum dolor sit amet 2." time="11:50 am" />
        <MessageBubble2 body="Sure" time="11:50 am" />
        <MessageBubble
          body="This is the best service you can have"
          time="11:54 am"
        />
        <MessageBubble body="Lorem ipsum dolor sit amet." time="12:10 pm" />
        <MessageBubble2 body="I am intrigued. Thanks" time="12:11 pm" />
        <MessageBubble2
          body="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
          time="12:11 pm"
        />
        <MessageBubble body="Lorem ipsum dolor sit amet." time="12:10 pm" />
        <MessageBubble2 body="Follow up." time="9:10 pm" />
        <MessageBubble body="Sure." time="4:10 pm" />
        <MessageBubble body="Sure." time="4:10 pm" />
        <MessageBubble
          body="You may start the process. Thanks"
          time="8:57 pm"
        />
      </div>
    </>
  );
};

export default Messages;
