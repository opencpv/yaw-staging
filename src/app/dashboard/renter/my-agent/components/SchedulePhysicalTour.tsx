import React from "react";
import ActionButton from "./ActionButton";

type Props = {
  active?: boolean;
};

export default function SchedulePhysicalTour() {
  return (
    <ActionButton title="Schedule physical tour">
      <span className="lg:max-xl:hidden">Schedule physical tour</span>
      <span className="hidden lg:max-xl:inline">Physical tour</span>
    </ActionButton>
  );
}
