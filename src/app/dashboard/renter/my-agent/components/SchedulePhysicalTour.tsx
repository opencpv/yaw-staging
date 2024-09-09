import React from "react";
import ActionButton from "./ActionButton";

export default function SchedulePhysicalTour({
  match,
}: {
  match: AgentRequestMatch;
}) {
  return (
    <ActionButton
      match={match}
      actionType="Physical Tour"
      title="Schedule physical tour"
    >
      <span className="lg:max-xl:hidden">Schedule physical tour</span>
      <span className="hidden lg:max-xl:inline">Physical tour</span>
    </ActionButton>
  );
}
