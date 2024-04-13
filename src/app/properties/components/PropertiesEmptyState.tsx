import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { IoIosSearch } from "react-icons/io";

type Props = {
  onClick?: () => void;
};

const PropertiesEmptyState = ({ onClick }: Props) => {
  return (
    <div className="col-span-full mx-auto mb-20 flex flex-col items-center gap-6 text-neutral-800">
      <IoIosSearch size={60} />
      <div className="text-center">
        <p className="font-semibold">
          Sorry, we couldn’t find any matching results.
        </p>
        <p className="text-sm text-shade-200">
          View similar results from surrounding neighborhoods.{" "}
        </p>
      </div>
      <Button color="primary" onClick={onClick}>
        View results
      </Button>
    </div>
  );
};

export default PropertiesEmptyState;
