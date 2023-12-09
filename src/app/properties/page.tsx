"use client";
import Navbar from "@/components/__shared/Navbar";
import Image from "next/image";
import React from "react";
import listings from "@/enum/demodb/listings";
import TagsSelect from "./components/TagsSelect";
import Footer from "@/components/__shared/footer/Footer";
import FixedSocials from "@/components/FixedSocials";
import ScrollTop from "@/components/__shared/ScrollTop";
import Button from "@/components/__shared/Button";
import ListingCard from "@/components/__shared/listing/ListingCard";

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
        {/* Listing */}
        <section className="mb-5 space-y-5 sm:space-y-0 sm:grid grid-cols-autofit-listing-card gap-x-3 gap-y-10 transition-all">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              cardType="2"
              href={listing.href}
              images={listing.images}
              liked={listing.liked}
              membership={
                listing.membership as
                  | "Certified"
                  | "Verified"
                  | "Unverified"
                  | "None"
                  | "none"
                  | ""
              }
              monthlyAmount={listing.monthlyAmount}
              paymentStructure={
                listing.paymentStructure as
                  | "Yearly"
                  | "Bi-Annually"
                  | "Quarterly"
                  | "Every-6-Months"
                  | "Every-3-Years"
              }
              propertyDescription={listing.propertyDescription}
              price={listing.price}
              propertyType={listing.propertyType}
              rating={listing.rating}
              ratingCount={listing.ratingCount}
              deal={
                listing.deal as
                  | "Editor's Choice"
                  | "Price Drop"
                  | "Best Value"
                  | "None"
                  | "none"
                  | ""
              }
            />
          ))}
        </section>
        <div className="flex justify-center mb-40">
          <Button color="accent" className="my-8">
            Load more
          </Button>
        </div>
      </main>
      <FixedSocials />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default page;
