"use client";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

type Props = {
  scrollTo: string;
};

const ScrollTop = () => {
  // STATE
  const [shouldShowScrollBtn, setShouldShowScrollBtn] =
    useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const isMenuOpen = useMenuStore((state) => state.toggle);

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
      className={`fixed right-1 top-[90%] z-50 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-gradient-to-t from-[#073B3A] to-primary-400 shadow-lg sm:h-14 sm:w-14  ${
        isScrollingUp && shouldShowScrollBtn ? "opacity-70" : "opacity-0"
      } ${isMenuOpen && "hidden"} transition-opacity sm:right-10`}
      onClick={scrollUpwards}
    >
      <FaChevronUp className="text-2xl font-[900] text-white" />
    </div>
  );
};

export default ScrollTop;
