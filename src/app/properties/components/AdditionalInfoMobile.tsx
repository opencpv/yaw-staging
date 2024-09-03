"use client";
import { Button } from "@/components/__shared/ui/button/Button";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import dynamic from "next/dynamic";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

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
        size={"full"}
        className="py-10 md:hidden"
      />

      <Button
        className="fixed bottom-5 left-[50%] z-10 mx-auto min-w-[90%] translate-x-[-50%] sm:min-w-[60%] md:hidden"
        onClick={onOpen}
      >
        Additional Information
      </Button>
    </>
  );
};

export default AdditionalInfoMobile;
