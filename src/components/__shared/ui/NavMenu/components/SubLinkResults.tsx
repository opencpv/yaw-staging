import { useFetchFeaturedListings } from "@/app/properties/services";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import SubLinkResultsCard from "./SubLinkResultsCard";
import { Separator } from "@/components/__shared/ui/separator";
import ArrowLink from "../../links/arrow-link";
import { Skeleton } from "../../skeleton";
import { useMemo } from "react";

function SubLinkResults() {
  const { activeSubLink, setToggle } = useMenuStore();

  const propertyType = useMemo(() => {
    const subLink = activeSubLink.slice(0, -1); // strip 's' off word
    switch (activeSubLink) {
      case "all-listings":
        return "";
      default:
        return subLink;
    }
  }, [activeSubLink]);

  const showAllLink = useMemo(() => {
    const subLink = activeSubLink.slice(0, -1); // strip 's' off word
    switch (activeSubLink) {
      case "all-listings":
        return "/properties";
      case "flats":
        return "/properties/flats";
      default:
        return `/properties/${subLink}`;
    }
  }, [activeSubLink]);

  const { data: listings, isLoading } = useFetchFeaturedListings({
    limit: 6,
    propertyType,
  });

  return (
    <div className="main-menu-link flex w-full gap-12 text-white">
      <div className="hidden h-full min-w-[3px] lg:flex">
        <Separator
          color={"white"}
          orientation={"vertical"}
          className="h-full min-h-[350px] w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex max-w-[700px] flex-wrap gap-2">
          {isLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="aspect-[242/212] w-full min-w-[212px] max-w-[212px] bg-shade-900"
              />
            ))}

          {listings &&
            listings?.length > 0 &&
            listings.map((listing) => (
              <div key={listing?.id}>
                <SubLinkResultsCard listing={listing as Property} />
              </div>
            ))}
        </div>
        {!listings || (listings?.length === 0 && <p>Nothing to show</p>)}
        {listings && listings?.length > 0 && (
          <ArrowLink
            color="white"
            href={showAllLink}
            text="Show all"
            onClick={() => setToggle(false)}
          />
        )}
      </div>
    </div>
  );
}

export default SubLinkResults;
