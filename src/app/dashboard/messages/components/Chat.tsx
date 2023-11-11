"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Chat = ({
  href,
  image,
  name,
  last_message,
  messages_count,
}: ChatInterface) => {
  const [viewed, setViewed] = useState<boolean>(false);

  return (
    <Link href={`${href}`}>
      <div
        className="grid items-start grid-cols-8 gap-6 pt-8 pb-2 first:pt-2 border-b min-h-[3.5rem] cursor-default hover:scale-[1.02] transition-all"
        onClick={() => setViewed(true)}
      >
        <div className="flex items-center col-span-7 gap-5">
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src={image}
              alt={name}
              className=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col justify-between h-full col-span-9">
            <h4 className="text-primary-500 font-[700]">{name}</h4>
            <p className="leading-[3] truncate text-neutral-800">
              {last_message}
            </p>
          </div>
        </div>
        {viewed === false ? (
          <div className="flex items-center justify-center col-span-1 p-3 text-sm text-white rounded-full w-7 h-7 justify-self-end bg-neutral-600">
            {messages_count}
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default Chat;
