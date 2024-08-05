import React from "react";
import PromotionSlider from "../ui/PromotionSlider";
import { cn } from "@/lib/utils";

type Props = {
  data: any;
};

const Promotions = (props: Props) => {
  return (
    <section
      className={cn("section h-fit bg-[#F2F2F2] py-2 sm:py-12", {
        hidden: props.data.promotions.length === 0,
      })}
    >
      <div className="wrapper">
        <PromotionSlider promotions={props.data.promotions} />
      </div>
    </section>
  );
};

export default Promotions;
