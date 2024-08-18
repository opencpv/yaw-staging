import React from "react";
import { PiFileMinusThin } from "react-icons/pi";

const InvoiceEmptyState = () => {
  return (
    <div className="col-span-full flex flex-col items-center py-20 text-shade-200">
      <svg
        width="178"
        height="178"
        viewBox="0 0 178 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-sm:scale-80"
      >
        <path
          d="M103.836 22.25V51.9167C103.836 53.8837 104.617 55.7701 106.008 57.161C107.399 58.5519 109.286 59.3333 111.253 59.3333H140.919"
          stroke="#8A8A8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M66.7526 51.9167H74.1693M66.7526 96.4167H111.253M96.4193 126.083H111.253M126.086 155.75H51.9193C47.9852 155.75 44.2123 154.187 41.4305 151.405C38.6487 148.624 37.0859 144.851 37.0859 140.917V37.0833C37.0859 33.1493 38.6487 29.3764 41.4305 26.5946C44.2123 23.8128 47.9852 22.25 51.9193 22.25H103.836L140.919 59.3333V140.917C140.919 144.851 139.356 148.624 136.575 151.405C133.793 154.187 130.02 155.75 126.086 155.75Z"
          stroke="#8A8A8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>No results</p>
    </div>
  );
};

export default InvoiceEmptyState;
