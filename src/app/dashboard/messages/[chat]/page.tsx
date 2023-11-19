"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import MessageBubble from "../components/MessageBubble";
import BlockUserPopOver from "../components/BlockUserPopOver";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { Spinner } from "@nextui-org/react";
import MessageBubble2 from "../components/MessageBubble2";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import NoMessageState from "../components/NoMessageState";
import { fetchTable } from "@/services/fetch";
import {
  useFetchTable,
  useFetchTableForRealtime,
  useRealTimeSubscription,
} from "@/lib/custom-hooks/useFetch";
import { useCapitalizeName } from "@/lib/custom-hooks/useCapitalizeName";
import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/utils/supabaseClient";

const Messages = ({ params }: { params: { chat: string } }) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const router = useRouter();
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const currentUserId = useCurrentUserId();

  const {
    data: messages,
    error,
    isLoading,
  } = useFetchTableForRealtime({
    tableName: "messages",
    select: "id, created_at, sender_id, recipient_id, sent_at, content",
    or: `sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`,
  });

  const { chat } = params;
  let contactName = useCapitalizeName(chat, "%20");

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const getMessages = () => {
    const data = fetchTable("messages", {
      or: `sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`,
    });
    return data;
  };

  const getMessagesDistinct = () => {
    const data = fetchTable("distinct_messages", {
      or: `sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`,
    });
    return data;
  };

  useEffect(() => {
    scrollToBottom; // Scrolls to the bottom on mount
    // realTime("messages-realtime", "messages", getMessages);
  }, []);

  // useRealTimeSubscription({
  //   channelName: "distinct_messages_realtime",
  //   tableName: "messages",
  //   payload: getMessagesDistinct,
  // });

  useRealTimeSubscription({
    channelName: "messages_realtime",
    tableName: "messages",
    payload: getMessages,
  });

  //  useRealTimeSubscription({
  //   channelName: "messages_realtime",
  //   tableName: "messages",
  //   payload: getMessages,
  // });

  // const {
  //   data: messages,
  //   error,
  //   isLoading,
  //   isValidating,
  //   // count,
  // } = useFetchTable({
  //   tableName: "messages",
  //   order: { column: "created_at", ascending: true },
  //   or: `sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`,
  //   select: "id, created_at, sender_id, sent_at, content ",
  // });

  return (
    <>
      {/* {currentUserId === null && router.push("/login")} */}
      {pathname !== "/dashboard/messages" && (
        <div className="sticky top-0 z-40 flex items-center justify-between p-4 text-white rounded-xl bg-primary-400">
          <Image
            src={icons.ArrowIcon}
            alt="go back"
            onClick={() => router.back()}
            className="inline-flex text-3xl lg:hidden"
          />
          <h2 className="text-xl">{contactName}</h2>
          <BlockUserPopOver />
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center h-[70vh]:">
          <Spinner color="success" />
        </div>
      ) : (
        error && <p>Error: {error}</p>
      )}

      {messages ? (
        <div
          className="flex flex-col w-full h-[80%] mt-5 overflow-y-scroll hidden-scrollbar py-5"
          ref={messageContainerRef}
        >
          {messages?.map((message: Message) => {
            if (message.sender_id === currentUserId) {
              return (
                <MessageBubble
                  key={message.sent_at}
                  content={message.content}
                  time={message.sent_at}
                />
              );
            }
            return (
              <MessageBubble2
                key={message.sent_at}
                content={message.content}
                time={message.sent_at}
              />
            );
          })}
          {/* <MessageBubble2 content="Hi. Good morning" time="9:30 am" /> */}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[70vh]">
          {" "}
          {/* will render when there is no messages */}
          <NoMessageState />
        </div>
      )}
    </>
  );
};

export default Messages;
