"use client";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import style from "../Template.module.css";
import { Button } from "@/components/__shared/ui/button";
import { cn } from "@/lib/utils";
import { getFeatureIcon, getUtilityIcon } from "@/lib/utils/getFeatureIcon";
import dynamic from "next/dynamic";
import { FaCaretDown } from "react-icons/fa";

const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Props = {
  listing: Property;
  limit?: boolean;
};

const PropertyDetailsFeatures = ({ listing }: Props) => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        body={<Features listing={listing} />}
        size={"2xl"}
        className="py-10"
      />
      <section className={style.detailWrapper}>
        <h2 className={style.detailHeading}>Features</h2>
        <Features listing={listing} limit={true} />
        <Button variant="ghost" className="self-end" onClick={onOpen}>
          Show more <FaCaretDown />
        </Button>
      </section>
    </>
  );
};

const FeatureCard = (props: { name: string }) => {
  return (
    <div className="flex min-h-28 items-center gap-x-8 gap-y-5 rounded-lg border p-4 md:max-[900px]:flex-col">
      <span className="font-semibold text-primary">
        {getFeatureIcon(props.name, 28) || getUtilityIcon(props.name, 28)}
      </span>
      <h3>{props.name}</h3>
    </div>
  );
};

const Features = ({ listing, limit }: Props) => {
  // combine features and utilities
  const sortedArr = listing?.features
    ?.concat(listing?.utilities as string[])
    ?.sort((a: any, b: any) => a - b);
  const featuresAndUtilities = limit ? sortedArr?.slice(0, 4) : sortedArr;

  return (
    <div
      className={cn("grid gap-5 xs:grid-cols-2", {
        "text-shade-200": !limit,
      })}
    >
      {featuresAndUtilities?.map((feature) => (
        <FeatureCard key={feature} name={feature} />
      ))}
    </div>
  );
};

export default PropertyDetailsFeatures;
