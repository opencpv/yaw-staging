import React from "react";
import { LinkButton } from "../button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

type Props = {
  buttonLabel?: string;
  tagLine?: string;
  description?: string;
  className?: string;
  paddingBlock?: "none" | "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
};

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
        // height={200}
        className="aspect-square w-[100px] sm:w-[150px]"
      />
      <h4>{tagLine || "Sorry, there are no results at the moment"}</h4>
      {description && <p className="text-shade-300">{description}</p>}
      {buttonLabel && (
        <LinkButton href={href} onClick={onClick}>
          {buttonLabel}
        </LinkButton>
      )}
    </section>
  );
};

export default EmptyState;
