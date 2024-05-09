import React from "react";
import SideContent from "./SideContent";
import { BLOG_CATEGORY_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@sanity/react-loader";

type Props = {};

const SideContentCategories = async (props: Props) => {
  let blogCategoriesData: any, categories: any;
  try {
    blogCategoriesData = await loadQuery<SanityDocument[]>(BLOG_CATEGORY_QUERY);
    categories = blogCategoriesData.data;
  } catch (error) {
    blogCategoriesData = [];
    categories = [];
  }

  return (
    <ul className="flex flex-col gap-2 divide-y text-neutral-800">
      {categories.map((category: any) => (
        <li
          key={category.category_title}
          className="py-5 text-center font-bold"
        >
          {category.category_title}
        </li>
      ))}
      <li className="py-5 text-center font-bold">Something</li>
      <li className="py-5 text-center font-bold">Something</li>
      <li className="py-5 text-center font-bold">Something</li>
      <li className="py-5 text-center font-bold">Something</li>
    </ul>
  );
};

export default SideContentCategories;
