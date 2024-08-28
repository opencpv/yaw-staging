"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/__shared/ui/tabs";
import ReviewersSay from "../../renter/my-reviews/components/ReviewersSay";
import PropertyOwnersReview from "../../renter/my-reviews/components/PropertyOwnersReview";
import PropertiesReview from "../../renter/my-reviews/components/PropertiesReview";
import ServiceProsReviews from "../../renter/my-reviews/components/ServiceProsReviews";
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
      <Tabs defaultValue="properties">
        <TabsList>
          <TabsTrigger size="md" variant="rounded" value="properties">
            Properties
          </TabsTrigger>
          <TabsTrigger size="md" variant="rounded" value="property owners">
            Property Owners
          </TabsTrigger>
          <TabsTrigger size="md" variant="rounded" value="service pros">
            Service Pros
          </TabsTrigger>
        </TabsList>
        <TabsContent value="properties">
          <PropertiesReview />
        </TabsContent>
        <TabsContent value="property owners">
          <PropertyOwnersReview />
        </TabsContent>
        <TabsContent value="service pros">
          <ServiceProsReviews />
        </TabsContent>

        {/* <Tab key="reviewers" title="Reviewers Say">
          <ReviewersSay />
        </Tab> */}
      </Tabs>
    </div>
  );
}
