"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button, Link } from "@nextui-org/react";
import JoinUsButtons from "./JoinUsButtons";
import ModalCloseIcon from "@/components/__shared/ui/modals/ModalCloseIcon";
import { HiOutlineDownload } from "react-icons/hi";
import { demoJob } from "./demo-job-description";
import Share from "@/components/__shared/ui/share/Share";
import downloadPdf from "@/lib/utils/downloadPdf";
import { usePathname } from "next/navigation";

function JobDescriptionModalContent({ job }: any) {
  const pathname = usePathname();
  return (
    <>
     
      <div
        className={`hidden-scrollbar  overflow-y-scroll bg-white
       `}
      >
        <div className={`relative z-[1001] p-4`}>
          <div className="absolute right-[35px] top-[10px] flex items-center gap-2">
            <p className="text-xs">Share</p>
            <Share
              url={`https://rentrightgh.com${pathname}`}
              title={job?.title}
              className="text-neutral-800"
            />
          </div>
          <div className="relative mt-10 flex flex-col gap-3 rounded-2xl border-[1px] border-shade-50 bg-[#FAFAFA] px-8 py-2">
            <div className="download flex flex-col gap-3">
              <p className="border-b-[1px] border-shade-50 py-3 text-[1.5rem] font-semibold text-shade-300">
                JOB DESCRIPTION ( <span className="capitalize"
                >{job?.title} </span>)
              </p>
              <p className="hidden-scrollbar   overflow-y-scroll text-shade-300">
                {demoJob}
              </p>
            </div>
            <div className="sticky bottom-0 grid h-[45px] grid-cols-2 gap-1 bg-white pb-5">
              <Button
                onClick={() => downloadPdf("Rentright Job", "download")}
                className="bg-secondary-500 text-[1rem] font-semibold text-shade-300 "
              >
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

        {/* <Dialog.Close asChild>
          <button
            className="absolute right-[20px] top-[15px] z-[4000] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <ModalCloseIcon />
          </button>
        </Dialog.Close> */}
      </div>
    </>
  );
}

export default JobDescriptionModalContent;
