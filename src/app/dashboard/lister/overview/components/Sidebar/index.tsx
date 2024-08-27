import { Tabs } from "@/components/__shared/ui/tabs";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { cn } from "@/lib/utils";
import PropertyCard from "./PropertyCard";
import ItemCard from "./ItemCard";
import { useFetchListerItems, useFetchListerListings } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import { Skeleton } from "@/components/__shared/ui/skeleton";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import dynamic from "next/dynamic";
const ItemEmptyState = dynamic(() => import("../ItemEmptyState"));

type Props = {
  className?: string;
};

type TabType = "Properties" | "Moving Sales";

const Sidebar = (props: Props) => {
  const { user } = useAppStore();
  const { images } = useAssets();
  const [activeTab, setActiveTab] = React.useState<TabType>("Properties");

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
        "col-span-2 flex w-full flex-col gap-4 rounded-md lg:ml-auto lg:h-fit lg:max-w-md lg:items-center lg:bg-neutral-50 lg:px-5 lg:py-5 lg:shadow-card lg:max-2xl:col-span-3",
        props.className,
      )}
    >
      <h2 className="lg:text-center">
        {activeTab === "Properties" ? "Manage Listings" : "Manage Items"}
      </h2>
      <Tabs
        options={["Properties", "Moving Sales"]}
        onSelectionChange={(key) => setActiveTab(key as TabType)}
        selectedKey={activeTab}
      />
      <div className="hidden-scrollbar flex w-full gap-x-5 gap-y-10 overflow-x-auto lg:flex-col">
        {activeTab === "Properties" ? (
          <>
            <FetchingStates
              data={listings}
              error={error}
              isLoading={isLoading}
              emptyStateComponent={<ItemEmptyState variant="property" />}
              isLoadingComponent={
                <div className="space-y-5">
                  <Skeleton className="aspect-video w-full min-w-[200px] flex-1 space-y-3 max-lg:max-w-xs" />
                  <Skeleton className="h-6 w-full max-w-20 rounded-md" />
                </div>
              }
            />
            {listings?.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </>
        ) : (
          <>
            <FetchingStates
              data={items}
              error={itemsError}
              isLoading={isItemsLoading}
              emptyStateComponent={<ItemEmptyState variant="item" />}
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
                image={images.NoImagePlaceholder} // TODO: Add image
                price={item.price}
                isActive={item.status.toLowerCase() === "active"}
              />
            ))}
          </>
        )}
      </div>
      {activeTab === "Properties" ? (
        <Button
          href="/dashboard/lister/properties"
          padding="sm"
          radius="full"
          className="w-fit self-end bg-shade-50 text-neutral-800"
          style={{ display: listings?.length === 0 ? "none" : "flex" }}
        >
          See all
        </Button>
      ) : (
        <Button
          href="/dashboard/lister/sell-products"
          padding="sm"
          radius="full"
          className="w-fit self-end bg-shade-50 text-neutral-800"
          style={{ display: items?.length === 0 ? "none" : "flex" }}
        >
          See all
        </Button>
      )}
      <div className="mt-10 space-y-4 self-start">
        <h4 className="max-lg:text-xl">Notifications</h4>
        {/*Notification component*/}
      </div>
    </aside>
  );
};

export default Sidebar;
