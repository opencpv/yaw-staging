import React from "react";
import FeatureUpgradeCard from "./FeatureUpgradeCard";
import { useAssets } from "@/lib/custom-hooks/useAssets";

type Props = {
  className?: string;
};

const PMOverviewUpgradeSection = (props: Props) => {
  const { images } = useAssets();
  return (
    <section className={`mb-20 ${props.className}`}>
      <h2 className="mb-6">Upgrade</h2>
      <div className="grid-auto-min-200 mb-5 w-full gap-5">
        <FeatureUpgradeCard
          title="3D Images"
          image={images._3DImage}
          alt="3D House"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
        <FeatureUpgradeCard
          title="Get Featured"
          image={images.GetFeaturedImage}
          alt="A person holding megaphone"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
        <FeatureUpgradeCard
          title="Verify My Listings"
          image={images.VerifyListing}
          alt="A person making a phone call"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
      </div>
    </section>
  );
};

export default PMOverviewUpgradeSection;
