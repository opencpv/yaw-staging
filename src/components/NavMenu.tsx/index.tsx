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
import Logo from "../__shared/Logo";
import Feedback from "../feedback/Feedback";

export default function Menu(props: any) {
  const { icons } = useAssets();

  const router = useRouter();
  return (
    <Root
      className="w-full top-0 gap-20"
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
      {...props}
    >
      <div className={"flex-col flex "}>
        <div className="flex flex-col lg:gap-10">
          <div className={"flex-flex-col px-8"}>
            <div
              className={
                "flex flex-row items-center justify-between pt-8  w-full "
              }
            >
              <div
                className="w-full relative
                max-w-[106px] max-h-[86px] aspect-[106/86]
                2xl:max-w-[150px]
              2xl:max-h-[122px] h-full 2xl:aspect-[150/122]
              "
              >
                <Logo size="lg" />
              </div>
              <button className="hover:rotate-[360deg] duration-1000">
                <AiFillCloseCircle
                  onClick={() => props.toggleMenu()}
                  color="white"
                  size={40}
                />
              </button>
            </div>
          </div>
          <div className={"mt-10"}>
            <MobileMenu
              className={"flex lg:hidden "}
              toggleMenu={props?.toggleMenu}
            />
            <DesktopMenu
              className={"hidden lg:flex"}
              toggleMenu={props?.toggleMenu}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex h-fit py-10 bg-[#305A61] justify-center items-center gap-10 ">
        {bottomLinks.map((r, index) => (
          <Link key={index} href={r?.url} className="text-2xl bottomLink transition-all">
            {r?.name}
          </Link>
          // <button
          //   onClick={(e: any) => {
          //     router.push(r?.url);
          //     props?.toggleMenu();
          //   }}
          //   key={index}
          //   className=""
          // >
          //   {r?.name}
          // </button>
        ))}
        <Feedback>
          <div className="text-2xl bottomLink transition-all">Feedback</div>
        </Feedback>
      </div>
    </Root>
  );
}
const Root = styled(motion.aside, {
  background: "url(/svgs/bgMenuSmall.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // gap:"px",
  // height: "100vh",
  position: "absolute",
  minHeight: "100svh",
  top: "0px",
  left: "0px",
  right: "0px",
  // bottom: "0px",
  width: "100%",
  zIndex: "9999",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media screen and (min-width: 1024px) ": {
    background: "url(/svgs/bgMenuLarge.svg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // bottom:"unset"
  },

  ".bottomLink": {
    color: "White",
    "&:hover": {
      color: "#FCAB10",
      scale: "1.15",
    },
  },
});
