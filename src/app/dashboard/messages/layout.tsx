"use client";
import React from "react";
import Image from "next/image";
import Chat from "../components/messages/Chat";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const MessagesLayout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <h2 className="text-2xl font-[500] mb-5 text-neutral-900">Messages</h2>
      <section className="grid-cols-6 gap-5 lg:grid">
        <aside
          className={`${
            pathname !== "/dashboard/messages" && "hidden"
          } lg:block max-h-screen col-span-2 p-4 px-0 overflow-y-scroll lg:px-4 lg:border-r hidden-scrollbar`}
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
        <div
          className={`${
            pathname == "/dashboard/messages" && "hidden"
          } lg:block col-span-4`}
        >
          {children}
          <form
            action=""
            className="fixed bottom-0 flex items-center w-full lg:w-8/12 gap-4 mb-5"
          >
            <input
              type="text"
              className="w-8/12 p-3 border rounded-md placeholder:text-sm"
              placeholder="Type your message"
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
      </section>
    </>
  );
};

export default MessagesLayout;
