"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Button, ButtonProps } from "../Button";
// import { useMessageStore } from "@/store/dashboard/useMessageStore";
// import { useUserDetails } from "@/lib/custom-hooks/message/useUserDetails";
// import { useUserSession } from "@/lib/custom-hooks/database/useUserSession";
// import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PiChatCenteredDots } from "react-icons/pi";
import { useAppStore } from "@/store/dashboard/AppStore";
import dynamic from "next/dynamic";

const SignInRequiredModal = dynamic(
  () => import("../../modals/sign-in-required-modal"),
);

type Props = {
  id?: string;
  isIcon?: boolean;
} & ButtonProps;

/** */
const MessageButton = ({
  color,
  className,
  id,
  children,
  isIcon,
  variant = "outline",
  ...props
}: Props) => {
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
      {isIcon ? (
        <Button
          size="icon"
          variant="ghost"
          title="Send message"
          className={cn(className)}
          onClick={handleClick}
          {...props}
        >
          <PiChatCenteredDots size={24} className="text-neutral-700" />
        </Button>
      ) : (
        <Button
          variant={variant}
          color={color}
          size="full"
          title={"Send message"}
          className={cn(className)}
          onClick={handleClick}
          isLoading={loadingMessage}
          {...props}
        >
          {children ?? "Send Message"}
        </Button>
      )}
    </>
  );
};

export default MessageButton;
