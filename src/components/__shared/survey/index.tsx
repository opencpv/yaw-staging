"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import CloseModalIcon from "../ui/icons/CloseModalIcon";
import { motion } from "framer-motion";
import { RiSurveyLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Props = {};

const Survey = (props: Props) => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [showButton, setShowButton] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setTimedOut(true);
    }, 30000);
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
        pointerEvents: "none",
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
      />
      <motion.div
        variants={variants}
        animate={showButton && !timedOut ? "open" : "closed"}
        className={cn("fixed -right-16 top-96 z-10 rotate-90", {
          "pointer-events-none": !showButton || timedOut,
        })}
      >
        <Button
          className="h-10 gap-2 rounded-sm rounded-b-2xl bg-gradient-to-t from-primary-500 to-primary-400 text-xl opacity-70 hover:opacity-100"
          onClick={onOpen}
        >
          Survey
          <RiSurveyLine className="text-white" />
        </Button>
      </motion.div>
    </>
  );
};

export default Survey;

const ModalHeader = () => {
  return <p className="font-[600] text-primary-200"></p>;
};

const ModalBody = () => {
  return (
    <iframe
      className="w-full"
      height="800"
      src="https://s.surveyplanet.com/662594b3b21e771a7d4bd379"
    ></iframe>
  );
};

const ModalFooter = () => {
  return <p className="font-[600] text-primary-200"></p>;
};
