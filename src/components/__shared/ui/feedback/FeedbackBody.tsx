import React, { useEffect } from "react";
import Thumbs from "./Thumbs";
import FeedbackSlider from "./FeedbackSlider";
import Image from "next/image";
import Button from "../button/Button";
import {
  useFeedbackDisclosure,
  useToastDisclosure,
} from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import FeedbackTextArea from "./FeedbackTextArea";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useLocalStorage } from "@uidotdev/usehooks";
import { setLocalStorageWithExpiry } from "@/lib/utils/localStorage";

const FeedbackBody = ({
  handleCloseAfterSubmission,
  data,
}: {
  handleCloseAfterSubmission: () => void;
  data: any;
}) => {
  const feedback = data?.customFeedback;
  const { onOpen } = useToastDisclosure();

  const initialValues = {
    value_a: 50,
    value_b: 50,
    value_c: true,
    value_d: "",
  };

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

  return (
    <>
      <Image
        src="/svgs/survey/amico.svg"
        alt="group of people"
        width={128}
        height={128}
        className="mx-auto mt-10 aspect-square w-72"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, {}) => {
          const value_a_rounded = Math.round(values.value_a / 5) * 5;
          const value_b_rounded = Math.round(values.value_b / 5) * 5;
          const key = "floating-feedback-behavior";
          const value = false;
          const ttl = 24; // hours

          const { error } = await supabase.from("feedback").insert({
            ...values,
            value_a: value_a_rounded,
            value_b: value_b_rounded,
            feedback_title: "Website feedback", // From feedback.title ?
          });
          if (error) {
            onOpen("Something went wrong. Please try again.", "error");
            return;
          }
          handleCloseAfterSubmission();
          // sets the floating feedback button behavior on homepage
          setLocalStorageWithExpiry(key, value, ttl);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center gap-10">
            {feedback.question1 && (
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-2xl font-[500] text-neutral-700">
                  {feedback.question1}
                </h2>
                <FeedbackSlider
                  name="value_a"
                  value={value1}
                  setValue={setValue1}
                  onChange={handleFirstSlideChange}
                />
              </div>
            )}
            {feedback.question2 && (
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-2xl font-[500] text-neutral-700">
                  {feedback.question2}
                </h2>
                <FeedbackSlider
                  name="value_b"
                  value={value2}
                  setValue={setValue2}
                  onChange={handleSecondSlideChange}
                />
              </div>
            )}

            {/* Seems there should always be a question 3 as that's what
              toggles the submit button on/off
            */}
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-2xl font-[500] text-neutral-700">
                {feedback.question3}
              </h2>
              <Thumbs
                name="value_c"
                thumbsDownChecked={thumbsDownChecked}
                thumbsUpChecked={thumbsUpChecked}
                handleThumbsDownChecked={handleThumbsDownChecked}
                handleThumbsUpChecked={handleThumbsUpChecked}
              />
            </div>

            {feedback.question4 && (
              <FeedbackTextArea
                name="value_d"
                thumbsDownChecked={thumbsDownChecked}
                thumbsUpChecked={thumbsUpChecked}
                placeholder={feedback.question4}
              />
            )}

            <Button
              isLoading={isSubmitting}
              type="submit"
              color={
                thumbsUpChecked || thumbsDownChecked ? "gradient" : undefined
              }
              className={cn(
                "w-6/12 rounded-md py-2.5 text-lg capitalize text-white hover:opacity-80",
                {
                  "bg-gray-400 text-black":
                    !thumbsDownChecked && !thumbsUpChecked,
                },
              )}
              disabled={!thumbsDownChecked && !thumbsUpChecked}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FeedbackBody;
