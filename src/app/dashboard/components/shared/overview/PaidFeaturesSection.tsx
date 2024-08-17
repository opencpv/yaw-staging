import React from "react";
import BTFTKMatchSummary from "./BTFTKMatchSummary";
import { useFetchCriteriaOverview } from "@/app/dashboard/renter/be-the-first-to-know/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import BeMyAgentMatchSummary from "./BeMyAgentMatchSummary";
import { useFetchAgentRequestOverview } from "@/app/dashboard/renter/my-agent/services";

type Props = {
  className?: string;
};

const PaidFeaturesSection = (props: Props) => {
  const { user } = useAppStore();
  const { data: criteria, isLoading } = useFetchCriteriaOverview({
    userId: user?.id as string,
  });

  const { data: requests, isLoading: requestLoading } =
    useFetchAgentRequestOverview({
      userId: user?.id as string,
    });

  return (
    <div
      className={`flex flex-wrap justify-between gap-x-40 gap-y-10 lg:space-y-10 ${props.className}`}
    >
      <BeMyAgentMatchSummary
        href={
          requests && requests?.length > 0
            ? "/dashboard/renter/my-agent/agent?sk=true"
            : "/dashboard/renter/my-agent/agent"
        }
        matches={requests as any}
        callOut={{
          content: "You have no record for this service",
          href: "/dashboard/renter/my-agent/explore",
        }}
        isLoading={requestLoading}
      />{" "}
      <BTFTKMatchSummary
        href={"/dashboard/renter/be-the-first-to-know/manage-criteria"}
        matches={criteria as any}
        callOut={{
          content:
            "Upgrade now to unlock this exclusive feature and supercharge your renting experience",
        }}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PaidFeaturesSection;
