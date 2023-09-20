import { useRouter } from "next/navigation";
import { useState } from "react";
import { links } from "./content";
import { motion } from "framer-motion";
import Separator from "../Separator";
import { FadeInOut } from "@/lib/animations";


export const DesktopMenu = (props: any) => {
    const [active, setActive] = useState(null);
    const [subId, setSubId] = useState(null);
    const router = useRouter();
    return (
      <div className={`flex-row px-4 gap-12  ${props?.className} `}>
        <div className={"flex flex-col gap-10 flex-[0_1_30%] border-r-[1px] border-r-[#fff] pr-10"}>
          {links.map((r, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.01 }}
              // whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (r?.sub) {
                  setActive(idx);
                  setSubId(null)
                } else {
                  setActive(null);
                  router.push(r?.url);
                  // props?.toggleMenu();
                }
              }}>
              <div
                className={`flex flex-row w-full justify-between items-center cursor-pointer ",
                  ${active === idx ? "text-[#FCAB10]" : "text-[#fff]"}
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
        {active !== null && (
          <>
            <motion.div
              className={"flex flex-col  gap-8"}
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
                    className={`flex flex-row w-full justify-between items-center cursor-pointer  gap-2
                      ${ldx === subId ? "text-[#FCAB10]" : "text-[#fff]"}
                    `}>
                    <p >{l?.name}</p>
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
            <Separator color={"white"} orientation={"vertical"} className="h-full min-h-[350px]" />
            <motion.div
              className={"flex flex-col flex-[0_0_30%] text-[#FCAB10]"}
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