"use client";
import React, { useEffect, useMemo } from "react";
import TabsAndSearch from "./TabsAndSearch";
import PostsGrid from "../post/PostsGrid";
import Pagination, { usePagination } from "@/components/__shared/ui/pagination";
import { usePathname } from "next/navigation";
import slugify from "@/lib/utils/slugify";

type Props = {
  categories: string[];
  posts: any[];
};

const SummaryPostView = (props: Props) => {
  const path = usePathname();
  const currentCategory = path?.split("/")[2];
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState<string>("");
  const [searchedBlog, setSearchedBlog] = React.useState<any[] | undefined>(
    undefined,
  );
  const blogPosts = useMemo(
    () => (searchedBlog ? searchedBlog : posts),
    [searchedBlog, posts],
  );

  const handleSearch = async () => {
    const res = await fetch(`${location.origin}/api/blog?search=${searchText}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setSearchedBlog(data);
  };

  const {
    currentItems: paginatedPosts,
    handlePageClick,
    pageCount,
  } = usePagination({
    items: blogPosts,
    itemsPerPage: 5,
  });

  useEffect(() => {
    setLoading(true);
    if (searchedBlog || currentCategory === "all") {
      setPosts(props.posts);
    } else {
      const filteredPosts = props.posts.filter(
        (post) => slugify(post.category.category_title) === currentCategory,
      );
      setPosts(filteredPosts);
    }

    setLoading(false);
  }, [props.posts, currentCategory, searchedBlog]);

  useEffect(() => {
    if (searchText === "" && searchedBlog) {
      setSearchedBlog(undefined);
    }
  }, [searchText, paginatedPosts, searchedBlog]);

  return (
    <div className="wrapper">
      <TabsAndSearch
        categories={props.categories.map(
          (category: any) => category.category_title,
        )}
        handleSearch={handleSearch}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex items-center justify-center text-neutral-500">
        <PostsGrid
          posts={paginatedPosts}
          isResultFromSearch={searchedBlog ? true : false}
          loading={loading}
        />
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export default SummaryPostView;
