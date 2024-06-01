import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Separator from "../../../Separator";
import { FadeInOut } from "@/lib/animations";
import MenuLink from "./components/MenuLink";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMenuLinks } from "./content";
import { createUUID } from "@/lib/utils/stringManipulation";
import SubLinkResults from "./components/SubLinkResults";

export const DesktopMenu = (props: any) => {
  const { linksAfterLogin, linksBeforeLogin } = useMenuLinks();
  const [active, setActive] = useState<number | null>(null);
  const [subId, setSubId] = useState<number | null>(null);
  const router = useRouter();
  const setToggle = useMenuStore((state) => state.setToggle);
  const { activeSubLink, setActiveSubLink } = useMenuStore();
  const { user } = useAppStore();

  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage,
  );

  return (
    <div className={`flex-row gap-12 px-8 ${props?.className} `}>
      <div
        className={
          "flex w-max flex-col gap-10 border-r-[3px] border-r-white pr-10"
        }
      >
        {/* main links before login */}
        {!user &&
          linksBeforeLogin.map(
            (r, idx) =>
              r.name.toLowerCase() !== "more" && (
                <React.Fragment key={idx}>
                  {r.name.toLowerCase() === "faq" ? (
                    <MenuLink
                      active={active === idx}
                      linkObject={r}
                      onClick={() => {
                        setFaqActivePage("faq");
                        if (r?.sub) {
                          setActive(idx as number);
                          setSubId(null);
                        } else {
                          setActive(null);
                          router.push(r?.url);
                        }
                      }}
                    />
                  ) : (
                    <MenuLink
                      active={active === idx}
                      linkObject={r}
                      onClick={() => {
                        if (r?.sub) {
                          setActive(idx as number);
                          setSubId(null);
                        } else {
                          setActive(null);
                          // router.push(r?.url);
                          // props?.toggleMenu();
                        }
                      }}
                    />
                  )}
                </React.Fragment>
              ),
          )}

        {/* main links after login */}
        {user &&
          linksAfterLogin.map(
            (r, idx) =>
              r.name.toLowerCase() !== "more" && (
                <React.Fragment key={idx}>
                  {r.name.toLowerCase() === "faq" ? (
                    <MenuLink
                      active={active === idx}
                      linkObject={r}
                      onClick={() => {
                        setFaqActivePage("faq");
                        if (r?.sub) {
                          setActive(idx as number);
                          setActiveSubLink("");
                          setSubId(null);
                        } else {
                          setActiveSubLink("");
                          setActive(null);
                          router.push(r?.url);
                        }
                      }}
                    />
                  ) : (
                    <MenuLink
                      active={active === idx}
                      linkObject={r}
                      onClick={() => {
                        if (r?.sub) {
                          setActive(idx as number);
                          setSubId(null);
                          setActiveSubLink("");
                        } else {
                          setActive(null);
                          setActiveSubLink("");

                          router.push(r?.url);
                          // props?.toggleMenu();
                        }
                      }}
                    />
                  )}
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
            variants={FadeInOut}
            initial={"closed"}
            exit={"closed"}
          >
            {/* sub links --> view all listings, etc... */}
            {linksBeforeLogin[active]?.sub?.map((l : any, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => {
                  setActiveSubLink(l?.label);
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
            variants={FadeInOut}
            initial={"closed"}
            exit={"closed"}
          >
            {/* sub links --> view all listings, etc... */}
            {linksAfterLogin[active]?.sub?.map((l : any, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => {
                  setActiveSubLink(l?.label);
                }}
              />
            ))}
          </motion.div>
        </>
      )}
      {subId !== null && ( // REVISIT. IS IT STILL APPLICABLE?
        <>
          <Separator
            color={"primary"}
            orientation={"vertical"}
            className="h-full min-h-[350px]"
          />
          <motion.div
            key={createUUID()}
            className={"flex flex-[0_0_30%] flex-col text-[#FCAB10]"}
            animate={FadeInOut.open}
            variants={FadeInOut}
            initial={FadeInOut.closed}
            exit={FadeInOut.closed}
          >
            Stuff here
          </motion.div>
        </>
      )}
      {active && activeSubLink && <SubLinkResults />}{" "}
    </div>
  );
};
