"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { montserat } from "@/app/styles/font";
import Menu from "../NavMenu.tsx";
import { useRouter } from "next/navigation.js";
import { usePathname } from "next/navigation.js";
import { IoIosShareAlt } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi2";

const Navbar = (props: any) => {
  const pathname = usePathname()
  const { icons } = useAssets();
  const router = useRouter();
  return (
    <nav
      className={`w-full px-8 py-4  z-[100] ${
        props.isMenuOpen ? "absolute" : "fixed"
      } ${!pathname.includes("/properties/") ? "bg-[#333333]" : "bg-transparent"} top-0`}
    >
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        <Menu
          isOpen={props.isMenuOpen}
          layout
          toggleMenu={() => props?.toggleMenu((r: boolean) => !r)}
        />
        <Link href={"/"}>
          <Image
            quality={300}
            src={icons.Logo}
            alt="logo"
            className="w-full h-full max-w-[76px] aspect-[76/62]
            md:max-w-[92px] 
            md:aspect-[92/74] 2xl:max-w-[150px] 
            2xl:aspect-[150/122]"
          />
        </Link>
        <div className="flex items-center lg:gap-[73px] md:gap-[31px] w-full justify-end">
          {!pathname.includes("/properties/") ? ( <button
            onClick={(e: any) => {
              router.push("/login");
            }}
            className={`hidden lg:block w-full 2xl:aspect-[387/75]
            aspect-[278/55]
            2xl:max-w-[387px] max-w-[278px]
            rounded-2xl border-2 border-[#fff] bg-[#305A61] text-white text-base font-semibold ${montserat.className}`}
          >
            Start Here
          </button>) : (
            <div className="flex items-center gap-4">
              <HiOutlineHeart className="text-white text-5xl cursor-pointer" />
              <IoIosShareAlt className="text-white text-5xl cursor-pointer" />
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
