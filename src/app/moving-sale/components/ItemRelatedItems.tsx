import SliderMultiItems from "@/components/__shared/ui/sliders/SliderMultiItems";
import React from "react";
import ItemCard from "./ItemCard";
import { useSearchParams } from "next/navigation";
import { useFetchRelatedItems } from "../services";

type Props = {};

const ItemRelatedItems = (props: Props) => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") || "";
  const id = searchParams?.get("id") || "";

  const { data: items, error } = useFetchRelatedItems({
    category,
    id: parseInt(id as string),
  });

  return (
    <section className={`${items?.length === 0 || error ? "hidden" : ""}`}>
      <h3 className="mb-6 text-shade-200">Related items ({items?.length})</h3>
      <SliderMultiItems
        hasNavAndPagination={false}
        slidesPerView={1}
        spaceBetween={25}
        breakpoints={{
          500: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        swiperSlideClassName="max-w-96"
        items={items?.map((item) => (
          <ItemCard
            key={item.id}
            href={`/moving-sale/${item.title}?${new URLSearchParams({
              id: item.id.toString(),
              title: item.title,
              category: item.category,
              term: item.term,
              price: item.price.toString(),
              condition: item.condition,
              seller: item.profiles?.full_name as string,
              description: item.description,
            })}`}
            title={item.title}
            description={item.description}
            image="/assets/images/about/young-couple.webp"
            price={item.price}
          />
        ))}
      />
    </section>
  );
};

export default ItemRelatedItems;
