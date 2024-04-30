"use client";
import FeaturedListings from "@/components/__shared/listing/FeaturedListings";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { useContactStore } from "@/store/contact/useContactStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { writer } from "repl";
type Props = {
  data: any;
};

const ContactFormSideImage = (props: Props) => {
  const { images } = useAssets();

  const activeTab = useContactStore((state) => state.activeKey);
  const tabToData: any = {
    general: "generalSection",
    report: "reportSection",
    advertise: "advertiseSection",
    writers: "writersSection",
  };
  const sectionData = props.data[tabToData[activeTab]];
  console.log(activeTab);

  const SidePanel = (data: any) => {
    if (sectionData) {
      if (sectionData.videoUrl) {
        return (
          <div className="relative aspect-video w-full flex-1 rounded-2xl md:mt-10 md:aspect-auto md:h-[40rem]">
            <iframe
              src={sectionData.videoUrl}
              title={activeTab}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-3xl"
            ></iframe>
          </div>
        );
      } else if (sectionData.imgURL) {
        return (
          <SliderPaginationOnly
            images={[1].map((image: any) => ({
              src: sectionData.imgURL,
              name: "",
            }))}
            className="aspect-square w-full md:h-[40rem] md:w-full"
          />
        );
      } else if (sectionData.pdfUrl) {
        return (
          <Link
            href={sectionData.pdfUrl}
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
        return <FeaturedListings showTitle={false} />;
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
