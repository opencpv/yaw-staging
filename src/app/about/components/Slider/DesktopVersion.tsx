import { EffectCoverflow, Navigation } from "swiper/modules";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useState } from "react";
import "swiper/css";
import Image from "next/image";
import { urlForImage } from "@/lib/utils/sanity/utils";
import SliderNav from "@/components/__shared/ui/sliders/SliderNav";

const DesktopVersion = ({ data }: { data: any }) => {
  const initialSlide = 1;
  const [activeIndex, setActiveIndex] = useState(initialSlide);
  const sliderRef = useRef<any>(null);

  const handleSlideChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative mx-auto hidden max-w-screen-2xl lg:block">
      <p className="mx-auto mb-8 flex items-center justify-center text-white">
        {data.slide[activeIndex].description}
      </p>
      <div className="h-fit md:px-[77px]">
        <Swiper
          ref={sliderRef}
          centeredSlides={true}
          slidesPerView={2}
          onSwiper={(swiper) => null}
          onSlideChange={handleSlideChange}
          initialSlide={initialSlide}
          coverflowEffect={{
            rotate: 0,
            stretch: -240,
            depth: 600,
            modifier: 1,
            slideShadows: false,
          }}
          grabCursor
          effect={"coverflow"}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {data.slide.map((item: any) => (
            <SwiperSlide key={item._key} className="!flex justify-center">
              <div className="relative h-[30rem] w-[40rem]">
                <Image
                  src={urlForImage(item.featuredImage)?.url() as string}
                  alt={item.featuredImage.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-[32px] flex items-center justify-between px-[311px] pb-[30px] md:mt-[40px] md:pb-[107px]">
        <SliderNav
          onClick={handlePrev}
          position="left"
          size="lg"
          isAbsolute={false}
        />
        <SliderNav
          onClick={handleNext}
          position="right"
          size="lg"
          isAbsolute={false}
        />
      </div>
    </div>
  );
};

export default DesktopVersion;
