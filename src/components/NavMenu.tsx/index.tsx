import { AiFillCloseCircle } from "react-icons/ai";
import { styled } from "@stitches/react";

import * as Collapsible from "@radix-ui/react-collapsible";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExpandCircle, FadeInOut } from "@/lib/animations";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { bottomLinks } from "./content";
import Logo from "../__shared/Logo";
import { FaChevronDown } from "react-icons/fa";
import MenuBottomLinks from "./components/MenuBottomLinks";
import MenuArea from "./components/MenuArea";

export default function Menu(props: any) {
  const [hide, setHide] = useState(false);

  const bottomLinksRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current && bottomLinksRef.current) {
        menuRef.current.addEventListener("scroll", () => {
          const menuRect = menuRef.current?.getBoundingClientRect();
          const bottomLinksRect =
            bottomLinksRef.current?.getBoundingClientRect();

          if (menuRect && bottomLinksRect) {
            if (menuRect?.bottom >= bottomLinksRect?.top) {
              setHide(true);
            }
          }
        });
      }
    };

    if (menuRef.current) {
      menuRef.current.addEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScrollIntoView = () => {
    if (bottomLinksRef.current) {
      bottomLinksRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setHide(true);
    }
  };

  return (
    <Root
      ref={menuRef}
      className="w-full top-0 gap-20 hidden-scrollbar"
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
      <MenuArea />
      <FaChevronDown
        className="relative bottom-5 mx-auto text-3xl text-accent-100 cursor-pointer shrink-0 animate-pulse transition-all duration-700"
        onClick={handleScrollIntoView}
        style={{ visibility: hide ? "hidden" : "visible" }}
      />
      {/* bottom links */}
      <MenuBottomLinks links={bottomLinks} ref={bottomLinksRef} />
    </Root>
  );
}
const Root = styled(motion.aside, {
  background: "url(/svgs/bgMenuSmall.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // gap:"px",
  height: "100svh",
  position: "absolute",
  overflowY: "auto",
  // minHeight: "100svh",
  top: 0,
  left: 0,
  right: 0,
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
    fontWeight: 600,
    "&:hover": {
      color: "#FCAB10",
      scale: "1.15",
    },
  },
});
