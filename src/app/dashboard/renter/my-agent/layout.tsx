import React from "react";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import BeMyAgentModal from "@/app/dashboard/components/shared/my-agent/steps/BeMyAgentModal";
import styles from "@/app/dashboard/components/shared/my-agent/index.module.css";
import CallOut from "@/components/__shared/ui/CallOut";
import { headers } from "next/headers";
import { Metadata } from "next";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { FEES_QUERY } from "@/lib/utils/sanity/queries";

export const metadata: Metadata = {
  title: "My Agent",
  description: "", // tentative
};

const MyAgentLayout = async({ children }: { children: React.ReactNode }) => {
  const headerList = headers();
  const pathname = headerList.get("x-pathname") || "";
  let data :any;
  try {
  const data = await loadQuery<SanityDocument[]>(FEES_QUERY);
    
  } catch (error) {
    data=null
    console.log(error)
  }
  // const feesData = feesInitialData?.data[0]
  return (
    <>
      <div
        className={`mt-12 flex w-full justify-center bg-[#FEFEFE] ${styles.be_my_agent_row}
    `}
      >
        <div className="flex w-full max-w-screen-3xl flex-col items-start justify-center gap-4 overflow-x-hidden p-7 pt-0">
          <h2>Be My Agent</h2>
          <CallOut content="Pay absolutely nothing if you rent one of the searches we find for you." />
          <div className="flex w-full flex-col gap-6 lg:w-fit lg:flex-row lg:items-center">
            <div className="flex flex-wrap items-center justify-between gap-6 xs:justify-start">
              <h4 className="whitespace-nowrap text-lg font-normal">
                Service Fee
              </h4>
              <ClientOnly>
                <BeMyAgentModal
                  button="Price"
                  content={data?data.be_my_agent_fee:250}
                  buttonClassName="justify-end text-lg xs:justify-center"
                />
              </ClientOnly>
            </div>
            <div
              style={{
                display:
                  pathname === "/dashboard/renter/my-agent/agent"
                    ? "none"
                    : "block",
              }}
            >
              <ClientOnly>
                <BeMyAgentModal
                  button="Hire Us Now"
                  buttonClassName="min-w-full xs:min-w-[8rem]"
                />
              </ClientOnly>{" "}
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default MyAgentLayout;
