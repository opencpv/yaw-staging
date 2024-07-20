import React, { useCallback, useMemo } from "react";
import Link from "next/link";
import slugify from "@/lib/utils/slugify";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";
import { pluralize } from "@/lib/utils/stringManipulation";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@uidotdev/usehooks";

type Props = {
  criterion: SearchCriteria;
};

const MatchState = ({ criterion }: Props) => {
  const router = useRouter();
  const { setCriterion, setActiveSlide } = BTFTKStepsStore();

  const [BTFTKEditSteps] = useLocalStorage<
    { criterion: number; activeSlide: number }[]
  >("btftk-edit-steps", []);

  const count =
    useMemo(() => {
      if (
        criterion.matched_properties &&
        criterion.matched_properties.length < 10
      )
        return criterion.matched_properties?.length;
      else return `${criterion.matched_properties?.length}+`;
    }, [criterion.matched_properties]) || 0;

  const matchesFound =
    criterion.matched_properties && criterion.matched_properties.length > 0;
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

  const handleActiveSlideEdit = useCallback(() => {
    router.replace(
      `/dashboard/renter/be-the-first-to-know/manage-criteria/edit/LS6pI-${criterion.id}-LWIKyOgnw==`,
    );
    setActiveSlide(
      BTFTKEditSteps?.find((step) => step.criterion === criterion?.id)
        ?.activeSlide ?? 1,
    );
  }, [criterion?.id, BTFTKEditSteps, setActiveSlide, router]);

  return (
    <div>
      {pendingMatches ? (
        <span className="text-shade-200">Your search is in process...</span>
      ) : notStarted ? (
        <button
          className="hover:tex-shade-300 text-shade-200 underline-offset-2 hover:underline"
          onClick={() => {
            setCriterion(criterion);
            handleActiveSlideEdit();
          }}
        >
          Continue
        </button>
      ) : matchesFound ? (
        <div className="flex items-center gap-2">
          Found
          <Link
            href={`/dashboard/renter/be-the-first-to-know/${slugify(
              criterion?.title?.toLowerCase() as string,
            )}/qkMM9hHt7-${criterion.id}-qKpgw`}
            className="text-[#0EB480] underline-offset-2 hover:underline"
          >
            {count} {pluralize("result", criterion.matched_properties?.length)}
          </Link>
        </div>
      ) : noMatches ? (
        <span className="text-shade-200">No matches found</span>
      ) : null}
    </div>
  );
};

export default MatchState;
