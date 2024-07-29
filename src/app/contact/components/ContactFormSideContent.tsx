"use client";
import SliderPaginationOnly from "@/components/__shared/ui/sliders/SliderPaginationOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { useContactStore } from "@/store/contact/useContactStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import demoimages from "@/enum/temp/images";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps } from "@/lib/enum";
import { writer } from "repl";
import { useFetchFeaturedListings } from "@/app/properties/services";
import { IFRAME_ALLOW } from "@/constants";

type Props = {
  data: any;
};

const ContactFormSideContent = (props: Props) => {
  const activeTab = useContactStore((state) => state.activeKey);
  const { images } = useAssets();
  const { data: listings } = useFetchFeaturedListings({ limit: 3 });
  const { user } = useAppStore();

  const tabToData: any = {
    general: "generalSection",
    report: "reportSection",
    advertise: "advertiseSection",
    writers: "writersSection",
  };

  const sectionData = props.data[tabToData[activeTab]];

  const SidePanel = (data: any) => {
    if (sectionData) {
      if (sectionData.videoUrl) {
        return (
          <div className="relative aspect-video w-full flex-1 rounded-2xl md:mt-8 md:aspect-auto md:h-[40rem]">
            <iframe
              src={sectionData.videoUrl}
              title={activeTab}
              allow={IFRAME_ALLOW}
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
              href: "",
            }))}
            className="aspect-square w-full md:mt-4 md:h-[40rem] md:w-full"
          />
        );
      } else if (sectionData.pdfUrl) {
        return (
          <Link
            href={sectionData.pdfUrl}
            target="_blank"
            title="brochure"
            className="flex w-full flex-1 items-center justify-center rounded-lg bg-neutral-200 shadow-2xl md:mt-8"
          >
            <div className="relative aspect-square w-full md:right-2 md:h-fit">
              <Image
                src={images.Brochure}
                alt="brochure"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        );
      } else {
        return (
          <SliderPaginationOnly
            images={
              listings?.map((listing) => ({
                src: demoimages[0],
                name: `${listing.bedrooms} Bedroom ${listing.property_type} at ${listing.city}`,
                href: getListingProps(listing, user as UserType).href,
              })) as SliderPaginationOnlyImage[]
            }
            className="aspect-square w-full md:mt-4 md:h-[40rem] md:w-full"
          />
        );
      }
    } else return <></>;
  };
  if (activeTab === "general")
    return <SidePanel data={props.data["general"]} />;
  if (activeTab === "report") return <SidePanel data={props.data["reports"]} />;
  if (activeTab === "advertise")
    return <SidePanel data={props.data["advertise"]} />;
  if (activeTab === "writers")
    return <SidePanel data={props.data["writers"]} />;
};

export default ContactFormSideContent;
