//@ts-nocheck

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Chat from "./components/Chat";
import { usePathname } from "next/navigation";
import supabase from "@/lib/utils/supabaseClient";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import NoMessageState from "./components/NoMessageState";
import { fetchTable } from "@/services/fetch";
import Spinner from "../components/shared/Spinner";
import {
  useFetchTable,
  useRealTimeSubscription,
} from "@/lib/custom-hooks/useFetch";
import { useProtectedRoute } from "@/lib/custom-hooks/useProtectedRoute";
import { useCapitalizeName } from "@/lib/custom-hooks/useCapitalizeName";
import capitalizeName from "@/lib/utils/capitalizeName";

type Props = {
  children: React.ReactNode;
};

type Message = {
  created_at: string;
  recipient_id: string;
  recipient_full_name: string;
  recipient_profile_image: string;
  sender_id: string;
  content: string;
};

const MessagesLayout = ({ children }: Props) => {
  useProtectedRoute();

  const pathname = usePathname();
  const [messageContent, setMessageContent] = useState<string>("");
  const currentUserId = useCurrentUserId();

  const getMessages = () => {
    const data = fetchTable("distinct_messages", {
      or: `sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`,
    });
    return data;
  };

  useRealTimeSubscription({
    channelName: "distinct_messages_realtime",
    tableName: "distinct_messages",
    payload: getMessages,
  });

  const {
    data: messages,
    error,
    isLoading,
    isValidating,
    count,
  } = useFetchTable({
    tableName: "distinct_messages",
    or: `sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`,
    select: "recipient_id, recipient_full_name, content ",
  });

  const handleAddMessage = async (e: any) => {
    e.preventDefault();
    const { data: message, error } = await supabase
      .from("messages")
      .insert({
        content: e.target[0].value,
        sender_id: currentUserId,
        recipient_id: "5f297aa7-18f5-42ff-9270-8ba8061cae95", // will change once getting
        // the recipient_id is implemented
      })
      .select();

    e.target[0].value = ""; // reset message field
  };

  return (
    <div className="h-screen">
      <h2 className="sticky top-0 z-40 bg-white pb-5 text-2xl font-[500] mb-5 text-neutral-900">
        Messages
      </h2>
      {messages && messages?.length < 0 && (
        <NoMessageState className="mt-20 lg:hidden" />
      )}

      <section className="h-full max-h-screen grid-cols-6 gap-5 lg:grid">
        <aside
          className={`${
            pathname !== "/dashboard/messages" && "hidden"
          } col-span-2 max-h-screen max-w-lg p-4 px-0 overflow-y-scroll lg:block lg:px-4 lg:border-r hidden-scrollbar`}
        >
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            messages?.map((message) => {
              let capitalizedName = capitalizeName(
                message?.recipient_full_name,
                " "
              );
              return (
                <Chat
                  key={message.recipient_id}
                  href={`/dashboard/messages/${message.recipient_full_name}`}
                  image="/assets/images/dashboard-navbar.png"
                  name={capitalizedName}
                  last_message={message.content}
                  messages_count={3}
                />
              );
            })
          )}
        </aside>
        <main
          className={`${
            pathname == "/dashboard/messages" && "hidden"
          } lg:block relative w-full col-span-4 h-full max-h-screen`}
        >
          {children} {/* messages */}
          {pathname.includes("/dashboard/messages/") && (
            <div className="sticky bottom-0 w-full py-5 bg-white">
              <form
                action=""
                onSubmit={handleAddMessage}
                className="flex items-center gap-4"
              >
                <input
                  type="text"
                  className="w-full p-3 border rounded-md text-neutral-800 placeholder:text-sm"
                  placeholder="Type your message"
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
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
          )}
        </main>
      </section>
    </div>
  );
};

export default MessagesLayout;
