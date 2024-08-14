"use client";
import React, { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import Button from "@/components/__shared/ui/button/Button";
import { FaRegBell, FaRegHourglass } from "react-icons/fa";
import { useAppStore } from "@/store/dashboard/AppStore";
import CallOut from "@/components/__shared/ui/CallOut";
import { MdOutlineEdit, MdOutlineMessage } from "react-icons/md";
import RecentActivityCard from "./components/RecentActivityCard";
import BoostListingCard from "./components/BoostListingCard";
import Sidebar from "./components/Sidebar";
import CaHandshake from "./components/icons/CaHandshake";
import CaHomeBanner from "./components/icons/CaHomeBanner";
import CaMegaphone from "./components/icons/CaMegaphone";
import { GoShieldCheck } from "react-icons/go";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import { useFetchListerActiveListings } from "./services";
import { getListingProps } from "@/lib/enum";
import ListingCard from "@/components/__shared/ui/listing/ListingCard";
import SkeletonListing from "@/components/__shared/ui/skeleton/SkeletonListing";
import ActiveListingEmptyState from "./components/ActiveListingEmptyState";
import ListingModal from "./components/steps/ListingModal";

const ListerOverviewPage = () => {
  const { user } = useAppStore();
  const { setIsSwitchingRole } = useDashboardStore();

  useEffect(() => {
    setIsSwitchingRole(false);
  }, [setIsSwitchingRole]);

  const {
    data: listings,
    isLoading,
    error,
  } = useFetchListerActiveListings({
    listerId: user?.id as string,
  });

  return (
    <main className="grid-cols-7 gap-12 lg:grid lg:max-2xl:gap-8">
      <div className="col-span-5 space-y-20 lg:max-2xl:col-span-4">
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <h2>Hi, {user?.firstname}.</h2>
            <Button
              variant="outline"
              color="primary"
              href="/dashboard/lister/settings"
              className="px-5"
            >
              Edit Profile <MdOutlineEdit />
            </Button>
          </div>
          <CallOut content="Your peofile is incomplete. Click on the edit profile to complete the process" />
          <ListingModal className="mt-5" />
        </section>

        <section className="space-y-3">
          <h3 className="mb-1">Recent Activities</h3>
          <h5 className="font-normal text-shade-300">
            Here is an overview of your activities
          </h5>
          <div className="grid max-w-2xl gap-3 xxs:grid-cols-2 xs:grid-cols-3">
            <RecentActivityCard
              icon={<MdOutlineMessage className="text-primary" size={24} />}
              title="Unread Messages"
              count={5}
              href="/dashboard/lister/messages"
            />
            <RecentActivityCard
              icon={<FaRegBell className="text-primary" size={24} />}
              title="Unread Notifications"
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
          <div
            className="grid gap-10 2xl:max-w-4xl"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
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
              icon={
                <GoShieldCheck
                  className="text-primary max-sm:scale-80"
                  size={65}
                />
              }
            />
          </div>
        </section>
        <section className="space-y-3">
          <h3 className="mb-1">My Active Listings</h3>
          <div className="hidden-scrollbar flex w-full gap-3 overflow-x-auto">
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              emptyStateComponent={<ActiveListingEmptyState />}
              isLoadingComponent={<SkeletonListing count={2} cardType={1} />}
            />
            {listings?.map((listing) => (
              <ListingCard
                key={listing.id}
                {...getListingProps(listing, user as UserType)}
                showOnlyImage
              />
            ))}
          </div>
        </section>
      </div>
      <Sidebar className="fade-in-bottom max-lg:hidden" />
    </main>
  );
};

export default ListerOverviewPage;
