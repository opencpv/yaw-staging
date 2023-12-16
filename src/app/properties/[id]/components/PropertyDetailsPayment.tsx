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
import { AnimatePresence, motion } from "framer-motion";
import { contentAccordionVariants } from "@/lib/utils/animation";

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
      <AOSWrapper animation="fade-up" className="my-12">
        <h2 className="text-neutral-800 font-[600] text-2xl mt-6">
          Additional Information
        </h2>
        <AdditionalInfoTitle title="Agency Fees" />
        <CallOut
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Atque illo dolore voluptatum."
          className="mt-2"
        />
        <AdditionalInfo className="">
          <div className="flex flex-wrap items-center justify-between py-2 border-b gap-x-5 gap-y-2 last:border-b-0">
            <p className="flex-1 w-full">Agent</p>
            <p className="flex-1 w-full">GHS {formatPrice(props.agentFee)}</p>
            <Button className="flex-1 justify-self-end bg-[#99B3B2] text-white flex items-center gap-2 min-w-[8rem] p-2 rounded-lg justify-center">
              Add to cart
              <FaPlusCircle className="shrink-0" />
            </Button>
          </div>
        </AdditionalInfo>
        <AdditionalInfo>
          <div className="flex flex-wrap items-center justify-between py-2 border-b gap-x-5 gap-y-2 last:border-b-0">
            <p className="flex-1 w-full">Viewing</p>
            <p className="flex-1 w-full">GHS {formatPrice(props.viewingFee)}</p>
            <Button className="flex-1 justify-self-end bg-[#99B3B2] text-white flex items-center gap-2 min-w-[8rem] p-2 rounded-lg justify-center">
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
          <ul className="grid justify-between w-full grid-cols-1 gap-x-10 gap-y-3 properties-li xs:grid-cols-2">
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
            className="max-w-2xl leading-normal overflow-hidden"
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
            className="text-xs rounded-md border text-[#65969F] px-4 py-2 mt-3"
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
