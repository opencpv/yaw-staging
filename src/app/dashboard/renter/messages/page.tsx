"use client";
import React, { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
const NoMessageState = dynamic(
  () => import("../../components/shared/messages/NoMessageState"),
);

type Props = {};

const Messages = (props: Props) => {
  return (
    <>
      <NoMessageState />
    </>
  );
};

export default Messages;
