import React from "react";
import style from "../Messages.module.css";
import { motion } from "framer-motion";
import { MessageInterface } from "../../../../../interfaces";

const MessageBubble = ({ content, time, type }: MessageInterface) => {
  const date = new Date(time);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .toLowerCase();
  const messageBubbleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (type === "sender")
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={messageBubbleVariants}
        className={`${style.messageBubble} ml-10 flex max-w-xl flex-col gap-1 self-end rounded-2xl bg-primary-300 p-3 pb-1 text-neutral-800 first:mt-auto xs:ml-20`}
      >
        <p>{content}</p>
        <small className="text-end text-sm">{formattedTime}</small>
      </motion.div>
    );
  else
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={messageBubbleVariants}
        className={`${style.messageBubble} mr-10 flex w-fit max-w-xl flex-col gap-1 rounded-2xl bg-neutral-100 p-3 pb-1 text-neutral-800 first:mt-auto xs:mr-20`}
      >
        <p>{content}</p>
        <small className="text-end text-sm">{formattedTime}</small>
      </motion.div>
    );
};

export default MessageBubble;
