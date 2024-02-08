"use client";
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

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const hashList = hash.split("&");
      const access_token = hashList[0].split("=")[1];
      const expires_at = hashList[1].split("=")[1];
      const expires_in = hashList[2].split("=")[1];
      const provider_token = hashList[3].split("=")[1];
      const refresh_token = hashList[4].split("=")[1];
      const token_type = hashList[5].split("=")[1];
      const session = {
        access_token,
        expires_at,
        expires_in,
        provider_token,
        refresh_token,
        token_type,
      };
      localStorage.setItem("session", JSON.stringify(session));
    }
  }, []);

  return (
    <>
      <>
        <Navbar />
        <main className="overflow-x-hidden bg-[#F1F1F1]">
          <HomeLandingPage />
          {/* Promotion */}
          <div className="wrapper-2">
            <HomePromotionSection />
            {/* Featured Listings and Ads */}
            <FeaturedListingAndAds />


          {/* Apartment Rentals */}
          <HomeRentalDealsSection />
          {/* Manage Your Properties With Us */}
          <HomeManagePropertiesSection />
          {/* Find Apartments in Popular Cities */}
          <AOSWrapper animation="fade-up">
            <HomePopularCities />
          </AOSWrapper>
          <FeedbackButton />
        </div>
      </main>
      <ScrollTopAndSocial threshHoldMin={820} threshHoldMax={5206} />
      <Footer />
    </>
  );
}
