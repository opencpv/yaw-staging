import Select from "@/app/dashboard/components/shared/ui/Select";
import React from "react";
import { RenterApplicationStatus } from "./RtApplicationStatus";

type Props = {
  value: "all" | RenterApplicationStatus;
  handleSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const RtMobileFilters = ({ value, handleSelectionChange }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <Select
        options={["All", "Incomplete", "Accepted", "Declined", "Under Review"]}
        value={value}
        className="mx-0 w-32 font-bold"
        valueClassName="font-bold"
        variant="ghost"
        color="primary"
        handleSelectionChange={handleSelectionChange}
      />
    </div>
  );
};

export default RtMobileFilters;
