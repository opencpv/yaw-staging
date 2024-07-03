import React from "react";
import BTFTKModal from "./steps/BTFTKModal";

type Props = {};

const NoCriteriaEmptyState = (props: Props) => {
  return (
    <div className="mx-auto mt-20 grid w-fit place-items-center gap-3 rounded-lg border bg-neutral-100 p-5 py-10 text-center sm:p-20">
      <h3>You have no search criteria.</h3>
      <p className="text-base text-shade-200">
        Tell us what you are looking for and let RentRight do the work for you.
      </p>
      <BTFTKModal />
    </div>
  );
};

export default NoCriteriaEmptyState;
