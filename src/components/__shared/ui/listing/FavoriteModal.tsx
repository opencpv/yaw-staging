"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineChat } from "react-icons/md";
import { Button } from "../button";
import { handleFavoriteDialogSave } from "@/components/actions";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useLocalStorage, useSessionStorage } from "@uidotdev/usehooks";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type ModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
};

const FavoriteModal = ({ isOpen, onOpenChange, onClose }: ModalProps) => {
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("contactUponFavorite");
    };
  }, []);

  return (
    <Modal
      isDismissible={false}
      header={<ModalHeader onClose={onClose} />}
      body={<ModalBody />}
      footer={<ModalFooter />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      //hideCloseButton={true}
      size="md"
    />
  );
};

const ModalHeader = ({ onClose }: { onClose: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppStore();
  const [shouldOpenModal, setShouldOpenModal] =
    useLocalStorage<boolean>("shouldOpenModal");

  const [contactUponFavorite] = useSessionStorage("contactUponFavorite", true);
  const shouldBeContacted = contactUponFavorite ? true : false;

  const handleSaveFavoriteOption = () => {
    onClose();
    toast(
      contactUponFavorite
        ? "👍 Great choice! We've noted that you're open to being contacted by your property owners. Expect to hear from them soon!"
        : "Noted! Your preference for privacy is important to us. Your property owners will not contact you unless necessary.",
    );
  };

  return (
    <>
      <span className="flex flex-wrap items-center justify-between gap-5">
        <MdOutlineChat className="shrink-0 text-xl text-primary-200 md:text-4xl" />
        <Button
          variant="outline"
          size={"sm"}
          radius={"full"}
          className="border-black text-sm hover:bg-[#E7F8F2]"
          isLoading={isLoading}
          onClick={async (e) => {
            setIsLoading(true);
            const { error } = await handleFavoriteDialogSave(
              user?.id as string,
              shouldBeContacted,
            );
            if (error) {
              toast.error(error.message);
              onClose();
              setIsLoading(false);
              return;
            }
            setIsLoading(false);
            handleSaveFavoriteOption();
            setShouldOpenModal(!shouldOpenModal);
            localStorage.removeItem("shouldOpenModal");
          }}
        >
          Save
        </Button>
      </span>
    </>
  );
};

const ModalBody = () => {
  return (
    <p className="font-[600] text-primary-200">
      Do you want property owners to contact you when you favorite a home?
    </p>
  );
};

const ModalFooter = () => {
  const [contactUponFavorite, setContactUponFavorite] = useSessionStorage(
    "contactUponFavorite",
    true,
  );

  const handleYes = () => {
    setContactUponFavorite(true);
  };

  const handleNo = () => {
    setContactUponFavorite(false);
  };

  return (
    <div className="flex w-full items-center justify-end gap-2">
      <Button
        variant={!contactUponFavorite ? "default" : "outline"}
        color="gradient"
        className="py-6"
        onClick={handleNo}
      >
        No
      </Button>
      <Button
        variant={contactUponFavorite ? "default" : "outline"}
        color="gradient"
        className="py-6"
        onClick={handleYes}
      >
        Yes
      </Button>
    </div>
  );
};

export default FavoriteModal;
