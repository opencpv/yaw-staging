"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ChatInterface } from "../../../../../interfaces";
import Rating from "../../components/shared/Rating";

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
      className={`grid min-h-[3.5rem] cursor-default grid-cols-8 gap-6 border-b px-2 pb-2.5 pt-8 ${
        isSelected && "bg-slate-50/60"
      } light-green-hover transition-all`}
      onClick={() => setViewed(true)}
    >
      <div className="col-span-7 grid grid-cols-6 items-start gap-5">
        <div className="col-span-2 flex flex-col items-center gap-2">
          <div className="relative h-16 w-16 shrink-0 rounded-full">
            <Image
              src={images.UserNoImage}
              alt={name}
              className="rounded-full"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <Rating rate={3.5} count={5} />
        </div>
        <div className="col-span-4 flex flex-col gap-5 truncate">
          <h4 className="font-[700] text-primary-500">{name}</h4>
          <p className="truncate text-neutral-800">{last_message}</p>
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
