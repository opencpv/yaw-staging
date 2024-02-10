"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { styled } from "@stitches/react";
import { useState } from "react";
import { links } from "./content";
import Link from "next/link";
import ArrowDownNav from "@/app/components/icons/CaArrowDownNav.";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import ButtonHireUs from "../__shared/ui/button/ButtonHireUs";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useContactStore } from "@/store/contact/useContactStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import { LowerCase } from "@/lib/utils/stringManipulation";
import ReportLink from "@/components/__shared/ReportLink";
import HowToLink from "@/components/__shared/HowToLink";
import FaqLink from "@/components/__shared/FaqLink";

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
      color: "#FCAB10",
      gap: "10px",
    },
    "&[data-state=closed]": {
      flexDirection: "row",
    },
  });

  const [open, setOpen] = useState(false);
  const { setToggle } = useMenuStore();
  const setContactTabActiveKey = useContactStore((state) => state.setActiveKey);
  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage,
  );

  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <div
          className={`
              "flex w-full cursor-pointer flex-row items-center justify-between
              font-[600]
              ${open ? "text-[#FCAB10]" : "text-[#fff]"}
            `}
        >
          <p className={"text-2xl !font-semibold uppercase"}>{name}</p>
          <ArrowDownNav color={open ? "#ddd" : "#fff"} />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className={"py-4"}>
        {/* sub links ---> View all listings, how to, etc.. */}
        {sub?.map((r, index) => (
          <Collapsible.Root key={index} className="flex flex-col text-white ">
            <Collapsible.Trigger className="flex justify-between pr-20 text-left text-base">
              {LowerCase(r?.name) === "how to" ? (
                <HowToLink
                  className="text-base font-normal"
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              ) : LowerCase(r?.name) === "report fraud" ? (
                <ReportLink
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
                <Link href={r?.url} onClick={() => setToggle(false)}>
                  {r?.name}
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
  const { setToggle } = useMenuStore();

  return (
    <div className={`flex flex-col gap-4 px-8 ${props?.className}`}>
      <div className="my-14 flex justify-center">
        <ButtonHireUs className="inline-flex text-2xl" />
      </div>
      <div className="space-y-10">
        {links.map((r, index) =>
          r?.sub ? (
            <MenuOption key={index} name={r.name} sub={r?.sub} sub2={r?.sub2} /> // sub links ---> View all listings, how to, etc...
          ) : (
            r?.name.toLowerCase() !== "faq" && ( // main links ---> Home for rent, Login, Moving sale, etc...
              <Link
                href={r?.url}
                key={index}
                className="mb-10 block"
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
