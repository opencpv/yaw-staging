"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  href: string;
  className?: string;
};

const ViewProperty = ({ href, className }: Props) => {
  return (
    <Link
      href={`${href}`}
      className={`absolute scale-75 bottom-32 right-10 md:right-32 md:bottom-20 md:scale-100 ${className}`}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="border border-[#305A61] w-48 h-48 rounded-full flex items-center justify-center"
      >
        <div className="bg-[#305A61] w-32 h-32 rounded-full text-white flex items-center justify-center">
          View
        </div>
      </motion.div>
    </Link>
  );
};

export default ViewProperty;
