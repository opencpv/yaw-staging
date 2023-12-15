import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/__shared/Button";

type Props = {
  image: string | StaticImageData;
  title: string;
  description: string;
  href: string;
  alt?: string;
};

const FeatureUpgradeCard = (props: Props) => {
  return (
    <div className="w-full">
      <div className="relative w-full mb-3 aspect-video rounded-xl">
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
      <Link
        href={props.href}
        className="inline-block mt-5 text-sm sm:mt-20 md:ml-5"
      >
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-neutral-400"
        >
          Purchase Now
          <FaLongArrowAltRight />
        </Button>
      </Link>
    </div>
  );
};

export default FeatureUpgradeCard;
