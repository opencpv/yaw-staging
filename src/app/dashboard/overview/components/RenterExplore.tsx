import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import ExploreFeatureCard from "./ExploreFeatureCard";

type Props = {
  className?: string;
};

const RenterExplore = (props: Props) => {
  const { icons } = useAssets();
  return (
    <section className={`${props.className}`}>
      <div className="mb-5 flex w-full flex-wrap gap-5">
        {/* <FeatureUpgradeCard title="Be The First To Know" />
          <FeatureUpgradeCard title="Be My Agent" /> */}
        <ExploreFeatureCard
          tag="Free"
          title="My Bookmarks"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href="/dashboard/saved-search"
        />
        <ExploreFeatureCard
          tag="Free"
          title="Be The First To Know"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href="/dashboard/my-search"
        />
        <ExploreFeatureCard
          title="Be My Agent"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href="/dashboard/my-agent"
        />
      </div>
    </section>
  );
};

export default RenterExplore;
