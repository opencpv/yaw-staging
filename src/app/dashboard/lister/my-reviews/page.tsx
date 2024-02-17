"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ReviewersSay from "../../components/shared/my-reviews/ReviewersSay";
import PropertyOwnersReview from "../../components/shared/my-reviews/PropertyOwnersReview";
import PropertiesReview from "../../components/shared/my-reviews/PropertiesReview";
import ServiceProsReviews from "../../components/shared/my-reviews/ServiceProsReviews";
import { useManageReviewsStore } from "@/store/dashboard/propertiesStore";

export default function MyReviews() {
  const optionSelect = useManageReviewsStore(
    (state: any) => state.filterOption,
  );
  const handleOptionChange = useManageReviewsStore(
    (state: any) => state.changeOption,
  );

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-[1.9375rem] font-semibold">My Reviews</p>
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          base: "bg-white border-[1px] border-shade-50 w-full md:w-fit rounded-2xl p-[0.75rem] md:overflow-hidden",
          tabList: " gap-4",
          tab: "bg-white px-4 py-3 min-w-[75px] w-full max-w-[117.75px]  rounded-2xl",
          tabContent:
            "text-shade-200 text-[0.625rem] group-data-[selected=true]:text-white group-data-[selected=true]:font-semibold ",
          cursor: "bg-primary-200 sm:bg-primary-200 text-white rounded-2xl",
          panel: "pt-8",
        }}
        selectedKey={optionSelect}
        onSelectionChange={(selectedOption) =>
          handleOptionChange(selectedOption)
        }
      >
        <Tab key="reviewers" title="Reviewers Say">
          <ReviewersSay />
        </Tab>

        <Tab key="properties" title="Properties">
          <PropertiesReview />
        </Tab>
        <Tab key="property-owners" title="Property Owners">
          <PropertyOwnersReview />
        </Tab>
        <Tab key="service-pros" title="Service Pros">
          <ServiceProsReviews />
        </Tab>
      </Tabs>
    </div>
  );
}
