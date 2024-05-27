"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Button from "./Button";
// import { useMessageStore } from "@/store/dashboard/useMessageStore";
// import { useUserDetails } from "@/lib/custom-hooks/message/useUserDetails";
// import { useUserSession } from "@/lib/custom-hooks/database/useUserSession";
import LoaderDots from "../loader/LoaderDots";
// import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PiChatCenteredDots } from "react-icons/pi";
import { useAppStore } from "@/store/dashboard/AppStore";
import dynamic from "next/dynamic";

const SignInRequiredModal = dynamic(
  () => import("../modals/SignInRequiredModal"),
);

type Props = {
  id?: string;
  color?: "primary" | "gradient" | "accent" | "white";
  className?: string;
  children?: ReactNode;
  type?: 1 | 2;
};

const MessageButton = ({ color, className, id, children, type }: Props) => {
  // const router = useRouter();
  const { user } = useAppStore();
  // const setRecipientId = useMessageStore((state) => state.setRecipientId);
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

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

  const handleClick = () => {
    if (user) {
      //
    } else {
      setSignInModalOpen(true);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <SignInRequiredModal
        open={signInModalOpen}
        onOpenChange={setSignInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />
      {type === 2 ? (
        <Button
          isIconOnly
          title="Send message"
          className={cn("", className)}
          onClick={handleClick}
        >
          <PiChatCenteredDots size={24} className="text-neutral-700" />
        </Button>
      ) : (
        <Button
          variant="outline"
          color={color}
          title={"Send message"}
          className={cn("w-full", className)}
          onClick={handleClick}
        >
          {loadingMessage ? <LoaderDots /> : children ?? "Send Message"}
        </Button>
      )}
    </>
  );
};

export default MessageButton;
