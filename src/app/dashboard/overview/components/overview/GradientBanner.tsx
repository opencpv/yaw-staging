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
  imageWidth?: number;
  imageHeight?: number;
};

const GradientBanner = (props: Props) => {
  return (
    <div
      className={`gradient-to-bottom flex flex-wrap items-center gap-8 rounded-xl p-10 text-white ${props.className}`}
    >
      <Image
        src={props.image}
        alt={props.alt}
        width={props.imageWidth ?? 220}
        height={props.imageHeight ?? 200}
      />
      <div className="min-w-full max-w-sm space-y-4 xs:min-w-[100px]">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
        <Button href={props.href} color="accent">
          {props.buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default GradientBanner;
