import { useDisclosure } from "@nextui-org/react";
import React, { useCallback, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "@/app/dashboard/components/shared/ui/ActionPopover";
import PublicationStatus from "./PublicationStatus";
import { useAppStore } from "@/store/dashboard/AppStore";
import {
  useHandleArchived,
  useUpdatePropertyPublicationStatus,
} from "../services";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { getListingProps } from "@/lib/enum";
import { ListingStepsStore } from "@/store/dashboard/ListingStepsStore";
import { PiArrowLineUp } from "react-icons/pi";
import { TbTrashOff } from "react-icons/tb";

type Props = {
  listing: Property;
};

const Actions = ({ listing }: Props) => {
  const router = useRouter();
  const { user } = useAppStore();
  const { setListing, setActiveSlide } = ListingStepsStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const [ListingEditSteps] = useLocalStorage<
    { listing: number; activeSlide: number }[]
  >("listing-edit-steps", []);

  const {
    mutate: handleArchived,
    isPending: isDeleting,
    isSuccess,
  } = useHandleArchived();

  const { mutate: updatePublishStatus, isPending: isPublishing } =
    useUpdatePropertyPublicationStatus();

  const canEdit = listing?.is_suspended === false;
  const canView =
    listing?.is_suspended === false && listing?.is_admin_approved === true;
  const canPublish =
    listing?.is_suspended === false && listing?.is_admin_approved === true;
  const canDelete = listing?.is_published === false;

  const handleDestruction = () => {
    canDelete &&
      handleArchived({
        id: listing.id,
        owner_uid: user?.id as string,
        is_archived: listing?.is_archived,
      });

    if (isSuccess) {
      onClose();
    }
  };

  const handleView = () => {
    canView && router.push(getListingProps(listing, user as UserType)?.href);
  };

  const handlePublish = () => {
    canPublish &&
      updatePublishStatus({
        id: listing.id,
        owner_uid: user?.id as string,
        is_published: !listing.is_published,
      });
  };

  const handleEdit = useCallback(() => {
    if (canEdit) {
      setListing(listing);
      router.replace(`/dashboard/lister/overview/edit/012${listing?.id}`);
      setActiveSlide(
        ListingEditSteps?.find((step) => step.listing === listing?.id)
          ?.activeSlide ?? 1,
      );
    }
  }, [ListingEditSteps, listing, setActiveSlide, router, setListing, canEdit]);

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={
          listing?.is_archived
            ? `Are you sure you want to remove "${
                listing?.property_name || "[No Title]"
              }" from your archive?`
            : `Are you sure you want to archive "${
                listing?.property_name || "[No Title]"
              }"?`
        }
        handleDestruction={handleDestruction}
        loading={isDeleting}
      />

      <ActionPopover isOpen={popoverIsOpen} onOpenChange={setPopoverIsOpen}>
        <ActionItemTrigger
          className="col-span-1 ml-auto h-fit w-fit p-2"
          onClick={() => setPopoverIsOpen(true)}
        >
          <BiDotsVerticalRounded />
        </ActionItemTrigger>
        <ActionContent>
          <ActionItem className="lg:hidden">
            <PublicationStatus listing={listing as Property} />
          </ActionItem>
          <ActionItem onClick={handlePublish} disabled={!canPublish}>
            <PiArrowLineUp />
            {isPublishing
              ? "Upading..."
              : listing?.is_published
                ? "Unpublish"
                : "Publish"}
          </ActionItem>
          <ActionItem onClick={handleView} disabled={!canView}>
            <MdOutlineRemoveRedEye />
            View
          </ActionItem>

          <ActionItem
            onClick={() => {
              handleEdit();
            }}
            disabled={!canEdit}
          >
            <MdOutlineEdit />
            Edit
          </ActionItem>
          <ActionItem onClick={onOpen} disabled={!canDelete}>
            {listing?.is_archived ? <TbTrashOff /> :<FiTrash2 /> }
            {listing?.is_archived ? "Unarchive" : "Delete"}
          </ActionItem>
        </ActionContent>
      </ActionPopover>
    </>
  );
};

export default Actions;
