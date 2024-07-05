import CallOut from "@/components/__shared/ui/CallOut";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import Image from "next/image";
import { pluralize } from "@/lib/utils/stringManipulation";
import Link from "next/link";
import slugify from "@/lib/utils/slugify";
import { Skeleton } from "@nextui-org/react";
import SkeletonTextual from "@/components/__shared/ui/skeleton/SkeletonTextual";

type Props = {
  matches:
    | { criterion: Partial<SearchCriteria>; associated_image: string }[]
    | null;
  title: string;
  href: string;
  callOut: { content: string; href?: string };
  isLoading?: boolean;
};

const MatchSummary = ({ isLoading, href, matches, title, callOut }: Props) => {
  return (
    <section className={`w-full space-y-4 xs:max-lg:max-w-md lg:max-w-full`}>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-primary-400 p-2 px-4 capitalize text-white">
        <h3 className="min-w-fit font-normal">{title}</h3>
        {matches && matches.length > 0 ? (
          <Button
            href={href}
            radius="full"
            padding="sm"
            className="w-fit bg-neutral-100 text-neutral-800"
          >
            See all
          </Button>
        ) : (
          <Button
            href={href}
            radius="full"
            padding="sm"
            className="w-fit bg-neutral-100 text-neutral-800"
          >
            Start here
          </Button>
        )}
      </div>
      {isLoading ? (
        <div className="flex flex-col gap-2 border-b-2 pb-5 pt-2 last:border-b-0 last:pb-2 last:pt-0 min-[320px]:flex-row">
          <Skeleton className="relative aspect-square max-h-28 w-32 rounded-xl min-[320px]:flex-1" />
          <SkeletonTextual />{" "}
        </div>
      ) : (
        <>
          {matches && matches.length > 0 ? (
            <ul className="space-y-6">
              {matches.map((match) => (
                <div
                  key={match.criterion.title}
                  className="flex flex-col gap-2 border-b-2 pb-5 pt-2 last:border-b-0 last:pb-2 last:pt-0 min-[320px]:flex-row"
                >
                  <div className="relative aspect-square max-h-28 w-32 rounded-xl bg-[#F9DFAE] p-6 min-[320px]:w-[initial] min-[320px]:flex-1">
                    <Image
                      src={match.associated_image}
                      alt={match.criterion.title + " match"}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex-[3] space-y-3">
                    <h3>{match.criterion.title}</h3>
                    <Link
                      href={`/dashboard/renter/be-the-first-to-know/${slugify(
                        match.criterion?.title?.toLowerCase() as string,
                      )}/PSJfZkS-${match.criterion.id}-cYW0WGQ`}
                      className="block w-fit rounded-xl bg-[#FEF8ED] p-2 px-6 text-neutral-700"
                    >
                      {match.criterion.matched_properties?.length}{" "}
                      {pluralize(
                        "match",
                        match.criterion.matched_properties?.length,
                        "es",
                      )}
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <>
              <CallOut>
                <div>
                  {callOut?.content}
                  {callOut?.href && (
                    <Button
                      href={callOut.href}
                      variant="ghost"
                      className="text-sm font-[700] capitalize text-[#45808B] underline"
                    >
                      Learn more
                    </Button>
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

export default MatchSummary;
