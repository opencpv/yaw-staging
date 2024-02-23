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
import Button from "@/components/__shared/ui/button/Button";
import { BeMyAgentFormType } from "./types";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const views = [
  <Location key={"property-information"} />,
  <ClientOnly key={"bes-describes"}>
    <BestDescribes infoText key={"bes-describes"} />
  </ClientOnly>,
  <ClientOnly key={"property-information"}>
    <PropertyInformation key={"property-information"} />
  </ClientOnly>,
  // <ClientOnly key={"utilities"}>
  //   <Utilities key={"utilities"} />
  // </ClientOnly>,
  <ClientOnly key={"features"}>
    <FeaturesAndAmenities key={"features"} />
  </ClientOnly>,
  <ClientOnly key={"personal-information"}>
    <PersonalInformationForm2 key={"personal-information"} />
  </ClientOnly>,
  <ClientOnly key={"contact-information"}>
    <ContactInformationForm key={"contact-information"} />
  </ClientOnly>,
  <ClientOnly key={"employment-information"}>
    <EmploymentInformationForm key={"employment-information"} />
  </ClientOnly>,
  // <ClientOnly key={"screening"}>
  //   <ScreeningAndOtherDetailsForm key={"screening"} />
  // </ClientOnly>,
];

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BeMyAgentForm({ setOpen }: Props) {
  const { images } = useAssets();
  const [agentFormActiveSlide, setAgentFormActiveSlide] = useLocalStorage(
    "agentFormActiveSlide",
    { activeSlide: 0 },
  );
  const [agentFormData] = useLocalStorage<BeMyAgentFormType>("agent-form", {
    leaseTerm: 12,
    country: "Ghana",
    preferredMethodOfContact: "email",
    dateOfBirth: "18-44",
    // employersCountry: "Ghana",
    // government: "Ghana",
  });

  const leaseRef = useRef<any>();
  const [progressValue, setProgressValue] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState(
    agentFormActiveSlide.activeSlide ?? 0,
  );
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);
  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);
  const [otp, setOtp] = useState(false);

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

    if (activeSlide === views.length - 1) {
      setLastSlide(true);
    } else {
      setLastSlide(false);
    }

    if (activeSlide > 9) {
      setHideLeft(true);
      setHideRight(true);
    } else {
      setHideLeft(false);
      setHideRight(false);
    }

    const value = (activeSlide / views.length) * 100;
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
    <Root className="max-h-screen" ref={leaseRef}>
      {/* Header */}
      <section className="sticky top-0 z-50 flex flex-col gap-4 bg-[#fefefe] p-5 px-5 sm:px-10">
        <div className="flex items-center justify-between gap-5">
          <h4 className="font-semibold">Be My Agent</h4>
          <Button
            color="white"
            greenHover
            radius="full"
            className="border px-5"
            onClick={() => {
              setOpen(false);
              setAgentFormActiveSlide((prevData) => ({
                ...prevData,
                activeSlide,
                showContinueMessage: true,
              }));
            }}
          >
            Save & Exit
          </Button>
        </div>

        <div className="mt-0 w-full">
          <Progress value={progressValue} />
        </div>
      </section>
      <section className="flex min-h-screen w-full flex-col px-5 sm:px-10">
        <div className="mx-auto my-10 flex h-full w-full max-w-screen-sm flex-col gap-10 lg:max-w-screen-3xl lg:flex-row xl:gap-20">
          {/* Side image */}
          <div className="w-full lg:flex-[40%_0_0] lg:pr-10">
            <div className="relative h-60 w-full overflow-hidden rounded-2xl lg:h-[36rem] ">
              <Image
                src={images.FeelingRefreshed}
                alt="person relaxing on couch"
                fill
                style={{ objectFit: "cover" }}
                className="object-left-top lg:object-left"
              />
            </div>{" "}
          </div>
          {/* Form */}
          <div className="flex h-full w-full flex-col items-center justify-start px-5 sm:px-0">
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
      </section>
      {/* Navigation buttons */}
      <section
        className={`${
          hideLeft && hideRight
            ? "hidden"
            : "sticky bottom-0 z-50 grid grid-cols-2 gap-2 border-t bg-[#fefefe] px-5 pb-5 pt-7 sm:px-10 lg:flex lg:items-center lg:justify-end"
        }`}
      >
        <NavigationButton
          className={` ${
            hideLeft && "hidden"
          } col-span-1  rounded-lg bg-primary-200/80 font-semibold text-white hover:bg-primary-200`}
          onClick={handleBack}
        >
          {firstSlide ? "Cancel" : "Back"}
        </NavigationButton>
        <NavigationButton
          className={` ${
            hideRight && "hidden"
          } col-span-1 rounded-lg  bg-accent-50 font-semibold text-white`}
          onClick={handleForward}
        >
          {/* {firstSlide && "Next"}
          {!firstSlide && !lastSlide && "Continue"} */}
          {lastSlide ? "Summary" : "Continue"}
        </NavigationButton>
      </section>
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
