"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import VerticalSliderScrollFixOverlay from "@/components/__shared/ui/sliders/VerticalSliderScrollFixOverlay";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";

const VerticalSlider = ({ data }: { data: any }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative grid w-full grid-cols-5 items-center xl:grid-cols-4">
      <Swiper
        onSlideChange={handleSlideChange}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 6000 }}
        modules={[Pagination, Autoplay]}
        className={`mySwiper vertical-slider relative order-2 col-span-5 h-[28rem] w-full rounded-[3rem] bg-neutral-700 text-white lg:col-span-4 lg:h-[32rem] xl:col-span-3`}
      >
        {data.map((post: any) => (
          <SwiperSlide key={post._id} className="relative">
            <div className="relative">
              <div className="ml-5 w-10/12 space-y-5 pb-20 pl-10 pr-24 pt-28 xs:pt-40 min-[480px]:ml-10 lg:ml-auto lg:max-w-xl lg:py-20 min-[1160px]:max-w-2xl">
                <h2 className="font-[700]">{post.title}</h2>
                <p className="line-clamp-[8] sm:line-clamp-[11]">
                  {post.summary}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="col-span-5 mx-auto block w-9/12 lg:col-span-1 lg:w-[26rem]">
        <div className="relative top-20 z-10 h-60 transition-all lg:left-10 lg:top-0 lg:h-80 min-[1120px]:left-28 xl:left-52">
          <Image
            src={urlForImage(data[activeIndex].featured_image)?.url() as string}
            alt={data[activeIndex].featured_image.alt}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[3rem]"
          />
        </div>
      </div>

      {/* For smooth vertical scrolling */}
      <VerticalSliderScrollFixOverlay
        href={`/blog/${slugify(
          data[activeIndex].category.category_title,
        )}/${slugify(data[activeIndex].title)}?id=${data[activeIndex]._id}`}
        className="-translate-x-28"
      />
    </div>
  );
};

export default VerticalSlider;
