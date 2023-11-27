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
import { useContext, useEffect, useRef, useState } from "react";
import GetStarted from "./GetStarted";
import { motion, progress } from "framer-motion";
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
import Progress from "./Progress";
import supabase from "@/lib/utils/supabaseClient";
import userSession from "@/lib/utils/userSession";
import { submitListing } from "./api/submit";
import { useAppStore } from "@/store/dashboard/AppStore";


const iconSize = 44;

const views = [
  <GetStarted key="get-started" />,
  <TellUsAboutYourPlace key="tell-us-about-your-place" />,
  <ChooseTemplate key="choose-template" />,
  <BestDescribes key="best-describes" />,
  <SuitedFor key="suited-for" />,

  <TypeOfPlace key="type-of-place" />,

  <PropertyInformation key="property-information" />,
  <SetItApart key="set-it-apart" />,
  <FeaturesAndAmenities key="features-and-amenities" />,

  <Utilities key="utilities" />,
  <ChooseImages key="choose-images" />,
  <FinishAndPublish key="finish-and-publish" />,

  <RentInformation key="rent-information" />,

  <AgencyInformation key="agency-information" />,
  <OTP1 key="otp1" />,
  <OTP2 key="otp2" />,
  <Congratulations key="congratulations" />,
];

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ListingFormForm({ setOpen }: Props) {
  const leaseRef = useRef<any>();
  const [progressValue, setProgressValue] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);
  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);
  const [otp, setOtp] = useState(false);
  
  const { user } = useAppStore()

  const [listingFormData, setListingFormData] = useLocalStorage(
    "listing-form",
    {}
  );

  const handleOnChange = (name: any, value: any) => {
    setListingFormData({
      ...listingFormData,
      [name]: value,
    });
  };
  const scrollToTop = () => {
    if (leaseRef.current) {
      leaseRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    if (activeSlide < 1) {
      setFirstSlide(true);
    }
    if (activeSlide > 0) {
      setFirstSlide(false);
    }

    if (activeSlide > 15) {
      setHideLeft(true);
      setHideRight(true);
    } else {
      setHideLeft(false);
      setHideRight(false);
    }

    const value = (activeSlide / views.length) * 100;
    console.log(value);
    setProgressValue(value + 5);
  }, [activeSlide]);

  const handleBack = () => {
    firstSlide && setOpen(false);
    if (activeSlide > 0) {
      setActiveSlide((init) => init - 1);

      scrollToTop();
    }
  };

  const handleForward = () => {
    activeSlide > 13 && submitListing(user?.profileData?.id, listingFormData, true);
    if (activeSlide < views.length - 1) {
      setActiveSlide((init) => init + 1);

      scrollToTop();
    }
  };

  return (
    <Root
      className={`${openSans.className} flex flex-col max-h-[90vh] min-h-[80vh] h-full justify-between gap-10 text-black`} ref={leaseRef}>
      <div className="flex flex-col w-full h-full items-center justify-start gap-8 lg:gap-16">
        <div className="w-full mt-16 px-4 lg:px-10" >
          <Progress value={progressValue} />
        </div>
        <Formik
          initialValues={{
            ...listingFormData,
          }}
          onSubmit={() => alert("sibm")}>
          <Form className="w-full px-7 lg:px-0">
            <div>{views[activeSlide]}</div>
          </Form>
        </Formik>
      </div>

      <div
        className={`${
          hideLeft && hideRight
            ? "hidden"
            : "grid grid-cols-2 lg:flex lg:justify-end lg:items-center w-full gap-1 px-7 py-7 border-t-[1px] border-t-[#C1C1C1] z-[3000] relative"
        }`}>
        <NavigationButton
          className={` ${
            hideLeft && "hidden"
          } col-span-1  border-[1px] border-[#AD842A] font-semibold text-[#AD842A] rounded-lg`}
          onClick={handleBack}>
          {firstSlide ? "Exit" : "Back"}
        </NavigationButton>
        <NavigationButton
          className={` ${
            hideRight && "hidden"
          } col-span-1 bg-[#DDB771]  text-white font-semibold rounded-lg`}
          onClick={handleForward}>
          {firstSlide && "Get Started"}
          {!firstSlide && !lastSlide && "Continue"}
          {lastSlide && "Submit"}
        </NavigationButton>
      </div>
    </Root>
  );
}

const Root = styled("div", {
  ".progress-emoji": {
    boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
  },
});

export const NavigationButton = styled("button", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "224px",
  borderRadius: "0.5rem",
  fontWeight: "600",
  fontSize: "16px",
  height: "52px",
  aspectRatio: "224/52",

  "@media screen and (max-width:1024px)": {
    fontSize: "13px",
    aspectRatio: "195/48",
    minHeight: "48px",
    maxWidth: "100%",
  },
});
