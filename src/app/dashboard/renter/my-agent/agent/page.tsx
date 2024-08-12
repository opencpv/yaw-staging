"use client";
import MatchTable from "../components/MatchTable";
import Agent from "../components/Agent";
import NoAgentCard from "../components/NoAgentCard";
import { useRouter, useSearchParams } from "next/navigation";
import BeMyAgentModal from "../components/steps/BeMyAgentModal";
import { useFetchAgentRequests } from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/SkeletonRectangle";
import { Skeleton } from "@nextui-org/react";
import React, { useEffect } from "react";

export default function Page() {
  const { user } = useAppStore();
  const searchParams = useSearchParams();
  const agentRequestId = searchParams?.get("a")?.slice(3);
  const router = useRouter();

  const { data: agentRequests, isLoading } = useFetchAgentRequests({
    userId: user?.id as string,
  });

  useEffect(() => {
    // redirect to active card if any
    const activeCard = agentRequests?.find(
      (request) => request.is_paid === true,
    );

    if (activeCard)
      router.replace(`?t=${activeCard.search_title}&a=461${activeCard.id}`, {
        scroll: false,
      });
  }, [agentRequests, router]);

  return (
    <div className="mx-auto my-16 flex max-w-screen-3xl flex-col items-center justify-center gap-8 px-5 sm:px-10">
      <div className="flex w-full flex-col">
        <div className="fade-in-bottom flex flex-col gap-5">
          <h3 className="mb-5">My Agent</h3>
          {isLoading && (
            <>
              <Skeleton className="h-[38px] w-32 rounded-md" />
              <section className="grid gap-5 md:grid-cols-2 llg:grid-cols-3">
                <SkeletonRectangle count={3} />
              </section>
            </>
          )}

          {agentRequests?.length === 0 && <NoAgentCard />}

          {agentRequests && agentRequests?.length > 0 && (
            <>
              <BeMyAgentModal button="Hire Us Now" content="Get Started" />{" "}
              <section className="grid gap-5 md:grid-cols-2 llg:grid-cols-3">
                {agentRequests.map((request) => (
                  <Agent
                    key={request.id}
                    agentRequest={request}
                    hasMatch={
                      (request.matched_properties &&
                        request.matched_properties?.length > 0) ||
                      false
                    }
                    isSelected={request.id === Number(agentRequestId)}
                    isActive={request.is_paid}
                  />
                ))}
              </section>
            </>
          )}
        </div>
        {agentRequests && agentRequests?.length > 0 && <MatchTable />}
      </div>
    </div>
  );
}
