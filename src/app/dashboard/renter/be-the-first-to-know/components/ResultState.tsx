"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/Status";
import { useFetchCriteriaMatches } from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Skeleton } from "@nextui-org/react";

export type CriteriaStatus = "Match" | "No Matches" | "Pending" | "Not Started";

type Props = {
  criterion: SearchCriteria;
};

const ResultState = ({ criterion }: Props) => {
  const { user } = useAppStore();
  const { data: matchedListings, isLoading } = useFetchCriteriaMatches({
    userId: user?.id as string,
    criterion: criterion,
  });

  const matchesFound = criterion.is_active && matchedListings?.length! > 0;
  const pendingMatches = matchedListings?.length! <= 0 && criterion.is_active;
  const noMatches =
    matchedListings?.length! <= 0 && criterion.is_active === false;
  const notStarted = criterion.is_active === false;

  if (isLoading)
    return (
      <span>
        <Skeleton className="h-5 w-14 rounded-md" />
      </span>
    );
  else
    return (
      <>
        <Status
          variant={
            pendingMatches
              ? "warning"
              : notStarted
                ? "neutral-light"
                : matchesFound
                  ? "success"
                  : noMatches
                    ? "danger"
                    : undefined
          }
          tooltipContent={
            noMatches
              ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
              : ""
          }
          text={
            pendingMatches
              ? "Pending"
              : notStarted
                ? "Not started"
                : matchesFound
                  ? "Match"
                  : noMatches
                    ? "No Matches"
                    : ""
          }
        />
      </>
    );
};

export default ResultState;
