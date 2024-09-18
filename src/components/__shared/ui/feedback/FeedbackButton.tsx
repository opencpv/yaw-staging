"use client";
import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Feedback from ".";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { floatItemsIntersectionStore } from "@/store/footer/footerStore";
import { usePathname } from "next/navigation";
import { getLocalStorageWithExpiry } from "@/lib/utils/localStorage";

type Props = {
  data: any;
  thresholdMin?: number;
  className?: string;
};

const FeedbackButton = (props: Props) => {
  const [showButton, setShowButton] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const { hasIntersected } = floatItemsIntersectionStore();
  const pathname = usePathname();

  const shouldFloat = useMemo(() => {
    const float = getLocalStorageWithExpiry(
      "floating-feedback-behavior",
    ) as boolean;
    return float;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < (props.thresholdMin ?? 100)) {
        setShowButton(false);
      } else if (scrollPosition > (props.thresholdMin ?? 100)) {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.thresholdMin]);

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
    <div className={cn(props.className)}>
      <div
        className={cn("w-fit opacity-100 transition-opacity", {
          "pointer-events-none opacity-0":
            shouldFloat === false ||
            hasIntersected ||
            !showButton ||
            pathname !== "/" ||
            timedOut,
        })}
      >
        <Feedback data={props.data}>
          <FeedbackIcon className="scale-80 fixed -left-5 bottom-20 z-50" />
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
    </div>
  );
};

const FeedbackIcon = ({ className }: { className?: string }) => {
  return (
    <button
      //size="sm"
      className={cn(
        "grid size-14 place-items-center rounded-full bg-gradient-to-t from-primary-500 to-primary-400 shadow-lg",
        className,
      )}
    >
      <HiOutlineChatBubbleOvalLeftEllipsis className="text-3xl text-white" />
    </button>
  );
};

export default FeedbackButton;
