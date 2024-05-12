import Link from "next/link";
import JobApplicationForm from "../components/JobApplicationForm";
import styles from "./index.module.css";
import JoinUsButtons from "../../components/JoinUsButtons";

function Page() {
  return (
    <div>
      <div className="relative flex flex-col bg-white lg:flex-row">
        <div
          className={`${styles.left_pic} bottom-0 left-0 top-0 flex h-[192px] w-full shrink-0 grow-0 items-center justify-center !bg-cover lg:sticky lg:h-[100vh]  lg:basis-[40%] `}
        >
          <div className="flex flex-col items-center justify-center gap-4 lg:hidden lg:flex-row">
            <JoinUsButtons
              href="/join-us/open-positions"
              variant="text-yellow-accent"
              content="Go back"
              icon
              iconType="arrow-left"
              reverseIcon
            />
            <p className="text-25 font-semibold capitalize text-white ">
              Resume Bank
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <JobApplicationForm variant="resume" />
        </div>
      </div>
    </div>
  );
}

export default Page;
