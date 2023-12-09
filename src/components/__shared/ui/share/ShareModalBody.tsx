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

const ShareModalBody = (props: ShareDataProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 xs:grid-cols-2">
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
    </div>
  );
};

export default ShareModalBody;