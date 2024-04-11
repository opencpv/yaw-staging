"use client";
import Button from "@/components/__shared/ui/button/Button";
import Feature from "./Feature";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import { useState } from "react";
import { motion } from "framer-motion";
import { contentAccordionVariants } from "@/lib/animations";
import { FeatureInterface } from "../../../../interfaces";

type Props = {
  features: FeatureInterface[];
};

const PropertyDetailsFeatures = ({ features }: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className="my-10">
      <h2 className="text-2xl font-[600] text-neutral-800">
        Features and Amenities
      </h2>
      <motion.div
        className="mt-8 grid w-full justify-between gap-x-10 gap-y-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
        initial="collapsed"
        variants={contentAccordionVariants("11rem")}
        animate={showMore ? "expanded" : "collapsed"}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit="collapsed"
      >
        {features.map((feature, idx) => (
          <AOSWrapper
            key={idx + 1}
            duration="600"
            animation="fade-right"
            delay={`${idx + 1}00`}
          >
            <Feature label={feature} />
          </AOSWrapper>
        ))}
      </motion.div>
      <Button
        variant="ghost"
        className="ml-auto mt-10 flex items-center gap-1 text-sm text-[#305A61]"
        onClick={() => setShowMore((current) => !current)}
      >
        {showMore ? (
          <>
            Show Less <FaCaretUp className="text-neutral-800" />
          </>
        ) : (
          <>
            Show more <FaCaretDown className="text-neutral-800" />
          </>
        )}
      </Button>
    </section>
  );
};

export default PropertyDetailsFeatures;
