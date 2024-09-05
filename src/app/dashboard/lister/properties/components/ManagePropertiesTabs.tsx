import { Tabs } from "@/components/__shared/ui/tabs/tabs";
import { useManagePropertiesStore } from "@/store/dashboard/propertiesStore";
import React from "react";

type Props = {};

const ManagePropertiesTabs = (props: Props) => {
  const optionSelected = useManagePropertiesStore(
    (state) => state.filterOption,
  );
  const handleOptionChange = useManagePropertiesStore(
    (state) => state.changeOption,
  );

  return (
    <Tabs
      options={[
        "All",
        "Contract Pending",
        "Leased",
        "Dormant",
        "Payment Pending",
      ]}
      selectedKey={optionSelected}
      onSelectionChange={handleOptionChange}
    />
  );
};

export default ManagePropertiesTabs;
