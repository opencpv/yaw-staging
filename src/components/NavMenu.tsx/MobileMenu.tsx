"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { styled } from "@stitches/react";
import { useState } from "react";
import { links } from "./content";
import Link from "next/link";
import ArrowDownNav from "@/app/components/icons/CaArrowDownNav.";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import ButtonStartHere from "../__shared/ui/button/ButtonStartHere";
import { useMenuStore } from "@/store/navmenu/useMenuStore";


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
  const { setToggle } = useMenuStore()
  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <div
          className={`
              "flex flex-row w-full justify-between items-center cursor-pointer
              font-[600]
              ${open ? "text-[#FCAB10]" : "text-[#fff]"}
            `}
        >
          <p className={"uppercase !font-semibold text-2xl"}>{name}</p>
          <ArrowDownNav color={open ? "#ddd" : "#fff"} />
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className={"py-4"}>
        {sub?.map((r, index) => (
          <Collapsible.Root key={index} className="text-white flex flex-col ">
            <Collapsible.Trigger className="text-left flex justify-between pr-20 text-base">
              {r?.name}
              {/* <ArrowDownNav /> */}
            </Collapsible.Trigger>
            <Collapsible.Content>
              {sub2?.map((r2, index) => (
                <Link href={r2?.url} key={index} onClick={() => setToggle(false)}>
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
  const { setToggle } = useMenuStore()

  return (
    <div
      className={`flex flex-col px-8 gap-4 ${props?.className}`}
    >
      <div className="flex justify-center my-14">
        <ButtonStartHere className="inline-flex" />
      </div>
      <div className="space-y-10">
        {links.map((r, index) =>

          r?.sub ? (
            <MenuOption key={index} name={r.name} sub={r?.sub} sub2={r?.sub2} />
          ) : (
            <Link
              href={r?.url}
              key={index}
              className="block mb-10"
              onClick={() => setToggle(false)}
            >
              <p className={"uppercase !font-semibold text-[#fff] text-2xl"}>{r?.name}</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
