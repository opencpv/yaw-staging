"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Feedback from "./Feedback";
import { fadeInRight } from "@/lib/animations";
import FramerWrapper from "../../hoc/FramerWrapper";
import { cn } from "@/lib/utils";

type Props = {
  data: any;
};

const FeedbackButton = (props: Props) => {
  const collapsedRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("#footer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowFull(true);
          }
        });
      },
      {
        threshold: 1,
      },
    );

    if (collapsedRef.current && footer) {
      observer.observe(collapsedRef.current);
      observer.observe(footer as HTMLElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={collapsedRef} className={cn("w-fit", { invisible: showFull })}>
        <Feedback data={props.data}>
          <FeedbackIcon className="fixed -left-2 top-[38rem] z-50 scale-80" />
        </Feedback>
      </div>
      <FramerWrapper
        {...fadeInRight}
        className={cn("invisible w-fit", { visible: showFull })}
        ref={expandedRef}
      >
        <Feedback data={props.data}>
          <div className="ml-5 inline-flex w-fit items-center">
            <FeedbackIcon className="relative z-20" />
            <div className="relative left-[-12%] flex h-14 w-52 items-center justify-center rounded-r-[3rem] bg-gradient-to-b from-primary-500 to-primary-400 text-white">
              Feedback
            </div>
          </div>
        </Feedback>
      </FramerWrapper>
    </>
  );
};

const FeedbackIcon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex size-14 items-center justify-center rounded-full bg-gradient-to-t from-primary-500 to-primary-400 shadow-lg",
        className,
      )}
    >
      <HiOutlineChatBubbleOvalLeftEllipsis className="text-3xl text-white" />
    </div>
  );
};

export default FeedbackButton;
