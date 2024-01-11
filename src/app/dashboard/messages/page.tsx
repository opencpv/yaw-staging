"use client";
import React, { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import NoMessageState from "./components/NoMessageState";

type Props = {};

const Messages = (props: Props) => {
  return (
    <>
      <NoMessageState />
    </>
  );
};

export default Messages;
