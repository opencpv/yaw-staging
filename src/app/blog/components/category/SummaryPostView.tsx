"use client";
import React, { useEffect } from "react";
import TabsAndSearch from "./TabsAndSearch";
import PostsGrid from "../post/PostsGrid";

type Props = {
  categories: string[];
  posts: any[];
};

const SummaryPostView = ({ categories, posts }: Props) => {
  const [searchText, setSearchText] = React.useState<string>("");
  const [searchedBlog, setSearchedBlog] = React.useState<any[] | undefined>(
    undefined,
  );

  const handleSearch = async () => {
    const res = await fetch(`${location.origin}/api/blog?search=${searchText}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setSearchedBlog(data);
  };

  useEffect(() => {
    if (searchText === "" && searchedBlog) {
      setSearchedBlog(undefined);
    }
  }, [searchText]);

  return (
    <div className="wrapper">
      <TabsAndSearch
        categories={categories.map((category: any) => category.category_title)}
        handleSearch={handleSearch}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex items-center justify-center pb-10 text-neutral-500">
        <PostsGrid
          posts={searchedBlog ? searchedBlog : posts}
          isResultFromSearch={searchedBlog ? true : false}
        />
      </div>
      {/* <p className="mb-20 text-center">pagination</p> */}
    </div>
  );
};

export default SummaryPostView;
