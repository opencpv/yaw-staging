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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
      <div className="flex justify-between items-center md:mt-[40px] mt-[32px] md:pb-[107px] pb-[30px]">
        <button
          onClick={handlePrev}
          className="w-[40px]  h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-white rounded-full"
        >
          <MdChevronLeft className="text-neutral-800" />
        </button>
        <button
          onClick={handleNext}
          className="w-[40px]  h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-white rounded-full"
        >
          <MdChevronRight className="text-neutral-800" />
        </button>
      </div>
    </div>
  );
};

export default MobileVersion;
