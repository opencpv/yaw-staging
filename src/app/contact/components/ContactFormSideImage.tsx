"use client";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useContactStore } from "@/store/contact/useContactStore";
import Image from "next/image";
import React from "react";

type Props = {};

const ContactFormSideImage = (props: Props) => {
  const activeTab = useContactStore((state) => state.activeKey);
  const { images } = useAssets();

  if (activeTab === "general")
    return (
      <div className="flex-1 md:mt-10">
        <SliderPaginationOnly
          images={[1, 2, 3].map((image) => ({
            src: "/assets/images/niceHome.png",
            name: "",
          }))}
          className="aspect-square w-full md:h-[40rem] md:w-full"
        />
      </div>
    );
  if (activeTab === "report")
    return (
      <div className="flex-1 md:mt-10">
        <SliderPaginationOnly
          images={[1, 2, 3].map((image) => ({
            src: "/assets/images/niceHome.png",
            name: "",
          }))}
          className="aspect-square w-full md:h-[40rem] md:w-full"
        />
      </div>
    );
  if (activeTab === "advertise")
    return (
      <div className="flex items-center justify-center flex-1 w-full rounded-lg shadow-2xl bg-neutral-200 md:mt-10">
        <div className="relative w-full aspect-square md:h-fit md:right-2">
          <Image
            src={images.Brochure}
            alt="brochure"
            fill
            style={{ objectFit: "contain" }}
            // objectPosition="bottom"
          />
        </div>
      </div>
    );
  if (activeTab === "writers")
    return (
      <div className="relative flex-1 rounded-2xl aspect-video w-full md:aspect-auto md:h-[40rem] md:mt-10">
        <iframe
          src="https://www.youtube.com/embed/utW0-mMYUL4?si=jnPB8xC93P-3uiEY?rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-3xl"
        ></iframe>
      </div>
    );
};

export default ContactFormSideImage;
