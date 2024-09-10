"use client";
import React, { useEffect, useState } from "react";
import { Button, ButtonProps } from ".";
import { cn } from "@/lib/utils";
import { PiChatCenteredDots } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md"; // Import the second icon
import { useAppStore } from "@/store/dashboard/AppStore";
import dynamic from "next/dynamic";

const SignInRequiredModal = dynamic(
  () => import("../modals/sign-in-required-modal"),
);

type Props = {
  id?: string;
  isIcon?: boolean;
  withIconAndText?: boolean; // Make this optional
  iconType?: "PiChatCenteredDots" | "MdOutlineMessage"; // New prop to specify the icon type
} & ButtonProps;

/** */
const MessageButton = ({
  color,
  className,
  id,
  children,
  isIcon,
  withIconAndText,
  iconType = "PiChatCenteredDots", // Default to PiChatCenteredDots
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
      // Handle click for logged-in users
    } else {
      setSignInModalOpen(true);
    }
  };

  useEffect(() => {}, []);

  // Determine which icon to use based on the iconType prop
  const IconComponent =
    iconType === "MdOutlineMessage" ? MdOutlineMessage : PiChatCenteredDots;

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
          <IconComponent size={24} className="text-neutral-700" />
        </Button>
      ) : withIconAndText ? (
        <Button
          variant={variant}
          color={color}
          size="full"
          title={"Send message"}
          className={cn("flex items-center gap-2", className)}
          onClick={handleClick}
          isLoading={loadingMessage}
          {...props}
        >
          <IconComponent size={20} />
          {children ?? "Send Message"}
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
