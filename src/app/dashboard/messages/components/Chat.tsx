"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ChatInterface } from "../../../../../interfaces";

const Chat = ({
  href,
  image,
  name,
  last_message,
  messages_count,
  id,
}: ChatInterface) => {
  const pathname = usePathname();
  const router = useRouter();
  const [viewed, setViewed] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { images } = useAssets();

  useEffect(() => {
    if (pathname?.split("/")[3] === id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [id, pathname]);

  const handleClick = () => {
    router.push(`/dashboard/messages/${id}`);
    setViewed(true);
  };

  return (
    <div
      className={`grid items-start grid-cols-8 gap-6 pt-8 pb-2 first:pt-2 border-b min-h-[3.5rem] cursor-default ${
        isSelected && "bg-slate-50/60"
      } hover:bg-neutral-50/50 transition-all`}
      onClick={handleClick}
    >
      <div className="flex items-center col-span-7 gap-5">
        <div className="relative w-16 h-16 rounded-full">
          <Image
            src={images.UserNoImage}
            alt={name}
            className="rounded-full"
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
  );
};

export default Chat;
