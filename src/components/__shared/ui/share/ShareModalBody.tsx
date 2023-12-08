import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill, RiTwitterXLine, RiWhatsappFill } from "react-icons/ri";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareModalBody = (props: ShareDataProps) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="border rounded-lg hover:bg-slate-50">
        <FacebookShareButton {...props} className="inline-block w-full">
          <div className="flex items-center gap-3 p-4 w-full">
            <FaFacebook className="text-[#3b429f] rounded-full text-3xl" />
            <span className="text-neutral-800">Facebook</span>
          </div>
        </FacebookShareButton>
      </div>
      <div className="border rounded-lg hover:bg-slate-50">
        <TwitterShareButton {...props} className="inline-block w-full">
          <div className="flex items-center gap-3 p-4 w-full">
            <RiTwitterXFill className="rounded-full text-3xl" />
            <span className="text-neutral-800">X</span>
          </div>
        </TwitterShareButton>
      </div>
      <div className="border rounded-lg hover:bg-slate-50">
        <WhatsappShareButton {...props} className="inline-block w-full">
          <div className="flex items-center gap-3 p-4 w-full">
            <RiWhatsappFill className="text-[#60d669] rounded-full text-3xl" />
            <span className="text-neutral-800">WhatsApp</span>
          </div>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareModalBody;
