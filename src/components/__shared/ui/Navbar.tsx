"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";
import Logo from "@/components/__shared/ui/Logo";
import LikeHeart from "./LikeHeart";
import Share from "./share/Share";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import ButtonHireUs from "./button/ButtonHireUs";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import { useAppStore } from "@/store/dashboard/AppStore";
import AvatarMenu from "./avatar/AvatarMenu";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";
import { cn } from "@/lib/utils";

const Navbar = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const { toggle, setToggle } = useMenuStore();
  const { user } = useAppStore();
  const [onlyLogoFirst, setOnlyFirst] = useState(false);

  useHideDocumentScrollBar(toggle);

  useUserData();
  const exceptionPages : any = [
    "/properties/",
    "/",
    "/join-us",
    "/join-us/open-positions/resume-bank",
    "/join-us/open-positions/application",
  ];

  const onlyLogoFirstPages: any = [
    "/join-us",
    "/join-us/open-positions/resume-bank",
    "/join-us/open-positions",
    "/join-us/open-positions/application",
  ];

  const classes: any = {
    transparentFirst: "fixed transition-all duration-1000",
    greenThroughOut: "fixed bg-primary-500",
  };

  const [currentClass, setCurrentClass] = useState<any>();

  useEffect(() => {
    if (onlyLogoFirstPages?.includes(pathname)) {
      setOnlyFirst(true);
      setCurrentClass("transparentFirst");
    }
    if (
      !onlyLogoFirstPages?.includes(pathname) &&
      !exceptionPages?.includes(pathname)
    ) {
      setOnlyFirst(true);
      setCurrentClass("greenThroughOut");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeGreen =
        exceptionPages.some((page : string) => pathname?.includes(page)) &&
        !pathname?.includes("/join-us/open-positions/submitted") &&
        window.scrollY > 1;

      if (window.scrollY > 1) {
        setOnlyFirst(false);
      } else if (onlyLogoFirstPages?.includes(pathname)) {
        setOnlyFirst(true);
      }

      setIsScrolling(shouldBeGreen);

      setCurrentClass(shouldBeGreen ? "greenThroughOut" : "transparentFirst");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <nav
        className={`no-print z-40 w-full px-3 py-3 sm:px-8 ${
          props.isMenuOpen && "absolute "
        } ${
          currentClass === "transparentFirst"
            ? "fixed top-0 bg-transparent transition-all duration-300"
            : classes[currentClass]
        } top-0 bg-primary-500`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <div
            className={` ${
              onlyLogoFirst && "invisible"
            } flex w-full items-center justify-end md:gap-[31px] lg:gap-[73px]`}
          >
            {!pathname?.includes("/properties/") ? (
              <ButtonHireUs
                className={cn("w-fit px-[4.5rem] text-xl", {
                  invisible: user,
                })}
              />
            ) : (
              <div className="flex items-center gap-4">
                <LikeHeart
                  liked={props.liked}
                  userId={user?.id as string | number}
                  propertyId={props.propertyId}
                  className="text-3xl text-white sm:text-4xl"
                />
                <Share
                  url={`${location.origin}/properties/${props.propertyName}`}
                  title={props.propertyName}
                  className="text-5xl text-white"
                />
              </div>
            )}
            <div className="flex items-center gap-5">
              {user && <AvatarMenu />}
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
