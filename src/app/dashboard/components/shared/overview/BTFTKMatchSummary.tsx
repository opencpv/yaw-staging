import style from "./Feature.module.css"
import CallOut from "@/components/__shared/ui/CallOut";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import Image from "next/image";
import { pluralize } from "@/lib/utils/stringManipulation";
import Link from "next/link";
import slugify from "@/lib/utils/slugify";
import { Skeleton } from "@nextui-org/react";

type Props = {
  matches:
    | { criterion: Partial<SearchCriteria>; associated_image: string }[]
    | null;
  href: string;
  callOut: { content: string; href?: string };
  isLoading?: boolean;
};

const BTFTKMatchSummary = ({
  isLoading,
  href,
  matches,
  callOut,
}: Props) => {
  return (
    <section className={style.sideFeatureWrapper}>
      <div className={style.sideFeatureInnerWrapper}>
        <h3 className={style.sideFeatureTitle} title="Be The First To Know">Be The First To Know</h3>
        {matches && matches.length > 0 ? (
          <Button
            href={href}
            radius="full"
            padding="sm"
            className={style.sideFeatureButton}
          >
            See all
          </Button>
        ) : (
          <Button
            href={href}
            radius="full"
            padding="sm"
            className={style.sideFeatureButton}
          >
            Start here
          </Button>
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
                  key={match.criterion.title}
                  className={style.sideFeatureListItem}
                >
                  <div className={style.sideFeatureImageWrapper}>
                    <Image
                      src={match.associated_image}
                      alt={match.criterion.title + " match"}
                      fill
                      style={{ objectFit: "cover" }}
                      className={style.sideFeatureImage}
                    />
                  </div>
                  <div className={style.sideFeatureMatchTextWrapper}>
                    <h3>{match.criterion.title}</h3>
                    <Link
                      href={`/dashboard/renter/be-the-first-to-know/${slugify(
                        match.criterion?.title?.toLowerCase() as string,
                      )}/PSJfZkS-${match.criterion.id}-cYW0WGQ`}
                      className={style.sideFeatureMatchLink}
                    >
                      {match.criterion.matched_properties?.length}{" "}
                      {pluralize(
                        "match",
                        match.criterion.matched_properties?.length,
                        "es",
                      )}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <CallOut>
                <div>
                  {callOut?.content}
                  {callOut?.href && (
                    <>
                      <br />
                      <Button
                        href={callOut.href}
                        variant="ghost"
                        className={style.sideFeatureLearnMoreButton}
                      >
                        Learn more
                      </Button>
                    </>
                  )}
                </div>
              </CallOut>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default BTFTKMatchSummary;
