import React from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Feedback from "./Feedback";
import AOSWrapper from "../__shared/AOSWrapper";

type Props = {};

const FeedbackButton = (props: Props) => {
  return (
    <AOSWrapper animation="fade-right" className="w-fit">
      <Feedback>
        <div className="inline-flex items-center ml-5 w-fit">
          <div
            className={`relative z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-t from-primary-500 to-primary-400 shadow-lg`}
          >
            <HiOutlineChatBubbleOvalLeftEllipsis className="text-3xl text-white" />
          </div>
          <div className="relative left-[-12%] flex h-14 w-52 items-center justify-center rounded-r-[3rem] bg-gradient-to-b from-primary-500 to-primary-400 text-white">
            Feedback
          </div>
        </div>
      </Feedback>
    </AOSWrapper>
  );
};

export default FeedbackButton;
