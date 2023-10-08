import { EffectCoverflow, Navigation } from "swiper/modules";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useCallback, useRef } from "react";
import SlideItem from "./SlideItem";
import "./desktop.css";
import "swiper/css";

const DesktopVersion = () => {
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
    <div className=" hidden lg:block relative ">
      <div className=" md:px-[77px]  h-fit ">
        <Swiper
          ref={sliderRef}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true,
          }}
          effect={"coverflow"}
          modules={[EffectCoverflow, Navigation]}
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
        </Swiper>
      </div>
      <div className="flex px-[311px] justify-between items-center md:mt-[40px] mt-[32px] md:pb-[107px] pb-[30px]">
        <button
          onClick={handlePrev}
          className="w-[40px]  h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-white rounded-full"
        >
          <MdChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-[40px]  h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-white rounded-full"
        >
          <MdChevronRight />
        </button>
      </div>
    </div>
  );
};

export default DesktopVersion;