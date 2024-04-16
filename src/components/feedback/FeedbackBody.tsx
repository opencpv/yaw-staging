import React, { useState } from "react";
import Thumbs from "./Thumbs";
import FeedbackSlider from "./FeedbackSlider";
import Image from "next/image";
import Button from "../__shared/ui/button/Button";
import { useFeedbackDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import FeedbackTextArea from "./FeedbackTextArea";
import supabase from "@/lib/utils/supabase/supabaseClient";

const FeedbackBody = ({
  handleCloseAfterSubmission,
  data,
}: {
  handleCloseAfterSubmission: () => void;
  data: any;
}) => {
  const feedback = data.customFeedback;

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
        initialValues={{}}
        onSubmit={async (values, {}) => {
          console.log(values);
          // TODO: handle logic
          // const {} = await supabase.from("").insert({

          // });
          handleCloseAfterSubmission();
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
                  name={feedback.question1
                    .replaceAll(" ", "-")
                    .replaceAll("?", "")}
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
                  name={feedback.question2
                    .replaceAll(" ", "-")
                    .replaceAll("?", "")}
                  value={value2}
                  setValue={setValue2}
                  onChange={handleSecondSlideChange}
                />
              </div>
            )}

            {/* Seems there should always be a question as that's what
              toggles the submit button on/off
            */}
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-2xl font-[500] text-neutral-700">
                {feedback.question3}
              </h2>
              <Thumbs
                name={feedback.question3
                  .replaceAll(" ", "-")
                  .replaceAll("?", "")}
                thumbsDownChecked={thumbsDownChecked}
                thumbsUpChecked={thumbsUpChecked}
                handleThumbsDownChecked={handleThumbsDownChecked}
                handleThumbsUpChecked={handleThumbsUpChecked}
              />
            </div>

            {feedback.question4 && (
              <FeedbackTextArea
                name={feedback.question4
                  .replaceAll(" ", "-")
                  .replaceAll("?", "")}
                thumbsDownChecked={thumbsDownChecked}
                thumbsUpChecked={thumbsUpChecked}
                placeholder={feedback.question4}
              />
            )}

            <Button
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
