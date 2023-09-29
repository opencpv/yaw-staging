"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { montserat } from "@/app/styles/font";
import { useState } from "react";
import Menu from "../NavMenu.tsx";

const Navbar = (props) => {

  const { icons } = useAssets();
  return (
    <nav className="w-full px-[30px] py-[15px] flex justify-between items-center bg-[#333333]">
      <Menu
        isOpen={props.isMenuOpen}
        layout
        toggleMenu={() => props?.toggleMenu((r) => !r)}
      />
      <Link href={"/"}>
        <Image
          src={icons.Logo}
          alt="logo"
          className="w-[76px] h-[62px] md:w-[92px] md:h-[74px] lg:w-[150px] lg:h-[122px] "
        />
      </Link>
      <div className="flex items-center lg:gap-[73px] md:gap-[31px]">
        <button
          className={`hidden lg:block px-[130px] py-[23px] rounded-2xl border-2 border-[#fff] bg-[#305A61] text-white text-base font-semibold ${montserat.className}`}>
          Start Here
        </button>
        <button onClick={(e) => props?.toggleMenu(r => !r)}>
          <Image src={icons.Hamburger} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
