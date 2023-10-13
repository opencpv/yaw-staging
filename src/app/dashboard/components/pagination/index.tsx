"use client";

import CaSubscriptions from "@/app/components/icons/CaSubscriptions";
import { styled } from "@stitches/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import Link from "next/link";
import useViewport from "@/lib/custom-hooks/useViewport";
import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

const Pagination = () => {
  const vw = useViewport();
  const [active, setActive] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the router is ready before accessing its properties
    if (pathname) {
      console.log(pathname);
      const currentURL = pathname; // Use router.asPath to get the current URL

      if (currentURL.includes("settings")) {
        setActive("settings");
      } else {
        setActive("not");
      }
    }
  }, [pathname]);
  return (
    <Root className="flex gap-7 items-center">
      <Link
        href={"/dashboard"}
        className=" md:max-w-[83px]
                max-w-[52px] aspect-square w-14 h-14 bg-[#396261] rounded-full flex
                items-center justify-center hover:scale-[1.02]"
      >
        <MdKeyboardArrowLeft color="white" size={24} />
      </Link>
      <div className="flex gap-8 flex-wrap">
        <PgItem className={active == "subcriptions" ? "" : "!hidden md:!flex"}>
          <CaSubscriptions width={24} height={24} />
          <p className="text-xl">Subscriptions</p>
        </PgItem>
        <Link href="/dashboard/settings">
          <PgItem
            type={active == "settings" ? "active" : undefined}
            className={active == "settings" ? "" : "!hidden md:!flex"}
          >
            <IoMdSettings
              size="24"
              color={active == "settings" ? "white" : "#B0B0B0"}
            />
            <p className="text-xl">Settings</p>
          </PgItem>
        </Link>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  boxShadow:
    "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  paddingInline: "3rem",
  paddingBlock: "1rem",
});

const PgItem = styled("button", {
  display: "flex",
  minWidth: "123px",
  minHeight: "67px",
  flexDirection: "column",
  paddingBlock: "0.875rem",
  paddingInline: "1rem",
  color: "#B0B0B0",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: "600",
  gap: "0.775rem",
  borderRadius: "0.75rem",

  "@media screen and (max-width:768px)": {
    flexDirection: "row",
    maxHeight: "52px",
    maxWidth: "155px",
    minHeight: "40px",
  },

  "&:hover": {
    backgroundColor: "#8a8a8a25",
    color: "black",
    scale: "1.05",
  },

  variants: {
    type: {
      active: {
        backgroundColor: "#396261",
        color: "white",
      },
    },
  },
});
export default Pagination;
