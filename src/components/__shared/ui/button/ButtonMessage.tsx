"use client";
import React, { ReactNode, useState } from "react";
import Button from "../../ui/button/Button";
// import { useMessageStore } from "@/store/dashboard/useMessageStore";
// import { useUserDetails } from "@/lib/custom-hooks/message/useUserDetails";
// import { useUserSession } from "@/lib/custom-hooks/database/useUserSession";
import LoaderDots from "../../loader/LoaderDots";
// import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PiChatCenteredDots } from "react-icons/pi";

type Props = {
  id?: string;
  color?: "primary" | "gradient" | "accent" | "white";
  className?: string;
  children?: ReactNode;
  type?: 1 | 2;
};

const ButtonMessage = ({ color, className, id, children, type }: Props) => {
  // const router = useRouter();

  // const setRecipientId = useMessageStore((state) => state.setRecipientId);
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false);

  // const { userName } = useUserDetails(id);
  // const userSession = useUserSession();

  // const handleInternalMessaging = () => {
  //   setLoadingMessage(true);
  //   setRecipientId(id);
  //   if (userSession?.session) {
  //     // if (userName) router.push(`/dashboard/messages/${id}`);
  //     if (userName) location.href = `/dashboard/messages/${id}`;
  //   } else {
  //     router.push("/login");
  //   }
  // };

  if (type === 2)
    return (
      <Button
        isIconOnly
        title="Send message"
        className={cn(
          "flex w-full items-center justify-center rounded-md bg-secondary-50 px-4 text-neutral-800",
          className,
        )}
        // onClick={onOpen}
      >
        <PiChatCenteredDots size={16} />
      </Button>
    );
  else
    return (
      <Button
        variant="outline"
        color={color}
        title={"Send message"}
        className={cn("w-full p-4", className)}
        onClick={() => ""}
      >
        {loadingMessage ? <LoaderDots /> : children ?? "Send Message"}
      </Button>
    );
};

export default ButtonMessage;
