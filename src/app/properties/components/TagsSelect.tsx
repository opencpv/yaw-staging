import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";

type Props = {};

const TagsSelect = (props: Props) => {
  return (
    <section className="grid gap-4 lg:justify-center lg:items-center lg:grid-cols-6 xl:grid-cols-7">
      <div className="w-full cursor-pointer text-white p-4 text-center lg:w-40 font-[600] bg-gradient-to-r rounded-xl from-[#21A19F] to-[#1EA9A6A1]">
        All
      </div>
      <div className="cursor-pointer lg:text-center">Top Rated</div>
      <div className="cursor-pointer lg:text-center">Editor&apos;s choice</div>
      <div className="cursor-pointer lg:text-center">Price Drop</div>
      <div className="cursor-pointer lg:text-center">Best Value</div>
      <div>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly className="bg-transparent">
              <FaCaretDown className="text-[#21A19F]" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="text-neutral-800">
            <DropdownItem key="new">No Advance Fee</DropdownItem>
            <DropdownItem key="new">No Viewing Fee</DropdownItem>
            <DropdownItem key="copy">Family</DropdownItem>
            <DropdownItem key="copy">Student</DropdownItem>
            <DropdownItem key="copy">Expatriates</DropdownItem>
            <DropdownItem key="edit">Singles</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex items-center justify-center w-full gap-2 mx-auto">
        <div className="">
          <Switch size="sm" color="warning" />
          Advanced search
        </div>
      </div>
    </section>
  );
};

export default TagsSelect;
