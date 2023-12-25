import RateStars from "./RateStars";
import SwiperSlideControls from "./SwiperSliderControls";

type Props = {
  setActiveIndex: any
}
function Rate({setActiveIndex} : Props) {

  return (
    <div className="w-full flex flex-col items-center justify-between min-h-[320px]">
      <div className="flex flex-col gap-4  w-full ">
        <div className="w-full justify-between items-center flex flex-col lg:flex-row">
          <RateStars label="Lorem ipsum" />
          <RateStars label="Lorem ipsum" />
        </div>
        <div className="w-full justify-between items-center flex flex-col lg:flex-row">
          <RateStars label="Lorem ipsum" />
          <RateStars label="Lorem ipsum" />
        </div>
      </div>
      <SwiperSlideControls buttonLabel2="Next" setActiveIndex={setActiveIndex}/>
    </div>
  );
}

export default Rate;
