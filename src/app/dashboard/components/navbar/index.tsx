"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import { styled } from "@stitches/react";
import Image from "next/image";
import Switch from "./switch";

const Navbar = () => {
  const { icons } = useAssets();
  return (
    <Root className="flex items-center flex-wrap">
      <div className="flex gap-20">
          <Image
            src={icons.Logo}
            alt="Logo"
            className="max-w-[60px] max-h-[50px] aspect-[60/50]"
          />
    
          <input
            type="search"
            className="max-w-[620px] max-h-[52px] md:aspect-[620/52] p-4
            w-full"
            placeholder="Search"
          />
      </div>
      <div className="flex gap-10 ">
        <Switch />
        <div>
          <p className="text-[#fff] whitespace-nowrap">John Doe</p>
        </div>
        <div className="max-w-[50px] max-h-[50px] w-full relative aspect-square">
          <Image
            src="/assets/images/dashboard-navbar.png"
            alt="User picture"
            fill
          />
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  backgroundColor: "#073B3A",
  maxHeight: "52px",
//   maxWidth: "1728px",
  width: "100%",
  aspectRatio: "1728/52",
  justifyContent: "space-between",
  padding: "1.875rem",
});

export default Navbar;
