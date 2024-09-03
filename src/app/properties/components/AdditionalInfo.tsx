"use client";
import { Button } from "@/components/__shared/ui/button/Button";
import React from "react";
import style from "../Template.module.css";
import PropertyOwnerInfo from "./PropertyOwnerInfo";
import { cn } from "@/lib/utils";
import { CiCalendar } from "react-icons/ci";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { FaCirclePlus } from "react-icons/fa6";
import { format } from "date-fns";

type Props = {
  listing: Property;
  className?: string;
};

const AdditionalInfo = ({ className, listing }: Props) => {
  const additionalFees = listing?.additional_fees
    ? listing?.additional_fees?.filter(
        (fee: any) => fee.fee_title && isNaN(fee.amount),
      )
    : [];

  return (
    <aside
      className={cn(
        "col-span-1 h-fit divide-y shadow-sm md:rounded-xl md:border-2 md:p-5",
        className,
      )}
    >
      <section className="flex w-full flex-col gap-5 pb-10">
        <Button size={"full"} className="flex-1">
          Apply Now
        </Button>
        {/* Available on*/}
        <div
          className={cn(
            style.lightGreenBg,
            "flex flex-wrap items-center gap-3 rounded-lg p-2.5 px-3 text-sm text-shade-500",
          )}
        >
          <CiCalendar className="text-primary" size={24} />
          <span className="mr-auto font-bold">Available On:</span>
          <span>
            {format(new Date(listing?.available_date as string), "MMM dd yyyy")}
          </span>
        </div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h3 className="pb-5">Additional Information</h3>
        <h4>Agency Fee</h4>
        <div className="flex flex-col gap-5">
          <AgencyFee
            title="Viewing Fee"
            amount={listing?.viewing_fee as number}
            currency={listing?.currency as string}
          />
          <AgencyFee
            title="Agent Fee"
            amount={listing?.agent_fee as number}
            currency={listing?.currency as string}
          />
        </div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h4>Property Fees</h4>
        <div className="flex flex-col gap-3">
          <PropertyFee
            title="Refundable Security Deposit"
            amount={listing?.refundable_security_deposit as number}
            currency={listing?.currency as string}
          />
          {additionalFees?.map((fee: any, index: number) => (
            <PropertyFee
              key={fee?.fee_title + index}
              title={fee?.fee_title}
              amount={fee?.amount}
              currency={listing?.currency as string}
            />
          ))}
        </div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h4>Utilities Included</h4>
        <ul className="grid justify-between gap-3 text-shade-200 xxs:grid-cols-2">
          {listing?.utilities_included?.map((utility) => (
            <li key={utility} className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-primary" />
              {utility}
            </li>
          ))}
        </ul>
      </section>
      <PropertyOwnerInfo listing={listing} />
    </aside>
  );
};

const AgencyFee = (props: {
  title: string;
  amount: number | undefined;
  currency: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border-2 p-2.5 px-3",
        style.feeTextSize,
      )}
    >
      <span className="font-semibold">{props.title}:</span>
      {props?.amount ? (
        <>
          <span className="mr-auto font-bold">
            {formatPrice(props?.amount, true, props.currency)}
          </span>
          <Button
            className={cn(
              style.lightGreenBg,
              style.listerInfoButtonSecondary,
              style.feeTextSize,
            )}
          >
            Add to cart <FaCirclePlus size={18} />
          </Button>
        </>
      ) : (
        <span className={cn(style.lightGreenText, "italic")}>
          Not Applicable
        </span>
      )}
    </div>
  );
};

const PropertyFee = (props: {
  title: string;
  amount: number | undefined;
  currency: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-between gap-1.5 text-shade-200",
        style.feeTextSize,
      )}
    >
      <span className="font-semibold">{props.title}:</span>
      {props?.amount ? (
        <span className="font-bold">
          {formatPrice(props?.amount, true, props.currency)}
        </span>
      ) : (
        <span className={cn(style.lightGreenText, "italic")}>
          Not Applicable
        </span>
      )}
    </div>
  );
};

export default AdditionalInfo;
