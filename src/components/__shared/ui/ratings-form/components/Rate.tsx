import RateStars from "./RateStars";
import SwiperSlideControls from "./SwiperSliderControls";
import { fadeIn } from "@/lib/animations";
import dynamic from "next/dynamic";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);

function Rate() {
  return (
    <FramerWrapper
      {...fadeIn}
      className="flex w-full flex-col items-center justify-between"
    >
      <div className="flex w-full flex-col gap-5 lg:gap-14">
        <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:gap-0">
          <RateStars label="Cleanliness" />
          <RateStars label="Comfort & Amenities" />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:gap-0">
          <RateStars label="Noise Levels" />
          <RateStars label="Safety & Security" />
        </div>
      </div>
    </FramerWrapper>
  );
}

export default Rate;
