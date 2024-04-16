import React, { useState } from "react";
import Thumbs from "./Thumbs";
import FeedbackSlider from "./FeedbackSlider";
import Image from "next/image";
import Button from "../__shared/ui/button/Button";

const FeedbackBody = ({
  handleSubmitFeedback,
  data,
}: {
  handleSubmitFeedback: (e: React.FormEvent<HTMLFormElement>) => void;
  data: any;
}) => {
  const [value1, setValue1] = useState<number>(50);
  const [value2, setValue2] = useState<number>(50);
  const feedback = data.customFeedback;

  const handleFirstSlideChange = (val: number) => {
    setValue1(val);
  };

  const handleSecondSlideChange = (val: number) => {
    setValue2(val);
  };

  return (
    <>
      <Image
        src="/svgs/survey/amico.svg"
        alt="group of people"
        width={128}
        height={128}
        className="mx-auto mt-10 aspect-square w-72"
      />
      <form
        className="flex flex-col items-center gap-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitFeedback(e);
        }}
      >
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-2xl font-[500] text-neutral-700">
            {feedback.question1}
          </h2>
          <FeedbackSlider
            value={value1}
            setValue={setValue1}
            onChange={handleFirstSlideChange}
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-2xl font-[500] text-neutral-700">
            {feedback.question2}
          </h2>
          <FeedbackSlider
            value={value2}
            setValue={setValue2}
            onChange={handleSecondSlideChange}
          />
        </div>

        <div className="flex flex-col items-center gap-8">
          <h2 className="text-2xl font-[500] text-neutral-700">
            {feedback.question3}
          </h2>
          <Thumbs />
        </div>

        <textarea
          cols={12}
          rows={6}
          className="mx-auto w-full rounded-md border border-neutral-300 p-4 text-base text-neutral-500 placeholder:text-neutral-400 focus:border-primary-800 focus:ring-primary-800 sm:w-10/12"
          placeholder={feedback.question4}
        ></textarea>
        <Button
          // type="submit"
          color="gradient"
          className="w-6/12 rounded-md py-2.5 text-lg capitalize text-white hover:opacity-80"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default FeedbackBody;
