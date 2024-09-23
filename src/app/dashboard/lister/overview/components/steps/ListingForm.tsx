"use client";

import { styled } from "@stitches/react";
import { useEffect, useRef } from "react";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import { cn } from "@/lib/utils";
import { ListingStepsStore } from "@/store/dashboard/ListingStepsStore";
import { useScrollToTop } from "@/lib/custom-hooks/useWindowEvents";
import Intro from "./pages/Intro";
import PropertyInformation from "./pages/PropertyInformation";
import ChooseTemplate from "./pages/ChooseTemplate";
import TellUsAboutYourPlace from "./pages/TellUsAboutYourPlace";
import TypeOfPlace from "./pages/TypeOfPlace";
import SuitedFor from "./pages/SuitedFor";
import FurnishLevel from "./pages/FurnishLevel";
import SetItApart from "./pages/SetItApart";
import FinishUp from "./pages/FinishUp";
import Features from "./pages/Features";
import Utilities from "./pages/Utilities";
import ChoosePropertyImages from "./pages/ChoosePropertyImages";
import RentInformation from "./pages/RentInformation";
import AgencyInformation from "./pages/AgencyInformation";

export const views = [
  <Intro key={"intro"} />,
  <ChooseTemplate key={"choose-template"} />,
  <TellUsAboutYourPlace key={"tell-us-about-your-place"} />,
  <TypeOfPlace key={"type-of-place"} />,
  <SuitedFor key={"suited-for"} />,
  <FurnishLevel key={"furnish-level"} />,
  <PropertyInformation key={"property-information"} />,
  <SetItApart key={"set-it-apart"} />,
  <Features key={"features"} />,
  <Utilities key={"utilities"} />,
  <ChoosePropertyImages key={"choose-property-images"} />,
  <FinishUp key={"finish-up"} />,
  <RentInformation key={"rent-information"} />,
  <AgencyInformation key={"agency-information"} />,
  <FinishUp key={"finish-up"} />,
];

export default function ListingForm() {
  const {
    activeSlide,
    setProgressValue,
    lastSlide,
    setFirstSlide,
    setLastSlide,
  } = ListingStepsStore();

  const ListingStepsRef = useRef<HTMLDivElement>(null);

  useScrollToTop(ListingStepsRef, [activeSlide], "instant");

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
      {/* Main area */}
      <div className="grid h-full place-items-center" ref={ListingStepsRef}>
        {/* Main area */}
        <section
          className={cn(
            "mx-auto mb-10 mt-5 w-full max-w-screen-lg pb-20 lg:mt-10",
          )}
        >
          <div>
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
