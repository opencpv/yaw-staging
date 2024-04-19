import React from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Survey from "./Survey";
import FramerWrapper from "../__shared/FramerWrapper";
import { fadeInLeft } from "@/lib/animations";

type Props = {};

const SurveyButton = (props: Props) => {
  return (
    <section className="section relative overflow-x-hidden">
      <FramerWrapper
        {...fadeInLeft}
        className="absolute bottom-0 right-5 w-fit"
      >
        <Survey>
          <div className="relative inline-flex w-fit items-center">
            <div
              className={`absolute right-0 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-t from-primary-500 to-primary-400 shadow-lg`}
            >
              <HiOutlineChatBubbleOvalLeftEllipsis className="text-3xl text-white" />
            </div>
            <div className="relative left-[-12%] flex h-14 w-52 items-center justify-center rounded-l-[3rem] bg-gradient-to-b from-primary-500 to-primary-400 text-white">
              Survey
            </div>
          </div>
        </Survey>
      </FramerWrapper>
    </section>
  );
};

export default SurveyButton;
