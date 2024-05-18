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
  const [showingMore, setShowingMore] = useState(false);
  const thingsToKnowLength = useMemo(() => {
    return props.thingsToKnow?.length;
  }, []);
  const thingsToKnowMaxLength = 238;

  console.log(showingMore);

  return (
    <>
      <motion.section {...fadeUp} className="mb-12">
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
            <p className="col-span-2 text-right text-base sm:col-span-3 sm:text-left">
              {formatDate(props.availableFrom)}
            </p>
          </div>
        </AdditionalInfo>
      </motion.section>
      <motion.div {...fadeUp} className="mt-12">
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
              GHS {props.agentFee && formatPrice(props.agentFee)}
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
              GHS {props.viewingFee && formatPrice(props.viewingFee)}
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
              GHS{" "}
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
              <p
                className="max-w-2xl overflow-hidden leading-normal transition-height"
                // initial="collapsed"
                // variants={contentAccordionVariants()}
                // animate={showingMore ? "expanded" : "collapsed"}
                // transition={{ duration: 0.8, ease: "easeInOut" }}
                // exit="collapsed"
                style={{ height: showingMore ? "auto" : "5rem" }}
              >
                {props.thingsToKnow}
              </p>
              <Button
                variant="outline"
                className={cn(
                  "mt-3 rounded-md border-[#65969F] px-4 py-2 text-xs text-[#65969F]",
                  {
                    hidden:
                      thingsToKnowLength &&
                      thingsToKnowLength <= thingsToKnowMaxLength,
                    flex:
                      thingsToKnowLength &&
                      thingsToKnowLength > thingsToKnowMaxLength,
                  },
                )}
                borderColor="#65969F"
                onClick={() => setShowingMore((current) => !current)}
              >
                {showingMore ? "Show Less" : "Show More"}
              </Button>
            </AdditionalInfo>
          </>
        )}
      </motion.div>
    </>
  );
};

export default PropertyDetailsPayment;
