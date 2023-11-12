"use client";
import Navbar from "@/components/__shared/Navbar";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import listings from "@/enum/demodb/listings";
import ListingCard2 from "../about/components/ListingCard2";
import TagsSelect from "./components/TagsSelect";
import { Button, Switch } from "@nextui-org/react";
import Footer from "../components/Footer";
import FixedSocials from "@/components/FixedSocials";
import ScrollTop from "@/components/ScrollTop";

type Props = {};

const PropertiesPage = (props: Props) => {
  const { images } = useAssets();
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <div className="relative w-full h-72">
          <Image
            src="/assets/images/Stock.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Search */}
        <section className="px-5 mx-auto max-w-screen-2xl xs:px-10">
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
        {/* Listing */}
        <section className="px-5 mx-auto mt-32 mb-10 space-y-5 sm:space-y-0 sm:grid grid-cols-autofit-listing-card gap-x-3 gap-y-10 max-w-screen-2xl">
          {listings.map((listing) => (
            <ListingCard2
              key={listing.id}
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
        <div className="flex justify-center">
          <Button className="my-8 text-white bg-accent-50">Load more</Button>
        </div>
      </main>
      <FixedSocials />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default PropertiesPage;
