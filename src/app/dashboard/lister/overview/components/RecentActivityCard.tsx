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
      className="scale-hover flex w-full flex-col gap-3 rounded-md bg-white p-4 shadow-card ssm:max-w-[250px] sm:max-lg:flex-1 xl:flex-1"
    >
      {props.icon}
      <p className="text-base capitalize text-shade-300">{props.title}</p>
      <p className="font-bold mt-auto">{props.count}</p>
    </Link>
  );
};

export default RecentActivityCard;
