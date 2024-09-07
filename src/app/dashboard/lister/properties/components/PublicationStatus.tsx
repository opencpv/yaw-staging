import { Switch } from "@/components/__shared/ui/switch";
import {
  useExtendPublication,
  useUpdatePropertyPublicationStatus,
} from "../services";
import { cn } from "@/lib/utils";
import { getDaysRemaining, pluralize } from "@/lib/utils/stringManipulation";
import { LISTING_LAPSE_DAYS } from "@/constants";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { Button } from "@/components/__shared/ui/button/Button";
import dynamic from "next/dynamic";
const PopupModal = dynamic(() =>
  import("@/components/__shared/ui/alert-dialog").then((mod) => mod.PopupModal),
);

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
      <PopupModal
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
        onAction={handlePublish}
        loading={isPending}
      />
      <PopupModal
        isOpen={isOpenExtend}
        onClose={onCloseExtend}
        onOpenChange={onOpenChangeExtend}
        label={"Are you sure you want to extend this listing?"}
        onAction={handleExtend}
        loading={isExtending}
      />
      <span className="flex items-center gap-2 max-md:pl-2">
        <Switch
          label={`${daysRemaining > 0 ? daysRemaining : 0} ${pluralize(
            "day",
            daysRemaining,
          )} remaining`}
          color="primary"
          checked={listing?.is_published}
          onCheckedChange={onOpen}
          disabled={!canPublish}
          classNames={{
            label: cn({ invisible: listing?.is_published === false }),
          }}
        />
        <Button
          variant="ghost"
          size="sm"
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
