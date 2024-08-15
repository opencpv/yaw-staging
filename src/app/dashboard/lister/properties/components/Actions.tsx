import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import { getListingProps } from "@/lib/enum";
import { PiArrowLineUp } from "react-icons/pi";
import { TbTrashOff } from "react-icons/tb";
import dynamic from "next/dynamic";

const ListingModal = dynamic(
  () => import("../../overview/components/steps/ListingModal"),
);

type Props = {
  listing: Property;
};

const Actions = ({ listing }: Props) => {
  const router = useRouter();
  const { user } = useAppStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const {
    onClose: onClosePublish,
    isOpen: isOpenPublish,
    onOpenChange: onOpenChangePublish,
    onOpen: onOpenPublish,
  } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);


  const {
    mutate: handleArchived,
    isPending: isDeleting,
    isSuccess,
  } = useHandleArchived();

  const {
    mutate: updatePublishStatus,
    isPending: isPublishing,
    isSuccess: isSuccessPublish,
  } = useUpdatePropertyPublicationStatus();

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

    if (isSuccessPublish) {
      onClosePublish();
    }
  };


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
      <DestructiveModal
        isOpen={isOpenPublish}
        onClose={onClosePublish}
        onOpenChange={onOpenChangePublish}
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
        loading={isPublishing}
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
          <ActionItem onClick={onOpenPublish} disabled={!canPublish}>
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

          <ListingModal variant="edit" listing={listing} disabled={!canEdit}>
            <ActionItem disabled={!canEdit}>
              <MdOutlineEdit />
              Edit
            </ActionItem>
          </ListingModal>
          <ActionItem onClick={onOpen} disabled={!canDelete}>
            {listing?.is_archived ? <TbTrashOff /> : <FiTrash2 />}
            {listing?.is_archived ? "Unarchive" : "Delete"}
          </ActionItem>
        </ActionContent>
      </ActionPopover>
    </>
  );
};

export default Actions;
