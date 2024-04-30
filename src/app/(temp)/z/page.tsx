import Navbar from "@/components/__shared/ui/Navbar";
import Footer from "@/components/__shared/ui/footer/Footer";
import React from "react";
import Landing from "./components/Landing";
import Promotions from "./components/sections/Promotions";
import FeaturedListings from "./components/sections/FeaturedListings";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Landing />
      <Promotions />
      <FeaturedListings />
      <Footer />
    </>
  );
};

export default page;
