import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";

type Props = {
  value: number;
};

export default function Progress({ value }: Props) {
  const [message, setMessage] = useState("");
  const [agentFormActiveSlide, setAgentFormActiveSlide] = useLocalStorage<{
    activeSlide: number;
    showContinueMessage: boolean;
  }>("agentFormActiveSlide");

  const showMessageFor3Seconds = (message: string) => {
    setMessage(message);

    setTimeout(() => {
      setMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };

  useEffect(() => {
    if (value > 5 && value < 10) {
      showMessageFor3Seconds("Let's do this");
    }
    if (value > 50 && value < 55) {
      showMessageFor3Seconds("Halfway there!!!");
    }
    if (value > 80 && value < 85) {
      showMessageFor3Seconds("Almost there");
    }
    if (agentFormActiveSlide?.showContinueMessage) {
      showMessageFor3Seconds("Continue from where you left off");
      setTimeout(() => {
        setAgentFormActiveSlide({
          ...agentFormActiveSlide,
          showContinueMessage: false,
        });
      }, 3000);
    }
  }, [value, agentFormActiveSlide, setAgentFormActiveSlide]);

  // useEffect(() => {
  // }, [value]);

  // useEffect(() => {
  // }, [value]);

  return (
    <div className="h-[16px]  w-full rounded-2xl bg-[#FEF8ED]">
      <div
        className=" duration-3000 relative h-[16px] justify-end rounded-2xl bg-warning-400 transition-width"
        style={{ width: `${value}%` }}
      >
        <div
          className={`${
            message ? "flex" : "hidden"
          } progress-emoji absolute right-[-30px] top-[30px] z-[7000] flex w-fit items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-[#00A651] px-3 py-4 text-[13px] text-white lg:text-[16px]`}
        >
          {message}
          <FaRegThumbsUp color="white" />
        </div>{" "}
      </div>
    </div>
  );
}
