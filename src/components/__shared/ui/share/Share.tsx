"use client";
import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import Modal from "../modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import ShareModalBody from "./ShareModalBody";
import { cn } from "@/lib/utils";

const Share = ({ title, url, className, label = "Share" }: ShareDataProps) => {
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <Modal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        header={<ShareModalHeader title={title as string} />}
        body={<ShareModalBody url={url} />}
        size="lg"
      />
      <span
        className="flex cursor-pointer items-center gap-3 text-neutral-800"
        onClick={onOpen}
      >
        <p
          className={cn(
            "text-base font-[500]",
            {
              hidden: !label,
            },
            className,
          )}
        >
          {label}
        </p>
        <IoIosShareAlt />
      </span>
    </>
  );
};

const ShareModalHeader = ({ title }: { title: string }) => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-[700]">Share</h1>
      <h2 className="text-base font-semibold">{title}</h2>
    </div>
  );
};

export default Share;
