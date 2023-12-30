"use client";

import { styled } from "@stitches/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import Progress from "./Progress";
import BestDescribes from "./BestDescribes";
import PropertyInformation from "./PropertyRequirements";
import Utilities from "./Utilities";
import FeaturesAndAmenities from "./FeaturesAndAmenities";
import ContactInformationForm from "./ContactInformation";
import EmploymentInformationForm from "./EmploymentInformation";
import ScreeningAndOtherDetailsForm from "./ScreeningAndOtherDetailsForm";
import PersonalInformationForm2 from "./PersonalInformationForm2";
import Image from "next/image";
import Location from "./Location";
import { openSans } from "@/styles/font";

const image = "/assets/images/agent-modal-image.jpeg";

const views = [
  <BestDescribes infoText key={"bes-describes"} />,
  <PropertyInformation key={"property-information"} />,
  <Location key={"property-information"} />,
  <Utilities key={"utitilities"} />,
  <FeaturesAndAmenities key={"features"} />,
  <PersonalInformationForm2 key={"personal-information"} />,
  <ContactInformationForm key={"contact-informaiton"} />,
  <EmploymentInformationForm key={"employment-information"} />,
  <ScreeningAndOtherDetailsForm key={"screenign"} />,
];

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BeMyAgentForm({ setOpen }: Props) {
  const leaseRef = useRef<any>();
  const [progressValue, setProgressValue] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);
  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);
  const [otp, setOtp] = useState(false);

  const [agentFormData, setagentFormData] = useLocalStorage("agent-form", {});

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

    if (activeSlide > 9) {
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
      setProgressValue((init) => init - 6);

      scrollToTop();
    }
  };

  const handleForward = () => {
    // activeSlide > 13 && submitListing(user?.profileData?.id, agentFormData, true);
    if (activeSlide < views.length - 1) {
      setActiveSlide((init) => init + 1);
      setProgressValue((init) => init + 6);
      scrollToTop();
    }
  };
  return (
    <Root
      className={`${openSans.className} max-h-[90vh]  flex flex-col justify-between`}
      ref={leaseRef}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col gap-4">
          <p className="text-left w-full font-semibold">Be My Agent</p>

          <div className="w-full mt-0 ">
            <Progress value={progressValue} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 my-10 h-full">
          <div className="lg:flex-[40%_0_0] lg:pr-10 w-full">
            <div className="relative w-full h-full min-h-[222px]   rounded-2xl overflow-hidden ">
              <Image
                src={image}
                alt="Be MY Agent Image"
                fill
                objectFit="cover"
              />
            </div>{" "}
          </div>
          <div className="flex flex-col w-full h-full lg:min-h-[80vh] justify-center gap-1 ">
            <div className="flex flex-col w-full h-full items-center justify-start ">
              <Formik
                initialValues={{
                  ...agentFormData,
                }}
                onSubmit={() => alert("sibm")}
              >
                <Form className="w-full">
                  <div>{views[activeSlide]}</div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          hideLeft && hideRight
            ? "hidden"
            : "grid grid-cols-2 lg:flex lg:justify-end lg:items-center w-full gap-1 lg:px-7 py-7 border-t-[1px] border-t-[#C1C1C1] z-[3000] relative"
        }`}
      >
        <NavigationButton
          className={` ${
            hideLeft && "hidden"
          } col-span-1  border-[1px] border-[#AD842A] font-semibold text-[#AD842A] rounded-lg`}
          onClick={handleBack}
        >
          {firstSlide ? "Go back" : "Back"}
        </NavigationButton>
        <NavigationButton
          className={` ${
            hideRight && "hidden"
          } col-span-1 bg-[#DDB771]  text-white font-semibold rounded-lg`}
          onClick={handleForward}
        >
          {firstSlide && "Next"}
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
