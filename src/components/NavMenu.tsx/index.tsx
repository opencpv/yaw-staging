import { AiFillCloseCircle } from "react-icons/ai";
import { styled } from "@stitches/react";

import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExpandCircle, FadeInOut } from "@/lib/animations";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Separator from "../Separator";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { bottomLinks } from "./content";





export default function Menu(props: any) {
  const { icons } = useAssets();

  return (
    <Root
      variants={ExpandCircle}
      exit={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
        },
      }}
      animate={
        props?.isOpen
          ? {
              ...ExpandCircle.open(),
            }
          : {
              ...ExpandCircle.closed,
              transitionEnd: {
                // display: 'none',
              },
            }
      }
      initial={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
        },
      }}
      {...props}>
      <div className={"content-box flex-col flex"}>
        <div className={"flex-flex-col px-8"}>
          <div
            className={
              "flex flex-row items-center justify-between pt-8  w-full "
            }>
            <div
              className="w-full  relative
              max-w-[106px] max-h-[86px] aspect-[106/86]
              lg:max-w-[150px] 
            lg:max-h-[122px] h-full lg:aspect-[150/122] 
            ">
              <Image
                src={icons.Logo}
                alt="bg"
                fill
                objectPosition="center"
                objectFit="cover"
                className=" w-full h-full "
              />
            </div>
            <button>
              <AiFillCloseCircle
                onClick={(e) => props.toggleMenu()}
                color="white"
                size={40}
              />
            </button>
          </div>
        </div>
        <div className={"mt-10"}>
          <MobileMenu className={"flex lg:hidden "} />
          <DesktopMenu className={"hidden lg:flex"} />
        </div>
      </div>
      <div className="hidden lg:flex h-[127px] bg-[#305A61] justify-center items-center gap-10">
        {
          bottomLinks.map((r)=>(
            <div className="text-[#fff]">
              {r?.name}
            </div>
          ))
        }
      </div>
    </Root>
  );
}
const Root = styled(motion.aside, {
  background: "url(/svgs/bgMenuSmall.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  height: "100%",
  position: "absolute",
  top: "0px",
  left: "0px",
  right: "0px",
  width:"100%",
  minHeight: "100vh",
  maxHeight:"130vh",
  zIndex: "999",
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-between",
  "@media screen and (min-width: 1024px) ": {
    background: "url(/svgs/bgMenuLarge.svg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});
