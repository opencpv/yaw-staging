import { EffectCoverflow, Navigation } from "swiper/modules";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useCallback, useRef } from "react";
import SlideItem from "./SlideItem";

const MobileVersion = () => {
  const { images } = useAssets();
  const sliderRef = useRef<any>(null);

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
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        onSlideChange={() => null}
        onSwiper={(swiper) => null}
        centeredSlides={true}
      >
        <SwiperSlide>
          <SlideItem image={images.niceHome} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem image={images.niceHome} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem image={images.niceHome} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem image={images.niceHome} />
        </SwiperSlide>
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
