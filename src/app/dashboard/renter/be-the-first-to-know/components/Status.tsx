import Toggle from "@/components/__shared/ui/Toggle";
import { getDaysRemaining } from "../utils";
import { useUpdateCriteriaStatus } from "../services";
import { useEffect, useState } from "react";

interface Props {
  criterion: SearchCriteria;
}

const CriteriaStatus = ({ criterion }: Props) => {
  const daysRemaining = getDaysRemaining(
    criterion.is_active ? criterion.created_at : "0",
  );
  const [active, setActive] = useState(criterion.is_active);

  const { mutate: updateStatus, isError } = useUpdateCriteriaStatus();

  const handleSelectionChange = async (value: boolean) => {
    setActive(value);
    updateStatus({
      id: criterion.id,
      renter_id: criterion.renter_id,
      is_active: value,
    });

    if (isError) {
      setActive(!value);
    }
  };

  useEffect(() => {
    if (daysRemaining <= 0) {
      setActive(false);
      updateStatus({
        id: criterion.id,
        renter_id: criterion.renter_id,
        is_active: false,
      });

      if (isError) {
        setActive((prev) => prev);
      }
    }
  }, [daysRemaining, isError, criterion.id, criterion.renter_id, updateStatus]);

  return (
    <Toggle
      label={active ? `${daysRemaining} days remaining` : ""}
      color="primary"
      isSelected={active}
      onValueChange={handleSelectionChange}
      disabled={criterion.is_active === false}
    />
  );
};

export default CriteriaStatus;
