import JobApplicationForm from "../components/JobApplicationForm";
import styles from "./index.module.css";
import JoinUsButtons from "../../components/JoinUsButtons";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Footer = dynamic(() => import("@/components/__shared/ui/footer/Footer"));

export const metadata: Metadata = {
  title: "Resume Bank",
  description: "", // tentative
};

function Page() {
  return (
    <>
      <div className="relative flex flex-col bg-white lg:flex-row">
        <div
          className={`${styles.left_pic} bottom-0 left-0 top-0 flex h-[230px] w-full shrink-0 grow-0 items-center justify-center !bg-cover lg:sticky lg:h-[100vh] lg:basis-[40%]`}
        >
          <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:hidden">
            <JoinUsButtons
              href="/join-us/open-positions"
              variant="text-yellow-accent"
              content="Go back"
              icon
              iconType="arrow-left"
              reverseIcon
            />
            <h2 className="capitalize text-white">Resume Bank</h2>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <Suspense>
            <JobApplicationForm variant="resume" />
          </Suspense>
        </div>
      </div>
      <Footer className="mt-0 sm:mt-0" />
    </>
  );
}

export default Page;
