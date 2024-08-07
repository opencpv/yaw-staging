"use client";
import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import style from "../Template.module.css";
import PropertyOwnerInfo from "./PropertyOwnerInfo";
import { cn } from "@/lib/utils";

type Props = {
  listing: Property;
  className?: string;
};

const AdditionalInfo = ({ className, listing }: Props) => {
  return (
    <div
      className={cn(
        "col-span-1 h-fit divide-y rounded-xl border p-5 shadow-sm",
        className,
      )}
    >
      <section className="flex w-full flex-col gap-3 pb-6">
        <Button color="primary" className="min-w-full flex-1">
          Apply Now
        </Button>
        <div>Available on</div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h4>Additional Information</h4>
        <h5>Agency Fee</h5>
        <div>Viewing fee</div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h4>Property Fees</h4>
        <div>Refundable Security Deposit</div>
      </section>
      <section className={style.additionalInfoWrapper}>
        <h4>Utilities Included</h4>
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

export default AdditionalInfo;
