"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";
import Logo from "@/components/__shared/ui/logo";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import GetStartedButton from "./button/get-started-button";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import { useAppStore } from "@/store/dashboard/AppStore";
import AvatarMenu from "./avatar/AvatarMenu";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";
import { cn } from "@/lib/utils";
import { Button } from "./button/Button";

const Navbar = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const { toggle, setToggle } = useMenuStore();
  const { user } = useAppStore();

  useHideDocumentScrollBar(toggle);

  useUserData();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname?.includes("/properties/") && window.scrollY > 1) {
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

  //const shouldChangeColor = isScrolling && pathname?.includes("/properties/");
  //const isNotTargetPage = !pathname?.includes("/properties/");

  return (
    <>
      <nav
        className={cn(
          `no-print sticky top-0 z-40 w-full bg-primary px-3 py-3 transition-all duration-300 sm:px-8`,
          {
            absolute: props.isMenuOpen,
          },
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex w-full items-center justify-end md:gap-[31px] lg:gap-[73px]">
            <GetStartedButton
              className={cn("w-fit px-[4.5rem] text-xl", {
                invisible: user,
              })}
            />
            <div className="flex items-center gap-5">
              {user && <AvatarMenu />}
              {/* Hamburger button */}
              <Button
                size="icon"
                onClick={() => {
                  setToggle(true);
                }}
                className="group rounded-full transition-all hover:bg-shade-50/80"
              >
                <Image
                  src={icons.Hamburger}
                  alt="menu"
                  className="group-hover:scale-80"
                />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
