"use client";
import React from "react";
import Share from "@/components/__shared/ui/share";
import { useSearchParams } from "next/navigation";
import { PortableText } from "next-sanity";
import Button from "@/components/__shared/ui/button/Button";
import { JobType } from "../types";
import { TypedObject } from "sanity";
import EmptyState from "@/components/__shared/ui/states/EmptyState";
import DownloadJobDescriptionBtn from "./ui/DownloadJobDescriptionBtn";

type Props = {
  jobs: JobType[];
};

function JobDescriptionModalContent({ jobs }: Props) {
  const searchParams = useSearchParams();
  const jobId = searchParams?.get("id");
  const job = jobs.find((job) => job._id === jobId);

  return (
    <div
      className={`hidden-scrollbar flex h-[75vh] flex-col justify-start overflow-hidden bg-white`}
    >
      <div className={`relative z-[1001]`}>
        {job ? (
          <>
            <div className="absolute right-[40px] top-[30px] z-[2001] hidden items-center gap-1 lg:flex">
              <Share title={job?.title} />
            </div>
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border-[1px] border-shade-50 bg-[#FAFAFA] px-4 py-2 lg:px-8">
              <div className="job-download flex flex-col gap-1">
                <h2 className="py-3 font-semibold capitalize text-shade-300">
                  {job?.title}
                </h2>

                <hr className="w-full border border-shade-50" />

                <div className="hidden-scrollbar h-[70vh] overflow-y-scroll pb-[120px] pt-3 text-shade-300">
                  <PortableText
                    value={
                      job?.description as unknown as TypedObject | TypedObject[]
                    }
                  />
                </div>
              </div>
              <div className="sticky bottom-0 grid grid-cols-2 gap-3 bg-[#FAFAFA] pb-2 pt-2">
                <DownloadJobDescriptionBtn job={job as JobType} />
                <Button
                  color="primary"
                  href={`/join-us/open-positions/application?job=${job.title}`}
                  className="w-full"
                >
                  Apply
                </Button>
              </div>
            </div>
          </>
        ) : (
          <EmptyState tagLine="Job Not Found" paddingBlock="md" />
        )}
      </div>
    </div>
  );
}

export default JobDescriptionModalContent;
