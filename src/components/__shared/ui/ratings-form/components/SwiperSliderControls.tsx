import React, { Dispatch, SetStateAction } from "react";
import { useSwiper } from "swiper/react";

type Props = {
  setActiveIndex: Dispatch<SetStateAction<number>>;
  buttonLabel1?: string;
  buttonLabel2?: string;
};
import styles from "../index.module.css";

const SwiperSlideControls = React.forwardRef<HTMLInputElement, Props>(
  (
    { setActiveIndex, buttonLabel1 = "Back", buttonLabel2 = "Continue" },
    ref
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
        <div className="flex gap-5 flex-col lg:flex-row font-semibold">
          <button
            className={`w-[194px] h-[52px]  ${styles.review_button}
          flex justify-center items-center text-[#ffff] rounded-lg hover:scale-[1.05]`}
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
            }}>
            {buttonLabel2}{" "}
          </button>
        </div>
      </div>
    );
  }
);

SwiperSlideControls.displayName = "SwiperSlideControls";

export default SwiperSlideControls;
