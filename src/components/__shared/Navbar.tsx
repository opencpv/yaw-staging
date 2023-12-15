"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Menu from "../NavMenu.tsx";
import { useRouter } from "next/navigation.js";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";
import Logo from "@/components/__shared/Logo";
import Button from "@/components/__shared/Button";
import LikeHeart from "./ui/LikeHeart";
import Share from "./ui/share/Share";

const Navbar = (props: any) => {
  const pathname = usePathname();
  const { icons } = useAssets();
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [locationOrigin, setLocationOrigin] = useState<string>("");

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

    setLocationOrigin(location.origin)

  }, [pathname]);

  const shouldChangeColor =
    (isScrolling && pathname?.includes("/properties/")) ||
    (isScrolling && pathname === "/");
  const isNotTargetPage =
    !pathname?.includes("/properties/") && pathname !== "/";

  return (
    <nav
      className={`w-full px-8 py-4 z-40 no-print ${props.isMenuOpen && "absolute"} ${
        isNotTargetPage
          ? "sticky bg-primary-500"
          : shouldChangeColor
          ? "fixed bg-primary-500 transition-all"
          : "fixed bg-transparent transition-all"
      } top-0`}
    >
      <div className="flex items-center justify-between">
        <Menu
          isOpen={props.isMenuOpen}
          layout
          toggleMenu={() => props?.toggleMenu((r: boolean) => !r)}
        />
        <Logo />
        <div className="flex items-center lg:gap-[73px] md:gap-[31px] w-full justify-end">
          {!pathname?.includes("/properties/") ? (
            <Button
              onClick={(e: any) => {
                router.push("/login");
              }}
              className={`hidden w-64 px-8 py-4 border h-14 border-white rounded-lg bg-primary-400 text-lg font-[600] capitalize text-white hover:bg-neutral-300 hover:text-neutral-600 lg:inline-flex`}
            >
              Start Here
            </Button>
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

          <button onClick={(e: any) => props?.toggleMenu((r: boolean) => !r)}>
            <Image src={icons.Hamburger} alt="menu" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
