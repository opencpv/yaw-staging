import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import CaArrowRight from "./icons/CaArrowRight";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  active: boolean;
  linkObject: any; // TODO: get the correct type of linkObject
  onClick: () => void;
  isSubLink?: boolean;
  className?: string;
};

const MenuLink = (props: Props) => {
  const pathname = usePathname();
  const { setToggle } = useMenuStore();
  const { activeSubLink } = useMenuStore();
  const hasSubMenu =
    (props.isSubLink && props.linkObject.id) || props.linkObject?.sub;

  return (
    <motion.button
      onClick={props.onClick}
      className={`main-menu-link transition-all hover:scale-105 ${
        props.isSubLink && "capitalize"
      }`}
      tabIndex={hasSubMenu ? 0 : -1}
    >
      <div
        className={cn(
          `w-full cursor-pointer whitespace-nowrap text-white`,
          {
            "text-accent-100": props.active,
            "text-accent": pathname?.includes(props.linkObject?.url),
          },
          props.className,
        )}
      >
        {hasSubMenu ? (
          <div
            className={cn(`flex w-full items-center`, {
              "text-accent-100": activeSubLink == props.linkObject?.label,
            })}
          >
            {props.isSubLink ? (
              // <Link href={props.linkObject?.url}>
              <h4 className={`mr-10 font-normal`}>{props.linkObject?.name}</h4>
            ) : (
              // </Link>
              <h2 className="mr-10">{props.linkObject?.name}</h2>
            )}
            <CaArrowRight />
          </div>
        ) : (
          <Link
            href={props.linkObject?.url}
            className={cn(
              `flex text-2xl font-semibold`,
              {
                "text-base font-normal": props.isSubLink,
              },
              props.className,
            )}
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
