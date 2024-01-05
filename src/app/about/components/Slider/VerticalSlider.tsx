"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Link from "next/link";

const demoPost = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam placeat fugiat sequi ex quam ab porro amet quisquam doloremque reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.",
    image: "/assets/images/about/about-slider-img.webp"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam placeat fugiat sequi ex quam ab porro amet quisquam doloremque reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.",
    image: "/assets/images/about/black-businessman.webp"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam placeat fugiat sequi ex quam ab porro amet quisquam doloremque reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.",
    image: "/assets/images/about/home1.webp"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam placeat fugiat sequi ex quam ab porro amet quisquam doloremque reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.",
    image: "/assets/images/about/young-couple.webp"
  },
]

const VerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  const { images } = useAssets();
  return (
    <div className="relative grid items-center w-full grid-cols-5 xl:grid-cols-4">
      <Swiper
        onSlideChange={handleSlideChange}
        // onPaginationUpdate={() => alert("updated")}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`mySwiper vertical-slider col-span-5 order-2 relative rounded-[3rem] w-full h-[32rem] bg-neutral-700 text-white lg:col-span-4 xl:col-span-3`}
      >
        {/* Promotee info from database */}
        {demoPost.map((item, idx) => (
          <SwiperSlide key={idx + 1} className="relative">
            <Link href="/blog/lifestyle/The Home You Have Been Longing For" className="relative">
              <div className="w-10/12 pl-10 pr-24 space-y-5 ml-5 pt-28 pb-20 xs:pt-40 min-[480px]:ml-10 lg:py-20 lg:ml-auto lg:max-w-xl min-[1160px]:max-w-2xl">
                <h2 className="text-2xl font-[700]">
                  Lorem ipsum dolor, sit amet consectetur. Onarne
                </h2>
                <p className="text-sm line-clamp-[8] sm:line-clamp-[11]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                  fugit, reiciendis voluptatum doloremque, accusantium aperiam
                  magnam at veniam corrupti iusto eaque quam odio animi sit
                  dolores quod molestias inventore beatae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur ipsa ex suscipit mollitia tempore quo maiores maxime odio vel? Rem corporis quo sit similique, quae quia cum voluptatibus consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quasi veniam! Dolor sint nostrum repellendus soluta itaque, iste inventore, eveniet ea commodi beatae dolorem eaque minus dolorum quis nisi expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum, reiciendis esse quia soluta adipisci placeat, illo accusantium rem cupiditate officiis recusandae aliquid, ullam qui quidem assumenda dicta necessitatibus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor, repellendus voluptates sit impedit nostrum harum nulla quos delectus cumque magni deleniti fugit unde eveniet exercitationem et. Incidunt, at ullam.
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/blog/Lifestyle/The Home You Have Been Longing For" className="block col-span-5 mx-auto w-9/12 lg:w-[26rem] lg:col-span-1">
        <div className="relative top-20 z-10 h-60 transition-all lg:h-80 min-[1120px]:left-28 lg:top-0 lg:left-10 xl:left-52">
          <Image
            src={demoPost[activeIndex].image}
            alt={demoPost[activeIndex].title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[3rem]"
          />
        </div>
      </Link>

      {/* For smooth vertical scrolling */}
      <Link href="/blog/Lifestyle/The Home">
        <div className="absolute bottom-0 left-0 z-10 opacity-0 h-full px-5 bg-red-400 w-[78%] xs:w-10/12"></div>
      </Link>
          {/*!!! Temporary fix of scrolling issue on mobile !!!*/}
    </div>
  );
};

export default VerticalSlider;
