import React from "react";
import WhatsAppJoinCard from "./WhatsAppJoinCard";
import PageVisitAnalytics from "./PageVisitAnalytics";

type Props = {};

const PMAnalyticsSection = (props: Props) => {
  return (
    <div className="grid-cols-2 gap-8 mb-20 space-y-8 md:grid md:space-y-0">
      <WhatsAppJoinCard />
      <PageVisitAnalytics />
    </div>
  );
};

export default PMAnalyticsSection;
