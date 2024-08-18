"use client";
import { useState } from "react";
import { tagsData } from "./data";
import AboutTagsContent from "./AboutTagsContent";
import AboutTagsTitle from "./AboutTagsTitle";

function AboutOurTags() {
  const [option, setOption] = useState<any>(0);

  return (
    <div className="wrapper mt-10 flex flex-col gap-1 border-0 border-x-0 border-[#8A8A8A] bg-shade bg-[url('/assets/images/about/tag-bg-2.png')] bg-cover bg-center bg-no-repeat  sm:gap-5 lg:gap-10 2xl:mt-14">
      <h2 className="font-bold">Our Tags</h2>

      <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row">
        <div
          className="custom-scrollbar flex max-h-80 w-full max-w-[378px] basis-[20%] flex-row gap-2 overflow-y-auto rounded-xl border-[#EEE] sm:border-1  sm:p-3
          lg:flex-col lg:gap-3 2xl:basis-[30%] 
          "
        >
          {tagsData?.map((r: any, index: number) => (
            <div className="flex  w-fit flex-col gap-3 sm:w-full" key={index}>
              <button
                onClick={() => setOption(index)}
                key={index}
                title={r?.name}
              >
                <AboutTagsTitle key={index} data={r} active={option == index} />
              </button>
              {index != tagsData?.length - 1 && (
                <div className="hidden w-full border-b-[1px] border-[#EEE] lg:block"></div>
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
