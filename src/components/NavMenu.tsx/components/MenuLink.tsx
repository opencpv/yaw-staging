import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

type Props = {
  active: boolean;
  linkObject: any; // TODO: get the correct type of linkObject
  onClick: () => void;
  isSubLink?: boolean;
};

const MenuLink = (props: Props) => {
  const { setToggle } = useMenuStore();

  return (
    <motion.button
      onClick={props.onClick}
      className={`transition-all hover:scale-105 ${
        props.isSubLink && "capitalize"
      }`}
    >
      <div
        className={`w-full cursor-pointer ${
          props.active ? "text-[#FCAB10]" : "text-[#fff]"
        }`}
      >
        {(props.isSubLink && props.linkObject.id) || props.linkObject?.sub ? (
          <div className="flex item-center">
            {props.isSubLink ? (
              <Link href={props.linkObject?.url}>
                <h4 className="mr-10 font-normal">{props.linkObject?.name}</h4>
              </Link>
            ) : (
              <h2 className="mr-10">{props.linkObject?.name}</h2>
            )}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto"
            >
              <path
                d="M12 16L16 12L12 8L10.6 9.4L12.2 11H8V13H12.2L10.6 14.6L12 16ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ) : (
          <Link
            href={props.linkObject?.url}
            className={`flex ${
              props.isSubLink
                ? "font-normal text-base"
                : "font-semibold text-2xl"
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
