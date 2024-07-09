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
import { beMyAgentStepsStore } from "@/store/dashboard/beMyAgentStepsStore";
import StepsModalSideImg from "../../../../../../components/__shared/ui/modals/steps/StepsModalSideImg";
import { useScrollToTop } from "@/lib/custom-hooks/useWindowEvents";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { formatDate } from "@/lib/utils/stringManipulation";

export const views = [
  <Location key={"location"} />,
  <ClientOnly key={"preferred-type"}>
    <PreferredType infoText key={"preferred-type"} />
  </ClientOnly>,
  <ClientOnly key={"property-requirements"}>
    <PropertyRequirements key={"property-requirements"} />
  </ClientOnly>,
  <ClientOnly key={"features"}>
    <FeaturesAndAmenities key={"features"} />
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

export const beMyAgentDefaultValues = {
  locationCity: "Accra",
  locationNeighbourhood: "Dansoman",
  locationArray: [
    {
      locationCity: "Accra",
      locationNeighbourhood: "Dansoman",
    },
  ],
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
  moveInDate: formatDate(new Date().toISOString()),
};

export default function BeMyAgentForm() {
  const { images } = useAssets();

  const {
    activeSlide,
    setProgressValue,
    lastSlide,
    setFirstSlide,
    setLastSlide,
  } = beMyAgentStepsStore();

  const beMyAgentFormRef = useRef<HTMLDivElement>(null);
  // const [otp, setOtp] = useState(false);

  useScrollToTop(beMyAgentFormRef, [activeSlide], "instant");

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
          <div className="lg:col-span-3" ref={beMyAgentFormRef}>
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
