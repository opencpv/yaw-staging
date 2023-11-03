"use client";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { useEffect, useRef, useState } from "react";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import SlideEnter from "./SlideEnter";
import TypeOfPlace from "./TypeOFPlace";
import Congratulations from "./Congratulations";
import PropertyInformation from "./PropertyInformation";
import { Form, Formik } from "formik";
import ProgressBar from "../../ProgressBar";
import ChooseImages from "./ChooseImages";
import RentInformation from "./RentInformation";
import AgencyInformation from "./AgencyInformation";
import { useLocalStorage } from "@uidotdev/usehooks";
import OTP1 from "./OTP/OTP1";
import OTP2 from "./OTP/OTP2";


const iconSize = 44;

const views = [
  <Congratulations />,

  <OTP1/>,
  <OTP2/>,
  <ChooseImages />,

  <Utilities />,

  <FeaturesAndAmenities />,

  <PropertyInformation />,

  <AgencyInformation />,

  <RentInformation />,
  <TypeOfPlace />,
  <SuitedFor />,
  <BestDescribes />,
  <GetStarted />,
  <ChooseTemplate />,
  <TellUsAboutYourPlace />,
  <SetItApart />,
  <FinishAndPublish />,
];

export default function LeaseForm() {
  const leaseRef = useRef<any>();
  const [progressValue, setProgressValue] = useState<any>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [leaseFormData, setLeaseFormData] = useLocalStorage("lease-form", {});
  const handleOnChange = (name: any, value: any) => {
    setLeaseFormData({
      ...leaseFormData,
      [name]: value,
    });
  };
  const scrollToTop = () => {
    if (leaseRef.current) {
      leaseRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    const value = (activeSlide / views.length) * 100;
    console.log(value);
    // setProgressValue(value);
  }, [activeSlide]);

  return (
    <Root
      className={`${openSans.className} flex flex-col max-h-[90vh] min-h-[85vh] h-full justify-between gap-10`}>
      <div className="flex flex-col w-full h-full items-center justify-start gap-16">
        <div className="w-full  pt-16 px-10" ref={leaseRef}>
          <ProgressBar value={progressValue} />
        </div>
        <Formik
        initialValues={{
          ...leaseFormData
        }}
        >
          <Form className="w-full">
            <div>{views[activeSlide]}</div>
          </Form>
        </Formik>
      </div>

      <div
        className="flex flex-col lg:flex-row items-center  justify-center lg:justify-end w-full  gap-5 px-14 py-7
      border-t-[1px] border-t-[#C1C1C1]
      ">
        <NavigationButton
          className="  border-2 bprder-[#AD842A] font-semibold"
          onClick={() => {
            if (activeSlide > 0) {
              setActiveSlide((init) => init - 1);

              scrollToTop();
            }
          }}>
          Back
        </NavigationButton>
        <NavigationButton
          className="bg-[#DDB771]  text-white font-semibold"
          onClick={() => {
            if (activeSlide < views.length) {
              setActiveSlide((init) => init + 1);

              scrollToTop();
            }
          }}>
          Next
        </NavigationButton>
      </div>
    </Root>
  );
}

const Root = styled("div", {
  ".swiper-slide": {
    minHeight: "70vh",
    // "@media screen and (min-width: 1024px)": {
    //   marginBlock: "auto",
    // },
  },
});

export const NavigationButton = styled("button", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  aspectRatio: "224/52",
  maxWidth: "224px",
  borderRadius: "0.5rem",
  fontWeight: "600",
  minHeight: "52px",
});
