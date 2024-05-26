"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/custom-swiper.css";

import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ListingInfo from "./ListingInfo";
import ListingTags from "./ListingTags";
import { ListingCardInterface } from "../../../../../interfaces";
import Button from "../button/Button";
import ListingCardButton from "./ListingCardButton";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import supabase from "@/lib/utils/supabase/supabaseClient";

const ListingCard = (props: Partial<ListingCardInterface>) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const lastIndex = props.images?.lastIndexOf(
    props.images[props.images.length - 1],
  );
  const isAdmin = props.isAdmin ? true : false;

  useEffect(() => {
    const updateViews = async () => {
      const { data, error } = await supabase.rpc("increment_property_views", {
        propertyid: props.propertyId,
      });
      if (error) {
        console.error("Error incrementing property views:", error);
      } else {
        console.log("Property views incremented successfully:", data);
      }
    };

    if (!isAdmin) {
      updateViews();
    }
  }, []);

  return (
    <>
      <div
        className={`group/parent relative flex cursor-default flex-col ${
          props.className
        } ${
          props.cardType === "2"
            ? null
            : "rounded-b-lg rounded-t-lg shadow-[1px_3px_13px_rgba(0,_0,_0,_0.10)]"
        }`}
      >
        <Swiper
          allowTouchMove
          pagination={
            props.showOnlyImage
              ? false
              : {
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 3,
                }
          }
          navigation={
            props.showOnlyImage
              ? false
              : {
                  nextEl: ".custom-l-next",
                  prevEl: ".custom-l-prev",
                }
          }
          modules={[Pagination, Navigation]}
          className={`listing-card-slider relative w-full ${
            props.cardType === "2" && !props.showOnlyImage
              ? "h-[26rem] rounded-2xl"
              : props.cardType === "2"
                ? "h-80 rounded-2xl"
                : "h-72 rounded-t-md"
          } `}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          <ListingTags guarantee={props.guarantee} hint={props.hint} />
          {/* For be the first to know detail listings only */}
          <div
            className={
              props.showNotViewed && !props.isViewed
                ? "pointer-events-none absolute inset-0 z-30 flex h-full w-full items-center justify-center rounded-[inherit] bg-transparent"
                : "hidden"
            }
          >
            <div className="flex flex-col items-center gap-3">
              <ListingCardButton
                href={props.href}
                label="Not Viewed"
                icon="eye close"
                className="pointer-events-auto transition-all hover:scale-110"
              />
            </div>
          </div>

          {/* For favourites and recommendations only */}
          <div
            className={
              props.isMyFavoritePage || props.isRecommendationsPage
                ? "absolute inset-0 z-30 flex h-full w-full -translate-x-full items-center justify-center rounded-[inherit] bg-black bg-opacity-30 transition-all delay-500 group-hover/parent:translate-x-0"
                : "hidden"
            }
          >
            <div className="flex flex-col items-center gap-3">
              <ListingCardButton
                href={props.href}
                label="View Property"
                icon="eye open"
              />
              {props.liked && !props.isRecommendationsPage && (
                <Button
                  variant="ghost"
                  className="gap-3 text-lg font-semibold text-white underline"
                >
                  Delete
                  <FiTrash2 />
                </Button>
              )}
            </div>
          </div>
          {props.images?.map((image, index) =>
            props.showOnlyImage ? ( // when only images show without pagination or controls
              <>
                {index === 0 && (
                  <SwiperSlide key={index}>
                    <Link href={`${props.href}`}>
                      <div className="relative h-full w-full">
                        <Image
                          src={image}
                          alt={`${props.bedrooms} Bedroom ${props.propertyType} at ${props.city}`}
                          title={`${props.bedrooms} Bedroom ${props.propertyType} at ${props.city}`}
                          fill
                          className="brightness-[0.8]"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                )}
              </>
            ) : props.isMyFavoritePage || props.isRecommendationsPage ? ( // when page is my favourites or recommendations
              <>
                {index === 0 && (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <Image
                        src={image}
                        alt={`${props.bedrooms} Bedroom ${props.propertyType} in ${props.city}`}
                        fill
                        className="brightness-[0.8]"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </SwiperSlide>
                )}
              </>
            ) : (
              <SwiperSlide key={index}>
                {" "}
                {/* listing images with pagination and controls */}
                <Link href={`${props.href}`}>
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={`${props.bedrooms} Bedroom ${props.propertyType} in ${props.city}`}
                      fill
                      className="brightness-[0.8]"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ),
          )}

          {/* Pagination bullets and button */}
          <div
            className={cn(
              `custom-l-prev absolute bottom-20 left-[5%] z-10 flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full bg-white transition-opacity md:pointer-events-none md:opacity-0 md:group-hover/parent:pointer-events-auto md:group-hover/parent:opacity-100 ${
                activeIndex === 0 && "hidden"
              }`,
              {
                hidden:
                  props.showOnlyImage ||
                  props.isMyFavoritePage ||
                  props.isRecommendationsPage,
                "bottom-48": props.cardType === "2",
              },
            )}
          >
            <MdChevronLeft className="text-lg text-neutral-700" />
          </div>
          <div
            className={`custom-l-pagination bottom-40 w-full space-x-3 text-center ${
              props.showOnlyImage && "hidden"
            }`}
          ></div>
          <div
            className={cn(
              `custom-l-next absolute bottom-20 right-[5%] z-10 flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full bg-white transition-opacity md:pointer-events-none md:opacity-0 md:group-hover/parent:pointer-events-auto md:group-hover/parent:opacity-100 ${
                lastIndex === activeIndex && "hidden"
              }`,
              {
                hidden:
                  props.showOnlyImage ||
                  props.isMyFavoritePage ||
                  props.isRecommendationsPage,
                "bottom-48": props.cardType === "2",
              },
            )}
          >
            <MdChevronRight className="text-lg text-neutral-700" />
          </div>
        </Swiper>
        {/* Listing info */}
        <ListingInfo {...props} />
      </div>
    </>
  );
};

export default ListingCard;
