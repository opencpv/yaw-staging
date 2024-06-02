"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowDownNav from "@/components/__shared/ui/icons/CaArrowDownNav.";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { LowerCase } from "@/lib/utils/stringManipulation";
import ReportFraud from "@/components/__shared/ui/links/ReportFraud";
import HowToLink from "@/components/__shared/ui/links/HowToLink";
import FaqLink from "@/components/__shared/ui/links/FaqLink";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMenuLinks } from "./content";
import CaArrowRight from "./components/icons/CaArrowRight";
import { animate, stagger } from "framer-motion";

const MenuOption = ({
  name,
  sub = [], // provide default value as an empty array
  sub2 = [], // provide default value as an empty array
}: {
  name: string;
  sub?: any[];
  sub2?: any[];
}) => {
  const CollapsibleRoot = styled(Collapsible.Root, {
    width: 300,
    height: "fit-content",
    display: "flex",
    flexDirection: "column",

    "div:first-child": {
      display: "flex",
    },
    "&[data-state=open] > div:nth-child(2)": {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },

    "&[data-state=open] p:first-child": {
      color: "#F1B346",
      gap: "10px",
    },
    "&[data-state=closed]": {
      flexDirection: "row",
    },
  });

  const [open, setOpen] = useState(false);
  const { setToggle } = useMenuStore();

  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <div
          className={`
              "flex w-full cursor-pointer flex-row items-center justify-between
              font-[600]
              ${open ? "text-accent-100" : "text-[#fff]"}
            `}
        >
          <h2 className={"main-menu-link-sm uppercase"}>{name}</h2>
          <ArrowDownNav color={open ? "#ddd" : "#fff"} />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className={"py-4"}>
        {/* sub links ---> View all listings, how to, etc.. */}
        {sub?.map((r, index) => (
          <Collapsible.Root key={index} className="flex flex-col text-white ">
            <Collapsible.Trigger className="main-menu-link-sm flex justify-between pr-20 text-left text-base">
              {LowerCase(r?.name) === "how to" ? (
                <HowToLink
                  className="text-base font-normal"
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              ) : LowerCase(r?.name) === "report fraud" ? (
                <ReportFraud
                  className="text-base font-normal"
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              ) : LowerCase(r?.name) === "faq" ? (
                <FaqLink
                  className="text-base font-normal"
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              ) : (
                // please make it properties and add r?.label to the get to the corresponding url
                <Link
                  href={`/properties`}
                  onClick={() => setToggle(false)}
                  className="flex justify-between items-center gap-10 w-full"
                >
                  {r?.name}
                  <CaArrowRight />
                </Link>
              )}

              {/* <ArrowDownNav /> */}
            </Collapsible.Trigger>
            <Collapsible.Content>
              {" "}
              {/* sub2 is possibly not required anymore. Likely to remove it */}
              {sub2?.map((r2, index) => (
                <Link
                  href={r2?.url}
                  key={index}
                  onClick={() => setToggle(false)}
                >
                  {r2?.name}
                </Link>
              ))}
            </Collapsible.Content>
          </Collapsible.Root>
        ))}
      </Collapsible.Content>
    </CollapsibleRoot>
  );
};

export const MobileMenu = (props: any) => {
  const { setToggle, toggle } = useMenuStore();
  const { user } = useAppStore();
  const { linksAfterLogin, linksBeforeLogin } = useMenuLinks();

  useEffect(() => {
    animate(
      ".main-menu-link-sm-al",
      toggle ? { opacity: [0, 1], x: [-5, 0] } : { opacity: 1, x: 0 },
      {
        delay: stagger(0.1, { startDelay: 0.5 }),
      },
    );

    animate(
      ".main-menu-link-sm-bl",
      toggle ? { opacity: [0, 1], x: [-5, 0] } : { opacity: 1, x: 0 },
      {
        delay: stagger(0.1, { startDelay: 0.5 }),
      },
    );
  }, [toggle]);

  return (
    <div className={`px-8 pt-10 ${props?.className}`}>
      {/* Before login */}
      <div
        className={cn("space-y-10", {
          hidden: user,
        })}
      >
        <Link
          href="/login"
          className="main-menu-link-sm-bl text-2xl font-semibold uppercase text-white"
          onClick={() => setToggle(false)}
        >
          Get Started
        </Link>
        <hr className="h-[1px] w-full bg-white" />
        {linksBeforeLogin.map((r, index) =>
          r?.sub ? (
            <MenuOption key={index} name={r.name} sub={r?.sub} sub2={r?.sub2} /> // sub links ---> View all listings, how to, etc...
          ) : (
            r?.name.toLowerCase() !== "area vibes" && ( // main links ---> Home for rent, Login, Moving sale, etc...
              <Link
                href={r?.url}
                key={index}
                className="main-menu-link-sm-bl mb-10 block"
                onClick={() => setToggle(false)}
              >
                <p className={"text-2xl !font-semibold uppercase text-[#fff]"}>
                  {r?.name}
                </p>
              </Link>
            )
          ),
        )}
      </div>

      {/* After login */}
      <div
        className={cn("space-y-10", {
          hidden: !user,
        })}
      >
        {linksAfterLogin.map((r, index) =>
          r?.sub ? (
            <MenuOption key={index} name={r.name} sub={r?.sub} sub2={r?.sub2} /> // sub links ---> View all listings, how to, etc...
          ) : (
            r?.name.toLowerCase() !== "faq" && ( // main links ---> Home for rent, Login, Moving sale, etc...
              <Link
                href={r?.url}
                key={index}
                className="main-menu-link-sm-al mb-10 block"
                onClick={() => setToggle(false)}
              >
                <p className={"text-2xl !font-semibold uppercase text-[#fff]"}>
                  {r?.name}
                </p>
              </Link>
            )
          ),
        )}
      </div>
    </div>
  );
};
