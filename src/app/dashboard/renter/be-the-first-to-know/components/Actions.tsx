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
import { useDeleteSearchCriteria } from "../services";
import slugify from "@/lib/utils/slugify";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";

type Props = {
  criterion: SearchCriteria;
};

const Actions = ({ criterion }: Props) => {
  const { user } = useAppStore();
  const { setCriterion } = BTFTKStepsStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

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
        label={`Are you sure you want to delete "${criterion.title}" ?`}
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
            disabled={
              (criterion.matched_properties &&
                criterion.matched_properties.length <= 0) ||
              criterion.matched_properties === null
            }
            href={`/dashboard/renter/be-the-first-to-know/${slugify(
              criterion?.title?.toLowerCase() as string,
            )}/qkMM9hHt7-${criterion.id}-qKpgw==`}
          >
            <MdOutlineRemoveRedEye />
            View
          </ActionItem>

          <ActionItem
            href={`/dashboard/renter/be-the-first-to-know/manage-criteria/edit/LS6pI-${criterion.id}-LWIKyOgnw==`}
            onClick={() => setCriterion(criterion)}
            disabled={criterion.is_active}
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
