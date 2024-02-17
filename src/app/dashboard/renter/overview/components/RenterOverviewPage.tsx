"use client";
import React, { useEffect } from "react";
import UserOverview from "../../../components/shared/overview/UserOverview";
import RenterPaidFeatures from "../../../components/shared/overview/PaidFeaturesSection";
import RenterExplore from "../../../components/shared/overview/RenterExplore";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";
import GradientBanner from "../../../components/shared/overview/GradientBanner";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import SellYourItem from "../../../components/shared/overview/SellYourItem";
import RenterActivityCard from "./RenterActivityCard";
import ScrollTop from "@/components/__shared/ScrollTop";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";

type Props = {};

const RenterOverviewPage = (props: Props) => {
  const { images } = useAssets();

  const { setIsSwitchingRole } = useDashboardStore();

  useEffect(() => {
    setIsSwitchingRole(false);
  }, [setIsSwitchingRole]);

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
            type="renter"
          />
          {true && ( // TODO: implement appropriately
            <section className="mt-10 max-w-3xl flex-wrap space-y-5 xs:flex xs:gap-5 xs:space-y-0 md:mt-36">
              <RenterActivityCard
                type="applications"
                count={6}
                href="applications"
              />
              <RenterActivityCard type="reviews" count={6} href="my-reviews" />
            </section>
          )}

          <section className="section space-y-10">
            <GradientBanner
              image={images.BusinessPersonWithHouseKeys}
              alt="Business man with house keys"
              heading="Hire Us !"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis."
              buttonLabel="Explore"
              href="my-agent/agent-explore"
            />
            <RenterPaidFeatures
              type="renter"
              className="col-span-1 lg:hidden"
            />
            <RenterExplore className="mt-3 lg:mt-0" />
            <SellYourItem />
          </section>
        </div>
        {/* Grid col */}
        <RenterPaidFeatures
          type="renter"
          className="col-span-1 mt-14 hidden lg:block"
        />
      </section>
      <section className="mx-auto">
        <RecommendedListings />
      </section>
      <ScrollTop />
    </main>
  );
};

export default RenterOverviewPage;
