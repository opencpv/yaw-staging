import React from "react";
import UserOverview from "../UserOverview";
import RenterPaidFeatures from "../../PaidFeaturesSection";
import RenterExplore from "../../RenterExplore";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";

type Props = {};

const RenterOverviewPage = (props: Props) => {
  return (
    <main className="my-10 text-neutral-800 wrapper">
      <section className="justify-between grid-cols-4 mx-auto mb-20 gap-x-10 lg:grid lg:mb-32">
        {/* Grid col */}
        <div className="col-span-3">
          <UserOverview
            name="John Doe"
            picture="/assets/images/profile-image.jpg"
            email="johndoe@gmail.com"
            telephone="(+233) 1235 554 55"
            className="mb-20"
            type="Renter"
          />
          <RenterPaidFeatures
            type="Renter"
            className="col-span-1 mt-20 md:mt-48 lg:hidden"
          />
          <div className="mb-20 lg:mt-44">
            <RenterExplore />
          </div>
        </div>
        {/* Grid col */}
        <RenterPaidFeatures
          type="Renter"
          className="hidden col-span-1 mt-20 md:mt-48 lg:block"
        />
      </section>
      <section className="mx-auto">
        <h2 className="text-2xl font-[700] mb-6">Recommended Listings</h2>
        <RecommendedListings />
      </section>
    </main>
  );
};

export default RenterOverviewPage;
