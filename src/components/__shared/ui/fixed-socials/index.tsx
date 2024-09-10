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

/**
 * Floating socials that appear when the user scrolls down
 */
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
      display: "block",
    },
    hide: {
      x: "-100%",
      opacity: 0,
      pointerEvents: "none" as any,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div
      className={`fixed left-0 top-1/2 z-50 translate-y-1/2`}
      ref={socialsRef}
    >
      <motion.section
        variants={variants}
        animate={showSocials ? "show" : "hide"}
        transition={{ duration: 0.2 }}
        className="absolute top-0 w-10 rounded-r-lg border border-primary-800 bg-white py-4"
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
      {/* Trigger button */}
      <motion.button
        variants={variants}
        animate={showArrow ? "show" : "hide"}
        transition={{ duration: 0.2 }}
        className={
          "absolute top-0 -z-10 grid h-16 w-6 place-items-center rounded-r-md bg-gradient-to-b from-primary to-primary-400"
        }
        onClick={toggleShowSocials}
      >
        <TbChevronCompactRight
          className="relative right-1 text-white"
          size={32}
        />
      </motion.button>
    </div>
  );
};

export default FixedSocials;
