import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Separator from "../../../Separator";
import { FadeInOut } from "@/lib/animations";
import MenuLink from "./components/MenuLink";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMenuLinks } from "./content";
import { createUUID } from "@/lib/utils/stringManipulation";
import { animate, stagger } from "framer-motion";

export const DesktopMenu = (props: any) => {
  const { linksAfterLogin, linksBeforeLogin } = useMenuLinks();
  const [active, setActive] = useState<number | null>(null);
  const [subId, setSubId] = useState<number | null>(null);
  const router = useRouter();
  const { setToggle, toggle } = useMenuStore();
  const { user } = useAppStore();
  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage,
  );

  useEffect(() => {
    animate(
      ".main-menu-link",
      toggle ? { opacity: [0, 1], x: [-5, 0] } : { opacity: 1, x: 0 },
      {
        delay: stagger(0.1, { startDelay: 0.5 }),
      },
    );
  }, [toggle]);

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
                          router.push(r?.url);
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
            {linksBeforeLogin[active]?.sub?.map((l, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => {
                  setToggle(false);
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
            {linksAfterLogin[active]?.sub?.map((l, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => {
                  setToggle(false);
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
            className={"flex flex-[0_0_30%] flex-col text-accent-100"}
            animate={FadeInOut.open}
            variants={FadeInOut}
            initial={FadeInOut.closed}
            exit={FadeInOut.closed}
          >
            Stuff here
          </motion.div>
        </>
      )}
    </div>
  );
};
