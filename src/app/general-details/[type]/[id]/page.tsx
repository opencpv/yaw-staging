import FeaturedListings from "@/app/components/sections/FeaturedListings";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import UserAboutUs from "./components/UserAboutUs";
import UserImageAndDetails from "./components/UserImageAndDetails";
import UserReviews from "./components/UserReviews";
import UserImageAndDetailsSm from "./components/UserImageAndDetailsSm";

async function Page() {
  const ads = await loadQuery<SanityDocument[]>(ADS_QUERY);
  const adsData = ads.data;
  const filteredAdsData = adsData.filter(
    (item: any) => item.isPublished == true,
  );

  return (
    <div className="md:wrapper flex flex-col gap-5">
      <div className="hidden md:flex w-full">
        <UserImageAndDetails />
      </div>
      <div className="lg:hidden">
        <UserImageAndDetailsSm />
      </div>{" "}
      <div className="px-5 md:px-10">
        <UserAboutUs />
        <UserReviews />
        <FeaturedListings data={filteredAdsData} />
      </div>
    </div>
  );
}

export default Page;
