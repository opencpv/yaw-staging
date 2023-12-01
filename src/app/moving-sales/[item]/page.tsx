import Button from "@/components/__shared/Button";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ItemCard from "../components/ItemCard";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="my-10 section text-neutral-400">
      <div className="flex items-center gap-2 mb-5 text-sm">
        <Link href="/moving-sales">Shop</Link>
        <FaChevronRight className="text-neutral-400" />
        <p className="font-[600] text-neutral-800">Item name</p>
      </div>
      <section className="grid grid-cols-3 gap-2 mb-16 h-60 md:h-[27rem]">
        <div className="relative col-span-1 hidden min-[350px]:block">
          <Image
            src="/assets/images/about/young-couple.webp"
            alt=""
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="grid grid-cols-1 col-span-3 gap-2 min-[350px]:col-span-2 sm:grid-cols-2">
          {[1, 2, 3, 4].map((image, idx) => (
            <div key={idx + 1} className="relative even:hidden sm:even:block ">
              <Image
                src="/assets/images/about/young-couple.webp"
                alt=""
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-x-20 gap-y-10 mb-20 lg:grid-cols-3">
        {/* Grid col */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-x-20 gap-y-5 mb-16">
            <h3 className="text-xl text-neutral-500 font-[500]">
              Product title
            </h3>
            <div className="bg-accent-50 text-white rounded-md p-3 text-sm">
              Category name
            </div>
          </div>
          <div className="space-y-3 mb-16">
            <h2 className="text-3xl font-[700] text-primary-500">GHS 16.98</h2>
            <div className="bg-primary-100 w-fit text-white p-2 rounded-xl">
              Negotiable
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-neutral-500">
              <p className="font-[500]">Condition</p>
              <div className="bg-[#FFE3B0] text-primary-500 text-xs py-1 px-8 rounded-xl">
                Used
              </div>
            </div>
          </div>
          <p>
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
        </div>
        {/* Grid col */}
        <div className="col-span-1 w-full xs:w-96 lg:w-full">
          <div className="bg-white p-8 space-y-3 w-full rounded-xl shadow-large lg:mt-12">
            <Button color="accent" className="block w-full max-w-full">
              Call me
            </Button>
            <Button color="accent" variant="outline" className="block w-full max-w-full">
              Send Message
            </Button>
          </div>
        </div>
      </section>
      <section className="">
        {/* Related products */}
        <h3 className="text-xl text-neutral-500 font-[500] mb-5">
          Related products
        </h3>
        <SliderMultiItems
          hasNavAndPagination={false}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 3.5,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
          items={[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <ItemCard
              key={idx + 1}
              href={`/moving-sales/${1}`}
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet consectetur. Viverra mattis lacus mi dolor sed et leo id mus ultrices."
              image="/assets/images/about/black-businessman.webp"
              price={16.48}
            />
          ))}
        />
      </section>
    </main>
  );
};

export default page;
