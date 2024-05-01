import Navbar from "@/components/__shared/ui/Navbar";
import Footer from "@/components/__shared/ui/footer/Footer";
import ScrollTopAndSocial from "@/components/__shared/ui/ScrollTopAndSocial";
import FeaturedListingAndAds from "./components/FeaturedListingAndAds";
import HomePopularCities from "./components/home_sections/HomePopularCities";
import HomeLandingPage from "./components/home_sections/HomeLandingPage";
import HomePromotionSection from "./components/home_sections/HomePromotionSection";
import HomeRentalDealsSection from "./components/home_sections/HomeRentalDealsSection";
import HomeManagePropertiesSection from "./components/home_sections/HomeManagePropertiesSection";
import FeedbackButton from "@/components/__shared/ui/feedback/FeedbackButton";
import ClientPageWrapper from "@/components/__shared/hoc/ClientPageWrapper";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import {
  ADS_QUERY,
  HOME_BANNER_QUERY,
  HOME_PAGE_QUERY,
} from "@/lib/utils/sanity/queries";

export default async function Home() {
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
      <>
        <Navbar />
        <main className="overflow-x-hidden bg-secondary-50">
          <HomeLandingPage
            data={filteredHomeData[filteredHomeData.length - 1]}
          />
          <div className="wrapper sm:px-5 lg:px-10">
            <HomePromotionSection data={data} />

            <FeaturedListingAndAds data={filteredAdsData} />

            <HomeRentalDealsSection data={data} />

            <HomeManagePropertiesSection data={data} />

            <HomePopularCities />

            <FeedbackButton data={data} />
          </div>
        </main>
        <ScrollTopAndSocial threshHoldMin={820} threshHoldMax={5206} />
        <Footer />
      </>
    </ClientPageWrapper>
  );
}
