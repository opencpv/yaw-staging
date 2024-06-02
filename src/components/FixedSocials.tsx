"use client";
import { socialLinks } from "@/enum/links/socials";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbChevronCompactRight } from "react-icons/tb";

type Props = {
  threshHoldMin?: number;
  threshHoldMax?: number;
};

const FixedSocials = ({ threshHoldMax, threshHoldMin }: Props) => {
  const [shouldShowSocials, setShouldShowSocials] = useState<boolean>(false);
  const [shouldShowArrow, setShouldShowArrow] = useState<boolean>(false);

  const toggleShowSocials = () => {
    setShouldShowSocials((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // const scrollHeight = document.body.scrollHeight;

      if (
        scrollPosition < (threshHoldMin ?? 100) ||
        scrollPosition > (threshHoldMax ?? 1500)
      ) {
        setShouldShowSocials(false);
        setShouldShowArrow(false);
      } else if (scrollPosition > (threshHoldMin ?? 100)) {
        setShouldShowArrow(true);
        setShouldShowSocials(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshHoldMax, threshHoldMin]);

  return (
    <div className={`fixed left-0 top-[50%] z-20`}>
      <section
        className={`${
          shouldShowSocials
            ? "translate-x-0 opacity-90"
            : "pointer-events-none -translate-x-[100%] touch-none"
        } relative  w-10 rounded-r-lg border border-primary-800 bg-white py-4 transition-transform`}
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
      </section>
      <section
        className={`relative -z-10 grid h-16 w-6 cursor-pointer place-items-center rounded-r-md bg-gradient-to-b from-primary to-primary-400 ${
          shouldShowArrow && !shouldShowSocials
            ? "translate-x-0 opacity-70"
            : "-translate-x-[100%]"
        } -translate-y-[290%]`}
        onClick={toggleShowSocials}
      >
        <TbChevronCompactRight
          className="relative right-1 text-white"
          size={32}
        />
      </section>
    </div>
  );
};

export default FixedSocials;
