import Button from "@/components/__shared/ui/button/Button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string | StaticImageData;
  heading: string;
  description: string;
  buttonLabel: string;
  alt: string;
  href: string;
  className?: string;
};

const GradientBanner = (props: Props) => {
  return (
    <div
      className={`flex gap-8 items-center flex-wrap text-white p-10 rounded-xl mb-20 gradient-to-bottom ${props.className}`}
    >
      <div className="relative w-64 aspect-square">
        <Image
          src={props.image}
          alt={props.alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="space-y-4 max-w-sm min-w-full xs:min-w-[100px]">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
        <Link href={props.href} className="inline-block">
          <Button color="accent">{props.buttonLabel}</Button>
        </Link>
      </div>
    </div>
  );
};

export default GradientBanner;
