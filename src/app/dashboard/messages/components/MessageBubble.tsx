import React from "react";
import style from "../Messages.module.css";
import { motion } from "framer-motion";

const MessageBubble = ({ content, time }: MessageInterface) => {
  const date = new Date(time);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date).toLowerCase();
  const messageBubbleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={messageBubbleVariants}
      className={`${style.messageBubble} flex flex-col self-end max-w-xl gap-1 p-3 pb-1 ml-10 xs:ml-20 bg-primary-300 text-neutral-800 rounded-2xl first:mt-auto`}
    >
      <p>{content}</p>
      <small className="text-sm text-end">{formattedTime}</small>
    </motion.div>
  );
};

export default MessageBubble;
