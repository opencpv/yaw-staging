import style from "../Feature.module.css";
import Callout from "@/components/__shared/ui/callout";
import { LinkButton } from "@/components/__shared/ui/button";
import React, { useEffect } from "react";
import Image from "next/image";
import { pluralize } from "@/lib/utils/stringManipulation";
import Link from "next/link";
import { Skeleton } from "@/components/__shared/ui/skeleton";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  matches:
    | { request: Partial<AgentRequest>; associated_image: string }[]
    | null;
  href: string;
  callOut: { content: string; href?: string };
  isLoading?: boolean;
};

const BeMyAgentMatchSummary = ({
  isLoading,
  href,
  matches,
  callOut,
}: Props) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const agentRequestMatchesChannel = supabase
      .channel("agent-request-matches-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "agent_request_matches" },
        (payload) => {
          if (payload)
            queryClient.invalidateQueries({ queryKey: ["agent_requests"] });
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(agentRequestMatchesChannel);
    };
  }, [queryClient]);

  return (
    <section className={style.sideFeatureWrapper}>
      <div className={style.sideFeatureInnerWrapper}>
        <h3 className={style.sideFeatureTitle} title="Be My Agent">
          Be My Agent
        </h3>
        {matches && matches.length > 0 ? (
          <LinkButton
            href={href}
            radius="full"
            size="sm"
            className={style.sideFeatureButton}
          >
            See all
          </LinkButton>
        ) : (
          <LinkButton
            href={href}
            radius="full"
            size="sm"
            className={style.sideFeatureButton}
          >
            See all
          </LinkButton>
        )}
      </div>
      {isLoading ? (
        <div className={style.sideFeatureSkeletonWrapper}>
          <Skeleton className={style.sideFeatureSkeleton1} />
          <Skeleton className={style.sideFeatureSkeleton2} />
        </div>
      ) : (
        <>
          {matches && matches.length > 0 ? (
            <ul className={style.sideFeatureList}>
              {matches.map((match) => (
                <li
                  key={match.request?.search_title}
                  className={style.sideFeatureListItem}
                >
                  <div className={style.sideFeatureImageWrapper}>
                    <Image
                      src={match.associated_image}
                      alt={match.request?.search_title + " match"}
                      fill
                      style={{ objectFit: "cover" }}
                      className={style.sideFeatureImage}
                    />
                  </div>
                  <div className={style.sideFeatureMatchTextWrapper}>
                    <h3>{match.request?.search_title}</h3>
                    <Link
                      href={`/dashboard/renter/my-agent/agent?t=${match.request.search_title}&a=535${match.request.id}&sk=true`}
                      className={style.sideFeatureMatchLink}
                    >
                      {match.request?.matched_properties?.length}{" "}
                      {pluralize(
                        "match",
                        match.request?.matched_properties?.length,
                        "es",
                      )}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <Callout>
                <div>
                  {callOut?.content}
                  {callOut?.href && (
                    <>
                      <br />
                      <LinkButton
                        href={callOut.href}
                        variant="link"
                        size="fit"
                        className={style.sideFeatureLearnMoreButton}
                      >
                        Learn more
                      </LinkButton>
                    </>
                  )}
                </div>
              </Callout>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default BeMyAgentMatchSummary;
