"use client";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import style from "../Template.module.css";
import PropertyOwnerInfo from "./PropertyOwnerInfo";
import { cn } from "@/lib/utils";
import { CiCalendar } from "react-icons/ci";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { FaCirclePlus } from "react-icons/fa6";

type Props = {
  listing: Property;
  className?: string;
};

const AdditionalInfo = ({ className, listing }: Props) => {
  const additionalFees = listing?.additional_fees ? listing?.additional_fees?.filter((fee: any) => fee.fee_title && isNaN(fee.amount)) : []

  return (
    <div
      className={cn(
        "col-span-1 h-fit divide-y md:rounded-xl md:border md:p-5 shadow-sm",
        className,
      )}
    >
      <section className="flex w-full flex-col gap-3 pb-6">
        <Button color="primary" className="min-w-full flex-1">
          Apply Now
        </Button>
        <div
          className={cn(
            style.lightGreenBg,
            "flex items-center gap-3 rounded-lg p-2.5 px-3 flex-wrap text-sm text-shade-500",
          )}
        >
          <CiCalendar className="text-primary" size={24} />
          <span className="mr-auto font-bold">Available On:</span>
          <span>Nov 22 2024</span>
        </div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h4>Additional Information</h4>
        <h5>Agency Fee</h5>
        <div className="flex flex-col gap-3">
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
        <h5>Property Fees</h5>
        <div className="flex flex-col gap-3">
          <PropertyFee title="Refundable Security Deposit" amount={listing?.refundable_security_deposit as number} currency={listing?.currency as string} />
          {additionalFees?.map((fee: any, index: number) => (
            <PropertyFee key={fee?.fee_title + index} title={fee?.fee_title} amount={fee?.amount} currency={listing?.currency as string} /> 
          ))}
        </div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h5>Utilities Included</h5>
        <div>utilities </div>
      </section>
      <PropertyOwnerInfo
        name="John Doe"
        rating={4.5}
        reviews={10}
        picture={""}
      />
    </div>
  );
};

const AgencyFee = (props: {
  title: string;
  amount: number | undefined;
  currency: string;
}) => {
  return (
    <div className={cn( "flex gap-3 rounded-2xl items-center flex-wrap border p-2.5 px-3", style.feeTextSize) }>
      <span className="font-semibold">{props.title}:</span>
      {props?.amount ? (
        <>
          <span className="mr-auto font-bold">
            {formatPrice(props?.amount, true, props.currency)}
          </span>
          <Button className={cn(style.lightGreenBg, style.listerInfoButtonSecondary, style.feeTextSize)}>Add to cart <FaCirclePlus /></Button>
        </>
      ) : (
          <span className={cn(style.lightGreenText, "italic")}>
            Not Applicable
          </span>
        )}
    </div>
  );
};


const PropertyFee = (props: {title: string, amount: number | undefined, currency: string}) => {
  return (
    <div className={cn("flex justify-between text-shade-200 gap-1.5 flex-wrap", style.feeTextSize)}>
      <span className="font-semibold">{props.title}:</span>
      {props?.amount ? (
        <span className="font-bold">{formatPrice(props?.amount, true, props.currency)}</span>
      ) : (
        <span className={cn(style.lightGreenText, "italic")}>
          Not Applicable
        </span>
      )}
    </div> 
  )
}

export default AdditionalInfo;
