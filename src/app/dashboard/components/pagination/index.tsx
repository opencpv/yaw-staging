"use client";

import CaSubscriptions from "@/icons/CaSubscriptions";
import { styled } from "@stitches/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import Link from "next/link";
import useViewport from "@/lib/custom-hooks/useViewport";
import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";

const Pagination = () => {
    const vw  = useViewport()
    const [isActive, setisActive] = useState("")

    useEffect(()=>{

    }, [])
  return (
    <Root className="flex gap-5">
      <div
        className="w-full max-w-[83px]
                max-h-[83px] aspect-square bg-[#396261] rounded-full flex
                items-center justify-center">
<Link href="/dashboard">
            <MdKeyboardArrowLeft color="white" size={24} />
    
</Link>      </div>
      <div className="flex gap-8 flex-wrap">
        <PgItem>
          <CaSubscriptions width="24" height={"24"} />
          <p>Subscriptions</p>
        </PgItem>
        <Link href="/dashboard/settings">
            <PgItem type={"active"}>
                  <IoMdSettings size="24" color="white" />
                  <p>Settings</p>
            </PgItem>
        </Link>
      </div>
    </Root>
  );
};

const Root = styled('div', {
    boxSshadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
})

const PgItem = styled("button", {
  display: "flex",
  minWidth:"123px",
  minHeight:"67px",
  flexDirection: "column",
  paddingBlock: "0.875rem",
  paddingInline: "1rem",
  color:"#B0B0B0",
  justifyContent:"center",
  alignItems:"center",
  fontSize:"24px",
  fontWeight:"600",
  gap:"0.875rem",
  borderRadius:"0.75rem",  

  "&:hover":{
    backgroundColor:"#396261",
    color:"white",
  },

  variants: {
    type: {
      active: {
        backgroundColor: "#396261",
        color:"white",
      },
    },
  },
});
export default Pagination;
