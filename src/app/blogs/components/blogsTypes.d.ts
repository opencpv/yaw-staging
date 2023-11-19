type OtherPostsProps = {
    title: string;
    posts: Post[];
    className?: string;
}

type Post = {
    title: string;
    postedBy: string;
    image?: string;
}