"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button, Link } from "@nextui-org/react";
import JoinUsButtons from "./JoinUsButtons";
import ModalCloseIcon from "@/components/__shared/ui/modals/ModalCloseIcon";
import { HiOutlineDownload } from "react-icons/hi";
import JobDescriptionModalContent from "./JobDescriptionModalContent";

type Props = {
  onClick: any;
};
export default function JobDescriptionButton({  onClick }: Props) {
  const [animation, setAnimation] = useState(false);

  const { user } = useAppStore();

  return (
    <Button
      onClick={onClick}
      className={`h-[52px] rounded-lg px-[2.5rem]  py-[0.94rem] font-semibold ${"max-w-[198px] bg-[#DDB771] text-white"} gap-2.5 `}
    >
      Job Description
    </Button>
  );
}
