import AOSWrapper from "@/components/__shared/AOSWrapper";
import rentalDeals from "@/enum/deals/rentalDeals";
import Image from "next/image";
import React from "react";
import DealCard from "../DealCard";
import { urlForImage } from "@/lib/utils/sanity/utils";

type Props = {
  data: any;
};

const HomeRentalDealsSection = (props: Props) => {
  return (
    <section className="section space-y-8 md:space-y-14">
      <div className="w-full space-y-3.5 min-[810px]:w-7/12">
        <div className="flex items-start gap-5">
          <h2 className="w-fit font-[500] capitalize text-neutral-900">
            {props.data.tagTitle}
          </h2>
          <Image
            src="/assets/icons/deals.svg"
            alt="handshake"
            width={25}
            height={25}
          />
        </div>
        <p className="max-w-2xl font-[500] text-neutral-500">
          {props.data.tagDescription}
        </p>
      </div>
      <div className="grid items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {props.data.tags.map((tag: any, idx: number) => {
          return (
            // <AOSWrapper key={idx} animation="fade-up">
            <DealCard
              key={id}
              href={tag.url}
              title={tag.title}
              body={tag.description}
              icon={urlForImage(tag.icon.customImageItem)?.url() as string}
            />
            // </AOSWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default HomeRentalDealsSection;
