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

const MessagesLayout = ({ children }: Props) => {
  const pathname = usePathname();

  const [currentUserId, setCurrentUserId] = useState(null);

  const getUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    console.log(user)
  };

  useEffect(() => {
    getUser()
  }, []);

  const data = userSession();
  console.log("Data: ", data);

  const [messageContent, setMessageContent] = useState<string>("");

  const handleAddMessage = async (e: any) => {
    e.preventDefault();
    const { data: message, error } = await supabase
      .from("messages")
      .insert({
        content: e.target[0].value,
        sender_id: "d7caa3c8-e767-4d24-ab5d-44699d8a41ab",
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
          <Chat
            href="/dashboard/messages/mary-jane"
            image="/assets/images/dashboard-navbar.png"
            name="Mary Jane"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
          <Chat
            href="/dashboard/messages/john-doe"
            image="/assets/images/dashboard-navbar.png"
            name="John Doe"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
          <Chat
            href="/dashboard/messages/kwame"
            image="/assets/images/dashboard-navbar.png"
            name="Kwame"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
          <Chat
            href="/dashboard/messages/andor"
            image="/assets/images/dashboard-navbar.png"
            name="Andor"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
          <Chat
            href="/dashboard/messages/lydia"
            image="/assets/images/dashboard-navbar.png"
            name="Lydia"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
          <Chat
            href="/dashboard/messages/mary-jane"
            image="/assets/images/dashboard-navbar.png"
            name="Mary Jane"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
          <Chat
            href="/dashboard/messages/kwame"
            image="/assets/images/dashboard-navbar.png"
            name="Kwame"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
          <Chat
            href="/dashboard/messages/andor"
            image="/assets/images/dashboard-navbar.png"
            name="Andor"
            last_message=" Lorem ipsum dolor, sit amet consectetur"
            messages_count={3}
          />
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
