import FeaturedListings from "@/app/components/sections/FeaturedListings";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import UserAboutUs from "./components/UserAboutUs";
import UserImageAndDetails from "./components/UserImageAndDetails";
import UserImageAndDetailsSm from "./components/UserImageAndDetailsSm";
import UserRenterReviews from "./components/UserReviewsRenter";
import UserListerReviews from "./components/UserReviewsLister";
import { CustomScroll } from "@/components/__shared/ui/custom-scroll/CustomScroll";

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
    <div className="flex w-full flex-col gap-5 bg-white !pt-0">
      <div className="hidden w-full md:flex">
        <UserImageAndDetails type={params.type} />
      </div>
      <div className="bg-white md:hidden">
        <UserImageAndDetailsSm type={params.type} />
      </div>{" "}
      <div className="wrapper flex w-full flex-col gap-5 !pt-0">
        <CustomScroll  className="w-full max-w-[1103px]">
          <div className="flex w-full  flex-col gap-10">
            <UserAboutUs type={params.type} />
            {params.type == "lister" ? (
              <UserListerReviews />
            ) : (
              <UserRenterReviews />
            )}{" "}
          </div>
        </CustomScroll>
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
