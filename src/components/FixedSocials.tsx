"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

type Props = {};

const FixedSocials = (props: Props) => {
  const [shouldShowSocials, setShouldShowSocials] = useState<boolean>(false);
  const [shouldShowArrow, setShouldShowArrow] = useState<boolean>(false);

  const toggleShowingSocials = () => {
    setShouldShowSocials((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      // const threshHold = 10;
      const scrollPosition = window.scrollY + window.innerHeight;
      const scrollHeight = document.body.scrollHeight;

      if (
        scrollPosition < scrollHeight / 6 ||
        scrollPosition > scrollHeight - 1900
      ) {
        setShouldShowSocials(false);
        setShouldShowArrow(false);
      } else if (scrollPosition > 100) {
        setShouldShowSocials(false);
        setShouldShowArrow(true);
      } else {
        setShouldShowSocials(true);
        setShouldShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`fixed left-0 top-[50%] z-20`}>
      <section
        className={`${
          shouldShowSocials ? "translate-x-0 opacity-90" : "-translate-x-[100%]"
        } relative  w-10 rounded-r-lg border border-primary-800 bg-white py-4 transition-transform`}
      >
        <ul className="flex flex-col gap-2">
          <li className="grid w-8 h-8 rounded-full place-items-center bg-neutral-200">
            <Link href="" target="_blank">
              <FaInstagramSquare className="text-primary-800" title="instagram" />
            </Link>
          </li>
          <li className="grid w-8 h-8 rounded-full place-items-center bg-neutral-200">
            <Link href="" target="_blank">
              <RiTwitterXFill className="text-primary-800" title="x" />
            </Link>
          </li>
          <li className="grid w-8 h-8 rounded-full place-items-center bg-neutral-200">
            <Link href="" target="_blank">
              <FaFacebookF className="text-primary-800" title="facebook" />
            </Link>
          </li>
          <li className="grid w-8 h-8 rounded-full place-items-center bg-neutral-200">
            <Link href="" target="_blank">
              <IoLogoWhatsapp className="text-primary-800" title="whatsapp" />
            </Link>
          </li>
        </ul>
      </section>
      <section
        className={`relative -z-10 grid h-7 w-6 cursor-pointer place-items-center bg-gradient-to-b from-[#073B3A] to-primary-400 ${
          shouldShowArrow && !shouldShowSocials
            ? "translate-x-0 opacity-70"
            : "-translate-x-[100%]"
        } -translate-y-[660%]`}
        onClick={toggleShowingSocials}
      >
        <FaChevronRight className="text-white" />
      </section>
    </div>
  );
};

export default FixedSocials;
