import React from "react";
import ClientPageWrapper from "@/components/__shared/hoc/ClientPageWrapper";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import {
  ADS_QUERY,
  HOME_BANNER_QUERY,
  HOME_PAGE_QUERY,
} from "@/lib/utils/sanity/queries";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader";
const Hero = dynamic(() => import("./components/Hero"), {
  loading: () => <Loader />,
});
const Promotions = dynamic(() => import("./components/sections/Promotions"));
const FeaturedListings = dynamic(
  () => import("./components/sections/FeaturedListings"),
  {
    loading: () => <Loader />,
  },
);
const Ad = dynamic(() => import("./components/sections/Ad"), {
  loading: () => <Loader />,
});
const RentalDeals = dynamic(() => import("./components/sections/RentalDeals"));
const ManagePropertiesSection = dynamic(
  () => import("./components/sections/ManagePropertiesSection"),
);
const PopularCities = dynamic(
  () => import("./components/sections/PopularCities"),
  {
    loading: () => <Loader />,
  },
);
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));
const ScrollTopAndSocial = dynamic(
  () => import("@/components/__shared/ui/scroll-top/scroll-top-and-social"),
);
const FeedbackButton = dynamic(
  () => import("@/components/__shared/ui/feedback/FeedbackButton"),
  { ssr: false },
);
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));

type Props = {};
const page = async (props: Props) => {
  const initial = await loadQuery<SanityDocument[]>(HOME_PAGE_QUERY);
  const data = initial.data[0];
  const homeBanner = await loadQuery<SanityDocument[]>(HOME_BANNER_QUERY);
  const homeBannerData = homeBanner.data;
  const filteredHomeData = homeBannerData.filter(
    (item: any) => item.isPublished == true,
  );
  const ads = await loadQuery<SanityDocument[]>(ADS_QUERY);
  const adsData = ads.data;
  const filteredAdsData = adsData.filter(
    (item: any) => item.isPublished == true,
  );

  return (
    <ClientPageWrapper>
      <Navbar />
      <Hero data={filteredHomeData[filteredHomeData.length - 1]} />
      <Promotions data={data} />
      <FeaturedListings data={filteredAdsData} />
      <Ad data={filteredAdsData} />
      <RentalDeals data={data} />
      <ManagePropertiesSection data={data} />
      <PopularCities />
      <FeedbackButton data={data} thresholdMin={820} />
      <ScrollTopAndSocial thresholdMin={820} />
      <Footer />
    </ClientPageWrapper>
  );
};

export default page;
