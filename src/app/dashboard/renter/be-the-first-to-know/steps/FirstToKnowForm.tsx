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

export const views = [
  <Intro key={"intro"} />,
  // <ClientOnly key={"preferred-type"}>
  //   <PreferredType infoText key={"preferred-type"} />
  // </ClientOnly>,
];

export const firstToKnowDefaultValues = {
  locationCity: "Accra",
  locationNeighbourhood: "Dansoman",
  priceRangeMinimum: "100",
  priceRangeMaximum: "100",
  bedMinimum: "1",
  bedMaximum: "1",
  bathroomMinimum: "1",
  bathroomMaximum: "1",
  leaseTermMinimum: "1",
  leaseTermMaximum: "1",
  paymentOption: "Rent Advance",
  title: "Mrs.",
  dateOfBirth: "18 - 44",
  maritalStatus: "Single",
  tenants: "1 - 5",
  country: "Republic of Ghana",
  preferredMethodOfContact: "email",
  mostRecentEmployment: "Employed",
  employersCountry: "Republic of Ghana",
  monthlyIncome: "1000 - 2000",
  moveInDate: format(new Date(), "do MMM yyyy", { locale: enUS }),
};

export default function FirstToKnowForm() {
  const { images } = useAssets();

  const {
    activeSlide,
    setProgressValue,
    lastSlide,
    setFirstSlide,
    setLastSlide,
  } = firstToKnowStepsStore();

  const formRef = useRef<HTMLDivElement>(null);
  // const [otp, setOtp] = useState(false);

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
