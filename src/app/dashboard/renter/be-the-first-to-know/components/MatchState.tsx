import React, { useMemo } from "react";
import Link from "next/link";
import slugify from "@/lib/utils/slugify";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";

type Props = {
  criterion: SearchCriteria;
};

const MatchState = ({ criterion }: Props) => {
  const { setCriterion } = BTFTKStepsStore();

  const count =
    useMemo(() => {
      if (
        criterion.matched_properties &&
        criterion.matched_properties?.length < 10
      )
        return criterion.matched_properties?.length;
      else return `${criterion.matched_properties?.length}+`;
    }, [criterion.matched_properties]) || 0;

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
    <div>
      {pendingMatches ? (
        <span className="text-shade-200">Your search is in process...</span>
      ) : notStarted ? (
        <Link
          href={`/dashboard/renter/be-the-first-to-know/manage-criteria/edit/LS6pI-${criterion.id}-LWIKyOgnw==`}
          className="hover:tex-shade-300 text-shade-200 underline-offset-2 hover:underline"
          onClick={() => setCriterion(criterion)}
        >
          Continue
        </Link>
      ) : matchesFound ? (
        <div className="flex items-center gap-2">
          Found
          <Link
            href={`/dashboard/renter/be-the-first-to-know/${slugify(
              criterion?.title?.toLowerCase() as string,
            )}/qkMM9hHt7-${criterion.id}-qKpgw==`}
            className="text-[#0EB480] underline-offset-2 hover:underline"
          >
            {count} result(s)
          </Link>
        </div>
      ) : noMatches ? (
        <span className="text-shade-200">No matches found</span>
      ) : null}
    </div>
  );
};

export default MatchState;
