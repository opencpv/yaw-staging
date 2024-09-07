"use client";
import React from "react";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import styles from "../../index.module.css";
import Callout from "@/components/__shared/ui/callout";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const ScrollTop = dynamic(() => import("@/components/__shared/ui/scroll-top"));
const BeMyAgentModal = dynamic(
  () => import("../../components/steps/BeMyAgentModal"),
);

const AgentLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {!pathname?.includes("schedule") && (
        <header
          className={`mt-12 flex w-full justify-center ${styles.beMyAgentHeader} `}
        >
          <div className="flex w-full max-w-screen-3xl flex-col items-start justify-center gap-4 overflow-x-hidden p-7 pt-0">
            <h2>Be My Agent</h2>
            <Callout content="Fee waived when you rent with us." />
            <div className="flex w-full flex-col gap-3 gap-y-6 lg:w-fit lg:flex-row lg:items-center">
              <div className="flex flex-wrap items-center gap-5">
                <h4 className="whitespace-nowrap font-normal">Finders Fee</h4>
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
        </header>
      )}

      {children}
      <ScrollTop />
    </>
  );
};

export default AgentLayout;
