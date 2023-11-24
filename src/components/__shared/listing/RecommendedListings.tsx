import React from "react";
import SliderMultiItems from "../sliders/SliderMultiItems";
import ListingCard from "./ListingCard";
import listingsdb from "@/enum/demodb/listings";

type Props = {
    className?: string;
};

const RecommendedListings = ({className}: Props) => {
  return (
    <section className={`w-full h-fit ${className}`}>
      {
        <SliderMultiItems
          hasNavAndPagination={false}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 3.5,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
          items={listingsdb.map((listing) => (
            <ListingCard
              key={listing.id}
              propertyType={listing.propertyType}
              propertyDescription={listing.propertyDescription}
              images={listing.images}
              price={listing.price}
              paymentStructure={listing.paymentStructure as PaymentStructure}
              monthlyAmount={listing.monthlyAmount}
              deal={listing.deal as Deal}
              membership={listing.membership as Membership}
              rating={listing.rating}
              ratingCount={listing.ratingCount}
              liked={listing.liked}
              href={listing.href}
            />
          ))}
        />
      }
    </section>
  );
};

export default RecommendedListings;
