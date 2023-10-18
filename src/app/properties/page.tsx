"use client";
import Navbar from "@/components/__shared/Navbar";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import ListingCard from "../about/components/ListingCard";
import listings from "@/content/demodb/listings";
import ListingCard2 from "../about/components/ListingCard2";

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
          <div className="relative w-10/12 px-12 py-10 mx-auto bg-white shadow-xl bottom-20 rounded-xl">
            <input
              type="text"
              className="border block shadow-xl border-[#21A19F] rounded-xl w-10/12 py-6 pl-12 mx-auto uppercase"
              placeholder="Madina, Accra"
            />
          </div>
          <ul className="flex items-center justify-center w-10/12 gap-16 mx-auto text-neutral-500">
            <li>All</li>
            <li>Top Rated</li>
            <li>Editor&apos;s choice</li>
            <li>Price Drop</li>
            <li>Best Value</li>
            <li>
              <FaCaretDown className="text-[#21A19F]" />
            </li>
            <li>Advanced search</li>
          </ul>
        </section>
        {/* Listing */}
        <section className="grid px-5 mx-auto mt-32 grid-cols-autofit-listing-card gap-x-3 gap-y-10 max-w-screen-2xl">
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
      </main>
    </>
  );
};

export default PropertiesPage;
