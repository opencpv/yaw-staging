import { usePathname } from "next/navigation";
import React from "react";
import Chat from "./Chat";
import Spinner from "../Spinner";
import capitalizeName from "@/lib/utils/stringManipulation";

type Props = {
  isLoading: boolean;
  error: string | undefined;
  messages: DistinctMessage[];
};

const Chats = (props: Props) => {
  const pathname = usePathname();
  return (
    <aside
      className={`${
        pathname !==
          ("/dashboard/renter/messages" || "/dashboard/lister/messages") &&
        "hidden"
      } hidden-scrollbar col-span-2 max-h-screen max-w-lg overflow-y-scroll lg:block lg:border-r lg:max-xl:col-span-3`}
    >
      {/* {props.isLoading ? (
        <Spinner />
      ) : props.error ? (
        <p>Error: {props.error}</p>
      ) : (
        props.messages?.map((message) => {
          let capitalizedName = capitalizeName(
            message?.recipient_full_name as string,
            " ",
          );
          return (
            <Chat
              key={message.recipient_id}
              href={`/dashboard/messages/${message.recipient_id}`}
              image={message.recipient_profile_img as string}
              name={capitalizedName}
              last_message={message.content as string}
              messages_count={3}
              id={message.recipient_id}
            />
          );
        })
      )} */}
      <Chat
        href={`/dashboard/messages/John Doe`}
        image=""
        name="John Doe"
        last_message="This is my last message"
        messages_count={3}
        id={"2"}
      />
      <Chat
        href={`/dashboard/messages/Jane Mumuni`}
        image=""
        name="Jane Mumuni"
        last_message="Hi, nice apartment"
        messages_count={0}
        id={"3"}
      />
      <Chat
        href={`/dashboard/messages/Jane Mumuni`}
        image=""
        name="John Doe"
        last_message="Hi, nice apartment. How are you? I am fine"
        messages_count={1}
        id={"34"}
      />
      <Chat
        href={`/dashboard/messages/Jane Mumuni`}
        image=""
        name="Jane Mumuni"
        last_message="Hello, I am fine"
        messages_count={4}
        id={"4"}
      />
    </aside>
  );
};

export default Chats;
