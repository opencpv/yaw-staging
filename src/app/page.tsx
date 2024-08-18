import Navbar from "@/components/__shared/ui/Navbar";
import Footer from "@/components/__shared/ui/footer/Footer";
import React from "react";
// import Landing from "./components/Landing";
// import Promotions from "./components/sections/Promotions";
// import FeaturedListings from "./components/sections/FeaturedListings";
// import ManagePropertiesSection from "./components/sections/ManagePropertiesSection";
// import PopularCities from "./components/sections/PopularCities";
// import Ad from "./components/sections/Ad";
import ScrollTopAndSocial from "@/components/__shared/ui/ScrollTopAndSocial";
import ClientPageWrapper from "@/components/__shared/hoc/ClientPageWrapper";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import {
  ADS_QUERY,
  HOME_BANNER_QUERY,
  HOME_PAGE_QUERY,
} from "@/lib/utils/sanity/queries";
// import FeedbackButton from "@/components/__shared/ui/feedback/FeedbackButton";
import Link from "next/link";
import dynamic from "next/dynamic";

const Landing = dynamic(() => import("./components/Landing"))
const Promotions = dynamic(() => import("./components/sections/Promotions"))
const FeaturedListings = dynamic(() => import("./components/sections/FeaturedListings"))
const Ad = dynamic(() => import("./components/sections/Ad"))
const RentalDeals = dynamic(() => import("./components/sections/RentalDeals"));
const ManagePropertiesSection = dynamic(() => import("./components/sections/ManagePropertiesSection"));
const PopularCities = dynamic(() => import("./components/sections/PopularCities"));

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
      {/* <Navbar /> */}
      <Landing data={filteredHomeData[filteredHomeData.length - 1]} />
      <Promotions data={data} />
      <FeaturedListings data={filteredAdsData} />
      <Ad data={filteredAdsData} />
      <RentalDeals data={data} />
      <ManagePropertiesSection data={data} />
      <PopularCities />
      {/* <FeedbackButton data={data} thresholdMin={820} /> */}
      <ScrollTopAndSocial thresholdMin={820} />
      {/* <Footer /> */}
    </ClientPageWrapper>
  );
};

export default page;
