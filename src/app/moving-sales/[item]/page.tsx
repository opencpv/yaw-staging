import Button from "@/components/__shared/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="my-10 section text-neutral-400">
      <div className="flex items-center gap-2 mb-5 text-sm">
        <Link href="/moving-sales">Shop</Link>
        <FaChevronRight className="text-neutral-400" />
        <p className="font-[600] text-neutral-800">Item name</p>
      </div>
      <section className="grid grid-cols-3 gap-2 h-[27rem] mb-16">
        <div className="relative col-span-1">
          <Image
            src="/assets/images/niceHome.png"
            alt=""
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-2">
          {[1, 2, 3, 4].map((image, idx) => (
            <div key={idx + 1} className="relative">
              <Image
                src="/assets/images/niceHome.png"
                alt=""
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-3 gap-14">
        <div className="col-span-2">
          <div className="flex gap-5 mb-10">
            <div className="w-5 h-16 bg-neutral-200"></div>
            <h3 className="text-xl font-[600]">Lorem ipsum dolor sit amet consectetur.</h3>
            <Button className="text-white rounded-md bg-accent-50">Category Name</Button>
          </div>
          <p className="mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            praesentium aspernatur asperiores libero ea velit dicta non esse.
            Dolore itaque odit nemo tenetur numquam at unde illum modi
            blanditiis aliquid? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto ab perferendis voluptate ea laborum
            voluptates dolores, facilis ex, earum sed, deserunt eligendi quas?
            Esse beatae ex voluptate nostrum sequi magnam. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Voluptate, nam neque
            aspernatur omnis molestiae necessitatibus architecto eaque vero et
            sit aliquam totam molestias voluptas error fuga laudantium accusamus
            distinctio facilis?
          </p>
          <div className="space-y-3">
            <h3 className="text-xl font-[600]">Lorem ipsum dolor sit amet consectetur.</h3>
            <div className="flex">

            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </section>
    </main>
  );
};

export default page;
