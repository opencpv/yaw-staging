"use client";
import ReportIssue from "@/components/__shared/ui/links/ReportIssue";
import CallButton from "@/components/__shared/ui/button/CallButton";
import MessageButton from "@/components/__shared/ui/button/MessageButton";
import WhatsAppButton from "@/components/__shared/ui/button/WhatsAppButton";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Rating from "@/components/__shared/ui/listing/Rating";

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
    <motion.section className="mx-auto flex w-full items-center justify-center">
      <div className="mt-12 flex w-full flex-col items-center gap-10 sm:w-11/12">
        <div className="flex items-center gap-10 font-[600]">
          <div className="relative h-24 w-24 rounded-full">
            <Image
              src={props.picture || images.NoProfileOthers}
              className="rounded-full transition-all hover:scale-105"
              alt={props.name}
              fill
              style={{ objectFit: "cover" }}
              title={props.name}
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-xl text-primary-500 min-[360px]:flex-row">
            <FaStar className="text-yellow-400" />
            <Rating value={props.rating} className="text-xl" />
          </div>
          <p className="text-xl text-[#93B5BC]">{props.reviews} Reviews</p>
        </div>
        {/* Contact this property */}
        <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-neutral-300 px-10 py-8">
          <h2 className="text-center text-2xl font-[600] capitalize text-neutral-800 sm:w-9/12">
            Contact This Property
          </h2>

          {props.telephone && (
            <CallButton
              color="gradient"
              phoneNumber={props.telephone}
              className="py-7"
            />
          )}
          <MessageButton
            id={props.id as string}
            color="gradient"
            className="py-7"
          />
          {props.whatsappNumber && (
            <WhatsAppButton
              phone={props.whatsappNumber}
              color="gradient"
              className="py-7"
            />
          )}
        </div>
        {/* Report issue */}
        <div className="relative -top-6 mb-10 self-start">
          <ReportIssue />
        </div>
      </div>
    </motion.section>
  );
};

export default PropertyOwnerInfo;
