"use client";
import { socialLinks } from "@/enum/links/socials";
import { floatItemsIntersectionStore } from "@/store/footer/footerStore";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { TbChevronCompactRight } from "react-icons/tb";

type Props = {
  thresholdMin?: number;
};

const FixedSocials = ({ thresholdMin }: Props) => {
  const [showSocials, setShowSocials] = useState<boolean>(false);
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const { isIntersecting } = floatItemsIntersectionStore();
  const socialsRef = useRef<HTMLDivElement>(null);

  const toggleShowSocials = () => {
    setShowSocials((prevState) => !prevState);
    setShowArrow((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < (thresholdMin ?? 100)) {
        setShowSocials(false);
        setShowArrow(false);
      } else if (scrollPosition > (thresholdMin ?? 100) && !isIntersecting) {
        setShowArrow(true);
        setShowSocials(false);
      } else if (scrollPosition > (thresholdMin ?? 100) && isIntersecting) {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [thresholdMin, isIntersecting]);

  const variants = {
    show: {
      x: 0,
      opacity: 0.9,
      pointerEvents: "auto" as any,
    },
    hide: {
      x: "-100%",
      opacity: 0,
      pointerEvents: "none" as any,
    },
  };

  return (
    <div className={`fixed left-0 top-40 z-50`} ref={socialsRef}>
      <motion.section
        variants={variants}
        animate={showSocials ? "show" : "hide"}
        transition={{ duration: 0.2 }}
        className="relative top-44 w-10 rounded-r-lg border border-primary-800 bg-white py-4"
      >
        <ul className="flex flex-col gap-2">
          {socialLinks.monochrome.map((link) => (
            <li
              key={link.name}
              className="grid h-8 w-8 place-items-center rounded-full bg-neutral-200 text-primary-800"
            >
              <Link href={link.href} target="_blank" title={link.name}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section
        variants={variants}
        animate={showArrow ? "show" : "hide"}
        transition={{ duration: 0.2 }}
        className={
          "relative -z-10 grid h-16 w-6 cursor-pointer place-items-center rounded-r-md bg-gradient-to-b from-primary to-primary-400"
        }
        onClick={toggleShowSocials}
      >
        <TbChevronCompactRight
          className="relative right-1 text-white"
          size={32}
        />
      </motion.section>
    </div>
  );
};

export default FixedSocials;
