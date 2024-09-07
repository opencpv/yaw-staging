import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "@/components/__shared/ui/popover/action-popover";
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
const PopupModal = dynamic(() =>
  import("@/components/__shared/ui/alert-dialog").then((mod) => mod.PopupModal),
);

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
      <PopupModal
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
        onAction={handleDestruction}
        loading={isDeleting}
      />
      <PopupModal
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
        onAction={handlePublish}
        loading={isPublishing}
      />
      <ActionPopover>
        <ActionItemTrigger className="col-span-1 ml-auto p-2">
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
            <ActionItem disabled={!canEdit} tabIndex={-1}>
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
