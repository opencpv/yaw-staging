"use client";
import AgentButtons from "../../../components/shared/my-agent/Button";
import { useState } from "react";
import NoMatchesYet from "../../../components/shared/my-agent/NoMatches";
import MatchesYet from "../../../components/shared/my-agent/Matches";
import Agent from "../../../components/shared/my-agent/Agent";
import NoAgentCard from "../../../components/shared/my-agent/NoAgentCard";

export default function Page() {
  const [beAgent, setBeAgent] = useState(false);
  const [matches, setMatches] = useState(true);
  return (
    <div className="mx-auto mt-16 flex max-w-screen-3xl flex-col items-center justify-center gap-8 px-5 sm:px-10">
      {!beAgent && (
        <div className="flex w-full flex-col">
          <div className="fade-in-bottom flex flex-col gap-5">
            <div className="w-full max-w-[542px] space-y-8">
              <h3 className="">My Agent</h3>
              <NoAgentCard />
            </div>
            <div
              className="gap-5 space-y-5 sm:grid sm:space-y-0"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
              }}
            >
              <Agent
                name="My Agent One"
                state="completed"
                dateCreated="5 Aug. 2023 13:55pm"
                dateCompleted="15 Aug. 2023 13:55pm"
              />
              <Agent
                name="My Agent Two"
                state="started"
                dateCreated="5 Aug. 2023 13:55pm"
              />
              <Agent name="My Agent Search" state="default" />
            </div>
          </div>
          {!matches && <NoMatchesYet />}
          {matches && <MatchesYet />}
        </div>
      )}
    </div>
  );
}
