import styles from "./index.module.css";
import JobApplicationForm from "../components/JobApplicationForm";
import JoinUsButtons from "../../components/JoinUsButtons";
import Link from "next/link";
import Footer from "@/components/__shared/ui/footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Form",
  description: "", // tentative
};

function Page() {
  return (
    <>
      <div className="relative flex flex-col bg-white lg:flex-row">
        <div
          className={`${styles.left_pic} bottom-0 left-0 top-0 flex h-[192px] w-full shrink-0 grow-0 items-center justify-center !bg-cover lg:sticky lg:h-[100vh]  lg:basis-[40%] `}
        >
          <div className="flex flex-col items-center justify-center gap-4 lg:hidden lg:flex-row">
            <Link href={"/join-us/open-positions"}>
              <JoinUsButtons
                variant="text-yellow-accent"
                content="Go back"
                icon
                iconType="arrow-left"
                reverseIcon
              />
            </Link>

            <p className="text-25 font-semibold capitalize text-white ">
              Application
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <JobApplicationForm variant="application" />
        </div>
      </div>
      <Footer className="mt-0 sm:mt-0" />
    </>
  );
}

export default Page;
