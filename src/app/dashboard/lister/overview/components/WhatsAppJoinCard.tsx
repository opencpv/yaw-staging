import Button from "@/components/__shared/ui/button/Button";
import images from "@/enum/temp/images";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {};

const WhatsAppJoinCard = (props: Props) => {
  const { images } = useAssets();
  return (
    <div className="border rounded-xl">
      <div className="flex gap-5 rounded-t-xl bg-primary-400 text-white min-h-[5rem] p-5">
        <div className="relative w-12 h-12">
          <Image
            src={images.ProfileImage}
            alt="profile image"
            fill
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute bottom-0 right-1 rounded-full h-2.5 w-2.5 bg-[#00A651]"></div>
        </div>
        <h2 className="font-[500]">John Doe</h2>
      </div>
      <div className="relative min-h-[16rem] w-full p-10">
        <Image
          src="/assets/images/dashboard/whatsapp-bg.png"
          alt="WhatsApp background"
          fill
          className=""
          style={{ objectFit: "cover" }}
        />
        <div className="flex items-start relative z-10 max-w-[210px]">
          <Image
            src="/assets/images/dashboard/chat-triangle.png"
            alt="white triangle"
            width={12}
            height={12}
          />
          <div className="p-5 bg-white text-neutral-500">
            <h4>Rentrightgh</h4>
            <small className="mb-5">Hey there,</small>
            <small>Join our WhatsApp platform to connect with others.</small>
            <small className="text-xs text-right">9:00am</small>
          </div>
        </div>
      </div>
      <div className="flex items-end bg-white min-h-[5rem] px-14 py-2 rounded-b-xl">
        <Button className="gap-3 rounded-3xl bg-[#00A651] w-full text-white max-w-full text-base">
          <FaWhatsapp />
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppJoinCard;
