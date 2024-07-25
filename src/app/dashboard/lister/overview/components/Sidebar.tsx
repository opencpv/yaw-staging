import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Sidebar = (props: Props) => {
  return (
    <aside
      className={cn(
        "flex w-full max-w-md flex-col gap-4 rounded-md bg-white lg:ml-auto lg:items-center lg:px-5 lg:py-5 lg:shadow-card lg:max-2xl:col-span-2",
        props.className,
      )}
    >
      <h2 className="text-xl lg:text-center lg:text-2xl">Manage Listings</h2>
      <OptionFilterTabs
        options={["Properties", "Moving Sales"]}
        onSelectionChange={() => {}}
        selectedKey={"properties"}
        tabColor="colored"
      />
      <div className="flex w-full gap-4">
        {/* PropertyCard */}
        <div className="w-full space-y-3 max-lg:max-w-xs">
          <div className="relative aspect-video w-full rounded-lg">
            <Image
              src="/assets/images/niceHome.png"
              alt=""
              fill
              className="rounded-[inherit] object-cover"
            />
          </div>
          <h4>2 Bedroom house at kasoa</h4>
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 text-shade-300">
            <p className="text-base">5 December</p>
            <p className="text-base">5 Days Ago</p>
          </div>
        </div>
      </div>
      <Button padding="sm">See all</Button>
      <div className="space-y-4 self-start">
        <h4 className="max-lg:text-xl">Recent Notifications</h4>
        {/*Notification component*/}
      </div>
    </aside>
  );
};

export default Sidebar;
