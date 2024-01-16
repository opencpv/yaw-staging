import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";
import React from "react";
import ItemCard from "./ItemCard";

type Props = {};

const ItemRelatedItems = (props: Props) => {
  return (
    <section>
      {/* Related products */}
      <h3 className="text-xl text-neutral-500 font-[500] mb-6">
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
            href={`/moving-sale/${1}`}
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur. Viverra mattis lacus mi dolor sed et leo id mus ultrices."
            image="/assets/images/about/black-businessman.webp"
            price={16.48}
          />
        ))}
      />
    </section>
  );
};

export default ItemRelatedItems;
