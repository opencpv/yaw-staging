"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/status";
import slugify from "@/lib/utils/slugify";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";

export type CriteriaStatus = "Match" | "No Matches" | "Pending" | "Not Started";

type Props = {
  criterion: SearchCriteria;
};

const ResultState = ({ criterion }: Props) => {
  const { setCriterion } = BTFTKStepsStore();

  const matchesFound =
    criterion.matched_properties && criterion.matched_properties?.length > 0;
  const pendingMatches =
    criterion.matched_properties &&
    criterion.matched_properties.length === 0 &&
    criterion.is_active;
  const noMatches =
    criterion.matched_properties &&
    criterion.matched_properties.length === 0 &&
    criterion.is_active === false;
  const notStarted =
    criterion.is_active === false && criterion.matched_properties === null;

  return (
    <>
      <Status
        href={
          matchesFound
            ? `/dashboard/renter/be-the-first-to-know/${slugify(
                criterion?.title?.toLowerCase() as string,
              )}/uUT60Lgh-${criterion.id}-BDJ7Q`
            : undefined
        }
        onClick={() => setCriterion(criterion)}
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
          notStarted
            ? "Please complete forms to begin target search"
            : noMatches
              ? "No matches in 180 days deactivates your search. Reactivate by toggling on."
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
