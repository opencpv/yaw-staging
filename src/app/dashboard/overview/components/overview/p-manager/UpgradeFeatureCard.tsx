import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/__shared/Button";

type Props = {
  image: string | StaticImageData;
  title: string;
  description: string;
  href: string;
  alt?: string;
};

const UpgradeFeatureCard = (props: Props) => {
  return (
    <div className="w-full">
      <div className="relative aspect-video w-full rounded-xl mb-3">
        <Image
          src={props.image}
          alt={props.alt ?? ""}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <h5 className="mb-2">{props.title}</h5>
      <small className="line-clamp-5 text-neutral-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        incidunt optio error, aliquid qui temporibus corporis autem distinctio
        suscipit deserunt!
      </small>
      <Link href={props.href} className="inline-block ml-5 mt-10 text-sm sm:mt-20">
        <Button variant="ghost" className="flex items-center gap-2 text-neutral-400">
          Purchase Now
          <FaLongArrowAltRight />
        </Button>
      </Link>
    </div>
  );
};

export default UpgradeFeatureCard;
