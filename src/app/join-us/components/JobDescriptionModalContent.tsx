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
import { PortableText } from "next-sanity";

function JobDescriptionModalContent({ job }: any) {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`hidden-scrogllbar  flex flex-col justify-start  bg-white h-[75vh] overflow-hidden
       `}
      >
        <div className={`relative z-[1001] `}>
          <div className="absolute right-[40px] top-[30px] z-[2001] flex items-center gap-1">
            <p className="text-xs text-shade-300">Share</p>
            <Share
              url={`https://rentrightgh.com${pathname}`}
              title={job?.title}
              className="text-neutral-800"
            />
          </div>
          <div className="relative mt-2 flex flex-col gap-3 rounded-2xl border-[1px] border-shade-50 bg-[#FAFAFA] px-4 lg:px-8 py-2">
            <div className="download flex flex-col gap-1">
              <p className="border-b-[1px] border-shade-50 py-3 text-[1.5rem] font-semibold text-shade-300">
                <span className="capitalize">{job?.title} ggg</span>
              </p>
              <p className="hidden-scrollbar h-[70vh]  overflow-y-scroll text-shade-300 pt-3">
                <PortableText value={job?.description} />
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
      </div>
    </>
  );
}

export default JobDescriptionModalContent;
