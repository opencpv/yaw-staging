"use client";
import React, {
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MessageBubble from "../components/MessageBubble";
import BlockUserPopOver from "../components/BlockUserPopOver";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { motion } from "framer-motion";
import supabase from "@/lib/utils/supabaseClient";
import { Spinner } from "@nextui-org/react";
import userSession from "@/lib/utils/userSession";
import MessageBubble2 from "../components/MessageBubble2";

type fetchedMessageType = {
  sender_id: string;
  recipient_id: string;
  content: string;
  sent_at: string;
};

const Messages = ({ params }: { params: { chat: string } }) => {
  const { icons } = useAssets();
  const router = useRouter();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const [fetchedMessages, setFetchedMessages] = useState<
    fetchedMessageType[] | null
  >(null);

  const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const { chat } = params;
  let contactName = useMemo(() => {
    // Algorithm for getting contact name
    let nameSplit = chat.split("%20");
    let nameSplitCapitalized = nameSplit.map(
      (name) => name.slice(0, 1).toUpperCase() + name.slice(1)
    );
    return nameSplitCapitalized.join(" ");
  }, [chat]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const getMessages = async () => {
    try {
      const {
        data: messages,
        error,
        status: messagesStatus,
      } = await supabase
        .from("messages")
        .select("*")
        .or(`sender_id.eq.${currentUserId}, recipient_id.eq.${currentUserId}`);

      if (messages) {
        setFetchedMessages(messages);
      }

      if (messagesStatus === 200) {
        setMessagesLoading(false);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // Scrolls to the bottom on mount
  useEffect(() => {
    scrollToBottom;
    const getUserId = async () => {
      const data = await userSession();
      const id = String(data?.session.user.id);
      setCurrentUserId(id);
    };

    getUserId();
    getMessages();
    const messages = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          getMessages();
        }
      )
      .subscribe();
  }, []);

  return (
    <>
      <div className="sticky top-0 flex items-center justify-between p-4 text-white rounded-xl bg-primary-400">
        <Image
          src={icons.ArrowIcon}
          alt="go back"
          onClick={() => router.back()}
          className="inline-flex text-3xl lg:hidden"
        />
        <h2 className="text-xl">{contactName}</h2>
        <BlockUserPopOver />
      </div>
      {messagesLoading && (
        <div className="flex items-center justify-center h-[70vh]:">
          <Spinner color="success" />
        </div>
      )}
      {fetchedMessages && fetchedMessages?.length > 0 ? (
        <div
          className="flex flex-col w-full h-[70dvh] mt-5 mb-20 sm:mb-0 overflow-y-scroll hidden-scrollbar py-5"
          ref={messageContainerRef}
        >
          {fetchedMessages?.map((message) => {
            if (message.sender_id === currentUserId){
              return (
              <MessageBubble
                key={message.sent_at}
                content={message.content}
                time={message.sent_at}
              />
              )
            }
            return (
              <MessageBubble2
                key={message.sent_at}
                content={message.content}
                time={message.sent_at}
              />
            );
          })}
          {/* <MessageBubble2 content="Hi. Good morning" time="9:30 am" /> */}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[70vh]">
          {" "}
          {/* will render when there is no messages */}
          <div className="flex flex-col items-center text-center gap-y-2 text-primary-400">
            <motion.div whileInView={{ x: 0 }} initial={{ x: 20 }}>
              <Image
                src={icons.ChatIcon}
                alt="chat"
                width={80}
                height={90}
                className=""
              />
            </motion.div>
            <h1 className="text-2xl font-[600] mt-3">Messages</h1>
            <p className="">Send and receive messages with rentright</p>
            <p className="capitalize text-[#8DA5A4]">Happy messaging</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Messages;
