"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { montserat } from "@/app/styles/font";
import Menu from "../NavMenu.tsx";
import { useRouter } from "next/navigation.js";

const Navbar = (props: any) => {
  const { icons } = useAssets();
  const router = useRouter();
  return (
    <nav
      className={`w-full px-[30px] py-4 flex justify-between items-center bg-[#333333]  z-[100] ${
        props.isMenuOpen ? "absolute" : "fixed"
      }  top-0`}
    >
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
        <button
          onClick={(e: any) => {
            router.push("/login");
          }}
          className={`hidden lg:block w-full 2xl:aspect-[387/75]
          aspect-[278/55]
          2xl:max-w-[387px] max-w-[278px]
          rounded-2xl border-2 border-[#fff] bg-[#305A61] text-white text-base font-semibold ${montserat.className}`}
        >
          Start Here
        </button>
        <button onClick={(e: any) => props?.toggleMenu((r: boolean) => !r)}>
          <Image src={icons.Hamburger} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
