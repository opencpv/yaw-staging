import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  href: string;
  icon: React.ReactNode;
  count: number;
};

const RecentActivityCard = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="flex w-full max-w-[250px] flex-col gap-3 rounded-md bg-white p-3 shadow-card sm:max-lg:flex-1 xl:flex-1"
    >
      {props.icon}
      <p className="text-base capitalize text-shade-300">{props.title}</p>
      <p className="text-base font-bold">{props.count}</p>
    </Link>
  );
};

export default RecentActivityCard;
