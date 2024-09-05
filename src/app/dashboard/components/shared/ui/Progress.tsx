import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { GiBiceps } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";
import { PiConfetti } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { Progress as RadixProgress } from "@/components/__shared/ui/progress/progress";

type Props = {
  /** The current value of the progress bar */
  firstSlide: boolean;
  lastSlide: boolean;
  shouldShowMotivationMessage: boolean;
  value: number;
  middleSlide?: boolean;
  hideDopeMessage?: boolean;
  hideGotThisMessage?: boolean;
};

export default function Progress({
  value,
  firstSlide,
  lastSlide,
  middleSlide,
  shouldShowMotivationMessage,
  hideDopeMessage,
  hideGotThisMessage,
}: Props) {
  const [showMotivationMessage, setShowMotivationMessage] = useState(
    shouldShowMotivationMessage,
  );
  const [message, setMessage] = useState("");
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
      !hideDopeMessage && showMessageFor3Seconds("You're dope", <PiConfetti />);
      setTimeout(() => {
        setShowMotivationMessage(false);
      }, 3000);
    } else if (
      (middleSlide ?? (value >= 30 && value <= 40)) &&
      !hideGotThisMessage
    ) {
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
  }, [
    firstSlide,
    lastSlide,
    value,
    middleSlide,
    hideDopeMessage,
    hideGotThisMessage,
  ]);

  return (
    <RadixProgress
      value={value}
      message={
        <span className="flex items-center gap-2">
          {message}
          {messageIcon}
        </span>
      }
      classNames={{
        message: cn({
          hidden: !(message && messageIcon && showMotivationMessage),
        }),
      }}
    ></RadixProgress>
  );
}
