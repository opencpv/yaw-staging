import React from "react";
import PromotionSlider from "../slider/promotion/PromotionSlider";

type Props = {};

const HomePromotionSection = (props: Props) => {
  return (
    <section className="relative flex items-center justify-center section">
      <div className="h-fit w-full max-w-[1100px]">
        <PromotionSlider />
        <div className="absolute left-0 opacity-0 top-[25%] z-10 h-[85%] w-10/12 translate-y-[-10%] bg-red-400"></div>
        {/*!!! Temporary fix of scrolling issue on mobile !!!*/}
      </div>
    </section>
  );
};

export default HomePromotionSection;
