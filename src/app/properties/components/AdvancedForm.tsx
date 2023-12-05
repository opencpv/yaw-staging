"use client";
import { Form, Select } from "antd";
import React from "react";
import { VscSaveAll } from "react-icons/vsc";
import { PiArrowsDownUp } from "react-icons/pi";
import { HiSaveAs } from "react-icons/hi";
import { easeIn, motion } from "framer-motion";

type Props = {
  isActive: boolean;
};

const AdvancedForm = ({ isActive }: Props) => {
  const variants = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: 30, transitionEnd: { display: "none" } },
  };

  return (
    <motion.div
      variants={variants}
      animate={isActive ? "show" : "hide"}
      transition={{ duration: 0.4 }}
      className={` flex flex-col items-start justify-between gap-5 p-5 mt-16 bg-white shadow-xl max-xl:max-w-xl mx-auto xl:items-center xl:flex-row text-neutral-800 rounded-xl`}
    >
      <div className="flex flex-col items-start w-full gap-3 xl:w-[initial] xl:items-center xl:flex-row">
        <Form.Item className="w-full xl:w-32">
          <Select className="" defaultValue="Price">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-full xl:w-32">
          <Select className="" defaultValue="Beds">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-full xl:w-32">
          <Select className="" defaultValue="Types">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-full xl:w-32">
          <Select className="" defaultValue="Amenities">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-full xl:w-32">
          <Select className="" defaultValue="Move-In-Date">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-full xl:w-32">
          <Select className="" defaultValue="More">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2">
          Sort <PiArrowsDownUp className="text-[#21A19F]" />
        </button>
        <button className="flex items-center gap-2">
          Save this search <HiSaveAs className="text-[#21A19F]" />
        </button>
      </div>
    </motion.div>
  );
};

export default AdvancedForm;
