"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Chat from "./components/Chat";
import { usePathname } from "next/navigation";
import supabase from "@/lib/utils/supabaseClient";
import userSession from "@/lib/utils/userSession";

type Props = {
  children: React.ReactNode;
};

type Message = {
  created_at: string;
  recipient_id: { id: string; full_name: string; profile_img: string | null };
  sender_id: string;
  content: string;
  // created_at: string;
};

const MessagesLayout = ({ children }: Props) => {
  const pathname = usePathname();

  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  // console.log(currentUserId);
  // console.log(messages);

  useEffect(() => {
    const getUserId = async () => {
      const data = await userSession();
      const id = String(data?.session.user.id);
      setCurrentUserId(id);
    };

    const getMessages = async () => {
      const { data: allMessages } = await supabase
        .from("messages")
        .select(
          "sender_id, recipient_id (id, full_name, profile_img), created_at, content"
        )
        .eq("sender_id", currentUserId)
        .order("created_at", { ascending: false })
      // console.log(allMessages);
      setMessages(allMessages);
    };

    getUserId();
    getMessages();
  }, [currentUserId]);

  const handleAddMessage = async (e: any) => {
    e.preventDefault();
    const { data: message, error } = await supabase
      .from("messages")
      .insert({
        content: e.target[0].value,
        sender_id: currentUserId,
        recipient_id: "5f297aa7-18f5-42ff-9270-8ba8061cae95",
      })
      .select();

    e.target[0].value = ""; // reset message field
  };

  return (
    <>
      <h2 className="text-2xl font-[500] mb-5 text-neutral-900">Messages</h2>
      <section className="max-h-screen grid-cols-6 gap-5 lg:grid">
        <aside
          className={`${
            pathname !== "/dashboard/messages" && "hidden"
          } lg:block col-span-2 max-h-screen p-4 px-0 overflow-y-scroll lg:px-4 lg:border-r hidden-scrollbar`}
        >
          {messages?.map((message) => (
            <Chat
              key={message.recipient_id.id}
              href={`/dashboard/messages/${message.recipient_id.full_name}`}
              image="/assets/images/dashboard-navbar.png"
              name={message.recipient_id.full_name}
              last_message={message.content}
              messages_count={3}
            />
          ))}
        </aside>
        <main
          className={`${
            pathname == "/dashboard/messages" && "hidden"
          } lg:block relative w-full col-span-4 h-full`}
        >
          {children} {/* messages */}
          <div className="fixed bottom-0 w-11/12 py-5 bg-white lg:w-[64%]">
            <form
              action=""
              onSubmit={handleAddMessage}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                className="w-full p-3 border rounded-md text-neutral-800 placeholder:text-sm"
                placeholder="Type your message"
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
        </main>
      </section>
    </>
  );
};

export default MessagesLayout;
