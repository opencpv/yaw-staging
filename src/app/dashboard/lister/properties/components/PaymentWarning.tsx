import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import Button from "@/components/__shared/ui/button/Button";

type Props = {};

const PaymentWarning = (props: Props) => {
  return (
    <div className="w-full p-2 bg-[#FCE9EB] text-[0.7rem] py-10 transition-all hover:scale-105 lg:py-2 rounded-xl lg:rounded-none">
      <div className="w-10/12 mx-auto space-y-1.5 2xl:w-8/12">
        <p className="text-red-400 text-start">Payment required !!</p>
        <div className="flex items-center text-start gap-1.5">
          <p>
            Expires after <span className="font-[700]">48 hours</span>. This
            listing will be removed permanently when expired
          </p>
          <HiOutlineExclamationCircle className="text-xl text-red-500 rotate-180 shrink-0" />
        </div>
        <Button color="accent" className="w-full p-2 rounded-lg font-[400] text-xs">
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default PaymentWarning;
