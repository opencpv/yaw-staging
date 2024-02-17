"use client";
import Button from "@/components/__shared/ui/button/Button";
import React, { useState } from "react";
import { FaPlusCircle, FaStar, FaWhatsapp } from "react-icons/fa";
import AdditionalInfo from "../../components/AdditionalInfo";
import AdditionalInfoTitle from "../../components/AdditionalInfoTitle";
import CallOut from "@/components/__shared/ui/CallOut";
import { formatPrice } from "@/lib/utils/numberManipulation";
import capitalizeName from "@/lib/utils/stringManipulation";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import { motion } from "framer-motion";
import { contentAccordionVariants } from "@/lib/animations";

type Props = {
  availableFrom: string;
  agentFee: number;
  viewingFee: number;
  refundableSecurityDeposit: number;
  utilities: string[];
  thingsToKnow?: string;
  years?: number;
};

const PropertyDetailsPayment = (props: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <AOSWrapper animation="fade-up" className="mb-12">
        <AdditionalInfoTitle title="Advance Payment Options" />
        <AdditionalInfo>
          <ul className="properties-li">
            <li>1, 2 year(s)</li>
          </ul>
        </AdditionalInfo>
        <AdditionalInfo>
          <div className="grid grid-cols-4">
            <p className="col-span-2 sm:col-span-1">Available from: </p>
            <p className="col-span-2 text-right sm:col-span-3 sm:text-left">
              {props.availableFrom}
            </p>
          </div>
        </AdditionalInfo>
      </AOSWrapper>
      <AOSWrapper animation="fade-up" className="mt-12">
        <h2 className="mt-6 text-2xl font-[600] text-neutral-800">
          Additional Information
        </h2>
        <AdditionalInfoTitle title="Agency Fees" />
        <CallOut
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Atque illo dolore voluptatum."
          className="mt-2"
        />
        <AdditionalInfo className="">
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b py-2 last:border-b-0">
            <p className="w-full flex-1">Agent</p>
            <p className="w-full flex-1">GHS {formatPrice(props.agentFee)}</p>
            <Button className="flex min-w-[8rem] flex-1 items-center justify-center gap-2 justify-self-end rounded-lg bg-secondary-400 p-2 text-white">
              Add to cart
              <FaPlusCircle className="shrink-0" />
            </Button>
          </div>
        </AdditionalInfo>
        <AdditionalInfo>
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b py-2 last:border-b-0">
            <p className="w-full flex-1">Viewing</p>
            <p className="w-full flex-1">GHS {formatPrice(props.viewingFee)}</p>
            <Button className="flex min-w-[8rem] flex-1 items-center justify-center gap-2 justify-self-end rounded-lg bg-secondary-400 p-2 text-white">
              Add to cart
              <FaPlusCircle className="shrink-0" />
            </Button>
          </div>
        </AdditionalInfo>
        <AdditionalInfoTitle title="Property Fees" />
        <AdditionalInfo>
          <div className="flex flex-wrap justify-between gap-2">
            <p className="">Refundable Security Deposit</p>
            <p className="">
              GHS {formatPrice(props.refundableSecurityDeposit)}
            </p>
          </div>
        </AdditionalInfo>
        <AdditionalInfoTitle title="Utilities included" />
        <AdditionalInfo>
          <ul className="properties-li grid w-full grid-cols-1 justify-between gap-x-10 gap-y-3 xs:grid-cols-2">
            {props.utilities.map((utility: string) => (
              <li key={utility} className="">
                {capitalizeName(utility)}
              </li>
            ))}
          </ul>
        </AdditionalInfo>
        <AdditionalInfoTitle title="Things to know" />
        <AdditionalInfo>
          <motion.p
            className="max-w-2xl overflow-hidden leading-normal"
            initial="collapsed"
            variants={contentAccordionVariants()}
            animate={showMore ? "expanded" : "collapsed"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            exit="collapsed"
          >
            {props.thingsToKnow}
          </motion.p>
          <Button
            variant="outline"
            className="mt-3 rounded-md px-4 py-2 text-xs text-[#65969F]"
            borderColor="#65969F"
            onClick={() => setShowMore((current) => !current)}
          >
            {showMore ? "Show Less" : "Read More"}
          </Button>
        </AdditionalInfo>
      </AOSWrapper>
    </>
  );
};

export default PropertyDetailsPayment;
