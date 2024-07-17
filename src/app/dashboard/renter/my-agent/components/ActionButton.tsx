import React from "react";
import Button from "@/components/__shared/ui/button/Button";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
};

export default function ActionButton(props: Props) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(props.href);
    setLoading(true);
  };

  return (
    <Button
      className={`h-10 w-full gap-2 rounded-2xl bg-secondary-500 font-semibold text-shade-200 hover:bg-primary-200 hover:text-white lg:h-14`}
      title={props.title}
      isLoading={loading}
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
}
