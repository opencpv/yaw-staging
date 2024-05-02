import React from "react";
import PromotionSlider from "../ui/PromotionSlider";

type Props = {};

const Promotions = (props: Props) => {
  return (
    <section className="section h-fit bg-[#F2F2F2] py-12">
      <div className="wrapper">
        <PromotionSlider />
      </div>
    </section>
  );
};

export default Promotions;
