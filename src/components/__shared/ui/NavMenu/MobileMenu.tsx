"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowDownNav from "@/components/__shared/ui/icons/CaArrowDownNav.";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { LowerCase } from "@/lib/utils/stringManipulation";
import ReportFraud from "@/components/__shared/ui/links/report-fraud";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMenuLinks } from "./content";
import { animate, stagger } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContactStore } from "@/store/contact/useContactStore";

const MenuOption = ({
  name,
  sub = [], // provide default value as an empty array
}: {
  name: string;
  sub?: any[];
}) => {
  const pathname = usePathname();

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
          className={cn(
            `" flex w-full cursor-pointer flex-row items-center justify-between font-[600] text-white`,
            {
              "text-accent-100": open,
            },
          )}
        >
          <span className={"main-menu-link-sm text-2xl uppercase"}>{name}</span>
          <ArrowDownNav color={open ? "#ddd" : "#fff"} />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className={"py-4"}>
        {/* sub links ---> View all listings, how to, etc.. */}
        {sub?.map((r, index) => (
          <Collapsible.Root key={index} className="flex flex-col text-white">
            <Collapsible.Trigger className="main-menu-link-sm flex justify-between pr-20 text-left text-base">
              {LowerCase(r?.name) === "report fraud" ? (
                <ReportFraud
                  className={cn("text-base font-normal", {
                    "text-accent": pathname?.includes(r?.url),
                  })}
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              ) : (
                // please make it properties and add r?.label to the get to the corresponding url
                <Link
                  href={r?.url || ""}
                  onClick={() => setToggle(false)}
                  className={cn(
                    "flex w-full items-center justify-between gap-10",
                    {
                      "text-accent-100": pathname === r?.url,
                    },
                  )}
                >
                  {r?.name}
                </Link>
              )}
            </Collapsible.Trigger>
          </Collapsible.Root>
        ))}
      </Collapsible.Content>
    </CollapsibleRoot>
  );
};

export const MobileMenu = (props: any) => {
  const pathname = usePathname();
  const { setToggle, toggle } = useMenuStore();
  const { activeKey } = useContactStore();
  const { user } = useAppStore();
  const { linksAfterLogin, linksBeforeLogin } = useMenuLinks();

  useEffect(() => {
    animate(
      ".main-menu-link-sm-al",
      toggle ? { opacity: [0, 1] } : { opacity: 0 },
      {
        delay: stagger(0.1, { startDelay: 0.5 }),
      },
    );

    animate(
      ".main-menu-link-sm-bl",
      toggle ? { opacity: [0, 1] } : { opacity: 0 },
      {
        delay: stagger(0.1, { startDelay: 0.5 }),
      },
    );
  }, [toggle]);

  return (
    <div className={`flex px-8 pt-10 lg:hidden ${props?.className}`}>
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
        <hr className="h-[3px] w-full bg-white" />

        {linksBeforeLogin.map((r, index) =>
          r?.sub ? (
            <div className="main-menu-link-sm-bl" key={index}>
              <MenuOption name={r.name} sub={r?.sub} />
            </div> // sub links ---> View all listings, how to, etc...
          ) : (
            r?.name.toLowerCase() !== "area vibes" && ( // main links ---> Home for rent, Login, Moving sale, etc...
              <Link
                href={r?.url}
                key={index}
                className={cn("main-menu-link-sm-bl mb-10 block", {
                  "text-accent":
                    pathname?.includes(r?.url) && activeKey === "report",
                })}
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
            <div className="main-menu-link-sm-al" key={index}>
              <MenuOption key={index} name={r.name} sub={r?.sub} />
            </div>
          ) : (
            // sub links ---> View all listings, how to, etc...
            r?.name.toLowerCase() !== "faq" && ( // main links ---> Home for rent, Login, Moving sale, etc...
              <Link
                href={r?.url}
                key={index}
                className={cn(
                  "main-menu-link-sm-al mb-10 block text-2xl font-semibold uppercase text-[#fff]",
                  {
                    "text-accent": pathname?.includes(r?.url),
                  },
                )}
                onClick={() => setToggle(false)}
              >
                {r?.name}
              </Link>
            )
          ),
        )}
      </div>
    </div>
  );
};
