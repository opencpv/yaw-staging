import { EffectCoverflow, Navigation } from "swiper/modules";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useCallback, useRef } from "react";
import SlideItem from "./SlideItem";
// import "./desktop.css";
import "swiper/css";
import Image from "next/image";

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
    <div className="relative hidden mx-auto lg:block max-w-screen-2xl">
      <div className=" md:px-[77px] h-fit">
        <Swiper
          ref={sliderRef}
          centeredSlides={true}
          // spaceBetween={100}
          slidesPerView={2}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: -240,
            depth: 600,
            modifier: 1,
            slideShadows: false,
          }}
          effect={"coverflow"}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative w-[40rem] h-[30rem]">
                <Image src={images.niceHome} alt="" fill style={{objectFit: "cover"}} className="rounded-2xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[40rem] h-[30rem]">
                <Image src={images.niceHome} alt="" fill style={{objectFit: "cover"}} className="rounded-2xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[40rem] h-[30rem]">
                <Image src={images.niceHome} alt="" fill style={{objectFit: "cover"}} className="rounded-2xl" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex px-[311px] justify-between items-center md:mt-[40px] mt-[32px] md:pb-[107px] pb-[30px]">
        <button
          onClick={handlePrev}
          className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-white rounded-full"
        >
          <MdChevronLeft className="text-3xl" />
        </button>
        <button
          onClick={handleNext}
          className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-white rounded-full"
        >
          <MdChevronRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default DesktopVersion;
