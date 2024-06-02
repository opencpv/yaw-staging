"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";
import Logo from "@/components/__shared/ui/Logo";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";
import { cn } from "@/lib/utils";
import AvatarMenu from "@/components/__shared/ui/avatar/AvatarMenu";
import Share from "@/components/__shared/ui/share/Share";
import LikeHeart from "@/components/__shared/ui/LikeHeart";
import HireUsButton from "@/components/__shared/ui/button/HireUsButton";
import { useJoinUsPageStore } from "./useJoinUsPageStore";

const JoinUsNavbar = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const { toggle, setToggle } = useMenuStore();
  const { user } = useAppStore();

  useHideDocumentScrollBar(toggle);
  const { setIsNavScrolling } = useJoinUsPageStore();

  useUserData();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolling(true);
        setIsNavScrolling(true);
      } else {
        setIsScrolling(false);
        setIsNavScrolling(false);
      }
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
          props.isMenuOpen && "absolute"
        } ${
          isScrolling
            ? "fixed bg-primary-500 transition-all duration-300"
            : "fixed bg-transparent transition-all duration-300"
        } top-0 bg-primary-500`}
      >
        <div className="flex items-center justify-between transition-all">
          <Logo />
          <div
            className={`${
              !isScrolling && "invisible"
            } flex w-full items-center justify-end transition-all md:gap-[31px] lg:gap-[73px]`}
          >
            <HireUsButton
              className={cn("w-fit px-[4.5rem] text-xl", {
                invisible: user,
              })}
            />

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

export default JoinUsNavbar;
