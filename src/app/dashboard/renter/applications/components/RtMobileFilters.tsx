import Select from "@/app/dashboard/components/shared/ui/Select";
import React from "react";
import { RenterApplicationStatus } from "./RtApplicationStatus";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  statusFilter: "all" | RenterApplicationStatus;
  dateFilter: "newest" | "oldest" | "last modified";
  handleStatusSelectionChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  handleDateSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const RtMobileFilters = ({
  statusFilter,
  handleStatusSelectionChange,
  dateFilter,
  handleDateSelectionChange,
}: Props) => {
  return (
    <div className="flex items-center gap-5 self-end">
      <Select
        options={["All", "Incomplete", "Accepted", "Declined", "Under Review"]}
        value={statusFilter}
        className="mx-0 min-w-max max-xsm:w-32 max-xsm:min-w-32 [@media(min-width:380px)]:w-48"
        variant="default"
        color="primary"
        selectorIcon={<FaChevronDown />}
        selectorIconClassName="text-neutral-800"
        handleSelectionChange={handleStatusSelectionChange}
      />
      <Select
        options={["Newest", "Oldest", "Last Modified"]}
        value={dateFilter}
        className="mx-0 min-w-max max-xsm:w-32 max-xsm:min-w-32 [@media(min-width:380px)]:w-48"
        variant="default"
        color="primary"
        selectorIcon={<FaChevronDown />}
        selectorIconClassName="text-neutral-800"
        handleSelectionChange={handleDateSelectionChange}
      />
    </div>
  );
};

export default RtMobileFilters;
