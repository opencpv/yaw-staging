import { Button } from "@/components/__shared/ui/button/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";

type Props = {};

const MembershipUpgradeCard = (props: Props) => {
  const { images } = useAssets();
  return (
    <div className="overlay-rounded relative mt-20 h-fit w-full rounded-xl lg:mt-0">
      <Image
        src={images.PersonHoldingHouse}
        alt="Person with a house in his hands"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-xl"
      />
      <div className="relative z-20 space-y-3 px-10 py-28 text-white">
        <h3 className="uppercase">Upgrade to Premium GuaranteeTag</h3>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        <Button>Upgrade Now</Button>
      </div>
    </div>
  );
};

export default MembershipUpgradeCard;
