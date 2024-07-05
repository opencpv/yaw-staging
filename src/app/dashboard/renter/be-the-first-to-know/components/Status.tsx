import Toggle from "@/components/__shared/ui/Toggle";
import { getDaysRemaining } from "../utils";
import { useUpdateCriteriaStatus } from "../services";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { pluralize } from "@/lib/utils/stringManipulation";

interface Props {
  criterion: SearchCriteria;
}

const CriteriaStatus = ({ criterion }: Props) => {
  const daysRemaining = getDaysRemaining(criterion.created_at);

  const { mutate: updateStatus, variables } = useUpdateCriteriaStatus();

  const handleSelectionChange = async (value: boolean) => {
    updateStatus({
      id: criterion.id,
      renter_id: criterion.renter_id,
      is_active: value,
    });
  };

  // Set the status to inactive if the days remaining is less than or equal to 0
  useEffect(() => {
    if (daysRemaining <= 0) {
      updateStatus({
        id: criterion.id,
        renter_id: criterion.renter_id,
        is_active: false,
      });
    }
  }, [daysRemaining, criterion.id, criterion.renter_id, updateStatus]);

  return (
    <Toggle
      label={`${daysRemaining} ${pluralize("day", daysRemaining)} remaining`}
      color="primary"
      isSelected={variables ? variables.is_active : criterion.is_active}
      onValueChange={handleSelectionChange}
      disabled={
        criterion.is_active === false && criterion.matched_properties === null
      }
      classNames={{ label: cn({ invisible: criterion.is_active === false }) }}
    />
  );
};

export default CriteriaStatus;
