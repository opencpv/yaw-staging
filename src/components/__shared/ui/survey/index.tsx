"use client";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import Modal from "../modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import CloseModalIcon from "../icons/CloseModalIcon";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BsChatDots } from "react-icons/bs";

type Props = {};

const Survey = (props: Props) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleToggleButton = () => {
      if (window.scrollY >= 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleToggleButton);

    return () => {
      window.removeEventListener("scroll", handleToggleButton);
    };
  }, []);

  const variants = {
    open: {
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

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
      <motion.div
        variants={variants}
        animate={showButton ? "open" : "closed"}
        className="fixed -right-16 top-96 z-10 rotate-90"
      >
        <Button
          className="h-10 rounded-sm rounded-b-2xl bg-gradient-to-t from-primary-500 to-primary-400 text-xl opacity-70 hover:opacity-100"
          onClick={onOpen}
        >
          Survey
          <BsChatDots className="text-white" />
        </Button>
      </motion.div>
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
