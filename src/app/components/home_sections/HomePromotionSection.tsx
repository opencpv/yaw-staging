import React from "react";
import PromotionSlider from "../slider/promotion/PromotionSlider";

type Props = {};

const HomePromotionSection = (props: Props) => {
  return (
    <section className="relative mb-16 flex items-center justify-center px-5 pt-20">
      <div className="h-fit w-full max-w-[1100px]">
        <PromotionSlider />
        <div className="absolute left-0 top-[20%] z-10 h-[85%] w-full max-w-[90%] translate-y-[-10%] bg-red-400 opacity-0 sm:hidden"></div>
        {/*!!! Temporary fix of scrolling issue on mobile !!!*/}
      </div>
    </section>
  );
};

export default HomePromotionSection;
