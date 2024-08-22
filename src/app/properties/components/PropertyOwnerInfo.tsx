"use client";
import CallButton from "@/components/__shared/ui/button/call-button";
import WhatsAppButton from "@/components/__shared/ui/button/whatsapp-button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import React from "react";
import style from "../Template.module.css";
import Rating from "@/components/__shared/ui/ratings-form";
import { cn } from "@/lib/utils";
import Button from "@/components/__shared/ui/button/Button";
import Avatar from "@/components/__shared/ui/avatar/Avatar";

type Props = {
  listing: Property & {
    profiles?: {
      full_name: string;
      profile_img: string;
      phone: string;
      whatsapp: string;
    };
  };
};

const PropertyOwnerInfo = ({ listing }: Props) => {
  const { images } = useAssets();

  return (
    <section className={style.additionalInfoWrapper}>
      <h4>Contact this lister</h4>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 font-semibold">
        <Avatar
          size="sm"
          image={listing?.profiles?.profile_img || images.NoImagePlaceholder}
          name={listing?.profiles?.full_name as string}
        />
        <Rating value={5} className="text-primary" />
        <p className={style.lightGreenText}>( {120} ) Reviews</p>
      </div>
      <div
        className="grid grid-cols-3 gap-2 pt-2"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}
      >
        <Button className={cn(style.listerInfoButton)}>Send Message</Button>
        <WhatsAppButton
          iconPosition="right"
          phone={listing?.profiles?.whatsapp as string}
          className={cn(style.listerInfoButtonSecondary, style.lightGreenBg)}
        />
        <CallButton
          iconPosition="right"
          phoneNumber={listing?.profiles?.phone as string}
          className={cn(style.listerInfoButtonSecondary, style.lightGreenBg)}
        />
      </div>
    </section>
  );
};

export default PropertyOwnerInfo;
