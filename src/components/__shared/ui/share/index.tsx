"use client";
import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import ShareModalBody from "./ShareModalBody";
import { cn } from "@/lib/utils";
import CopyButton from "./copy-button";
import dynamic from "next/dynamic";

const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);
/**
 * Allows users to share the page via a modal
 */
const Share = ({
  title,
  url,
  className,
  classNames,
  label = "Share",
  hideLabel,
  children,
  size = 18,
}: ShareDataProps) => {
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <Modal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        header={<ShareModalHeader title={title as string} />}
        body={<ShareModalBody url={location.href || url} title={title} />}
        size="lg"
      />
      <button
        className={cn(
          "flex items-center gap-3 text-neutral-800",
          classNames?.base,
          className,
        )}
        onClick={onOpen}
      >
        {children || (
          <>
            <p
              className={cn(
                "text-sm font-[500]",
                {
                  hidden: hideLabel,
                },
                classNames?.label,
              )}
            >
              {label}
            </p>

            <IoIosShareAlt size={size} className={cn(classNames?.icon)} />
          </>
        )}
      </button>
    </>
  );
};

const ShareModalHeader = ({ title }: { title: string }) => {
  return (
    <div className="space-y-3 border-b pb-2">
      <h1 className="text-2xl font-[700]">Share</h1>
      <section className="flex flex-wrap items-center justify-between gap-5 pt-3">
        <h5 className="truncate" title={title}>
          {title}
        </h5>
        <CopyButton />
      </section>
    </div>
  );
};

export default Share;
