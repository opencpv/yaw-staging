"use client"
import ViewProperty from "@/app/properties/components/ViewProperty";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import style from "./Shape.module.css"
import { usePathname } from "next/navigation";

type Props = {
    position?: "left" | "right";
    image: string;
    property: string;
    href: string;
    children?: React.ReactNode
    className?: string;
};

const ShapedLanding = ({position, image, property, href, children, className}: Props) => {
  const { images } = useAssets();
  const pathname = usePathname()
  if (pathname === "/")
  return (
    <section className={`${position === "left" ? style.shapeLeft : style.shapeRight } relative w-full min-h-[50rem] ${className}`}>
      <Image
        src={image}
        alt={property}
        fill
        style={{ objectFit: "cover" }}
      />
      {children}
      <ViewProperty href={`${href}`} />
    </section>
  )
 
  else  return (
    <section className={`${position === "left" ? style.shapeLeft : style.shapeRight } relative w-full min-h-[50rem] ${className}`}>
      <Image
        src={image}
        alt={property}
        fill
        style={{ objectFit: "cover" }}
      />
      {children}
      <ViewProperty href={`${href}`} />
    </section>
  )
};

export default ShapedLanding;
