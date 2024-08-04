import FeaturedListings from "@/app/components/sections/FeaturedListings";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import UserAboutUs from "./components/UserAboutUs";
import UserImageAndDetails from "./components/UserImageAndDetails";
import UserReviews from "./components/UserReviews";
import UserImageAndDetailsSm from "./components/UserImageAndDetailsSm";

type Props = {
  params: {
    type: string;
    id: number;
  };
};
async function Page({ params }: Props) {
  const ads = await loadQuery<SanityDocument[]>(ADS_QUERY);
  const adsData = ads.data;
  const filteredAdsData = adsData.filter(
    (item: any) => item.isPublished == true,
  );

  return (
    <div className=" flex w-full flex-col  gap-5 !pt-0">
      <div className="hidden w-full md:flex">
        <UserImageAndDetails type={params.type} />
      </div>
      <div className="md:hidden">
        <UserImageAndDetailsSm />
      </div>{" "}
      <div className="wrapper flex w-full flex-col gap-5 !pt-0">
        <div className="flex flex-col gap-10 w-full ">
          <UserAboutUs />
          <UserReviews />
        </div>
        <div>
          <h2 className="text-2xl text-shade-300 2xl:text-3xl">
            Esthers Listings
          </h2>
        </div>
        {/* <FeaturedListings data={filteredAdsData} /> */}
      </div>
    </div>
  );
}

export default Page;
