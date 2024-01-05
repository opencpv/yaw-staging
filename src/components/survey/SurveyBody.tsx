import React from "react";
import Thumbs from "./Thumbs";
import FeedbackSlider from "./FeedbackSlider";
import Image from "next/image";
import Button from "../__shared/ui/button/Button";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";


const SurveyBody = ({handleSubmitFeedback}: {handleSubmitFeedback: () => void;}) => {

  return (
    <>
      <Image
        src="/svgs/survey/amico.svg"
        alt="group of people"
        width={128}
        height={128}
        className=" mx-auto mt-10 h-32 w-32 xs:h-72 xs:w-72"
      />
      <form className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-[500] text-2xl text-neutral-700">Was the website easy to use?</h2>
          <FeedbackSlider />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-[500] text-2xl text-neutral-700">
            Was the website useful to you?
          </h2>
          <FeedbackSlider />
        </div>

        <div className="flex flex-col items-center gap-8">
          <h2 className="font-[500] text-2xl text-neutral-700">
            Will you recommend us to Friends?
          </h2>
          <Thumbs />
        </div>

        <textarea
          cols={12}
          rows={6}
          className="mx-auto w-full rounded-md border border-neutral-300 p-4 text-base text-neutral-500 placeholder:text-neutral-400 focus:border-primary-800 focus:ring-primary-800 sm:w-10/12"
          placeholder="What can we do to serve you better?"
        ></textarea>
        <Button
          // type="submit"
          color="gradient"
          className="w-6/12 py-2.5 rounded-md text-lg capitalize text-white hover:opacity-80"
          onClick={handleSubmitFeedback}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default SurveyBody;
