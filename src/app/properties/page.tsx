import Navbar from "@/components/__shared/ui/Navbar";
import Image from "next/image";
import React from "react";
import TagsSelect from "./components/TagsSelect";
import Footer from "@/components/__shared/ui/footer/Footer";
import FixedSocials from "@/components/FixedSocials";
import ScrollTop from "@/components/__shared/ui/ScrollTop";
import PropertiesListing from "./components/PropertiesListing";
import SearchCity from "./components/SearchCity";


const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-40 sm:h-60 aspect-video w-full">
        <Image
          src="/assets/images/Stock.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Search */}
      <section className="flex w-full flex-col items-center">
        <SearchCity />
        <div className="mx-auto w-full text-neutral-500">
          <TagsSelect />
        </div>
      </section>
      <PropertiesListing />
      <FixedSocials thresholdMin={300} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default page;
