import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

type Props = {
    className?: string;
};

const NoMessageState = ({className}: Props) => {
  const { icons } = useAssets();
  return (
    <div className={`flex flex-col items-center text-center gap-y-2 text-primary-400 ${className}`}>
      <motion.div whileInView={{ x: 0 }} initial={{ x: 20 }}>
        <Image
          src={icons.ChatIcon}
          alt="chat"
          width={80}
          height={90}
          className=""
        />
      </motion.div>
      <h1 className="text-2xl font-[700] mt-3">Messages</h1>
      <p className="">Send and receive messages with rentright</p>
      <p className="capitalize text-[#8DA5A4]">Happy messaging</p>
    </div>
  );
};

export default NoMessageState;
