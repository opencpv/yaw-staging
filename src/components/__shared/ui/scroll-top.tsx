"use client";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { Button } from "./button/Button";

const ScrollTop = () => {
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
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      lastScrollTop = currentScrollTop;
    });

    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      size="icon"
      className={`fixed right-1 top-[90%] z-50 size-12 rounded-full bg-gradient-to-t from-primary to-primary-400 shadow-lg ${
        isScrollingUp && shouldShowScrollBtn ? "opacity-70" : "opacity-0"
      } ${isMenuOpen && "hidden"} transition-opacity sm:right-10`}
      onClick={scrollUpwards}
    >
      <FaChevronUp className="text-2xl font-[900] text-white" />
    </Button>
  );
};

export default ScrollTop;
