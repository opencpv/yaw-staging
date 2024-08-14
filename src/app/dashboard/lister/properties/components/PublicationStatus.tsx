import Toggle from "@/components/__shared/ui/Toggle";
import { useUpdatePropertyPublicationStatus } from "../services";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDaysRemaining, pluralize } from "@/lib/utils/stringManipulation";
import { LISTING_LAPSE_DAYS } from "@/constants";
import { useAppStore } from "@/store/dashboard/AppStore";

interface Props {
  listing: Property;
}

const PublicationStatus = ({ listing }: Props) => {
  const { user } = useAppStore();
  const days = LISTING_LAPSE_DAYS;
  const daysRemaining = getDaysRemaining(listing?.created_at, days);
  const canPublish =
    listing?.is_suspended === false && listing?.is_admin_approved === true;

  const {
    mutate: updateStatus,
    variables,
    reset,
    isSuccess,
    submittedAt,
  } = useUpdatePropertyPublicationStatus();

  const handlePublish = (isSelected: boolean) => {
    canPublish &&
      updateStatus({
        id: listing.id,
        owner_uid: user?.id as string,
        is_published: isSelected,
      });
  };

  // Reset variables so that it doesn't clash with Publishing from Actions
  //useEffect(() => {
  //  if (isSuccess && !submittedAt) {
  //    reset();
  //  }
  //}, [isSuccess, reset, submittedAt]);

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
      isSelected={
        submittedAt
          ? variables?.is_published ?? listing?.is_published
          : listing?.is_published
      }
      onValueChange={handlePublish}
      disabled={!canPublish}
      classNames={{ label: cn({ invisible: listing?.is_published === false }) }}
    />
  );
};

export default PublicationStatus;
