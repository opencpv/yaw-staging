
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
import { useDeleteListing } from "../services";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { getListingProps } from "@/lib/enum";
import { ListingStepsStore } from "@/store/dashboard/ListingStepsStore";
import { PiArrowLineUp } from "react-icons/pi";

type Props = {
  listing: Property;
};

const Actions = (props: Props) => {
  const router = useRouter();
  const { user } = useAppStore();
  const { listing, setListing, setActiveSlide } = ListingStepsStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const [ListingEditSteps] = useLocalStorage<
    { listing: number; activeSlide: number }[]
  >("listing-edit-steps", []);

  const {
    mutate: deleteListing,
    isPending: isMutating,
    isSuccess,
  } = useDeleteListing();

  const handleDestruction = () => {
    deleteListing({ id: props.listing.id, owner_uid: user?.id as string });

    if (isSuccess) {
      onClose();
    }
  };

  const handleView = () => {
    listing?.is_published && router.push(getListingProps(props.listing, user as UserType)?.href,
    );
  };

  const handlePublish = () => {

  }

  const handleEdit = useCallback(() => {
    if (listing?.is_suspended !== true){
      setListing(listing);
      router.replace(
        `/dashboard/lister/overview/edit/012${props.listing?.id}`,)
      setActiveSlide(
        ListingEditSteps?.find((step) => step.listing === listing?.id)
          ?.activeSlide ?? 1,
      );
    }
  }, [listing, ListingEditSteps, props.listing?.id, setActiveSlide, router, setListing]);

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={`Are you sure you want to delete "${listing?.property_name}" ?`}
        handleDestruction={handleDestruction}
        loading={isMutating}
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
          <ActionItem
            onClick={handleView}
            disabled={listing?.is_complete !== true}
          >
            <PiArrowLineUp />
            {listing?.is_published ? "Unpublish" : "Publish"}
          </ActionItem>
          <ActionItem
            onClick={handleView}
            disabled={listing?.is_complete === false}
          >
            <MdOutlineRemoveRedEye />
            View
          </ActionItem>

          <ActionItem
            onClick={() => {
              handleEdit();
            }}
            disabled={listing?.is_suspended as boolean}
          >
            <MdOutlineEdit />
            Edit
          </ActionItem>
          <ActionItem onClick={onOpen}>
            <FiTrash2 />
            Delete
          </ActionItem>
        </ActionContent>
      </ActionPopover>
    </>
  );
};

export default Actions;
