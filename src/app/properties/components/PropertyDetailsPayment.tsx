"use client";
import Button from "@/components/__shared/ui/button/Button";
import React, { useMemo, useState } from "react";
import { FaPlusCircle, FaStar, FaWhatsapp } from "react-icons/fa";
import AdditionalInfo from "./AdditionalInfo";
import AdditionalInfoTitle from "./AdditionalInfoTitle";
import CallOut from "@/components/__shared/ui/CallOut";
import { formatPrice } from "@/lib/utils/numberManipulation";
import capitalizeName, { formatDate } from "@/lib/utils/stringManipulation";
import { contentAccordionVariants, fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import ShowMore from "react-show-more-text";

type Props = {
  availableFrom: string;
  utilities: string[];
  refundableSecurityDeposit?: number;
  agentFee?: number;
  viewingFee?: number;
  thingsToKnow?: string;
  advancePeriod?: number;
};

const PropertyDetailsPayment = (props: Props) => {
  return (
    <>
      <motion.section className="mb-12">
        <AdditionalInfoTitle title="Advance Payment Options" />
        <AdditionalInfo hidden={!props.advancePeriod}>
          <ul className="properties-li">
            <li>
              {props.advancePeriod === 1
                ? "1 year"
                : props.advancePeriod === 2
                  ? "2 years"
                  : null}
            </li>
          </ul>
        </AdditionalInfo>
        <AdditionalInfo hidden={!props.availableFrom}>
          <div className="grid grid-cols-4">
            <p className="col-span-2 sm:col-span-1">Available from: </p>
            <p
              className="col-span-2 text-right text-base sm:col-span-3 sm:text-left"
              title={format(new Date(props.availableFrom), "dd MMMM, yyyy")}
            >
              {format(new Date(props.availableFrom), "dd-MM-yyyy")}
            </p>
          </div>
        </AdditionalInfo>
      </motion.section>
      <motion.div className="mt-12">
        <h2 className="mt-6 text-2xl font-[600] text-neutral-800">
          Additional Information
        </h2>
        <AdditionalInfoTitle title="Agency Fees" />
        <CallOut
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Atque illo dolore voluptatum."
          className="mt-2"
        />
        <AdditionalInfo hidden={!props.agentFee}>
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b py-2 last:border-b-0">
            <p className="w-full flex-1">Agent</p>
            <p className="w-full flex-1">
              {props.agentFee && formatPrice(props.agentFee)}
            </p>
            <Button className="flex min-w-[8rem] flex-1 items-center justify-center gap-2 justify-self-end rounded-lg bg-secondary-400 p-2 text-white">
              Add to cart
              <FaPlusCircle className="shrink-0" />
            </Button>
          </div>
        </AdditionalInfo>
        <AdditionalInfo hidden={!props.viewingFee}>
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b py-2 last:border-b-0">
            <p className="w-full flex-1">Viewing</p>
            <p className="w-full flex-1">
              {props.viewingFee && formatPrice(props.viewingFee)}
            </p>
            <Button className="flex min-w-[8rem] flex-1 items-center justify-center gap-2 justify-self-end rounded-lg bg-secondary-400 p-2 text-white">
              Add to cart
              <FaPlusCircle className="shrink-0" />
            </Button>
          </div>
        </AdditionalInfo>
        <AdditionalInfoTitle title="Property Fees" />
        <AdditionalInfo hidden={!props.refundableSecurityDeposit}>
          <div className="flex flex-wrap justify-between gap-2">
            <p className="">Refundable Security Deposit</p>
            <p className="">
              {props.refundableSecurityDeposit &&
                formatPrice(props.refundableSecurityDeposit)}
            </p>
          </div>
        </AdditionalInfo>
        {props.utilities && props.utilities.length > 0 && (
          <>
            <AdditionalInfoTitle title="Utilities included" />
            <AdditionalInfo>
              <ul className="properties-li grid w-full grid-cols-1 justify-between gap-x-10 gap-y-3 xs:grid-cols-2">
                {props.utilities.map((utility: string) => (
                  <li key={utility}>{capitalizeName(utility)}</li>
                ))}
              </ul>
            </AdditionalInfo>
          </>
        )}
        {props.thingsToKnow && (
          <>
            <AdditionalInfoTitle title="Things to know" />
            <AdditionalInfo>
              <ShowMore
                lines={4}
                more={<MoreButton text="Show more" />}
                less={<MoreButton text="Show less" />}
                truncatedEndingComponent={"... "}
              >
                <p className="max-w-2xl overflow-hidden leading-normal transition-height">
                  {props.thingsToKnow}
                </p>
              </ShowMore>
            </AdditionalInfo>
          </>
        )}
      </motion.div>
    </>
  );
};

export default PropertyDetailsPayment;

const MoreButton = ({ text }: { text: string }) => {
  return (
    <button className="mt-3 rounded-md border border-[#65969F] px-4 py-2 text-xs text-[#65969F]">
      {text}
    </button>
  );
};
