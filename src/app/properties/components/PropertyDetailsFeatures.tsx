"use client";
import Button from "@/components/__shared/ui/button/Button";
import Feature from "./Feature";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { contentAccordionVariants } from "@/lib/animations";
import { FeatureInterface } from "../../../../interfaces";
import { cn } from "@/lib/utils";

type Props = {
  features?: FeatureInterface[];
};

const PropertyDetailsFeatures = ({ features }: Props) => {
  const [showingMore, setShowingMore] = useState<boolean>(false);

  return (
    <section
      className={cn("mb-10 mt-32", {
        hidden: features?.length === 0 || !features,
      })}
    >
      <h2 className="text-2xl font-[600] text-neutral-800">
        Features and Amenities
      </h2>
      <motion.div
        className="mt-8 grid w-full justify-between gap-x-10 gap-y-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
        initial="collapsed"
        variants={contentAccordionVariants("2rem")}
        animate={showingMore ? "expanded" : "collapsed"}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit="collapsed"
      >
        {features?.map((feature, idx) => <Feature key={idx} label={feature} />)}
      </motion.div>
      <Button
        variant="ghost"
        className="ml-auto mt-10 flex items-center gap-1 text-sm text-[#305A61]"
        onClick={() => setShowingMore((current) => !current)}
      >
        {showingMore ? (
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
