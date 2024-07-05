import React from "react";
import FeatureExplainer from "./FeatureExplainer";
import { UserRole } from "../../../types";
import MatchSummary from "./MatchSummary";
import { useFetchCriteriaOverview } from "@/app/dashboard/renter/be-the-first-to-know/services";
import { useAppStore } from "@/store/dashboard/AppStore";

type Props = {
  className?: string;
  type: UserRole;
};

const PaidFeaturesSection = (props: Props) => {
  const { user } = useAppStore();
  const {data: criteria, isLoading } = useFetchCriteriaOverview({userId: user?.id as string})

  return (
    <div
      className={`flex flex-wrap justify-between gap-x-40 gap-y-10 lg:space-y-10 ${props.className}`}
    >
      <MatchSummary
        href={"/dashboard/renter/my-agent/agent?sk=true"}
        matches={[]}
        title="Be My Agent"
        callOut={{
          content: "You have no record for this service",
        }}
      />{" "}
      <MatchSummary
        href={"/dashboard/renter/be-the-first-to-know"}
        matches={criteria as any}
        title="Get Notified"
        callOut={{
          content:
            "Upgrade now to unlock this exclusive feature and supercharge your renting experience",
          href: "/dashboard/renter/be-the-first-to-know/manage-criteria"
        }}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PaidFeaturesSection;
