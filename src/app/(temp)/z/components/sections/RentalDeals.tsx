import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import legal from "@/enum/about/legal";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import React from "react";
import DealCard from "../ui/DealCard";

type Props = {};

const RentalDeals = (props: Props) => {
  return (
    <section className="bg-[#F4F4F4] py-10">
      <div className="section wrapper">
        <div className="flex flex-col items-center gap-5 text-center font-medium text-shade-300">
          <div className="flex items-center gap-5 ">
            <h2 className="uppercase">Our apartment rental deals</h2>
            <Image
              src="/assets/icons/deals.svg"
              alt="handshake"
              width={25}
              height={25}
            />
          </div>
          <p className="leading-relaxed">
            {legal.companyName} employs the latest data on rental rates and
            apartment availability in real-time to aid you in finding superb
            apartment deals. To identify such deals, we follow a systematic
            approach that includes various steps.
          </p>
        </div>
        <div className="mt-12 grid items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((tag: any, idx: number) => {
            return (
              <FramerWrapper {...fadeUp} key={idx}>
                <DealCard
                  key={idx}
                  href={"/about"}
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
      </div>
    </section>
  );
};

export default RentalDeals;
