import React from "react";
import UpgradeFeatureCard from "./UpgradeFeatureCard";
import { useAssets } from "@/lib/custom-hooks/useAssets";

type Props = {
  className?: string;
};

const PMOverviewUpgradeSection = (props: Props) => {
  const {images} = useAssets()
  return (
    <section className={`mb-20 ${props.className}`}>
      <h2 className="text-2xl font-[700] mb-6">Upgrade</h2>
      <div className="grid-auto-min-200 w-full gap-5 mb-5">
        <UpgradeFeatureCard
          title="3D Images"
          image={images.StockImage}
          alt="3D House"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
        <UpgradeFeatureCard
          title="Get Featured"
          image={images.StockImage}
          alt="A person holding megaphone"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
        <UpgradeFeatureCard
          title="Verify My Listings"
          image={images.StockImage}
          alt="Person making a call"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius recusandae sed, quis, vitae sequi praesentium natus id dolores atque omnis facilis tempore exercitationem perferendis sit alias consequuntur nemo."
          href=""
        />
      </div>
    </section>
  );
};

export default PMOverviewUpgradeSection;
