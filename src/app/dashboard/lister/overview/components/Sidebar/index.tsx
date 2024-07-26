import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { cn } from "@/lib/utils";
import PropertyCard from "./PropertyCard";
import { createUUID } from "@/lib/utils/stringManipulation";
import ItemCard from "./ItemCard";
import { useFetchListerItems, useFetchListerListings } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import PropertiesEmptyState from "@/app/properties/components/PropertiesEmptyState";
import { Skeleton } from "@nextui-org/react";

type Props = {
  className?: string;
};

type TabType = "properties" | "moving sales";

const Sidebar = (props: Props) => {
  const { user } = useAppStore();
  const [activeTab, setActiveTab] = React.useState<TabType>("properties");

  const {
    data: listings,
    isLoading,
    error,
  } = useFetchListerListings({
    listerId: user?.id as string,
  });

  const {
    data: items,
    isLoading: isItemsLoading,
    error: itemsError,
  } = useFetchListerItems({
    listerId: user?.id as string,
  });

  return (
    <aside
      className={cn(
        "col-span-2 flex w-full flex-col gap-4 rounded-md lg:ml-auto lg:max-w-md lg:items-center lg:bg-neutral-50 lg:px-5 lg:py-5 lg:shadow-card lg:max-2xl:col-span-3",
        props.className,
      )}
    >
      <h2 className="text-xl lg:text-center lg:text-2xl">
        {activeTab === "properties" ? "Manage Listings" : "Manage Items"}
      </h2>
      <OptionFilterTabs
        options={["Properties", "Moving Sales"]}
        onSelectionChange={(key) => setActiveTab(key as TabType)}
        selectedKey={activeTab}
        tabColor="colored"
        cursorAnimation
      />
      <div className="hidden-scrollbar flex w-full gap-x-5 gap-y-10 overflow-x-auto lg:flex-col">
        {activeTab === "properties" ? (
          <>
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              isLoadingComponent={
                <div className="space-y-5">
                  <Skeleton className="aspect-video w-full min-w-[200px] flex-1 space-y-3 max-lg:max-w-xs" />
                  <Skeleton className="h-6 w-full max-w-20 rounded-md" />
                </div>
              }
            />
            {listings?.map((listing) => (
              <PropertyCard
                id={listing.id}
                key={listing.id}
                title={`${listing.bedrooms} Bedroom ${listing.property_type} at ${listing.city}`}
                image="/assets/images/niceHome.png"
                date={listing.created_at}
              />
            ))}
          </>
        ) : (
          <>
            <FetchingStates
              data={items}
              error={itemsError}
              isLoading={isItemsLoading}
              isLoadingComponent={
                <div className="space-y-5">
                  <Skeleton className="aspect-video w-full min-w-[200px] flex-1 space-y-3 max-lg:max-w-xs" />
                  <Skeleton className="h-6 w-full max-w-20 rounded-md" />
                </div>
              }
            />
            {items?.map((item) => (
              <ItemCard
                id={item.id}
                key={item.id}
                title={item.title}
                image="/assets/images/couple-holding-boxes.png"
                price={item.price}
              />
            ))}
          </>
        )}
      </div>
      <Button
        href="#"
        padding="sm"
        radius="full"
        className="w-fit self-end bg-shade-50 text-neutral-800"
      >
        See all
      </Button>
      <div className="mt-10 space-y-4 self-start">
        <h4 className="max-lg:text-xl">Recent Notifications</h4>
        {/*Notification component*/}
      </div>
    </aside>
  );
};

export default Sidebar;
