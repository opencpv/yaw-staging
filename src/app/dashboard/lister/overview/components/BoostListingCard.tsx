import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BoostListingCard = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="scale-hover flex w-full flex-col items-center justify-center space-y-3 max-ssm:flex-1 ssm:max-w-[200px]"
    >
      <div className="grid place-items-center rounded-md bg-shade p-8 max-xsm:w-full">
        <div className="grid place-items-center rounded-md bg-white px-7 py-6 text-shade-900 shadow-card">
          {props.icon}
        </div>
      </div>
      <h5 className="self-start capitalize leading-normal">{props.title}</h5>
      <p className="self-start text-base text-shade-300">{props.description}</p>
    </Link>
  );
};

export default BoostListingCard;
