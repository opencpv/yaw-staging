import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import { useManagePropertiesStore } from "@/store/dashboard/propertiesStore";
import React from "react";

type Props = {};

const ManagePropertiesTabs = (props: Props) => {
  const optionSelected = useManagePropertiesStore(
    (state) => state.filterOption
  );
  const handleOptionChange = useManagePropertiesStore(
    (state) => state.changeOption
  );

  return (
    <OptionFilterTabs
      options={[
        "all",
        "contract pending",
        "leased",
        "dormant",
        "payment pending",
      ]}
      selectedKey={optionSelected}
      onSelectionChange={handleOptionChange}
    />
  );
};

export default ManagePropertiesTabs;
