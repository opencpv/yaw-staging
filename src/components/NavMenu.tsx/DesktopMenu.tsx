import { useRouter } from "next/navigation";
import { useState } from "react";
import { links } from "./content";
import { motion } from "framer-motion";
import Separator from "../Separator";
import { FadeInOut } from "@/lib/animations";
import MenuLink from "./components/MenuLink";



export const DesktopMenu = (props: any) => {
  const [active, setActive] = useState<number | null>(null);
  const [subId, setSubId] = useState<number | null>(null);
  const router = useRouter();
  return (
    <div className={`flex-row px-8 gap-12  ${props?.className} `}>
      <div
        className={"flex flex-col w-max gap-10 border-r border-r-white pr-10"}
      >
        {/* main links */}
        {links.map((r, idx) => (
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
                props?.toggleMenu();
              }
            }}
          />
        ))}
      </div>
      {active !== null && (
        <>
          <motion.div
            className={"flex flex-col  gap-8"}
            animate={"open"}
            variants={FadeInOut}
            initial={"closed"}
            exit={"closed"}
          >
            {/* sub links */}
            {links[active]?.sub?.map((l, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => console.log("Sub menu clicked")}
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
            className="h-full min-h-[350px] bg-red-400"
          />
          <motion.div
            className={"flex flex-col flex-[0_0_30%] text-[#FCAB10]"}
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
