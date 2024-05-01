import Image from "next/image";
import JoinUsButtons from "../../components/JoinUsButtons";
import styles from "./index.module.css";
import Link from "next/link";

function JobCantFindCard() {
  return (
    <div
      className="flex h-full w-full cursor-pointer flex-col justify-between rounded-xl border-[1px] border-shade-50 bg-white pb-4 hover:scale-[1.02]"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="flex h-full flex-col justify-between gap-6 ">
        <div className="flex h-full items-center justify-center">
          <div className="flex aspect-square w-[175px] items-center justify-center  rounded-full border-[1px] border-shade-50 bg-white">
            <p className={`text-[3.0625rem] font-bold ${styles.question_mark}`}>
              ?
            </p>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-8 px-4">
          <div className="flex flex-col gap-2">
            <p className="text-[1.25rem] font-semibold">
              Can&apos;t find your position?
            </p>
            <p className="overflow-ellipsis leading-[22.4px] text-shade-200  ">
              We will get back to you when the position is available. Leave your
              resume with us.{" "}
            </p>
            <p className="text-[#333]">
              Click on the button below to submit your resume.
            </p>
          </div>
          <Link
            href={"/join-us/open-positions/resume-bank"}
            className="h-full w-full"
          >
            <JoinUsButtons
              variant="text-yellow"
              content="Resume Bank"
              icon
              iconType="arrow-right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCantFindCard;
