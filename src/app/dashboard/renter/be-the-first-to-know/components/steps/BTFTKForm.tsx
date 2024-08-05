"use client";

import { useEffect, useRef } from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import { BTFTKStepsStore as BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";
import StepsModalSideImg from "@/components/__shared/ui/modals/steps/StepsModalSideImg";
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
  <RequiredFeatures key={"required-features"} />,
  <PropertyRequirements key={"property-requirements"} />,
  <SpecialKeyword key={"special-keyword"} />,
  <Success key={"success"} />,
];

export default function BTFTKForm() {
  const { images } = useAssets();

  const {
    activeSlide,
    setProgressValue,
    firstSlide,
    lastSlide,
    setFirstSlide,
    setLastSlide,
  } = BTFTKStepsStore();

  const BTFTKStepsRef = useRef<HTMLDivElement>(null);

  useScrollToTop(BTFTKStepsRef, [activeSlide], "instant");

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
    <div className="h-full" ref={BTFTKStepsRef}>
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
        <div className="lg:col-span-3">
          <div>{views[activeSlide]}</div>
        </div>
      </section>
    </div>
  );
}
