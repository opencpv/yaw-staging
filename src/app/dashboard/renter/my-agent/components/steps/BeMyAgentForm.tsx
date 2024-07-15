"use client";

import { styled } from "@stitches/react";
import { useEffect, useRef } from "react";
import PreferredType from "./pages/PreferredType";
import PropertyRequirements from "./pages/PropertyRequirements";
import FeaturesAndAmenities from "./pages/FeaturesAndAmenities";
import ContactInformation from "./pages/ContactInformation";
import EmploymentInformation from "./pages/EmploymentInformation";
import LeaseHolderInformation from "./pages/LeaseHolderInformation";
import Location from "./pages/Location";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import StepsSummary from "./pages/steps-summary/StepsSummary";
import { BeMyAgentStepsStore } from "@/store/dashboard/BeMyAgentStepsStore";
import StepsModalSideImg from "../../../../../../components/__shared/ui/modals/steps/StepsModalSideImg";
import { useScrollToTop } from "@/lib/custom-hooks/useWindowEvents";

export const views = [
  <Location key={"location"} />,
  <ClientOnly key={"preferred-type"}>
    <PreferredType key={"preferred-type"} />
  </ClientOnly>,
  <ClientOnly key={"features"}>
    <FeaturesAndAmenities key={"features"} />
  </ClientOnly>,
  <ClientOnly key={"property-requirements"}>
    <PropertyRequirements key={"property-requirements"} />
  </ClientOnly>,
  <ClientOnly key={"lease-holder-information"}>
    <LeaseHolderInformation key={"lease-holder-information"} />
  </ClientOnly>,
  <ClientOnly key={"contact-information"}>
    <ContactInformation key={"contact-information"} />
  </ClientOnly>,
  <ClientOnly key={"employment-information"}>
    <EmploymentInformation key={"employment-information"} />
  </ClientOnly>,
  <ClientOnly key={"steps-summary"}>
    <StepsSummary key={"steps-summary"} />
  </ClientOnly>,
];

export default function BeMyAgentForm() {
  const { images } = useAssets();

  const {
    activeSlide,
    setProgressValue,
    lastSlide,
    setFirstSlide,
    setLastSlide,
  } = BeMyAgentStepsStore();

  const BeMyAgentFormRef = useRef<HTMLDivElement>(null);

  useScrollToTop(BeMyAgentFormRef, [activeSlide], "instant");

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

  return (
    <ClientOnly>
      <div>
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
            <StepsModalSideImg image={images.FeelingRefreshed} />
          </div>
          <div className="lg:col-span-3" ref={BeMyAgentFormRef}>
            <div>{views[activeSlide]}</div>
          </div>
        </section>
      </div>
    </ClientOnly>
  );
}

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
