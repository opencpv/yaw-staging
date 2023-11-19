"use client";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

type Props = {
  scrollTo: string;
};

const ScrollTop = () => {
  // STATE
  const [shouldShowScrollBtn, setShouldShowScrollBtn] =
    useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);

  const scrollUpwards = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShouldShowScrollBtn(true);
      } else {
        setShouldShowScrollBtn(false);
      }
    };

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop; // fallback;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      lastScrollTop = currentScrollTop;
    });

    window.addEventListener("scroll", () => {
      handleScroll();
      // handleScrollPosition()
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`grid place-items-center fixed right-0 z-50 top-[90%] h-10 w-10 shadow-lg bg-gradient-to-t from-[#073B3A] to-primary-400 cursor-pointer rounded-full sm:h-14 sm:w-14  ${
        isScrollingUp && shouldShowScrollBtn ? "opacity-70" : "opacity-0"
      } transition-opacity sm:right-10`}
      onClick={scrollUpwards}
    >
      <FaChevronUp className="text-white text-2xl font-[900]" />
    </div>
  );
};

export default ScrollTop;
