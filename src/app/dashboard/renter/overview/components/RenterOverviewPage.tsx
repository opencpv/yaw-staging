"use client";
import React, { useEffect } from "react";
import UserOverview from "./UserOverview";
import RenterPaidFeatures from "./PaidFeaturesSection";
import RenterExplore from "./RenterExplore";
import GradientBanner from "./GradientBanner";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import SellYourItem from "./SellYourItem";
import RenterActivityCard from "./RenterActivityCard";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { useAppStore } from "@/store/dashboard/AppStore";
import dynamic from "next/dynamic";
const ScrollTop = dynamic(
  () => import("@/components/__shared/ui/scroll-top/scroll-top"),
);
const RecommendedListings = dynamic(
  () => import("@/components/__shared/ui/listing/recommended-listings"),
);

type Props = {};

const RenterOverviewPage = (props: Props) => {
  const { images } = useAssets();
  const { setIsSwitchingRole } = useDashboardStore();
  const { user } = useAppStore();

  useEffect(() => {
    setIsSwitchingRole(false);
  }, [setIsSwitchingRole]);

  const formattedPhone = React.useMemo(() => {
    if (user?.phone) {
      const phoneNumber = user.phone.toString();
      return `(${phoneNumber.slice(0, 4)}) ${phoneNumber.slice(
        4,
        8,
      )} ${phoneNumber.slice(8, 11)} ${phoneNumber.slice(11)}`;
    }
  }, [user?.phone]);

  return (
    <main className="text-neutral-800">
      <section className="mx-auto mb-20 grid-cols-4 justify-between gap-x-10 lg:grid">
        {/* Grid col */}
        <div className="col-span-3">
          <UserOverview
            name={user?.full_name as string}
            picture={user?.profile_img as string}
            email={user?.email as string}
            telephone={formattedPhone as string}
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
              href="my-agent/explore"
            />
            <RenterPaidFeatures className="col-span-1 lg:hidden" />
            <RenterExplore className="mt-3 lg:mt-0" />
            <SellYourItem />
          </section>
        </div>
        {/* Grid col */}
        <RenterPaidFeatures className="col-span-1 mt-14 hidden lg:block" />
      </section>
      <section className="mx-auto">
        <RecommendedListings />
      </section>
      <ScrollTop />
    </main>
  );
};

export default RenterOverviewPage;
