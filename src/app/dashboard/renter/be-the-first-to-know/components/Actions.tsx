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
import CriteriaStatus from "./Status";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useDeleteSearchCriteria } from "../services";
import slugify from "@/lib/utils/slugify";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

type Props = {
  criterion: SearchCriteria;
};

const Actions = ({ criterion }: Props) => {
  const router = useRouter();
  const { user } = useAppStore();
  const { setCriterion, setActiveSlide } = BTFTKStepsStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const [BTFTKEditSteps] = useLocalStorage<
    { criterion: number; activeSlide: number }[]
  >("btftk-edit-steps", []);

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

  const handleView = () => {
    router.push(
      `/dashboard/renter/be-the-first-to-know/${slugify(
        criterion?.title?.toLowerCase() as string,
      )}/qkMM9hHt7-${criterion.id}-qKpgw==`,
    );
  };

  const handleActiveSlideEdit = useCallback(() => {
    router.replace(
      `/dashboard/renter/be-the-first-to-know/manage-criteria/edit/LS6pI-${criterion.id}-LWIKyOgnw==`,
    );
    setActiveSlide(
      BTFTKEditSteps?.find((step) => step.criterion === criterion?.id)
        ?.activeSlide ?? 1,
    );
  }, [criterion?.id, BTFTKEditSteps, setActiveSlide, router]);

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
            onClick={handleView}
            disabled={
              (criterion.matched_properties &&
                criterion.matched_properties.length <= 0) ||
              criterion.matched_properties === null
            }
          >
            <MdOutlineRemoveRedEye />
            View
          </ActionItem>

          <ActionItem
            onClick={() => {
              setCriterion(criterion);
              handleActiveSlideEdit();
            }}
            disabled={
              criterion.is_active ||
              (criterion.matched_properties !== null &&
                criterion.matched_properties.length > 0)
            }
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
