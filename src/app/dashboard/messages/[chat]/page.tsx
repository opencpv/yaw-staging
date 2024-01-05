"use client";
import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "../components/MessageBubble";
import { usePathname } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import MessageBubble2 from "../components/MessageBubble2";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import NoMessageState from "../components/NoMessageState";
// import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/utils/supabaseClient";
import { fetchOrderRule } from "@/lib/utils/fetchRules";
import realTime from "@/lib/utils/realTime";
import UsernameDisplayBar from "../components/UsernameDisplayBar";
import { useUserDetails } from "@/lib/custom-hooks/message/useUserDetails";
import { scrollToBottom } from "@/lib/utils/pageAction";

const Messages = ({ params }: { params: { chat: string } }) => {
  const { chat: chatID } = params;

  const pathname = usePathname();
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const currentUserId = useCurrentUserId();
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const { userName } = useUserDetails(chatID);

  // console.log(currentUserId);

  useEffect(() => {
    const getMessages = async () => {
      let { data: messages, error } = await supabase
        .from("messages")
        .select("id, created_at, sender_id, recipient_id, sent_at, content")
        .eq("recipient_id", chatID as string)
        .order("created_at", fetchOrderRule(true));

      setMessages(messages as Message[]);
      setError(error?.message);
      setIsLoading(false);
    };
    getMessages();

    if (messageContainerRef.current){
      setTimeout(() => {
        scrollToBottom(messageContainerRef.current?.scrollHeight);
      }, 200);
    }

    realTime("message_realtime", "messages", getMessages);
  }, [chatID]);

  // const getMessages = () => {
  //   const data = fetchTable("messages", {
  //     or: `sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`,
  //   });
  //   return data;
  // };

  return (
    <>
      {/* {currentUserId === null && router.push("/login")} */}
      {pathname !== "/dashboard/messages" && (
        <UsernameDisplayBar userName={userName as string} />
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
        </div>
      ) : (
        <div className="flex items-center justify-center h-[70vh]">
          <NoMessageState />
        </div>
      )}
    </>
  );
};

export default Messages;
