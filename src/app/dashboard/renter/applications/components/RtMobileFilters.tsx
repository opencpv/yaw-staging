import { Select } from "@/components/__shared/ui/form/select";
import React from "react";
import { RenterApplicationStatus } from "./RtApplicationStatus";

type Props = {
  statusFilter: "All" | "Archived" | RenterApplicationStatus;
  handleStatusSelectionChange: (value: string) => void;
};

const RtMobileFilters = ({
  statusFilter,
  handleStatusSelectionChange,
}: Props) => {
  return (
    // <div className="flex items-center gap-5 self-end">
    //   <Select
    //     options={["All", "Incomplete", "Accepted", "Declined", "Under Review"]}
    //     value={statusFilter}
    //     className="mx-0 min-w-max max-xsm:w-32 max-xsm:min-w-32 [@media(min-width:380px)]:w-48"
    //     variant="default"
    //     color="primary"
    //     selectorIcon={<FaChevronDown />}
    //     selectorIconClassName="text-neutral-800"
    //     handleSelectionChange={handleStatusSelectionChange}
    //   />
    // </div>
    <div className="flex items-center gap-5">
      <Select
        options={[
          "All",
          "Incomplete",
          "Accepted",
          "Declined",
          "Under Review",
          "Archived",
        ]}
        value={statusFilter}
        color="primary"
        onValueChange={handleStatusSelectionChange}
      />
    </div>
  );
};

export default RtMobileFilters;
