import Navbar from "@/components/__shared/ui/Navbar";
import Footer from "@/components/__shared/ui/footer/Footer";
import React from "react";
import Landing from "./components/Landing";
import Promotions from "./components/sections/Promotions";
import FeaturedListings from "./components/sections/FeaturedListings";
import RentalDeals from "./components/sections/RentalDeals";
import ManagePropertiesSection from "./components/sections/ManagePropertiesSection";
import PopularCities from "./components/sections/PopularCities";
import Ad from "./components/sections/Ad";
import ScrollTopAndSocial from "@/components/__shared/ui/ScrollTopAndSocial";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Landing />
      <Promotions />
      {/* <FeaturedListings /> */}
      <Ad />
      <RentalDeals />
      <ManagePropertiesSection />
      <PopularCities />
      <ScrollTopAndSocial threshHoldMin={820} threshHoldMax={5206} />
      <Footer />
    </>
  );
};

export default page;
