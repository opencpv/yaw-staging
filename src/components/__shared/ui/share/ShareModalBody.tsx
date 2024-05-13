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
import { PiClipboardText } from "react-icons/pi";

const ShareModalBody = (props: ShareDataProps) => {
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
      <div
        className="rounded-lg border hover:bg-slate-50"
        onClick={() => {
          navigator.clipboard.writeText(location.href);
        }}
      >
        <div className="flex w-full cursor-pointer items-center gap-3 p-4">
          <PiClipboardText size={30} />
          <span className="text-neutral-800">Copy</span>
        </div>
      </div>
    </div>
  );
};

export default ShareModalBody;
