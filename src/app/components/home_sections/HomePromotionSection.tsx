import React from "react";
import PromotionSlider from "../slider/promotion/PromotionSlider";
import VerticalSliderScrollFixOverlay from "@/components/__shared/sliders/VerticalSliderScrollFixOverlay";

type Props = {
  data: any;
};

const HomePromotionSection = (props: Props) => {
  return (
    <section className="flex items-center justify-center pt-16">
      <div className="relative h-fit w-full max-w-[1100px] sm:hidden">
        <PromotionSlider promotions={props.data.promotions} />
        <VerticalSliderScrollFixOverlay className="md:-translate-x-32" />
      </div>
      <div className="relative h-fit w-full max-w-[1100px] max-sm:hidden">
        <PromotionSlider promotions={props.data.promotions} />
      </div>
    </section>
  );
};

export default HomePromotionSection;
