import React from "react";
import Category from "./Category";
import supabase from "@/lib/utils/supabase/supabaseClient";

type Props = {};

const Categories = async (props: Props) => {
  const { data: categories } = await supabase
    .from("product_category")
    .select("category");

  return (
    <section className="mx-auto mb-10 flex justify-center gap-5 overflow-x-auto max-xl:hidden">
      {categories?.map(({ category }) => (
        <Category
          key={category as string}
          category={category}
          image="/assets/images/about/young-couple.webp"
        />
      ))}
    </section>
  );
};

export default Categories;
