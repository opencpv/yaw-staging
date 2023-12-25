"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import AdvancedForm from "./AdvancedForm";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";

type FilterOption =
  | "all"
  | "top rated"
  | "editor's choice"
  | "price drop"
  | "best value";

const TagsSelect = () => {
  const [isAdvancedActive, setIsAdvancedActive] = useState<boolean>(false);
  const [option, setOption] = useState<FilterOption>("all");

  const handleIsActive = () => {
    setIsAdvancedActive((prevState) => !prevState);
  };

  const changeFilterOption = (option: React.Key) => {
    setOption(option as FilterOption);
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <section className="flex flex-wrap items-center justify-center gap-8">
          <div className="">
            <OptionFilterTabs
              variant="gradient"
              options={[
                "all",
                "top rated",
                "editor's choice",
                "price drop",
                "best value",
              ]}
              selectedKey={option}
              onSelectionChange={changeFilterOption}
              radius="small"
            />
          </div>
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly className="bg-transparent">
                  <FaCaretDown className="text-[#21A19F]" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                className="text-neutral-800"
              >
                <DropdownItem key="no advanced fee">
                  No Advance Fee
                </DropdownItem>
                <DropdownItem key="no viewing fee">No Viewing Fee</DropdownItem>
                <DropdownItem key="family">Family</DropdownItem>
                <DropdownItem key="student">Student</DropdownItem>
                <DropdownItem key="expatriates">Expatriates</DropdownItem>
                <DropdownItem key="singles">Singles</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="">
              <Switch
                classNames={{
                  base: "group-data-[selected=true]:bg-accent-50",
                }}
                size="sm"
                color="warning"
                isSelected={isAdvancedActive}
                onValueChange={handleIsActive}
              />
              Advanced search
            </div>
          </div>
        </section>
        <AdvancedForm isActive={isAdvancedActive} />
      </div>
    </div>
  );
};

export default TagsSelect;
