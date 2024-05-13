"use client";
import React from "react";
import {
  EmailShareButton,
  FacebookIcon,
  XIcon,
  EmailIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import ShareButtonComponent from "./ShareButtonComponent";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import CopyButton from "./CopyButton";

const ShareModalBody = (props: ShareDataProps) => {
  const { onOpen: toastOnOpen } = useToastDisclosure();

  return (
    <div className="grid grid-cols-1 gap-5 pb-10 xs:grid-cols-2">
      <ShareButtonComponent
        ShareButton={FacebookShareButton}
        socialName="Facebook"
        Icon={FacebookIcon}
        iconColor="#3b429f"
        {...props}
      />
      <ShareButtonComponent
        ShareButton={WhatsappShareButton}
        socialName="WhatsApp"
        Icon={WhatsappIcon}
        iconColor="#60d669"
        {...props}
      />
      <ShareButtonComponent
        ShareButton={TwitterShareButton}
        socialName="X"
        Icon={XIcon}
        {...props}
      />
      <ShareButtonComponent
        ShareButton={EmailShareButton}
        socialName="Email"
        Icon={EmailIcon}
        {...props}
      />
      <CopyButton />
    </div>
  );
};

export default ShareModalBody;
