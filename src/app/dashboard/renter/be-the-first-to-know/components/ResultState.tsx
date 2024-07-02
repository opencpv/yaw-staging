"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/Status";
import slugify from "@/lib/utils/slugify";

export type CriteriaStatus = "Match" | "No Matches" | "Pending" | "Not Started";

type Props = {
  criterion: SearchCriteria;
};

const ResultState = ({ criterion }: Props) => {
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
              )}/qkMM9hHt7-${criterion.id}-qKpgw==`
            : undefined
        }
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
          notStarted ? "Please complete forms to begin target search" : ""
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
