"use client";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import ReportIssue from "@/components/__shared/ReportIssue";
import ButtonCall from "@/components/__shared/ui/button/ButtonCall";
import ButtonMessage from "@/components/__shared/ui/button/ButtonMessage";
import ButtonWhatsApp from "@/components/__shared/ui/button/ButtonWhatsApp";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  picture: string;
  rating: number;
  reviews: number;
  telephone: string;
  whatsappNumber: string;
  id?: string;
};

const PropertyOwnerInfo = (props: Props) => {
  const { images } = useAssets();
  return (
    <AOSWrapper
      animation="fade-up"
      className="flex items-center justify-center w-full mx-auto"
    >
      <div className="flex flex-col items-center w-full gap-10 mt-12 sm:w-11/12">
        <div className="flex items-center gap-10 font-[600]">
          <div className="relative w-24 h-24 rounded-full">
            <Image
              src={images.StockImage}
              className="rounded-full transition-all hover:scale-105"
              alt={props.name}
              fill
              style={{ objectFit: "cover" }}
              title={props.name}
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-primary-500 text-xl min-[360px]:flex-row">
            <FaStar className="text-yellow-400" />
            <p className="underline cursor-pointer">{props.rating}</p>
          </div>
          <p className="text-[#93B5BC] text-xl">{props.reviews} Reviews</p>
        </div>
        {/* Contact this property */}
        <div className="flex flex-col items-center w-full gap-2 px-10 py-8 border border-neutral-300 rounded-xl">
          <h2 className="text-center capitalize text-neutral-800 font-[600] text-2xl sm:w-9/12">
            Contact This Property
          </h2>
          <ButtonCall
            color="gradient"
            phoneNumber="0023434331"
            className="py-7"
          />
          <ButtonMessage id={props.id as string} color="gradient" className="py-7" />
          <ButtonWhatsApp color="gradient" className="py-7" />
        </div>
        {/* Report issue */}
        <div className="relative self-start -top-6 mb-10">
          <ReportIssue />
        </div>
      </div>
    </AOSWrapper>
  );
};

export default PropertyOwnerInfo;
