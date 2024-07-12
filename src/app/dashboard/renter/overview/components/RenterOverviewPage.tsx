"use client";
import React, { useEffect } from "react";
import UserOverview from "../../../components/shared/overview/UserOverview";
import RenterPaidFeatures from "../../../components/shared/overview/PaidFeaturesSection";
import RenterExplore from "../../../components/shared/overview/RenterExplore";
import RecommendedListings from "@/components/__shared/ui/listing/RecommendedListings";
import GradientBanner from "../../../components/shared/overview/GradientBanner";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import SellYourItem from "../../../components/shared/overview/SellYourItem";
import RenterActivityCard from "./RenterActivityCard";
import ScrollTop from "@/components/__shared/ui/ScrollTop";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { useAppStore } from "@/store/dashboard/AppStore";
import { SanityDocument } from "next-sanity";

type Props = {
  bubblesData:SanityDocument
};

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
            renterMessage={props.bubblesData.renter_overview}
            listerMessage={props.bubblesData.lister_overview}
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
              description={props.bubblesData.hire_us_message}
              buttonLabel="Explore"
              href="my-agent/agent-explore"
            />
            <RenterPaidFeatures
              type="renter"
              className="col-span-1 lg:hidden"
            />
            <RenterExplore className="mt-3 lg:mt-0" data={props.bubblesData} />
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
