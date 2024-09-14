"use client";
import React, { useEffect, useState } from "react";
import { Tabs } from "@/components/__shared/ui/tabs";
import { FilterOptionArray } from "@/store/properties/usePropertiesStore";
import { useRouter, useSearchParams } from "next/navigation";
import capitalizeName from "@/lib/utils/stringManipulation";

const TagsSelect = () => {
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [isAdvancedActive, setIsAdvancedActive] = useState<boolean>(false);
  const tag = searchParams?.get("tag") || "All";
  const [filter, setFilter] = useState<string>(tag);
  const search = searchParams?.get("q") || "";
  const router = useRouter();
  const handleIsActive = () => {
    setIsAdvancedActive((prevState) => !prevState);
  };

  const filterOptionArray: FilterOptionArray = [
    "All",
    "Realtor's Choice",
    "Verified",
    "No Viewing Fee",
    "No Advance",
  ];

  useEffect(() => {
    if (tabsRef.current && location.href.includes("sk=true")) {
      tabsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div className="w-full justify-center px-5 sm:flex sm:px-0" ref={tabsRef}>
      <div className="hidden-scrollbar w-full overflow-x-auto">
        <section className="flex w-full flex-col flex-wrap items-center justify-center gap-8">
          <Tabs
            options={filterOptionArray}
            selectedKey={capitalizeName(filter)}
            onSelectionChange={(key) => {
              setFilter(key as string);
              router.replace(
                `?${new URLSearchParams({
                  q: search as string,
                  tag: key as string,
                })}`,
                {
                  scroll: false,
                },
              );
            }}
          />
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
              <Switch
                checked={isAdvancedActive}
                onCheckedChange={handleIsActive}
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
