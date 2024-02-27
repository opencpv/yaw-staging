"use client";

import { styled } from "@stitches/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import Progress from "./Progress";
import BestDescribes from "./BestDescribes";
import PropertyInformation from "./PropertyRequirements";
import FeaturesAndAmenities from "./FeaturesAndAmenities";
import ContactInformationForm from "./ContactInformation";
import EmploymentInformationForm from "./EmploymentInformation";
import PersonalInformationForm2 from "./PersonalInformationForm2";
import Image from "next/image";
import Location from "./Location";
import { ClientOnly } from "@/components/ui/ClientOnly";
import Button from "@/components/__shared/ui/button/Button";
import { AgentFormSlide, BeMyAgentFormType } from "./types";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import ProcessSummary from "./ProcessSummary";
import { beMyAgentProcessStore } from "@/store/dashboard/beMyAgentProcessStore";
import BeMyAgentFormSideImg from "./BeMyAgentFormSideImg";
import Sidebar from "./process-summary/Sidebar";

export const views = [
  <Location key={"location"} />,
  <ClientOnly key={"best-describes"}>
    <BestDescribes infoText key={"best-describes"} />
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
  <ClientOnly key={"process-summary"}>
    <ProcessSummary key={"process-summary"} />
  </ClientOnly>,
  // <ClientOnly key={"screening"}>
  //   <ScreeningAndOtherDetailsForm key={"screening"} />
  // </ClientOnly>,
];

export default function BeMyAgentForm() {
  const { images } = useAssets();

  const {
    activeSlide,
    setProgressValue,
    lastSlide,
    setFirstSlide,
    setLastSlide,
  } = beMyAgentProcessStore();

  const [agentFormData] = useLocalStorage<BeMyAgentFormType>("agent-form", {
    priceRangeMinimum: "100",
    priceRangeMaximum: "100",
    bedMinimum: "1",
    bedMaximum: "1",
    bathroomMinimum: "1",
    bathroomMaximum: "1",
    leaseTermMinimum: "1",
    leaseTermMaximum: "1",
    paymentOption: "Rent Advance",
    title: "Mrs",
    dateOfBirth: "18 - 44",
    maritalStatus: "Single",
    tenants: "1 - 5",
    country: "Republic of Ghana",
    preferredMethodOfContact: "email",
    mostRecentEmployment: "Employed",
    employersCountry: "Republic of Ghana",
    monthlyIncome: "1000-2000",
  });

  const leaseRef = useRef<any>();
  // const [progressValue, setProgressValue] = useState<number>(1);
  // const [activeSlide, setActiveSlide] = useState(
  //   agentFormSlide.activeSlide ?? 0,
  // );
  // const [firstSlide, setFirstSlide] = useState(true);
  // const [lastSlide, setLastSlide] = useState(false);
  // const [hideLeft, setHideLeft] = useState(false);
  // const [hideRight, setHideRight] = useState(false);
  const [otp, setOtp] = useState(false);

  // const scrollToTop = () => {
  //   if (leaseRef.current) {
  //     leaseRef.current.scrollIntoView();
  //   }
  // };

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

    const value = ((activeSlide + 1) / views.length) * 100;
    setProgressValue(value);
  }, [activeSlide, setFirstSlide, setLastSlide, lastSlide, setProgressValue]);

  // const handleBack = () => {
  //   firstSlide && setOpen(false);
  //   if (agentFormSlide?.activeSlide > 0) {
  //     setAgentFormSlide({
  //       activeSlide: agentFormSlide?.activeSlide - 1,
  //     });
  //     setProgressValue((init) => init - 6);

  //     scrollToTop();
  //   }
  // };

  // const handleForward = () => {
  //   // activeSlide > 13 && submitListing(user?.profileData?.id, agentFormData, true);
  //   if (agentFormSlide?.activeSlide < views.length - 1) {
  //     setAgentFormSlide({
  //       activeSlide: agentFormSlide?.activeSlide + 1,
  //     });
  //     setProgressValue((init) => init + 6);
  //     scrollToTop();
  //   }
  // };
  return (
    <ClientOnly>
      <div ref={leaseRef}>
        {/* Main area */}
        <section
          className={cn(
            "mx-auto mb-10 mt-5 grid w-full max-w-screen-sm grid-cols-1 gap-10 lg:mt-10 lg:max-w-screen-3xl lg:grid-cols-5 lg:gap-28",
            {
              "block max-w-full px-0 lg:max-hd:max-w-screen-lg hd:max-w-screen-xl":
                lastSlide,
            },
          )}
        >
          {/* Side image or side bar */}
          <div
            className={cn("top-10 w-full lg:sticky lg:col-span-2 lg:h-32", {
              hidden: lastSlide,
            })}
          >
            <BeMyAgentFormSideImg />
          </div>
          <div className="lg:col-span-3">
            {/* Form */}
            <Formik
              initialValues={{
                ...agentFormData,
              }}
              onSubmit={() => alert("sibm")}
            >
              <Form>
                <div>{views[activeSlide]}</div>
              </Form>
            </Formik>
          </div>
        </section>
      </div>
    </ClientOnly>
  );
}

const Root = styled("div", {
  ".progress-emoji": {
    boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
  },
});

export const NavigationButton = styled("button", {
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  maxWidth: "224px",
  minWidth: "16rem",
  borderRadius: "0.5rem",
  fontWeight: "600",
  fontSize: "16px",
  height: "52px",

  "@media screen and (max-width:1024px)": {
    fontSize: "13px",
    minHeight: "48px",
  },

  "@media screen and (max-width: 425px)": {
    minWidth: "fit-content",
  },
});
