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

  return (
    <Link
      href={`/dashboard/messages/${id}`}
      className={`grid min-h-[3.5rem] cursor-default grid-cols-8 items-start gap-6 border-b pb-2 pt-8 ${
        isSelected && "bg-slate-50/60"
      } light-green-hover transition-all`}
      onClick={() => setViewed(true)}
    >
      <div className="col-span-7 flex items-center gap-5">
        <div className="relative h-16 w-16 shrink-0 rounded-full">
          <Image
            src={images.UserNoImage}
            alt={name}
            className="rounded-full"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-span-9 flex h-full flex-col justify-between">
          <h4 className="font-[700] text-primary-500">{name}</h4>
          <p className="truncate leading-[3] text-neutral-800">
            {last_message}
          </p>
        </div>
      </div>
      {/* messages counter */}
      {!viewed && messages_count > 0 && (
        <div className="col-span-1 flex h-7 w-7 items-center justify-center justify-self-end rounded-full bg-neutral-600 p-3 text-sm text-white">
          {messages_count}
        </div>
      )}
    </Link>
  );
};

export default Chat;
