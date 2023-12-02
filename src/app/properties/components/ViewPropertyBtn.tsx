"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  className?: string;
};

const ViewPropertyBtn = ({ href, className }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${href}`}
      className={`absolute shadow-md scale-75 ${
        pathname === "/"
          ? "bottom-28 right-5 min-[560px]:max-[680px]:right-80 xs:max-[690px]:bottom-28 min-[560px]:right-40 xs:bottom-60"
          : "bottom-32 right-10 md:right-32 md:bottom-20"
      } md:scale-100 hover:-translate-y-2 transition-all ${className}`}
    >
      <div
        className={`border ${
          pathname === "/"
            ? "w-32 h-32 border-white"
            : "w-48 h-48 border-2 border-[#305A61]"
        } rounded-full flex items-center justify-center`}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.4 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
            repeatType: "reverse",
          }}
          className={`bg-[#305A61] ${
            pathname === "/" ? "w-24 h-24" : "w-32 h-32"
          } rounded-full text-white flex items-center justify-center`}
        >
          View
        </motion.div>
      </div>
    </Link>
  );
};

export default ViewPropertyBtn;
