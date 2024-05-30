import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import legal from "@/enum/about/legal";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import React from "react";
import DealCard from "../ui/DealCard";
import Button from "@/components/__shared/ui/button/Button";
import { HiChevronRight } from "react-icons/hi";

type Props = {};

const RentalDeals = (props: Props) => {
  return (
    <section className="bg-neutral-800 py-10">
      <div className="section wrapper flex flex-col">
        <div className="flex flex-col items-center gap-5 text-center font-medium text-white">
          <div className="flex gap-5 xs:items-center">
            <h2 className="uppercase">Our apartment rental deals</h2>
            <Image
              src="/assets/icons/deals.svg"
              alt="handshake"
              width={25}
              height={25}
            />
          </div>
          <p className="leading-relaxed text-shade-200">
            {legal.companyName} employs the latest data on rental rates and
            apartment availability in real-time to aid you in finding superb
            apartment deals. To identify such deals, we follow a systematic
            approach that includes various steps.
          </p>
        </div>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {[1, 2, 3].map((tag: any, idx: number) => {
            return (
              <FramerWrapper {...fadeUp} key={idx}>
                <DealCard
                  key={idx}
                  title={"Lorem ipsum dolor sit amet. Lorem ipsum"}
                  body={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum"
                  }
                  icon={"/assets/icons/manage.svg"}
                />
              </FramerWrapper>
            );
          })}
        </div>
        <Button
          variant="ghost"
          color="accent"
          href="/about/#t73yjgClfDUknQ=="
          className="mt-10 self-end text-xl font-medium"
        >
          Explore <HiChevronRight size={24} />
        </Button>
      </div>
    </section>
  );
};

export default RentalDeals;
