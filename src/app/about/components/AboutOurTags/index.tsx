"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { tagsData } from "./data";
import AboutTagsContent from "./AboutTagsContent";

const tabColour = "#E7EFEF";

function AboutOurTags() {
  const [option, setOption] = useState<any>();
  return (
    <div className="wrapper">
      <div className="flex ">
        <Tabs
          variant="light"
          aria-label="Tabs variants"
          // radius="full"
          classNames={{
            base: " w-full md:w-fit rounded-xl p-3 md:overflow-hidden border-1 border-neutral-50",

            tabList: "flex flex-col gap-3 divide-y-1 divide-y-neutral-50 group-data-[selected=true]:divide-y-0",

            tab: " px-4 py-4 w-[378px] h-[72px] border-0",

            tabContent:
              "text-neutral-300 text-2xl group-data-[selected=true]:text-neutral-300  group-data-[selected=true]:font-semibold  capitalize",

            cursor: `bg-[#E7EFEF] dark:bg-[#E7EFEF] focus:border-0`,
          }}
          selectedKey={option}
          onSelectionChange={(selectedOption) => setOption(selectedOption)}
        >
          {tagsData?.map((r: any, index: number) => (
            <Tab key={index} title={r?.name}>
              <AboutTagsContent key={index} data={r} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default AboutOurTags;
