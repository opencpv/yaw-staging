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
import CriteriaStatus from "./Status";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useDeleteSearchCriteria, useFetchCriteriaMatches } from "../services";
import slugify from "@/lib/utils/slugify";
import BTFTKModal from "../steps/BTFTKModal";

type Props = {
  criterion: SearchCriteria;
};

const Actions = ({ criterion }: Props) => {
  const { user } = useAppStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const { data: matchedListings } = useFetchCriteriaMatches({
    userId: user?.id as string,
    criterion: criterion,
  });

  const {
    mutate: deleteCriteria,
    isPending: isMutating,
    isSuccess,
  } = useDeleteSearchCriteria();

  const handleDestruction = () => {
    deleteCriteria({ id: criterion.id, renter_id: user?.id as string });

    if (isSuccess) {
      onClose();
    }
  };

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this search criterion?"
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
            <CriteriaStatus criterion={criterion} />
          </ActionItem>
          <ActionItem
            disabled={matchedListings?.length! <= 0}
            href={`/dashboard/renter/be-the-first-to-know/qkMM9hHt7qKpgw==-${
              criterion.id
            }/${slugify(criterion?.title?.toLowerCase() as string)}`}
          >
            <MdOutlineRemoveRedEye />
            View
          </ActionItem>

          <BTFTKModal disabled={criterion.is_active}>
            <ActionItem disabled={criterion.is_active}>
              <MdOutlineEdit />
              Edit
            </ActionItem>
          </BTFTKModal>
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
