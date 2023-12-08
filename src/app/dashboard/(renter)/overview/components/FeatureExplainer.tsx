"use client";
import React from "react";
import Callout from "../../../components/Callout";
import { BsPatchExclamation } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import Button from "@/components/__shared/Button";
import { useRouter } from "next/navigation";
import { Router } from "lucide-react";

const FeatureExplainer = ({
  title,
  className,
  href,
}: RenterPaidFeatureInterface) => {
  const router = useRouter();
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between gap-5 p-2 px-4 text-white capitalize bg-primary-400 rounded-xl">
        {title}
        <CiLock className="text-accent-100 font-[600] text-lg" />
      </div>
      <Callout className="flex items-start gap-2">
        <BsPatchExclamation className="text-2xl text-accent-50" />
        <div className="text-sm">
          <p className="leading-normal">
            Upgrade now to unlock this exclusive feature and supercharge your
            renting experience
          </p>
          {title === "Be The First To Know" && (
            <Button
              variant="ghost"
              className="text-[#45808B] capitalize underline font-[700]"
              onClick={() => router.push(href)}
            >
              Learn more
            </Button>
          )}
          {title === "Be My Agent" && (
            <Button
              variant="ghost"
              className="text-[#45808B] capitalize underline font-[700]"
              onClick={() => router.push(href)}
            >
              Learn more
            </Button>
          )}
        </div>
      </Callout>
    </div>
  );
};

export default FeatureExplainer;
