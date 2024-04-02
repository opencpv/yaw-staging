"use client";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { useContactStore } from "@/store/contact/useContactStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  data: any;
};

const ContactFormSideImage = (props: Props) => {
  const activeTab = useContactStore((state) => state.activeKey);
  const { images } = useAssets();
  const SidePanel = (data: any) => {
    if (data.data) {
      if (data.data.video) {
        return (
          <div className="relative aspect-video w-full flex-1 rounded-2xl md:mt-10 md:aspect-auto md:h-[40rem]">
            <iframe
              src={data.data.video}
              title={data.data.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-3xl"
            ></iframe>
          </div>
        );
      } else if (data.data.images) {
        return (
          <SliderPaginationOnly
            images={data.data.images.map((image: any) => ({
              src: `${urlForImage(image)?.url() as string}`,
              name: "",
            }))}
            className="aspect-square w-full md:h-[40rem] md:w-full"
          />
        );
      } else if (data.data.pdfUrl) {
        return (
          <Link
            href={data.data.pdfUrl}
            target="_blank"
            title="brochure"
            className="flex w-full flex-1 items-center justify-center rounded-lg bg-neutral-200 shadow-2xl md:mt-10"
          >
            <div className="relative aspect-square w-full md:right-2 md:h-fit">
              <Image
                src={images.Brochure}
                alt="brochure"
                fill
                style={{ objectFit: "contain" }}
                // objectPosition="bottom"
              />
            </div>
          </Link>
        );
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  };
  if (activeTab === "general")
    return <SidePanel data={props.data["general"]} />;
  if (activeTab === "report") return <SidePanel data={props.data["reports"]} />;
  if (activeTab === "advertise")
    return <SidePanel data={props.data["advertise"]} />;
  if (activeTab === "writers")
    return <SidePanel data={props.data["writers"]} />;
};

export default ContactFormSideImage;
