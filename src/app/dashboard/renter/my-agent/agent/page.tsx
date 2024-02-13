"use client";
import AgentButtons from "../components/Button";
import { useState } from "react";
import NoMatchesYet from "../components/NoMatches";
import MatchesYet from "../components/Matches";
import Agent from "../components/Agent";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import NoAgentCard from "../components/NoAgentCard";

export default function Page() {
  const [beAgent, setBeAgent] = useState(false);
  const [matches, setMatches] = useState(true);
  return (
    <div className="mx-auto mt-16 flex max-w-screen-3xl flex-col items-center justify-center gap-8 px-5 sm:px-10">
      {!beAgent && (
        <div className="flex w-full flex-col">
          <AOSWrapper animation="fade-up" className="flex flex-col gap-5">
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
              {[1].map((item) => (
                <Agent
                  key={item}
                  name="My Agent One"
                  state="completed"
                  dateCreated="5 Aug. 2023 13:55pm"
                  dateCompleted="15 Aug. 2023 13:55pm"
                />
              ))}
              {[1].map((item) => (
                <Agent
                  key={item}
                  name="My Agent Two"
                  state="started"
                  dateCreated="5 Aug. 2023 13:55pm"
                />
              ))}
              <Agent name="My Agent Three" state="default" />
            </div>
          </AOSWrapper>
          {!matches && <NoMatchesYet />}
          {matches && <MatchesYet />}
        </div>
      )}
    </div>
  );
}
