import { Swiper, SwiperSlide } from "swiper/react";
import GetStarted from "./GetStarted";
import { openSans } from "@/app/styles/font";
import ChooseTemplate from "./ChooseTemplate";
import TellUsAboutYourPlace from "./TellUsAboutYourPlace";
import { styled } from "@stitches/react";
import SetItApart from "./SetItApart";
import FinishAndPublish from "./FinishAndPublish";
import FeaturesAndAmenities from "./FeaturesAndAmenities";
import BestDescribes from "./BestDescribes";
import SuitedFor from "./SuitedFor";
import Utilities from "./Utilities";

export default function LeaseForm() {
  return (
    <Root className={`${openSans.className}`}>
      <Swiper>
        <SwiperSlide>
          <GetStarted />
        </SwiperSlide>
        <SwiperSlide>
          <ChooseTemplate />
        </SwiperSlide>
        <SwiperSlide>
          <TellUsAboutYourPlace />
        </SwiperSlide>
        <SwiperSlide>
          <BestDescribes />
        </SwiperSlide>
        <SwiperSlide>
          <SuitedFor />
        </SwiperSlide>
        <SwiperSlide>
          <SetItApart />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesAndAmenities />
        </SwiperSlide>
        <SwiperSlide>
          <Utilities />
        </SwiperSlide>
        <SwiperSlide>
          <FinishAndPublish />
        </SwiperSlide>{" "}
      
      </Swiper>
    </Root>
  );
}

const Root = styled("div", {
  ".swiper-slide": {
    "@media screen and (min-width: 1024px)": {
      marginBlock: "auto",
    },
  },
});
