"use client";
import AgentButtons from "../components/Button";
import { useState } from "react";
import NoMatchesYet from "../components/NoMatches";
import MatchesYet from "../components/Matches";
import Agent from "../components/Agent";

export default function Page() {
  const [beAgent, setBeAgent] = useState(false);
  const [matches, setMatches] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center gap-8">
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
