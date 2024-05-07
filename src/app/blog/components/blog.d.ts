type BlogAuthor = {
  image: string;
  name?: string;
  about?: string;
  onClick?: (idx?: number) => void;
  className?: string;
};

type CategoryCardProps = {
  href: string;
  category: string;
  image: string;
  className?: string;
};

type OtherPostsProps = {
  title: string;
  posts: PostProps[];
  className?: string;
};

type SideContentProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  classNames?: {
    body?: string;
  };
};

type PostProps = {
  title: string;
  author: string;
  image: string;
  href?: string;
  postedAt?: string;
  body?: string;
  summary?: string;
  rating?: number;
};
