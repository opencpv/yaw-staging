import { Form, Select } from "antd";
import React from "react";
import { VscSaveAll } from "react-icons/vsc";
import { PiArrowsDownUp } from "react-icons/pi";
import { HiSaveAs } from "react-icons/hi";

type Props = {
    isActive: boolean;
};

const AdvancedForm = ({isActive}: Props) => {
  return (
    <div className={`${isActive ? "block" : "hidden" } flex flex-col items-start justify-between gap-5 p-5 mt-16 bg-white shadow-xl xl:items-center xl:flex-row text-neutral-800 rounded-xl`}>
      <Form className="flex flex-col items-start w-full gap-3 xl:w-[initial] xl:items-center xl:flex-row">
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
      </Form>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2">Sort <PiArrowsDownUp className="text-primary-800" /></button>
        <button className="flex items-center gap-2">Save this search <HiSaveAs className="text-primary-800" /></button>
      </div>
    </div>
  );
};

export default AdvancedForm;
