import styles from "../index.module.css";
import JobCard from "./components/JobCard";
import JobCantFindCard from "./components/JobCantFindCard";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { JOBS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { cn } from "@/lib/utils";
import { JobType } from "../types";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LinkButton } from "@/components/__shared/ui/button";
import CaJoinUsIconLeft from "./components/icons/CaJoinUsIconLongLeft";
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));

export const metadata: Metadata = {
  title: "Open Positions",
  description: "", // tentative
};

const Page = async () => {
  const jobsResponse = await loadQuery<SanityDocument[]>(JOBS_QUERY);
  const jobsData = jobsResponse.data || [];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className={`flex h-[432px] w-full shrink-0 flex-col items-center justify-center gap-6 ${styles.open_positions_header} !bg-cover`}
        >
          <h1
            className="fade-in-top-slight order-2 text-[1.5625rem] font-semibold capitalize text-white lg:order-1 lg:text-[1.9375rem]"
            style={{ animationDelay: "0.3s" }}
          >
            Open Positions
          </h1>

          <div className="order-1 flex flex-col items-center justify-center gap-x-14 gap-y-6 lg:order-2 lg:flex-row">
            <LinkButton
              variant={"ghost"}
              size="sm"
              color="accent"
              href="/join-us"
            >
              <CaJoinUsIconLeft />
              Go back
            </LinkButton>
            <LinkButton
              variant={"outline"}
              color="accent"
              href="/join-us/open-positions/resume-bank"
            >
              Resume Bank
            </LinkButton>
          </div>
        </div>
        <section className="wrapper flex w-full flex-col gap-6 px-5 lg:mt-10">
          <h2 className="font-semibold text-shade-300">Available Positions</h2>
          <div
            className={cn("grid grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-10", {
              hidden: jobsData.length === 0,
            })}
          >
            {jobsData.map((job: any) => (
              <div className="col-span-3 w-full md:col-span-1" key={job._id}>
                <Suspense>
                  <JobCard job={job} jobs={jobsData as unknown as JobType[]} />
                </Suspense>
              </div>
            ))}
            <div className="col-span-3 h-full w-full md:col-span-1">
              <JobCantFindCard />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
