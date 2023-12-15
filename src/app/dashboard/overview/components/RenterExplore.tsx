import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import ExploreFeatureCard from "./ExploreFeatureCard";

type Props = {
  className?: string;
};

const RenterExplore = (props: Props) => {
  const { icons } = useAssets();
  return (
    <section className={`mb-20 ${props.className}`}>
      <h2 className="text-2xl font-[700] mb-6">Upgrade</h2>
      <div className="flex flex-wrap w-full gap-5 mb-5">
        {/* <FeatureUpgradeCard title="Be The First To Know" />
          <FeatureUpgradeCard title="Be My Agent" /> */}
        <ExploreFeatureCard
          title="My Bookmarks"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
        <ExploreFeatureCard
          tag="Free"
          title="Be The First To Know"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
        <ExploreFeatureCard
          tag="Upgrade"
          title="My My Agent"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
      </div>
    </section>
  );
};

export default RenterExplore;
