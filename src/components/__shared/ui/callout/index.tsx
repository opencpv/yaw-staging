"use client";
import { cn } from "@/lib/utils";
import { BsInfoCircle } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../button";

type Props = {
  content?: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

/**
 *Displays a callout for user attention.
 */
export default function Callout({
  content,
  className,
  title,
  children,
}: Props) {
  const [show, setShow] = useState(true);

  const variants = {
    show: {
      opacity: 1,
      height: "auto",
    },
    hide: {
      opacity: 0,
      height: 0,
      display: "none",
      //transitionEnd: {
      //  display: "none",
      //},
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={show ? "show" : "hide"}
      className={cn(
        "flex w-full max-w-xl justify-between gap-10 rounded-2xl bg-info-bg p-4 font-[400] text-info shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-5 xsm:flex-row">
        <BsInfoCircle size={20} className="translate-y-0.5 xsm:shrink-0" />
        <div>
          {title && <h6 className="font-bold">{title}</h6>}
          <small>{content || children}</small>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="text-info">
        <LiaTimesSolid
          size={20}
          className="shrink-0"
          onClick={() => setShow(false)}
        />
      </Button>
    </motion.div>
  );
}
