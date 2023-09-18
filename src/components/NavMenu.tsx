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

const links = [
  {
    url: "",
    name: "HOMES FOR RENT",
    sub: [
      { url: "#", name: "Single Unit  Houses", id: "#" },
      { url: "#", name: "Duplex Houses", id: "#" },
      { url: "#", name: "Apartments", id: "#" },
      { url: "#", name: "Self Contained Rooms", id: "#" },
    ],
  },
  {
    url: "",
    name: "HIRE A PROFESSIONAL",
    sub: [
      { url: "#", name: "Renter" },
      { url: "#", name: "Property Owner" },
      { url: "#", name: "Artisan" },
    ],
  },
  { url: "", name: "MOVING SALE" },
  { url: "", name: "AREA VIBES" },
  { url: "", name: "FAQS" },
  { url: "", name: "CONTACT" },
];

const MenuOption = ({ name, sub }: { name: string; sub: any[] }) => {
  const CollapsibleRoot = styled(Collapsible.Root, {
    width: 300,
  });

  const [open, setOpen] = useState(false);
  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <div
          className={`
            "flex flex-row w-full justify-between items-center cursor-pointer
            ${open ? "text-[#ddd]" : "text-[#fff]"}
          `}>
          <p className={"uppercase !font-semibold"}>{name}</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 12L12 16L16 12L14.6 10.6L13 12.2L13 8L11 8L11 12.2L9.4 10.6L8 12ZM2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7367 9.31667 21.9993 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31233 17.1167 2.787 15.9C2.26167 14.6833 1.99933 13.3833 2 12Z"
              fill={"currentColor"}
            />
          </svg>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className={"py-4"}>
        <div className={"flex flex-col gap-4"}>
          {sub?.map((r, index) => (
            <div
              key={index}
              className={"flex flex-row w-9/12 justify-between items-center"}>
              <p className={" !font-normal !text-[#FFF]"}>{r?.name}</p>

              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.0003 16.2148L17.3337 12.2148L13.0003 8.21484L11.4837 9.61484L13.217 11.2148H8.66699V13.2148H13.217L11.4837 14.8148L13.0003 16.2148ZM13.0003 22.2148C11.5017 22.2148 10.0934 21.9522 8.77533 21.4268C7.45727 20.9015 6.31074 20.1892 5.33574 19.2898C4.36074 18.3898 3.58905 17.3315 3.02066 16.1148C2.45227 14.8982 2.16771 13.5982 2.16699 12.2148C2.16699 10.8315 2.45155 9.53151 3.02066 8.31484C3.58977 7.09818 4.36146 6.03984 5.33574 5.13984C6.31074 4.23984 7.45727 3.52751 8.77533 3.00284C10.0934 2.47818 11.5017 2.21551 13.0003 2.21484C14.4989 2.21484 15.9073 2.47751 17.2253 3.00284C18.5434 3.52818 19.6899 4.24051 20.6649 5.13984C21.6399 6.03984 22.412 7.09818 22.9811 8.31484C23.5502 9.53151 23.8344 10.8315 23.8337 12.2148C23.8337 13.5982 23.5491 14.8982 22.98 16.1148C22.4109 17.3315 21.6392 18.3898 20.6649 19.2898C19.6899 20.1898 18.5434 20.9025 17.2253 21.4278C15.9073 21.9532 14.4989 22.2155 13.0003 22.2148Z"
                  fill="white"
                />
              </svg>
            </div>
          ))}
        </div>
      </Collapsible.Content>
    </CollapsibleRoot>
  );
};
const MobileMenu = (props: any) => {
  return (
    <div className={`flex flex-col px-4 gap-12  ${props?.className}`}>
      {links.map((r, index) =>
        r?.sub ? (
          <MenuOption key={index} name={r.name} sub={r?.sub} />
        ) : (
          <Link href={r?.url} key={index}>
            <p className={"uppercase !font-semibold text-[#fff]"}>{r?.name}</p>
          </Link>
        )
      )}
    </div>
  );
};
const DesktopMenu = (props: any) => {
  const [active, setActive] = useState(null);
  const [subId, setSubId] = useState(null);
  const router = useRouter();
  return (
    <div className={`flex-row px-4 gap-12 h-full ${props?.className}`}>
      <div className={"flex flex-col gap-10 flex-[0_1_30%]"}>
        {links.map((r, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.01 }}
            // whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (r?.sub) {
                setActive(idx);
              } else {
                setActive(null);
                router.push(r?.url);
                props?.toggleMenu();
              }
            }}>
            <div
              className={`flex flex-row w-full justify-between items-center cursor-pointer ",
                ${active === idx ? "text-gold" : "text-[#fff]"}
              `}>
              <p className={"uppercase "}>{r?.name}</p>
              {r?.sub && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 16L16 12L12 8L10.6 9.4L12.2 11H8V13H12.2L10.6 14.6L12 16ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
          </motion.button>
        ))}
      </div>
      {/* <Separator color={"white"} orientation={"vertical"} /> */}
      {active !== null && (
        <>
          <motion.div
            className={"flex flex-col flex-[0_0_25%] gap-8"}
            animate={"open"}
            variants={FadeInOut}
            initial={"closed"}
            exit={"closed"}>
            {links[active]?.sub?.map((l, ldx) => (
              <motion.button
                key={ldx}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  if (l?.id) {
                    setSubId(ldx);
                  } else {
                    setSubId(null);
                    router.push(l?.url);
                  }
                }}>
                <div
                  className={`flex flex-row w-full justify-between items-center cursor-pointer 
                    ${ldx === subId ? "text-gold" : "text-[#fff]"
            
                    }
                  `}>
                  <p weight={"normal"}>{l?.name}</p>
                  {l?.id && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 16L16 12L12 8L10.6 9.4L12.2 11H8V13H12.2L10.6 14.6L12 16ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
      {subId !== null && (
        <>
          {/* <Separator color={"white"} orientation={"vertical"} /> */}
          <motion.div
            className={"flex flex-col flex-[0_0_30%]"}
            animate={FadeInOut.open}
            variants={FadeInOut}
            initial={FadeInOut.closed}
            exit={FadeInOut.closed}>
            Stuff here
          </motion.div>
        </>
      )}
    </div>
  );
};
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
            <div className="w-full  relative max-w-[150px] 
            max-h-[122px] h-full aspect-[150/122] 
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
    </Root>
  );
}
const Root = styled(motion.aside, {
  background: "url(/svgs/bgMenuSmall.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minWidth: "100vw",
  width: "100%",
  maxWidth: "1728px",
  minHeight: "100vh",
  height: "100%",
  position: "fixed",
  zIndex: "999",
  display: "flex",
  flexDirection: "column",
  "@media screen and (min-width: 1024px) ": {
    background: "url(/svgs/bgMenuLarge.svg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});
