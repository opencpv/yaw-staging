import React from "react";
import ManagePropertiesInfo from "../ManagePropertiesInfo";
import Image from "next/image";

type Props = {};

const HomeManagePropertiesSection = (props: Props) => {
  return (
    <section className="px-5 mx-auto mb-20 space-y-8 max-w-screen-2xl xs:px-5 md:space-y-1">
      <div className="w-full space-y-3.5 mb-14 min-[810px]:w-7/12">
        <div className="flex gap-5 items-start">
          <h2 className="font-[500] w-fit capitalize text-neutral-900">
            Manage Your Properties With Us
          </h2>
          <Image src="/assets/icons/manage.svg" alt="" width={25} height={25} />
        </div>
        <p className="max-w-2xl font-[500] text-neutral-500">
          Effortlessly manage your rental properties with the most advanced
          tools on the market. From rent collection to maintenance, we&apos;ve
          got you covered. Say goodbye to stress and hello to seamless property
          management.
        </p>
      </div>
      <div className="">
        <ul className="space-y-10 sm:space-y-20">
          {[1, 2].map((item, idx) =>
            (idx + 1) % 2 === 0 ? (
              <ManagePropertiesInfo
                key={idx + 1}
                position="right"
                href="/about"
                activity="List your property"
                image="/assets/images/Stock.jpg"
                title="Want to rent your property?"
                body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil temporibus omnis. Repellendus adipisci harum quidem porro, maxime soluta! Accusamus ad amet eveniet culpa, mollitia velit? Sit quam nisi quaerat accusantium commodi ullam, iure reiciendis!"
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
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default HomeManagePropertiesSection;
