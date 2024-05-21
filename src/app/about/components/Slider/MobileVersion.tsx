import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useState } from "react";
import SlideItem from "./SlideItem";
import { urlForImage } from "@/lib/utils/sanity/utils";

const MobileVersion = ({ data }: { data: any }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full lg:hidden">
      <small className="mx-auto mb-8 flex max-w-5xl items-center justify-center text-white">
        {data.slide[activeIndex]?.description}
      </small>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={10}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => null}
        centeredSlides={true}
      >
        {data.slide.map((item: any) => (
          <SwiperSlide key={item._key}>
            <SlideItem
              image={urlForImage(item.featuredImage)?.url() as string}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-[32px] flex items-center justify-between pb-[30px] md:mt-[40px] md:pb-[107px]">
        <button
          onClick={handlePrev}
          className="flex  h-[40px] w-[40px] items-center justify-center rounded-full bg-white md:h-[70px] md:w-[70px]"
        >
          <MdChevronLeft className="text-neutral-800" />
        </button>
        <button
          onClick={handleNext}
          className="flex  h-[40px] w-[40px] items-center justify-center rounded-full bg-white md:h-[70px] md:w-[70px]"
        >
          <MdChevronRight className="text-neutral-800" />
        </button>
      </div>
    </div>
  );
};

export default MobileVersion;
