import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import RateStars from "./RateStars";
import SwiperSlideControls from "./SwiperSliderControls";
import { fadeIn } from "@/lib/animations";


function Rate() {

  return (
    <FramerWrapper {...fadeIn} className="w-full  flex flex-col items-center justify-between  ">
      <div className="flex flex-col gap-14  w-full ">
        <div className="w-full justify-between items-center flex flex-col md:flex-row  ">
          <RateStars label="Cleanliness" />
          <RateStars label="Comfort & Amenities" />
        </div>
        <div className="w-full justify-between items-center flex flex-col md:flex-row">
          <RateStars label="Noise Levels" />
          <RateStars label="Safety & Security" />
        </div>
      </div>
    </FramerWrapper>
  );
}

export default Rate;
