import Navbar from "@/components/__shared/Navbar";
import Image from "next/image";
import React from "react";
import TagsSelect from "./components/TagsSelect";
import Footer from "@/components/__shared/footer/Footer";
import FixedSocials from "@/components/FixedSocials";
import ScrollTop from "@/components/__shared/ScrollTop";
import PropertiesListing from "./components/PropertiesListing";

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
      <section className="mb-32 px-5">
        <div className="relative w-full px-4 py-10 mx-auto bg-white shadow-xl xs:px-12 bottom-20 rounded-xl lg:w-10/12">
          <input
            type="search"
            className="border block shadow-xl text-neutral-800 border-[#21A19F] rounded-xl w-full py-6 p-4 sm:pl-12 mx-auto uppercase lg:w-10/12"
            placeholder="Madina, Accra"
          />
        </div>
        <div className="w-full mx-auto text-neutral-500">
          <TagsSelect />
        </div>
      </section>
      <main className="overflow-x-hidden section">
        <PropertiesListing />
      </main>
      <FixedSocials />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default page;
