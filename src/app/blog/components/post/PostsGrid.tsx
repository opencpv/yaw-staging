"use client";
import * as React from "react";
import PostSummary from "./PostSummary";
import { usePathname } from "next/navigation";
import convertSlugToString from "@/lib/utils/convertSlugToString";
import { urlForImage } from "@/lib/utils/sanity/utils";
import SkeletonLong from "@/components/__shared/ui/skeleton/SkeletonLong";
import capitalizeName from "@/lib/utils/stringManipulation";

interface IPostsGridProps {
  posts: any[];
}

const PostsGrid: React.FunctionComponent<IPostsGridProps> = (props) => {
  const path = usePathname();
  const currentCategory = convertSlugToString(path?.split("/")[2] as string);
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    if (currentCategory === "all") {
      setPosts(props.posts);
      setLoading(false);
    } else {
      const filteredPosts = props.posts.filter(
        (post) =>
          post.category.category_title ===
          capitalizeName(convertSlugToString(currentCategory)),
      );
      setPosts(filteredPosts);
      console.log(filteredPosts);
      setLoading(false);
    }
  }, [currentCategory]);
  return (
    <>
      <section className="space-y-16">
        {loading ? (
          <SkeletonLong count={3} className="w-full" />
        ) : (
          <>
            {posts.length > 0 ? (
              <>
                {posts.map((post, idx) => (
                  <PostSummary
                    key={idx + 1}
                    author={post?.author?.name}
                    image={urlForImage(post?.featured_image)?.url() as string}
                    title={post?.title}
                    body={post?.summary}
                    postedAt="November 7th 2023"
                    rating={post?.rating}
                    href="/blog/c/p"
                  />
                ))}
              </>
            ) : (
              <>
                {posts.length == 0 && (
                  <p className="mt-8">No posts under current category</p>
                )}
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default PostsGrid;
