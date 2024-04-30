import Navbar from "@/components/__shared/ui/Navbar";
import Footer from "@/components/__shared/ui/footer/Footer";
import React from "react";
import Landing from "./components/Landing";
import Promotions from "./components/sections/Promotions";
import FeaturedListings from "./components/sections/FeaturedListings";
import RentalDeals from "./components/sections/RentalDeals";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Landing />
      <Promotions />
      <FeaturedListings />
      <RentalDeals />
      <Footer />
    </>
  );
};

export default page;
