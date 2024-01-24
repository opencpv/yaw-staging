"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import PropertyGalleryModal from "../[id]/components/PropertyGalleryModal";
import { useModalFullscreenStore } from "@/store/modal/useModalStore";

type Props = {
  href: string;
  className?: string;
};

const ViewPropertyBtn = ({ href, className }: Props) => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const setHideWindowScrollbar = useModalFullscreenStore(
    (state) => state.setHideWindowScrollbar,
  );

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
          className={`absolute bottom-20 right-5 z-10 scale-75 shadow-md transition-all hover:-translate-y-2 min-[350px]:bottom-28 xs:bottom-60 xs:max-[660px]:bottom-28 min-[560px]:right-40 min-[560px]:max-[680px]:right-80 md:scale-100 ${className}`}
        >
          <div
            className={`flex h-32 w-32 items-center justify-center rounded-full border border-white`}
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
              className={`flex h-24 w-24 items-center justify-center rounded-full bg-[#305A61] text-white`}
            >
              View
            </motion.div>
          </div>
        </Link>
      ) : (
        <div
          className={`absolute bottom-32 right-10 scale-75 cursor-pointer shadow-md transition-all hover:-translate-y-2 md:bottom-20 md:right-32 md:scale-100 ${className}`}
          onClick={() => {
            onOpen();
            setHideWindowScrollbar(true);
          }}
        >
          <div
            className={`flex h-48 w-48 items-center justify-center rounded-full border border-[#305A61]`}
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
              className={`flex h-32 w-32 items-center justify-center rounded-full bg-[#305A61] text-white`}
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
