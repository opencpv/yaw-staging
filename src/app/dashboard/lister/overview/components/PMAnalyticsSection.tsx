import React from "react";
import WhatsAppJoinCard from "./WhatsAppJoinCard";
import dynamic from "next/dynamic";
const PageVisitAnalytics = dynamic(() => import("./PageVisitAnalytics"));

type Props = {};

const PMAnalyticsSection = (props: Props) => {
  return (
    <div className="mb-20 grid-cols-2 gap-8 space-y-8 md:grid md:space-y-0">
      <WhatsAppJoinCard />
      <PageVisitAnalytics />
    </div>
  );
};

export default PMAnalyticsSection;
