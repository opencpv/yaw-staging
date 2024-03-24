import { useEffect } from "react";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/components/__shared/footer/Footer";
import ScrollTopAndSocial from "@/components/ui/ScrollTopAndSocial";
import FeaturedListingAndAds from "./components/FeaturedListingAndAds";
import HomePopularCities from "./components/home_sections/HomePopularCities";
import HomeLandingPage from "./components/home_sections/HomeLandingPage";
import HomePromotionSection from "./components/home_sections/HomePromotionSection";
import HomeRentalDealsSection from "./components/home_sections/HomeRentalDealsSection";
import HomeManagePropertiesSection from "./components/home_sections/HomeManagePropertiesSection";
import FeedbackButton from "@/components/feedback/FeedbackButton";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import ClientPageWrapper from "@/components/__shared/ClientPageWrapper";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { HOME_PAGE_QUERY } from "@/lib/utils/sanity/queries";

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(HOME_PAGE_QUERY);
  const data = initial.data[0];

  return (
    <ClientPageWrapper>
      <>
        <Navbar />
        <main className="overflow-x-hidden bg-secondary-50">
          <HomeLandingPage data={data} />
          {/* Promotion */}
          <div className="wrapper-2">
            <HomePromotionSection data={data} />
            {/* Featured Listings and Ads */}
            <FeaturedListingAndAds data={data} />

            {/* Apartment Rentals */}
            <HomeRentalDealsSection data={data} />
            {/* Manage Your Properties With Us */}
            <HomeManagePropertiesSection data={data} />
            {/* Find Apartments in Popular Cities */}
            <AOSWrapper animation="fade-up">
              <HomePopularCities />
            </AOSWrapper>
            <FeedbackButton data={data} />
          </div>
        </main>
        <ScrollTopAndSocial threshHoldMin={820} threshHoldMax={5206} />
        <Footer />
      </>
    </ClientPageWrapper>
  );
}
