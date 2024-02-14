//@ts-nocheck
"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import supabase from "@/lib/utils/supabaseClient";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import NoMessageState from "../../components/shared/messages/NoMessageState";
import { useProtectedRoute } from "@/lib/custom-hooks/useProtectedRoute";
import { fetchOrderRule } from "@/lib/utils/fetchRules";
import { useMessageStore } from "@/store/dashboard/useMessageStore";
import realTime from "@/lib/utils/realTime";
import MessageSendArea from "../../components/shared/messages/MessageSendArea";
import Chats from "../../components/shared/messages/Chats";

type Props = {
  children: React.ReactNode;
};

const MessagesLayout = ({ children }: Props) => {
  // useProtectedRoute();

  const pathname = usePathname();
  const [messageContent, setMessageContent] = useState<string>("");
  const [messages, setMessages] = useState<DistinctMessage[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const currentUserId = useCurrentUserId();
  const recipientId = useMessageStore((state) => state.recipientId);

  // console.log(currentUserId)

  useEffect(() => {
    const getDistinctMessages = async () => {
      let { data: messages, error } = await supabase
        .from("distinct_messages")
        .select(
          "recipient_id, sender_id, recipient_full_name, recipient_profile_img, content",
        )
        .eq("sender_id", currentUserId as string)
        .order("created_at", fetchOrderRule(true));

      setMessages(messages as DistinctMessage[]);
      setError(error?.message);
      setIsLoading(false);
    };
    getDistinctMessages();

    realTime(
      "distinct_message_realtime",
      "distinct_messages",
      getDistinctMessages,
    );
  }, [currentUserId]);

  const handleAddMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase
      .from("messages")
      .insert({
        content: e.target[0].value,
        sender_id: currentUserId,
        recipient_id: recipientId,
      })
      .select();

    e.target[0].value = ""; // reset message field
  };

  // const { mutate, error: mutateError, reset, isPending, isError} = useMutation({
  //   mutationFn: addTodo,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ["messages"]})
  //   }
  // });

  return (
    <div className="h-[100svh]">
      <h2 className="sticky top-0 z-40 mb-5 bg-white pb-5">Messages</h2>
      {messages && messages?.length < 0 && (
        <NoMessageState className="mt-20 lg:hidden" />
      )}

      <section className="h-full max-h-[100svh] grid-cols-6 gap-5 lg:grid">
        {/* grid col */}
        <Chats isLoading={isLoading} error={error} messages={messages} />
        {/* grid col */}
        <main
          className={`${
            (pathname === "/dashboard/lister/messages" ||
              pathname === "dashboard/renter/messages") &&
            "hidden"
          } relative col-span-4 h-full max-h-[100svh] w-full lg:block lg:max-xl:col-span-3`}
        >
          {children} {/* messages */}
          {(pathname?.includes("/dashboard/lister/messages/") ||
            pathname?.includes("/dashboard/renter/messages/")) && (
            <MessageSendArea
              messageContent={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              onSubmit={handleAddMessage}
            />
          )}
        </main>
      </section>
    </div>
  );
};

export default MessagesLayout;
