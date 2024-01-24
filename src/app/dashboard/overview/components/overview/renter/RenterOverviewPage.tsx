import React from "react";
import UserOverview from "../UserOverview";
import RenterPaidFeatures from "../../PaidFeaturesSection";
import RenterExplore from "../../RenterExplore";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";
import GradientBanner from "../GradientBanner";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import SellYourItem from "../../SellYourItem";
import RenterActivityCard from "./RenterActivityCard";

type Props = {};

const RenterOverviewPage = (props: Props) => {
  const { images } = useAssets();

  return (
    <main className="text-neutral-800">
      <section className="mx-auto mb-20 grid-cols-4 justify-between gap-x-10 lg:grid">
        {/* Grid col */}
        <div className="col-span-3">
          <UserOverview
            name="John Doe"
            picture="/assets/images/profile-image.jpg"
            email="johndoe@gmail.com"
            telephone="(+233) 1235 554 55"
            className="md:mb-20"
            type="Renter"
          />
          {true && (  // TODO: implement appropriately
            <section className="mt-10 flex w-fit flex-wrap gap-5 md:mt-40">
              <RenterActivityCard />
              <RenterActivityCard />
            </section>
          )}

          <section className="section space-y-10">
            <GradientBanner
              image={images.BusinessPersonWithHouseKeys}
              alt="Business man with house keys"
              heading="Hire Us !"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis."
              buttonLabel="Explore"
              href=""
            />
            <RenterPaidFeatures
              type="Renter"
              className="col-span-1 lg:hidden"
            />
            <RenterExplore />
            <SellYourItem />
          </section>
        </div>
        {/* Grid col */}
        <RenterPaidFeatures
          type="Renter"
          className="col-span-1 mt-14 hidden lg:block"
        />
      </section>
      <section className="mx-auto">
        <h2 className="mb-6">Recommended Listings</h2>
        <RecommendedListings />
      </section>
    </main>
  );
};

export default RenterOverviewPage;
