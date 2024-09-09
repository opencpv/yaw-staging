import { useState } from "react";

import { fadeIn } from "@/lib/animations";
import { useFeedbackDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { Form, Formik } from "formik";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import FramerWrapper from "@/components/__shared/hoc/framer-wrapper";
import Thumbs from "../../feedback/thumbs";

function Recommend() {
  const [recommendation, setRecommendation] = useState<"yes" | "no">();

  const [thumbsUpHovered, setThumbsUpHovered] = useState(false);
  const [thumbsDownHovered, setThumbsDownHovered] = useState(false);
  const {
    value1,
    setValue1,
    handleFirstSlideChange,
    value2,
    setValue2,
    handleSecondSlideChange,
    handleThumbsDownChecked,
    handleThumbsUpChecked,
    thumbsDownChecked,
    thumbsUpChecked,
  } = useFeedbackDisclosure();

  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
  } = useRatingsModalStore();
  return (
    <FramerWrapper
      {...fadeIn}
      className="flex flex-col items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 ">
        <p className="text-lg font-semibold text-shade-300 2xl:text-xl">
          Would you recommend{" "}
          <span className="font-bold">
            {" "}
            {currentProperty?.bedrooms} Bedroom {currentProperty?.propertyType}
          </span>{" "}
          to your friends?
        </p>

        <div className="flex w-full items-center justify-center gap-10">
          <Formik
            onSubmit={() => {}}
            initialValues={{
              reviews: false,
            }}
          >
            <Form>
              <Thumbs
                name="reviews"
                thumbsDownChecked={thumbsDownChecked}
                thumbsUpChecked={thumbsUpChecked}
                handleThumbsDownChecked={handleThumbsDownChecked}
                handleThumbsUpChecked={handleThumbsUpChecked}
              />
            </Form>
          </Formik>
          {/* <div
            className=""
            onClick={() => {
              setRecommendation("yes");
            }}
            onMouseEnter={() => setThumbsUpHovered((init) => !init)}
            onMouseLeave={() => setThumbsUpHovered((init) => !init)}
          >
            <CaThumbsUp filled={thumbsUpHovered || recommendation == "yes"} />
          </div>{" "}
          <div
            className=""
            onClick={() => {
              setRecommendation("no");
            }}
            onMouseEnter={() => setThumbsDownHovered((init) => !init)}
            onMouseLeave={() => setThumbsDownHovered((init) => !init)}
          >
            {" "}
            <CaThumbsDown
              filled={thumbsDownHovered || recommendation == "no"}
            />
          </div> */}
        </div>

        {/* {(thumbsDownChecked || thumbsUpChecked) && (
          <div className="flex w-full items-center justify-center gap-2">
            <p className="text-[1.5625rem] font-semibold">
              Thank you for response
            </p>
            <div className=" relative aspect-square w-full max-w-[44px]">
              <Image
                src={"/assets/images/review-form/cone 1.png"}
                fill
                alt="Success"
              />
            </div>
          </div>
        )} */}
      </div>
    </FramerWrapper>
  );
}

export default Recommend;
