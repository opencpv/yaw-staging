import styles from "./index.module.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LinkButton } from "@/components/__shared/ui/button";
import CaJoinUsIconLeft from "../components/icons/CaJoinUsIconLongLeft";
import Loader from "@/components/__shared/ui/loader";
const JobApplicationForm = dynamic(
  () => import("../components/JobApplicationForm"),
  {
    loading: () => <Loader />,
  },
);
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));

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
            <LinkButton
              variant={"ghost"}
              size="sm"
              color="accent"
              href="/join-us/open-positions"
            >
              <CaJoinUsIconLeft />
              Go back
            </LinkButton>
            <h2
              className="fade-in-top-slight capitalize text-white"
              style={{ animationDelay: "0.3s" }}
            >
              Resume Bank
            </h2>
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
