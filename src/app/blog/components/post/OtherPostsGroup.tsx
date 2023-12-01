import React from "react";
import OtherPosts from "./OtherPosts";

type Props = {};

const OtherPostsGroup = (props: Props) => {
  return (
    <>
      {/* Recent posts */}
      <OtherPosts
        title="Recent posts"
        posts={[1, 2, 3].map((post, idx) => ({
          title: "Market Voice: Interview with the wild bunch",
          author: "Jane Doe",
          image: "/assets/images/about/about-slider-img.webp",
          href: "/blog/c/p",
        }))}
        className="mb-5"
      />
      {/* Popular posts */}
      <OtherPosts
        title="Popular posts"
        posts={[1, 2, 3].map((post, idx) => ({
          title: "Market Voice: Interview with the wild bunch",
          author: "Jane Doe",
          image: "/assets/images/about/black-businessman.webp",
          href: "/blog/c/p",
        }))}
        className="mb-5"
      />
      {/* Related posts */}
      <OtherPosts
        title="Related posts"
        posts={[1, 2, 3].map((post, idx) => ({
          title: "Market Voice: Interview with the wild bunch",
          author: "Jane Doe",
          image: "",
          href: "/blog/c/p",
        }))}
        className="mb-5"
      />
    </>
  );
};

export default OtherPostsGroup;
