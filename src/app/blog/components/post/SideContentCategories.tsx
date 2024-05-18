import React from "react";
import { BLOG_CATEGORY_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@sanity/react-loader";
import Link from "next/link";
import slugify from "@/lib/utils/slugify";

const SideContentCategories = async () => {
  let blogCategoriesData: any, categories: any;
  try {
    blogCategoriesData = await loadQuery<SanityDocument[]>(BLOG_CATEGORY_QUERY);
    categories = blogCategoriesData.data;
  } catch (error) {
    blogCategoriesData = [];
    categories = [];
  }

  return (
    <div className="flex flex-col gap-2 divide-y text-neutral-800">
      {categories.map((category: any) => (
        <Link
          href={`/blog/${slugify(category.category_title)}`}
          key={category.category_title}
          className="py-5 text-center font-bold"
        >
          {category.category_title}
        </Link>
      ))}
    </div>
  );
};

export default SideContentCategories;
