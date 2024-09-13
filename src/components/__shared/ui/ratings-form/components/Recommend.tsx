import { useState } from "react";

import { fadeIn } from "@/lib/animations";
import { useFeedbackDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { Form, Formik } from "formik";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import Thumbs from "../../feedback/thumbs";
import dynamic from "next/dynamic";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);
function Recommend() {
  const [recommendation, setRecommendation] = useState<"yes" | "no">();

  const [thumbsUpHovered, setThumbsUpHovered] = useState(false);
  const [thumbsDownHovered, setThumbsDownHovered] = useState(false);
  const {
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
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <p className="text-lg font-semibold text-shade-300 2xl:text-xl">
          Would you recommend{" "}
          <span className="font-bold"> {currentProperty?.name}</span> to your
          friends?
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
        </div>
      </div>
    </FramerWrapper>
  );
}

export default Recommend;
