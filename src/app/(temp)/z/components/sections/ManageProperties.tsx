import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import legal from "@/enum/about/legal";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import React from "react";
import DealCard from "../ui/DealCard";
import ManagePropertiesInfo from "../ui/ManagePropertiesInfo";

type Props = {};

const ManageProperties = (props: Props) => {
  return (
    <section className="bg-[#F2F2F2] py-16">
      <div className="mb-14 w-full space-y-3.5 min-[810px]:w-7/12">
        <div className="flex items-start gap-5">
          <h2 className="w-fit font-[500] uppercase text-neutral-900">
            Manage your properties with us
          </h2>
          <Image
            src="/assets/icons/manage.svg"
            alt="shield"
            width={25}
            height={25}
          />
        </div>
        <p className="max-w-2xl font-[500] text-shade-300">
          Effortlessly manage your rental properties with the most advanced
          tools on the market. From rent collection to maintenance, we've got
          you covered. Say goodbye to stress and hello to seamless property
          management.
        </p>
      </div>
      <div className="">
        {/* <ul className="space-y-10 sm:space-y-20">
          {[1,2].map((card: any, idx: number) =>
              <ManagePropertiesInfo
                key={idx + 1}
                position="right"
                href={card.link}
                activity={card.linkLabel}
                image={""}
                title={card.aboutCardTitle}
                body={card.aboutCardDescription}
              />
            )
          }
        </ul> */}
      </div>
    </section>
  );
};

export default ManageProperties;
