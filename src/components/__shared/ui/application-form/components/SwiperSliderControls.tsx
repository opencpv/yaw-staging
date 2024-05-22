import React, { Dispatch, SetStateAction } from "react";
import { useSwiper } from "swiper/react";

type Props = {
  setActiveIndex: Dispatch<SetStateAction<number>>;
  buttonLabel1?: string;
  buttonLabel2?: string;
};

const SwiperSlideControls = React.forwardRef<HTMLInputElement, Props>(
  (
    { setActiveIndex, buttonLabel1 = "Back", buttonLabel2 = "Continue" },
    ref,
  ) => {
    const swiper = useSwiper();

    const scrollToTop = () => {
      if (ref && typeof ref !== "function") {
        const scrollContainer = ref.current;
        if (scrollContainer) {
          const childElement = scrollContainer.querySelector(".sc");
          if (childElement) {
            childElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "start",
            });
          }
        }
      }
    };

    const scrollToRight = (className: string) => {
      const element = document.querySelector(`.${className}`);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // You can use "auto" for instant scrolling
          block: "start", // You can adjust this to "center" or "end" as needed
          inline: "end", // This scrolls to the right edge of the element
        });
      }
    };

    return (
      <div className="">
        <div className="flex flex-col gap-5 font-semibold lg:flex-row">
          <button
            className="flex  aspect-[224/52] h-max max-h-[52px]
          w-[224.5px] 
          items-center justify-center rounded-lg border-[1px] border-[#AD842A]
          text-[#AD842A] hover:bg-slate-100"
            onClick={() => {
              window.scrollTo(0, 0);
              swiper.slidePrev();
              scrollToTop();
              setActiveIndex((prevIndex) => {
                if (prevIndex > 1) {
                  scrollToRight(`${"sc" + (prevIndex - 1)}`);

                  return prevIndex - 1;
                } else {
                  scrollToRight(`${"sc1"}`);

                  return prevIndex;
                }
              });
            }}
          >
            {buttonLabel1}
          </button>

          <button
            className="[52px] flex aspect-[224/52] w-[224.5px]
          items-center justify-center rounded-lg bg-accent text-[#ffff] hover:scale-[1.05]"
            onClick={() => {
              window.scrollTo(0, 0);

              swiper.slideNext();
              scrollToTop();
              setActiveIndex((prevIndex) => {
                if (prevIndex > 3) {
                  scrollToRight(`${"sc4"}`);

                  return prevIndex;
                } else {
                  scrollToRight(`${"sc" + (1 + prevIndex)}`);
                  return prevIndex + 1;
                }
              });
            }}
          >
            {buttonLabel2}
          </button>
        </div>
      </div>
    );
  },
);

SwiperSlideControls.displayName = "SwiperSlideControls";

export default SwiperSlideControls;
