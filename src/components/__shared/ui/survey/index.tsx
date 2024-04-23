"use client";
import React from "react";
import Button from "../button/Button";
import Modal from "../modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import CloseModalIcon from "../icons/CloseModalIcon";

type Props = {};

const Survey = (props: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Modal
        header={<ModalHeader />}
        body={<ModalBody />}
        footer={<ModalFooter />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        closeButton={<CloseModalIcon />}
        size="5xl"
      />
      <Button
        color="accent"
        className="fixed -right-10 top-96 z-10 rotate-90 rounded-sm rounded-bl-2xl text-xl"
        onClick={onOpen}
      >
        Survey
      </Button>
    </>
  );
};

export default Survey;

const ModalHeader = () => {
  return <p className="font-[600] text-primary-200">Heading</p>;
};

const ModalBody = () => {
  return (
    <p className="font-[600] text-primary-200">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quam incidunt
      commodi quibusdam fuga consequuntur neque. Dignissimos obcaecati omnis
      unde, vero harum dolore? Laudantium eum rerum soluta earum maxime! Iusto?
    </p>
  );
};

const ModalFooter = () => {
  return <p className="font-[600] text-primary-200">Footer</p>;
};
