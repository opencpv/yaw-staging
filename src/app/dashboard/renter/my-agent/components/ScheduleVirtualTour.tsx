import React from "react";
import ActionButton from "./ActionButton";

export default function ScheduleVirtualTour() {
  return (
    <ActionButton actionType="Virtual Tour" title="Schedule virtual tour">
      <span className="lg:max-xl:hidden">Schedule virtual tour</span>
      <span className="hidden lg:max-xl:inline">Virtual tour</span>
    </ActionButton>
  );
}
