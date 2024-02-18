"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ReviewersSay from "./components/ReviewersSay";
import PropertyOwnersReview from "./components/PropertyOwnersReview";
import PropertiesReview from "./components/PropertiesReview";
import ServiceProsReviews from "./components/ServiceProsReviews";
import { useManageReviewsStore } from "@/store/dashboard/propertiesStore";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useReviewsStore } from "@/store/dashboard/reviewsStore";
import SimpleSwitch from "../my-bookmarks/bookmarks/components/SimpleSwitch";
import FormSwitch from "@/app/contact/components/FormSwitch";
import Toggle from "@/components/ui/Toggle";
import AllReviewsReceived from "./components/AllReviewsReceived";
import useReviews from "./components/useReviews";

export default function MyReviews() {
  const { activePage, setActivePage, subActivePage, setSubActivePage } =
    useReviewsStore();
  const { filter, setFilter } = useReviews();

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="">My Reviews</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start justify-start gap-5 lg:flex-row">

          <OptionFilterTabs
            options={["Reviews Received", "Reviews Given"]}
            selectedKey={activePage}
            onSelectionChange={(selectedOption) =>
              setActivePage(selectedOption)
            }
            radius="large"
            padding="wide"
            cursorAnimation
          />
        </div>

        <div className="flex flex-col items-start gap-5 md:flex-row lg:items-center">
          {activePage == "reviews given" && (
            <Toggle
              label="View By"
              isSelected={filter !== "none"}
              onValueChange={(state: any) => {
                state && setFilter("any");
                !state && setFilter("none");
              }}
            />
          )}

          {activePage == "reviews given" && filter !== "none" && (
            <OptionFilterTabs
              options={["properties", "property owners", "service-pros"]}
              selectedKey={filter}
              onSelectionChange={(selectedOption) => setFilter(selectedOption)}
              radius="large"
              padding="wide"
              cursorAnimation
            />
          )}
        </div>
      </div>
      {activePage == "reviews received" && <ReviewersSay />}
      {filter == "none" && <AllReviewsReceived />}
      {filter == "properties" && <PropertiesReview />}
      {filter == "property owners" && <PropertyOwnersReview />}
      {filter == "service-pros" && <ServiceProsReviews />}
    </div>
  );
}
