type Props = {
  number: number;
};
import useRatingsStore from "../useRatingsStore";
import Image from "next/image";

export const ProgressLabel = ({
  number,
  label,
}: {
  number: number;
  label: string;
}) => {
  const { activeTab, setActiveTab } = useRatingsStore();

  return (
    <p
      className={`text-[10px] sm:text-[13px] break-wod    font-semibold capitalize  ${
        activeTab == number - 1 ? "text-black " : "text-shade-200"
      } `}
    >
      {label}
    </p>
  );
};

export const ProgressLine = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative h-[1px] w-full">
        <Image
          src={"/assets/images/reviews-line.png"}
          alt="Reviews line"
          fill
        />
      </div>
    </div>
  );
};

export const Progress = ({ number }: Props) => {
  const { activeTab, setActiveTab } = useRatingsStore();

  return (
    <button
      className={` flex justify-center  `}
      onClick={() => setActiveTab(number - 1)}
    >
      <div className={`flex flex-col items-center gap-8 `}>
        <div
          style={{
            boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
          }}
          className={`cursor-pointer 
            ${
              activeTab == number - 1
                ? `bg-[#41807E] font-bold text-white `
                : " border-2 border-shade-200 text-shade-200"
            } flex aspect-square w-[40px] max-w-[80px] items-center justify-center rounded-full text-base font-semibold duration-300 ${
              activeTab != number - 1 &&
              "hover:border-primary-300 hover:bg-primary-300"
            } md:w-[80px] md:text-[1.9375rem]`}
        >
          {number}
        </div>
      </div>
    </button>
  );
};
