"use client";
import { useEffect } from "react";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/components/__shared/footer/Footer";
import SurveyToast from "./components/survey/SurveyToast";
import ScrollTopAndSocial from "@/components/ui/ScrollTopAndSocial";
import FeaturedListingAndAds from "./components/FeaturedListingAndAds";
import HomePopularCities from "./components/home_sections/HomePopularCities";
import HomeLandingPage from "./components/home_sections/HomeLandingPage";
import HomePromotionSection from "./components/home_sections/HomePromotionSection";
import HomeRentalDealsSection from "./components/home_sections/HomeRentalDealsSection";
import HomeManagePropertiesSection from "./components/home_sections/HomeManagePropertiesSection";

export default function Home() {


  return (
    <>
      <Navbar />
      <main className="pb-20 overflow-x-hidden">
        <HomeLandingPage />
        {/* Promotion */}
        <HomePromotionSection />
        {/* Featured Listings and Ads */}
        <FeaturedListingAndAds />
        {/* Apartment Rentals */}
        <HomeRentalDealsSection />
        {/* Manage Your Properties With Us */}
        <HomeManagePropertiesSection />
        {/* Find Apartments in Popular Cities */}
        <HomePopularCities />
        <SurveyToast />
      </main>
      <ScrollTopAndSocial />
      <Footer />
    </>
  );
}
