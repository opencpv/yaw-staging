import styles from "./index.module.css";
import JobApplicationForm from "../components/JobApplicationForm";
import JoinUsButtons from "../../components/JoinUsButtons";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Footer = dynamic(() => import("@/components/__shared/ui/footer/Footer"));

export const metadata: Metadata = {
  title: "Application Form",
  description: "", // tentative
};

function Page() {
  return (
    <>
      <div className="relative flex flex-col bg-white lg:flex-row">
        <div
          className={`${styles.left_pic} bottom-0 left-0 top-0 flex h-[332px] w-full shrink-0 grow-0 items-center justify-center !bg-cover lg:sticky lg:h-[100vh] lg:basis-[40%]`}
        >
          <div className="flex flex-col items-center justify-center gap-4 lg:hidden lg:flex-row">
            <JoinUsButtons
              variant="text-yellow-accent"
              content="Go back"
              icon
              href="/join-us/open-positions"
              iconType="arrow-left"
              reverseIcon
            />

            <p className="text-25 font-semibold capitalize text-white">
              Application
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <Suspense>
            <JobApplicationForm variant="application" />
          </Suspense>
        </div>
      </div>
      <Footer className="mt-0 sm:mt-0" />
    </>
  );
}

export default Page;
