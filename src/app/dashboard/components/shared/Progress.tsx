import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { GiBiceps } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";
import { PiConfetti } from "react-icons/pi";
import { beMyAgentStepsStore } from "@/store/dashboard/beMyAgentStepsStore";
import { cn } from "@/lib/utils";

type Props = {
  /** The current value of the progress bar */
  value: number;
};

export default function Progress({ value }: Props) {
  const [message, setMessage] = useState("");
  const {
    firstSlide,
    lastSlide,
    shouldShowMotivationMessage,
    setShouldShowMotivationMessage,
  } = beMyAgentStepsStore();
  const [messageIcon, setMessageIcon] = useState<React.ReactElement | null>(
    null,
  );

  const showMessageFor3Seconds = (
    message: string,
    icon: React.ReactElement,
  ) => {
    setMessage(message);
    setMessageIcon(icon);

    setTimeout(() => {
      setMessage(""); // Clear the message after 3 seconds
      setMessageIcon(null);
    }, 3000);
  };

  useEffect(() => {
    if (firstSlide) {
      showMessageFor3Seconds("Get started", <IoMdHappy />);
    } else if (lastSlide) {
      showMessageFor3Seconds("You're dope", <PiConfetti />);
      setTimeout(() => {
        setShouldShowMotivationMessage(false);
      }, 3000);
    } else if (value >= 30 && value <= 40) {
      showMessageFor3Seconds("You got this", <GiBiceps />);
    } else if (value >= 70 && value <= 80) {
      showMessageFor3Seconds("Almost there", <FaRegThumbsUp />);
    }
    // else if (agentFormSlide?.showContinueMessage) {
    //   showMessageFor3Seconds("Continue from where you left off", <IoMdHappy />);
    //   setTimeout(() => {
    //     setAgentFormSlide({
    //       ...agentFormSlide,
    //       showContinueMessage: false,
    //     });
    //   }, 3000);
    //   ("");
    // }
    else {
      setMessage("");
      setMessageIcon(null);
    }
  }, [firstSlide, lastSlide, value, setShouldShowMotivationMessage]);

  return (
    <div className="h-[16px] w-full rounded-2xl bg-[#FEF8ED]">
      <div
        className="duration-3000 relative h-[16px] justify-end rounded-2xl bg-accent-400 transition-width"
        style={{ width: `${value}%` }}
      >
        <div
          className={cn(
            `${
              message && messageIcon && shouldShowMotivationMessage
                ? "flex"
                : "hidden"
            } progress-emoji absolute right-0 top-8 z-50 w-fit items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-primary-300 px-3 py-4 text-[13px] text-shade-300 lg:text-base`,
            {
              "-right-20 lg:right-0": firstSlide,
              "right-[10%] lg:right-0": lastSlide,
            },
          )}
        >
          {message}
          {messageIcon}
        </div>{" "}
      </div>
    </div>
  );
}
