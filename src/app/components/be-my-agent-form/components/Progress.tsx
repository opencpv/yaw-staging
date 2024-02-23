import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useMemo, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";
import { PiConfetti } from "react-icons/pi";

type Props = {
  /** The current value of the progress bar */
  value: number;
  /** The index of the last slide */
  lastIndex?: boolean;
  /** The index of the first slide */
  firstIndex?: boolean;
};

export default function Progress({ value, lastIndex, firstIndex }: Props) {
  const percentageValue = useMemo(() => {
    return Math.round((value / 100) * 100);
  }, [value]);

  const [message, setMessage] = useState("");
  const [messageIcon, setMessageIcon] = useState<React.ReactElement | null>(
    null,
  );
  const [agentFormActiveSlide, setAgentFormActiveSlide] = useLocalStorage<{
    activeSlide: number;
    showContinueMessage: boolean;
  }>("agentFormActiveSlide");

  console.log(message);

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
    if (firstIndex) {
      showMessageFor3Seconds("Get started", <IoMdHappy />);
    } else if (lastIndex) {
      showMessageFor3Seconds("You did it", <PiConfetti />);
    } else if (percentageValue >= 70 && percentageValue <= 80) {
      showMessageFor3Seconds("Almost there", <FaRegThumbsUp />);
    } else if (agentFormActiveSlide?.showContinueMessage) {
      showMessageFor3Seconds("Continue from where you left off", <IoMdHappy />);
      setTimeout(() => {
        setAgentFormActiveSlide({
          ...agentFormActiveSlide,
          showContinueMessage: false,
        });
      }, 3000);
      ("");
    } else {
      setMessage("");
      setMessageIcon(null);
    }
  }, [
    agentFormActiveSlide,
    firstIndex,
    lastIndex,
    percentageValue,
    setAgentFormActiveSlide,
  ]);

  return (
    <div className="h-[16px] w-full rounded-2xl bg-[#FEF8ED]">
      <div
        className="duration-3000 relative h-[16px] justify-end rounded-2xl bg-accent-400 transition-width"
        style={{ width: `${value}%` }}
      >
        <div
          className={`${
            message && messageIcon ? "flex" : "hidden"
          } progress-emoji absolute -right-10 top-8 z-10 w-fit items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-primary-200/90 px-3 py-4 text-[13px] text-white lg:text-base`}
        >
          {message}
          {messageIcon}
        </div>{" "}
      </div>
    </div>
  );
}
