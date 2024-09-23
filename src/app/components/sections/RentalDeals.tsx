import Image from "next/image";
import React from "react";
import DealCard from "../ui/DealCard";
import { HiChevronRight } from "react-icons/hi";
import { urlForImage } from "@/lib/utils/sanity/utils";
import dynamic from "next/dynamic";
import { LinkButton } from "@/components/__shared/ui/button";
import { fadeIn } from "@/lib/animations";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);

type Props = {
  data: any;
};

const RentalDeals = (props: Props) => {
  return (
    <section className="bg-neutral-800 py-10" id="test-deal">
      <div className="section wrapper flex flex-col">
        <div className="flex flex-col items-center gap-5 text-center font-medium text-white">
          <div className="flex gap-5 xs:items-center">
            <h2 className="uppercase">{props.data.tagTitle}</h2>
            <Image
              src="/assets/icons/deals.svg"
              alt="handshake"
              width={25}
              height={25}
            />
          </div>
          <p className="leading-relaxed text-shade-200">
            {props.data.tagDescription}
          </p>
        </div>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {props.data.tags.map((tag: any) => {
            return (
              <FramerWrapper {...fadeIn} key={tag._key}>
                <DealCard
                  title={tag.title}
                  body={tag.description}
                  icon={urlForImage(tag.icon.customImageItem)?.url() as string}
                />
              </FramerWrapper>
            );
          })}
        </div>
        <LinkButton
          variant="link"
          color="accent"
          href="/about/#t73yjgClfDUknQ=="
          className="mt-10 self-end"
        >
          Explore <HiChevronRight size={24} />
        </LinkButton>
      </div>
    </section>
  );
};

export default RentalDeals;
