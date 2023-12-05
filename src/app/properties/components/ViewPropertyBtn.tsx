"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import PropertyGalleryModal from "../[slug]/components/PropertyGalleryModal";

type Props = {
  href: string;
  className?: string;
};

const ViewPropertyBtn = ({ href, className }: Props) => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

  const pathname = usePathname();
  return (
    <>
      <PropertyGalleryModal
        onOpenChange={onOpenChange}
        onClose={onClose}
        isOpen={isOpen}
      />
      {pathname === "/" ? (
        <Link
          href={`${href}`}
          className={`absolute shadow-md scale-75 bottom-28 right-5 min-[560px]:max-[680px]:right-80 xs:max-[690px]:bottom-28 min-[560px]:right-40 xs:bottom-60 md:scale-100 hover:-translate-y-2 transition-all ${className}`}
        >
          <div
            className={`border w-32 h-32 border-white rounded-full flex items-center justify-center`}
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
              className={`bg-[#305A61] w-24 h-24 rounded-full text-white flex items-center justify-center`}
            >
              View
            </motion.div>
          </div>
        </Link>
      ) : (
        <div
          className={`absolute shadow-md scale-75 bottom-32 right-10 md:right-32 md:bottom-20 md:scale-100 hover:-translate-y-2 transition-all cursor-pointer ${className}`}
          onClick={onOpen}
        >
          <div
            className={`border w-48 h-48 border-[#305A61] rounded-full flex items-center justify-center`}
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
              className={`bg-[#305A61] w-32 h-32 rounded-full text-white flex items-center justify-center`}
            >
              View
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewPropertyBtn;
