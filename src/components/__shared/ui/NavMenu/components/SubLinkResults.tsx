import { useFetchFeaturedListings } from "@/app/properties/services";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import SubLinkResultsCard from "./SubLinkResultsCard";
import { Separator } from "@/components/__shared/ui/separator";
import ArrowLink from "../../links/arrow-link";
import { Skeleton } from "../../skeleton";
import { useEffect, useMemo, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import supabase from "@/lib/utils/supabase/supabaseClient";

function SubLinkResults() {
  const [allListings, setAllListings] = useState<Property[]>([]);
  const { activeSubLink, setToggle } = useMenuStore();

  useEffect(() => {
    const getListings = async () => {
      const { data } = await supabase
        .from("published_properties")
        .select("*")
        .limit(6);
      setAllListings(data as Property[]);
    };

    getListings();
  }, []);

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

  const { data: featuredListings, isLoading } = useFetchFeaturedListings({
    limit: 6,
    propertyType,
  });

  // if featured listings are less than 6, show all listings instead
  const optedListings = useMemo(() => {
    if (
      propertyType === "" &&
      featuredListings &&
      featuredListings?.length < 6
    ) {
      return allListings;
    }
    return featuredListings;
  }, [allListings, featuredListings, propertyType]);

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

          {optedListings &&
            optedListings?.length > 0 &&
            optedListings?.map((listing) => (
              <div key={listing?.id}>
                <SubLinkResultsCard listing={listing as Property} />
              </div>
            ))}
        </div>
        {!optedListings || (optedListings?.length === 0 && <EmptyState />)}
        {optedListings && optedListings?.length > 0 && (
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

function EmptyState() {
  return (
    <div className="mx-auto flex flex-col items-center gap-6 text-white">
      <IoIosSearch
        size={60}
        className="fade-in-bottom"
        style={{ animationDuration: "0.3s" }}
      />
      <p className="font-semibold">Sorry, no results found.</p>
    </div>
  );
}

export default SubLinkResults;
