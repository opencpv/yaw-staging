"use client";
import { useEffect, useState } from "react";
import NoMatchState from "../components/NoMatchState";
import MatchTable from "../components/MatchTable";
import Agent from "../components/Agent";
import NoAgentCard from "../components/NoAgentCard";
import { useRouter } from "next/navigation";
import BeMyAgentModal from "../components/steps/BeMyAgentModal";

export default function Page() {
  const router = useRouter();
  const [beAgent, setBeAgent] = useState(false);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    router.push("?a=1", { scroll: false });
  }, [router]);

  return (
    <div className="mx-auto my-16 flex max-w-screen-3xl flex-col items-center justify-center gap-8 px-5 sm:px-10">
      {!beAgent && (
        <div className="flex w-full flex-col">
          <div className="fade-in-bottom flex flex-col gap-5">
            <h3 className="mb-5">My Agent</h3>
            <NoAgentCard />
            <BeMyAgentModal button="Hire Us Now" content="Get Started" />{" "}
            <section className="grid gap-5 md:grid-cols-2 llg:grid-cols-3">
              <Agent
                title="My Agent One"
                hasMatch
                isSelected
                isActive
                createdAt="Wed Jul 10 2024 15:45:39"
                id={1}
              />
              <Agent
                title="My Agent Two"
                hasMatch={false}
                isSelected={false}
                isActive
                createdAt="Wed Jul 10 2024 15:45:39"
                id={2}
              />
              <Agent
                title="My Agent Three"
                hasMatch={false}
                isSelected={false}
                isActive={false}
                createdAt="Wed Jul 10 2024 15:45:39"
                id={3}
              />
            </section>
          </div>
          <MatchTable />
        </div>
      )}
    </div>
  );
}
