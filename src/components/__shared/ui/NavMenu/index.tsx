import { styled } from "@stitches/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExpandCircle } from "@/lib/animations";
import { useIsElementInViewport } from "./hooks/useIsElementInViewport";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMenuLinks } from "./content";
import dynamic from "next/dynamic";
const MenuBottomLinks = dynamic(() => import("./components/MenuBottomLinks"));
const MenuArea = dynamic(() => import("./components/MenuArea"));
const MenuScrollDownButton = dynamic(
  () => import("./components/MenuScrollDownButton"),
);

export default function Menu(props: any) {
  const { bottomLinksAfterLogin, bottomLinksBeforeLogin } = useMenuLinks();
  const [hide, setHide] = useState(false);
  const [windowLimit, setWindowLimit] = useState(false);
  const { toggle, setToggle } = useMenuStore();

  const bottomLinksRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const isInViewport = useIsElementInViewport(bottomLinksRef, menuRef);
  const { user } = useAppStore();

  useEffect(() => {
    // focus the menu for accessibility
    if (toggle && menuRef.current) {
      setTimeout(() => {
        menuRef?.current?.focus();
      }, 1000);
    }

    const handleInnerHeight = () => {
      // determines which scroll down button to show depending on mobile/desktop
      if (window.innerHeight > 700) {
        setWindowLimit(true);
      } else {
        setWindowLimit(false);
      }
    };

    handleInnerHeight();
    window.addEventListener("resize", handleInnerHeight);

    const handleScroll = () => {
      if (menuRef.current && bottomLinksRef.current) {
        menuRef.current.addEventListener("scroll", () => {
          const menuRect = menuRef.current?.getBoundingClientRect();
          const bottomLinksRect =
            bottomLinksRef.current?.getBoundingClientRect();

          if (menuRect && bottomLinksRect) {
            if (menuRect?.bottom + 50 >= bottomLinksRect?.top) {
              setHide(true);
            }
          }
        });
      }
    };

    if (menuRef.current) {
      menuRef.current.addEventListener("scroll", handleScroll);
    }
  }, [toggle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (toggle && e.code === "Escape") {
        setToggle(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setToggle, toggle]);

  const handleScrollIntoView = () => {
    if (bottomLinksRef.current) {
      bottomLinksRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => {
        setHide(true);
      }, 1000);
    }
  };

  return (
    <Root
      ref={menuRef}
      tabIndex={0}
      className="hidden-scrollbar menu-bg fixed top-0 z-50 min-h-dvh w-full gap-20 overflow-y-scroll pb-20 focus:outline-none lg:pb-0"
      variants={ExpandCircle}
      exit={{
        ...ExpandCircle.closed,
      }}
      animate={
        props?.isOpen
          ? {
              ...ExpandCircle.open(),
            }
          : {
              ...ExpandCircle.closed,
            }
      }
      initial={{
        ...ExpandCircle.closed,
      }}
    >
      <MenuArea />
      {windowLimit ? (
        <MenuScrollDownButton
          onClick={handleScrollIntoView}
          hide={hide}
          isInViewport={isInViewport}
          className="relative mx-auto"
        />
      ) : (
        <MenuScrollDownButton
          onClick={handleScrollIntoView}
          hide={hide}
          isInViewport={isInViewport}
          className="absolute left-[50%]"
        />
      )}
      <MenuBottomLinks
        links={user ? bottomLinksAfterLogin : bottomLinksBeforeLogin}
        ref={bottomLinksRef}
      />
    </Root>
  );
}
const Root = styled(motion.aside, {
  // gap:"px",
  height: "100svh",
  position: "fixed",
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

  ".bottomLink": {
    color: "White",
    fontWeight: 600,
    "&:hover": {
      color: "#F1B346",
      scale: "1.15",
    },
  },
});
