"use client";
import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Chat from "../components/messages/Chat";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import MessageBubble from "../components/messages/MessageBubble";
import BlockUserPopOver from "../components/messages/BlockUserPopOver";

type Props = {};

const Messages = (props: Props) => {
  return (
    <>
      <h2 className="text-2xl font-[500] mb-5 text-neutral-900">Messages</h2>
      <section className="grid-cols-6 gap-5 lg:grid">
        <aside className="max-h-screen col-span-2 p-4 px-0 overflow-y-scroll lg:px-4 lg:border-r hidden-scrollbar">
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </aside>
        <div className="hidden col-span-4 lg:block">
          <div className="flex items-center justify-between p-4 text-white rounded-xl bg-primary-400">
            <h2 className="text-xl">Mary Jane</h2>
            {/* <Link href="" className="flex items-center gap-2">
                <HiArrowLeft />
                <p>Go back</p>
              </Link> */}
            <BlockUserPopOver />
          </div>

          <div className="h-[70vh] flex flex-col  mt-5 space-y-5 w-full overflow-y-scroll hidden-scrollbar">
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
          <form
            action=""
            className="fixed bottom-0 flex items-center w-8/12 gap-4 mb-5"
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

export default Messages;
