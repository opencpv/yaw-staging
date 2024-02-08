"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

type Props = {
  className?: string;
  href?: string;
};

const VerticalSliderScrollFixOverlay = ({ className, href }: Props) => {
  const [pointerEvents, setPointerEvents] = useState(false);
  const overlayRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setPointerEvents(true);
    };
    const handleMouseLeave = () => {
      setPointerEvents(false);
    };

    if (overlayRef.current) {
      overlayRef.current.addEventListener("mouseenter", handleMouseEnter);
      overlayRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  if (href)
    return (
      <>
        <Link
          href={href ?? ""}
          ref={overlayRef}
          className={cn(
            `${
              pointerEvents && "pointer-events-none"
            } absolute left-0 top-0 z-10 h-full w-full -translate-x-16 bg-transparent opacity-0`,
            className,
          )}
        ></Link>
        {/* !!! Temporary fix of scrolling issue on mobile !!!*/}
      </>
    );
  else
    return (
      <>
        <div
          //   ref={overlayRef}
          className={cn(
            "absolute left-0 top-0 z-10 h-full w-full -translate-x-16 bg-transparent opacity-0",
            className,
          )}
        ></div>
        {/* !!! Temporary fix of scrolling issue on mobile !!!*/}
      </>
    );
};

export default VerticalSliderScrollFixOverlay;
