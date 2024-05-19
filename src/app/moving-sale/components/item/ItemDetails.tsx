import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils/numberManipulation";
import React from "react";

type Props = {};

const ItemDetails = (props: Props) => {
  return (
    <div className="lg:col-span-2">
      <div className="mb-16 flex flex-wrap items-center gap-x-20 gap-y-5">
        <h3 className="text-xl font-[500] text-neutral-500">Product title</h3>
        <div className="rounded-md bg-accent-50 p-3 text-sm text-white">
          Category name
        </div>
      </div>
      <div className="mb-16 space-y-3">
        <h2 className="text-3xl font-[700] text-primary">
          {formatPrice(16.98)}
        </h2>
        <span className="flex w-full max-w-xs items-center gap-5 *:flex-1">
          <Term variant="negotiable" />
          <Condition variant="used" />
        </span>
      </div>
      <p className="max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        praesentium aspernatur asperiores libero ea velit dicta non esse. Dolore
        itaque odit nemo tenetur numquam at unde illum modi blanditiis aliquid?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab
        perferendis voluptate ea laborum voluptates dolores, facilis ex, earum
        sed, deserunt eligendi quas? Esse beatae ex voluptate nostrum sequi
        magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptate, nam neque aspernatur omnis molestiae necessitatibus
        architecto eaque vero et sit aliquam totam molestias voluptas error fuga
        laudantium accusamus distinctio facilis?
      </p>
    </div>
  );
};

export default ItemDetails;

export const Term = ({
  variant,
}: {
  variant?: "negotiable" | "non-negotiable";
}) => {
  return (
    <div className="w-fit rounded-xl bg-primary-100 p-2 text-center capitalize text-white">
      {variant}
    </div>
  );
};

export const Condition = ({ variant }: { variant?: "new" | "used" }) => {
  return (
    <div className="w-fit rounded-xl bg-[#FFE3B0] p-2 text-center capitalize text-primary">
      {variant}
    </div>
  );
};
