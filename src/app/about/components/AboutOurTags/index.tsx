"use client";
import AboutTagsContent from "./AboutTagsContent";
import AboutTagsTitle from "./AboutTagsTitle";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function AboutOurTags({ data }: { data: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tag = searchParams?.get("tag") || "Guaranteed";
  const [selected, setSelected] = useState("Guaranteed" || tag);

  const handleClick = (tag: string) => {
    setSelected(tag);
    router.push(`?tag=${tag}`, { scroll: false });
  };

  useEffect(() => {
    if (tag) {
      setSelected(tag);
    }
  }, [tag]);

  return (
    <div className="wrapper mt-10 flex flex-col gap-1 border-0 border-x-0 border-[#8A8A8A] bg-shade bg-[url('/assets/images/about/tag-bg-2.png')] bg-cover bg-center bg-no-repeat sm:gap-5 lg:gap-10 2xl:mt-14">
      <h2 className="font-bold">Our Tags</h2>

      <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row">
        <div className="custom-scrollbar sm:border-1 flex max-h-80 w-full max-w-[378px] basis-[20%] flex-row gap-2 overflow-y-auto rounded-xl border-[#EEE] sm:p-3 lg:flex-col lg:gap-3 2xl:basis-[30%]">
          {data?.map((tag: any, index: number) => (
            <div className="flex w-fit flex-col gap-3 sm:w-full" key={tag._key}>
              <button
                onClick={() => handleClick(tag?.title)}
                title={tag?.title}
              >
                <AboutTagsTitle data={tag} active={selected === tag?.title} />
              </button>
              {index !== data?.length - 1 && (
                <div className="hidden w-full border-b-[1px] border-[#EEE] lg:block" />
              )}
            </div>
          ))}
        </div>

        <AboutTagsContent data={data?.find((r: any) => r?.title === tag)} />
      </div>
    </div>
  );
}

export default AboutOurTags;
