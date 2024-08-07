"use client";
import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/ui/modals/Modal";
import { getFeatureIcon, getUtilityIcon } from "@/lib/utils/getFeatureIcon";
import { useDisclosure } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

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
        classNames={{ body: "py-10" }}
      />
      <section className="flex flex-col gap-10">
        <h3 className="text-shade-500">Features</h3>
        <Features listing={listing} limit={true} />
        <Button
          variant="ghost"
          className="self-end"
          color="primary"
          onClick={onOpen}
        >
          Show more <FaCaretDown />
        </Button>
      </section>
    </>
  );
};

const FeatureCard = (props: { name: string }) => {
  return (
    <div className="flex min-h-28 items-center gap-5 rounded-lg border p-4">
      <span className="text-primary">{getFeatureIcon(props.name, 28) || getUtilityIcon(props.name, 28)}</span>
      <p className="text-base">{props.name}</p>
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
    <div className="grid gap-3 xs:grid-cols-2">
      {featuresAndUtilities?.map((feature) => (
        <FeatureCard key={feature} name={feature} />
      ))}
    </div>
  );
};

export default PropertyDetailsFeatures;
