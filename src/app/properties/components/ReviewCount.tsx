"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ReviewCount = (props: Props) => {
  return (
    <div className="grid grid-cols-6 items-center gap-5">
      <p className="col-span-2 text-sm text-neutral-700">Lorem ipsum</p>
      <div className="relative col-span-3 h-1.5 w-full rounded-l-full rounded-r-full bg-neutral-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "90%" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inset-0 h-full w-11/12 rounded-l-full bg-accent-50"
        ></motion.div>
      </div>
      <p className="font-[700] text-neutral-800">2.3</p>
    </div>
  );
};

export default ReviewCount;
