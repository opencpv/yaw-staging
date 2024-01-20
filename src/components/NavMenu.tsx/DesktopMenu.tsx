import { useRouter } from "next/navigation";
import { useState } from "react";
import { links } from "./content";
import { motion } from "framer-motion";
import Separator from "../Separator";
import { FadeInOut } from "@/lib/animations";
import MenuLink from "./components/MenuLink";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";

export const DesktopMenu = (props: any) => {
  const [active, setActive] = useState<number | null>(null);
  const [subId, setSubId] = useState<number | null>(null);
  const router = useRouter();
  const setToggle = useMenuStore((state) => state.setToggle);

  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage,
  );

  return (
    <div className={`flex-row gap-12 px-8  ${props?.className} `}>
      <div
        className={"flex w-max flex-col gap-10 border-r border-r-white pr-10"}
      >
        {/* main links */}
        {links.map(
          (r, idx) =>
            r.name.toLowerCase() !== "more" && (
              <>
                {r.name.toLowerCase() === "faq" ? (
                  <MenuLink
                    key={idx}
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
                    key={idx}
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
              </>
            ),
        )}
      </div>
      {active !== null && (
        <>
          <motion.div
            key={active}
            className={"flex flex-col gap-8"}
            animate={"open"}
            variants={FadeInOut}
            initial={"closed"}
            exit={"closed"}
          >
            {/* sub links --> view all listings, etc... */}
            {links[active]?.sub?.map((l, ldx) => (
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
      {subId !== null && (
        <>
          <Separator
            color={"primary"}
            orientation={"vertical"}
            className="h-full min-h-[350px]"
          />
          <motion.div
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
    </div>
  );
};
