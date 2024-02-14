"use client";
import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "../../../components/shared/messages/MessageBubble";
import { usePathname } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import NoMessageState from "../../../components/shared/messages/NoMessageState";
// import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/utils/supabaseClient";
import { fetchOrderRule } from "@/lib/utils/fetchRules";
import realTime from "@/lib/utils/realTime";
import UsernameDisplayBar from "../../../components/shared/messages/UsernameDisplayBar";
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

    if (messageContainerRef.current) {
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
      {(pathname !== "/dashboard/lister/messages" ||
        pathname !== "/dashboard/renter/messages") && (
        // <UsernameDisplayBar userName={userName as string} />
        <UsernameDisplayBar userName={"Jane Mumuni"} />
      )}

      {/* {isLoading ? (
        <div className="h-[70vh]: flex items-center justify-center">
          <Spinner color="success" />
        </div>
      ) : (
        error && <p>Error: {error}</p>
      )} */}

      {true ? (
        <div
          className="hidden-scrollbar mt-5 flex h-[80%] w-full flex-col overflow-y-scroll py-5"
          ref={messageContainerRef}
        >
          {/* {messages?.map((message: Message) => {
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
          })} */}
          <MessageBubble
            type="sender"
            content={"Absolutely!"}
            time={"2 Jan 2024, 18:09"}
          />
          <MessageBubble
            type="recipient"
            content={"Hi, nice apartment"}
            time={"8 Jan 2024, 2:15"}
          />
          <MessageBubble
            type="recipient"
            content={"Buy soon"}
            time={"15 Jan 2024, 16:15"}
          />
        </div>
      ) : (
        <div className="flex h-[70vh] items-center justify-center">
          <NoMessageState />
        </div>
      )}
    </>
  );
};

export default Messages;
