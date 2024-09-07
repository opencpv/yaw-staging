import React from "react";
import { LinkButton } from "../button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

type Props = {
  buttonLabel?: string;
  /**
   * Main headline
   */
  tagLine?: string;
  /**
   * Supporting description
   */
  description?: string;
  className?: string;
  /**
   * Padding top and bottom of the container
   */
  paddingBlock?: "none" | "sm" | "md" | "lg";
  /**
   * Must be used with buttonLabel
   */
  href?: string;
  /**
   * Must be used with buttonLabel
   */
  onClick?: () => void;
};

/**
 * Generic Empty State when there are no results
 */
const EmptyState = ({
  buttonLabel,
  tagLine,
  description,
  className,
  paddingBlock = "sm",
  href,
  onClick,
}: Props) => {
  const { icons } = useAssets();
  return (
    <section
      className={cn(
        "col-span-full flex w-full flex-col items-center justify-center gap-5 text-center",
        {
          "py-20": paddingBlock === "sm",
          "py-0": paddingBlock === "none",
          "py-40": paddingBlock === "md",
          "py-60": paddingBlock === "lg",
        },
        className,
      )}
    >
      {/* Image */}
      <Image
        src={icons.Cloud}
        alt="cloud"
        width={150}
        className="aspect-square w-[100px] sm:w-[150px]"
      />
      <h4>{tagLine || "Sorry, there are no results at the moment"}</h4>
      {description && <p className="leading-3 text-shade-300">{description}</p>}
      {buttonLabel && (
        <LinkButton href={href} onClick={onClick}>
          {buttonLabel}
        </LinkButton>
      )}
    </section>
  );
};

export default EmptyState;
