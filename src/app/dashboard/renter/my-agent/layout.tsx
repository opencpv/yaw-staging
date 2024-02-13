"use client";

import React from "react";
import AgentButtons from "../../components/shared/my-agent/Button";
import { ClientOnly } from "@/components/ui/ClientOnly";
import BeMyAgentModal from "@/app/components/be-my-agent-form";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import InfoText from "@/app/components/listing-form/components/InfoText";

const MyAgentLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`mt-12 flex w-full justify-center bg-[#FEFEFE] ${styles.be_my_agent_row}
    `}
      >
        <div className="flex w-full max-w-screen-3xl flex-col items-start justify-center gap-4 overflow-x-hidden p-7 pt-0">
          <h2>Be My Agent</h2>
          <InfoText content="Pay absolutely nothing if you rent one of the searches we find for you." />
          <div className="flex w-full flex-col gap-6 lg:w-fit lg:flex-row lg:items-center">
            <div className="flex flex-wrap items-center justify-between gap-6 xs:justify-start">
              <h4 className="whitespace-nowrap text-lg font-normal">
                Service Fee
              </h4>
              <ClientOnly>
                <BeMyAgentModal
                  button="Price"
                  content={250}
                  buttonClassName="justify-end text-lg xs:justify-center"
                />
              </ClientOnly>
            </div>
            <div
              style={{
                display:
                  pathname === "/dashboard/my-agent/agent" ? "none" : "block",
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
