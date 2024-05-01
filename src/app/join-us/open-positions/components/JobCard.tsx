"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button, Link, useDisclosure } from "@nextui-org/react";
import ModalCloseIcon from "@/components/__shared/ui/modals/ModalCloseIcon";
import { HiOutlineDownload } from "react-icons/hi";
import Image from "next/image";
import { JobType } from "../../types";
import JobDescriptionButton from "../../components/JobDescriptionButton";
import JobDescriptionModalContent from "../../components/JobDescriptionModalContent";
import Modal from "@/components/__shared/ui/modals/Modal";

type Props = {
  job: JobType;
};

export default function JobCard({ job }: Props) {
  const [animation, setAnimation] = useState(false);

  const { user } = useAppStore();

  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Modal
        // header={<div className="h-20"></div>}
        body={<JobDescriptionModalContent job={job} />}
        // footer={<div className="h-20"></div>}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        onClose={onClose}
        closeButton={
          <div className="h-[25px] w-[25px]">
            <ModalCloseIcon />
          </div>
        }
        size="5xl"
        className=" h-fit  max-h-[85vh] w-[90vw] max-w-[784px]  "
      />

      <button
        onClick={onOpen}
        className="w-full cursor-pointer appearance-none rounded-xl border-[1px] border-shade-50 bg-white pb-4 transition-all hover:scale-[1.02]"
      >
        <div className="flex flex-col items-start  gap-6">
          <div className="relative aspect-[398/306] w-full overflow-hidden  rounded-t-xl lg:aspect-[542/306]">
            <Image
              src={"/assets/images/joinus/creative-hand.jpeg"}
              alt={job.title}
              fill
              objectFit="cover"
            />
          </div>{" "}
          <div className="flex flex-col gap-8 px-4">
            <div className="flex flex-col gap-2">
              <p className=" text-left text-[1.25rem] font-semibold">
                {job.title}
              </p>
              <p className="max-h-[45px] max-w-[371px] overflow-hidden overflow-ellipsis  text-left leading-[22.4px] text-shade-200 ">
                {job.description}
              </p>
            </div>
            <JobDescriptionButton onClick={onOpen} />
          </div>
        </div>
      </button>
    </>
  );
}
