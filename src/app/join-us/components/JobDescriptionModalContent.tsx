"use client";
import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import Share from "@/components/__shared/ui/share/Share";
import downloadPdf from "@/lib/utils/downloadPdf";
import { useSearchParams } from "next/navigation";
import { PortableText } from "next-sanity";
import { useQuery } from "@tanstack/react-query";
import PropertiesEmptyState from "@/app/properties/components/PropertiesEmptyState";
import FetchingStates from "@/components/__shared/ui/data_fetching/FetchingStates";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import Button from "@/components/__shared/ui/button/Button";

function JobDescriptionModalContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams?.get("id");

  const {
    data: job,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["job"],
    queryFn: async () => {
      const res = await fetch(`${location.origin}/api/jobs/${jobId}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      return data;
    },
  });

  return (
    <>
      <div
        className={`hidden-scrollbar flex h-[75vh] flex-col justify-start overflow-hidden bg-white
       `}
      >
        <div className={`relative z-[1001] `}>
          <FetchingStates
            data={job}
            error={error}
            isLoading={isLoading}
            emptyStateComponent={<PropertiesEmptyState />}
            errorComponent={
              <SomethingWentWrong
                className="mt-0 h-fit"
                onTryAgain={() => {
                  refetch();
                }}
              />
            }
          />
          {job && (
            <>
              <div className="absolute right-[40px] top-[30px] z-[2001] hidden items-center gap-1 lg:flex">
                <Share
                  url={`${location.href}`}
                  title={job?.title}
                  className="text-lg text-neutral-800"
                />
              </div>
              <div className="mt-2 flex flex-col gap-3 rounded-2xl border-[1px] border-shade-50 bg-[#FAFAFA] px-4 py-2 lg:px-8">
                <div className="download flex flex-col gap-1">
                  <p className="border-b-[1px] border-shade-50 py-3 text-[1.5rem] font-semibold text-shade-300">
                    <span className="capitalize">{job?.title}</span>
                  </p>

                  <div className="hidden-scrollbar h-[70vh] overflow-y-scroll pb-[120px] pt-3 text-shade-300">
                    <PortableText value={job?.description} />
                  </div>
                </div>
                <div className="sticky bottom-0 grid  grid-cols-2 gap-3 bg-[#FAFAFA] pb-2 pt-2">
                  <Button
                    color="accent"
                    onClick={() => downloadPdf("Rentright Job", "download")}
                    className="w-full"
                  >
                    Download
                    <HiOutlineDownload size="24" color="white" />
                  </Button>
                  <Button
                    color="primary"
                    href="/join-us/open-positions/application"
                    className="w-full"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default JobDescriptionModalContent;
