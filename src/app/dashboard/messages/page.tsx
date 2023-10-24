"use client";
import React, { useEffect } from "react";
import BlockUserPopOver from "./components/BlockUserPopOver";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

type Props = {};

const Messages = (props: Props) => {
  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    }
  }, []);
  return (
    <>
      <div className="flex items-center justify-between p-4 text-white rounded-xl bg-primary-400">
        <h2 className="text-xl">Mary Jane</h2>
        <BlockUserPopOver />
      </div>

      <div className="flex flex-col  mt-5 space-y-5 w-full overflow-y-scroll hidden-scrollbar">
        {/* <MessageBubble /> */}
      </div>
    </>
  );
};

export default Messages;
