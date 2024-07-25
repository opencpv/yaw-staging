"use client";
import React, { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import Button from "@/components/__shared/ui/button/Button";
import { FaRegBell, FaRegHourglass } from "react-icons/fa";
import { useAppStore } from "@/store/dashboard/AppStore";
import CallOut from "@/components/__shared/ui/CallOut";
import { ScrollShadow } from "@nextui-org/react";
import { MdOutlineEdit, MdOutlineMessage } from "react-icons/md";
import RecentActivityCard from "./components/RecentActivityCard";
import BoostListingCard from "./components/BoostListingCard";
import Sidebar from "./components/Sidebar";
import CaHandshake from "./components/icons/CaHandshake";
import CaHomeBanner from "./components/icons/CaHomeBanner";
import CaMegaphone from "./components/icons/CaMegaphone";
import { GoShieldCheck } from "react-icons/go";

type Props = {};

const ListerOverviewPage = (props: Props) => {
  const { user } = useAppStore();
  const { setIsSwitchingRole } = useDashboardStore();

  useEffect(() => {
    setIsSwitchingRole(false);
  }, [setIsSwitchingRole]);

  return (
    <main className="grid-cols-7 gap-16 lg:grid lg:max-2xl:gap-8">
      <div className="fade-in col-span-5 space-y-14 lg:max-2xl:col-span-4">
        <section className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <h2>Hi, {user?.firstname}.</h2>
            <Button
              variant="outline"
              color="primary"
              href="/dashboard/lister/profile"
              className="px-5"
            >
              Edit Profile <MdOutlineEdit />
            </Button>
          </div>
          <CallOut content="Your peofile is incomplete. Click on the edit profile to complete the process" />
        </section>
        <Button href="#" color="primary">
          Add Property
        </Button>
        <section className="space-y-3">
          <h3 className="mb-1">Recent Activities</h3>
          <h5 className="font-normal text-shade-300">
            Here is an overview of your activities
          </h5>
          <div className="flex flex-wrap gap-3">
            <RecentActivityCard
              icon={<MdOutlineMessage className="text-primary" size={24} />}
              title="Unread Messages"
              count={5}
              href="/dashboard/lister/messages"
            />
            <RecentActivityCard
              icon={<FaRegBell className="text-primary" size={24} />}
              title="Messages"
              count={5}
              href="/dashboard/lister/notifications"
            />
            <RecentActivityCard
              icon={<FaRegHourglass className="text-yellow-400" size={24} />}
              title="Pending Applications"
              count={0}
              href="/dashboard/lister/applications"
            />
          </div>
        </section>
        <section>
          <Sidebar className="lg:hidden" />
        </section>
        <section className="space-y-4">
          <h3 className="mb-1">Boost Your Listing</h3>
          <div className="flex flex-wrap gap-10">
            <BoostListingCard
              href="#"
              title="Hire Us"
              description="Lorem ipsum dolor sit amet consectetur"
              icon={<CaHandshake />}
            />
            <BoostListingCard
              href="#"
              title="Homepage Banner"
              description="Lorem ipsum dolor sit amet consectetur"
              icon={<CaHomeBanner />}
            />
            <BoostListingCard
              href="#"
              title="Featured Listings"
              description="Lorem ipsum dolor sit amet consectetur"
              icon={<CaMegaphone />}
            />
            <BoostListingCard
              href="#"
              title="Verify My Listings"
              description="Lorem ipsum dolor sit amet consectetur"
              icon={<GoShieldCheck className="text-primary" size={65} />}
            />
          </div>
        </section>
        <section className="space-y-3">
          <h3 className="mb-1">My Active Listings</h3>
          <ScrollShadow
            isEnabled={false}
            orientation="horizontal"
            className="flex gap-3"
          >
            {/* ListingCard */}
          </ScrollShadow>
        </section>
      </div>
      <Sidebar className="fade-in-bottom max-lg:hidden" />
    </main>
  );
};

export default ListerOverviewPage;
