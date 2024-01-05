"use client";
import React, { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import NoMessageState from "./components/NoMessageState";

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
      <NoMessageState />
    </>
  );
};

export default Messages;
