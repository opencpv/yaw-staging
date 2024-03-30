"use client";
import React from "react";
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

let images = [
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
];

const PromotionSlider = ({ promotions = [] }: { promotions: any }) => {
  return (
    <>
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
              {idx === 0 ? ( // maybe promotion.type === "video" | "image"?
                <div className="relative h-full w-full">
                  <Image
                    src={urlForImage(promotion?.image)?.url() as string}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-[0.60]"
                  />
                </div>
              ) : idx === 1 ? (
                <>
                  <div className="absolute inset-0 z-10 h-full w-full rounded-3xl bg-black/50"></div>
                  <iframe
                    src={
                      "https://www.youtube.com/embed/rR4n-0KYeKQ?si=mkrWRrNoOTSiHw9q"
                    }
                    title={promotion?.title || ""}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="absolute inset-0 h-full w-full rounded-3xl"
                  ></iframe>
                </>
              ) : null}

              {/* Promotion label */}
              <div className="absolute left-3 top-32 z-50 space-y-20 min-[300px]:left-10">
                <div className="space-y-3 text-sm ">
                  <h1 className="text-3xl font-[700] text-accent-100">
                    {promotion.title}
                  </h1>
                  <p className="text-white"> {promotion.subtitle}</p>
                  <Link href={promotion.url} className="inline-block">
                    <Button className="flex min-w-fit items-center gap-3 rounded-md border-none bg-accent-200 capitalize text-white hover:bg-neutral-300 hover:text-neutral-600">
                      View item <IoIosArrowRoundForward />
                    </Button>
                  </Link>
                </div>
                {/* Promotion description */}
                <p className="relative z-30 line-clamp-5 w-10/12 text-sm font-[600] leading-relaxed text-white lg:ml-10">
                  {promotion.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute bottom-0 left-0 z-10 min-h-[10rem] w-full bg-primary-500 bg-opacity-25 p-5 xs:p-10">
            <div className="custom-pagination-ver absolute -mt-10 mr-3 md:mr-20"></div>
          </div>
        </Swiper>
      )}
    </>
  );
};

export default PromotionSlider;
