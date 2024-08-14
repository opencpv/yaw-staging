import Toggle from "@/components/__shared/ui/Toggle";
import {
  useExtendPublication,
  useUpdatePropertyPublicationStatus,
} from "../services";
import { cn } from "@/lib/utils";
import { getDaysRemaining, pluralize } from "@/lib/utils/stringManipulation";
import { LISTING_LAPSE_DAYS } from "@/constants";
import { useAppStore } from "@/store/dashboard/AppStore";
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";
import { useDisclosure } from "@nextui-org/react";
import Button from "@/components/__shared/ui/button/Button";

interface Props {
  listing: Property;
}

const PublicationStatus = ({ listing }: Props) => {
  const { user } = useAppStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const {
    onClose: onCloseExtend,
    isOpen: isOpenExtend,
    onOpenChange: onOpenChangeExtend,
    onOpen: onOpenExtend,
  } = useDisclosure();
  const days = LISTING_LAPSE_DAYS;
  const daysRemaining = getDaysRemaining(
    listing?.published_date as string,
    days,
  );
  const canPublish =
    listing?.is_suspended === false && listing?.is_admin_approved === true;

  const {
    mutate: updateStatus,
    isPending,
    isSuccess,
  } = useUpdatePropertyPublicationStatus();

  const {
    mutate: extendPublication,
    isPending: isExtending,
    isSuccess: isSuccessExtend,
  } = useExtendPublication();

  const handlePublish = () => {
    canPublish &&
      updateStatus({
        id: listing.id,
        owner_uid: user?.id as string,
        is_published: !listing.is_published,
      });

    if (isSuccess) {
      onClose();
    }
  };

  const handleExtend = () => {
    canPublish &&
      extendPublication({
        id: listing.id,
        owner_uid: user?.id as string,
      });

    if (isSuccessExtend) {
      onCloseExtend();
    }
  };

  // Unpublish listing when date is due
  // May have to be cron/webhk since it involves notifs
  //useEffect(() => {
  //  if (daysRemaining <= 0) {
  //    updateStatus({
  //      id: listing?.id,
  //      owner_uid: listing?.owner_uid,
  //      is_published: false,
  //    });
  //  }
  //}, [daysRemaining, listing?.id, listing?.owner_uid, updateStatus]);

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={
          listing?.is_published
            ? `Are you sure you want to unpublish "${
                listing?.property_name || "[No Title]"
              }"?`
            : `Are you sure you want to publish "${
                listing?.property_name || "[No Title]"
              }"?`
        }
        handleDestruction={handlePublish}
        loading={isPending}
      />
      <DestructiveModal
        isOpen={isOpenExtend}
        onClose={onCloseExtend}
        onOpenChange={onOpenChangeExtend}
        label={"Are you sure you want to extend this listing?"}
        handleDestruction={handleExtend}
        loading={isExtending}
      />
      <span className="flex items-center gap-2">
        <Toggle
          label={`${daysRemaining} ${pluralize(
            "day",
            daysRemaining,
          )} remaining`}
          color="primary"
          isSelected={listing?.is_published}
          onValueChange={onOpen}
          disabled={!canPublish}
          classNames={{
            label: cn({ invisible: listing?.is_published === false }),
          }}
        />
        <Button
          color="primary"
          variant="ghost"
          className={cn("text-xs underline", {
            invisible: listing?.is_published === false,
          })}
          isLoading={isExtending}
          onClick={onOpenExtend}
        >
          Extend
        </Button>
      </span>
    </>
  );
};

export default PublicationStatus;
