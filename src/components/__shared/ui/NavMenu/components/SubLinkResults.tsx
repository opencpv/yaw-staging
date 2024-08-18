// import { useFetchFeaturedListings } from "@/app/properties/services";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import SubLinkResultsCard from "./SubLinkResultsCard";
import Link from "next/link";
import Separator from "@/components/__shared/ui/Separator";
// import { Skeleton } from "@nextui-org/react";
import ArrowLink from "../../links/ArrowLink";

function SubLinkResults() {
  const { activeSubLink, setToggle } = useMenuStore();
  const { user } = useAppStore();

  // const {
  //   data: listings,
  //   error,
  //   isLoading,
  //   mutate,
  // } = useFetchFeaturedListings({ limit: 6 });

  // const options: any = {
  //   "all-listings": listings,
  //   "self-contained": listings,
  //   apartments: listings,
  //   flats: listings,
  //   "compound-houses": listings,
  // };

  // please can you get me the corresponding urls for each
  /* 
  self contained 
  */

  return (
    <></>
    // <div className="main-menu-link flex w-full items-center gap-12 text-white">
    //   <div className="hidden h-full min-w-[3px] lg:flex">
    //     <Separator
    //       color={"white"}
    //       orientation={"vertical"}
    //       className="h-full min-h-[350px] w-full"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <div className="flex max-w-[700px] flex-wrap items-center gap-2">
    //       {options[activeSubLink]?.length > 0
    //         ? options[activeSubLink].map((listing: any) => (
    //             <div key={listing?.id}>
    //               <SubLinkResultsCard
    //                 listing={getListingProps(listing, user as UserType)}
    //               />
    //             </div>
    //           ))
    //         : Array.from({ length: 6 }).map((_, index) => (
    //             <div
    //               key={index}
    //               className="animate flex aspect-[242/212] w-full min-w-[212px] max-w-[212px] animate-pulse rounded-lg bg-shade-900"
    //             />
    //           ))}
    //     </div>
    //     <ArrowLink
    //       color="white"
    //       href="/properties"
    //       text="Show all"
    //       onClick={() => setToggle(false)}
    //     />
    //   </div>
    // </div>
  );
}

export default SubLinkResults;
