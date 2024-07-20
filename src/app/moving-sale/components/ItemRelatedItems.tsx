import React from "react";
import ItemCard from "./ItemCard";
import { useSearchParams } from "next/navigation";
import { useFetchPopularItems, useFetchRelatedItems } from "../services";
import { ScrollShadow } from "@nextui-org/react";

type Props = {};

const ItemRelatedItems = (props: Props) => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") || "";
  const id = searchParams?.get("id") || "";

  const { data: relatedItems, error } = useFetchRelatedItems({
    category,
    id: parseInt(id as string),
  });

  const { data: popularItems } = useFetchPopularItems({
    id: parseInt(id as string),
  });

  if (relatedItems?.length! > 0)
    return (
      <section className="mt-20">
        <h3 className="mb-6 text-shade-200">
          Related items ({relatedItems?.length})
        </h3>
        <ScrollShadow
          orientation="horizontal"
          isEnabled={false}
          hideScrollBar
          className="flex gap-5"
      >
          {relatedItems?.map((item) => (
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
          </ScrollShadow>
      </section>
    );
  else
    return (
      <section
        className={`mt-20 ${popularItems?.length === 0 ? "hidden" : ""}`}
      >
        <h3 className="mb-6 text-shade-200">
          Popular items ({popularItems?.length})
        </h3>
        <ScrollShadow
          orientation="horizontal"
          hideScrollBar
          isEnabled={false}
          className="flex gap-5"
      >
          {popularItems?.map((item) => (
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
        </ScrollShadow>
      </section>
    );
};

export default ItemRelatedItems;
