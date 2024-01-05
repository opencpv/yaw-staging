import Footer from "@/components/__shared/footer/Footer";
import Navbar from "@/components/__shared/Navbar";
import FeaturedListings from "@/components/__shared/listing/FeaturedListings";
import ScrollTopAndSocial from "@/components/ui/ScrollTopAndSocial";
import React from "react";
import FeedbackButton from "@/components/feedback/FeedbackButton";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <div className="wrapper">
        <FeaturedListings className="mb-20" />
      </div>
      <div>
        <FeedbackButton />
      </div>
      <ScrollTopAndSocial />
      <Footer />
    </>
  );
};

export default layout;
