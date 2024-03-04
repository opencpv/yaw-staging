import React from "react";
import ManagePropertiesInfo from "../ManagePropertiesInfo";
import Image from "next/image";
import { urlForImage } from "@/lib/utils/sanity/utils";

type Props = { data: any };

const HomeManagePropertiesSection = (props: Props) => {
  return (
    <section className="section space-y-8 md:space-y-1">
      <div className="mb-14 w-full space-y-3.5 min-[810px]:w-7/12">
        <div className="flex items-start gap-5">
          <h2 className="w-fit font-[500] capitalize text-neutral-900">
            {props.data.aboutTitle}
          </h2>
          <Image
            src="/assets/icons/manage.svg"
            alt="shield"
            width={25}
            height={25}
          />
        </div>
        <p className="max-w-2xl font-[500] text-neutral-500">
          {props.data.aboutDescription}
        </p>
      </div>
      <div className="">
        <ul className="space-y-10 sm:space-y-20">
          {props.data.aboutCards.map((card: any, idx: number) =>
            (idx + 1) % 2 === 0 ? (
              <ManagePropertiesInfo
                key={idx + 1}
                position="right"
                href={card.link}
                activity={card.linkLabel}
                image={urlForImage(card.aboutCardImage)?.url() as string}
                title={card.aboutCardTitle}
                body={card.aboutCardDescription}
              />
            ) : (
              <ManagePropertiesInfo
                key={idx + 1}
                href="/about"
                activity="Manage your property"
                image="/assets/images/Stock.jpg"
                title="Want to rent your property?"
                body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil temporibus omnis. Repellendus adipisci harum quidem porro, maxime soluta! Accusamus ad amet eveniet culpa, mollitia velit? Sit quam nisi quaerat accusantium commodi ullam, iure reiciendis!"
              />
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default HomeManagePropertiesSection;
