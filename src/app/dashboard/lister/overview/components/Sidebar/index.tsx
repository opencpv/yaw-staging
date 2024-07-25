import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { cn } from "@/lib/utils";
import PropertyCard from "./PropertyCard";
import { createUUID } from "@/lib/utils/stringManipulation";
import ItemCard from "./ItemCard";

type Props = {
  className?: string;
};

type TabType = "properties" | "moving sales";

const Sidebar = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState<TabType>("properties");

  return (
    <aside
      className={cn(
        "col-span-2 flex w-full flex-col gap-4 rounded-md bg-neutral-50 lg:ml-auto lg:max-w-md lg:items-center lg:px-5 lg:py-5 lg:shadow-card lg:max-2xl:col-span-3",
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
            {[1, 2, 3].map((_) => (
              <PropertyCard
                id={1}
                key={createUUID()}
                title={"2 Bedroom house at Kasoa"}
                image="/assets/images/niceHome.png"
                date="5 December"
              />
            ))}
          </>
        ) : (
          <>
            {[1, 2, 3].map((_) => (
              <ItemCard
                id={1}
                key={createUUID()}
                title={"Lorem Ipsum lorem ipsum"}
                image="/assets/images/couple-holding-boxes.png"
                price={30021}
              />
            ))}
          </>
        )}
      </div>
      <Button
        href="#"
        padding="sm"
        radius="full"
        className="w-fit self-end bg-neutral-100 text-neutral-800"
      >
        See all
      </Button>
      <div className="space-y-4 self-start">
        <h4 className="max-lg:text-xl">Recent Notifications</h4>
        {/*Notification component*/}
      </div>
    </aside>
  );
};

export default Sidebar;
