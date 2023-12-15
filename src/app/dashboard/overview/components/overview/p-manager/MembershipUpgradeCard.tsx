import Button from "@/components/__shared/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";

type Props = {};

const MembershipUpgradeCard = (props: Props) => {
  const { images } = useAssets();
  return (
    <div className="overlay-rounded relative rounded-xl mb-20 w-full h-fit mt-20 lg:mt-0">
      <Image
        src={images.PersonHoldingHouse}
        alt="Person with a house in his hands"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-xl"
      />
      <div className="relative text-white space-y-3 z-20 py-28 px-10">
        <h3 className="uppercase">Upgrade to Premium Membership</h3>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </small>
        <Button color="primary" className="text-base py-2">Upgrade Now</Button>
      </div>
    </div>
  );
};

export default MembershipUpgradeCard;
