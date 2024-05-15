"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { tagsData } from "./data";
import AboutTagsContent from "./AboutTagsContent";
import AboutTagsTitle from "./AboutTagsTitle";

function AboutOurTags() {
  const [option, setOption] = useState<any>(0);
  return (
    <div className="wrapper mt-10 2xl:mt-14 flex flex-col gap-1 sm:gap-5 lg:gap-10 bg-[url('/assets/images/about/tag-bg-2.png')] bg-center bg-cover bg-no-repeat bg-[#F8F8F8] lg:bg-transparent border-1 border-[#8A8A8A] border-x-0">
      <h2 className="text-lg md:text-3xl lg:text-3xl 2xl:text-5xl font-bold">Our Tags</h2>

      <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row">
        <div
          className="
              flex w-full max-w-[378px] basis-[20%] flex-row gap-2 rounded-xl sm:border-1 border-neutral-50  sm:p-3
          lg:flex-col lg:gap-3 2xl:basis-[30%] 
          "
        >
          {tagsData?.map((r: any, index: number) => (
            <div className="flex  w-fit sm:w-full flex-col gap-3" key={index}>
              <button
                onClick={() => setOption(index)}
                key={index}
                title={r?.name}
              >
                <AboutTagsTitle key={index} data={r} active={option == index} />
              </button>
              {index != tagsData?.length - 1 && (
                <div className="hidden lg:block w-full border-b-[1px] border-neutral-50"></div>
              )}
            </div>
          ))}
        </div>

        <AboutTagsContent data={tagsData[option]} />
      </div>
    </div>
  );
}

export default AboutOurTags;
