"use client";
import * as React from "react";
import PostSummary from "./PostSummary";
import { usePathname } from "next/navigation";
import convertSlugToString from "@/lib/utils/convertSlugToString";
import { urlForImage } from "@/lib/utils/sanity/utils";
import SkeletonLong from "@/components/__shared/ui/skeleton/SkeletonLong";
import slugify from "@/lib/utils/slugify";
import SkeletonTextual from "@/components/__shared/ui/skeleton/SkeletonTextual";

interface IPostsGridProps {
  posts: any[];
  isResultFromSearch: boolean;
}

const PostsGrid: React.FunctionComponent<IPostsGridProps> = (props) => {
  const path = usePathname();
  const currentCategory = path?.split("/")[2];
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    if (props.isResultFromSearch || currentCategory === "all") {
      setPosts(props.posts);
    } else {
      const filteredPosts = props.posts.filter(
        (post) => slugify(post.category.category_title) === currentCategory,
      );
      setPosts(filteredPosts);
    }

    setLoading(false);
  }, [props.posts]);

  return (
    <>
      <section className="space-y-16">
        {loading ? (
          <>
            {Array.from(Array(3).keys()).map((n) => (
              <div key={n} className="grid gap-x-10 gap-y-5 lg:grid-cols-3">
                <SkeletonLong
                  count={1}
                  className="aspect-video w-full md:h-full lg:col-span-1 lg:max-w-full"
                />
                <SkeletonTextual className="max-w-3xl space-y-3 xs:min-w-[25rem] lg:col-span-2" />
              </div>
            ))}
          </>
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
                    summary={post?.summary}
                    rating={post?.rating}
                    href={
                      `/blog/${slugify(
                        post?.category?.category_title,
                      )}/${slugify(post?.title)}?id=${post?._id}` as string
                    }
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
