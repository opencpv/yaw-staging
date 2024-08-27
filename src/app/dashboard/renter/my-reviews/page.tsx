"use client";
import ReviewersSay from "./components/ReviewersSay";
import PropertyOwnersReview from "./components/PropertyOwnersReview";
import PropertiesReview from "./components/PropertiesReview";
import ServiceProsReviews from "./components/ServiceProsReviews";
import { Tabs } from "@/components/__shared/ui/tabs";
import { useReviewsStore } from "@/store/dashboard/reviewsStore";
import { Switch } from "@/components/__shared/ui/switch";
import AllReviewsReceived from "./components/AllReviewsReceived";
import useReviews from "./components/useReviews";
import Select from "../../components/shared/ui/Select";

export default function MyReviews() {
  const { activePage, setActivePage, subActivePage, setSubActivePage } =
    useReviewsStore();
  const { filter, setFilter } = useReviews();

  return (
    <div className="flex w-full flex-col gap-4">
      <h2>My Reviews</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start justify-start gap-5 lg:flex-row">
          <Tabs
            options={["Reviews Received", "Reviews Given"]}
            selectedKey={activePage}
            onSelectionChange={(selectedOption) =>
              setActivePage(selectedOption)
            }
            variant="rounded"
          />
        </div>

        {activePage === "Reviews Given" && (
          <div className="my-2 lg:hidden">
            <Select
              options={["All", "Properties", "Property Owners", "Service Pros"]}
              value={filter as string}
              className="mx-0 w-60 font-bold"
              valueClassName="font-bold"
              variant="ghost"
              color="primary"
              handleSelectionChange={(e) => setFilter(e.target.value)}
            />
          </div>
        )}

        <div className="hidden w-full flex-col items-start gap-5 md:flex md:flex-row lg:items-center">
          {activePage === "Reviews Given" && (
            <Switch
              label="View By"
              checked={filter !== "all"}
              onCheckedChange={(state: any) => {
                state && setFilter("any");
                !state && setFilter("all");
              }}
            />
          )}

          {activePage == "Reviews Given" && filter !== "all" && (
            <Tabs
              options={["Properties", "Property Owners", "Service Pros"]}
              selectedKey={filter}
              onSelectionChange={(selectedOption) => setFilter(selectedOption)}
            />
          )}
        </div>
      </div>
      {activePage === "Reviews Received" && <ReviewersSay />}
      {activePage !== "Reviews Received" && filter === "all" && (
        <AllReviewsReceived />
      )}
      {filter === "Properties" && <PropertiesReview />}
      {filter === "Property Owners" && <PropertyOwnersReview />}
      {filter === "Service Pros" && <ServiceProsReviews />}
    </div>
  );
}
