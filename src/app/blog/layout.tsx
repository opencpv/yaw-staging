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
      <main className="pb-8 sm:pb-14">
        {children}
        <div className="section px-5 sm:px-10">
          <FeaturedListings />
        </div>
        <div className="mt-20">
          <FeedbackButton />
        </div>
        <ScrollTopAndSocial threshHoldMin={300} threshHoldMax={2500} />
      </main>
      <Footer />
    </>
  );
};

export default layout;
