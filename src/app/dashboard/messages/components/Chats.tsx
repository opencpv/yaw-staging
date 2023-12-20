import { usePathname } from "next/navigation";
import React from "react";
import Chat from "./Chat";
import Spinner from "../../components/shared/Spinner";
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
        pathname !== "/dashboard/messages" && "hidden"
      } col-span-2 max-h-screen max-w-lg p-4 px-0 overflow-y-scroll lg:block lg:px-4 lg:border-r hidden-scrollbar`}
    >
      {props.isLoading ? (
        <Spinner />
      ) : props.error ? (
        <p>Error: {props.error}</p>
      ) : (
        props.messages?.map((message) => {
          let capitalizedName = capitalizeName(
            message?.recipient_full_name as string,
            " "
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
      )}
    </aside>
  );
};

export default Chats;
