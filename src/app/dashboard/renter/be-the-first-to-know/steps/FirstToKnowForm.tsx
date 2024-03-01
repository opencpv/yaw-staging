"use client";

import { styled } from "@stitches/react";
import { useEffect, useRef } from "react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";
import StepsModalSideImg from "@/components/__shared/modals/steps/StepsModalSideImg";
import { useScrollToTop } from "@/lib/custom-hooks/useWindowEvents";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Intro from "./pages/Intro";
import SearchTitle from "./pages/SearchTitle";
import Location from "./pages/Location";
import PreferredType from "./pages/PreferredType";
import Success from "./pages/Success";
import PropertyRequirements from "./pages/PropertyRequirements";
import RequiredFeatures from "./pages/RequiredFeatures";

export const views = [
  <Intro key={"intro"} />,
  <SearchTitle key={"search-title"} />,
  <Location key={"location"} />,
  <PreferredType key={"preferred-type"} />,
  <PropertyRequirements key={"property-requirements"} />,
  <RequiredFeatures key={"required-features"} />,
  <Success key={"success"} />,
];

export const firstToKnowDefaultValues = {
  location: "Accra",
  priceRangeMinimum: "100",
  priceRangeMaximum: "100",
  bedMinimum: "1",
  bedMaximum: "1",
  bathroomMinimum: "1",
  bathroomMaximum: "1",
  preferredType: [],
  requiredFeatures: [],
};

export default function FirstToKnowForm() {
  const { images } = useAssets();

  const {
    activeSlide,
    setProgressValue,
    firstSlide,
    lastSlide,
    setFirstSlide,
    setLastSlide,
  } = firstToKnowStepsStore();

  const formRef = useRef<HTMLDivElement>(null);

  // useScrollToTop(formRef, [activeSlide], "instant");

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

  const sideImageCriteria = firstSlide || lastSlide || activeSlide === 2;

  return (
    <ClientOnly>
      <div>
        {/* Main area */}
        <section
          className={cn(
            "mx-auto mb-10 mt-5 grid w-full max-w-screen-sm grid-cols-1 gap-10 lg:mt-10 lg:max-w-screen-3xl lg:grid-cols-5 lg:gap-28",
            {
              "block max-w-full px-0 lg:max-hd:max-w-screen-lg hd:max-w-screen-xl":
                sideImageCriteria,
            },
          )}
        >
          {/* Side image or side bar */}
          <div
            className={cn("top-10 w-full lg:sticky lg:col-span-2 lg:h-32", {
              hidden: sideImageCriteria,
            })}
          >
            <StepsModalSideImg
              image={images.LadyOnCouch}
              sideImageClassName="object-center lg:object-center"
            />
          </div>
          <div className="lg:col-span-3" ref={formRef}>
            <div>{views[activeSlide]}</div>
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
