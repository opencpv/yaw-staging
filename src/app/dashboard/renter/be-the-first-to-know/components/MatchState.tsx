import { useAppStore } from "@/store/dashboard/AppStore";
import React, { useMemo } from "react";
import { useFetchCriteriaMatches } from "../services";
import Link from "next/link";
import slugify from "@/lib/utils/slugify";
import { Skeleton } from "@nextui-org/react";

type Props = {
  criterion: SearchCriteria;
};

const MatchState = ({ criterion }: Props) => {
  const { user } = useAppStore();
  const { data: matchedListings, isLoading } = useFetchCriteriaMatches({
    userId: user?.id as string,
    criterion: criterion,
  });

  const count =
    useMemo(() => {
      if (matchedListings && matchedListings?.length < 10)
        return matchedListings?.length;
      else return `${matchedListings?.length}+`;
    }, [matchedListings]) || 0;

  const matchesFound = criterion.is_active && matchedListings?.length! > 0;
  const pendingMatches = matchedListings?.length! <= 0 && criterion.is_active;
  const noMatches =
    matchedListings?.length! <= 0 && criterion.is_active === false;
  const notStarted = criterion.is_active === false;

  return (
    <div>
      {isLoading ? (
        <span>
          <Skeleton className="h-5 w-20 rounded-md" />
        </span>
      ) : pendingMatches ? (
        <span className="text-shade-200">Your search is in process...</span>
      ) : notStarted ? (
        <span className="text-shade-200">Incomplete</span>
      ) : matchesFound ? (
        <div className="flex items-center gap-2">
          Found
          <Link
            href={`/dashboard/renter/be-the-first-to-know/qkMM9hHt7qKpgw==-${
              criterion.id
            }/${slugify(criterion?.title?.toLowerCase() as string)}`}
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
