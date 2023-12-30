"use client";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import style from "../components/ListingSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./custom-swiper.css";

import { Pagination, Navigation } from "swiper/modules";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import CaDashEye from "../../components/icons/CaDashEye";
import CaDashChecked from "../../components/icons/CaDashChecked";
import CaDashDelete from "../../components/icons/CaDashDelete";
import CaDashEdit from "../../components/icons/CaDashEdit";
import { ListingCardInterface } from "../../../../../interfaces";

const ListingCard2 = (props: ListingCardInterface) => {
  const { icons } = useAssets();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const toggleLiked = () => {
    setIsLiked((prevState) => !prevState);
  };
  return (
    <div className={`relative min-w-80 cursor-default ${props.className}`}>
      <Swiper
        pagination={{
          clickable: true,
          //   el: ".custom-l-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 3,
          //   bulletActiveClass: 'listing-p-bullet-active',
          //   bulletClass: 'listing-p-bullet'
        }}
        navigation={{
          nextEl: ".custom-l-next",
          prevEl: ".custom-l-prev",
        }}
        modules={[Pagination, Navigation]}
        className={`relative w-full rounded-2xl mySwiper ${style.listingCard2} listing-card h-80`}
      >
        {/* Mapping through Featured listings from database */}
        {props.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href={`${props.href}`}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={props.propertyName as string}
                  fill
                  className=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Pagination bullets and button */}
        <div className="custom-l-prev absolute bottom-32 left-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronLeft className="text-lg text-neutral-700" />
        </div>
        <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div>
        <div className="custom-l-next absolute bottom-32 right-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronRight className="text-lg text-neutral-700" />
        </div>
      </Swiper>
      {/* Card info */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[20px] font-semibold mb-2">Search Title One</p>
            <p>Apartment</p>
          </div>
          <div className="flex gap-2">
            <button className="p-4 rounded-[8px] bg-[#F1F1F1]">
              <CaDashEdit />
            </button>
            <button className="p-4 rounded-[8px] bg-[#F1F1F1]">
              <CaDashDelete />
            </button>
          </div>
        </div>
        <p>Location</p>
      </div>
      <div className="absolute z-10 flex items-center justify-between w-full top-4 text-neutral-900 px-6">
        {/* viewed */}
        <div className="flex gap-2 p-2 items-center justify-center bg-white rounded-[16px] ">
          <p className="text-[#8A8A8A] font-semibold">Viewed</p>
          <CaDashEye />
        </div>
        {/* matched */}
        <div className="flex gap-2 py-2 px-8 items-center justify-center bg-[#54C38A] rounded-[16px]">
          <p className=" font-semibold text-white">Matched</p>
          <CaDashChecked />
        </div>
      </div>
    </div>
  );
};

export default ListingCard2;
