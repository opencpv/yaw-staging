"use client";

import { useEffect, useRef } from "react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";
import StepsModalSideImg from "@/components/__shared/modals/steps/StepsModalSideImg";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Intro from "./pages/Intro";
import SearchTitle from "./pages/SearchTitle";
import Location from "./pages/location";
import PreferredType from "./pages/PreferredType";
import Success from "./pages/Success";
import PropertyRequirements from "./pages/PropertyRequirements";
import RequiredFeatures from "./pages/RequiredFeatures";
import SpecialKeyword from "./pages/SpecialKeyword";
import { useScrollToTop } from "@/lib/custom-hooks/useWindowEvents";

export const views = [
  <Intro key={"intro"} />,
  <SearchTitle key={"search-title"} />,
  <Location key={"location"} />,
  <PreferredType key={"preferred-type"} />,
  <PropertyRequirements key={"property-requirements"} />,
  <RequiredFeatures key={"required-features"} />,
  <SpecialKeyword key={"special-keyword"} />,
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
  preferredMethodOfContact: "email",
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

  useScrollToTop(formRef, [activeSlide], "instant");

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
              image={images.CoupleSittingOnFloor}
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
