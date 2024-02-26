import Image from "next/image";
import Link from "next/link";
import React from "react";

type BaseProps = {
  image: string;
  date: string;
  href: string;
};

type PropertyProps = BaseProps & {
  itemType: "Property";
  itemName: string;
  location: string;
};

type SaleItemProps = BaseProps & {
  itemType: "SaleItem";
  itemName: string;
};

type Props = PropertyProps | SaleItemProps;

const ActiveListingCard = (props: Props) => {
  if (props.itemType === "Property")
    return (
    <Link href={props.href}> 
        <div className="space-y-3 w-full">
            <div className="relative rounded-xl w-full aspect-video">
            <Image
                src={props.image}
                alt={props.itemName}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
            />
            </div>
            <div className="space-y-2">
                <h4>
                {props.itemName} in {props.location}
                </h4>
                <div className="flex items-center justify-between gap-5 text-neutral-400">
                <p>{props.date}</p>
                <p>5 Days Ago</p>
                </div>
            </div>
        </div>
    </Link>
    );
  return (
    <Link href={props.href}>
        <div className="space-y-3">
        <div className="relative rounded-xl w-full aspect-video">
            <Image
            src={props.image}
            alt={props.itemName}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            />
        </div>
        <h4>{props.itemName}</h4>
        <div className="flex flex-wrap justify-between gap-5 text-neutral-400">
            <p>{props.date}</p>
            <p>5 Days Ago</p>
        </div>
        </div>
    </Link>
  );
};

export default ActiveListingCard;
