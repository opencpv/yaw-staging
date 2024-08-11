import Toggle from "@/components/__shared/ui/Toggle";
import { useUpdatePropertyPublicationStatus } from "../services";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDaysRemaining, pluralize } from "@/lib/utils/stringManipulation";
import { LISTING_LAPSE_DAYS } from "@/constants";

interface Props {
  listing: Property;
}

const PublicationStatus = ({ listing }: Props) => {
  const days = LISTING_LAPSE_DAYS;
  const daysRemaining = getDaysRemaining(listing?.created_at, days);

  const { mutate: updateStatus, variables } =
    useUpdatePropertyPublicationStatus();

  const handleSelectionChange = async (value: boolean) => {
    if (listing?.is_complete)
      updateStatus({
        id: listing?.id,
        owner_uid: listing?.owner_uid,
        is_published: value,
      });
  };

  // Set the status to inactive if the days remaining is less than or equal to 0
  useEffect(() => {
    if (daysRemaining <= 0) {
      updateStatus({
        id: listing?.id,
        owner_uid: listing?.owner_uid,
        is_published: false,
      });
    }
  }, [daysRemaining, listing?.id, listing?.owner_uid, updateStatus]);

  return (
    <Toggle
      label={`${daysRemaining} ${pluralize("day", daysRemaining)} remaining`}
      color="primary"
      isSelected={variables ? variables?.is_published : listing?.is_published}
      onValueChange={handleSelectionChange}
      disabled={listing?.is_suspended === true || listing?.is_complete === false}
      classNames={{ label: cn({ invisible: listing?.is_published === false }) }}
    />
  );
};

export default PublicationStatus;
