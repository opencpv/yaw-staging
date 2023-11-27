import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";

type Props = {
  value: number;
};

export default function Progress({ value }: Props) {
  const [message, setMessage] = useState("");

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
  }, [value]);

  useEffect(() => {
    if (value > 50 && value < 55) {
      showMessageFor3Seconds("Halfway there!!!");
    }
  }, [value]);

  useEffect(() => {
    if (value > 80 && value < 85) {
      showMessageFor3Seconds("Almost there");
    }
  }, [value]);

  return (
    <div className="w-full  h-[16px] rounded-2xl bg-[#FEF8ED]">
      <div
        className=" bg-warning-400 h-[16px] rounded-2xl transition-width duration-3000 relative justify-end"
        style={{ width: `${value}%` }}>
        <div
          className={` ${
            message ? "flex" : "hidden"
          } absolute right-[-30px] top-[30px] px-3 py-4 w-fit whitespace-nowrap bg-[#00A651] text-white rounded-2xl progress-emoji text-[13px] lg:text-[16px] flex items-center justify-center gap-3`}>
          {message}
          <FaRegThumbsUp color="white"/>
        </div>{" "}
      </div>
    </div>
  );
}
