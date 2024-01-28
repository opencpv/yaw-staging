"use client";
import Image from "next/image";
import AgentButtons from "./components/Button";
import CaRelume from "./components/icons/CaRelume";
import CaAgentTick from "./components/icons/CaAgentTick";
import styles from "./index.module.css";
import { useState } from "react";
import AgentLandingPage from "./components/AgentLandingPage";
import CaAgentNoMatches from "./components/icons/CaAgentNoMatches";
import NoMatchesYet from "./components/NoMatches";
import MatchesYet from "./components/Matches";
import BeMyAgentModal from "@/app/components/be-my-agent-form";
import Agent from "./components/Agent";
import { ClientOnly } from "@/components/ui/ClientOnly";

export default function Page() {
  const [beAgent, setBeAgent] = useState(false);
  const [matches, setMatches] = useState(true);
  return (
    <div className="flex max-w-[1728px] flex-col items-center justify-center gap-8">
      <div
        className={`flex w-full flex-col  items-start justify-center bg-[#FEFEFE] p-[1.88rem]  ${styles.be_my_agent_row}
  `}
      >
        <p className="text-[1.25rem] font-semibold lg:text-[1.9375rem]">
          Be My Agent
        </p>
        <div className="flex w-full flex-col items-center gap-6 lg:w-fit lg:flex-row">
          <div className="flex w-full items-center justify-between gap-[1.44rem] lg:justify-start">
            <p className="whitespace-nowrap text-[1.25rem]">Starting From</p>
            <AgentButtons variant="price" content="GHS 250.00" />
          </div>
          <ClientOnly>
            <BeMyAgentModal />
          </ClientOnly>{" "}
        </div>
      </div>
      {!beAgent && (
        <div className="flex w-full flex-col lg:px-[1.88rem]">
          <div className="flex flex-col gap-5 ">
            <div className="flex w-fit flex-col items-start ">
              <div className="flex w-full max-w-[542px] flex-col gap-8">
                <p className="text-[1.5625rem] font-semibold">My Agent</p>
                <div className="flex flex-col gap-[1.5rem] rounded-2xl border-[1px] border-[#E6E6E6] bg-[#F7F7F7] px-8 py-6">
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[1.25rem] font-semibold">
                      You have no agent
                    </p>
                    <p className="text-[1.25rem] text-shade-200">
                      Click the button below to get started
                    </p>
                  </div>
                  <div className="flex w-full gap-6 ">
                    <AgentButtons
                      content="Get Started"
                      variant={"green-dark"}
                      onClick={() => setBeAgent(false)} // Implementation has changed !!
                    />
                    <div className="w-full">
                      <AgentButtons
                        content="Explore"
                        variant={"explore"}
                        onClick={() => setBeAgent(false)} // Implementation has changed !!
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Agent />
          </div>
          {!matches && <NoMatchesYet />}
          {matches && <MatchesYet />}
        </div>
      )}
    </div>
  );
}
