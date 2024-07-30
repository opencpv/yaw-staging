import capitalizeName, { getArticle } from "@/lib/utils/stringManipulation";
import React from "react";
import { FaPlus } from "react-icons/fa6";

type Props = {
  variant: "property" | "item";
};

const ItemEmptyState = (props: Props) => {
  return (
    <button className="scale-hover flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <p>You have no active {props.variant}</p>
        <p className="text-base text-shade-300">
          Click here to create {getArticle(props.variant)}
        </p>
      </div>

      <div className="flex items-center gap-2 text-primary">
        <FaPlus />
        Add {capitalizeName(props.variant)}
      </div>
    </button>
  );
};

export default ItemEmptyState;
