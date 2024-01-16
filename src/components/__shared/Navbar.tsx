"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Menu from "../NavMenu.tsx";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";
import Logo from "@/components/__shared/Logo";
import LikeHeart from "./ui/LikeHeart";
import Share from "./ui/share/Share";
import Link from "next/link";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import ButtonHireUs from "./ui/button/ButtonHireUs";

const Navbar = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [locationOrigin, setLocationOrigin] = useState<string>("");
  // const [toggle, setToggle] = useState(false)
  const { toggle, setToggle } = useMenuStore();

  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        document.body.classList.add(
          "max-h-screen",
          "overflow-y-hidden",
          "hidden-scrollbar"
        );
      }, 300);
    } else {
      setTimeout(() => {
        document.body.classList.remove(
          "max-h-screen",
          "overflow-y-hidden",
          "hidden-scrollbar"
        );
      }, 1000);
    }

    const handleScroll = () => {
      if (
        (pathname?.includes("/properties/") || pathname === "/") &&
        window.scrollY > 1
      ) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, toggle]);

  const shouldChangeColor =
    (isScrolling && pathname?.includes("/properties/")) ||
    (isScrolling && pathname === "/");
  const isNotTargetPage =
    !pathname?.includes("/properties/") && pathname !== "/";

  return (
    <>
      <nav
        className={`w-full px-8 py-3 z-40 no-print ${
          props.isMenuOpen && "absolute"
        } ${
          isNotTargetPage
            ? "sticky bg-primary-500"
            : shouldChangeColor
              ? "fixed bg-primary-500 transition-all"
              : "fixed bg-transparent transition-all"
        } top-0 bg-primary-500`}
      >
        <div className="flex items-center justify-between">
          <Menu
            isOpen={toggle}
            layout
            // toggleMenu={() => { setToggle(false) }}
          />
          <Logo />
          <div className="flex items-center lg:gap-[73px] md:gap-[31px] w-full justify-end">
            {!pathname?.includes("/properties/") ? (
              <ButtonHireUs />
            ) : (
              <div className="flex items-center gap-4">
                <LikeHeart liked={false} className="text-5xl text-white" />
                <Share
                  url={`${locationOrigin}/properties/${props.propertyName}`}
                  title={props.propertyName}
                  className="text-5xl text-white"
                />
              </div>
            )}

            <button
              onClick={() => {
                setToggle(true);
              }}
            >
              <Image src={icons.Hamburger} alt="menu" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
