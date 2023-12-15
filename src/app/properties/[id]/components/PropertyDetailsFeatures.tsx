"use client";
import Button from "@/components/__shared/Button";
import Feature from "../../components/Feature";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contentAccordionVariants } from "@/lib/utils/animation";

type Props = {
  features: FeatureInterface[];
};

const PropertyDetailsFeatures = ({ features }: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className="my-10">
      <h2 className="text-neutral-800 font-[600] text-2xl">
        Features and Amenities
      </h2>
      <motion.div
        className="grid justify-between w-full mt-8 gap-x-10 gap-y-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
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
        className="flex items-center ml-auto text-sm gap-1 text-[#305A61] mt-10"
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
