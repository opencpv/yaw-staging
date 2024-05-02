"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button, Link } from "@nextui-org/react";
import JoinUsButtons from "./JoinUsButtons";
import ModalCloseIcon from "@/components/__shared/ui/modals/ModalCloseIcon";
import { HiOutlineDownload } from "react-icons/hi";
import { PortableText } from "next-sanity";

type Props = {
  description: any;
};
export default function JobDescriptionButton({ description }: Props) {
  const [animation, setAnimation] = useState(false);

  const { user } = useAppStore();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          className={`h-[52px] rounded-lg px-[2.5rem]  py-[0.94rem] font-semibold ${"max-w-[198px] bg-[#DDB771] text-white"} gap-2.5 `}
        >
          Job Description
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-modalOverlay " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow hidden-scrollbar fixed left-[50%] top-[50%] z-[1000] h-[85vh] max-h-[786px] w-[90vw] max-w-[784px] translate-x-[-50%] ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}
        >
          <div className={`relative z-[1001] p-4`}>
            <div className="relative mt-10 flex flex-col gap-3 rounded-2xl border-[1px] border-shade-50 bg-[#FAFAFA] px-8 py-2">
              <p className="border-b-[1px] border-shade-50 py-3 text-[1.5rem] font-semibold text-shade-300">
                JOB DESCRIPTION
              </p>
              <div className="hidden-scrollbar  overflow-y-scroll text-shade-300">
                <PortableText value={description} />
              </div>
              <div className="sticky bottom-2 grid h-[40px] grid-cols-2 gap-1 pb-5">
                <Button className="bg-secondary-500 text-[1rem] font-semibold text-shade-300 ">
                  Download
                  <HiOutlineDownload size="24" color="#3F3F46" />
                </Button>
                <Link
                  href="/join-us/open-positions/application"
                  className="w-full"
                >
                  <Button className="w-full bg-[#DDB771] text-[1rem] font-semibold text-white">
                    Apply
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-[20px] top-[15px] z-[4000] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <ModalCloseIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
