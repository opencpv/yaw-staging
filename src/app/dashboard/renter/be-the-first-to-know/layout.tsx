"use client";
import LargeButton from "../../lister/properties/components/LargeButton";
import { MdOutlineLibraryAdd } from "react-icons/md";
import ArrowLink from "@/components/__shared/ui/links/ArrowLink";
import { usePathname } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import ScrollTop from "@/components/__shared/ui/ScrollTop";
import Button from "@/components/__shared/ui/button/Button";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import FirstToKnowModal from "./steps/FirstToKnowModal";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import { fadeUp } from "@/lib/animations";

const BeTheFirstToKnowLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <main>
      <h2>Be the first to Know</h2>
      <div className="fixed bottom-10 right-5 z-30 shadow-lg">
        {pathname === "/dashboard/renter/be-the-first-to-know" && (
          <FirstToKnowModal />
        )}
      </div>
      {/* <section className="flex h-[100vh] w-full flex-col items-center justify-center">
          <Image
            src={images.SearchIcon}
            alt="search icon"
            width={214}
            height={214}
          />
          <p className="text-center text-[25px] font-semibold ">
            You have no search <br></br>criteria
          </p>
          <p className="mt-5 px-2 text-center md:px-8 lg:w-[675px]">
            Tell us what you are looking for and let RentRight do the work for
            you. Receive instant notifications when a match is found or new
            properties are listed. Give it a try, create your customized search
            criteria
          </p>
          <button className="mt-[45px] rounded-md bg-primary px-10 py-[15px] text-center font-semibold text-white">
            Add New Search Criteria{" "}
          </button>
        </section> */}
      <section className="mt-20">
        {/* <div className="flex items-center gap-5">
          <RxTarget size={50} />
          <h3 className="my-10 font-normal">All Targeted Search</h3>
        </div> */}
        {/* results found */}
        {/* <div className="mb-2 grid sm:grid-cols-1 lg:grid-cols-3">
            <div className="flex justify-between rounded-[12px] border-[1px] px-6 py-3">
              <p className="mt-1 font-semibold text-[#00763A]">
                {data.length} {data.length > 1 ? "results" : "result"} found
              </p>
              <div className="relative">
                <CaDashEyeOff />
                <div className="absolute right-[-14px] top-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-[#B71851] text-[10px] text-white">
                  20+
                </div>
              </div>
            </div>
          </div> */}
        {/* properties grid */}
        <h3
          className="mb-6"
          style={{
            display:
              pathname === "/dashboard/renter/be-the-first-to-know"
                ? "none"
                : "grid",
          }}
        >
          Search Title One
        </h3>
        <FramerWrapper {...fadeUp}>
          <div className="listing-grid">{children}</div>
        </FramerWrapper>
      </section>
      <ScrollTop />
    </main>
  );
};

export default BeTheFirstToKnowLayout;
