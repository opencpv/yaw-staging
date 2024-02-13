"use client";
import React, { ReactNode, useState } from "react";
import Button from "../../ui/button/Button";
import { useMessageStore } from "@/store/dashboard/useMessageStore";
import { useUserDetails } from "@/lib/custom-hooks/message/useUserDetails";
import { useUserSession } from "@/lib/custom-hooks/database/useUserSession";
import LoaderDots from "../../loader/LoaderDots";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  color?: "primary" | "gradient" | "accent" | "white";
  className?: string;
  children?: ReactNode;
};

const ButtonMessage = ({ color, className, id, children }: Props) => {
  const router = useRouter();

  const setRecipientId = useMessageStore((state) => state.setRecipientId);
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false);

  const { userName } = useUserDetails(id);
  const userSession = useUserSession();

  const handleInternalMessaging = () => {
    setLoadingMessage(true);
    setRecipientId(id);
    if (userSession?.session) {
      // if (userName) router.push(`/dashboard/messages/${id}`);
      if (userName) location.href = `/dashboard/messages/${id}`;
    } else {
      router.push("/login");
    }
  };

  return (
    <Button
      variant="outline"
      color={color}
      className={cn("w-full p-4", className)}
      onClick={handleInternalMessaging}
    >
      {loadingMessage ? <LoaderDots /> : children ?? "Send Message"}
    </Button>
  );
};

export default ButtonMessage;
