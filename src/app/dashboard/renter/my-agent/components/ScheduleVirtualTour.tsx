import React from "react";
import ActionButton from "./ActionButton";

type Props = {
  active?: boolean;
};

export default function ScheduleVirtualTour() {
  return (
    <ActionButton href={"/dashboard/renter/my-agent/agent/4324/schedule"} title="Schedule virtual tour">
      <span className="lg:max-xl:hidden">Schedule virtual tour</span>
      <span className="hidden lg:max-xl:inline">Virtual tour</span>
    </ActionButton>
  );
}
