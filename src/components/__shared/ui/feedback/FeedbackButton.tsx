"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Feedback from "./Feedback";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { floatItemsIntersectionStore } from "@/store/footer/footerStore";
import { usePathname } from "next/navigation";

type Props = {
  data: any;
  threshHoldMin?: number;
};

const FeedbackButton = (props: Props) => {
  const [showButton, setShowButton] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const { hasIntersected } = floatItemsIntersectionStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < (props.threshHoldMin ?? 100)) {
        setShowButton(false);
      } else if (scrollPosition > (props.threshHoldMin ?? 100)) {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.threshHoldMin]);

  useEffect(() => {
    setTimeout(() => {
      setTimedOut(true);
    }, 30000);
  }, []);

  const variants = {
    show: {
      x: 0,
      opacity: 1,
    },
    hide: {
      x: "-100%",
      opacity: 0,
    },
  };

  return (
    <>
      <div
        className={cn("w-fit opacity-100 transition-opacity", {
          "pointer-events-none opacity-0":
            hasIntersected || !showButton || pathname !== "/" || timedOut,
        })}
      >
        <Feedback data={props.data}>
          <FeedbackIcon className="fixed -left-2 top-[33rem] z-50 scale-80" />
        </Feedback>
      </div>
      <motion.div
        variants={variants}
        initial="hide"
        animate={hasIntersected ? "show" : "hide"}
        transition={{ duration: 1 }}
        className="mt-20 w-fit"
      >
        <Feedback data={props.data}>
          <div className="ml-5 inline-flex w-fit items-center">
            <FeedbackIcon className="relative z-20" />
            <div className="relative left-[-12%] flex h-14 w-52 items-center justify-center rounded-r-[3rem] bg-gradient-to-b from-primary-500 to-primary-400 text-white">
              Feedback
            </div>
          </div>
        </Feedback>
      </motion.div>
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
