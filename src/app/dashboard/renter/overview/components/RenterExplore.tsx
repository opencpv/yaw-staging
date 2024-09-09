import React from "react";
import ExploreFeatureCard from "./ExploreFeatureCard";

type Props = {
  className?: string;
};

const RenterExplore = (props: Props) => {
  return (
    <section className={`${props.className}`}>
      <div className="mb-5 flex w-full flex-wrap gap-5">
        <ExploreFeatureCard
          title="My Favourites"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href="/dashboard/renter/favourites"
        />
        <ExploreFeatureCard
          tag="Free"
          title="Be The First To Know"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href="/dashboard/renter/be-the-first-to-know/manage-criteria"
        />
        <ExploreFeatureCard
          tag="Premium"
          title="Be My Agent"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href="/dashboard/renter/my-agent/agent"
        />
      </div>
    </section>
  );
};

export default RenterExplore;
