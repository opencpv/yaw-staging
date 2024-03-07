"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Menu from "../NavMenu.tsx";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";
import Logo from "@/components/__shared/Logo";
import LikeHeart from "./ui/LikeHeart";
import Share from "./ui/share/Share";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import ButtonHireUs from "./ui/button/ButtonHireUs";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import Avatar from "./ui/avatar/Avatar.jsx";
import { useAppStore } from "@/store/dashboard/AppStore";

const Navbar = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [locationOrigin, setLocationOrigin] = useState<string>("");
  // const [toggle, setToggle] = useState(false)
  const { toggle, setToggle } = useMenuStore();
  const { user } = useAppStore();

  useHideDocumentScrollBar(toggle);

  useEffect(() => {
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
  }, [pathname]);

  const shouldChangeColor =
    (isScrolling && pathname?.includes("/properties/")) ||
    (isScrolling && pathname === "/");
  const isNotTargetPage =
    !pathname?.includes("/properties/") && pathname !== "/";

  return (
    <>
      <nav
        className={`no-print z-40 w-full px-3 py-3 sm:px-8 ${
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
          <Logo />
          <div className="flex w-full items-center justify-end md:gap-[31px] lg:gap-[73px]">
            {!pathname?.includes("/properties/") ? (
              <ButtonHireUs className="w-fit px-[4.5rem] text-xl" />
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
            <div className="flex items-center gap-5">
              {user?.avatar_url !== undefined && (
                <Avatar
                  image={user?.avatar_url as string}
                  name={`${user?.firstname || ""} ${user?.lastname || ""}`}
                  email={user?.email}
                />
              )}
              {/* Hamburger button */}
              <button
                onClick={() => {
                  setToggle(true);
                }}
              >
                <Image src={icons.Hamburger} alt="menu" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
