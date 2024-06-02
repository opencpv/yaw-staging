import { useFetchFeaturedListings } from "@/app/properties/services";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import ListingCard from "../../listing/ListingCard";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import SubLinkResultsCard from "./SubLinkResultsCard";
import Link from "next/link";
import Separator from "@/components/Separator";

function SubLinkResults() {
  const { activeSubLink } = useMenuStore();
  const { user } = useAppStore();

  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchFeaturedListings({ limit: 6 });

  const options: any = {
    "self-contained": listings,
    apartments: listings,
    flats: listings,
    "compound-houses": listings,
  };

  // please can you get me the corresponding urls for each
  /* 
  self contained 
  */
  return (
    <div className="flex w-full items-center gap-10 text-white">
      <div  className="min-w-[3px] h-full hidden lg:flex">
        <Separator
          color={"white"}
          orientation={"vertical"}
          className="h-full min-h-[350px] w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {options[activeSubLink]?.map((listing: any) => (
            <div className="" key={listing?.id}>
              <SubLinkResultsCard
                listing={getListingProps(listing, user as UserType)}
              />
            </div>
          ))}
        </div>
        <Link href={"/properties"} className="flex items-center gap-2 pt-2 hover:scale-[1.01] transition-all">
          <p>Show all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="6"
            viewBox="0 0 40 6"
            fill="none"
          >
            <path
              d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0L0 3.5Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default SubLinkResults;
