import { Form, Formik } from "formik";
import CustomTextAreaInput from "../../form/CustomTextAreaInput";
import SwiperSlideControls from "./SwiperSliderControls";

type Props = {
  setActiveIndex: any;
};
function Review({ setActiveIndex }: Props) {
  return (
    <div className="flex flex-col items-center  gap-4 w-full">
      <div className="w-full flex flex-col gap-1 items-start">
        <p className="text-shade-900">Review</p>

        <textarea name="review" id="" className="
        h-[14.75rem] w-full border-1 rounded-md border-shade-50">

        </textarea>
      </div>

      <SwiperSlideControls
        buttonLabel2="Next"
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}

export default Review;
