import React from "react";
import style from "../Messages.module.css";
import { motion } from "framer-motion";
import { MessageInterface } from "../../../../../interfaces";

const MessageBubble2 = ({ content, time }: MessageInterface) => {
  const messageBubbleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={messageBubbleVariants}
      className={`${style.messageBubble2} flex flex-col max-w-xl gap-1 p-3 pb-1 mr-10 w-fit xs:mr-20 bg-neutral-100 text-neutral-800 rounded-2xl first:mt-auto`}
    >
      <p>{content}</p>
      <small className="text-sm text-end">{time}</small>
    </motion.div>
  );
};

export default MessageBubble2;
