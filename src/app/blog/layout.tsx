import Footer from "@/components/__shared/footer/Footer";
import Navbar from "@/components/__shared/Navbar";
import FeaturedListings from "@/components/__shared/listing/FeaturedListings";
import ScrollTopAndSocial from "@/components/ui/ScrollTopAndSocial";
import React from "react";
import SurveyToast from "../components/survey/SurveyToast";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <div className="section">
        <FeaturedListings className="mb-20" />
      </div>
      <div>
        <SurveyToast />
      </div>
      <ScrollTopAndSocial />
      <Footer />
    </>
  );
};

export default layout;
