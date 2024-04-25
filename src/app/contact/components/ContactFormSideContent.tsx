"use client";
import SliderPaginationOnly from "@/components/__shared/ui/sliders/SliderPaginationOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { useContactStore } from "@/store/contact/useContactStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFetchRandomFeaturedListings } from "../services";
import demoimages from "@/enum/temp/images";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps } from "@/lib/enum";

type Props = {
  data: any;
};

const ContactFormSideContent = (props: Props) => {
  const activeTab = useContactStore((state) => state.activeKey);
  const { images } = useAssets();
  const { data: listings } = useFetchRandomFeaturedListings();
  const { user } = useAppStore();

  const SidePanel = (data: any) => {
    if (data.data) {
      if (data.data.video) {
        return (
          <div className="relative aspect-video w-full flex-1 rounded-2xl md:mt-8 md:aspect-auto md:h-[40rem]">
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
        // ?data.data.featuredListing? // NOTE: Using this as featured listing //Todo: use correct name
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
      } else if (data.data.featuredListing) {
        // ?data.data.image? // TODO: use the correct name
        return (
          <SliderPaginationOnly
            images={data.data.images.map((image: any) => ({
              src: `${urlForImage(image)?.url() as string}`,
              name: "",
              href: "",
            }))}
            className="aspect-square w-full md:mt-4 md:h-[40rem] md:w-full"
          />
        );
      } else if (data.data.pdfUrl) {
        return (
          <Link
            href={data.data.pdfUrl}
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

export default ContactFormSideContent;
