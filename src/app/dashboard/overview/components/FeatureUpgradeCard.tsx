import AOSWrapper from "@/components/__shared/AOSWrapper";
import Button from "@/components/__shared/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { icons } from "antd/es/image/PreviewGroup";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureUpgradeCard = ({
  title,
  className,
}: RenterPaidFeatureInterface) => {
  const { icons } = useAssets();

  if (title === "Be The First To Know")
    return (
      <div
        className={`flex flex-col gap-x-10 gap-y-5 text-white bg-[#99B3B2] xs:max-[500px]:px-16 rounded-xl text-xs p-5 pr-8 pb-12 min-[500px]:flex-row ${className}`}
      >
        <AOSWrapper animation="zoom-in" >
          <Image
            src={icons.HouseSearch}
            alt="house search"
            width={200}
            height={200}
          />
        </AOSWrapper>
        <div className="space-y-3">
          <h4 className="font-[600] text-sm">{title}</h4>
          <p className="capitalize text-white/90">
            Unlock your dream home before anyone else
          </p>
          <div className="flex flex-row flex-wrap justify-between gap-x-5 gap-y-3 mt-1 items-center  min-[535px]:flex-row">
            <Button color="primary" className="p-2 px-4 text-xs">
              Upgrade Now
            </Button>
            <Link href="">Learn More</Link>
          </div>
        </div>
      </div>
    );
  else if (title === "Be My Agent")
    return (
      <div
        className={`flex flex-col gap-x-10 gap-y-5 text-white bg-[#99B3B2] xs:max-[500px]:px-16 rounded-xl text-xs p-5 pr-8 pb-12 min-[500px]:flex-row ${className}`}
      >
        <Image src={icons.Rafiki} alt="house search" width={200} height={200} />
        <div className="space-y-3">
          <h4 className="font-[600] text-sm">{title}</h4>
          <p className="capitalize text-white/90">
            Your Dedicated Partner in Finding the Perfect Rental
          </p>
          <div className="flex flex-row flex-wrap justify-between gap-x-5 gap-y-3 mt-1 items-center  min-[535px]:flex-row">
            <Button className="p-2 px-4 text-xs text-white capitalize bg-primary-500">
              Upgrade Now
            </Button>
            <Link href="" className="capitalize">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    );
};

export default FeatureUpgradeCard;
