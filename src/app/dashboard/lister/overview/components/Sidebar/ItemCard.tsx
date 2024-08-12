import React from "react";
import Image, { StaticImageData } from "next/image";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Link from "next/link";
import style from "../../index.module.css";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
  image: string | StaticImageData;
  title: string;
  price: number;
  isActive: boolean;
};

const ItemCard = (props: Props) => {
  return (
    <div className={style.card}>
      {props.isActive ? (
        <Link href={`/moving-sale/${props.id}`} className={style.cardLink}>
          <Image
            src={props.image}
            alt={props.title}
            fill
            className={cn(style.cardImage, "brightness-95")}
          />
        </Link>
      ) : (
        <div className={style.cardLink}>
          <Image
            src={props.image}
            alt={props.title}
            fill
            className={cn(style.cardImage, "brightness-95")}
          />
        </div>
      )}
      <h4>{props.title}</h4>
      {props.isActive ? (
        <p className="text-base">{formatPrice(props.price)}</p>
      ) : (
        <button className="text-base font-bold text-primary">Continue</button>
      )}
    </div>
  );
};

export default ItemCard;
