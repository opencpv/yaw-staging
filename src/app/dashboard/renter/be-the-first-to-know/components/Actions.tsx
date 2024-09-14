import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "@/components/__shared/ui/popover/action-popover";
import CriteriaStatus from "./Status";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useDeleteSearchCriteria } from "../services";
import slugify from "@/lib/utils/slugify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader";
const PopupModal = dynamic(() =>
  import("@/components/__shared/ui/alert-dialog").then((mod) => mod.PopupModal),
);

const BTFTKModal = dynamic(() => import("./steps/BTFTKModal"), {
  ssr: false,
  loading: () => <Loader position="default" size="sm" />,
});

type Props = {
  criterion: SearchCriteria;
};

const Actions = ({ criterion }: Props) => {
  const router = useRouter();
  const { user } = useAppStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const {
    mutate: deleteCriteria,
    isPending: isMutating,
    isSuccess,
  } = useDeleteSearchCriteria();

  const canView = criterion.matched_properties?.length;
  const canEdit = criterion.matched_properties?.length === undefined;

  const handleDestruction = () => {
    deleteCriteria({ id: criterion.id, renter_id: user?.id as string });

    if (isSuccess) {
      onClose();
    }
  };

  const handleView = () => {
    canView &&
      router.push(
        `/dashboard/renter/be-the-first-to-know/${slugify(
          criterion?.title?.toLowerCase() as string,
        )}/qkMM9hHt7-${criterion.id}-qKpgw==`,
      );
  };

  return (
    <>
      <PopupModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={`Are you sure you want to delete "${criterion.title || "[No Title]"}" ?`}
        onAction={handleDestruction}
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
          <ActionItem className="px-4 py-2 lg:hidden">
            <CriteriaStatus criterion={criterion} />
          </ActionItem>
          <ActionItem onClick={handleView} disabled={!canView}>
            <MdOutlineRemoveRedEye />
            View
          </ActionItem>

          <BTFTKModal variant="edit" criterion={criterion} disabled={!canEdit}>
            <ActionItem disabled={!canEdit}>
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
