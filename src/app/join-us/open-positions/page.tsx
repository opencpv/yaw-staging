import Image from "next/image";
import JoinUsButtons from "../components/JoinUsButtons";
import styles from "../index.module.css";
import JobCard from "./components/JobCard";
import { JobType } from "../types";
import JobCantFindCard from "./components/JobCantFindCard";
import Link from "next/link";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { JOBS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
const demoJobData = [
  {
    pic: "",
    title: "Graphic Designer",
    description:
      "Create visually appealing designs for various digital and print media. Proficient in Adobe Creative Suite and experienced in branding, layout design, and illustration.",
  },
  {
    pic: "",
    title: "UI/UX Designer",
    description:
      "Design user interfaces and experiences for web and mobile applications. Conduct user research, create wireframes, and collaborate with development teams to ensure a seamless user experience.",
  },
  {
    pic: "",
    title: "Motion Graphics Artist",
    description:
      "Produce animated content for videos, websites, and social media. Strong skills in motion design, video editing, and knowledge of animation tools such as After Effects.",
  },
  {
    pic: "",
    title: "Brand Identity Designer",
    description:
      "Develop and maintain brand identities for companies. Create logos, color schemes, and visual elements that convey a consistent brand image across various platforms.",
  },
  // Add more jobs as needed
];

const Page = async () => {
  const jobsResponse = await loadQuery<SanityDocument[]>(JOBS_QUERY);
  const jobsData = jobsResponse.data || [];
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1728px] flex-col items-center justify-center">
        <div
          className={`flex h-[432px] w-full max-w-[1728px] shrink-0 flex-col items-center justify-center gap-1  lg:gap-6
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
        <div className="mt-10 flex w-full  flex-col gap-3 px-5 lg:mt-20 lg:gap-6 2xl:px-0">
          <p className="text-20 font-semibold text-shade-300 lg:text-25">
            Available Positions
          </p>
          <div className="grid grid-cols-3 gap-x-5 gap-y-5 pb-8 lg:gap-y-10">
            {jobsData.map((r: any, index: number) => (
              <div className="col-span-3 w-full lg:col-span-1" key={index}>
                <JobCard job={r} />
              </div>
            ))}
            <div className="col-span-3 h-full w-full lg:col-span-1">
              <JobCantFindCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
