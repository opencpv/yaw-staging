"use client";
import LargeButton from "../properties/components/LargeButton";
import { MdOutlineLibraryAdd } from "react-icons/md";
import ArrowLink from "@/app/components/link/ArrowLink";
import { usePathname } from "next/navigation";

const BeTheFirstToKnowLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <main>
      <h2>Be the first to Know</h2>
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
          <button className="mt-[45px] rounded-md bg-[#073B3A] px-10 py-[15px] text-center font-semibold text-white">
            Add New Search Criteria{" "}
          </button>
        </section> */}
      <section>
        {/* <div className="flex items-center gap-5">
            <RxTarget size={50} />
            <h3 className="my-10 font-normal">All Targeted Search</h3>
          </div> */}
        {/* <div className="flex items-center justify-center">
            <LargeButton
              icon={<MdOutlineLibraryAdd />}
              label="Add Targeted Search"
              className="mt-10"
            />
          </div> */}
        <ArrowLink
          href="/dashboard/be-the-first-to-know"
          text="Back"
          arrowPosition="left"
          className={`mt-10 ${
            pathname === "/dashboard/be-the-first-to-know" && "hidden"
          }`}
        />
        <div className="flex items-center justify-end">
          <LargeButton
            icon={<MdOutlineLibraryAdd />}
            label="Add Targeted Search"
            className="mt-10"
          />
        </div>
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
        <div className="section grid gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </section>
    </main>
  );
};

export default BeTheFirstToKnowLayout;
