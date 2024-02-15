"use client";
import React, { useEffect } from "react";
import UserOverview from "../../../components/shared/overview/UserOverview";
import PaidFeaturesSection from "../../../components/shared/overview/PaidFeaturesSection";
import PMAnalyticsSection from "./PMAnalyticsSection";
import GradientBanner from "../../../components/shared/overview/GradientBanner";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import SellYourItem from "../../../components/shared/overview/SellYourItem";
import PMOverviewUpgradeSection from "./PMOverviewUpgradeSection";
import MembershipUpgradeCard from "./MembershipUpgradeCard";
import PMActiveListingsSection from "./PMActiveListingsSection";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";

type Props = {};

const ListerOverviewPage = (props: Props) => {
  const { images } = useAssets();
  const {setIsSwitchingRole} = useDashboardStore()

  useEffect(() => {
    setIsSwitchingRole(false)
  }, [setIsSwitchingRole])
  
  return (
    <main className="my-10 text-neutral-800">
      <section className="mx-auto mb-20 grid-cols-4 justify-between gap-x-10 lg:mb-32 lg:grid">
        {/* Grid col */}
        <div className="col-span-3">
          <UserOverview
            name="John Doe"
            picture="/assets/images/profile-image.jpg"
            email="johndoe@gmail.com"
            telephone="(+233) 1235 554 55"
            className="mb-20"
            type="Property Manager"
          />
          <GradientBanner
            image={images.BusinessPersonWithHouseKeys}
            alt="Business person with house keys"
            heading="Hire Us !"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis."
            buttonLabel="Explore"
            href=""
            className="mb-20 mt-20 md:mt-56"
          />
          <PMAnalyticsSection />
          <PaidFeaturesSection
            type="lister"
            className="col-span-1 lg:hidden"
          />
          <div className="mt-10">
            <PMOverviewUpgradeSection />
          </div>
          <GradientBanner
            image={images.LaptopDisplayingHome}
            alt="RentRight Homepage banner"
            heading="Get your listings on our main banner"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officiis."
            buttonLabel="Purchase Now"
            imageWidth={400}
            // imageHeight={240}
            href=""
          />
          <div className="section">
            <h2 className="mb-5">Moving sales</h2>
            <SellYourItem />
          </div>
        </div>
        {/* Grid col */}
        <div className="col-span-1">
          <MembershipUpgradeCard />
          <PaidFeaturesSection
            type="lister"
            className="col-span-1 mb-24 hidden lg:block"
          />
          <PMActiveListingsSection />
        </div>
      </section>
    </main>
  );
};

export default ListerOverviewPage;
