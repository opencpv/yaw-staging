import React from "react";
import { PiFileMinusThin } from "react-icons/pi";

const InvoiceEmptyState = () => {
  return (
    <div className="col-span-full flex flex-col items-center gap-5 py-20 text-shade-200">
      <PiFileMinusThin size={60} />
      <p>No results</p>
    </div>
  );
};

export default InvoiceEmptyState;
