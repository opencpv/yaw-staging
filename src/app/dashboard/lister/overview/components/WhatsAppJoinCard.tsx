import { Button } from "@/components/__shared/ui/button/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {};

const WhatsAppJoinCard = (props: Props) => {
  const { images } = useAssets();
  return (
    <div className="rounded-xl border">
      <div className="flex min-h-[5rem] gap-5 rounded-t-xl bg-primary-400 p-5 text-white">
        <div className="relative h-12 w-12">
          <Image
            src={images.ProfileImage}
            alt="profile image"
            fill
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute bottom-0 right-1 h-2.5 w-2.5 rounded-full bg-[#00A651]"></div>
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
        <div className="relative z-10 flex max-w-[210px] items-start">
          <Image
            src="/assets/images/dashboard/chat-triangle.png"
            alt="white triangle"
            width={12}
            height={12}
          />
          <div className="bg-white p-5 text-neutral-500">
            <h4>Rentrightgh</h4>
            <small className="mb-5">Hey there,</small>
            <small>Join our WhatsApp platform to connect with others.</small>
            <small className="text-right text-xs">9:00am</small>
          </div>
        </div>
      </div>
      <div className="flex min-h-[5rem] items-end rounded-b-xl bg-white px-14 py-2">
        <Button size={"full"} className="bg-[#00A651] text-white">
          <FaWhatsapp />
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppJoinCard;
