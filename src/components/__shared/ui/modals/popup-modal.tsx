import { Button } from "@/components/__shared/ui/button";
import React from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../alert-dialog";
import dynamic from "next/dynamic";
const AlertDialog = dynamic(() =>
  import("@/components/__shared/ui/alert-dialog").then(
    (mod) => mod.AlertDialog,
  ),
);

type ModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  label?: string;
  handleAction: () => void;
  loading?: boolean;
};

const PopupModal = ({
  isOpen,
  onOpenChange,
  onClose,
  label,
  handleAction,
  loading,
}: ModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Notice</AlertDialogTitle>
          <AlertDialogDescription>{label}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button
              className="bg-neutral-200 text-neutral-500"
              onClick={onClose}
            >
              No
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={handleAction}
              isLoading={loading}
            >
              Yes
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PopupModal;
