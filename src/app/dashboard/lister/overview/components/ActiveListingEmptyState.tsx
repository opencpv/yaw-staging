import React from "react";
import { FaPlus } from "react-icons/fa6";

const ActiveListingEmptyState = () => {
  return (
    <button className="scale-hover grid h-80 max-w-md place-items-center rounded-lg bg-shade p-5 text-center lg:h-96">
      <div className="flex flex-col items-center gap-5">
        <FaPlus size={32} className="text-primary" />
        <div className="flex flex-col items-center">
          <p>You have no active listing</p>
          <p className="text-base text-shade-300">
            Click here to create a listing
          </p>
        </div>
      </div>
    </button>
  );
};

export default ActiveListingEmptyState;
