"use client";
import React, { Suspense } from "react";
import ModalCloseIcon from "@/components/__shared/ui/modals/modal-close-icon";
import Image from "next/image";
import { JobType } from "../../types";
import JobDescriptionButton from "../../components/JobDescriptionButton";
import JobDescriptionModalContent from "../../components/JobDescriptionModalContent";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
const Share = dynamic(() => import("@/components/__shared/ui/share"));
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Props = {
  job: JobType;
  jobs: JobType[];
};

export default function JobCard({ job, jobs }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const position = searchParams?.get("p");
  const jobId = searchParams?.get("id");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = () => {
    router.back();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal
        header={
          <div className="relative bottom-2 right-10 flex justify-end lg:hidden">
            <Share title={position as string} content={job.description_brief} />
          </div>
        }
        body={
          <Suspense>
            <JobDescriptionModalContent jobs={jobs} />
          </Suspense>
        }
        isOpen={position ? true : false}
        onOpenChange={handleOpenChange}
        closeButton={<ModalCloseIcon />}
        onOpenAutoFocus={(e) => e.preventDefault()}
      />

      <Link
        href={`/join-us/open-positions?${new URLSearchParams({
          p: job?.title,
          id: job?._id,
        })}`}
        scroll={false}
      >
        <div className="h-full w-full cursor-pointer appearance-none rounded-xl border-[1px] border-shade-50 bg-white pb-4 transition-all hover:scale-[1.02]">
          <div className="flex flex-col items-start gap-6 md:h-full">
            <div className="relative aspect-[398/306] h-full w-full overflow-hidden rounded-t-xl lg:aspect-[542/306]">
              <Image src={job.imgUrl} alt={job.title} fill objectFit="cover" />
            </div>{" "}
            <div className="flex flex-col gap-8 px-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="line-clamp-3 text-shade-200">
                  {job.description_brief}
                </p>
              </div>
              <JobDescriptionButton />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
