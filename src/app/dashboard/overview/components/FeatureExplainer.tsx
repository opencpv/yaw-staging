import React from "react";
import Callout from "../../components/Callout";
import { BsPatchExclamation } from "react-icons/bs";
import Link from "next/link";
import { CiLock } from "react-icons/ci";

const FeatureExplainer = ({ title, className }: RenterPaidFeatureInterface) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between gap-5 p-2 px-4 text-white capitalize bg-primary-400 rounded-xl">
        {title}
        <CiLock className="text-accent-100 font-[600] text-lg" />
      </div>
      <Callout className="flex items-start gap-2">
        <BsPatchExclamation className="text-2xl text-accent-50" />
        <div className="text-xs">
          <p className="leading-normal">
            Upgrade now to unlock this exclusive feature and supercharge your
            renting experience
          </p>
          {title === "Be The First To Know" && (
            <Link href="" className="capitalize underline font-[700]">
              Learn more
            </Link>
          )}
          {title === "Be My Agent" && (
            <Link href="" className="capitalize underline font-[700]">
              Learn more
            </Link>
          )}
        </div>
      </Callout>
    </div>
  );
};

export default FeatureExplainer;
