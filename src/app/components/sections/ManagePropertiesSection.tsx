import React from "react";
import ManagePropertiesInfo from "../ui/ManagePropertiesInfo";
import Image from "next/image";
import { urlForImage } from "@/lib/utils/sanity/utils";

type Props = { data: any };

const ManagePropertiesSection = (props: Props) => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="section wrapper space-y-14 py-24">
        <div className="w-full space-y-3.5">
          <div className="flex items-start gap-5">
            <h2 className="w-fit uppercase text-neutral-900">
              {props.data.aboutTitle}
            </h2>
            <Image
              src="/assets/icons/manage.svg"
              alt="shield"
              width={25}
              height={25}
            />
          </div>
          <p className="max-w-2xl font-medium text-shade-200">
            {props.data.aboutDescription}
          </p>
        </div>
        <div className="">
          <ul className="space-y-10 sm:space-y-20">
            {props.data.aboutCards.map((card: any) => (
              <ManagePropertiesInfo
                key={card._key}
                activity={card.linkLabel}
                image={urlForImage(card.aboutCardImage)?.url() as string}
                title={card.aboutCardTitle}
                body={card.aboutCardDescription}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ManagePropertiesSection;
