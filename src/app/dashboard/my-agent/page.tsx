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
    <div className="flex justify-center items-center flex-col gap-8 max-w-[1728px]">
      <div
        className={`flex flex-col justify-center  w-full items-start bg-[#FEFEFE] p-[1.88rem]  ${styles.be_my_agent_row}
  `}
      >
        <p className="text-[1.25rem] lg:text-[1.9375rem] font-semibold">
          Be My Agent
        </p>
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-fit gap-6">
          <div className="flex gap-[1.44rem] items-center w-full justify-between lg:justify-start">
            <p className="text-[1.25rem] whitespace-nowrap">Starting From</p>
            <AgentButtons variant="price" content="GHS 250.00" />
          </div>
          <ClientOnly>
            <BeMyAgentModal />
          </ClientOnly>{" "}
        </div>
      </div>
      {beAgent && <AgentLandingPage />}
      {!beAgent && (
        <div className="lg:px-[1.88rem] flex flex-col w-full">
          <div className="flex gap-5 flex-col ">
            <div className="flex w-fit flex-col items-start ">
              <div className="flex flex-col gap-8 w-full max-w-[542px]">
                <p className="text-[1.5625rem] font-semibold">My Agent</p>
                <div className="flex flex-col gap-[1.5rem] border-[#E6E6E6] border-[1px] bg-[#F7F7F7] px-8 py-6 rounded-2xl">
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[1.25rem] font-semibold">
                      You have no agent
                    </p>
                    <p className="text-shade-200 text-[1.25rem]">
                      Click the button below to get started
                    </p>
                  </div>
                  <div className="flex gap-6 w-full ">
                    <AgentButtons
                      content="Get Started"
                      variant={"green-dark"}
                      onClick={() => setBeAgent(true)}
                    />
                    <div className="w-full">
                      <AgentButtons
                        content="Explore"
                        variant={"explore"}
                        onClick={() => setBeAgent(true)}
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
