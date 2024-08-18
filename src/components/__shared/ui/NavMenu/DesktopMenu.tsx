import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MenuLink from "./components/MenuLink";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMenuLinks } from "./content";
import { createUUID } from "@/lib/utils/stringManipulation";
import SubLinkResults from "./components/SubLinkResults";
import { animate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

export const DesktopMenu = (props: any) => {
  const { linksAfterLogin, linksBeforeLogin } = useMenuLinks();
  const [active, setActive] = useState<number | null>(null);
  const [subId, setSubId] = useState<number | null>(null);
  const router = useRouter();
  const { toggle } = useMenuStore();
  const { activeSubLink, setActiveSubLink } = useMenuStore();
  const { activePage: activeFaqKey } = useFaqHowToSwitchStore();
  const { user } = useAppStore();

  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage,
  );

  const toggleActiveSubMenu = (label: string) => {
    if (activeSubLink === label) {
      setActiveSubLink("");
    } else {
      setActiveSubLink(label);
    }
  };

  const toggleActiveMainMenu = (idx: number) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };

  useEffect(() => {
    animate(".main-menu-link", toggle ? { opacity: [0, 1] } : { opacity: 1 }, {
      delay: stagger(0.1, { startDelay: 0.5 }),
    });
  }, [toggle]);

  return (
    <div className={`hidden flex-row gap-12 px-8 lg:flex ${props?.className}`}>
      <div
        className={
          "flex w-max flex-col gap-10 border-r-[3px] border-r-white pr-10"
        }
      >
        {/* main links before login */}
        {!user &&
          linksBeforeLogin.map(
            (r: (typeof linksBeforeLogin)[0], idx) =>
              r.name.toLowerCase() !== "more" && (
                <React.Fragment key={idx}>
                  <MenuLink
                    active={active === idx}
                    linkObject={r}
                    onClick={() => {
                      if (r.name.toLowerCase() === "faq") {
                        setFaqActivePage("faq");
                      }

                      if (r?.sub) {
                        toggleActiveMainMenu(idx);
                        setActiveSubLink("");
                        setSubId(null);
                      } else {
                        setActiveSubLink("");
                        setActive(null);
                        router.push(r?.url);
                      }
                    }}
                    className={cn({
                      "text-white":
                        r?.name === "faq" && activeFaqKey === "how to",
                    })}
                  />
                </React.Fragment>
              ),
          )}

        {/* main links after login */}
        {user &&
          linksAfterLogin.map(
            (r, idx) =>
              r.name.toLowerCase() !== "more" && (
                <React.Fragment key={idx}>
                  <MenuLink
                    active={active === idx}
                    linkObject={r}
                    onClick={() => {
                      if (r.name.toLowerCase() === "faq") {
                        setFaqActivePage("faq");
                      }

                      if (r?.sub) {
                        toggleActiveMainMenu(idx);
                        setActiveSubLink("");
                        setSubId(null);
                      } else {
                        setActiveSubLink("");
                        setActive(null);
                        router.push(r?.url);
                      }
                    }}
                    className={cn({
                      "text-white":
                        r?.name.toLowerCase() === "faq" &&
                        activeFaqKey === "how to",
                    })}
                  />
                </React.Fragment>
              ),
          )}
      </div>
      {/* sub links before login */}
      {!user && active !== null && (
        <>
          <motion.div
            className={"flex flex-col gap-8"}
            animate={"open"}
            // variants={FadeInOut}
            // initial={"closed"}
            // exit={"closed"}
          >
            {/* sub links --> view all listings, etc... */}
            {linksBeforeLogin[active]?.sub?.map((l: any, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => {
                  toggleActiveSubMenu(l?.label);
                }}
              />
            ))}
          </motion.div>
        </>
      )}
      {/* sub links after login */}
      {user && active !== null && (
        <>
          <motion.div
            key={createUUID()}
            className={"flex flex-col gap-8"}
            animate={"open"}
            // variants={FadeInOut}
            // initial={"closed"}
            // exit={"closed"}
          >
            {/* sub links --> view all listings, etc... */}
            {linksAfterLogin[active]?.sub?.map((l: any, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => {
                  toggleActiveSubMenu(l?.label);
                }}
              />
            ))}
          </motion.div>
        </>
      )}
      {active && activeSubLink && <SubLinkResults />}{" "}
    </div>
  );
};
