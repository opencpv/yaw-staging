import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "../button/Button";
import ListingCardButton from "./ListingCardButton";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import ListingTags from "./ListingTags";
import { ListingCardInterface } from "../../../../../interfaces";
import LikeHeart from "../LikeHeart";
import { useAppStore } from "@/store/dashboard/AppStore";
import { createUUID } from "@/lib/utils/stringManipulation";

const SliderArea = (props: Partial<ListingCardInterface>) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const lastIndex = props.images?.lastIndexOf(
    props.images[props.images.length - 1],
  );
  const { user } = useAppStore();
  return (
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
            : "h-80 rounded-xl"
      } `}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
      tabIndex={-1}
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
          <React.Fragment key={createUUID()}>
            {index === 0 && (
              <SwiperSlide key={createUUID()}>
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
          </React.Fragment>
        ) : props.isMyFavoritePage || props.isRecommendationsPage ? ( // when page is "my favourites" or "recommendations" on dash
          <React.Fragment key={createUUID()}>
            {index === 0 && (
              <SwiperSlide key={createUUID()}>
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
          </React.Fragment>
        ) : (
          <SwiperSlide key={createUUID()}>
            {" "}
            {/* listing images with pagination and controls */}
            <Link
              href={`${props.href}`}
              tabIndex={index === 0 ? 0 : -1}
              className="relative focus:outline-accent focus:after:absolute focus:after:inset-0 focus:after:z-50 focus:after:size-full focus:after:bg-neutral-300/50"
            >
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
      <NavButton
        position="left"
        lastIndex={lastIndex as number}
        activeIndex={activeIndex as number}
        {...props}
      />
      <div
        className={`custom-l-pagination bottom-40 w-full space-x-3 text-center ${
          props.showOnlyImage && "hidden"
        }`}
      ></div>
      <NavButton
        position="right"
        lastIndex={lastIndex as number}
        activeIndex={activeIndex as number}
        {...props}
      />
      {/* Like button */}
      <span className="absolute bottom-5 right-[5%] z-10 grid size-11 place-items-center rounded-md bg-shade-500/40">
        <LikeHeart
          liked={props.liked}
          propertyId={props.propertyId as string}
          userId={user?.id as string}
          className="inline-block text-lg text-white"
        />
      </span>
    </Swiper>
  );
};

const NavButton = ({
  position,
  lastIndex,
  activeIndex,
  ...props
}: {
  position: "left" | "right";
  lastIndex: number;
  activeIndex: number;
} & Partial<ListingCardInterface>) => {
  return (
    <button
      className={cn(
        "absolute bottom-32 z-10 flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full bg-white transition-opacity md:pointer-events-none md:opacity-0 md:group-hover/parent:pointer-events-auto md:group-hover/parent:opacity-100",
        {
          hidden:
            (lastIndex === activeIndex && position === "right") ||
            (activeIndex === 0 && position === "left") ||
            props.showOnlyImage ||
            props.isMyFavoritePage ||
            props.isRecommendationsPage,
          "bottom-48": props.cardType === "2",
          "custom-l-next right-[5%]": position === "right",
          "custom-l-prev left-[5%]": position === "left",
        },
      )}
    >
      {position === "right" ? (
        <MdChevronRight className="text-lg text-neutral-700" />
      ) : (
        <MdChevronLeft className="text-lg text-neutral-700" />
      )}
    </button>
  );
};

export default SliderArea;
