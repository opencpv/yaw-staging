import CustomTextAreaInput from "../../CustomTextAreaInput";
import SwiperSlideControls from "./SwiperSliderControls";

type Props = {
  setActiveIndex: any;
};
function Review({ setActiveIndex }: Props) {
  return (
    <div className="flex flex-col items-center  gap-4">
      <div className="w-full">
        <CustomTextAreaInput
          onChange={() => console.log("review changing")}
          classes="min-h-[238px]"
          label="Your Review"
          placeholder="Type here..."
        />
      </div>
      <SwiperSlideControls
        buttonLabel2="Next"
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}

export default Review;
