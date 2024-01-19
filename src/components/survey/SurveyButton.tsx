import React from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import AOSWrapper from "../__shared/AOSWrapper";
import Survey from "./Survey";

type Props = {};

const SurveyButton = (props: Props) => {
  return (
    <section className="section relative overflow-x-hidden">
      <AOSWrapper
        animation="fade-left"
        className="absolute -right-5 bottom-0 w-fit"
      >
        <Survey>
          <div className="inline-flex w-fit items-center">
            <div
              className={`relative z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-t from-primary-500 to-primary-400 shadow-lg`}
            >
              <HiOutlineChatBubbleOvalLeftEllipsis className="text-3xl text-white" />
            </div>
            <div className="relative left-[-12%] flex h-14 w-52 items-center justify-center rounded-r-[3rem] bg-gradient-to-b from-primary-500 to-primary-400 text-white">
              Survey
            </div>
          </div>
        </Survey>
      </AOSWrapper>
    </section>
  );
};

export default SurveyButton;
