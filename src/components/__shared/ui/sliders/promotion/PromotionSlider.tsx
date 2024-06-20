"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@/components/__shared/ui/button/Button";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { cn } from "@/lib/utils";
import PromotionModal from "./PromotionModal";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { IFRAME_ALLOW } from "@/constants";

const PromotionSlider = ({ promotions = [] }: { promotions: any }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [promotionalImage, setPromotionalImage] = useState("");
  const router = useRouter();

  return (
    <>
      <PromotionModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        image={{ src: promotionalImage, alt: "Promotional image" }}
      />
      {promotions.length > 0 && (
        <Swiper
          direction={"vertical"}
          allowTouchMove={false}
          pagination={{
            clickable: true,
            el: ".custom-pagination-ver",
          }}
          modules={[Pagination, Autoplay]}
          className={`mySwiper relative h-[29rem] w-full rounded-3xl`}
        >
          {promotions.map((promotion: any, idx: number) => (
            <SwiperSlide key={idx}>
              {promotion.fileType === "image" ||
              promotion.fileType == "modal" ? ( // maybe promotion.type === "video" | "image"?
                <div className="relative h-full w-full">
                  <Image
                    src={urlForImage(promotion?.image)?.url() as string}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-[0.60]"
                  />
                </div>
              ) : promotion.fileType === "video" ? ( // maybe promotion.type === "video" | "image"
                <>
                  <iframe
                    src={
                      promotion.url // rel=0 is important to suggest only RentRightGH related videos
                    }
                    title={promotion?.title || ""}
                    allow={IFRAME_ALLOW}
                    className="absolute inset-0 h-full w-full rounded-3xl"
                  ></iframe>
                </>
              ) : null}

              {/* Promotion label */}
              <div
                className={cn(
                  "absolute left-3 top-32 z-50 space-y-20 min-[300px]:left-10",
                  {
                    hidden: promotion.fileType === "video", // if promotion.type === "video", hide the label
                  },
                )}
              >
                <div className="absolute -top-10 left-0 space-y-3 text-sm xs:top-0">
                  <h1 className="line-clamp-2 text-3xl font-[700] text-accent-100">
                    {promotion.title}
                  </h1>
                  <p className="line-clamp-1 text-sm text-white">
                    {promotion.subtitle}
                  </p>
                  <Button
                    target={true ? "_self" : "_blank"} // if ?*.target? is "self", open on same tab otherwise open in new tab. TODO: change logic for "true"
                    className={cn(
                      "flex w-fit items-center gap-3 rounded-md border-none bg-accent-200 capitalize text-white hover:bg-neutral-300 hover:text-neutral-600",
                      {
                        invisible: !promotion.url || false, // if there is not promotion.url || ?*.type? is not modal, hide the button. TODO: change logic for "false"
                      },
                    )}
                    onClick={() => {
                      promotion.fileType === "modal" ? onOpen() : null;
                      // : router.push(promotion.url as string)
                      setPromotionalImage(
                        urlForImage(promotion?.image)?.url() as string,
                      );
                    }}
                  >
                    View item <IoIosArrowRoundForward />
                  </Button>
                </div>
                {/* Promotion description */}
                <p className="relative top-28 z-30 line-clamp-5 w-10/12 text-sm font-[600] leading-relaxed text-white lg:ml-10">
                  {promotion.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="pointer-events-none absolute bottom-0 left-0 z-10 min-h-[10rem] w-full bg-primary-500 bg-opacity-25 p-5 xs:p-10">
            <div className="custom-pagination-ver pointer-events-auto absolute -mt-10 mr-3 md:mr-20"></div>
          </div>
        </Swiper>
      )}
    </>
  );
};

export default PromotionSlider;
