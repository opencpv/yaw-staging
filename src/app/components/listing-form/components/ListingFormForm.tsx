"use client";
import { openSans } from "@/styles/font";
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
import TypeOfPlace from "./TypeOFPlace";
import Congratulations from "./Congratulations";
import PropertyInformation from "./PropertyInformation";
import { Form, Formik } from "formik";
import ChooseImages from "./ChooseImages";
import RentInformation from "./RentInformation";
import AgencyInformation from "./AgencyInformation";
import { useLocalStorage } from "@uidotdev/usehooks";
import OTP1 from "./OTP/OTP1";
import OTP2 from "./OTP/OTP2";
import Progress from "./Progress";
import { submitListing } from "./api/submit";
import { useAppStore } from "@/store/dashboard/AppStore";
import { ClientOnly } from "@/components/ui/ClientOnly";

const iconSize = 44;

const views = [
  <GetStarted key="get-started" />,
  <TellUsAboutYourPlace key="tell-us-about-your-place" />,
  <ChooseTemplate key="choose-template" />,
  <ClientOnly key="best-describes">
    <BestDescribes key="best-describes" />
  </ClientOnly>,
  <ClientOnly key="suited-for">
    <SuitedFor />
  </ClientOnly>,

  <ClientOnly key="type-of-place">
    <TypeOfPlace key="type-of-place" />
  </ClientOnly>,

  <ClientOnly key="property-information">
    <PropertyInformation key="property-information" />
  </ClientOnly>,
  <SetItApart key="set-it-apart" />,
  <ClientOnly key="features-and-amenities">
    <FeaturesAndAmenities key="features-and-amenities" />
  </ClientOnly>,
  <ClientOnly key="utilities">
    <Utilities key="utilities" />
  </ClientOnly>,
  <ClientOnly key="choose-images">
    <ChooseImages key="choose-images" />
  </ClientOnly>,
  <FinishAndPublish key="finish-and-publish" />,

  <ClientOnly key="rent-information">
    <RentInformation key="rent-information" />
  </ClientOnly>,

  <ClientOnly key="agency-information">
    <AgencyInformation key="agency-information" />
  </ClientOnly>,
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

  const { user } = useAppStore();

  const [listingFormData, setListingFormData] = useLocalStorage(
    "listing-form",
    {},
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
    activeSlide > 13 &&
      submitListing(user?.profileData?.id, listingFormData, true);
    if (activeSlide < views.length - 1) {
      setActiveSlide((init) => init + 1);

      scrollToTop();
    }
  };

  return (
    <Root
      className={`flex h-full max-h-[90vh] min-h-[80vh] flex-col justify-between gap-10 text-black`}
      ref={leaseRef}
    >
      <div className="flex h-full w-full flex-col items-center justify-start gap-8 lg:gap-16">
        <div className="mt-16 w-full px-4 lg:px-10">
          <Progress value={progressValue} />
        </div>
        <Formik
          initialValues={{
            ...listingFormData,
          }}
          onSubmit={() => alert("sibm")}
        >
          <Form className="w-full px-7 lg:px-0">
            <div>{views[activeSlide]}</div>
          </Form>
        </Formik>
      </div>

      <div
        className={`${
          hideLeft && hideRight
            ? "hidden"
            : "relative z-[3000] grid w-full grid-cols-2 gap-1 border-t-[1px] border-t-[#C1C1C1] px-7 py-7 lg:flex lg:items-center lg:justify-end"
        }`}
      >
        <NavigationButton
          className={` ${
            hideLeft && "hidden"
          } col-span-1  rounded-lg border-[1px] border-[#AD842A] font-semibold text-[#AD842A]`}
          onClick={handleBack}
        >
          {firstSlide ? "Exit" : "Back"}
        </NavigationButton>
        <NavigationButton
          className={` ${
            hideRight && "hidden"
          } col-span-1 rounded-lg  bg-[#DDB771] font-semibold text-white`}
          onClick={handleForward}
        >
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
