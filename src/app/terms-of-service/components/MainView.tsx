"use client";
import { useRouter } from "next/navigation";
import CaArrowBackLong from "../icons/CaArrowBackLong";
import RichTextRenderer from "@/components/__shared/RichTextRenderer";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const MainView = ({ data }: { data: any }) => {
  const router = useRouter();
  const { icons, images } = useAssets();

  return (
    <div className="flex h-full w-full flex-col items-center justify-between pt-8 lg:pt-16">


      <div className="flex w-full flex-col items-start justify-between gap-4 pt-8 lg:flex-row lg:items-center lg:pt-0">
        <div className="flex shrink-0 basis-[60%] flex-col items-start justify-center gap-4 text-white">
          <div className="mb-4 flex flex-col">
            <h1 className="leading-tight">{data.title}</h1>
            <h1 className="leading-tight">{data.subtitle}</h1>
          </div>
          <div className="max-w-[824px]">
            <RichTextRenderer content={data.description[0]} />
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default MainView;
