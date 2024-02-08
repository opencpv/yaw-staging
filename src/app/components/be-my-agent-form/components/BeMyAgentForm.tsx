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
import { ClientOnly } from "@/components/ui/ClientOnly";

const image = "/assets/images/agent-modal-image.jpeg";

const views = [
  <ClientOnly key={"bes-describes"}>
    <BestDescribes infoText key={"bes-describes"} />
  </ClientOnly>,
  <ClientOnly key={"property-information"}>
    <PropertyInformation key={"property-information"} />
  </ClientOnly>,
  <Location key={"property-information"} />,
  <ClientOnly key={"utitilities"}>
    <Utilities key={"utitilities"} />
  </ClientOnly>,
  <ClientOnly key={"features"}>
    <FeaturesAndAmenities key={"features"} />
  </ClientOnly>,
  <ClientOnly key={"personal-information"}>
    <PersonalInformationForm2 key={"personal-information"} />
  </ClientOnly>,
  <ClientOnly key={"contact-informaiton"}>
    <ContactInformationForm key={"contact-informaiton"} />
  </ClientOnly>,
  <ClientOnly key={"employment-information"}>
    <EmploymentInformationForm key={"employment-information"} />
  </ClientOnly>,
  <ClientOnly key={"screenign"}>
    <ScreeningAndOtherDetailsForm key={"screenign"} />
  </ClientOnly>,
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
      className={`flex  max-h-[90vh] flex-col justify-between`}
      ref={leaseRef}
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex flex-col gap-4">
          <p className="w-full text-left font-semibold">Be My Agent</p>

          <div className="mt-0 w-full ">
            <Progress value={progressValue} />
          </div>
        </div>
        <div className="my-10 flex h-full flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="w-full lg:flex-[40%_0_0] lg:pr-10">
            <div className="relative h-full min-h-[222px] w-full   overflow-hidden rounded-2xl ">
              <Image
                src={image}
                alt="Be MY Agent Image"
                fill
                objectFit="cover"
              />
            </div>{" "}
          </div>
          <div className="flex h-full w-full flex-col justify-center gap-1 lg:min-h-[80vh] ">
            <div className="flex h-full w-full flex-col items-center justify-start ">
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
            : "relative z-[3000] grid w-full grid-cols-2 gap-1 border-t-[1px] border-t-[#C1C1C1] py-7 lg:flex lg:items-center lg:justify-end lg:px-7"
        }`}
      >
        <NavigationButton
          className={` ${
            hideLeft && "hidden"
          } col-span-1  rounded-lg border-[1px] border-[#AD842A] font-semibold text-[#AD842A]`}
          onClick={handleBack}
        >
          {firstSlide ? "Go back" : "Back"}
        </NavigationButton>
        <NavigationButton
          className={` ${
            hideRight && "hidden"
          } col-span-1 rounded-lg  bg-[#DDB771] font-semibold text-white`}
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
