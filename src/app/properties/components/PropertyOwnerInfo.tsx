"use client";
import CallButton from "@/components/__shared/ui/button/CallButton";
import WhatsAppButton from "@/components/__shared/ui/button/WhatsAppButton";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import style from "../Template.module.css";
import Rating from "@/components/__shared/ui/ratings-form";
import { cn } from "@/lib/utils";
import Button from "@/components/__shared/ui/button/Button";
import Avatar from "@/components/__shared/ui/avatar/Avatar";

type Props = {
  name: string;
  picture: string | StaticImageData;
  rating: number;
  reviews: number;
  telephone?: string;
  whatsappNumber?: string;
  id?: string;
};

const PropertyOwnerInfo = (props: Props) => {
  const { images } = useAssets();

  return (
    <section className={style.additionalInfoWrapper}>
      <h4>Contact this lister</h4>
      <div className="flex items-center gap-5 font-semibold">
        <Avatar
          size="sm"
          image={props.picture || images.NoImagePlaceholder}
          name={""}
        />
        <div className="flex flex-col items-center gap-2 text-primary min-[360px]:flex-row">
          <FaStar className="text-yellow-400" />
          <Rating value={5} className="text-xl" />
        </div>
        <p className={style.lightGreenText}>( {120} ) Reviews</p>
      </div>
      <div className="flex max-[1370px]:flex-wrap gap-2">
        <Button className={cn(style.listerInfoButton)}>Send Message</Button>
        <WhatsAppButton
          iconPosition="right"
          phone={"123456789"}
          className={cn(style.listerInfoButtonSecondary, style.lightGreenBg)}
        />
        <CallButton
          iconPosition="right"
          phoneNumber="123456789"
          className={cn(style.listerInfoButtonSecondary, style.lightGreenBg)}
        />
      </div>
    </section>
  );
};

export default PropertyOwnerInfo;
