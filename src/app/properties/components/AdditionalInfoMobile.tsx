"use client";
import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/ui/modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import AdditionalInfo from "./AdditionalInfo";

type Props = {
  listing: Property;
};

const AdditionalInfoMobile = ({ listing }: Props) => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        body={<AdditionalInfo listing={listing} />}
        size={"2xl"}
        classNames={{ body: "py-10" }}
      />

      <Button
        color="primary"
        className="fixed bottom-5 left-[50%] translate-x-[-50%] z-10 min-w-[90%] mx-auto md:hidden"
        onClick={onOpen}
      >
        Additional Information
      </Button>
    </>
  );
};

export default AdditionalInfoMobile;
