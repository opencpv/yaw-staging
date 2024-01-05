"use client";
import ViewPropertyBtn from "@/app/properties/components/ViewPropertyBtn";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import style from "./Shape.module.css";
import { usePathname } from "next/navigation";

type Props = {
  position: "left" | "right";
  image: string;
  property: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  disableOnSmallScreens?: boolean;
};

const ShapedLanding = ({
  position,
  image,
  property,
  href,
  children,
  className,
  disableOnSmallScreens,
}: Props) => {
  const { images } = useAssets();
  const pathname = usePathname();
  if (pathname === "/")
    return (
      <section
        className={`${
          position === "left" && disableOnSmallScreens
            ? style.shapeLeft
            : position === "right" && disableOnSmallScreens
            ? style.shapeRight
            : position === "left" &&
              (disableOnSmallScreens === false ||
                disableOnSmallScreens === undefined)
            ? style.shapeLeft2
            : position === "right" &&
              (disableOnSmallScreens === false ||
                disableOnSmallScreens === undefined)
            ? style.shapeRight2
            : null
        } relative w-full min-h-[50rem] sm:min-h-[65rem] ${className}`}
      >
        <Image src={image} alt={property} fill style={{ objectFit: "cover" }} />
        {children}
        <ViewPropertyBtn href={`${href}`} />
      </section>
    );
  else
    return (
      <section
        className={`${
          position === "left" && disableOnSmallScreens
            ? style.shapeLeft
            : position === "right" && disableOnSmallScreens
            ? style.shapeRight
            : position === "left" &&
              (disableOnSmallScreens === false ||
                disableOnSmallScreens === undefined)
            ? style.shapeLeft2
            : position === "right" &&
              (disableOnSmallScreens === false ||
                disableOnSmallScreens === undefined)
            ? style.shapeRight2
            : null
        } relative w-full min-h-[50rem] sm:min-h-[65rem] ${className}`}
      >
        <Image src={image} alt={property} fill style={{ objectFit: "cover" }} />
        {children}
        <ViewPropertyBtn href={`${href === undefined ? "#" : href}`} />
      </section>
    );
};

export default ShapedLanding;
