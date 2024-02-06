"use client";

import React from "react";
import AgentButtons from "./components/Button";
import { ClientOnly } from "@/components/ui/ClientOnly";
import BeMyAgentModal from "@/app/components/be-my-agent-form";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

const MyAgentLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`mt-12 flex w-full justify-center bg-[#FEFEFE] ${styles.be_my_agent_row}
    `}
      >
        <div className="flex w-full max-w-screen-3xl flex-col items-start justify-center overflow-x-hidden p-7 pt-0">
          <h2 className="mb-4">Be My Agent</h2>
          <div className="flex w-full flex-col gap-6 lg:w-fit lg:flex-row lg:items-center">
            <div className="flex flex-wrap items-center justify-between gap-6 xs:justify-start">
              <p className="whitespace-nowrap text-xl">Starting From</p>
              <AgentButtons
                variant="price"
                content="GHS 250.00"
                className="justify-end xs:justify-center"
              />
            </div>
            <div
              style={{
                display:
                  pathname === "/dashboard/my-agent/agent" ? "none" : "block",
              }}
            >
              <ClientOnly>
                <BeMyAgentModal buttonClassName="min-w-full xs:min-w-[8rem]" />
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
