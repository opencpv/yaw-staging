"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import AdvancedForm from "./AdvancedForm";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import Toggle from "@/components/ui/Toggle";
import {
  FilterOption,
  FilterOptionArray,
  propertyFilterStore,
} from "@/store/properties/usePropertiesStore";

const TagsSelect = () => {
  const tabsRef = React.useRef<HTMLDivElement>(null);

  const [isAdvancedActive, setIsAdvancedActive] = useState<boolean>(false);
  const { filter, setFilter } = propertyFilterStore();
  const handleIsActive = () => {
    setIsAdvancedActive((prevState) => !prevState);
  };

  const filterOptionArray: FilterOptionArray = [
    "realtor's choice",
    "verified",
    "no viewing fee",
  ];

  useEffect(() => {
    if (tabsRef.current && location.href.includes("sk=true")) {
      tabsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div className="w-full justify-center px-5 sm:flex sm:px-0" ref={tabsRef}>
      <div className="w-full">
        <section className="flex w-full flex-col flex-wrap items-center justify-center gap-8 sm:w-[initial] sm:flex-row">
          <div className="w-full">
            <OptionFilterTabs
              variant="gradient"
              options={filterOptionArray}
              selectedKey={filter}
              onSelectionChange={(key) => setFilter(key as FilterOption)}
              radius="small"
            />
          </div>
          {/* !!! COMMENTED OUT FOR NOW */}

          {/* <div>
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
          </div> */}
          {/* <div className="flex items-center justify-center gap-2">
            <div className="">
              <Toggle
                isSelected={isAdvancedActive}
                onValueChange={handleIsActive}
                label="Advanced search"
              />
            </div>
          </div> */}
        </section>
        {/* <AdvancedForm isActive={isAdvancedActive} /> */}
      </div>
    </div>
  );
};

export default TagsSelect;
