import AOSWrapper from "@/components/__shared/AOSWrapper";
import rentalDeals from "@/enum/deals/rentalDeals";
import Image from "next/image";
import React from "react";
import DealCard from "../DealCard";

type Props = {};

const HomeRentalDealsSection = (props: Props) => {
  return (
    <section className="section space-y-8 md:space-y-14">
      <div className="w-full space-y-3.5 min-[810px]:w-7/12">
        <div className="flex items-start gap-5">
          <h2 className="w-fit font-[500] capitalize text-neutral-900">
            Our Apartment Rental Deals
          </h2>
          <Image
            src="/assets/icons/deals.svg"
            alt="handshake"
            width={25}
            height={25}
          />
        </div>
        <p className="max-w-2xl font-[500] text-neutral-500">
          RentRightGH employs the latest data on rental rates and apartment
          availability in real-time to aid you in finding superb apartment
          deals. To identify such deals, we follow a systematic approach that
          includes various steps.
        </p>
      </div>
      <div className="grid items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rentalDeals.map((deal, idx) => {
          const { id, title, body, icon, href } = deal;
          return (
            <AOSWrapper key={id} animation="fade-up">
              <DealCard href={href} title={title} body={body} icon={icon} />
            </AOSWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default HomeRentalDealsSection;
