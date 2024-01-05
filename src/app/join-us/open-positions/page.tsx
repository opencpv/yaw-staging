import Image from "next/image";
import JoinUsButtons from "../components/JoinUsButtons";
import styles from "../index.module.css";
import JobCard from "./components/JobCard";
import { JobType } from "../types";
import JobCantFindCard from "./components/JobCantFindCard";
import Link from "next/link";

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

function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-[1728px] w-full">
        <div
          className={`flex items-center justify-center w-full max-w-[1728px] h-[432px] flex-col gap-1 lg:gap-6  shrink-0
               ${styles.open_positions_header} !bg-cover`}>
          <p className="capitalize text-[1.5625rem] lg:text-[1.9375rem] text-white font-semibold order-2 lg:order-1">
            Open Positions
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 order-1 lg:order-2">
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
              className="hidden lg:flex">
              <JoinUsButtons
                variant="outline-yellow-accent"
                content="Resume Bank"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3  lg:gap-6 mt-10 lg:mt-20 w-full px-5 2xl:px-0">
          <p className="text-shade-300 text-20 lg:text-25 font-semibold">
            Available Positions
          </p>
          <div className="grid grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-10">
            {demoJobData.map((r: JobType, index: number) => (
              <div className="w-full col-span-3 lg:col-span-1" key={index}>
                <JobCard job={r} />
              </div>
            ))}
            <div className="w-full col-span-3 lg:col-span-1 h-full">
              <JobCantFindCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
