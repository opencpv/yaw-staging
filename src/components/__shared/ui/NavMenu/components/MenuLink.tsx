import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import CaArrowRight from "./icons/CaArrowRight";

type Props = {
  active: boolean;
  linkObject: any; // TODO: get the correct type of linkObject
  onClick: () => void;
  isSubLink?: boolean;
};

const MenuLink = (props: Props) => {
  const { setToggle } = useMenuStore();
  const { activeSubLink } = useMenuStore();


  return (
    <motion.button
      onClick={props.onClick}
      className={`main-menu-link transition-all hover:scale-105 ${
        props.isSubLink && "capitalize"
      }`}
    >
      <div
        className={`w-full cursor-pointer whitespace-nowrap ${
          props.active ? "text-accent-100" : "text-white"
        }`}
      >
        {(props.isSubLink && props.linkObject.id) || props.linkObject?.sub ? (
          <div className={`w-full flex items-center ${activeSubLink == props.linkObject?.label && "text-accent-100"} `}>
            {props.isSubLink ? (
              // <Link href={props.linkObject?.url}>
                <h4 className={`mr-10 font-normal`}>{props.linkObject?.name}</h4>
              // </Link>
            ) : (
              <h2 className="mr-10">{props.linkObject?.name}</h2>
            )}
          <CaArrowRight />
          </div>
        ) : (
          <Link
            href={props.linkObject?.url}
            className={`flex ${
              props.isSubLink
                ? "text-base font-normal"
                : " text-2xl font-semibold"
            }`}
            onClick={() => setToggle(false)}
          >
            {props.linkObject?.name}
          </Link>
        )}
      </div>
    </motion.button>
  );
};

export default MenuLink;
