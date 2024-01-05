import styles from "./index.module.css";
import JobApplicationForm from "../components/JobApplicationForm";
import JoinUsButtons from "../../components/JoinUsButtons";
import Link from "next/link";

function Page() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row relative">
        <div
          className={`${styles.left_pic} w-full h-[192px] lg:h-[100vh] lg:sticky top-0 left-0 bottom-0 lg:basis-[40%] shrink-0 grow-0 !bg-cover flex justify-center  items-center `}>
          <div className="lg:hidden flex flex-col lg:flex-row items-center justify-center gap-4">
            <Link href={"/join-us/open-positions"}>
              <JoinUsButtons
                variant="text-yellow-accent"
                content="Go back"
                icon
                iconType="arrow-left"
                reverseIcon
              />
            </Link>

            <p className="capitalize text-25 text-white font-semibold ">
              Application
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <JobApplicationForm variant="application" />
        </div>
      </div>
    </div>
  );
}

export default Page;
