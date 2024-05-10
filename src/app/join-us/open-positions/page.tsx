import JoinUsButtons from "../components/JoinUsButtons";
import styles from "../index.module.css";
import JobCard from "./components/JobCard";
import JobCantFindCard from "./components/JobCantFindCard";
import Link from "next/link";
import Footer from "@/components/__shared/ui/footer/Footer";

import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { JOBS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";

const Page = async () => {
  const jobsResponse = await loadQuery<SanityDocument[]>(JOBS_QUERY);
  const jobsData = jobsResponse.data || [];
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="flex w-full flex-col items-center  justify-center ">
        <div
          className={`flex h-[432px] w-full shrink-0  flex-col items-center justify-center gap-1  lg:gap-6
               ${styles.open_positions_header} !bg-cover`}
        >
          <p className="order-2 text-[1.5625rem] font-semibold capitalize text-white lg:order-1 lg:text-[1.9375rem]">
            Open Positions
          </p>

          <div className="order-1 flex flex-col items-center justify-center gap-4 lg:order-2 lg:flex-row">
            <Link href={"/join-us"}>
              <JoinUsButtons
                variant="text-yellow-accent"
                content="Go back"
                icon
                iconType="arrow-left"
                reverseIcon
              />
            </Link>
            <Link
              href={"/join-us/open-positions/resume-bank"}
              className="hidden lg:flex"
            >
              <JoinUsButtons
                variant="outline-yellow-accent"
                content="Resume Bank"
              />
            </Link>
          </div>
        </div>
        <div className="mt-10 flex w-full  max-w-[1728px] flex-col gap-3 px-5 lg:mt-20 lg:gap-6 2xl:px-0">
          <p className="text-20 font-semibold text-shade-300 lg:text-25">
            Available Positions
          </p>
          <div className="grid grid-cols-3 gap-x-5 gap-y-5 pb-8 lg:gap-y-10">
            {jobsData.map((r: any, index: number) => (
              <div className="col-span-3 w-full md:col-span-1" key={index}>
                <JobCard job={r} />
              </div>
            ))}
            <div className="col-span-3 h-full w-full md:col-span-1">
              <JobCantFindCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
