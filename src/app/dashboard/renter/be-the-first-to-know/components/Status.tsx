import { Switch } from "@/components/__shared/ui/switch";
import { useUpdateCriteriaStatus } from "../services";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDaysRemaining, pluralize } from "@/lib/utils/stringManipulation";
import { BE_THE_FIRST_TO_KNOW_LAPSE_DAYS } from "@/constants";

interface Props {
  criterion: SearchCriteria;
}

const CriteriaStatus = ({ criterion }: Props) => {
  const days = BE_THE_FIRST_TO_KNOW_LAPSE_DAYS;
  const daysRemaining = getDaysRemaining(criterion.created_at, days);

  const { mutate: updateStatus, variables } = useUpdateCriteriaStatus();

  const handleSelectionChange = async (value: boolean) => {
    criterion?.matched_properties !== null &&
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
    <Switch
      label={`${daysRemaining} ${pluralize("day", daysRemaining)} remaining`}
      color="primary"
      checked={variables ? variables.is_active : criterion.is_active}
      onCheckedChange={handleSelectionChange}
      disabled={
        criterion.is_active === false && criterion.matched_properties === null
      }
      classNames={{ label: cn({ invisible: criterion.is_active === false }) }}
    />
  );
};

export default CriteriaStatus;
