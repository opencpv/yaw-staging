import Navbar from "@/components/__shared/Navbar";
import Image from "next/image";
import React from "react";
import TagsSelect from "./components/TagsSelect";
import Footer from "@/components/__shared/footer/Footer";
import FixedSocials from "@/components/FixedSocials";
import ScrollTop from "@/components/__shared/ScrollTop";
import PropertiesListing from "./components/PropertiesListing";
import SearchCity from "./components/SearchCity";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-72">
        <Image
          src="/assets/images/Stock.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Search */}
      <section className="mb-20 px-5">
        <SearchCity />
        <div className="w-full mx-auto text-neutral-500">
          <TagsSelect />
        </div>
      </section>
      <main className="overflow-x-hidden wrapper">
        <PropertiesListing />
      </main>
      <FixedSocials />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default page;
